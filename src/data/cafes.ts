export type Localized = { en: string; pt: string }

export type CafeItem = {
  name: Localized
  price: number
  /** PokeAPI item sprite slug, or a local path starting with `/` */
  sprite: string
}

export type CafeService = {
  name: Localized
  detail: Localized
  /** Real item/Pokémon sprite URL for the service row */
  sprite: string
}

export type Cafe = {
  id: number
  name: Localized
  description: Localized
  /** Percent coordinates from Polygon interactive map. */
  map: { x: number; y: number }
  /** In-game exterior shot under /lza-cafes/ */
  locationImageSrc?: string
  /** Shared cafe features (bond, travel, photos…) */
  services: CafeService[]
  /** Drink menu sold at this cafe */
  items: CafeItem[]
}

const ITEM =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items'
const PKM =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

/** Official Z-A bag art (Bulbagarden). */
const ZA_FRESH_WATER =
  'https://archives.bulbagarden.net/media/upload/f/fb/Bag_Fresh_Water_ZA_Sprite.png'
const ZA_MOOMOO_MILK =
  'https://archives.bulbagarden.net/media/upload/a/a3/Bag_Moomoo_Milk_ZA_Sprite.png'

/**
 * Real product art for cafe drinks.
 * Specialty cafe drinks have no published bag sprites, so we use:
 * - Z-A bag art for standard healing drinks
 * - Berry / Pokémon sprites for themed teas & coffees
 * - Furfrou trim forms for Café Woof blends
 * - Kalos food items / themed Pokémon for signature blends
 */
const DRINK_SPRITES: Record<string, string> = {
  'Fresh Water': ZA_FRESH_WATER,
  'Sparkling Water': `${ITEM}/soda-pop.png`,
  'Moomoo Milk': ZA_MOOMOO_MILK,
  'Warm Moomoo Milk': ZA_MOOMOO_MILK,
  'Moomoo Milk Tea': ZA_MOOMOO_MILK,

  'Flaaffe Latte': `${PKM}/180.png`,
  'Robustaryu Coffee': `${ITEM}/casteliacone.png`,
  'Komala Coffee': `${PKM}/775.png`,
  'Triste Drip Coffee': `${ITEM}/old-gateau.png`,
  'Ultimo Coffee': `${ITEM}/rare-candy.png`,
  'Gallant Dark Roast': `${PKM}/475.png`,

  'Roserade Tea': `${PKM}/407.png`,
  'Panchamomile Tea': `${PKM}/674.png`,
  'Wooloolong Tea': `${PKM}/831.png`,
  'Pumpkabrew Tea': `${PKM}/710.png`,
  'Sinis Tea': `${PKM}/854.png`,
  'Clamperl Gray Tea': `${PKM}/366.png`,
  'Pantrio Tea': `${PKM}/511.png`,
  'Oran Tea': `${ITEM}/oran-berry.png`,
  'Pecha Tea': `${ITEM}/pecha-berry.png`,
  'Cheri Tea': `${ITEM}/cheri-berry.png`,
  'Blended Tea': `${ITEM}/sitrus-berry.png`,
  'Mint Tea du Jour': `${ITEM}/mental-herb.png`,
  'Galarian Breakfast Tea': `${PKM}/831.png`,
  'Action! Tea Blend': `${ITEM}/lemonade.png`,

  'Ember Roast': `${PKM}/4.png`,
  'Flamethrower Roast': `${PKM}/5.png`,
  'Fire Blast Roast': `${PKM}/6.png`,
  'Burn Up Roast': `${PKM}/146.png`,

  'Natural Blend': `${PKM}/676.png`,
  'Heart Blend': `${PKM}/676-heart.png`,
  'Star Blend': `${PKM}/676-star.png`,
  'Diamond Blend': `${PKM}/676-diamond.png`,
  'Debutante Blend': `${PKM}/676-debutante.png`,
  'Matron Blend': `${PKM}/676-matron.png`,
  'Dandy Blend': `${PKM}/676-dandy.png`,
  'La Reine Blend': `${PKM}/676-la-reine.png`,
  'Kabuki Blend': `${PKM}/676-kabuki.png`,
  'Pharaoh Blend': `${PKM}/676-pharaoh.png`,

  // Signature cafe drinks — themed Pokémon / Kalos treats (no bag sprites exist)
  'Bataille Blend': `${PKM}/448.png`,
  'Bataille au Lait': `${ITEM}/rage-candy-bar.png`,
  'Introversion Blend': `${PKM}/677.png`,
  'Introversion au Lait': `${ITEM}/sweet-heart.png`,
  'Soleil Blend': `${PKM}/694.png`,
  'Cyclone Blend': `${PKM}/351.png`,
  'Classe au Lait': `${ITEM}/shalour-sable.png`,
  'Kizuna Blend': `${PKM}/700.png`,
  'Rouleau Blend': `${ITEM}/lava-cookie.png`,
  'Shutterbug Blend': `${ITEM}/poke-radar.png`,
  'Shutterbug au Lait': `${ITEM}/lumiose-galette.png`,
}

export function cafeItemSpriteUrl(sprite: string) {
  if (sprite.startsWith('/') || sprite.startsWith('http')) return sprite
  return `${ITEM}/${sprite}.png`
}

function drink(en: string, pt: string, price: number, sprite?: string): CafeItem {
  return {
    name: { en, pt },
    price,
    sprite: sprite ?? DRINK_SPRITES[en] ?? `${ITEM}/lemonade.png`,
  }
}

const freshWater = (price: number) => drink('Fresh Water', 'Água Fresca', price)
const sparklingWater = (price: number) =>
  drink('Sparkling Water', 'Água com Gás', price)
const moomooMilk = (price: number) => drink('Moomoo Milk', 'Leite Moomoo', price)
const warmMoomooMilk = (price: number) =>
  drink('Warm Moomoo Milk', 'Leite Moomoo Quente', price)

/** Features available at every café after you visit / order. */
const CAFE_SERVICES: CafeService[] = [
  {
    name: { en: 'Drink & bond', pt: 'Bebida e vínculo' },
    detail: {
      en: 'Order a drink to raise friendship with your lead Pokémon, heal the party, and clear status.',
      pt: 'Peça uma bebida para aumentar o vínculo com o Pokémon líder, curar o time e remover status.',
    },
    sprite: `${ITEM}/soothe-bell.png`,
  },
  {
    name: { en: 'Fast Travel spot', pt: 'Ponto de Fast Travel' },
    detail: {
      en: 'Unlocks after your first visit to the café.',
      pt: 'Desbloqueia na primeira visita ao café.',
    },
    sprite: `${ITEM}/town-map.png`,
  },
  {
    name: { en: 'Photo with Pokémon', pt: 'Foto com Pokémon' },
    detail: {
      en: 'Take pictures at the table with filters, angles, and Trainer expressions.',
      pt: 'Tire fotos na mesa com filtros, ângulos e expressões do Treinador.',
    },
    sprite: `${ITEM}/poke-radar.png`,
  },
]

const nouveauMenu: CafeItem[] = [
  drink('Ember Roast', 'Torrado Ember', 250),
  drink('Flamethrower Roast', 'Torrado Flamethrower', 250),
  drink('Fire Blast Roast', 'Torrado Fire Blast', 250),
  drink('Burn Up Roast', 'Torrado Burn Up', 300),
  drink('Panchamomile Tea', 'Chá Panchamomile', 250),
  drink('Wooloolong Tea', 'Chá Wooloolong', 300),
  drink('Roserade Tea', 'Chá Roserade', 350),
  moomooMilk(200),
  freshWater(100),
  sparklingWater(100),
]

/**
 * Cafés in Lumiose City.
 * Coords from Polygon: https://www.polygon.com/map/pokemon-legends-z-a-plza-interactive-map-lumiose-city/
 * Menus from Game8 (Cafe Locations and Features).
 */
export const CAFES: Cafe[] = [
  {
    id: 1,
    name: { en: 'Cafe Bataille', pt: 'Café Bataille' },
    description: {
      en: 'A cafe where those who are particular about Pokémon battling gather for debates and to pit their opinions against one another.',
      pt: 'Café onde fãs de batalha Pokémon se reúnem para debater e confrontar opiniões.',
    },
    map: { x: 93.72, y: 47.55 },
    locationImageSrc: '/lza-cafes/bataille.png?v=1',
    services: CAFE_SERVICES,
    items: [
      drink('Bataille Blend', 'Blend Bataille', 500),
      drink('Bataille au Lait', 'Bataille au Lait', 600),
      drink('Flaaffe Latte', 'Latte Flaaffe', 550),
      drink('Robustaryu Coffee', 'Café Robustaryu', 700),
      drink('Komala Coffee', 'Café Komala', 830),
      drink('Roserade Tea', 'Chá Roserade', 850),
      drink('Oran Tea', 'Chá Oran', 500),
      drink('Pumpkabrew Tea', 'Chá Pumpkabrew', 800),
      moomooMilk(450),
      freshWater(300),
      sparklingWater(300),
    ],
  },
  {
    id: 2,
    name: { en: 'Cafe Classe', pt: 'Café Classe' },
    description: {
      en: 'A cafe where the stylish like to gather and keep up with the latest fashion trends.',
      pt: 'Café onde o pessoal estiloso se reúne para acompanhar as tendências da moda.',
    },
    map: { x: 51.13, y: 78.14 },
    locationImageSrc: '/lza-cafes/classe.png?v=1',
    services: CAFE_SERVICES,
    items: [
      drink('Classe au Lait', 'Classe au Lait', 800),
      drink('Flaaffe Latte', 'Latte Flaaffe', 800),
      drink('Moomoo Milk Tea', 'Chá com Leite Moomoo', 900),
      drink('Panchamomile Tea', 'Chá Panchamomile', 800),
      moomooMilk(650),
      warmMoomooMilk(650),
      freshWater(500),
      sparklingWater(500),
    ],
  },
  {
    id: 3,
    name: { en: 'Cafe Cyclone', pt: 'Café Cyclone' },
    description: {
      en: "A cafe where it's said that at any moment, a commotion might kick up like a sudden gust of wind.",
      pt: 'Café onde, a qualquer momento, uma confusão pode surgir como uma rajada de vento.',
    },
    map: { x: 68.54, y: 71.99 },
    locationImageSrc: '/lza-cafes/cyclone.png?v=1',
    services: CAFE_SERVICES,
    items: [
      drink('Cyclone Blend', 'Blend Cyclone', 600),
      drink('Robustaryu Coffee', 'Café Robustaryu', 700),
      drink('Komala Coffee', 'Café Komala', 1000),
      drink('Sinis Tea', 'Chá Sinis', 600),
      drink('Clamperl Gray Tea', 'Chá Clamperl Gray', 600),
      drink('Pumpkabrew Tea', 'Chá Pumpkabrew', 800),
      drink('Pantrio Tea', 'Chá Pantrio', 1000),
      freshWater(350),
      sparklingWater(350),
    ],
  },
  {
    id: 4,
    name: { en: 'Cafe Gallant', pt: 'Café Gallant' },
    description: {
      en: 'A cafe where those aiming to become the best of the best go to train against one another, endlessly honing their skills.',
      pt: 'Café onde quem quer ser o melhor treina uns contra os outros, aprimorando as habilidades sem parar.',
    },
    map: { x: 33.61, y: 53.69 },
    locationImageSrc: '/lza-cafes/gallant.png?v=1',
    services: CAFE_SERVICES,
    items: [
      drink('Gallant Dark Roast', 'Torrado Escuro Gallant', 1000),
      drink('Sinis Tea', 'Chá Sinis', 500),
      freshWater(250),
      sparklingWater(300),
    ],
  },
  {
    id: 5,
    name: { en: 'Cafe Introversion', pt: 'Café Introversion' },
    description: {
      en: 'A cafe popular with a subdued clientele that prefers to communicate online rather than face to face.',
      pt: 'Café popular entre um público discreto que prefere conversar online a falar pessoalmente.',
    },
    map: { x: 70.44, y: 88.32 },
    locationImageSrc: '/lza-cafes/introversion.png?v=1',
    services: CAFE_SERVICES,
    items: [
      drink('Introversion Blend', 'Blend Introversion', 500),
      drink('Introversion au Lait', 'Introversion au Lait', 550),
      drink('Flaaffe Latte', 'Latte Flaaffe', 600),
      drink('Panchamomile Tea', 'Chá Panchamomile', 600),
      drink('Wooloolong Tea', 'Chá Wooloolong', 800),
      drink('Roserade Tea', 'Chá Roserade', 700),
      moomooMilk(500),
      freshWater(350),
      sparklingWater(350),
    ],
  },
  {
    id: 6,
    name: { en: 'Cafe Kizuna', pt: 'Café Kizuna' },
    description: {
      en: 'A cafe that holds heated debates about the bonds between Pokémon and people — with no fellow feeling found among the clientele.',
      pt: 'Café de debates acalorados sobre os laços entre Pokémon e pessoas — sem muita camaradagem entre os clientes.',
    },
    map: { x: 70.1, y: 25.09 },
    locationImageSrc: '/lza-cafes/kizuna.png?v=1',
    services: CAFE_SERVICES,
    items: [
      drink('Kizuna Blend', 'Blend Kizuna', 950),
      drink('Flaaffe Latte', 'Latte Flaaffe', 800),
      drink('Robustaryu Coffee', 'Café Robustaryu', 900),
      drink('Komala Coffee', 'Café Komala', 1000),
      drink('Panchamomile Tea', 'Chá Panchamomile', 700),
      drink('Wooloolong Tea', 'Chá Wooloolong', 800),
      drink('Roserade Tea', 'Chá Roserade', 900),
      freshWater(500),
      sparklingWater(500),
    ],
  },
  {
    id: 7,
    name: { en: 'Cafe Pokémon Amie', pt: 'Café Pokémon Amie' },
    description: {
      en: 'A cafe where Trainers come to talk — and occasionally fight — about the best ways to become friendlier with Pokémon.',
      pt: 'Café onde Treinadores conversam — e às vezes brigam — sobre as melhores formas de se aproximar dos Pokémon.',
    },
    map: { x: 32.98, y: 30.47 },
    locationImageSrc: '/lza-cafes/pokemon-amie.png?v=1',
    services: CAFE_SERVICES,
    items: [
      drink('Oran Tea', 'Chá Oran', 500),
      drink('Pecha Tea', 'Chá Pecha', 500),
      drink('Cheri Tea', 'Chá Cheri', 600),
      drink('Blended Tea', 'Chá Misturado', 800),
      moomooMilk(400),
      warmMoomooMilk(400),
      freshWater(300),
      sparklingWater(300),
    ],
  },
  {
    id: 8,
    name: { en: 'Cafe Rouleau', pt: 'Café Rouleau' },
    description: {
      en: 'A cafe where people love to speak about skating tricks — and also show them off. The owner can perform the cosmic flip.',
      pt: 'Café onde o pessoal fala (e demonstra) manobras de patins. O dono sabe fazer o cosmic flip.',
    },
    map: { x: 16.58, y: 58.68 },
    locationImageSrc: '/lza-cafes/rouleau.png?v=1',
    services: CAFE_SERVICES,
    items: [
      drink('Rouleau Blend', 'Blend Rouleau', 360),
      drink('Panchamomile Tea', 'Chá Panchamomile', 650),
      drink('Wooloolong Tea', 'Chá Wooloolong', 700),
      drink('Roserade Tea', 'Chá Roserade', 800),
      freshWater(350),
      sparklingWater(350),
    ],
  },
  {
    id: 9,
    name: { en: 'Cafe Soleil', pt: 'Café Soleil' },
    description: {
      en: 'A mysterious cafe with the even more mysterious concept of "bringing as much light into your life as the sun itself."',
      pt: 'Café misterioso com o conceito ainda mais misterioso de “trazer tanta luz à sua vida quanto o próprio sol”.',
    },
    map: { x: 15.81, y: 76.54 },
    locationImageSrc: '/lza-cafes/soleil.png?v=1',
    services: CAFE_SERVICES,
    items: [
      drink('Soleil Blend', 'Blend Soleil', 500),
      drink('Flaaffe Latte', 'Latte Flaaffe', 650),
      drink('Robustaryu Coffee', 'Café Robustaryu', 650),
      drink('Komala Coffee', 'Café Komala', 950),
      drink('Panchamomile Tea', 'Chá Panchamomile', 600),
      drink('Moomoo Milk Tea', 'Chá com Leite Moomoo', 650),
      drink('Pumpkabrew Tea', 'Chá Pumpkabrew', 800),
      moomooMilk(500),
      freshWater(350),
      sparklingWater(350),
    ],
  },
  {
    id: 10,
    name: { en: 'Cafe Triste', pt: 'Café Triste' },
    description: {
      en: 'A particular little cafe with a restrained air perfect for its restrained crowd, which grows uneasy if it actually gets crowded.',
      pt: 'Cafézinho contido, ideal para um público discreto — que fica desconfortável se o lugar lotar de verdade.',
    },
    map: { x: 15.59, y: 26.07 },
    locationImageSrc: '/lza-cafes/triste.png?v=1',
    services: CAFE_SERVICES,
    items: [
      drink('Triste Drip Coffee', 'Café Coado Triste', 750),
      drink('Flaaffe Latte', 'Latte Flaaffe', 650),
      freshWater(500),
    ],
  },
  {
    id: 11,
    name: { en: 'Cafe Ultimo', pt: 'Café Ultimo' },
    description: {
      en: 'A cafe whose staff is willing to put it all on the line to provide one ultimate offering, pouring all they have into a single drink.',
      pt: 'Café cujo staff arrisca tudo por uma oferta definitiva, colocando tudo o que tem em uma única bebida.',
    },
    map: { x: 78.73, y: 17.6 },
    locationImageSrc: '/lza-cafes/ultimo.png?v=1',
    services: CAFE_SERVICES,
    items: [drink('Ultimo Coffee', 'Café Ultimo', 100_000)],
  },
  {
    id: 12,
    name: { en: 'Cafe Woof', pt: 'Café Woof' },
    description: {
      en: 'A cafe where Trainers who adore Furfrou gather and talk for hours about the charms of these beloved Pokémon.',
      pt: 'Café onde Treinadores fãs de Furfrou se reúnem e conversam por horas sobre o charme desses Pokémon.',
    },
    map: { x: 48.05, y: 72.03 },
    locationImageSrc: '/lza-cafes/woof.png?v=1',
    services: CAFE_SERVICES,
    items: [
      drink('Natural Blend', 'Blend Natural', 800),
      drink('Heart Blend', 'Blend Heart', 1000),
      drink('Star Blend', 'Blend Star', 1000),
      drink('Diamond Blend', 'Blend Diamond', 1000),
      drink('Debutante Blend', 'Blend Debutante', 1200),
      drink('Matron Blend', 'Blend Matron', 1200),
      drink('Dandy Blend', 'Blend Dandy', 1200),
      drink('La Reine Blend', 'Blend La Reine', 1500),
      drink('Kabuki Blend', 'Blend Kabuki', 1500),
      drink('Pharaoh Blend', 'Blend Pharaoh', 1500),
    ],
  },
  {
    id: 13,
    name: { en: 'Nouveau Cafe', pt: 'Nouveau Café' },
    description: {
      en: 'A cafe that has been the talk of the town lately, thanks to its quality roasts and its policy of not charging the disadvantaged.',
      pt: 'Café na boca do povo graças aos torrados de qualidade e à política de não cobrar quem não pode pagar.',
    },
    map: { x: 54.59, y: 57.65 },
    locationImageSrc: '/lza-cafes/nouveau.png?v=1',
    services: CAFE_SERVICES,
    items: nouveauMenu,
  },
  {
    id: 14,
    name: { en: 'Nouveau Cafe (Truck No. 2)', pt: 'Nouveau Café (Food Truck nº 2)' },
    description: {
      en: 'The second location of the popular Nouveau Cafe, which offers quality roasts and never charges those who cannot afford to pay.',
      pt: 'Segunda unidade do popular Nouveau Café: torrados de qualidade e não cobra quem não pode pagar.',
    },
    map: { x: 33.35, y: 84.88 },
    locationImageSrc: '/lza-cafes/nouveau-truck-2.png?v=1',
    services: CAFE_SERVICES,
    items: nouveauMenu,
  },
  {
    id: 15,
    name: { en: 'Nouveau Cafe (Truck No. 3)', pt: 'Nouveau Café (Food Truck nº 3)' },
    description: {
      en: 'The third location of the popular Nouveau Cafe, which offers quality roasts and never charges those who cannot afford to pay.',
      pt: 'Terceira unidade do popular Nouveau Café: torrados de qualidade e não cobra quem não pode pagar.',
    },
    map: { x: 27.36, y: 49.32 },
    locationImageSrc: '/lza-cafes/nouveau-truck-3.png?v=1',
    services: CAFE_SERVICES,
    items: nouveauMenu,
  },
  {
    id: 16,
    name: { en: 'Shutterbug Cafe', pt: 'Café Shutterbug' },
    description: {
      en: "A cafe where the passionate gather to swap tips for taking great photos, and to judge each other's photographs.",
      pt: 'Café onde apaixonados por foto trocam dicas e julgam as fotos uns dos outros.',
    },
    map: { x: 11.65, y: 64.64 },
    locationImageSrc: '/lza-cafes/shutterbug.png?v=1',
    services: CAFE_SERVICES,
    items: [
      drink('Shutterbug Blend', 'Blend Shutterbug', 650),
      drink('Shutterbug au Lait', 'Shutterbug au Lait', 700),
      drink('Panchamomile Tea', 'Chá Panchamomile', 600),
      drink('Wooloolong Tea', 'Chá Wooloolong', 700),
      drink('Roserade Tea', 'Chá Roserade', 800),
      moomooMilk(550),
      freshWater(300),
      sparklingWater(300),
    ],
  },
]
