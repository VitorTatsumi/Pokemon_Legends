import type { Localized } from './markets'

export type MableReward = {
  level: number
  item: Localized
  /** Optional quantity (default 1) */
  qty?: number
  /** Item sprite slug for LZA item icons when available */
  sprite?: string
}

export type MableTaskStage = {
  stage: number
  /** Target count / requirement for this stage */
  target: number
  points?: number
}

export type MableTask = {
  id: string
  name: Localized
  description: Localized
  category: 'pokedex' | 'type' | 'zone' | 'evolve' | 'battle' | 'explore' | 'other'
  stages: MableTaskStage[]
}

const typeCatchStages = (targets: number[]): MableTaskStage[] =>
  targets.map((target, i) => ({ stage: i + 1, target }))

const TYPE_CATCH_TARGETS = [3, 8, 15, 25, 50]

const TYPE_TASKS: { id: string; typeEn: string; typePt: string }[] = [
  { id: 'catch-normal', typeEn: 'Normal', typePt: 'Normal' },
  { id: 'catch-fire', typeEn: 'Fire', typePt: 'Fogo' },
  { id: 'catch-water', typeEn: 'Water', typePt: 'Água' },
  { id: 'catch-electric', typeEn: 'Electric', typePt: 'Elétrico' },
  { id: 'catch-grass', typeEn: 'Grass', typePt: 'Planta' },
  { id: 'catch-ice', typeEn: 'Ice', typePt: 'Gelo' },
  { id: 'catch-fighting', typeEn: 'Fighting', typePt: 'Lutador' },
  { id: 'catch-poison', typeEn: 'Poison', typePt: 'Veneno' },
  { id: 'catch-ground', typeEn: 'Ground', typePt: 'Terra' },
  { id: 'catch-flying', typeEn: 'Flying', typePt: 'Voador' },
  { id: 'catch-psychic', typeEn: 'Psychic', typePt: 'Psíquico' },
  { id: 'catch-bug', typeEn: 'Bug', typePt: 'Inseto' },
  { id: 'catch-rock', typeEn: 'Rock', typePt: 'Pedra' },
  { id: 'catch-ghost', typeEn: 'Ghost', typePt: 'Fantasma' },
  { id: 'catch-dragon', typeEn: 'Dragon', typePt: 'Dragão' },
  { id: 'catch-dark', typeEn: 'Dark', typePt: 'Sombrio' },
  { id: 'catch-steel', typeEn: 'Steel', typePt: 'Aço' },
  { id: 'catch-fairy', typeEn: 'Fairy', typePt: 'Fada' },
]

/** Research level rewards (levels 2–50). */
export const MABLE_REWARDS: MableReward[] = [
  { level: 2, item: { en: 'TM004 Rock Smash', pt: 'MT004 Rock Smash' }, sprite: 'tm004' },
  { level: 3, item: { en: 'TM046 Mud Shot', pt: 'MT046 Mud Shot' }, sprite: 'tm046' },
  { level: 4, item: { en: 'TM017 Protect', pt: 'MT017 Protect' }, sprite: 'tm017' },
  { level: 5, item: { en: 'TM021 Thunder Fang', pt: 'MT021 Thunder Fang' }, sprite: 'tm021' },
  { level: 6, item: { en: 'TM014 Fire Fang', pt: 'MT014 Fire Fang' }, sprite: 'tm014' },
  { level: 7, item: { en: 'TM015 Ice Fang', pt: 'MT015 Ice Fang' }, sprite: 'tm015' },
  { level: 8, item: { en: 'TM070 Whirlpool', pt: 'MT070 Whirlpool' }, sprite: 'tm070' },
  { level: 9, item: { en: 'TM061 Shadow Claw', pt: 'MT061 Shadow Claw' }, sprite: 'tm061' },
  { level: 10, item: { en: 'Exp. Candy S', pt: 'Doce Exp. S' }, qty: 10, sprite: 'rare-candy' },
  { level: 11, item: { en: 'TM016 Light Screen', pt: 'MT016 Light Screen' }, sprite: 'tm016' },
  { level: 12, item: { en: 'TM042 Giga Drain', pt: 'MT042 Giga Drain' }, sprite: 'tm042' },
  { level: 13, item: { en: 'TM024 Ice Punch', pt: 'MT024 Ice Punch' }, sprite: 'tm024' },
  { level: 14, item: { en: 'TM003 Psyshock', pt: 'MT003 Psyshock' }, sprite: 'tm003' },
  { level: 15, item: { en: 'TM023 Thunder Punch', pt: 'MT023 Thunder Punch' }, sprite: 'tm023' },
  { level: 16, item: { en: 'TM032 Double Team', pt: 'MT032 Double Team' }, sprite: 'tm032' },
  { level: 17, item: { en: 'TM029 Fire Punch', pt: 'MT029 Fire Punch' }, sprite: 'tm029' },
  { level: 18, item: { en: 'TM078 Bulldoze', pt: 'MT078 Bulldoze' }, sprite: 'tm078' },
  { level: 19, item: { en: 'TM082 U-turn', pt: 'MT082 U-turn' }, sprite: 'tm082' },
  { level: 20, item: { en: 'TM059 Zen Headbutt', pt: 'MT059 Zen Headbutt' }, sprite: 'tm059' },
  { level: 21, item: { en: 'TM030 Swords Dance', pt: 'MT030 Swords Dance' }, sprite: 'tm030' },
  { level: 22, item: { en: 'TM084 Flash Cannon', pt: 'MT084 Flash Cannon' }, sprite: 'tm084' },
  { level: 23, item: { en: 'TM012 Rock Slide', pt: 'MT012 Rock Slide' }, sprite: 'tm012' },
  { level: 24, item: { en: 'TM067 Thunderbolt', pt: 'MT067 Thunderbolt' }, sprite: 'tm067' },
  { level: 25, item: { en: 'Exp. Candy M', pt: 'Doce Exp. M' }, qty: 10, sprite: 'rare-candy' },
  { level: 26, item: { en: 'TM006 Calm Mind', pt: 'MT006 Calm Mind' }, sprite: 'tm006' },
  { level: 27, item: { en: 'TM077 Poison Jab', pt: 'MT077 Poison Jab' }, sprite: 'tm077' },
  { level: 28, item: { en: 'TM068 Heat Wave', pt: 'MT068 Heat Wave' }, sprite: 'tm068' },
  { level: 29, item: { en: 'TM073 Surf', pt: 'MT073 Surf' }, sprite: 'tm073' },
  { level: 30, item: { en: 'TM087 Iron Tail', pt: 'MT087 Iron Tail' }, sprite: 'tm087' },
  { level: 31, item: { en: 'TM097 Heal Block', pt: 'MT097 Heal Block' }, sprite: 'tm097' },
  { level: 32, item: { en: 'TM053 Sludge Bomb', pt: 'MT053 Sludge Bomb' }, sprite: 'tm053' },
  { level: 33, item: { en: 'TM106 Thunder', pt: 'MT106 Thunder' }, sprite: 'tm106' },
  { level: 34, item: { en: 'TM069 Earthquake', pt: 'MT069 Earthquake' }, sprite: 'tm069' },
  { level: 35, item: { en: 'TM055 Giga Impact', pt: 'MT055 Giga Impact' }, sprite: 'tm055' },
  { level: 36, item: { en: 'Bottle Cap', pt: 'Tampa de Garrafa' }, qty: 10, sprite: 'bottle-cap' },
  { level: 37, item: { en: 'TM107 Close Combat', pt: 'MT107 Close Combat' }, sprite: 'tm107' },
  { level: 38, item: { en: 'TM083 Nasty Plot', pt: 'MT083 Nasty Plot' }, sprite: 'tm083' },
  { level: 39, item: { en: 'TM064 Solar Beam', pt: 'MT064 Solar Beam' }, sprite: 'tm064' },
  { level: 40, item: { en: 'TM096 Hydro Pump', pt: 'MT096 Hydro Pump' }, sprite: 'tm096' },
  { level: 41, item: { en: 'TM038 Fire Blast', pt: 'MT038 Fire Blast' }, sprite: 'tm038' },
  { level: 42, item: { en: 'TM105 Blizzard', pt: 'MT105 Blizzard' }, sprite: 'tm105' },
  { level: 43, item: { en: 'Exp. Candy L', pt: 'Doce Exp. L' }, qty: 10, sprite: 'rare-candy' },
  { level: 44, item: { en: 'TM102 Focus Blast', pt: 'MT102 Focus Blast' }, sprite: 'tm102' },
  { level: 45, item: { en: 'TM050 Overheat', pt: 'MT050 Overheat' }, sprite: 'tm050' },
  { level: 46, item: { en: 'TM093 Outrage', pt: 'MT093 Outrage' }, sprite: 'tm093' },
  { level: 47, item: { en: 'Exp. Candy XL', pt: 'Doce Exp. XL' }, qty: 10, sprite: 'rare-candy' },
  { level: 48, item: { en: 'Gold Bottle Cap', pt: 'Tampa de Garrafa Dourada' }, qty: 3, sprite: 'gold-bottle-cap' },
  { level: 49, item: { en: 'Master Ball', pt: 'Master Ball' }, sprite: 'master-ball' },
  { level: 50, item: { en: 'Shiny Charm', pt: 'Amuleto Brilhante' }, sprite: 'shiny-charm' },
]

const pokedexStages: MableTaskStage[] = Array.from({ length: 48 }, (_, i) => ({
  stage: i + 1,
  target: (i + 1) * 5,
}))

const megaDexStages: MableTaskStage[] = Array.from({ length: 13 }, (_, i) => ({
  stage: i + 1,
  target: (i + 1) * 5,
}))

const evolveStages: MableTaskStage[] = [3, 6, 10, 15, 20, 25, 30, 35, 40, 45].map(
  (target, i) => ({ stage: i + 1, target }),
)

const battleStages: MableTaskStage[] = [
  5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100, 500, 1000,
].map((target, i) => ({ stage: i + 1, target }))

const crystalStages: MableTaskStage[] = [
  20, 50, 100, 150, 200, 250, 300, 350, 500, 1000,
].map((target, i) => ({ stage: i + 1, target }))

/** All Mable research request categories and stage targets. */
export const MABLE_TASKS: MableTask[] = [
  {
    id: 'fill-pokedex',
    name: { en: 'Filling Your Pokédex', pt: 'Preenchendo a Pokédex' },
    description: {
      en: 'Register various Pokémon in your Pokédex. Catch them, evolve them — however you do it is all the same.',
      pt: 'Registre vários Pokémon na Pokédex. Capture, evolua — o método não importa.',
    },
    category: 'pokedex',
    stages: pokedexStages,
  },
  {
    id: 'fill-mega-dex',
    name: {
      en: 'Filling Your Mega Evolution Pokédex',
      pt: 'Preenchendo a Pokédex de Mega Evolução',
    },
    description: {
      en: 'Obtain Mega Stones and register Mega Evolutions in your Mega Evolution Pokédex.',
      pt: 'Obtenha Mega Pedras e registre Mega Evoluções na Pokédex de Mega Evolução.',
    },
    category: 'pokedex',
    stages: megaDexStages,
  },
  ...TYPE_TASKS.map(
    (t): MableTask => ({
      id: t.id,
      name: {
        en: `Catching ${t.typeEn} Types`,
        pt: `Capturando tipos ${t.typePt}`,
      },
      description: {
        en: `Catch wild ${t.typeEn}-type Pokémon. Pokémon you receive from other people don’t count.`,
        pt: `Capture Pokémon selvagens do tipo ${t.typePt}. Pokémon recebidos de outras pessoas não contam.`,
      },
      category: 'type',
      stages: typeCatchStages(TYPE_CATCH_TARGETS),
    }),
  ),
  ...Array.from({ length: 20 }, (_, i): MableTask => {
    const n = i + 1
    return {
      id: `survey-zone-${n}`,
      name: {
        en: `Surveying Wild Zone ${n}`,
        pt: `Pesquisando Zona Selvagem ${n}`,
      },
      description: {
        en: `Register all Pokémon that can be found living in Wild Zone ${n} to your Pokédex.`,
        pt: `Registre na Pokédex todos os Pokémon que vivem na Zona Selvagem ${n}.`,
      },
      category: 'zone',
      stages: [{ stage: 1, target: 1 }],
    }
  }),
  {
    id: 'evolving',
    name: { en: 'Evolving Pokémon', pt: 'Evoluindo Pokémon' },
    description: {
      en: 'Trigger Pokémon Evolution. Any species or method will do.',
      pt: 'Faça Pokémon evoluírem. Qualquer espécie ou método vale.',
    },
    category: 'evolve',
    stages: evolveStages,
  },
  {
    id: 'evolve-items',
    name: { en: 'Evolving with Items', pt: 'Evoluindo com itens' },
    description: {
      en: 'Use Evolution stones or other items to trigger Pokémon Evolution.',
      pt: 'Use pedras de evolução ou outros itens para evoluir Pokémon.',
    },
    category: 'evolve',
    stages: [
      { stage: 1, target: 1 },
      { stage: 2, target: 5 },
      { stage: 3, target: 10 },
    ],
  },
  {
    id: 'evolve-trade',
    name: { en: 'Evolving via Link Trade', pt: 'Evoluindo via troca' },
    description: {
      en: 'Trigger Evolution via Link Trade. It only counts if you’re the one who receives the Pokémon that evolves after the trade.',
      pt: 'Evolua via troca Link. Só conta se você for quem recebe o Pokémon que evolui após a troca.',
    },
    category: 'evolve',
    stages: [
      { stage: 1, target: 1 },
      { stage: 2, target: 3 },
      { stage: 3, target: 5 },
    ],
  },
  {
    id: 'restore-fossils',
    name: { en: 'Restoring Fossils', pt: 'Restaurando fósseis' },
    description: {
      en: 'Restore Pokémon from Fossils or Amber. Any species will do.',
      pt: 'Restaure Pokémon a partir de fósseis ou âmbar.',
    },
    category: 'other',
    stages: [{ stage: 1, target: 1 }],
  },
  {
    id: 'cafes',
    name: { en: 'Relaxing at Cafés', pt: 'Relaxando em cafés' },
    description: {
      en: 'Relax and enjoy spending time in a café with your Pokémon. Any café will do.',
      pt: 'Relaxe em um café com seu Pokémon. Qualquer café serve.',
    },
    category: 'explore',
    stages: [{ stage: 1, target: 1 }],
  },
  {
    id: 'benches',
    name: { en: 'Chilling on Benches', pt: 'Descansando em bancos' },
    description: {
      en: 'Sit and relax on a bench with your Pokémon. You can choose any bench you like.',
      pt: 'Sente-se em um banco com seu Pokémon. Qualquer banco serve.',
    },
    category: 'explore',
    stages: [{ stage: 1, target: 1 }],
  },
  {
    id: 'battles',
    name: { en: 'Winning Pokémon Battles', pt: 'Vencendo batalhas' },
    description: {
      en: 'Claim victory in Pokémon battles against other Trainers. You can use whichever battle regulations you like.',
      pt: 'Vença batalhas contra outros Treinadores. Qualquer regulamento de batalha vale.',
    },
    category: 'battle',
    stages: battleStages,
  },
  {
    id: 'mega-crystals',
    name: { en: 'Smashing Mega Crystals', pt: 'Destruindo Mega Cristais' },
    description: {
      en: 'Have your Pokémon use their moves to smash Mega Crystals.',
      pt: 'Faça seus Pokémon usarem golpes para destruir Mega Cristais.',
    },
    category: 'battle',
    stages: crystalStages,
  },
  {
    id: 'anomalous-alphas',
    name: {
      en: 'Investigating Anomalous Alphas',
      pt: 'Investigando Alfas anômalos',
    },
    description: {
      en: 'Defeat (or catch) the anomalous alpha Pokémon that appear in Wild Zones 3, 5, and 9.',
      pt: 'Derrote (ou capture) os Alfas anômalos das Zonas Selvagens 3, 5 e 9.',
    },
    category: 'other',
    stages: [{ stage: 1, target: 1 }],
  },
]

export const MABLE_TASK_CATEGORY_KEYS: Record<MableTask['category'], string> = {
  pokedex: 'mableCatPokedex',
  type: 'mableCatType',
  zone: 'mableCatZone',
  evolve: 'mableCatEvolve',
  battle: 'mableCatBattle',
  explore: 'mableCatExplore',
  other: 'mableCatOther',
}

export function formatMableRewardLabel(reward: MableReward, locale: 'pt' | 'en') {
  const name = reward.item[locale]
  return reward.qty && reward.qty > 1 ? `${name} ×${reward.qty}` : name
}
