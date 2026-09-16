/**
 * 1) Regenerate approximate screw priors from generate-screws anchors
 * 2) Snap each ID to nearest unused Polygon pin
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

// Update generate-screws anchors to Polygon-aligned landmarks / WZ (kept WZ from our calibrated set)
const genPath = path.join(root, 'scripts/generate-screws.mjs')
let gen = fs.readFileSync(genPath, 'utf8')
gen = gen
  .replace(/hotelZ: \[46, 58\]/, 'hotelZ: [65.02, 84.44]')
  .replace(/racine: \[72, 82\]/, 'racine: [83.55, 77.37]')
  .replace(/restNah: \[54, 34\]/, 'restNah: [89.42, 66.7]')
  .replace(/restYeah: \[60, 30\]/, 'restYeah: [32.75, 23.86]')
  .replace(/restWow: \[66, 28\]/, 'restWow: [58.59, 35.73]')
  .replace(/looker: \[42, 28\]/, 'looker: [44.68, 20.9]')
  .replace(/museum: \[38, 22\]/, 'museum: [60.59, 5.12]')
  .replace(/academie: \[58, 28\]/, 'academie: [58, 28]')
  .replace(/researchLab: \[62, 36\]/, 'researchLab: [53.59, 95.88]')
  .replace(/rustHQ: \[28, 70\]/, 'rustHQ: [33.07, 60.95]')
  .replace(/justiceDojo: \[34, 40\]/, 'justiceDojo: [68.15, 49.71]')
  .replace(/jaunePC: \[86, 38\]/, 'jaunePC: [90.06, 33.5]')
  .replace(/hotelRichissime: \[52, 18\]/, 'hotelRichissime: [74.09, 10.6]')
  .replace(/prism: \[50\.2, 49\.9\]/, 'prism: [50.17, 54.57]')
fs.writeFileSync(genPath, gen, 'utf8')

execSync('node scripts/generate-screws.mjs', { cwd: root, stdio: 'inherit' })

const screwsPoly = JSON.parse(
  fs.readFileSync(path.join(root, 'scripts/_polygon_screws.json'), 'utf8'),
)
function pct(n) {
  return Math.round(n * 10000) / 100
}

const screwsTs = fs.readFileSync(path.join(root, 'src/data/colorfulScrews.ts'), 'utf8')
const current = [
  ...screwsTs.matchAll(
    /\{\s*id:\s*(\d+),\s*districtKey:\s*'(\w+)',\s*location:\s*\{\s*en:\s*((?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'))\s*,\s*pt:\s*((?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'))\s*\},\s*map:\s*\{\s*x:\s*([\d.]+),\s*y:\s*([\d.]+)\s*\},?\s*\}/g,
  ),
].map((m) => ({
  id: Number(m[1]),
  districtKey: m[2],
  en: JSON.parse(m[3].startsWith("'") ? m[3].replace(/^'|'$/g, '"').replace(/\\'/g, "'") : m[3]),
  pt: JSON.parse(m[4].startsWith("'") ? '"'+m[4].slice(1,-1).replace(/\\'/g,"'")+'"' : m[4]),
  x: Number(m[5]),
  y: Number(m[6]),
}))

// generate-screws uses JSON.stringify so en/pt are double-quoted — fix parse simply:
const current2 = [
  ...screwsTs.matchAll(
    /id:\s*(\d+),\s*districtKey:\s*'(\w+)',\s*location:\s*\{\s*en:\s*("(?:\\.|[^"\\])*")\s*,\s*pt:\s*("(?:\\.|[^"\\])*")\s*\},\s*map:\s*\{\s*x:\s*([\d.]+),\s*y:\s*([\d.]+)/g,
  ),
].map((m) => ({
  id: Number(m[1]),
  districtKey: m[2],
  en: JSON.parse(m[3]),
  pt: JSON.parse(m[4]),
  x: Number(m[5]),
  y: Number(m[6]),
}))

const list = current2.length ? current2 : current
console.log('priors', list.length)

const pins = screwsPoly.map((p, i) => ({ i, x: pct(p.x), y: pct(p.y), popup: p.popup }))
const used = new Set()
const assigned = []

for (const s of list) {
  let best = null
  let bestD = Infinity
  for (const p of pins) {
    if (used.has(p.i)) continue
    const d = (p.x - s.x) ** 2 + (p.y - s.y) ** 2
    if (d < bestD) {
      bestD = d
      best = p
    }
  }
  used.add(best.i)
  assigned.push({ ...s, x: best.x, y: best.y })
}

function esc(s) {
  return JSON.stringify(s)
}

const out = `export type Localized = { en: string; pt: string }

export type ScrewDistrict = 'vert' | 'rouge' | 'bleu' | 'jaune' | 'magenta'

export type ColorfulScrew = {
  id: number
  districtKey: ScrewDistrict
  location: Localized
  map: { x: number; y: number }
}

/** Colorful Screw positions snapped to Polygon interactive map pins (%). */
export const COLORFUL_SCREWS: ColorfulScrew[] = [
${assigned
  .map(
    (a) => `  {
    id: ${a.id},
    districtKey: '${a.districtKey}',
    location: { en: ${esc(a.en)}, pt: ${esc(a.pt)} },
    map: { x: ${a.x}, y: ${a.y} },
  }`,
  )
  .join(',\n')},
]
`

fs.writeFileSync(path.join(root, 'src/data/colorfulScrews.ts'), out, 'utf8')
console.log('snapped', assigned.length)
