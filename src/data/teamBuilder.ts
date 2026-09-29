import type { GameId } from './games'
import type { Localized } from './laCollectible'
import { fetchLaLearnset } from './laLearnsets'
import { LA_POKEDEX } from './laPokedex'
import { fetchLzaLearnset } from './lzaLearnsets'
import { LZA_POKEDEX } from './lzaPokedex'

export type TeamStatKey = 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe'

export type TeamStats = Record<TeamStatKey, number>

export type NatureId =
  | 'hardy'
  | 'lonely'
  | 'brave'
  | 'adamant'
  | 'naughty'
  | 'bold'
  | 'docile'
  | 'relaxed'
  | 'impish'
  | 'lax'
  | 'timid'
  | 'hasty'
  | 'serious'
  | 'jolly'
  | 'naive'
  | 'modest'
  | 'mild'
  | 'quiet'
  | 'bashful'
  | 'rash'
  | 'calm'
  | 'gentle'
  | 'sassy'
  | 'careful'
  | 'quirky'

export type TeamHeldItem = {
  id: string
  name: Localized
  /** PokeAPI item sprite slug */
  sprite: string
}

export type TeamMove = {
  moveId: number
  name: string
}

export type TeamLearnableMove = {
  moveId: number
  name: string
  kind: 'level' | 'tm' | 'reminder'
  level?: number
  tm?: string
  masterLevel?: number
  hisuiExclusive?: boolean
}

export type TeamMember = {
  slot: number
  dex: number | null
  name: string
  level: number
  nature: NatureId
  itemId: string | null
  /** Up to 4 selected moves from the game learnset. */
  moves: (TeamMove | null)[]
  /** Used by LZA (Gen 3+ formula). Ignored for LA calculation. */
  ivs: TeamStats
  /** Used by LZA (Gen 3+ formula). Ignored for LA calculation. */
  evs: TeamStats
  /** Used by Legends: Arceus Effort Levels (0–10). Ignored for LZA. */
  effortLevels: TeamStats
  /** Cached base stats from PokeAPI when the Pokémon is selected. */
  baseStats: TeamStats | null
}

export type TeamExport = {
  version: 1
  game: GameId
  name: string
  updatedAt: string
  members: TeamMember[]
}

export const TEAM_STAT_KEYS: TeamStatKey[] = ['hp', 'atk', 'def', 'spa', 'spd', 'spe']

export const TEAM_SIZE = 6
export const MOVE_SLOTS = 4
export const MAX_IV = 31
export const MAX_EV = 252
export const MAX_EV_TOTAL = 510
export const MAX_EFFORT_LEVEL = 10
export const MIN_LEVEL = 1
export const MAX_LEVEL = 100
export const DEFAULT_LEVEL = 50

/** Effort Level → multiplier used in the LA ELB formula. */
export const EFFORT_LEVEL_MULTIPLIERS = [
  0, 2, 3, 4, 7, 8, 9, 14, 15, 16, 25,
] as const

export function gritForEffortLevel(level: number): 'dust' | 'gravel' | 'pebble' | 'rock' | null {
  const el = clamp(level, 0, MAX_EFFORT_LEVEL)
  if (el >= MAX_EFFORT_LEVEL) return null
  if (el <= 2) return 'dust'
  if (el <= 5) return 'gravel'
  if (el <= 8) return 'pebble'
  return 'rock'
}

export const NATURES: {
  id: NatureId
  name: Localized
  plus: TeamStatKey | null
  minus: TeamStatKey | null
}[] = [
  { id: 'hardy', name: { en: 'Hardy', pt: 'Hardy' }, plus: null, minus: null },
  { id: 'lonely', name: { en: 'Lonely', pt: 'Lonely' }, plus: 'atk', minus: 'def' },
  { id: 'brave', name: { en: 'Brave', pt: 'Brave' }, plus: 'atk', minus: 'spe' },
  { id: 'adamant', name: { en: 'Adamant', pt: 'Adamant' }, plus: 'atk', minus: 'spa' },
  { id: 'naughty', name: { en: 'Naughty', pt: 'Naughty' }, plus: 'atk', minus: 'spd' },
  { id: 'bold', name: { en: 'Bold', pt: 'Bold' }, plus: 'def', minus: 'atk' },
  { id: 'docile', name: { en: 'Docile', pt: 'Docile' }, plus: null, minus: null },
  { id: 'relaxed', name: { en: 'Relaxed', pt: 'Relaxed' }, plus: 'def', minus: 'spe' },
  { id: 'impish', name: { en: 'Impish', pt: 'Impish' }, plus: 'def', minus: 'spa' },
  { id: 'lax', name: { en: 'Lax', pt: 'Lax' }, plus: 'def', minus: 'spd' },
  { id: 'timid', name: { en: 'Timid', pt: 'Timid' }, plus: 'spe', minus: 'atk' },
  { id: 'hasty', name: { en: 'Hasty', pt: 'Hasty' }, plus: 'spe', minus: 'def' },
  { id: 'serious', name: { en: 'Serious', pt: 'Serious' }, plus: null, minus: null },
  { id: 'jolly', name: { en: 'Jolly', pt: 'Jolly' }, plus: 'spe', minus: 'spa' },
  { id: 'naive', name: { en: 'Naive', pt: 'Naive' }, plus: 'spe', minus: 'spd' },
  { id: 'modest', name: { en: 'Modest', pt: 'Modest' }, plus: 'spa', minus: 'atk' },
  { id: 'mild', name: { en: 'Mild', pt: 'Mild' }, plus: 'spa', minus: 'def' },
  { id: 'quiet', name: { en: 'Quiet', pt: 'Quiet' }, plus: 'spa', minus: 'spe' },
  { id: 'bashful', name: { en: 'Bashful', pt: 'Bashful' }, plus: null, minus: null },
  { id: 'rash', name: { en: 'Rash', pt: 'Rash' }, plus: 'spa', minus: 'spd' },
  { id: 'calm', name: { en: 'Calm', pt: 'Calm' }, plus: 'spd', minus: 'atk' },
  { id: 'gentle', name: { en: 'Gentle', pt: 'Gentle' }, plus: 'spd', minus: 'def' },
  { id: 'sassy', name: { en: 'Sassy', pt: 'Sassy' }, plus: 'spd', minus: 'spe' },
  { id: 'careful', name: { en: 'Careful', pt: 'Careful' }, plus: 'spd', minus: 'spa' },
  { id: 'quirky', name: { en: 'Quirky', pt: 'Quirky' }, plus: null, minus: null },
]

/** Common competitive / utility held items (PokeAPI sprites). */
export const TEAM_HELD_ITEMS: TeamHeldItem[] = [
  { id: 'leftovers', name: { en: 'Leftovers', pt: 'Restos' }, sprite: 'leftovers' },
  { id: 'choice-band', name: { en: 'Choice Band', pt: 'Bandana da Escolha' }, sprite: 'choice-band' },
  { id: 'choice-specs', name: { en: 'Choice Specs', pt: 'Óculos da Escolha' }, sprite: 'choice-specs' },
  { id: 'choice-scarf', name: { en: 'Choice Scarf', pt: 'Lenço da Escolha' }, sprite: 'choice-scarf' },
  { id: 'life-orb', name: { en: 'Life Orb', pt: 'Orbe Vida' }, sprite: 'life-orb' },
  { id: 'assault-vest', name: { en: 'Assault Vest', pt: 'Colete de Ataque' }, sprite: 'assault-vest' },
  { id: 'focus-sash', name: { en: 'Focus Sash', pt: 'Faixa Foco' }, sprite: 'focus-sash' },
  { id: 'rocky-helmet', name: { en: 'Rocky Helmet', pt: 'Capacete Rochoso' }, sprite: 'rocky-helmet' },
  { id: 'eviolite', name: { en: 'Eviolite', pt: 'Eviolite' }, sprite: 'eviolite' },
  { id: 'heavy-duty-boots', name: { en: 'Heavy-Duty Boots', pt: 'Botas Pesadas' }, sprite: 'heavy-duty-boots' },
  { id: 'sitrus-berry', name: { en: 'Sitrus Berry', pt: 'Fruta Sitrus' }, sprite: 'sitrus-berry' },
  { id: 'oran-berry', name: { en: 'Oran Berry', pt: 'Fruta Oren' }, sprite: 'oran-berry' },
  { id: 'lum-berry', name: { en: 'Lum Berry', pt: 'Fruta Lum' }, sprite: 'lum-berry' },
  { id: 'black-sludge', name: { en: 'Black Sludge', pt: 'Lodo Negro' }, sprite: 'black-sludge' },
  { id: 'flame-orb', name: { en: 'Flame Orb', pt: 'Orbe Chama' }, sprite: 'flame-orb' },
  { id: 'toxic-orb', name: { en: 'Toxic Orb', pt: 'Orbe Tóxico' }, sprite: 'toxic-orb' },
  { id: 'expert-belt', name: { en: 'Expert Belt', pt: 'Cinto do Expert' }, sprite: 'expert-belt' },
  { id: 'weakness-policy', name: { en: 'Weakness Policy', pt: 'Política de Fraqueza' }, sprite: 'weakness-policy' },
  { id: 'air-balloon', name: { en: 'Air Balloon', pt: 'Balão a Ar' }, sprite: 'air-balloon' },
  { id: 'safety-goggles', name: { en: 'Safety Goggles', pt: 'Óculos de Segurança' }, sprite: 'safety-goggles' },
  { id: 'covert-cloak', name: { en: 'Covert Cloak', pt: 'Manto Disfarçado' }, sprite: 'covert-cloak' },
  { id: 'loaded-dice', name: { en: 'Loaded Dice', pt: 'Dado Viciado' }, sprite: 'loaded-dice' },
  { id: 'booster-energy', name: { en: 'Booster Energy', pt: 'Energia Propulsora' }, sprite: 'booster-energy' },
  { id: 'clear-amulet', name: { en: 'Clear Amulet', pt: 'Amuleto Claro' }, sprite: 'clear-amulet' },
  { id: 'punching-glove', name: { en: 'Punching Glove', pt: 'Luva de Soco' }, sprite: 'punching-glove' },
  { id: 'throat-spray', name: { en: 'Throat Spray', pt: 'Spray de Garganta' }, sprite: 'throat-spray' },
  { id: 'mental-herb', name: { en: 'Mental Herb', pt: 'Erva Mental' }, sprite: 'mental-herb' },
  { id: 'white-herb', name: { en: 'White Herb', pt: 'Erva Branca' }, sprite: 'white-herb' },
  { id: 'power-herb', name: { en: 'Power Herb', pt: 'Erva Poder' }, sprite: 'power-herb' },
  { id: 'scope-lens', name: { en: 'Scope Lens', pt: 'Lente de Escopo' }, sprite: 'scope-lens' },
  { id: 'wide-lens', name: { en: 'Wide Lens', pt: 'Lente Ampla' }, sprite: 'wide-lens' },
  { id: 'muscle-band', name: { en: 'Muscle Band', pt: 'Bandana Muscular' }, sprite: 'muscle-band' },
  { id: 'wise-glasses', name: { en: 'Wise Glasses', pt: 'Óculos Sábios' }, sprite: 'wise-glasses' },
  { id: 'razor-claw', name: { en: 'Razor Claw', pt: 'Garra Afiada' }, sprite: 'razor-claw' },
  { id: 'razor-fang', name: { en: 'Razor Fang', pt: 'Presa Afiada' }, sprite: 'razor-fang' },
  { id: 'light-clay', name: { en: 'Light Clay', pt: 'Argila Clara' }, sprite: 'light-clay' },
  { id: 'damp-rock', name: { en: 'Damp Rock', pt: 'Pedra Úmida' }, sprite: 'damp-rock' },
  { id: 'heat-rock', name: { en: 'Heat Rock', pt: 'Pedra Quente' }, sprite: 'heat-rock' },
  { id: 'icy-rock', name: { en: 'Icy Rock', pt: 'Pedra Gelada' }, sprite: 'icy-rock' },
  { id: 'smooth-rock', name: { en: 'Smooth Rock', pt: 'Pedra Lisa' }, sprite: 'smooth-rock' },
  { id: 'terrain-extender', name: { en: 'Terrain Extender', pt: 'Extensor de Terreno' }, sprite: 'terrain-extender' },
  { id: 'utility-umbrella', name: { en: 'Utility Umbrella', pt: 'Guarda-chuva Útil' }, sprite: 'utility-umbrella' },
  { id: 'shed-shell', name: { en: 'Shed Shell', pt: 'Casca Descartada' }, sprite: 'shed-shell' },
  { id: 'red-card', name: { en: 'Red Card', pt: 'Cartão Vermelho' }, sprite: 'red-card' },
  { id: 'eject-button', name: { en: 'Eject Button', pt: 'Botão Ejetor' }, sprite: 'eject-button' },
  { id: 'eject-pack', name: { en: 'Eject Pack', pt: 'Pacote Ejetor' }, sprite: 'eject-pack' },
]

const ITEM_SPRITE_BASE =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items'

/** Overrides for Gen 8/9 items missing from the PokeAPI items sprite pack. */
const LOCAL_ITEM_SPRITES: Record<string, string> = {
  'heavy-duty-boots': '/team-items/heavy-duty-boots.png',
  'covert-cloak': '/team-items/covert-cloak.png',
  'loaded-dice': '/team-items/loaded-dice.png',
  'booster-energy': '/team-items/booster-energy.png',
  'clear-amulet': '/team-items/clear-amulet.png',
  'punching-glove': '/team-items/punching-glove.png',
  'throat-spray': '/team-items/throat-spray.png',
  'utility-umbrella': '/team-items/utility-umbrella.png',
  'eject-pack': '/team-items/eject-pack.png',
}

export function teamItemSpriteUrl(sprite: string) {
  if (sprite.startsWith('/') || sprite.startsWith('http')) return sprite
  return LOCAL_ITEM_SPRITES[sprite] ?? `${ITEM_SPRITE_BASE}/${sprite}.png`
}

export function getTeamHeldItem(id: string | null) {
  if (!id) return null
  return TEAM_HELD_ITEMS.find((item) => item.id === id) ?? null
}

export function getNature(id: NatureId) {
  return NATURES.find((n) => n.id === id) ?? NATURES[0]
}

export function emptyStats(fill = 0): TeamStats {
  return { hp: fill, atk: fill, def: fill, spa: fill, spd: fill, spe: fill }
}

export function emptyMoves(): (TeamMove | null)[] {
  return Array.from({ length: MOVE_SLOTS }, () => null)
}

export function emptyMember(slot: number): TeamMember {
  return {
    slot,
    dex: null,
    name: '',
    level: DEFAULT_LEVEL,
    nature: 'serious',
    itemId: null,
    moves: emptyMoves(),
    ivs: emptyStats(MAX_IV),
    evs: emptyStats(0),
    effortLevels: emptyStats(MAX_EFFORT_LEVEL),
    baseStats: null,
  }
}

export function emptyTeam(game: GameId, name = 'My Team'): TeamExport {
  return {
    version: 1,
    game,
    name,
    updatedAt: new Date().toISOString(),
    members: Array.from({ length: TEAM_SIZE }, (_, i) => emptyMember(i)),
  }
}

export function pokedexForGame(game: GameId) {
  return game === 'la'
    ? LA_POKEDEX.map((e) => ({ dex: e.dex, name: e.name, regional: e.hisui }))
    : LZA_POKEDEX.map((e) => ({ dex: e.dex, name: e.name, regional: e.lumiose }))
}

export function natureMultiplier(natureId: NatureId, stat: TeamStatKey) {
  if (stat === 'hp') return 1
  const nature = getNature(natureId)
  if (nature.plus === stat) return 1.1
  if (nature.minus === stat) return 0.9
  return 1
}

/** Gen 3+ final stat calculation (LZA / main series). */
export function calcStat(
  key: TeamStatKey,
  base: number,
  iv: number,
  ev: number,
  level: number,
  natureId: NatureId,
) {
  const safeBase = Math.max(1, base)
  const safeIv = clamp(iv, 0, MAX_IV)
  const safeEv = clamp(ev, 0, MAX_EV)
  const safeLevel = clamp(level, MIN_LEVEL, MAX_LEVEL)

  if (key === 'hp') {
    if (safeBase === 1) return 1 // Shedinja-style
    return (
      Math.floor(((2 * safeBase + safeIv + Math.floor(safeEv / 4)) * safeLevel) / 100) +
      safeLevel +
      10
    )
  }

  const unnatured =
    Math.floor(((2 * safeBase + safeIv + Math.floor(safeEv / 4)) * safeLevel) / 100) + 5
  return Math.floor(unnatured * natureMultiplier(natureId, key))
}

/** Effort Level Bonus for Legends: Arceus. */
export function calcEffortLevelBonus(base: number, effortLevel: number, level: number) {
  const safeBase = Math.max(1, base)
  const safeLevel = clamp(level, MIN_LEVEL, MAX_LEVEL)
  const el = clamp(effortLevel, 0, MAX_EFFORT_LEVEL)
  const multiplier = EFFORT_LEVEL_MULTIPLIERS[el] ?? 0
  return Math.round((Math.sqrt(safeBase) * multiplier + safeLevel) / 2.5)
}

/** Legends: Arceus stat calculation (no IVs/EVs — Effort Levels only). */
export function calcLaStat(
  key: TeamStatKey,
  base: number,
  effortLevel: number,
  level: number,
  natureId: NatureId,
) {
  const safeBase = Math.max(1, base)
  const safeLevel = clamp(level, MIN_LEVEL, MAX_LEVEL)
  const elb = calcEffortLevelBonus(safeBase, effortLevel, safeLevel)

  if (key === 'hp') {
    if (safeBase === 1) return 1
    return Math.floor((safeLevel / 100 + 1) * safeBase + safeLevel) + elb
  }

  const core = Math.floor(((safeLevel / 50 + 1) * safeBase) / 1.5)
  return Math.floor(core * natureMultiplier(natureId, key)) + elb
}

export function calcAllStats(member: TeamMember, game: GameId = 'lza'): TeamStats | null {
  if (!member.baseStats || member.dex == null) return null
  const out = emptyStats(0)
  for (const key of TEAM_STAT_KEYS) {
    out[key] =
      game === 'la'
        ? calcLaStat(
            key,
            member.baseStats[key],
            member.effortLevels?.[key] ?? 0,
            member.level,
            member.nature,
          )
        : calcStat(
            key,
            member.baseStats[key],
            member.ivs[key],
            member.evs[key],
            member.level,
            member.nature,
          )
  }
  return out
}

export function evTotal(evs: TeamStats) {
  return TEAM_STAT_KEYS.reduce((sum, key) => sum + evs[key], 0)
}

export function clampEvChange(evs: TeamStats, key: TeamStatKey, next: number) {
  const capped = clamp(next, 0, MAX_EV)
  const others = evTotal(evs) - evs[key]
  const maxForStat = Math.min(MAX_EV, MAX_EV_TOTAL - others)
  return clamp(capped, 0, maxForStat)
}

export function clamp(n: number, min: number, max: number) {
  if (!Number.isFinite(n)) return min
  return Math.min(max, Math.max(min, Math.round(n)))
}

const POKEAPI = 'https://pokeapi.co/api/v2'

const baseStatCache = new Map<number, TeamStats>()
const learnsetCache = new Map<string, TeamLearnableMove[]>()

export async function fetchTeamLearnset(
  game: GameId,
  dex: number,
  locale: 'en' | 'pt',
): Promise<TeamLearnableMove[]> {
  const key = `${game}:${dex}:${locale}`
  const cached = learnsetCache.get(key)
  if (cached) return cached

  const raw =
    game === 'la' ? await fetchLaLearnset(dex, locale) : await fetchLzaLearnset(dex, locale)

  const moves: TeamLearnableMove[] = [
    ...raw.level.map((m) => ({
      moveId: m.moveId,
      name: m.name,
      kind: 'level' as const,
      level: m.level,
      masterLevel: 'masterLevel' in m ? (m as { masterLevel?: number }).masterLevel : undefined,
      hisuiExclusive:
        'hisuiExclusive' in m ? (m as { hisuiExclusive?: boolean }).hisuiExclusive : undefined,
    })),
    ...raw.tm.map((m) => ({
      moveId: m.moveId,
      name: m.name,
      kind: 'tm' as const,
      tm: m.tm,
      hisuiExclusive:
        'hisuiExclusive' in m ? (m as { hisuiExclusive?: boolean }).hisuiExclusive : undefined,
    })),
    ...raw.reminder.map((m) => ({
      moveId: m.moveId,
      name: m.name,
      kind: 'reminder' as const,
      level: m.level,
      hisuiExclusive:
        'hisuiExclusive' in m ? (m as { hisuiExclusive?: boolean }).hisuiExclusive : undefined,
    })),
  ]

  learnsetCache.set(key, moves)
  return moves
}

export async function fetchBaseStats(dex: number): Promise<TeamStats> {
  const cached = baseStatCache.get(dex)
  if (cached) return cached

  const res = await fetch(`${POKEAPI}/pokemon/${dex}`)
  if (!res.ok) throw new Error(`Failed to load stats for #${dex}`)
  const data = (await res.json()) as {
    stats: { base_stat: number; stat: { name: string } }[]
  }

  const map: Partial<TeamStats> = {}
  for (const row of data.stats) {
    const key = apiStatToKey(row.stat.name)
    if (key) map[key] = row.base_stat
  }

  const stats: TeamStats = {
    hp: map.hp ?? 1,
    atk: map.atk ?? 1,
    def: map.def ?? 1,
    spa: map.spa ?? 1,
    spd: map.spd ?? 1,
    spe: map.spe ?? 1,
  }
  baseStatCache.set(dex, stats)
  return stats
}

function apiStatToKey(name: string): TeamStatKey | null {
  switch (name) {
    case 'hp':
      return 'hp'
    case 'attack':
      return 'atk'
    case 'defense':
      return 'def'
    case 'special-attack':
      return 'spa'
    case 'special-defense':
      return 'spd'
    case 'speed':
      return 'spe'
    default:
      return null
  }
}

export function serializeTeam(team: TeamExport) {
  return JSON.stringify(
    {
      ...team,
      updatedAt: new Date().toISOString(),
    },
    null,
    2,
  )
}

export function parseTeamJson(raw: string, expectedGame: GameId): TeamExport {
  const data = JSON.parse(raw) as Partial<TeamExport>
  if (!data || typeof data !== 'object') throw new Error('Invalid team JSON')
  if (data.version !== 1) throw new Error('Unsupported team version')
  if (data.game !== expectedGame) {
    throw new Error(`Team JSON is for ${String(data.game)}, expected ${expectedGame}`)
  }
  if (!Array.isArray(data.members) || data.members.length === 0) {
    throw new Error('Team JSON has no members')
  }

  const members = Array.from({ length: TEAM_SIZE }, (_, i) => {
    const src = data.members?.[i]
    if (!src) return emptyMember(i)
    return normalizeMember(src, i)
  })

  return {
    version: 1,
    game: expectedGame,
    name: typeof data.name === 'string' && data.name.trim() ? data.name.trim() : 'My Team',
    updatedAt: typeof data.updatedAt === 'string' ? data.updatedAt : new Date().toISOString(),
    members,
  }
}

function normalizeMember(src: Partial<TeamMember>, slot: number): TeamMember {
  const nature =
    typeof src.nature === 'string' && NATURES.some((n) => n.id === src.nature)
      ? (src.nature as NatureId)
      : 'serious'
  const itemId =
    typeof src.itemId === 'string' && TEAM_HELD_ITEMS.some((i) => i.id === src.itemId)
      ? src.itemId
      : null

  return {
    slot,
    dex: typeof src.dex === 'number' && src.dex > 0 ? src.dex : null,
    name: typeof src.name === 'string' ? src.name : '',
    level: clamp(typeof src.level === 'number' ? src.level : DEFAULT_LEVEL, MIN_LEVEL, MAX_LEVEL),
    nature,
    itemId,
    moves: normalizeMoves(src.moves),
    ivs: normalizeStatBlock(src.ivs, MAX_IV, MAX_IV),
    evs: normalizeEvs(src.evs),
    effortLevels: normalizeStatBlock(
      src.effortLevels,
      MAX_EFFORT_LEVEL,
      MAX_EFFORT_LEVEL,
    ),
    baseStats: src.baseStats ? normalizeStatBlock(src.baseStats, 1, 255) : null,
  }
}

function normalizeMoves(src: unknown): (TeamMove | null)[] {
  const out = emptyMoves()
  if (!Array.isArray(src)) return out
  const seen = new Set<number>()
  for (let i = 0; i < MOVE_SLOTS; i++) {
    const row = src[i]
    if (!row || typeof row !== 'object') continue
    const moveId = (row as TeamMove).moveId
    const name = (row as TeamMove).name
    if (typeof moveId !== 'number' || !Number.isFinite(moveId) || moveId <= 0) continue
    if (seen.has(moveId)) continue
    seen.add(moveId)
    out[i] = {
      moveId,
      name: typeof name === 'string' && name.trim() ? name.trim() : `Move #${moveId}`,
    }
  }
  return out
}

function normalizeStatBlock(
  src: Partial<TeamStats> | undefined,
  fill: number,
  max: number,
): TeamStats {
  const out = emptyStats(fill)
  if (!src) return out
  for (const key of TEAM_STAT_KEYS) {
    if (typeof src[key] === 'number') out[key] = clamp(src[key]!, 0, max)
  }
  return out
}

function normalizeEvs(src: Partial<TeamStats> | undefined): TeamStats {
  const raw = normalizeStatBlock(src, 0, MAX_EV)
  let total = evTotal(raw)
  if (total <= MAX_EV_TOTAL) return raw

  // Scale down proportionally if over cap.
  const factor = MAX_EV_TOTAL / total
  const scaled = emptyStats(0)
  for (const key of TEAM_STAT_KEYS) {
    scaled[key] = clamp(Math.floor(raw[key] * factor), 0, MAX_EV)
  }
  // Fix leftover by trimming from spe → hp order.
  total = evTotal(scaled)
  let overflow = total - MAX_EV_TOTAL
  for (const key of [...TEAM_STAT_KEYS].reverse()) {
    if (overflow <= 0) break
    const cut = Math.min(scaled[key], overflow)
    scaled[key] -= cut
    overflow -= cut
  }
  return scaled
}
