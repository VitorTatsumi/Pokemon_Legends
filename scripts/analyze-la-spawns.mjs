import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const s = fs.readFileSync(path.join(__dirname, '../src/data/laSpawns.ts'), 'utf8')

const blocks = [
  ...s.matchAll(/"subregionId": "([^"]+)"[\s\S]*?"pokemon": \[([\s\S]*?)\]\n  \}/g),
]

function analyze(pokemonBlock) {
  const entries = [
    ...pokemonBlock.matchAll(
      /\{\s*"id": "([^"]+)",\s*"name": "([^"]+)",\s*"dex": (\d+),\s*"time": "([^"]+)",\s*"method": "([^"]+)"(,\s*"alpha": true)?/g,
    ),
  ].map((m) => ({
    id: m[1],
    name: m[2],
    dex: Number(m[3]),
    time: m[4],
    method: m[5],
    alpha: Boolean(m[6]),
  }))

  const uniqueDex = new Set(entries.map((e) => e.dex + (e.alpha ? '-a' : '')))
  const byKey = new Map()
  for (const e of entries) {
    const k = `${e.dex}|${e.method}|${e.alpha ? 1 : 0}`
    if (!byKey.has(k)) byKey.set(k, new Set())
    byKey.get(k).add(e.time)
  }
  let dayNight = 0
  let wouldMerge = 0
  for (const [, times] of byKey) {
    if (times.has('day') && times.has('night')) {
      dayNight++
      wouldMerge += 1 // two rows → one
    }
  }
  return {
    total: entries.length,
    unique: uniqueDex.size,
    dayNight,
    afterMerge: entries.length - dayNight,
  }
}

const rows = blocks.map((m) => ({ id: m[1], ...analyze(m[2]) }))
rows.sort((a, b) => b.total - a.total)

console.log('Top by total entries:')
for (const r of rows.slice(0, 20)) {
  console.log(
    `${String(r.total).padStart(3)} → ${String(r.afterMerge).padStart(3)} unique~${String(r.unique).padStart(2)}  day+night×${r.dayNight}  ${r.id}`,
  )
}
console.log('\nCamps:')
for (const r of rows.filter((x) => x.id.includes('camp'))) {
  console.log(
    `${String(r.total).padStart(3)} → ${String(r.afterMerge).padStart(3)} unique~${String(r.unique).padStart(2)}  ${r.id}`,
  )
}
console.log(
  '\nTotals:',
  rows.reduce((s, r) => s + r.total, 0),
  '→ merged',
  rows.reduce((s, r) => s + r.afterMerge, 0),
)
