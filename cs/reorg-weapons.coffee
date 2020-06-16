fs = require "fs"
input = ""
oldFile = fs.createReadStream("old-weapons.json")
oldFile.on "data", (chunk) ->
  input = input + chunk.toString()
oldFile.on "end", () ->
  oldDb = JSON.parse(input)
  newDb = {}
  for typeId, type of oldDb
    newDb[typeId] = {} if not newDb[typeId]?
    for weapon in type
      weapon["type"] = typeId
      newDb[typeId][weapon.category] = [] if not newDb[typeId][weapon.category]?
      newDb[typeId][weapon.category].push weapon

  newFile = fs.createWriteStream("weapons.json")
  newFile.write JSON.stringify(newDb, null, 2)
  newFile.end()
