import fs from 'fs'
const s = fs.readFileSync('src/data/laSpawns.ts', 'utf8')
function list(id) {
  const m = s.match(
    new RegExp(`"subregionId": "${id}"[\\s\\S]*?"pokemon": \\[([\\s\\S]*?)\\]\\n  \\}`),
  )
  if (!m) {
    console.log(id, 'MISSING')
    return
  }
  const entries = [
    ...m[1].matchAll(
      /"id": "([^"]+)"[\s\S]*?"name": "([^"]+)"[\s\S]*?"dex": (\d+)[\s\S]*?"time": "([^"]+)"[\s\S]*?"method": "([^"]+)"(,\s*"alpha": true)?/g,
    ),
  ].map((x) => ({
    id: x[1],
    name: x[2],
    dex: x[3],
    time: x[4],
    method: x[5],
    alpha: Boolean(x[6]),
  }))
  console.log(id, entries.length)
  for (const e of entries) {
    console.log(
      `  ${e.name} dex=${e.dex} time=${e.time} method=${e.method}${e.alpha ? ' ALPHA' : ''} id=${e.id}`,
    )
  }
}
list('bonechill-wastes')
list('whiteout-valley')
list('snowfields-camp')
