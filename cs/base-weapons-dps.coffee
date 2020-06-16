# Displays base dps for all weapons
#
# Command syntax:
#
#     base-weapons-dps [--level <n>] [--type <name>] [--category <name>] [--weapon <name>] [--json] [--csv]
#
# Options:
#
#   --level <n>         List only dps for the best weapon that can be equipped by a player at this level
#   --type <name>       Display only weapons of this type
#   --category <name>   Display only weapons in this category
#   --weapon <name>     Display only this weapon
#   --json              Output the results in JSON format
#   --csv               Output the results in CSV format

yargs = require "yargs"
fs = require "fs"

args = yargs
  .usage "$0", "Displays base dps for all weapons"
  .help()
  .version()
  .option "level", {
    type: "number"
    alias: "l"
    describe: "List dps only for the best weapons that can be equipped by a player at this level"
  }
  .option "type", {
    type: "string"
    conflicts: ["category", "weapon"]
    alias: "t"
    describe: "Display only weapons of this type"
  }
  .option "category", {
    type: "string"
    conflicts: ["type", "weapon"]
    alias: "c"
    describe: "Display only weapons in this category"
  }
  .option "weapon", {
    type: "string"
    conflicts: ["type", "category"]
    alias: "w"
    describe: "Display only this weapon"
  }
  .option "json", {
    type: "boolean"
    describe: "Output the results in JSON format"
    conflicts: "csv"
  }
  .option "csv", {
    type: "boolean"
    describe: "Output the results in CSV format"
    conflicts: "json"
  }
  .check (argv) ->
    if argv.level? and (argv.level < 1 or argv.level > 50)
      throw new Error "The level must be between 1 and 50"
    return true
  .argv

atMost = (a, max) ->
  for x, i in a
    if (not result? or x > a[result]) and x <= max
      result = i 
  return result

indented = ""
indent = () ->
  indented = indented.concat("  ")

outdent = () ->
  indented = indented.slice(2)

dps = (weapon, i) ->
  ballistic = if weapon.damage[i]? then weapon.damage[i] * weapon.speed else 0
  energy = if weapon.damageEnergy? then weapon.damageEnergy[i] * weapon.speed else 0
  radiation = if weapon.damageRadiation? then weapon.damageRadiation[i] * weapon.speed else 0
  total = ballistic + energy + radiation
  return [Math.round(ballistic), Math.round(energy), Math.round(radiation), Math.round(total)]

dpsString = (weapon, i) ->
  [b, e, r, t] = dps(weapon, i)
  return Number(t).toString().padStart(4) + " (#{b}/#{e}/#{r})"


fs.readFile "data/weapons.json", (err, data) ->
  throw err if err
  db = JSON.parse(data)

  # JSON output
  if args.json
    out = {}
    for typeName, type of db
      if not args.type? or typeName is args.type
        for categoryName, category of type
          if not args.category? or categoryName is args.category
            for weaponName, weapon of category
              if not args.weapon? or weaponName is args.weapon
                if args.level?
                  i = atMost(weapon.level, args.level)
                  if i?
                    [b, e, r, t] = dps(weapon, i)
                    out[typeName] = {} if not out[typeName]?
                    out[typeName][categoryName] = {} if not out[typeName][categoryName]?
                    out[typeName][categoryName][weaponName] = [] if not out[typeName][categoryName][weaponName]?
                    out[typeName][categoryName][weaponName].push {
                      level: weapon.level[i]
                      ballisticDamage: b
                      energyDamage: e
                      radiationDamage: r
                      totalDamage: t
                    }
                else
                  for level, i in weapon.level
                    [b, e, r, t] = dps(weapon, i)
                    out[typeName] = {} if not out[typeName]?
                    out[typeName][categoryName] = {} if not out[typeName][categoryName]?
                    out[typeName][categoryName][weaponName] = [] if not out[typeName][categoryName][weaponName]?
                    out[typeName][categoryName][weaponName].push {
                      level: weapon.level[i]
                      ballisticDamage: b
                      energyDamage: e
                      radiationDamage: r
                      totalDamage: t
                    }
    console.log JSON.stringify(out)

  # CSV output
  else if args.csv
    console.log "\"Type\",\"Category\",\"Name\",\"Level\",\"Ballistic Damage\",\"Energy Damage\",\"Radiation Damage\",\"Total Damage\""
    for typeName, type of db
      if not args.type? or typeName is args.type
        for categoryName, category of type
          if not args.category? or categoryName is args.category
            for weaponName, weapon of category
              if not args.weapon? or weaponName is args.weapon
                if args.level?
                  i = atMost(weapon.level, args.level)
                  if i?
                    [b, e, r, t] = dps(weapon, i)
                    console.log "\"#{typeName}\",\"#{categoryName}\",#{weaponName}\",#{weapon.level[i]},#{b},#{e},#{r},#{t}"
                else
                  for level, i in weapon.level
                    [b, e, r, t] = dps(weapon, i)
                    console.log "\"#{typeName}\",\"#{categoryName}\",#{weaponName}\",#{level},#{b},#{e},#{r},#{t}"

  # Formatted text output
  else
    for typeName, type of db
      if not args.type? or typeName is args.type
        if not args.category? and not args.weapon?
          console.log "#{typeName}:"
          indent()
        for categoryName, category of type
          if not args.category? or categoryName is args.category
            if not args.weapon?
              console.log indented + "#{categoryName}:"
              indent()
            for weaponName, weapon of category
              if not args.weapon? or weaponName is args.weapon
                if args.level > 0
                  i = atMost(weapon.level, args.level)
                  if i?
                    console.log indented + String("#{weaponName}(#{weapon.level[i]}):").padEnd(32) + dpsString(weapon, i)
                else
                  console.log indented + "#{weaponName}:"
                  indent()
                  for level, i in weapon.level
                    console.log indented + Number(level).toString().padStart(2) + ": " + dpsString(weapon, i)
                  outdent()
            if not args.weapon?
              outdent()
        if not args.category? and not args.weapon?
          outdent()
