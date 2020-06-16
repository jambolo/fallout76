# Displays base dps for all weapons
#
# Command syntax:
#
#     base-weapons-dps [--level n]
#
# Options:
#
#   --level - List only dps for the best weapon that can be equipped by a player at this level

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

totalDamage = (weapon, i) ->
  total = weapon.damage[i]
  total += weapon.damageEnergy[i] if weapon.damageEnergy? 
  total += weapon.damageRadiation[i] if weapon.damageRadiation?
  return total

fs.readFile "data/weapons.json", (err, data) ->
  throw err if err
  db = JSON.parse(data)
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
                  console.log indented + "#{weaponName}(#{weapon.level[i]}): #{Number(totalDamage(weapon, i)*weapon.speed).toFixed(0)}"
              else
                console.log indented + "#{weaponName}:"
                for level, i in weapon.level
                  console.log indented + "  #{level}: #{Number(totalDamage(weapon, i)*weapon.speed).toFixed(0)}"
          if not args.weapon?
            outdent()
      if not args.category? and not args.weapon?
        outdent()
