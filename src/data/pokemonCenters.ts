export type Localized = { en: string; pt: string }

/** District / plaza used for filtering (same keys as i18n). */
export type CenterDistrict =
  | 'vert'
  | 'rouge'
  | 'bleu'
  | 'jaune'
  | 'magenta'
  | 'centrico'

export type PokemonCenter = {
  id: number
  /** Short display name without “Pokémon Center”. */
  name: Localized
  districtKey: CenterDistrict
  location: Localized
  /** Fast-travel unlock after first visit. */
  travelPoint: boolean
  notes?: Localized
  /** Percent coordinates on circular map (same space as Wild Zones). */
  map: { x: number; y: number }
  /** In-game exterior shot under /lza-centers/ */
  locationImageSrc?: string
}

/**
 * All 9 main Pokémon Centers in Lumiose (travel points).
 * Coords from Polygon interactive map (normalized tip positions → %).
 * Source: https://www.polygon.com/map/pokemon-legends-z-a-plza-interactive-map-lumiose-city/
 */
export const POKEMON_CENTERS: PokemonCenter[] = [
  {
    id: 1,
    name: { en: 'Bleu', pt: 'Bleu' },
    districtKey: 'bleu',
    location: {
      en: 'Southmost Bleu District — south of Bleu Plaza',
      pt: 'Extremo sul do Distrito Bleu — ao sul da Praça Bleu',
    },
    travelPoint: true,
    map: { x: 26.37, y: 85.81 },
    locationImageSrc: '/lza-centers/bleu.png?v=1',
  },
  {
    id: 2,
    name: { en: 'Vernal', pt: 'Vernal' },
    districtKey: 'vert',
    location: {
      en: 'Vernal Avenue — south of Centrico Plaza',
      pt: 'Avenida Vernal — ao sul da Praça Centrico',
    },
    travelPoint: true,
    map: { x: 48.32, y: 77.15 },
    locationImageSrc: '/lza-centers/vernal.png?v=1',
  },
  {
    id: 3,
    name: { en: 'Vert', pt: 'Vert' },
    districtKey: 'vert',
    location: {
      en: 'Southmost Vert District — southeast Lumiose',
      pt: 'Extremo sul do Distrito Vert — sudeste de Lumiose',
    },
    travelPoint: true,
    map: { x: 74.44, y: 85.27 },
    locationImageSrc: '/lza-centers/vert.png?v=1',
  },
  {
    id: 4,
    name: { en: 'Centrico', pt: 'Centrico' },
    districtKey: 'centrico',
    location: {
      en: 'North of Prism Tower — Centrico Plaza',
      pt: 'Norte da Torre Prism — Praça Centrico',
    },
    travelPoint: true,
    map: { x: 51.68, y: 40.84 },
    locationImageSrc: '/lza-centers/centrico.png?v=1',
  },
  {
    id: 5,
    name: { en: 'Magenta Plaza', pt: 'Praça Magenta' },
    districtKey: 'magenta',
    location: {
      en: 'Magenta Plaza / Magenta Sector 1',
      pt: 'Praça Magenta / Setor Magenta 1',
    },
    travelPoint: true,
    map: { x: 33.38, y: 47.57 },
    locationImageSrc: '/lza-centers/magenta-plaza.png?v=1',
  },
  {
    id: 6,
    name: { en: 'Magenta', pt: 'Magenta' },
    districtKey: 'magenta',
    location: {
      en: 'Magenta Sector 8 — west Lumiose / near Sewers',
      pt: 'Setor Magenta 8 — oeste de Lumiose / perto dos Esgotos',
    },
    travelPoint: true,
    map: { x: 10.45, y: 33.56 },
    locationImageSrc: '/lza-centers/magenta.png?v=1',
  },
  {
    id: 7,
    name: { en: 'Rouge', pt: 'Rouge' },
    districtKey: 'rouge',
    location: {
      en: 'Northmost Rouge District — North Boulevard',
      pt: 'Extremo norte do Distrito Rouge — Boulevard Norte',
    },
    travelPoint: true,
    map: { x: 51.75, y: 7.1 },
    locationImageSrc: '/lza-centers/rouge.png?v=1',
  },
  {
    id: 8,
    name: { en: 'Hibernal', pt: 'Hibernal' },
    districtKey: 'jaune',
    location: {
      en: 'Hibernal Avenue — northeast Lumiose / Jaune Sector 4',
      pt: 'Avenida Hibernal — nordeste de Lumiose / Setor Jaune 4',
    },
    travelPoint: true,
    map: { x: 68.02, y: 28.04 },
    locationImageSrc: '/lza-centers/hibernal.png?v=1',
  },
  {
    id: 9,
    name: { en: 'Jaune', pt: 'Jaune' },
    districtKey: 'jaune',
    location: {
      en: 'Eastmost Jaune District',
      pt: 'Extremo leste do Distrito Jaune',
    },
    travelPoint: true,
    map: { x: 90.06, y: 33.5 },
    locationImageSrc: '/lza-centers/jaune.png?v=1',
  },
]
