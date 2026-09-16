import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const d = fs.readFileSync(path.join(__dirname, 'la-research-raw/PokeResearchData.kt'), 'utf8')
const tasks = [...new Set([...d.matchAll(/task = "([^"]*)"/g)].map((m) => m[1]))].sort()
for (const t of tasks) console.log(t)
console.log('unique tasks', tasks.length)
