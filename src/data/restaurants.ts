export type Localized = { en: string; pt: string }

export type RestaurantReward = {
  name: Localized
  qty: number
  /** PokeAPI item sprite slug */
  sprite: string
}

export type RestaurantService = {
  /** Course / service name shown in the list */
  name: Localized
  /** Short note (battle format, course count, rules…) */
  detail: Localized
  /** Rematch fee in Pokédollars (omit if free / N/A) */
  price?: number
}

export type Restaurant = {
  id: number
  name: Localized
  /** Star rank for Le Nah / Le Yeah / Le Wow; omit for specialty venues */
  stars?: 1 | 2 | 3
  description: Localized
  /** Percent coordinates from Polygon interactive map. */
  map: { x: number; y: number }
  /** In-game exterior shot under /lza-restaurants/ */
  locationImageSrc?: string
  /** What you can do / buy here after unlocking */
  services: RestaurantService[]
  /** Side-mission first clear rewards */
  firstClearRewards: RestaurantReward[]
  /** Rematch completion rewards */
  rematchRewards: RestaurantReward[]
  sideMission: Localized
}

const ITEM_SPRITE_BASE =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items'

/** Local overrides for sprites missing from PokeAPI. */
const LOCAL_ITEM_SPRITES: Record<string, string> = {
  'exp-candy-s': '/lza-items/exp-candy-s.png',
  'exp-candy-m': '/lza-items/exp-candy-m.png',
  'exp-candy-l': '/lza-items/exp-candy-l.png',
  'poke-dollar': '/lza-items/poke-dollar.png',
  'seed-of-mastery': '/lza-items/seed-of-mastery.png',
}

export function restaurantItemSpriteUrl(sprite: string) {
  if (sprite.startsWith('/') || sprite.startsWith('http')) return sprite
  return LOCAL_ITEM_SPRITES[sprite] ?? `${ITEM_SPRITE_BASE}/${sprite}.png`
}

function reward(en: string, pt: string, qty: number, sprite: string): RestaurantReward {
  return { name: { en, pt }, qty, sprite }
}

/**
 * Restaurants in Lumiose City.
 * Coords from Polygon: https://www.polygon.com/map/pokemon-legends-z-a-plza-interactive-map-lumiose-city/
 * Offerings from Game8 / Bulbapedia / Thonky (Legends: Z-A).
 */
export const RESTAURANTS: Restaurant[] = [
  {
    id: 1,
    name: { en: 'Restaurant Le Nah', pt: 'Restaurante Le Nah' },
    stars: 1,
    description: {
      en: 'A one-star restaurant where you can relax and enjoy the cuisine of Kalos in a casual atmosphere.',
      pt: 'Restaurante de uma estrela para relaxar e aproveitar a culinária de Kalos num clima casual.',
    },
    map: { x: 89.42, y: 66.7 },
    locationImageSrc: '/lza-restaurants/le-nah.png?v=1',
    sideMission: {
      en: 'Side Mission 29 — Full Course of Battles: One Star',
      pt: 'Missão secundária 29 — Full Course of Battles: One Star',
    },
    services: [
      {
        name: {
          en: 'Full Course of Battles (rematch)',
          pt: 'Menu completo de batalhas (revanche)',
        },
        detail: {
          en: '3 Double Battles back-to-back. No healing between fights. Good for quick battle farming.',
          pt: '3 Double Battles seguidas. Sem curar entre lutas. Bom para farm rápido de batalhas.',
        },
        price: 3000,
      },
      {
        name: { en: 'Fast Travel spot', pt: 'Ponto de Fast Travel' },
        detail: {
          en: 'Unlocks after your first visit to the restaurant.',
          pt: 'Desbloqueia na primeira visita ao restaurante.',
        },
      },
    ],
    firstClearRewards: [
      reward('Pokédollars', 'Pokédólares', 300, 'poke-dollar'),
      reward('TM Substitute', 'MT Substitute', 1, 'tm-normal'),
      reward('Protein', 'Protein', 2, 'protein'),
      reward('Iron', 'Iron', 2, 'iron'),
    ],
    rematchRewards: [
      reward('Tiny Mushroom', 'Tiny Mushroom', 5, 'tiny-mushroom'),
      reward('Exp. Candy S', 'Doce de Exp. S', 3, 'exp-candy-s'),
    ],
  },
  {
    id: 2,
    name: { en: 'Restaurant Le Yeah', pt: 'Restaurante Le Yeah' },
    stars: 2,
    description: {
      en: 'A two-star restaurant known widely for its aspiration to offer a first-class dining experience.',
      pt: 'Restaurante de duas estrelas conhecido pela ambição de oferecer uma experiência de primeira.',
    },
    map: { x: 32.75, y: 23.86 },
    locationImageSrc: '/lza-restaurants/le-yeah.png?v=1',
    sideMission: {
      en: 'Side Mission 60 — Full Course of Battles: Two Stars',
      pt: 'Missão secundária 60 — Full Course of Battles: Two Stars',
    },
    services: [
      {
        name: {
          en: 'Full Course of Battles (rematch)',
          pt: 'Menu completo de batalhas (revanche)',
        },
        detail: {
          en: '5 battles back-to-back (Gourmet trainers). No healing between fights.',
          pt: '5 batalhas seguidas (Gourmets). Sem curar entre lutas.',
        },
        price: 15000,
      },
      {
        name: { en: 'Fast Travel spot', pt: 'Ponto de Fast Travel' },
        detail: {
          en: 'Unlocks after your first visit to the restaurant.',
          pt: 'Desbloqueia na primeira visita ao restaurante.',
        },
      },
    ],
    firstClearRewards: [
      reward('Pokédollars', 'Pokédólares', 1000, 'poke-dollar'),
      reward('TM Whirlwind', 'MT Whirlwind', 1, 'tm-normal'),
      reward('Calcium', 'Calcium', 3, 'calcium'),
      reward('Zinc', 'Zinc', 3, 'zinc'),
    ],
    rematchRewards: [
      reward('Tiny Mushroom', 'Tiny Mushroom', 30, 'tiny-mushroom'),
      reward('Exp. Candy M', 'Doce de Exp. M', 4, 'exp-candy-m'),
    ],
  },
  {
    id: 3,
    name: { en: 'Restaurant Le Wow', pt: 'Restaurante Le Wow' },
    stars: 3,
    description: {
      en: 'A prestigious three-star restaurant renowned for its multicourse meals and hailed as very much worth a visit.',
      pt: 'Restaurante prestigioso de três estrelas, famoso pelos menus degustação e considerado uma visita que vale a pena.',
    },
    map: { x: 58.59, y: 35.73 },
    locationImageSrc: '/lza-restaurants/le-wow.png?v=1',
    sideMission: {
      en: 'Side Mission 94 — Full Course of Battles: Three Stars',
      pt: 'Missão secundária 94 — Full Course of Battles: Three Stars',
    },
    services: [
      {
        name: {
          en: 'Full Course of Battles (rematch)',
          pt: 'Menu completo de batalhas (revanche)',
        },
        detail: {
          en: 'Premium battle course. Best EXP rematch — Pearl Strings often cover the fee when sold.',
          pt: 'Menu premium de batalhas. Melhor rematch de EXP — Pearl Strings costumam cobrir a taxa ao vender.',
        },
        price: 100000,
      },
      {
        name: { en: 'Fast Travel spot', pt: 'Ponto de Fast Travel' },
        detail: {
          en: 'Unlocks after your first visit to the restaurant.',
          pt: 'Desbloqueia na primeira visita ao restaurante.',
        },
      },
    ],
    firstClearRewards: [
      reward('Pokédollars', 'Pokédólares', 2000, 'poke-dollar'),
      reward('TM Knock Off', 'MT Knock Off', 1, 'tm-dark'),
      reward('HP Up', 'HP Up', 5, 'hp-up'),
      reward('Carbos', 'Carbos', 5, 'carbos'),
    ],
    rematchRewards: [
      reward('Pearl String', 'Pearl String', 10, 'pearl-string'),
      reward('Exp. Candy L', 'Doce de Exp. L', 10, 'exp-candy-l'),
    ],
  },
  {
    id: 4,
    name: { en: 'Sushi High Roller', pt: 'Sushi High Roller' },
    description: {
      en: 'Specialty sushi restaurant focused on high-stakes battle courses — better for money than Exp. Candy.',
      pt: 'Restaurante de sushi especializado em menus de batalha de alto risco — melhor para dinheiro do que para Doces de Exp.',
    },
    map: { x: 55.8, y: 19.2 },
    locationImageSrc: '/lza-restaurants/sushi-high-roller.png?v=2',
    sideMission: {
      en: 'Side Mission 73 — Full Course of Battles: High Rolling',
      pt: 'Missão secundária 73 — Full Course of Battles: High Rolling',
    },
    services: [
      {
        name: {
          en: 'High Rolling battle course (rematch)',
          pt: 'Menu High Rolling de batalhas (revanche)',
        },
        detail: {
          en: '5 multi-Pokémon battles back-to-back. No healing between fights. Strong money farm (Big Nuggets).',
          pt: '5 batalhas multi-Pokémon seguidas. Sem curar entre lutas. Bom farm de dinheiro (Big Nuggets).',
        },
        price: 30000,
      },
      {
        name: { en: 'Fast Travel spot', pt: 'Ponto de Fast Travel' },
        detail: {
          en: 'Unlocks after your first visit to the restaurant.',
          pt: 'Desbloqueia na primeira visita ao restaurante.',
        },
      },
    ],
    firstClearRewards: [
      reward('Pokédollars', 'Pokédólares', 1500, 'poke-dollar'),
      reward('Qualot Berry', 'Berry Qualot', 10, 'qualot-berry'),
      reward('Grepa Berry', 'Berry Grepa', 10, 'grepa-berry'),
      reward('Kelpsy Berry', 'Berry Kelpsy', 10, 'kelpsy-berry'),
    ],
    rematchRewards: [
      reward('Big Nugget', 'Big Nugget', 2, 'big-nugget'),
      reward('Seed of Mastery', 'Seed of Mastery', 1, 'seed-of-mastery'),
    ],
  },
]
