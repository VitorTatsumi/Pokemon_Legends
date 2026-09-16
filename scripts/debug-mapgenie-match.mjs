import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'mapgenie-locs.json'), 'utf8'))
const src = fs.readFileSync(path.join(__dirname, '../src/data/hisuiRegions.ts'), 'utf8')

function loadSubregions() {
  const regions = {}
  for (const m of src.matchAll(
    /id: '(jubilife|obsidian|crimson|cobalt|coronet|alabaster)',[\s\S]*?subregions: \[([\s\S]*?)\],\s*\},/g,
  )) {
    const id = m[1]
    const subs = []
    for (const s of m[2].matchAll(
      /sub\(\s*'([^']+)',\s*'([^']*)',\s*'([^']*)'(?:,\s*\{\s*x:\s*([\d.]+),\s*y:\s*([\d.]+)\s*\})?\s*\)/g,
    )) {
      subs.push({ id: s[1], nameEn: s[2], map: s[4] ? { x: +s[4], y: +s[5] } : null })
    }
    regions[id] = subs
  }
  return regions
}
const SUBS = loadSubregions()
const norm = (s) =>
  String(s || '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
function findSub(regionId, title) {
  const n = norm(title)
  const list = SUBS[regionId] || []
  for (const s of list) {
    const a = norm(s.nameEn)
    if (a === n || a.includes(n) || n.includes(a)) return s
  }
  return null
}

for (const region of ['cobalt', 'alabaster', 'jubilife']) {
  console.log('\n==', region)
  for (const loc of data.locs.filter((l) => l.cat === 'area' || l.cat === 'camp')) {
    const rid = data.regions[String(loc.region_id)]
    if (rid !== region) continue
    const sub = findSub(region, loc.title)
    console.log(
      loc.title,
      '->',
      sub ? `${sub.id} ${JSON.stringify(sub.map)}` : 'NO MATCH',
      'lng',
      loc.lng.toFixed(3),
      'lat',
      loc.lat.toFixed(3),
    )
  }
}
console.log(
  '\njubilife titles',
  data.locs.filter((l) => data.regions[String(l.region_id)] === 'jubilife').map((l) => l.cat + ':' + l.title),
)
