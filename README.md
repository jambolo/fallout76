# fallout76
Fallout 76 tools using Node and implemented in Coffeescript

## base-weapons-dps
Displays base dps for all weapons based on data scraped from [akarnokd/rng-76](https://github.com/akarnokd/rng-76)

#### Command syntax

    base-weapons-dps [--level <n>] [--type <name>] [--category <name>] [--weapon <name>] [--json] [--csv]

#### Options

| Option         | Description |
|----------------|-------------|
| --level, -l    | List only dps for the best weapon that can be equipped by a player at this level |
| --type, -t     | Display only weapons of this type |
| --category, -c | Display only weapons in this category |
| --weapon, -w   | Display only this weapon |
| --json         | Output the results in JSON format |
| --csv          | Output the results in CSV format |

## convert-weapon-wiki-to-json
Converts the weapon information from the [Fallout Wiki](https://fallout.fandom.com/wiki/Fallout_76_weapons) to JSON

#### Command syntax

    convert-weapon-wiki-to-json [--debug <n>] <type> <inpath> <outpath>

#### Options

| Option         | Description |
|----------------|-------------|
| --debug, -d    | Dumps the current state of the conversion at the desired stage |

#### Parameters

| Parameter | Description |
|-----------|-------------|
| type      | Type of weapon table. One of "ranged", "melee", or "explosives" |
| inpath    | Wiki input file path |
| outpath   | JSON output file path |
