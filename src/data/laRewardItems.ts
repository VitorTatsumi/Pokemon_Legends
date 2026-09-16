import { laItemSpriteUrl } from './laItemSprites'
import { spriteUrl } from './wildZones'
import type { RewardDisplay } from './rewardItems'

/**
 * English reward fragment (qty stripped) → LA item sprite slug.
 * Falls back to PokeAPI-style slug via laItemSpriteUrl.
 */
const ITEM_SLUGS: Record<string, string> = {
  // Balls
  'poké ball': 'poke-ball',
  'poke ball': 'poke-ball',
  'great ball': 'great-ball',
  'ultra ball': 'ultra-ball',
  'heavy ball': 'heavy-ball',
  'feather ball': 'feather-ball',
  'wing ball': 'wing-ball',
  'leaden ball': 'leaden-ball',
  'gigaton ball': 'gigaton-ball',
  'jet ball': 'jet-ball',
  'origin ball': 'origin-ball',

  // Medicine
  potion: 'potion',
  'super potion': 'super-potion',
  'hyper potion': 'hyper-potion',
  'max potion': 'max-potion',
  'full heal': 'full-heal',
  'full restore': 'full-restore',
  revive: 'revive',
  'max revive': 'max-revive',
  remedy: 'remedy',
  'fine remedy': 'fine-remedy',
  'superb remedy': 'superb-remedy',

  // Candies / grit
  'rare candy': 'rare-candy',
  'exp. candy s': 'exp-candy-s',
  'exp. candy m': 'exp-candy-m',
  'exp. candy l': 'exp-candy-l',
  'exp. candy xl': 'exp-candy-xl',
  'exp. candy': 'exp-candy-s',
  'grit dust': 'grit-dust',
  'grit gravel': 'grit-gravel',
  'grit pebble': 'grit-pebble',
  'grit rock': 'grit-rock',

  // Valuables
  stardust: 'stardust',
  'star piece': 'star-piece',
  'star pieces': 'star-piece',
  nugget: 'nugget',
  'crafting materials': 'tumblestone',
  'comet shard': 'comet-shard',
  'comet shards': 'comet-shard',

  // Berries
  'oran berry': 'oran-berry',
  'cheri berry': 'cheri-berry',
  'nanab berry': 'nanab-berry',
  'nanab berries': 'nanab-berry',
  'razz berry': 'razz-berry',
  'sitrus berry': 'sitrus-berry',
  'hopo berry': 'hopo-berry',
  'aguav berry': 'aguav-berry',
  'aguav berries': 'aguav-berry',
  apricorn: 'apricorn',
  tumblestone: 'tumblestone',
  'black tumblestone': 'black-tumblestone',
  'sky tumblestone': 'sky-tumblestone',
  'ball of mud': 'ball-of-mud',
  'caster fern': 'caster-fern',
  'griseous core': 'griseous-core',
  'sticky globs': 'sticky-glob',
  'unlock ress': 'grit-rock',
  'iron chunks': 'iron-chunk',
  'smoke bombs': 'smoke-bomb',

  // Cakes / food
  'mushroom cake': 'mushroom-cake',
  'mushroom cake recipe': 'mushroom-cake',
  'honey cake': 'honey-cake',
  'grain cake': 'grain-cake',
  'bean cake': 'bean-cake',
  'salt cake': 'salt-cake',
  'jubilife muffin': 'jubilife-muffin',
  'jubilife muffin recipe': 'jubilife-muffin',
  'swap snack': 'swap-snack',
  'swap snack recipe': 'swap-snack',
  'choice dumpling': 'choice-dumpling',
  'twice-spiced radish': 'sand-radish',
  'twice-spiced radish recipe': 'sand-radish',
  'candy truffle': 'swordcap',

  // Materials
  'dazzling honey': 'dazzling-honey',
  vivichoke: 'vivichoke',
  vivichokes: 'vivichoke',
  'iron chunk': 'iron-chunk',
  'sand radish': 'sand-radish',
  'sand radishes': 'sand-radish',
  "king's leaf": 'caster-fern',
  'sticky glob': 'sticky-glob',
  'sticky garb': 'sticky-glob',
  'smoke bomb': 'smoke-bomb',
  'smoke bombs': 'smoke-bomb',
  'scatter bang': 'scatter-bang',
  'peat block': 'peat-block',
  'black augurite': 'black-augurite',
  'linking cord': 'linking-cord',
  'seed of mastery': 'seed-of-mastery',
  'pokéshi doll': 'pokeshi-doll',
  'pokeshi doll': 'pokeshi-doll',

  // Aux
  'aux power': 'aux-power',
  'aux guard': 'aux-guard',
  'aux evasion': 'aux-evasion',
  'aux powerguard': 'aux-powerguard',

  // Stones / evolution
  'fire stone': 'fire-stone',
  'thunder stone': 'thunder-stone',
  'water stone': 'water-stone',
  'leaf stone': 'leaf-stone',
  'moon stone': 'moon-stone',
  'sun stone': 'sun-stone',
  'shiny stone': 'shiny-stone',
  'dusk stone': 'dusk-stone',
  'dawn stone': 'dawn-stone',
  'ice stone': 'ice-stone',
  'fire/thunder/water stone': 'fire-stone',

  // Mints / crystals
  'adamant mint': 'adamant-mint',
  'modest mint': 'modest-mint',
  'adamant crystal': 'adamant-crystal',
  'lustrous globe': 'lustrous-globe',

  // Key / recipes / unlocks
  'crafting kit': 'crafting-kit',
  'poké ball recipe': 'poke-ball-recipe',
  'poke ball recipe': 'poke-ball-recipe',
  'potion recipe': 'potion',
  pokedex: 'pokedex',
  'pokédex': 'pokedex',
  'survey corps uniform': 'crafting-kit',
  'new general store items': 'lost-satchel',
  'new clothing items': 'clothing',
  'new hairstyles': 'clothing',
  'new photo studio options': 'lost-satchel',
  'more farm fields': 'sand-radish',
  'bogbound camp': 'lost-satchel',
  'coastlands camp': 'lost-satchel',
  'mountain camp': 'lost-satchel',
  'icepeak camp': 'lost-satchel',
  'spiritomb encounter': 'odd-keystone',
  'arceus encounter': 'legend-plate',

  // Plates
  'mind plate': 'mind-plate',
  'insect plate': 'insect-plate',
  'earth plate': 'earth-plate',
  'meadow plate': 'meadow-plate',
  'splash plate': 'splash-plate',
  'flame plate': 'flame-plate',
  'zap plate': 'zap-plate',
  'icicle plate': 'icicle-plate',
  'iron plate': 'iron-plate',
  'toxic plate': 'toxic-plate',
  'pixie plate': 'pixie-plate',
  'dread plate': 'dread-plate',
  'fist plate': 'fist-plate',
  'sky plate': 'sky-plate',
  'draco plate': 'draco-plate',
  'spooky plate': 'spooky-plate',
  'stone plate': 'stone-plate',
  'blank plate': 'blank-plate',
  'legend plate': 'legend-plate',
}

const POKEMON_DEX: Record<string, number> = {
  spiritomb: 442,
  arceus: 493,
}

function normalizeBase(raw: string): string {
  return raw
    .replace(/[×x]\s*\d+/gi, '')
    .replace(/₽[\d.,\s]*/g, '')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()
}

function resolveSprite(baseEn: string): string | null {
  const key = baseEn.toLowerCase().trim()
  if (!key || key === '—' || key === '-' || key === 'n/a') return null

  if (POKEMON_DEX[key] != null) {
    return spriteUrl(POKEMON_DEX[key])
  }

  if (key.includes('/') && !ITEM_SLUGS[key]) {
    const first = key
      .split('/')
      .map((s) => s.trim())
      .find((s) => ITEM_SLUGS[s] || ITEM_SLUGS[`${s} stone`])
    if (first) {
      const slug = ITEM_SLUGS[first] ?? ITEM_SLUGS[`${first} stone`]
      if (slug) return laItemSpriteUrl(slug)
    }
  }

  const slug = ITEM_SLUGS[key]
  if (slug) return laItemSpriteUrl(slug)

  // Heuristic: turn "Foo Bar" into foo-bar for Serebii legends set
  if (/^[a-z0-9]+(?: [a-z0-9'.-]+)+$/i.test(key) && !key.includes('unlock') && !key.includes('new ')) {
    return laItemSpriteUrl(key.replace(/['.]/g, '').replace(/\s+/g, '-'))
  }

  return null
}

/** Split bilingual LA reward strings (· or /) into rows with Hisui item sprites. */
export function parseLaMissionRewards(
  en: string,
  pt: string,
  locale: 'en' | 'pt',
): RewardDisplay[] {
  const split = (s: string) =>
    s
      .split(/\s*[·/]\s*/)
      .map((part) => part.trim())
      .filter((part) => part && part !== '—' && part !== '-')

  const enParts = split(en)
  const ptParts = split(pt)

  if (enParts.length === 0) return []

  return enParts.map((enPart, i) => {
    const label = locale === 'pt' ? (ptParts[i] ?? enPart) : enPart
    const isMoney = /₽/.test(enPart)
    const base = normalizeBase(enPart)

    return {
      key: `${enPart}-${i}`,
      label,
      spriteUrl: isMoney
        ? laItemSpriteUrl('nugget')
        : resolveSprite(base),
    }
  })
}
