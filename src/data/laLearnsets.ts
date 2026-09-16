import type { Locale } from '../i18n'
import type { LearnMove, LzaLearnset } from './lzaLearnsets'

const BASE =
  'https://raw.githubusercontent.com/Fortelle/pokemon-learnsets/master/raw/legendsarceus'

/** Hisui-exclusive / PLA-signature move IDs (PokeAPI). */
export const HISUI_EXCLUSIVE_MOVE_IDS = new Set([
  837, // Barb Barrage
  838, // Esper Wing
  839, // Bitter Malice
  840, // Shelter
  841, // Triple Arrows
  842, // Infernal Parade
  843, // Ceaseless Edge
  844, // Bleakwind Storm
  845, // Wildbolt Storm
  846, // Sandsear Storm
  847, // Springtide Storm
  848, // Mystical Power
  849, // Mountain Gale
  850, // Victory Dance
  851, // Headlong Rush
  852, // Barb Barrage (alt) — keep ids that exist
  853,
  854,
  855,
  856,
  857,
  858,
  859,
  860,
  861,
  862,
  863,
])

export type LaLearnMove = LearnMove & {
  masterLevel?: number
  hisuiExclusive?: boolean
}

export type LaLearnset = {
  level: LaLearnMove[]
  tm: LaLearnMove[]
  reminder: LaLearnMove[]
}

type RawLearnset = {
  level: { moveId: number; level: number; masterLevel?: number }[]
  tm: { moveId: number; tm: string }[]
  reminder: { moveId: number; level?: number }[]
}

const moveNameCache = new Map<number, { en: string; pt: string }>()
let indexPromise: Promise<Map<string, RawLearnset>> | null = null

function speciesKey(dex: number, form = 0) {
  return `${String(dex).padStart(4, '0')}.${String(form).padStart(2, '0')}`
}

/** PLA levelup: moveId:level:masterLevel */
function parseLevelToken(token: string) {
  const parts = token.split(':')
  const moveId = Number(parts[0])
  if (!Number.isFinite(moveId)) return null
  const min = Number(parts[1])
  if (!Number.isFinite(min)) return null
  if (min < 0) {
    const evoLevel = parts[2] ? Number(parts[2]) : undefined
    return {
      kind: 'reminder' as const,
      moveId,
      level: Number.isFinite(evoLevel) ? evoLevel : undefined,
    }
  }
  const master = parts[2] != null ? Number(parts[2]) : undefined
  return {
    kind: 'level' as const,
    moveId,
    level: min,
    masterLevel: Number.isFinite(master) ? master : undefined,
  }
}

function parseTutorToken(token: string) {
  const parts = token.split(':')
  const moveId = Number(parts[0])
  if (!Number.isFinite(moveId)) return null
  return { moveId, tm: 'Tutor' }
}

function parseSpecialToken(token: string) {
  const parts = token.split(':')
  const moveId = Number(parts[0])
  if (!Number.isFinite(moveId)) return null
  const level = parts[1] ? Number(parts[1]) : undefined
  return { moveId, level: Number.isFinite(level) ? level : undefined }
}

function parseFile(text: string, kind: 'level' | 'tm' | 'reminder') {
  const map = new Map<string, string[]>()
  for (const line of text.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed) continue
    const tab = trimmed.indexOf('\t')
    if (tab === -1) continue
    const key = trimmed.slice(0, tab)
    const payload = trimmed.slice(tab + 1).trim()
    if (!payload) continue
    map.set(
      key,
      payload
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
    )
  }

  const result = new Map<string, RawLearnset>()
  for (const [key, tokens] of map) {
    const entry: RawLearnset = { level: [], tm: [], reminder: [] }
    for (const token of tokens) {
      if (kind === 'level') {
        const parsed = parseLevelToken(token)
        if (!parsed) continue
        if (parsed.kind === 'level') {
          entry.level.push({
            moveId: parsed.moveId,
            level: parsed.level,
            masterLevel: parsed.masterLevel,
          })
        } else {
          entry.reminder.push({ moveId: parsed.moveId, level: parsed.level })
        }
      } else if (kind === 'tm') {
        const parsed = parseTutorToken(token)
        if (parsed) entry.tm.push(parsed)
      } else {
        const parsed = parseSpecialToken(token)
        if (parsed) entry.reminder.push(parsed)
      }
    }
    result.set(key, entry)
  }
  return result
}

function mergeMaps(...maps: Map<string, RawLearnset>[]) {
  const merged = new Map<string, RawLearnset>()
  for (const map of maps) {
    for (const [key, value] of map) {
      const current = merged.get(key) ?? { level: [], tm: [], reminder: [] }
      current.level.push(...value.level)
      current.tm.push(...value.tm)
      current.reminder.push(...value.reminder)
      merged.set(key, current)
    }
  }
  return merged
}

async function loadIndex() {
  if (!indexPromise) {
    indexPromise = Promise.all([
      fetch(`${BASE}/levelup.txt`).then((r) => r.text()),
      fetch(`${BASE}/tutor.txt`).then((r) => r.text()),
      fetch(`${BASE}/special.txt`).then((r) => r.text()),
    ]).then(([levelup, tutor, special]) =>
      mergeMaps(
        parseFile(levelup, 'level'),
        parseFile(tutor, 'tm'),
        parseFile(special, 'reminder'),
      ),
    )
  }
  return indexPromise
}

function pickLocalized(
  entries: { language: { name: string }; name: string }[],
  locale: Locale,
) {
  const prefer = locale === 'pt' ? ['pt-BR', 'pt', 'en'] : ['en']
  for (const lang of prefer) {
    const hit = entries.find((e) => e.language.name === lang)
    if (hit?.name) return hit.name
  }
  return entries.find((e) => e.name)?.name ?? ''
}

function capitalize(name: string) {
  return name
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ')
}

async function moveName(moveId: number, locale: Locale) {
  const cached = moveNameCache.get(moveId)
  if (cached) return cached[locale]
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/move/${moveId}`)
    if (!res.ok) throw new Error('fetch failed')
    const data = await res.json()
    const entry = {
      en: pickLocalized(data.names ?? [], 'en') || capitalize(data.name),
      pt: pickLocalized(data.names ?? [], 'pt') || capitalize(data.name),
    }
    moveNameCache.set(moveId, entry)
    return entry[locale]
  } catch {
    const fallback = `#${moveId}`
    moveNameCache.set(moveId, { en: fallback, pt: fallback })
    return fallback
  }
}

function dedupeLevel(rows: { moveId: number; level: number; masterLevel?: number }[]) {
  const map = new Map<number, { level: number; masterLevel?: number }>()
  for (const row of rows) {
    const prev = map.get(row.moveId)
    if (prev == null || row.level < prev.level) {
      map.set(row.moveId, { level: row.level, masterLevel: row.masterLevel })
    }
  }
  return [...map.entries()]
    .map(([moveId, v]) => ({ moveId, level: v.level, masterLevel: v.masterLevel }))
    .sort((a, b) => a.level - b.level || a.moveId - b.moveId)
}

function dedupeTm(rows: { moveId: number; tm: string }[]) {
  const map = new Map<number, { moveId: number; tm: string }>()
  for (const row of rows) {
    if (!map.has(row.moveId)) map.set(row.moveId, row)
  }
  return [...map.values()].sort((a, b) => a.moveId - b.moveId)
}

function dedupeReminder(rows: { moveId: number; level?: number }[]) {
  const map = new Map<number, { moveId: number; level?: number }>()
  for (const row of rows) {
    if (!map.has(row.moveId)) map.set(row.moveId, row)
  }
  return [...map.values()].sort((a, b) => a.moveId - b.moveId)
}

export async function fetchLaLearnset(dex: number, locale: Locale): Promise<LaLearnset> {
  const index = await loadIndex()
  const raw = index.get(speciesKey(dex)) ?? { level: [], tm: [], reminder: [] }

  const levelRows = dedupeLevel(raw.level)
  const levelIds = new Set(levelRows.map((r) => r.moveId))
  const tmRows = dedupeTm(raw.tm).filter((r) => !levelIds.has(r.moveId))
  const reminderRows = dedupeReminder(raw.reminder).filter((r) => !levelIds.has(r.moveId))

  const ids = [...new Set([...levelRows, ...tmRows, ...reminderRows].map((r) => r.moveId))]
  await Promise.all(ids.map((id) => moveName(id, locale)))

  const mark = (moveId: number): Pick<LaLearnMove, 'hisuiExclusive'> =>
    HISUI_EXCLUSIVE_MOVE_IDS.has(moveId) ? { hisuiExclusive: true } : {}

  const level: LaLearnMove[] = levelRows.map((row) => ({
    kind: 'level',
    moveId: row.moveId,
    level: row.level,
    masterLevel: row.masterLevel,
    name: moveNameCache.get(row.moveId)![locale],
    ...mark(row.moveId),
  }))

  const tm: LaLearnMove[] = tmRows.map((row) => ({
    kind: 'tm',
    moveId: row.moveId,
    tm: row.tm,
    name: moveNameCache.get(row.moveId)![locale],
    ...mark(row.moveId),
  }))

  const reminder: LaLearnMove[] = reminderRows.map((row) => ({
    kind: 'reminder',
    moveId: row.moveId,
    level: row.level,
    name: moveNameCache.get(row.moveId)![locale],
    ...mark(row.moveId),
  }))

  return { level, tm, reminder }
}

/** Compatibility alias for shared PokemonDetails typing. */
export type { LzaLearnset }
