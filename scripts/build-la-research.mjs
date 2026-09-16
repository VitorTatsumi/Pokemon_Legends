/**
 * Build authentic PLA research tasks from Arcedex PokeResearchData.kt
 * Source: https://github.com/jzam/Arcedex
 *
 * Run: node scripts/build-la-research.mjs
 * (optional) node scripts/fetch-arcedex-research.mjs  # refresh raw KT
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rawPath = path.join(__dirname, 'la-research-raw/PokeResearchData.kt')
const pokedexPath = path.join(__dirname, '../src/data/laPokedex.ts')
const outPath = path.join(__dirname, '../src/data/laResearchTasks.ts')

if (!fs.existsSync(rawPath)) {
  console.error('Missing', rawPath, '- run: node scripts/fetch-arcedex-research.mjs')
  process.exit(1)
}

const pokedexSrc = fs.readFileSync(pokedexPath, 'utf8')
const entries = [...pokedexSrc.matchAll(/\{ hisui: (\d+), dex: (\d+), name: '([^']+)' \}/g)].map(
  (m) => ({ hisui: Number(m[1]), dex: Number(m[2]), name: m[3] }),
)

/** Map our pokedex names → Arcedex names */
const NAME_ALIASES = {
  'Mime Jr': 'Mime Jr.',
  'Mr Mime': 'Mr. Mime',
  'Porygon Z': 'Porygon-Z',
}

/** Normalize curly quotes / apostrophes from the KT source */
function normalize(s) {
  return s
    .replace(/[\u2018\u2019\u201A\u201B]/g, "'")
    .replace(/[\u201C\u201D\u201E\u201F]/g, '"')
}

const TYPE_PT = {
  Bug: 'Inseto',
  Dark: 'Sombrio',
  Dragon: 'Dragão',
  Electric: 'Elétrico',
  Fairy: 'Fada',
  Fighting: 'Lutador',
  Fire: 'Fogo',
  Flying: 'Voador',
  Ghost: 'Fantasma',
  Grass: 'Planta',
  Ground: 'Terrestre',
  Ice: 'Gelo',
  Poison: 'Veneno',
  Psychic: 'Psíquico',
  Rock: 'Pedra',
  Steel: 'Aço',
  Water: 'Água',
  Normal: 'Normal',
}

const EXACT_PT = {
  'Number caught': 'Número capturado',
  'Number caught at night': 'Número capturado à noite',
  'Number caught during daylight hours': 'Número capturado durante o dia',
  'Number caught in the evening': 'Número capturado ao entardecer',
  'Number defeated': 'Número derrotado',
  "Number you've evolved": 'Número que você evoluiu',
  "Number of alpha specimens caught": 'Número de espécimes Alfa capturados',
  "Number of different forms you've obtained": 'Número de formas diferentes obtidas',
  "Number of heavy specimens you've caught": 'Número de espécimes pesados capturados',
  "Number of large specimens you've caught": 'Número de espécimes grandes capturados',
  "Number of light specimens you've caught": 'Número de espécimes leves capturados',
  "Number of small specimens you've caught": 'Número de espécimes pequenos capturados',
  "Number you've caught while they were in the air":
    'Número capturado enquanto estavam no ar',
  "Number you've caught while they were sleeping":
    'Número capturado enquanto dormiam',
  "Number you've caught without being spotted":
    'Número capturado sem ser visto',
  "Number you've seen leap out of ore deposits":
    'Número visto saltar de depósitos de minério',
  "Number you've seen leap out of trees": 'Número visto saltar de árvores',
  "Times you've given it food": 'Vezes que você lhe deu comida',
  "Times you've scared it off with a Scatter Bang":
    'Vezes que o afastou com uma Bang Explosiva',
  "Times you've seen it use a strong style move":
    'Vezes que você o viu usar um golpe de estilo forte',
  "Times you've seen it use an agile style move":
    'Vezes que você o viu usar um golpe de estilo ágil',
  "Times you've stunned it by using items":
    'Vezes que o atordoou usando itens',
  'Received a part of Arceus': 'Recebeu uma parte de Arceus',
}

function translateTask(en) {
  if (EXACT_PT[en]) return EXACT_PT[en]

  let m = en.match(/^Times you've seen it use (.+)$/)
  if (m) return `Vezes que você o viu usar ${m[1]}`

  m = en.match(/^Number you've defeated with (.+)-type moves$/)
  if (m) {
    const type = TYPE_PT[m[1]] ?? m[1]
    return `Número derrotado com golpes do tipo ${type}`
  }

  if (en.startsWith('Investigated ')) {
    // Keep investigation quest text in English; rare request tasks
    return en.replace(/^Investigated /, 'Investigou: ')
  }

  return en
}

/** @returns {import('../src/data/laResearchTasks').ResearchTaskKind | string} */
function kindOf(task) {
  const t = task.toLowerCase()
  if (t.startsWith('investigated')) return 'investigate'
  if (t.includes('evolved')) return 'evolve'
  if (t.includes('defeated')) return 'defeat'
  if (t.includes('leap out')) return 'leap'
  if (t.includes('stunned')) return 'stun'
  if (t.includes('scatter bang') || t.includes('scared')) return 'scare'
  if (t.includes('given it food') || t.includes('food')) return 'feed'
  if (t.includes('seen it use') || t.includes('use a strong') || t.includes('use an agile'))
    return 'use_move'
  if (t.includes('caught') || t.includes('forms you') || t.includes('alpha')) return 'catch'
  if (t.includes('received a part')) return 'other'
  return 'other'
}

function slugify(task) {
  return normalize(task)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60)
}

function parseKt(src) {
  /** @type {Map<string, Array<{task:string,goals:number[],points:number}>>} */
  const byName = new Map()
  const re =
    /PokeResearch\(\s*name = "([^"]+)",\s*task = "([^"]*)",\s*goal1 = "([^"]*)",\s*goal2 = "([^"]*)",\s*goal3 = "([^"]*)",\s*goal4 = "([^"]*)",\s*goal5 = "([^"]*)",\s*points = (\d+)/g

  let m
  while ((m = re.exec(src))) {
    const name = m[1]
    const task = normalize(m[2])
    const goals = [m[3], m[4], m[5], m[6], m[7]]
      .map((g) => g.trim())
      .filter(Boolean)
      .map(Number)
      .filter((n) => Number.isFinite(n) && n > 0)
    const points = Number(m[8])
    if (!byName.has(name)) byName.set(name, [])
    byName.get(name).push({ task, goals, points })
  }
  return byName
}

const raw = fs.readFileSync(rawPath, 'utf8')
const byName = parseKt(raw)

const missing = []
const rows = []

for (const e of entries) {
  const arcedexName = NAME_ALIASES[e.name] ?? e.name
  const tasks = byName.get(arcedexName)
  if (!tasks || tasks.length === 0) {
    missing.push(`${e.hisui} ${e.dex} ${e.name} (lookup: ${arcedexName})`)
    continue
  }

  const serialized = tasks.map((t, i) => {
    const id = `h${e.hisui}-${slugify(t.task) || `task${i}`}`
    const kind = kindOf(t.task)
    const double = t.points >= 20
    // Arcedex already encodes double tasks as 20 pts (vs 10); don't double again in scoring.
    const pointsPerMilestone = t.points
    const en = t.task
    const pt = translateTask(en)
    const dbl = double ? ',\n      double: true' : ''
    return `    {
      id: ${JSON.stringify(id)},
      kind: ${JSON.stringify(kind)},
      milestones: [${t.goals.join(', ')}],
      pointsPerMilestone: ${pointsPerMilestone}${dbl},
      description: { en: ${JSON.stringify(en)}, pt: ${JSON.stringify(pt)} },
    }`
  })

  rows.push(`  ${e.dex}: [\n${serialized.join(',\n')}\n  ]`)
}

if (missing.length) {
  console.error('Missing research for:', missing)
  process.exit(1)
}

const header = `import type { Localized } from './laCollectible'

export type ResearchTaskKind =
  | 'catch'
  | 'see'
  | 'defeat'
  | 'use_move'
  | 'evolve'
  | 'feed'
  | 'leap'
  | 'stun'
  | 'scare'
  | 'investigate'
  | 'other'

export type LaResearchTask = {
  id: string
  kind: ResearchTaskKind
  /** Milestone thresholds (game-style stages). */
  milestones: number[]
  /** Research points awarded per completed milestone (Arcedex scale: 10 or 20). */
  pointsPerMilestone: number
  /** Double-chevron priority task in-game. */
  double?: boolean
  description: Localized
}

/** Research tasks keyed by national dex number. Sourced from Arcedex PokeResearchData. */
export const LA_RESEARCH: Record<number, LaResearchTask[]> = {
${rows.join(',\n')}
}

export function researchTasksForDex(dex: number) {
  return LA_RESEARCH[dex] ?? []
}

export function researchMilestoneKey(taskId: string, milestone: number) {
  return \`\${taskId}:\${milestone}\`
}

export function researchTaskProgress(
  task: LaResearchTask,
  completed: Record<string, boolean>,
) {
  let highest = 0
  let doneCount = 0
  for (const m of task.milestones) {
    if (completed[researchMilestoneKey(task.id, m)]) {
      doneCount += 1
      if (m > highest) highest = m
    }
  }
  return { highest, doneCount }
}

export function researchPointsForDex(
  dex: number,
  completed: Record<string, boolean>,
) {
  const tasks = researchTasksForDex(dex)
  return tasks.reduce((sum, task) => {
    const done = task.milestones.filter(
      (m) => completed[researchMilestoneKey(task.id, m)],
    ).length
    return sum + done * task.pointsPerMilestone
  }, 0)
}

/** Approximate research level from points (~20 pts per level, cap 10). */
export function researchLevelFromPoints(points: number) {
  return Math.min(10, Math.floor(points / 20))
}
`

fs.writeFileSync(outPath, header)
console.log('Wrote', outPath)
console.log('species', entries.length)
console.log('Rowlet tasks', byName.get('Rowlet')?.length)
console.log(
  'Rowlet:',
  byName.get('Rowlet')?.map((t) => t.task).join(' | '),
)
