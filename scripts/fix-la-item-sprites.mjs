import fs from 'fs'

let m = fs.readFileSync('src/data/laMarkets.ts', 'utf8')
m = m.replace(/('Medicinal Leek',[\s\S]*?)'energy-root'/, "$1'medicinal-leek'")
m = m.replace(/('Bugwort',[\s\S]*?)'revival-herb'/, "$1'bugwort'")
m = m.replace(/('Swordcap',[\s\S]*?)'big-mushroom'/, "$1'swordcap'")
m = m.replace(/('Iron Barktongue',[\s\S]*?)'big-mushroom'/, "$1'wood'")
m = m.replace(/('Vivichoke',[\s\S]*?)'energy-root'/, "$1'vivichoke'")
m = m.replaceAll("'oval-charm'", "'clothing'")
fs.writeFileSync('src/data/laMarkets.ts', m)
console.log('markets ok')

let c = fs.readFileSync('src/data/laCrafts.ts', 'utf8')
c = c.replace(/resultSprite: 'smoke-ball'/g, "resultSprite: 'smoke-bomb'")
c = c.replace(/resultSprite: 'fluffy-tail'/g, "resultSprite: 'scatter-bang'")
c = c.replace(/resultSprite: 'repel'/g, "resultSprite: 'stealth-spray'")
c = c.replace(/resultSprite: 'sticky-barb'/g, "resultSprite: 'sticky-glob'")
for (const id of [
  'mushroom-cake',
  'honey-cake',
  'grain-cake',
  'bean-cake',
  'salt-cake',
  'cake-lure-base',
]) {
  const re = new RegExp(`(id: '${id}'[\\s\\S]*?resultSprite: )'[^']+'`)
  c = c.replace(re, `$1'${id}'`)
}
fs.writeFileSync('src/data/laCrafts.ts', c)
console.log('crafts ok')
