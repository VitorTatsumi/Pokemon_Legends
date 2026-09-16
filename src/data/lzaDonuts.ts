import type { Localized } from './markets'

export type DonutFlavor = 'sweet' | 'spicy' | 'sour' | 'bitter' | 'fresh'

export type DonutFlavors = Record<DonutFlavor, number>

export type DonutBerry = {
  id: string
  name: Localized
  menu: number
  level: number
  calories: number
  flavors: DonutFlavors
  hyper: boolean
}

export type SpecialDonut = {
  id: string
  legendaryId: string
  name: Localized
  spriteSrc: string
  requirements: DonutFlavors
  /** Valid Game8 / community recommended berry ids (max 8). */
  recommended: string[]
}

export const DONUT_FLAVORS: DonutFlavor[] = ['sweet', 'spicy', 'sour', 'bitter', 'fresh']

export const DONUT_FLAVOR_LABEL: Record<DonutFlavor, Localized> = {
  sweet: { en: 'Sweet', pt: 'Doce' },
  spicy: { en: 'Spicy', pt: 'Picante' },
  sour: { en: 'Sour', pt: 'Azedo' },
  bitter: { en: 'Bitter', pt: 'Amargo' },
  fresh: { en: 'Fresh', pt: 'Fresco' },
}

export const MAX_DONUT_BERRIES = 8

export const STANDARD_DONUT_SPRITE = '/lza-donuts/standard.png?v=1'

/** Berries usable in Ansha's donut maker (base + Hyper). Source: community datamine. */
export const DONUT_BERRIES: DonutBerry[] = [
  {
    "id": "cheri-berry",
    "name": {
      "en": "Cheri Berry",
      "pt": "Berry Cheri"
    },
    "menu": 1,
    "level": 1,
    "calories": 60,
    "flavors": {
      "sweet": 0,
      "spicy": 10,
      "sour": 0,
      "bitter": 0,
      "fresh": 0
    },
    "hyper": false
  },
  {
    "id": "chesto-berry",
    "name": {
      "en": "Chesto Berry",
      "pt": "Berry Chesto"
    },
    "menu": 2,
    "level": 1,
    "calories": 60,
    "flavors": {
      "sweet": 0,
      "spicy": 0,
      "sour": 0,
      "bitter": 0,
      "fresh": 10
    },
    "hyper": false
  },
  {
    "id": "pecha-berry",
    "name": {
      "en": "Pecha Berry",
      "pt": "Berry Pecha"
    },
    "menu": 3,
    "level": 1,
    "calories": 60,
    "flavors": {
      "sweet": 10,
      "spicy": 0,
      "sour": 0,
      "bitter": 0,
      "fresh": 0
    },
    "hyper": false
  },
  {
    "id": "rawst-berry",
    "name": {
      "en": "Rawst Berry",
      "pt": "Berry Rawst"
    },
    "menu": 4,
    "level": 1,
    "calories": 60,
    "flavors": {
      "sweet": 0,
      "spicy": 0,
      "sour": 0,
      "bitter": 10,
      "fresh": 0
    },
    "hyper": false
  },
  {
    "id": "aspear-berry",
    "name": {
      "en": "Aspear Berry",
      "pt": "Berry Aspear"
    },
    "menu": 5,
    "level": 1,
    "calories": 60,
    "flavors": {
      "sweet": 0,
      "spicy": 0,
      "sour": 10,
      "bitter": 0,
      "fresh": 0
    },
    "hyper": false
  },
  {
    "id": "oran-berry",
    "name": {
      "en": "Oran Berry",
      "pt": "Berry Oran"
    },
    "menu": 6,
    "level": 1,
    "calories": 60,
    "flavors": {
      "sweet": 0,
      "spicy": 5,
      "sour": 5,
      "bitter": 5,
      "fresh": 5
    },
    "hyper": false
  },
  {
    "id": "persim-berry",
    "name": {
      "en": "Persim Berry",
      "pt": "Berry Persim"
    },
    "menu": 7,
    "level": 1,
    "calories": 60,
    "flavors": {
      "sweet": 5,
      "spicy": 5,
      "sour": 5,
      "bitter": 0,
      "fresh": 5
    },
    "hyper": false
  },
  {
    "id": "lum-berry",
    "name": {
      "en": "Lum Berry",
      "pt": "Berry Lum"
    },
    "menu": 8,
    "level": 2,
    "calories": 65,
    "flavors": {
      "sweet": 5,
      "spicy": 5,
      "sour": 0,
      "bitter": 5,
      "fresh": 5
    },
    "hyper": false
  },
  {
    "id": "sitrus-berry",
    "name": {
      "en": "Sitrus Berry",
      "pt": "Berry Sitrus"
    },
    "menu": 9,
    "level": 2,
    "calories": 65,
    "flavors": {
      "sweet": 5,
      "spicy": 0,
      "sour": 5,
      "bitter": 5,
      "fresh": 5
    },
    "hyper": false
  },
  {
    "id": "pomeg-berry",
    "name": {
      "en": "Pomeg Berry",
      "pt": "Berry Pomeg"
    },
    "menu": 10,
    "level": 2,
    "calories": 65,
    "flavors": {
      "sweet": 10,
      "spicy": 10,
      "sour": 0,
      "bitter": 10,
      "fresh": 0
    },
    "hyper": false
  },
  {
    "id": "kelpsy-berry",
    "name": {
      "en": "Kelpsy Berry",
      "pt": "Berry Kelpsy"
    },
    "menu": 11,
    "level": 2,
    "calories": 65,
    "flavors": {
      "sweet": 0,
      "spicy": 0,
      "sour": 10,
      "bitter": 10,
      "fresh": 10
    },
    "hyper": false
  },
  {
    "id": "qualot-berry",
    "name": {
      "en": "Qualot Berry",
      "pt": "Berry Qualot"
    },
    "menu": 12,
    "level": 2,
    "calories": 65,
    "flavors": {
      "sweet": 10,
      "spicy": 10,
      "sour": 10,
      "bitter": 0,
      "fresh": 0
    },
    "hyper": false
  },
  {
    "id": "hondew-berry",
    "name": {
      "en": "Hondew Berry",
      "pt": "Berry Hondew"
    },
    "menu": 13,
    "level": 2,
    "calories": 65,
    "flavors": {
      "sweet": 0,
      "spicy": 10,
      "sour": 0,
      "bitter": 10,
      "fresh": 10
    },
    "hyper": false
  },
  {
    "id": "grepa-berry",
    "name": {
      "en": "Grepa Berry",
      "pt": "Berry Grepa"
    },
    "menu": 14,
    "level": 2,
    "calories": 65,
    "flavors": {
      "sweet": 10,
      "spicy": 0,
      "sour": 10,
      "bitter": 0,
      "fresh": 10
    },
    "hyper": false
  },
  {
    "id": "tamato-berry",
    "name": {
      "en": "Tamato Berry",
      "pt": "Berry Tamato"
    },
    "menu": 15,
    "level": 2,
    "calories": 65,
    "flavors": {
      "sweet": 0,
      "spicy": 15,
      "sour": 0,
      "bitter": 0,
      "fresh": 10
    },
    "hyper": false
  },
  {
    "id": "occa-berry",
    "name": {
      "en": "Occa Berry",
      "pt": "Berry Occa"
    },
    "menu": 16,
    "level": 3,
    "calories": 70,
    "flavors": {
      "sweet": 10,
      "spicy": 15,
      "sour": 0,
      "bitter": 0,
      "fresh": 0
    },
    "hyper": false
  },
  {
    "id": "passho-berry",
    "name": {
      "en": "Passho Berry",
      "pt": "Berry Passho"
    },
    "menu": 17,
    "level": 3,
    "calories": 70,
    "flavors": {
      "sweet": 0,
      "spicy": 0,
      "sour": 0,
      "bitter": 10,
      "fresh": 15
    },
    "hyper": false
  },
  {
    "id": "wacan-berry",
    "name": {
      "en": "Wacan Berry",
      "pt": "Berry Wacan"
    },
    "menu": 18,
    "level": 3,
    "calories": 70,
    "flavors": {
      "sweet": 15,
      "spicy": 0,
      "sour": 10,
      "bitter": 0,
      "fresh": 0
    },
    "hyper": false
  },
  {
    "id": "rindo-berry",
    "name": {
      "en": "Rindo Berry",
      "pt": "Berry Rindo"
    },
    "menu": 19,
    "level": 3,
    "calories": 70,
    "flavors": {
      "sweet": 0,
      "spicy": 10,
      "sour": 0,
      "bitter": 15,
      "fresh": 0
    },
    "hyper": false
  },
  {
    "id": "yache-berry",
    "name": {
      "en": "Yache Berry",
      "pt": "Berry Yache"
    },
    "menu": 20,
    "level": 3,
    "calories": 70,
    "flavors": {
      "sweet": 0,
      "spicy": 0,
      "sour": 15,
      "bitter": 0,
      "fresh": 10
    },
    "hyper": false
  },
  {
    "id": "chople-berry",
    "name": {
      "en": "Chople Berry",
      "pt": "Berry Chople"
    },
    "menu": 21,
    "level": 3,
    "calories": 70,
    "flavors": {
      "sweet": 0,
      "spicy": 15,
      "sour": 0,
      "bitter": 10,
      "fresh": 0
    },
    "hyper": false
  },
  {
    "id": "kebia-berry",
    "name": {
      "en": "Kebia Berry",
      "pt": "Berry Kebia"
    },
    "menu": 22,
    "level": 3,
    "calories": 70,
    "flavors": {
      "sweet": 0,
      "spicy": 0,
      "sour": 10,
      "bitter": 0,
      "fresh": 15
    },
    "hyper": false
  },
  {
    "id": "shuca-berry",
    "name": {
      "en": "Shuca Berry",
      "pt": "Berry Shuca"
    },
    "menu": 23,
    "level": 3,
    "calories": 70,
    "flavors": {
      "sweet": 15,
      "spicy": 10,
      "sour": 0,
      "bitter": 0,
      "fresh": 0
    },
    "hyper": false
  },
  {
    "id": "coba-berry",
    "name": {
      "en": "Coba Berry",
      "pt": "Berry Coba"
    },
    "menu": 24,
    "level": 3,
    "calories": 70,
    "flavors": {
      "sweet": 0,
      "spicy": 0,
      "sour": 0,
      "bitter": 15,
      "fresh": 10
    },
    "hyper": false
  },
  {
    "id": "payapa-berry",
    "name": {
      "en": "Payapa Berry",
      "pt": "Berry Payapa"
    },
    "menu": 25,
    "level": 3,
    "calories": 70,
    "flavors": {
      "sweet": 10,
      "spicy": 0,
      "sour": 15,
      "bitter": 0,
      "fresh": 0
    },
    "hyper": false
  },
  {
    "id": "tanga-berry",
    "name": {
      "en": "Tanga Berry",
      "pt": "Berry Tanga"
    },
    "menu": 26,
    "level": 3,
    "calories": 70,
    "flavors": {
      "sweet": 0,
      "spicy": 20,
      "sour": 10,
      "bitter": 0,
      "fresh": 0
    },
    "hyper": false
  },
  {
    "id": "charti-berry",
    "name": {
      "en": "Charti Berry",
      "pt": "Berry Charti"
    },
    "menu": 27,
    "level": 3,
    "calories": 70,
    "flavors": {
      "sweet": 0,
      "spicy": 10,
      "sour": 0,
      "bitter": 0,
      "fresh": 20
    },
    "hyper": false
  },
  {
    "id": "kasib-berry",
    "name": {
      "en": "Kasib Berry",
      "pt": "Berry Kasib"
    },
    "menu": 28,
    "level": 3,
    "calories": 70,
    "flavors": {
      "sweet": 20,
      "spicy": 0,
      "sour": 0,
      "bitter": 0,
      "fresh": 10
    },
    "hyper": false
  },
  {
    "id": "haban-berry",
    "name": {
      "en": "Haban Berry",
      "pt": "Berry Haban"
    },
    "menu": 29,
    "level": 3,
    "calories": 70,
    "flavors": {
      "sweet": 10,
      "spicy": 0,
      "sour": 0,
      "bitter": 20,
      "fresh": 0
    },
    "hyper": false
  },
  {
    "id": "colbur-berry",
    "name": {
      "en": "Colbur Berry",
      "pt": "Berry Colbur"
    },
    "menu": 30,
    "level": 3,
    "calories": 70,
    "flavors": {
      "sweet": 0,
      "spicy": 0,
      "sour": 20,
      "bitter": 10,
      "fresh": 0
    },
    "hyper": false
  },
  {
    "id": "babiri-berry",
    "name": {
      "en": "Babiri Berry",
      "pt": "Berry Babiri"
    },
    "menu": 31,
    "level": 3,
    "calories": 70,
    "flavors": {
      "sweet": 0,
      "spicy": 25,
      "sour": 0,
      "bitter": 0,
      "fresh": 10
    },
    "hyper": false
  },
  {
    "id": "chilan-berry",
    "name": {
      "en": "Chilan Berry",
      "pt": "Berry Chilan"
    },
    "menu": 32,
    "level": 3,
    "calories": 70,
    "flavors": {
      "sweet": 10,
      "spicy": 0,
      "sour": 0,
      "bitter": 0,
      "fresh": 25
    },
    "hyper": false
  },
  {
    "id": "roseli-berry",
    "name": {
      "en": "Roseli Berry",
      "pt": "Berry Roseli"
    },
    "menu": 33,
    "level": 3,
    "calories": 70,
    "flavors": {
      "sweet": 25,
      "spicy": 0,
      "sour": 0,
      "bitter": 10,
      "fresh": 0
    },
    "hyper": false
  },
  {
    "id": "hyper-cheri-berry",
    "name": {
      "en": "Hyper Cheri Berry",
      "pt": "Berry Hyper Cheri"
    },
    "menu": 34,
    "level": 5,
    "calories": 80,
    "flavors": {
      "sweet": 0,
      "spicy": 40,
      "sour": 0,
      "bitter": 0,
      "fresh": 0
    },
    "hyper": true
  },
  {
    "id": "hyper-chesto-berry",
    "name": {
      "en": "Hyper Chesto Berry",
      "pt": "Berry Hyper Chesto"
    },
    "menu": 35,
    "level": 3,
    "calories": 100,
    "flavors": {
      "sweet": 0,
      "spicy": 0,
      "sour": 0,
      "bitter": 0,
      "fresh": 40
    },
    "hyper": true
  },
  {
    "id": "hyper-pecha-berry",
    "name": {
      "en": "Hyper Pecha Berry",
      "pt": "Berry Hyper Pecha"
    },
    "menu": 36,
    "level": 2,
    "calories": 100,
    "flavors": {
      "sweet": 40,
      "spicy": 0,
      "sour": 0,
      "bitter": 0,
      "fresh": 0
    },
    "hyper": true
  },
  {
    "id": "hyper-rawst-berry",
    "name": {
      "en": "Hyper Rawst Berry",
      "pt": "Berry Hyper Rawst"
    },
    "menu": 37,
    "level": 3,
    "calories": 110,
    "flavors": {
      "sweet": 0,
      "spicy": 0,
      "sour": 0,
      "bitter": 40,
      "fresh": 0
    },
    "hyper": true
  },
  {
    "id": "hyper-aspear-berry",
    "name": {
      "en": "Hyper Aspear Berry",
      "pt": "Berry Hyper Aspear"
    },
    "menu": 38,
    "level": 4,
    "calories": 90,
    "flavors": {
      "sweet": 0,
      "spicy": 0,
      "sour": 40,
      "bitter": 0,
      "fresh": 0
    },
    "hyper": true
  },
  {
    "id": "hyper-oran-berry",
    "name": {
      "en": "Hyper Oran Berry",
      "pt": "Berry Hyper Oran"
    },
    "menu": 39,
    "level": 6,
    "calories": 90,
    "flavors": {
      "sweet": 10,
      "spicy": 20,
      "sour": 15,
      "bitter": 15,
      "fresh": 0
    },
    "hyper": true
  },
  {
    "id": "hyper-persim-berry",
    "name": {
      "en": "Hyper Persim Berry",
      "pt": "Berry Hyper Persim"
    },
    "menu": 40,
    "level": 4,
    "calories": 110,
    "flavors": {
      "sweet": 0,
      "spicy": 15,
      "sour": 15,
      "bitter": 10,
      "fresh": 20
    },
    "hyper": true
  },
  {
    "id": "hyper-lum-berry",
    "name": {
      "en": "Hyper Lum Berry",
      "pt": "Berry Hyper Lum"
    },
    "menu": 41,
    "level": 3,
    "calories": 110,
    "flavors": {
      "sweet": 20,
      "spicy": 15,
      "sour": 10,
      "bitter": 0,
      "fresh": 15
    },
    "hyper": true
  },
  {
    "id": "hyper-sitrus-berry",
    "name": {
      "en": "Hyper Sitrus Berry",
      "pt": "Berry Hyper Sitrus"
    },
    "menu": 42,
    "level": 4,
    "calories": 120,
    "flavors": {
      "sweet": 15,
      "spicy": 10,
      "sour": 0,
      "bitter": 20,
      "fresh": 15
    },
    "hyper": true
  },
  {
    "id": "hyper-pomeg-berry",
    "name": {
      "en": "Hyper Pomeg Berry",
      "pt": "Berry Hyper Pomeg"
    },
    "menu": 43,
    "level": 7,
    "calories": 140,
    "flavors": {
      "sweet": 30,
      "spicy": 35,
      "sour": 0,
      "bitter": 0,
      "fresh": 5
    },
    "hyper": true
  },
  {
    "id": "hyper-kelpsy-berry",
    "name": {
      "en": "Hyper Kelpsy Berry",
      "pt": "Berry Hyper Kelpsy"
    },
    "menu": 44,
    "level": 5,
    "calories": 160,
    "flavors": {
      "sweet": 5,
      "spicy": 0,
      "sour": 0,
      "bitter": 30,
      "fresh": 35
    },
    "hyper": true
  },
  {
    "id": "hyper-qualot-berry",
    "name": {
      "en": "Hyper Qualot Berry",
      "pt": "Berry Hyper Qualot"
    },
    "menu": 45,
    "level": 4,
    "calories": 160,
    "flavors": {
      "sweet": 35,
      "spicy": 0,
      "sour": 30,
      "bitter": 5,
      "fresh": 0
    },
    "hyper": true
  },
  {
    "id": "hyper-hondew-berry",
    "name": {
      "en": "Hyper Hondew Berry",
      "pt": "Berry Hyper Hondew"
    },
    "menu": 46,
    "level": 6,
    "calories": 150,
    "flavors": {
      "sweet": 0,
      "spicy": 5,
      "sour": 35,
      "bitter": 0,
      "fresh": 30
    },
    "hyper": true
  },
  {
    "id": "hyper-grepa-berry",
    "name": {
      "en": "Hyper Grepa Berry",
      "pt": "Berry Hyper Grepa"
    },
    "menu": 47,
    "level": 8,
    "calories": 140,
    "flavors": {
      "sweet": 0,
      "spicy": 60,
      "sour": 25,
      "bitter": 0,
      "fresh": 5
    },
    "hyper": true
  },
  {
    "id": "hyper-tamato-berry",
    "name": {
      "en": "Hyper Tamato Berry",
      "pt": "Berry Hyper Tamato"
    },
    "menu": 48,
    "level": 6,
    "calories": 180,
    "flavors": {
      "sweet": 5,
      "spicy": 25,
      "sour": 0,
      "bitter": 0,
      "fresh": 60
    },
    "hyper": true
  },
  {
    "id": "hyper-occa-berry",
    "name": {
      "en": "Hyper Occa Berry",
      "pt": "Berry Hyper Occa"
    },
    "menu": 49,
    "level": 5,
    "calories": 180,
    "flavors": {
      "sweet": 60,
      "spicy": 0,
      "sour": 0,
      "bitter": 5,
      "fresh": 25
    },
    "hyper": true
  },
  {
    "id": "hyper-passho-berry",
    "name": {
      "en": "Hyper Passho Berry",
      "pt": "Berry Hyper Passho"
    },
    "menu": 50,
    "level": 6,
    "calories": 200,
    "flavors": {
      "sweet": 25,
      "spicy": 0,
      "sour": 5,
      "bitter": 60,
      "fresh": 0
    },
    "hyper": true
  },
  {
    "id": "hyper-wacan-berry",
    "name": {
      "en": "Hyper Wacan Berry",
      "pt": "Berry Hyper Wacan"
    },
    "menu": 51,
    "level": 7,
    "calories": 160,
    "flavors": {
      "sweet": 0,
      "spicy": 5,
      "sour": 60,
      "bitter": 25,
      "fresh": 0
    },
    "hyper": true
  },
  {
    "id": "hyper-rindo-berry",
    "name": {
      "en": "Hyper Rindo Berry",
      "pt": "Berry Hyper Rindo"
    },
    "menu": 52,
    "level": 9,
    "calories": 210,
    "flavors": {
      "sweet": 15,
      "spicy": 55,
      "sour": 0,
      "bitter": 5,
      "fresh": 25
    },
    "hyper": true
  },
  {
    "id": "hyper-yache-berry",
    "name": {
      "en": "Hyper Yache Berry",
      "pt": "Berry Hyper Yache"
    },
    "menu": 53,
    "level": 7,
    "calories": 250,
    "flavors": {
      "sweet": 25,
      "spicy": 0,
      "sour": 5,
      "bitter": 15,
      "fresh": 55
    },
    "hyper": true
  },
  {
    "id": "hyper-chople-berry",
    "name": {
      "en": "Hyper Chople Berry",
      "pt": "Berry Hyper Chople"
    },
    "menu": 54,
    "level": 6,
    "calories": 250,
    "flavors": {
      "sweet": 55,
      "spicy": 5,
      "sour": 15,
      "bitter": 25,
      "fresh": 0
    },
    "hyper": true
  },
  {
    "id": "hyper-kebia-berry",
    "name": {
      "en": "Hyper Kebia Berry",
      "pt": "Berry Hyper Kebia"
    },
    "menu": 55,
    "level": 7,
    "calories": 270,
    "flavors": {
      "sweet": 0,
      "spicy": 15,
      "sour": 25,
      "bitter": 55,
      "fresh": 5
    },
    "hyper": true
  },
  {
    "id": "hyper-shuca-berry",
    "name": {
      "en": "Hyper Shuca Berry",
      "pt": "Berry Hyper Shuca"
    },
    "menu": 56,
    "level": 8,
    "calories": 230,
    "flavors": {
      "sweet": 5,
      "spicy": 25,
      "sour": 55,
      "bitter": 0,
      "fresh": 15
    },
    "hyper": true
  },
  {
    "id": "hyper-coba-berry",
    "name": {
      "en": "Hyper Coba Berry",
      "pt": "Berry Hyper Coba"
    },
    "menu": 57,
    "level": 10,
    "calories": 240,
    "flavors": {
      "sweet": 10,
      "spicy": 95,
      "sour": 0,
      "bitter": 10,
      "fresh": 5
    },
    "hyper": true
  },
  {
    "id": "hyper-payapa-berry",
    "name": {
      "en": "Hyper Payapa Berry",
      "pt": "Berry Hyper Payapa"
    },
    "menu": 58,
    "level": 8,
    "calories": 300,
    "flavors": {
      "sweet": 5,
      "spicy": 0,
      "sour": 10,
      "bitter": 10,
      "fresh": 95
    },
    "hyper": true
  },
  {
    "id": "hyper-tanga-berry",
    "name": {
      "en": "Hyper Tanga Berry",
      "pt": "Berry Hyper Tanga"
    },
    "menu": 59,
    "level": 7,
    "calories": 300,
    "flavors": {
      "sweet": 95,
      "spicy": 10,
      "sour": 10,
      "bitter": 5,
      "fresh": 0
    },
    "hyper": true
  },
  {
    "id": "hyper-charti-berry",
    "name": {
      "en": "Hyper Charti Berry",
      "pt": "Berry Hyper Charti"
    },
    "menu": 60,
    "level": 8,
    "calories": 330,
    "flavors": {
      "sweet": 0,
      "spicy": 10,
      "sour": 5,
      "bitter": 95,
      "fresh": 10
    },
    "hyper": true
  },
  {
    "id": "hyper-kasib-berry",
    "name": {
      "en": "Hyper Kasib Berry",
      "pt": "Berry Hyper Kasib"
    },
    "menu": 61,
    "level": 9,
    "calories": 270,
    "flavors": {
      "sweet": 10,
      "spicy": 5,
      "sour": 95,
      "bitter": 0,
      "fresh": 10
    },
    "hyper": true
  },
  {
    "id": "hyper-haban-berry",
    "name": {
      "en": "Hyper Haban Berry",
      "pt": "Berry Hyper Haban"
    },
    "menu": 62,
    "level": 8,
    "calories": 370,
    "flavors": {
      "sweet": 85,
      "spicy": 0,
      "sour": 0,
      "bitter": 0,
      "fresh": 65
    },
    "hyper": true
  },
  {
    "id": "hyper-colbur-berry",
    "name": {
      "en": "Hyper Colbur Berry",
      "pt": "Berry Hyper Colbur"
    },
    "menu": 63,
    "level": 9,
    "calories": 370,
    "flavors": {
      "sweet": 0,
      "spicy": 0,
      "sour": 65,
      "bitter": 0,
      "fresh": 85
    },
    "hyper": true
  },
  {
    "id": "hyper-babiri-berry",
    "name": {
      "en": "Hyper Babiri Berry",
      "pt": "Berry Hyper Babiri"
    },
    "menu": 64,
    "level": 9,
    "calories": 400,
    "flavors": {
      "sweet": 0,
      "spicy": 0,
      "sour": 65,
      "bitter": 85,
      "fresh": 0
    },
    "hyper": true
  },
  {
    "id": "hyper-chilan-berry",
    "name": {
      "en": "Hyper Chilan Berry",
      "pt": "Berry Hyper Chilan"
    },
    "menu": 65,
    "level": 9,
    "calories": 370,
    "flavors": {
      "sweet": 0,
      "spicy": 85,
      "sour": 0,
      "bitter": 65,
      "fresh": 0
    },
    "hyper": true
  },
  {
    "id": "hyper-roseli-berry",
    "name": {
      "en": "Hyper Roseli Berry",
      "pt": "Berry Hyper Roseli"
    },
    "menu": 66,
    "level": 10,
    "calories": 340,
    "flavors": {
      "sweet": 0,
      "spicy": 65,
      "sour": 85,
      "bitter": 0,
      "fresh": 0
    },
    "hyper": true
  }
]

export const SPECIAL_DONUTS: SpecialDonut[] = [
  {
    "id": "darkrai",
    "legendaryId": "darkrai",
    "name": {
      "en": "Bad Dreams Cruller",
      "pt": "Bad Dreams Cruller"
    },
    "spriteSrc": "/lza-donuts/bad-dreams-cruller.png?v=1",
    "requirements": {
      "sweet": 310,
      "spicy": 100,
      "sour": 310,
      "bitter": 40,
      "fresh": 40
    },
    "recommended": [
      "hyper-tanga-berry",
      "hyper-tanga-berry",
      "hyper-tanga-berry",
      "hyper-kasib-berry",
      "hyper-kasib-berry",
      "hyper-kasib-berry",
      "hyper-coba-berry",
      "hyper-yache-berry"
    ]
  },
  {
    "id": "groudon",
    "legendaryId": "groudon",
    "name": {
      "en": "Omega Old-Fashioned Donut",
      "pt": "Donut Omega Old-Fashioned"
    },
    "spriteSrc": "/lza-donuts/omega-old-fashioned.png?v=1",
    "requirements": {
      "sweet": 260,
      "spicy": 160,
      "sour": 160,
      "bitter": 20,
      "fresh": 260
    },
    "recommended": [
      "hyper-haban-berry",
      "hyper-haban-berry",
      "hyper-tamato-berry",
      "hyper-tanga-berry",
      "hyper-colbur-berry",
      "hyper-chilan-berry",
      "hyper-roseli-berry"
    ]
  },
  {
    "id": "kyogre",
    "legendaryId": "kyogre",
    "name": {
      "en": "Alpha Old-Fashioned Donut",
      "pt": "Donut Alpha Old-Fashioned"
    },
    "spriteSrc": "/lza-donuts/alpha-old-fashioned.png?v=1",
    "requirements": {
      "sweet": 50,
      "spicy": 50,
      "sour": 210,
      "bitter": 180,
      "fresh": 370
    },
    "recommended": [
      "hyper-payapa-berry",
      "hyper-payapa-berry",
      "hyper-kelpsy-berry",
      "hyper-yache-berry",
      "hyper-kebia-berry",
      "hyper-kasib-berry",
      "hyper-colbur-berry",
      "hyper-chilan-berry"
    ]
  },
  {
    "id": "rayquaza",
    "legendaryId": "rayquaza",
    "name": {
      "en": "Delta Old-Fashioned Donut",
      "pt": "Donut Delta Old-Fashioned"
    },
    "spriteSrc": "/lza-donuts/delta-old-fashioned.png?v=1",
    "requirements": {
      "sweet": 120,
      "spicy": 40,
      "sour": 340,
      "bitter": 40,
      "fresh": 390
    },
    "recommended": [
      "hyper-oran-berry",
      "hyper-yache-berry",
      "hyper-payapa-berry",
      "hyper-kasib-berry",
      "hyper-haban-berry",
      "hyper-colbur-berry",
      "hyper-colbur-berry",
      "hyper-roseli-berry"
    ]
  },
  {
    "id": "zeraora",
    "legendaryId": "zeraora",
    "name": {
      "en": "Plasma-Glazed Donut",
      "pt": "Donut Plasma-Glazed"
    },
    "spriteSrc": "/lza-donuts/plasma-glazed.png?v=1",
    "requirements": {
      "sweet": 40,
      "spicy": 200,
      "sour": 400,
      "bitter": 280,
      "fresh": 40
    },
    "recommended": [
      "hyper-kebia-berry",
      "hyper-charti-berry",
      "hyper-kasib-berry",
      "hyper-kasib-berry",
      "hyper-kasib-berry",
      "hyper-kasib-berry",
      "hyper-chilan-berry",
      "hyper-chilan-berry"
    ]
  }
]

export const DONUT_BERRY_BY_ID: Record<string, DonutBerry> = Object.fromEntries(
  DONUT_BERRIES.map((b) => [b.id, b]),
)

export const SPECIAL_DONUT_BY_LEGENDARY: Record<string, SpecialDonut> = Object.fromEntries(
  SPECIAL_DONUTS.map((d) => [d.legendaryId, d]),
)

/** In-game donut type names from dominant flavor (RotomLabs / datamine). */
export type DonutCategoryId =
  | 'special'
  | 'meringue'
  | 'curry'
  | 'jam'
  | 'chocolate'
  | 'cream'
  | 'rainbow'

export type CatalogDonut = {
  id: string
  category: DonutCategoryId
  name: Localized
  spriteSrc: string
  /** Flavor this type aims for; null for special/rainbow. */
  dominantFlavor: DonutFlavor | null
  recommended: string[]
  /** Star tier: 0 = Basic, 1–5 = ★ rating. Null for specials. */
  stars: number | null
  /** Only for specials — absolute flavor floors. */
  requirements?: DonutFlavors
  legendaryId?: string
}

export const DONUT_CATEGORY_ORDER: DonutCategoryId[] = [
  'special',
  'meringue',
  'curry',
  'jam',
  'chocolate',
  'cream',
  'rainbow',
]

export const DONUT_CATEGORY_LABEL: Record<DonutCategoryId, Localized> = {
  special: { en: 'Special', pt: 'Especiais' },
  meringue: { en: 'Meringue', pt: 'Meringue' },
  curry: { en: 'Curry', pt: 'Curry' },
  jam: { en: 'Jam', pt: 'Jam' },
  chocolate: { en: 'Chocolate', pt: 'Chocolate' },
  cream: { en: 'Cream', pt: 'Cream' },
  rainbow: { en: 'Rainbow', pt: 'Rainbow' },
}

const FLAVOR_TO_TYPE: Record<DonutFlavor, Exclude<DonutCategoryId, 'special' | 'rainbow'>> = {
  sweet: 'meringue',
  spicy: 'curry',
  sour: 'jam',
  bitter: 'chocolate',
  fresh: 'cream',
}

/** Standard + special catalog shown in Donuts tabs. */
export const CATALOG_DONUTS: CatalogDonut[] = [
  ...SPECIAL_DONUTS.map((d) => ({
    id: d.id,
    category: 'special' as const,
    name: d.name,
    spriteSrc: d.spriteSrc,
    dominantFlavor: null as DonutFlavor | null,
    recommended: d.recommended,
    stars: null as number | null,
    requirements: d.requirements,
    legendaryId: d.legendaryId,
  })),
  {"id":"meringue-basic","category":"meringue","name":{"en":"Meringue Donut (Basic)","pt":"Donut Meringue (Básico)"},"spriteSrc":"/lza-donuts/meringue-basic.png?v=1","dominantFlavor":"sweet","recommended":["hyper-tanga-berry"],"stars":0},
  {"id":"meringue-1","category":"meringue","name":{"en":"Meringue Donut (1★)","pt":"Donut Meringue (1★)"},"spriteSrc":"/lza-donuts/meringue-1.png?v=1","dominantFlavor":"sweet","recommended":["hyper-tanga-berry","hyper-tanga-berry"],"stars":1},
  {"id":"meringue-2","category":"meringue","name":{"en":"Meringue Donut (2★)","pt":"Donut Meringue (2★)"},"spriteSrc":"/lza-donuts/meringue-2.png?v=1","dominantFlavor":"sweet","recommended":["hyper-tanga-berry","hyper-tanga-berry","hyper-tanga-berry"],"stars":2},
  {"id":"meringue-3","category":"meringue","name":{"en":"Meringue Donut (3★)","pt":"Donut Meringue (3★)"},"spriteSrc":"/lza-donuts/meringue-3.png?v=1","dominantFlavor":"sweet","recommended":["hyper-tanga-berry","hyper-tanga-berry","hyper-tanga-berry","hyper-tanga-berry"],"stars":3},
  {"id":"meringue-4","category":"meringue","name":{"en":"Meringue Donut (4★)","pt":"Donut Meringue (4★)"},"spriteSrc":"/lza-donuts/meringue-4.png?v=1","dominantFlavor":"sweet","recommended":["hyper-tanga-berry","hyper-tanga-berry","hyper-tanga-berry","hyper-tanga-berry","hyper-tanga-berry","hyper-tanga-berry"],"stars":4},
  {"id":"meringue","category":"meringue","name":{"en":"Meringue Donut (5★)","pt":"Donut Meringue (5★)"},"spriteSrc":"/lza-donuts/meringue-5.png?v=1","dominantFlavor":"sweet","recommended":["hyper-tanga-berry","hyper-tanga-berry","hyper-tanga-berry","hyper-tanga-berry","hyper-tanga-berry","hyper-tanga-berry","hyper-tanga-berry","hyper-tanga-berry"],"stars":5},
  {"id":"curry-basic","category":"curry","name":{"en":"Cheri Curry Donut","pt":"Donut Curry Cheri"},"spriteSrc":"/lza-donuts/curry-basic.png?v=1","dominantFlavor":"spicy","recommended":["cheri-berry"],"stars":0},
  {"id":"curry-1","category":"curry","name":{"en":"1★ Movetastic Cheri Curry Donut","pt":"1★ Donut Curry Cheri Movetástico"},"spriteSrc":"/lza-donuts/curry-1.png?v=1","dominantFlavor":"spicy","recommended":["cheri-berry","cheri-berry"],"stars":1},
  {"id":"curry-2","category":"curry","name":{"en":"Curry Donut (2★)","pt":"Donut Curry (2★)"},"spriteSrc":"/lza-donuts/curry-2.png?v=1","dominantFlavor":"spicy","recommended":["hyper-chilan-berry","hyper-chilan-berry","hyper-chilan-berry"],"stars":2},
  {"id":"curry-3","category":"curry","name":{"en":"Curry Donut (3★)","pt":"Donut Curry (3★)"},"spriteSrc":"/lza-donuts/curry-3.png?v=1","dominantFlavor":"spicy","recommended":["hyper-chilan-berry","hyper-chilan-berry","hyper-chilan-berry","hyper-chilan-berry"],"stars":3},
  {"id":"curry-4","category":"curry","name":{"en":"Curry Donut (4★)","pt":"Donut Curry (4★)"},"spriteSrc":"/lza-donuts/curry-4.png?v=1","dominantFlavor":"spicy","recommended":["hyper-chilan-berry","hyper-chilan-berry","hyper-chilan-berry","hyper-chilan-berry","hyper-chilan-berry","hyper-chilan-berry"],"stars":4},
  {"id":"curry","category":"curry","name":{"en":"Curry Donut (5★)","pt":"Donut Curry (5★)"},"spriteSrc":"/lza-donuts/curry-5.png?v=1","dominantFlavor":"spicy","recommended":["hyper-chilan-berry","hyper-chilan-berry","hyper-chilan-berry","hyper-chilan-berry","hyper-chilan-berry","hyper-chilan-berry","hyper-chilan-berry","hyper-chilan-berry"],"stars":5},
  {"id":"jam-basic","category":"jam","name":{"en":"Jam Donut (Basic)","pt":"Donut Jam (Básico)"},"spriteSrc":"/lza-donuts/jam-basic.png?v=1","dominantFlavor":"sour","recommended":["hyper-kasib-berry"],"stars":0},
  {"id":"jam-1","category":"jam","name":{"en":"Jam Donut (1★)","pt":"Donut Jam (1★)"},"spriteSrc":"/lza-donuts/jam-1.png?v=1","dominantFlavor":"sour","recommended":["hyper-kasib-berry","hyper-kasib-berry"],"stars":1},
  {"id":"jam-2","category":"jam","name":{"en":"Jam Donut (2★)","pt":"Donut Jam (2★)"},"spriteSrc":"/lza-donuts/jam-2.png?v=1","dominantFlavor":"sour","recommended":["hyper-kasib-berry","hyper-kasib-berry","hyper-kasib-berry"],"stars":2},
  {"id":"jam-3","category":"jam","name":{"en":"Jam Donut (3★)","pt":"Donut Jam (3★)"},"spriteSrc":"/lza-donuts/jam-3.png?v=1","dominantFlavor":"sour","recommended":["hyper-kasib-berry","hyper-kasib-berry","hyper-kasib-berry","hyper-kasib-berry"],"stars":3},
  {"id":"jam-4","category":"jam","name":{"en":"Jam Donut (4★)","pt":"Donut Jam (4★)"},"spriteSrc":"/lza-donuts/jam-4.png?v=1","dominantFlavor":"sour","recommended":["hyper-kasib-berry","hyper-kasib-berry","hyper-kasib-berry","hyper-kasib-berry","hyper-kasib-berry","hyper-kasib-berry"],"stars":4},
  {"id":"jam","category":"jam","name":{"en":"Jam Donut (5★)","pt":"Donut Jam (5★)"},"spriteSrc":"/lza-donuts/jam-5.png?v=1","dominantFlavor":"sour","recommended":["hyper-kasib-berry","hyper-kasib-berry","hyper-kasib-berry","hyper-kasib-berry","hyper-kasib-berry","hyper-kasib-berry","hyper-kasib-berry","hyper-kasib-berry"],"stars":5},
  {"id":"chocolate-basic","category":"chocolate","name":{"en":"Chocolate Donut (Basic)","pt":"Donut Chocolate (Básico)"},"spriteSrc":"/lza-donuts/chocolate-basic.png?v=1","dominantFlavor":"bitter","recommended":["hyper-babiri-berry"],"stars":0},
  {"id":"chocolate-1","category":"chocolate","name":{"en":"Chocolate Donut (1★)","pt":"Donut Chocolate (1★)"},"spriteSrc":"/lza-donuts/chocolate-1.png?v=1","dominantFlavor":"bitter","recommended":["hyper-babiri-berry","hyper-babiri-berry"],"stars":1},
  {"id":"chocolate-2","category":"chocolate","name":{"en":"Chocolate Donut (2★)","pt":"Donut Chocolate (2★)"},"spriteSrc":"/lza-donuts/chocolate-2.png?v=1","dominantFlavor":"bitter","recommended":["hyper-babiri-berry","hyper-babiri-berry","hyper-babiri-berry"],"stars":2},
  {"id":"chocolate-3","category":"chocolate","name":{"en":"Chocolate Donut (3★)","pt":"Donut Chocolate (3★)"},"spriteSrc":"/lza-donuts/chocolate-3.png?v=1","dominantFlavor":"bitter","recommended":["hyper-babiri-berry","hyper-babiri-berry","hyper-babiri-berry","hyper-babiri-berry"],"stars":3},
  {"id":"chocolate-4","category":"chocolate","name":{"en":"Chocolate Donut (4★)","pt":"Donut Chocolate (4★)"},"spriteSrc":"/lza-donuts/chocolate-4.png?v=1","dominantFlavor":"bitter","recommended":["hyper-babiri-berry","hyper-babiri-berry","hyper-babiri-berry","hyper-babiri-berry","hyper-babiri-berry","hyper-babiri-berry"],"stars":4},
  {"id":"chocolate","category":"chocolate","name":{"en":"Chocolate Donut (5★)","pt":"Donut Chocolate (5★)"},"spriteSrc":"/lza-donuts/chocolate-5.png?v=1","dominantFlavor":"bitter","recommended":["hyper-babiri-berry","hyper-babiri-berry","hyper-babiri-berry","hyper-babiri-berry","hyper-babiri-berry","hyper-babiri-berry","hyper-babiri-berry","hyper-babiri-berry"],"stars":5},
  {"id":"cream-basic","category":"cream","name":{"en":"Cream Donut (Basic)","pt":"Donut Cream (Básico)"},"spriteSrc":"/lza-donuts/cream-basic.png?v=1","dominantFlavor":"fresh","recommended":["hyper-coba-berry"],"stars":0},
  {"id":"cream-1","category":"cream","name":{"en":"Cream Donut (1★)","pt":"Donut Cream (1★)"},"spriteSrc":"/lza-donuts/cream-1.png?v=1","dominantFlavor":"fresh","recommended":["hyper-coba-berry","hyper-coba-berry"],"stars":1},
  {"id":"cream-2","category":"cream","name":{"en":"Cream Donut (2★)","pt":"Donut Cream (2★)"},"spriteSrc":"/lza-donuts/cream-2.png?v=1","dominantFlavor":"fresh","recommended":["hyper-coba-berry","hyper-coba-berry","hyper-coba-berry"],"stars":2},
  {"id":"cream-3","category":"cream","name":{"en":"Cream Donut (3★)","pt":"Donut Cream (3★)"},"spriteSrc":"/lza-donuts/cream-3.png?v=1","dominantFlavor":"fresh","recommended":["hyper-coba-berry","hyper-coba-berry","hyper-coba-berry","hyper-coba-berry"],"stars":3},
  {"id":"cream-4","category":"cream","name":{"en":"Cream Donut (4★)","pt":"Donut Cream (4★)"},"spriteSrc":"/lza-donuts/cream-4.png?v=1","dominantFlavor":"fresh","recommended":["hyper-coba-berry","hyper-coba-berry","hyper-coba-berry","hyper-coba-berry","hyper-coba-berry","hyper-coba-berry"],"stars":4},
  {"id":"cream","category":"cream","name":{"en":"Cream Donut (5★)","pt":"Donut Cream (5★)"},"spriteSrc":"/lza-donuts/cream-5.png?v=1","dominantFlavor":"fresh","recommended":["hyper-coba-berry","hyper-coba-berry","hyper-coba-berry","hyper-coba-berry","hyper-coba-berry","hyper-coba-berry","hyper-coba-berry","hyper-coba-berry"],"stars":5},
  {"id":"rainbow-basic","category":"rainbow","name":{"en":"Rawst Rainbow Donut","pt":"Donut Rainbow Rawst"},"spriteSrc":"/lza-donuts/rainbow-basic.png?v=1","dominantFlavor":null,"recommended":["rawst-berry","aspear-berry"],"stars":0},
  {"id":"rainbow-1","category":"rainbow","name":{"en":"1★ Movetastic Rawst Rainbow Donut","pt":"1★ Donut Rainbow Rawst Movetástico"},"spriteSrc":"/lza-donuts/rainbow-1.png?v=1","dominantFlavor":null,"recommended":["rawst-berry","rawst-berry","cheri-berry","aspear-berry"],"stars":1},
  {"id":"rainbow-2","category":"rainbow","name":{"en":"2★ Teensy Rawst Rainbow Donut","pt":"2★ Donut Rainbow Rawst Miúdo"},"spriteSrc":"/lza-donuts/rainbow-2.png?v=1","dominantFlavor":null,"recommended":["rawst-berry","rawst-berry","rawst-berry","cheri-berry","cheri-berry","aspear-berry"],"stars":2},
  {"id":"rainbow-3","category":"rainbow","name":{"en":"Rainbow Donut (3★)","pt":"Donut Rainbow (3★)"},"spriteSrc":"/lza-donuts/rainbow-3.png?v=1","dominantFlavor":null,"recommended":["hyper-tanga-berry","hyper-tanga-berry","hyper-kasib-berry","hyper-kasib-berry"],"stars":3},
  {"id":"rainbow-4","category":"rainbow","name":{"en":"Rainbow Donut (4★)","pt":"Donut Rainbow (4★)"},"spriteSrc":"/lza-donuts/rainbow-4.png?v=1","dominantFlavor":null,"recommended":["hyper-tanga-berry","hyper-tanga-berry","hyper-tanga-berry","hyper-kasib-berry","hyper-kasib-berry","hyper-kasib-berry"],"stars":4},
  {"id":"rainbow","category":"rainbow","name":{"en":"Rainbow Donut (5★)","pt":"Donut Rainbow (5★)"},"spriteSrc":"/lza-donuts/rainbow-5.png?v=1","dominantFlavor":null,"recommended":["hyper-tanga-berry","hyper-tanga-berry","hyper-tanga-berry","hyper-tanga-berry","hyper-kasib-berry","hyper-kasib-berry","hyper-kasib-berry","hyper-kasib-berry"],"stars":5},
]

export const CATALOG_DONUT_BY_ID: Record<string, CatalogDonut> = Object.fromEntries(
  CATALOG_DONUTS.map((d) => [d.id, d]),
)

export function dominantFlavors(flavors: DonutFlavors): DonutFlavor[] {
  const max = Math.max(...DONUT_FLAVORS.map((f) => flavors[f]))
  if (max <= 0) return []
  return DONUT_FLAVORS.filter((f) => flavors[f] === max)
}

export function catalogForCategoryStars(
  category: DonutCategoryId,
  stars: number,
): CatalogDonut | null {
  const exact = CATALOG_DONUTS.find((d) => d.category === category && d.stars === stars)
  if (exact) return exact
  return CATALOG_DONUTS.find((d) => d.category === category && d.stars === 5) ?? null
}

export function resolveDonutType(flavors: DonutFlavors): {
  special: SpecialDonut | null
  category: DonutCategoryId | null
  catalog: CatalogDonut | null
} {
  const special = findMatchingSpecial(flavors)
  if (special) {
    return {
      special,
      category: 'special',
      catalog: CATALOG_DONUT_BY_ID[special.id] ?? null,
    }
  }
  const dom = dominantFlavors(flavors)
  if (dom.length === 0) return { special: null, category: null, catalog: null }
  const stars = donutStars(flavorScore(flavors))
  if (dom.length > 1) {
    return {
      special: null,
      category: 'rainbow',
      catalog: catalogForCategoryStars('rainbow', stars),
    }
  }
  const category = FLAVOR_TO_TYPE[dom[0]]
  return {
    special: null,
    category,
    catalog: catalogForCategoryStars(category, stars),
  }
}

export function emptyFlavors(): DonutFlavors {
  return { sweet: 0, spicy: 0, sour: 0, bitter: 0, fresh: 0 }
}

export function sumBerryFlavors(berryIds: string[]): DonutFlavors {
  const total = emptyFlavors()
  for (const id of berryIds) {
    const berry = DONUT_BERRY_BY_ID[id]
    if (!berry) continue
    for (const f of DONUT_FLAVORS) total[f] += berry.flavors[f]
  }
  return total
}

export function sumBerryCalories(berryIds: string[]): number {
  return berryIds.reduce((n, id) => n + (DONUT_BERRY_BY_ID[id]?.calories ?? 0), 0)
}

export function sumBerryLevels(berryIds: string[]): number {
  return berryIds.reduce((n, id) => n + (DONUT_BERRY_BY_ID[id]?.level ?? 0), 0)
}

export function flavorScore(flavors: DonutFlavors): number {
  return DONUT_FLAVORS.reduce((n, f) => n + flavors[f], 0)
}

/** Approximate star rating from total flavor score (Bulbapedia thresholds). */
export function donutStars(score: number): number {
  if (score >= 960) return 5
  if (score >= 700) return 4
  if (score >= 350) return 3
  if (score >= 240) return 2
  if (score >= 120) return 1
  if (score > 0) return 0
  return 0
}

/** Flavor-score multiplier applied to Level Boost and Donut Energy. */
export function starMultiplier(stars: number): number {
  if (stars <= 0) return 1
  return 1 + stars * 0.1
}

/** Final Cal shown in-game (raw berry calories × star multiplier). */
export function donutEnergy(calories: number, stars: number): number {
  return Math.floor(calories * starMultiplier(stars))
}

export function effectiveLevelBoost(levels: number, stars: number): number {
  return Math.floor(levels * starMultiplier(stars))
}

/** Measured Donut Energy drain by Hyperspace portal rank (cal/sec). */
export const HYPERSPACE_RANKS = [1, 2, 3, 4, 5] as const
export type HyperspaceRank = (typeof HYPERSPACE_RANKS)[number]

export const HYPERSPACE_DRAIN_CAL_PER_SEC: Record<HyperspaceRank, number> = {
  1: 1,
  2: 1.6,
  3: 3.5,
  4: 7.5,
  5: 10,
}

export function hyperspaceDurationSeconds(energy: number, rank: HyperspaceRank): number {
  if (energy <= 0) return 0
  return Math.floor(energy / HYPERSPACE_DRAIN_CAL_PER_SEC[rank])
}

export function hyperspaceTimes(energy: number): { rank: HyperspaceRank; seconds: number }[] {
  return HYPERSPACE_RANKS.map((rank) => ({
    rank,
    seconds: hyperspaceDurationSeconds(energy, rank),
  }))
}

/** In-game Survey Time format (e.g. 319 Cal @ 1★ → 05:19). */
export function formatHyperspaceDuration(seconds: number): string {
  if (seconds <= 0) return '—:—'
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

/** Example adjectives used when Flavor Power is not rolled (matches game naming pool). */
export const DONUT_ADJECTIVE_BY_FLAVOR: Record<DonutFlavor, Localized> = {
  sweet: { en: 'Sparkly', pt: 'Brilhante' },
  spicy: { en: 'Movetastic', pt: 'Movetástico' },
  sour: { en: 'Bountiful', pt: 'Abundante' },
  bitter: { en: 'Protective', pt: 'Protetor' },
  fresh: { en: 'Tempting', pt: 'Tentador' },
}

/** Extra sample adjectives (size / alternate pools) for catalog variety. */
export const DONUT_ALT_ADJECTIVES: Localized[] = [
  { en: 'Teensy', pt: 'Miúdo' },
  { en: 'Humungo', pt: 'Humungo' },
  { en: 'Imposing', pt: 'Imponente' },
  { en: 'Mighty', pt: 'Poderoso' },
  { en: 'Smart', pt: 'Esperto' },
  { en: 'Quick', pt: 'Rápido' },
]

export function berryShortName(berry: DonutBerry, locale: keyof Localized): string {
  let n = berry.name[locale]
  n = n.replace(/^Hyper\s+/i, '')
  n = n.replace(/^Berry\s+/i, '')
  n = n.replace(/\s*Berry$/i, '')
  return n.trim()
}

/** Berry used in the donut name (most copies → highest flavor total → first added). */
export function namingBerryId(berryIds: string[]): string | null {
  if (berryIds.length === 0) return null
  const counts = new Map<string, number>()
  for (const id of berryIds) counts.set(id, (counts.get(id) ?? 0) + 1)
  let best = berryIds[0]
  let bestCount = 0
  let bestFlavor = -1
  for (const id of berryIds) {
    const berry = DONUT_BERRY_BY_ID[id]
    if (!berry) continue
    const count = counts.get(id) ?? 0
    const flavorTotal = flavorScore(berry.flavors)
    if (
      count > bestCount ||
      (count === bestCount && flavorTotal > bestFlavor) ||
      (count === bestCount && flavorTotal === bestFlavor && berryIds.indexOf(id) < berryIds.indexOf(best))
    ) {
      best = id
      bestCount = count
      bestFlavor = flavorTotal
    }
  }
  return best
}

export function ingredientLabel(
  category: Exclude<DonutCategoryId, 'special'>,
  locale: keyof Localized,
): string {
  return DONUT_CATEGORY_LABEL[category][locale]
}

/**
 * In-game donut name:
 * - 0★: "{Berry} {Ingredient} Donut" (e.g. Cheri Curry Donut)
 * - 1★+: "{N}★ {Adjective} {Berry} {Ingredient} Donut"
 * Adjective comes from the first Flavor Power (random in-game); callers pass an example.
 */
export function formatDonutGameName(opts: {
  locale: keyof Localized
  stars: number
  category: Exclude<DonutCategoryId, 'special'>
  berryId: string | null
  adjective: Localized | null
}): string {
  const { locale, stars, category, berryId, adjective } = opts
  const berry = berryId ? DONUT_BERRY_BY_ID[berryId] : null
  const berryPart = berry ? berryShortName(berry, locale) : '—'
  const ingredient = ingredientLabel(category, locale)
  const donutWord = locale === 'pt' ? 'Donut' : 'Donut'
  if (stars <= 0 || !adjective) {
    return `${berryPart} ${ingredient} ${donutWord}`
  }
  return `${stars}★ ${adjective[locale]} ${berryPart} ${ingredient} ${donutWord}`
}

export function exampleAdjectiveForCategory(
  category: Exclude<DonutCategoryId, 'special'>,
  stars: number,
  seed = 0,
): Localized | null {
  if (stars <= 0) return null
  if (category === 'rainbow') {
    // Rainbow can roll powers from tied flavors; alternate samples match in-game variety.
    return seed % 2 === 0
      ? DONUT_ADJECTIVE_BY_FLAVOR.spicy
      : DONUT_ALT_ADJECTIVES[0]
  }
  const flavor = (Object.entries(FLAVOR_TO_TYPE).find(([, t]) => t === category)?.[0] ??
    'sweet') as DonutFlavor
  return DONUT_ADJECTIVE_BY_FLAVOR[flavor]
}

export function catalogDonutDisplayName(
  donut: CatalogDonut,
  locale: keyof Localized,
): string {
  if (donut.category === 'special') return donut.name[locale]
  const stars = donut.stars ?? 0
  const berryId = namingBerryId(donut.recommended) ?? donut.recommended[0] ?? null
  const seed = Math.abs(
    [...donut.id].reduce((n, c) => n + c.charCodeAt(0), 0),
  )
  return formatDonutGameName({
    locale,
    stars,
    category: donut.category,
    berryId,
    adjective: exampleAdjectiveForCategory(donut.category, stars, seed),
  })
}

export function matchesSpecial(flavors: DonutFlavors, special: SpecialDonut): boolean {
  return DONUT_FLAVORS.every((f) => flavors[f] >= special.requirements[f])
}

export function findMatchingSpecial(flavors: DonutFlavors): SpecialDonut | null {
  return SPECIAL_DONUTS.find((d) => matchesSpecial(flavors, d)) ?? null
}

export function berrySpriteUrl(berryId: string): string {
  const base = berryId.replace(/^hyper-/, '')
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${base}.png`
}

export type SavedDonutRecipe = {
  id: string
  name: string
  berryIds: string[]
  createdAt: number
  specialId?: string | null
}
