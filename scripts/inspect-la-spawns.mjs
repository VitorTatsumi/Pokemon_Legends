import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dir = path.join(__dirname, 'la-spawn-raw')

const poke = JSON.parse(fs.readFileSync(path.join(dir, 'fieldlands-pokemon.json'), 'utf8'))
const spawns = JSON.parse(fs.readFileSync(path.join(dir, 'fieldlands-spawns.json'), 'utf8'))

console.log('pokemon type', Array.isArray(poke) ? `array ${poke.length}` : typeof poke)
console.log('pokemon sample', JSON.stringify(Array.isArray(poke) ? poke[0] : poke[Object.keys(poke)[0]], null, 2).slice(0, 1000))
console.log('spawns type', Array.isArray(spawns) ? `array ${spawns.length}` : typeof spawns)
if (!Array.isArray(spawns)) console.log('spawn keys', Object.keys(spawns).slice(0, 15))
const s0 = Array.isArray(spawns) ? spawns[0] : spawns[Object.keys(spawns)[0]]
console.log('spawn sample', JSON.stringify(s0, null, 2).slice(0, 2000))
