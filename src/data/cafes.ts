export type Localized = { en: string; pt: string }

export type Cafe = {
  id: number
  name: Localized
  description: Localized
  /** Percent coordinates from Polygon interactive map. */
  map: { x: number; y: number }
  /** In-game exterior shot under /lza-cafes/ */
  locationImageSrc?: string
}

/**
 * Cafés in Lumiose City.
 * Coords from Polygon: https://www.polygon.com/map/pokemon-legends-z-a-plza-interactive-map-lumiose-city/
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
  },
]
