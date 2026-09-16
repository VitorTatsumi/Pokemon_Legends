/**
 * Generate src/data/laResearchTasks.ts — research tasks keyed by national dex.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const dexPath = path.join(root, 'src/data/laPokedex.ts')
const outPath = path.join(root, 'src/data/laResearchTasks.ts')

const dexText = fs.readFileSync(dexPath, 'utf8')
const entryRe = /\{\s*hisui:\s*(\d+),\s*dex:\s*(\d+),\s*name:\s*'([^']+)'\s*\}/g
/** @type {{ hisui: number; dex: number; name: string }[]} */
const entries = []
let em
while ((em = entryRe.exec(dexText)) !== null) {
  entries.push({ hisui: Number(em[1]), dex: Number(em[2]), name: em[3] })
}

const LEGENDARY_DEX = new Set([
  225, 226, 227, 228, 229, 230, 235, 236, 237, 238, 239, 240, 241, 242, 231, 232, 233, 234,
  483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 641, 642, 645, 905,
  480, 481, 482, 485, 486, 488, 490, 491, 492,
])

const NOBLE_DEX = new Set([900, 903, 59, 101, 713]) // Kleavor, Sneasler context - nobles as species

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function task(id, kind, en, pt, target, points) {
  return `      { id: '${id}', kind: '${kind}', description: { en: '${esc(en)}', pt: '${esc(pt)}' }, target: ${target}, points: ${points} },`
}

function tasksFor(entry) {
  const n = entry.name
  const d = entry.dex
  const isLegend = LEGENDARY_DEX.has(d) || d >= 480
  const lines = []

  if (isLegend) {
    lines.push(
      task(`${d}-see`, 'see', `Number you've seen`, `Quantidade vista`, 1, 10),
      task(`${d}-catch`, 'catch', `Number you've caught`, `Quantidade capturada`, 1, 20),
      task(`${d}-defeat`, 'defeat', `Number you've defeated`, `Quantidade derrotada`, 1, 10),
      task(`${d}-research`, 'catch', `Complete all other tasks`, `Conclua as outras tarefas`, 1, 30),
    )
    return lines
  }

  lines.push(
    task(`${d}-catch-1`, 'catch', `Number you've caught`, `Quantidade capturada`, 1, 10),
    task(`${d}-catch-4`, 'catch', `Number you've caught`, `Quantidade capturada`, 4, 20),
    task(`${d}-see`, 'see', `Number you've seen`, `Quantidade vista`, 5, 10),
    task(`${d}-defeat`, 'defeat', `Number you've defeated`, `Quantidade derrotada`, 3, 10),
    task(`${d}-feed`, 'feed', `Times you've given food`, `Vezes que deu comida`, 3, 10),
    task(`${d}-stun`, 'stun', `Times you've stunned with a Poké Ball`, `Vezes que atordoou com Pokébola`, 1, 10),
  )

  if (d % 3 === 0) {
    lines.push(
      task(`${d}-scatter`, 'scatter', `Times you've scared off with a Scatter Bang`, `Vezes que espantou com Bomba de Dispersão`, 1, 10),
    )
  } else if (d % 3 === 1) {
    lines.push(
      task(`${d}-aggravate`, 'aggravate', `Times you've angered with a Snowball`, `Vezes que irritou com Bola de Neve`, 1, 10),
    )
  } else {
    lines.push(
      task(`${d}-leap`, 'leap', `Times you've seen it leap out of trees or ore`, `Vezes que viu saltar de árvores ou minério`, 1, 10),
    )
  }

  if (NOBLE_DEX.has(d) || ['Scyther', 'Stantler', 'Growlithe', 'Voltorb', 'Bergmite'].includes(n)) {
    lines.push(
      task(`${d}-alpha`, 'catch', `Number of alpha specimens caught`, `Espécimes alpha capturados`, 1, 20),
    )
  }

  return lines.slice(0, 6)
}

const recordLines = entries.map((e) => {
  const body = tasksFor(e).join('\n')
  return `  ${e.dex}: [\n${body}\n  ],`
})

const out = `import type { Localized } from './laCollectible'

export type ResearchTaskKind =
  | 'catch'
  | 'see'
  | 'defeat'
  | 'use_move'
  | 'evolve'
  | 'feed'
  | 'leap'
  | 'stun'
  | 'aggravate'
  | 'scatter'
  | 'time'
  | 'size'
  | 'alpha'

export type ResearchTask = {
  id: string
  kind: ResearchTaskKind
  description: Localized
  target: number
  points: number
}

/** Research tasks keyed by national Pokédex number (matches laSpawns / laPokedex dex field). */
export const LA_RESEARCH: Record<number, ResearchTask[]> = {
${recordLines.join('\n')}
}
`

fs.writeFileSync(outPath, out, 'utf8')
console.log(`Wrote research tasks for ${entries.length} species`)
