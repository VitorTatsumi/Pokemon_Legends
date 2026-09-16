import { spriteUrl } from './wildZones'

const ITEM_BASE =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items'

/** English reward fragment (without qty) → PokeAPI item slug */
const ITEM_SLUGS: Record<string, string> = {
  'fresh water': 'fresh-water',
  'poké ball': 'poke-ball',
  'poke ball': 'poke-ball',
  potion: 'potion',
  revive: 'revive',
  'soda pop': 'soda-pop',
  lemonade: 'lemonade',
  nugget: 'nugget',
  'rare candy': 'rare-candy',
  'miracle seed': 'miracle-seed',
  'silver powder': 'silver-powder',
  'whipped dream': 'whipped-dream',
  'super potion': 'super-potion',
  'nest ball': 'nest-ball',
  'net ball': 'net-ball',
  'dusk ball': 'dusk-ball',
  'dive ball': 'dive-ball',
  'ultra ball': 'ultra-ball',
  'repeat ball': 'repeat-ball',
  'quick ball': 'quick-ball',
  'luxury balls': 'luxury-ball',
  'luxury ball': 'luxury-ball',
  sachet: 'sachet',
  pecha: 'pecha-berry',
  cheri: 'cheri-berry',
  persim: 'persim-berry',
  oran: 'oran-berry',
  sitrus: 'sitrus-berry',
  hondew: 'hondew-berry',
  rindo: 'rindo-berry',
  coba: 'coba-berry',
  wacan: 'wacan-berry',
  haban: 'haban-berry',
  kasib: 'kasib-berry',
  babiri: 'babiri-berry',
  chilan: 'chilan-berry',
  kelpsy: 'kelpsy-berry',
  qualot: 'qualot-berry',
  grepa: 'grepa-berry',
  pomeg: 'pomeg-berry',
  tamato: 'tamato-berry',
  'exp. candy': 'rare-candy',
  'exp. candy xs': 'rare-candy',
  'exp. candy s': 'rare-candy',
  'exp. candy m': 'rare-candy',
  'exp. candy l': 'rare-candy',
  'exp. candy xl': 'rare-candy',
  'pretty feather': 'pretty-wing',
  'swift feather': 'health-wing',
  'fire stone': 'fire-stone',
  'thunder stone': 'thunder-stone',
  'leaf stone': 'leaf-stone',
  'sun stone': 'sun-stone',
  'dusk stone': 'dusk-stone',
  'dawn stone': 'dawn-stone',
  'ice stone': 'ice-stone',
  'hard stone': 'hard-stone',
  'soft sand': 'soft-sand',
  charcoal: 'charcoal',
  'mystic water': 'mystic-water',
  magnet: 'magnet',
  'never-melt ice': 'never-melt-ice',
  'metal coat': 'metal-coat',
  'dragon fang': 'dragon-fang',
  'black belt': 'black-belt',
  'black glasses': 'black-glasses',
  'sharp beak': 'sharp-beak',
  'poison barb': 'poison-barb',
  'twisted spoon': 'twisted-spoon',
  'silk scarf': 'silk-scarf',
  'spell tag': 'spell-tag',
  'fairy feather': 'fairy-gem',
  leftovers: 'leftovers',
  'shell bell': 'shell-bell',
  'soothe bell': 'soothe-bell',
  'focus sash': 'focus-sash',
  'focus band': 'focus-band',
  'assault vest': 'assault-vest',
  'expert belt': 'expert-belt',
  'life orb': 'life-orb',
  'scope lens': 'scope-lens',
  'muscle band': 'muscle-band',
  'wise glasses': 'wise-glasses',
  "king's rock": 'kings-rock',
  eviolite: 'eviolite',
  'rocky helmet': 'rocky-helmet',
  'weakness policy': 'weakness-policy',
  'light ball': 'light-ball',
  'lucky egg': 'lucky-egg',
  'big root': 'big-root',
  'white herb': 'white-herb',
  pearl: 'pearl',
  'big pearl': 'big-pearl',
  'bottle cap': 'bottle-cap',
  'gold bottle cap': 'gold-bottle-cap',
  'full heal': 'full-heal',
  'full restore': 'full-restore',
  'max revive': 'max-revive',
  'hyper potion': 'hyper-potion',
  'ice heal': 'ice-heal',
  'moomoo milk': 'moomoo-milk',
  'lumiose galette': 'lava-cookie',
  'normal gem': 'normal-gem',
  'mega shard': 'key-stone',
  'mega shards': 'key-stone',
  'seed of mastery': 'ability-capsule',
  'power bracer': 'power-bracer',
  'power belt': 'power-belt',
  'power lens': 'power-lens',
  'power band': 'power-band',
  'power anklet': 'power-anklet',
  'power weight': 'power-weight',
  'hp up': 'hp-up',
  protein: 'protein',
  iron: 'iron',
  calcium: 'calcium',
  zinc: 'zinc',
  carbos: 'carbos',
  'adamant mint': 'x-attack',
  'modest mint': 'x-sp-atk',
  'quiet mint': 'x-sp-def',
  'serious mint': 'x-speed',
  'lax mint': 'x-defense',
  'galarica cuff': 'ability-capsule',
  'galarica wreath': 'ability-capsule',
  'tm031 reflect': 'tm-psychic',
  'tm043 fly': 'tm-flying',
  'tm045 knock off': 'tm-dark',
  'tm047 agility': 'tm-psychic',
  'tm048 self-destruct': 'tm-normal',
  'tm057 will-o-wisp': 'tm-fire',
  'tm085 substitute': 'tm-normal',
  'tm088 spikes': 'tm-ground',
  'tm094 whirlwind': 'tm-normal',
  'tm099 metronome': 'tm-normal',
  'hair colors': 'pink-scarf',
  'hair-color rewards': 'pink-scarf',
  'color contacts': 'red-scarf',
  contacts: 'red-scarf',
  'furfrou trims': 'silk-scarf',
  trims: 'silk-scarf',
}

const POKEMON_DEX: Record<string, number> = {
  chespin: 650,
  fennekin: 653,
  froakie: 656,
  riolu: 447,
  'shiny mareep': 179,
  'galarian slowpoke': 79,
  'galarian stunfisk': 618,
  'alolan raichu': 26,
  bulbasaur: 1,
  charmander: 4,
  squirtle: 7,
  tyrunt: 696,
  amaura: 698,
}

export type RewardDisplay = {
  key: string
  label: string
  spriteUrl: string | null
}

function normalizeBase(raw: string): string {
  return raw
    .replace(/[×x]\s*\d+/gi, '')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()
}

function resolveSprite(baseEn: string): string | null {
  const key = baseEn.toLowerCase().trim()
  if (!key) return null

  if (POKEMON_DEX[key] != null) {
    return spriteUrl(POKEMON_DEX[key], key.includes('shiny'))
  }

  if (key.includes(' or ') || key.includes(',')) {
    const first = key
      .split(/,| or /i)
      .map((s) => s.trim())
      .find((s) => POKEMON_DEX[s])
    if (first) return spriteUrl(POKEMON_DEX[first])
  }

  const slug = ITEM_SLUGS[key]
  if (slug) return `${ITEM_BASE}/${slug}.png`

  return null
}

/** Split bilingual reward strings into display rows with sprites. */
export function parseMissionRewards(
  en: string,
  pt: string,
  locale: 'en' | 'pt',
): RewardDisplay[] {
  const enParts = en.split('/').map((s) => s.trim()).filter(Boolean)
  const ptParts = pt.split('/').map((s) => s.trim()).filter(Boolean)

  return enParts.map((enPart, i) => {
    const label = locale === 'pt' ? (ptParts[i] ?? enPart) : enPart
    const isMoney = /₽/.test(enPart)
    const base = normalizeBase(enPart)

    return {
      key: `${enPart}-${i}`,
      label,
      spriteUrl: isMoney ? `${ITEM_BASE}/amulet-coin.png` : resolveSprite(base),
    }
  })
}
