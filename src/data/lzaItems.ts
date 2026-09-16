import type { Localized } from './markets'

export type LzaItemCategory =
  | 'balls'
  | 'medicine'
  | 'berries'
  | 'tms'
  | 'treasures'
  | 'other'
  | 'key'
  | 'mega'

export type LzaObtainKind =
  | 'shop'
  | 'field'
  | 'mission'
  | 'story'
  | 'research'
  | 'ranked'
  | 'mysteryGift'
  | 'event'
  | 'hyperspace'
  | 'dlc'
  | 'other'

export type LzaItemSource = {
  kind: LzaObtainKind
  label: Localized
}

export type LzaItemPrice = {
  amount: number
  currency: 'pokedollars' | 'megaShards'
  kind: 'buy' | 'sell'
}

export type LzaItem = {
  id: string
  index: number
  category: LzaItemCategory
  name: Localized
  description: Localized
  /** Joined text for search / legacy display */
  source: Localized
  /** Structured obtain locations */
  sources: LzaItemSource[]
  /** Buy or sell value when known */
  price?: LzaItemPrice
  /** PokeAPI item sprite slug */
  sprite: string
  /** TM move name when category is tms */
  move?: Localized
}

export const LZA_ITEM_CATEGORY_KEYS: Record<LzaItemCategory, string> = {
  balls: 'lzaItemsCatBalls',
  medicine: 'lzaItemsCatMedicine',
  berries: 'lzaItemsCatBerries',
  tms: 'lzaItemsCatTms',
  treasures: 'lzaItemsCatTreasures',
  other: 'lzaItemsCatOther',
  key: 'lzaItemsCatKey',
  mega: 'lzaItemsCatMega',
}

export const LZA_OBTAIN_KIND_KEYS: Record<LzaObtainKind, string> = {
  shop: 'lzaObtainShop',
  field: 'lzaObtainField',
  mission: 'lzaObtainMission',
  story: 'lzaObtainStory',
  research: 'lzaObtainResearch',
  ranked: 'lzaObtainRanked',
  mysteryGift: 'lzaObtainMysteryGift',
  event: 'lzaObtainEvent',
  hyperspace: 'lzaObtainHyperspace',
  dlc: 'lzaObtainDlc',
  other: 'lzaObtainOther',
}

export const LZA_ITEM_CATEGORIES: LzaItemCategory[] = [
  'balls',
  'medicine',
  'berries',
  'tms',
  'mega',
  'treasures',
  'other',
  'key',
]

/** Full Legends: Z-A item catalog (Bulbapedia + IGN + Serebii mega locations). */
export const LZA_ITEMS: LzaItem[] = [
  {
    id: 'balls-master-ball-1',
    index: 1,
    category: 'balls',
    name: { en: 'Master Ball', pt: 'Master Ball' },
    description: { en: 'Catches any wild Pokemon without fail', pt: 'Catches any wild Pokemon without fail' },
    source: { en: 'Mable\'s Research Level 49', pt: 'Mable\'s Research Level 49' },
    sources: [
      { kind: 'research', label: { en: 'Mable\'s Research Level 49', pt: 'Mable\'s Research Level 49' } }
    ],
    sprite: 'master-ball',
  },
  {
    id: 'balls-ultra-ball-2',
    index: 2,
    category: 'balls',
    name: { en: 'Ultra Ball', pt: 'Ultra Ball' },
    description: { en: 'Ultra-high-performance Poke Ball', pt: 'Ultra-high-performance Poke Ball' },
    source: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Defeat Courier in Battle Zone (Ranks A-B) · Side Mission 40: A Holovator Without Power · Side Mission 54: Get ENERGIZED · Side Mission 77: Catch Mawile If You Can · Side Mission 137: Fungi-ble Goods · Side Mission 165: The Lumiose Museum Heist · Pokémon Centers / street shops across Lumiose · Hyperspace floating Poké Balls', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Defeat Courier in Battle Zone (Ranks A-B) · Side Mission 40: A Holovator Without Power · Side Mission 54: Get ENERGIZED · Side Mission 77: Catch Mawile If You Can · Side Mission 137: Fungi-ble Goods · Side Mission 165: The Lumiose Museum Heist · Pokémon Centers / street shops across Lumiose · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)' } },
      { kind: 'other', label: { en: 'Defeat Courier in Battle Zone (Ranks A-B)', pt: 'Defeat Courier in Battle Zone (Ranks A-B)' } },
      { kind: 'mission', label: { en: 'Side Mission 40: A Holovator Without Power', pt: 'Side Mission 40: A Holovator Without Power' } },
      { kind: 'mission', label: { en: 'Side Mission 54: Get ENERGIZED', pt: 'Side Mission 54: Get ENERGIZED' } },
      { kind: 'mission', label: { en: 'Side Mission 77: Catch Mawile If You Can', pt: 'Side Mission 77: Catch Mawile If You Can' } },
      { kind: 'mission', label: { en: 'Side Mission 137: Fungi-ble Goods', pt: 'Side Mission 137: Fungi-ble Goods' } },
      { kind: 'mission', label: { en: 'Side Mission 165: The Lumiose Museum Heist', pt: 'Side Mission 165: The Lumiose Museum Heist' } },
      { kind: 'shop', label: { en: 'Pokémon Centers / street shops across Lumiose', pt: 'Pokémon Centers / street shops across Lumiose' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    price: { amount: 800, currency: 'pokedollars', kind: 'buy' },
    sprite: 'ultra-ball',
  },
  {
    id: 'balls-great-ball-3',
    index: 3,
    category: 'balls',
    name: { en: 'Great Ball', pt: 'Great Ball' },
    description: { en: 'Good, high-performance Poke Ball', pt: 'Good, high-performance Poke Ball' },
    source: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Defeat Courier in Battle Zone (Ranks Z-V) · Side Mission 137: Fungi-ble Goods · Pokémon Centers / street shops across Lumiose · Hyperspace floating Poké Balls', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Defeat Courier in Battle Zone (Ranks Z-V) · Side Mission 137: Fungi-ble Goods · Pokémon Centers / street shops across Lumiose · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)' } },
      { kind: 'other', label: { en: 'Defeat Courier in Battle Zone (Ranks Z-V)', pt: 'Defeat Courier in Battle Zone (Ranks Z-V)' } },
      { kind: 'mission', label: { en: 'Side Mission 137: Fungi-ble Goods', pt: 'Side Mission 137: Fungi-ble Goods' } },
      { kind: 'shop', label: { en: 'Pokémon Centers / street shops across Lumiose', pt: 'Pokémon Centers / street shops across Lumiose' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    price: { amount: 600, currency: 'pokedollars', kind: 'buy' },
    sprite: 'great-ball',
  },
  {
    id: 'balls-poke-ball-4',
    index: 4,
    category: 'balls',
    name: { en: 'Poké Ball', pt: 'Poké Ball' },
    description: { en: 'Poké Ball used to catch wild Pokémon.', pt: 'Poké Ball usada para capturar Pokémon selvagens.' },
    source: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Side Mission 2: A Use for an Evolution Stone · Side Mission 19: Poisonous, Paralyzing Strategies · Side Mission 137: Fungi-ble Goods · Pokémon Centers / street shops across Lumiose · Hyperspace floating Poké Balls', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Side Mission 2: A Use for an Evolution Stone · Side Mission 19: Poisonous, Paralyzing Strategies · Side Mission 137: Fungi-ble Goods · Pokémon Centers / street shops across Lumiose · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)' } },
      { kind: 'mission', label: { en: 'Side Mission 2: A Use for an Evolution Stone', pt: 'Side Mission 2: A Use for an Evolution Stone' } },
      { kind: 'mission', label: { en: 'Side Mission 19: Poisonous, Paralyzing Strategies', pt: 'Side Mission 19: Poisonous, Paralyzing Strategies' } },
      { kind: 'mission', label: { en: 'Side Mission 137: Fungi-ble Goods', pt: 'Side Mission 137: Fungi-ble Goods' } },
      { kind: 'shop', label: { en: 'Pokémon Centers / street shops across Lumiose', pt: 'Pokémon Centers / street shops across Lumiose' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    price: { amount: 200, currency: 'pokedollars', kind: 'buy' },
    sprite: 'poke-ball',
  },
  {
    id: 'balls-safari-ball-5',
    index: 5,
    category: 'balls',
    name: { en: 'Safari Ball', pt: 'Safari Ball' },
    description: { en: 'Poké Ball used to catch wild Pokémon.', pt: 'Poké Ball usada para capturar Pokémon selvagens.' },
    source: { en: 'Defeat Collector in 5 Star in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Defeat Collector in 5 Star in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Defeat Collector in 5 Star in Hyperspace Battle Zone', pt: 'Defeat Collector in 5 Star in Hyperspace Battle Zone' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'safari-ball',
  },
  {
    id: 'balls-net-ball-6',
    index: 6,
    category: 'balls',
    name: { en: 'Net Ball', pt: 'Net Ball' },
    description: { en: 'Poke Ball for Water or Bug-type Pokemon', pt: 'Poke Ball for Water or Bug-type Pokemon' },
    source: { en: 'Field loot (Wild Zones · districts / streets) · Side Mission 11: The Kakuna Master · Side Mission 48: All Tied Up · Side Mission 131: Rouge District\'s Utility Hole Covers · Shop: Autumnal Avenue · Hyperspace floating Poké Balls', pt: 'Field loot (Wild Zones · districts / streets) · Side Mission 11: The Kakuna Master · Side Mission 48: All Tied Up · Side Mission 131: Rouge District\'s Utility Hole Covers · Shop: Autumnal Avenue · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets)', pt: 'Field loot (Wild Zones · districts / streets)' } },
      { kind: 'mission', label: { en: 'Side Mission 11: The Kakuna Master', pt: 'Side Mission 11: The Kakuna Master' } },
      { kind: 'mission', label: { en: 'Side Mission 48: All Tied Up', pt: 'Side Mission 48: All Tied Up' } },
      { kind: 'mission', label: { en: 'Side Mission 131: Rouge District\'s Utility Hole Covers', pt: 'Side Mission 131: Rouge District\'s Utility Hole Covers' } },
      { kind: 'shop', label: { en: 'Shop: Autumnal Avenue', pt: 'Shop: Autumnal Avenue' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    sprite: 'net-ball',
  },
  {
    id: 'balls-dive-ball-7',
    index: 7,
    category: 'balls',
    name: { en: 'Dive Ball', pt: 'Dive Ball' },
    description: { en: 'Poke Ball for Pokemon in or on water', pt: 'Poke Ball for Pokemon in or on water' },
    source: { en: 'Field loot (Wild Zones · districts / streets) · Side Mission 55: Carvanha, Menace of the Deep · Shop: Autumnal Avenue · Hyperspace floating Poké Balls', pt: 'Field loot (Wild Zones · districts / streets) · Side Mission 55: Carvanha, Menace of the Deep · Shop: Autumnal Avenue · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets)', pt: 'Field loot (Wild Zones · districts / streets)' } },
      { kind: 'mission', label: { en: 'Side Mission 55: Carvanha, Menace of the Deep', pt: 'Side Mission 55: Carvanha, Menace of the Deep' } },
      { kind: 'shop', label: { en: 'Shop: Autumnal Avenue', pt: 'Shop: Autumnal Avenue' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    sprite: 'dive-ball',
  },
  {
    id: 'balls-nest-ball-8',
    index: 8,
    category: 'balls',
    name: { en: 'Nest Ball', pt: 'Nest Ball' },
    description: { en: 'Poke Ball for low level Pokemon', pt: 'Poke Ball for low level Pokemon' },
    source: { en: 'Field loot (Wild Zones · districts / streets) · Side Mission 13: Stumped at the Fountain · Shop: Autumnal Avenue · Hyperspace floating Poké Balls', pt: 'Field loot (Wild Zones · districts / streets) · Side Mission 13: Stumped at the Fountain · Shop: Autumnal Avenue · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets)', pt: 'Field loot (Wild Zones · districts / streets)' } },
      { kind: 'mission', label: { en: 'Side Mission 13: Stumped at the Fountain', pt: 'Side Mission 13: Stumped at the Fountain' } },
      { kind: 'shop', label: { en: 'Shop: Autumnal Avenue', pt: 'Shop: Autumnal Avenue' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    sprite: 'nest-ball',
  },
  {
    id: 'balls-repeat-ball-9',
    index: 9,
    category: 'balls',
    name: { en: 'Repeat Ball', pt: 'Repeat Ball' },
    description: { en: 'For catching Pokemon you\'ve caught before', pt: 'For catching Pokemon you\'ve caught before' },
    source: { en: 'Field loot (Wild Zones · districts / streets) · Side Mission 46: Pidgeot Soaring High · Side Mission 97: Stop the Runaway Whirlipede · Side Mission 177: Triste Dreams of Tatsugiri · Shop: Autumnal Avenue · Hyperspace floating Poké Balls', pt: 'Field loot (Wild Zones · districts / streets) · Side Mission 46: Pidgeot Soaring High · Side Mission 97: Stop the Runaway Whirlipede · Side Mission 177: Triste Dreams of Tatsugiri · Shop: Autumnal Avenue · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets)', pt: 'Field loot (Wild Zones · districts / streets)' } },
      { kind: 'mission', label: { en: 'Side Mission 46: Pidgeot Soaring High', pt: 'Side Mission 46: Pidgeot Soaring High' } },
      { kind: 'mission', label: { en: 'Side Mission 97: Stop the Runaway Whirlipede', pt: 'Side Mission 97: Stop the Runaway Whirlipede' } },
      { kind: 'mission', label: { en: 'Side Mission 177: Triste Dreams of Tatsugiri', pt: 'Side Mission 177: Triste Dreams of Tatsugiri' } },
      { kind: 'shop', label: { en: 'Shop: Autumnal Avenue', pt: 'Shop: Autumnal Avenue' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    sprite: 'repeat-ball',
  },
  {
    id: 'balls-timer-ball-10',
    index: 10,
    category: 'balls',
    name: { en: 'Timer Ball', pt: 'Timer Ball' },
    description: { en: 'Poke Ball most effective the more actions the target takes', pt: 'Poke Ball most effective the more actions the target takes' },
    source: { en: 'Field loot (Wild Zones · districts / streets) · Shop: Autumnal Avenue · Hyperspace floating Poké Balls', pt: 'Field loot (Wild Zones · districts / streets) · Shop: Autumnal Avenue · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets)', pt: 'Field loot (Wild Zones · districts / streets)' } },
      { kind: 'shop', label: { en: 'Shop: Autumnal Avenue', pt: 'Shop: Autumnal Avenue' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    sprite: 'timer-ball',
  },
  {
    id: 'balls-luxury-ball-11',
    index: 11,
    category: 'balls',
    name: { en: 'Luxury Ball', pt: 'Luxury Ball' },
    description: { en: 'Pokemon grow friendlier when caught with this', pt: 'Pokemon grow friendlier when caught with this' },
    source: { en: 'Field loot (Wild Zones · districts / streets) · Side Mission 119: Le Super-Tournoi de Jacinthe O · Shop: Autumnal Avenue · Hyperspace floating Poké Balls', pt: 'Field loot (Wild Zones · districts / streets) · Side Mission 119: Le Super-Tournoi de Jacinthe O · Shop: Autumnal Avenue · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets)', pt: 'Field loot (Wild Zones · districts / streets)' } },
      { kind: 'mission', label: { en: 'Side Mission 119: Le Super-Tournoi de Jacinthe O', pt: 'Side Mission 119: Le Super-Tournoi de Jacinthe O' } },
      { kind: 'shop', label: { en: 'Shop: Autumnal Avenue', pt: 'Shop: Autumnal Avenue' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    sprite: 'luxury-ball',
  },
  {
    id: 'balls-premier-ball-12',
    index: 12,
    category: 'balls',
    name: { en: 'Premier Ball', pt: 'Premier Ball' },
    description: { en: 'Rare Poke Ball', pt: 'Rare Poke Ball' },
    source: { en: 'Pokémon Center — bonus when buying 10+ Poké Balls at once · Shop: Autumnal Avenue · Side Mission 163: Help Us Pick a Name · Hyperspace floating Poké Balls', pt: 'Pokémon Center — bonus when buying 10+ Poké Balls at once · Shop: Autumnal Avenue · Side Mission 163: Help Us Pick a Name · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'shop', label: { en: 'Pokémon Center — bonus when buying 10+ Poké Balls at once', pt: 'Pokémon Center — bonus when buying 10+ Poké Balls at once' } },
      { kind: 'shop', label: { en: 'Shop: Autumnal Avenue', pt: 'Shop: Autumnal Avenue' } },
      { kind: 'mission', label: { en: 'Side Mission 163: Help Us Pick a Name', pt: 'Side Mission 163: Help Us Pick a Name' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    sprite: 'premier-ball',
  },
  {
    id: 'balls-dusk-ball-13',
    index: 13,
    category: 'balls',
    name: { en: 'Dusk Ball', pt: 'Dusk Ball' },
    description: { en: 'Poke Ball for catching Pokemon at night', pt: 'Poke Ball for catching Pokemon at night' },
    source: { en: 'Field loot (Wild Zones · districts / streets) · Side Mission 25: Trubblesome Patrons · Side Mission 105: Trevenant, the Haunted Elder Tree · Side Mission 131: Rouge District\'s Utility Hole Covers · Shop: Autumnal Avenue · Hyperspace floating Poké Balls', pt: 'Field loot (Wild Zones · districts / streets) · Side Mission 25: Trubblesome Patrons · Side Mission 105: Trevenant, the Haunted Elder Tree · Side Mission 131: Rouge District\'s Utility Hole Covers · Shop: Autumnal Avenue · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets)', pt: 'Field loot (Wild Zones · districts / streets)' } },
      { kind: 'mission', label: { en: 'Side Mission 25: Trubblesome Patrons', pt: 'Side Mission 25: Trubblesome Patrons' } },
      { kind: 'mission', label: { en: 'Side Mission 105: Trevenant, the Haunted Elder Tree', pt: 'Side Mission 105: Trevenant, the Haunted Elder Tree' } },
      { kind: 'mission', label: { en: 'Side Mission 131: Rouge District\'s Utility Hole Covers', pt: 'Side Mission 131: Rouge District\'s Utility Hole Covers' } },
      { kind: 'shop', label: { en: 'Shop: Autumnal Avenue', pt: 'Shop: Autumnal Avenue' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    sprite: 'dusk-ball',
  },
  {
    id: 'balls-heal-ball-14',
    index: 14,
    category: 'balls',
    name: { en: 'Heal Ball', pt: 'Heal Ball' },
    description: { en: 'Poke Ball that restores HP', pt: 'Poke Ball that restores HP' },
    source: { en: 'Field loot (Wild Zones · districts / streets) · Shop: Quasartico Inc. · Side Mission 127: Mime Jr.\'s First Big Job · Shop: Autumnal Avenue · Hyperspace floating Poké Balls', pt: 'Field loot (Wild Zones · districts / streets) · Shop: Quasartico Inc. · Side Mission 127: Mime Jr.\'s First Big Job · Shop: Autumnal Avenue · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets)', pt: 'Field loot (Wild Zones · districts / streets)' } },
      { kind: 'shop', label: { en: 'Shop: Quasartico Inc.', pt: 'Shop: Quasartico Inc.' } },
      { kind: 'mission', label: { en: 'Side Mission 127: Mime Jr.\'s First Big Job', pt: 'Side Mission 127: Mime Jr.\'s First Big Job' } },
      { kind: 'shop', label: { en: 'Shop: Autumnal Avenue', pt: 'Shop: Autumnal Avenue' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    sprite: 'heal-ball',
  },
  {
    id: 'balls-quick-ball-15',
    index: 15,
    category: 'balls',
    name: { en: 'Quick Ball', pt: 'Quick Ball' },
    description: { en: 'More effective at catching Pokemon that haven\'t spotted you', pt: 'More effective at catching Pokemon that haven\'t spotted you' },
    source: { en: 'Field loot (Wild Zones · districts / streets) · Side Mission 80: A Shocking Territorial Dispute · Side Mission 97: Stop the Runaway Whirlipede · Shop: Autumnal Avenue · Hyperspace floating Poké Balls', pt: 'Field loot (Wild Zones · districts / streets) · Side Mission 80: A Shocking Territorial Dispute · Side Mission 97: Stop the Runaway Whirlipede · Shop: Autumnal Avenue · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets)', pt: 'Field loot (Wild Zones · districts / streets)' } },
      { kind: 'mission', label: { en: 'Side Mission 80: A Shocking Territorial Dispute', pt: 'Side Mission 80: A Shocking Territorial Dispute' } },
      { kind: 'mission', label: { en: 'Side Mission 97: Stop the Runaway Whirlipede', pt: 'Side Mission 97: Stop the Runaway Whirlipede' } },
      { kind: 'shop', label: { en: 'Shop: Autumnal Avenue', pt: 'Shop: Autumnal Avenue' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    sprite: 'quick-ball',
  },
  {
    id: 'balls-cherish-ball-16',
    index: 16,
    category: 'balls',
    name: { en: 'Cherish Ball', pt: 'Cherish Ball' },
    description: { en: 'Poké Ball used to catch wild Pokémon.', pt: 'Poké Ball usada para capturar Pokémon selvagens.' },
    source: { en: 'Event / special distribution (not sold in shops)', pt: 'Event / special distribution (not sold in shops)' },
    sources: [
      { kind: 'event', label: { en: 'Event / special distribution (not sold in shops)', pt: 'Event / special distribution (not sold in shops)' } }
    ],
    sprite: 'cherish-ball',
  },
  {
    id: 'medicine-potion-17',
    index: 17,
    category: 'medicine',
    name: { en: 'Potion', pt: 'Poção' },
    description: { en: 'Restores 20 HP to a Pokemon.', pt: 'Restores 20 HP to a Pokemon.' },
    source: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Shop: Quasartico Inc. · Side Mission 2: A Use for an Evolution Stone · Side Mission 19: Poisonous, Paralyzing Strategies · Pokémon Centers / street shops across Lumiose', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Shop: Quasartico Inc. · Side Mission 2: A Use for an Evolution Stone · Side Mission 19: Poisonous, Paralyzing Strategies · Pokémon Centers / street shops across Lumiose' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)' } },
      { kind: 'shop', label: { en: 'Shop: Quasartico Inc.', pt: 'Shop: Quasartico Inc.' } },
      { kind: 'mission', label: { en: 'Side Mission 2: A Use for an Evolution Stone', pt: 'Side Mission 2: A Use for an Evolution Stone' } },
      { kind: 'mission', label: { en: 'Side Mission 19: Poisonous, Paralyzing Strategies', pt: 'Side Mission 19: Poisonous, Paralyzing Strategies' } },
      { kind: 'shop', label: { en: 'Pokémon Centers / street shops across Lumiose', pt: 'Pokémon Centers / street shops across Lumiose' } }
    ],
    price: { amount: 200, currency: 'pokedollars', kind: 'buy' },
    sprite: 'potion',
  },
  {
    id: 'medicine-antidote-18',
    index: 18,
    category: 'medicine',
    name: { en: 'Antidote', pt: 'Antídoto' },
    description: { en: 'Cures Poison status', pt: 'Cures Poison status' },
    source: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Shop: Quasartico Inc. · Pokémon Centers / street shops across Lumiose', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Shop: Quasartico Inc. · Pokémon Centers / street shops across Lumiose' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)' } },
      { kind: 'shop', label: { en: 'Shop: Quasartico Inc.', pt: 'Shop: Quasartico Inc.' } },
      { kind: 'shop', label: { en: 'Pokémon Centers / street shops across Lumiose', pt: 'Pokémon Centers / street shops across Lumiose' } }
    ],
    price: { amount: 200, currency: 'pokedollars', kind: 'buy' },
    sprite: 'antidote',
  },
  {
    id: 'medicine-burn-heal-19',
    index: 19,
    category: 'medicine',
    name: { en: 'Burn Heal', pt: 'Antiquemadura' },
    description: { en: 'Cures Burn status', pt: 'Cures Burn status' },
    source: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Pokémon Centers / street shops across Lumiose', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Pokémon Centers / street shops across Lumiose' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)' } },
      { kind: 'shop', label: { en: 'Pokémon Centers / street shops across Lumiose', pt: 'Pokémon Centers / street shops across Lumiose' } }
    ],
    price: { amount: 300, currency: 'pokedollars', kind: 'buy' },
    sprite: 'burn-heal',
  },
  {
    id: 'medicine-ice-heal-20',
    index: 20,
    category: 'medicine',
    name: { en: 'Ice Heal', pt: 'Antigelante' },
    description: { en: 'Cures Frozen status', pt: 'Cures Frozen status' },
    source: { en: 'Field loot (districts / streets · dungeons / Hyperspace) · Side Mission 52: Numel Frozen Solid · Pokémon Centers / street shops across Lumiose', pt: 'Field loot (districts / streets · dungeons / Hyperspace) · Side Mission 52: Numel Frozen Solid · Pokémon Centers / street shops across Lumiose' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (districts / streets · dungeons / Hyperspace)', pt: 'Field loot (districts / streets · dungeons / Hyperspace)' } },
      { kind: 'mission', label: { en: 'Side Mission 52: Numel Frozen Solid', pt: 'Side Mission 52: Numel Frozen Solid' } },
      { kind: 'shop', label: { en: 'Pokémon Centers / street shops across Lumiose', pt: 'Pokémon Centers / street shops across Lumiose' } }
    ],
    price: { amount: 100, currency: 'pokedollars', kind: 'buy' },
    sprite: 'ice-heal',
  },
  {
    id: 'medicine-awakening-21',
    index: 21,
    category: 'medicine',
    name: { en: 'Awakening', pt: 'Acordar' },
    description: { en: 'Cures Sleep status', pt: 'Cures Sleep status' },
    source: { en: 'Field loot (districts / streets · dungeons / Hyperspace) · Pokémon Centers / street shops across Lumiose', pt: 'Field loot (districts / streets · dungeons / Hyperspace) · Pokémon Centers / street shops across Lumiose' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (districts / streets · dungeons / Hyperspace)', pt: 'Field loot (districts / streets · dungeons / Hyperspace)' } },
      { kind: 'shop', label: { en: 'Pokémon Centers / street shops across Lumiose', pt: 'Pokémon Centers / street shops across Lumiose' } }
    ],
    price: { amount: 100, currency: 'pokedollars', kind: 'buy' },
    sprite: 'awakening',
  },
  {
    id: 'medicine-paralyze-heal-22',
    index: 22,
    category: 'medicine',
    name: { en: 'Paralyze Heal', pt: 'Antiparalisia' },
    description: { en: 'Cures Paralysis status', pt: 'Cures Paralysis status' },
    source: { en: 'Pokemon Center · Loot · Rewards', pt: 'Pokemon Center · Loot · Rewards' },
    sources: [
      { kind: 'other', label: { en: 'Pokemon Center', pt: 'Pokemon Center' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'other', label: { en: 'Rewards', pt: 'Rewards' } }
    ],
    price: { amount: 300, currency: 'pokedollars', kind: 'buy' },
    sprite: 'paralyze-heal',
  },
  {
    id: 'medicine-full-restore-23',
    index: 23,
    category: 'medicine',
    name: { en: 'Full Restore', pt: 'Restaurar Tudo' },
    description: { en: 'Fully restores HP and cures any status condition.', pt: 'Fully restores HP and cures any status condition.' },
    source: { en: 'Bleu District (Bleu Sector 5), Rouge District (Rouge Sector 6), North Boulevard, Lysandre Labs (B1F) · Side Mission 92: The Beldum Blockade · Side Mission 109: Wondrous Self-Healing Pokémon · Pokémon Centers / street shops across Lumiose', pt: 'Bleu District (Bleu Sector 5), Rouge District (Rouge Sector 6), North Boulevard, Lysandre Labs (B1F) · Side Mission 92: The Beldum Blockade · Side Mission 109: Wondrous Self-Healing Pokémon · Pokémon Centers / street shops across Lumiose' },
    sources: [
      { kind: 'field', label: { en: 'Bleu District (Bleu Sector 5), Rouge District (Rouge Sector 6), North Boulevard, Lysandre Labs (B1F)', pt: 'Bleu District (Bleu Sector 5), Rouge District (Rouge Sector 6), North Boulevard, Lysandre Labs (B1F)' } },
      { kind: 'mission', label: { en: 'Side Mission 92: The Beldum Blockade', pt: 'Side Mission 92: The Beldum Blockade' } },
      { kind: 'mission', label: { en: 'Side Mission 109: Wondrous Self-Healing Pokémon', pt: 'Side Mission 109: Wondrous Self-Healing Pokémon' } },
      { kind: 'shop', label: { en: 'Pokémon Centers / street shops across Lumiose', pt: 'Pokémon Centers / street shops across Lumiose' } }
    ],
    price: { amount: 3000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'full-restore',
  },
  {
    id: 'medicine-max-potion-24',
    index: 24,
    category: 'medicine',
    name: { en: 'Max Potion', pt: 'Poção Máxima' },
    description: { en: 'Fully restores HP to a Pokemon.', pt: 'Fully restores HP to a Pokemon.' },
    source: { en: 'Pokemon Center (after reaching a certain point in the story) · Wild Zone 11 · Centrico Plaza · Bleu Sector 7 · Justice Dojo Loot', pt: 'Pokemon Center (after reaching a certain point in the story) · Wild Zone 11 · Centrico Plaza · Bleu Sector 7 · Justice Dojo Loot' },
    sources: [
      { kind: 'story', label: { en: 'Pokemon Center (after reaching a certain point in the story)', pt: 'Pokemon Center (after reaching a certain point in the story)' } },
      { kind: 'field', label: { en: 'Wild Zone 11', pt: 'Wild Zone 11' } },
      { kind: 'field', label: { en: 'Centrico Plaza', pt: 'Centrico Plaza' } },
      { kind: 'field', label: { en: 'Bleu Sector 7', pt: 'Bleu Sector 7' } },
      { kind: 'other', label: { en: 'Justice Dojo Loot', pt: 'Justice Dojo Loot' } }
    ],
    price: { amount: 2500, currency: 'pokedollars', kind: 'buy' },
    sprite: 'max-potion',
  },
  {
    id: 'medicine-hyper-potion-25',
    index: 25,
    category: 'medicine',
    name: { en: 'Hyper Potion', pt: 'Hiper Poção' },
    description: { en: 'Restores 120 HP to a Pokemon.', pt: 'Restores 120 HP to a Pokemon.' },
    source: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Side Mission 83: Honedge\'s Cutting Edge · Pokémon Centers / street shops across Lumiose', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Side Mission 83: Honedge\'s Cutting Edge · Pokémon Centers / street shops across Lumiose' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)' } },
      { kind: 'mission', label: { en: 'Side Mission 83: Honedge\'s Cutting Edge', pt: 'Side Mission 83: Honedge\'s Cutting Edge' } },
      { kind: 'shop', label: { en: 'Pokémon Centers / street shops across Lumiose', pt: 'Pokémon Centers / street shops across Lumiose' } }
    ],
    price: { amount: 1500, currency: 'pokedollars', kind: 'buy' },
    sprite: 'potion',
  },
  {
    id: 'medicine-super-potion-26',
    index: 26,
    category: 'medicine',
    name: { en: 'Super Potion', pt: 'Super Poção' },
    description: { en: 'Restores 60 HP to a Pokemon.', pt: 'Restores 60 HP to a Pokemon.' },
    source: { en: 'Field loot (Wild Zones · districts / streets) · Shop: Quasartico Inc. · Side Mission 15: A Sensitive Audino · Side Mission 41: Watch Out for Traps · Pokémon Centers / street shops across Lumiose', pt: 'Field loot (Wild Zones · districts / streets) · Shop: Quasartico Inc. · Side Mission 15: A Sensitive Audino · Side Mission 41: Watch Out for Traps · Pokémon Centers / street shops across Lumiose' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets)', pt: 'Field loot (Wild Zones · districts / streets)' } },
      { kind: 'shop', label: { en: 'Shop: Quasartico Inc.', pt: 'Shop: Quasartico Inc.' } },
      { kind: 'mission', label: { en: 'Side Mission 15: A Sensitive Audino', pt: 'Side Mission 15: A Sensitive Audino' } },
      { kind: 'mission', label: { en: 'Side Mission 41: Watch Out for Traps', pt: 'Side Mission 41: Watch Out for Traps' } },
      { kind: 'shop', label: { en: 'Pokémon Centers / street shops across Lumiose', pt: 'Pokémon Centers / street shops across Lumiose' } }
    ],
    price: { amount: 700, currency: 'pokedollars', kind: 'buy' },
    sprite: 'super-potion',
  },
  {
    id: 'medicine-full-heal-27',
    index: 27,
    category: 'medicine',
    name: { en: 'Full Heal', pt: 'Cura Total' },
    description: { en: 'Cures any status condition', pt: 'Cures any status condition' },
    source: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Side Mission 71: The Burning Gaze of Watchog · Pokémon Centers / street shops across Lumiose', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Side Mission 71: The Burning Gaze of Watchog · Pokémon Centers / street shops across Lumiose' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)' } },
      { kind: 'mission', label: { en: 'Side Mission 71: The Burning Gaze of Watchog', pt: 'Side Mission 71: The Burning Gaze of Watchog' } },
      { kind: 'shop', label: { en: 'Pokémon Centers / street shops across Lumiose', pt: 'Pokémon Centers / street shops across Lumiose' } }
    ],
    price: { amount: 400, currency: 'pokedollars', kind: 'buy' },
    sprite: 'full-heal',
  },
  {
    id: 'medicine-revive-28',
    index: 28,
    category: 'medicine',
    name: { en: 'Revive', pt: 'Reanimador' },
    description: { en: 'Restores half the fainted Pokémon\'s HP', pt: 'Restores half the fainted Pokémon\'s HP' },
    source: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Shop: Quasartico Inc. · Defeat Courier in Battle Zone (Ranks A-B) · Side Mission 3: Sableye in the Cemetery · Side Mission 15: A Sensitive Audino · Side Mission 23: Underneath the Holovator · Side Mission 47: Becoming a Furfrou Trimmer · Side Mission 62: Becoming a Pro Furfrou Trimmer · Pokémon Centers / street shops across Lumiose', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Shop: Quasartico Inc. · Defeat Courier in Battle Zone (Ranks A-B) · Side Mission 3: Sableye in the Cemetery · Side Mission 15: A Sensitive Audino · Side Mission 23: Underneath the Holovator · Side Mission 47: Becoming a Furfrou Trimmer · Side Mission 62: Becoming a Pro Furfrou Trimmer · Pokémon Centers / street shops across Lumiose' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)' } },
      { kind: 'shop', label: { en: 'Shop: Quasartico Inc.', pt: 'Shop: Quasartico Inc.' } },
      { kind: 'other', label: { en: 'Defeat Courier in Battle Zone (Ranks A-B)', pt: 'Defeat Courier in Battle Zone (Ranks A-B)' } },
      { kind: 'mission', label: { en: 'Side Mission 3: Sableye in the Cemetery', pt: 'Side Mission 3: Sableye in the Cemetery' } },
      { kind: 'mission', label: { en: 'Side Mission 15: A Sensitive Audino', pt: 'Side Mission 15: A Sensitive Audino' } },
      { kind: 'mission', label: { en: 'Side Mission 23: Underneath the Holovator', pt: 'Side Mission 23: Underneath the Holovator' } },
      { kind: 'mission', label: { en: 'Side Mission 47: Becoming a Furfrou Trimmer', pt: 'Side Mission 47: Becoming a Furfrou Trimmer' } },
      { kind: 'mission', label: { en: 'Side Mission 62: Becoming a Pro Furfrou Trimmer', pt: 'Side Mission 62: Becoming a Pro Furfrou Trimmer' } },
      { kind: 'shop', label: { en: 'Pokémon Centers / street shops across Lumiose', pt: 'Pokémon Centers / street shops across Lumiose' } }
    ],
    price: { amount: 2000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'revive',
  },
  {
    id: 'medicine-max-revive-29',
    index: 29,
    category: 'medicine',
    name: { en: 'Max Revive', pt: 'Reanimador Máximo' },
    description: { en: 'Full restores a fainted Pokémon\'s HP', pt: 'Full restores a fainted Pokémon\'s HP' },
    source: { en: 'Mission Rewards · Loot', pt: 'Mission Rewards · Loot' },
    sources: [
      { kind: 'other', label: { en: 'Mission Rewards', pt: 'Mission Rewards' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    price: { amount: 4000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'max-revive',
  },
  {
    id: 'medicine-fresh-water-30',
    index: 30,
    category: 'medicine',
    name: { en: 'Fresh Water', pt: 'Água Fresca' },
    description: { en: 'Restores 30 HP', pt: 'Restores 30 HP' },
    source: { en: 'Various NPCs at Newspaper-like Stands · Cafes', pt: 'Various NPCs at Newspaper-like Stands · Cafes' },
    sources: [
      { kind: 'other', label: { en: 'Various NPCs at Newspaper-like Stands', pt: 'Various NPCs at Newspaper-like Stands' } },
      { kind: 'other', label: { en: 'Cafes', pt: 'Cafes' } }
    ],
    sprite: 'fresh-water',
  },
  {
    id: 'medicine-soda-pop-31',
    index: 31,
    category: 'medicine',
    name: { en: 'Soda Pop', pt: 'Refrigerante' },
    description: { en: 'Restores 50 HP', pt: 'Restores 50 HP' },
    source: { en: 'Various NPCs at Newspaper-like Stands', pt: 'Various NPCs at Newspaper-like Stands' },
    sources: [
      { kind: 'other', label: { en: 'Various NPCs at Newspaper-like Stands', pt: 'Various NPCs at Newspaper-like Stands' } }
    ],
    sprite: 'soda-pop',
  },
  {
    id: 'medicine-lemonade-32',
    index: 32,
    category: 'medicine',
    name: { en: 'Lemonade', pt: 'Limonada' },
    description: { en: 'Restores 70 HP', pt: 'Restores 70 HP' },
    source: { en: 'Various NPCs at Newspaper-like Stands', pt: 'Various NPCs at Newspaper-like Stands' },
    sources: [
      { kind: 'other', label: { en: 'Various NPCs at Newspaper-like Stands', pt: 'Various NPCs at Newspaper-like Stands' } }
    ],
    sprite: 'lemonade',
  },
  {
    id: 'medicine-moomoo-milk-33',
    index: 33,
    category: 'medicine',
    name: { en: 'Moomoo Milk', pt: 'Leite Moomoo' },
    description: { en: 'Restores 100 HP', pt: 'Restores 100 HP' },
    source: { en: 'Various NPCs at Newspaper-like Stands', pt: 'Various NPCs at Newspaper-like Stands' },
    sources: [
      { kind: 'other', label: { en: 'Various NPCs at Newspaper-like Stands', pt: 'Various NPCs at Newspaper-like Stands' } }
    ],
    sprite: 'moomoo-milk',
  },
  {
    id: 'other-hp-up-45',
    index: 45,
    category: 'other',
    name: { en: 'HP Up', pt: 'HP Up' },
    description: { en: 'Raises base HP stat', pt: 'Raises base HP stat' },
    source: { en: 'Field loot (districts / streets · dungeons / Hyperspace) · Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Courier in Battle Zone (Rank Infinite) · Side Mission 18: A Pan-tastic Pot of Tea · Side Mission 94: Full Course of Battles: Three Stars · Side Mission 135: Cubone\'s Survey · Side Mission 178: Dondozo Down in the Dumps · Side Mission 179: A Sub-30-Second Loss · Pokémon Centers / street shops across Lumiose', pt: 'Field loot (districts / streets · dungeons / Hyperspace) · Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Courier in Battle Zone (Rank Infinite) · Side Mission 18: A Pan-tastic Pot of Tea · Side Mission 94: Full Course of Battles: Three Stars · Side Mission 135: Cubone\'s Survey · Side Mission 178: Dondozo Down in the Dumps · Side Mission 179: A Sub-30-Second Loss · Pokémon Centers / street shops across Lumiose' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (districts / streets · dungeons / Hyperspace)', pt: 'Field loot (districts / streets · dungeons / Hyperspace)' } },
      { kind: 'shop', label: { en: 'Shop: Quasartico Inc.', pt: 'Shop: Quasartico Inc.' } },
      { kind: 'other', label: { en: 'Z-A Infinite Royale reward match', pt: 'Z-A Infinite Royale reward match' } },
      { kind: 'other', label: { en: 'Defeat Courier in Battle Zone (Rank Infinite)', pt: 'Defeat Courier in Battle Zone (Rank Infinite)' } },
      { kind: 'mission', label: { en: 'Side Mission 18: A Pan-tastic Pot of Tea', pt: 'Side Mission 18: A Pan-tastic Pot of Tea' } },
      { kind: 'mission', label: { en: 'Side Mission 94: Full Course of Battles: Three Stars', pt: 'Side Mission 94: Full Course of Battles: Three Stars' } },
      { kind: 'mission', label: { en: 'Side Mission 135: Cubone\'s Survey', pt: 'Side Mission 135: Cubone\'s Survey' } },
      { kind: 'mission', label: { en: 'Side Mission 178: Dondozo Down in the Dumps', pt: 'Side Mission 178: Dondozo Down in the Dumps' } },
      { kind: 'mission', label: { en: 'Side Mission 179: A Sub-30-Second Loss', pt: 'Side Mission 179: A Sub-30-Second Loss' } },
      { kind: 'shop', label: { en: 'Pokémon Centers / street shops across Lumiose', pt: 'Pokémon Centers / street shops across Lumiose' } }
    ],
    price: { amount: 10000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'hp-up',
  },
  {
    id: 'other-protein-46',
    index: 46,
    category: 'other',
    name: { en: 'Protein', pt: 'Protein' },
    description: { en: 'Raises base Attack stat', pt: 'Raises base Attack stat' },
    source: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Courier in Battle Zone (Rank Infinite) · Side Mission 29: Full Course of Battles: One Star · Side Mission 38: Chasing Status · Side Mission 115: Tyrantrum\'s Furious Jaws · Side Mission 135: Cubone\'s Survey · Pokémon Centers / street shops across Lumiose', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Courier in Battle Zone (Rank Infinite) · Side Mission 29: Full Course of Battles: One Star · Side Mission 38: Chasing Status · Side Mission 115: Tyrantrum\'s Furious Jaws · Side Mission 135: Cubone\'s Survey · Pokémon Centers / street shops across Lumiose' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)' } },
      { kind: 'shop', label: { en: 'Shop: Quasartico Inc.', pt: 'Shop: Quasartico Inc.' } },
      { kind: 'other', label: { en: 'Z-A Infinite Royale reward match', pt: 'Z-A Infinite Royale reward match' } },
      { kind: 'other', label: { en: 'Defeat Courier in Battle Zone (Rank Infinite)', pt: 'Defeat Courier in Battle Zone (Rank Infinite)' } },
      { kind: 'mission', label: { en: 'Side Mission 29: Full Course of Battles: One Star', pt: 'Side Mission 29: Full Course of Battles: One Star' } },
      { kind: 'mission', label: { en: 'Side Mission 38: Chasing Status', pt: 'Side Mission 38: Chasing Status' } },
      { kind: 'mission', label: { en: 'Side Mission 115: Tyrantrum\'s Furious Jaws', pt: 'Side Mission 115: Tyrantrum\'s Furious Jaws' } },
      { kind: 'mission', label: { en: 'Side Mission 135: Cubone\'s Survey', pt: 'Side Mission 135: Cubone\'s Survey' } },
      { kind: 'shop', label: { en: 'Pokémon Centers / street shops across Lumiose', pt: 'Pokémon Centers / street shops across Lumiose' } }
    ],
    price: { amount: 10000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'protein',
  },
  {
    id: 'other-iron-47',
    index: 47,
    category: 'other',
    name: { en: 'Iron', pt: 'Iron' },
    description: { en: 'Raises Defense stat', pt: 'Raises Defense stat' },
    source: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Courier in Battle Zone (Rank Infinite) · Side Mission 29: Full Course of Battles: One Star · Side Mission 178: Dondozo Down in the Dumps · Side Mission 179: A Sub-30-Second Loss · Pokémon Centers / street shops across Lumiose', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Courier in Battle Zone (Rank Infinite) · Side Mission 29: Full Course of Battles: One Star · Side Mission 178: Dondozo Down in the Dumps · Side Mission 179: A Sub-30-Second Loss · Pokémon Centers / street shops across Lumiose' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)' } },
      { kind: 'shop', label: { en: 'Shop: Quasartico Inc.', pt: 'Shop: Quasartico Inc.' } },
      { kind: 'other', label: { en: 'Z-A Infinite Royale reward match', pt: 'Z-A Infinite Royale reward match' } },
      { kind: 'other', label: { en: 'Defeat Courier in Battle Zone (Rank Infinite)', pt: 'Defeat Courier in Battle Zone (Rank Infinite)' } },
      { kind: 'mission', label: { en: 'Side Mission 29: Full Course of Battles: One Star', pt: 'Side Mission 29: Full Course of Battles: One Star' } },
      { kind: 'mission', label: { en: 'Side Mission 178: Dondozo Down in the Dumps', pt: 'Side Mission 178: Dondozo Down in the Dumps' } },
      { kind: 'mission', label: { en: 'Side Mission 179: A Sub-30-Second Loss', pt: 'Side Mission 179: A Sub-30-Second Loss' } },
      { kind: 'shop', label: { en: 'Pokémon Centers / street shops across Lumiose', pt: 'Pokémon Centers / street shops across Lumiose' } }
    ],
    price: { amount: 10000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'iron',
  },
  {
    id: 'other-carbos-48',
    index: 48,
    category: 'other',
    name: { en: 'Carbos', pt: 'Carbos' },
    description: { en: 'Raises Speed', pt: 'Raises Speed' },
    source: { en: 'Field loot (Wild Zones · districts / streets) · Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Courier in Battle Zone (Rank Infinite) · Side Mission 63: An Extra-Large Gogoat · Side Mission 94: Full Course of Battles: Three Stars · Pokémon Centers / street shops across Lumiose', pt: 'Field loot (Wild Zones · districts / streets) · Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Courier in Battle Zone (Rank Infinite) · Side Mission 63: An Extra-Large Gogoat · Side Mission 94: Full Course of Battles: Three Stars · Pokémon Centers / street shops across Lumiose' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets)', pt: 'Field loot (Wild Zones · districts / streets)' } },
      { kind: 'shop', label: { en: 'Shop: Quasartico Inc.', pt: 'Shop: Quasartico Inc.' } },
      { kind: 'other', label: { en: 'Z-A Infinite Royale reward match', pt: 'Z-A Infinite Royale reward match' } },
      { kind: 'other', label: { en: 'Defeat Courier in Battle Zone (Rank Infinite)', pt: 'Defeat Courier in Battle Zone (Rank Infinite)' } },
      { kind: 'mission', label: { en: 'Side Mission 63: An Extra-Large Gogoat', pt: 'Side Mission 63: An Extra-Large Gogoat' } },
      { kind: 'mission', label: { en: 'Side Mission 94: Full Course of Battles: Three Stars', pt: 'Side Mission 94: Full Course of Battles: Three Stars' } },
      { kind: 'shop', label: { en: 'Pokémon Centers / street shops across Lumiose', pt: 'Pokémon Centers / street shops across Lumiose' } }
    ],
    price: { amount: 10000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'carbos',
  },
  {
    id: 'other-calcium-49',
    index: 49,
    category: 'other',
    name: { en: 'Calcium', pt: 'Calcium' },
    description: { en: 'Raises Sp. Atk', pt: 'Raises Sp. Atk' },
    source: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Courier in Battle Zone (Rank Infinite) · Side Mission 38: Chasing Status · Side Mission 53: The Most Electrifying Eelektrik · Side Mission 60: Full Course of Battles: Two Stars · Side Mission 135: Cubone\'s Survey · Pokémon Centers / street shops across Lumiose', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Courier in Battle Zone (Rank Infinite) · Side Mission 38: Chasing Status · Side Mission 53: The Most Electrifying Eelektrik · Side Mission 60: Full Course of Battles: Two Stars · Side Mission 135: Cubone\'s Survey · Pokémon Centers / street shops across Lumiose' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)' } },
      { kind: 'shop', label: { en: 'Shop: Quasartico Inc.', pt: 'Shop: Quasartico Inc.' } },
      { kind: 'other', label: { en: 'Z-A Infinite Royale reward match', pt: 'Z-A Infinite Royale reward match' } },
      { kind: 'other', label: { en: 'Defeat Courier in Battle Zone (Rank Infinite)', pt: 'Defeat Courier in Battle Zone (Rank Infinite)' } },
      { kind: 'mission', label: { en: 'Side Mission 38: Chasing Status', pt: 'Side Mission 38: Chasing Status' } },
      { kind: 'mission', label: { en: 'Side Mission 53: The Most Electrifying Eelektrik', pt: 'Side Mission 53: The Most Electrifying Eelektrik' } },
      { kind: 'mission', label: { en: 'Side Mission 60: Full Course of Battles: Two Stars', pt: 'Side Mission 60: Full Course of Battles: Two Stars' } },
      { kind: 'mission', label: { en: 'Side Mission 135: Cubone\'s Survey', pt: 'Side Mission 135: Cubone\'s Survey' } },
      { kind: 'shop', label: { en: 'Pokémon Centers / street shops across Lumiose', pt: 'Pokémon Centers / street shops across Lumiose' } }
    ],
    price: { amount: 10000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'calcium',
  },
  {
    id: 'other-rare-candy-50',
    index: 50,
    category: 'other',
    name: { en: 'Rare Candy', pt: 'Doce Raro' },
    description: { en: 'Raises Pokémon\'s level by 1', pt: 'Raises Pokémon\'s level by 1' },
    source: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Defeat Courier in Battle Zone (Rank Infinite) · Side Mission 12: The Many Flowers of Flabébé · Side Mission 25: Trubblesome Patrons · Side Mission 51: Floette Frolicking with Flowers · Side Mission 98: Jumbo Variety Pumpkaboo · Side Mission 116: Show the Power of Aurorus · Side Mission 198: Lida\'s Lament · Side Mission 200: Here in Lumiose City · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Defeat Courier in Battle Zone (Rank Infinite) · Side Mission 12: The Many Flowers of Flabébé · Side Mission 25: Trubblesome Patrons · Side Mission 51: Floette Frolicking with Flowers · Side Mission 98: Jumbo Variety Pumpkaboo · Side Mission 116: Show the Power of Aurorus · Side Mission 198: Lida\'s Lament · Side Mission 200: Here in Lumiose City · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)' } },
      { kind: 'other', label: { en: 'Defeat Courier in Battle Zone (Rank Infinite)', pt: 'Defeat Courier in Battle Zone (Rank Infinite)' } },
      { kind: 'mission', label: { en: 'Side Mission 12: The Many Flowers of Flabébé', pt: 'Side Mission 12: The Many Flowers of Flabébé' } },
      { kind: 'mission', label: { en: 'Side Mission 25: Trubblesome Patrons', pt: 'Side Mission 25: Trubblesome Patrons' } },
      { kind: 'mission', label: { en: 'Side Mission 51: Floette Frolicking with Flowers', pt: 'Side Mission 51: Floette Frolicking with Flowers' } },
      { kind: 'mission', label: { en: 'Side Mission 98: Jumbo Variety Pumpkaboo', pt: 'Side Mission 98: Jumbo Variety Pumpkaboo' } },
      { kind: 'mission', label: { en: 'Side Mission 116: Show the Power of Aurorus', pt: 'Side Mission 116: Show the Power of Aurorus' } },
      { kind: 'mission', label: { en: 'Side Mission 198: Lida\'s Lament', pt: 'Side Mission 198: Lida\'s Lament' } },
      { kind: 'mission', label: { en: 'Side Mission 200: Here in Lumiose City', pt: 'Side Mission 200: Here in Lumiose City' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    price: { amount: 10000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'rare-candy',
  },
  {
    id: 'other-zinc-52',
    index: 52,
    category: 'other',
    name: { en: 'Zinc', pt: 'Zinc' },
    description: { en: 'Raises Sp. Def', pt: 'Raises Sp. Def' },
    source: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Courier in Battle Zone (Rank Infinite) · Side Mission 60: Full Course of Battles: Two Stars · Side Mission 99: Pleasing Aron\'s Palate · Side Mission 178: Dondozo Down in the Dumps · Side Mission 179: A Sub-30-Second Loss · Pokémon Centers / street shops across Lumiose', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Courier in Battle Zone (Rank Infinite) · Side Mission 60: Full Course of Battles: Two Stars · Side Mission 99: Pleasing Aron\'s Palate · Side Mission 178: Dondozo Down in the Dumps · Side Mission 179: A Sub-30-Second Loss · Pokémon Centers / street shops across Lumiose' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)' } },
      { kind: 'shop', label: { en: 'Shop: Quasartico Inc.', pt: 'Shop: Quasartico Inc.' } },
      { kind: 'other', label: { en: 'Z-A Infinite Royale reward match', pt: 'Z-A Infinite Royale reward match' } },
      { kind: 'other', label: { en: 'Defeat Courier in Battle Zone (Rank Infinite)', pt: 'Defeat Courier in Battle Zone (Rank Infinite)' } },
      { kind: 'mission', label: { en: 'Side Mission 60: Full Course of Battles: Two Stars', pt: 'Side Mission 60: Full Course of Battles: Two Stars' } },
      { kind: 'mission', label: { en: 'Side Mission 99: Pleasing Aron\'s Palate', pt: 'Side Mission 99: Pleasing Aron\'s Palate' } },
      { kind: 'mission', label: { en: 'Side Mission 178: Dondozo Down in the Dumps', pt: 'Side Mission 178: Dondozo Down in the Dumps' } },
      { kind: 'mission', label: { en: 'Side Mission 179: A Sub-30-Second Loss', pt: 'Side Mission 179: A Sub-30-Second Loss' } },
      { kind: 'shop', label: { en: 'Pokémon Centers / street shops across Lumiose', pt: 'Pokémon Centers / street shops across Lumiose' } }
    ],
    price: { amount: 10000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'zinc',
  },
  {
    id: 'other-sun-stone-80',
    index: 80,
    category: 'other',
    name: { en: 'Sun Stone', pt: 'Pedra do Sol' },
    description: { en: 'Makes certain Pokemon evolve', pt: 'Makes certain Pokemon evolve' },
    source: { en: 'Field loot (districts / streets · dungeons / Hyperspace) · Side Mission 93: Finding a Place for Heliolisk · Shop: Vernal Avenue', pt: 'Field loot (districts / streets · dungeons / Hyperspace) · Side Mission 93: Finding a Place for Heliolisk · Shop: Vernal Avenue' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (districts / streets · dungeons / Hyperspace)', pt: 'Field loot (districts / streets · dungeons / Hyperspace)' } },
      { kind: 'mission', label: { en: 'Side Mission 93: Finding a Place for Heliolisk', pt: 'Side Mission 93: Finding a Place for Heliolisk' } },
      { kind: 'shop', label: { en: 'Shop: Vernal Avenue', pt: 'Shop: Vernal Avenue' } }
    ],
    price: { amount: 3000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'sun-stone',
  },
  {
    id: 'other-moon-stone-81',
    index: 81,
    category: 'other',
    name: { en: 'Moon Stone', pt: 'Pedra da Lua' },
    description: { en: 'Makes certain Pokemon evolve', pt: 'Makes certain Pokemon evolve' },
    source: { en: 'Field loot (Wild Zones · districts / streets) · Shop: Vernal Avenue', pt: 'Field loot (Wild Zones · districts / streets) · Shop: Vernal Avenue' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets)', pt: 'Field loot (Wild Zones · districts / streets)' } },
      { kind: 'shop', label: { en: 'Shop: Vernal Avenue', pt: 'Shop: Vernal Avenue' } }
    ],
    price: { amount: 3000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'moon-stone',
  },
  {
    id: 'other-fire-stone-82',
    index: 82,
    category: 'other',
    name: { en: 'Fire Stone', pt: 'Pedra de Fogo' },
    description: { en: 'Makes certain Pokemon evolve', pt: 'Makes certain Pokemon evolve' },
    source: { en: 'Stone Emporium · Loot', pt: 'Stone Emporium · Loot' },
    sources: [
      { kind: 'shop', label: { en: 'Stone Emporium', pt: 'Stone Emporium' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    price: { amount: 3000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'fire-stone',
  },
  {
    id: 'other-thunder-stone-83',
    index: 83,
    category: 'other',
    name: { en: 'Thunder Stone', pt: 'Pedra do Trovão' },
    description: { en: 'Makes certain Pokemon evolve', pt: 'Makes certain Pokemon evolve' },
    source: { en: 'Stone Emporium · Loot', pt: 'Stone Emporium · Loot' },
    sources: [
      { kind: 'shop', label: { en: 'Stone Emporium', pt: 'Stone Emporium' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    price: { amount: 3000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'thunder-stone',
  },
  {
    id: 'other-water-stone-84',
    index: 84,
    category: 'other',
    name: { en: 'Water Stone', pt: 'Pedra da Água' },
    description: { en: 'Makes certain Pokemon evolve', pt: 'Makes certain Pokemon evolve' },
    source: { en: 'Stone Emporium · Loot', pt: 'Stone Emporium · Loot' },
    sources: [
      { kind: 'shop', label: { en: 'Stone Emporium', pt: 'Stone Emporium' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    price: { amount: 3000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'water-stone',
  },
  {
    id: 'other-leaf-stone-85',
    index: 85,
    category: 'other',
    name: { en: 'Leaf Stone', pt: 'Pedra da Folha' },
    description: { en: 'Makes certain Pokemon evolve', pt: 'Makes certain Pokemon evolve' },
    source: { en: 'Stone Emporium · Loot', pt: 'Stone Emporium · Loot' },
    sources: [
      { kind: 'shop', label: { en: 'Stone Emporium', pt: 'Stone Emporium' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    price: { amount: 3000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'leaf-stone',
  },
  {
    id: 'treasures-tiny-mushroom-86',
    index: 86,
    category: 'treasures',
    name: { en: 'Tiny Mushroom', pt: 'Cogumelo Pequeno' },
    description: { en: 'A small and rare mushroom', pt: 'A small and rare mushroom' },
    source: { en: 'Loot · Rewards', pt: 'Loot · Rewards' },
    sources: [
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'other', label: { en: 'Rewards', pt: 'Rewards' } }
    ],
    price: { amount: 250, currency: 'pokedollars', kind: 'buy' },
    sprite: 'tiny-mushroom',
  },
  {
    id: 'treasures-pearl-88',
    index: 88,
    category: 'treasures',
    name: { en: 'Pearl', pt: 'Pérola' },
    description: { en: 'A rather small pearl that has a nice silvery sheen to it', pt: 'A rather small pearl that has a nice silvery sheen to it' },
    source: { en: 'Field loot (Wild Zones · districts / streets) · Side Mission 33: Who Has the Bigger Magikarp · Side Mission 37: Binacle by the Boatload · Side Mission 39: Slowpoke for Slowpoke · Side Mission 82: Clauncher Launching Water Gun', pt: 'Field loot (Wild Zones · districts / streets) · Side Mission 33: Who Has the Bigger Magikarp · Side Mission 37: Binacle by the Boatload · Side Mission 39: Slowpoke for Slowpoke · Side Mission 82: Clauncher Launching Water Gun' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets)', pt: 'Field loot (Wild Zones · districts / streets)' } },
      { kind: 'mission', label: { en: 'Side Mission 33: Who Has the Bigger Magikarp', pt: 'Side Mission 33: Who Has the Bigger Magikarp' } },
      { kind: 'mission', label: { en: 'Side Mission 37: Binacle by the Boatload', pt: 'Side Mission 37: Binacle by the Boatload' } },
      { kind: 'mission', label: { en: 'Side Mission 39: Slowpoke for Slowpoke', pt: 'Side Mission 39: Slowpoke for Slowpoke' } },
      { kind: 'mission', label: { en: 'Side Mission 82: Clauncher Launching Water Gun', pt: 'Side Mission 82: Clauncher Launching Water Gun' } }
    ],
    price: { amount: 1000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'pearl',
  },
  {
    id: 'treasures-big-pearl-89',
    index: 89,
    category: 'treasures',
    name: { en: 'Big Pearl', pt: 'Pérola Grande' },
    description: { en: 'A rather large Pearl that has a nice silvery sheen to it', pt: 'A rather large Pearl that has a nice silvery sheen to it' },
    source: { en: 'Field loot (Wild Zones · districts / streets) · Defeat Lady in 5 Star in Hyperspace Battle Zone · Side Mission 78: Inkay\'s Fragrant Ink · Side Mission 82: Clauncher Launching Water Gun · Side Mission 100: Starmie on High · Hyperspace floating Poké Balls', pt: 'Field loot (Wild Zones · districts / streets) · Defeat Lady in 5 Star in Hyperspace Battle Zone · Side Mission 78: Inkay\'s Fragrant Ink · Side Mission 82: Clauncher Launching Water Gun · Side Mission 100: Starmie on High · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets)', pt: 'Field loot (Wild Zones · districts / streets)' } },
      { kind: 'hyperspace', label: { en: 'Defeat Lady in 5 Star in Hyperspace Battle Zone', pt: 'Defeat Lady in 5 Star in Hyperspace Battle Zone' } },
      { kind: 'mission', label: { en: 'Side Mission 78: Inkay\'s Fragrant Ink', pt: 'Side Mission 78: Inkay\'s Fragrant Ink' } },
      { kind: 'mission', label: { en: 'Side Mission 82: Clauncher Launching Water Gun', pt: 'Side Mission 82: Clauncher Launching Water Gun' } },
      { kind: 'mission', label: { en: 'Side Mission 100: Starmie on High', pt: 'Side Mission 100: Starmie on High' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    price: { amount: 4000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'big-pearl',
  },
  {
    id: 'treasures-nugget-92',
    index: 92,
    category: 'treasures',
    name: { en: 'Nugget', pt: 'Pepita' },
    description: { en: 'A nugget of pure gold that can be sold at a high price', pt: 'A nugget of pure gold that can be sold at a high price' },
    source: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Defeat Rich Boy in 5 Star in Hyperspace Battle Zone · Side Mission 6: Long-Range Moves Have Style · Side Mission 106: Klefki\'s Lost Key · Hyperspace floating Poké Balls', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Defeat Rich Boy in 5 Star in Hyperspace Battle Zone · Side Mission 6: Long-Range Moves Have Style · Side Mission 106: Klefki\'s Lost Key · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)' } },
      { kind: 'hyperspace', label: { en: 'Defeat Rich Boy in 5 Star in Hyperspace Battle Zone', pt: 'Defeat Rich Boy in 5 Star in Hyperspace Battle Zone' } },
      { kind: 'mission', label: { en: 'Side Mission 6: Long-Range Moves Have Style', pt: 'Side Mission 6: Long-Range Moves Have Style' } },
      { kind: 'mission', label: { en: 'Side Mission 106: Klefki\'s Lost Key', pt: 'Side Mission 106: Klefki\'s Lost Key' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    price: { amount: 5000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'nugget',
  },
  {
    id: 'other-old-amber-103',
    index: 103,
    category: 'other',
    name: { en: 'Old Amber', pt: 'Old Amber' },
    description: { en: 'A fossil from a prehistoric Pokemon (Aerodactyl)', pt: 'A fossil from a prehistoric Pokemon (Aerodactyl)' },
    source: { en: 'Stone Emporium', pt: 'Stone Emporium' },
    sources: [
      { kind: 'shop', label: { en: 'Stone Emporium', pt: 'Stone Emporium' } }
    ],
    price: { amount: 30000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'old-amber',
  },
  {
    id: 'other-shiny-stone-107',
    index: 107,
    category: 'other',
    name: { en: 'Shiny Stone', pt: 'Pedra Brilhante' },
    description: { en: 'Makes certain Pokemon evolve', pt: 'Makes certain Pokemon evolve' },
    source: { en: 'Field loot (districts / streets · dungeons / Hyperspace) · Shop: Vernal Avenue', pt: 'Field loot (districts / streets · dungeons / Hyperspace) · Shop: Vernal Avenue' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (districts / streets · dungeons / Hyperspace)', pt: 'Field loot (districts / streets · dungeons / Hyperspace)' } },
      { kind: 'shop', label: { en: 'Shop: Vernal Avenue', pt: 'Shop: Vernal Avenue' } }
    ],
    price: { amount: 3000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'shiny-stone',
  },
  {
    id: 'other-dusk-stone-108',
    index: 108,
    category: 'other',
    name: { en: 'Dusk Stone', pt: 'Pedra do Crepúsculo' },
    description: { en: 'Makes certain Pokemon evolve', pt: 'Makes certain Pokemon evolve' },
    source: { en: 'Field loot (districts / streets) · Side Mission 83: Honedge\'s Cutting Edge · Shop: Vernal Avenue', pt: 'Field loot (districts / streets) · Side Mission 83: Honedge\'s Cutting Edge · Shop: Vernal Avenue' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (districts / streets)', pt: 'Field loot (districts / streets)' } },
      { kind: 'mission', label: { en: 'Side Mission 83: Honedge\'s Cutting Edge', pt: 'Side Mission 83: Honedge\'s Cutting Edge' } },
      { kind: 'shop', label: { en: 'Shop: Vernal Avenue', pt: 'Shop: Vernal Avenue' } }
    ],
    price: { amount: 3000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'dusk-stone',
  },
  {
    id: 'other-dawn-stone-109',
    index: 109,
    category: 'other',
    name: { en: 'Dawn Stone', pt: 'Pedra da Alvorada' },
    description: { en: 'Makes certain Pokemon evolve', pt: 'Makes certain Pokemon evolve' },
    source: { en: 'Field loot (districts / streets · dungeons / Hyperspace) · Side Mission 90: Froslass\'s Unfinished Business · Shop: Vernal Avenue', pt: 'Field loot (districts / streets · dungeons / Hyperspace) · Side Mission 90: Froslass\'s Unfinished Business · Shop: Vernal Avenue' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (districts / streets · dungeons / Hyperspace)', pt: 'Field loot (districts / streets · dungeons / Hyperspace)' } },
      { kind: 'mission', label: { en: 'Side Mission 90: Froslass\'s Unfinished Business', pt: 'Side Mission 90: Froslass\'s Unfinished Business' } },
      { kind: 'shop', label: { en: 'Shop: Vernal Avenue', pt: 'Shop: Vernal Avenue' } }
    ],
    price: { amount: 3000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'dawn-stone',
  },
  {
    id: 'other-douse-drive-116',
    index: 116,
    category: 'other',
    name: { en: 'Douse Drive', pt: 'Douse Drive' },
    description: { en: 'Held, evolution, vitamin, or utility item.', pt: 'Item segurado, de evolução, vitamina ou utilitário.' },
    source: { en: 'Shop: Vert District (Vert Sector 7)', pt: 'Shop: Vert District (Vert Sector 7)' },
    sources: [
      { kind: 'shop', label: { en: 'Shop: Vert District (Vert Sector 7)', pt: 'Shop: Vert District (Vert Sector 7)' } }
    ],
    sprite: 'douse-drive',
  },
  {
    id: 'other-shock-drive-117',
    index: 117,
    category: 'other',
    name: { en: 'Shock Drive', pt: 'Shock Drive' },
    description: { en: 'Held, evolution, vitamin, or utility item.', pt: 'Item segurado, de evolução, vitamina ou utilitário.' },
    source: { en: 'Shop: Vert District (Vert Sector 7)', pt: 'Shop: Vert District (Vert Sector 7)' },
    sources: [
      { kind: 'shop', label: { en: 'Shop: Vert District (Vert Sector 7)', pt: 'Shop: Vert District (Vert Sector 7)' } }
    ],
    sprite: 'shock-drive',
  },
  {
    id: 'other-burn-drive-118',
    index: 118,
    category: 'other',
    name: { en: 'Burn Drive', pt: 'Burn Drive' },
    description: { en: 'Held, evolution, vitamin, or utility item.', pt: 'Item segurado, de evolução, vitamina ou utilitário.' },
    source: { en: 'Shop: Vert District (Vert Sector 7)', pt: 'Shop: Vert District (Vert Sector 7)' },
    sources: [
      { kind: 'shop', label: { en: 'Shop: Vert District (Vert Sector 7)', pt: 'Shop: Vert District (Vert Sector 7)' } }
    ],
    sprite: 'burn-drive',
  },
  {
    id: 'other-chill-drive-119',
    index: 119,
    category: 'other',
    name: { en: 'Chill Drive', pt: 'Chill Drive' },
    description: { en: 'Held, evolution, vitamin, or utility item.', pt: 'Item segurado, de evolução, vitamina ou utilitário.' },
    source: { en: 'Shop: Vert District (Vert Sector 7)', pt: 'Shop: Vert District (Vert Sector 7)' },
    sources: [
      { kind: 'shop', label: { en: 'Shop: Vert District (Vert Sector 7)', pt: 'Shop: Vert District (Vert Sector 7)' } }
    ],
    sprite: 'chill-drive',
  },
  {
    id: 'berries-cheri-berry-149',
    index: 149,
    category: 'berries',
    name: { en: 'Cheri Berry', pt: 'Cheri Berry' },
    description: { en: 'Cures paralysis', pt: 'Cures paralysis' },
    source: { en: 'Various NPCs · Loot', pt: 'Various NPCs · Loot' },
    sources: [
      { kind: 'other', label: { en: 'Various NPCs', pt: 'Various NPCs' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'cheri-berry',
  },
  {
    id: 'berries-chesto-berry-150',
    index: 150,
    category: 'berries',
    name: { en: 'Chesto Berry', pt: 'Chesto Berry' },
    description: { en: 'Cures drowsiness', pt: 'Cures drowsiness' },
    source: { en: 'Various NPCs · Loot', pt: 'Various NPCs · Loot' },
    sources: [
      { kind: 'other', label: { en: 'Various NPCs', pt: 'Various NPCs' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'chesto-berry',
  },
  {
    id: 'berries-pecha-berry-151',
    index: 151,
    category: 'berries',
    name: { en: 'Pecha Berry', pt: 'Pecha Berry' },
    description: { en: 'Cures poison', pt: 'Cures poison' },
    source: { en: 'Various NPCs · Loot', pt: 'Various NPCs · Loot' },
    sources: [
      { kind: 'other', label: { en: 'Various NPCs', pt: 'Various NPCs' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'pecha-berry',
  },
  {
    id: 'berries-rawst-berry-152',
    index: 152,
    category: 'berries',
    name: { en: 'Rawst Berry', pt: 'Rawst Berry' },
    description: { en: 'Cures burn', pt: 'Cures burn' },
    source: { en: 'Various NPCs · Loot', pt: 'Various NPCs · Loot' },
    sources: [
      { kind: 'other', label: { en: 'Various NPCs', pt: 'Various NPCs' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'rawst-berry',
  },
  {
    id: 'berries-aspear-berry-153',
    index: 153,
    category: 'berries',
    name: { en: 'Aspear Berry', pt: 'Aspear Berry' },
    description: { en: 'Cures frozen', pt: 'Cures frozen' },
    source: { en: 'Various NPCs · Loot', pt: 'Various NPCs · Loot' },
    sources: [
      { kind: 'other', label: { en: 'Various NPCs', pt: 'Various NPCs' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'aspear-berry',
  },
  {
    id: 'berries-oran-berry-155',
    index: 155,
    category: 'berries',
    name: { en: 'Oran Berry', pt: 'Oran Berry' },
    description: { en: 'Restores 10 HP', pt: 'Restores 10 HP' },
    source: { en: 'Various NPCs · Loot', pt: 'Various NPCs · Loot' },
    sources: [
      { kind: 'other', label: { en: 'Various NPCs', pt: 'Various NPCs' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'oran-berry',
  },
  {
    id: 'berries-persim-berry-156',
    index: 156,
    category: 'berries',
    name: { en: 'Persim Berry', pt: 'Persim Berry' },
    description: { en: 'Cures confusion', pt: 'Cures confusion' },
    source: { en: 'Various NPCs · Loot', pt: 'Various NPCs · Loot' },
    sources: [
      { kind: 'other', label: { en: 'Various NPCs', pt: 'Various NPCs' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'persim-berry',
  },
  {
    id: 'berries-lum-berry-157',
    index: 157,
    category: 'berries',
    name: { en: 'Lum Berry', pt: 'Lum Berry' },
    description: { en: 'Cures any status condition', pt: 'Cures any status condition' },
    source: { en: 'Various NPCs · Loot', pt: 'Various NPCs · Loot' },
    sources: [
      { kind: 'other', label: { en: 'Various NPCs', pt: 'Various NPCs' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'lum-berry',
  },
  {
    id: 'berries-sitrus-berry-158',
    index: 158,
    category: 'berries',
    name: { en: 'Sitrus Berry', pt: 'Sitrus Berry' },
    description: { en: 'Restores small amount of HP', pt: 'Restores small amount of HP' },
    source: { en: 'Various NPCs · Loot', pt: 'Various NPCs · Loot' },
    sources: [
      { kind: 'other', label: { en: 'Various NPCs', pt: 'Various NPCs' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'sitrus-berry',
  },
  {
    id: 'berries-pomeg-berry-169',
    index: 169,
    category: 'berries',
    name: { en: 'Pomeg Berry', pt: 'Pomeg Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Wild Zone 20, Vert District (Vert Sector 8) · Side Mission 89: Up, Up, and Away After Emolga · Side Mission 108: Alola, Raichu · Pokémon Centers / street shops across Lumiose', pt: 'Wild Zone 20, Vert District (Vert Sector 8) · Side Mission 89: Up, Up, and Away After Emolga · Side Mission 108: Alola, Raichu · Pokémon Centers / street shops across Lumiose' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 20, Vert District (Vert Sector 8)', pt: 'Wild Zone 20, Vert District (Vert Sector 8)' } },
      { kind: 'mission', label: { en: 'Side Mission 89: Up, Up, and Away After Emolga', pt: 'Side Mission 89: Up, Up, and Away After Emolga' } },
      { kind: 'mission', label: { en: 'Side Mission 108: Alola, Raichu', pt: 'Side Mission 108: Alola, Raichu' } },
      { kind: 'shop', label: { en: 'Pokémon Centers / street shops across Lumiose', pt: 'Pokémon Centers / street shops across Lumiose' } }
    ],
    sprite: 'pomeg-berry',
  },
  {
    id: 'berries-kelpsy-berry-170',
    index: 170,
    category: 'berries',
    name: { en: 'Kelpsy Berry', pt: 'Kelpsy Berry' },
    description: { en: 'Grows friendlier but loses Attack', pt: 'Grows friendlier but loses Attack' },
    source: { en: 'Various NPCs · Loot', pt: 'Various NPCs · Loot' },
    sources: [
      { kind: 'other', label: { en: 'Various NPCs', pt: 'Various NPCs' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'kelpsy-berry',
  },
  {
    id: 'berries-qualot-berry-171',
    index: 171,
    category: 'berries',
    name: { en: 'Qualot Berry', pt: 'Qualot Berry' },
    description: { en: 'Grows friendlier but loses Defense', pt: 'Grows friendlier but loses Defense' },
    source: { en: 'Various NPCs · Loot', pt: 'Various NPCs · Loot' },
    sources: [
      { kind: 'other', label: { en: 'Various NPCs', pt: 'Various NPCs' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'qualot-berry',
  },
  {
    id: 'berries-hondew-berry-172',
    index: 172,
    category: 'berries',
    name: { en: 'Hondew Berry', pt: 'Hondew Berry' },
    description: { en: 'Grows friendlier but loses Sp. Atk', pt: 'Grows friendlier but loses Sp. Atk' },
    source: { en: 'Various NPCs · Loot', pt: 'Various NPCs · Loot' },
    sources: [
      { kind: 'other', label: { en: 'Various NPCs', pt: 'Various NPCs' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'hondew-berry',
  },
  {
    id: 'berries-grepa-berry-173',
    index: 173,
    category: 'berries',
    name: { en: 'Grepa Berry', pt: 'Grepa Berry' },
    description: { en: 'Grows friendlier but loses Sp. Def', pt: 'Grows friendlier but loses Sp. Def' },
    source: { en: 'Various NPCs · Loot', pt: 'Various NPCs · Loot' },
    sources: [
      { kind: 'other', label: { en: 'Various NPCs', pt: 'Various NPCs' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'grepa-berry',
  },
  {
    id: 'berries-tamato-berry-174',
    index: 174,
    category: 'berries',
    name: { en: 'Tamato Berry', pt: 'Tamato Berry' },
    description: { en: 'Grows friendlier but loses Speed', pt: 'Grows friendlier but loses Speed' },
    source: { en: 'Various NPCs · Loot', pt: 'Various NPCs · Loot' },
    sources: [
      { kind: 'other', label: { en: 'Various NPCs', pt: 'Various NPCs' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'tamato-berry',
  },
  {
    id: 'berries-occa-berry-184',
    index: 184,
    category: 'berries',
    name: { en: 'Occa Berry', pt: 'Occa Berry' },
    description: { en: 'Weakens supereffective Fire move', pt: 'Weakens supereffective Fire move' },
    source: { en: 'Berry Shops · Loot', pt: 'Berry Shops · Loot' },
    sources: [
      { kind: 'shop', label: { en: 'Berry Shops', pt: 'Berry Shops' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'occa-berry',
  },
  {
    id: 'berries-passho-berry-185',
    index: 185,
    category: 'berries',
    name: { en: 'Passho Berry', pt: 'Passho Berry' },
    description: { en: 'Weakens supereffective Water move', pt: 'Weakens supereffective Water move' },
    source: { en: 'Berry Shops · Loot', pt: 'Berry Shops · Loot' },
    sources: [
      { kind: 'shop', label: { en: 'Berry Shops', pt: 'Berry Shops' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'passho-berry',
  },
  {
    id: 'berries-wacan-berry-186',
    index: 186,
    category: 'berries',
    name: { en: 'Wacan Berry', pt: 'Wacan Berry' },
    description: { en: 'Weakens supereffective Electric move', pt: 'Weakens supereffective Electric move' },
    source: { en: 'Side Mission 65 · Berry Shops · Loot', pt: 'Side Mission 65 · Berry Shops · Loot' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 65', pt: 'Side Mission 65' } },
      { kind: 'shop', label: { en: 'Berry Shops', pt: 'Berry Shops' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'wacan-berry',
  },
  {
    id: 'berries-rindo-berry-187',
    index: 187,
    category: 'berries',
    name: { en: 'Rindo Berry', pt: 'Rindo Berry' },
    description: { en: 'Weakens supereffective Grass move', pt: 'Weakens supereffective Grass move' },
    source: { en: 'Side Mission 43 · Berry Shops · Loot', pt: 'Side Mission 43 · Berry Shops · Loot' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 43', pt: 'Side Mission 43' } },
      { kind: 'shop', label: { en: 'Berry Shops', pt: 'Berry Shops' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'rindo-berry',
  },
  {
    id: 'berries-yache-berry-188',
    index: 188,
    category: 'berries',
    name: { en: 'Yache Berry', pt: 'Yache Berry' },
    description: { en: 'Weakens supereffective Ice move', pt: 'Weakens supereffective Ice move' },
    source: { en: 'Berry Shops · Loot', pt: 'Berry Shops · Loot' },
    sources: [
      { kind: 'shop', label: { en: 'Berry Shops', pt: 'Berry Shops' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'yache-berry',
  },
  {
    id: 'berries-chople-berry-189',
    index: 189,
    category: 'berries',
    name: { en: 'Chople Berry', pt: 'Chople Berry' },
    description: { en: 'Weakens supereffective Fighting move', pt: 'Weakens supereffective Fighting move' },
    source: { en: 'Berry Shop · Loot', pt: 'Berry Shop · Loot' },
    sources: [
      { kind: 'shop', label: { en: 'Berry Shop', pt: 'Berry Shop' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'chople-berry',
  },
  {
    id: 'berries-kebia-berry-190',
    index: 190,
    category: 'berries',
    name: { en: 'Kebia Berry', pt: 'Kebia Berry' },
    description: { en: 'Weakens supereffective Poison move', pt: 'Weakens supereffective Poison move' },
    source: { en: 'Berry Shops · Loot', pt: 'Berry Shops · Loot' },
    sources: [
      { kind: 'shop', label: { en: 'Berry Shops', pt: 'Berry Shops' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'kebia-berry',
  },
  {
    id: 'berries-shuca-berry-191',
    index: 191,
    category: 'berries',
    name: { en: 'Shuca Berry', pt: 'Shuca Berry' },
    description: { en: 'Weakens supereffective Ground move', pt: 'Weakens supereffective Ground move' },
    source: { en: 'Berry Shops · Loot', pt: 'Berry Shops · Loot' },
    sources: [
      { kind: 'shop', label: { en: 'Berry Shops', pt: 'Berry Shops' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'shuca-berry',
  },
  {
    id: 'berries-coba-berry-192',
    index: 192,
    category: 'berries',
    name: { en: 'Coba Berry', pt: 'Coba Berry' },
    description: { en: 'Weakens supereffective Flying move', pt: 'Weakens supereffective Flying move' },
    source: { en: 'Side Mission 59 · Berry Shops · Loot', pt: 'Side Mission 59 · Berry Shops · Loot' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 59', pt: 'Side Mission 59' } },
      { kind: 'shop', label: { en: 'Berry Shops', pt: 'Berry Shops' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'coba-berry',
  },
  {
    id: 'berries-payapa-berry-193',
    index: 193,
    category: 'berries',
    name: { en: 'Payapa Berry', pt: 'Payapa Berry' },
    description: { en: 'Weakens supereffective Psychic move', pt: 'Weakens supereffective Psychic move' },
    source: { en: 'Berry Shops · Loot', pt: 'Berry Shops · Loot' },
    sources: [
      { kind: 'shop', label: { en: 'Berry Shops', pt: 'Berry Shops' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'payapa-berry',
  },
  {
    id: 'berries-tanga-berry-194',
    index: 194,
    category: 'berries',
    name: { en: 'Tanga Berry', pt: 'Tanga Berry' },
    description: { en: 'Weakens supereffective Bug move', pt: 'Weakens supereffective Bug move' },
    source: { en: 'Berry Shops · Loot', pt: 'Berry Shops · Loot' },
    sources: [
      { kind: 'shop', label: { en: 'Berry Shops', pt: 'Berry Shops' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'tanga-berry',
  },
  {
    id: 'berries-charti-berry-195',
    index: 195,
    category: 'berries',
    name: { en: 'Charti Berry', pt: 'Charti Berry' },
    description: { en: 'Weakens supereffective Rock moves', pt: 'Weakens supereffective Rock moves' },
    source: { en: 'Berry Shops · Loot', pt: 'Berry Shops · Loot' },
    sources: [
      { kind: 'shop', label: { en: 'Berry Shops', pt: 'Berry Shops' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'charti-berry',
  },
  {
    id: 'berries-kasib-berry-196',
    index: 196,
    category: 'berries',
    name: { en: 'Kasib Berry', pt: 'Kasib Berry' },
    description: { en: 'Weakens supereffective Ghost move', pt: 'Weakens supereffective Ghost move' },
    source: { en: 'Side Mission 110 · Berry Shops · Loot', pt: 'Side Mission 110 · Berry Shops · Loot' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 110', pt: 'Side Mission 110' } },
      { kind: 'shop', label: { en: 'Berry Shops', pt: 'Berry Shops' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'kasib-berry',
  },
  {
    id: 'berries-haban-berry-197',
    index: 197,
    category: 'berries',
    name: { en: 'Haban Berry', pt: 'Haban Berry' },
    description: { en: 'Weakens supereffective Dragon move', pt: 'Weakens supereffective Dragon move' },
    source: { en: 'Side Mission 91 · Berry Shops · Loot', pt: 'Side Mission 91 · Berry Shops · Loot' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 91', pt: 'Side Mission 91' } },
      { kind: 'shop', label: { en: 'Berry Shops', pt: 'Berry Shops' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'haban-berry',
  },
  {
    id: 'berries-colbur-berry-198',
    index: 198,
    category: 'berries',
    name: { en: 'Colbur Berry', pt: 'Colbur Berry' },
    description: { en: 'Weakens supereffective Dark move', pt: 'Weakens supereffective Dark move' },
    source: { en: 'Berry Shop · Loot', pt: 'Berry Shop · Loot' },
    sources: [
      { kind: 'shop', label: { en: 'Berry Shop', pt: 'Berry Shop' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'colbur-berry',
  },
  {
    id: 'berries-babiri-berry-199',
    index: 199,
    category: 'berries',
    name: { en: 'Babiri Berry', pt: 'Babiri Berry' },
    description: { en: 'Supereffective Steel-type moves are weakened.', pt: 'Supereffective Steel-type moves are weakened.' },
    source: { en: 'Side Mission 114 · Berry NPC Shops · Loot', pt: 'Side Mission 114 · Berry NPC Shops · Loot' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 114', pt: 'Side Mission 114' } },
      { kind: 'shop', label: { en: 'Berry NPC Shops', pt: 'Berry NPC Shops' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'babiri-berry',
  },
  {
    id: 'berries-chilan-berry-200',
    index: 200,
    category: 'berries',
    name: { en: 'Chilan Berry', pt: 'Chilan Berry' },
    description: { en: 'Weakens Normal moves', pt: 'Weakens Normal moves' },
    source: { en: 'Berry Shops · Side Mission 45 · Loot', pt: 'Berry Shops · Side Mission 45 · Loot' },
    sources: [
      { kind: 'shop', label: { en: 'Berry Shops', pt: 'Berry Shops' } },
      { kind: 'mission', label: { en: 'Side Mission 45', pt: 'Side Mission 45' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'chilan-berry',
  },
  {
    id: 'other-white-herb-214',
    index: 214,
    category: 'other',
    name: { en: 'White Herb', pt: 'White Herb' },
    description: { en: 'Restores any lowered stat once in battle', pt: 'Restores any lowered stat once in battle' },
    source: { en: 'Side Mission 18 · Racine Construction Shop', pt: 'Side Mission 18 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 18', pt: 'Side Mission 18' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'white-herb',
  },
  {
    id: 'other-quick-claw-217',
    index: 217,
    category: 'other',
    name: { en: 'Quick Claw', pt: 'Quick Claw' },
    description: { en: 'Lets holder occasionally use a move faster', pt: 'Lets holder occasionally use a move faster' },
    source: { en: 'Vert District (Vert Sector 2) · Shop: Racine Construction', pt: 'Vert District (Vert Sector 2) · Shop: Racine Construction' },
    sources: [
      { kind: 'field', label: { en: 'Vert District (Vert Sector 2)', pt: 'Vert District (Vert Sector 2)' } },
      { kind: 'shop', label: { en: 'Shop: Racine Construction', pt: 'Shop: Racine Construction' } }
    ],
    sprite: 'quick-claw',
  },
  {
    id: 'other-soothe-bell-218',
    index: 218,
    category: 'other',
    name: { en: 'Soothe Bell', pt: 'Soothe Bell' },
    description: { en: 'Makes the holder more friendly', pt: 'Makes the holder more friendly' },
    source: { en: 'Side Mission 36', pt: 'Side Mission 36' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 36', pt: 'Side Mission 36' } }
    ],
    sprite: 'soothe-bell',
  },
  {
    id: 'other-kings-rock-221',
    index: 221,
    category: 'other',
    name: { en: 'King\'s Rock', pt: 'Rocha do Rei' },
    description: { en: 'Loved by Slowpoke', pt: 'Loved by Slowpoke' },
    source: { en: 'Racine Construction NPC (late game)', pt: 'Racine Construction NPC (late game)' },
    sources: [
      { kind: 'shop', label: { en: 'Racine Construction NPC (late game)', pt: 'Racine Construction NPC (late game)' } }
    ],
    price: { amount: 3000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'kings-rock',
  },
  {
    id: 'other-silver-powder-222',
    index: 222,
    category: 'other',
    name: { en: 'Silver Powder', pt: 'Silver Powder' },
    description: { en: 'Boosts Bug-type moves', pt: 'Boosts Bug-type moves' },
    source: { en: 'Rewards', pt: 'Rewards' },
    sources: [
      { kind: 'other', label: { en: 'Rewards', pt: 'Rewards' } }
    ],
    sprite: 'silver-powder',
  },
  {
    id: 'other-focus-band-230',
    index: 230,
    category: 'other',
    name: { en: 'Focus Band', pt: 'Focus Band' },
    description: { en: 'Stops Pokemon from being knocked out once, leaving it with 1 HP', pt: 'Stops Pokemon from being knocked out once, leaving it with 1 HP' },
    source: { en: 'Side Mission 70 · Racine Construction Shop', pt: 'Side Mission 70 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 70', pt: 'Side Mission 70' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'focus-band',
  },
  {
    id: 'other-lucky-egg-231',
    index: 231,
    category: 'other',
    name: { en: 'Lucky Egg', pt: 'Ovo da Sorte' },
    description: { en: 'Boosts Exp. Points', pt: 'Boosts Exp. Points' },
    source: { en: 'Side Mission 109', pt: 'Side Mission 109' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 109', pt: 'Side Mission 109' } }
    ],
    sprite: 'lucky-egg',
  },
  {
    id: 'other-scope-lens-232',
    index: 232,
    category: 'other',
    name: { en: 'Scope Lens', pt: 'Scope Lens' },
    description: { en: 'Boosts critical hit ratio', pt: 'Boosts critical hit ratio' },
    source: { en: 'Side Mission 54 · Racine Construction Shop', pt: 'Side Mission 54 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 54', pt: 'Side Mission 54' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'scope-lens',
  },
  {
    id: 'other-metal-coat-233',
    index: 233,
    category: 'other',
    name: { en: 'Metal Coat', pt: 'Revestimento Metálico' },
    description: { en: 'Loved by Onix and Scyther', pt: 'Loved by Onix and Scyther' },
    source: { en: 'Racine Construction NPC (late game)', pt: 'Racine Construction NPC (late game)' },
    sources: [
      { kind: 'shop', label: { en: 'Racine Construction NPC (late game)', pt: 'Racine Construction NPC (late game)' } }
    ],
    price: { amount: 3000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'metal-coat',
  },
  {
    id: 'other-leftovers-234',
    index: 234,
    category: 'other',
    name: { en: 'Leftovers', pt: 'Sobras' },
    description: { en: 'Slowly restores HP', pt: 'Slowly restores HP' },
    source: { en: 'Side Mission 68 · Racine Construction Shop', pt: 'Side Mission 68 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 68', pt: 'Side Mission 68' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'leftovers',
  },
  {
    id: 'other-light-ball-236',
    index: 236,
    category: 'other',
    name: { en: 'Light Ball', pt: 'Light Ball' },
    description: { en: 'Boosts Pikachu\'s Attack and Sp. Atk', pt: 'Boosts Pikachu\'s Attack and Sp. Atk' },
    source: { en: 'Side Mission 107', pt: 'Side Mission 107' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 107', pt: 'Side Mission 107' } }
    ],
    sprite: 'light-ball',
  },
  {
    id: 'other-soft-sand-237',
    index: 237,
    category: 'other',
    name: { en: 'Soft Sand', pt: 'Soft Sand' },
    description: { en: 'Raises Ground-type moves', pt: 'Raises Ground-type moves' },
    source: { en: 'Side Mission 23: Underneath the Holovator · Shop: Racine Construction', pt: 'Side Mission 23: Underneath the Holovator · Shop: Racine Construction' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 23: Underneath the Holovator', pt: 'Side Mission 23: Underneath the Holovator' } },
      { kind: 'shop', label: { en: 'Shop: Racine Construction', pt: 'Shop: Racine Construction' } }
    ],
    sprite: 'soft-sand',
  },
  {
    id: 'other-hard-stone-238',
    index: 238,
    category: 'other',
    name: { en: 'Hard Stone', pt: 'Hard Stone' },
    description: { en: 'Boosts Rock moves', pt: 'Boosts Rock moves' },
    source: { en: 'Side Mission 27 · Racine Construction Shop', pt: 'Side Mission 27 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 27', pt: 'Side Mission 27' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'hard-stone',
  },
  {
    id: 'other-miracle-seed-239',
    index: 239,
    category: 'other',
    name: { en: 'Miracle Seed', pt: 'Miracle Seed' },
    description: { en: 'Boosts Grass moves', pt: 'Boosts Grass moves' },
    source: { en: 'Side Mission 16 · Racine Construction Shop', pt: 'Side Mission 16 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 16', pt: 'Side Mission 16' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'miracle-seed',
  },
  {
    id: 'other-black-glasses-240',
    index: 240,
    category: 'other',
    name: { en: 'Black Glasses', pt: 'Black Glasses' },
    description: { en: 'Boosts Dark moves', pt: 'Boosts Dark moves' },
    source: { en: 'Side Mission 70 · Racine Construction Shop', pt: 'Side Mission 70 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 70', pt: 'Side Mission 70' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'black-glasses',
  },
  {
    id: 'other-black-belt-241',
    index: 241,
    category: 'other',
    name: { en: 'Black Belt', pt: 'Black Belt' },
    description: { en: 'Boosts Fighting moves', pt: 'Boosts Fighting moves' },
    source: { en: 'Side Mission 58 · Racine Construction Shop', pt: 'Side Mission 58 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 58', pt: 'Side Mission 58' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'black-belt',
  },
  {
    id: 'other-magnet-242',
    index: 242,
    category: 'other',
    name: { en: 'Magnet', pt: 'Magnet' },
    description: { en: 'Boosts Electric moves', pt: 'Boosts Electric moves' },
    source: { en: 'Side Mission 65 · Racine Construction Shop', pt: 'Side Mission 65 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 65', pt: 'Side Mission 65' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'magnet',
  },
  {
    id: 'other-mystic-water-243',
    index: 243,
    category: 'other',
    name: { en: 'Mystic Water', pt: 'Mystic Water' },
    description: { en: 'Boosts Water moves', pt: 'Boosts Water moves' },
    source: { en: 'Side Mission 64 · Racine Construction Shop', pt: 'Side Mission 64 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 64', pt: 'Side Mission 64' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'mystic-water',
  },
  {
    id: 'other-sharp-beak-244',
    index: 244,
    category: 'other',
    name: { en: 'Sharp Beak', pt: 'Sharp Beak' },
    description: { en: 'Boosts Flying moves', pt: 'Boosts Flying moves' },
    source: { en: 'Side Mission 69 · Racine Construction Shop', pt: 'Side Mission 69 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 69', pt: 'Side Mission 69' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'sharp-beak',
  },
  {
    id: 'other-poison-barb-245',
    index: 245,
    category: 'other',
    name: { en: 'Poison Barb', pt: 'Poison Barb' },
    description: { en: 'Boosts Poison moves', pt: 'Boosts Poison moves' },
    source: { en: 'Side Mission 61 · Racine Construction Shop', pt: 'Side Mission 61 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 61', pt: 'Side Mission 61' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'poison-barb',
  },
  {
    id: 'other-never-melt-ice-246',
    index: 246,
    category: 'other',
    name: { en: 'Never-Melt Ice', pt: 'Never-Melt Ice' },
    description: { en: 'Boosts Ice moves', pt: 'Boosts Ice moves' },
    source: { en: 'Side Mission 102 · Racine Construction Shop', pt: 'Side Mission 102 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 102', pt: 'Side Mission 102' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'never-melt-ice',
  },
  {
    id: 'other-spell-tag-247',
    index: 247,
    category: 'other',
    name: { en: 'Spell Tag', pt: 'Spell Tag' },
    description: { en: 'Boosts Ghost moves', pt: 'Boosts Ghost moves' },
    source: { en: 'Side Mission 95 · Racine Construction Shop', pt: 'Side Mission 95 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 95', pt: 'Side Mission 95' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'spell-tag',
  },
  {
    id: 'other-twisted-spoon-248',
    index: 248,
    category: 'other',
    name: { en: 'Twisted Spoon', pt: 'Twisted Spoon' },
    description: { en: 'Held, evolution, vitamin, or utility item.', pt: 'Item segurado, de evolução, vitamina ou utilitário.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'twisted-spoon',
  },
  {
    id: 'other-charcoal-249',
    index: 249,
    category: 'other',
    name: { en: 'Charcoal', pt: 'Charcoal' },
    description: { en: 'Boosts Fire moves', pt: 'Boosts Fire moves' },
    source: { en: 'Side Mission 57 · Racine Construction Shop', pt: 'Side Mission 57 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 57', pt: 'Side Mission 57' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'charcoal',
  },
  {
    id: 'other-dragon-fang-250',
    index: 250,
    category: 'other',
    name: { en: 'Dragon Fang', pt: 'Dragon Fang' },
    description: { en: 'Boosts Dragon moves', pt: 'Boosts Dragon moves' },
    source: { en: 'Side Mission 91 · Racine Construction Shop', pt: 'Side Mission 91 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 91', pt: 'Side Mission 91' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'dragon-fang',
  },
  {
    id: 'other-silk-scarf-251',
    index: 251,
    category: 'other',
    name: { en: 'Silk Scarf', pt: 'Silk Scarf' },
    description: { en: 'Boosts Normal moves', pt: 'Boosts Normal moves' },
    source: { en: 'Side Mission 28 · Racine Construction Shop', pt: 'Side Mission 28 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 28', pt: 'Side Mission 28' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'silk-scarf',
  },
  {
    id: 'other-upgrade-252',
    index: 252,
    category: 'other',
    name: { en: 'Upgrade', pt: 'Upgrade' },
    description: { en: 'Held, evolution, vitamin, or utility item.', pt: 'Item segurado, de evolução, vitamina ou utilitário.' },
    source: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    price: { amount: 3000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'upgrade',
  },
  {
    id: 'other-shell-bell-253',
    index: 253,
    category: 'other',
    name: { en: 'Shell Bell', pt: 'Shell Bell' },
    description: { en: 'Restores HP every time it inflicts damage', pt: 'Restores HP every time it inflicts damage' },
    source: { en: 'Side Mission 67 · Racine Construction Shop', pt: 'Side Mission 67 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 67', pt: 'Side Mission 67' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'shell-bell',
  },
  {
    id: 'other-thick-club-258',
    index: 258,
    category: 'other',
    name: { en: 'Thick Club', pt: 'Thick Club' },
    description: { en: 'Held, evolution, vitamin, or utility item.', pt: 'Item segurado, de evolução, vitamina ou utilitário.' },
    source: { en: 'Dropped by Alpha Cubone & Marowak', pt: 'Dropped by Alpha Cubone & Marowak' },
    sources: [
      { kind: 'other', label: { en: 'Dropped by Alpha Cubone & Marowak', pt: 'Dropped by Alpha Cubone & Marowak' } }
    ],
    sprite: 'thick-club',
  },
  {
    id: 'other-leek-259',
    index: 259,
    category: 'other',
    name: { en: 'Leek', pt: 'Leek' },
    description: { en: 'Held, evolution, vitamin, or utility item.', pt: 'Item segurado, de evolução, vitamina ou utilitário.' },
    source: { en: 'Shop: Jaune District (Jaune Street)', pt: 'Shop: Jaune District (Jaune Street)' },
    sources: [
      { kind: 'shop', label: { en: 'Shop: Jaune District (Jaune Street)', pt: 'Shop: Jaune District (Jaune Street)' } }
    ],
    sprite: 'leek',
  },
  {
    id: 'other-muscle-band-266',
    index: 266,
    category: 'other',
    name: { en: 'Muscle Band', pt: 'Muscle Band' },
    description: { en: 'Boosts physical moves', pt: 'Boosts physical moves' },
    source: { en: 'Side Mission 56 · Racine Construction Shop', pt: 'Side Mission 56 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 56', pt: 'Side Mission 56' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'muscle-band',
  },
  {
    id: 'other-wise-glasses-267',
    index: 267,
    category: 'other',
    name: { en: 'Wise Glasses', pt: 'Wise Glasses' },
    description: { en: 'Boosts special moves', pt: 'Boosts special moves' },
    source: { en: 'Side Mission 21: Spewpa in the Museum · Shop: Racine Construction', pt: 'Side Mission 21: Spewpa in the Museum · Shop: Racine Construction' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 21: Spewpa in the Museum', pt: 'Side Mission 21: Spewpa in the Museum' } },
      { kind: 'shop', label: { en: 'Shop: Racine Construction', pt: 'Shop: Racine Construction' } }
    ],
    sprite: 'wise-glasses',
  },
  {
    id: 'other-expert-belt-268',
    index: 268,
    category: 'other',
    name: { en: 'Expert Belt', pt: 'Expert Belt' },
    description: { en: 'Boosts supereffective moves', pt: 'Boosts supereffective moves' },
    source: { en: 'Side Mission 117 · Racine Construction Shop', pt: 'Side Mission 117 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 117', pt: 'Side Mission 117' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'expert-belt',
  },
  {
    id: 'other-life-orb-270',
    index: 270,
    category: 'other',
    name: { en: 'Life Orb', pt: 'Life Orb' },
    description: { en: 'Boosts moves but user loses HP when landing attacks', pt: 'Boosts moves but user loses HP when landing attacks' },
    source: { en: 'Side Mission 85 · Racine Construction Shop', pt: 'Side Mission 85 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 85', pt: 'Side Mission 85' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'life-orb',
  },
  {
    id: 'other-focus-sash-275',
    index: 275,
    category: 'other',
    name: { en: 'Focus Sash', pt: 'Focus Sash' },
    description: { en: 'Pokemon with full HP hit by a move that will knock it out will leave it with 1 HP once', pt: 'Pokemon with full HP hit by a move that will knock it out will leave it with 1 HP once' },
    source: { en: 'Side Mission 59 · Racine Construction Shop', pt: 'Side Mission 59 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 59', pt: 'Side Mission 59' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'focus-sash',
  },
  {
    id: 'other-power-bracer-289',
    index: 289,
    category: 'other',
    name: { en: 'Power Bracer', pt: 'Power Bracer' },
    description: { en: 'Reduces Speed in battle but grows Attack faster', pt: 'Reduces Speed in battle but grows Attack faster' },
    source: { en: 'Side Mission 38 · Quasartico Shop', pt: 'Side Mission 38 · Quasartico Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 38', pt: 'Side Mission 38' } },
      { kind: 'shop', label: { en: 'Quasartico Shop', pt: 'Quasartico Shop' } }
    ],
    sprite: 'power-bracer',
  },
  {
    id: 'other-power-belt-290',
    index: 290,
    category: 'other',
    name: { en: 'Power Belt', pt: 'Power Belt' },
    description: { en: 'Reduces Speed in battle but grows Defense faster', pt: 'Reduces Speed in battle but grows Defense faster' },
    source: { en: 'Side Mission 39 · Quasartico Shop', pt: 'Side Mission 39 · Quasartico Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 39', pt: 'Side Mission 39' } },
      { kind: 'shop', label: { en: 'Quasartico Shop', pt: 'Quasartico Shop' } }
    ],
    sprite: 'power-belt',
  },
  {
    id: 'other-power-lens-291',
    index: 291,
    category: 'other',
    name: { en: 'Power Lens', pt: 'Power Lens' },
    description: { en: 'Reduces Speed in battle but grows Sp. Atk faster', pt: 'Reduces Speed in battle but grows Sp. Atk faster' },
    source: { en: 'Side Mission 104 · Quasartico Shop', pt: 'Side Mission 104 · Quasartico Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 104', pt: 'Side Mission 104' } },
      { kind: 'shop', label: { en: 'Quasartico Shop', pt: 'Quasartico Shop' } }
    ],
    sprite: 'power-lens',
  },
  {
    id: 'other-power-band-292',
    index: 292,
    category: 'other',
    name: { en: 'Power Band', pt: 'Power Band' },
    description: { en: 'Reduces Speed in battle but grows Sp. Def faster', pt: 'Reduces Speed in battle but grows Sp. Def faster' },
    source: { en: 'Side Mission 99 · Quasartico Shop', pt: 'Side Mission 99 · Quasartico Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 99', pt: 'Side Mission 99' } },
      { kind: 'shop', label: { en: 'Quasartico Shop', pt: 'Quasartico Shop' } }
    ],
    sprite: 'power-band',
  },
  {
    id: 'other-power-anklet-293',
    index: 293,
    category: 'other',
    name: { en: 'Power Anklet', pt: 'Power Anklet' },
    description: { en: 'Reduces Speed in battle but allows Speed stat to grow faster', pt: 'Reduces Speed in battle but allows Speed stat to grow faster' },
    source: { en: 'Side Mission 69 · Quasartico Inc. Shop', pt: 'Side Mission 69 · Quasartico Inc. Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 69', pt: 'Side Mission 69' } },
      { kind: 'shop', label: { en: 'Quasartico Inc. Shop', pt: 'Quasartico Inc. Shop' } }
    ],
    sprite: 'power-anklet',
  },
  {
    id: 'other-power-weight-294',
    index: 294,
    category: 'other',
    name: { en: 'Power Weight', pt: 'Power Weight' },
    description: { en: 'Reduces Speed in battle but grows HP faster', pt: 'Reduces Speed in battle but grows HP faster' },
    source: { en: 'Side Mission 72 · Quasartico Shop', pt: 'Side Mission 72 · Quasartico Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 72', pt: 'Side Mission 72' } },
      { kind: 'shop', label: { en: 'Quasartico Shop', pt: 'Quasartico Shop' } }
    ],
    sprite: 'power-weight',
  },
  {
    id: 'other-big-root-296',
    index: 296,
    category: 'other',
    name: { en: 'Big Root', pt: 'Big Root' },
    description: { en: 'Boosts HP restoration when using HP-stealing moves', pt: 'Boosts HP restoration when using HP-stealing moves' },
    source: { en: 'Side Mission 49 · Racine Construction Shop', pt: 'Side Mission 49 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 49', pt: 'Side Mission 49' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'big-root',
  },
  {
    id: 'other-dubious-disc-324',
    index: 324,
    category: 'other',
    name: { en: 'Dubious Disc', pt: 'Dubious Disc' },
    description: { en: 'Held, evolution, vitamin, or utility item.', pt: 'Item segurado, de evolução, vitamina ou utilitário.' },
    source: { en: 'Hyperspace Lumiose · Hyperspace floating Poké Balls', pt: 'Hyperspace Lumiose · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Lumiose', pt: 'Hyperspace Lumiose' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    price: { amount: 3000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'dubious-disc',
  },
  {
    id: 'tms-tm001-328',
    index: 328,
    category: 'tms',
    name: { en: 'TM001', pt: 'TM001' },
    description: { en: 'Headbutt — Normal-type, Physical, 70 Power, 7 Cooldown Time', pt: 'Headbutt — Normal-type, Physical, 70 Power, 7 Cooldown Time' },
    source: { en: 'Vert Sector 5', pt: 'Vert Sector 5' },
    sources: [
      { kind: 'field', label: { en: 'Vert Sector 5', pt: 'Vert Sector 5' } }
    ],
    sprite: 'tm001',
    move: { en: 'Headbutt', pt: 'Headbutt' },
  },
  {
    id: 'tms-tm002-329',
    index: 329,
    category: 'tms',
    name: { en: 'TM002', pt: 'TM002' },
    description: { en: 'Dragon Claw — Dragon, Physical, 80 Power, 8 Cooldown', pt: 'Dragon Claw — Dragon, Physical, 80 Power, 8 Cooldown' },
    source: { en: 'Academie Etoile (Rouge Sector)', pt: 'Academie Etoile (Rouge Sector)' },
    sources: [
      { kind: 'field', label: { en: 'Academie Etoile (Rouge Sector)', pt: 'Academie Etoile (Rouge Sector)' } }
    ],
    sprite: 'tm002',
    move: { en: 'Dragon Claw', pt: 'Dragon Claw' },
  },
  {
    id: 'tms-tm003-330',
    index: 330,
    category: 'tms',
    name: { en: 'TM003', pt: 'TM003' },
    description: { en: 'Psyshock — Psychic, Special, 80 Power, 8 Cooldown', pt: 'Psyshock — Psychic, Special, 80 Power, 8 Cooldown' },
    source: { en: 'Mable’s Research Level 14', pt: 'Mable’s Research Level 14' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 14', pt: 'Mable’s Research Level 14' } }
    ],
    sprite: 'tm003',
    move: { en: 'Psyshock', pt: 'Psyshock' },
  },
  {
    id: 'tms-tm004-331',
    index: 331,
    category: 'tms',
    name: { en: 'TM004', pt: 'TM004' },
    description: { en: 'Rock Smash — Fighting, Physical, 40 Power, 6 Cooldown', pt: 'Rock Smash — Fighting, Physical, 40 Power, 6 Cooldown' },
    source: { en: 'Mable’s Research Level 2', pt: 'Mable’s Research Level 2' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 2', pt: 'Mable’s Research Level 2' } }
    ],
    sprite: 'tm004',
    move: { en: 'Rock Smash', pt: 'Rock Smash' },
  },
  {
    id: 'tms-tm005-332',
    index: 332,
    category: 'tms',
    name: { en: 'TM005', pt: 'TM005' },
    description: { en: 'Roar — Normal, pushes target back, 6 cooldown', pt: 'Roar — Normal, pushes target back, 6 cooldown' },
    source: { en: 'Rouge Sector 1', pt: 'Rouge Sector 1' },
    sources: [
      { kind: 'field', label: { en: 'Rouge Sector 1', pt: 'Rouge Sector 1' } }
    ],
    sprite: 'tm005',
    move: { en: 'Roar', pt: 'Roar' },
  },
  {
    id: 'tms-tm006-333',
    index: 333,
    category: 'tms',
    name: { en: 'TM006', pt: 'TM006' },
    description: { en: 'Calm Mind — Psychic, boosts Sp. Atk and Sp. Def, 18 cooldown', pt: 'Calm Mind — Psychic, boosts Sp. Atk and Sp. Def, 18 cooldown' },
    source: { en: 'Mable’s Research Level 26', pt: 'Mable’s Research Level 26' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 26', pt: 'Mable’s Research Level 26' } }
    ],
    sprite: 'tm006',
    move: { en: 'Calm Mind', pt: 'Calm Mind' },
  },
  {
    id: 'tms-tm007-334',
    index: 334,
    category: 'tms',
    name: { en: 'TM007', pt: 'TM007' },
    description: { en: 'Toxic — Poison, badly poisons target, 10 cooldown', pt: 'Toxic — Poison, badly poisons target, 10 cooldown' },
    source: { en: 'Rouge Sector 2', pt: 'Rouge Sector 2' },
    sources: [
      { kind: 'field', label: { en: 'Rouge Sector 2', pt: 'Rouge Sector 2' } }
    ],
    sprite: 'tm007',
    move: { en: 'Toxic', pt: 'Toxic' },
  },
  {
    id: 'tms-tm008-335',
    index: 335,
    category: 'tms',
    name: { en: 'TM008', pt: 'TM008' },
    description: { en: 'Thunder Wave — Electric, paralyzes target, 10 cooldown', pt: 'Thunder Wave — Electric, paralyzes target, 10 cooldown' },
    source: { en: 'Vert Sector 8', pt: 'Vert Sector 8' },
    sources: [
      { kind: 'field', label: { en: 'Vert Sector 8', pt: 'Vert Sector 8' } }
    ],
    sprite: 'tm008',
    move: { en: 'Thunder Wave', pt: 'Thunder Wave' },
  },
  {
    id: 'tms-tm009-336',
    index: 336,
    category: 'tms',
    name: { en: 'TM009', pt: 'TM009' },
    description: { en: 'Flip Turn — Water, Physical, 60 power, 12 cooldown', pt: 'Flip Turn — Water, Physical, 60 power, 12 cooldown' },
    source: { en: 'Magenta Sector 3', pt: 'Magenta Sector 3' },
    sources: [
      { kind: 'field', label: { en: 'Magenta Sector 3', pt: 'Magenta Sector 3' } }
    ],
    sprite: 'tm009',
    move: { en: 'Flip Turn', pt: 'Flip Turn' },
  },
  {
    id: 'tms-tm010-337',
    index: 337,
    category: 'tms',
    name: { en: 'TM010', pt: 'TM010' },
    description: { en: 'Brick Break — Fighting, Physical, 75 power, 7 cooldown', pt: 'Brick Break — Fighting, Physical, 75 power, 7 cooldown' },
    source: { en: 'Near Quasartico Battle Court', pt: 'Near Quasartico Battle Court' },
    sources: [
      { kind: 'shop', label: { en: 'Near Quasartico Battle Court', pt: 'Near Quasartico Battle Court' } }
    ],
    sprite: 'tm010',
    move: { en: 'Brick Break', pt: 'Brick Break' },
  },
  {
    id: 'tms-tm011-338',
    index: 338,
    category: 'tms',
    name: { en: 'TM011', pt: 'TM011' },
    description: { en: 'Bulk Up — Fighting, boosts Attack and Defense, 18 cooldown', pt: 'Bulk Up — Fighting, boosts Attack and Defense, 18 cooldown' },
    source: { en: 'Justice Dojo (Jaune Sector)', pt: 'Justice Dojo (Jaune Sector)' },
    sources: [
      { kind: 'field', label: { en: 'Justice Dojo (Jaune Sector)', pt: 'Justice Dojo (Jaune Sector)' } }
    ],
    sprite: 'tm011',
    move: { en: 'Bulk Up', pt: 'Bulk Up' },
  },
  {
    id: 'tms-tm012-339',
    index: 339,
    category: 'tms',
    name: { en: 'TM012', pt: 'TM012' },
    description: { en: 'Rock Slide — Rock, Physical, 75 power, 7 cooldown', pt: 'Rock Slide — Rock, Physical, 75 power, 7 cooldown' },
    source: { en: 'Mable’s Research Level 23', pt: 'Mable’s Research Level 23' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 23', pt: 'Mable’s Research Level 23' } }
    ],
    sprite: 'tm012',
    move: { en: 'Rock Slide', pt: 'Rock Slide' },
  },
  {
    id: 'tms-tm013-340',
    index: 340,
    category: 'tms',
    name: { en: 'TM013', pt: 'TM013' },
    description: { en: 'Ice Beam — Ice, Special, 90 power, 8 cooldown', pt: 'Ice Beam — Ice, Special, 90 power, 8 cooldown' },
    source: { en: 'Bleu Sector', pt: 'Bleu Sector' },
    sources: [
      { kind: 'field', label: { en: 'Bleu Sector', pt: 'Bleu Sector' } }
    ],
    sprite: 'tm013',
    move: { en: 'Ice Beam', pt: 'Ice Beam' },
  },
  {
    id: 'tms-tm014-341',
    index: 341,
    category: 'tms',
    name: { en: 'TM014', pt: 'TM014' },
    description: { en: 'Fire Fang — Fire, Physical, 65 power, 6 cooldown', pt: 'Fire Fang — Fire, Physical, 65 power, 6 cooldown' },
    source: { en: 'Mable’s Research Level 6', pt: 'Mable’s Research Level 6' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 6', pt: 'Mable’s Research Level 6' } }
    ],
    sprite: 'tm014',
    move: { en: 'Fire Fang', pt: 'Fire Fang' },
  },
  {
    id: 'tms-tm015-342',
    index: 342,
    category: 'tms',
    name: { en: 'TM015', pt: 'TM015' },
    description: { en: 'Ice Fang — Ice, Physical, 65 power, 6 cooldown', pt: 'Ice Fang — Ice, Physical, 65 power, 6 cooldown' },
    source: { en: 'Mable’s Research Level 7', pt: 'Mable’s Research Level 7' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 7', pt: 'Mable’s Research Level 7' } }
    ],
    sprite: 'tm015',
    move: { en: 'Ice Fang', pt: 'Ice Fang' },
  },
  {
    id: 'tms-tm016-343',
    index: 343,
    category: 'tms',
    name: { en: 'TM016', pt: 'TM016' },
    description: { en: 'Light Screen — Psychic, reduces Special move damage, 12 cooldown', pt: 'Light Screen — Psychic, reduces Special move damage, 12 cooldown' },
    source: { en: 'Mable’s Research Level 11', pt: 'Mable’s Research Level 11' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 11', pt: 'Mable’s Research Level 11' } }
    ],
    sprite: 'tm016',
    move: { en: 'Light Screen', pt: 'Light Screen' },
  },
  {
    id: 'tms-tm017-344',
    index: 344,
    category: 'tms',
    name: { en: 'TM017', pt: 'TM017' },
    description: { en: 'Protect — Normal, prevents incoming attacks, 15 cooldown', pt: 'Protect — Normal, prevents incoming attacks, 15 cooldown' },
    source: { en: 'Mable’s Research Level 4', pt: 'Mable’s Research Level 4' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 4', pt: 'Mable’s Research Level 4' } }
    ],
    sprite: 'tm017',
    move: { en: 'Protect', pt: 'Protect' },
  },
  {
    id: 'tms-tm018-345',
    index: 345,
    category: 'tms',
    name: { en: 'TM018', pt: 'TM018' },
    description: { en: 'Power-Up Punch — Fighting, Physical, 40 power, 10 cooldown, boosts Attack', pt: 'Power-Up Punch — Fighting, Physical, 40 power, 10 cooldown, boosts Attack' },
    source: { en: 'Wild Zone 9', pt: 'Wild Zone 9' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 9', pt: 'Wild Zone 9' } }
    ],
    sprite: 'tm018',
    move: { en: 'Power-Up Punch', pt: 'Power-Up Punch' },
  },
  {
    id: 'tms-tm019-346',
    index: 346,
    category: 'tms',
    name: { en: 'TM019', pt: 'TM019' },
    description: { en: 'Power Gem — Rock, Special, 80 power, 8 cooldown', pt: 'Power Gem — Rock, Special, 80 power, 8 cooldown' },
    source: { en: 'South Vert Sector 5', pt: 'South Vert Sector 5' },
    sources: [
      { kind: 'field', label: { en: 'South Vert Sector 5', pt: 'South Vert Sector 5' } }
    ],
    sprite: 'tm019',
    move: { en: 'Power Gem', pt: 'Power Gem' },
  },
  {
    id: 'tms-tm020-347',
    index: 347,
    category: 'tms',
    name: { en: 'TM020', pt: 'TM020' },
    description: { en: 'Play Rough — Fairy, Physical, 90 power, 8 cooldown', pt: 'Play Rough — Fairy, Physical, 90 power, 8 cooldown' },
    source: { en: 'Hotel Richissime', pt: 'Hotel Richissime' },
    sources: [
      { kind: 'other', label: { en: 'Hotel Richissime', pt: 'Hotel Richissime' } }
    ],
    sprite: 'tm020',
    move: { en: 'Play Rough', pt: 'Play Rough' },
  },
  {
    id: 'tms-tm021-348',
    index: 348,
    category: 'tms',
    name: { en: 'TM021', pt: 'TM021' },
    description: { en: 'Thunder Fang — Electric, Physical, 65 power, 6 cooldown', pt: 'Thunder Fang — Electric, Physical, 65 power, 6 cooldown' },
    source: { en: 'Mable’s Research Level 5', pt: 'Mable’s Research Level 5' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 5', pt: 'Mable’s Research Level 5' } }
    ],
    sprite: 'tm021',
    move: { en: 'Thunder Fang', pt: 'Thunder Fang' },
  },
  {
    id: 'tms-tm022-349',
    index: 349,
    category: 'tms',
    name: { en: 'TM022', pt: 'TM022' },
    description: { en: 'Aerial Ace — Flying, Physical, 60 power, 9 cooldown', pt: 'Aerial Ace — Flying, Physical, 60 power, 9 cooldown' },
    source: { en: 'Wild Zone 3', pt: 'Wild Zone 3' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 3', pt: 'Wild Zone 3' } }
    ],
    sprite: 'tm022',
    move: { en: 'Aerial Ace', pt: 'Aerial Ace' },
  },
  {
    id: 'tms-tm023-350',
    index: 350,
    category: 'tms',
    name: { en: 'TM023', pt: 'TM023' },
    description: { en: 'Thunder Punch — Electric, Physical, 75 power, 7 cooldown', pt: 'Thunder Punch — Electric, Physical, 75 power, 7 cooldown' },
    source: { en: 'Mable’s Research Level 15', pt: 'Mable’s Research Level 15' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 15', pt: 'Mable’s Research Level 15' } }
    ],
    sprite: 'tm023',
    move: { en: 'Thunder Punch', pt: 'Thunder Punch' },
  },
  {
    id: 'tms-tm024-351',
    index: 351,
    category: 'tms',
    name: { en: 'TM024', pt: 'TM024' },
    description: { en: 'Ice Punch — Ice, Physical, 75 power, 7 cooldown', pt: 'Ice Punch — Ice, Physical, 75 power, 7 cooldown' },
    source: { en: 'Mable’s Research Level 13', pt: 'Mable’s Research Level 13' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 13', pt: 'Mable’s Research Level 13' } }
    ],
    sprite: 'tm024',
    move: { en: 'Ice Punch', pt: 'Ice Punch' },
  },
  {
    id: 'tms-tm025-352',
    index: 352,
    category: 'tms',
    name: { en: 'TM025', pt: 'TM025' },
    description: { en: 'Crunch — Dark, Physical, 80 power, 8 cooldown', pt: 'Crunch — Dark, Physical, 80 power, 8 cooldown' },
    source: { en: 'The Sewers', pt: 'The Sewers' },
    sources: [
      { kind: 'other', label: { en: 'The Sewers', pt: 'The Sewers' } }
    ],
    sprite: 'tm025',
    move: { en: 'Crunch', pt: 'Crunch' },
  },
  {
    id: 'tms-tm026-353',
    index: 353,
    category: 'tms',
    name: { en: 'TM026', pt: 'TM026' },
    description: { en: 'Energy Ball — Grass, Special, 90 power, 8 cooldown', pt: 'Energy Ball — Grass, Special, 90 power, 8 cooldown' },
    source: { en: 'Side Mission 45', pt: 'Side Mission 45' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 45', pt: 'Side Mission 45' } }
    ],
    sprite: 'tm026',
    move: { en: 'Energy Ball', pt: 'Energy Ball' },
  },
  {
    id: 'tms-tm027-354',
    index: 354,
    category: 'tms',
    name: { en: 'TM027', pt: 'TM027' },
    description: { en: 'Swift — Normal, Special, 60 power, 5 cooldown', pt: 'Swift — Normal, Special, 60 power, 5 cooldown' },
    source: { en: 'Wild Zone 2', pt: 'Wild Zone 2' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 2', pt: 'Wild Zone 2' } }
    ],
    sprite: 'tm027',
    move: { en: 'Swift', pt: 'Swift' },
  },
  {
    id: 'tms-tm028-355',
    index: 355,
    category: 'tms',
    name: { en: 'TM028', pt: 'TM028' },
    description: { en: 'Dig — Ground, Physical, 80 power, 12 cooldown', pt: 'Dig — Ground, Physical, 80 power, 12 cooldown' },
    source: { en: 'Hibernal Avenue', pt: 'Hibernal Avenue' },
    sources: [
      { kind: 'other', label: { en: 'Hibernal Avenue', pt: 'Hibernal Avenue' } }
    ],
    sprite: 'tm028',
    move: { en: 'Dig', pt: 'Dig' },
  },
  {
    id: 'tms-tm029-356',
    index: 356,
    category: 'tms',
    name: { en: 'TM029', pt: 'TM029' },
    description: { en: 'Fire Punch — Fire, Physical, 75 power, 7 cooldown', pt: 'Fire Punch — Fire, Physical, 75 power, 7 cooldown' },
    source: { en: 'Mable’s Research Level 17', pt: 'Mable’s Research Level 17' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 17', pt: 'Mable’s Research Level 17' } }
    ],
    sprite: 'tm029',
    move: { en: 'Fire Punch', pt: 'Fire Punch' },
  },
  {
    id: 'tms-tm030-357',
    index: 357,
    category: 'tms',
    name: { en: 'TM030', pt: 'TM030' },
    description: { en: 'Swords Dance — Normal, boosts Attack, 15 cooldown', pt: 'Swords Dance — Normal, boosts Attack, 15 cooldown' },
    source: { en: 'Mable’s Research Level 21', pt: 'Mable’s Research Level 21' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 21', pt: 'Mable’s Research Level 21' } }
    ],
    sprite: 'tm030',
    move: { en: 'Swords Dance', pt: 'Swords Dance' },
  },
  {
    id: 'tms-tm031-358',
    index: 358,
    category: 'tms',
    name: { en: 'TM031', pt: 'TM031' },
    description: { en: 'Reflect — Psychic, reduces Physical damage, 12 cooldown', pt: 'Reflect — Psychic, reduces Physical damage, 12 cooldown' },
    source: { en: 'Side Mission 34', pt: 'Side Mission 34' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 34', pt: 'Side Mission 34' } }
    ],
    sprite: 'tm031',
    move: { en: 'Reflect', pt: 'Reflect' },
  },
  {
    id: 'tms-tm032-359',
    index: 359,
    category: 'tms',
    name: { en: 'TM032', pt: 'TM032' },
    description: { en: 'Double Team — Normal, allows user to evade attacks, 15 cooldown', pt: 'Double Team — Normal, allows user to evade attacks, 15 cooldown' },
    source: { en: 'Mable’s Research Level 16', pt: 'Mable’s Research Level 16' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 16', pt: 'Mable’s Research Level 16' } }
    ],
    sprite: 'tm032',
    move: { en: 'Double Team', pt: 'Double Team' },
  },
  {
    id: 'tms-tm033-360',
    index: 360,
    category: 'tms',
    name: { en: 'TM033', pt: 'TM033' },
    description: { en: 'Body Slam — Normal, Physical, 85 power, 8 cooldown', pt: 'Body Slam — Normal, Physical, 85 power, 8 cooldown' },
    source: { en: 'Vert Sector 4', pt: 'Vert Sector 4' },
    sources: [
      { kind: 'field', label: { en: 'Vert Sector 4', pt: 'Vert Sector 4' } }
    ],
    sprite: 'tm033',
    move: { en: 'Body Slam', pt: 'Body Slam' },
  },
  {
    id: 'tms-tm034-361',
    index: 361,
    category: 'tms',
    name: { en: 'TM034', pt: 'TM034' },
    description: { en: 'Night Slash — Dark, Physical, 70 power, 7 cooldown', pt: 'Night Slash — Dark, Physical, 70 power, 7 cooldown' },
    source: { en: 'Wild Zone 10', pt: 'Wild Zone 10' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 10', pt: 'Wild Zone 10' } }
    ],
    sprite: 'tm034',
    move: { en: 'Night Slash', pt: 'Night Slash' },
  },
  {
    id: 'tms-tm035-362',
    index: 362,
    category: 'tms',
    name: { en: 'TM035', pt: 'TM035' },
    description: { en: 'Endure — Normal, allows user to take a hit and survive with at least 1 HP, 12 cooldown', pt: 'Endure — Normal, allows user to take a hit and survive with at least 1 HP, 12 cooldown' },
    source: { en: 'Jaune Sector 4', pt: 'Jaune Sector 4' },
    sources: [
      { kind: 'field', label: { en: 'Jaune Sector 4', pt: 'Jaune Sector 4' } }
    ],
    sprite: 'tm035',
    move: { en: 'Endure', pt: 'Endure' },
  },
  {
    id: 'tms-tm036-363',
    index: 363,
    category: 'tms',
    name: { en: 'TM036', pt: 'TM036' },
    description: { en: 'Rock Tomb — Rock, Physical, 10 cooldown', pt: 'Rock Tomb — Rock, Physical, 10 cooldown' },
    source: { en: 'Wild Zone 8', pt: 'Wild Zone 8' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 8', pt: 'Wild Zone 8' } }
    ],
    sprite: 'tm036',
    move: { en: 'Rock Tomb', pt: 'Rock Tomb' },
  },
  {
    id: 'tms-tm037-364',
    index: 364,
    category: 'tms',
    name: { en: 'TM037', pt: 'TM037' },
    description: { en: 'Stealth Rock — Rock, places trap of stones that will damage Pokemon that touch them, 10 cooldown', pt: 'Stealth Rock — Rock, places trap of stones that will damage Pokemon that touch them, 10 cooldown' },
    source: { en: 'Magenta Sector 6', pt: 'Magenta Sector 6' },
    sources: [
      { kind: 'field', label: { en: 'Magenta Sector 6', pt: 'Magenta Sector 6' } }
    ],
    sprite: 'tm037',
    move: { en: 'Stealth Rock', pt: 'Stealth Rock' },
  },
  {
    id: 'tms-tm038-365',
    index: 365,
    category: 'tms',
    name: { en: 'TM038', pt: 'TM038' },
    description: { en: 'Fire Blast — Fire, 110 power, 10 cooldown', pt: 'Fire Blast — Fire, 110 power, 10 cooldown' },
    source: { en: 'Mable’s Research Level 41', pt: 'Mable’s Research Level 41' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 41', pt: 'Mable’s Research Level 41' } }
    ],
    sprite: 'tm038',
    move: { en: 'Fire Blast', pt: 'Fire Blast' },
  },
  {
    id: 'tms-tm039-366',
    index: 366,
    category: 'tms',
    name: { en: 'TM039', pt: 'TM039' },
    description: { en: 'Discharge — Electric, 80 power, 8 cooldown', pt: 'Discharge — Electric, 80 power, 8 cooldown' },
    source: { en: 'Wild Zone 14', pt: 'Wild Zone 14' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 14', pt: 'Wild Zone 14' } }
    ],
    sprite: 'tm039',
    move: { en: 'Discharge', pt: 'Discharge' },
  },
  {
    id: 'tms-tm040-367',
    index: 367,
    category: 'tms',
    name: { en: 'TM040', pt: 'TM040' },
    description: { en: 'Bullet Seed — Grass, 15 power, 6 cooldown', pt: 'Bullet Seed — Grass, 15 power, 6 cooldown' },
    source: { en: 'Wild Zone 5 Rooftops', pt: 'Wild Zone 5 Rooftops' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 5 Rooftops', pt: 'Wild Zone 5 Rooftops' } }
    ],
    sprite: 'tm040',
    move: { en: 'Bullet Seed', pt: 'Bullet Seed' },
  },
  {
    id: 'tms-tm041-368',
    index: 368,
    category: 'tms',
    name: { en: 'TM041', pt: 'TM041' },
    description: { en: 'Water Pulse — Water, 60 power, 6 cooldown', pt: 'Water Pulse — Water, 60 power, 6 cooldown' },
    source: { en: 'Near Wild Zone 6 border', pt: 'Near Wild Zone 6 border' },
    sources: [
      { kind: 'field', label: { en: 'Near Wild Zone 6 border', pt: 'Near Wild Zone 6 border' } }
    ],
    sprite: 'tm041',
    move: { en: 'Water Pulse', pt: 'Water Pulse' },
  },
  {
    id: 'tms-tm042-369',
    index: 369,
    category: 'tms',
    name: { en: 'TM042', pt: 'TM042' },
    description: { en: 'Giga Drain — Grass, 75 power, 9 cooldown', pt: 'Giga Drain — Grass, 75 power, 9 cooldown' },
    source: { en: 'Mable’s Research Level 12', pt: 'Mable’s Research Level 12' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 12', pt: 'Mable’s Research Level 12' } }
    ],
    sprite: 'tm042',
    move: { en: 'Giga Drain', pt: 'Giga Drain' },
  },
  {
    id: 'tms-tm043-370',
    index: 370,
    category: 'tms',
    name: { en: 'TM043', pt: 'TM043' },
    description: { en: 'Fly — Flying, 90 power, 12 cooldown', pt: 'Fly — Flying, 90 power, 12 cooldown' },
    source: { en: 'Side Mission 46', pt: 'Side Mission 46' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 46', pt: 'Side Mission 46' } }
    ],
    sprite: 'tm043',
    move: { en: 'Fly', pt: 'Fly' },
  },
  {
    id: 'tms-tm044-371',
    index: 371,
    category: 'tms',
    name: { en: 'TM044', pt: 'TM044' },
    description: { en: 'Hyper Beam — Normal, 150 power, 20 cooldown', pt: 'Hyper Beam — Normal, 150 power, 20 cooldown' },
    source: { en: 'Jaune Sector 7', pt: 'Jaune Sector 7' },
    sources: [
      { kind: 'field', label: { en: 'Jaune Sector 7', pt: 'Jaune Sector 7' } }
    ],
    sprite: 'tm044',
    move: { en: 'Hyper Beam', pt: 'Hyper Beam' },
  },
  {
    id: 'tms-tm045-372',
    index: 372,
    category: 'tms',
    name: { en: 'TM045', pt: 'TM045' },
    description: { en: 'Knock Off — Dark, 65 power, 10 cooldown', pt: 'Knock Off — Dark, 65 power, 10 cooldown' },
    source: { en: 'Side Mission 94', pt: 'Side Mission 94' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 94', pt: 'Side Mission 94' } }
    ],
    sprite: 'tm045',
    move: { en: 'Knock Off', pt: 'Knock Off' },
  },
  {
    id: 'tms-tm046-373',
    index: 373,
    category: 'tms',
    name: { en: 'TM046', pt: 'TM046' },
    description: { en: 'Mud Shot — Ground, 55 power, 6 cooldown', pt: 'Mud Shot — Ground, 55 power, 6 cooldown' },
    source: { en: 'Mable\'s Research Level 3', pt: 'Mable\'s Research Level 3' },
    sources: [
      { kind: 'research', label: { en: 'Mable\'s Research Level 3', pt: 'Mable\'s Research Level 3' } }
    ],
    sprite: 'tm046',
    move: { en: 'Mud Shot', pt: 'Mud Shot' },
  },
  {
    id: 'tms-tm047-374',
    index: 374,
    category: 'tms',
    name: { en: 'TM047', pt: 'TM047' },
    description: { en: 'Agility — Psychic, 12 cooldown, increases Speed', pt: 'Agility — Psychic, 12 cooldown, increases Speed' },
    source: { en: 'Side Mission 88', pt: 'Side Mission 88' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 88', pt: 'Side Mission 88' } }
    ],
    sprite: 'tm047',
    move: { en: 'Agility', pt: 'Agility' },
  },
  {
    id: 'tms-tm048-375',
    index: 375,
    category: 'tms',
    name: { en: 'TM048', pt: 'TM048' },
    description: { en: 'Self-Destruct — Normal, 200 power, 15 cooldown', pt: 'Self-Destruct — Normal, 200 power, 15 cooldown' },
    source: { en: 'Side Mission 96', pt: 'Side Mission 96' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 96', pt: 'Side Mission 96' } }
    ],
    sprite: 'tm048',
    move: { en: 'Self-Destruct', pt: 'Self-Destruct' },
  },
  {
    id: 'tms-tm049-376',
    index: 376,
    category: 'tms',
    name: { en: 'TM049', pt: 'TM049' },
    description: { en: 'Icy Wind — Ice, 55 power, 7 cooldown', pt: 'Icy Wind — Ice, 55 power, 7 cooldown' },
    source: { en: 'Vert Sector 2', pt: 'Vert Sector 2' },
    sources: [
      { kind: 'field', label: { en: 'Vert Sector 2', pt: 'Vert Sector 2' } }
    ],
    sprite: 'tm049',
    move: { en: 'Icy Wind', pt: 'Icy Wind' },
  },
  {
    id: 'tms-tm050-377',
    index: 377,
    category: 'tms',
    name: { en: 'TM050', pt: 'TM050' },
    description: { en: 'Overheat — Fire, 130 power, 10 cooldown', pt: 'Overheat — Fire, 130 power, 10 cooldown' },
    source: { en: 'Mable’s Research Level 45', pt: 'Mable’s Research Level 45' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 45', pt: 'Mable’s Research Level 45' } }
    ],
    sprite: 'tm050',
    move: { en: 'Overheat', pt: 'Overheat' },
  },
  {
    id: 'tms-tm051-378',
    index: 378,
    category: 'tms',
    name: { en: 'TM051', pt: 'TM051' },
    description: { en: 'Safeguard — Normal, 12 cooldown, prevents status conditions', pt: 'Safeguard — Normal, 12 cooldown, prevents status conditions' },
    source: { en: 'Magenta Sector 7', pt: 'Magenta Sector 7' },
    sources: [
      { kind: 'field', label: { en: 'Magenta Sector 7', pt: 'Magenta Sector 7' } }
    ],
    sprite: 'tm051',
    move: { en: 'Safeguard', pt: 'Safeguard' },
  },
  {
    id: 'tms-tm052-379',
    index: 379,
    category: 'tms',
    name: { en: 'TM052', pt: 'TM052' },
    description: { en: 'Earth Power — Ground, 90 power, 8 cooldown', pt: 'Earth Power — Ground, 90 power, 8 cooldown' },
    source: { en: 'Wild Zone 15', pt: 'Wild Zone 15' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 15', pt: 'Wild Zone 15' } }
    ],
    sprite: 'tm052',
    move: { en: 'Earth Power', pt: 'Earth Power' },
  },
  {
    id: 'tms-tm053-380',
    index: 380,
    category: 'tms',
    name: { en: 'TM053', pt: 'TM053' },
    description: { en: 'Sludge Bomb — Poison, 90 power, 7 cooldown', pt: 'Sludge Bomb — Poison, 90 power, 7 cooldown' },
    source: { en: 'Mable’s Research Level 32', pt: 'Mable’s Research Level 32' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 32', pt: 'Mable’s Research Level 32' } }
    ],
    sprite: 'tm053',
    move: { en: 'Sludge Bomb', pt: 'Sludge Bomb' },
  },
  {
    id: 'tms-tm054-381',
    index: 381,
    category: 'tms',
    name: { en: 'TM054', pt: 'TM054' },
    description: { en: 'Draco Meteor — Dragon, 130 power, 10 cooldown', pt: 'Draco Meteor — Dragon, 130 power, 10 cooldown' },
    source: { en: 'Wild Zone 20', pt: 'Wild Zone 20' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 20', pt: 'Wild Zone 20' } }
    ],
    sprite: 'tm054',
    move: { en: 'Draco Meteor', pt: 'Draco Meteor' },
  },
  {
    id: 'tms-tm055-382',
    index: 382,
    category: 'tms',
    name: { en: 'TM055', pt: 'TM055' },
    description: { en: 'Giga Impact — Normal, 150 power, 20 cooldown', pt: 'Giga Impact — Normal, 150 power, 20 cooldown' },
    source: { en: 'Mable’s Research Level 35', pt: 'Mable’s Research Level 35' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 35', pt: 'Mable’s Research Level 35' } }
    ],
    sprite: 'tm055',
    move: { en: 'Giga Impact', pt: 'Giga Impact' },
  },
  {
    id: 'tms-tm056-383',
    index: 383,
    category: 'tms',
    name: { en: 'TM056', pt: 'TM056' },
    description: { en: 'Double-Edge — Normal, 120 power, 10 cooldown', pt: 'Double-Edge — Normal, 120 power, 10 cooldown' },
    source: { en: 'Bleu Sector 3', pt: 'Bleu Sector 3' },
    sources: [
      { kind: 'field', label: { en: 'Bleu Sector 3', pt: 'Bleu Sector 3' } }
    ],
    sprite: 'tm056',
    move: { en: 'Double-Edge', pt: 'Double-Edge' },
  },
  {
    id: 'tms-tm057-384',
    index: 384,
    category: 'tms',
    name: { en: 'TM057', pt: 'TM057' },
    description: { en: 'Will-O-Wisp — Fire, 10 cooldown, burns target', pt: 'Will-O-Wisp — Fire, 10 cooldown, burns target' },
    source: { en: 'Side Mission 26', pt: 'Side Mission 26' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 26', pt: 'Side Mission 26' } }
    ],
    sprite: 'tm057',
    move: { en: 'Will-O-Wisp', pt: 'Will-O-Wisp' },
  },
  {
    id: 'tms-tm058-385',
    index: 385,
    category: 'tms',
    name: { en: 'TM058', pt: 'TM058' },
    description: { en: 'Iron Head — Steel, 80 power, 8 cooldown', pt: 'Iron Head — Steel, 80 power, 8 cooldown' },
    source: { en: 'Bleu Sector 7', pt: 'Bleu Sector 7' },
    sources: [
      { kind: 'field', label: { en: 'Bleu Sector 7', pt: 'Bleu Sector 7' } }
    ],
    sprite: 'tm058',
    move: { en: 'Iron Head', pt: 'Iron Head' },
  },
  {
    id: 'tms-tm059-386',
    index: 386,
    category: 'tms',
    name: { en: 'TM059', pt: 'TM059' },
    description: { en: 'Zen Headbutt — Psychic, 80 power, 8 cooldown', pt: 'Zen Headbutt — Psychic, 80 power, 8 cooldown' },
    source: { en: 'Mable’s Research Level 20', pt: 'Mable’s Research Level 20' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 20', pt: 'Mable’s Research Level 20' } }
    ],
    sprite: 'tm059',
    move: { en: 'Zen Headbutt', pt: 'Zen Headbutt' },
  },
  {
    id: 'tms-tm060-387',
    index: 387,
    category: 'tms',
    name: { en: 'TM060', pt: 'TM060' },
    description: { en: 'Future Sight — Psychic, 120 power, 10 cooldown', pt: 'Future Sight — Psychic, 120 power, 10 cooldown' },
    source: { en: 'Wild Zone 5', pt: 'Wild Zone 5' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 5', pt: 'Wild Zone 5' } }
    ],
    sprite: 'tm060',
    move: { en: 'Future Sight', pt: 'Future Sight' },
  },
  {
    id: 'tms-tm061-388',
    index: 388,
    category: 'tms',
    name: { en: 'TM061', pt: 'TM061' },
    description: { en: 'Shadow Claw — Ghost, 70 power, 7 cooldown', pt: 'Shadow Claw — Ghost, 70 power, 7 cooldown' },
    source: { en: 'Mable’s Research Level 9', pt: 'Mable’s Research Level 9' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 9', pt: 'Mable’s Research Level 9' } }
    ],
    sprite: 'tm061',
    move: { en: 'Shadow Claw', pt: 'Shadow Claw' },
  },
  {
    id: 'tms-tm062-389',
    index: 389,
    category: 'tms',
    name: { en: 'TM062', pt: 'TM062' },
    description: { en: 'Flamethrower — Fire, 90 power, 8 cooldown', pt: 'Flamethrower — Fire, 90 power, 8 cooldown' },
    source: { en: 'Wild Zone 17', pt: 'Wild Zone 17' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 17', pt: 'Wild Zone 17' } }
    ],
    sprite: 'tm062',
    move: { en: 'Flamethrower', pt: 'Flamethrower' },
  },
  {
    id: 'tms-tm063-390',
    index: 390,
    category: 'tms',
    name: { en: 'TM063', pt: 'TM063' },
    description: { en: 'Psychic — Psychic, 90 power, 8 cooldown', pt: 'Psychic — Psychic, 90 power, 8 cooldown' },
    source: { en: 'Wild Zone 11', pt: 'Wild Zone 11' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 11', pt: 'Wild Zone 11' } }
    ],
    sprite: 'tm063',
    move: { en: 'Psychic', pt: 'Psychic' },
  },
  {
    id: 'tms-tm064-391',
    index: 391,
    category: 'tms',
    name: { en: 'TM064', pt: 'TM064' },
    description: { en: 'Solar Beam — Grass, 120 power, 12 cooldown', pt: 'Solar Beam — Grass, 120 power, 12 cooldown' },
    source: { en: 'Mable’s Research Level 39', pt: 'Mable’s Research Level 39' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 39', pt: 'Mable’s Research Level 39' } }
    ],
    sprite: 'tm064',
    move: { en: 'Solar Beam', pt: 'Solar Beam' },
  },
  {
    id: 'tms-tm065-392',
    index: 392,
    category: 'tms',
    name: { en: 'TM065', pt: 'TM065' },
    description: { en: 'Stone Edge — Rock, 100 power, 10 cooldown', pt: 'Stone Edge — Rock, 100 power, 10 cooldown' },
    source: { en: 'Wild Zone 18 Rooftop', pt: 'Wild Zone 18 Rooftop' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 18 Rooftop', pt: 'Wild Zone 18 Rooftop' } }
    ],
    sprite: 'tm065',
    move: { en: 'Stone Edge', pt: 'Stone Edge' },
  },
  {
    id: 'tms-tm066-393',
    index: 393,
    category: 'tms',
    name: { en: 'TM066', pt: 'TM066' },
    description: { en: 'Volt Switch — Electric, 70 power, 12 cooldown', pt: 'Volt Switch — Electric, 70 power, 12 cooldown' },
    source: { en: 'Racine Construction', pt: 'Racine Construction' },
    sources: [
      { kind: 'shop', label: { en: 'Racine Construction', pt: 'Racine Construction' } }
    ],
    sprite: 'tm066',
    move: { en: 'Volt Switch', pt: 'Volt Switch' },
  },
  {
    id: 'tms-tm067-394',
    index: 394,
    category: 'tms',
    name: { en: 'TM067', pt: 'TM067' },
    description: { en: 'Thunderbolt — Electric, 90 power, 8 cooldown', pt: 'Thunderbolt — Electric, 90 power, 8 cooldown' },
    source: { en: 'Mable’s Research Level 24', pt: 'Mable’s Research Level 24' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 24', pt: 'Mable’s Research Level 24' } }
    ],
    sprite: 'tm067',
    move: { en: 'Thunderbolt', pt: 'Thunderbolt' },
  },
  {
    id: 'tms-tm068-395',
    index: 395,
    category: 'tms',
    name: { en: 'TM068', pt: 'TM068' },
    description: { en: 'Heat Wave — Fire, 95 power, 9 cooldown', pt: 'Heat Wave — Fire, 95 power, 9 cooldown' },
    source: { en: 'Mable’s Research Level 28', pt: 'Mable’s Research Level 28' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 28', pt: 'Mable’s Research Level 28' } }
    ],
    sprite: 'tm068',
    move: { en: 'Heat Wave', pt: 'Heat Wave' },
  },
  {
    id: 'tms-tm069-396',
    index: 396,
    category: 'tms',
    name: { en: 'TM069', pt: 'TM069' },
    description: { en: 'Earthquake — Ground, 100 power, 10 cooldown', pt: 'Earthquake — Ground, 100 power, 10 cooldown' },
    source: { en: 'Mable’s Research Level 34', pt: 'Mable’s Research Level 34' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 34', pt: 'Mable’s Research Level 34' } }
    ],
    sprite: 'tm069',
    move: { en: 'Earthquake', pt: 'Earthquake' },
  },
  {
    id: 'tms-tm070-397',
    index: 397,
    category: 'tms',
    name: { en: 'TM070', pt: 'TM070' },
    description: { en: 'Whirlpool — Water, 20 power, 7 cooldown', pt: 'Whirlpool — Water, 20 power, 7 cooldown' },
    source: { en: 'Mable’s Research Level 8', pt: 'Mable’s Research Level 8' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 8', pt: 'Mable’s Research Level 8' } }
    ],
    sprite: 'tm070',
    move: { en: 'Whirlpool', pt: 'Whirlpool' },
  },
  {
    id: 'tms-tm071-398',
    index: 398,
    category: 'tms',
    name: { en: 'TM071', pt: 'TM071' },
    description: { en: 'Hyper Voice — Normal, 90 power, 8 cooldown', pt: 'Hyper Voice — Normal, 90 power, 8 cooldown' },
    source: { en: 'Rouge Sector 7', pt: 'Rouge Sector 7' },
    sources: [
      { kind: 'field', label: { en: 'Rouge Sector 7', pt: 'Rouge Sector 7' } }
    ],
    sprite: 'tm071',
    move: { en: 'Hyper Voice', pt: 'Hyper Voice' },
  },
  {
    id: 'tms-tm072-399',
    index: 399,
    category: 'tms',
    name: { en: 'TM072', pt: 'TM072' },
    description: { en: 'Fire Spin — Fire, 20 power, 7 cooldown', pt: 'Fire Spin — Fire, 20 power, 7 cooldown' },
    source: { en: 'Wild Zone 4', pt: 'Wild Zone 4' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 4', pt: 'Wild Zone 4' } }
    ],
    sprite: 'tm072',
    move: { en: 'Fire Spin', pt: 'Fire Spin' },
  },
  {
    id: 'tms-tm073-400',
    index: 400,
    category: 'tms',
    name: { en: 'TM073', pt: 'TM073' },
    description: { en: 'Surf — Water, 90 power, 8 cooldown', pt: 'Surf — Water, 90 power, 8 cooldown' },
    source: { en: 'Mable’s Research Level 29', pt: 'Mable’s Research Level 29' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 29', pt: 'Mable’s Research Level 29' } }
    ],
    sprite: 'tm073',
    move: { en: 'Surf', pt: 'Surf' },
  },
  {
    id: 'tms-tm074-401',
    index: 401,
    category: 'tms',
    name: { en: 'TM074', pt: 'TM074' },
    description: { en: 'Shadow Ball — Ghost, 80 power, 8 cooldown', pt: 'Shadow Ball — Ghost, 80 power, 8 cooldown' },
    source: { en: 'Rooftop near Wild Zone 17 border', pt: 'Rooftop near Wild Zone 17 border' },
    sources: [
      { kind: 'field', label: { en: 'Rooftop near Wild Zone 17 border', pt: 'Rooftop near Wild Zone 17 border' } }
    ],
    sprite: 'tm074',
    move: { en: 'Shadow Ball', pt: 'Shadow Ball' },
  },
  {
    id: 'tms-tm075-402',
    index: 402,
    category: 'tms',
    name: { en: 'TM075', pt: 'TM075' },
    description: { en: 'Dragon Pulse — Dragon, 85 power, 8 cooldown', pt: 'Dragon Pulse — Dragon, 85 power, 8 cooldown' },
    source: { en: 'Bleu Sector 4', pt: 'Bleu Sector 4' },
    sources: [
      { kind: 'field', label: { en: 'Bleu Sector 4', pt: 'Bleu Sector 4' } }
    ],
    sprite: 'tm075',
    move: { en: 'Dragon Pulse', pt: 'Dragon Pulse' },
  },
  {
    id: 'tms-tm076-403',
    index: 403,
    category: 'tms',
    name: { en: 'TM076', pt: 'TM076' },
    description: { en: 'Liquidation — Water, 85 power, 8 cooldown', pt: 'Liquidation — Water, 85 power, 8 cooldown' },
    source: { en: 'Wild Zone 16', pt: 'Wild Zone 16' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 16', pt: 'Wild Zone 16' } }
    ],
    sprite: 'tm076',
    move: { en: 'Liquidation', pt: 'Liquidation' },
  },
  {
    id: 'tms-tm077-404',
    index: 404,
    category: 'tms',
    name: { en: 'TM077', pt: 'TM077' },
    description: { en: 'Poison Jab — Poison, 80 power, 8 cooldown', pt: 'Poison Jab — Poison, 80 power, 8 cooldown' },
    source: { en: 'Mable’s Research Level 27', pt: 'Mable’s Research Level 27' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 27', pt: 'Mable’s Research Level 27' } }
    ],
    sprite: 'tm077',
    move: { en: 'Poison Jab', pt: 'Poison Jab' },
  },
  {
    id: 'tms-tm078-405',
    index: 405,
    category: 'tms',
    name: { en: 'TM078', pt: 'TM078' },
    description: { en: 'Bulldoze — Ground, 60 power, 6 cooldown', pt: 'Bulldoze — Ground, 60 power, 6 cooldown' },
    source: { en: 'Mable’s Research Level 18', pt: 'Mable’s Research Level 18' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 18', pt: 'Mable’s Research Level 18' } }
    ],
    sprite: 'tm078',
    move: { en: 'Bulldoze', pt: 'Bulldoze' },
  },
  {
    id: 'tms-tm079-406',
    index: 406,
    category: 'tms',
    name: { en: 'TM079', pt: 'TM079' },
    description: { en: 'Hurricane — Flying, 110 power, 10 cooldown', pt: 'Hurricane — Flying, 110 power, 10 cooldown' },
    source: { en: 'Wild Zone 19', pt: 'Wild Zone 19' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 19', pt: 'Wild Zone 19' } }
    ],
    sprite: 'tm079',
    move: { en: 'Hurricane', pt: 'Hurricane' },
  },
  {
    id: 'tms-tm080-407',
    index: 407,
    category: 'tms',
    name: { en: 'TM080', pt: 'TM080' },
    description: { en: 'Iron Defense — Steel, 9 cooldown, raises Defense', pt: 'Iron Defense — Steel, 9 cooldown, raises Defense' },
    source: { en: 'Vert Sector 6', pt: 'Vert Sector 6' },
    sources: [
      { kind: 'field', label: { en: 'Vert Sector 6', pt: 'Vert Sector 6' } }
    ],
    sprite: 'tm080',
    move: { en: 'Iron Defense', pt: 'Iron Defense' },
  },
  {
    id: 'tms-tm081-408',
    index: 408,
    category: 'tms',
    name: { en: 'TM081', pt: 'TM081' },
    description: { en: 'X-Scissor — Bug, 80 power, 8 cooldown', pt: 'X-Scissor — Bug, 80 power, 8 cooldown' },
    source: { en: 'Wild Zone 13', pt: 'Wild Zone 13' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 13', pt: 'Wild Zone 13' } }
    ],
    sprite: 'tm081',
    move: { en: 'X-Scissor', pt: 'X-Scissor' },
  },
  {
    id: 'tms-tm082-409',
    index: 409,
    category: 'tms',
    name: { en: 'TM082', pt: 'TM082' },
    description: { en: 'U-Turn — Bug, 70 power, 12 cooldown', pt: 'U-Turn — Bug, 70 power, 12 cooldown' },
    source: { en: 'Mable’s Research Level 19', pt: 'Mable’s Research Level 19' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 19', pt: 'Mable’s Research Level 19' } }
    ],
    sprite: 'tm082',
    move: { en: 'U-Turn', pt: 'U-Turn' },
  },
  {
    id: 'tms-tm083-410',
    index: 410,
    category: 'tms',
    name: { en: 'TM083', pt: 'TM083' },
    description: { en: 'Nasty Plot — Dark, 15 cooldown, raises Sp. Atk', pt: 'Nasty Plot — Dark, 15 cooldown, raises Sp. Atk' },
    source: { en: 'Mable’s Research Level 38', pt: 'Mable’s Research Level 38' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 38', pt: 'Mable’s Research Level 38' } }
    ],
    sprite: 'tm083',
    move: { en: 'Nasty Plot', pt: 'Nasty Plot' },
  },
  {
    id: 'tms-tm084-411',
    index: 411,
    category: 'tms',
    name: { en: 'TM084', pt: 'TM084' },
    description: { en: 'Flash Cannon — Steel, 80 power, 8 cooldown', pt: 'Flash Cannon — Steel, 80 power, 8 cooldown' },
    source: { en: 'Mable’s Research Level 22', pt: 'Mable’s Research Level 22' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 22', pt: 'Mable’s Research Level 22' } }
    ],
    sprite: 'tm084',
    move: { en: 'Flash Cannon', pt: 'Flash Cannon' },
  },
  {
    id: 'tms-tm085-412',
    index: 412,
    category: 'tms',
    name: { en: 'TM085', pt: 'TM085' },
    description: { en: 'Substitute — Normal, 10 cooldown, sacrifices HP to create a substitute', pt: 'Substitute — Normal, 10 cooldown, sacrifices HP to create a substitute' },
    source: { en: 'Side Mission 29', pt: 'Side Mission 29' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 29', pt: 'Side Mission 29' } }
    ],
    sprite: 'tm085',
    move: { en: 'Substitute', pt: 'Substitute' },
  },
  {
    id: 'tms-tm086-413',
    index: 413,
    category: 'tms',
    name: { en: 'TM086', pt: 'TM086' },
    description: { en: 'Wild Charge — Electric, 90 power, 8 cooldown', pt: 'Wild Charge — Electric, 90 power, 8 cooldown' },
    source: { en: 'Jaune Sector 2', pt: 'Jaune Sector 2' },
    sources: [
      { kind: 'field', label: { en: 'Jaune Sector 2', pt: 'Jaune Sector 2' } }
    ],
    sprite: 'tm086',
    move: { en: 'Wild Charge', pt: 'Wild Charge' },
  },
  {
    id: 'tms-tm087-414',
    index: 414,
    category: 'tms',
    name: { en: 'TM087', pt: 'TM087' },
    description: { en: 'Iron Tail — Steel, 100 power, 10 cooldown', pt: 'Iron Tail — Steel, 100 power, 10 cooldown' },
    source: { en: 'Mable’s Research Level 30', pt: 'Mable’s Research Level 30' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 30', pt: 'Mable’s Research Level 30' } }
    ],
    sprite: 'tm087',
    move: { en: 'Iron Tail', pt: 'Iron Tail' },
  },
  {
    id: 'tms-tm088-415',
    index: 415,
    category: 'tms',
    name: { en: 'TM088', pt: 'TM088' },
    description: { en: 'Spikes — Ground, 7 cooldown, creates trap', pt: 'Spikes — Ground, 7 cooldown, creates trap' },
    source: { en: 'Side Mission 41', pt: 'Side Mission 41' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 41', pt: 'Side Mission 41' } }
    ],
    sprite: 'tm088',
    move: { en: 'Spikes', pt: 'Spikes' },
  },
  {
    id: 'tms-tm089-416',
    index: 416,
    category: 'tms',
    name: { en: 'TM089', pt: 'TM089' },
    description: { en: 'Toxic Spikes — Poison, 7 cooldown, creates poisonous trap', pt: 'Toxic Spikes — Poison, 7 cooldown, creates poisonous trap' },
    source: { en: 'Rouge Sector 6', pt: 'Rouge Sector 6' },
    sources: [
      { kind: 'field', label: { en: 'Rouge Sector 6', pt: 'Rouge Sector 6' } }
    ],
    sprite: 'tm089',
    move: { en: 'Toxic Spikes', pt: 'Toxic Spikes' },
  },
  {
    id: 'tms-tm090-417',
    index: 417,
    category: 'tms',
    name: { en: 'TM090', pt: 'TM090' },
    description: { en: 'Dark Pulse — Dark, 80 power, 8 cooldown', pt: 'Dark Pulse — Dark, 80 power, 8 cooldown' },
    source: { en: 'Lysandre Labs B1F', pt: 'Lysandre Labs B1F' },
    sources: [
      { kind: 'other', label: { en: 'Lysandre Labs B1F', pt: 'Lysandre Labs B1F' } }
    ],
    sprite: 'tm090',
    move: { en: 'Dark Pulse', pt: 'Dark Pulse' },
  },
  {
    id: 'tms-tm091-418',
    index: 418,
    category: 'tms',
    name: { en: 'TM091', pt: 'TM091' },
    description: { en: 'Curse — Ghost, 15 cooldown, sacrifices Speed for Attack and Defense, works differently for Ghost-types', pt: 'Curse — Ghost, 15 cooldown, sacrifices Speed for Attack and Defense, works differently for Ghost-types' },
    source: { en: 'Magenta Sector 3', pt: 'Magenta Sector 3' },
    sources: [
      { kind: 'field', label: { en: 'Magenta Sector 3', pt: 'Magenta Sector 3' } }
    ],
    sprite: 'tm091',
    move: { en: 'Curse', pt: 'Curse' },
  },
  {
    id: 'tms-tm092-419',
    index: 419,
    category: 'tms',
    name: { en: 'TM092', pt: 'TM092' },
    description: { en: 'Dazzling Gleam — Fairy, 80 power, 8 cooldown', pt: 'Dazzling Gleam — Fairy, 80 power, 8 cooldown' },
    source: { en: 'Wild Zone 7', pt: 'Wild Zone 7' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 7', pt: 'Wild Zone 7' } }
    ],
    sprite: 'tm092',
    move: { en: 'Dazzling Gleam', pt: 'Dazzling Gleam' },
  },
  {
    id: 'balls-fast-ball-492',
    index: 492,
    category: 'balls',
    name: { en: 'Fast Ball', pt: 'Fast Ball' },
    description: { en: 'More effective when catching Pokemon that are quick to run away.', pt: 'More effective when catching Pokemon that are quick to run away.' },
    source: { en: 'Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Rich Boy in 5 Star in Hyperspace Battle Zone · Side Mission 144: Imitation Is the Sincerest Form of Flattery · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Rich Boy in 5 Star in Hyperspace Battle Zone · Side Mission 144: Imitation Is the Sincerest Form of Flattery · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'shop', label: { en: 'Shop: Quasartico Inc.', pt: 'Shop: Quasartico Inc.' } },
      { kind: 'other', label: { en: 'Z-A Infinite Royale reward match', pt: 'Z-A Infinite Royale reward match' } },
      { kind: 'hyperspace', label: { en: 'Defeat Rich Boy in 5 Star in Hyperspace Battle Zone', pt: 'Defeat Rich Boy in 5 Star in Hyperspace Battle Zone' } },
      { kind: 'mission', label: { en: 'Side Mission 144: Imitation Is the Sincerest Form of Flattery', pt: 'Side Mission 144: Imitation Is the Sincerest Form of Flattery' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'fast-ball',
  },
  {
    id: 'balls-level-ball-493',
    index: 493,
    category: 'balls',
    name: { en: 'Level Ball', pt: 'Level Ball' },
    description: { en: 'More effective the lower the level of the Pokemon compared to your own Pokemon.', pt: 'More effective the lower the level of the Pokemon compared to your own Pokemon.' },
    source: { en: 'Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Rich Boy in 5 Star in Hyperspace Battle Zone · Side Mission 121: A Big Ol\' Battle · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Rich Boy in 5 Star in Hyperspace Battle Zone · Side Mission 121: A Big Ol\' Battle · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'shop', label: { en: 'Shop: Quasartico Inc.', pt: 'Shop: Quasartico Inc.' } },
      { kind: 'other', label: { en: 'Z-A Infinite Royale reward match', pt: 'Z-A Infinite Royale reward match' } },
      { kind: 'hyperspace', label: { en: 'Defeat Rich Boy in 5 Star in Hyperspace Battle Zone', pt: 'Defeat Rich Boy in 5 Star in Hyperspace Battle Zone' } },
      { kind: 'mission', label: { en: 'Side Mission 121: A Big Ol\' Battle', pt: 'Side Mission 121: A Big Ol\' Battle' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'level-ball',
  },
  {
    id: 'balls-lure-ball-494',
    index: 494,
    category: 'balls',
    name: { en: 'Lure Ball', pt: 'Lure Ball' },
    description: { en: 'More effective when catching Pokemon in or on the water.', pt: 'More effective when catching Pokemon in or on the water.' },
    source: { en: 'Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Rich Boy in 5 Star in Hyperspace Battle Zone · Side Mission 190: A Mimikyu for My Cutie · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Rich Boy in 5 Star in Hyperspace Battle Zone · Side Mission 190: A Mimikyu for My Cutie · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'shop', label: { en: 'Shop: Quasartico Inc.', pt: 'Shop: Quasartico Inc.' } },
      { kind: 'other', label: { en: 'Z-A Infinite Royale reward match', pt: 'Z-A Infinite Royale reward match' } },
      { kind: 'hyperspace', label: { en: 'Defeat Rich Boy in 5 Star in Hyperspace Battle Zone', pt: 'Defeat Rich Boy in 5 Star in Hyperspace Battle Zone' } },
      { kind: 'mission', label: { en: 'Side Mission 190: A Mimikyu for My Cutie', pt: 'Side Mission 190: A Mimikyu for My Cutie' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'lure-ball',
  },
  {
    id: 'balls-heavy-ball-495',
    index: 495,
    category: 'balls',
    name: { en: 'Heavy Ball', pt: 'Heavy Ball' },
    description: { en: 'More effective the heavier the Pokemon is.', pt: 'More effective the heavier the Pokemon is.' },
    source: { en: 'Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Rich Boy in 5 Star in Hyperspace Battle Zone · Side Mission 190: A Mimikyu for My Cutie · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Rich Boy in 5 Star in Hyperspace Battle Zone · Side Mission 190: A Mimikyu for My Cutie · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'shop', label: { en: 'Shop: Quasartico Inc.', pt: 'Shop: Quasartico Inc.' } },
      { kind: 'other', label: { en: 'Z-A Infinite Royale reward match', pt: 'Z-A Infinite Royale reward match' } },
      { kind: 'hyperspace', label: { en: 'Defeat Rich Boy in 5 Star in Hyperspace Battle Zone', pt: 'Defeat Rich Boy in 5 Star in Hyperspace Battle Zone' } },
      { kind: 'mission', label: { en: 'Side Mission 190: A Mimikyu for My Cutie', pt: 'Side Mission 190: A Mimikyu for My Cutie' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'heavy-ball',
  },
  {
    id: 'balls-love-ball-496',
    index: 496,
    category: 'balls',
    name: { en: 'Love Ball', pt: 'Love Ball' },
    description: { en: 'More effective when catching Pokemon of the opposite gender to your own Pokemon.', pt: 'More effective when catching Pokemon of the opposite gender to your own Pokemon.' },
    source: { en: 'Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Lady in 5 Star in Hyperspace Battle Zone · Side Mission 180: A Wild Rosebud · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Lady in 5 Star in Hyperspace Battle Zone · Side Mission 180: A Wild Rosebud · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'shop', label: { en: 'Shop: Quasartico Inc.', pt: 'Shop: Quasartico Inc.' } },
      { kind: 'other', label: { en: 'Z-A Infinite Royale reward match', pt: 'Z-A Infinite Royale reward match' } },
      { kind: 'hyperspace', label: { en: 'Defeat Lady in 5 Star in Hyperspace Battle Zone', pt: 'Defeat Lady in 5 Star in Hyperspace Battle Zone' } },
      { kind: 'mission', label: { en: 'Side Mission 180: A Wild Rosebud', pt: 'Side Mission 180: A Wild Rosebud' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'love-ball',
  },
  {
    id: 'balls-friend-ball-497',
    index: 497,
    category: 'balls',
    name: { en: 'Friend Ball', pt: 'Friend Ball' },
    description: { en: 'The Pokemon caught in this immediately becomes more friendly towards you.', pt: 'The Pokemon caught in this immediately becomes more friendly towards you.' },
    source: { en: 'Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Lady in 5 Star in Hyperspace Battle Zone · Side Mission 161: Frigibax\'s Friend-Finding · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Lady in 5 Star in Hyperspace Battle Zone · Side Mission 161: Frigibax\'s Friend-Finding · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'shop', label: { en: 'Shop: Quasartico Inc.', pt: 'Shop: Quasartico Inc.' } },
      { kind: 'other', label: { en: 'Z-A Infinite Royale reward match', pt: 'Z-A Infinite Royale reward match' } },
      { kind: 'hyperspace', label: { en: 'Defeat Lady in 5 Star in Hyperspace Battle Zone', pt: 'Defeat Lady in 5 Star in Hyperspace Battle Zone' } },
      { kind: 'mission', label: { en: 'Side Mission 161: Frigibax\'s Friend-Finding', pt: 'Side Mission 161: Frigibax\'s Friend-Finding' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'friend-ball',
  },
  {
    id: 'balls-moon-ball-498',
    index: 498,
    category: 'balls',
    name: { en: 'Moon Ball', pt: 'Moon Ball' },
    description: { en: 'More effective when catching Pokemon that can be evolved using a Moon Stone.', pt: 'More effective when catching Pokemon that can be evolved using a Moon Stone.' },
    source: { en: 'Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Lady in 5 Star in Hyperspace Battle Zone · Side Mission 174: I Still Remember the Taste... · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Lady in 5 Star in Hyperspace Battle Zone · Side Mission 174: I Still Remember the Taste... · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'shop', label: { en: 'Shop: Quasartico Inc.', pt: 'Shop: Quasartico Inc.' } },
      { kind: 'other', label: { en: 'Z-A Infinite Royale reward match', pt: 'Z-A Infinite Royale reward match' } },
      { kind: 'hyperspace', label: { en: 'Defeat Lady in 5 Star in Hyperspace Battle Zone', pt: 'Defeat Lady in 5 Star in Hyperspace Battle Zone' } },
      { kind: 'mission', label: { en: 'Side Mission 174: I Still Remember the Taste...', pt: 'Side Mission 174: I Still Remember the Taste...' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'moon-ball',
  },
  {
    id: 'balls-sport-ball-499',
    index: 499,
    category: 'balls',
    name: { en: 'Sport Ball', pt: 'Sport Ball' },
    description: { en: 'Special Poke Ball used for the Bug-Catching Contest in the Johto region.', pt: 'Special Poke Ball used for the Bug-Catching Contest in the Johto region.' },
    source: { en: 'Z-A Ranked Multiplayer Seasonal Reward', pt: 'Z-A Ranked Multiplayer Seasonal Reward' },
    sources: [
      { kind: 'other', label: { en: 'Z-A Ranked Multiplayer Seasonal Reward', pt: 'Z-A Ranked Multiplayer Seasonal Reward' } }
    ],
    sprite: 'sport-ball',
  },
  {
    id: 'other-red-orb-534',
    index: 534,
    category: 'other',
    name: { en: 'Red Orb', pt: 'Red Orb' },
    description: { en: 'Held, evolution, vitamin, or utility item.', pt: 'Item segurado, de evolução, vitamina ou utilitário.' },
    source: { en: 'Hyperspace Desolate Land', pt: 'Hyperspace Desolate Land' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Desolate Land', pt: 'Hyperspace Desolate Land' } }
    ],
    sprite: 'red-orb',
  },
  {
    id: 'other-blue-orb-535',
    index: 535,
    category: 'other',
    name: { en: 'Blue Orb', pt: 'Blue Orb' },
    description: { en: 'Held, evolution, vitamin, or utility item.', pt: 'Item segurado, de evolução, vitamina ou utilitário.' },
    source: { en: 'Hyperspace Primordial Sea', pt: 'Hyperspace Primordial Sea' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Primordial Sea', pt: 'Hyperspace Primordial Sea' } }
    ],
    sprite: 'blue-orb',
  },
  {
    id: 'other-prism-scale-537',
    index: 537,
    category: 'other',
    name: { en: 'Prism Scale', pt: 'Prism Scale' },
    description: { en: 'Held, evolution, vitamin, or utility item.', pt: 'Item segurado, de evolução, vitamina ou utilitário.' },
    source: { en: 'Side Mission 160: Feebas\'s New Friends · Hyperspace floating Poké Balls', pt: 'Side Mission 160: Feebas\'s New Friends · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 160: Feebas\'s New Friends', pt: 'Side Mission 160: Feebas\'s New Friends' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    price: { amount: 3000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'prism-scale',
  },
  {
    id: 'other-eviolite-538',
    index: 538,
    category: 'other',
    name: { en: 'Eviolite', pt: 'Eviolite' },
    description: { en: 'Boosts Defense and Sp. Def for Pokemon that can still evolve', pt: 'Boosts Defense and Sp. Def for Pokemon that can still evolve' },
    source: { en: 'Side Mission 100 · Racine Construction Shop', pt: 'Side Mission 100 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 100', pt: 'Side Mission 100' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'eviolite',
  },
  {
    id: 'other-rocky-helmet-540',
    index: 540,
    category: 'other',
    name: { en: 'Rocky Helmet', pt: 'Rocky Helmet' },
    description: { en: 'Damages any attacker makes direct contact', pt: 'Damages any attacker makes direct contact' },
    source: { en: 'Side Mission 92 · Racine Construction Shop', pt: 'Side Mission 92 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 92', pt: 'Side Mission 92' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'rocky-helmet',
  },
  {
    id: 'other-normal-gem-564',
    index: 564,
    category: 'other',
    name: { en: 'Normal Gem', pt: 'Normal Gem' },
    description: { en: 'Boosts Normal-type move once', pt: 'Boosts Normal-type move once' },
    source: { en: 'Side Mission 21: Spewpa in the Museum · Shop: Racine Construction', pt: 'Side Mission 21: Spewpa in the Museum · Shop: Racine Construction' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 21: Spewpa in the Museum', pt: 'Side Mission 21: Spewpa in the Museum' } },
      { kind: 'shop', label: { en: 'Shop: Racine Construction', pt: 'Shop: Racine Construction' } }
    ],
    sprite: 'normal-gem',
  },
  {
    id: 'other-health-feather-565',
    index: 565,
    category: 'other',
    name: { en: 'Health Feather', pt: 'Health Feather' },
    description: { en: 'Raises HP', pt: 'Raises HP' },
    source: { en: 'Field loot (districts / streets · dungeons / Hyperspace) · Side Mission 129: A Work of Great Love · Shop: Vert District (Vert Sector 7)', pt: 'Field loot (districts / streets · dungeons / Hyperspace) · Side Mission 129: A Work of Great Love · Shop: Vert District (Vert Sector 7)' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (districts / streets · dungeons / Hyperspace)', pt: 'Field loot (districts / streets · dungeons / Hyperspace)' } },
      { kind: 'mission', label: { en: 'Side Mission 129: A Work of Great Love', pt: 'Side Mission 129: A Work of Great Love' } },
      { kind: 'shop', label: { en: 'Shop: Vert District (Vert Sector 7)', pt: 'Shop: Vert District (Vert Sector 7)' } }
    ],
    sprite: 'health-wing',
  },
  {
    id: 'other-muscle-feather-566',
    index: 566,
    category: 'other',
    name: { en: 'Muscle Feather', pt: 'Muscle Feather' },
    description: { en: 'Raises Attack', pt: 'Raises Attack' },
    source: { en: 'Field loot (districts / streets · dungeons / Hyperspace) · Side Mission 128: A Novel Adventure · Shop: Vert District (Vert Sector 7)', pt: 'Field loot (districts / streets · dungeons / Hyperspace) · Side Mission 128: A Novel Adventure · Shop: Vert District (Vert Sector 7)' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (districts / streets · dungeons / Hyperspace)', pt: 'Field loot (districts / streets · dungeons / Hyperspace)' } },
      { kind: 'mission', label: { en: 'Side Mission 128: A Novel Adventure', pt: 'Side Mission 128: A Novel Adventure' } },
      { kind: 'shop', label: { en: 'Shop: Vert District (Vert Sector 7)', pt: 'Shop: Vert District (Vert Sector 7)' } }
    ],
    sprite: 'muscle-wing',
  },
  {
    id: 'other-resist-feather-567',
    index: 567,
    category: 'other',
    name: { en: 'Resist Feather', pt: 'Resist Feather' },
    description: { en: 'Raises Defense', pt: 'Raises Defense' },
    source: { en: 'Field loot (districts / streets · dungeons / Hyperspace) · Shop: Vert District (Vert Sector 7)', pt: 'Field loot (districts / streets · dungeons / Hyperspace) · Shop: Vert District (Vert Sector 7)' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (districts / streets · dungeons / Hyperspace)', pt: 'Field loot (districts / streets · dungeons / Hyperspace)' } },
      { kind: 'shop', label: { en: 'Shop: Vert District (Vert Sector 7)', pt: 'Shop: Vert District (Vert Sector 7)' } }
    ],
    sprite: 'resist-wing',
  },
  {
    id: 'other-genius-feather-568',
    index: 568,
    category: 'other',
    name: { en: 'Genius Feather', pt: 'Genius Feather' },
    description: { en: 'Raises Sp. Atk', pt: 'Raises Sp. Atk' },
    source: { en: 'Field loot (districts / streets · dungeons / Hyperspace) · Side Mission 130: A Tale of Mystery · Shop: Vert District (Vert Sector 7)', pt: 'Field loot (districts / streets · dungeons / Hyperspace) · Side Mission 130: A Tale of Mystery · Shop: Vert District (Vert Sector 7)' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (districts / streets · dungeons / Hyperspace)', pt: 'Field loot (districts / streets · dungeons / Hyperspace)' } },
      { kind: 'mission', label: { en: 'Side Mission 130: A Tale of Mystery', pt: 'Side Mission 130: A Tale of Mystery' } },
      { kind: 'shop', label: { en: 'Shop: Vert District (Vert Sector 7)', pt: 'Shop: Vert District (Vert Sector 7)' } }
    ],
    sprite: 'genius-wing',
  },
  {
    id: 'other-clever-feather-569',
    index: 569,
    category: 'other',
    name: { en: 'Clever Feather', pt: 'Clever Feather' },
    description: { en: 'Raises Sp. Def', pt: 'Raises Sp. Def' },
    source: { en: 'Field loot (districts / streets · dungeons / Hyperspace) · Side Mission 130: A Tale of Mystery · Shop: Vert District (Vert Sector 7)', pt: 'Field loot (districts / streets · dungeons / Hyperspace) · Side Mission 130: A Tale of Mystery · Shop: Vert District (Vert Sector 7)' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (districts / streets · dungeons / Hyperspace)', pt: 'Field loot (districts / streets · dungeons / Hyperspace)' } },
      { kind: 'mission', label: { en: 'Side Mission 130: A Tale of Mystery', pt: 'Side Mission 130: A Tale of Mystery' } },
      { kind: 'shop', label: { en: 'Shop: Vert District (Vert Sector 7)', pt: 'Shop: Vert District (Vert Sector 7)' } }
    ],
    sprite: 'clever-wing',
  },
  {
    id: 'other-swift-feather-570',
    index: 570,
    category: 'other',
    name: { en: 'Swift Feather', pt: 'Swift Feather' },
    description: { en: 'Raises Speed', pt: 'Raises Speed' },
    source: { en: 'Field loot (districts / streets · dungeons / Hyperspace) · Side Mission 88: The Nervous Novice Cabbie · Side Mission 129: A Work of Great Love · Shop: Vert District (Vert Sector 7)', pt: 'Field loot (districts / streets · dungeons / Hyperspace) · Side Mission 88: The Nervous Novice Cabbie · Side Mission 129: A Work of Great Love · Shop: Vert District (Vert Sector 7)' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (districts / streets · dungeons / Hyperspace)', pt: 'Field loot (districts / streets · dungeons / Hyperspace)' } },
      { kind: 'mission', label: { en: 'Side Mission 88: The Nervous Novice Cabbie', pt: 'Side Mission 88: The Nervous Novice Cabbie' } },
      { kind: 'mission', label: { en: 'Side Mission 129: A Work of Great Love', pt: 'Side Mission 129: A Work of Great Love' } },
      { kind: 'shop', label: { en: 'Shop: Vert District (Vert Sector 7)', pt: 'Shop: Vert District (Vert Sector 7)' } }
    ],
    sprite: 'swift-wing',
  },
  {
    id: 'treasures-pretty-feather-571',
    index: 571,
    category: 'treasures',
    name: { en: 'Pretty Feather', pt: 'Pretty Feather' },
    description: { en: 'Though this feather is beautiful, it\'s just a regular feather and has no effect.', pt: 'Though this feather is beautiful, it\'s just a regular feather and has no effect.' },
    source: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Side Mission 17: A Shiny Mareep · Side Mission 150: Corvisquire\'s Search', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Side Mission 17: A Shiny Mareep · Side Mission 150: Corvisquire\'s Search' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)' } },
      { kind: 'mission', label: { en: 'Side Mission 17: A Shiny Mareep', pt: 'Side Mission 17: A Shiny Mareep' } },
      { kind: 'mission', label: { en: 'Side Mission 150: Corvisquire\'s Search', pt: 'Side Mission 150: Corvisquire\'s Search' } }
    ],
    price: { amount: 500, currency: 'pokedollars', kind: 'buy' },
    sprite: 'pretty-wing',
  },
  {
    id: 'balls-dream-ball-576',
    index: 576,
    category: 'balls',
    name: { en: 'Dream Ball', pt: 'Dream Ball' },
    description: { en: 'More effective when catching Pokemon that are drowsy.', pt: 'More effective when catching Pokemon that are drowsy.' },
    source: { en: 'Z-A Ranked Multiplayer Seasonal Reward', pt: 'Z-A Ranked Multiplayer Seasonal Reward' },
    sources: [
      { kind: 'other', label: { en: 'Z-A Ranked Multiplayer Seasonal Reward', pt: 'Z-A Ranked Multiplayer Seasonal Reward' } }
    ],
    sprite: 'dream-ball',
  },
  {
    id: 'treasures-big-nugget-581',
    index: 581,
    category: 'treasures',
    name: { en: 'Big Nugget', pt: 'Pepita Grande' },
    description: { en: 'Valuable item that can be sold.', pt: 'Item valioso que pode ser vendido.' },
    source: { en: 'Wild Zone 17, Wild Zone 18, Wild Zone 20, · Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Rich Boy in 5 Star in Hyperspace Battle Zone · Side Mission 169: A Gallant Indeedee · Hyperspace floating Poké Balls', pt: 'Wild Zone 17, Wild Zone 18, Wild Zone 20, · Shop: Quasartico Inc. · Z-A Infinite Royale reward match · Defeat Rich Boy in 5 Star in Hyperspace Battle Zone · Side Mission 169: A Gallant Indeedee · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 17, Wild Zone 18, Wild Zone 20,', pt: 'Wild Zone 17, Wild Zone 18, Wild Zone 20,' } },
      { kind: 'shop', label: { en: 'Shop: Quasartico Inc.', pt: 'Shop: Quasartico Inc.' } },
      { kind: 'other', label: { en: 'Z-A Infinite Royale reward match', pt: 'Z-A Infinite Royale reward match' } },
      { kind: 'hyperspace', label: { en: 'Defeat Rich Boy in 5 Star in Hyperspace Battle Zone', pt: 'Defeat Rich Boy in 5 Star in Hyperspace Battle Zone' } },
      { kind: 'mission', label: { en: 'Side Mission 169: A Gallant Indeedee', pt: 'Side Mission 169: A Gallant Indeedee' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    sprite: 'big-nugget',
  },
  {
    id: 'treasures-pearl-string-582',
    index: 582,
    category: 'treasures',
    name: { en: 'Pearl String', pt: 'Pearl String' },
    description: { en: 'Valuable item that can be sold.', pt: 'Item valioso que pode ser vendido.' },
    source: { en: 'Vert District (Vert Sector 7) · Defeat Lady in 5 Star in Hyperspace Battle Zone · Hyperspace floating Poké Balls', pt: 'Vert District (Vert Sector 7) · Defeat Lady in 5 Star in Hyperspace Battle Zone · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'field', label: { en: 'Vert District (Vert Sector 7)', pt: 'Vert District (Vert Sector 7)' } },
      { kind: 'hyperspace', label: { en: 'Defeat Lady in 5 Star in Hyperspace Battle Zone', pt: 'Defeat Lady in 5 Star in Hyperspace Battle Zone' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    sprite: 'pearl-string',
  },
  {
    id: 'tms-tm093-618',
    index: 618,
    category: 'tms',
    name: { en: 'TM093', pt: 'TM093' },
    description: { en: 'Outrage — Dragon, 120 power, 15 cooldown', pt: 'Outrage — Dragon, 120 power, 15 cooldown' },
    source: { en: 'Mable’s Research Level 46', pt: 'Mable’s Research Level 46' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 46', pt: 'Mable’s Research Level 46' } }
    ],
    sprite: 'tm093',
    move: { en: 'Outrage', pt: 'Outrage' },
  },
  {
    id: 'tms-tm094-619',
    index: 619,
    category: 'tms',
    name: { en: 'TM094', pt: 'TM094' },
    description: { en: 'Whirlwind — Normal, 7 cooldown, pushes targets back', pt: 'Whirlwind — Normal, 7 cooldown, pushes targets back' },
    source: { en: 'Side Mission 60', pt: 'Side Mission 60' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 60', pt: 'Side Mission 60' } }
    ],
    sprite: 'tm094',
    move: { en: 'Whirlwind', pt: 'Whirlwind' },
  },
  {
    id: 'tms-tm095-620',
    index: 620,
    category: 'tms',
    name: { en: 'TM095', pt: 'TM095' },
    description: { en: 'Taunt — Dark, 12 cooldown, makes targets only use damage-dealing moves', pt: 'Taunt — Dark, 12 cooldown, makes targets only use damage-dealing moves' },
    source: { en: 'The Sewers', pt: 'The Sewers' },
    sources: [
      { kind: 'other', label: { en: 'The Sewers', pt: 'The Sewers' } }
    ],
    sprite: 'tm095',
    move: { en: 'Taunt', pt: 'Taunt' },
  },
  {
    id: 'key-shiny-charm-632',
    index: 632,
    category: 'key',
    name: { en: 'Shiny Charm', pt: 'Amuleto Brilhante' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Mable\'s Research Level 50', pt: 'Mable\'s Research Level 50' },
    sources: [
      { kind: 'research', label: { en: 'Mable\'s Research Level 50', pt: 'Mable\'s Research Level 50' } }
    ],
    sprite: 'shiny-charm',
  },
  {
    id: 'other-weakness-policy-639',
    index: 639,
    category: 'other',
    name: { en: 'Weakness Policy', pt: 'Weakness Policy' },
    description: { en: 'Boosts Attack and Sp. Atk if hit by a move it is weak to', pt: 'Boosts Attack and Sp. Atk if hit by a move it is weak to' },
    source: { en: 'Side Mission 86 · Racine Construction Shop', pt: 'Side Mission 86 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 86', pt: 'Side Mission 86' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'weakness-policy',
  },
  {
    id: 'other-assault-vest-640',
    index: 640,
    category: 'other',
    name: { en: 'Assault Vest', pt: 'Assault Vest' },
    description: { en: 'Boosts Sp. Def but prevents status moves.', pt: 'Boosts Sp. Def but prevents status moves.' },
    source: { en: 'Side Mission 71 · Racine Construction Shop', pt: 'Side Mission 71 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 71', pt: 'Side Mission 71' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'assault-vest',
  },
  {
    id: 'other-whipped-dream-646',
    index: 646,
    category: 'other',
    name: { en: 'Whipped Dream', pt: 'Doce de Sonho' },
    description: { en: 'Loved by Swirlix', pt: 'Loved by Swirlix' },
    source: { en: 'Side Mission 14 · Loot · Postgame', pt: 'Side Mission 14 · Loot · Postgame' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 14', pt: 'Side Mission 14' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'story', label: { en: 'Postgame', pt: 'Postgame' } }
    ],
    price: { amount: 3000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'whipped-dream',
  },
  {
    id: 'other-sachet-647',
    index: 647,
    category: 'other',
    name: { en: 'Sachet', pt: 'Sachê' },
    description: { en: 'Loved by Spritzee', pt: 'Loved by Spritzee' },
    source: { en: 'Side Mission 10 · Loot · Postgame', pt: 'Side Mission 10 · Loot · Postgame' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 10', pt: 'Side Mission 10' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'story', label: { en: 'Postgame', pt: 'Postgame' } }
    ],
    price: { amount: 3000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'sachet',
  },
  {
    id: 'mega-gengarite-656',
    index: 656,
    category: 'mega',
    name: { en: 'Gengarite', pt: 'Gengarite' },
    description: { en: 'Mega Gengar', pt: 'Mega Gengar' },
    source: { en: 'Shop · Vernal Avenue (Stone Emporium)', pt: 'Shop · Vernal Avenue (Stone Emporium)' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Vernal Avenue (Stone Emporium)', pt: 'Shop · Vernal Avenue (Stone Emporium)' } }
    ],
    price: { amount: 50000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'gengarite',
  },
  {
    id: 'mega-gardevoirite-657',
    index: 657,
    category: 'mega',
    name: { en: 'Gardevoirite', pt: 'Gardevoirite' },
    description: { en: 'Mega Gardevoir', pt: 'Mega Gardevoir' },
    source: { en: 'Shop · Quasartico Inc. · Also Mystery Gift (Oct 16, 2025 – Feb 28, 2026)', pt: 'Shop · Quasartico Inc. · Also Mystery Gift (Oct 16, 2025 – Feb 28, 2026)' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } },
      { kind: 'mysteryGift', label: { en: 'Also Mystery Gift (Oct 16, 2025 – Feb 28, 2026)', pt: 'Also Mystery Gift (Oct 16, 2025 – Feb 28, 2026)' } }
    ],
    sprite: 'gardevoirite',
  },
  {
    id: 'mega-ampharosite-658',
    index: 658,
    category: 'mega',
    name: { en: 'Ampharosite', pt: 'Ampharosite' },
    description: { en: 'Mega Ampharos', pt: 'Mega Ampharos' },
    source: { en: 'Rouge District (Rouge Sector 6)', pt: 'Rouge District (Rouge Sector 6)' },
    sources: [
      { kind: 'field', label: { en: 'Rouge District (Rouge Sector 6)', pt: 'Rouge District (Rouge Sector 6)' } }
    ],
    sprite: 'ampharosite',
  },
  {
    id: 'mega-venusaurite-659',
    index: 659,
    category: 'mega',
    name: { en: 'Venusaurite', pt: 'Venusaurite' },
    description: { en: 'Mega Venusaur', pt: 'Mega Venusaur' },
    source: { en: 'Jaune District (Jaune Sector 8)', pt: 'Jaune District (Jaune Sector 8)' },
    sources: [
      { kind: 'field', label: { en: 'Jaune District (Jaune Sector 8)', pt: 'Jaune District (Jaune Sector 8)' } }
    ],
    sprite: 'venusaurite',
  },
  {
    id: 'mega-charizardite-x-660',
    index: 660,
    category: 'mega',
    name: { en: 'Charizardite X', pt: 'Charizardite X' },
    description: { en: 'Mega Charizard X', pt: 'Mega Charizard X' },
    source: { en: 'Shop · Vernal Avenue (Stone Emporium)', pt: 'Shop · Vernal Avenue (Stone Emporium)' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Vernal Avenue (Stone Emporium)', pt: 'Shop · Vernal Avenue (Stone Emporium)' } }
    ],
    price: { amount: 100000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'charizardite-x',
  },
  {
    id: 'mega-blastoisinite-661',
    index: 661,
    category: 'mega',
    name: { en: 'Blastoisinite', pt: 'Blastoisinite' },
    description: { en: 'Mega Blastoise', pt: 'Mega Blastoise' },
    source: { en: 'Shop · Vernal Avenue (Stone Emporium)', pt: 'Shop · Vernal Avenue (Stone Emporium)' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Vernal Avenue (Stone Emporium)', pt: 'Shop · Vernal Avenue (Stone Emporium)' } }
    ],
    price: { amount: 100000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'blastoisinite',
  },
  {
    id: 'mega-mewtwonite-x-662',
    index: 662,
    category: 'mega',
    name: { en: 'Mewtwonite X', pt: 'Mewtwonite X' },
    description: { en: 'Mega Stone that enables Mega Evolution.', pt: 'Mega Pedra que permite a Mega Evolução.' },
    source: { en: 'Mystery Gift (time-limited event)', pt: 'Mystery Gift (time-limited event)' },
    sources: [
      { kind: 'mysteryGift', label: { en: 'Mystery Gift (time-limited event)', pt: 'Mystery Gift (time-limited event)' } }
    ],
    sprite: 'mewtwonite-x',
  },
  {
    id: 'mega-mewtwonite-y-663',
    index: 663,
    category: 'mega',
    name: { en: 'Mewtwonite Y', pt: 'Mewtwonite Y' },
    description: { en: 'Mega Stone that enables Mega Evolution.', pt: 'Mega Pedra que permite a Mega Evolução.' },
    source: { en: 'Mystery Gift (time-limited event)', pt: 'Mystery Gift (time-limited event)' },
    sources: [
      { kind: 'mysteryGift', label: { en: 'Mystery Gift (time-limited event)', pt: 'Mystery Gift (time-limited event)' } }
    ],
    sprite: 'mewtwonite-y',
  },
  {
    id: 'mega-medichamite-665',
    index: 665,
    category: 'mega',
    name: { en: 'Medichamite', pt: 'Medichamite' },
    description: { en: 'Mega Medicham', pt: 'Mega Medicham' },
    source: { en: 'Shop · Vernal Avenue (Stone Emporium)', pt: 'Shop · Vernal Avenue (Stone Emporium)' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Vernal Avenue (Stone Emporium)', pt: 'Shop · Vernal Avenue (Stone Emporium)' } }
    ],
    price: { amount: 50000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'medichamite',
  },
  {
    id: 'mega-houndoominite-666',
    index: 666,
    category: 'mega',
    name: { en: 'Houndoominite', pt: 'Houndoominite' },
    description: { en: 'Mega Houndoom', pt: 'Mega Houndoom' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    price: { amount: 180, currency: 'megaShards', kind: 'buy' },
    sprite: 'houndoominite',
  },
  {
    id: 'mega-aggronite-667',
    index: 667,
    category: 'mega',
    name: { en: 'Aggronite', pt: 'Aggronite' },
    description: { en: 'Mega Aggron', pt: 'Mega Aggron' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    sprite: 'aggronite',
  },
  {
    id: 'mega-banettite-668',
    index: 668,
    category: 'mega',
    name: { en: 'Banettite', pt: 'Banettite' },
    description: { en: 'Mega Banette', pt: 'Mega Banette' },
    source: { en: 'Jaune District (Jaune Sector 9)', pt: 'Jaune District (Jaune Sector 9)' },
    sources: [
      { kind: 'field', label: { en: 'Jaune District (Jaune Sector 9)', pt: 'Jaune District (Jaune Sector 9)' } }
    ],
    sprite: 'banettite',
  },
  {
    id: 'mega-tyranitarite-669',
    index: 669,
    category: 'mega',
    name: { en: 'Tyranitarite', pt: 'Tyranitarite' },
    description: { en: 'Mega Tyranitar', pt: 'Mega Tyranitar' },
    source: { en: 'Jaune District (Jaune Sector 4)', pt: 'Jaune District (Jaune Sector 4)' },
    sources: [
      { kind: 'field', label: { en: 'Jaune District (Jaune Sector 4)', pt: 'Jaune District (Jaune Sector 4)' } }
    ],
    sprite: 'tyranitarite',
  },
  {
    id: 'mega-scizorite-670',
    index: 670,
    category: 'mega',
    name: { en: 'Scizorite', pt: 'Scizorite' },
    description: { en: 'Mega Scizor', pt: 'Mega Scizor' },
    source: { en: 'Shop · Vernal Avenue (Stone Emporium)', pt: 'Shop · Vernal Avenue (Stone Emporium)' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Vernal Avenue (Stone Emporium)', pt: 'Shop · Vernal Avenue (Stone Emporium)' } }
    ],
    price: { amount: 50000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'scizorite',
  },
  {
    id: 'mega-pinsirite-671',
    index: 671,
    category: 'mega',
    name: { en: 'Pinsirite', pt: 'Pinsirite' },
    description: { en: 'Mega Pinsir', pt: 'Mega Pinsir' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    sprite: 'pinsirite',
  },
  {
    id: 'mega-aerodactylite-672',
    index: 672,
    category: 'mega',
    name: { en: 'Aerodactylite', pt: 'Aerodactylite' },
    description: { en: 'Mega Aerodactyl', pt: 'Mega Aerodactyl' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    price: { amount: 240, currency: 'megaShards', kind: 'buy' },
    sprite: 'aerodactylite',
  },
  {
    id: 'mega-lucarionite-673',
    index: 673,
    category: 'mega',
    name: { en: 'Lucarionite', pt: 'Lucarionite' },
    description: { en: 'Mega Lucario', pt: 'Mega Lucario' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    price: { amount: 240, currency: 'megaShards', kind: 'buy' },
    sprite: 'lucarionite',
  },
  {
    id: 'mega-abomasite-674',
    index: 674,
    category: 'mega',
    name: { en: 'Abomasite', pt: 'Abomasite' },
    description: { en: 'Mega Abomasnow', pt: 'Mega Abomasnow' },
    source: { en: 'Shop · Vernal Avenue (Stone Emporium)', pt: 'Shop · Vernal Avenue (Stone Emporium)' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Vernal Avenue (Stone Emporium)', pt: 'Shop · Vernal Avenue (Stone Emporium)' } }
    ],
    price: { amount: 50000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'abomasite',
  },
  {
    id: 'mega-kangaskhanite-675',
    index: 675,
    category: 'mega',
    name: { en: 'Kangaskhanite', pt: 'Kangaskhanite' },
    description: { en: 'Mega Kangaskhan', pt: 'Mega Kangaskhan' },
    source: { en: 'Shop · Vernal Avenue (Stone Emporium)', pt: 'Shop · Vernal Avenue (Stone Emporium)' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Vernal Avenue (Stone Emporium)', pt: 'Shop · Vernal Avenue (Stone Emporium)' } }
    ],
    price: { amount: 70000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'kangaskhanite',
  },
  {
    id: 'mega-gyaradosite-676',
    index: 676,
    category: 'mega',
    name: { en: 'Gyaradosite', pt: 'Gyaradosite' },
    description: { en: 'Mega Gyarados', pt: 'Mega Gyarados' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    price: { amount: 240, currency: 'megaShards', kind: 'buy' },
    sprite: 'gyaradosite',
  },
  {
    id: 'mega-absolite-677',
    index: 677,
    category: 'mega',
    name: { en: 'Absolite', pt: 'Absolite' },
    description: { en: 'Mega Absol', pt: 'Mega Absol' },
    source: { en: 'Vert District (story / Rogue Mega)', pt: 'Vert District (story / Rogue Mega)' },
    sources: [
      { kind: 'story', label: { en: 'Vert District (story / Rogue Mega)', pt: 'Vert District (story / Rogue Mega)' } }
    ],
    sprite: 'absolite',
  },
  {
    id: 'mega-charizardite-y-678',
    index: 678,
    category: 'mega',
    name: { en: 'Charizardite Y', pt: 'Charizardite Y' },
    description: { en: 'Mega Charizard Y', pt: 'Mega Charizard Y' },
    source: { en: 'Shop · Vernal Avenue (Stone Emporium)', pt: 'Shop · Vernal Avenue (Stone Emporium)' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Vernal Avenue (Stone Emporium)', pt: 'Shop · Vernal Avenue (Stone Emporium)' } }
    ],
    price: { amount: 100000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'charizardite-y',
  },
  {
    id: 'mega-alakazite-679',
    index: 679,
    category: 'mega',
    name: { en: 'Alakazite', pt: 'Alakazite' },
    description: { en: 'Mega Alakazam', pt: 'Mega Alakazam' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    price: { amount: 360, currency: 'megaShards', kind: 'buy' },
    sprite: 'alakazite',
  },
  {
    id: 'mega-heracronite-680',
    index: 680,
    category: 'mega',
    name: { en: 'Heracronite', pt: 'Heracronite' },
    description: { en: 'Mega Heracross', pt: 'Mega Heracross' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    price: { amount: 240, currency: 'megaShards', kind: 'buy' },
    sprite: 'heracronite',
  },
  {
    id: 'mega-mawilite-681',
    index: 681,
    category: 'mega',
    name: { en: 'Mawilite', pt: 'Mawilite' },
    description: { en: 'Mega Mawile', pt: 'Mega Mawile' },
    source: { en: 'Magenta District (Magenta Sector 6)', pt: 'Magenta District (Magenta Sector 6)' },
    sources: [
      { kind: 'field', label: { en: 'Magenta District (Magenta Sector 6)', pt: 'Magenta District (Magenta Sector 6)' } }
    ],
    sprite: 'mawilite',
  },
  {
    id: 'mega-manectite-682',
    index: 682,
    category: 'mega',
    name: { en: 'Manectite', pt: 'Manectite' },
    description: { en: 'Mega Manectric', pt: 'Mega Manectric' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    price: { amount: 180, currency: 'megaShards', kind: 'buy' },
    sprite: 'manectite',
  },
  {
    id: 'mega-garchompite-683',
    index: 683,
    category: 'mega',
    name: { en: 'Garchompite', pt: 'Garchompite' },
    description: { en: 'Mega Garchomp', pt: 'Mega Garchomp' },
    source: { en: 'Shop · Vernal Avenue (Stone Emporium)', pt: 'Shop · Vernal Avenue (Stone Emporium)' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Vernal Avenue (Stone Emporium)', pt: 'Shop · Vernal Avenue (Stone Emporium)' } }
    ],
    price: { amount: 70000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'garchompite',
  },
  {
    id: 'berries-roseli-berry-686',
    index: 686,
    category: 'berries',
    name: { en: 'Roseli Berry', pt: 'Roseli Berry' },
    description: { en: 'Weakens supereffective Fairy move', pt: 'Weakens supereffective Fairy move' },
    source: { en: 'Berry Shops · Loot', pt: 'Berry Shops · Loot' },
    sources: [
      { kind: 'shop', label: { en: 'Berry Shops', pt: 'Berry Shops' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } }
    ],
    sprite: 'roseli-berry',
  },
  {
    id: 'tms-tm096-690',
    index: 690,
    category: 'tms',
    name: { en: 'TM096', pt: 'TM096' },
    description: { en: 'Hydro Pump — Water, 110 power, 12 cooldown', pt: 'Hydro Pump — Water, 110 power, 12 cooldown' },
    source: { en: 'Mable’s Research Level 40', pt: 'Mable’s Research Level 40' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 40', pt: 'Mable’s Research Level 40' } }
    ],
    sprite: 'tm096',
    move: { en: 'Hydro Pump', pt: 'Hydro Pump' },
  },
  {
    id: 'tms-tm097-691',
    index: 691,
    category: 'tms',
    name: { en: 'TM097', pt: 'TM097' },
    description: { en: 'Heal Block — Psychic, 12 cooldown, stops target from healing', pt: 'Heal Block — Psychic, 12 cooldown, stops target from healing' },
    source: { en: 'Mable’s Research Level 31', pt: 'Mable’s Research Level 31' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 31', pt: 'Mable’s Research Level 31' } }
    ],
    sprite: 'tm097',
    move: { en: 'Heal Block', pt: 'Heal Block' },
  },
  {
    id: 'tms-tm098-692',
    index: 692,
    category: 'tms',
    name: { en: 'TM098', pt: 'TM098' },
    description: { en: 'Waterfall — Water, 80 power, 8 cooldown', pt: 'Waterfall — Water, 80 power, 8 cooldown' },
    source: { en: 'The Sewers', pt: 'The Sewers' },
    sources: [
      { kind: 'other', label: { en: 'The Sewers', pt: 'The Sewers' } }
    ],
    sprite: 'tm098',
    move: { en: 'Waterfall', pt: 'Waterfall' },
  },
  {
    id: 'tms-tm099-693',
    index: 693,
    category: 'tms',
    name: { en: 'TM099', pt: 'TM099' },
    description: { en: 'Metronome — Normal, 4 cooldown, uses random move', pt: 'Metronome — Normal, 4 cooldown, uses random move' },
    source: { en: 'Side Mission 79', pt: 'Side Mission 79' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 79', pt: 'Side Mission 79' } }
    ],
    sprite: 'tm099',
    move: { en: 'Metronome', pt: 'Metronome' },
  },
  {
    id: 'key-elevator-key-700',
    index: 700,
    category: 'key',
    name: { en: 'Elevator Key', pt: 'Elevator Key' },
    description: { en: 'A key card that activates the elevator in Lysandre Labs.', pt: 'A key card that activates the elevator in Lysandre Labs.' },
    source: { en: 'Lysandre Labs (B1F)', pt: 'Lysandre Labs (B1F)' },
    sources: [
      { kind: 'other', label: { en: 'Lysandre Labs (B1F)', pt: 'Lysandre Labs (B1F)' } }
    ],
    sprite: 'basement-key',
  },
  {
    id: 'medicine-lumiose-galette-708',
    index: 708,
    category: 'medicine',
    name: { en: 'Lumiose Galette', pt: 'Galette de Lumiose' },
    description: { en: 'Cures any status condition', pt: 'Cures any status condition' },
    source: { en: 'Various NPCs · Loot · Rewards', pt: 'Various NPCs · Loot · Rewards' },
    sources: [
      { kind: 'other', label: { en: 'Various NPCs', pt: 'Various NPCs' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'other', label: { en: 'Rewards', pt: 'Rewards' } }
    ],
    sprite: 'lumiose-galette',
  },
  {
    id: 'other-jaw-fossil-710',
    index: 710,
    category: 'other',
    name: { en: 'Jaw Fossil', pt: 'Jaw Fossil' },
    description: { en: 'A fossil from a prehistoric Pokemon (Tyrunt)', pt: 'A fossil from a prehistoric Pokemon (Tyrunt)' },
    source: { en: 'Stone Emporium', pt: 'Stone Emporium' },
    sources: [
      { kind: 'shop', label: { en: 'Stone Emporium', pt: 'Stone Emporium' } }
    ],
    price: { amount: 20000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'jaw-fossil',
  },
  {
    id: 'other-sail-fossil-711',
    index: 711,
    category: 'other',
    name: { en: 'Sail Fossil', pt: 'Sail Fossil' },
    description: { en: 'A fossil from a prehistoric Pokemon (Amaura)', pt: 'A fossil from a prehistoric Pokemon (Amaura)' },
    source: { en: 'Stone Emporium', pt: 'Stone Emporium' },
    sources: [
      { kind: 'shop', label: { en: 'Stone Emporium', pt: 'Stone Emporium' } }
    ],
    price: { amount: 20000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'sail-fossil',
  },
  {
    id: 'mega-sablenite-754',
    index: 754,
    category: 'mega',
    name: { en: 'Sablenite', pt: 'Sablenite' },
    description: { en: 'Mega Sableye', pt: 'Mega Sableye' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    price: { amount: 180, currency: 'megaShards', kind: 'buy' },
    sprite: 'sablenite',
  },
  {
    id: 'mega-altarianite-755',
    index: 755,
    category: 'mega',
    name: { en: 'Altarianite', pt: 'Altarianite' },
    description: { en: 'Mega Altaria', pt: 'Mega Altaria' },
    source: { en: 'Magenta District (Magenta Sector 4)', pt: 'Magenta District (Magenta Sector 4)' },
    sources: [
      { kind: 'field', label: { en: 'Magenta District (Magenta Sector 4)', pt: 'Magenta District (Magenta Sector 4)' } }
    ],
    sprite: 'altarianite',
  },
  {
    id: 'mega-galladite-756',
    index: 756,
    category: 'mega',
    name: { en: 'Galladite', pt: 'Galladite' },
    description: { en: 'Mega Gallade', pt: 'Mega Gallade' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    sprite: 'galladite',
  },
  {
    id: 'mega-audinite-757',
    index: 757,
    category: 'mega',
    name: { en: 'Audinite', pt: 'Audinite' },
    description: { en: 'Mega Audino', pt: 'Mega Audino' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    price: { amount: 180, currency: 'megaShards', kind: 'buy' },
    sprite: 'audinite',
  },
  {
    id: 'mega-metagrossite-758',
    index: 758,
    category: 'mega',
    name: { en: 'Metagrossite', pt: 'Metagrossite' },
    description: { en: 'Mega Metagross', pt: 'Mega Metagross' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    sprite: 'metagrossite',
  },
  {
    id: 'mega-sharpedonite-759',
    index: 759,
    category: 'mega',
    name: { en: 'Sharpedonite', pt: 'Sharpedonite' },
    description: { en: 'Mega Sharpedo', pt: 'Mega Sharpedo' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    price: { amount: 180, currency: 'megaShards', kind: 'buy' },
    sprite: 'sharpedonite',
  },
  {
    id: 'mega-slowbronite-760',
    index: 760,
    category: 'mega',
    name: { en: 'Slowbronite', pt: 'Slowbronite' },
    description: { en: 'Mega Slowbro', pt: 'Mega Slowbro' },
    source: { en: 'Bleu District (Aymlis Park)', pt: 'Bleu District (Aymlis Park)' },
    sources: [
      { kind: 'field', label: { en: 'Bleu District (Aymlis Park)', pt: 'Bleu District (Aymlis Park)' } }
    ],
    sprite: 'slowbronite',
  },
  {
    id: 'mega-steelixite-761',
    index: 761,
    category: 'mega',
    name: { en: 'Steelixite', pt: 'Steelixite' },
    description: { en: 'Mega Steelix', pt: 'Mega Steelix' },
    source: { en: 'Shop · Vernal Avenue (Stone Emporium)', pt: 'Shop · Vernal Avenue (Stone Emporium)' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Vernal Avenue (Stone Emporium)', pt: 'Shop · Vernal Avenue (Stone Emporium)' } }
    ],
    price: { amount: 70000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'steelixite',
  },
  {
    id: 'mega-pidgeotite-762',
    index: 762,
    category: 'mega',
    name: { en: 'Pidgeotite', pt: 'Pidgeotite' },
    description: { en: 'Mega Pidgeot', pt: 'Mega Pidgeot' },
    source: { en: 'Shop · Quasartico Inc. (after Main Mission 10)', pt: 'Shop · Quasartico Inc. (after Main Mission 10)' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc. (after Main Mission 10)', pt: 'Shop · Quasartico Inc. (after Main Mission 10)' } }
    ],
    price: { amount: 180, currency: 'megaShards', kind: 'buy' },
    sprite: 'pidgeotite',
  },
  {
    id: 'mega-glalitite-763',
    index: 763,
    category: 'mega',
    name: { en: 'Glalitite', pt: 'Glalitite' },
    description: { en: 'Mega Glalie', pt: 'Mega Glalie' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    sprite: 'glalitite',
  },
  {
    id: 'mega-diancite-764',
    index: 764,
    category: 'mega',
    name: { en: 'Diancite', pt: 'Diancite' },
    description: { en: 'Mega Diancie', pt: 'Mega Diancie' },
    source: { en: 'Mystery Gift — “Shine Bright Like a Gemstone” (Nov 6, 2025, time-limited)', pt: 'Mystery Gift — “Shine Bright Like a Gemstone” (Nov 6, 2025, time-limited)' },
    sources: [
      { kind: 'mysteryGift', label: { en: 'Mystery Gift — “Shine Bright Like a Gemstone” (Nov 6, 2025, time-limited)', pt: 'Mystery Gift — “Shine Bright Like a Gemstone” (Nov 6, 2025, time-limited)' } }
    ],
    sprite: 'diancite',
  },
  {
    id: 'key-prison-bottle-765',
    index: 765,
    category: 'key',
    name: { en: 'Prison Bottle', pt: 'Prison Bottle' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Hotel Z', pt: 'Hotel Z' },
    sources: [
      { kind: 'shop', label: { en: 'Hotel Z', pt: 'Hotel Z' } }
    ],
    sprite: 'prison-bottle',
  },
  {
    id: 'mega-cameruptite-767',
    index: 767,
    category: 'mega',
    name: { en: 'Cameruptite', pt: 'Cameruptite' },
    description: { en: 'Mega Camerupt', pt: 'Mega Camerupt' },
    source: { en: 'Jaune District (Jaune Sector 3)', pt: 'Jaune District (Jaune Sector 3)' },
    sources: [
      { kind: 'field', label: { en: 'Jaune District (Jaune Sector 3)', pt: 'Jaune District (Jaune Sector 3)' } }
    ],
    sprite: 'cameruptite',
  },
  {
    id: 'mega-lopunnite-768',
    index: 768,
    category: 'mega',
    name: { en: 'Lopunnite', pt: 'Lopunnite' },
    description: { en: 'Mega Lopunny', pt: 'Mega Lopunny' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    price: { amount: 180, currency: 'megaShards', kind: 'buy' },
    sprite: 'lopunnite',
  },
  {
    id: 'mega-salamencite-769',
    index: 769,
    category: 'mega',
    name: { en: 'Salamencite', pt: 'Salamencite' },
    description: { en: 'Mega Salamence', pt: 'Mega Salamence' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    sprite: 'salamencite',
  },
  {
    id: 'mega-beedrillite-770',
    index: 770,
    category: 'mega',
    name: { en: 'Beedrillite', pt: 'Beedrillite' },
    description: { en: 'Mega Beedrill', pt: 'Mega Beedrill' },
    source: { en: 'Vert District (Vert Sector 5)', pt: 'Vert District (Vert Sector 5)' },
    sources: [
      { kind: 'field', label: { en: 'Vert District (Vert Sector 5)', pt: 'Vert District (Vert Sector 5)' } }
    ],
    sprite: 'beedrillite',
  },
  {
    id: 'other-bottle-cap-795',
    index: 795,
    category: 'other',
    name: { en: 'Bottle Cap', pt: 'Bottle Cap' },
    description: { en: 'A lovely silver bottle cap. Certain people are happy to be given one of these.', pt: 'A lovely silver bottle cap. Certain people are happy to be given one of these.' },
    source: { en: 'Mable\'s Research Level 36 (×10) · Also found via missions, shops, and Hyperspace rewards', pt: 'Mable\'s Research Level 36 (×10) · Also found via missions, shops, and Hyperspace rewards' },
    sources: [
      { kind: 'research', label: { en: 'Mable\'s Research Level 36 (×10)', pt: 'Mable\'s Research Level 36 (×10)' } },
      { kind: 'hyperspace', label: { en: 'Also found via missions, shops, and Hyperspace rewards', pt: 'Also found via missions, shops, and Hyperspace rewards' } }
    ],
    sprite: 'bottle-cap',
  },
  {
    id: 'other-gold-bottle-cap-796',
    index: 796,
    category: 'other',
    name: { en: 'Gold Bottle Cap', pt: 'Gold Bottle Cap' },
    description: { en: 'A lovely gold bottle cap, which is even rarer than the regular silver one.', pt: 'A lovely gold bottle cap, which is even rarer than the regular silver one.' },
    source: { en: 'Mable\'s Research Level 48 (×3) · Also found via late-game rewards', pt: 'Mable\'s Research Level 48 (×3) · Also found via late-game rewards' },
    sources: [
      { kind: 'research', label: { en: 'Mable\'s Research Level 48 (×3)', pt: 'Mable\'s Research Level 48 (×3)' } },
      { kind: 'field', label: { en: 'Also found via late-game rewards', pt: 'Also found via late-game rewards' } }
    ],
    sprite: 'gold-bottle-cap',
  },
  {
    id: 'key-zygarde-cube-847',
    index: 847,
    category: 'key',
    name: { en: 'Zygarde Cube', pt: 'Zygarde Cube' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Wild Zone 20', pt: 'Wild Zone 20' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 20', pt: 'Wild Zone 20' } }
    ],
    sprite: 'zygarde-cube',
  },
  {
    id: 'other-ice-stone-849',
    index: 849,
    category: 'other',
    name: { en: 'Ice Stone', pt: 'Pedra do Gelo' },
    description: { en: 'Makes certain Pokemon evolve', pt: 'Makes certain Pokemon evolve' },
    source: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Side Mission 102: A Chilling Challenge · Shop: Vernal Avenue', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace) · Side Mission 102: A Chilling Challenge · Shop: Vernal Avenue' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)', pt: 'Field loot (Wild Zones · districts / streets · dungeons / Hyperspace)' } },
      { kind: 'mission', label: { en: 'Side Mission 102: A Chilling Challenge', pt: 'Side Mission 102: A Chilling Challenge' } },
      { kind: 'shop', label: { en: 'Shop: Vernal Avenue', pt: 'Shop: Vernal Avenue' } }
    ],
    price: { amount: 3000, currency: 'pokedollars', kind: 'buy' },
    sprite: 'ice-stone',
  },
  {
    id: 'balls-beast-ball-851',
    index: 851,
    category: 'balls',
    name: { en: 'Beast Ball', pt: 'Beast Ball' },
    description: { en: 'Poké Ball used to catch wild Pokémon.', pt: 'Poké Ball usada para capturar Pokémon selvagens.' },
    source: { en: 'Defeat Collector in 5 Star in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Defeat Collector in 5 Star in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Defeat Collector in 5 Star in Hyperspace Battle Zone', pt: 'Defeat Collector in 5 Star in Hyperspace Battle Zone' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'beast-ball',
  },
  {
    id: 'other-exp-candy-xs-1124',
    index: 1124,
    category: 'other',
    name: { en: 'Exp. Candy XS', pt: 'Doce Exp. XS' },
    description: { en: 'Grants Pokemon very small amount of XP points', pt: 'Grants Pokemon very small amount of XP points' },
    source: { en: 'Field loot (districts / streets · dungeons / Hyperspace) · Side Mission 7: A Feisty Chespin · Side Mission 8: Get Well, Fennekin · Side Mission 9: A Challenge from Froakie · Side Mission 20: A Berry Clever Plan · Side Mission 22: A Call from Mable · Side Mission 24: An Abra Playmate', pt: 'Field loot (districts / streets · dungeons / Hyperspace) · Side Mission 7: A Feisty Chespin · Side Mission 8: Get Well, Fennekin · Side Mission 9: A Challenge from Froakie · Side Mission 20: A Berry Clever Plan · Side Mission 22: A Call from Mable · Side Mission 24: An Abra Playmate' },
    sources: [
      { kind: 'field', label: { en: 'Field loot (districts / streets · dungeons / Hyperspace)', pt: 'Field loot (districts / streets · dungeons / Hyperspace)' } },
      { kind: 'mission', label: { en: 'Side Mission 7: A Feisty Chespin', pt: 'Side Mission 7: A Feisty Chespin' } },
      { kind: 'mission', label: { en: 'Side Mission 8: Get Well, Fennekin', pt: 'Side Mission 8: Get Well, Fennekin' } },
      { kind: 'mission', label: { en: 'Side Mission 9: A Challenge from Froakie', pt: 'Side Mission 9: A Challenge from Froakie' } },
      { kind: 'mission', label: { en: 'Side Mission 20: A Berry Clever Plan', pt: 'Side Mission 20: A Berry Clever Plan' } },
      { kind: 'mission', label: { en: 'Side Mission 22: A Call from Mable', pt: 'Side Mission 22: A Call from Mable' } },
      { kind: 'mission', label: { en: 'Side Mission 24: An Abra Playmate', pt: 'Side Mission 24: An Abra Playmate' } }
    ],
    sprite: 'rare-candy',
  },
  {
    id: 'other-exp-candy-s-1125',
    index: 1125,
    category: 'other',
    name: { en: 'Exp. Candy S', pt: 'Doce Exp. S' },
    description: { en: 'Grants Pokemon small amount of XP', pt: 'Grants Pokemon small amount of XP' },
    source: { en: 'Mable\'s Research Level 10 (×10) · Loot and mission rewards', pt: 'Mable\'s Research Level 10 (×10) · Loot and mission rewards' },
    sources: [
      { kind: 'research', label: { en: 'Mable\'s Research Level 10 (×10)', pt: 'Mable\'s Research Level 10 (×10)' } },
      { kind: 'other', label: { en: 'Loot and mission rewards', pt: 'Loot and mission rewards' } }
    ],
    sprite: 'rare-candy',
  },
  {
    id: 'other-exp-candy-m-1126',
    index: 1126,
    category: 'other',
    name: { en: 'Exp. Candy M', pt: 'Doce Exp. M' },
    description: { en: 'Grants Pokemon moderate amount of XP', pt: 'Grants Pokemon moderate amount of XP' },
    source: { en: 'Mable\'s Research Level 25 (×10) · Loot and mission rewards', pt: 'Mable\'s Research Level 25 (×10) · Loot and mission rewards' },
    sources: [
      { kind: 'research', label: { en: 'Mable\'s Research Level 25 (×10)', pt: 'Mable\'s Research Level 25 (×10)' } },
      { kind: 'other', label: { en: 'Loot and mission rewards', pt: 'Loot and mission rewards' } }
    ],
    sprite: 'rare-candy',
  },
  {
    id: 'other-exp-candy-l-1127',
    index: 1127,
    category: 'other',
    name: { en: 'Exp. Candy L', pt: 'Doce Exp. L' },
    description: { en: 'Grants Pokemon large amount of XP', pt: 'Grants Pokemon large amount of XP' },
    source: { en: 'Mable\'s Research Level 43 (×10) · Loot and mission rewards', pt: 'Mable\'s Research Level 43 (×10) · Loot and mission rewards' },
    sources: [
      { kind: 'research', label: { en: 'Mable\'s Research Level 43 (×10)', pt: 'Mable\'s Research Level 43 (×10)' } },
      { kind: 'other', label: { en: 'Loot and mission rewards', pt: 'Loot and mission rewards' } }
    ],
    sprite: 'rare-candy',
  },
  {
    id: 'other-exp-candy-xl-1128',
    index: 1128,
    category: 'other',
    name: { en: 'Exp. Candy XL', pt: 'Doce Exp. XL' },
    description: { en: 'Grants Pokemon very large amount of XP', pt: 'Grants Pokemon very large amount of XP' },
    source: { en: 'Mable\'s Research Level 47 (×10) · Loot and mission rewards', pt: 'Mable\'s Research Level 47 (×10) · Loot and mission rewards' },
    sources: [
      { kind: 'research', label: { en: 'Mable\'s Research Level 47 (×10)', pt: 'Mable\'s Research Level 47 (×10)' } },
      { kind: 'other', label: { en: 'Loot and mission rewards', pt: 'Loot and mission rewards' } }
    ],
    sprite: 'rare-candy',
  },
  {
    id: 'other-lonely-mint-1231',
    index: 1231,
    category: 'other',
    name: { en: 'Lonely Mint', pt: 'Lonely Mint' },
    description: { en: 'Boosts Attack but weakens Defense', pt: 'Boosts Attack but weakens Defense' },
    source: { en: 'Loot · Mint Shops', pt: 'Loot · Mint Shops' },
    sources: [
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'lonely-mint',
  },
  {
    id: 'other-adamant-mint-1232',
    index: 1232,
    category: 'other',
    name: { en: 'Adamant Mint', pt: 'Adamant Mint' },
    description: { en: 'Boosts Attack but weakens Sp. Atk', pt: 'Boosts Attack but weakens Sp. Atk' },
    source: { en: 'Side Mission 86 · Loot · Mint Shops', pt: 'Side Mission 86 · Loot · Mint Shops' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 86', pt: 'Side Mission 86' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'adamant-mint',
  },
  {
    id: 'other-naughty-mint-1233',
    index: 1233,
    category: 'other',
    name: { en: 'Naughty Mint', pt: 'Naughty Mint' },
    description: { en: 'Boosts Attack but weakens Sp. Def', pt: 'Boosts Attack but weakens Sp. Def' },
    source: { en: 'Loot · Mint Shops', pt: 'Loot · Mint Shops' },
    sources: [
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'naughty-mint',
  },
  {
    id: 'other-brave-mint-1234',
    index: 1234,
    category: 'other',
    name: { en: 'Brave Mint', pt: 'Brave Mint' },
    description: { en: 'Boosts Attack but weakens Speed', pt: 'Boosts Attack but weakens Speed' },
    source: { en: 'Loot · Mint Shops', pt: 'Loot · Mint Shops' },
    sources: [
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'brave-mint',
  },
  {
    id: 'other-bold-mint-1235',
    index: 1235,
    category: 'other',
    name: { en: 'Bold Mint', pt: 'Bold Mint' },
    description: { en: 'Boosts Dfense but weakens Attack', pt: 'Boosts Dfense but weakens Attack' },
    source: { en: 'Loot · Mint Shops', pt: 'Loot · Mint Shops' },
    sources: [
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'bold-mint',
  },
  {
    id: 'other-impish-mint-1236',
    index: 1236,
    category: 'other',
    name: { en: 'Impish Mint', pt: 'Impish Mint' },
    description: { en: 'Boosts Defense but weakens Sp. Atk', pt: 'Boosts Defense but weakens Sp. Atk' },
    source: { en: 'Loot · Mint Shops', pt: 'Loot · Mint Shops' },
    sources: [
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'impish-mint',
  },
  {
    id: 'other-lax-mint-1237',
    index: 1237,
    category: 'other',
    name: { en: 'Lax Mint', pt: 'Lax Mint' },
    description: { en: 'Boosts Defense but weakens Sp. Def', pt: 'Boosts Defense but weakens Sp. Def' },
    source: { en: 'Side Mission 50 · Loot · Mint Shops', pt: 'Side Mission 50 · Loot · Mint Shops' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 50', pt: 'Side Mission 50' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'lax-mint',
  },
  {
    id: 'other-relaxed-mint-1238',
    index: 1238,
    category: 'other',
    name: { en: 'Relaxed Mint', pt: 'Relaxed Mint' },
    description: { en: 'Boosts Defense but weakens Speed', pt: 'Boosts Defense but weakens Speed' },
    source: { en: 'Loot · Mint Shops', pt: 'Loot · Mint Shops' },
    sources: [
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'relaxed-mint',
  },
  {
    id: 'other-modest-mint-1239',
    index: 1239,
    category: 'other',
    name: { en: 'Modest Mint', pt: 'Modest Mint' },
    description: { en: 'Boosts Sp. Attack but weakens Attack', pt: 'Boosts Sp. Attack but weakens Attack' },
    source: { en: 'Side Mission 112 · Loot · Mint Shops', pt: 'Side Mission 112 · Loot · Mint Shops' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 112', pt: 'Side Mission 112' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'modest-mint',
  },
  {
    id: 'other-mild-mint-1240',
    index: 1240,
    category: 'other',
    name: { en: 'Mild Mint', pt: 'Mild Mint' },
    description: { en: 'Boosts Sp. Attack but weakens Defense', pt: 'Boosts Sp. Attack but weakens Defense' },
    source: { en: 'Loot · Mint Shops', pt: 'Loot · Mint Shops' },
    sources: [
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'mild-mint',
  },
  {
    id: 'other-rash-mint-1241',
    index: 1241,
    category: 'other',
    name: { en: 'Rash Mint', pt: 'Rash Mint' },
    description: { en: 'Boosts Sp. Attack but weakens Sp. Def', pt: 'Boosts Sp. Attack but weakens Sp. Def' },
    source: { en: 'Loot · Mint Shops', pt: 'Loot · Mint Shops' },
    sources: [
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'rash-mint',
  },
  {
    id: 'other-quiet-mint-1242',
    index: 1242,
    category: 'other',
    name: { en: 'Quiet Mint', pt: 'Quiet Mint' },
    description: { en: 'Boosts Sp. Attack but weakens Speed', pt: 'Boosts Sp. Attack but weakens Speed' },
    source: { en: 'Side Mission 44 · Loot · Mint Shops', pt: 'Side Mission 44 · Loot · Mint Shops' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 44', pt: 'Side Mission 44' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'quiet-mint',
  },
  {
    id: 'other-calm-mint-1243',
    index: 1243,
    category: 'other',
    name: { en: 'Calm Mint', pt: 'Calm Mint' },
    description: { en: 'Boosts Sp. Def but weakens Attack', pt: 'Boosts Sp. Def but weakens Attack' },
    source: { en: 'Loot · Mint Shops', pt: 'Loot · Mint Shops' },
    sources: [
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'calm-mint',
  },
  {
    id: 'other-gentle-mint-1244',
    index: 1244,
    category: 'other',
    name: { en: 'Gentle Mint', pt: 'Gentle Mint' },
    description: { en: 'Boosts Sp. Def but weakens Defense', pt: 'Boosts Sp. Def but weakens Defense' },
    source: { en: 'Loot · Mint Shops', pt: 'Loot · Mint Shops' },
    sources: [
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'gentle-mint',
  },
  {
    id: 'other-careful-mint-1245',
    index: 1245,
    category: 'other',
    name: { en: 'Careful Mint', pt: 'Careful Mint' },
    description: { en: 'Boosts Sp. Def but weakens Sp. Atk', pt: 'Boosts Sp. Def but weakens Sp. Atk' },
    source: { en: 'Loot · Mint Shops', pt: 'Loot · Mint Shops' },
    sources: [
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'careful-mint',
  },
  {
    id: 'other-sassy-mint-1246',
    index: 1246,
    category: 'other',
    name: { en: 'Sassy Mint', pt: 'Sassy Mint' },
    description: { en: 'Boosts Sp. Def but weakens Speed', pt: 'Boosts Sp. Def but weakens Speed' },
    source: { en: 'Loot · Mint Shops', pt: 'Loot · Mint Shops' },
    sources: [
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'sassy-mint',
  },
  {
    id: 'other-timid-mint-1247',
    index: 1247,
    category: 'other',
    name: { en: 'Timid Mint', pt: 'Timid Mint' },
    description: { en: 'Boosts Speed but weakens Attack', pt: 'Boosts Speed but weakens Attack' },
    source: { en: 'Loot · Mint Shops', pt: 'Loot · Mint Shops' },
    sources: [
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'timid-mint',
  },
  {
    id: 'other-hasty-mint-1248',
    index: 1248,
    category: 'other',
    name: { en: 'Hasty Mint', pt: 'Hasty Mint' },
    description: { en: 'Boosts Speed but weakens Defense', pt: 'Boosts Speed but weakens Defense' },
    source: { en: 'Loot · Mint Shops', pt: 'Loot · Mint Shops' },
    sources: [
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'hasty-mint',
  },
  {
    id: 'other-jolly-mint-1249',
    index: 1249,
    category: 'other',
    name: { en: 'Jolly Mint', pt: 'Jolly Mint' },
    description: { en: 'Boosts Speed but weakens Sp. Atk', pt: 'Boosts Speed but weakens Sp. Atk' },
    source: { en: 'Loot · Mint Shops', pt: 'Loot · Mint Shops' },
    sources: [
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'jolly-mint',
  },
  {
    id: 'other-naive-mint-1250',
    index: 1250,
    category: 'other',
    name: { en: 'Naive Mint', pt: 'Naive Mint' },
    description: { en: 'Boosts Speed but weakens Sp. Def', pt: 'Boosts Speed but weakens Sp. Def' },
    source: { en: 'Loot · Mint Shops', pt: 'Loot · Mint Shops' },
    sources: [
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'naive-mint',
  },
  {
    id: 'other-serious-mint-1251',
    index: 1251,
    category: 'other',
    name: { en: 'Serious Mint', pt: 'Serious Mint' },
    description: { en: 'All stats grow at the same rate', pt: 'All stats grow at the same rate' },
    source: { en: 'Side Mission 45 · Loot · Mint Shops', pt: 'Side Mission 45 · Loot · Mint Shops' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 45', pt: 'Side Mission 45' } },
      { kind: 'field', label: { en: 'Loot', pt: 'Loot' } },
      { kind: 'shop', label: { en: 'Mint Shops', pt: 'Mint Shops' } }
    ],
    sprite: 'serious-mint',
  },
  {
    id: 'key-rotom-catalog-1278',
    index: 1278,
    category: 'key',
    name: { en: 'Rotom Catalog', pt: 'Rotom Catalog' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Side Mission 170: Rotom Showcase', pt: 'Side Mission 170: Rotom Showcase' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 170: Rotom Showcase', pt: 'Side Mission 170: Rotom Showcase' } }
    ],
    sprite: 'rotom-catalog',
  },
  {
    id: 'other-galarica-cuff-1582',
    index: 1582,
    category: 'other',
    name: { en: 'Galarica Cuff', pt: 'Galarica Cuff' },
    description: { en: 'Held, evolution, vitamin, or utility item.', pt: 'Item segurado, de evolução, vitamina ou utilitário.' },
    source: { en: 'Side Mission 75: Some Unusual Pokémon · Hyperspace floating Poké Balls', pt: 'Side Mission 75: Some Unusual Pokémon · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 75: Some Unusual Pokémon', pt: 'Side Mission 75: Some Unusual Pokémon' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    sprite: 'galarica-cuff',
  },
  {
    id: 'other-galarica-wreath-1592',
    index: 1592,
    category: 'other',
    name: { en: 'Galarica Wreath', pt: 'Galarica Wreath' },
    description: { en: 'Held, evolution, vitamin, or utility item.', pt: 'Item segurado, de evolução, vitamina ou utilitário.' },
    source: { en: 'Side Mission 75: Some Unusual Pokémon · Hyperspace floating Poké Balls', pt: 'Side Mission 75: Some Unusual Pokémon · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 75: Some Unusual Pokémon', pt: 'Side Mission 75: Some Unusual Pokémon' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    sprite: 'galarica-wreath',
  },
  {
    id: 'balls-strange-ball-1785',
    index: 1785,
    category: 'balls',
    name: { en: 'Strange Ball', pt: 'Strange Ball' },
    description: { en: 'Poké Ball used to catch wild Pokémon.', pt: 'Poké Ball usada para capturar Pokémon selvagens.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'strange-ball',
  },
  {
    id: 'other-malicious-armor-1861',
    index: 1861,
    category: 'other',
    name: { en: 'Malicious Armor', pt: 'Malicious Armor' },
    description: { en: 'Held, evolution, vitamin, or utility item.', pt: 'Item segurado, de evolução, vitamina ou utilitário.' },
    source: { en: 'Vert District (Vert Sector 6) · Hyperspace floating Poké Balls', pt: 'Vert District (Vert Sector 6) · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'field', label: { en: 'Vert District (Vert Sector 6)', pt: 'Vert District (Vert Sector 6)' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    sprite: 'malicious-armor',
  },
  {
    id: 'tms-tm100-2160',
    index: 2160,
    category: 'tms',
    name: { en: 'TM100', pt: 'TM100' },
    description: { en: 'Gunk Shot — Poison, 120 power, 10 cooldown', pt: 'Gunk Shot — Poison, 120 power, 10 cooldown' },
    source: { en: 'Rust Syndicate Building', pt: 'Rust Syndicate Building' },
    sources: [
      { kind: 'other', label: { en: 'Rust Syndicate Building', pt: 'Rust Syndicate Building' } }
    ],
    sprite: 'tm100',
    move: { en: 'Gunk Shot', pt: 'Gunk Shot' },
  },
  {
    id: 'tms-tm101-2161',
    index: 2161,
    category: 'tms',
    name: { en: 'TM101', pt: 'TM101' },
    description: { en: 'Electro Web — Electric, 55 power, 7 cooldown', pt: 'Electro Web — Electric, 55 power, 7 cooldown' },
    source: { en: 'Bleu Sector 7', pt: 'Bleu Sector 7' },
    sources: [
      { kind: 'field', label: { en: 'Bleu Sector 7', pt: 'Bleu Sector 7' } }
    ],
    sprite: 'tm101',
    move: { en: 'Electro Web', pt: 'Electro Web' },
  },
  {
    id: 'tms-tm102-2162',
    index: 2162,
    category: 'tms',
    name: { en: 'TM102', pt: 'TM102' },
    description: { en: 'Focus Blast — Fighting, 120 power, 12 cooldown', pt: 'Focus Blast — Fighting, 120 power, 12 cooldown' },
    source: { en: 'Mable’s Research Level 44', pt: 'Mable’s Research Level 44' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 44', pt: 'Mable’s Research Level 44' } }
    ],
    sprite: 'tm102',
    move: { en: 'Focus Blast', pt: 'Focus Blast' },
  },
  {
    id: 'tms-tm103-2163',
    index: 2163,
    category: 'tms',
    name: { en: 'TM103', pt: 'TM103' },
    description: { en: 'Work Up — Normal, 15 cooldown, boosts Attack and Sp. Atk', pt: 'Work Up — Normal, 15 cooldown, boosts Attack and Sp. Atk' },
    source: { en: 'Wild Zone 1', pt: 'Wild Zone 1' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 1', pt: 'Wild Zone 1' } }
    ],
    sprite: 'tm103',
    move: { en: 'Work Up', pt: 'Work Up' },
  },
  {
    id: 'tms-tm104-2164',
    index: 2164,
    category: 'tms',
    name: { en: 'TM104', pt: 'TM104' },
    description: { en: 'Flare Blitz — Fire, 120 power, 8 cooldown', pt: 'Flare Blitz — Fire, 120 power, 8 cooldown' },
    source: { en: 'Centrico Plaza', pt: 'Centrico Plaza' },
    sources: [
      { kind: 'field', label: { en: 'Centrico Plaza', pt: 'Centrico Plaza' } }
    ],
    sprite: 'tm104',
    move: { en: 'Flare Blitz', pt: 'Flare Blitz' },
  },
  {
    id: 'tms-tm105-2165',
    index: 2165,
    category: 'tms',
    name: { en: 'TM105', pt: 'TM105' },
    description: { en: 'Blizzard — Ice, 110 power, 12 cooldown', pt: 'Blizzard — Ice, 110 power, 12 cooldown' },
    source: { en: 'Mable’s Research Level 42', pt: 'Mable’s Research Level 42' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 42', pt: 'Mable’s Research Level 42' } }
    ],
    sprite: 'tm105',
    move: { en: 'Blizzard', pt: 'Blizzard' },
  },
  {
    id: 'tms-tm106-2166',
    index: 2166,
    category: 'tms',
    name: { en: 'TM106', pt: 'TM106' },
    description: { en: 'Thunder — Electric, 110 power, 10 cooldown', pt: 'Thunder — Electric, 110 power, 10 cooldown' },
    source: { en: 'Mable’s Research Level 33', pt: 'Mable’s Research Level 33' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 33', pt: 'Mable’s Research Level 33' } }
    ],
    sprite: 'tm106',
    move: { en: 'Thunder', pt: 'Thunder' },
  },
  {
    id: 'tms-tm107-2167',
    index: 2167,
    category: 'tms',
    name: { en: 'TM107', pt: 'TM107' },
    description: { en: 'Close Combat — Fighting, 120 power, 12 cooldown', pt: 'Close Combat — Fighting, 120 power, 12 cooldown' },
    source: { en: 'Mable’s Research Level 37', pt: 'Mable’s Research Level 37' },
    sources: [
      { kind: 'research', label: { en: 'Mable’s Research Level 37', pt: 'Mable’s Research Level 37' } }
    ],
    sprite: 'tm107',
    move: { en: 'Close Combat', pt: 'Close Combat' },
  },
  {
    id: 'tms-tm108-2167',
    index: 2167,
    category: 'tms',
    name: { en: 'TM108', pt: 'TM108' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm108',
  },
  {
    id: 'tms-tm109-2168',
    index: 2168,
    category: 'tms',
    name: { en: 'TM109', pt: 'TM109' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm109',
  },
  {
    id: 'tms-tm110-2169',
    index: 2169,
    category: 'tms',
    name: { en: 'TM110', pt: 'TM110' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm110',
  },
  {
    id: 'tms-tm111-2170',
    index: 2170,
    category: 'tms',
    name: { en: 'TM111', pt: 'TM111' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm111',
  },
  {
    id: 'tms-tm112-2171',
    index: 2171,
    category: 'tms',
    name: { en: 'TM112', pt: 'TM112' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm112',
  },
  {
    id: 'tms-tm113-2172',
    index: 2172,
    category: 'tms',
    name: { en: 'TM113', pt: 'TM113' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm113',
  },
  {
    id: 'tms-tm114-2173',
    index: 2173,
    category: 'tms',
    name: { en: 'TM114', pt: 'TM114' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm114',
  },
  {
    id: 'tms-tm115-2174',
    index: 2174,
    category: 'tms',
    name: { en: 'TM115', pt: 'TM115' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm115',
  },
  {
    id: 'tms-tm116-2175',
    index: 2175,
    category: 'tms',
    name: { en: 'TM116', pt: 'TM116' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm116',
  },
  {
    id: 'tms-tm117-2176',
    index: 2176,
    category: 'tms',
    name: { en: 'TM117', pt: 'TM117' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm117',
  },
  {
    id: 'tms-tm118-2177',
    index: 2177,
    category: 'tms',
    name: { en: 'TM118', pt: 'TM118' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm118',
  },
  {
    id: 'tms-tm119-2178',
    index: 2178,
    category: 'tms',
    name: { en: 'TM119', pt: 'TM119' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm119',
  },
  {
    id: 'tms-tm120-2179',
    index: 2179,
    category: 'tms',
    name: { en: 'TM120', pt: 'TM120' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm120',
  },
  {
    id: 'tms-tm121-2180',
    index: 2180,
    category: 'tms',
    name: { en: 'TM121', pt: 'TM121' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm121',
  },
  {
    id: 'tms-tm122-2181',
    index: 2181,
    category: 'tms',
    name: { en: 'TM122', pt: 'TM122' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm122',
  },
  {
    id: 'tms-tm123-2182',
    index: 2182,
    category: 'tms',
    name: { en: 'TM123', pt: 'TM123' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm123',
  },
  {
    id: 'tms-tm124-2183',
    index: 2183,
    category: 'tms',
    name: { en: 'TM124', pt: 'TM124' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm124',
  },
  {
    id: 'tms-tm125-2184',
    index: 2184,
    category: 'tms',
    name: { en: 'TM125', pt: 'TM125' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm125',
  },
  {
    id: 'tms-tm126-2185',
    index: 2185,
    category: 'tms',
    name: { en: 'TM126', pt: 'TM126' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm126',
  },
  {
    id: 'tms-tm127-2186',
    index: 2186,
    category: 'tms',
    name: { en: 'TM127', pt: 'TM127' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm127',
  },
  {
    id: 'tms-tm128-2187',
    index: 2187,
    category: 'tms',
    name: { en: 'TM128', pt: 'TM128' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm128',
  },
  {
    id: 'tms-tm129-2188',
    index: 2188,
    category: 'tms',
    name: { en: 'TM129', pt: 'TM129' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm129',
  },
  {
    id: 'tms-tm130-2189',
    index: 2189,
    category: 'tms',
    name: { en: 'TM130', pt: 'TM130' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm130',
  },
  {
    id: 'tms-tm131-2190',
    index: 2190,
    category: 'tms',
    name: { en: 'TM131', pt: 'TM131' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm131',
  },
  {
    id: 'tms-tm132-2191',
    index: 2191,
    category: 'tms',
    name: { en: 'TM132', pt: 'TM132' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm132',
  },
  {
    id: 'tms-tm133-2192',
    index: 2192,
    category: 'tms',
    name: { en: 'TM133', pt: 'TM133' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm133',
  },
  {
    id: 'tms-tm134-2193',
    index: 2193,
    category: 'tms',
    name: { en: 'TM134', pt: 'TM134' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm134',
  },
  {
    id: 'tms-tm135-2194',
    index: 2194,
    category: 'tms',
    name: { en: 'TM135', pt: 'TM135' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm135',
  },
  {
    id: 'tms-tm136-2195',
    index: 2195,
    category: 'tms',
    name: { en: 'TM136', pt: 'TM136' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm136',
  },
  {
    id: 'tms-tm137-2196',
    index: 2196,
    category: 'tms',
    name: { en: 'TM137', pt: 'TM137' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm137',
  },
  {
    id: 'tms-tm138-2197',
    index: 2197,
    category: 'tms',
    name: { en: 'TM138', pt: 'TM138' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm138',
  },
  {
    id: 'tms-tm139-2198',
    index: 2198,
    category: 'tms',
    name: { en: 'TM139', pt: 'TM139' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm139',
  },
  {
    id: 'tms-tm140-2199',
    index: 2199,
    category: 'tms',
    name: { en: 'TM140', pt: 'TM140' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm140',
  },
  {
    id: 'tms-tm141-2200',
    index: 2200,
    category: 'tms',
    name: { en: 'TM141', pt: 'TM141' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm141',
  },
  {
    id: 'tms-tm142-2201',
    index: 2201,
    category: 'tms',
    name: { en: 'TM142', pt: 'TM142' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm142',
  },
  {
    id: 'tms-tm143-2202',
    index: 2202,
    category: 'tms',
    name: { en: 'TM143', pt: 'TM143' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm143',
  },
  {
    id: 'tms-tm144-2203',
    index: 2203,
    category: 'tms',
    name: { en: 'TM144', pt: 'TM144' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm144',
  },
  {
    id: 'tms-tm145-2204',
    index: 2204,
    category: 'tms',
    name: { en: 'TM145', pt: 'TM145' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm145',
  },
  {
    id: 'tms-tm146-2205',
    index: 2205,
    category: 'tms',
    name: { en: 'TM146', pt: 'TM146' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm146',
  },
  {
    id: 'tms-tm147-2206',
    index: 2206,
    category: 'tms',
    name: { en: 'TM147', pt: 'TM147' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm147',
  },
  {
    id: 'tms-tm148-2207',
    index: 2207,
    category: 'tms',
    name: { en: 'TM148', pt: 'TM148' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm148',
  },
  {
    id: 'tms-tm149-2208',
    index: 2208,
    category: 'tms',
    name: { en: 'TM149', pt: 'TM149' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm149',
  },
  {
    id: 'tms-tm150-2209',
    index: 2209,
    category: 'tms',
    name: { en: 'TM150', pt: 'TM150' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm150',
  },
  {
    id: 'tms-tm151-2210',
    index: 2210,
    category: 'tms',
    name: { en: 'TM151', pt: 'TM151' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm151',
  },
  {
    id: 'tms-tm152-2211',
    index: 2211,
    category: 'tms',
    name: { en: 'TM152', pt: 'TM152' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm152',
  },
  {
    id: 'tms-tm153-2212',
    index: 2212,
    category: 'tms',
    name: { en: 'TM153', pt: 'TM153' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm153',
  },
  {
    id: 'tms-tm154-2213',
    index: 2213,
    category: 'tms',
    name: { en: 'TM154', pt: 'TM154' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm154',
  },
  {
    id: 'tms-tm155-2214',
    index: 2214,
    category: 'tms',
    name: { en: 'TM155', pt: 'TM155' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm155',
  },
  {
    id: 'tms-tm156-2215',
    index: 2215,
    category: 'tms',
    name: { en: 'TM156', pt: 'TM156' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm156',
  },
  {
    id: 'tms-tm157-2216',
    index: 2216,
    category: 'tms',
    name: { en: 'TM157', pt: 'TM157' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm157',
  },
  {
    id: 'tms-tm158-2217',
    index: 2217,
    category: 'tms',
    name: { en: 'TM158', pt: 'TM158' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm158',
  },
  {
    id: 'tms-tm159-2218',
    index: 2218,
    category: 'tms',
    name: { en: 'TM159', pt: 'TM159' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm159',
  },
  {
    id: 'tms-tm160-2219',
    index: 2219,
    category: 'tms',
    name: { en: 'TM160', pt: 'TM160' },
    description: { en: 'Reusable Technical Machine that teaches a move.', pt: 'MT reutilizável que ensina um golpe.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'tm160',
  },
  {
    id: 'other-auspicious-armor-2344',
    index: 2344,
    category: 'other',
    name: { en: 'Auspicious Armor', pt: 'Auspicious Armor' },
    description: { en: 'Held, evolution, vitamin, or utility item.', pt: 'Item segurado, de evolução, vitamina ou utilitário.' },
    source: { en: 'Vert District (Vert Sector 6) · Hyperspace floating Poké Balls', pt: 'Vert District (Vert Sector 6) · Hyperspace floating Poké Balls' },
    sources: [
      { kind: 'field', label: { en: 'Vert District (Vert Sector 6)', pt: 'Vert District (Vert Sector 6)' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } }
    ],
    sprite: 'auspicious-armor',
  },
  {
    id: 'other-fairy-feather-2401',
    index: 2401,
    category: 'other',
    name: { en: 'Fairy Feather', pt: 'Fairy Feather' },
    description: { en: 'Boosts Fairy moves', pt: 'Boosts Fairy moves' },
    source: { en: 'Side Mission 42 · Racine Construction Shop', pt: 'Side Mission 42 · Racine Construction Shop' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 42', pt: 'Side Mission 42' } },
      { kind: 'shop', label: { en: 'Racine Construction Shop', pt: 'Racine Construction Shop' } }
    ],
    sprite: 'fairy-feather',
  },
  {
    id: 'other-seed-of-mastery-2558',
    index: 2558,
    category: 'other',
    name: { en: 'Seed of Mastery', pt: 'Seed of Mastery' },
    description: { en: 'Use to upgrade Pokemon moves into Plus Moves', pt: 'Use to upgrade Pokemon moves into Plus Moves' },
    source: { en: 'Defeating Alpha Pokemon', pt: 'Defeating Alpha Pokemon' },
    sources: [
      { kind: 'other', label: { en: 'Defeating Alpha Pokemon', pt: 'Defeating Alpha Pokemon' } }
    ],
    sprite: 'seed-of-mastery',
  },
  {
    id: 'mega-clefablite-2559',
    index: 2559,
    category: 'mega',
    name: { en: 'Clefablite', pt: 'Clefablite' },
    description: { en: 'Mega Clefable', pt: 'Mega Clefable' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    sprite: 'clefablite',
  },
  {
    id: 'mega-victreebelite-2560',
    index: 2560,
    category: 'mega',
    name: { en: 'Victreebelite', pt: 'Victreebelite' },
    description: { en: 'Mega Victreebel', pt: 'Mega Victreebel' },
    source: { en: 'Magenta District (Magenta Sector 9)', pt: 'Magenta District (Magenta Sector 9)' },
    sources: [
      { kind: 'field', label: { en: 'Magenta District (Magenta Sector 9)', pt: 'Magenta District (Magenta Sector 9)' } }
    ],
    sprite: 'victreebelite',
  },
  {
    id: 'mega-starminite-2561',
    index: 2561,
    category: 'mega',
    name: { en: 'Starminite', pt: 'Starminite' },
    description: { en: 'Mega Starmie', pt: 'Mega Starmie' },
    source: { en: 'Bleu District (Bleu Sector 9)', pt: 'Bleu District (Bleu Sector 9)' },
    sources: [
      { kind: 'field', label: { en: 'Bleu District (Bleu Sector 9)', pt: 'Bleu District (Bleu Sector 9)' } }
    ],
    sprite: 'starminite',
  },
  {
    id: 'mega-dragoninite-2562',
    index: 2562,
    category: 'mega',
    name: { en: 'Dragoninite', pt: 'Dragoninite' },
    description: { en: 'Mega Dragonite', pt: 'Mega Dragonite' },
    source: { en: 'Vert District (Vert Sector 3)', pt: 'Vert District (Vert Sector 3)' },
    sources: [
      { kind: 'field', label: { en: 'Vert District (Vert Sector 3)', pt: 'Vert District (Vert Sector 3)' } }
    ],
    sprite: 'dragoninite',
  },
  {
    id: 'mega-meganiumite-2563',
    index: 2563,
    category: 'mega',
    name: { en: 'Meganiumite', pt: 'Meganiumite' },
    description: { en: 'Mega Meganium', pt: 'Mega Meganium' },
    source: { en: 'Hotel Z Shop · Vernal Avenue', pt: 'Hotel Z Shop · Vernal Avenue' },
    sources: [
      { kind: 'shop', label: { en: 'Hotel Z Shop · Vernal Avenue', pt: 'Hotel Z Shop · Vernal Avenue' } }
    ],
    sprite: 'meganiumite',
  },
  {
    id: 'mega-feraligite-2564',
    index: 2564,
    category: 'mega',
    name: { en: 'Feraligite', pt: 'Feraligite' },
    description: { en: 'Mega Feraligatr', pt: 'Mega Feraligatr' },
    source: { en: 'Hotel Z Shop · Vernal Avenue', pt: 'Hotel Z Shop · Vernal Avenue' },
    sources: [
      { kind: 'shop', label: { en: 'Hotel Z Shop · Vernal Avenue', pt: 'Hotel Z Shop · Vernal Avenue' } }
    ],
    sprite: 'feraligite',
  },
  {
    id: 'mega-skarmorite-2565',
    index: 2565,
    category: 'mega',
    name: { en: 'Skarmorite', pt: 'Skarmorite' },
    description: { en: 'Mega Skarmory', pt: 'Mega Skarmory' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    sprite: 'skarmorite',
  },
  {
    id: 'mega-froslassite-2566',
    index: 2566,
    category: 'mega',
    name: { en: 'Froslassite', pt: 'Froslassite' },
    description: { en: 'Mega Froslass', pt: 'Mega Froslass' },
    source: { en: 'Bleu District (Aymlis Park)', pt: 'Bleu District (Aymlis Park)' },
    sources: [
      { kind: 'field', label: { en: 'Bleu District (Aymlis Park)', pt: 'Bleu District (Aymlis Park)' } }
    ],
    sprite: 'froslassite',
  },
  {
    id: 'mega-heatranite-2567',
    index: 2567,
    category: 'mega',
    name: { en: 'Heatranite', pt: 'Heatranite' },
    description: { en: 'Mega Stone that enables Mega Evolution.', pt: 'Mega Pedra que permite a Mega Evolução.' },
    source: { en: 'Hyperspace Infernal Arena', pt: 'Hyperspace Infernal Arena' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Infernal Arena', pt: 'Hyperspace Infernal Arena' } }
    ],
    sprite: 'heatranite',
  },
  {
    id: 'mega-darkranite-2568',
    index: 2568,
    category: 'mega',
    name: { en: 'Darkranite', pt: 'Darkranite' },
    description: { en: 'Mega Stone that enables Mega Evolution.', pt: 'Mega Pedra que permite a Mega Evolução.' },
    source: { en: 'Hyperspace Newmoon Nightmare', pt: 'Hyperspace Newmoon Nightmare' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Newmoon Nightmare', pt: 'Hyperspace Newmoon Nightmare' } }
    ],
    sprite: 'darkranite',
  },
  {
    id: 'mega-emboarite-2569',
    index: 2569,
    category: 'mega',
    name: { en: 'Emboarite', pt: 'Emboarite' },
    description: { en: 'Mega Emboar', pt: 'Mega Emboar' },
    source: { en: 'Hotel Z Shop · Vernal Avenue', pt: 'Hotel Z Shop · Vernal Avenue' },
    sources: [
      { kind: 'shop', label: { en: 'Hotel Z Shop · Vernal Avenue', pt: 'Hotel Z Shop · Vernal Avenue' } }
    ],
    sprite: 'emboarite',
  },
  {
    id: 'mega-excadrite-2570',
    index: 2570,
    category: 'mega',
    name: { en: 'Excadrite', pt: 'Excadrite' },
    description: { en: 'Mega Excadrill', pt: 'Mega Excadrill' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    sprite: 'excadrite',
  },
  {
    id: 'mega-scolipite-2571',
    index: 2571,
    category: 'mega',
    name: { en: 'Scolipite', pt: 'Scolipite' },
    description: { en: 'Mega Scolipede', pt: 'Mega Scolipede' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    sprite: 'scolipite',
  },
  {
    id: 'mega-scraftinite-2572',
    index: 2572,
    category: 'mega',
    name: { en: 'Scraftinite', pt: 'Scraftinite' },
    description: { en: 'Mega Scrafty', pt: 'Mega Scrafty' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    sprite: 'scraftinite',
  },
  {
    id: 'mega-eelektrossite-2573',
    index: 2573,
    category: 'mega',
    name: { en: 'Eelektrossite', pt: 'Eelektrossite' },
    description: { en: 'Mega Eelektross', pt: 'Mega Eelektross' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    sprite: 'eelektrossite',
  },
  {
    id: 'mega-chandelurite-2574',
    index: 2574,
    category: 'mega',
    name: { en: 'Chandelurite', pt: 'Chandelurite' },
    description: { en: 'Mega Chandelure', pt: 'Mega Chandelure' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    sprite: 'chandelurite',
  },
  {
    id: 'mega-chesnaughtite-2575',
    index: 2575,
    category: 'mega',
    name: { en: 'Chesnaughtite', pt: 'Chesnaughtite' },
    description: { en: 'Mega Chesnaught', pt: 'Mega Chesnaught' },
    source: { en: 'Z-A Battle Club Ranked Reward (Season 3 — Rank K+)', pt: 'Z-A Battle Club Ranked Reward (Season 3 — Rank K+)' },
    sources: [
      { kind: 'ranked', label: { en: 'Z-A Battle Club Ranked Reward (Season 3 — Rank K+)', pt: 'Z-A Battle Club Ranked Reward (Season 3 — Rank K+)' } }
    ],
    sprite: 'chesnaughtite',
  },
  {
    id: 'mega-delphoxite-2576',
    index: 2576,
    category: 'mega',
    name: { en: 'Delphoxite', pt: 'Delphoxite' },
    description: { en: 'Mega Delphox', pt: 'Mega Delphox' },
    source: { en: 'Z-A Battle Club Ranked Reward (Season 2 — Rank K+)', pt: 'Z-A Battle Club Ranked Reward (Season 2 — Rank K+)' },
    sources: [
      { kind: 'ranked', label: { en: 'Z-A Battle Club Ranked Reward (Season 2 — Rank K+)', pt: 'Z-A Battle Club Ranked Reward (Season 2 — Rank K+)' } }
    ],
    sprite: 'delphoxite',
  },
  {
    id: 'mega-greninjite-2577',
    index: 2577,
    category: 'mega',
    name: { en: 'Greninjite', pt: 'Greninjite' },
    description: { en: 'Mega Greninja', pt: 'Mega Greninja' },
    source: { en: 'Z-A Battle Club Ranked Reward (Season 1 — Rank K+)', pt: 'Z-A Battle Club Ranked Reward (Season 1 — Rank K+)' },
    sources: [
      { kind: 'ranked', label: { en: 'Z-A Battle Club Ranked Reward (Season 1 — Rank K+)', pt: 'Z-A Battle Club Ranked Reward (Season 1 — Rank K+)' } }
    ],
    sprite: 'greninjite',
  },
  {
    id: 'mega-pyroarite-2578',
    index: 2578,
    category: 'mega',
    name: { en: 'Pyroarite', pt: 'Pyroarite' },
    description: { en: 'Mega Pyroar', pt: 'Mega Pyroar' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    sprite: 'pyroarite',
  },
  {
    id: 'mega-floettite-2579',
    index: 2579,
    category: 'mega',
    name: { en: 'Floettite', pt: 'Floettite' },
    description: { en: 'Mega Floette', pt: 'Mega Floette' },
    source: { en: 'Quasartico Inc.', pt: 'Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Quasartico Inc.', pt: 'Quasartico Inc.' } }
    ],
    sprite: 'floettite',
  },
  {
    id: 'mega-malamarite-2580',
    index: 2580,
    category: 'mega',
    name: { en: 'Malamarite', pt: 'Malamarite' },
    description: { en: 'Mega Malamar', pt: 'Mega Malamar' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    sprite: 'malamarite',
  },
  {
    id: 'mega-barbaracite-2581',
    index: 2581,
    category: 'mega',
    name: { en: 'Barbaracite', pt: 'Barbaracite' },
    description: { en: 'Mega Barbaracle', pt: 'Mega Barbaracle' },
    source: { en: 'Bleu District (Bleu Sector 5)', pt: 'Bleu District (Bleu Sector 5)' },
    sources: [
      { kind: 'field', label: { en: 'Bleu District (Bleu Sector 5)', pt: 'Bleu District (Bleu Sector 5)' } }
    ],
    sprite: 'barbaracite',
  },
  {
    id: 'mega-dragalgite-2582',
    index: 2582,
    category: 'mega',
    name: { en: 'Dragalgite', pt: 'Dragalgite' },
    description: { en: 'Mega Dragalge', pt: 'Mega Dragalge' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    sprite: 'dragalgite',
  },
  {
    id: 'mega-hawluchanite-2583',
    index: 2583,
    category: 'mega',
    name: { en: 'Hawluchanite', pt: 'Hawluchanite' },
    description: { en: 'Mega Hawlucha', pt: 'Mega Hawlucha' },
    source: { en: 'Magenta District (Magenta Sector 3)', pt: 'Magenta District (Magenta Sector 3)' },
    sources: [
      { kind: 'field', label: { en: 'Magenta District (Magenta Sector 3)', pt: 'Magenta District (Magenta Sector 3)' } }
    ],
    sprite: 'hawluchanite',
  },
  {
    id: 'mega-zygardite-2584',
    index: 2584,
    category: 'mega',
    name: { en: 'Zygardite', pt: 'Zygardite' },
    description: { en: 'Tap to Reveal', pt: 'Tap to Reveal' },
    source: { en: 'Centrico Plaza', pt: 'Centrico Plaza' },
    sources: [
      { kind: 'field', label: { en: 'Centrico Plaza', pt: 'Centrico Plaza' } }
    ],
    sprite: 'zygardite',
  },
  {
    id: 'mega-drampanite-2585',
    index: 2585,
    category: 'mega',
    name: { en: 'Drampanite', pt: 'Drampanite' },
    description: { en: 'Mega Drampa', pt: 'Mega Drampa' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    price: { amount: 360, currency: 'megaShards', kind: 'buy' },
    sprite: 'drampanite',
  },
  {
    id: 'mega-zeraorite-2586',
    index: 2586,
    category: 'mega',
    name: { en: 'Zeraorite', pt: 'Zeraorite' },
    description: { en: 'Mega Stone that enables Mega Evolution.', pt: 'Mega Pedra que permite a Mega Evolução.' },
    source: { en: 'Hyperspace Lumiose', pt: 'Hyperspace Lumiose' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Lumiose', pt: 'Hyperspace Lumiose' } }
    ],
    sprite: 'zeraorite',
  },
  {
    id: 'mega-falinksite-2587',
    index: 2587,
    category: 'mega',
    name: { en: 'Falinksite', pt: 'Falinksite' },
    description: { en: 'Mega Falinks', pt: 'Mega Falinks' },
    source: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Shop · Quasartico Inc.', pt: 'Shop · Quasartico Inc.' } }
    ],
    sprite: 'falinksite',
  },
  {
    id: 'key-key-to-room-202-2588',
    index: 2588,
    category: 'key',
    name: { en: 'Key to Room 202', pt: 'Key to Room 202' },
    description: { en: 'A key to your room, Room 202, at Hotel Z', pt: 'A key to your room, Room 202, at Hotel Z' },
    source: { en: 'Reward for completing Main Mission 2', pt: 'Reward for completing Main Mission 2' },
    sources: [
      { kind: 'mission', label: { en: 'Reward for completing Main Mission 2', pt: 'Reward for completing Main Mission 2' } }
    ],
    sprite: 'key-to-room-202',
  },
  {
    id: 'key-super-lumiose-galette-2589',
    index: 2589,
    category: 'key',
    name: { en: 'Super Lumiose Galette', pt: 'Super Lumiose Galette' },
    description: { en: 'A popular treat among certain residents of Lumiose City.', pt: 'A popular treat among certain residents of Lumiose City.' },
    source: { en: 'Magenta District (Magenta Sector 1)', pt: 'Magenta District (Magenta Sector 1)' },
    sources: [
      { kind: 'field', label: { en: 'Magenta District (Magenta Sector 1)', pt: 'Magenta District (Magenta Sector 1)' } }
    ],
    sprite: 'super-lumiose-galette',
  },
  {
    id: 'key-lab-key-card-a-2590',
    index: 2590,
    category: 'key',
    name: { en: 'Lab Key Card A', pt: 'Lab Key Card A' },
    description: { en: 'A key card that can be used in Lysandre Labs.', pt: 'A key card that can be used in Lysandre Labs.' },
    source: { en: 'Lysandre Labs (B1F)', pt: 'Lysandre Labs (B1F)' },
    sources: [
      { kind: 'other', label: { en: 'Lysandre Labs (B1F)', pt: 'Lysandre Labs (B1F)' } }
    ],
    sprite: 'lab-key-card-a',
  },
  {
    id: 'key-lab-key-card-b-2591',
    index: 2591,
    category: 'key',
    name: { en: 'Lab Key Card B', pt: 'Lab Key Card B' },
    description: { en: 'A key card that can be used in Lysandre Labs.', pt: 'A key card that can be used in Lysandre Labs.' },
    source: { en: 'Lysandre Labs (B1F)', pt: 'Lysandre Labs (B1F)' },
    sources: [
      { kind: 'other', label: { en: 'Lysandre Labs (B1F)', pt: 'Lysandre Labs (B1F)' } }
    ],
    sprite: 'lab-key-card-b',
  },
  {
    id: 'key-lab-key-card-c-2592',
    index: 2592,
    category: 'key',
    name: { en: 'Lab Key Card C', pt: 'Lab Key Card C' },
    description: { en: 'A key card that can be used in Lysandre Labs.', pt: 'A key card that can be used in Lysandre Labs.' },
    source: { en: 'Lysandre Labs (B1F)', pt: 'Lysandre Labs (B1F)' },
    sources: [
      { kind: 'other', label: { en: 'Lysandre Labs (B1F)', pt: 'Lysandre Labs (B1F)' } }
    ],
    sprite: 'lab-key-card-c',
  },
  {
    id: 'key-lab-key-card-m-2593',
    index: 2593,
    category: 'key',
    name: { en: 'Lab Key Card M', pt: 'Lab Key Card M' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'lab-key-card-m',
  },
  {
    id: 'key-lab-key-card-x-2594',
    index: 2594,
    category: 'key',
    name: { en: 'Lab Key Card X', pt: 'Lab Key Card X' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'lab-key-card-x',
  },
  {
    id: 'key-pebble-2595',
    index: 2595,
    category: 'key',
    name: { en: 'Pebble', pt: 'Pebble' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Vert District (Vert Sector 8)', pt: 'Vert District (Vert Sector 8)' },
    sources: [
      { kind: 'field', label: { en: 'Vert District (Vert Sector 8)', pt: 'Vert District (Vert Sector 8)' } }
    ],
    sprite: 'pebble',
  },
  {
    id: 'key-cherished-ring-2596',
    index: 2596,
    category: 'key',
    name: { en: 'Cherished Ring', pt: 'Cherished Ring' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Racine Construction', pt: 'Racine Construction' },
    sources: [
      { kind: 'shop', label: { en: 'Racine Construction', pt: 'Racine Construction' } }
    ],
    sprite: 'cherished-ring',
  },
  {
    id: 'key-autographed-plush-2597',
    index: 2597,
    category: 'key',
    name: { en: 'Autographed Plush', pt: 'Autographed Plush' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Racine Construction', pt: 'Racine Construction' },
    sources: [
      { kind: 'shop', label: { en: 'Racine Construction', pt: 'Racine Construction' } }
    ],
    sprite: 'autographed-plush',
  },
  {
    id: 'key-tasty-trash-2598',
    index: 2598,
    category: 'key',
    name: { en: 'Tasty Trash', pt: 'Tasty Trash' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Autumnal Avenue', pt: 'Autumnal Avenue' },
    sources: [
      { kind: 'other', label: { en: 'Autumnal Avenue', pt: 'Autumnal Avenue' } }
    ],
    sprite: 'tasty-trash',
  },
  {
    id: 'key-revitalizing-twig-2599',
    index: 2599,
    category: 'key',
    name: { en: 'Revitalizing Twig', pt: 'Revitalizing Twig' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Wild Zone 5', pt: 'Wild Zone 5' },
    sources: [
      { kind: 'field', label: { en: 'Wild Zone 5', pt: 'Wild Zone 5' } }
    ],
    sprite: 'revitalizing-twig',
  },
  {
    id: 'key-lidas-things-2600',
    index: 2600,
    category: 'key',
    name: { en: 'Lida\'s Things', pt: 'Lida\'s Things' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Hotel Z', pt: 'Hotel Z' },
    sources: [
      { kind: 'shop', label: { en: 'Hotel Z', pt: 'Hotel Z' } }
    ],
    sprite: 'lidas-things',
  },
  {
    id: 'key-lumiosian-butter-2601',
    index: 2601,
    category: 'key',
    name: { en: 'Lumiosian Butter', pt: 'Lumiosian Butter' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Magenta District (Magenta Sector 6)', pt: 'Magenta District (Magenta Sector 6)' },
    sources: [
      { kind: 'field', label: { en: 'Magenta District (Magenta Sector 6)', pt: 'Magenta District (Magenta Sector 6)' } }
    ],
    sprite: 'lumiosian-butter',
  },
  {
    id: 'key-nice-butter-2602',
    index: 2602,
    category: 'key',
    name: { en: 'Nice Butter', pt: 'Nice Butter' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Hyperspace Disaster Arena', pt: 'Hyperspace Disaster Arena' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Disaster Arena', pt: 'Hyperspace Disaster Arena' } }
    ],
    sprite: 'nice-butter',
  },
  {
    id: 'key-great-butter-2603',
    index: 2603,
    category: 'key',
    name: { en: 'Great Butter', pt: 'Great Butter' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Hyperspace Hunting Grounds', pt: 'Hyperspace Hunting Grounds' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Hunting Grounds', pt: 'Hyperspace Hunting Grounds' } }
    ],
    sprite: 'great-butter',
  },
  {
    id: 'key-amazing-butter-2604',
    index: 2604,
    category: 'key',
    name: { en: 'Amazing Butter', pt: 'Amazing Butter' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Hyperspace Sushi Paradise', pt: 'Hyperspace Sushi Paradise' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Sushi Paradise', pt: 'Hyperspace Sushi Paradise' } }
    ],
    sprite: 'amazing-butter',
  },
  {
    id: 'key-supreme-butter-2605',
    index: 2605,
    category: 'key',
    name: { en: 'Supreme Butter', pt: 'Supreme Butter' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Hyperspace Second-Sight Arena', pt: 'Hyperspace Second-Sight Arena' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Second-Sight Arena', pt: 'Hyperspace Second-Sight Arena' } }
    ],
    sprite: 'supreme-butter',
  },
  {
    id: 'key-hyperspace-butter-2606',
    index: 2606,
    category: 'key',
    name: { en: 'Hyperspace Butter', pt: 'Hyperspace Butter' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Hyperspace Infernal Arena', pt: 'Hyperspace Infernal Arena' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Infernal Arena', pt: 'Hyperspace Infernal Arena' } }
    ],
    sprite: 'hyperspace-butter',
  },
  {
    id: 'key-hoennian-salt-2607',
    index: 2607,
    category: 'key',
    name: { en: 'Hoennian Salt', pt: 'Hoennian Salt' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Centrico Plaza', pt: 'Centrico Plaza' },
    sources: [
      { kind: 'field', label: { en: 'Centrico Plaza', pt: 'Centrico Plaza' } }
    ],
    sprite: 'hoennian-salt',
  },
  {
    id: 'key-epice-noire-2608',
    index: 2608,
    category: 'key',
    name: { en: 'Épice Noire', pt: 'Épice Noire' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' },
    sources: [
      { kind: 'other', label: { en: 'Location not yet documented for Legends: Z-A.', pt: 'Local ainda não documentado em Legends: Z-A.' } }
    ],
    sprite: 'epice-noire',
  },
  {
    id: 'key-arboliva-oil-2609',
    index: 2609,
    category: 'key',
    name: { en: 'Arboliva Oil', pt: 'Arboliva Oil' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Hotel Z', pt: 'Hotel Z' },
    sources: [
      { kind: 'shop', label: { en: 'Hotel Z', pt: 'Hotel Z' } }
    ],
    sprite: 'arboliva-oil',
  },
  {
    id: 'key-popping-candy-2610',
    index: 2610,
    category: 'key',
    name: { en: 'Popping Candy', pt: 'Popping Candy' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Vert District (Vert Sector 3)', pt: 'Vert District (Vert Sector 3)' },
    sources: [
      { kind: 'field', label: { en: 'Vert District (Vert Sector 3)', pt: 'Vert District (Vert Sector 3)' } }
    ],
    sprite: 'popping-candy',
  },
  {
    id: 'key-important-letter-2611',
    index: 2611,
    category: 'key',
    name: { en: 'Important Letter', pt: 'Important Letter' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Hyperspace Lumiose', pt: 'Hyperspace Lumiose' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Lumiose', pt: 'Hyperspace Lumiose' } }
    ],
    sprite: 'important-letter',
  },
  {
    id: 'key-dirty-scarf-2613',
    index: 2613,
    category: 'key',
    name: { en: 'Dirty Scarf', pt: 'Dirty Scarf' },
    description: { en: 'Important key item for story or side progress.', pt: 'Item chave importante para a história ou missões.' },
    source: { en: 'Bleu District', pt: 'Bleu District' },
    sources: [
      { kind: 'field', label: { en: 'Bleu District', pt: 'Bleu District' } }
    ],
    sprite: 'dirty-scarf',
  },
  {
    id: 'other-mega-shard-2618',
    index: 2618,
    category: 'other',
    name: { en: 'Mega Shard', pt: 'Fragmento Mega' },
    description: { en: 'A mysterious shard that can be found after smashing Mega Crystals', pt: 'A mysterious shard that can be found after smashing Mega Crystals' },
    source: { en: 'All over Lumiose City', pt: 'All over Lumiose City' },
    sources: [
      { kind: 'other', label: { en: 'All over Lumiose City', pt: 'All over Lumiose City' } }
    ],
    sprite: 'mega-shard',
  },
  {
    id: 'other-colorful-screw-2619',
    index: 2619,
    category: 'other',
    name: { en: 'Colorful Screw', pt: 'Parafuso Colorido' },
    description: { en: 'A colorful screw found throughout Lumiose City.', pt: 'A colorful screw found throughout Lumiose City.' },
    source: { en: 'All throughout Lumiose City (usually around scaffolding challenges) · Trade Colorful Screws to Racine Construction for Canari Plushes', pt: 'All throughout Lumiose City (usually around scaffolding challenges) · Trade Colorful Screws to Racine Construction for Canari Plushes' },
    sources: [
      { kind: 'other', label: { en: 'All throughout Lumiose City (usually around scaffolding challenges)', pt: 'All throughout Lumiose City (usually around scaffolding challenges)' } },
      { kind: 'shop', label: { en: 'Trade Colorful Screws to Racine Construction for Canari Plushes', pt: 'Trade Colorful Screws to Racine Construction for Canari Plushes' } }
    ],
    sprite: 'colorful-screw',
  },
  {
    id: 'key-red-canari-plush-2620',
    index: 2620,
    category: 'key',
    name: { en: 'Red Canari Plush', pt: 'Red Canari Plush' },
    description: { en: 'Increases Exp. Points your Pokemon receive', pt: 'Increases Exp. Points your Pokemon receive' },
    source: { en: 'Racine Construction', pt: 'Racine Construction' },
    sources: [
      { kind: 'shop', label: { en: 'Racine Construction', pt: 'Racine Construction' } }
    ],
    sprite: 'red-canari-plush',
  },
  {
    id: 'key-gold-canari-plush-2623',
    index: 2623,
    category: 'key',
    name: { en: 'Gold Canari Plush', pt: 'Gold Canari Plush' },
    description: { en: 'Increases prize money from battles', pt: 'Increases prize money from battles' },
    source: { en: 'Racine Construction', pt: 'Racine Construction' },
    sources: [
      { kind: 'shop', label: { en: 'Racine Construction', pt: 'Racine Construction' } }
    ],
    sprite: 'gold-canari-plush',
  },
  {
    id: 'key-pink-canari-plush-2626',
    index: 2626,
    category: 'key',
    name: { en: 'Pink Canari Plush', pt: 'Pink Canari Plush' },
    description: { en: 'Increases the number of Mega Shards received from smashing Mega Crystals', pt: 'Increases the number of Mega Shards received from smashing Mega Crystals' },
    source: { en: 'Racine Construction', pt: 'Racine Construction' },
    sources: [
      { kind: 'shop', label: { en: 'Racine Construction', pt: 'Racine Construction' } }
    ],
    sprite: 'pink-canari-plush',
  },
  {
    id: 'key-green-canari-plush-2629',
    index: 2629,
    category: 'key',
    name: { en: 'Green Canari Plush', pt: 'Green Canari Plush' },
    description: { en: 'Makes the player character less likely to black out from taking damage', pt: 'Makes the player character less likely to black out from taking damage' },
    source: { en: 'Racine Construction', pt: 'Racine Construction' },
    sources: [
      { kind: 'shop', label: { en: 'Racine Construction', pt: 'Racine Construction' } }
    ],
    sprite: 'green-canari-plush',
  },
  {
    id: 'key-blue-canari-plush-2632',
    index: 2632,
    category: 'key',
    name: { en: 'Blue Canari Plush', pt: 'Blue Canari Plush' },
    description: { en: 'Makes it more likely you\'ll catch a Pokemon', pt: 'Makes it more likely you\'ll catch a Pokemon' },
    source: { en: 'Racine Construction', pt: 'Racine Construction' },
    sources: [
      { kind: 'shop', label: { en: 'Racine Construction', pt: 'Racine Construction' } }
    ],
    sprite: 'blue-canari-plush',
  },
  {
    id: 'mega-raichunite-x-2635',
    index: 2635,
    category: 'mega',
    name: { en: 'Raichunite X', pt: 'Raichunite X' },
    description: { en: 'Mega Raichu X', pt: 'Mega Raichu X' },
    source: { en: 'Mega Dimension DLC · Side Mission 139: The Dauntless Raichu Duo', pt: 'Mega Dimension DLC · Side Mission 139: The Dauntless Raichu Duo' },
    sources: [
      { kind: 'dlc', label: { en: 'Mega Dimension DLC · Side Mission 139: The Dauntless Raichu Duo', pt: 'Mega Dimension DLC · Side Mission 139: The Dauntless Raichu Duo' } }
    ],
    sprite: 'raichunite-x',
  },
  {
    id: 'mega-raichunite-y-2636',
    index: 2636,
    category: 'mega',
    name: { en: 'Raichunite Y', pt: 'Raichunite Y' },
    description: { en: 'Mega Raichu Y', pt: 'Mega Raichu Y' },
    source: { en: 'Mega Dimension DLC · Side Mission 139: The Dauntless Raichu Duo', pt: 'Mega Dimension DLC · Side Mission 139: The Dauntless Raichu Duo' },
    sources: [
      { kind: 'dlc', label: { en: 'Mega Dimension DLC · Side Mission 139: The Dauntless Raichu Duo', pt: 'Mega Dimension DLC · Side Mission 139: The Dauntless Raichu Duo' } }
    ],
    sprite: 'raichunite-y',
  },
  {
    id: 'mega-chimechite-2637',
    index: 2637,
    category: 'mega',
    name: { en: 'Chimechite', pt: 'Chimechite' },
    description: { en: 'Mega Stone that enables Mega Evolution.', pt: 'Mega Pedra que permite a Mega Evolução.' },
    source: { en: 'Hyperspace Lumiose', pt: 'Hyperspace Lumiose' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Lumiose', pt: 'Hyperspace Lumiose' } }
    ],
    sprite: 'chimechite',
  },
  {
    id: 'mega-absolite-z-2638',
    index: 2638,
    category: 'mega',
    name: { en: 'Absolite Z', pt: 'Absolite Z' },
    description: { en: 'Mega Stone that enables Mega Evolution.', pt: 'Mega Pedra que permite a Mega Evolução.' },
    source: { en: 'Hyperspace Disaster Arena', pt: 'Hyperspace Disaster Arena' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Disaster Arena', pt: 'Hyperspace Disaster Arena' } }
    ],
    sprite: 'absolite-z',
  },
  {
    id: 'mega-staraptite-2639',
    index: 2639,
    category: 'mega',
    name: { en: 'Staraptite', pt: 'Staraptite' },
    description: { en: 'Mega Stone that enables Mega Evolution.', pt: 'Mega Pedra que permite a Mega Evolução.' },
    source: { en: 'Hyperspace Hunting Grounds', pt: 'Hyperspace Hunting Grounds' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Hunting Grounds', pt: 'Hyperspace Hunting Grounds' } }
    ],
    sprite: 'staraptite',
  },
  {
    id: 'mega-garchompite-z-2640',
    index: 2640,
    category: 'mega',
    name: { en: 'Garchompite Z', pt: 'Garchompite Z' },
    description: { en: 'Mega Stone that enables Mega Evolution.', pt: 'Mega Pedra que permite a Mega Evolução.' },
    source: { en: 'Hyperspace Lumiose (limited event)', pt: 'Hyperspace Lumiose (limited event)' },
    sources: [
      { kind: 'event', label: { en: 'Hyperspace Lumiose (limited event)', pt: 'Hyperspace Lumiose (limited event)' } }
    ],
    sprite: 'garchompite-z',
  },
  {
    id: 'mega-lucarionite-z-2641',
    index: 2641,
    category: 'mega',
    name: { en: 'Lucarionite Z', pt: 'Lucarionite Z' },
    description: { en: 'Mega Stone that enables Mega Evolution.', pt: 'Mega Pedra que permite a Mega Evolução.' },
    source: { en: 'Side Mission 197: Ultra-Hardcore Lucario Showdown', pt: 'Side Mission 197: Ultra-Hardcore Lucario Showdown' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 197: Ultra-Hardcore Lucario Showdown', pt: 'Side Mission 197: Ultra-Hardcore Lucario Showdown' } }
    ],
    sprite: 'lucarionite-z',
  },
  {
    id: 'mega-golurkite-2642',
    index: 2642,
    category: 'mega',
    name: { en: 'Golurkite', pt: 'Golurkite' },
    description: { en: 'Mega Stone that enables Mega Evolution.', pt: 'Mega Pedra que permite a Mega Evolução.' },
    source: { en: 'Hyperspace Lumiose', pt: 'Hyperspace Lumiose' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Lumiose', pt: 'Hyperspace Lumiose' } }
    ],
    sprite: 'golurkite',
  },
  {
    id: 'mega-meowsticite-2643',
    index: 2643,
    category: 'mega',
    name: { en: 'Meowsticite', pt: 'Meowsticite' },
    description: { en: 'Mega Stone that enables Mega Evolution.', pt: 'Mega Pedra que permite a Mega Evolução.' },
    source: { en: 'Hyperspace Second-Sight Arena', pt: 'Hyperspace Second-Sight Arena' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Second-Sight Arena', pt: 'Hyperspace Second-Sight Arena' } }
    ],
    sprite: 'meowsticite',
  },
  {
    id: 'mega-crabominite-2644',
    index: 2644,
    category: 'mega',
    name: { en: 'Crabominite', pt: 'Crabominite' },
    description: { en: 'Mega Stone that enables Mega Evolution.', pt: 'Mega Pedra que permite a Mega Evolução.' },
    source: { en: 'Side Mission 141: Rogue Mega Showdown', pt: 'Side Mission 141: Rogue Mega Showdown' },
    sources: [
      { kind: 'mission', label: { en: 'Side Mission 141: Rogue Mega Showdown', pt: 'Side Mission 141: Rogue Mega Showdown' } }
    ],
    sprite: 'crabominite',
  },
  {
    id: 'mega-golisopite-2645',
    index: 2645,
    category: 'mega',
    name: { en: 'Golisopite', pt: 'Golisopite' },
    description: { en: 'Mega Stone that enables Mega Evolution.', pt: 'Mega Pedra que permite a Mega Evolução.' },
    source: { en: 'Hyperspace Lumiose', pt: 'Hyperspace Lumiose' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Lumiose', pt: 'Hyperspace Lumiose' } }
    ],
    sprite: 'golisopite',
  },
  {
    id: 'mega-magearnite-2646',
    index: 2646,
    category: 'mega',
    name: { en: 'Magearnite', pt: 'Magearnite' },
    description: { en: 'Mega Stone that enables Mega Evolution.', pt: 'Mega Pedra que permite a Mega Evolução.' },
    source: { en: 'Quasartico Inc.', pt: 'Quasartico Inc.' },
    sources: [
      { kind: 'shop', label: { en: 'Quasartico Inc.', pt: 'Quasartico Inc.' } }
    ],
    sprite: 'magearnite',
  },
  {
    id: 'mega-scovillainite-2647',
    index: 2647,
    category: 'mega',
    name: { en: 'Scovillainite', pt: 'Scovillainite' },
    description: { en: 'Mega Stone that enables Mega Evolution.', pt: 'Mega Pedra que permite a Mega Evolução.' },
    source: { en: 'Hyperspace Lumiose', pt: 'Hyperspace Lumiose' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Lumiose', pt: 'Hyperspace Lumiose' } }
    ],
    sprite: 'scovillainite',
  },
  {
    id: 'mega-baxcalibrite-2648',
    index: 2648,
    category: 'mega',
    name: { en: 'Baxcalibrite', pt: 'Baxcalibrite' },
    description: { en: 'Mega Stone that enables Mega Evolution.', pt: 'Mega Pedra que permite a Mega Evolução.' },
    source: { en: 'Z-A Battle Club · Ranked Battle rank-up reward', pt: 'Z-A Battle Club · Ranked Battle rank-up reward' },
    sources: [
      { kind: 'ranked', label: { en: 'Z-A Battle Club · Ranked Battle rank-up reward', pt: 'Z-A Battle Club · Ranked Battle rank-up reward' } }
    ],
    sprite: 'baxcalibrite',
  },
  {
    id: 'mega-tatsugirinite-2649',
    index: 2649,
    category: 'mega',
    name: { en: 'Tatsugirinite', pt: 'Tatsugirinite' },
    description: { en: 'Mega Stone that enables Mega Evolution.', pt: 'Mega Pedra que permite a Mega Evolução.' },
    source: { en: 'Hyperspace Sushi Paradise', pt: 'Hyperspace Sushi Paradise' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Sushi Paradise', pt: 'Hyperspace Sushi Paradise' } }
    ],
    sprite: 'tatsugirinite',
  },
  {
    id: 'mega-glimmoranite-2650',
    index: 2650,
    category: 'mega',
    name: { en: 'Glimmoranite', pt: 'Glimmoranite' },
    description: { en: 'Mega Stone that enables Mega Evolution.', pt: 'Mega Pedra que permite a Mega Evolução.' },
    source: { en: 'Hyperspace Lumiose', pt: 'Hyperspace Lumiose' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace Lumiose', pt: 'Hyperspace Lumiose' } }
    ],
    sprite: 'glimmoranite',
  },
  {
    id: 'berries-hyper-cheri-berry-2651',
    index: 2651,
    category: 'berries',
    name: { en: 'Hyper Cheri Berry', pt: 'Hyper Cheri Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Rust Syndicate Office · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Rust Syndicate Office · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'other', label: { en: 'Rust Syndicate Office', pt: 'Rust Syndicate Office' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'cheri-berry',
  },
  {
    id: 'berries-hyper-chesto-berry-2652',
    index: 2652,
    category: 'berries',
    name: { en: 'Hyper Chesto Berry', pt: 'Hyper Chesto Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'chesto-berry',
  },
  {
    id: 'berries-hyper-pecha-berry-2653',
    index: 2653,
    category: 'berries',
    name: { en: 'Hyper Pecha Berry', pt: 'Hyper Pecha Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'pecha-berry',
  },
  {
    id: 'berries-hyper-rawst-berry-2654',
    index: 2654,
    category: 'berries',
    name: { en: 'Hyper Rawst Berry', pt: 'Hyper Rawst Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'rawst-berry',
  },
  {
    id: 'berries-hyper-aspear-berry-2655',
    index: 2655,
    category: 'berries',
    name: { en: 'Hyper Aspear Berry', pt: 'Hyper Aspear Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'aspear-berry',
  },
  {
    id: 'berries-hyper-oran-berry-2656',
    index: 2656,
    category: 'berries',
    name: { en: 'Hyper Oran Berry', pt: 'Hyper Oran Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'oran-berry',
  },
  {
    id: 'berries-hyper-persim-berry-2657',
    index: 2657,
    category: 'berries',
    name: { en: 'Hyper Persim Berry', pt: 'Hyper Persim Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'persim-berry',
  },
  {
    id: 'berries-hyper-lum-berry-2658',
    index: 2658,
    category: 'berries',
    name: { en: 'Hyper Lum Berry', pt: 'Hyper Lum Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'lum-berry',
  },
  {
    id: 'berries-hyper-sitrus-berry-2659',
    index: 2659,
    category: 'berries',
    name: { en: 'Hyper Sitrus Berry', pt: 'Hyper Sitrus Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'sitrus-berry',
  },
  {
    id: 'berries-hyper-pomeg-berry-2660',
    index: 2660,
    category: 'berries',
    name: { en: 'Hyper Pomeg Berry', pt: 'Hyper Pomeg Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Defeat Courier in Hyperspace Battle Zone', pt: 'Defeat Courier in Hyperspace Battle Zone' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'pomeg-berry',
  },
  {
    id: 'berries-hyper-kelpsy-berry-2661',
    index: 2661,
    category: 'berries',
    name: { en: 'Hyper Kelpsy Berry', pt: 'Hyper Kelpsy Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Defeat Courier in Hyperspace Battle Zone', pt: 'Defeat Courier in Hyperspace Battle Zone' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'kelpsy-berry',
  },
  {
    id: 'berries-hyper-qualot-berry-2662',
    index: 2662,
    category: 'berries',
    name: { en: 'Hyper Qualot Berry', pt: 'Hyper Qualot Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Defeat Courier in Hyperspace Battle Zone', pt: 'Defeat Courier in Hyperspace Battle Zone' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'qualot-berry',
  },
  {
    id: 'berries-hyper-hondew-berry-2663',
    index: 2663,
    category: 'berries',
    name: { en: 'Hyper Hondew Berry', pt: 'Hyper Hondew Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Defeat Courier in Hyperspace Battle Zone', pt: 'Defeat Courier in Hyperspace Battle Zone' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'hondew-berry',
  },
  {
    id: 'berries-hyper-grepa-berry-2664',
    index: 2664,
    category: 'berries',
    name: { en: 'Hyper Grepa Berry', pt: 'Hyper Grepa Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Defeat Courier in Hyperspace Battle Zone · Side Mission 158: The Trainer Tipster · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Defeat Courier in Hyperspace Battle Zone · Side Mission 158: The Trainer Tipster · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Defeat Courier in Hyperspace Battle Zone', pt: 'Defeat Courier in Hyperspace Battle Zone' } },
      { kind: 'mission', label: { en: 'Side Mission 158: The Trainer Tipster', pt: 'Side Mission 158: The Trainer Tipster' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'grepa-berry',
  },
  {
    id: 'berries-hyper-tamato-berry-2665',
    index: 2665,
    category: 'berries',
    name: { en: 'Hyper Tamato Berry', pt: 'Hyper Tamato Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Hotel Z · Defeat Courier in Hyperspace Battle Zone · Side Mission 158: The Trainer Tipster · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Hotel Z · Defeat Courier in Hyperspace Battle Zone · Side Mission 158: The Trainer Tipster · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'shop', label: { en: 'Hotel Z', pt: 'Hotel Z' } },
      { kind: 'hyperspace', label: { en: 'Defeat Courier in Hyperspace Battle Zone', pt: 'Defeat Courier in Hyperspace Battle Zone' } },
      { kind: 'mission', label: { en: 'Side Mission 158: The Trainer Tipster', pt: 'Side Mission 158: The Trainer Tipster' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'tamato-berry',
  },
  {
    id: 'berries-hyper-occa-berry-2666',
    index: 2666,
    category: 'berries',
    name: { en: 'Hyper Occa Berry', pt: 'Hyper Occa Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Defeat Courier in Hyperspace Battle Zone · Side Mission 158: The Trainer Tipster · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Defeat Courier in Hyperspace Battle Zone · Side Mission 158: The Trainer Tipster · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Defeat Courier in Hyperspace Battle Zone', pt: 'Defeat Courier in Hyperspace Battle Zone' } },
      { kind: 'mission', label: { en: 'Side Mission 158: The Trainer Tipster', pt: 'Side Mission 158: The Trainer Tipster' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'occa-berry',
  },
  {
    id: 'berries-hyper-passho-berry-2667',
    index: 2667,
    category: 'berries',
    name: { en: 'Hyper Passho Berry', pt: 'Hyper Passho Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Defeat Courier in Hyperspace Battle Zone', pt: 'Defeat Courier in Hyperspace Battle Zone' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'passho-berry',
  },
  {
    id: 'berries-hyper-wacan-berry-2668',
    index: 2668,
    category: 'berries',
    name: { en: 'Hyper Wacan Berry', pt: 'Hyper Wacan Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Defeat Courier in Hyperspace Battle Zone', pt: 'Defeat Courier in Hyperspace Battle Zone' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'wacan-berry',
  },
  {
    id: 'berries-hyper-rindo-berry-2669',
    index: 2669,
    category: 'berries',
    name: { en: 'Hyper Rindo Berry', pt: 'Hyper Rindo Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'rindo-berry',
  },
  {
    id: 'berries-hyper-yache-berry-2670',
    index: 2670,
    category: 'berries',
    name: { en: 'Hyper Yache Berry', pt: 'Hyper Yache Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'yache-berry',
  },
  {
    id: 'berries-hyper-chople-berry-2671',
    index: 2671,
    category: 'berries',
    name: { en: 'Hyper Chople Berry', pt: 'Hyper Chople Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'chople-berry',
  },
  {
    id: 'berries-hyper-kebia-berry-2672',
    index: 2672,
    category: 'berries',
    name: { en: 'Hyper Kebia Berry', pt: 'Hyper Kebia Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'kebia-berry',
  },
  {
    id: 'berries-hyper-shuca-berry-2673',
    index: 2673,
    category: 'berries',
    name: { en: 'Hyper Shuca Berry', pt: 'Hyper Shuca Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'shuca-berry',
  },
  {
    id: 'berries-hyper-coba-berry-2674',
    index: 2674,
    category: 'berries',
    name: { en: 'Hyper Coba Berry', pt: 'Hyper Coba Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Defeat Courier in Hyperspace Battle Zone · Side Mission 188: Start Special Scanning · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Defeat Courier in Hyperspace Battle Zone · Side Mission 188: Start Special Scanning · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Defeat Courier in Hyperspace Battle Zone', pt: 'Defeat Courier in Hyperspace Battle Zone' } },
      { kind: 'mission', label: { en: 'Side Mission 188: Start Special Scanning', pt: 'Side Mission 188: Start Special Scanning' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'coba-berry',
  },
  {
    id: 'berries-hyper-payapa-berry-2675',
    index: 2675,
    category: 'berries',
    name: { en: 'Hyper Payapa Berry', pt: 'Hyper Payapa Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Defeat Courier in Hyperspace Battle Zone', pt: 'Defeat Courier in Hyperspace Battle Zone' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'payapa-berry',
  },
  {
    id: 'berries-hyper-tanga-berry-2676',
    index: 2676,
    category: 'berries',
    name: { en: 'Hyper Tanga Berry', pt: 'Hyper Tanga Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Defeat Courier in Hyperspace Battle Zone', pt: 'Defeat Courier in Hyperspace Battle Zone' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'tanga-berry',
  },
  {
    id: 'berries-hyper-charti-berry-2677',
    index: 2677,
    category: 'berries',
    name: { en: 'Hyper Charti Berry', pt: 'Hyper Charti Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Defeat Courier in Hyperspace Battle Zone · Side Mission 188: Start Special Scanning · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Defeat Courier in Hyperspace Battle Zone · Side Mission 188: Start Special Scanning · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Defeat Courier in Hyperspace Battle Zone', pt: 'Defeat Courier in Hyperspace Battle Zone' } },
      { kind: 'mission', label: { en: 'Side Mission 188: Start Special Scanning', pt: 'Side Mission 188: Start Special Scanning' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'charti-berry',
  },
  {
    id: 'berries-hyper-kasib-berry-2678',
    index: 2678,
    category: 'berries',
    name: { en: 'Hyper Kasib Berry', pt: 'Hyper Kasib Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Defeat Courier in Hyperspace Battle Zone · Side Mission 188: Start Special Scanning · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Defeat Courier in Hyperspace Battle Zone · Side Mission 188: Start Special Scanning · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Defeat Courier in Hyperspace Battle Zone', pt: 'Defeat Courier in Hyperspace Battle Zone' } },
      { kind: 'mission', label: { en: 'Side Mission 188: Start Special Scanning', pt: 'Side Mission 188: Start Special Scanning' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'kasib-berry',
  },
  {
    id: 'berries-hyper-haban-berry-2679',
    index: 2679,
    category: 'berries',
    name: { en: 'Hyper Haban Berry', pt: 'Hyper Haban Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Defeat Courier in Hyperspace Battle Zone', pt: 'Defeat Courier in Hyperspace Battle Zone' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'haban-berry',
  },
  {
    id: 'berries-hyper-colbur-berry-2680',
    index: 2680,
    category: 'berries',
    name: { en: 'Hyper Colbur Berry', pt: 'Hyper Colbur Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Defeat Courier in Hyperspace Battle Zone', pt: 'Defeat Courier in Hyperspace Battle Zone' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'colbur-berry',
  },
  {
    id: 'berries-hyper-babiri-berry-2681',
    index: 2681,
    category: 'berries',
    name: { en: 'Hyper Babiri Berry', pt: 'Hyper Babiri Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Defeat Courier in Hyperspace Battle Zone', pt: 'Defeat Courier in Hyperspace Battle Zone' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'babiri-berry',
  },
  {
    id: 'berries-hyper-chilan-berry-2682',
    index: 2682,
    category: 'berries',
    name: { en: 'Hyper Chilan Berry', pt: 'Hyper Chilan Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Defeat Courier in Hyperspace Battle Zone', pt: 'Defeat Courier in Hyperspace Battle Zone' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'chilan-berry',
  },
  {
    id: 'berries-hyper-roseli-berry-2683',
    index: 2683,
    category: 'berries',
    name: { en: 'Hyper Roseli Berry', pt: 'Hyper Roseli Berry' },
    description: { en: 'Berry used in battle or to raise friendship.', pt: 'Berry usada em batalha ou para aumentar a amizade.' },
    source: { en: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls', pt: 'Defeat Courier in Hyperspace Battle Zone · Hyperspace floating Poké Balls · Hyperspace Gold Bonus Poké Balls' },
    sources: [
      { kind: 'hyperspace', label: { en: 'Defeat Courier in Hyperspace Battle Zone', pt: 'Defeat Courier in Hyperspace Battle Zone' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace floating Poké Balls', pt: 'Hyperspace floating Poké Balls' } },
      { kind: 'hyperspace', label: { en: 'Hyperspace Gold Bonus Poké Balls', pt: 'Hyperspace Gold Bonus Poké Balls' } }
    ],
    sprite: 'roseli-berry',
  },
  {
    id: 'medicine-canari-bread-2684',
    index: 2684,
    category: 'medicine',
    name: { en: 'Canari Bread', pt: 'Canari Bread' },
    description: { en: 'Restores HP or cures status conditions.', pt: 'Restaura PS ou cura condições de status.' },
    source: { en: 'Shop: Racine Construction', pt: 'Shop: Racine Construction' },
    sources: [
      { kind: 'shop', label: { en: 'Shop: Racine Construction', pt: 'Shop: Racine Construction' } }
    ],
    sprite: 'canari-bread',
  }
]

export function lzaItemsByCategory(category: LzaItemCategory | 'all') {
  if (category === 'all') return LZA_ITEMS
  return LZA_ITEMS.filter((i) => i.category === category)
}
