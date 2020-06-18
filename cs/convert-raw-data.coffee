fs = require "fs"

fs.readFile "data/weapons-raw.json", (err, input) ->
  throw err if err

  rawDb = JSON.parse(input)
  newDb = {}

  # 1. Reorg db with the following structure:
  #       {
  #           <type>: {
  #               <category>: {
  #                   <weapon>: { ... },
  #                   ...
  #               },
  #               ...
  #           },
  #           ...
  #       }
  # 2. Add the type to each weapon with the key "type"

  for typeName, type of rawDb
    newDb[typeName] = {} if not newDb[typeName]?
    for weapon in type
      weapon["type"] = typeName
      newDb[typeName][weapon.category] = {} if not newDb[typeName][weapon.category]?
      newDb[typeName][weapon.category][weapon.name] = weapon

  output = JSON.stringify(newDb, null, 2)
  newFile = fs.writeFile "data/weapons.json", output, (err) ->
    throw err if (err)
