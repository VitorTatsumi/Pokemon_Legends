/**
 * Calibrate MapGenie Hisui lat/lng onto our overview + detail maps,
 * then regenerate wisps / unowns / alphas / camps (and noble map coords).
 *
 * Source: scripts/mapgenie-locs.json (scraped from mapgenie.io)
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'mapgenie-locs.json'), 'utf8'))

const REGION_BY_MG = data.regions
const locs = data.locs
const extra = JSON.parse(fs.readFileSync(path.join(__dirname, 'mapgenie-extra.json'), 'utf8'))

const OVERVIEW_CENTERS = {
  jubilife: { x: 30.3, y: 57.6 },
  obsidian: { x: 40.7, y: 66.8 },
  crimson: { x: 70.8, y: 60.6 },
  cobalt: { x: 86.8, y: 45.5 },
  coronet: { x: 49.4, y: 44.8 },
  alabaster: { x: 37.0, y: 12.7 },
}

/** Parse subregions + detail coords from hisuiRegions.ts */
function loadSubregions() {
  const src = fs.readFileSync(path.join(root, 'src/data/hisuiRegions.ts'), 'utf8')
  const regions = {}
  const regionBlocks = [
    ...src.matchAll(
      /id: '(jubilife|obsidian|crimson|cobalt|coronet|alabaster)',[\s\S]*?subregions: \[([\s\S]*?)\],\s*\},/g,
    ),
  ]
  for (const m of regionBlocks) {
    const id = m[1]
    const body = m[2]
    const subs = []
    for (const s of body.matchAll(
      /sub\(\s*'([^']+)',\s*'([^']*)',\s*'([^']*)'(?:,\s*\{\s*x:\s*([\d.]+),\s*y:\s*([\d.]+)\s*\})?\s*\)/g,
    )) {
      subs.push({
        id: s[1],
        nameEn: s[2],
        namePt: s[3],
        map: s[4] != null ? { x: +s[4], y: +s[5] } : null,
      })
    }
    regions[id] = subs
  }
  return regions
}

const SUBS = loadSubregions()

function norm(s) {
  return String(s || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

/** Alias MapGenie area titles → our subregion ids when names diverge. */
const AREA_ALIASES = {
  'sandgem flat': 'sandgem-flats',
  'aipom hill': 'aipom-hills',
  'natures pantry': 'nature-pantry',
  'moonview arena': 'moonview-arena',
  'brava arena': 'brava-arena',
  'grandtree arena': 'grandtree-arena',
  'icepeak arena': 'icepeak-arena',
  'molten arena': 'molten-arena',
  'practice field': 'practice-field',
  'front gate': 'front-gate',
  'galaxy hall': 'galaxy-hall',
  'training grounds': 'training-grounds',
  'photo studio': 'photo-studio',
  'photography studio': 'photo-studio',
  'canalas clothing shop': 'canala-clothing',
  'first rate clothier': 'canala-clothing',
  'general store': 'general-store',
  'first rate general store': 'general-store',
  'choys shop': 'choy-shop',
  'the wallflower': 'wallflower',
  'your quarters': 'wallflower',
  pastures: 'pastures',
  craftworks: 'craftworks',
  farm: 'farm',
}

function findSubregion(regionId, title) {
  const n = norm(title)
  if (AREA_ALIASES[n]) {
    const hit = SUBS[regionId]?.find((s) => s.id === AREA_ALIASES[n])
    if (hit) return hit
  }
  const list = SUBS[regionId] || []
  let best = null
  let bestScore = 0
  for (const s of list) {
    const a = norm(s.nameEn)
    const b = norm(s.id.replace(/-/g, ' '))
    if (a === n || b === n) return s
    if (a.includes(n) || n.includes(a) || b.includes(n) || n.includes(b)) {
      const score = Math.min(a.length, n.length)
      if (score > bestScore) {
        bestScore = score
        best = s
      }
    }
  }
  return best
}

/** Least-squares affine: x = a*lng + b*lat + c ; y = d*lng + e*lat + f */
function fitAffine(points) {
  if (points.length < 3) return null
  // Solve 3x3 for x and y separately via normal equations
  const solve = (getTarget) => {
    let Sll = 0,
      Slt = 0,
      Sl1 = 0,
      Stt = 0,
      St1 = 0,
      S11 = 0
    let Tl = 0,
      Tt = 0,
      T1 = 0
    for (const p of points) {
      const l = p.lng
      const t = p.lat
      const y = getTarget(p)
      Sll += l * l
      Slt += l * t
      Sl1 += l
      Stt += t * t
      St1 += t
      S11 += 1
      Tl += l * y
      Tt += t * y
      T1 += y
    }
    // Gauss eliminate 3x3
    const M = [
      [Sll, Slt, Sl1, Tl],
      [Slt, Stt, St1, Tt],
      [Sl1, St1, S11, T1],
    ]
    for (let i = 0; i < 3; i++) {
      let piv = i
      for (let r = i + 1; r < 3; r++) if (Math.abs(M[r][i]) > Math.abs(M[piv][i])) piv = r
      ;[M[i], M[piv]] = [M[piv], M[i]]
      const div = M[i][i]
      if (Math.abs(div) < 1e-12) return null
      for (let c = i; c < 4; c++) M[i][c] /= div
      for (let r = 0; r < 3; r++) {
        if (r === i) continue
        const f = M[r][i]
        for (let c = i; c < 4; c++) M[r][c] -= f * M[i][c]
      }
    }
    return [M[0][3], M[1][3], M[2][3]]
  }
  const X = solve((p) => p.x)
  const Y = solve((p) => p.y)
  if (!X || !Y) return null
  return { a: X[0], b: X[1], c: X[2], d: Y[0], e: Y[1], f: Y[2] }
}

function applyAffine(aff, lng, lat) {
  return {
    x: +(aff.a * lng + aff.b * lat + aff.c).toFixed(2),
    y: +(aff.d * lng + aff.e * lat + aff.f).toFixed(2),
  }
}

function clampPct(p) {
  return {
    x: Math.min(98, Math.max(2, p.x)),
    y: Math.min(98, Math.max(2, p.y)),
  }
}

function residual(aff, p) {
  const got = applyAffine(aff, p.lng, p.lat)
  return Math.hypot(got.x - p.x, got.y - p.y)
}

/** Fit affine, drop worst outliers, refit until stable. */
function fitAffineRobust(points, maxRmse = 6) {
  let pts = points.slice()
  let aff = fitAffine(pts)
  if (!aff) return { aff: null, pts }
  for (let iter = 0; iter < 8 && pts.length > 6; iter++) {
    const errs = pts.map((p) => ({ p, e: residual(aff, p) }))
    errs.sort((a, b) => b.e - a.e)
    const rmse = Math.sqrt(errs.reduce((s, x) => s + x.e * x.e, 0) / errs.length)
    if (rmse <= maxRmse && errs[0].e < maxRmse * 1.8) break
    pts = errs.slice(1).map((x) => x.p)
    aff = fitAffine(pts)
    if (!aff) break
  }
  return { aff, pts }
}

/** Build control points per region from MapGenie areas (+ camps / FT / arenas). */
function buildDetailTransforms() {
  const areas = locs.filter((l) => l.cat === 'area' || l.cat === 'camp')
  for (const loc of extra.jubi || []) {
    areas.push({
      cat: 'area',
      title: loc.title,
      lat: loc.lat,
      lng: loc.lng,
      region_id: 1209,
    })
  }
  for (const loc of extra.arenas || []) {
    areas.push({
      cat: 'area',
      title: loc.title,
      lat: loc.lat,
      lng: loc.lng,
      region_id: loc.region_id,
    })
  }
  const transforms = {}
  const stats = {}
  for (const regionId of Object.keys(SUBS)) {
    const pts = []
    for (const loc of areas) {
      const rid = REGION_BY_MG[String(loc.region_id)]
      if (rid !== regionId) continue
      const sub = findSubregion(regionId, loc.title)
      if (!sub?.map) continue
      pts.push({ lng: loc.lng, lat: loc.lat, x: sub.map.x, y: sub.map.y, title: loc.title, sub: sub.id })
    }
    const seen = new Set()
    const uniq = []
    for (const p of pts) {
      if (seen.has(p.sub)) continue
      seen.add(p.sub)
      uniq.push(p)
    }
    const { aff, pts: kept } = fitAffineRobust(uniq)
    transforms[regionId] = aff
    const rmse = aff
      ? Math.sqrt(kept.reduce((s, p) => s + residual(aff, p) ** 2, 0) / kept.length)
      : null
    stats[regionId] = {
      controls: kept.length,
      raw: uniq.length,
      ok: Boolean(aff),
      rmse: rmse != null ? +rmse.toFixed(2) : null,
      sample: kept.slice(0, 5).map((p) => p.title),
    }
  }
  return { transforms, stats }
}

/** Overview transform: MapGenie camp/FT → our region-ish overview positions via known camps. */
function buildOverviewTransform() {
  const campOverview = {
    'Fieldlands Camp': { region: 'obsidian', x: 42.3, y: 66.8 },
    'Heights Camp': { region: 'obsidian', x: 42.7, y: 67.9 },
    'Mirelands Camp': { region: 'crimson', x: 56.8, y: 60.4 },
    'Bogbound Camp': { region: 'crimson', x: 55.3, y: 61.2 },
    'Beachside Camp': { region: 'cobalt', x: 78.5, y: 48.2 },
    'Coastlands Camp': { region: 'cobalt', x: 82.0, y: 42.5 },
    'Highlands Camp': { region: 'coronet', x: 52.5, y: 48.5 },
    'Mountain Camp': { region: 'coronet', x: 55.0, y: 42.0 },
    'Summit Camp': { region: 'coronet', x: 48.0, y: 38.5 },
    'Snowfields Camp': { region: 'alabaster', x: 36.5, y: 18.0 },
    'Icepeak Camp': { region: 'alabaster', x: 34.0, y: 10.5 },
  }
  // Jubilife FT → overview near village center with offsets
  const ftOverview = {
    'Galaxy Hall': { x: 32.7, y: 57.6 },
    'Training Grounds': { x: 32.5, y: 59.9 },
    'Practice Field': { x: 29.2, y: 61.4 },
    Farm: { x: 27.1, y: 56.7 },
    'Front Gate': { x: 31.8, y: 54.6 },
  }
  const pts = []
  for (const loc of locs) {
    if (campOverview[loc.title]) {
      const o = campOverview[loc.title]
      pts.push({ lng: loc.lng, lat: loc.lat, x: o.x, y: o.y })
    }
    if (ftOverview[loc.title]) {
      const o = ftOverview[loc.title]
      pts.push({ lng: loc.lng, lat: loc.lat, x: o.x, y: o.y })
    }
  }
  // Also use region centers vs mean of camps in region as soft anchors
  for (const [regionId, center] of Object.entries(OVERVIEW_CENTERS)) {
    const camps = locs.filter((l) => l.cat === 'camp' && REGION_BY_MG[String(l.region_id)] === regionId)
    if (!camps.length) continue
    const lng = camps.reduce((s, c) => s + c.lng, 0) / camps.length
    const lat = camps.reduce((s, c) => s + c.lat, 0) / camps.length
    pts.push({ lng, lat, x: center.x, y: center.y })
  }
  return fitAffine(pts)
}

function nearestSubregion(regionId, lng, lat, detailAff) {
  const list = (SUBS[regionId] || []).filter((s) => s.map)
  if (!list.length) return 'unknown'
  if (!detailAff) {
    // fallback: first sub
    return list[0].id
  }
  const pos = applyAffine(detailAff, lng, lat)
  let best = list[0]
  let bestD = Infinity
  for (const s of list) {
    const dx = s.map.x - pos.x
    const dy = s.map.y - pos.y
    const d = dx * dx + dy * dy
    if (d < bestD) {
      bestD = d
      best = s
    }
  }
  return best.id
}

function stripMd(s) {
  return String(s || '')
    .replace(/\*\*/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function locNote(loc) {
  const d = stripMd(loc.description)
  const m = d.match(/Location:\s*(.+?)(?:\s*Hint:|$)/i) || d.match(/Hint:\s*(.+?)(?:\s*Location:|$)/i)
  if (m) return m[1].slice(0, 160)
  if (d) return d.slice(0, 160)
  return ''
}

// Dex map from existing alphas + common names
function loadDexMap() {
  const map = new Map()
  try {
    const src = fs.readFileSync(path.join(root, 'src/data/laAlphas.ts'), 'utf8')
    for (const m of src.matchAll(/speciesName: '([^']+)',\s*[\s\S]*?dex: (\d+)/g)) {
      map.set(norm(m[1]), +m[2])
    }
    for (const m of src.matchAll(/dex: (\d+),\s*speciesName: '([^']+)'/g)) {
      map.set(norm(m[2]), +m[1])
    }
  } catch {}
  const extras = {
    luxray: 405,
    steelix: 208,
    gligar: 207,
    gabite: 444,
    gliscor: 472,
    probopass: 476,
    luxio: 404,
    rapidash: 78,
    heracross: 214,
    graveler: 75,
    stantler: 234,
    snorlax: 143,
    staravia: 397,
    bibarel: 400,
    lopunny: 428,
    alakazam: 65,
    infernape: 392,
    parasect: 47,
    floatzel: 419,
    kricketune: 402,
    scyther: 123,
    gyarados: 130,
    blissey: 242,
    ursaring: 217,
    'hisuian sliggoo': 705,
    torterra: 389,
    toxicroak: 454,
    pachirisu: 417,
    hippowdon: 450,
    vespiquen: 416,
    onix: 95,
    tangrowth: 465,
    honchkrow: 430,
    lickilicky: 463,
    rhyhorn: 111,
    skuntank: 435,
    carnivine: 455,
    roserade: 407,
    yanmega: 469,
    raichu: 26,
    ninetales: 38,
    gastrodon: 423,
    empoleon: 395,
    mothim: 414,
    lumineon: 457,
    purugly: 432,
    octillery: 224,
    machoke: 67,
    drapion: 452,
    mantine: 226,
    walrein: 365,
    golduck: 55,
    ambipom: 424,
    sealeo: 364,
    dusknoir: 477,
    chansey: 113,
    electivire: 466,
    haunter: 93,
    rhyperior: 464,
    golem: 76,
    'hisuian goodra': 706,
    crobat: 169,
    mismagius: 429,
    budew: 406,
    bronzong: 437,
    clefable: 36,
    'hisuian basculin': 550,
    gallade: 475,
    gardevoir: 282,
    machamp: 68,
    glalie: 362,
    garchomp: 445,
    rufflet: 627,
    piloswine: 221,
    mamoswine: 473,
    swinub: 220,
    froslass: 478,
    'hisuian sneasel': 215,
    lucario: 448,
    abomasnow: 460,
    chimecho: 358,
    electabuzz: 125,
    magikarp: 129,
    golbat: 42,
    tentacruel: 73,
    whiscash: 340,
    'hisuian qwilfish': 211,
    zubat: 41,
  }
  for (const [k, v] of Object.entries(extras)) map.set(k, v)
  return map
}

const DEX = loadDexMap()

function alphaSpecies(title) {
  return title.replace(/^Alpha\s+/i, '').trim()
}

function regionOf(loc) {
  return REGION_BY_MG[String(loc.region_id)] || 'obsidian'
}

const { transforms: detailAff, stats: detailStats } = buildDetailTransforms()
const overviewAff = buildOverviewTransform()

console.log('Detail transform stats:', detailStats)
console.log('Overview affine:', overviewAff)

function coordsFor(loc) {
  const regionId = regionOf(loc)
  const aff = detailAff[regionId]
  let detailMap = aff ? clampPct(applyAffine(aff, loc.lng, loc.lat)) : null
  let map = overviewAff ? clampPct(applyAffine(overviewAff, loc.lng, loc.lat)) : { ...OVERVIEW_CENTERS[regionId] }
  const subregionId = nearestSubregion(regionId, loc.lng, loc.lat, aff)
  return { regionId, subregionId, map, detailMap }
}

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

// ——— Wisps ———
const wisps = locs
  .filter((l) => l.cat === 'wisp')
  .sort((a, b) => a.id - b.id)
  .map((loc, i) => {
    const c = coordsFor(loc)
    const n = i + 1
    const noteEn = locNote(loc) || 'Visible at night; listen for the chime.'
    const notePt = locNote(loc)
      ? locNote(loc)
      : 'Visível à noite; ouça o som característico.'
    return { n, ...c, noteEn, notePt, mgId: loc.id }
  })

const wispTs = `import type { LaPinItem } from './laCollectible'

/** 107 wisps for Eerie Apparitions in the Night — positions calibrated from MapGenie. */
export type LaWisp = LaPinItem & {
  /** Percent on the region's detail map. */
  detailMap?: { x: number; y: number }
}

export const LA_WISPS: LaWisp[] = [
${wisps
  .map(
    (w) => `  {
    id: 'w-${String(w.n).padStart(3, '0')}',
    name: { en: 'Wisp ${w.n}', pt: 'Fogo-fátuo ${w.n}' },
    description: { en: 'Odd Keystone wisp for Request 22.', pt: 'Fogo-fátuo da Pedra Espírito (Pedido 22).' },
    regionId: '${w.regionId}',
    subregionId: '${w.subregionId}',
    map: { x: ${w.map.x}, y: ${w.map.y} },
    detailMap: { x: ${w.detailMap?.x ?? 50}, y: ${w.detailMap?.y ?? 50} },
    note: { en: '${esc(w.noteEn)}', pt: '${esc(w.notePt)}' },
  }`,
  )
  .join(',\n')}
]
`

fs.writeFileSync(path.join(root, 'src/data/laWisps.ts'), wispTs)
console.log('Wrote laWisps.ts', wisps.length)

// ——— Unowns ———
const unowns = locs
  .filter((l) => l.cat === 'unown')
  .sort((a, b) => a.title.localeCompare(b.title))
  .map((loc) => {
    const form = loc.title.replace(/^Unown\s+/i, '').trim()
    const c = coordsFor(loc)
    const hint = locNote(loc)
    return { form, ...c, hint }
  })

const unownTs = `import type { HisuiRegionId } from './hisuiRegions'
import type { Localized } from './laCollectible'

export type LaUnown = {
  id: string
  name: Localized
  description?: Localized
  regionId: HisuiRegionId
  subregionId: string
  map: { x: number; y: number }
  detailMap?: { x: number; y: number }
  note?: Localized
  form: string
}

export const LA_UNOWNS: LaUnown[] = [
${unowns
  .map((u) => {
    const idForm = u.form === '!' ? 'exclaim' : u.form === '?' ? 'question' : u.form.toLowerCase()
    const note = u.hint || 'Check walls and ruins carefully.'
    return `  {
    id: 'unown-${idForm}',
    name: { en: 'Unown ${u.form}', pt: 'Unown ${u.form}' },
    description: { en: 'Unown form ${u.form}.', pt: 'Forma ${u.form} do Unown.' },
    regionId: '${u.regionId}' as const,
    subregionId: '${u.subregionId}',
    map: { x: ${u.map.x}, y: ${u.map.y} },
    detailMap: { x: ${u.detailMap?.x ?? 50}, y: ${u.detailMap?.y ?? 50} },
    note: { en: '${esc(note)}', pt: '${esc(note)}' },
    form: '${esc(u.form)}',
  }`
  })
  .join(',\n')}
]
`

fs.writeFileSync(path.join(root, 'src/data/laUnowns.ts'), unownTs)
console.log('Wrote laUnowns.ts', unowns.length)

// ——— Alphas ———
const alphas = locs
  .filter((l) => l.cat === 'alpha')
  .sort((a, b) => a.id - b.id)
  .map((loc) => {
    const species = alphaSpecies(loc.title)
    const c = coordsFor(loc)
    const dex = DEX.get(norm(species)) || DEX.get(norm(species.replace(/^hisuian\s+/i, ''))) || 0
    const level = (stripMd(loc.description).match(/Level:\s*(\d+)/i) || [])[1]
    return { species, dex, level, ...c, mgId: loc.id }
  })

const alphaTs = `import type { HisuiRegionId } from './hisuiRegions'
import type { Localized } from './laCollectible'

export type LaAlpha = {
  id: string
  name: Localized
  description?: Localized
  regionId: HisuiRegionId
  subregionId: string
  map: { x: number; y: number }
  detailMap?: { x: number; y: number }
  dex: number
  speciesName: string
}

export const LA_ALPHAS: LaAlpha[] = [
${alphas
  .map((a, i) => {
    const slug = norm(a.species).replace(/\s+/g, '-')
    const desc = a.level
      ? `Fixed alpha spawn (Lv. ${a.level}) near ${a.subregionId}.`
      : `Fixed alpha spawn near ${a.subregionId}.`
    const descPt = a.level
      ? `Spawn alfa fixo (Nv. ${a.level}) perto de ${a.subregionId}.`
      : `Spawn alfa fixo perto de ${a.subregionId}.`
    return `  {
    id: 'alpha-${a.dex || 'x'}-${slug}-${i + 1}',
    name: { en: 'Alpha ${esc(a.species)}', pt: 'Alfa ${esc(a.species)}' },
    description: { en: '${esc(desc)}', pt: '${esc(descPt)}' },
    regionId: '${a.regionId}' as const,
    subregionId: '${a.subregionId}',
    map: { x: ${a.map.x}, y: ${a.map.y} },
    detailMap: { x: ${a.detailMap?.x ?? 50}, y: ${a.detailMap?.y ?? 50} },
    dex: ${a.dex},
    speciesName: '${esc(a.species)}',
  }`
  })
  .join(',\n')}
]
`

fs.writeFileSync(path.join(root, 'src/data/laAlphas.ts'), alphaTs)
console.log('Wrote laAlphas.ts', alphas.length, 'missing dex', alphas.filter((a) => !a.dex).map((a) => a.species))

// ——— Camps ———
const campPt = {
  'Fieldlands Camp': 'Acampamento da Planície',
  'Heights Camp': 'Acampamento das Alturas',
  'Mirelands Camp': 'Acampamento do Pântano',
  'Bogbound Camp': 'Acampamento do Brejo',
  'Beachside Camp': 'Acampamento da Praia',
  'Coastlands Camp': 'Acampamento da Costa',
  'Highlands Camp': 'Acampamento das Terras Altas',
  'Mountain Camp': 'Acampamento da Montanha',
  'Summit Camp': 'Acampamento do Cume',
  'Snowfields Camp': 'Acampamento das Neves',
  'Icepeak Camp': 'Acampamento do Pico Gelado',
}

const camps = locs
  .filter((l) => l.cat === 'camp')
  .sort((a, b) => a.title.localeCompare(b.title))
  .map((loc) => {
    const c = coordsFor(loc)
    // Prefer exact subregion id for camps
    const sub = findSubregion(c.regionId, loc.title)
    if (sub) c.subregionId = sub.id
    return { title: loc.title, ...c, desc: stripMd(loc.description) }
  })

const campTs = `import type { HisuiRegionId } from './hisuiRegions'
import type { Localized } from './laCollectible'

export type LaCamp = {
  id: string
  name: Localized
  description?: Localized
  regionId: HisuiRegionId
  subregionId: string
  map: { x: number; y: number }
  detailMap?: { x: number; y: number }
  services: Localized
}

export const LA_CAMPS: LaCamp[] = [
${camps
  .map((c) => {
    const pt = campPt[c.title] || c.title
    return `  {
    id: '${c.subregionId}',
    name: { en: '${esc(c.title)}', pt: '${esc(pt)}' },
    description: {
      en: 'Base camp with crafting, storage, and a general store mirror of Choy\\'s stock.',
      pt: 'Acampamento com craft, armazenamento e estoque espelhado da loja do Choy.',
    },
    regionId: '${c.regionId}' as const,
    subregionId: '${c.subregionId}',
    map: { x: ${c.map.x}, y: ${c.map.y} },
    detailMap: { x: ${c.detailMap?.x ?? 50}, y: ${c.detailMap?.y ?? 50} },
    services: {
      en: 'Rest · Craft · Store · Fast travel',
      pt: 'Descanso · Craft · Loja · Viagem rápida',
    },
  }`
  })
  .join(',\n')}
]
`

fs.writeFileSync(path.join(root, 'src/data/laCamps.ts'), campTs)
console.log('Wrote laCamps.ts', camps.length)

// ——— Nobles: patch map/detailMap in laLegendaries.ts ———
const nobles = locs.filter((l) => l.cat === 'noble')
let legSrc = fs.readFileSync(path.join(root, 'src/data/laLegendaries.ts'), 'utf8')
if (!legSrc.includes('detailMap?:')) {
  legSrc = legSrc.replace(
    '  map: { x: number; y: number }\n',
    '  map: { x: number; y: number }\n  detailMap?: { x: number; y: number }\n',
  )
}
for (const loc of nobles) {
  const c = coordsFor(loc)
  const key = loc.title.toLowerCase()
  const re = new RegExp(
    `(id: '${key}'[\\s\\S]*?)map: \\{ x: [\\d.]+, y: [\\d.]+ \\}(?:,\\s*\\r?\\n\\s*detailMap: \\{ x: [\\d.]+, y: [\\d.]+ \\})?`,
  )
  if (!re.test(legSrc)) {
    console.warn('Noble not found in legendaries:', loc.title)
    continue
  }
  legSrc = legSrc.replace(
    re,
    `$1map: { x: ${c.map.x}, y: ${c.map.y} },\n    detailMap: { x: ${c.detailMap?.x ?? 50}, y: ${c.detailMap?.y ?? 50} }`,
  )
}
fs.writeFileSync(path.join(root, 'src/data/laLegendaries.ts'), legSrc)
console.log('Patched nobles in laLegendaries.ts', nobles.length)

// Sanity: RMSE of detail transforms
for (const [regionId, aff] of Object.entries(detailAff)) {
  if (!aff) continue
  const areas = locs.filter((l) => l.cat === 'area' && regionOf(l) === regionId)
  let n = 0
  let se = 0
  for (const loc of areas) {
    const sub = findSubregion(regionId, loc.title)
    if (!sub?.map) continue
    const p = applyAffine(aff, loc.lng, loc.lat)
    se += (p.x - sub.map.x) ** 2 + (p.y - sub.map.y) ** 2
    n++
  }
  console.log(`RMSE ${regionId}:`, n ? Math.sqrt(se / n).toFixed(2) : 'n/a', `(n=${n})`)
}
