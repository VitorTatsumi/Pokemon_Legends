import fs from 'fs'

const markets = fs.readFileSync('src/data/laMarkets.ts', 'utf8')
const crafts = fs.readFileSync('src/data/laCrafts.ts', 'utf8')
const sprites = new Set()
for (const m of [...markets.matchAll(/sprite:\s*'([^']+)'/g), ...crafts.matchAll(/(?:sprite|resultSprite):\s*'([^']+)'/g)]) {
  sprites.add(m[1])
}
console.log([...sprites].sort().join('\n'))
console.log('count', sprites.size)
