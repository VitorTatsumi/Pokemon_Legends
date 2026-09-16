/**
 * Build src/data/laSpawns.ts from Altissimo PLA spawn JSON,
 * assigning each spawn point to the nearest Hisui subregion marker.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const rawDir = path.join(__dirname, 'la-spawn-raw')

// Inline region/subregion coords (keep in sync with hisuiRegions.ts)
const REGIONS = {
  obsidian: {
    file: 'fieldlands',
    subregions: [
      ['fieldlands-camp', 32, 12],
      ['heights-camp', 58, 50],
      ['aspiration-hill', 38, 21],
      ['horseshoe-plains', 63, 14],
      ['deertrack-path', 52, 36],
      ['deertrack-heights', 68, 42],
      ['windswept-run', 46, 58],
      ['worn-bridge', 80, 28],
      ['nature-pantry', 62, 68],
      ['obsidian-falls', 90, 49],
      ['oreburrow-tunnel', 90, 63],
      ['the-heartwood', 77, 83],
      ['grandtree-arena', 85, 92],
      ['grueling-grove', 82, 8],
      ['lake-verity', 10, 45],
      ['verity-cavern', 16, 40],
      ['sandgem-flats', 14, 72],
      ['tidewater-dam', 66, 77],
      ['floaro-gardens', 10, 16],
      ['ramanas-island', 29, 87],
      ['moss-rock', 80, 86],
    ],
  },
  crimson: {
    file: 'mirelands',
    subregions: [
      ['mirelands-camp', 21, 42],
      ['bogbound-camp', 63, 73],
      ['golden-lowlands', 25, 49],
      ['gapejaw-bog', 32, 67],
      ['sludge-mound', 60, 78],
      ['scarlet-bog', 52, 55],
      ['solaceon-ruins', 43, 38],
      ['cloudpool-ridge', 35, 17],
      ['shrouded-ruins', 55, 12],
      ['diamond-settlement', 54, 30],
      ['diamond-heath', 52, 23],
      ['bolderoll-slope', 65, 48],
      ['droning-meadow', 83, 69],
      ['cottonsedge-prairie', 83, 60],
      ['lake-valor', 75, 17.5],
      ['valor-cavern', 75, 28],
      ['holm-of-trials', 45, 92],
      ['brava-arena', 36, 5],
      ['ursas-ring', 71, 86],
    ],
  },
  cobalt: {
    file: 'coastlands',
    subregions: [
      ['coastlands-camp', 5, 65],
      ['beachside-camp', 83, 78],
      ['crossing-slope', 12, 70],
      ['ginkgo-landing', 28, 65],
      ['aipom-hills', 26, 80],
      ['bathers-lagoon', 50, 88],
      ['hideaway-bay', 48, 93],
      ['deadwood-haunt', 70, 82],
      ['castaway-shore', 52, 42],
      ['windbreak-stand', 20, 38],
      ['veilstone-cape', 65, 35],
      ['islespy-shore', 35, 12],
      ['tranquility-cove', 58, 60],
      ['sands-reach', 85, 72],
      ['tombolo-walk', 90, 90],
      ['seagrass-haven', 72, 25],
      ['lunkers-lair', 92, 40],
      ['spring-path', 15, 25],
      ['turnback-cave', 15, 20],
      ['tidal-passage', 55, 48],
      ['seaside-hollow', 42, 85],
      ['firespit-island', 88, 15],
      ['molten-arena', 85, 8],
      ['lava-dome-sanctum', 90, 12],
    ],
  },
  coronet: {
    file: 'highlands',
    subregions: [
      ['highlands-camp', 90, 92],
      ['mountain-camp', 82, 67],
      ['summit-camp', 14, 44],
      ['heavenward-lookout', 91, 90],
      ['lonely-spring', 87, 62],
      ['fabled-spring', 17, 89],
      ['celestica-trail', 48, 64],
      ['celestica-ruins', 63, 40],
      ['sacred-plaza', 24, 50],
      ['temple-of-sinnoh', 17, 8],
      ['spear-pillar', 16, 4],
      ['moonview-arena', 6, 40],
      ['clamberclaw-cliffs', 78, 49],
      ['cloudcap-pass', 22, 22],
      ['sonorous-path', 68, 74],
      ['ancient-quarry', 52, 84],
      ['bolderoll-ravine', 12, 70],
      ['stonetooth-rows', 6, 56],
      ['primeval-grotto', 45, 56],
      ['wayward-wood', 56, 93],
      ['wayward-cave', 74, 86],
      ['stone-portal', 34, 28],
    ],
  },
  alabaster: {
    file: 'icelands',
    subregions: [
      ['snowfields-camp', 42, 35],
      ['icepeak-camp', 52, 93],
      ['whiteout-valley', 55, 83],
      ['bonechill-wastes', 58, 68],
      ['avalanche-slopes', 12, 78],
      ['icebound-falls', 30, 91],
      ['hearts-crag', 85, 38],
      ['glacier-terrace', 25, 22],
      ['snowfall-hot-spring', 15, 35],
      ['arenas-approach', 25, 63],
      ['icepeak-arena', 8, 46],
      ['pearl-settlement', 70, 30],
      ['lake-acuity', 48, 12],
      ['snowpoint-temple', 65, 5],
      ['avaluggs-legacy', 50, 46],
      ['hibernal-cave', 18, 55],
      ['icepeak-cavern', 12, 52],
      ['crevasse-passage', 40, 52],
      ['secret-hollow', 55, 95],
      ['ice-column-chamber', 8, 50],
      ['ice-rock', 18, 76],
    ],
  },
}

const METHODS = new Set(['ground', 'water', 'air', 'tree', 'ore'])
const TIMES = new Set(['all-day', 'all-time', 'day', 'morning', 'night', 'evening', 'dusk'])
const WEATHER = new Set([
  'all-weather',
  'sun',
  'cloudy',
  'drought',
  'fog',
  'snow',
  'snowstorm',
  'rain',
  'thunderstorm',
])

const NAME_ALIASES = {
  'mr-mime': 'Mr. Mime',
  'mime-jr': 'Mime Jr.',
  "farfetchd": "Farfetch'd",
  'nidoran-f': 'Nidoran♀',
  'nidoran-m': 'Nidoran♂',
  'type-null': 'Type: Null',
  'porygon-z': 'Porygon-Z',
  'jangmo-o': 'Jangmo-o',
  'hakamo-o': 'Hakamo-o',
  'kommo-o': 'Kommo-o',
  'flabebe': 'Flabébé',
  'basculin-white': 'Basculin',
  'basculin-red': 'Basculin',
  'basculin-blue': 'Basculin',
  'basculin': 'Basculin',
}

function parsePct(value) {
  if (typeof value === 'number') return value
  return Number(String(value).replace('%', ''))
}

function isCampSub(id) {
  return id.includes('camp')
}

function nearestSub(subs, x, y) {
  let best = null
  let bestD = Infinity
  for (const [id, sx, sy] of subs) {
    // Camps are markers, not wild zones — only claim spawns clearly nearest to them.
    let d = (sx - x) ** 2 + (sy - y) ** 2
    if (isCampSub(id)) d *= 2.2
    if (d < bestD) {
      bestD = d
      best = id
    }
  }
  return best
}

/** Collapse day+night (or any overlap) into a single row per species/method/alpha. */
function mergeDayNightRows(pokemon) {
  /** @type {Map<string, { row: any, times: Set<string> }>} */
  const groups = new Map()
  for (const p of pokemon) {
    const key = `${p.dex}|${p.method}|${p.alpha ? 'a' : 'n'}`
    const existing = groups.get(key)
    if (!existing) {
      groups.set(key, { row: { ...p }, times: new Set([p.time]) })
    } else {
      existing.times.add(p.time)
      // Prefer non-alpha id without suffix noise; keep first name/dex/method
      if (p.alpha) existing.row.alpha = true
    }
  }

  return [...groups.values()]
    .map(({ row, times }) => {
      let time = 'any'
      if (times.has('any') || (times.has('day') && times.has('night'))) {
        time = 'any'
      } else if (times.has('day')) {
        time = 'day'
      } else if (times.has('night')) {
        time = 'night'
      }
      return { ...row, time }
    })
    .sort((a, b) => a.dex - b.dex || a.name.localeCompare(b.name) || Number(b.alpha) - Number(a.alpha))
}

function loadDexMap() {
  const src = fs.readFileSync(path.join(root, 'src/data/laPokedex.ts'), 'utf8')
  const map = new Map()
  for (const m of src.matchAll(/\{\s*hisui:\s*(\d+),\s*dex:\s*(\d+),\s*name:\s*'([^']+)'\s*\}/g)) {
    const dex = Number(m[2])
    const name = m[3]
    map.set(name.toLowerCase(), { dex, name })
    map.set(name.toLowerCase().replace(/[.':♀♂\s-]/g, ''), { dex, name })
  }
  return map
}

function resolvePokemon(id, engName, dexMap) {
  const alias = NAME_ALIASES[id]
  const candidates = [
    engName,
    alias,
    id,
    id.replace(/-/g, ' '),
    id.replace(/-/g, ''),
  ].filter(Boolean)

  for (const c of candidates) {
    const key = String(c).toLowerCase()
    if (dexMap.has(key)) return dexMap.get(key)
    const compact = key.replace(/[.':♀♂\s-]/g, '')
    if (dexMap.has(compact)) return dexMap.get(compact)
  }
  return null
}

function normalizeTime(conditions) {
  if (conditions.includes('night') || conditions.includes('evening') || conditions.includes('dusk')) {
    return 'night'
  }
  if (
    conditions.includes('day') ||
    conditions.includes('morning') ||
    conditions.includes('all-day')
  ) {
    // all-day in Altissimo often means daytime slot; all-time is true any
    if (conditions.includes('all-time') || conditions.includes('all-day')) {
      // Distinguish: all-time = any; all-day alone with night sibling handled per-group
      if (conditions.includes('all-time')) return 'any'
      // "all-day" without night in same group → day-leaning but treat as any if also in night groups separately
      return 'day'
    }
  }
  if (conditions.includes('all-time')) return 'any'
  return 'any'
}

function extractMethod(conditions) {
  for (const c of conditions) {
    if (METHODS.has(c)) return c
  }
  return 'ground'
}

function buildRegion(regionId, meta, dexMap, pokeList) {
  const byId = new Map(pokeList.map((p) => [p.id, p]))
  const spawns = JSON.parse(
    fs.readFileSync(path.join(rawDir, `${meta.file}-spawns.json`), 'utf8'),
  )

  /** @type {Map<string, Map<string, any>>} */
  const buckets = new Map()
  for (const [sid] of meta.subregions) buckets.set(sid, new Map())

  for (const point of spawns) {
    for (const group of point.groups || []) {
      const conditions = group.conditions || []
      const x = parsePct(group.iconLeft)
      const y = parsePct(group.iconTop)
      if (!Number.isFinite(x) || !Number.isFinite(y)) continue

      const subId = nearestSub(meta.subregions, x, y)
      if (!subId) continue

      const speciesIds = conditions.filter(
        (c) =>
          !METHODS.has(c) &&
          !TIMES.has(c) &&
          !WEATHER.has(c) &&
          c !== 'alpha',
      )
      const isAlpha = conditions.includes('alpha')
      const time = normalizeTime(conditions)
      const method = extractMethod(conditions)

      for (const sid of speciesIds) {
        const poke = byId.get(sid)
        const resolved = resolvePokemon(sid, poke?.engName, dexMap)
        if (!resolved) {
          console.warn(`[${regionId}] unresolved species: ${sid}`)
          continue
        }
        const key = `${resolved.dex}|${time}|${method}|${isAlpha ? 'a' : 'n'}`
        const bucket = buckets.get(subId)
        if (!bucket.has(key)) {
          bucket.set(key, {
            id: `${sid}${isAlpha ? '-alpha' : ''}`,
            name: resolved.name,
            dex: resolved.dex,
            time,
            method,
            alpha: isAlpha || undefined,
          })
        }
      }
    }
  }

  const result = []
  for (const [subId, map] of buckets) {
    const pokemon = mergeDayNightRows([...map.values()])
    if (pokemon.length === 0) continue
    result.push({ regionId, subregionId: subId, pokemon })
  }
  return result
}

function main() {
  const dexMap = loadDexMap()
  const all = []

  for (const [regionId, meta] of Object.entries(REGIONS)) {
    const pokeList = JSON.parse(
      fs.readFileSync(path.join(rawDir, `${meta.file}-pokemon.json`), 'utf8'),
    )
    const built = buildRegion(regionId, meta, dexMap, pokeList)
    console.log(
      `${regionId}: ${built.length} subregions, ${built.reduce((n, s) => n + s.pokemon.length, 0)} spawn rows`,
    )
    all.push(...built)
  }

  const lines = []
  lines.push(`import type { HisuiRegionId } from './hisuiRegions'`)
  lines.push(``)
  lines.push(`export type LaSpawnTime = 'any' | 'day' | 'night'`)
  lines.push(`export type LaSpawnMethod = 'ground' | 'water' | 'air' | 'tree' | 'ore'`)
  lines.push(``)
  lines.push(`export type LaPokemonSpawn = {`)
  lines.push(`  id: string`)
  lines.push(`  name: string`)
  lines.push(`  dex: number`)
  lines.push(`  time: LaSpawnTime`)
  lines.push(`  method: LaSpawnMethod`)
  lines.push(`  /** Fixed / guaranteed alpha spawn */`)
  lines.push(`  alpha?: boolean`)
  lines.push(`}`)
  lines.push(``)
  lines.push(`export type LaSubregionSpawns = {`)
  lines.push(`  regionId: HisuiRegionId`)
  lines.push(`  subregionId: string`)
  lines.push(`  pokemon: LaPokemonSpawn[]`)
  lines.push(`}`)
  lines.push(``)
  lines.push(`/** Wild spawns aggregated to Hisui subregions (from PLA datamined spawn maps). */`)
  lines.push(`export const LA_SUBREGION_SPAWNS: LaSubregionSpawns[] = ${JSON.stringify(all, null, 2)}`)
  lines.push(``)
  lines.push(`const bySub = new Map(LA_SUBREGION_SPAWNS.map((s) => [s.subregionId, s]))`)
  lines.push(``)
  lines.push(`export function spawnsForSubregion(subregionId: string | null) {`)
  lines.push(`  if (!subregionId) return null`)
  lines.push(`  return bySub.get(subregionId) ?? null`)
  lines.push(`}`)
  lines.push(``)
  lines.push(`export function spawnsForRegion(regionId: HisuiRegionId) {`)
  lines.push(`  return LA_SUBREGION_SPAWNS.filter((s) => s.regionId === regionId)`)
  lines.push(`}`)
  lines.push(``)
  lines.push(`export function hisuiLocationsForDex(dex: number) {`)
  lines.push(`  const hits: { regionId: HisuiRegionId; subregionId: string }[] = []`)
  lines.push(`  for (const entry of LA_SUBREGION_SPAWNS) {`)
  lines.push(`    if (entry.pokemon.some((p) => p.dex === dex)) {`)
  lines.push(`      hits.push({ regionId: entry.regionId, subregionId: entry.subregionId })`)
  lines.push(`    }`)
  lines.push(`  }`)
  lines.push(`  return hits`)
  lines.push(`}`)
  lines.push(``)

  const out = path.join(root, 'src/data/laSpawns.ts')
  fs.writeFileSync(out, lines.join('\n'))
  console.log('Wrote', out, `(${all.length} subregion entries)`)
}

main()
