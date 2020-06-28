# Converts the weapon information from the Fallout Wiki (https://fallout.fandom.com/wiki/Fallout_76_weapons) to JSON
#
# Command syntax:
#
#     convert-weapon-wiki-to-json [--debug <n>] <type> <inpath> <outpath>
#
# Parameters:
#
#     type -      Type of weapon table. One of "ranged", "melee", or "explosives"
#     inpath -    Wiki input file path
#     outpath -   JSON output file path
#
# Options:
#
#     --debug <n> - Dumps the current state of the conversion at the desired stage.

yargs = require "yargs"
fs = require "fs"

args = yargs
  .usage "$0 [--debug <n>] <type> <inpath> <outpath>", "Converts the weapon information from the Fallout Wiki to JSON", (args) ->
    args
      .positional "type", {
        type: "string"
        choices: ["ranged", "melee", "explosives"]
        describe: "Weapon table type"
      }
      .positional "inpath", {
        type: "string"
        describe: "Wiki input file path"
      }
      .positional "outpath", {
        type: "string"
        describe: "JSON output file path"
      }
  .option "debug", {
    type: "number"
    describe: "Dumps the current state of the conversion at the desired stage."
    alias: "d"
    default: 0
  }
  .check (argv) ->
    if argv.debug < 0 or argv.debug > 10
      throw new Error "The stage must be between 0 and 10."
    return true
  .help()
  .version()
  .argv

console.log "args = " + JSON.stringify(args) if args.debug > 0

linkText = (link) ->
  results = link.match(/(?<=\[\[.+\|).+(?=\]\])/)               # Matches the link text if there is any
  results = link.match(/(?<=\[\[).+(?=\]\])/) if not results?   # Otherwise, matches the link
  return if results? then results[0] else null

groupIntoRows = (lines) ->
  # Rows are marked with lines that start with "|-"

  rows = []
  row = []

  # Make sure the first line starts a row
  if not RegExp("^\\|-").test(lines[0])
    console.error "There are extra (or missing) lines before the first row."
    console.error "=> \"" + lines[0] + "\""
    process.exit 1

  for line in lines[1..]
    if RegExp("^\\|-").test(line)
      rows.push row
      row = []
    else
      row.push line
  rows.push row
  return rows

newWeapon = (row) ->
  name = linkText(row[1])
  switch args.type
    when "ranged"
      ammo = linkText(row[11])
#      id = row[16].toLowerCase()
#    when "melee"
#      id = row[10].toLowerCase()
#    when "explosives"
#      id = row[5].toLowerCase()
  id = row[row.length-1].toLowerCase()

  # Since the first two columns and the id column are no longer needed and they don't exist in other rows, remove them
  row.splice(0, 2) # Remove 1st and name column
  row.splice(-1, 1) # Remove the id column

  weapon = { name, levels: [], id }
  weapon.ammo = ammo if args.type == "ranged"
  return weapon

groupIntoWeapons = (rows) ->
  # Weapons are marked with a first column that has the substring "link="

  weapons = {}
  duplicates = {}

  # Make sure the first row starts a weapon
  if not RegExp("File\\:", "i").test(rows[0][0])
    console.error "There are extra (or missing) rows before the first row of a weapon."
    console.error "=> \"" + rows[0] + "\""
    process.exit 1

  # Process the first row
  weapon = newWeapon(rows[0])
  weapon.levels.push rows[0]

  for row in rows[1..]
    if RegExp("File\\:", "i").test(row[0])
      if not weapons[weapon.id]?
        weapons[weapon.id] = weapon
      else
        duplicates[weapon.id] = weapon
      weapon = newWeapon(row)
    weapon.levels.push row

  weapons[weapon.id] = weapon
  return [ weapons, duplicates ]

damageComponents = (string) ->
  damage = {}
  tokens = string.split(/\s*\+\s*/)
  for token in tokens
    parts = token.match(/\s*(-?\d+)(?:\s*\&(\w+)\&)?/)
    if parts?
      if (parts[2]?)
          damage[parts[2]] = Number(parts[1])
        else 
          damage["ballistic"] = Number(parts[1])
    else
      console.error "Couldn't parse this damage string: '#{string}'"
  return damage

# ===== MAIN =====

fs.readFile args.inpath, (err, input) ->
  throw err if err

  converted = input.toString()

  console.log "converted = #{JSON.stringify(converted, null, 2)}" if --args.debug == 0

  # Convert line endings to ~ to make replace work (?)
  converted = converted.replace(/\r\n|\r|\n/g, "~")

  # Remove {{...}} except IDs and weapon damage
  converted = converted.replace(/\{\{ID\|([a-f0-9A-F]+)\}\}/gi, "$1")
  converted = converted.replace(/\{\{Icon\|attack\}\}/gi, "&ballistic&")
  converted = converted.replace(/\{\{Icon\|energy\}\}/gi, "&energy&")
  converted = converted.replace(/\{\{Icon\|radiation\}\}/gi, "&radiation&")
  converted = converted.replace(/\{\{Icon\|fire\}\}/gi, "&fire&")
  converted = converted.replace(/\{\{.+?\}\}/g, "")

  # Convert ? to -1
  converted = converted.replace(/\?/g, "-1")

  # Remove rowspans
  converted = converted.replace(/rowspan=".+?"\s*\|\s*/gi, "")

  console.log "converted = #{JSON.stringify(converted, null, 2)}" if --args.debug == 0
  
  # Split into an array of line (after removing blank lines first)
  converted = converted.replace(/~~+/g, "~")
  lines = converted.split(/~/)

  console.log "lines = #{JSON.stringify(lines, null, 2)}" if --args.debug == 0
  
  # Remove anything before the table
  extra = 0
  while lines[extra]? and not RegExp("\\{\\|").test(lines[extra])
    ++extra
  lines.splice 0, extra if extra > 0

  console.log "lines = #{JSON.stringify(lines, null, 2)}" if --args.debug == 0

  # Remove the table start and headings and table end
  switch args.type
    when "ranged" then lines = lines[18...-2]
    when "melee" then lines = lines[14...-2]
    when "explosives" then lines = lines[10...-2]

  console.log "lines = #{JSON.stringify(lines, null, 2)}" if --args.debug == 0

  # Get rid of the "| " at the beginning of each line that has one
  for i in [0...lines.length]
    lines[i] = lines[i].replace(/\| /, "")

  # plasma-weapons has an empty row, so filter out empty rows
  lines = lines.filter (line) ->
    line != "|-"

  console.log "lines = #{JSON.stringify(lines, null, 2)}" if --args.debug == 0

  # Group into rows.
  rows = groupIntoRows(lines)

  console.log "rows = #{JSON.stringify(rows, null, 2)}" if --args.debug == 0

  # Group into weapons.
  [weapons, duplicates] = groupIntoWeapons(rows)

  console.log "{ weapons, duplicates } = #{JSON.stringify({ weapons, duplicates }, null, 2)}" if --args.debug == 0

  # Massage level entries into maps and exclude uneccessary values
  for id, weapon of weapons
    for level, i in weapon.levels
      switch args.type
        when "ranged"
          weapon.levels[i] = 
            level: Number(level[0])
            rawDamage: level[1]
            speed: Number(level[3])
            range: Number(level[4])
            accuracy: Number(level[5])
            rawCrit: level[6]
            actionCost: Number(level[7])
            capacity: Number(level[10])
            weight: Number(level[11])
            value: Number(level[12])
        when "melee"
          weapon.levels[i] = 
            level: Number(level[0])
            rawDamage: level[1]
            speed: level[3]
            rawCrit: level[4]
            actionCost: Number(level[5])
            weight: Number(level[7])
            value: Number(level[8])
        when "explosives"
          weapon.levels[i] = 
            rawDamage: level[0]
            area: level[1]
            weight: Number(level[2])
            value: Number(level[3])

  console.log "weapons = #{JSON.stringify(weapons, null, 2)}" if --args.debug == 0

  # Parse "raw" damage into component damages

  for id, weapon of weapons
    for level, i in weapon.levels
      if level.rawDamage?
        level.damage = damageComponents(level.rawDamage)
        delete level.rawDamage
      if level.rawCrit?
        level.crit = damageComponents(level.rawCrit)
        delete level.rawCrit

  console.log "weapons = #{JSON.stringify(weapons, null, 2)}" if --args.debug == 0

  # Output the statistics
  console.log "Found #{lines.length} lines, #{rows.length} rows, #{Object.keys(weapons).length} weapons, plus #{Object.keys(duplicates).length} duplicated IDs (#{Object.keys(duplicates)})."

  output = JSON.stringify(weapons, null, 2)

  newFile = fs.writeFile args.outpath, output, (err) ->
    throw err if (err)
