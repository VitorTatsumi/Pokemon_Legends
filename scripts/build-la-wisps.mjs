/**
 * Generate src/data/laWisps.ts — 107 Lost Satchels (wisps) with curated subregions.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const outPath = path.join(root, 'src/data/laWisps.ts')

const CENTERS = {
  jubilife: { x: 30.3, y: 57.6 },
  obsidian: { x: 40.7, y: 66.8 },
  crimson: { x: 70.8, y: 60.6 },
  cobalt: { x: 86.8, y: 45.5 },
  coronet: { x: 49.4, y: 44.8 },
  alabaster: { x: 37.0, y: 12.7 },
}

/** @type {{ region: keyof typeof CENTERS; sub: string; en: string; pt: string }[]} */
const curated = [
  // Jubilife ×7
  { region: 'jubilife', sub: 'galaxy-hall', en: 'On the Galaxy Hall roof ledge', pt: 'Na beirada do telhado do Salão Galáctico' },
  { region: 'jubilife', sub: 'training-grounds', en: 'Behind the Training Grounds fence', pt: 'Atrás da cerca do Campo de Treino' },
  { region: 'jubilife', sub: 'pastures', en: 'Near the Pastures gate', pt: 'Perto do portão do Pasto' },
  { region: 'jubilife', sub: 'farm', en: 'Beside the Farm crop rows', pt: 'Ao lado das plantações da Fazenda' },
  { region: 'jubilife', sub: 'craftworks', en: 'On the Craftworks chimney', pt: 'Na chaminé da Oficina' },
  { region: 'jubilife', sub: 'front-gate', en: 'Above the Front Gate arch', pt: 'Acima do arco do Portão Principal' },
  { region: 'jubilife', sub: 'wallflower', en: 'On The Wallflower balcony', pt: 'Na varanda do Wallflower' },
  // Obsidian ×20
  { region: 'obsidian', sub: 'fieldlands-camp', en: 'On a crate at Fieldlands Camp', pt: 'Em um caixote no Acampamento da Planície' },
  { region: 'obsidian', sub: 'aspiration-hill', en: 'Top of Aspiration Hill', pt: 'Topo da Colina da Aspiração' },
  { region: 'obsidian', sub: 'horseshoe-plains', en: 'Center of Horseshoe Plains', pt: 'Centro da Planície da Ferradura' },
  { region: 'obsidian', sub: 'deertrack-path', en: 'Along Deertrack Path', pt: 'Ao longo da Trilha dos Cervos' },
  { region: 'obsidian', sub: 'deertrack-heights', en: 'Deertrack Heights overlook', pt: 'Mirante das Alturas dos Cervos' },
  { region: 'obsidian', sub: 'heights-camp', en: 'Heights Camp watchtower', pt: 'Torre de vigia do Acampamento das Alturas' },
  { region: 'obsidian', sub: 'windswept-run', en: 'End of Windswept Run', pt: 'Fim da Corrida dos Ventos' },
  { region: 'obsidian', sub: 'worn-bridge', en: 'Under Worn Bridge', pt: 'Debaixo da Ponte Desgastada' },
  { region: 'obsidian', sub: 'nature-pantry', en: 'Nature’s Pantry berry grove', pt: 'Bosque de berries da Despensa da Natureza' },
  { region: 'obsidian', sub: 'obsidian-falls', en: 'Behind Obsidian Falls', pt: 'Atrás das Cataratas Obsidianas' },
  { region: 'obsidian', sub: 'oreburrow-tunnel', en: 'Oreburrow Tunnel entrance', pt: 'Entrada do Túnel Oreburrow' },
  { region: 'obsidian', sub: 'the-heartwood', en: 'Deep in The Heartwood', pt: 'No fundo do Bosque do Coração' },
  { region: 'obsidian', sub: 'grandtree-arena', en: 'Grandtree Arena roots', pt: 'Raízes da Arena da Grande Árvore' },
  { region: 'obsidian', sub: 'grueling-grove', en: 'Grueling Grove clearing', pt: 'Clareira do Bosque Árduo' },
  { region: 'obsidian', sub: 'lake-verity', en: 'Shore of Lake Verity', pt: 'Margem do Lago Verity' },
  { region: 'obsidian', sub: 'verity-cavern', en: 'Inside Verity Cavern', pt: 'Dentro da Caverna Verity' },
  { region: 'obsidian', sub: 'sandgem-flats', en: 'Sandgem Flats beach', pt: 'Praia das Planícies Sandgem' },
  { region: 'obsidian', sub: 'tidewater-dam', en: 'On Tidewater Dam', pt: 'Na Represa da Maré' },
  { region: 'obsidian', sub: 'floaro-gardens', en: 'Floaro Gardens pond', pt: 'Lago dos Jardins Floaro' },
  { region: 'obsidian', sub: 'ramanas-island', en: 'Ramanas Island cliff', pt: 'Penhasco da Ilha Ramanas' },
  // Crimson ×20
  { region: 'crimson', sub: 'mirelands-camp', en: 'Mirelands Camp supply stack', pt: 'Pilha de suprimentos do Acampamento do Pântano' },
  { region: 'crimson', sub: 'golden-lowlands', en: 'Golden Lowlands reeds', pt: 'Juncos das Terras Baixas Douradas' },
  { region: 'crimson', sub: 'gapejaw-bog', en: 'Gapejaw Bog mud mound', pt: 'Monte de lama do Brejo Gapejaw' },
  { region: 'crimson', sub: 'scarlet-bog', en: 'Scarlet Bog boardwalk', pt: 'Passarela do Brejo Escarlate' },
  { region: 'crimson', sub: 'solaceon-ruins', en: 'Solaceon Ruins pillar', pt: 'Pilar das Ruínas Solaceon' },
  { region: 'crimson', sub: 'cloudpool-ridge', en: 'Cloudpool Ridge peak', pt: 'Cume do Cume Cloudpool' },
  { region: 'crimson', sub: 'shrouded-ruins', en: 'Shrouded Ruins altar', pt: 'Altar das Ruínas Enevoadas' },
  { region: 'crimson', sub: 'diamond-settlement', en: 'Diamond Settlement hut roof', pt: 'Telhado de cabana do Assentamento Diamante' },
  { region: 'crimson', sub: 'diamond-heath', en: 'Diamond Heath stones', pt: 'Pedras da Charneca Diamante' },
  { region: 'crimson', sub: 'bolderoll-slope', en: 'Bolderoll Slope boulder', pt: 'Pedregulho da Encosta Bolderoll' },
  { region: 'crimson', sub: 'bogbound-camp', en: 'Bogbound Camp flagpole', pt: 'Mastro do Acampamento do Brejo' },
  { region: 'crimson', sub: 'sludge-mound', en: 'Sludge Mound top', pt: 'Topo do Monte de Lodo' },
  { region: 'crimson', sub: 'droning-meadow', en: 'Droning Meadow flowers', pt: 'Flores do Prado Zumbido' },
  { region: 'crimson', sub: 'cottonsedge-prairie', en: 'Cottonsedge Prairie windmill', pt: 'Moinho da Pradaria Cottonsedge' },
  { region: 'crimson', sub: 'lake-valor', en: 'Lake Valor shore', pt: 'Margem do Lago Valor' },
  { region: 'crimson', sub: 'valor-cavern', en: 'Valor Cavern mouth', pt: 'Boca da Caverna Valor' },
  { region: 'crimson', sub: 'holm-of-trials', en: 'Holm of Trials rock', pt: 'Rocha da Ilhota das Provas' },
  { region: 'crimson', sub: 'brava-arena', en: 'Brava Arena entrance', pt: 'Entrada da Arena Brava' },
  { region: 'crimson', sub: 'ursas-ring', en: 'Ursa’s Ring clearing', pt: 'Clareira do Anel de Ursa' },
  { region: 'crimson', sub: 'solaceon-ruins', en: 'Solaceon Ruins inner chamber', pt: 'Câmara interna das Ruínas Solaceon' },
  // Cobalt ×20
  { region: 'cobalt', sub: 'coastlands-camp', en: 'Coastlands Camp dock', pt: 'Cais do Acampamento da Costa' },
  { region: 'cobalt', sub: 'ginkgo-landing', en: 'Ginkgo Landing pier', pt: 'Píer do Desembarque Ginkgo' },
  { region: 'cobalt', sub: 'crossing-slope', en: 'Crossing Slope trail sign', pt: 'Placa da Encosta do Cruzamento' },
  { region: 'cobalt', sub: 'windbreak-stand', en: 'Windbreak Stand trees', pt: 'Árvores do Posto Quebra-vento' },
  { region: 'cobalt', sub: 'islespy-shore', en: 'Islespy Shore tide pools', pt: 'Poças de maré da Costa Islespy' },
  { region: 'cobalt', sub: 'spring-path', en: 'Spring Path hot spring', pt: 'Fonte termal do Caminho da Fonte' },
  { region: 'cobalt', sub: 'turnback-cave', en: 'Near Turnback Cave', pt: 'Perto da Caverna do Retorno' },
  { region: 'cobalt', sub: 'veilstone-cape', en: 'Veilstone Cape lighthouse', pt: 'Farol do Cabo Veilstone' },
  { region: 'cobalt', sub: 'castaway-shore', en: 'Castaway Shore wreck', pt: 'Destroços da Costa dos Náufragos' },
  { region: 'cobalt', sub: 'tidal-passage', en: 'Tidal Passage rocks', pt: 'Rochas da Passagem da Maré' },
  { region: 'cobalt', sub: 'tranquility-cove', en: 'Tranquility Cove beach', pt: 'Praia da Enseada da Tranquilidade' },
  { region: 'cobalt', sub: 'aipom-hills', en: 'Aipom Hills ridge', pt: 'Crista das Colinas Aipom' },
  { region: 'cobalt', sub: 'bathers-lagoon', en: 'Bathers’ Lagoon island', pt: 'Ilha da Lagoa dos Banhistas' },
  { region: 'cobalt', sub: 'hideaway-bay', en: 'Hideaway Bay cave', pt: 'Caverna da Baía Escondida' },
  { region: 'cobalt', sub: 'seagrass-haven', en: 'Seagrass Haven kelp bed', pt: 'Campo de algas do Refúgio das Algas' },
  { region: 'cobalt', sub: 'lunkers-lair', en: 'Lunker’s Lair whirlpool', pt: 'Redemoinho da Toca do Lunker' },
  { region: 'cobalt', sub: 'deadwood-haunt', en: 'Deadwood Haunt stump', pt: 'Toco da Assombração do Lenho Morto' },
  { region: 'cobalt', sub: 'beachside-camp', en: 'Beachside Camp bonfire', pt: 'Fogueira do Acampamento da Praia' },
  { region: 'cobalt', sub: 'sands-reach', en: 'Sand’s Reach dunes', pt: 'Dunas do Alcance da Areia' },
  { region: 'cobalt', sub: 'firespit-island', en: 'Firespit Island caldera rim', pt: 'Borda da caldeira da Ilha Firespit' },
  // Coronet ×20
  { region: 'coronet', sub: 'highlands-camp', en: 'Highlands Camp tent row', pt: 'Fileira de tendas do Acampamento das Terras Altas' },
  { region: 'coronet', sub: 'mountain-camp', en: 'Mountain Camp cliff', pt: 'Penhasco do Acampamento da Montanha' },
  { region: 'coronet', sub: 'summit-camp', en: 'Summit Camp fire pit', pt: 'Fogueira do Acampamento do Cume' },
  { region: 'coronet', sub: 'heavenward-lookout', en: 'Heavenward Lookout platform', pt: 'Plataforma do Mirante Celeste' },
  { region: 'coronet', sub: 'lonely-spring', en: 'Lonely Spring waterfall', pt: 'Cachoeira da Fonte Solitária' },
  { region: 'coronet', sub: 'fabled-spring', en: 'Fabled Spring shrine', pt: 'Santuário da Fonte Lendária' },
  { region: 'coronet', sub: 'celestica-trail', en: 'Celestica Trail bridge', pt: 'Ponte da Trilha Celestica' },
  { region: 'coronet', sub: 'celestica-ruins', en: 'Celestica Ruins gate', pt: 'Portão das Ruínas Celestica' },
  { region: 'coronet', sub: 'sacred-plaza', en: 'Sacred Plaza statue', pt: 'Estátua da Praça Sagrada' },
  { region: 'coronet', sub: 'clamberclaw-cliffs', en: 'Clamberclaw Cliffs ledge', pt: 'Beirada dos Penhascos Garra' },
  { region: 'coronet', sub: 'cloudcap-pass', en: 'Cloudcap Pass snowfield', pt: 'Campo nevado da Passagem das Nuvens' },
  { region: 'coronet', sub: 'sonorous-path', en: 'Sonorous Path echo stone', pt: 'Pedra do eco do Caminho Sonoro' },
  { region: 'coronet', sub: 'ancient-quarry', en: 'Ancient Quarry crane', pt: 'Guindaste da Pedreira Antiga' },
  { region: 'coronet', sub: 'bolderoll-ravine', en: 'Bolderoll Ravine bridge', pt: 'Ponte da Ravina Bolderoll' },
  { region: 'coronet', sub: 'stonetooth-rows', en: 'Stonetooth Rows fangs', pt: 'Presas das Fileiras Dentadas' },
  { region: 'coronet', sub: 'primeval-grotto', en: 'Primeval Grotto crystals', pt: 'Cristais da Gruta Primordial' },
  { region: 'coronet', sub: 'wayward-wood', en: 'Wayward Wood hollow tree', pt: 'Árvore oca do Bosque Desviado' },
  { region: 'coronet', sub: 'wayward-cave', en: 'Wayward Cave stalactite', pt: 'Estalactite da Caverna Desviada' },
  { region: 'coronet', sub: 'stone-portal', en: 'Stone Portal arch', pt: 'Arco do Portal de Pedra' },
  { region: 'coronet', sub: 'temple-of-sinnoh', en: 'Temple of Sinnoh steps', pt: 'Degraus do Templo de Sinnoh' },
  // Alabaster ×20
  { region: 'alabaster', sub: 'snowfields-camp', en: 'Snowfields Camp sled stack', pt: 'Pilha de trenós do Acampamento das Neves' },
  { region: 'alabaster', sub: 'icepeak-camp', en: 'Icepeak Camp ridge', pt: 'Crista do Acampamento do Pico Gelado' },
  { region: 'alabaster', sub: 'whiteout-valley', en: 'Whiteout Valley drift', pt: 'Neve acumulada do Vale Nevado' },
  { region: 'alabaster', sub: 'bonechill-wastes', en: 'Bonechill Wastes ice spire', pt: 'Espinho de gelo dos Ermos Gélidos' },
  { region: 'alabaster', sub: 'avalanche-slopes', en: 'Avalanche Slopes cliff', pt: 'Penhasco das Encostas da Avalanche' },
  { region: 'alabaster', sub: 'icebound-falls', en: 'Icebound Falls frozen cascade', pt: 'Cascata congelada das Cataratas Congeladas' },
  { region: 'alabaster', sub: 'hearts-crag', en: 'Heart’s Crag summit', pt: 'Cume do Penhasco do Coração' },
  { region: 'alabaster', sub: 'glacier-terrace', en: 'Glacier Terrace crevasse', pt: 'Fenda do Terraço do Glaciar' },
  { region: 'alabaster', sub: 'snowfall-hot-spring', en: 'Snowfall Hot Spring pool', pt: 'Piscina da Fonte Termal Nevada' },
  { region: 'alabaster', sub: 'arenas-approach', en: 'Arena’s Approach torii', pt: 'Torii do Acesso à Arena' },
  { region: 'alabaster', sub: 'icepeak-arena', en: 'Icepeak Arena gate', pt: 'Portão da Arena do Pico Gelado' },
  { region: 'alabaster', sub: 'pearl-settlement', en: 'Pearl Settlement banner', pt: 'Estandarte do Assentamento Pérola' },
  { region: 'alabaster', sub: 'lake-acuity', en: 'Lake Acuity ice floe', pt: 'Bloco de gelo do Lago Acuity' },
  { region: 'alabaster', sub: 'snowpoint-temple', en: 'Snowpoint Temple gate', pt: 'Portão do Templo Snowpoint' },
  { region: 'alabaster', sub: 'avaluggs-legacy', en: 'Avalugg’s Legacy ice throne', pt: 'Trono de gelo do Legado de Avalugg' },
  { region: 'alabaster', sub: 'hibernal-cave', en: 'Hibernal Cave icicles', pt: 'Sincelas da Caverna Hibernal' },
  { region: 'alabaster', sub: 'icepeak-cavern', en: 'Icepeak Cavern depth', pt: 'Profundezas da Caverna do Pico Gelado' },
  { region: 'alabaster', sub: 'crevasse-passage', en: 'Crevasse Passage bridge', pt: 'Ponte da Passagem da Fenda' },
  { region: 'alabaster', sub: 'secret-hollow', en: 'Secret Hollow burrow', pt: 'Toca do Oco Secreto' },
  { region: 'alabaster', sub: 'ice-rock', en: 'Near the Ice Rock', pt: 'Perto da Pedra do Gelo' },
]

if (curated.length !== 107) {
  throw new Error(`Expected 107 wisps, got ${curated.length}`)
}

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

const regionCounts = {}
const lines = curated.map((c, i) => {
  const idx = regionCounts[c.region] ?? 0
  regionCounts[c.region] = idx + 1
  const center = CENTERS[c.region]
  const angle = idx * 0.7
  const r = 0.35 + (idx % 5) * 0.12
  const map = {
    x: Math.round((center.x + Math.cos(angle) * r) * 10) / 10,
    y: Math.round((center.y + Math.sin(angle) * r) * 10) / 10,
  }
  const num = String(i + 1).padStart(3, '0')
  return `  {
    id: 'w-${num}',
    name: { en: 'Lost Satchel ${i + 1}', pt: 'Bolsa Perdida ${i + 1}' },
    description: {
      en: 'A wandering spirit tied to a lost satchel. Touch it to send the satchel home.',
      pt: 'Um espírito ligado a uma bolsa perdida. Toque para enviá-la de volta.',
    },
    regionId: '${c.region}',
    subregionId: '${c.sub}',
    map: { x: ${map.x}, y: ${map.y} },
    note: { en: '${esc(c.en)}', pt: '${esc(c.pt)}' },
  },`
})

const out = `import type { LaPinItem } from './laCollectible'

/** All 107 Lost Satchels (wisps) in Pokémon Legends: Arceus. */
export const LA_WISPS: LaPinItem[] = [
${lines.join('\n')}
]
`

fs.writeFileSync(outPath, out, 'utf8')
console.log('Wrote LA_WISPS (107 entries)')
