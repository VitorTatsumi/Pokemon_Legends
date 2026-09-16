import fs from 'fs'
const s = fs.readFileSync('src/data/lzaItems.ts', 'utf8')
const blocks = [...s.matchAll(/\{\s*id: '([^']+)',\s*index: (\d+),\s*category: '([^']+)',\s*name: \{ en: '([^']+)'[\s\S]*?\n  \}/g)]
const balls = blocks.filter((m) => m[3] === 'balls')
console.log('balls count', balls.length)
for (const m of balls) {
  const hasMove = m[0].includes('move:')
  if (hasMove || /^TM/i.test(m[4])) console.log('SUSPECT', m[4], m[3], hasMove)
}
const tms = blocks.filter((m) => /^TM\d/i.test(m[4]))
const wrong = tms.filter((m) => m[3] !== 'tms')
console.log('tms total', tms.length, 'wrong cat', wrong.map((m) => m[4] + '->' + m[3]))
// ids that appear twice
const ids = {}
for (const m of blocks) {
  ids[m[1]] = (ids[m[1]] || 0) + 1
}
console.log(
  'dup ids',
  Object.entries(ids)
    .filter(([, n]) => n > 1)
    .slice(0, 10),
)
