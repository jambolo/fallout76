fs = require "fs"

fs.readFile "data/old-weapons.json", (err, input) ->
  throw err if err

  oldDb = JSON.parse(input)
  newDb = {}
  for typeName, type of oldDb
    newDb[typeName] = {}
    for categoryName, category of type
      newDb[typeName][categoryName] = {}
      for weapon in category
        newDb[typeName][categoryName][weapon.name] = weapon

  output = JSON.stringify(newDb, null, 2)
  fs.writeFile "data/weapons.json", output, (err) ->
    throw err if err

