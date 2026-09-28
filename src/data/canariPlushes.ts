export type Localized = { en: string; pt: string }

export type CanariPlushLevel = {
  level: 1 | 2 | 3
  /** Colorful Screws required for this upgrade step */
  screwCost: number
  effect: Localized
}

export type CanariPlush = {
  id: string
  name: Localized
  /** Short summary of the plush passive */
  summary: Localized
  /** PokeAPI / Serebii ZA sprite slug used by lzaItemSpriteCandidates */
  sprite: string
  levels: CanariPlushLevel[]
}

/** Cost to buy Lv1 + upgrade to Lv2 + upgrade to Lv3 for one plush. */
export const CANARI_LEVEL_COSTS = [3, 5, 8] as const

/** Screws to buy + fully upgrade all five plushes (5 × (3+5+8)). */
export const CANARI_FULL_UPGRADE_SCREWS = 80

/** Approx. leftover screws turned in for the Giant Canari Plush (100 − 80). */
export const CANARI_GIANT_PLUSH_REMAINING = 20

export const CANARI_PLUSHES: CanariPlush[] = [
  {
    id: 'red',
    name: { en: 'Red Canari Plush', pt: 'Pelúcia Canari Vermelha' },
    summary: {
      en: 'Increases Exp. Points your Pokémon receive.',
      pt: 'Aumenta os Pontos de Exp. que seus Pokémon recebem.',
    },
    sprite: 'red-canari-plush',
    levels: [
      {
        level: 1,
        screwCost: 3,
        effect: { en: '+5% Experience', pt: '+5% de Experiência' },
      },
      {
        level: 2,
        screwCost: 5,
        effect: { en: '+10% Experience', pt: '+10% de Experiência' },
      },
      {
        level: 3,
        screwCost: 8,
        effect: { en: '+15% Experience', pt: '+15% de Experiência' },
      },
    ],
  },
  {
    id: 'gold',
    name: { en: 'Gold Canari Plush', pt: 'Pelúcia Canari Dourada' },
    summary: {
      en: 'Increases prize money (and Prize Medal conversion) from battles.',
      pt: 'Aumenta o dinheiro de batalha (e a conversão de Medalhas de Prêmio).',
    },
    sprite: 'gold-canari-plush',
    levels: [
      {
        level: 1,
        screwCost: 3,
        effect: {
          en: 'Prize money ×1.15',
          pt: 'Dinheiro de prêmio ×1,15',
        },
      },
      {
        level: 2,
        screwCost: 5,
        effect: {
          en: 'Prize money ×1.299',
          pt: 'Dinheiro de prêmio ×1,299',
        },
      },
      {
        level: 3,
        screwCost: 8,
        effect: {
          en: 'Prize money ×1.5',
          pt: 'Dinheiro de prêmio ×1,5',
        },
      },
    ],
  },
  {
    id: 'pink',
    name: { en: 'Pink Canari Plush', pt: 'Pelúcia Canari Rosa' },
    summary: {
      en: 'Increases Mega Shards from smashing Mega Crystals.',
      pt: 'Aumenta os Mega Shards ao quebrar Mega Cristais.',
    },
    sprite: 'pink-canari-plush',
    levels: [
      {
        level: 1,
        screwCost: 3,
        effect: {
          en: 'Small crystals 2–4 · Large 8–12',
          pt: 'Cristais pequenos 2–4 · Grandes 8–12',
        },
      },
      {
        level: 2,
        screwCost: 5,
        effect: {
          en: 'Small crystals 3–5 · Large 10–14',
          pt: 'Cristais pequenos 3–5 · Grandes 10–14',
        },
      },
      {
        level: 3,
        screwCost: 8,
        effect: {
          en: 'Small crystals 5–7 · Large 14–18',
          pt: 'Cristais pequenos 5–7 · Grandes 14–18',
        },
      },
    ],
  },
  {
    id: 'green',
    name: { en: 'Green Canari Plush', pt: 'Pelúcia Canari Verde' },
    summary: {
      en: 'Raises your player HP so you black out less from field damage.',
      pt: 'Aumenta o HP do personagem para desmaiar menos por dano no mapa.',
    },
    sprite: 'green-canari-plush',
    levels: [
      {
        level: 1,
        screwCost: 3,
        effect: { en: 'Player HP: 150', pt: 'HP do personagem: 150' },
      },
      {
        level: 2,
        screwCost: 5,
        effect: { en: 'Player HP: 200', pt: 'HP do personagem: 200' },
      },
      {
        level: 3,
        screwCost: 8,
        effect: { en: 'Player HP: 250', pt: 'HP do personagem: 250' },
      },
    ],
  },
  {
    id: 'blue',
    name: { en: 'Blue Canari Plush', pt: 'Pelúcia Canari Azul' },
    summary: {
      en: 'Improves your chance of catching Pokémon.',
      pt: 'Melhora a chance de capturar Pokémon.',
    },
    sprite: 'blue-canari-plush',
    levels: [
      {
        level: 1,
        screwCost: 3,
        effect: { en: 'Catch rate +10%', pt: 'Taxa de captura +10%' },
      },
      {
        level: 2,
        screwCost: 5,
        effect: { en: 'Catch rate +20%', pt: 'Taxa de captura +20%' },
      },
      {
        level: 3,
        screwCost: 8,
        effect: { en: 'Catch rate +35%', pt: 'Taxa de captura +35%' },
      },
    ],
  },
]

export function canariPlushTotalCost(plush: CanariPlush) {
  return plush.levels.reduce((sum, lv) => sum + lv.screwCost, 0)
}
