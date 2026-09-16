import type { HisuiRegionId } from './hisuiRegions'

export type LaSpawnTime = 'any' | 'day' | 'night'
export type LaSpawnMethod = 'ground' | 'water' | 'air' | 'tree' | 'ore'

export type LaPokemonSpawn = {
  id: string
  name: string
  dex: number
  time: LaSpawnTime
  method: LaSpawnMethod
  /** Fixed / guaranteed alpha spawn */
  alpha?: boolean
}

export type LaSubregionSpawns = {
  regionId: HisuiRegionId
  subregionId: string
  pokemon: LaPokemonSpawn[]
}

/** Wild spawns aggregated to Hisui subregions (from PLA datamined spawn maps). */
export const LA_SUBREGION_SPAWNS: LaSubregionSpawns[] = [
  {
    "regionId": "obsidian",
    "subregionId": "fieldlands-camp",
    "pokemon": [
      {
        "id": "shinx",
        "name": "Shinx",
        "dex": 403,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "obsidian",
    "subregionId": "heights-camp",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "starly",
        "name": "Starly",
        "dex": 396,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staravia",
        "name": "Staravia",
        "dex": 397,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "obsidian",
    "subregionId": "aspiration-hill",
    "pokemon": [
      {
        "id": "pichu",
        "name": "Pichu",
        "dex": 172,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "wurmple",
        "name": "Wurmple",
        "dex": 265,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "silcoon",
        "name": "Silcoon",
        "dex": 266,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "cascoon",
        "name": "Cascoon",
        "dex": 268,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "starly",
        "name": "Starly",
        "dex": 396,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "bidoof",
        "name": "Bidoof",
        "dex": 399,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "shinx",
        "name": "Shinx",
        "dex": 403,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "obsidian",
    "subregionId": "horseshoe-plains",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "ponyta",
        "name": "Ponyta",
        "dex": 77,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "rapidash-alpha",
        "name": "Rapidash",
        "dex": 78,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "eevee",
        "name": "Eevee",
        "dex": 133,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "wurmple",
        "name": "Wurmple",
        "dex": 265,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "starly",
        "name": "Starly",
        "dex": 396,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "bidoof",
        "name": "Bidoof",
        "dex": 399,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "buizel",
        "name": "Buizel",
        "dex": 418,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "mime-jr",
        "name": "Mime Jr",
        "dex": 439,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "obsidian",
    "subregionId": "deertrack-path",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "chimchar",
        "name": "Chimchar",
        "dex": 390,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "monferno",
        "name": "Monferno",
        "dex": 391,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "starly",
        "name": "Starly",
        "dex": 396,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staravia",
        "name": "Staravia",
        "dex": 397,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "kricketot",
        "name": "Kricketot",
        "dex": 401,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "buizel",
        "name": "Buizel",
        "dex": 418,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "munchlax",
        "name": "Munchlax",
        "dex": 446,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "obsidian",
    "subregionId": "deertrack-heights",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "paras",
        "name": "Paras",
        "dex": 46,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "parasect-alpha",
        "name": "Parasect",
        "dex": 47,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "stantler",
        "name": "Stantler",
        "dex": 234,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "stantler-alpha",
        "name": "Stantler",
        "dex": 234,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "chimchar",
        "name": "Chimchar",
        "dex": 390,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "monferno",
        "name": "Monferno",
        "dex": 391,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "starly",
        "name": "Starly",
        "dex": 396,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staravia",
        "name": "Staravia",
        "dex": 397,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "kricketot",
        "name": "Kricketot",
        "dex": 401,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "shinx",
        "name": "Shinx",
        "dex": 403,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "obsidian",
    "subregionId": "windswept-run",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "abra",
        "name": "Abra",
        "dex": 63,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kadabra",
        "name": "Kadabra",
        "dex": 64,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "snorlax-alpha",
        "name": "Snorlax",
        "dex": 143,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "aipom",
        "name": "Aipom",
        "dex": 190,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "starly",
        "name": "Starly",
        "dex": 396,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staravia",
        "name": "Staravia",
        "dex": 397,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staravia-alpha",
        "name": "Staravia",
        "dex": 397,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "kricketot",
        "name": "Kricketot",
        "dex": 401,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kricketune",
        "name": "Kricketune",
        "dex": 402,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "luxio",
        "name": "Luxio",
        "dex": 404,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "luxray",
        "name": "Luxray",
        "dex": 405,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "buizel",
        "name": "Buizel",
        "dex": 418,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "munchlax",
        "name": "Munchlax",
        "dex": 446,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "obsidian",
    "subregionId": "worn-bridge",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler-alpha",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "magikarp",
        "name": "Magikarp",
        "dex": 129,
        "time": "any",
        "method": "water"
      },
      {
        "id": "stantler",
        "name": "Stantler",
        "dex": 234,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "wurmple",
        "name": "Wurmple",
        "dex": 265,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "starly",
        "name": "Starly",
        "dex": 396,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staravia",
        "name": "Staravia",
        "dex": 397,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "shinx",
        "name": "Shinx",
        "dex": 403,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "buizel",
        "name": "Buizel",
        "dex": 418,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "floatzel-alpha",
        "name": "Floatzel",
        "dex": 419,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "mime-jr",
        "name": "Mime Jr",
        "dex": 439,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "obsidian",
    "subregionId": "nature-pantry",
    "pokemon": [
      {
        "id": "pikachu",
        "name": "Pikachu",
        "dex": 25,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "paras",
        "name": "Paras",
        "dex": 46,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "pichu",
        "name": "Pichu",
        "dex": 172,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "starly",
        "name": "Starly",
        "dex": 396,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staravia",
        "name": "Staravia",
        "dex": 397,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "bidoof",
        "name": "Bidoof",
        "dex": 399,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bibarel",
        "name": "Bibarel",
        "dex": 400,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kricketot",
        "name": "Kricketot",
        "dex": 401,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kricketune",
        "name": "Kricketune",
        "dex": 402,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kricketune-alpha",
        "name": "Kricketune",
        "dex": 402,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      }
    ]
  },
  {
    "regionId": "obsidian",
    "subregionId": "obsidian-falls",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "machop",
        "name": "Machop",
        "dex": 66,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "machoke",
        "name": "Machoke",
        "dex": 67,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "chansey",
        "name": "Chansey",
        "dex": 113,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "magikarp",
        "name": "Magikarp",
        "dex": 129,
        "time": "any",
        "method": "water"
      },
      {
        "id": "gyarados",
        "name": "Gyarados",
        "dex": 130,
        "time": "any",
        "method": "air"
      },
      {
        "id": "blissey-alpha",
        "name": "Blissey",
        "dex": 242,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "happiny",
        "name": "Happiny",
        "dex": 440,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "obsidian",
    "subregionId": "oreburrow-tunnel",
    "pokemon": [
      {
        "id": "pikachu",
        "name": "Pikachu",
        "dex": 25,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat-alpha",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "machop",
        "name": "Machop",
        "dex": 66,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "machoke",
        "name": "Machoke",
        "dex": 67,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "chansey",
        "name": "Chansey",
        "dex": 113,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "magikarp",
        "name": "Magikarp",
        "dex": 129,
        "time": "any",
        "method": "water"
      },
      {
        "id": "magikarp-alpha",
        "name": "Magikarp",
        "dex": 129,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "pichu",
        "name": "Pichu",
        "dex": 172,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "starly",
        "name": "Starly",
        "dex": 396,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staravia",
        "name": "Staravia",
        "dex": 397,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staraptor",
        "name": "Staraptor",
        "dex": 398,
        "time": "any",
        "method": "air"
      },
      {
        "id": "kricketot",
        "name": "Kricketot",
        "dex": 401,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "shinx",
        "name": "Shinx",
        "dex": 403,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "luxio",
        "name": "Luxio",
        "dex": 404,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "buneary",
        "name": "Buneary",
        "dex": 427,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "happiny",
        "name": "Happiny",
        "dex": 440,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "obsidian",
    "subregionId": "the-heartwood",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "psyduck",
        "name": "Psyduck",
        "dex": 54,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "wurmple",
        "name": "Wurmple",
        "dex": 265,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "silcoon",
        "name": "Silcoon",
        "dex": 266,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "beautifly",
        "name": "Beautifly",
        "dex": 267,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "cascoon",
        "name": "Cascoon",
        "dex": 268,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "dustox",
        "name": "Dustox",
        "dex": 269,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "buneary",
        "name": "Buneary",
        "dex": 427,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "obsidian",
    "subregionId": "grandtree-arena",
    "pokemon": [
      {
        "id": "scyther",
        "name": "Scyther",
        "dex": 123,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "scyther-alpha",
        "name": "Scyther",
        "dex": 123,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "tree"
      }
    ]
  },
  {
    "regionId": "obsidian",
    "subregionId": "grueling-grove",
    "pokemon": [
      {
        "id": "heracross-alpha",
        "name": "Heracross",
        "dex": 214,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "beautifly",
        "name": "Beautifly",
        "dex": 267,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "dustox",
        "name": "Dustox",
        "dex": 269,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "mothim",
        "name": "Mothim",
        "dex": 414,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "obsidian",
    "subregionId": "lake-verity",
    "pokemon": [
      {
        "id": "magikarp",
        "name": "Magikarp",
        "dex": 129,
        "time": "any",
        "method": "water"
      },
      {
        "id": "gyarados",
        "name": "Gyarados",
        "dex": 130,
        "time": "any",
        "method": "water"
      },
      {
        "id": "gyarados-alpha",
        "name": "Gyarados",
        "dex": 130,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "luxio",
        "name": "Luxio",
        "dex": 404,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "luxray",
        "name": "Luxray",
        "dex": 405,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "togekiss",
        "name": "Togekiss",
        "dex": 468,
        "time": "any",
        "method": "air"
      }
    ]
  },
  {
    "regionId": "obsidian",
    "subregionId": "verity-cavern",
    "pokemon": [
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "magikarp",
        "name": "Magikarp",
        "dex": 129,
        "time": "any",
        "method": "water"
      },
      {
        "id": "gyarados",
        "name": "Gyarados",
        "dex": 130,
        "time": "any",
        "method": "water"
      },
      {
        "id": "pichu",
        "name": "Pichu",
        "dex": 172,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "wurmple",
        "name": "Wurmple",
        "dex": 265,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "staraptor",
        "name": "Staraptor",
        "dex": 398,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "luxray",
        "name": "Luxray",
        "dex": 405,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "obsidian",
    "subregionId": "sandgem-flats",
    "pokemon": [
      {
        "id": "abra",
        "name": "Abra",
        "dex": 63,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kadabra",
        "name": "Kadabra",
        "dex": 64,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "alakazam-alpha",
        "name": "Alakazam",
        "dex": 65,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "mr-mime",
        "name": "Mr Mime",
        "dex": 122,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "staravia",
        "name": "Staravia",
        "dex": 397,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staraptor",
        "name": "Staraptor",
        "dex": 398,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "luxio",
        "name": "Luxio",
        "dex": 404,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "luxray",
        "name": "Luxray",
        "dex": 405,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "shellos",
        "name": "Shellos",
        "dex": 422,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gastrodon",
        "name": "Gastrodon",
        "dex": 423,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "mime-jr",
        "name": "Mime Jr",
        "dex": 439,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "obsidian",
    "subregionId": "tidewater-dam",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "psyduck",
        "name": "Psyduck",
        "dex": 54,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "wurmple",
        "name": "Wurmple",
        "dex": 265,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "silcoon",
        "name": "Silcoon",
        "dex": 266,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "beautifly",
        "name": "Beautifly",
        "dex": 267,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "cascoon",
        "name": "Cascoon",
        "dex": 268,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "dustox",
        "name": "Dustox",
        "dex": 269,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "starly",
        "name": "Starly",
        "dex": 396,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staravia",
        "name": "Staravia",
        "dex": 397,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "bidoof",
        "name": "Bidoof",
        "dex": 399,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bibarel",
        "name": "Bibarel",
        "dex": 400,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bibarel-alpha",
        "name": "Bibarel",
        "dex": 400,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "buneary",
        "name": "Buneary",
        "dex": 427,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "obsidian",
    "subregionId": "floaro-gardens",
    "pokemon": [
      {
        "id": "pichu",
        "name": "Pichu",
        "dex": 172,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "wurmple",
        "name": "Wurmple",
        "dex": 265,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "silcoon",
        "name": "Silcoon",
        "dex": 266,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "beautifly",
        "name": "Beautifly",
        "dex": 267,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "cascoon",
        "name": "Cascoon",
        "dex": 268,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "dustox",
        "name": "Dustox",
        "dex": 269,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "shinx",
        "name": "Shinx",
        "dex": 403,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "luxio-alpha",
        "name": "Luxio",
        "dex": 404,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "shaymin",
        "name": "Shaymin",
        "dex": 492,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "obsidian",
    "subregionId": "ramanas-island",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "aipom",
        "name": "Aipom",
        "dex": 190,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "qwilfish",
        "name": "Qwilfish",
        "dex": 211,
        "time": "any",
        "method": "water"
      },
      {
        "id": "chimchar",
        "name": "Chimchar",
        "dex": 390,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "monferno",
        "name": "Monferno",
        "dex": 391,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "infernape-alpha",
        "name": "Infernape",
        "dex": 392,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "starly",
        "name": "Starly",
        "dex": 396,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staravia",
        "name": "Staravia",
        "dex": 397,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "cherubi",
        "name": "Cherubi",
        "dex": 420,
        "time": "day",
        "method": "tree"
      },
      {
        "id": "cherrim",
        "name": "Cherrim",
        "dex": 421,
        "time": "day",
        "method": "tree"
      },
      {
        "id": "shellos",
        "name": "Shellos",
        "dex": 422,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gastrodon",
        "name": "Gastrodon",
        "dex": 423,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "buneary",
        "name": "Buneary",
        "dex": 427,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "lopunny-alpha",
        "name": "Lopunny",
        "dex": 428,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "landorus",
        "name": "Landorus",
        "dex": 645,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "obsidian",
    "subregionId": "moss-rock",
    "pokemon": [
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "scyther",
        "name": "Scyther",
        "dex": 123,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "beautifly",
        "name": "Beautifly",
        "dex": 267,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "dustox",
        "name": "Dustox",
        "dex": 269,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "tree"
      }
    ]
  },
  {
    "regionId": "crimson",
    "subregionId": "mirelands-camp",
    "pokemon": [
      {
        "id": "pikachu",
        "name": "Pikachu",
        "dex": 25,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "raichu-alpha",
        "name": "Raichu",
        "dex": 26,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "paras",
        "name": "Paras",
        "dex": 46,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "parasect",
        "name": "Parasect",
        "dex": 47,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "pichu",
        "name": "Pichu",
        "dex": 172,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "pachirisu",
        "name": "Pachirisu",
        "dex": 417,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "carnivine",
        "name": "Carnivine",
        "dex": 455,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "crimson",
    "subregionId": "bogbound-camp",
    "pokemon": [
      {
        "id": "paras",
        "name": "Paras",
        "dex": 46,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "parasect",
        "name": "Parasect",
        "dex": 47,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "yanma",
        "name": "Yanma",
        "dex": 193,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "teddiursa",
        "name": "Teddiursa",
        "dex": 216,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "pachirisu",
        "name": "Pachirisu",
        "dex": 417,
        "time": "any",
        "method": "tree"
      }
    ]
  },
  {
    "regionId": "crimson",
    "subregionId": "golden-lowlands",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "paras",
        "name": "Paras",
        "dex": 46,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "parasect",
        "name": "Parasect",
        "dex": 47,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "psyduck",
        "name": "Psyduck",
        "dex": 54,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "murkrow",
        "name": "Murkrow",
        "dex": 198,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "ralts",
        "name": "Ralts",
        "dex": 280,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "roselia",
        "name": "Roselia",
        "dex": 315,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bidoof",
        "name": "Bidoof",
        "dex": 399,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bibarel",
        "name": "Bibarel",
        "dex": 400,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kricketot",
        "name": "Kricketot",
        "dex": 401,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kricketune",
        "name": "Kricketune",
        "dex": 402,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "budew",
        "name": "Budew",
        "dex": 406,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "pachirisu",
        "name": "Pachirisu",
        "dex": 417,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "croagunk",
        "name": "Croagunk",
        "dex": 453,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "carnivine",
        "name": "Carnivine",
        "dex": 455,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "tangrowth-alpha",
        "name": "Tangrowth",
        "dex": 465,
        "time": "any",
        "method": "ground",
        "alpha": true
      }
    ]
  },
  {
    "regionId": "crimson",
    "subregionId": "gapejaw-bog",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "psyduck",
        "name": "Psyduck",
        "dex": 54,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "golduck",
        "name": "Golduck",
        "dex": 55,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "tangela",
        "name": "Tangela",
        "dex": 114,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "yanma",
        "name": "Yanma",
        "dex": 193,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "teddiursa",
        "name": "Teddiursa",
        "dex": 216,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "ursaring-alpha",
        "name": "Ursaring",
        "dex": 217,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "ralts",
        "name": "Ralts",
        "dex": 280,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "roselia",
        "name": "Roselia",
        "dex": 315,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "barboach",
        "name": "Barboach",
        "dex": 339,
        "time": "any",
        "method": "water"
      },
      {
        "id": "whiscash",
        "name": "Whiscash",
        "dex": 340,
        "time": "any",
        "method": "water"
      },
      {
        "id": "bidoof",
        "name": "Bidoof",
        "dex": 399,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bibarel",
        "name": "Bibarel",
        "dex": 400,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kricketune",
        "name": "Kricketune",
        "dex": 402,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "budew",
        "name": "Budew",
        "dex": 406,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "pachirisu",
        "name": "Pachirisu",
        "dex": 417,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "pachirisu",
        "name": "Pachirisu",
        "dex": 417,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "pachirisu-alpha",
        "name": "Pachirisu",
        "dex": 417,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "cherubi",
        "name": "Cherubi",
        "dex": 420,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "cherrim",
        "name": "Cherrim",
        "dex": 421,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "croagunk",
        "name": "Croagunk",
        "dex": 453,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "toxicroak",
        "name": "Toxicroak",
        "dex": 454,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "toxicroak-alpha",
        "name": "Toxicroak",
        "dex": 454,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "carnivine",
        "name": "Carnivine",
        "dex": 455,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "crimson",
    "subregionId": "sludge-mound",
    "pokemon": [
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "yanma",
        "name": "Yanma",
        "dex": 193,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bidoof",
        "name": "Bidoof",
        "dex": 399,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bibarel",
        "name": "Bibarel",
        "dex": 400,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "pachirisu",
        "name": "Pachirisu",
        "dex": 417,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "hippopotas",
        "name": "Hippopotas",
        "dex": 449,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "hippowdon-alpha",
        "name": "Hippowdon",
        "dex": 450,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "croagunk",
        "name": "Croagunk",
        "dex": 453,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "petilil",
        "name": "Petilil",
        "dex": 548,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "goomy",
        "name": "Goomy",
        "dex": 704,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "crimson",
    "subregionId": "scarlet-bog",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "onix",
        "name": "Onix",
        "dex": 95,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "lickitung",
        "name": "Lickitung",
        "dex": 108,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "rhyhorn",
        "name": "Rhyhorn",
        "dex": 111,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "tangela",
        "name": "Tangela",
        "dex": 114,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "pachirisu",
        "name": "Pachirisu",
        "dex": 417,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "stunky",
        "name": "Stunky",
        "dex": 434,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "skuntank",
        "name": "Skuntank",
        "dex": 435,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "skuntank-alpha",
        "name": "Skuntank",
        "dex": 435,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "hippopotas",
        "name": "Hippopotas",
        "dex": 449,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "hippowdon",
        "name": "Hippowdon",
        "dex": 450,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "croagunk",
        "name": "Croagunk",
        "dex": 453,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "carnivine",
        "name": "Carnivine",
        "dex": 455,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "enamorus",
        "name": "Enamorus",
        "dex": 905,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "crimson",
    "subregionId": "solaceon-ruins",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "psyduck",
        "name": "Psyduck",
        "dex": 54,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "lickitung",
        "name": "Lickitung",
        "dex": 108,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "tangela",
        "name": "Tangela",
        "dex": 114,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "sudowoodo",
        "name": "Sudowoodo",
        "dex": 185,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "unown",
        "name": "Unown",
        "dex": 201,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kricketot",
        "name": "Kricketot",
        "dex": 401,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kricketune",
        "name": "Kricketune",
        "dex": 402,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "pachirisu",
        "name": "Pachirisu",
        "dex": 417,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "cherubi",
        "name": "Cherubi",
        "dex": 420,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "cherrim",
        "name": "Cherrim",
        "dex": 421,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "bonsly",
        "name": "Bonsly",
        "dex": 438,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "carnivine",
        "name": "Carnivine",
        "dex": 455,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "crimson",
    "subregionId": "cloudpool-ridge",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "paras",
        "name": "Paras",
        "dex": 46,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "parasect",
        "name": "Parasect",
        "dex": 47,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "murkrow",
        "name": "Murkrow",
        "dex": 198,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "roselia",
        "name": "Roselia",
        "dex": 315,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kricketot",
        "name": "Kricketot",
        "dex": 401,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kricketune",
        "name": "Kricketune",
        "dex": 402,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "roserade-alpha",
        "name": "Roserade",
        "dex": 407,
        "time": "day",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "honchkrow-alpha",
        "name": "Honchkrow",
        "dex": 430,
        "time": "night",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "carnivine",
        "name": "Carnivine",
        "dex": 455,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "crimson",
    "subregionId": "shrouded-ruins",
    "pokemon": [
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "lickitung",
        "name": "Lickitung",
        "dex": 108,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "rhyhorn",
        "name": "Rhyhorn",
        "dex": 111,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "ralts",
        "name": "Ralts",
        "dex": 280,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kirlia",
        "name": "Kirlia",
        "dex": 281,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "spiritomb",
        "name": "Spiritomb",
        "dex": 442,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "carnivine",
        "name": "Carnivine",
        "dex": 455,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "lickilicky-alpha",
        "name": "Lickilicky",
        "dex": 463,
        "time": "any",
        "method": "ground",
        "alpha": true
      }
    ]
  },
  {
    "regionId": "crimson",
    "subregionId": "diamond-settlement",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "paras",
        "name": "Paras",
        "dex": 46,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "parasect",
        "name": "Parasect",
        "dex": 47,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "onix-alpha",
        "name": "Onix",
        "dex": 95,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "rhyhorn",
        "name": "Rhyhorn",
        "dex": 111,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kricketot",
        "name": "Kricketot",
        "dex": 401,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kricketune",
        "name": "Kricketune",
        "dex": 402,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "bonsly",
        "name": "Bonsly",
        "dex": 438,
        "time": "any",
        "method": "ore"
      }
    ]
  },
  {
    "regionId": "crimson",
    "subregionId": "diamond-heath",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "paras",
        "name": "Paras",
        "dex": 46,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "parasect",
        "name": "Parasect",
        "dex": 47,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "rhyhorn",
        "name": "Rhyhorn",
        "dex": 111,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "rhyhorn-alpha",
        "name": "Rhyhorn",
        "dex": 111,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "bonsly",
        "name": "Bonsly",
        "dex": 438,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "carnivine",
        "name": "Carnivine",
        "dex": 455,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "crimson",
    "subregionId": "bolderoll-slope",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "paras",
        "name": "Paras",
        "dex": 46,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "parasect",
        "name": "Parasect",
        "dex": 47,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "rhyhorn",
        "name": "Rhyhorn",
        "dex": 111,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "tangela",
        "name": "Tangela",
        "dex": 114,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "togetic",
        "name": "Togetic",
        "dex": 176,
        "time": "any",
        "method": "air"
      },
      {
        "id": "yanma",
        "name": "Yanma",
        "dex": 193,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "roselia",
        "name": "Roselia",
        "dex": 315,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kricketot",
        "name": "Kricketot",
        "dex": 401,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kricketune",
        "name": "Kricketune",
        "dex": 402,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "budew",
        "name": "Budew",
        "dex": 406,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "vespiquen",
        "name": "Vespiquen",
        "dex": 416,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "vespiquen",
        "name": "Vespiquen",
        "dex": 416,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "pachirisu",
        "name": "Pachirisu",
        "dex": 417,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "carnivine",
        "name": "Carnivine",
        "dex": 455,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "carnivine-alpha",
        "name": "Carnivine",
        "dex": 455,
        "time": "any",
        "method": "ground",
        "alpha": true
      }
    ]
  },
  {
    "regionId": "crimson",
    "subregionId": "droning-meadow",
    "pokemon": [
      {
        "id": "paras",
        "name": "Paras",
        "dex": 46,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "parasect",
        "name": "Parasect",
        "dex": 47,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "yanma",
        "name": "Yanma",
        "dex": 193,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "teddiursa",
        "name": "Teddiursa",
        "dex": 216,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "ursaring",
        "name": "Ursaring",
        "dex": 217,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "barboach",
        "name": "Barboach",
        "dex": 339,
        "time": "any",
        "method": "water"
      },
      {
        "id": "whiscash",
        "name": "Whiscash",
        "dex": 340,
        "time": "any",
        "method": "water"
      },
      {
        "id": "bidoof",
        "name": "Bidoof",
        "dex": 399,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bibarel",
        "name": "Bibarel",
        "dex": 400,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "vespiquen",
        "name": "Vespiquen",
        "dex": 416,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "vespiquen",
        "name": "Vespiquen",
        "dex": 416,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "pachirisu",
        "name": "Pachirisu",
        "dex": 417,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "yanmega-alpha",
        "name": "Yanmega",
        "dex": 469,
        "time": "any",
        "method": "ground",
        "alpha": true
      }
    ]
  },
  {
    "regionId": "crimson",
    "subregionId": "cottonsedge-prairie",
    "pokemon": [
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "paras",
        "name": "Paras",
        "dex": 46,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "parasect",
        "name": "Parasect",
        "dex": 47,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "tangela",
        "name": "Tangela",
        "dex": 114,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "togepi",
        "name": "Togepi",
        "dex": 175,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "togetic",
        "name": "Togetic",
        "dex": 176,
        "time": "any",
        "method": "air"
      },
      {
        "id": "yanma",
        "name": "Yanma",
        "dex": 193,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "roselia",
        "name": "Roselia",
        "dex": 315,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "budew",
        "name": "Budew",
        "dex": 406,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "vespiquen-alpha",
        "name": "Vespiquen",
        "dex": 416,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "vespiquen",
        "name": "Vespiquen",
        "dex": 416,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "pachirisu",
        "name": "Pachirisu",
        "dex": 417,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "pachirisu",
        "name": "Pachirisu",
        "dex": 417,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "carnivine",
        "name": "Carnivine",
        "dex": 455,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "petilil",
        "name": "Petilil",
        "dex": 548,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "crimson",
    "subregionId": "lake-valor",
    "pokemon": [
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "vespiquen",
        "name": "Vespiquen",
        "dex": 416,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "carnivine",
        "name": "Carnivine",
        "dex": 455,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "crimson",
    "subregionId": "valor-cavern",
    "pokemon": [
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "onix",
        "name": "Onix",
        "dex": 95,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "tangela",
        "name": "Tangela",
        "dex": 114,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "barboach",
        "name": "Barboach",
        "dex": 339,
        "time": "any",
        "method": "water"
      },
      {
        "id": "whiscash-alpha",
        "name": "Whiscash",
        "dex": 340,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "whiscash",
        "name": "Whiscash",
        "dex": 340,
        "time": "any",
        "method": "water"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "carnivine",
        "name": "Carnivine",
        "dex": 455,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "crimson",
    "subregionId": "holm-of-trials",
    "pokemon": [
      {
        "id": "psyduck",
        "name": "Psyduck",
        "dex": 54,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "golduck",
        "name": "Golduck",
        "dex": 55,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "barboach",
        "name": "Barboach",
        "dex": 339,
        "time": "any",
        "method": "water"
      },
      {
        "id": "torterra-alpha",
        "name": "Torterra",
        "dex": 389,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "pachirisu",
        "name": "Pachirisu",
        "dex": 417,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "croagunk",
        "name": "Croagunk",
        "dex": 453,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "toxicroak",
        "name": "Toxicroak",
        "dex": 454,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "carnivine",
        "name": "Carnivine",
        "dex": 455,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "petilil",
        "name": "Petilil",
        "dex": 548,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "goomy",
        "name": "Goomy",
        "dex": 704,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "sliggoo-alpha",
        "name": "Sliggoo",
        "dex": 705,
        "time": "any",
        "method": "ground",
        "alpha": true
      }
    ]
  },
  {
    "regionId": "crimson",
    "subregionId": "brava-arena",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "kricketot",
        "name": "Kricketot",
        "dex": 401,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kricketune",
        "name": "Kricketune",
        "dex": 402,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "crimson",
    "subregionId": "ursas-ring",
    "pokemon": [
      {
        "id": "paras",
        "name": "Paras",
        "dex": 46,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "parasect",
        "name": "Parasect",
        "dex": 47,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "yanma",
        "name": "Yanma",
        "dex": 193,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "teddiursa",
        "name": "Teddiursa",
        "dex": 216,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "ursaring-alpha",
        "name": "Ursaring",
        "dex": 217,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "barboach",
        "name": "Barboach",
        "dex": 339,
        "time": "any",
        "method": "water"
      },
      {
        "id": "whiscash",
        "name": "Whiscash",
        "dex": 340,
        "time": "any",
        "method": "water"
      },
      {
        "id": "turtwig",
        "name": "Turtwig",
        "dex": 387,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "grotle",
        "name": "Grotle",
        "dex": 388,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bidoof",
        "name": "Bidoof",
        "dex": 399,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bibarel",
        "name": "Bibarel",
        "dex": 400,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "pachirisu",
        "name": "Pachirisu",
        "dex": 417,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "carnivine",
        "name": "Carnivine",
        "dex": 455,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "coastlands-camp",
    "pokemon": [
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "beachside-camp",
    "pokemon": [
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "remoraid",
        "name": "Remoraid",
        "dex": 223,
        "time": "any",
        "method": "water"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "crossing-slope",
    "pokemon": [
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "tangela",
        "name": "Tangela",
        "dex": 114,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "murkrow",
        "name": "Murkrow",
        "dex": 198,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "starly",
        "name": "Starly",
        "dex": 396,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staravia",
        "name": "Staravia",
        "dex": 397,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "mothim",
        "name": "Mothim",
        "dex": 414,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "glameow",
        "name": "Glameow",
        "dex": 431,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "purugly",
        "name": "Purugly",
        "dex": 432,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "ginkgo-landing",
    "pokemon": [
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "murkrow",
        "name": "Murkrow",
        "dex": 198,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "remoraid",
        "name": "Remoraid",
        "dex": 223,
        "time": "any",
        "method": "water"
      },
      {
        "id": "spheal",
        "name": "Spheal",
        "dex": 363,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "walrein-alpha",
        "name": "Walrein",
        "dex": 365,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "starly",
        "name": "Starly",
        "dex": 396,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staravia",
        "name": "Staravia",
        "dex": 397,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "buizel",
        "name": "Buizel",
        "dex": 418,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "floatzel",
        "name": "Floatzel",
        "dex": 419,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "water"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "water"
      },
      {
        "id": "skorupi",
        "name": "Skorupi",
        "dex": 451,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "mantyke",
        "name": "Mantyke",
        "dex": 458,
        "time": "any",
        "method": "water"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "aipom-hills",
    "pokemon": [
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "eevee",
        "name": "Eevee",
        "dex": 133,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "aipom",
        "name": "Aipom",
        "dex": 190,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "aipom",
        "name": "Aipom",
        "dex": 190,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "murkrow",
        "name": "Murkrow",
        "dex": 198,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "mothim",
        "name": "Mothim",
        "dex": 414,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "combee",
        "name": "Combee",
        "dex": 415,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "buizel",
        "name": "Buizel",
        "dex": 418,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "floatzel",
        "name": "Floatzel",
        "dex": 419,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "ambipom",
        "name": "Ambipom",
        "dex": 424,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "glameow",
        "name": "Glameow",
        "dex": 431,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "purugly",
        "name": "Purugly",
        "dex": 432,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "bathers-lagoon",
    "pokemon": [
      {
        "id": "psyduck",
        "name": "Psyduck",
        "dex": 54,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "golduck",
        "name": "Golduck",
        "dex": 55,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "golduck-alpha",
        "name": "Golduck",
        "dex": 55,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "chansey",
        "name": "Chansey",
        "dex": 113,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "togepi",
        "name": "Togepi",
        "dex": 175,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "murkrow",
        "name": "Murkrow",
        "dex": 198,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "qwilfish",
        "name": "Qwilfish",
        "dex": 211,
        "time": "any",
        "method": "water"
      },
      {
        "id": "remoraid",
        "name": "Remoraid",
        "dex": 223,
        "time": "any",
        "method": "water"
      },
      {
        "id": "beautifly",
        "name": "Beautifly",
        "dex": 267,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "dustox",
        "name": "Dustox",
        "dex": 269,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "spheal",
        "name": "Spheal",
        "dex": 363,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "sealeo",
        "name": "Sealeo",
        "dex": 364,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "water"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "water"
      },
      {
        "id": "happiny",
        "name": "Happiny",
        "dex": 440,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "hideaway-bay",
    "pokemon": [
      {
        "id": "chansey",
        "name": "Chansey",
        "dex": 113,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "murkrow",
        "name": "Murkrow",
        "dex": 198,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "qwilfish",
        "name": "Qwilfish",
        "dex": 211,
        "time": "any",
        "method": "water"
      },
      {
        "id": "remoraid",
        "name": "Remoraid",
        "dex": 223,
        "time": "any",
        "method": "water"
      },
      {
        "id": "spheal",
        "name": "Spheal",
        "dex": 363,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "sealeo",
        "name": "Sealeo",
        "dex": 364,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "water"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "water"
      },
      {
        "id": "happiny",
        "name": "Happiny",
        "dex": 440,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "deadwood-haunt",
    "pokemon": [
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "remoraid",
        "name": "Remoraid",
        "dex": 223,
        "time": "any",
        "method": "water"
      },
      {
        "id": "beautifly",
        "name": "Beautifly",
        "dex": 267,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "dustox",
        "name": "Dustox",
        "dex": 269,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "duskull",
        "name": "Duskull",
        "dex": 355,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "dusclops",
        "name": "Dusclops",
        "dex": 356,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "starly",
        "name": "Starly",
        "dex": 396,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staravia",
        "name": "Staravia",
        "dex": 397,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staraptor",
        "name": "Staraptor",
        "dex": 398,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "water"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "water"
      },
      {
        "id": "chatot",
        "name": "Chatot",
        "dex": 441,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "mantyke",
        "name": "Mantyke",
        "dex": 458,
        "time": "any",
        "method": "water"
      },
      {
        "id": "dusknoir-alpha",
        "name": "Dusknoir",
        "dex": 477,
        "time": "night",
        "method": "ground",
        "alpha": true
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "castaway-shore",
    "pokemon": [
      {
        "id": "vulpix",
        "name": "Vulpix",
        "dex": 37,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "machop",
        "name": "Machop",
        "dex": 66,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "machoke",
        "name": "Machoke",
        "dex": 67,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "tentacool",
        "name": "Tentacool",
        "dex": 72,
        "time": "any",
        "method": "water"
      },
      {
        "id": "tentacruel",
        "name": "Tentacruel",
        "dex": 73,
        "time": "any",
        "method": "water"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "murkrow",
        "name": "Murkrow",
        "dex": 198,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "remoraid",
        "name": "Remoraid",
        "dex": 223,
        "time": "any",
        "method": "water"
      },
      {
        "id": "octillery",
        "name": "Octillery",
        "dex": 224,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "octillery-alpha",
        "name": "Octillery",
        "dex": 224,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "beautifly",
        "name": "Beautifly",
        "dex": 267,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "dustox",
        "name": "Dustox",
        "dex": 269,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "mothim",
        "name": "Mothim",
        "dex": 414,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "water"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "water"
      },
      {
        "id": "glameow",
        "name": "Glameow",
        "dex": 431,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "skorupi",
        "name": "Skorupi",
        "dex": 451,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "mantyke",
        "name": "Mantyke",
        "dex": 458,
        "time": "any",
        "method": "water"
      },
      {
        "id": "phione",
        "name": "Phione",
        "dex": 489,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "windbreak-stand",
    "pokemon": [
      {
        "id": "pikachu",
        "name": "Pikachu",
        "dex": 25,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "paras",
        "name": "Paras",
        "dex": 46,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "parasect",
        "name": "Parasect",
        "dex": 47,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "growlithe",
        "name": "Growlithe",
        "dex": 58,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "machop",
        "name": "Machop",
        "dex": 66,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "machoke",
        "name": "Machoke",
        "dex": 67,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "machoke-alpha",
        "name": "Machoke",
        "dex": 67,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "tangela",
        "name": "Tangela",
        "dex": 114,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "murkrow",
        "name": "Murkrow",
        "dex": 198,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "stantler",
        "name": "Stantler",
        "dex": 234,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "beautifly",
        "name": "Beautifly",
        "dex": 267,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "dustox",
        "name": "Dustox",
        "dex": 269,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "starly",
        "name": "Starly",
        "dex": 396,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staravia",
        "name": "Staravia",
        "dex": 397,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staraptor",
        "name": "Staraptor",
        "dex": 398,
        "time": "any",
        "method": "air"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "mothim",
        "name": "Mothim",
        "dex": 414,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "skorupi",
        "name": "Skorupi",
        "dex": 451,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "drapion-alpha",
        "name": "Drapion",
        "dex": 452,
        "time": "any",
        "method": "ground",
        "alpha": true
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "veilstone-cape",
    "pokemon": [
      {
        "id": "growlithe",
        "name": "Growlithe",
        "dex": 58,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "tentacool",
        "name": "Tentacool",
        "dex": 72,
        "time": "any",
        "method": "water"
      },
      {
        "id": "tentacruel",
        "name": "Tentacruel",
        "dex": 73,
        "time": "any",
        "method": "water"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "murkrow",
        "name": "Murkrow",
        "dex": 198,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "remoraid",
        "name": "Remoraid",
        "dex": 223,
        "time": "any",
        "method": "water"
      },
      {
        "id": "mantine",
        "name": "Mantine",
        "dex": 226,
        "time": "any",
        "method": "water"
      },
      {
        "id": "beautifly",
        "name": "Beautifly",
        "dex": 267,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "dustox",
        "name": "Dustox",
        "dex": 269,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "shellos",
        "name": "Shellos",
        "dex": 422,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gastrodon",
        "name": "Gastrodon",
        "dex": 423,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "water"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "water"
      },
      {
        "id": "glameow",
        "name": "Glameow",
        "dex": 431,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "purugly-alpha",
        "name": "Purugly",
        "dex": 432,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "finneon",
        "name": "Finneon",
        "dex": 456,
        "time": "any",
        "method": "water"
      },
      {
        "id": "lumineon-alpha",
        "name": "Lumineon",
        "dex": 457,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "mantyke",
        "name": "Mantyke",
        "dex": 458,
        "time": "any",
        "method": "water"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "islespy-shore",
    "pokemon": [
      {
        "id": "golduck",
        "name": "Golduck",
        "dex": 55,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "tentacool",
        "name": "Tentacool",
        "dex": 72,
        "time": "any",
        "method": "water"
      },
      {
        "id": "tentacruel",
        "name": "Tentacruel",
        "dex": 73,
        "time": "any",
        "method": "water"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "murkrow",
        "name": "Murkrow",
        "dex": 198,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "qwilfish",
        "name": "Qwilfish",
        "dex": 211,
        "time": "any",
        "method": "water"
      },
      {
        "id": "qwilfish-alpha",
        "name": "Qwilfish",
        "dex": 211,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "octillery",
        "name": "Octillery",
        "dex": 224,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "octillery",
        "name": "Octillery",
        "dex": 224,
        "time": "night",
        "method": "water"
      },
      {
        "id": "sealeo",
        "name": "Sealeo",
        "dex": 364,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "walrein",
        "name": "Walrein",
        "dex": 365,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "empoleon-alpha",
        "name": "Empoleon",
        "dex": 395,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "staraptor",
        "name": "Staraptor",
        "dex": 398,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "water"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "water"
      },
      {
        "id": "finneon",
        "name": "Finneon",
        "dex": 456,
        "time": "any",
        "method": "water"
      },
      {
        "id": "lumineon",
        "name": "Lumineon",
        "dex": 457,
        "time": "any",
        "method": "water"
      },
      {
        "id": "basculin",
        "name": "Basculin",
        "dex": 550,
        "time": "any",
        "method": "water"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "tranquility-cove",
    "pokemon": [
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "togepi",
        "name": "Togepi",
        "dex": 175,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "togetic",
        "name": "Togetic",
        "dex": 176,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "qwilfish",
        "name": "Qwilfish",
        "dex": 211,
        "time": "any",
        "method": "water"
      },
      {
        "id": "remoraid",
        "name": "Remoraid",
        "dex": 223,
        "time": "any",
        "method": "water"
      },
      {
        "id": "mantine",
        "name": "Mantine",
        "dex": 226,
        "time": "any",
        "method": "water"
      },
      {
        "id": "mantine-alpha",
        "name": "Mantine",
        "dex": 226,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "staravia",
        "name": "Staravia",
        "dex": 397,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staraptor",
        "name": "Staraptor",
        "dex": 398,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "shellos",
        "name": "Shellos",
        "dex": 422,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "water"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "water"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "mantyke",
        "name": "Mantyke",
        "dex": 458,
        "time": "any",
        "method": "water"
      },
      {
        "id": "basculin",
        "name": "Basculin",
        "dex": 550,
        "time": "any",
        "method": "water"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "sands-reach",
    "pokemon": [
      {
        "id": "remoraid",
        "name": "Remoraid",
        "dex": 223,
        "time": "any",
        "method": "water"
      },
      {
        "id": "mantine",
        "name": "Mantine",
        "dex": 226,
        "time": "any",
        "method": "water"
      },
      {
        "id": "starly",
        "name": "Starly",
        "dex": 396,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staravia",
        "name": "Staravia",
        "dex": 397,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "water"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "water"
      },
      {
        "id": "mantyke",
        "name": "Mantyke",
        "dex": 458,
        "time": "any",
        "method": "water"
      },
      {
        "id": "thundurus",
        "name": "Thundurus",
        "dex": 642,
        "time": "day",
        "method": "water"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "tombolo-walk",
    "pokemon": [
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "chansey-alpha",
        "name": "Chansey",
        "dex": 113,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "qwilfish",
        "name": "Qwilfish",
        "dex": 211,
        "time": "any",
        "method": "water"
      },
      {
        "id": "remoraid",
        "name": "Remoraid",
        "dex": 223,
        "time": "any",
        "method": "water"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "water"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "water"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "seagrass-haven",
    "pokemon": [
      {
        "id": "tentacool",
        "name": "Tentacool",
        "dex": 72,
        "time": "any",
        "method": "water"
      },
      {
        "id": "tentacruel",
        "name": "Tentacruel",
        "dex": 73,
        "time": "any",
        "method": "water"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "magmar",
        "name": "Magmar",
        "dex": 126,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "magby",
        "name": "Magby",
        "dex": 240,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "mothim",
        "name": "Mothim",
        "dex": 414,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "shellos",
        "name": "Shellos",
        "dex": 422,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gastrodon",
        "name": "Gastrodon",
        "dex": 423,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gastrodon-alpha",
        "name": "Gastrodon",
        "dex": 423,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "water"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "water"
      },
      {
        "id": "finneon",
        "name": "Finneon",
        "dex": 456,
        "time": "any",
        "method": "water"
      },
      {
        "id": "lumineon",
        "name": "Lumineon",
        "dex": 457,
        "time": "any",
        "method": "water"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "lunkers-lair",
    "pokemon": [
      {
        "id": "tentacool",
        "name": "Tentacool",
        "dex": 72,
        "time": "any",
        "method": "water"
      },
      {
        "id": "tentacruel",
        "name": "Tentacruel",
        "dex": 73,
        "time": "any",
        "method": "water"
      },
      {
        "id": "tentacruel-alpha",
        "name": "Tentacruel",
        "dex": 73,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "gyarados",
        "name": "Gyarados",
        "dex": 130,
        "time": "any",
        "method": "water"
      },
      {
        "id": "gyarados-alpha",
        "name": "Gyarados",
        "dex": 130,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "qwilfish",
        "name": "Qwilfish",
        "dex": 211,
        "time": "any",
        "method": "water"
      },
      {
        "id": "mantine",
        "name": "Mantine",
        "dex": 226,
        "time": "any",
        "method": "water"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "water"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "water"
      },
      {
        "id": "mantyke",
        "name": "Mantyke",
        "dex": 458,
        "time": "any",
        "method": "water"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "spring-path",
    "pokemon": [
      {
        "id": "parasect",
        "name": "Parasect",
        "dex": 47,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "mothim",
        "name": "Mothim",
        "dex": 414,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "mothim-alpha",
        "name": "Mothim",
        "dex": 414,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "toxicroak",
        "name": "Toxicroak",
        "dex": 454,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "turnback-cave",
    "pokemon": [
      {
        "id": "golduck",
        "name": "Golduck",
        "dex": 55,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "piplup",
        "name": "Piplup",
        "dex": 393,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "prinplup",
        "name": "Prinplup",
        "dex": 394,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bibarel",
        "name": "Bibarel",
        "dex": 400,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "toxicroak",
        "name": "Toxicroak",
        "dex": 454,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "tidal-passage",
    "pokemon": [
      {
        "id": "togepi",
        "name": "Togepi",
        "dex": 175,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "togetic",
        "name": "Togetic",
        "dex": 176,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "qwilfish",
        "name": "Qwilfish",
        "dex": 211,
        "time": "any",
        "method": "water"
      },
      {
        "id": "remoraid",
        "name": "Remoraid",
        "dex": 223,
        "time": "any",
        "method": "water"
      },
      {
        "id": "mantine",
        "name": "Mantine",
        "dex": 226,
        "time": "any",
        "method": "water"
      },
      {
        "id": "starly",
        "name": "Starly",
        "dex": 396,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staravia",
        "name": "Staravia",
        "dex": 397,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staraptor",
        "name": "Staraptor",
        "dex": 398,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "shellos",
        "name": "Shellos",
        "dex": 422,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "water"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "water"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "mantyke",
        "name": "Mantyke",
        "dex": 458,
        "time": "any",
        "method": "water"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "seaside-hollow",
    "pokemon": [
      {
        "id": "psyduck",
        "name": "Psyduck",
        "dex": 54,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "golduck",
        "name": "Golduck",
        "dex": 55,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "togepi",
        "name": "Togepi",
        "dex": 175,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "aipom",
        "name": "Aipom",
        "dex": 190,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "murkrow",
        "name": "Murkrow",
        "dex": 198,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "remoraid",
        "name": "Remoraid",
        "dex": 223,
        "time": "any",
        "method": "water"
      },
      {
        "id": "starly",
        "name": "Starly",
        "dex": 396,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "staravia",
        "name": "Staravia",
        "dex": 397,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "mothim",
        "name": "Mothim",
        "dex": 414,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "buizel",
        "name": "Buizel",
        "dex": 418,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "floatzel",
        "name": "Floatzel",
        "dex": 419,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "ambipom",
        "name": "Ambipom",
        "dex": 424,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "ambipom-alpha",
        "name": "Ambipom",
        "dex": 424,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "honchkrow",
        "name": "Honchkrow",
        "dex": 430,
        "time": "night",
        "method": "air"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "firespit-island",
    "pokemon": [
      {
        "id": "ninetales-alpha",
        "name": "Ninetales",
        "dex": 38,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "magmar",
        "name": "Magmar",
        "dex": 126,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "magby",
        "name": "Magby",
        "dex": 240,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "molten-arena",
    "pokemon": [
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "qwilfish",
        "name": "Qwilfish",
        "dex": 211,
        "time": "any",
        "method": "water"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "water"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "water"
      },
      {
        "id": "basculin",
        "name": "Basculin",
        "dex": 550,
        "time": "any",
        "method": "water"
      }
    ]
  },
  {
    "regionId": "cobalt",
    "subregionId": "lava-dome-sanctum",
    "pokemon": [
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "water"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "water"
      },
      {
        "id": "basculin",
        "name": "Basculin",
        "dex": 550,
        "time": "any",
        "method": "water"
      }
    ]
  },
  {
    "regionId": "coronet",
    "subregionId": "mountain-camp",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "paras",
        "name": "Paras",
        "dex": 46,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "parasect",
        "name": "Parasect",
        "dex": 47,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "psyduck",
        "name": "Psyduck",
        "dex": 54,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "golduck",
        "name": "Golduck",
        "dex": 55,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "yanma",
        "name": "Yanma",
        "dex": 193,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "heracross",
        "name": "Heracross",
        "dex": 214,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "heracross",
        "name": "Heracross",
        "dex": 214,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "cherubi",
        "name": "Cherubi",
        "dex": 420,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "cherrim",
        "name": "Cherrim",
        "dex": 421,
        "time": "any",
        "method": "tree"
      }
    ]
  },
  {
    "regionId": "coronet",
    "subregionId": "summit-camp",
    "pokemon": [
      {
        "id": "luxio",
        "name": "Luxio",
        "dex": 404,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "luxray",
        "name": "Luxray",
        "dex": 405,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      }
    ]
  },
  {
    "regionId": "coronet",
    "subregionId": "heavenward-lookout",
    "pokemon": [
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "luxio",
        "name": "Luxio",
        "dex": 404,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "luxray",
        "name": "Luxray",
        "dex": 405,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      }
    ]
  },
  {
    "regionId": "coronet",
    "subregionId": "lonely-spring",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "psyduck",
        "name": "Psyduck",
        "dex": 54,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "golduck",
        "name": "Golduck",
        "dex": 55,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "yanma",
        "name": "Yanma",
        "dex": 193,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "luxio",
        "name": "Luxio",
        "dex": 404,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "luxray",
        "name": "Luxray",
        "dex": 405,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "cherubi",
        "name": "Cherubi",
        "dex": 420,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "cherrim",
        "name": "Cherrim",
        "dex": 421,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "bronzor",
        "name": "Bronzor",
        "dex": 436,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "carnivine",
        "name": "Carnivine",
        "dex": 455,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "carnivine-alpha",
        "name": "Carnivine",
        "dex": 455,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "yanmega",
        "name": "Yanmega",
        "dex": 469,
        "time": "day",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "coronet",
    "subregionId": "fabled-spring",
    "pokemon": [
      {
        "id": "clefairy",
        "name": "Clefairy",
        "dex": 35,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "clefable-alpha",
        "name": "Clefable",
        "dex": 36,
        "time": "night",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "machop",
        "name": "Machop",
        "dex": 66,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "machoke",
        "name": "Machoke",
        "dex": 67,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "magikarp",
        "name": "Magikarp",
        "dex": 129,
        "time": "any",
        "method": "water"
      },
      {
        "id": "cleffa",
        "name": "Cleffa",
        "dex": 173,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "roselia",
        "name": "Roselia",
        "dex": 315,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "budew",
        "name": "Budew",
        "dex": 406,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "cherubi",
        "name": "Cherubi",
        "dex": 420,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "cherrim",
        "name": "Cherrim",
        "dex": 421,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "stunky",
        "name": "Stunky",
        "dex": 434,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "skuntank",
        "name": "Skuntank",
        "dex": 435,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "magnezone",
        "name": "Magnezone",
        "dex": 462,
        "time": "any",
        "method": "air"
      },
      {
        "id": "basculin",
        "name": "Basculin",
        "dex": 550,
        "time": "any",
        "method": "water"
      }
    ]
  },
  {
    "regionId": "coronet",
    "subregionId": "celestica-trail",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "rhyhorn",
        "name": "Rhyhorn",
        "dex": 111,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "rhydon",
        "name": "Rhydon",
        "dex": 112,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gyarados",
        "name": "Gyarados",
        "dex": 130,
        "time": "any",
        "method": "water"
      },
      {
        "id": "gligar",
        "name": "Gligar",
        "dex": 207,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "steelix-alpha",
        "name": "Steelix",
        "dex": 208,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "sneasel",
        "name": "Sneasel",
        "dex": 215,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "nosepass",
        "name": "Nosepass",
        "dex": 299,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "nosepass",
        "name": "Nosepass",
        "dex": 299,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "chimecho",
        "name": "Chimecho",
        "dex": 358,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "cherubi",
        "name": "Cherubi",
        "dex": 420,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "cherrim",
        "name": "Cherrim",
        "dex": 421,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "stunky",
        "name": "Stunky",
        "dex": 434,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "skuntank",
        "name": "Skuntank",
        "dex": 435,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bronzor",
        "name": "Bronzor",
        "dex": 436,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "hippopotas",
        "name": "Hippopotas",
        "dex": 449,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "magnezone",
        "name": "Magnezone",
        "dex": 462,
        "time": "any",
        "method": "air"
      }
    ]
  },
  {
    "regionId": "coronet",
    "subregionId": "celestica-ruins",
    "pokemon": [
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "sudowoodo",
        "name": "Sudowoodo",
        "dex": 185,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "misdreavus",
        "name": "Misdreavus",
        "dex": 200,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "gligar",
        "name": "Gligar",
        "dex": 207,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gligar-alpha",
        "name": "Gligar",
        "dex": 207,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "bronzor",
        "name": "Bronzor",
        "dex": 436,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bronzong",
        "name": "Bronzong",
        "dex": 437,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bonsly",
        "name": "Bonsly",
        "dex": 438,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "gible",
        "name": "Gible",
        "dex": 443,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "gible",
        "name": "Gible",
        "dex": 443,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "coronet",
    "subregionId": "sacred-plaza",
    "pokemon": [
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "voltorb",
        "name": "Voltorb",
        "dex": 100,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "voltorb",
        "name": "Voltorb",
        "dex": 100,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "rhyhorn",
        "name": "Rhyhorn",
        "dex": 111,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "rhydon",
        "name": "Rhydon",
        "dex": 112,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "scyther",
        "name": "Scyther",
        "dex": 123,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "misdreavus",
        "name": "Misdreavus",
        "dex": 200,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "gligar",
        "name": "Gligar",
        "dex": 207,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "nosepass",
        "name": "Nosepass",
        "dex": 299,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "chimecho",
        "name": "Chimecho",
        "dex": 358,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "shinx",
        "name": "Shinx",
        "dex": 403,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "luxio",
        "name": "Luxio",
        "dex": 404,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "luxray-alpha",
        "name": "Luxray",
        "dex": 405,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "luxray",
        "name": "Luxray",
        "dex": 405,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "mismagius-alpha",
        "name": "Mismagius",
        "dex": 429,
        "time": "night",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "chingling",
        "name": "Chingling",
        "dex": 433,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bronzor",
        "name": "Bronzor",
        "dex": 436,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "bronzor",
        "name": "Bronzor",
        "dex": 436,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "bronzong",
        "name": "Bronzong",
        "dex": 437,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "rhyperior-alpha",
        "name": "Rhyperior",
        "dex": 464,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "rotom",
        "name": "Rotom",
        "dex": 479,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "rotom",
        "name": "Rotom",
        "dex": 479,
        "time": "any",
        "method": "ore"
      }
    ]
  },
  {
    "regionId": "coronet",
    "subregionId": "spear-pillar",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "crobat-alpha",
        "name": "Crobat",
        "dex": 169,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "barboach",
        "name": "Barboach",
        "dex": 339,
        "time": "any",
        "method": "water"
      },
      {
        "id": "whiscash",
        "name": "Whiscash",
        "dex": 340,
        "time": "any",
        "method": "water"
      },
      {
        "id": "gible",
        "name": "Gible",
        "dex": 443,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gible",
        "name": "Gible",
        "dex": 443,
        "time": "any",
        "method": "ore"
      }
    ]
  },
  {
    "regionId": "coronet",
    "subregionId": "moonview-arena",
    "pokemon": [
      {
        "id": "nosepass",
        "name": "Nosepass",
        "dex": 299,
        "time": "any",
        "method": "ore"
      }
    ]
  },
  {
    "regionId": "coronet",
    "subregionId": "clamberclaw-cliffs",
    "pokemon": [
      {
        "id": "psyduck",
        "name": "Psyduck",
        "dex": 54,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "golduck",
        "name": "Golduck",
        "dex": 55,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "gligar",
        "name": "Gligar",
        "dex": 207,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "cherubi",
        "name": "Cherubi",
        "dex": 420,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "cherrim",
        "name": "Cherrim",
        "dex": 421,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "bronzor",
        "name": "Bronzor",
        "dex": 436,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "bronzor",
        "name": "Bronzor",
        "dex": 436,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bronzong-alpha",
        "name": "Bronzong",
        "dex": 437,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "bronzong",
        "name": "Bronzong",
        "dex": 437,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gible",
        "name": "Gible",
        "dex": 443,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "carnivine",
        "name": "Carnivine",
        "dex": 455,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "magnezone",
        "name": "Magnezone",
        "dex": 462,
        "time": "any",
        "method": "air"
      },
      {
        "id": "darkrai",
        "name": "Darkrai",
        "dex": 491,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "coronet",
    "subregionId": "cloudcap-pass",
    "pokemon": [
      {
        "id": "electabuzz",
        "name": "Electabuzz",
        "dex": 125,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "elekid",
        "name": "Elekid",
        "dex": 239,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "coronet",
    "subregionId": "sonorous-path",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "paras",
        "name": "Paras",
        "dex": 46,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "parasect",
        "name": "Parasect",
        "dex": 47,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "psyduck",
        "name": "Psyduck",
        "dex": 54,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "golduck",
        "name": "Golduck",
        "dex": 55,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "onix",
        "name": "Onix",
        "dex": 95,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "rhyhorn",
        "name": "Rhyhorn",
        "dex": 111,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "rhydon",
        "name": "Rhydon",
        "dex": 112,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "heracross",
        "name": "Heracross",
        "dex": 214,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "teddiursa",
        "name": "Teddiursa",
        "dex": 216,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "ursaring",
        "name": "Ursaring",
        "dex": 217,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "stantler",
        "name": "Stantler",
        "dex": 234,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "chimecho",
        "name": "Chimecho",
        "dex": 358,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "shinx",
        "name": "Shinx",
        "dex": 403,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "luxio",
        "name": "Luxio",
        "dex": 404,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "luxray",
        "name": "Luxray",
        "dex": 405,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "mothim",
        "name": "Mothim",
        "dex": 414,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bronzor",
        "name": "Bronzor",
        "dex": 436,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "bronzor",
        "name": "Bronzor",
        "dex": 436,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bronzong",
        "name": "Bronzong",
        "dex": 437,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "coronet",
    "subregionId": "ancient-quarry",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "mothim",
        "name": "Mothim",
        "dex": 414,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "stunky",
        "name": "Stunky",
        "dex": 434,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "skuntank",
        "name": "Skuntank",
        "dex": 435,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bronzor",
        "name": "Bronzor",
        "dex": 436,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bronzor",
        "name": "Bronzor",
        "dex": 436,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "bronzong",
        "name": "Bronzong",
        "dex": 437,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "croagunk",
        "name": "Croagunk",
        "dex": 453,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "toxicroak",
        "name": "Toxicroak",
        "dex": 454,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "goomy",
        "name": "Goomy",
        "dex": 704,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "sliggoo",
        "name": "Sliggoo",
        "dex": 705,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "goodra-alpha",
        "name": "Goodra",
        "dex": 706,
        "time": "any",
        "method": "ground",
        "alpha": true
      }
    ]
  },
  {
    "regionId": "coronet",
    "subregionId": "bolderoll-ravine",
    "pokemon": [
      {
        "id": "machop",
        "name": "Machop",
        "dex": 66,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "machoke",
        "name": "Machoke",
        "dex": 67,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "golem-alpha",
        "name": "Golem",
        "dex": 76,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "scyther",
        "name": "Scyther",
        "dex": 123,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "magikarp",
        "name": "Magikarp",
        "dex": 129,
        "time": "any",
        "method": "water"
      },
      {
        "id": "gyarados",
        "name": "Gyarados",
        "dex": 130,
        "time": "any",
        "method": "water"
      },
      {
        "id": "sneasel",
        "name": "Sneasel",
        "dex": 215,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "nosepass",
        "name": "Nosepass",
        "dex": 299,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "cherubi",
        "name": "Cherubi",
        "dex": 420,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "cherrim",
        "name": "Cherrim",
        "dex": 421,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "bronzor",
        "name": "Bronzor",
        "dex": 436,
        "time": "any",
        "method": "ore"
      }
    ]
  },
  {
    "regionId": "coronet",
    "subregionId": "stonetooth-rows",
    "pokemon": [
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "cherubi",
        "name": "Cherubi",
        "dex": 420,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "cherrim",
        "name": "Cherrim",
        "dex": 421,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "bronzor",
        "name": "Bronzor",
        "dex": 436,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "bronzong",
        "name": "Bronzong",
        "dex": 437,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "rotom",
        "name": "Rotom",
        "dex": 479,
        "time": "day",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "coronet",
    "subregionId": "primeval-grotto",
    "pokemon": [
      {
        "id": "geodude",
        "name": "Geodude",
        "dex": 74,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "voltorb",
        "name": "Voltorb",
        "dex": 100,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "sudowoodo",
        "name": "Sudowoodo",
        "dex": 185,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "misdreavus",
        "name": "Misdreavus",
        "dex": 200,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "gligar",
        "name": "Gligar",
        "dex": 207,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "sneasel",
        "name": "Sneasel",
        "dex": 215,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "nosepass",
        "name": "Nosepass",
        "dex": 299,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "nosepass",
        "name": "Nosepass",
        "dex": 299,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "cherubi",
        "name": "Cherubi",
        "dex": 420,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "cherrim",
        "name": "Cherrim",
        "dex": 421,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "bronzor",
        "name": "Bronzor",
        "dex": 436,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "bronzor",
        "name": "Bronzor",
        "dex": 436,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bronzong",
        "name": "Bronzong",
        "dex": 437,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bonsly",
        "name": "Bonsly",
        "dex": 438,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "gabite-alpha",
        "name": "Gabite",
        "dex": 444,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "gliscor-alpha",
        "name": "Gliscor",
        "dex": 472,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "probopass-alpha",
        "name": "Probopass",
        "dex": 476,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "rotom",
        "name": "Rotom",
        "dex": 479,
        "time": "any",
        "method": "ore"
      }
    ]
  },
  {
    "regionId": "coronet",
    "subregionId": "wayward-wood",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "paras",
        "name": "Paras",
        "dex": 46,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "parasect",
        "name": "Parasect",
        "dex": 47,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "heracross",
        "name": "Heracross",
        "dex": 214,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "heracross",
        "name": "Heracross",
        "dex": 214,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "mothim",
        "name": "Mothim",
        "dex": 414,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "mothim-alpha",
        "name": "Mothim",
        "dex": 414,
        "time": "day",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "bronzor",
        "name": "Bronzor",
        "dex": 436,
        "time": "any",
        "method": "ore"
      }
    ]
  },
  {
    "regionId": "coronet",
    "subregionId": "wayward-cave",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "paras",
        "name": "Paras",
        "dex": 46,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "parasect",
        "name": "Parasect",
        "dex": 47,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "yanma",
        "name": "Yanma",
        "dex": 193,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "heracross",
        "name": "Heracross",
        "dex": 214,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "luxio",
        "name": "Luxio",
        "dex": 404,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "luxray",
        "name": "Luxray",
        "dex": 405,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "yanmega",
        "name": "Yanmega",
        "dex": 469,
        "time": "day",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "coronet",
    "subregionId": "stone-portal",
    "pokemon": [
      {
        "id": "machop",
        "name": "Machop",
        "dex": 66,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "machoke",
        "name": "Machoke",
        "dex": 67,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "electabuzz",
        "name": "Electabuzz",
        "dex": 125,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gligar",
        "name": "Gligar",
        "dex": 207,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "elekid",
        "name": "Elekid",
        "dex": 239,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "nosepass",
        "name": "Nosepass",
        "dex": 299,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "electivire-alpha",
        "name": "Electivire",
        "dex": 466,
        "time": "any",
        "method": "ground",
        "alpha": true
      }
    ]
  },
  {
    "regionId": "alabaster",
    "subregionId": "snowfields-camp",
    "pokemon": [
      {
        "id": "gligar",
        "name": "Gligar",
        "dex": 207,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "sneasel",
        "name": "Sneasel",
        "dex": 215,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "swinub",
        "name": "Swinub",
        "dex": 220,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "piloswine",
        "name": "Piloswine",
        "dex": 221,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "stantler",
        "name": "Stantler",
        "dex": 234,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "bidoof",
        "name": "Bidoof",
        "dex": 399,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "bibarel",
        "name": "Bibarel",
        "dex": 400,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "basculin",
        "name": "Basculin",
        "dex": 550,
        "time": "any",
        "method": "water"
      }
    ]
  },
  {
    "regionId": "alabaster",
    "subregionId": "whiteout-valley",
    "pokemon": [
      {
        "id": "aipom",
        "name": "Aipom",
        "dex": 190,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "bergmite",
        "name": "Bergmite",
        "dex": 712,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "bergmite",
        "name": "Bergmite",
        "dex": 712,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "alabaster",
    "subregionId": "bonechill-wastes",
    "pokemon": [
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "electabuzz",
        "name": "Electabuzz",
        "dex": 125,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "eevee",
        "name": "Eevee",
        "dex": 133,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "aipom",
        "name": "Aipom",
        "dex": 190,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "misdreavus",
        "name": "Misdreavus",
        "dex": 200,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "swinub",
        "name": "Swinub",
        "dex": 220,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "piloswine",
        "name": "Piloswine",
        "dex": 221,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "glalie-alpha",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "ambipom",
        "name": "Ambipom",
        "dex": 424,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "buneary",
        "name": "Buneary",
        "dex": 427,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "lopunny",
        "name": "Lopunny",
        "dex": 428,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "snover",
        "name": "Snover",
        "dex": 459,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "froslass",
        "name": "Froslass",
        "dex": 478,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "zorua",
        "name": "Zorua",
        "dex": 570,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "tornadus",
        "name": "Tornadus",
        "dex": 641,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bergmite",
        "name": "Bergmite",
        "dex": 712,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "bergmite",
        "name": "Bergmite",
        "dex": 712,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "alabaster",
    "subregionId": "avalanche-slopes",
    "pokemon": [
      {
        "id": "chansey",
        "name": "Chansey",
        "dex": 113,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "aipom",
        "name": "Aipom",
        "dex": 190,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "swinub",
        "name": "Swinub",
        "dex": 220,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "piloswine",
        "name": "Piloswine",
        "dex": 221,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "blissey",
        "name": "Blissey",
        "dex": 242,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "duskull",
        "name": "Duskull",
        "dex": 355,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "dusclops",
        "name": "Dusclops",
        "dex": 356,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "ambipom",
        "name": "Ambipom",
        "dex": 424,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "happiny",
        "name": "Happiny",
        "dex": 440,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gible",
        "name": "Gible",
        "dex": 443,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "gible",
        "name": "Gible",
        "dex": 443,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gabite",
        "name": "Gabite",
        "dex": 444,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "garchomp-alpha",
        "name": "Garchomp",
        "dex": 445,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "froslass",
        "name": "Froslass",
        "dex": 478,
        "time": "night",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "alabaster",
    "subregionId": "icebound-falls",
    "pokemon": [
      {
        "id": "machop",
        "name": "Machop",
        "dex": 66,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "machoke",
        "name": "Machoke",
        "dex": 67,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "electabuzz",
        "name": "Electabuzz",
        "dex": 125,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "crobat",
        "name": "Crobat",
        "dex": 169,
        "time": "any",
        "method": "air"
      },
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "riolu",
        "name": "Riolu",
        "dex": 447,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "lucario",
        "name": "Lucario",
        "dex": 448,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "lucario-alpha",
        "name": "Lucario",
        "dex": 448,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "froslass-alpha",
        "name": "Froslass",
        "dex": 478,
        "time": "any",
        "method": "ground",
        "alpha": true
      }
    ]
  },
  {
    "regionId": "alabaster",
    "subregionId": "hearts-crag",
    "pokemon": [
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "eevee",
        "name": "Eevee",
        "dex": 133,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "aipom",
        "name": "Aipom",
        "dex": 190,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "ralts",
        "name": "Ralts",
        "dex": 280,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "kirlia",
        "name": "Kirlia",
        "dex": 281,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "gardevoir-alpha",
        "name": "Gardevoir",
        "dex": 282,
        "time": "day",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "ambipom",
        "name": "Ambipom",
        "dex": 424,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "basculin",
        "name": "Basculin",
        "dex": 550,
        "time": "any",
        "method": "water"
      },
      {
        "id": "rufflet",
        "name": "Rufflet",
        "dex": 627,
        "time": "any",
        "method": "water"
      },
      {
        "id": "rufflet",
        "name": "Rufflet",
        "dex": 627,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "alabaster",
    "subregionId": "glacier-terrace",
    "pokemon": [
      {
        "id": "zubat",
        "name": "Zubat",
        "dex": 41,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "golbat",
        "name": "Golbat",
        "dex": 42,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "graveler",
        "name": "Graveler",
        "dex": 75,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "aipom",
        "name": "Aipom",
        "dex": 190,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gligar",
        "name": "Gligar",
        "dex": 207,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "sneasel",
        "name": "Sneasel",
        "dex": 215,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "ralts",
        "name": "Ralts",
        "dex": 280,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kirlia",
        "name": "Kirlia",
        "dex": 281,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "bronzor",
        "name": "Bronzor",
        "dex": 436,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bronzong",
        "name": "Bronzong",
        "dex": 437,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "snover",
        "name": "Snover",
        "dex": 459,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "abomasnow",
        "name": "Abomasnow",
        "dex": 460,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gallade-alpha",
        "name": "Gallade",
        "dex": 475,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "froslass",
        "name": "Froslass",
        "dex": 478,
        "time": "night",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "alabaster",
    "subregionId": "snowfall-hot-spring",
    "pokemon": [
      {
        "id": "machop",
        "name": "Machop",
        "dex": 66,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "machoke",
        "name": "Machoke",
        "dex": 67,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "lickitung",
        "name": "Lickitung",
        "dex": 108,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "snorlax",
        "name": "Snorlax",
        "dex": 143,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "aipom",
        "name": "Aipom",
        "dex": 190,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "buneary",
        "name": "Buneary",
        "dex": 427,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "lopunny",
        "name": "Lopunny",
        "dex": 428,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "munchlax",
        "name": "Munchlax",
        "dex": 446,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "riolu",
        "name": "Riolu",
        "dex": 447,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "lucario",
        "name": "Lucario",
        "dex": 448,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "alabaster",
    "subregionId": "arenas-approach",
    "pokemon": [
      {
        "id": "electabuzz",
        "name": "Electabuzz",
        "dex": 125,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "eevee",
        "name": "Eevee",
        "dex": 133,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "aipom",
        "name": "Aipom",
        "dex": 190,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "swinub",
        "name": "Swinub",
        "dex": 220,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "piloswine-alpha",
        "name": "Piloswine",
        "dex": 221,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "piloswine",
        "name": "Piloswine",
        "dex": 221,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "blissey",
        "name": "Blissey",
        "dex": 242,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "duskull",
        "name": "Duskull",
        "dex": 355,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "dusclops",
        "name": "Dusclops",
        "dex": 356,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "ambipom",
        "name": "Ambipom",
        "dex": 424,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gible",
        "name": "Gible",
        "dex": 443,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "snover",
        "name": "Snover",
        "dex": 459,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "abomasnow",
        "name": "Abomasnow",
        "dex": 460,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "alabaster",
    "subregionId": "pearl-settlement",
    "pokemon": [
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "eevee",
        "name": "Eevee",
        "dex": 133,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "aipom",
        "name": "Aipom",
        "dex": 190,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "bidoof",
        "name": "Bidoof",
        "dex": 399,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bibarel",
        "name": "Bibarel",
        "dex": 400,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "ambipom",
        "name": "Ambipom",
        "dex": 424,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "froslass",
        "name": "Froslass",
        "dex": 478,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "basculin",
        "name": "Basculin",
        "dex": 550,
        "time": "any",
        "method": "water"
      },
      {
        "id": "rufflet",
        "name": "Rufflet",
        "dex": 627,
        "time": "any",
        "method": "water"
      },
      {
        "id": "rufflet",
        "name": "Rufflet",
        "dex": 627,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bergmite",
        "name": "Bergmite",
        "dex": 712,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "bergmite",
        "name": "Bergmite",
        "dex": 712,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "alabaster",
    "subregionId": "lake-acuity",
    "pokemon": [
      {
        "id": "abra",
        "name": "Abra",
        "dex": 63,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "kadabra",
        "name": "Kadabra",
        "dex": 64,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "sneasel",
        "name": "Sneasel",
        "dex": 215,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "chimecho",
        "name": "Chimecho",
        "dex": 358,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "chimecho-alpha",
        "name": "Chimecho",
        "dex": 358,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "chingling",
        "name": "Chingling",
        "dex": 433,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bronzor",
        "name": "Bronzor",
        "dex": 436,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "bronzor",
        "name": "Bronzor",
        "dex": 436,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bronzong",
        "name": "Bronzong",
        "dex": 437,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "basculin",
        "name": "Basculin",
        "dex": 550,
        "time": "any",
        "method": "water"
      },
      {
        "id": "rufflet",
        "name": "Rufflet",
        "dex": 627,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "rufflet",
        "name": "Rufflet",
        "dex": 627,
        "time": "any",
        "method": "water"
      },
      {
        "id": "bergmite",
        "name": "Bergmite",
        "dex": 712,
        "time": "any",
        "method": "ore"
      }
    ]
  },
  {
    "regionId": "alabaster",
    "subregionId": "snowpoint-temple",
    "pokemon": [
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "rufflet",
        "name": "Rufflet",
        "dex": 627,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "braviary",
        "name": "Braviary",
        "dex": 628,
        "time": "any",
        "method": "air"
      }
    ]
  },
  {
    "regionId": "alabaster",
    "subregionId": "avaluggs-legacy",
    "pokemon": [
      {
        "id": "gastly",
        "name": "Gastly",
        "dex": 92,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "haunter",
        "name": "Haunter",
        "dex": 93,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "misdreavus",
        "name": "Misdreavus",
        "dex": 200,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "sneasel-alpha",
        "name": "Sneasel",
        "dex": 215,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "swinub",
        "name": "Swinub",
        "dex": 220,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "piloswine",
        "name": "Piloswine",
        "dex": 221,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "stantler",
        "name": "Stantler",
        "dex": 234,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "duskull",
        "name": "Duskull",
        "dex": 355,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "dusclops",
        "name": "Dusclops",
        "dex": 356,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "glameow",
        "name": "Glameow",
        "dex": 431,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "purugly",
        "name": "Purugly",
        "dex": 432,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "snover",
        "name": "Snover",
        "dex": 459,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "abomasnow",
        "name": "Abomasnow",
        "dex": 460,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "abomasnow-alpha",
        "name": "Abomasnow",
        "dex": 460,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "mamoswine-alpha",
        "name": "Mamoswine",
        "dex": 473,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "froslass",
        "name": "Froslass",
        "dex": 478,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "basculin",
        "name": "Basculin",
        "dex": 550,
        "time": "any",
        "method": "water"
      },
      {
        "id": "zorua",
        "name": "Zorua",
        "dex": 570,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "zoroark",
        "name": "Zoroark",
        "dex": 571,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bergmite",
        "name": "Bergmite",
        "dex": 712,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bergmite",
        "name": "Bergmite",
        "dex": 712,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "avalugg",
        "name": "Avalugg",
        "dex": 713,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "alabaster",
    "subregionId": "hibernal-cave",
    "pokemon": [
      {
        "id": "chansey",
        "name": "Chansey",
        "dex": 113,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "eevee",
        "name": "Eevee",
        "dex": 133,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "aipom",
        "name": "Aipom",
        "dex": 190,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "ambipom",
        "name": "Ambipom",
        "dex": 424,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "happiny",
        "name": "Happiny",
        "dex": 440,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "froslass",
        "name": "Froslass",
        "dex": 478,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "bergmite",
        "name": "Bergmite",
        "dex": 712,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "bergmite",
        "name": "Bergmite",
        "dex": 712,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "alabaster",
    "subregionId": "icepeak-cavern",
    "pokemon": [
      {
        "id": "gligar",
        "name": "Gligar",
        "dex": 207,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "froslass",
        "name": "Froslass",
        "dex": 478,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "bergmite",
        "name": "Bergmite",
        "dex": 712,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bergmite",
        "name": "Bergmite",
        "dex": 712,
        "time": "any",
        "method": "ore"
      }
    ]
  },
  {
    "regionId": "alabaster",
    "subregionId": "crevasse-passage",
    "pokemon": [
      {
        "id": "machop",
        "name": "Machop",
        "dex": 66,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "machoke",
        "name": "Machoke",
        "dex": 67,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "machamp-alpha",
        "name": "Machamp",
        "dex": 68,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "electabuzz",
        "name": "Electabuzz",
        "dex": 125,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "aipom",
        "name": "Aipom",
        "dex": 190,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "misdreavus",
        "name": "Misdreavus",
        "dex": 200,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gligar",
        "name": "Gligar",
        "dex": 207,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "swinub-alpha",
        "name": "Swinub",
        "dex": 220,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "stantler",
        "name": "Stantler",
        "dex": 234,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "elekid",
        "name": "Elekid",
        "dex": 239,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "duskull",
        "name": "Duskull",
        "dex": 355,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "dusclops",
        "name": "Dusclops",
        "dex": 356,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "bidoof",
        "name": "Bidoof",
        "dex": 399,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "bibarel",
        "name": "Bibarel",
        "dex": 400,
        "time": "day",
        "method": "ground"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "drifloon",
        "name": "Drifloon",
        "dex": 425,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "drifblim",
        "name": "Drifblim",
        "dex": 426,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "glameow",
        "name": "Glameow",
        "dex": 431,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "purugly",
        "name": "Purugly",
        "dex": 432,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "snover",
        "name": "Snover",
        "dex": 459,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "abomasnow",
        "name": "Abomasnow",
        "dex": 460,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "zorua",
        "name": "Zorua",
        "dex": 570,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "zoroark",
        "name": "Zoroark",
        "dex": 571,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "bergmite",
        "name": "Bergmite",
        "dex": 712,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "bergmite",
        "name": "Bergmite",
        "dex": 712,
        "time": "any",
        "method": "ground"
      }
    ]
  },
  {
    "regionId": "alabaster",
    "subregionId": "ice-rock",
    "pokemon": [
      {
        "id": "lickitung",
        "name": "Lickitung",
        "dex": 108,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "electabuzz-alpha",
        "name": "Electabuzz",
        "dex": 125,
        "time": "any",
        "method": "ground",
        "alpha": true
      },
      {
        "id": "eevee",
        "name": "Eevee",
        "dex": 133,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "aipom",
        "name": "Aipom",
        "dex": 190,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "misdreavus",
        "name": "Misdreavus",
        "dex": 200,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "elekid",
        "name": "Elekid",
        "dex": 239,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "duskull",
        "name": "Duskull",
        "dex": 355,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "dusclops",
        "name": "Dusclops",
        "dex": 356,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "snorunt",
        "name": "Snorunt",
        "dex": 361,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "glalie",
        "name": "Glalie",
        "dex": 362,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "burmy",
        "name": "Burmy",
        "dex": 412,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "wormadam",
        "name": "Wormadam",
        "dex": 413,
        "time": "any",
        "method": "tree"
      },
      {
        "id": "ambipom",
        "name": "Ambipom",
        "dex": 424,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gible",
        "name": "Gible",
        "dex": 443,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "gible",
        "name": "Gible",
        "dex": 443,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "gabite",
        "name": "Gabite",
        "dex": 444,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "lickilicky",
        "name": "Lickilicky",
        "dex": 463,
        "time": "any",
        "method": "ground"
      },
      {
        "id": "froslass",
        "name": "Froslass",
        "dex": 478,
        "time": "night",
        "method": "ground"
      },
      {
        "id": "bergmite",
        "name": "Bergmite",
        "dex": 712,
        "time": "any",
        "method": "ore"
      },
      {
        "id": "bergmite",
        "name": "Bergmite",
        "dex": 712,
        "time": "any",
        "method": "ground"
      }
    ]
  }
]

const bySub = new Map(LA_SUBREGION_SPAWNS.map((s) => [s.subregionId, s]))

export function spawnsForSubregion(subregionId: string | null) {
  if (!subregionId) return null
  return bySub.get(subregionId) ?? null
}

export function spawnsForRegion(regionId: HisuiRegionId) {
  return LA_SUBREGION_SPAWNS.filter((s) => s.regionId === regionId)
}

export function hisuiLocationsForDex(dex: number) {
  const hits: { regionId: HisuiRegionId; subregionId: string }[] = []
  for (const entry of LA_SUBREGION_SPAWNS) {
    if (entry.pokemon.some((p) => p.dex === dex)) {
      hits.push({ regionId: entry.regionId, subregionId: entry.subregionId })
    }
  }
  return hits
}
