/**
 * Append empty field subregions with nearby spawn copies.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const file = path.join(__dirname, '../src/data/laSpawns.ts')
let src = fs.readFileSync(file, 'utf8')

const gaps = [
  ['coronet', 'highlands-camp', 'mountain-camp'],
  ['coronet', 'temple-of-sinnoh', 'sacred-plaza'],
  ['coronet', 'moonview-arena', 'celestica-trail'],
  ['coronet', 'cloudcap-pass', 'summit-camp'],
  ['alabaster', 'icepeak-camp', 'snowfields-camp'],
  ['alabaster', 'icepeak-arena', 'arena-approach'],
  ['alabaster', 'secret-hollow', 'icebound-falls'],
  ['alabaster', 'ice-column-chamber', 'hibernal-cave'],
]

function extractBlock(subId) {
  const re = new RegExp(
    `\\{\\s*"regionId": "[^"]+",\\s*"subregionId": "${subId}",\\s*"pokemon": \\[([\\s\\S]*?)\\]\\s*\\}`,
  )
  const m = src.match(re)
  return m ? m[1] : null
}

const additions = []
for (const [regionId, emptyId, donorId] of gaps) {
  if (src.includes(`"subregionId": "${emptyId}"`)) {
    console.log('already has', emptyId)
    continue
  }
  const pokemon = extractBlock(donorId)
  if (!pokemon) {
    console.warn('missing donor', donorId)
    continue
  }
  additions.push(`  {
    "regionId": "${regionId}",
    "subregionId": "${emptyId}",
    "pokemon": [${pokemon}]
  }`)
  console.log('fill', emptyId, 'from', donorId)
}

if (additions.length) {
  src = src.replace(
    'export const LA_SUBREGION_SPAWNS: LaSubregionSpawns[] = [',
    `export const LA_SUBREGION_SPAWNS: LaSubregionSpawns[] = [\n${additions.join(',\n')},`,
  )
  fs.writeFileSync(file, src)
}
console.log('done', additions.length)
