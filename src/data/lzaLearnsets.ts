import type { Locale } from '../i18n'

const BASE =
  'https://raw.githubusercontent.com/Fortelle/pokemon-learnsets/master/raw/legendsza%402.0.0'

export type LearnMoveKind = 'level' | 'tm' | 'reminder'

export type LearnMove = {
  kind: LearnMoveKind
  moveId: number
  name: string
  level?: number
  tm?: string
}

export type LzaLearnset = {
  level: LearnMove[]
  tm: LearnMove[]
  reminder: LearnMove[]
}

type RawLearnset = {
  level: { moveId: number; level: number }[]
  tm: { moveId: number; tm: string }[]
  reminder: { moveId: number; level?: number }[]
}

const moveNameCache = new Map<number, { en: string; pt: string }>()
let indexPromise: Promise<Map<string, RawLearnset>> | null = null

function speciesKey(dex: number, form = 0) {
  return `${String(dex).padStart(4, '0')}.${String(form).padStart(2, '0')}`
}

function parseLevelToken(token: string) {
  const parts = token.split(':')
  const moveId = Number(parts[0])
  if (!Number.isFinite(moveId)) return null

  const min = Number(parts[1])
  if (!Number.isFinite(min)) return null

  if (min < 0) {
    const evoLevel = parts[2] ? Number(parts[2]) : undefined
    return { kind: 'reminder' as const, moveId, level: Number.isFinite(evoLevel) ? evoLevel : undefined }
  }

  return { kind: 'level' as const, moveId, level: min }
}

function parseTmToken(token: string) {
  // Only real numbered TMs (e.g. "886:TM110"). Bare move IDs in tm.txt are
  // often level-up moves duplicated in the dump and must be ignored.
  const match = token.match(/^(\d+):TM(\d+)$/i)
  if (!match) return null
  const moveId = Number(match[1])
  if (!Number.isFinite(moveId)) return null
  return { moveId, tm: `TM ${Number(match[2])}` }
}

function parseReminderToken(token: string) {
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
    map.set(key, payload.split(',').map((t) => t.trim()).filter(Boolean))
  }

  const result = new Map<string, RawLearnset>()

  for (const [key, tokens] of map) {
    const entry: RawLearnset = { level: [], tm: [], reminder: [] }

    for (const token of tokens) {
      if (kind === 'level') {
        const parsed = parseLevelToken(token)
        if (!parsed) continue
        if (parsed.kind === 'level') entry.level.push(parsed)
        else entry.reminder.push({ moveId: parsed.moveId, level: parsed.level })
      } else if (kind === 'tm') {
        const parsed = parseTmToken(token)
        if (parsed) entry.tm.push(parsed)
      } else {
        const parsed = parseReminderToken(token)
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
      fetch(`${BASE}/tm.txt`).then((r) => r.text()),
      fetch(`${BASE}/reminder.txt`).then((r) => r.text()),
    ]).then(([levelup, tm, reminder]) =>
      mergeMaps(parseFile(levelup, 'level'), parseFile(tm, 'tm'), parseFile(reminder, 'reminder')),
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

function dedupeLevel(rows: { moveId: number; level: number }[]) {
  const map = new Map<number, number>()
  for (const row of rows) {
    const prev = map.get(row.moveId)
    if (prev == null || row.level < prev) map.set(row.moveId, row.level)
  }
  return [...map.entries()]
    .map(([moveId, level]) => ({ moveId, level }))
    .sort((a, b) => a.level - b.level || a.moveId - b.moveId)
}

function dedupeTm(rows: { moveId: number; tm: string }[]) {
  const map = new Map<number, { moveId: number; tm: string }>()
  for (const row of rows) {
    if (!map.has(row.moveId)) map.set(row.moveId, row)
  }
  return [...map.values()].sort((a, b) => {
    const ta = Number(a.tm.replace(/\D/g, ''))
    const tb = Number(b.tm.replace(/\D/g, ''))
    return ta - tb || a.moveId - b.moveId
  })
}

function dedupeReminder(rows: { moveId: number; level?: number }[]) {
  const map = new Map<number, { moveId: number; level?: number }>()
  for (const row of rows) {
    if (!map.has(row.moveId)) map.set(row.moveId, row)
  }
  return [...map.values()].sort((a, b) => a.moveId - b.moveId)
}

export async function fetchLzaLearnset(dex: number, locale: Locale): Promise<LzaLearnset> {
  const index = await loadIndex()
  const raw = index.get(speciesKey(dex)) ?? { level: [], tm: [], reminder: [] }

  const levelRows = dedupeLevel(raw.level)
  const levelIds = new Set(levelRows.map((r) => r.moveId))

  const tmRows = dedupeTm(raw.tm).filter((r) => !levelIds.has(r.moveId))

  const reminderRows = dedupeReminder(raw.reminder).filter((r) => !levelIds.has(r.moveId))

  const ids = [...new Set([...levelRows, ...tmRows, ...reminderRows].map((r) => r.moveId))]
  await Promise.all(ids.map((id) => moveName(id, locale)))

  const level: LearnMove[] = levelRows.map((row) => ({
    kind: 'level',
    moveId: row.moveId,
    level: row.level,
    name: moveNameCache.get(row.moveId)![locale],
  }))

  const tm: LearnMove[] = tmRows.map((row) => ({
    kind: 'tm',
    moveId: row.moveId,
    tm: row.tm,
    name: moveNameCache.get(row.moveId)![locale],
  }))

  const reminder: LearnMove[] = reminderRows.map((row) => ({
    kind: 'reminder',
    moveId: row.moveId,
    level: row.level,
    name: moveNameCache.get(row.moveId)![locale],
  }))

  return { level, tm, reminder }
}
