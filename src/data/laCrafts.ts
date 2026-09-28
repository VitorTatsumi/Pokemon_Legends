import type { HisuiRegionId } from './hisuiRegions'
import type { Localized } from './laCollectible'

export type LaMaterial = {
  id: string
  name: Localized
  sprite: string
  farm: { regionId: HisuiRegionId; subregionId: string; note: Localized }[]
}

export type LaCraftCategory =
  | 'ball'
  | 'medicine'
  | 'battle'
  | 'field'
  | 'food'
  | 'valuable'
  | 'tool'

export type LaCraftRecipe = {
  id: string
  name: Localized
  resultSprite: string
  category: LaCraftCategory
  description: Localized
  unlock?: Localized
  materials: { materialId: string; qty: number }[]
}

/** Craftable bag items (same entries as recipes, browsed as Items). */
export type LaCraftItem = LaCraftRecipe

function farm(
  regionId: HisuiRegionId,
  subregionId: string,
  en: string,
  pt: string,
): LaMaterial['farm'][number] {
  return { regionId, subregionId, note: { en, pt } }
}

export type LaMaterialGroup = 'ore' | 'plant' | 'berry' | 'food' | 'misc'

/** Red ore deposits — Tumblestone (every survey area). */
const RED_ORE_FARMS: LaMaterial['farm'] = [
  farm('obsidian', 'oreburrow-tunnel', 'Red ore deposits.', 'Depósitos de minério vermelho.'),
  farm('obsidian', 'deertrack-heights', 'Red ore on rocky heights.', 'Minério vermelho nas alturas.'),
  farm('obsidian', 'worn-bridge', 'Red ore near the bridge cliffs.', 'Minério vermelho perto da ponte.'),
  farm('obsidian', 'sandgem-flats', 'Red ore on sandy flats.', 'Minério vermelho nas planícies arenosas.'),
  farm('obsidian', 'windswept-run', 'Red ore along the run.', 'Minério vermelho ao longo da corrida.'),
  farm('obsidian', 'obsidian-falls', 'Red ore near the falls.', 'Minério vermelho perto das cataratas.'),
  farm('crimson', 'bolderoll-slope', 'Red ore on rocky slopes.', 'Minério vermelho nas encostas.'),
  farm('crimson', 'sludge-mound', 'Red ore around the mound.', 'Minério vermelho no monte.'),
  farm('crimson', 'cloudpool-ridge', 'Red ore along the ridge.', 'Minério vermelho no cume.'),
  farm('crimson', 'solaceon-ruins', 'Red ore near the ruins.', 'Minério vermelho perto das ruínas.'),
  farm('crimson', 'scarlet-bog', 'Red ore around the bog rim.', 'Minério vermelho na borda do brejo.'),
  farm('cobalt', 'crossing-slope', 'Red ore on coastal slopes.', 'Minério vermelho nas encostas costeiras.'),
  farm('cobalt', 'castaway-shore', 'Red ore along the shore.', 'Minério vermelho na costa.'),
  farm('cobalt', 'veilstone-cape', 'Red ore on the cape.', 'Minério vermelho no cabo.'),
  farm('cobalt', 'windbreak-stand', 'Red ore near Windbreak Stand.', 'Minério vermelho no Quebra-vento.'),
  farm('cobalt', 'ginkgo-landing', 'Red ore near the landing.', 'Minério vermelho no desembarque.'),
  farm('coronet', 'ancient-quarry', 'Red ore in the quarry (very common).', 'Minério vermelho na pedreira (muito comum).'),
  farm('coronet', 'celestica-trail', 'Red ore along the trail.', 'Minério vermelho na trilha.'),
  farm('coronet', 'clamberclaw-cliffs', 'Red ore on the cliffs.', 'Minério vermelho nos penhascos.'),
  farm('coronet', 'bolderoll-ravine', 'Red ore in the ravine.', 'Minério vermelho na ravina.'),
  farm('coronet', 'stonetooth-rows', 'Red ore among the stone rows.', 'Minério vermelho nas fileiras.'),
  farm('alabaster', 'bonechill-wastes', 'Red ore on icy wastes.', 'Minério vermelho nos ermos.'),
  farm('alabaster', 'avalanche-slopes', 'Red ore on avalanche slopes.', 'Minério vermelho nas encostas.'),
  farm('alabaster', 'whiteout-valley', 'Red ore in the valley.', 'Minério vermelho no vale.'),
  farm('alabaster', 'glacier-terrace', 'Red ore on the terrace.', 'Minério vermelho no terraço.'),
  farm('alabaster', 'arenas-approach', 'Red ore toward the arena.', 'Minério vermelho a caminho da arena.'),
  farm('jubilife', 'craftworks', 'Sold at the Craftworks.', 'Vendido na Oficina.'),
]

/** Black ore deposits — Black Tumblestone. */
const BLACK_ORE_FARMS: LaMaterial['farm'] = [
  farm('obsidian', 'oreburrow-tunnel', 'Black ore deposits.', 'Depósitos de minério preto.'),
  farm('obsidian', 'deertrack-heights', 'Black ore on rocky heights.', 'Minério preto nas alturas.'),
  farm('obsidian', 'worn-bridge', 'Black ore near cliffs.', 'Minério preto perto dos penhascos.'),
  farm('crimson', 'bolderoll-slope', 'Black ore on slopes.', 'Minério preto nas encostas.'),
  farm('crimson', 'sludge-mound', 'Black ore around the mound.', 'Minério preto no monte.'),
  farm('crimson', 'cloudpool-ridge', 'Black ore on the ridge.', 'Minério preto no cume.'),
  farm('cobalt', 'castaway-shore', 'Black ore along the shore.', 'Minério preto na costa.'),
  farm('cobalt', 'veilstone-cape', 'Black ore on the cape.', 'Minério preto no cabo.'),
  farm('cobalt', 'crossing-slope', 'Black ore on coastal slopes.', 'Minério preto nas encostas.'),
  farm('cobalt', 'firespit-island', 'Black ore on the volcanic isle.', 'Minério preto na ilha vulcânica.'),
  farm('coronet', 'ancient-quarry', 'Black ore veins in the quarry.', 'Veios de minério preto na pedreira.'),
  farm('coronet', 'bolderoll-ravine', 'Black ore in the ravine.', 'Minério preto na ravina.'),
  farm('coronet', 'celestica-ruins', 'Black ore near the ruins.', 'Minério preto perto das ruínas.'),
  farm('coronet', 'clamberclaw-cliffs', 'Black ore on the cliffs.', 'Minério preto nos penhascos.'),
  farm('alabaster', 'bonechill-wastes', 'Black ore on icy wastes.', 'Minério preto nos ermos.'),
  farm('alabaster', 'avalanche-slopes', 'Black ore on slopes.', 'Minério preto nas encostas.'),
  farm('alabaster', 'icebound-falls', 'Black ore near the falls.', 'Minério preto perto das cataratas.'),
  farm('jubilife', 'craftworks', 'Sold at the Craftworks.', 'Vendido na Oficina.'),
]

/** Blue ore deposits — Sky Tumblestone. */
const BLUE_ORE_FARMS: LaMaterial['farm'] = [
  farm('obsidian', 'oreburrow-tunnel', 'Blue ore deposits.', 'Depósitos de minério azul.'),
  farm('obsidian', 'deertrack-heights', 'Blue ore on rocky heights.', 'Minério azul nas alturas.'),
  farm('obsidian', 'lake-verity', 'Blue ore near the lake.', 'Minério azul perto do lago.'),
  farm('crimson', 'bolderoll-slope', 'Blue ore on slopes.', 'Minério azul nas encostas.'),
  farm('crimson', 'cloudpool-ridge', 'Blue ore on the ridge.', 'Minério azul no cume.'),
  farm('crimson', 'lake-valor', 'Blue ore near Lake Valor.', 'Minério azul perto do Lago Valor.'),
  farm('cobalt', 'windbreak-stand', 'Blue ore on high cliffs.', 'Minério azul nos penhascos altos.'),
  farm('cobalt', 'veilstone-cape', 'Blue ore on coastal deposits.', 'Minério azul nos depósitos costeiros.'),
  farm('cobalt', 'tranquility-cove', 'Blue ore around the cove.', 'Minério azul na enseada.'),
  farm('cobalt', 'islespy-shore', 'Blue ore along Islespy Shore.', 'Minério azul na Costa Islespy.'),
  farm('coronet', 'ancient-quarry', 'Blue ore in the quarry.', 'Minério azul na pedreira.'),
  farm('coronet', 'fabled-spring', 'Blue ore near the spring.', 'Minério azul perto da fonte.'),
  farm('coronet', 'celestica-trail', 'Blue ore along the trail.', 'Minério azul na trilha.'),
  farm('alabaster', 'lake-acuity', 'Blue ore near Lake Acuity.', 'Minério azul perto do Lago Acuity.'),
  farm('alabaster', 'bonechill-wastes', 'Blue ore on icy wastes.', 'Minério azul nos ermos.'),
  farm('alabaster', 'glacier-terrace', 'Blue ore on the terrace.', 'Minério azul no terraço.'),
  farm('jubilife', 'craftworks', 'Sold at the Craftworks.', 'Vendido na Oficina.'),
]

/** Iron Chunk — drops from ore deposits across Hisui. */
const IRON_CHUNK_FARMS: LaMaterial['farm'] = [
  farm('obsidian', 'oreburrow-tunnel', 'Ore deposits (with Tumblestones).', 'Depósitos de minério (com Pedras Rolantes).'),
  farm('obsidian', 'deertrack-heights', 'Ore deposits on the heights.', 'Depósitos nas alturas.'),
  farm('crimson', 'bolderoll-slope', 'Ore deposits on rocky slopes.', 'Depósitos nas encostas rochosas.'),
  farm('crimson', 'sludge-mound', 'Ore deposits around the mound.', 'Depósitos no monte.'),
  farm('cobalt', 'veilstone-cape', 'Ore deposits on the cape.', 'Depósitos no cabo.'),
  farm('cobalt', 'castaway-shore', 'Ore deposits along the shore.', 'Depósitos na costa.'),
  farm('cobalt', 'firespit-island', 'Ore deposits on Firespit Island.', 'Depósitos na Ilha Firespit.'),
  farm('coronet', 'ancient-quarry', 'Ore deposits in the quarry.', 'Depósitos na pedreira.'),
  farm('coronet', 'bolderoll-ravine', 'Ore deposits in the ravine.', 'Depósitos na ravina.'),
  farm('alabaster', 'bonechill-wastes', 'Ore deposits on icy wastes.', 'Depósitos nos ermos gelados.'),
  farm('alabaster', 'avalanche-slopes', 'Ore deposits on slopes.', 'Depósitos nas encostas.'),
  farm('jubilife', 'craftworks', 'Sold at the Craftworks.', 'Vendido na Oficina.'),
]

export const LA_MATERIALS: LaMaterial[] = [
  {
    id: 'apricorn',
    name: { en: 'Apricorn', pt: 'Bolota' },
    sprite: 'apricorn',
    farm: [
      farm('obsidian', 'aspiration-hill', 'Apricorn trees near Aspiration Hill.', 'Árvores de bolota perto da Colina da Aspiração.'),
      farm('obsidian', 'horseshoe-plains', 'Apricorn trees on the plains.', 'Árvores de bolota nas planícies.'),
      farm('obsidian', 'deertrack-path', 'Apricorn trees along the path.', 'Árvores de bolota na trilha.'),
      farm('obsidian', 'windswept-run', 'Apricorn trees on the run.', 'Árvores de bolota na corrida.'),
      farm('obsidian', 'floaro-gardens', 'Apricorn trees in the gardens.', 'Árvores de bolota nos jardins.'),
      farm('obsidian', 'nature-pantry', 'Apricorn trees near Nature’s Pantry.', 'Árvores de bolota na Despensa da Natureza.'),
      farm('obsidian', 'the-heartwood', 'Apricorn trees in the forest.', 'Árvores de bolota na floresta.'),
      farm('crimson', 'golden-lowlands', 'Apricorn trees in the lowlands.', 'Árvores de bolota nas terras baixas.'),
      farm('crimson', 'droning-meadow', 'Apricorn trees in the meadow.', 'Árvores de bolota no prado.'),
      farm('cobalt', 'ginkgo-landing', 'Apricorn trees near the landing.', 'Árvores de bolota no desembarque.'),
      farm('cobalt', 'aipom-hills', 'Apricorn trees on the hills.', 'Árvores de bolota nas colinas.'),
      farm('jubilife', 'craftworks', 'Sold at the Craftworks.', 'Vendido na Oficina.'),
    ],
  },
  {
    id: 'tumblestone',
    name: { en: 'Tumblestone', pt: 'Pedra Rolante' },
    sprite: 'tumblestone',
    farm: RED_ORE_FARMS,
  },
  {
    id: 'black-tumblestone',
    name: { en: 'Black Tumblestone', pt: 'Pedra Rolante Negra' },
    sprite: 'black-tumblestone',
    farm: BLACK_ORE_FARMS,
  },
  {
    id: 'sky-tumblestone',
    name: { en: 'Sky Tumblestone', pt: 'Pedra Rolante Celeste' },
    sprite: 'sky-tumblestone',
    farm: BLUE_ORE_FARMS,
  },
  {
    id: 'iron-chunk',
    name: { en: 'Iron Chunk', pt: 'Pedaço de Ferro' },
    sprite: 'iron-chunk',
    farm: IRON_CHUNK_FARMS,
  },
  {
    id: 'wood',
    name: { en: 'Wood', pt: 'Madeira' },
    sprite: 'wood',
    farm: [
      farm('obsidian', 'the-heartwood', 'Chop trees / forage logs.', 'Corte árvores / colete troncos.'),
      farm('obsidian', 'grueling-grove', 'Forest wood piles.', 'Pilhas de madeira na floresta.'),
      farm('obsidian', 'grandtree-arena', 'Wood near the Grandtree.', 'Madeira perto da Grande Árvore.'),
      farm('obsidian', 'nature-pantry', 'Wood piles near the pantry.', 'Pilhas de madeira na despensa.'),
      farm('crimson', 'gapejaw-bog', 'Wood near bog trees.', 'Madeira perto das árvores do brejo.'),
      farm('crimson', 'droning-meadow', 'Wood piles in the meadow.', 'Pilhas de madeira no prado.'),
      farm('coronet', 'wayward-wood', 'Chop trees in Wayward Wood.', 'Corte árvores no Bosque Desviado.'),
      farm('jubilife', 'craftworks', 'Sold at the Craftworks.', 'Vendido na Oficina.'),
    ],
  },
  {
    id: 'ball-of-mud',
    name: { en: 'Ball of Mud', pt: 'Bola de Lama' },
    sprite: 'ball-of-mud',
    farm: [
      farm('crimson', 'gapejaw-bog', 'Muddy ground in the bog.', 'Solo enlameado no brejo.'),
      farm('crimson', 'scarlet-bog', 'Mud piles.', 'Montes de lama.'),
    ],
  },
  {
    id: 'spoiled-apricot',
    name: { en: 'Spoiled Apricorn', pt: 'Bolota Estragada' },
    sprite: 'spoiled-apricot',
    farm: [
      farm('obsidian', 'windswept-run', 'Failed crafts / fallen apricorns.', 'Crafts falhos / bolotas caídas.'),
      farm('obsidian', 'aspiration-hill', 'Under apricorn trees.', 'Sob árvores de bolota.'),
    ],
  },
  {
    id: 'caster-fern',
    name: { en: 'Caster Fern', pt: 'Samambaia Caster' },
    sprite: 'caster-fern',
    farm: [
      farm('crimson', 'gapejaw-bog', 'Bog plants.', 'Plantas do pântano.'),
      farm('obsidian', 'the-heartwood', 'Forest undergrowth.', 'Sub-bosque.'),
    ],
  },
  {
    id: 'sootfoot-root',
    name: { en: 'Sootfoot Root', pt: 'Raiz Pé-de-Fuligem' },
    sprite: 'sootfoot-root',
    farm: [
      farm('cobalt', 'firespit-island', 'Volcanic soil.', 'Solo vulcânico.'),
      farm('cobalt', 'molten-arena', 'Ashy ground near lava.', 'Solo cinzento perto da lava.'),
    ],
  },
  {
    id: 'pop-pod',
    name: { en: 'Pop Pod', pt: 'Vagem Estoura' },
    sprite: 'pop-pod',
    farm: [
      farm('cobalt', 'bathers-lagoon', 'Coastal forage.', 'Coleta costeira.'),
      farm('cobalt', 'seagrass-haven', 'Tide pools.', 'Poças de maré.'),
    ],
  },
  {
    id: 'medicinal-leek',
    name: { en: 'Medicinal Leek', pt: 'Alho-poró Medicinal' },
    sprite: 'medicinal-leek',
    farm: [
      farm('obsidian', 'nature-pantry', 'Grass patches.', 'Touceiras de grama.'),
      farm('obsidian', 'horseshoe-plains', 'Open fields.', 'Campos abertos.'),
    ],
  },
  {
    id: 'vivichoke',
    name: { en: 'Vivichoke', pt: 'Vivichoke' },
    sprite: 'vivichoke',
    farm: [
      farm('crimson', 'golden-lowlands', 'Wetland forage.', 'Coleta em áreas úmidas.'),
      farm('crimson', 'cloudpool-ridge', 'Ridge plants.', 'Plantas do cume.'),
    ],
  },
  {
    id: 'bugwort',
    name: { en: 'Bugwort', pt: 'Erva-inseto' },
    sprite: 'bugwort',
    farm: [
      farm('obsidian', 'the-heartwood', 'Forest floor.', 'Solo da floresta.'),
      farm('obsidian', 'nature-pantry', 'Among herbs.', 'Entre ervas.'),
    ],
  },
  {
    id: 'pep-up-plant',
    name: { en: 'Pep-Up Plant', pt: 'Planta Pep-Up' },
    sprite: 'pep-up-plant',
    farm: [
      farm('obsidian', 'floaro-gardens', 'Garden forage.', 'Coleta nos jardins.'),
      farm('crimson', 'cottonsedge-prairie', 'Prairie herbs.', 'Ervas da pradaria.'),
    ],
  },
  {
    id: 'kings-leaf',
    name: { en: "King's Leaf", pt: 'Folha do Rei' },
    sprite: 'kings-leaf',
    farm: [
      farm('coronet', 'sacred-plaza', 'Rare highland plants.', 'Plantas raras das terras altas.'),
      farm('alabaster', 'hearts-crag', 'Cliffside herbs.', 'Ervas nos penhascos.'),
    ],
  },
  {
    id: 'swordcap',
    name: { en: 'Swordcap', pt: 'Cogumelo Espada' },
    sprite: 'swordcap',
    farm: [
      farm('obsidian', 'the-heartwood', 'Tree logs and shade.', 'Troncos e sombra.'),
      farm('coronet', 'wayward-wood', 'Forest mushrooms.', 'Cogumelos da floresta.'),
    ],
  },
  {
    id: 'iron-barktongue',
    name: { en: 'Iron Barktongue', pt: 'Língua-de-Casca de Ferro' },
    sprite: 'iron-barktongue',
    farm: [
      farm('coronet', 'wayward-wood', 'On tree trunks.', 'Em troncos de árvore.'),
      farm('obsidian', 'the-heartwood', 'Woody fungi.', 'Fungos lenhosos.'),
    ],
  },
  {
    id: 'direshroom',
    name: { en: 'Direshroom', pt: 'Direshroom' },
    sprite: 'direshroom',
    farm: [
      farm('coronet', 'primeval-grotto', 'Cave mushrooms.', 'Cogumelos de caverna.'),
      farm('alabaster', 'hibernal-cave', 'Cold cave floors.', 'Solo de cavernas frias.'),
    ],
  },
  {
    id: 'doppel-bonnets',
    name: { en: 'Doppel Bonnets', pt: 'Doppel Bonnets' },
    sprite: 'doppel-bonnets',
    farm: [
      farm('coronet', 'wayward-cave', 'Paired cave mushrooms.', 'Cogumelos em pares na caverna.'),
      farm('obsidian', 'oreburrow-tunnel', 'Tunnel fungi.', 'Fungos do túnel.'),
    ],
  },
  {
    id: 'springy-mushroom',
    name: { en: 'Springy Mushroom', pt: 'Cogumelo Elástico' },
    sprite: 'springy-mushroom',
    farm: [
      farm('obsidian', 'the-heartwood', 'Shaded forest floor.', 'Solo sombreado da floresta.'),
      farm('crimson', 'gapejaw-bog', 'Damp mushroom patches.', 'Touceiras úmidas de cogumelos.'),
    ],
  },
  {
    id: 'candy-truffle',
    name: { en: 'Candy Truffle', pt: 'Trufa Doce' },
    sprite: 'candy-truffle',
    farm: [
      farm('coronet', 'fabled-spring', 'Near springs and roots.', 'Perto de fontes e raízes.'),
      farm('obsidian', 'grueling-grove', 'Buried near trees.', 'Enterrada perto de árvores.'),
    ],
  },
  {
    id: 'dazzling-honey',
    name: { en: 'Dazzling Honey', pt: 'Mel Deslumbrante' },
    sprite: 'dazzling-honey',
    farm: [
      farm('obsidian', 'grandtree-arena', 'Combee trees / requests.', 'Árvores de Combee / pedidos.'),
      farm('obsidian', 'the-heartwood', 'Honey trees.', 'Árvores de mel.'),
    ],
  },
  {
    id: 'hearty-grains',
    name: { en: 'Hearty Grains', pt: 'Grãos Sustentosos' },
    sprite: 'hearty-grains',
    farm: [
      farm('obsidian', 'horseshoe-plains', 'Grain patches on plains.', 'Touceiras de grãos nas planícies.'),
      farm('jubilife', 'farm', 'Village farm plots.', 'Plantação da vila.'),
    ],
  },
  {
    id: 'plump-beans',
    name: { en: 'Plump Beans', pt: 'Feijões Cheios' },
    sprite: 'plump-beans',
    farm: [
      farm('crimson', 'golden-lowlands', 'Bean plants in lowlands.', 'Pé de feijão nas terras baixas.'),
      farm('jubilife', 'farm', 'Village farm plots.', 'Plantação da vila.'),
    ],
  },
  {
    id: 'crunchy-salt',
    name: { en: 'Crunchy Salt', pt: 'Sal Crocante' },
    sprite: 'crunchy-salt',
    farm: [
      farm('cobalt', 'sands-reach', 'Coastal salt deposits.', 'Depósitos de sal na costa.'),
      farm('alabaster', 'bonechill-wastes', 'Mineral crusts on snow.', 'Crosta mineral na neve.'),
    ],
  },
  {
    id: 'cake-lure-base',
    name: { en: 'Cake-Lure Base', pt: 'Base de Bolo Isca' },
    sprite: 'cake-lure-base',
    farm: [
      farm('jubilife', 'general-store', 'Buy from shops / craftworks stock.', 'Compre em lojas / estoque da oficina.'),
      farm('jubilife', 'craftworks', 'Sold near the crafting bench.', 'Vendido perto da bancada de craft.'),
    ],
  },
  {
    id: 'sand-radish',
    name: { en: 'Sand Radish', pt: 'Rabanete da Areia' },
    sprite: 'sand-radish',
    farm: [
      farm('obsidian', 'sandgem-flats', 'Sandy flats forage.', 'Coleta nas planícies arenosas.'),
      farm('cobalt', 'ginkgo-landing', 'Beach vegetation.', 'Vegetação da praia.'),
    ],
  },
  {
    id: 'oran-berry',
    name: { en: 'Oran Berry', pt: 'Berry Oran' },
    sprite: 'oran-berry',
    farm: [
      farm('obsidian', 'horseshoe-plains', 'Berry trees.', 'Árvores de berry.'),
      farm('obsidian', 'floaro-gardens', 'Berry trees in the gardens.', 'Árvores de berry nos jardins.'),
      farm('obsidian', 'nature-pantry', 'Berry trees near the pantry.', 'Árvores de berry na despensa.'),
      farm('crimson', 'golden-lowlands', 'Berry trees in the lowlands.', 'Árvores de berry nas terras baixas.'),
      farm('jubilife', 'farm', 'Grown on the village farm.', 'Cultivada na fazenda da vila.'),
    ],
  },
  {
    id: 'sitrus-berry',
    name: { en: 'Sitrus Berry', pt: 'Berry Sitrus' },
    sprite: 'sitrus-berry',
    farm: [
      farm('obsidian', 'floaro-gardens', 'Berry trees.', 'Árvores de berry.'),
      farm('crimson', 'droning-meadow', 'Meadow berry trees.', 'Árvores de berry no prado.'),
      farm('obsidian', 'horseshoe-plains', 'Berry trees on the plains.', 'Árvores de berry nas planícies.'),
      farm('jubilife', 'farm', 'Grown on the village farm.', 'Cultivada na fazenda da vila.'),
    ],
  },
  {
    id: 'cheri-berry',
    name: { en: 'Cheri Berry', pt: 'Berry Cheri' },
    sprite: 'cheri-berry',
    farm: [
      farm('obsidian', 'horseshoe-plains', 'Berry trees.', 'Árvores de berry.'),
      farm('obsidian', 'floaro-gardens', 'Berry trees in the gardens.', 'Árvores de berry nos jardins.'),
      farm('jubilife', 'farm', 'Grown on the village farm.', 'Cultivada na fazenda da vila.'),
    ],
  },
  {
    id: 'pecha-berry',
    name: { en: 'Pecha Berry', pt: 'Berry Pecha' },
    sprite: 'pecha-berry',
    farm: [
      farm('obsidian', 'nature-pantry', 'Berry trees.', 'Árvores de berry.'),
      farm('obsidian', 'horseshoe-plains', 'Berry trees on the plains.', 'Árvores de berry nas planícies.'),
      farm('jubilife', 'farm', 'Grown on the village farm.', 'Cultivada na fazenda da vila.'),
    ],
  },
  {
    id: 'rawst-berry',
    name: { en: 'Rawst Berry', pt: 'Berry Rawst' },
    sprite: 'rawst-berry',
    farm: [
      farm('obsidian', 'deertrack-path', 'Berry trees.', 'Árvores de berry.'),
      farm('obsidian', 'floaro-gardens', 'Berry trees in the gardens.', 'Árvores de berry nos jardins.'),
      farm('jubilife', 'farm', 'Grown on the village farm.', 'Cultivada na fazenda da vila.'),
    ],
  },
  {
    id: 'aspear-berry',
    name: { en: 'Aspear Berry', pt: 'Berry Aspear' },
    sprite: 'aspear-berry',
    farm: [
      farm('alabaster', 'whiteout-valley', 'Cold-climate berry trees.', 'Árvores de berry no frio.'),
      farm('alabaster', 'bonechill-wastes', 'Berry trees on icy wastes.', 'Árvores de berry nos ermos.'),
      farm('jubilife', 'farm', 'Grown on the village farm.', 'Cultivada na fazenda da vila.'),
    ],
  },
  {
    id: 'leppa-berry',
    name: { en: 'Leppa Berry', pt: 'Berry Leppa' },
    sprite: 'leppa-berry',
    farm: [
      farm('obsidian', 'floaro-gardens', 'Berry trees.', 'Árvores de berry.'),
      farm('obsidian', 'horseshoe-plains', 'Berry trees on the plains.', 'Árvores de berry nas planícies.'),
      farm('jubilife', 'farm', 'Grown on the village farm.', 'Cultivada na fazenda da vila.'),
    ],
  },
  {
    id: 'hopo-berry',
    name: { en: 'Hopo Berry', pt: 'Berry Hopo' },
    sprite: 'hopo-berry',
    farm: [
      farm('obsidian', 'horseshoe-plains', 'Hisui berry trees.', 'Árvores de berry de Hisui.'),
      farm('obsidian', 'floaro-gardens', 'Hisui berry trees in the gardens.', 'Árvores de berry nos jardins.'),
      farm('crimson', 'golden-lowlands', 'Hisui berry trees in the lowlands.', 'Árvores de berry nas terras baixas.'),
      farm('jubilife', 'farm', 'Village farm.', 'Fazenda da vila.'),
    ],
  },
  {
    id: 'razz-berry',
    name: { en: 'Razz Berry', pt: 'Berry Razz' },
    sprite: 'razz-berry',
    farm: [
      farm('obsidian', 'nature-pantry', 'Berry trees.', 'Árvores de berry.'),
      farm('obsidian', 'horseshoe-plains', 'Berry trees on the plains.', 'Árvores de berry nas planícies.'),
      farm('jubilife', 'farm', 'Grown on the village farm.', 'Cultivada na fazenda da vila.'),
    ],
  },
  {
    id: 'stardust',
    name: { en: 'Stardust', pt: 'Poeira Estelar' },
    sprite: 'stardust',
    farm: [
      farm('obsidian', 'ramanas-island', 'Sparkles / rare ore drops.', 'Brilhos / drops raros de minério.'),
      farm('obsidian', 'oreburrow-tunnel', 'Rare drop from ore deposits.', 'Drop raro de depósitos de minério.'),
      farm('crimson', 'bolderoll-slope', 'Rare drop from ore deposits.', 'Drop raro de depósitos de minério.'),
      farm('cobalt', 'veilstone-cape', 'Rare drop from ore deposits.', 'Drop raro de depósitos de minério.'),
      farm('coronet', 'celestica-ruins', 'Ruins sparkles and ore.', 'Brilhos e minério nas ruínas.'),
      farm('coronet', 'ancient-quarry', 'Rare drop from ore deposits.', 'Drop raro de depósitos de minério.'),
      farm('alabaster', 'bonechill-wastes', 'Rare drop from ore deposits.', 'Drop raro de depósitos de minério.'),
      farm('jubilife', 'craftworks', 'Sold at the Craftworks.', 'Vendido na Oficina.'),
    ],
  },
  {
    id: 'red-shard',
    name: { en: 'Red Shard', pt: 'Caco Vermelho' },
    sprite: 'red-shard',
    farm: [
      farm('cobalt', 'firespit-island', 'Mining / space-time distortions.', 'Mineração / distorções.'),
      farm('obsidian', 'oreburrow-tunnel', 'Rare ore / distortion loot.', 'Minério raro / loot de distorção.'),
      farm('crimson', 'bolderoll-slope', 'Rare ore / distortion loot.', 'Minério raro / loot de distorção.'),
      farm('coronet', 'ancient-quarry', 'Rare ore / distortion loot.', 'Minério raro / loot de distorção.'),
      farm('alabaster', 'bonechill-wastes', 'Rare ore / distortion loot.', 'Minério raro / loot de distorção.'),
    ],
  },
  {
    id: 'blue-shard',
    name: { en: 'Blue Shard', pt: 'Caco Azul' },
    sprite: 'blue-shard',
    farm: [
      farm('cobalt', 'tranquility-cove', 'Coastal mining sparkles.', 'Brilhos de mineração na costa.'),
      farm('cobalt', 'veilstone-cape', 'Ore / distortion loot.', 'Minério / loot de distorção.'),
      farm('obsidian', 'lake-verity', 'Sparkles near the lake.', 'Brilhos perto do lago.'),
      farm('coronet', 'fabled-spring', 'Sparkles near the spring.', 'Brilhos perto da fonte.'),
      farm('alabaster', 'lake-acuity', 'Sparkles near Lake Acuity.', 'Brilhos perto do Lago Acuity.'),
    ],
  },
  {
    id: 'green-shard',
    name: { en: 'Green Shard', pt: 'Caco Verde' },
    sprite: 'green-shard',
    farm: [
      farm('obsidian', 'the-heartwood', 'Forest mining sparkles.', 'Brilhos de mineração na floresta.'),
      farm('obsidian', 'moss-rock', 'Sparkles near Moss Rock.', 'Brilhos perto da Pedra Musgosa.'),
      farm('crimson', 'gapejaw-bog', 'Sparkles in the bog.', 'Brilhos no brejo.'),
      farm('coronet', 'wayward-wood', 'Forest sparkles.', 'Brilhos na floresta.'),
      farm('alabaster', 'hearts-crag', 'Sparkles on the crag.', 'Brilhos no penhasco.'),
    ],
  },
]

export const LA_CRAFTS: LaCraftRecipe[] = [
  // Balls
  {
    id: 'poke-ball',
    name: { en: 'Poké Ball', pt: 'Poké Ball' },
    resultSprite: 'poke-ball',
    category: 'ball',
    description: {
      en: 'A ball for catching wild Pokémon.',
      pt: 'Bola para capturar Pokémon selvagens.',
    },
    unlock: {
      en: 'Mission 2: The Galaxy Team’s Entry Trial',
      pt: 'Missão 2: O Teste de Entrada da Equipe Galáctica',
    },
    materials: [
      { materialId: 'apricorn', qty: 1 },
      { materialId: 'tumblestone', qty: 1 },
    ],
  },
  {
    id: 'great-ball',
    name: { en: 'Great Ball', pt: 'Great Ball' },
    resultSprite: 'great-ball',
    category: 'ball',
    description: {
      en: 'A ball with a better catch rate than a Poké Ball.',
      pt: 'Bola com taxa de captura melhor que a Poké Ball.',
    },
    unlock: { en: 'Third Star rank', pt: 'Ranque de 3 estrelas' },
    materials: [
      { materialId: 'apricorn', qty: 1 },
      { materialId: 'tumblestone', qty: 1 },
      { materialId: 'iron-chunk', qty: 1 },
    ],
  },
  {
    id: 'ultra-ball',
    name: { en: 'Ultra Ball', pt: 'Ultra Ball' },
    resultSprite: 'ultra-ball',
    category: 'ball',
    description: {
      en: 'An ultra-performance ball with a high catch rate.',
      pt: 'Bola de alto desempenho com alta taxa de captura.',
    },
    unlock: { en: 'Sixth Star rank', pt: 'Ranque de 6 estrelas' },
    materials: [
      { materialId: 'apricorn', qty: 1 },
      { materialId: 'tumblestone', qty: 2 },
      { materialId: 'iron-chunk', qty: 2 },
    ],
  },
  {
    id: 'feather-ball',
    name: { en: 'Feather Ball', pt: 'Feather Ball' },
    resultSprite: 'feather-ball',
    category: 'ball',
    description: {
      en: 'A light ball that can be thrown very far.',
      pt: 'Bola leve que pode ser lançada bem longe.',
    },
    unlock: { en: 'Second Star rank', pt: 'Ranque de 2 estrelas' },
    materials: [
      { materialId: 'apricorn', qty: 1 },
      { materialId: 'sky-tumblestone', qty: 1 },
    ],
  },
  {
    id: 'wing-ball',
    name: { en: 'Wing Ball', pt: 'Wing Ball' },
    resultSprite: 'wing-ball',
    category: 'ball',
    description: {
      en: 'A lighter ball with a better catch rate than a Feather Ball.',
      pt: 'Bola mais leve com melhor captura que a Feather Ball.',
    },
    unlock: { en: 'Fifth Star rank', pt: 'Ranque de 5 estrelas' },
    materials: [
      { materialId: 'apricorn', qty: 1 },
      { materialId: 'sky-tumblestone', qty: 1 },
      { materialId: 'iron-chunk', qty: 1 },
    ],
  },
  {
    id: 'jet-ball',
    name: { en: 'Jet Ball', pt: 'Jet Ball' },
    resultSprite: 'jet-ball',
    category: 'ball',
    description: {
      en: 'An extremely light ball that flies the farthest.',
      pt: 'Bola extremamente leve que voa mais longe.',
    },
    unlock: { en: 'Eighth Star rank', pt: 'Ranque de 8 estrelas' },
    materials: [
      { materialId: 'apricorn', qty: 1 },
      { materialId: 'sky-tumblestone', qty: 2 },
      { materialId: 'iron-chunk', qty: 2 },
    ],
  },
  {
    id: 'heavy-ball',
    name: { en: 'Heavy Ball', pt: 'Heavy Ball' },
    resultSprite: 'heavy-ball',
    category: 'ball',
    description: {
      en: 'A heavy ball that is hard to throw far but strong up close.',
      pt: 'Bola pesada, difícil de lançar longe, mas forte de perto.',
    },
    unlock: { en: 'First Star rank', pt: 'Ranque de 1 estrela' },
    materials: [
      { materialId: 'apricorn', qty: 1 },
      { materialId: 'black-tumblestone', qty: 1 },
    ],
  },
  {
    id: 'leaden-ball',
    name: { en: 'Leaden Ball', pt: 'Leaden Ball' },
    resultSprite: 'leaden-ball',
    category: 'ball',
    description: {
      en: 'A heavier ball with a better catch rate than a Heavy Ball.',
      pt: 'Bola mais pesada com melhor captura que a Heavy Ball.',
    },
    unlock: { en: 'Fourth Star rank', pt: 'Ranque de 4 estrelas' },
    materials: [
      { materialId: 'apricorn', qty: 1 },
      { materialId: 'black-tumblestone', qty: 1 },
      { materialId: 'iron-chunk', qty: 1 },
    ],
  },
  {
    id: 'gigaton-ball',
    name: { en: 'Gigaton Ball', pt: 'Gigaton Ball' },
    resultSprite: 'gigaton-ball',
    category: 'ball',
    description: {
      en: 'An extremely heavy ball with excellent catch power nearby.',
      pt: 'Bola extremamente pesada com ótimo poder de captura de perto.',
    },
    unlock: { en: 'Seventh Star rank', pt: 'Ranque de 7 estrelas' },
    materials: [
      { materialId: 'apricorn', qty: 1 },
      { materialId: 'black-tumblestone', qty: 2 },
      { materialId: 'iron-chunk', qty: 2 },
    ],
  },

  // Field / tools
  {
    id: 'pokeshi-doll',
    name: { en: 'Pokéshi Doll', pt: 'Boneco Pokéshi' },
    resultSprite: 'pokeshi-doll',
    category: 'tool',
    description: {
      en: 'A wooden doll that can distract wild Pokémon.',
      pt: 'Boneco de madeira que distrai Pokémon selvagens.',
    },
    unlock: {
      en: 'Request 17: Please! Make Me a Pokéshi Doll!',
      pt: 'Pedido 17: Por favor! Faça-me um Boneco Pokéshi!',
    },
    materials: [{ materialId: 'wood', qty: 3 }],
  },
  {
    id: 'smoke-bomb',
    name: { en: 'Smoke Bomb', pt: 'Bomba de Fumaça' },
    resultSprite: 'smoke-bomb',
    category: 'field',
    description: {
      en: 'Creates a smoke cloud so wild Pokémon are less likely to notice you.',
      pt: 'Cria uma nuvem de fumaça para Pokémon selvagens notarem menos você.',
    },
    unlock: {
      en: 'Mission 7: The Frenzy of the Lord of the Woods',
      pt: 'Missão 7: A Frenesi do Lorde da Floresta',
    },
    materials: [
      { materialId: 'caster-fern', qty: 1 },
      { materialId: 'sootfoot-root', qty: 1 },
    ],
  },
  {
    id: 'scatter-bang',
    name: { en: 'Scatter Bang', pt: 'Bang Espalha' },
    resultSprite: 'scatter-bang',
    category: 'field',
    description: {
      en: 'Makes a loud bang that scares off weaker wild Pokémon.',
      pt: 'Faz um estrondo que espanta Pokémon selvagens mais fracos.',
    },
    unlock: {
      en: "Mission 8: Arezu's Predicament",
      pt: 'Missão 8: O Aperto da Arezu',
    },
    materials: [
      { materialId: 'pop-pod', qty: 1 },
      { materialId: 'caster-fern', qty: 1 },
    ],
  },
  {
    id: 'sticky-glob',
    name: { en: 'Sticky Glob', pt: 'Globo Pegajoso' },
    resultSprite: 'sticky-glob',
    category: 'field',
    description: {
      en: 'A sticky ball that can stun a Pokémon and create an opening.',
      pt: 'Bola pegajosa que pode atordoar um Pokémon e abrir uma brecha.',
    },
    unlock: {
      en: 'Purchase from Jubilife Craftworks',
      pt: 'Compre na Oficina de Jubilo',
    },
    materials: [
      { materialId: 'spoiled-apricot', qty: 1 },
      { materialId: 'ball-of-mud', qty: 1 },
      { materialId: 'caster-fern', qty: 1 },
    ],
  },
  {
    id: 'stealth-spray',
    name: { en: 'Stealth Spray', pt: 'Spray Furtivo' },
    resultSprite: 'stealth-spray',
    category: 'field',
    description: {
      en: 'Muffles your footsteps so wild Pokémon notice you less for a while.',
      pt: 'Abafa seus passos para Pokémon selvagens notarem menos você por um tempo.',
    },
    unlock: {
      en: 'From Rei/Akari after Mission 7',
      pt: 'De Rei/Akari após a Missão 7',
    },
    materials: [
      { materialId: 'hopo-berry', qty: 1 },
      { materialId: 'bugwort', qty: 3 },
    ],
  },
  {
    id: 'star-piece',
    name: { en: 'Star Piece', pt: 'Pedra Estelar' },
    resultSprite: 'star-piece',
    category: 'valuable',
    description: {
      en: 'A lovely gem shard. High sell value.',
      pt: 'Um belo caco de gema. Alto valor de venda.',
    },
    unlock: {
      en: 'Purchase from Jubilife Craftworks',
      pt: 'Compre na Oficina de Jubilo',
    },
    materials: [
      { materialId: 'red-shard', qty: 3 },
      { materialId: 'blue-shard', qty: 3 },
      { materialId: 'green-shard', qty: 3 },
      { materialId: 'stardust', qty: 1 },
    ],
  },

  // Cakes / food
  {
    id: 'mushroom-cake',
    name: { en: 'Mushroom Cake', pt: 'Bolo de Cogumelo' },
    resultSprite: 'mushroom-cake',
    category: 'food',
    description: {
      en: 'A cake that attracts Bug- and Grass-type Pokémon.',
      pt: 'Bolo que atrai Pokémon dos tipos Inseto e Planta.',
    },
    unlock: {
      en: 'Request 6: Mushroom Cake Marketing',
      pt: 'Pedido 6: Marketing do Bolo de Cogumelo',
    },
    materials: [
      { materialId: 'springy-mushroom', qty: 1 },
      { materialId: 'cake-lure-base', qty: 1 },
    ],
  },
  {
    id: 'honey-cake',
    name: { en: 'Honey Cake', pt: 'Bolo de Mel' },
    resultSprite: 'honey-cake',
    category: 'food',
    description: {
      en: 'A cake that attracts many kinds of wild Pokémon.',
      pt: 'Bolo que atrai vários tipos de Pokémon selvagens.',
    },
    unlock: {
      en: 'Purchase from Jubilife Craftworks',
      pt: 'Compre na Oficina de Jubilo',
    },
    materials: [
      { materialId: 'dazzling-honey', qty: 1 },
      { materialId: 'cake-lure-base', qty: 1 },
    ],
  },
  {
    id: 'grain-cake',
    name: { en: 'Grain Cake', pt: 'Bolo de Grãos' },
    resultSprite: 'grain-cake',
    category: 'food',
    description: {
      en: 'A cake that strongly attracts bird and Flying-type Pokémon.',
      pt: 'Bolo que atrai fortemente aves e Pokémon Voador.',
    },
    unlock: {
      en: 'Purchase from Jubilife Craftworks',
      pt: 'Compre na Oficina de Jubilo',
    },
    materials: [
      { materialId: 'hearty-grains', qty: 1 },
      { materialId: 'cake-lure-base', qty: 1 },
    ],
  },
  {
    id: 'bean-cake',
    name: { en: 'Bean Cake', pt: 'Bolo de Feijão' },
    resultSprite: 'bean-cake',
    category: 'food',
    description: {
      en: 'A cake that attracts fish and Flying-type Pokémon.',
      pt: 'Bolo que atrai peixes e Pokémon Voador.',
    },
    unlock: {
      en: 'Purchase from Jubilife Craftworks',
      pt: 'Compre na Oficina de Jubilo',
    },
    materials: [
      { materialId: 'plump-beans', qty: 1 },
      { materialId: 'cake-lure-base', qty: 1 },
    ],
  },
  {
    id: 'salt-cake',
    name: { en: 'Salt Cake', pt: 'Bolo de Sal' },
    resultSprite: 'salt-cake',
    category: 'food',
    description: {
      en: 'A cake that attracts Rock- and Ground-type Pokémon.',
      pt: 'Bolo que atrai Pokémon dos tipos Pedra e Terrestre.',
    },
    unlock: {
      en: 'Purchase from Jubilife Craftworks',
      pt: 'Compre na Oficina de Jubilo',
    },
    materials: [
      { materialId: 'crunchy-salt', qty: 1 },
      { materialId: 'cake-lure-base', qty: 1 },
    ],
  },
  {
    id: 'old-gateau',
    name: { en: 'Old Gateau', pt: 'Old Gateau' },
    resultSprite: 'old-gateau',
    category: 'food',
    description: {
      en: 'A nostalgic cake that heals status conditions.',
      pt: 'Bolo nostálgico que cura condições de status.',
    },
    unlock: {
      en: 'Crimson Mirelands — Brava Arena (Taeko)',
      pt: 'Pântano Carmesim — Arena Brava (Taeko)',
    },
    materials: [
      { materialId: 'plump-beans', qty: 1 },
      { materialId: 'dazzling-honey', qty: 1 },
      { materialId: 'sootfoot-root', qty: 1 },
      { materialId: 'cake-lure-base', qty: 1 },
    ],
  },
  {
    id: 'jubilife-muffin',
    name: { en: 'Jubilife Muffin', pt: 'Muffin de Jubilo' },
    resultSprite: 'jubilife-muffin',
    category: 'food',
    description: {
      en: 'A hometown muffin that restores HP and soothes Pokémon.',
      pt: 'Muffin da terra natal que restaura HP e acalma Pokémon.',
    },
    unlock: {
      en: 'Request 48: The Taste of Home',
      pt: 'Pedido 48: O Sabor de Casa',
    },
    materials: [
      { materialId: 'hearty-grains', qty: 2 },
      { materialId: 'hopo-berry', qty: 2 },
      { materialId: 'razz-berry', qty: 1 },
      { materialId: 'cake-lure-base', qty: 1 },
    ],
  },
  {
    id: 'swap-snack',
    name: { en: 'Swap Snack', pt: 'Lanche de Troca' },
    resultSprite: 'swap-snack',
    category: 'food',
    description: {
      en: 'A snack that changes a Pokémon’s nature.',
      pt: 'Lanche que muda a natureza de um Pokémon.',
    },
    unlock: {
      en: 'Request 54: Serving Up Swap Snacks',
      pt: 'Pedido 54: Servindo Lanches de Troca',
    },
    materials: [
      { materialId: 'candy-truffle', qty: 1 },
      { materialId: 'sootfoot-root', qty: 1 },
      { materialId: 'springy-mushroom', qty: 1 },
      { materialId: 'hopo-berry', qty: 1 },
    ],
  },
  {
    id: 'choice-dumpling',
    name: { en: 'Choice Dumpling', pt: 'Bolinho da Escolha' },
    resultSprite: 'choice-dumpling',
    category: 'food',
    description: {
      en: 'Locks a Pokémon into one move but boosts its power.',
      pt: 'Trava o Pokémon em um golpe, mas aumenta o poder.',
    },
    unlock: {
      en: 'Coronet Highlands — near Clamberclaw Cliffs',
      pt: 'Cordilheira Coronet — perto dos Penhascos Garra',
    },
    materials: [
      { materialId: 'caster-fern', qty: 3 },
      { materialId: 'direshroom', qty: 1 },
      { materialId: 'swordcap', qty: 1 },
      { materialId: 'hearty-grains', qty: 2 },
    ],
  },
  {
    id: 'twice-spiced-radish',
    name: { en: 'Twice-Spiced Radish', pt: 'Rabanete Duplamente Temperado' },
    resultSprite: 'twice-spiced-radish',
    category: 'food',
    description: {
      en: 'A pickled radish that greatly raises effort levels.',
      pt: 'Rabanete em conserva que eleva muito os esforços.',
    },
    unlock: {
      en: 'Request 80: The Perfect Pickle Recipe',
      pt: 'Pedido 80: A Receita Perfeita de Conserva',
    },
    materials: [
      { materialId: 'sand-radish', qty: 2 },
      { materialId: 'crunchy-salt', qty: 2 },
      { materialId: 'plump-beans', qty: 2 },
      { materialId: 'kings-leaf', qty: 2 },
    ],
  },

  // Medicines
  {
    id: 'potion',
    name: { en: 'Potion', pt: 'Poção' },
    resultSprite: 'potion',
    category: 'medicine',
    description: {
      en: 'Restores a small amount of a Pokémon’s HP.',
      pt: 'Restaura uma pequena quantidade de HP de um Pokémon.',
    },
    unlock: {
      en: 'Mission 4: Getting to Work on Research Tasks',
      pt: 'Missão 4: Mãos à Obra nas Tarefas de Pesquisa',
    },
    materials: [
      { materialId: 'oran-berry', qty: 1 },
      { materialId: 'medicinal-leek', qty: 1 },
    ],
  },
  {
    id: 'super-potion',
    name: { en: 'Super Potion', pt: 'Super Poção' },
    resultSprite: 'super-potion',
    category: 'medicine',
    description: {
      en: 'Restores a moderate amount of a Pokémon’s HP.',
      pt: 'Restaura uma quantidade moderada de HP de um Pokémon.',
    },
    unlock: { en: 'Second Star rank', pt: 'Ranque de 2 estrelas' },
    materials: [
      { materialId: 'potion', qty: 1 },
      { materialId: 'pep-up-plant', qty: 1 },
    ],
  },
  {
    id: 'hyper-potion',
    name: { en: 'Hyper Potion', pt: 'Hiper Poção' },
    resultSprite: 'hyper-potion',
    category: 'medicine',
    description: {
      en: 'Restores a large amount of a Pokémon’s HP.',
      pt: 'Restaura uma grande quantidade de HP de um Pokémon.',
    },
    unlock: { en: 'Fourth Star rank', pt: 'Ranque de 4 estrelas' },
    materials: [
      { materialId: 'super-potion', qty: 1 },
      { materialId: 'vivichoke', qty: 1 },
    ],
  },
  {
    id: 'max-potion',
    name: { en: 'Max Potion', pt: 'Poção Máxima' },
    resultSprite: 'max-potion',
    category: 'medicine',
    description: {
      en: 'Fully restores a Pokémon’s HP.',
      pt: 'Restaura totalmente o HP de um Pokémon.',
    },
    unlock: { en: 'Sixth Star rank', pt: 'Ranque de 6 estrelas' },
    materials: [
      { materialId: 'sitrus-berry', qty: 1 },
      { materialId: 'kings-leaf', qty: 1 },
    ],
  },
  {
    id: 'full-restore',
    name: { en: 'Full Restore', pt: 'Restauração Total' },
    resultSprite: 'full-restore',
    category: 'medicine',
    description: {
      en: 'Fully restores HP and heals all status conditions.',
      pt: 'Restaura todo o HP e cura todas as condições de status.',
    },
    unlock: { en: 'Eighth Star rank', pt: 'Ranque de 8 estrelas' },
    materials: [
      { materialId: 'max-potion', qty: 1 },
      { materialId: 'full-heal', qty: 1 },
    ],
  },
  {
    id: 'remedy',
    name: { en: 'Remedy', pt: 'Remédio' },
    resultSprite: 'remedy',
    category: 'medicine',
    description: {
      en: 'Restores HP, but the bitter taste lowers friendship a little.',
      pt: 'Restaura HP, mas o gosto amargo reduz um pouco a amizade.',
    },
    unlock: {
      en: 'Purchase from Jubilife Craftworks',
      pt: 'Compre na Oficina de Jubilo',
    },
    materials: [{ materialId: 'bugwort', qty: 2 }],
  },
  {
    id: 'fine-remedy',
    name: { en: 'Fine Remedy', pt: 'Bom Remédio' },
    resultSprite: 'fine-remedy',
    category: 'medicine',
    description: {
      en: 'Restores more HP than a Remedy, with the same bitter drawback.',
      pt: 'Restaura mais HP que o Remédio, com o mesmo gosto amargo.',
    },
    unlock: {
      en: 'Purchase from Jubilife Craftworks',
      pt: 'Compre na Oficina de Jubilo',
    },
    materials: [
      { materialId: 'remedy', qty: 1 },
      { materialId: 'pep-up-plant', qty: 1 },
    ],
  },
  {
    id: 'superb-remedy',
    name: { en: 'Superb Remedy', pt: 'Ótimo Remédio' },
    resultSprite: 'superb-remedy',
    category: 'medicine',
    description: {
      en: 'Restores a great deal of HP, but tastes bitterly herbal.',
      pt: 'Restaura muito HP, mas tem gosto amargo de erva.',
    },
    unlock: {
      en: 'Purchase from Jubilife Craftworks',
      pt: 'Compre na Oficina de Jubilo',
    },
    materials: [
      { materialId: 'fine-remedy', qty: 1 },
      { materialId: 'vivichoke', qty: 1 },
    ],
  },
  {
    id: 'full-heal',
    name: { en: 'Full Heal', pt: 'Cura Total' },
    resultSprite: 'full-heal',
    category: 'medicine',
    description: {
      en: 'Heals all status conditions.',
      pt: 'Cura todas as condições de status.',
    },
    unlock: {
      en: 'Purchase from Jubilife Craftworks',
      pt: 'Compre na Oficina de Jubilo',
    },
    materials: [
      { materialId: 'cheri-berry', qty: 1 },
      { materialId: 'pecha-berry', qty: 1 },
      { materialId: 'rawst-berry', qty: 1 },
      { materialId: 'aspear-berry', qty: 1 },
    ],
  },
  {
    id: 'revive',
    name: { en: 'Revive', pt: 'Revive' },
    resultSprite: 'revive',
    category: 'medicine',
    description: {
      en: 'Revives a fainted Pokémon with half HP.',
      pt: 'Revive um Pokémon desmaiado com metade do HP.',
    },
    unlock: { en: 'First Star rank', pt: 'Ranque de 1 estrela' },
    materials: [
      { materialId: 'vivichoke', qty: 1 },
      { materialId: 'medicinal-leek', qty: 2 },
    ],
  },
  {
    id: 'max-revive',
    name: { en: 'Max Revive', pt: 'Revive Máximo' },
    resultSprite: 'max-revive',
    category: 'medicine',
    description: {
      en: 'Revives a fainted Pokémon with full HP.',
      pt: 'Revive um Pokémon desmaiado com HP cheio.',
    },
    unlock: {
      en: 'Purchase from Jubilife Craftworks',
      pt: 'Compre na Oficina de Jubilo',
    },
    materials: [
      { materialId: 'revive', qty: 1 },
      { materialId: 'kings-leaf', qty: 2 },
    ],
  },
  {
    id: 'max-ether',
    name: { en: 'Max Ether', pt: 'Éter Máximo' },
    resultSprite: 'max-ether',
    category: 'medicine',
    description: {
      en: 'Fully restores PP for a single move.',
      pt: 'Restaura totalmente o PP de um único golpe.',
    },
    unlock: {
      en: 'Purchase from Jubilife Craftworks',
      pt: 'Compre na Oficina de Jubilo',
    },
    materials: [
      { materialId: 'leppa-berry', qty: 1 },
      { materialId: 'pep-up-plant', qty: 2 },
    ],
  },
  {
    id: 'max-elixir',
    name: { en: 'Max Elixir', pt: 'Elixir Máximo' },
    resultSprite: 'max-elixir',
    category: 'medicine',
    description: {
      en: 'Fully restores PP for all of a Pokémon’s moves.',
      pt: 'Restaura totalmente o PP de todos os golpes de um Pokémon.',
    },
    unlock: {
      en: 'Purchase from Jubilife Craftworks',
      pt: 'Compre na Oficina de Jubilo',
    },
    materials: [
      { materialId: 'max-ether', qty: 1 },
      { materialId: 'pep-up-plant', qty: 2 },
    ],
  },

  // Battle
  {
    id: 'aux-power',
    name: { en: 'Aux Power', pt: 'Aux Power' },
    resultSprite: 'aux-power',
    category: 'battle',
    description: {
      en: 'Raises offensive stats in battle.',
      pt: 'Aumenta atributos ofensivos em batalha.',
    },
    unlock: {
      en: 'Purchase from Jubilife Craftworks',
      pt: 'Compre na Oficina de Jubilo',
    },
    materials: [
      { materialId: 'swordcap', qty: 2 },
      { materialId: 'pep-up-plant', qty: 1 },
    ],
  },
  {
    id: 'aux-guard',
    name: { en: 'Aux Guard', pt: 'Aux Guard' },
    resultSprite: 'aux-guard',
    category: 'battle',
    description: {
      en: 'Raises defensive stats in battle.',
      pt: 'Aumenta atributos defensivos em batalha.',
    },
    unlock: {
      en: 'Purchase from Jubilife Craftworks',
      pt: 'Compre na Oficina de Jubilo',
    },
    materials: [
      { materialId: 'iron-barktongue', qty: 2 },
      { materialId: 'pep-up-plant', qty: 1 },
    ],
  },
  {
    id: 'dire-hit',
    name: { en: 'Dire Hit', pt: 'Dire Hit' },
    resultSprite: 'dire-hit',
    category: 'battle',
    description: {
      en: 'Raises critical-hit ratio in battle.',
      pt: 'Aumenta a chance de golpe crítico em batalha.',
    },
    unlock: {
      en: 'Purchase from Jubilife Craftworks',
      pt: 'Compre na Oficina de Jubilo',
    },
    materials: [
      { materialId: 'direshroom', qty: 2 },
      { materialId: 'candy-truffle', qty: 1 },
    ],
  },
  {
    id: 'aux-evasion',
    name: { en: 'Aux Evasion', pt: 'Aux Evasion' },
    resultSprite: 'aux-evasion',
    category: 'battle',
    description: {
      en: 'Raises evasiveness in battle.',
      pt: 'Aumenta a evasão em batalha.',
    },
    unlock: {
      en: 'Purchase from Jubilife Craftworks',
      pt: 'Compre na Oficina de Jubilo',
    },
    materials: [
      { materialId: 'doppel-bonnets', qty: 2 },
      { materialId: 'candy-truffle', qty: 1 },
    ],
  },
  {
    id: 'aux-powerguard',
    name: { en: 'Aux Powerguard', pt: 'Aux Powerguard' },
    resultSprite: 'aux-powerguard',
    category: 'battle',
    description: {
      en: 'Raises both offensive and defensive stats in battle.',
      pt: 'Aumenta atributos ofensivos e defensivos em batalha.',
    },
    unlock: {
      en: 'Purchase from Jubilife Craftworks',
      pt: 'Compre na Oficina de Jubilo',
    },
    materials: [
      { materialId: 'aux-power', qty: 1 },
      { materialId: 'aux-guard', qty: 1 },
      { materialId: 'kings-leaf', qty: 1 },
    ],
  },
]

/** Items tab browses the craftable products. */
export const LA_ITEMS: LaCraftItem[] = LA_CRAFTS

export const LA_CRAFT_CATEGORY_KEYS: Record<
  LaCraftCategory,
  'laCraftsCatBall' | 'laCraftsCatMedicine' | 'laCraftsCatBattle' | 'laCraftsCatField' | 'laCraftsCatFood' | 'laCraftsCatValuable' | 'laCraftsCatTool'
> = {
  ball: 'laCraftsCatBall',
  medicine: 'laCraftsCatMedicine',
  battle: 'laCraftsCatBattle',
  field: 'laCraftsCatField',
  food: 'laCraftsCatFood',
  valuable: 'laCraftsCatValuable',
  tool: 'laCraftsCatTool',
}

export function laMaterialById(id: string) {
  return LA_MATERIALS.find((m) => m.id === id)
}

export function laMaterialGroup(id: string): LaMaterialGroup {
  if (
    id === 'tumblestone' ||
    id === 'black-tumblestone' ||
    id === 'sky-tumblestone' ||
    id === 'iron-chunk' ||
    id === 'stardust' ||
    id.endsWith('-shard')
  ) {
    return 'ore'
  }
  if (id.endsWith('-berry')) return 'berry'
  if (
    id === 'hearty-grains' ||
    id === 'plump-beans' ||
    id === 'crunchy-salt' ||
    id === 'cake-lure-base' ||
    id === 'dazzling-honey' ||
    id === 'candy-truffle'
  ) {
    return 'food'
  }
  if (
    id === 'apricorn' ||
    id === 'spoiled-apricot' ||
    id === 'wood' ||
    id === 'ball-of-mud' ||
    id === 'caster-fern' ||
    id === 'sootfoot-root' ||
    id === 'pop-pod' ||
    id === 'medicinal-leek' ||
    id === 'vivichoke' ||
    id === 'bugwort' ||
    id === 'pep-up-plant' ||
    id === 'kings-leaf' ||
    id === 'swordcap' ||
    id === 'iron-barktongue' ||
    id === 'direshroom' ||
    id === 'doppel-bonnets' ||
    id === 'springy-mushroom' ||
    id === 'sand-radish'
  ) {
    return 'plant'
  }
  return 'misc'
}

export const LA_MATERIAL_GROUP_KEYS: Record<
  LaMaterialGroup,
  | 'laCraftsMatOre'
  | 'laCraftsMatPlant'
  | 'laCraftsMatBerry'
  | 'laCraftsMatFood'
  | 'laCraftsMatMisc'
> = {
  ore: 'laCraftsMatOre',
  plant: 'laCraftsMatPlant',
  berry: 'laCraftsMatBerry',
  food: 'laCraftsMatFood',
  misc: 'laCraftsMatMisc',
}

export function laCraftById(id: string) {
  return LA_CRAFTS.find((c) => c.id === id)
}

/** Resolve a recipe ingredient (raw material or crafted item). */
export function laCraftIngredientById(id: string) {
  const material = laMaterialById(id)
  if (material) {
    return {
      id: material.id,
      name: material.name,
      sprite: material.sprite,
      farm: material.farm,
      kind: 'material' as const,
    }
  }
  const craft = laCraftById(id)
  if (craft) {
    return {
      id: craft.id,
      name: craft.name,
      sprite: craft.resultSprite,
      farm: [] as LaMaterial['farm'],
      kind: 'item' as const,
    }
  }
  return null
}
