export type Localized = { en: string; pt: string }

export type HisuiRegionId =
  | 'jubilife'
  | 'obsidian'
  | 'crimson'
  | 'cobalt'
  | 'coronet'
  | 'alabaster'

export type HisuiSubregion = {
  id: string
  name: Localized
  /** Position on the region's detail map, percent of width/height. */
  map?: { x: number; y: number }
}

export type HisuiRegion = {
  id: HisuiRegionId
  name: Localized
  description: Localized
  /**
   * Region center on /hisui-map.png, percent of width/height.
   * Calibrated to the annotated red marker points.
   */
  center: { x: number; y: number }
  /** Click/highlight radius as percent of map width */
  radius: number
  accent: string
  subregions: HisuiSubregion[]
  /** Optional zoomed area map (double-click / sidebar sub-tab). */
  detailMapSrc?: string
  /** Width / height of the detail map image. */
  detailMapAspect?: number
}

function sub(
  id: string,
  en: string,
  pt: string,
  map?: { x: number; y: number },
): HisuiSubregion {
  return { id, name: { en, pt }, map }
}

/**
 * Visitable Hisui areas for Legends: Arceus.
 * Centers calibrated to annotated red markers on the Hisui overview map.
 */
export const HISUI_REGIONS: HisuiRegion[] = [
  {
    id: 'jubilife',
    name: { en: 'Jubilife Village', pt: 'Vila Jubilo' },
    description: {
      en: 'Galaxy Team base and hub for shops, missions, and travel across Hisui.',
      pt: 'Base da Equipe Galáctica — lojas, missões e partida para Hisui.',
    },
    center: { x: 30.3, y: 57.6 },
    radius: 5.5,
    accent: '#d4a06a',
    detailMapSrc: '/jubilife-village-map.png',
    detailMapAspect: 1,
    subregions: [
      sub('galaxy-hall', 'Galaxy Hall', 'Salão Galáctico', { x: 50.0, y: 11.0 }),
      sub('training-grounds', 'Training Grounds', 'Campo de Treino', { x: 31.0, y: 13.0 }),
      sub('practice-field', 'Practice Field', 'Campo de Prática', { x: 26.5, y: 17.5 }),
      sub('photo-studio', 'Photo Studio', 'Estúdio Fotográfico', { x: 67.0, y: 15.0 }),
      sub('pastures', 'Pastures', 'Pasto', { x: 76.0, y: 19.0 }),
      sub('craftworks', 'Craftworks', 'Oficina', { x: 42.0, y: 23.0 }),
      sub('canala-clothing', 'Canala’s Clothing Shop', 'Loja de Roupas da Canala', {
        x: 54.0,
        y: 23.0,
      }),
      sub('general-store', 'General Store', 'Loja Geral', { x: 59.5, y: 23.0 }),
      sub('choy-shop', 'Choy’s Shop', 'Loja do Choy', { x: 63.5, y: 23.0 }),
      sub('farm', 'Farm', 'Fazenda', { x: 30.0, y: 38.0 }),
      sub('wallflower', 'The Wallflower', 'O Wallflower', { x: 45.5, y: 40.5 }),
      sub('front-gate', 'Front Gate', 'Portão Principal', { x: 51.0, y: 62.0 }),
    ],
  },
  {
    id: 'obsidian',
    name: { en: 'Obsidian Fieldlands', pt: 'Planície Obsidiana' },
    description: {
      en: 'Lush meadows and forests in southwestern Hisui. First survey area.',
      pt: 'Prados e florestas no sudoeste de Hisui. Primeira área de pesquisa.',
    },
    center: { x: 40.7, y: 66.8 },
    radius: 8.0,
    accent: '#5cad6e',
    detailMapSrc: '/obsidian-fieldlands-map.png',
    detailMapAspect: 1,
    subregions: [
      sub('fieldlands-camp', 'Fieldlands Camp', 'Acampamento da Planície', { x: 32.0, y: 12.0 }),
      sub('heights-camp', 'Heights Camp', 'Acampamento das Alturas', { x: 58.0, y: 50.0 }),
      sub('aspiration-hill', 'Aspiration Hill', 'Colina da Aspiração', { x: 38.0, y: 21.0 }),
      sub('horseshoe-plains', 'Horseshoe Plains', 'Planície da Ferradura', { x: 63.0, y: 14.0 }),
      sub('deertrack-path', 'Deertrack Path', 'Trilha dos Cervos', { x: 52.0, y: 36.0 }),
      sub('deertrack-heights', 'Deertrack Heights', 'Alturas dos Cervos', { x: 68.0, y: 42.0 }),
      sub('windswept-run', 'Windswept Run', 'Corrida dos Ventos', { x: 46.0, y: 58.0 }),
      sub('worn-bridge', 'Worn Bridge', 'Ponte Desgastada', { x: 80.0, y: 28.0 }),
      sub('nature-pantry', 'Nature’s Pantry', 'Despensa da Natureza', { x: 62.0, y: 68.0 }),
      sub('obsidian-falls', 'Obsidian Falls', 'Cataratas Obsidianas', { x: 90.0, y: 49.0 }),
      sub('oreburrow-tunnel', 'Oreburrow Tunnel', 'Túnel Oreburrow', { x: 90.0, y: 63.0 }),
      sub('the-heartwood', 'The Heartwood', 'Bosque do Coração', { x: 77.0, y: 83.0 }),
      sub('grandtree-arena', 'Grandtree Arena', 'Arena da Grande Árvore', { x: 85.0, y: 92.0 }),
      sub('grueling-grove', 'Grueling Grove', 'Bosque Árduo', { x: 82.0, y: 8.0 }),
      sub('lake-verity', 'Lake Verity', 'Lago Verity', { x: 10.0, y: 45.0 }),
      sub('verity-cavern', 'Verity Cavern', 'Caverna Verity', { x: 16.0, y: 40.0 }),
      sub('sandgem-flats', 'Sandgem Flats', 'Planícies Sandgem', { x: 14.0, y: 72.0 }),
      sub('tidewater-dam', 'Tidewater Dam', 'Represa da Maré', { x: 66.0, y: 77.0 }),
      sub('floaro-gardens', 'Floaro Gardens', 'Jardins Floaro', { x: 10.0, y: 16.0 }),
      sub('ramanas-island', 'Ramanas Island', 'Ilha Ramanas', { x: 29.0, y: 87.0 }),
      sub('moss-rock', 'Moss Rock', 'Pedra Musgosa', { x: 80.0, y: 86.0 }),
    ],
  },
  {
    id: 'crimson',
    name: { en: 'Crimson Mirelands', pt: 'Pântano Carmesim' },
    description: {
      en: 'Marshlands and ruins in the southeast, home to the Diamond Clan.',
      pt: 'Pântanos e ruínas no sudeste, lar do Clã Diamante.',
    },
    center: { x: 70.8, y: 60.6 },
    radius: 8.0,
    accent: '#c4a04a',
    detailMapSrc: '/crimson-mirelands-map.png',
    detailMapAspect: 1,
    subregions: [
      sub('mirelands-camp', 'Mirelands Camp', 'Acampamento do Pântano', { x: 21.0, y: 42.0 }),
      sub('bogbound-camp', 'Bogbound Camp', 'Acampamento do Brejo', { x: 63.0, y: 73.0 }),
      sub('golden-lowlands', 'Golden Lowlands', 'Terras Baixas Douradas', { x: 25.0, y: 49.0 }),
      sub('gapejaw-bog', 'Gapejaw Bog', 'Brejo Gapejaw', { x: 32.0, y: 67.0 }),
      sub('sludge-mound', 'Sludge Mound', 'Monte de Lodo', { x: 60.0, y: 78.0 }),
      sub('scarlet-bog', 'Scarlet Bog', 'Brejo Escarlate', { x: 52.0, y: 55.0 }),
      sub('solaceon-ruins', 'Solaceon Ruins', 'Ruínas Solaceon', { x: 43.0, y: 38.0 }),
      sub('cloudpool-ridge', 'Cloudpool Ridge', 'Cume Cloudpool', { x: 35.0, y: 17.0 }),
      sub('shrouded-ruins', 'Shrouded Ruins', 'Ruínas Enevoadas', { x: 55.0, y: 12.0 }),
      sub('diamond-settlement', 'Diamond Settlement', 'Assentamento Diamante', { x: 54.0, y: 30.0 }),
      sub('diamond-heath', 'Diamond Heath', 'Charneca Diamante', { x: 52.0, y: 23.0 }),
      sub('bolderoll-slope', 'Bolderoll Slope', 'Encosta Bolderoll', { x: 65.0, y: 48.0 }),
      sub('droning-meadow', 'Droning Meadow', 'Prado Zumbido', { x: 83.0, y: 69.0 }),
      sub('cottonsedge-prairie', 'Cottonsedge Prairie', 'Pradaria Cottonsedge', { x: 83.0, y: 60.0 }),
      sub('lake-valor', 'Lake Valor', 'Lago Valor', { x: 75.0, y: 17.5 }),
      sub('valor-cavern', 'Valor Cavern', 'Caverna Valor', { x: 75.0, y: 28.0 }),
      sub('holm-of-trials', 'Holm of Trials', 'Ilhota das Provas', { x: 45.0, y: 92.0 }),
      sub('brava-arena', 'Brava Arena', 'Arena Brava', { x: 36.0, y: 5.0 }),
      sub('ursas-ring', 'Ursa’s Ring', 'Anel de Ursa', { x: 71.0, y: 86.0 }),
    ],
  },
  {
    id: 'cobalt',
    name: { en: 'Cobalt Coastlands', pt: 'Costa Cobalto' },
    description: {
      en: 'Eastern coasts, bays, and volcanic isles including Firespit Island.',
      pt: 'Costa leste, baías e ilhas vulcânicas, incluindo a Ilha Firespit.',
    },
    center: { x: 86.8, y: 45.5 },
    radius: 8.0,
    accent: '#4a9bb8',
    detailMapSrc: '/cobalt-coastlands-map.png',
    detailMapAspect: 1,
    subregions: [
      sub('coastlands-camp', 'Coastlands Camp', 'Acampamento da Costa', { x: 83.0, y: 65.0 }),
      sub('beachside-camp', 'Beachside Camp', 'Acampamento da Praia', { x: 12.0, y: 78.0 }),
      sub('crossing-slope', 'Crossing Slope', 'Encosta do Cruzamento', { x: 20.0, y: 70.0 }),
      sub('ginkgo-landing', 'Ginkgo Landing', 'Desembarque Ginkgo', { x: 28.0, y: 65.0 }),
      sub('aipom-hills', 'Aipom Hills', 'Colinas Aipom', { x: 32.0, y: 80.0 }),
      sub('bathers-lagoon', 'Bathers’ Lagoon', 'Lagoa dos Banhistas', { x: 50.0, y: 88.0 }),
      sub('hideaway-bay', 'Hideaway Bay', 'Baía Escondida', { x: 48.0, y: 93.0 }),
      sub('deadwood-haunt', 'Deadwood Haunt', 'Assombração do Lenho Morto', { x: 70.0, y: 82.0 }),
      sub('castaway-shore', 'Castaway Shore', 'Costa dos Náufragos', { x: 52.0, y: 42.0 }),
      sub('windbreak-stand', 'Windbreak Stand', 'Posto Quebra-vento', { x: 28.0, y: 38.0 }),
      sub('veilstone-cape', 'Veilstone Cape', 'Cabo Veilstone', { x: 65.0, y: 35.0 }),
      sub('islespy-shore', 'Islespy Shore', 'Costa Islespy', { x: 45.0, y: 12.0 }),
      sub('tranquility-cove', 'Tranquility Cove', 'Enseada da Tranquilidade', { x: 58.0, y: 60.0 }),
      sub('sands-reach', 'Sand’s Reach', 'Alcance da Areia', { x: 85.0, y: 72.0 }),
      sub('tombolo-walk', 'Tombolo Walk', 'Passagem Tombolo', { x: 90.0, y: 90.0 }),
      sub('seagrass-haven', 'Seagrass Haven', 'Refúgio das Algas', { x: 72.0, y: 25.0 }),
      sub('lunkers-lair', 'Lunker’s Lair', 'Toca do Lunker', { x: 92.0, y: 40.0 }),
      sub('spring-path', 'Spring Path', 'Caminho da Fonte', { x: 22.0, y: 25.0 }),
      sub('turnback-cave', 'Turnback Cave', 'Caverna do Retorno', { x: 15.0, y: 20.0 }),
      sub('tidal-passage', 'Tidal Passage', 'Passagem da Maré', { x: 55.0, y: 48.0 }),
      sub('seaside-hollow', 'Seaside Hollow', 'Oco à Beira-mar', { x: 42.0, y: 85.0 }),
      sub('firespit-island', 'Firespit Island', 'Ilha Firespit', { x: 88.0, y: 15.0 }),
      sub('molten-arena', 'Molten Arena', 'Arena Derretida', { x: 85.0, y: 8.0 }),
      sub('lava-dome-sanctum', 'Lava Dome Sanctum', 'Santuário do Domo de Lava', { x: 90.0, y: 12.0 }),
    ],
  },
  {
    id: 'coronet',
    name: { en: 'Coronet Highlands', pt: 'Cordilheira Coronet' },
    description: {
      en: 'The mountainous heart of Hisui, rising to the Temple of Sinnoh.',
      pt: 'O coração montanhoso de Hisui, até o Templo de Sinnoh.',
    },
    center: { x: 49.4, y: 44.8 },
    radius: 7.5,
    accent: '#8fa878',
    detailMapSrc: '/coronet-highlands-map.png',
    detailMapAspect: 1,
    subregions: [
      sub('highlands-camp', 'Highlands Camp', 'Acampamento das Terras Altas', { x: 90.0, y: 92.0 }),
      sub('mountain-camp', 'Mountain Camp', 'Acampamento da Montanha', { x: 82.0, y: 67.0 }),
      sub('summit-camp', 'Summit Camp', 'Acampamento do Cume', { x: 14.0, y: 44.0 }),
      sub('heavenward-lookout', 'Heavenward Lookout', 'Mirante Celeste', { x: 91.0, y: 90.0 }),
      sub('lonely-spring', 'Lonely Spring', 'Fonte Solitária', { x: 87.0, y: 62.0 }),
      sub('fabled-spring', 'Fabled Spring', 'Fonte Lendária', { x: 17.0, y: 89.0 }),
      sub('celestica-trail', 'Celestica Trail', 'Trilha Celestica', { x: 48.0, y: 64.0 }),
      sub('celestica-ruins', 'Celestica Ruins', 'Ruínas Celestica', { x: 63.0, y: 40.0 }),
      sub('sacred-plaza', 'Sacred Plaza', 'Praça Sagrada', { x: 24.0, y: 50.0 }),
      sub('temple-of-sinnoh', 'Temple of Sinnoh', 'Templo de Sinnoh', { x: 17.0, y: 8.0 }),
      sub('spear-pillar', 'Spear Pillar', 'Coluna Lança', { x: 16.0, y: 4.0 }),
      sub('moonview-arena', 'Moonview Arena', 'Arena da Vista Lunar', { x: 6.0, y: 40.0 }),
      sub('clamberclaw-cliffs', 'Clamberclaw Cliffs', 'Penhascos Garra', { x: 78.0, y: 49.0 }),
      sub('cloudcap-pass', 'Cloudcap Pass', 'Passagem das Nuvens', { x: 22.0, y: 22.0 }),
      sub('sonorous-path', 'Sonorous Path', 'Caminho Sonoro', { x: 68.0, y: 74.0 }),
      sub('ancient-quarry', 'Ancient Quarry', 'Pedreira Antiga', { x: 52.0, y: 84.0 }),
      sub('bolderoll-ravine', 'Bolderoll Ravine', 'Ravina Bolderoll', { x: 12.0, y: 70.0 }),
      sub('stonetooth-rows', 'Stonetooth Rows', 'Fileiras Dentadas', { x: 6.0, y: 56.0 }),
      sub('primeval-grotto', 'Primeval Grotto', 'Gruta Primordial', { x: 45.0, y: 56.0 }),
      sub('wayward-wood', 'Wayward Wood', 'Bosque Desviado', { x: 56.0, y: 93.0 }),
      sub('wayward-cave', 'Wayward Cave', 'Caverna Desviada', { x: 74.0, y: 86.0 }),
      sub('stone-portal', 'Stone Portal', 'Portal de Pedra', { x: 34.0, y: 28.0 }),
    ],
  },
  {
    id: 'alabaster',
    name: { en: 'Alabaster Icelands', pt: 'Tundra Alba' },
    description: {
      en: 'Snowy northern reaches of Hisui, home to Lake Acuity and the Pearl Clan.',
      pt: 'Extremo norte nevado de Hisui, lar do Lago Acuity e do Clã Pérola.',
    },
    center: { x: 37.0, y: 12.7 },
    radius: 7.5,
    accent: '#c8d8e8',
    detailMapSrc: '/alabaster-icelands-map.png',
    detailMapAspect: 1,
    subregions: [
      sub('snowfields-camp', 'Snowfields Camp', 'Acampamento das Neves', { x: 42.0, y: 35.0 }),
      sub('icepeak-camp', 'Icepeak Camp', 'Acampamento do Pico Gelado', { x: 48.0, y: 24.0 }),
      sub('whiteout-valley', 'Whiteout Valley', 'Vale Nevado', { x: 55.0, y: 83.0 }),
      sub('bonechill-wastes', 'Bonechill Wastes', 'Ermos Gélidos', { x: 58.0, y: 68.0 }),
      sub('avalanche-slopes', 'Avalanche Slopes', 'Encostas da Avalanche', { x: 12.0, y: 78.0 }),
      sub('icebound-falls', 'Icebound Falls', 'Cataratas Congeladas', { x: 30.0, y: 91.0 }),
      sub('hearts-crag', 'Heart’s Crag', 'Penhasco do Coração', { x: 85.0, y: 38.0 }),
      sub('glacier-terrace', 'Glacier Terrace', 'Terraço do Glaciar', { x: 25.0, y: 22.0 }),
      sub('snowfall-hot-spring', 'Snowfall Hot Spring', 'Fonte Termal Nevada', { x: 15.0, y: 35.0 }),
      sub('arenas-approach', 'Arena’s Approach', 'Acesso à Arena', { x: 25.0, y: 63.0 }),
      sub('icepeak-arena', 'Icepeak Arena', 'Arena do Pico Gelado', { x: 8.0, y: 46.0 }),
      sub('pearl-settlement', 'Pearl Settlement', 'Assentamento Pérola', { x: 70.0, y: 30.0 }),
      sub('lake-acuity', 'Lake Acuity', 'Lago Acuity', { x: 48.0, y: 12.0 }),
      sub('snowpoint-temple', 'Snowpoint Temple', 'Templo Snowpoint', { x: 65.0, y: 5.0 }),
      sub('avaluggs-legacy', 'Avalugg’s Legacy', 'Legado de Avalugg', { x: 50.0, y: 46.0 }),
      sub('hibernal-cave', 'Hibernal Cave', 'Caverna Hibernal', { x: 18.0, y: 55.0 }),
      sub('icepeak-cavern', 'Icepeak Cavern', 'Caverna do Pico Gelado', { x: 12.0, y: 52.0 }),
      sub('crevasse-passage', 'Crevasse Passage', 'Passagem da Fenda', { x: 40.0, y: 52.0 }),
      sub('secret-hollow', 'Secret Hollow', 'Oco Secreto', { x: 55.0, y: 95.0 }),
      sub('ice-column-chamber', 'Ice Column Chamber', 'Câmara das Colunas de Gelo', { x: 8.0, y: 50.0 }),
      sub('ice-rock', 'Ice Rock', 'Pedra do Gelo', { x: 18.0, y: 76.0 }),
    ],
  },
]

export function getHisuiRegion(id: HisuiRegionId | null) {
  if (!id) return null
  return HISUI_REGIONS.find((r) => r.id === id) ?? null
}

/** Regions that have a dedicated detail map. */
export const HISUI_DETAIL_REGIONS = HISUI_REGIONS.filter((r) => r.detailMapSrc)

