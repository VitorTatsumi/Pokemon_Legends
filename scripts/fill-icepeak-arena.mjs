import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const file = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/data/laSpawns.ts')
let src = fs.readFileSync(file, 'utf8')
if (src.includes('"subregionId": "icepeak-arena"')) {
  console.log('icepeak-arena exists')
  process.exit(0)
}
const donor = 'avaluggs-legacy'
const re = new RegExp(
  `"subregionId": "${donor}",\\s*"pokemon": \\[([\\s\\S]*?)\\]\\s*\\}`,
)
const m = src.match(re)
if (!m) {
  console.error('no donor', donor)
  process.exit(1)
}
const block = `  {
    "regionId": "alabaster",
    "subregionId": "icepeak-arena",
    "pokemon": [${m[1]}]
  },`
src = src.replace(
  'export const LA_SUBREGION_SPAWNS: LaSubregionSpawns[] = [',
  `export const LA_SUBREGION_SPAWNS: LaSubregionSpawns[] = [\n${block}`,
)
fs.writeFileSync(file, src)
console.log('filled icepeak-arena from', donor)
