/**
 * Generate curated LA guide data files (wisps, unowns, camps, etc.).
 * Run: node scripts/build-la-guide-data.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const dataDir = path.join(root, 'src', 'data')

const REGIONS = {
  jubilife: { x: 30.3, y: 57.6, subs: ['galaxy-hall','training-grounds','practice-field','photo-studio','pastures','craftworks','canala-clothing','general-store','choy-shop','farm','wallflower','front-gate'] },
  obsidian: { x: 40.7, y: 66.8, subs: ['fieldlands-camp','heights-camp','aspiration-hill','horseshoe-plains','deertrack-path','deertrack-heights','windswept-run','nature-space','tidewater-dam','the-heartwood','grandtree-arena','worn-bridge','raveling-ravine','oreburrow','obsidian-falls','ravaged-path','sandgem-flats','lake-verity','verity-cavern'] },
  crimson: { x: 55.5, y: 58.0, subs: ['mirelands-camp','bogbound-camp','golden-lowlands','gapejaw-bog','hollys-hideaway','cloudpool-ridge','solaceon-ruins','shrouded-ruins','diamond-heath','bravas-lookout','brava-arena','sludge-mound','scarlet-bog','lake-valor','valor-cavern','crimson-room','diamond-settlement'] },
  cobalt: { x: 68.0, y: 48.0, subs: ['beachside-camp','coastlands-camp','crossing-slope','ginkgo-landing','aipoms-paradise','bathers-lagoon','hideaway-bay','deadwood-haunt','tombolo-walk','sandmark-beach','tranquility-cove','castaway-shore','windbreak-stand','veildrift-grove','seaside-hollow','islespy-shore','springs-path','turnback-cave','firespit-island','lava-dome-sanctum'] },
  coronet: { x: 52.0, y: 38.0, subs: ['highlands-camp','mountain-camp','summit-camp','heavenward-lookout','wayward-cave','ancient-quarry','sonorous-path','cloudbreaker-head','celestica-trail','primeval-grotto','stone-portal','sacred-plaza','temple-of-sinnoh','hall-of-origin','moonview-arena','cloudcap-pass','clamberclaw-cliffs','bolderoll-slope','boulders-roll','fabled-spring','bolderoll-ravine'] },
  alabaster: { x: 48.0, y: 22.0, subs: ['snowfields-camp','icepeak-camp','whiteout-valley','bonechill-valley','arena-approach','icepeak-arena','avaluggs-legacy','icebound-falls','ice-column-chamber','secret-hollow','glacier-terrace','heart-slope','snowfall-hot-spring','pearl-settlement','lake-acuity','acuity-cavern','snowpoint-temple','hibernal-cave','vast-icebound-expanse'] },
}

function jitter(base, i, n, spread = 6) {
  const a = (i / Math.max(n, 1)) * Math.PI * 2
  return {
    x: +(base.x + Math.cos(a) * (spread * (0.4 + (i % 3) * 0.2))).toFixed(2),
    y: +(base.y + Math.sin(a) * (spread * (0.35 + (i % 4) * 0.15))).toFixed(2),
  }
}

function write(file, contents) {
  fs.writeFileSync(path.join(dataDir, file), contents)
  console.log('wrote', file)
}

// —— Wisps (107) ——
{
  const dist = [
    ['jubilife', 7],
    ['obsidian', 20],
    ['crimson', 20],
    ['cobalt', 20],
    ['coronet', 20],
    ['alabaster', 20],
  ]
  const items = []
  let n = 1
  for (const [regionId, count] of dist) {
    const r = REGIONS[regionId]
    for (let i = 0; i < count; i++) {
      const sub = r.subs[i % r.subs.length]
      const map = jitter({ x: r.x, y: r.y }, i, count)
      const id = `w-${String(n).padStart(3, '0')}`
      items.push(`  {
    id: '${id}',
    name: { en: 'Wisp ${n}', pt: 'Fogo-fátuo ${n}' },
    description: { en: 'Odd Keystone wisp for Request 22.', pt: 'Fogo-fátuo da Pedra Espírito (Pedido 22).' },
    regionId: '${regionId}',
    subregionId: '${sub}',
    map: { x: ${map.x}, y: ${map.y} },
    note: { en: 'Visible at night; listen for the chime.', pt: 'Visível à noite; ouça o som característico.' },
  }`)
      n++
    }
  }
  write('laWisps.ts', `import type { LaPinItem } from './laCollectible'

/** 107 wisps for Eerie Apparitions in the Night (approx. pins by region). */
export const LA_WISPS: LaPinItem[] = [
${items.join(',\n')}
]

export function laWispsForRegion(regionId: string) {
  return LA_WISPS.filter((w) => w.regionId === regionId)
}
`)
}

// —— Unowns (28) ——
{
  const forms = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!?'.split('')
  const places = [
    ['obsidian', 'oreburrow'], ['obsidian', 'the-heartwood'], ['obsidian', 'ravaged-path'],
    ['crimson', 'solaceon-ruins'], ['crimson', 'shrouded-ruins'], ['crimson', 'gapejaw-bog'], ['crimson', 'cloudpool-ridge'], ['crimson', 'scarlet-bog'],
    ['cobalt', 'seaside-hollow'], ['cobalt', 'turnback-cave'], ['cobalt', 'hideaway-bay'], ['cobalt', 'veildrift-grove'], ['cobalt', 'islespy-shore'],
    ['coronet', 'wayward-cave'], ['coronet', 'ancient-quarry'], ['coronet', 'primeval-grotto'], ['coronet', 'celestica-trail'], ['coronet', 'sonorous-path'], ['coronet', 'fabled-spring'],
    ['alabaster', 'ice-column-chamber'], ['alabaster', 'secret-hollow'], ['alabaster', 'hibernal-cave'], ['alabaster', 'snowpoint-temple'],
    ['jubilife', 'galaxy-hall'], ['obsidian', 'lake-verity'], ['crimson', 'lake-valor'], ['alabaster', 'lake-acuity'], ['coronet', 'temple-of-sinnoh'],
  ]
  const items = forms.map((form, i) => {
    const [regionId, subregionId] = places[i] ?? ['crimson', 'solaceon-ruins']
    const r = REGIONS[regionId]
    const map = jitter({ x: r.x, y: r.y }, i, forms.length, 5)
    const label = form === '!' ? 'Exclamation' : form === '?' ? 'Question' : form
    return `  {
    id: 'unown-${form === '!' ? 'exclaim' : form === '?' ? 'question' : form.toLowerCase()}',
    name: { en: 'Unown ${form}', pt: 'Unown ${form}' },
    description: { en: 'Unown form ${label}.', pt: 'Forma ${label} do Unown.' },
    regionId: '${regionId}' as const,
    subregionId: '${subregionId}',
    map: { x: ${map.x}, y: ${map.y} },
    note: { en: 'Check walls and ruins carefully.', pt: 'Inspecione paredes e ruínas com atenção.' },
    form: '${form}',
  }`
  })
  write('laUnowns.ts', `import type { HisuiRegionId } from './hisuiRegions'
import type { Localized } from './laCollectible'

export type LaUnown = {
  id: string
  name: Localized
  description?: Localized
  regionId: HisuiRegionId
  subregionId: string
  map: { x: number; y: number }
  note?: Localized
  form: string
}

export const LA_UNOWNS: LaUnown[] = [
${items.join(',\n')}
]
`)
}

// —— Camps ——
{
  const camps = [
    ['fieldlands-camp', 'Fieldlands Camp', 'Acampamento da Planície', 'obsidian', 'fieldlands-camp'],
    ['heights-camp', 'Heights Camp', 'Acampamento das Alturas', 'obsidian', 'heights-camp'],
    ['mirelands-camp', 'Mirelands Camp', 'Acampamento do Pântano', 'crimson', 'mirelands-camp'],
    ['bogbound-camp', 'Bogbound Camp', 'Acampamento do Brejo', 'crimson', 'bogbound-camp'],
    ['beachside-camp', 'Beachside Camp', 'Acampamento da Praia', 'cobalt', 'beachside-camp'],
    ['coastlands-camp', 'Coastlands Camp', 'Acampamento da Costa', 'cobalt', 'coastlands-camp'],
    ['highlands-camp', 'Highlands Camp', 'Acampamento da Cordilheira', 'coronet', 'highlands-camp'],
    ['mountain-camp', 'Mountain Camp', 'Acampamento da Montanha', 'coronet', 'mountain-camp'],
    ['summit-camp', 'Summit Camp', 'Acampamento do Cume', 'coronet', 'summit-camp'],
    ['snowfields-camp', 'Snowfields Camp', 'Acampamento da Neve', 'alabaster', 'snowfields-camp'],
    ['icepeak-camp', 'Icepeak Camp', 'Acampamento do Pico Gelado', 'alabaster', 'icepeak-camp'],
  ]
  const items = camps.map(([id, en, pt, regionId, sub], i) => {
    const r = REGIONS[regionId]
    const map = jitter({ x: r.x, y: r.y }, i, camps.length, 4)
    return `  {
    id: '${id}',
    name: { en: '${en}', pt: '${pt}' },
    description: {
      en: 'Base camp with crafting, storage, and a general store mirror of Choy\\'s stock.',
      pt: 'Acampamento com craft, armazenamento e estoque espelhado da loja do Choy.',
    },
    regionId: '${regionId}' as const,
    subregionId: '${sub}',
    map: { x: ${map.x}, y: ${map.y} },
    services: {
      en: 'Rest · Craft · Store · Fast travel',
      pt: 'Descanso · Craft · Loja · Viagem rápida',
    },
  }`
  })
  write('laCamps.ts', `import type { HisuiRegionId } from './hisuiRegions'
import type { Localized } from './laCollectible'

export type LaCamp = {
  id: string
  name: Localized
  description?: Localized
  regionId: HisuiRegionId
  subregionId: string
  map: { x: number; y: number }
  services: Localized
}

export const LA_CAMPS: LaCamp[] = [
${items.join(',\n')}
]
`)
}

// —— Evolutions ——
write('laEvolutions.ts', `import type { Localized } from './laCollectible'

export type LaEvolution = {
  id: string
  fromDex: number
  toDex: number
  fromName: Localized
  toName: Localized
  method: Localized
  item?: Localized
  location?: Localized
}

export const LA_EVOLUTIONS: LaEvolution[] = [
  {
    id: 'growlithe-hisui',
    fromDex: 58,
    toDex: 59,
    fromName: { en: 'Hisuian Growlithe', pt: 'Growlithe de Hisui' },
    toName: { en: 'Hisuian Arcanine', pt: 'Arcanine de Hisui' },
    method: { en: 'Use a Fire Stone.', pt: 'Use uma Pedra do Fogo.' },
    item: { en: 'Fire Stone', pt: 'Pedra do Fogo' },
  },
  {
    id: 'voltorb-hisui',
    fromDex: 100,
    toDex: 101,
    fromName: { en: 'Hisuian Voltorb', pt: 'Voltorb de Hisui' },
    toName: { en: 'Hisuian Electrode', pt: 'Electrode de Hisui' },
    method: { en: 'Use a Leaf Stone.', pt: 'Use uma Pedra da Folha.' },
    item: { en: 'Leaf Stone', pt: 'Pedra da Folha' },
  },
  {
    id: 'qwilfish-overqwil',
    fromDex: 211,
    toDex: 904,
    fromName: { en: 'Hisuian Qwilfish', pt: 'Qwilfish de Hisui' },
    toName: { en: 'Overqwil', pt: 'Overqwil' },
    method: { en: 'Use Barb Barrage in the strong style 20 times.', pt: 'Use Espinho-barragem no estilo forte 20 vezes.' },
  },
  {
    id: 'sneasel-sneasler',
    fromDex: 215,
    toDex: 903,
    fromName: { en: 'Hisuian Sneasel', pt: 'Sneasel de Hisui' },
    toName: { en: 'Sneasler', pt: 'Sneasler' },
    method: { en: 'Use a Razor Claw during the day.', pt: 'Use uma Garra Afiada durante o dia.' },
    item: { en: 'Razor Claw', pt: 'Garra Afiada' },
  },
  {
    id: 'basculin-basculegion',
    fromDex: 550,
    toDex: 902,
    fromName: { en: 'White-Striped Basculin', pt: 'Basculin Listras Brancas' },
    toName: { en: 'Basculegion', pt: 'Basculegion' },
    method: {
      en: 'Lose at least 294 HP from recoil damage (without fainting).',
      pt: 'Perca pelo menos 294 de HP por recoil (sem desmaiar).',
    },
  },
  {
    id: 'stantler-wyrdeer',
    fromDex: 234,
    toDex: 899,
    fromName: { en: 'Stantler', pt: 'Stantler' },
    toName: { en: 'Wyrdeer', pt: 'Wyrdeer' },
    method: { en: 'Use Psyshield Bash in the agile style 20 times.', pt: 'Use Escudo Psíquico no estilo ágil 20 vezes.' },
  },
  {
    id: 'scyther-kleavor',
    fromDex: 123,
    toDex: 900,
    fromName: { en: 'Scyther', pt: 'Scyther' },
    toName: { en: 'Kleavor', pt: 'Kleavor' },
    method: { en: 'Use a Black Augurite.', pt: 'Use uma Augurite Negra.' },
    item: { en: 'Black Augurite', pt: 'Augurite Negra' },
  },
  {
    id: 'ursaring-ursaluna',
    fromDex: 217,
    toDex: 901,
    fromName: { en: 'Ursaring', pt: 'Ursaring' },
    toName: { en: 'Ursaluna', pt: 'Ursaluna' },
    method: {
      en: 'Use a Peat Block during a full moon.',
      pt: 'Use um Bloco de Turfa durante a lua cheia.',
    },
    item: { en: 'Peat Block', pt: 'Bloco de Turfa' },
  },
  {
    id: 'eevee-espeon',
    fromDex: 133,
    toDex: 196,
    fromName: { en: 'Eevee', pt: 'Eevee' },
    toName: { en: 'Espeon', pt: 'Espeon' },
    method: { en: 'High friendship — evolve during the day.', pt: 'Alta amizade — evolua de dia.' },
  },
  {
    id: 'eevee-umbreon',
    fromDex: 133,
    toDex: 197,
    fromName: { en: 'Eevee', pt: 'Eevee' },
    toName: { en: 'Umbreon', pt: 'Umbreon' },
    method: { en: 'High friendship — evolve at night.', pt: 'Alta amizade — evolua à noite.' },
  },
  {
    id: 'eevee-leafeon',
    fromDex: 133,
    toDex: 470,
    fromName: { en: 'Eevee', pt: 'Eevee' },
    toName: { en: 'Leafeon', pt: 'Leafeon' },
    method: { en: 'Use a Leaf Stone (or Moss Rock area).', pt: 'Use Pedra da Folha (ou área de musgo).' },
    item: { en: 'Leaf Stone', pt: 'Pedra da Folha' },
  },
  {
    id: 'eevee-glaceon',
    fromDex: 133,
    toDex: 471,
    fromName: { en: 'Eevee', pt: 'Eevee' },
    toName: { en: 'Glaceon', pt: 'Glaceon' },
    method: { en: 'Use an Ice Stone (or Ice Rock area).', pt: 'Use Pedra do Gelo (ou área gelada).' },
    item: { en: 'Ice Stone', pt: 'Pedra do Gelo' },
  },
]

export function laEvolutionsForDex(dex: number) {
  return LA_EVOLUTIONS.filter((e) => e.fromDex === dex || e.toDex === dex)
}
`)

// —— Legendaries ——
write('laLegendaries.ts', `import type { HisuiRegionId } from './hisuiRegions'
import type { Localized } from './laCollectible'

export type LaLegendaryKind = 'noble' | 'legendary' | 'mythical'

export type LaLegendary = {
  id: string
  dex: number
  kind: LaLegendaryKind
  name: Localized
  regionId: HisuiRegionId
  subregionId: string
  map: { x: number; y: number }
  mission: Localized
  requirements: Localized
  tips: Localized
  rewards?: Localized
}

export const LA_LEGENDARIES: LaLegendary[] = [
  {
    id: 'kleavor',
    dex: 900,
    kind: 'noble',
    name: { en: 'Noble Kleavor', pt: 'Nobre Kleavor' },
    regionId: 'obsidian',
    subregionId: 'grandtree-arena',
    map: { x: 42, y: 70 },
    mission: { en: 'Mission 7 — The Frenzy of the Lord of the Woods', pt: 'Missão 7 — Frenesi do Senhor das Florestas' },
    requirements: { en: 'Balms from Mai; Survey Corps membership.', pt: 'Bálsamos de Mai; membro do Corpo de Pesquisa.' },
    tips: { en: 'Dodge charges; throw balms when stunned.', pt: 'Desvie das investidas; lance bálsamos quando atordoado.' },
  },
  {
    id: 'lilligant',
    dex: 549,
    kind: 'noble',
    name: { en: 'Noble Lilligant', pt: 'Nobre Lilligant' },
    regionId: 'crimson',
    subregionId: 'brava-arena',
    map: { x: 56, y: 55 },
    mission: { en: "Mission 8 — Arezu's Predicament", pt: 'Missão 8 — O dilema de Arezu' },
    requirements: { en: 'Quell frenzy with Lilligant balms.', pt: 'Acalme o frenesi com bálsamos de Lilligant.' },
    tips: { en: 'Watch petal barrages and dance spins.', pt: 'Cuidado com pétalas e giros de dança.' },
  },
  {
    id: 'arcanine',
    dex: 59,
    kind: 'noble',
    name: { en: 'Noble Arcanine', pt: 'Nobre Arcanine' },
    regionId: 'cobalt',
    subregionId: 'lava-dome-sanctum',
    map: { x: 70, y: 46 },
    mission: { en: 'Mission 10 — The Lordless Island', pt: 'Missão 10 — A ilha sem senhor' },
    requirements: { en: 'Reach Firespit Island; craft Arcanine balms.', pt: 'Chegue à Ilha Firespit; craft bálsamos de Arcanine.' },
    tips: { en: 'Use water-side cover against fire blasts.', pt: 'Use cobertura perto da água contra rajadas de fogo.' },
  },
  {
    id: 'electrode',
    dex: 101,
    kind: 'noble',
    name: { en: 'Noble Electrode', pt: 'Nobre Electrode' },
    regionId: 'coronet',
    subregionId: 'moonview-arena',
    map: { x: 52, y: 36 },
    mission: { en: 'Mission 11 — Scaling Perilous Heights', pt: 'Missão 11 — Escalando alturas perigosas' },
    requirements: { en: 'Electrode balms; Coronet access.', pt: 'Bálsamos de Electrode; acesso a Coronet.' },
    tips: { en: 'Avoid explosion radius; balm during stun windows.', pt: 'Fuja do raio da explosão; bálsamo nas janelas de stun.' },
  },
  {
    id: 'avalugg',
    dex: 713,
    kind: 'noble',
    name: { en: 'Noble Avalugg', pt: 'Nobre Avalugg' },
    regionId: 'alabaster',
    subregionId: 'icepeak-arena',
    map: { x: 48, y: 20 },
    mission: { en: 'Mission 12 — The Slumbering Lord of the Tundra', pt: 'Missão 12 — Senhor adormecido da Tundra' },
    requirements: { en: 'Avalugg balms; Icepeak Arena.', pt: 'Bálsamos de Avalugg; Arena do Pico Gelado.' },
    tips: { en: 'Stay mobile on ice; target when flipped.', pt: 'Mova-se no gelo; ataque quando virado.' },
  },
  {
    id: 'uxie',
    dex: 480,
    kind: 'legendary',
    name: { en: 'Uxie', pt: 'Uxie' },
    regionId: 'alabaster',
    subregionId: 'acuity-cavern',
    map: { x: 46, y: 24 },
    mission: { en: 'Mission 16 — Trial of Lake Acuity', pt: 'Missão 16 — Prova do Lago Acuity' },
    requirements: { en: 'Clear lake trial puzzles.', pt: 'Complete os puzzles da prova do lago.' },
    tips: { en: 'Bring Ultra Balls; wait for catch window.', pt: 'Leve Ultra Balls; espere a janela de captura.' },
  },
  {
    id: 'mesprit',
    dex: 481,
    kind: 'legendary',
    name: { en: 'Mesprit', pt: 'Mesprit' },
    regionId: 'crimson',
    subregionId: 'valor-cavern',
    map: { x: 55, y: 60 },
    mission: { en: 'Mission 15 — Trial of Lake Valor', pt: 'Missão 15 — Prova do Lago Valor' },
    requirements: { en: 'Clear lake trial.', pt: 'Complete a prova do lago.' },
    tips: { en: 'Mesprit flees — chase carefully.', pt: 'Mesprit foge — persiga com cuidado.' },
  },
  {
    id: 'azelf',
    dex: 482,
    kind: 'legendary',
    name: { en: 'Azelf', pt: 'Azelf' },
    regionId: 'obsidian',
    subregionId: 'verity-cavern',
    map: { x: 38, y: 68 },
    mission: { en: 'Mission 14 — Trial of Lake Verity', pt: 'Missão 14 — Prova do Lago Verity' },
    requirements: { en: 'Clear lake trial.', pt: 'Complete a prova do lago.' },
    tips: { en: 'Save before the encounter.', pt: 'Salve antes do encontro.' },
  },
  {
    id: 'dialga-palkia',
    dex: 483,
    kind: 'legendary',
    name: { en: 'Dialga / Palkia', pt: 'Dialga / Palkia' },
    regionId: 'coronet',
    subregionId: 'temple-of-sinnoh',
    map: { x: 52, y: 34 },
    mission: { en: 'Missions 17–18 — Mount Coronet climax', pt: 'Missões 17–18 — clímax do Monte Coronet' },
    requirements: { en: 'Story progress through Mission 17.', pt: 'Progresso da história até a Missão 17.' },
    tips: { en: 'Origin Ball encounter; follow story prompts.', pt: 'Encontro com Origin Ball; siga a história.' },
  },
  {
    id: 'giratina',
    dex: 487,
    kind: 'legendary',
    name: { en: 'Giratina', pt: 'Giratina' },
    regionId: 'cobalt',
    subregionId: 'turnback-cave',
    map: { x: 72, y: 50 },
    mission: { en: 'Request / post-story Turnback Cave', pt: 'Pedido / pós-história em Turnback Cave' },
    requirements: { en: 'Complete main story plates arc with Volo.', pt: 'Complete o arco das placas com Volo.' },
    tips: { en: 'Prepare for Origin Forme pressure.', pt: 'Prepare-se para a Forma Origem.' },
  },
  {
    id: 'cresselia',
    dex: 488,
    kind: 'legendary',
    name: { en: 'Cresselia', pt: 'Cresselia' },
    regionId: 'alabaster',
    subregionId: 'moonview-arena',
    map: { x: 50, y: 26 },
    mission: { en: 'Request — Incarnate forces / moon path', pt: 'Pedido — forças encarnadas / caminho lunar' },
    requirements: { en: 'Post-game request chain.', pt: 'Cadeia de pedidos do pós-jogo.' },
    tips: { en: 'Night encounter preferred.', pt: 'Prefira encontro à noite.' },
  },
  {
    id: 'darkrai',
    dex: 491,
    kind: 'mythical',
    name: { en: 'Darkrai', pt: 'Darkrai' },
    regionId: 'cobalt',
    subregionId: 'seaside-hollow',
    map: { x: 69, y: 49 },
    mission: { en: 'Request 72 — Darkrai event', pt: 'Pedido 72 — evento Darkrai' },
    requirements: { en: 'Complete Cresselia request first.', pt: 'Complete o pedido de Cresselia antes.' },
    tips: { en: 'Save before the fight.', pt: 'Salve antes da luta.' },
  },
  {
    id: 'heatran',
    dex: 485,
    kind: 'legendary',
    name: { en: 'Heatran', pt: 'Heatran' },
    regionId: 'cobalt',
    subregionId: 'lava-dome-sanctum',
    map: { x: 71, y: 45 },
    mission: { en: 'Request — The Slumbering Lord heat path', pt: 'Pedido — caminho ígneo' },
    requirements: { en: 'Post-game; Firespit Island access.', pt: 'Pós-jogo; acesso à Ilha Firespit.' },
    tips: { en: 'Bring water/ground pressure.', pt: 'Leve pressão Água/Terra.' },
  },
  {
    id: 'regigigas',
    dex: 486,
    kind: 'legendary',
    name: { en: 'Regigigas', pt: 'Regigigas' },
    regionId: 'alabaster',
    subregionId: 'snowpoint-temple',
    map: { x: 47, y: 18 },
    mission: { en: 'Request — Snowpoint Temple seal', pt: 'Pedido — selo do Templo Snowpoint' },
    requirements: { en: 'Have Regirock, Regice, Registeel in party.', pt: 'Tenha Regirock, Regice e Registeel na equipe.' },
    tips: { en: 'Slow Start window — unload damage early.', pt: 'Janela de Slow Start — cause dano cedo.' },
  },
  {
    id: 'enamorus',
    dex: 905,
    kind: 'legendary',
    name: { en: 'Enamorus', pt: 'Enamorus' },
    regionId: 'crimson',
    subregionId: 'scarlet-bog',
    map: { x: 57, y: 57 },
    mission: { en: 'Incarnate forces of Hisui', pt: 'Forças encarnadas de Hisui' },
    requirements: { en: 'Catch Tornadus, Thundurus, Landorus first.', pt: 'Capture Tornadus, Thundurus e Landorus antes.' },
    tips: { en: 'Appears after the three forces are caught.', pt: 'Aparece após capturar as três forças.' },
  },
  {
    id: 'arceus',
    dex: 493,
    kind: 'mythical',
    name: { en: 'Arceus', pt: 'Arceus' },
    regionId: 'coronet',
    subregionId: 'hall-of-origin',
    map: { x: 52, y: 32 },
    mission: { en: 'Mission 27 — The Deified Pokémon', pt: 'Missão 27 — O Pokémon deificado' },
    requirements: { en: 'Complete Hisui Pokédex; Azure Flute.', pt: 'Complete a Pokédex de Hisui; Flauta Azul.' },
    tips: { en: 'Save; bring plenty of balls.', pt: 'Salve; leve muitas balls.' },
    rewards: { en: 'Story completion / Legend Plate path', pt: 'Conclusão da história / Placa Lendária' },
  },
]
`)

console.log('core files done')
