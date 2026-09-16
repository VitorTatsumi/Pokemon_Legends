import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const src = fs.readFileSync(path.join(__dirname, '../src/data/laSpawns.ts'), 'utf8')

const REG = {
  jubilife: { x: 30.3, y: 57.6 },
  obsidian: { x: 40.7, y: 66.8 },
  crimson: { x: 55.5, y: 58 },
  cobalt: { x: 68, y: 48 },
  coronet: { x: 52, y: 38 },
  alabaster: { x: 48, y: 22 },
}

const re =
  /"regionId": "([^"]+)",\s*"subregionId": "([^"]+)",\s*"pokemon": \[([\s\S]*?)\]\s*\}/g
const uniq = []
const seen = new Set()
let m
while ((m = re.exec(src))) {
  const regionId = m[1]
  const sub = m[2]
  const body = m[3]
  const pokeRe = /"name": "([^"]+)",\s*"dex": (\d+),[\s\S]*?"alpha": true/g
  let p
  while ((p = pokeRe.exec(body))) {
    const name = p[1]
    const dex = Number(p[2])
    const k = `${dex}:${sub}`
    if (seen.has(k)) continue
    seen.add(k)
    const base = REG[regionId] || { x: 50, y: 50 }
    const a = ((uniq.length % 12) / 12) * Math.PI * 2
    uniq.push({
      regionId,
      subregionId: sub,
      dex,
      name,
      x: +(base.x + Math.cos(a) * 5).toFixed(2),
      y: +(base.y + Math.sin(a) * 4).toFixed(2),
    })
  }
}

const lines = uniq.map(
  (a) => `  {
    id: 'alpha-${a.dex}-${a.subregionId}',
    name: { en: 'Alpha ${a.name}', pt: 'Alfa ${a.name}' },
    description: { en: 'Fixed alpha spawn in ${a.subregionId}.', pt: 'Spawn alfa fixo em ${a.subregionId}.' },
    regionId: '${a.regionId}' as const,
    subregionId: '${a.subregionId}',
    map: { x: ${a.x}, y: ${a.y} },
    dex: ${a.dex},
    speciesName: '${a.name}',
  }`,
)

fs.writeFileSync(
  path.join(__dirname, '../src/data/laAlphas.ts'),
  `import type { HisuiRegionId } from './hisuiRegions'
import type { Localized } from './laCollectible'

export type LaAlpha = {
  id: string
  name: Localized
  description?: Localized
  regionId: HisuiRegionId
  subregionId: string
  map: { x: number; y: number }
  dex: number
  speciesName: string
}

export const LA_ALPHAS: LaAlpha[] = [
${lines.join(',\n')}
]
`,
)

console.log('alphas', uniq.length)
