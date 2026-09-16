export type TimeOfDay = 'any' | 'day' | 'night'

export type PokemonSpawn = {
  id: string
  name: string
  dex: number
  time: TimeOfDay
  skittish?: boolean
}

export type AlphaSpawn = {
  id: string
  name: string
  dex: number
  time?: TimeOfDay
  note?: string
}

export type WildZone = {
  id: number
  districtKey: string
  locationKey: string
  unlockKey: string
  level: number
  /** Percent coordinates on circular map (0-100) */
  map: { x: number; y: number; r: number }
  /** In-game location screenshot */
  locationImageSrc?: string
  pokemon: PokemonSpawn[]
  alphas: AlphaSpawn[]
  alphaNoteKey?: string
}

export const WILD_ZONES: WildZone[] = [
  {
    id: 1,
    districtKey: 'vert',
    locationKey: 'wz1Loc',
    unlockKey: 'unlockDefault',
    level: 5,
    map: { x: 58.8, y: 93.0, r: 5.5 },
    locationImageSrc: '/lza-wildzones/1.png?v=2',
    pokemon: [
      { id: 'weedle', name: 'Weedle', dex: 13, time: 'any' },
      { id: 'pichu', name: 'Pichu', dex: 172, time: 'any', skittish: true },
      { id: 'scatterbug', name: 'Scatterbug', dex: 664, time: 'any' },
      { id: 'fletchling', name: 'Fletchling', dex: 661, time: 'any' },
      { id: 'pidgey', name: 'Pidgey', dex: 16, time: 'any' },
      { id: 'mareep', name: 'Mareep', dex: 179, time: 'any' },
      { id: 'bunnelby', name: 'Bunnelby', dex: 659, time: 'any' },
    ],
    alphas: [{ id: 'pidgey-a', name: 'Pidgey', dex: 16 }],
  },
  {
    id: 2,
    districtKey: 'vert',
    locationKey: 'wz2Loc',
    unlockKey: 'unlockDefault',
    level: 6,
    map: { x: 62.3, y: 66.6, r: 5 },
    locationImageSrc: '/lza-wildzones/2.png?v=2',
    pokemon: [
      { id: 'kakuna', name: 'Kakuna', dex: 14, time: 'any' },
      { id: 'patrat', name: 'Patrat', dex: 504, time: 'any' },
      { id: 'binacle', name: 'Binacle', dex: 688, time: 'any' },
      { id: 'staryu', name: 'Staryu', dex: 120, time: 'night' },
      { id: 'magikarp', name: 'Magikarp', dex: 129, time: 'any' },
      { id: 'budew', name: 'Budew', dex: 406, time: 'any', skittish: true },
    ],
    alphas: [
      { id: 'magikarp-a', name: 'Magikarp', dex: 129 },
      { id: 'staryu-a', name: 'Staryu', dex: 120, time: 'night' },
    ],
  },
  {
    id: 3,
    districtKey: 'rouge',
    locationKey: 'wz3Loc',
    unlockKey: 'unlockDefault',
    level: 8,
    map: { x: 50.2, y: 27.6, r: 5 },
    locationImageSrc: '/lza-wildzones/3.jpg?v=2',
    pokemon: [
      { id: 'skiddo', name: 'Skiddo', dex: 672, time: 'any' },
      { id: 'pancham', name: 'Pancham', dex: 674, time: 'any' },
      { id: 'litleo', name: 'Litleo', dex: 667, time: 'any' },
      { id: 'espurr', name: 'Espurr', dex: 677, time: 'any', skittish: true },
      { id: 'flabebe', name: 'FlabÃ©bÃ©', dex: 669, time: 'day' },
      { id: 'pikachu', name: 'Pikachu', dex: 25, time: 'any' },
    ],
    alphas: [
      { id: 'fletchling-a', name: 'Fletchling', dex: 661 },
      { id: 'litleo-a', name: 'Litleo', dex: 667 },
    ],
  },
  {
    id: 4,
    districtKey: 'rouge',
    locationKey: 'wz4Loc',
    unlockKey: 'unlockDefault',
    level: 9,
    map: { x: 41.5, y: 8.0, r: 5 },
    locationImageSrc: '/lza-wildzones/4.png?v=2',
    pokemon: [
      { id: 'patrat', name: 'Patrat', dex: 504, time: 'night' },
      { id: 'gastly', name: 'Gastly', dex: 92, time: 'any' },
      { id: 'honedge', name: 'Honedge', dex: 679, time: 'night' },
      { id: 'spewpa', name: 'Spewpa', dex: 665, time: 'day' },
      { id: 'ekans', name: 'Ekans', dex: 23, time: 'any' },
      { id: 'spinarak', name: 'Spinarak', dex: 167, time: 'any' },
    ],
    alphas: [
      { id: 'spinarak-a', name: 'Spinarak', dex: 167 },
      { id: 'spewpa-a', name: 'Spewpa', dex: 665 },
    ],
  },
  {
    id: 5,
    districtKey: 'bleu',
    locationKey: 'wz5Loc',
    unlockKey: 'unlockDefault',
    level: 13,
    map: { x: 42.0, y: 60.1, r: 5.5 },
    locationImageSrc: '/lza-wildzones/5.jpg?v=2',
    pokemon: [
      { id: 'pidgeotto', name: 'Pidgeotto', dex: 17, time: 'any' },
      { id: 'venipede', name: 'Venipede', dex: 543, time: 'any' },
      { id: 'electrike', name: 'Electrike', dex: 309, time: 'any' },
      { id: 'bellsprout', name: 'Bellsprout', dex: 69, time: 'any' },
      { id: 'abra', name: 'Abra', dex: 63, time: 'any', skittish: true },
      { id: 'pidgey', name: 'Pidgey', dex: 16, time: 'any' },
      { id: 'bunnelby', name: 'Bunnelby', dex: 659, time: 'any' },
    ],
    alphas: [
      { id: 'bellsprout-a', name: 'Bellsprout', dex: 69 },
      { id: 'whirlipede-a', name: 'Whirlipede', dex: 544 },
    ],
  },
  {
    id: 6,
    districtKey: 'jaune',
    locationKey: 'wz6Loc',
    unlockKey: 'unlockDefault',
    level: 15,
    map: { x: 92.3, y: 53.3, r: 5 },
    locationImageSrc: '/lza-wildzones/6.png?v=2',
    pokemon: [
      { id: 'binacle', name: 'Binacle', dex: 688, time: 'any' },
      { id: 'meditite', name: 'Meditite', dex: 307, time: 'day' },
      { id: 'buneary', name: 'Buneary', dex: 427, time: 'any' },
      { id: 'magikarp', name: 'Magikarp', dex: 129, time: 'any' },
      { id: 'houndour', name: 'Houndour', dex: 228, time: 'any' },
      { id: 'swablu', name: 'Swablu', dex: 333, time: 'day' },
      { id: 'flaaffy', name: 'Flaaffy', dex: 180, time: 'any' },
    ],
    alphas: [
      { id: 'pikachu-a', name: 'Pikachu', dex: 25 },
      { id: 'houndoom-a', name: 'Houndoom', dex: 229 },
      { id: 'binacle-a', name: 'Binacle', dex: 688 },
    ],
  },
  {
    id: 7,
    districtKey: 'magenta',
    locationKey: 'wz7Loc',
    unlockKey: 'unlockMission9',
    level: 18,
    map: { x: 29.2, y: 43.1, r: 6 },
    locationImageSrc: '/lza-wildzones/7.png?v=2',
    pokemon: [
      { id: 'hippopotas', name: 'Hippopotas', dex: 449, time: 'day' },
      { id: 'audino', name: 'Audino', dex: 531, time: 'day' },
      { id: 'vanillite', name: 'Vanillite', dex: 582, time: 'any' },
      { id: 'kakuna', name: 'Kakuna', dex: 14, time: 'any' },
      { id: 'floette', name: 'Floette', dex: 670, time: 'any' },
      { id: 'roselia', name: 'Roselia', dex: 315, time: 'any' },
      { id: 'shuppet', name: 'Shuppet', dex: 353, time: 'night' },
    ],
    alphas: [{ id: 'fletchinder-a', name: 'Fletchinder', dex: 662 }],
  },
  {
    id: 8,
    districtKey: 'jaune',
    locationKey: 'wz8Loc',
    unlockKey: 'unlockMission9',
    level: 21,
    map: { x: 71.8, y: 42.3, r: 5 },
    locationImageSrc: '/lza-wildzones/8.png?v=2',
    pokemon: [
      { id: 'krokorok', name: 'Krokorok', dex: 552, time: 'any' },
      { id: 'sandile', name: 'Sandile', dex: 551, time: 'any' },
      { id: 'gible', name: 'Gible', dex: 443, time: 'any' },
      { id: 'drilbur', name: 'Drilbur', dex: 529, time: 'any' },
      { id: 'machop', name: 'Machop', dex: 66, time: 'any' },
      { id: 'numel', name: 'Numel', dex: 322, time: 'any' },
    ],
    alphas: [
      { id: 'camerupt-a', name: 'Camerupt', dex: 323 },
      { id: 'krokorok-a', name: 'Krokorok', dex: 552 },
    ],
  },
  {
    id: 9,
    districtKey: 'magenta',
    locationKey: 'wz9Loc',
    unlockKey: 'unlockMission9',
    level: 25,
    map: { x: 12.4, y: 56.3, r: 5 },
    locationImageSrc: '/lza-wildzones/9.png?v=2',
    pokemon: [
      { id: 'carbink', name: 'Carbink', dex: 703, time: 'any' },
      { id: 'espurr', name: 'Espurr', dex: 677, time: 'any' },
      { id: 'fletchinder', name: 'Fletchinder', dex: 662, time: 'any' },
      { id: 'kadabra', name: 'Kadabra', dex: 64, time: 'any' },
      { id: 'sableye', name: 'Sableye', dex: 302, time: 'any' },
      { id: 'mawile', name: 'Mawile', dex: 303, time: 'any' },
    ],
    alphas: [
      { id: 'meowstic-a', name: 'Meowstic', dex: 678 },
      { id: 'manectric-a', name: 'Manectric', dex: 310 },
    ],
  },
  {
    id: 10,
    districtKey: 'bleu',
    locationKey: 'wz10Loc',
    unlockKey: 'unlockMission9',
    level: 29,
    map: { x: 15.8, y: 65.9, r: 5 },
    locationImageSrc: '/lza-wildzones/10.png?v=2',
    pokemon: [
      { id: 'slowpoke', name: 'Slowpoke', dex: 79, time: 'any' },
      { id: 'arbok', name: 'Arbok', dex: 24, time: 'any' },
      { id: 'watchog', name: 'Watchog', dex: 505, time: 'any' },
      { id: 'bellsprout', name: 'Bellsprout', dex: 69, time: 'any' },
      { id: 'carvanha', name: 'Carvanha', dex: 318, time: 'any' },
      { id: 'staryu', name: 'Staryu', dex: 120, time: 'any' },
      { id: 'tynamo', name: 'Tynamo', dex: 602, time: 'any' },
    ],
    alphas: [
      { id: 'sharpedo-a', name: 'Sharpedo', dex: 319 },
      { id: 'watchog-a', name: 'Watchog', dex: 505 },
      { id: 'arbok-a', name: 'Arbok', dex: 24 },
    ],
  },
  {
    id: 11,
    districtKey: 'jaune',
    locationKey: 'wz11Loc',
    unlockKey: 'unlockMission14',
    level: 32,
    map: { x: 82.3, y: 60.1, r: 5 },
    locationImageSrc: '/lza-wildzones/11.png?v=2',
    pokemon: [
      { id: 'gyarados', name: 'Gyarados', dex: 130, time: 'day' },
      { id: 'clauncher', name: 'Clauncher', dex: 692, time: 'any' },
      { id: 'furfrou', name: 'Furfrou', dex: 676, time: 'any' },
      { id: 'inkay', name: 'Inkay', dex: 686, time: 'any' },
      { id: 'slowpoke', name: 'Slowpoke', dex: 79, time: 'any' },
      { id: 'stunfisk', name: 'Stunfisk', dex: 618, time: 'any' },
    ],
    alphas: [
      { id: 'slowbro-a', name: 'Slowbro', dex: 80 },
      { id: 'clawitzer-a', name: 'Clawitzer', dex: 693 },
    ],
  },
  {
    id: 12,
    districtKey: 'bleu',
    locationKey: 'wz12Loc',
    unlockKey: 'unlockMission14',
    level: 34,
    map: { x: 42.8, y: 82.5, r: 5 },
    locationImageSrc: '/lza-wildzones/12.png?v=2',
    pokemon: [
      { id: 'delibird', name: 'Delibird', dex: 225, time: 'any', skittish: true },
      { id: 'machop', name: 'Machop', dex: 66, time: 'any' },
      { id: 'snover', name: 'Snover', dex: 459, time: 'any' },
      { id: 'bergmite', name: 'Bergmite', dex: 712, time: 'any' },
      { id: 'vanillite', name: 'Vanillite', dex: 582, time: 'any' },
      { id: 'gogoat', name: 'Gogoat', dex: 673, time: 'any' },
      { id: 'snorunt', name: 'Snorunt', dex: 361, time: 'any' },
      { id: 'machoke', name: 'Machoke', dex: 67, time: 'any' },
    ],
    alphas: [
      { id: 'abomasnow-a', name: 'Abomasnow', dex: 460 },
      { id: 'avalugg-a', name: 'Avalugg', dex: 713 },
    ],
  },
  {
    id: 13,
    districtKey: 'rouge',
    locationKey: 'wz13Loc',
    unlockKey: 'unlockMission14',
    level: 36,
    map: { x: 57.1, y: 14.5, r: 5 },
    locationImageSrc: '/lza-wildzones/13.png?v=2',
    pokemon: [
      { id: 'phantump', name: 'Phantump', dex: 708, time: 'night' },
      { id: 'vivillon', name: 'Vivillon', dex: 666, time: 'day' },
      { id: 'heracross', name: 'Heracross', dex: 214, time: 'any' },
      { id: 'pinsir', name: 'Pinsir', dex: 127, time: 'any' },
      { id: 'weepinbell', name: 'Weepinbell', dex: 70, time: 'day' },
      { id: 'scyther', name: 'Scyther', dex: 123, time: 'night' },
    ],
    alphas: [
      { id: 'trevenant-a', name: 'Trevenant', dex: 709 },
      { id: 'weepinbell-a', name: 'Weepinbell', dex: 70 },
      { id: 'pinsir-a', name: 'Pinsir', dex: 127 },
    ],
  },
  {
    id: 14,
    districtKey: 'magenta',
    locationKey: 'wz14Loc',
    unlockKey: 'unlockMission19',
    level: 38,
    map: { x: 10.0, y: 42.9, r: 5 },
    locationImageSrc: '/lza-wildzones/14.png?v=2',
    pokemon: [
      { id: 'helioptile', name: 'Helioptile', dex: 694, time: 'day' },
      { id: 'drilbur', name: 'Drilbur', dex: 529, time: 'any' },
      { id: 'onix', name: 'Onix', dex: 95, time: 'any' },
      { id: 'aron', name: 'Aron', dex: 304, time: 'any' },
      { id: 'excadrill', name: 'Excadrill', dex: 530, time: 'any' },
      { id: 'lairon', name: 'Lairon', dex: 305, time: 'any' },
      { id: 'emolga', name: 'Emolga', dex: 587, time: 'any' },
    ],
    alphas: [{ id: 'excadrill-a', name: 'Excadrill', dex: 530 }],
  },
  {
    id: 15,
    districtKey: 'jaune',
    locationKey: 'wz15Loc',
    unlockKey: 'unlockMission19',
    level: 40,
    map: { x: 80.7, y: 18.5, r: 5 },
    locationImageSrc: '/lza-wildzones/15.png?v=2',
    pokemon: [
      { id: 'pumpkaboo', name: 'Pumpkaboo', dex: 710, time: 'any' },
      { id: 'shuppet', name: 'Shuppet', dex: 353, time: 'night' },
      { id: 'scolipede', name: 'Scolipede', dex: 545, time: 'day' },
      { id: 'haunter', name: 'Haunter', dex: 93, time: 'night' },
      { id: 'whirlipede', name: 'Whirlipede', dex: 544, time: 'day' },
      { id: 'beedrill', name: 'Beedrill', dex: 15, time: 'any' },
      { id: 'larvitar', name: 'Larvitar', dex: 246, time: 'any' },
    ],
    alphas: [
      { id: 'beedrill-a', name: 'Beedrill', dex: 15, time: 'day' },
      { id: 'gourgeist-a', name: 'Gourgeist', dex: 711 },
      { id: 'banette-a', name: 'Banette', dex: 354, time: 'night' },
      { id: 'haunter-a', name: 'Haunter', dex: 93, time: 'night' },
    ],
  },
  {
    id: 16,
    districtKey: 'bleu',
    locationKey: 'wz16Loc',
    unlockKey: 'unlockMission24',
    level: 42,
    map: { x: 36.7, y: 68.2, r: 5 },
    locationImageSrc: '/lza-wildzones/16.png?v=2',
    pokemon: [
      { id: 'falinks', name: 'Falinks', dex: 870, time: 'any' },
      { id: 'flaaffy', name: 'Flaaffy', dex: 180, time: 'any' },
      { id: 'starmie', name: 'Starmie', dex: 121, time: 'night' },
      { id: 'barbaracle', name: 'Barbaracle', dex: 689, time: 'night' },
      { id: 'medicham', name: 'Medicham', dex: 308, time: 'day' },
      { id: 'florges', name: 'Florges', dex: 671, time: 'any' },
      { id: 'froakie', name: 'Froakie', dex: 656, time: 'day', skittish: true },
    ],
    alphas: [{ id: 'ampharos-a', name: 'Ampharos', dex: 181 }],
  },
  {
    id: 17,
    districtKey: 'vert',
    locationKey: 'wz17Loc',
    unlockKey: 'unlockMission24',
    level: 44,
    map: { x: 76.7, y: 77.3, r: 5 },
    locationImageSrc: '/lza-wildzones/17.png?v=2',
    pokemon: [
      { id: 'klefki', name: 'Klefki', dex: 707, time: 'day' },
      { id: 'lampent', name: 'Lampent', dex: 608, time: 'night' },
      { id: 'skarmory', name: 'Skarmory', dex: 227, time: 'any' },
      { id: 'pyroar', name: 'Pyroar', dex: 668, time: 'any' },
      { id: 'diggersby', name: 'Diggersby', dex: 660, time: 'any' },
      { id: 'chespin', name: 'Chespin', dex: 650, time: 'day', skittish: true },
    ],
    alphas: [
      { id: 'pyroar-a', name: 'Pyroar', dex: 668 },
      { id: 'mawile-a', name: 'Mawile', dex: 303 },
    ],
  },
  {
    id: 18,
    districtKey: 'magenta',
    locationKey: 'wz18Loc',
    unlockKey: 'unlockMission30',
    level: 46,
    map: { x: 20.5, y: 18.3, r: 5 },
    locationImageSrc: '/lza-wildzones/18.png?v=2',
    pokemon: [
      { id: 'noibat', name: 'Noibat', dex: 714, time: 'night' },
      { id: 'fennekin', name: 'Fennekin', dex: 653, time: 'day', skittish: true },
      { id: 'bagon', name: 'Bagon', dex: 371, time: 'any' },
      { id: 'altaria', name: 'Altaria', dex: 334, time: 'day' },
      { id: 'noivern', name: 'Noivern', dex: 715, time: 'night' },
      { id: 'swablu', name: 'Swablu', dex: 333, time: 'day' },
    ],
    alphas: [
      { id: 'salamence-a', name: 'Salamence', dex: 373 },
      { id: 'lopunny-a', name: 'Lopunny', dex: 428 },
    ],
  },
  {
    id: 19,
    districtKey: 'jaune',
    locationKey: 'wz19Loc',
    unlockKey: 'unlockMission30',
    level: 48,
    map: { x: 81.5, y: 31.0, r: 5 },
    locationImageSrc: '/lza-wildzones/19.png?v=2',
    pokemon: [
      { id: 'eevee', name: 'Eevee', dex: 133, time: 'any' },
      { id: 'furfrou', name: 'Furfrou', dex: 676, time: 'any' },
      { id: 'drampa', name: 'Drampa', dex: 780, time: 'day' },
      { id: 'kangaskhan', name: 'Kangaskhan', dex: 115, time: 'any' },
      { id: 'audino', name: 'Audino', dex: 531, time: 'day' },
      { id: 'clefairy', name: 'Clefairy', dex: 35, time: 'night' },
      { id: 'cleffa', name: 'Cleffa', dex: 173, time: 'night' },
    ],
    alphas: [
      { id: 'clefairy-a', name: 'Clefairy', dex: 35, time: 'night' },
      { id: 'furfrou-a', name: 'Furfrou', dex: 676 },
    ],
  },
  {
    id: 20,
    districtKey: 'centrico',
    locationKey: 'wz20Loc',
    unlockKey: 'unlockMission37',
    level: 55,
    map: { x: 50.2, y: 49.9, r: 8 },
    locationImageSrc: '/lza-wildzones/20.png?v=2',
    pokemon: [
      { id: 'malamar', name: 'Malamar', dex: 687, time: 'any' },
      { id: 'dragalge', name: 'Dragalge', dex: 691, time: 'any' },
      { id: 'charmander', name: 'Charmander', dex: 4, time: 'day', skittish: true },
      { id: 'tepig', name: 'Tepig', dex: 498, time: 'day', skittish: true },
      { id: 'lucario', name: 'Lucario', dex: 448, time: 'any' },
      { id: 'hippowdon', name: 'Hippowdon', dex: 450, time: 'any' },
      { id: 'squirtle', name: 'Squirtle', dex: 7, time: 'day', skittish: true },
      { id: 'totodile', name: 'Totodile', dex: 158, time: 'any' },
      { id: 'bulbasaur', name: 'Bulbasaur', dex: 1, time: 'any' },
      { id: 'roserade', name: 'Roserade', dex: 407, time: 'day' },
      { id: 'gardevoir', name: 'Gardevoir', dex: 282, time: 'any' },
      { id: 'chikorita', name: 'Chikorita', dex: 152, time: 'day', skittish: true },
      { id: 'aggron', name: 'Aggron', dex: 306, time: 'any' },
      { id: 'scrafty', name: 'Scrafty', dex: 560, time: 'night' },
      { id: 'garbodor', name: 'Garbodor', dex: 569, time: 'any' },
    ],
    alphas: [],
    alphaNoteKey: 'wz20AlphaNote',
  },
]

export function spriteUrl(dex: number, shiny = false) {
  const base = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
  return shiny ? `${base}/shiny/${dex}.png` : `${base}/${dex}.png`
}
