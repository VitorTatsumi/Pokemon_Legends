import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const d = fs.readFileSync(path.join(__dirname, 'la-research-raw/PokeResearchData.kt'), 'utf8')
const names = [...new Set([...d.matchAll(/name = "([^"]+)"/g)].map((m) => m[1]))].sort()
console.log('unique names', names.length)
for (const n of names) console.log(n)

const pokedex = fs.readFileSync(path.join(__dirname, '../src/data/laPokedex.ts'), 'utf8')
const entries = [...pokedex.matchAll(/\{ hisui: (\d+), dex: (\d+), name: '([^']+)' \}/g)].map(
  (m) => ({ hisui: Number(m[1]), dex: Number(m[2]), name: m[3] }),
)
console.log('\n--- pokedex missing in arcedex ---')
for (const e of entries) {
  if (!names.includes(e.name)) console.log(e.hisui, e.dex, e.name)
}
console.log('\n--- arcedex not in pokedex ---')
const pokeNames = new Set(entries.map((e) => e.name))
for (const n of names) {
  if (!pokeNames.has(n)) console.log(n)
}
