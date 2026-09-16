/**
 * Build src/data/lzaItems.ts from Bulbapedia pocket list + IGN item notes.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { LZA_MEGA_SOURCES } from './lza-mega-sources.mjs'
import { LZA_CURATED_SOURCES } from './lza-curated-sources.mjs'
import { loadSerebiiItemLocations } from './lza-serebii-locations.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const tools = path.join(
  process.env.USERPROFILE || process.env.HOME || '',
  '.cursor/projects/c-Users-vrosa-Desktop-LZA-Guide-Master/agent-tools',
)

const bulbPath = path.join(tools, '8dc2cb51-1869-4fea-b773-df2a7ff171e4.txt')
const ignPath = path.join(tools, '78dc4c97-3490-44ce-a265-6b472c49f3aa.txt')

/** Shop buy prices (Pokédollars) from LZA markets / Stone Emporium / IGN. */
const SHOP_BUY = {
  'Poké Ball': 200,
  'Great Ball': 600,
  'Ultra Ball': 800,
  Potion: 200,
  'Super Potion': 700,
  'Hyper Potion': 1500,
  'Max Potion': 2500,
  'Full Restore': 3000,
  Antidote: 200,
  'Burn Heal': 300,
  'Ice Heal': 100,
  Awakening: 100,
  'Paralyze Heal': 300,
  'Full Heal': 400,
  Revive: 2000,
  'Max Revive': 4000,
  Ether: 1200,
  Elixir: 3000,
  'Max Ether': 2000,
  'Max Elixir': 4500,
  'HP Up': 10000,
  Protein: 10000,
  Iron: 10000,
  Calcium: 10000,
  Zinc: 10000,
  Carbos: 10000,
  'PP Up': 10000,
  'Rare Candy': 10000,
  'Fire Stone': 3000,
  'Water Stone': 3000,
  'Thunder Stone': 3000,
  'Leaf Stone': 3000,
  'Moon Stone': 3000,
  'Sun Stone': 3000,
  'Shiny Stone': 3000,
  'Dusk Stone': 3000,
  'Dawn Stone': 3000,
  'Ice Stone': 3000,
  'Oval Stone': 2000,
  Everstone: 3000,
  'Linking Cord': 3000,
  'Metal Coat': 3000,
  "King's Rock": 3000,
  'Dragon Scale': 3000,
  Protector: 3000,
  Electirizer: 3000,
  Magmarizer: 3000,
  Upgrade: 3000,
  'Dubious Disc': 3000,
  'Reaper Cloth': 3000,
  'Razor Claw': 3000,
  'Razor Fang': 3000,
  'Prism Scale': 3000,
  Sachet: 3000,
  'Whipped Dream': 3000,
  'X Attack': 1000,
  'X Defense': 2000,
  'X Sp. Atk': 1000,
  'X Sp. Def': 2000,
  'X Speed': 1000,
  'X Accuracy': 1000,
  'Dire Hit': 1000,
  'Guard Spec.': 1500,
  Repel: 400,
  'Super Repel': 700,
  'Max Repel': 900,
  'Escape Rope': 1000,
}

function parseIgnPrice(notes) {
  if (!notes) return null
  const mega = notes.match(/([\d,]+)\s*Mega\s*Shards?/i)
  if (mega) {
    return { amount: Number(mega[1].replace(/,/g, '')), currency: 'megaShards', kind: 'buy' }
  }
  const poke = notes.match(/([\d,]+)\s*Pok[eé]dollars?/i)
  if (poke) {
    return { amount: Number(poke[1].replace(/,/g, '')), currency: 'pokedollars', kind: 'buy' }
  }
  const sell = notes.match(/Sells?\s+for\s+([\d,]+)/i)
  if (sell) {
    return { amount: Number(sell[1].replace(/,/g, '')), currency: 'pokedollars', kind: 'sell' }
  }
  return null
}

function classifySource(text) {
  const t = (text || '').toLowerCase()
  if (/^field loot/i.test(t)) return 'field'
  if (/mystery\s*gift|presente\s*misterioso/.test(t)) return 'mysteryGift'
  if (/ranked\s*battle|ranked\s*reward|battle\s*club\s*ranked|rank\s*[a-z]\+/.test(t)) return 'ranked'
  if (/hyperspace/.test(t)) return 'hyperspace'
  if (/mega\s*dimension|\bdlc\b/.test(t)) return 'dlc'
  if (/\bevent\b|time[- ]limited/.test(t)) return 'event'
  if (/side mission|main mission|mission \d|rogue mega/.test(t)) return 'mission'
  if (/research|reward level|\blab\b|mable/.test(t)) return 'research'
  if (
    /shop|shops|stone emporium|quasartico|hotel z|pok[eé]\s*mart|buy|purchase|emporium|racine/.test(
      t,
    )
  )
    return 'shop'
  if (/^loot$|district|sector|plaza|park|field|found|wild|overworld/.test(t)) return 'field'
  if (/story|postgame|main story/.test(t)) return 'story'
  return 'other'
}

function cleanLoc(s) {
  return String(s || '')
    .replace(/\[Tap to Reveal\]/gi, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s*[·|]\s*$/g, '')
    .trim()
}

/** Split obtain text into discrete list entries (· | ; and commas), keeping (...) intact. */
function splitSources(raw) {
  const cleaned = cleanLoc(raw)
  if (!cleaned) return []

  const held = []
  const protectedText = cleaned.replace(/\([^)]*\)/g, (m) => {
    held.push(m)
    return `\0${held.length - 1}\0`
  })

  return protectedText
    .split(/\s*[·|]\s*|\s*;\s*|,\s+/)
    .map((x) =>
      x
        .replace(/\0(\d+)\0/g, (_, i) => held[Number(i)])
        .trim(),
    )
    .filter(Boolean)
    .filter((x) => !/^(n\/a|tba|unknown|-)$/i.test(x))
    // Drop TM effect notes that slipped in as "sources"
    .filter((x) => !/^(may |raises |lowers |restores |cures |heals )/i.test(x))
}

const KIND_LABEL = {
  shop: { en: 'Shop', pt: 'Loja' },
  field: { en: 'Field find', pt: 'Encontrado no campo' },
  mission: { en: 'Mission', pt: 'Missão' },
  story: { en: 'Story', pt: 'História' },
  research: { en: 'Research', pt: 'Pesquisa' },
  ranked: { en: 'Ranked Battles', pt: 'Batalhas Ranqueadas' },
  mysteryGift: { en: 'Mystery Gift', pt: 'Presente Misterioso' },
  event: { en: 'Limited event', pt: 'Evento limitado' },
  hyperspace: { en: 'Hyperspace', pt: 'Hiperespaço' },
  dlc: { en: 'Mega Dimension DLC', pt: 'DLC Mega Dimension' },
  other: { en: 'Other', pt: 'Outro' },
}

const POCKET_TO_CAT = {
  'Poké Balls pocket': 'balls',
  'Medicines pocket': 'medicine',
  'Berries pocket': 'berries',
  'TMs pocket': 'tms',
  'Treasures pocket': 'treasures',
  'Other Items pocket': 'other',
  'Key Items pocket': 'key',
  'Mega Stones pocket': 'mega',
}

/** Common EN → PT item names */
const PT_NAMES = {
  'Master Ball': 'Master Ball',
  'Ultra Ball': 'Ultra Ball',
  'Great Ball': 'Great Ball',
  'Poké Ball': 'Poké Ball',
  Potion: 'Poção',
  'Super Potion': 'Super Poção',
  'Hyper Potion': 'Hiper Poção',
  'Max Potion': 'Poção Máxima',
  'Full Restore': 'Restaurar Tudo',
  Revive: 'Reanimador',
  'Max Revive': 'Reanimador Máximo',
  'Fresh Water': 'Água Fresca',
  'Soda Pop': 'Refrigerante',
  Lemonade: 'Limonada',
  'Moomoo Milk': 'Leite Moomoo',
  Antidote: 'Antídoto',
  'Burn Heal': 'Antiquemadura',
  'Ice Heal': 'Antigelante',
  Awakening: 'Acordar',
  'Paralyze Heal': 'Antiparalisia',
  'Full Heal': 'Cura Total',
  'Rare Candy': 'Doce Raro',
  Nugget: 'Pepita',
  'Big Nugget': 'Pepita Grande',
  'Tiny Mushroom': 'Cogumelo Pequeno',
  Pearl: 'Pérola',
  'Big Pearl': 'Pérola Grande',
  'Fire Stone': 'Pedra de Fogo',
  'Water Stone': 'Pedra da Água',
  'Thunder Stone': 'Pedra do Trovão',
  'Leaf Stone': 'Pedra da Folha',
  'Moon Stone': 'Pedra da Lua',
  'Sun Stone': 'Pedra do Sol',
  'Dusk Stone': 'Pedra do Crepúsculo',
  'Dawn Stone': 'Pedra da Alvorada',
  'Shiny Stone': 'Pedra Brilhante',
  'Ice Stone': 'Pedra do Gelo',
  'King\'s Rock': 'Rocha do Rei',
  'Metal Coat': 'Revestimento Metálico',
  'Whipped Dream': 'Doce de Sonho',
  Sachet: 'Sachê',
  Leftovers: 'Sobras',
  'Lucky Egg': 'Ovo da Sorte',
  'Shiny Charm': 'Amuleto Brilhante',
  'Colorful Screw': 'Parafuso Colorido',
  'Mega Shard': 'Fragmento Mega',
  'Lumiose Galette': 'Galette de Lumiose',
  'Exp. Candy XS': 'Doce Exp. XS',
  'Exp. Candy S': 'Doce Exp. S',
  'Exp. Candy M': 'Doce Exp. M',
  'Exp. Candy L': 'Doce Exp. L',
  'Exp. Candy XL': 'Doce Exp. XL',
}

const SPRITE_OVERRIDES = {
  'never-melt-ice': 'never-melt-ice',
  'king-s-rock': 'kings-rock',
  "king's-rock": 'kings-rock',
  'exp-candy-xs': 'rare-candy',
  'exp-candy-s': 'rare-candy',
  'exp-candy-m': 'rare-candy',
  'exp-candy-l': 'rare-candy',
  'exp-candy-xl': 'rare-candy',
  'health-feather': 'health-wing',
  'muscle-feather': 'muscle-wing',
  'resist-feather': 'resist-wing',
  'genius-feather': 'genius-wing',
  'clever-feather': 'clever-wing',
  'swift-feather': 'swift-wing',
  'pretty-feather': 'pretty-wing',
  'fairy-feather': 'fairy-feather',
  'elevator-key': 'basement-key',
}

function toSlug(name) {
  return name
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’]/g, '')
    .replace(/\./g, '')
    .replace(/é/g, 'e')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function tmSpriteSlug(name) {
  const num = name.replace(/\D/g, '')
  // Serebii itemdex uses tm001 / tm107 (no hyphen).
  return `tm${num.padStart(3, '0')}`
}

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function parseBulb() {
  const text = fs.readFileSync(bulbPath, 'utf8')
  const items = []
  const seen = new Set()
  for (const m of text.matchAll(
    /\|\s*(\d+)\s*\|\s*0x[0-9A-Fa-f]+\s*\|\s*([^|]+?)\s*\|\s*([^|\n]+?)\s*\|/g,
  )) {
    const index = +m[1]
    let name = m[2].trim()
    const pocket = m[3].trim()
    let cat = POCKET_TO_CAT[pocket]
    if (!cat) continue

    // Bulbapedia duplicate row reused index 2167 for TM107 + TM108.
    const tmMatch = name.match(/^TM\s*(\d+)$/i)
    if (tmMatch) {
      cat = 'tms'
      name = `TM${tmMatch[1].padStart(3, '0')}`
    }

    const key = name.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)

    const slug = toSlug(name)
    let spriteSlug = slug
    if (tmMatch) {
      spriteSlug = tmSpriteSlug(name)
    } else if (slug.startsWith('hyper-')) {
      const base = slug.replace(/^hyper-/, '')
      spriteSlug = SPRITE_OVERRIDES[base] || base
    } else {
      spriteSlug = SPRITE_OVERRIDES[slug] || slug
    }
    items.push({
      // Index keeps ids unique even when sprite slugs collide (e.g. Exp. Candies).
      id: `${cat}-${slug}-${index}`,
      index,
      nameEn: name,
      category: cat,
      sprite: spriteSlug,
    })
  }
  return items
}

function parseIgnTables(text) {
  /** @type {Map<string, {desc?: string, loc?: string, notes?: string}>} */
  const map = new Map()
  const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()

  // Generic item rows: | Item | Description | Location | Notes |
  for (const m of text.matchAll(
    /\|\s*([^|\n]+?)\s*\|\s*([^|\n]*?)\s*\|\s*([^|\n]*?)\s*\|\s*([^|\n]*?)\s*\|/g,
  )) {
    const a = m[1].trim()
    const b = m[2].trim()
    const c = m[3].trim()
    const d = m[4].trim()
    if (!a || /^(Item|TM|Mega Stone|-)$/i.test(a)) continue
    if (/^-+$/.test(a)) continue
    // TM rows: | 001 Headbutt | desc | loc | notes |
    const tm = a.match(/^(\d{3})\s+(.+)$/)
    if (tm) {
      map.set(norm(`TM${tm[1]}`), {
        desc: `${tm[2]} — ${b}`,
        loc: c,
        notes: d,
        move: tm[2],
      })
      continue
    }
    map.set(norm(a), { desc: b, loc: c, notes: d })
  }
  return map
}

const serebiiLocs = loadSerebiiItemLocations()
console.log('Serebii locations loaded:', serebiiLocs.size)

const items = parseBulb()
const ign = parseIgnTables(fs.readFileSync(ignPath, 'utf8'))
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()

function applySources(item, labels, primaryKind) {
  // Labels from curated/Serebii are already discrete — do not re-split on " · ".
  const list = (Array.isArray(labels) ? labels : [labels])
    .map((s) => String(s).trim())
    .filter(Boolean)
  if (!list.length) return
  item.sources = list
  item.sourceEn = list.join(' · ')
  if (primaryKind) item.primaryKind = primaryKind
}

for (const item of items) {
  item.price = null
  item.sources = []

  if (item.category === 'tms' || /^TM\d+/i.test(item.nameEn)) {
    item.category = 'tms'
    const num = item.nameEn.replace(/\D/g, '').padStart(3, '0')
    const info = ign.get(norm(`TM${num}`)) || ign.get(norm(item.nameEn))
    if (info) {
      item.descriptionEn = info.desc || ''
      const loc = cleanLoc(info.loc)
      item.sources = splitSources(loc)
      item.sourceEn = item.sources.join(' · ')
      if (info.move) item.moveEn = info.move
      item.price = parseIgnPrice(info.notes)
    }
  } else {
    if (item.category === 'mega') {
      const mega = LZA_MEGA_SOURCES[item.nameEn]
      if (mega) {
        item.sources = [mega.loc]
        if (mega.alt) item.sources.push(mega.alt)
        item.sourceEn = item.sources.join(' · ')
        if (mega.price != null) {
          item.price = { amount: mega.price, currency: mega.currency, kind: 'buy' }
        }
        item.primaryKind = mega.kind
      }
    }

    const info = ign.get(norm(item.nameEn))
    if (info && !info.move) {
      if (!item.descriptionEn) item.descriptionEn = info.desc || ''
      if (!(item.category === 'mega' && item.sources.length)) {
        const loc = cleanLoc(info.loc)
        const notes = cleanLoc(info.notes)
        const noteBits = splitSources(notes).filter((s) => {
          const k = classifySource(s)
          return k !== 'other' || /shop|mission|loot|reward|research|mable/i.test(s)
        })
        const ignSources = [...splitSources(loc), ...noteBits].filter(
          (s) => !/tap to reveal/i.test(s),
        )
        if (ignSources.length) {
          item.sources = ignSources
          item.sourceEn = item.sources.join(' · ')
        }
      }
      if (!item.price) item.price = parseIgnPrice(info.notes)
    }
  }

  // Curated overrides always win (Master Ball, Shiny Charm, …)
  const curated = LZA_CURATED_SOURCES[item.nameEn]
  if (curated) {
    applySources(item, curated.sources, curated.kind)
  }

  // Fill gaps from Serebii when still empty (Tap-to-Reveal, missing IGN rows)
  if (!item.sources.length) {
    const ser = serebiiLocs.get(item.nameEn)
    if (ser?.length) applySources(item, ser, classifySource(ser[0]))
  }

  // Upgrade vague IGN-only blurbs when Serebii has richer data
  if (
    !curated &&
    item.category !== 'mega' &&
    item.sources.length &&
    item.sources.every((s) =>
      /^(loot|rewards?|pokemon centers?|pok[eé] ball boutique|shops?)$/i.test(s.trim()),
    )
  ) {
    const ser = serebiiLocs.get(item.nameEn)
    if (ser?.length) applySources(item, ser, classifySource(ser[0]))
  }

  if (!item.price && SHOP_BUY[item.nameEn] != null) {
    item.price = { amount: SHOP_BUY[item.nameEn], currency: 'pokedollars', kind: 'buy' }
  }
}

// Evolution stones category tweak: keep in other but mark group via description defaults
const DEFAULT_DESC = {
  balls: {
    en: 'Poké Ball used to catch wild Pokémon.',
    pt: 'Poké Ball usada para capturar Pokémon selvagens.',
  },
  medicine: {
    en: 'Restores HP or cures status conditions.',
    pt: 'Restaura PS ou cura condições de status.',
  },
  berries: {
    en: 'Berry used in battle or to raise friendship.',
    pt: 'Berry usada em batalha ou para aumentar a amizade.',
  },
  tms: {
    en: 'Reusable Technical Machine that teaches a move.',
    pt: 'MT reutilizável que ensina um golpe.',
  },
  treasures: {
    en: 'Valuable item that can be sold.',
    pt: 'Item valioso que pode ser vendido.',
  },
  other: {
    en: 'Held, evolution, vitamin, or utility item.',
    pt: 'Item segurado, de evolução, vitamina ou utilitário.',
  },
  key: {
    en: 'Important key item for story or side progress.',
    pt: 'Item chave importante para a história ou missões.',
  },
  mega: {
    en: 'Mega Stone that enables Mega Evolution.',
    pt: 'Mega Pedra que permite a Mega Evolução.',
  },
}

const DEFAULT_SOURCE = {
  en: 'Location not yet documented for Legends: Z-A.',
  pt: 'Local ainda não documentado em Legends: Z-A.',
}

function formatSources(it) {
  let raw = it.sources?.length ? [...it.sources] : []
  if (!raw.length && it.sourceEn) raw = splitSources(it.sourceEn)

  // Expand only IGN-style comma lists ("Berry Shops, Side Mission 45, Loot").
  // Never break "Shop: Quasartico" or mission titles that contain commas.
  raw = raw.flatMap((s) => {
    const text = String(s).trim()
    if (!text) return []
    if (/^(?:Side|Main) Mission\s+\d+/i.test(text)) return [text]
    if (/^(?:Shop|Field loot|Mable)/i.test(text)) return [text]
    if (/,\s*(?:Side Mission|Main Mission|Berry Shops?|Mint Shops?|\bLoot\b)\b/i.test(text)) {
      return text.split(/,\s*/).map((x) => x.trim()).filter(Boolean)
    }
    return [text]
  })

  if (!raw.length) {
    return {
      source: DEFAULT_SOURCE,
      sources: [
        {
          kind: 'other',
          label: DEFAULT_SOURCE,
        },
      ],
    }
  }
  const sources = raw.map((label, i) => {
    const kind = it.primaryKind && i === 0 ? it.primaryKind : classifySource(label)
    return {
      kind,
      label: { en: label, pt: label },
    }
  })
  return {
    source: { en: raw.join(' · '), pt: raw.join(' · ') },
    sources,
  }
}

function formatPrice(price) {
  if (!price) return ''
  return `    price: { amount: ${price.amount}, currency: '${price.currency}', kind: '${price.kind}' },\n`
}

function formatSourcesArr(sources) {
  const body = sources
    .map(
      (s) =>
        `      { kind: '${s.kind}', label: { en: '${esc(s.label.en)}', pt: '${esc(s.label.pt)}' } }`,
    )
    .join(',\n')
  return `    sources: [\n${body}\n    ],\n`
}

const lines = items.map((it) => {
  const ptName = PT_NAMES[it.nameEn] || it.nameEn
  const descEn = it.descriptionEn || DEFAULT_DESC[it.category].en
  const descPt = it.descriptionEn || DEFAULT_DESC[it.category].pt
  const { source, sources } = formatSources(it)
  const moveLine = it.moveEn
    ? `    move: { en: '${esc(it.moveEn)}', pt: '${esc(it.moveEn)}' },\n`
    : ''
  return `  {
    id: '${it.id}',
    index: ${it.index},
    category: '${it.category}',
    name: { en: '${esc(it.nameEn)}', pt: '${esc(ptName)}' },
    description: { en: '${esc(descEn)}', pt: '${esc(descPt)}' },
    source: { en: '${esc(source.en)}', pt: '${esc(source.pt)}' },
${formatSourcesArr(sources)}${formatPrice(it.price)}    sprite: '${esc(it.sprite)}',
${moveLine}  }`
})

const out = `import type { Localized } from './markets'

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
${lines.join(',\n')}
]

export function lzaItemsByCategory(category: LzaItemCategory | 'all') {
  if (category === 'all') return LZA_ITEMS
  return LZA_ITEMS.filter((i) => i.category === category)
}
`

fs.writeFileSync(path.join(root, 'src/data/lzaItems.ts'), out)
const counts = items.reduce((a, i) => {
  a[i.category] = (a[i.category] || 0) + 1
  return a
}, {})
const megaEvent = items.filter(
  (i) =>
    i.category === 'mega' &&
    (i.primaryKind === 'mysteryGift' ||
      i.primaryKind === 'ranked' ||
      i.primaryKind === 'event' ||
      i.primaryKind === 'dlc'),
)
const withPrice = items.filter((i) => i.price).length
console.log('Wrote lzaItems.ts', items.length, counts)
console.log('With price:', withPrice)
console.log(
  'Event/ranked/MG megas:',
  megaEvent.map((i) => i.nameEn).join(', '),
)
