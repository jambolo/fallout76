# Converts the weapon information from the Fallout Wiki (https://fallout.fandom.com/wiki/Fallout_76_weapons) to JSON
#
# Command syntax:
#
#     convert-weapon-mods-wiki-to-json [--debug <n>] <inpath> <outpath>
#
# Parameters:
#
#     inpath -    Wiki input file path
#     outpath -   JSON output file path
#
# Options:
#
#     --debug <n> - Dumps the current state of the conversion at the desired stage.

yargs = require "yargs"
fs = require "fs"

args = yargs
  .usage "$0 [--debug <n>] <inpath> <outpath>", "Converts the weapon information from the Fallout Wiki to JSON", (args) ->
    args
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

damageByType = (text) ->
  damage = {}
  tokens = text.split(/<br\s*\/>/)
  for token in tokens
    if RegExp("\\&\\w+\\&").test(token)
      parts = token.match(/\&(\w+)\&\s*((?:\+|\-)?\d+)/)
      if parts?
        damage[parts[1]] = Number(parts[2])
      else
        console.error "Couldn't parse this damage string: '#{text}'"
    else
      parts = token.match(/(?:\+|\-)?\d+/)
      if parts?
        damage["ballistic"] = Number(parts[0])
      else
        console.error "Couldn't parse this damage string: '#{text}'"
  return damage

resourcesByName = (text) ->
  resources = {}
  components = text.split(/<br\s*\/>/)

  # Some resources are lists as "None"
  if components.length == 1 and components[0] == "None"
    return resources

  for c in components
    parts = c.match(/(.+?)\s*x(\d+)/)
    if parts?
      resources[parts[1].toLowerCase()] = Number(parts[2])
    else
      console.error "Couldn't parse this resources string: '#{text}'"

  return resources

extractSlots = (text) ->
  slots = {}
  re = /\{\{Weapon mod FO76\|start\|slot=(.+?)\}\}.*?~+?(.*?)~\{\{Weapon mod FO76\|end\}\}/g
  tableMatch = re.exec(text)
  while tableMatch
    slots[tableMatch[1].toLowerCase()] = extractMods(tableMatch[2])
    tableMatch = re.exec(text)
  return slots

extractMods = (text) ->
  mods = []
  re = /\{\{Weapon mod FO76\|row(.*?~)\}\}/g
  rowMatch = re.exec(text)
  while rowMatch
    mods.push extractAttributes(rowMatch[1])
    rowMatch = re.exec(text)
  return mods

extractAttributes = (text) ->
  attributes = {}
  re = /\|([\w\s]+?)\s*\=(.*?)~/g
  elementMatch = re.exec(text)
  while elementMatch
    key = elementMatch[1].toLowerCase()
    value = elementMatch[2]
    # Only include non-empty attributes
    if value.length > 0
      # Massage attributes:
      #   1. Rename keys to better names or to match those in convert-weapon-wiki-to-json.coffee
      #   2. Some attributes are numbers
      #   3. Damage must be converted to component values
      #   4. Multiple resources
      switch key
        when "base id"
          key = "id"
        when "mod"
          key = "name"
        when "desc"
          key = "description"
        when "spread"
          key = "accuracy"
          value = Number(value)
        when "range", "weight", "value"
          value = Number(value)
        when "magazine"
          key = "capacity"
          value = Number(value)
        when "damage"
          value = damageByType(value)
        when "components"
          key = "resources"
          value = resourcesByName(value)
      attributes[key] = value
    elementMatch = re.exec(text)
  return attributes

# ===== MAIN =====

fs.readFile args.inpath, (err, input) ->
  throw err if err

  converted = input.toString()

  console.log "converted = #{JSON.stringify(converted, null, 2)}" if --args.debug == 0

  # Convert line endings to ~ to make replace work (?)
  converted = converted.replace(/\r\n|\r|\n/g, "~")

  # Remove links
  converted = converted.replace(/\[\[([^\|]+?)\]\]/gi, "$1")       # Replaces any link without text with the url
  converted = converted.replace(/\[\[(?:.+?)\|(.+?)\]\]/gi, "$1")  # Replaces any link with text with the text

  # Remove {{...}} from IDs and weapon damage icons, and remove atom icons completely
  converted = converted.replace(/\{\{ID\|([a-f0-9A-F]*)\}\}/gi, "$1")
  converted = converted.replace(/\{\{Icon\|attack\}\}/gi, "&ballistic&")
  converted = converted.replace(/\{\{Icon\|energy\}\}/gi, "&energy&")
  converted = converted.replace(/\{\{Icon\|radiation\}\}/gi, "&radiation&")
  converted = converted.replace(/\{\{Icon\|fire\}\}/gi, "&fire&")
  converted = converted.replace(/\s*\{\{Icon\|atom\}\}/gi, "")

  # Convert ? to -1
  converted = converted.replace(/\?/g, "-1")

  console.log "converted = #{JSON.stringify(converted, null, 2)}" if --args.debug == 0

  mods = extractSlots(converted)
  console.log "mods = #{JSON.stringify(mods, null, 2)}" if --args.debug == 0

  output = JSON.stringify(mods, null, 2)

  newFile = fs.writeFile args.outpath, output, (err) ->
    throw err if (err)
