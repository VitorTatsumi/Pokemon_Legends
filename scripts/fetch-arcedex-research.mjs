import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rawDir = path.join(__dirname, 'la-research-raw')
fs.mkdirSync(rawDir, { recursive: true })

const dataUrl =
  'https://raw.githubusercontent.com/jzam/Arcedex/master/app/src/main/java/jzam/arcedex/data/PokeResearchData.kt'
const modelUrl =
  'https://raw.githubusercontent.com/jzam/Arcedex/master/app/src/main/java/jzam/arcedex/models/PokeResearch.kt'

const data = await (await fetch(dataUrl)).text()
const model = await (await fetch(modelUrl)).text()
fs.writeFileSync(path.join(rawDir, 'PokeResearchData.kt'), data)
fs.writeFileSync(path.join(rawDir, 'PokeResearch.kt'), model)
console.log('saved data', data.length)
console.log(model)
console.log('Rowlet count', (data.match(/name = "Rowlet"/g) || []).length)
