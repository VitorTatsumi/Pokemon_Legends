export type Localized = { en: string; pt: string }

export type MarketKind = 'balls' | 'general' | 'stones' | 'stalls'

export type MarketItem = {
  name: Localized
  price: number
  /** PokeAPI item sprite slug */
  sprite: string
  note?: Localized
}

export type Market = {
  id: number
  name: Localized
  kind: MarketKind
  description: Localized
  items: MarketItem[]
  /** Percent coordinates from Polygon interactive map. */
  map: { x: number; y: number }
  /** In-game exterior shot under /lza-markets/ */
  locationImageSrc?: string
}

const ITEM_SPRITE_BASE =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items'

export function marketItemSpriteUrl(sprite: string) {
  return `${ITEM_SPRITE_BASE}/${sprite}.png`
}

function item(
  en: string,
  pt: string,
  price: number,
  sprite: string,
  note?: Localized,
): MarketItem {
  return { name: { en, pt }, price, sprite, note }
}

const afterMission39: Localized = {
  en: 'After Main Mission 39',
  pt: 'Após a Missão principal 39',
}

const afterMission10: Localized = {
  en: 'After Main Mission 10',
  pt: 'Após a Missão principal 10',
}

const beforeWz8: Localized = {
  en: 'Available before Wild Zone 8 unlocks (Main Mission 10)',
  pt: 'Disponível antes da Wild Zone 8 liberar (Missão principal 10)',
}

const MINT = 20000

/** Mint sets sold at flower stalls (IGN / AllThings.How). */
const mintAtk = (): MarketItem[] => [
  item('Lonely Mint', 'Mint Lonely', MINT, 'x-attack'),
  item('Adamant Mint', 'Mint Adamant', MINT, 'x-attack'),
  item('Naughty Mint', 'Mint Naughty', MINT, 'x-attack'),
  item('Brave Mint', 'Mint Brave', MINT, 'x-attack'),
  item('Serious Mint', 'Mint Serious', MINT, 'x-speed'),
]

const mintDef = (): MarketItem[] => [
  item('Bold Mint', 'Mint Bold', MINT, 'x-defense'),
  item('Impish Mint', 'Mint Impish', MINT, 'x-defense'),
  item('Lax Mint', 'Mint Lax', MINT, 'x-defense'),
  item('Relaxed Mint', 'Mint Relaxed', MINT, 'x-defense'),
  item('Serious Mint', 'Mint Serious', MINT, 'x-speed'),
]

const mintSpa = (): MarketItem[] => [
  item('Modest Mint', 'Mint Modest', MINT, 'x-sp-atk'),
  item('Mild Mint', 'Mint Mild', MINT, 'x-sp-atk'),
  item('Rash Mint', 'Mint Rash', MINT, 'x-sp-atk'),
  item('Quiet Mint', 'Mint Quiet', MINT, 'x-sp-atk'),
  item('Serious Mint', 'Mint Serious', MINT, 'x-speed'),
]

const mintSpd = (): MarketItem[] => [
  item('Calm Mint', 'Mint Calm', MINT, 'x-sp-def'),
  item('Gentle Mint', 'Mint Gentle', MINT, 'x-sp-def'),
  item('Careful Mint', 'Mint Careful', MINT, 'x-sp-def'),
  item('Sassy Mint', 'Mint Sassy', MINT, 'x-sp-def'),
  item('Serious Mint', 'Mint Serious', MINT, 'x-speed'),
]

const mintSpe = (): MarketItem[] => [
  item('Timid Mint', 'Mint Timid', MINT, 'x-speed'),
  item('Hasty Mint', 'Mint Hasty', MINT, 'x-speed'),
  item('Jolly Mint', 'Mint Jolly', MINT, 'x-speed'),
  item('Naive Mint', 'Mint Naive', MINT, 'x-speed'),
  item('Serious Mint', 'Mint Serious', MINT, 'x-speed'),
]

const commonBerries = (): MarketItem[] => [
  item('Lumiose Galette', 'Galette de Lumiose', 350, 'lava-cookie'),
  item('Oran Berry', 'Berry Oran', 80, 'oran-berry'),
  item('Cheri Berry', 'Berry Cheri', 80, 'cheri-berry'),
  item('Chesto Berry', 'Berry Chesto', 80, 'chesto-berry'),
  item('Pecha Berry', 'Berry Pecha', 80, 'pecha-berry'),
  item('Rawst Berry', 'Berry Rawst', 80, 'rawst-berry'),
  item('Aspear Berry', 'Berry Aspear', 80, 'aspear-berry'),
  item('Persim Berry', 'Berry Persim', 80, 'persim-berry'),
  item('Kasib Berry', 'Berry Kasib', 200, 'kasib-berry'),
  item('Haban Berry', 'Berry Haban', 200, 'haban-berry'),
  item('Colbur Berry', 'Berry Colbur', 200, 'colbur-berry'),
  item('Babiri Berry', 'Berry Babiri', 200, 'babiri-berry'),
  item('Chilan Berry', 'Berry Chilan', 200, 'chilan-berry'),
  item('Roseli Berry', 'Berry Roseli', 200, 'roseli-berry'),
]

function dedupeItems(items: MarketItem[]): MarketItem[] {
  const seen = new Set<string>()
  return items.filter((entry) => {
    if (seen.has(entry.name.en)) return false
    seen.add(entry.name.en)
    return true
  })
}

/**
 * Specialty shops + street-stall plazas in Lumiose.
 * Stall plazas from IGN mint guide / PokeCoders berry merchants.
 * Specialty coords from Polygon interactive map.
 */
export const MARKETS: Market[] = [
  {
    id: 1,
    name: { en: 'Poké Ball Boutique', pt: 'Boutique de Poké Balls' },
    kind: 'balls',
    description: {
      en: 'Rouge Sector 3 / Autumnal Avenue — specialty Poké Balls near Quasartico Inc.',
      pt: 'Setor Rouge 3 / Autumnal Avenue — Poké Balls especiais perto da Quasartico Inc.',
    },
    map: { x: 29.61, y: 19.39 },
    locationImageSrc: '/lza-markets/poke-ball-boutique.png?v=1',
    items: [
      item('Premier Ball', 'Premier Ball', 200, 'premier-ball'),
      item('Heal Ball', 'Heal Ball', 300, 'heal-ball'),
      item('Net Ball', 'Net Ball', 1000, 'net-ball'),
      item('Nest Ball', 'Nest Ball', 1000, 'nest-ball'),
      item('Dive Ball', 'Dive Ball', 1000, 'dive-ball'),
      item('Dusk Ball', 'Dusk Ball', 1000, 'dusk-ball'),
      item('Timer Ball', 'Timer Ball', 1000, 'timer-ball'),
      item('Quick Ball', 'Quick Ball', 1000, 'quick-ball'),
      item('Repeat Ball', 'Repeat Ball', 1000, 'repeat-ball'),
      item('Luxury Ball', 'Luxury Ball', 3000, 'luxury-ball'),
    ],
  },
  {
    id: 2,
    name: { en: 'Stone Emporium', pt: 'Emporium de Pedras' },
    kind: 'stones',
    description: {
      en: 'Vernal Avenue (Vert) — Mega Stones, evolution stones, and fossils.',
      pt: 'Vernal Avenue (Vert) — Mega Stones, pedras de evolução e fósseis.',
    },
    map: { x: 48.83, y: 83.22 },
    locationImageSrc: '/lza-markets/stone-emporium.png?v=1',
    items: [
      item('Fire Stone', 'Pedra do Fogo', 3000, 'fire-stone'),
      item('Thunder Stone', 'Pedra do Trovão', 3000, 'thunder-stone'),
      item('Water Stone', 'Pedra da Água', 3000, 'water-stone'),
      item('Leaf Stone', 'Pedra da Folha', 3000, 'leaf-stone'),
      item('Ice Stone', 'Pedra do Gelo', 3000, 'ice-stone', afterMission39),
      item('Shiny Stone', 'Pedra Brilhante', 3000, 'shiny-stone', afterMission39),
      item('Dusk Stone', 'Pedra do Crepúsculo', 3000, 'dusk-stone', afterMission39),
      item('Dawn Stone', 'Pedra da Alvorada', 3000, 'dawn-stone', afterMission39),
      item('Sun Stone', 'Pedra do Sol', 3000, 'sun-stone', afterMission39),
      item('Moon Stone', 'Pedra da Lua', 3000, 'moon-stone', afterMission39),
      item('Jaw Fossil', 'Fóssil Mandíbula', 20000, 'jaw-fossil'),
      item('Sail Fossil', 'Fóssil Barbatana', 20000, 'sail-fossil'),
      item('Old Amber', 'Âmbar Velho', 30000, 'old-amber'),
      item('Medichamite', 'Medichamite', 30000, 'medichamite', afterMission10),
      item('Gengarite', 'Gengarite', 50000, 'gengarite', afterMission10),
      item('Abomasite', 'Abomasite', 50000, 'abomasite', afterMission10),
      item('Scizorite', 'Scizorite', 50000, 'scizorite', afterMission10),
      item('Garchompite', 'Garchompite', 70000, 'garchompite', afterMission10),
      item('Steelixite', 'Steelixite', 70000, 'steelixite', afterMission10),
      item('Kangaskhanite', 'Kangaskhanite', 70000, 'kangaskhanite', afterMission10),
      item('Charizardite X', 'Charizardite X', 100000, 'charizardite-x', afterMission10),
      item('Charizardite Y', 'Charizardite Y', 100000, 'charizardite-y', afterMission10),
      item('Blastoisinite', 'Blastoisinite', 100000, 'blastoisinite', afterMission10),
      item('Meganiumite', 'Meganiumite', 100000, 'key-stone', afterMission10),
      item('Emboarite', 'Emboarite', 100000, 'key-stone', afterMission10),
      item('Feraligite', 'Feraligite', 100000, 'key-stone', afterMission10),
    ],
  },
  {
    id: 3,
    name: { en: 'Rouge Sector 3 Market', pt: 'Mercado Setor Rouge 3' },
    kind: 'stalls',
    description: {
      en: 'Courtyard west of Wild Zone 3 (near Café Pokémon-Amie). Berry sellers + four mint stalls covering all nature sets.',
      pt: 'Pátio a oeste da Wild Zone 3 (perto do Café Pokémon-Amie). Vendedores de berries + quatro barracas de mints com todos os conjuntos.',
    },
    map: { x: 42.5, y: 28.5 },
    locationImageSrc: '/lza-markets/rouge-sector-3.png?v=1',
    items: dedupeItems([
      ...commonBerries(),
      ...mintAtk(),
      ...mintDef(),
      ...mintSpa(),
      ...mintSpd(),
    ]),
  },
  {
    id: 4,
    name: { en: 'Rouge Sector 6 Market', pt: 'Mercado Setor Rouge 6' },
    kind: 'stalls',
    description: {
      en: 'Alley NE of Wild Zone 3 / south of Wild Zone 4 (near Sushi High Roller). Berries + Attack and Sp. Atk mint stalls.',
      pt: 'Beco a nordeste da Wild Zone 3 / sul da Wild Zone 4 (perto do Sushi High Roller). Berries + barracas de mints de Ataque e Atq. Esp.',
    },
    map: { x: 54.5, y: 18.5 },
    locationImageSrc: '/lza-markets/rouge-sector-6.png?v=1',
    items: dedupeItems([...commonBerries(), ...mintAtk(), ...mintSpa()]),
  },
  {
    id: 5,
    name: { en: 'Vert Sector 6 Market', pt: 'Mercado Setor Vert 6' },
    kind: 'stalls',
    description: {
      en: 'East side near Wild Zone 11 — between Wild Zone 6 and Restaurant Le Nah. The Speed mint stall (Timid / Jolly / etc.).',
      pt: 'Leste perto da Wild Zone 11 — entre a Wild Zone 6 e o Restaurant Le Nah. Barraca de mints de Speed (Timid / Jolly / etc.).',
    },
    map: { x: 88.5, y: 61.5 },
    locationImageSrc: '/lza-markets/vert-sector-6.png?v=1',
    items: dedupeItems([...commonBerries(), ...mintSpe()]),
  },
  {
    id: 6,
    name: { en: 'Magenta Sector 6 Market', pt: 'Mercado Setor Magenta 6' },
    kind: 'stalls',
    description: {
      en: 'Courtyard southwest of Wild Zone 7 / north of Wild Zone 9. Berries + Defense and Sp. Def mint stalls.',
      pt: 'Pátio a sudoeste da Wild Zone 7 / norte da Wild Zone 9. Berries + barracas de mints de Defesa e Def. Esp.',
    },
    map: { x: 22.0, y: 49.5 },
    locationImageSrc: '/lza-markets/magenta-sector-6.png?v=1',
    items: dedupeItems([...commonBerries(), ...mintDef(), ...mintSpd()]),
  },
  {
    id: 7,
    name: { en: 'Jaune Plaza Market', pt: 'Mercado Praça Jaune' },
    kind: 'stalls',
    description: {
      en: 'Inside what becomes Wild Zone 8 (Jaune Plaza). Berry/mint stalls; mint vendors leave after the zone unlocks.',
      pt: 'Dentro do que vira a Wild Zone 8 (Praça Jaune). Barracas de berries/mints; os vendedores de mint saem após a zona liberar.',
    },
    map: { x: 71.8, y: 42.3 },
    locationImageSrc: '/lza-markets/jaune-plaza.png?v=1',
    items: dedupeItems([
      ...commonBerries().map((entry) => ({ ...entry, note: beforeWz8 })),
      ...mintAtk().map((entry) => ({ ...entry, note: beforeWz8 })),
      ...mintSpa().map((entry) => ({ ...entry, note: beforeWz8 })),
    ]),
  },
]
