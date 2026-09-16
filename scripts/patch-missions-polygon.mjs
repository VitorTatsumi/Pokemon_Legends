/**
 * Patch missions.ts:
 * - update key LANDMARKS from Polygon POIs
 * - add map:{x,y} overrides for side missions from Polygon
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const missionsPath = path.join(root, 'src/data/missions.ts')
const sideCoords = JSON.parse(
  fs.readFileSync(path.join(root, 'scripts/_polygon_side_coords.json'), 'utf8'),
)

function pct(n) {
  return Math.round(n * 10000) / 100
}

const pois = {
  gare: [0.7825149713, 0.8844888106],
  hotelZ: [0.6501787843, 0.8444157852],
  prism: [0.5017172584, 0.5456548694],
  quasartico: [0.2698252064, 0.2502012309],
  rustHQ: [0.3306968602, 0.6095320605],
  justiceDojo: [0.6814681577, 0.4971297848],
  looker: [0.4468243533, 0.2089927449],
  researchLab: [0.5359394409, 0.9588298291],
  museum: [0.6059017012, 0.05123793219],
  // extras that may exist as landmarks
  hotelRichissime: [0.7409028726, 0.1059910563],
  racine: [0.8355181755, 0.773702983],
}

let src = fs.readFileSync(missionsPath, 'utf8')

// Ensure Mission type has optional map
if (!src.includes('map?: { x: number; y: number }')) {
  src = src.replace(
    `export type Mission = {
  id: string
  kind: MissionKind
  number: number
  name: Localized
  description: Localized
  location: Localized
  unlock: Localized
  rewards?: Localized
  requester?: string
  landmark: LandmarkId
}`,
    `export type Mission = {
  id: string
  kind: MissionKind
  number: number
  name: Localized
  description: Localized
  location: Localized
  unlock: Localized
  rewards?: Localized
  requester?: string
  landmark: LandmarkId
  /** Exact map % from Polygon when available (overrides landmark scatter). */
  map?: { x: number; y: number }
}`,
  )
}

// Update landmark coordinates when landmark key exists
for (const [key, [x, y]] of Object.entries(pois)) {
  const re = new RegExp(`("${key}":\\s*\\{\\s*"x":\\s*)([\\d.]+)(,\\s*"y":\\s*)([\\d.]+)`)
  if (re.test(src)) {
    src = src.replace(re, `$1${pct(x)}$3${pct(y)}`)
    console.log('landmark', key, pct(x), pct(y))
  } else {
    console.log('landmark missing', key)
  }
}

// Update missionMapPosition to prefer mission.map
src = src.replace(
  `export function missionMapPosition(
  mission: Mission,
  siblingsAtLandmark: Mission[],
): { x: number; y: number } {
  const base = LANDMARKS[mission.landmark]
  const idx = siblingsAtLandmark.findIndex((m) => m.id === mission.id)
  const total = siblingsAtLandmark.length
  if (total <= 1 || idx < 0) return { x: base.x, y: base.y }
  const angle = (idx / total) * Math.PI * 2
  const radius = 1.6 + (idx % 4) * 0.35
  return {
    x: Math.min(96, Math.max(4, base.x + Math.cos(angle) * radius)),
    y: Math.min(96, Math.max(4, base.y + Math.sin(angle) * radius)),
  }
}`,
  `export function missionMapPosition(
  mission: Mission,
  siblingsAtLandmark: Mission[],
): { x: number; y: number } {
  if (mission.map) return mission.map
  const base = LANDMARKS[mission.landmark]
  const idx = siblingsAtLandmark.findIndex((m) => m.id === mission.id)
  const total = siblingsAtLandmark.length
  if (total <= 1 || idx < 0) return { x: base.x, y: base.y }
  const angle = (idx / total) * Math.PI * 2
  const radius = 1.6 + (idx % 4) * 0.35
  return {
    x: Math.min(96, Math.max(4, base.x + Math.cos(angle) * radius)),
    y: Math.min(96, Math.max(4, base.y + Math.sin(angle) * radius)),
  }
}`,
)

// Inject/replace map on side missions: match blocks with kind: 'side' and number
let patched = 0
let missing = 0

src = src.replace(
  /(id:\s*'side-(\d+)'[\s\S]*?landmark:\s*"[^"]+")(,\s*map:\s*\{\s*x:\s*[\d.]+,\s*y:\s*[\d.]+\s*\})?/g,
  (full, head, num) => {
    const n = Number(num)
    const c = sideCoords[n]
    if (!c) {
      missing++
      return full
    }
    patched++
    return `${head},\n    map: { x: ${c.x}, y: ${c.y} }`
  },
)

fs.writeFileSync(missionsPath, src, 'utf8')
console.log('side patched', patched, 'missing', missing)
