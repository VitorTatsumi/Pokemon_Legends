import type { HisuiRegionId } from './hisuiRegions'
import type { Localized } from './laCollectible'

export type LaCamp = {
  id: string
  name: Localized
  description?: Localized
  regionId: HisuiRegionId
  subregionId: string
  map: { x: number; y: number }
  detailMap?: { x: number; y: number }
  services: Localized
}

export const LA_CAMPS: LaCamp[] = [
  {
    id: 'beachside-camp',
    name: { en: 'Beachside Camp', pt: 'Acampamento da Praia' },
    description: {
      en: 'Base camp with crafting, storage, and a general store mirror of Choy\'s stock.',
      pt: 'Acampamento com craft, armazenamento e estoque espelhado da loja do Choy.',
    },
    regionId: 'cobalt' as const,
    subregionId: 'beachside-camp',
    map: { x: 69.36, y: 50.21 },
    detailMap: { x: 14.06, y: 60.93 },
    services: {
      en: 'Rest · Craft · Store · Fast travel',
      pt: 'Descanso · Craft · Loja · Viagem rápida',
    },
  },
  {
    id: 'bogbound-camp',
    name: { en: 'Bogbound Camp', pt: 'Acampamento do Brejo' },
    description: {
      en: 'Base camp with crafting, storage, and a general store mirror of Choy\'s stock.',
      pt: 'Acampamento com craft, armazenamento e estoque espelhado da loja do Choy.',
    },
    regionId: 'crimson' as const,
    subregionId: 'bogbound-camp',
    map: { x: 66.84, y: 67.47 },
    detailMap: { x: 62.84, y: 72.17 },
    services: {
      en: 'Rest · Craft · Store · Fast travel',
      pt: 'Descanso · Craft · Loja · Viagem rápida',
    },
  },
  {
    id: 'coastlands-camp',
    name: { en: 'Coastlands Camp', pt: 'Acampamento da Costa' },
    description: {
      en: 'Base camp with crafting, storage, and a general store mirror of Choy\'s stock.',
      pt: 'Acampamento com craft, armazenamento e estoque espelhado da loja do Choy.',
    },
    regionId: 'cobalt' as const,
    subregionId: 'coastlands-camp',
    map: { x: 81.2, y: 54.32 },
    detailMap: { x: 83.34, y: 75.44 },
    services: {
      en: 'Rest · Craft · Store · Fast travel',
      pt: 'Descanso · Craft · Loja · Viagem rápida',
    },
  },
  {
    id: 'fieldlands-camp',
    name: { en: 'Fieldlands Camp', pt: 'Acampamento da Planície' },
    description: {
      en: 'Base camp with crafting, storage, and a general store mirror of Choy\'s stock.',
      pt: 'Acampamento com craft, armazenamento e estoque espelhado da loja do Choy.',
    },
    regionId: 'obsidian' as const,
    subregionId: 'fieldlands-camp',
    map: { x: 40.42, y: 55.88 },
    detailMap: { x: 33.41, y: 10.85 },
    services: {
      en: 'Rest · Craft · Store · Fast travel',
      pt: 'Descanso · Craft · Loja · Viagem rápida',
    },
  },
  {
    id: 'heights-camp',
    name: { en: 'Heights Camp', pt: 'Acampamento das Alturas' },
    description: {
      en: 'Base camp with crafting, storage, and a general store mirror of Choy\'s stock.',
      pt: 'Acampamento com craft, armazenamento e estoque espelhado da loja do Choy.',
    },
    regionId: 'obsidian' as const,
    subregionId: 'heights-camp',
    map: { x: 44.18, y: 60.91 },
    detailMap: { x: 60.42, y: 51.05 },
    services: {
      en: 'Rest · Craft · Store · Fast travel',
      pt: 'Descanso · Craft · Loja · Viagem rápida',
    },
  },
  {
    id: 'highlands-camp',
    name: { en: 'Highlands Camp', pt: 'Acampamento das Terras Altas' },
    description: {
      en: 'Base camp with crafting, storage, and a general store mirror of Choy\'s stock.',
      pt: 'Acampamento com craft, armazenamento e estoque espelhado da loja do Choy.',
    },
    regionId: 'coronet' as const,
    subregionId: 'highlands-camp',
    map: { x: 60.67, y: 35.17 },
    detailMap: { x: 92.93, y: 92.12 },
    services: {
      en: 'Rest · Craft · Store · Fast travel',
      pt: 'Descanso · Craft · Loja · Viagem rápida',
    },
  },
  {
    id: 'icepeak-camp',
    name: { en: 'Icepeak Camp', pt: 'Acampamento do Pico Gelado' },
    description: {
      en: 'Base camp with crafting, storage, and a general store mirror of Choy\'s stock.',
      pt: 'Acampamento com craft, armazenamento e estoque espelhado da loja do Choy.',
    },
    regionId: 'alabaster' as const,
    subregionId: 'icepeak-camp',
    map: { x: 31.7, y: 23.3 },
    detailMap: { x: 44.17, y: 31.22 },
    services: {
      en: 'Rest · Craft · Store · Fast travel',
      pt: 'Descanso · Craft · Loja · Viagem rápida',
    },
  },
  {
    id: 'mirelands-camp',
    name: { en: 'Mirelands Camp', pt: 'Acampamento do Pântano' },
    description: {
      en: 'Base camp with crafting, storage, and a general store mirror of Choy\'s stock.',
      pt: 'Acampamento com craft, armazenamento e estoque espelhado da loja do Choy.',
    },
    regionId: 'crimson' as const,
    subregionId: 'mirelands-camp',
    map: { x: 60.88, y: 63.13 },
    detailMap: { x: 23.16, y: 41.48 },
    services: {
      en: 'Rest · Craft · Store · Fast travel',
      pt: 'Descanso · Craft · Loja · Viagem rápida',
    },
  },
  {
    id: 'mountain-camp',
    name: { en: 'Mountain Camp', pt: 'Acampamento da Montanha' },
    description: {
      en: 'Base camp with crafting, storage, and a general store mirror of Choy\'s stock.',
      pt: 'Acampamento com craft, armazenamento e estoque espelhado da loja do Choy.',
    },
    regionId: 'coronet' as const,
    subregionId: 'mountain-camp',
    map: { x: 59.62, y: 32.38 },
    detailMap: { x: 84.04, y: 66.93 },
    services: {
      en: 'Rest · Craft · Store · Fast travel',
      pt: 'Descanso · Craft · Loja · Viagem rápida',
    },
  },
  {
    id: 'snowfields-camp',
    name: { en: 'Snowfields Camp', pt: 'Acampamento das Neves' },
    description: {
      en: 'Base camp with crafting, storage, and a general store mirror of Choy\'s stock.',
      pt: 'Acampamento com craft, armazenamento e estoque espelhado da loja do Choy.',
    },
    regionId: 'alabaster' as const,
    subregionId: 'snowfields-camp',
    map: { x: 33.28, y: 29.75 },
    detailMap: { x: 54.9, y: 93.21 },
    services: {
      en: 'Rest · Craft · Store · Fast travel',
      pt: 'Descanso · Craft · Loja · Viagem rápida',
    },
  },
  {
    id: 'summit-camp',
    name: { en: 'Summit Camp', pt: 'Acampamento do Cume' },
    description: {
      en: 'Base camp with crafting, storage, and a general store mirror of Choy\'s stock.',
      pt: 'Acampamento com craft, armazenamento e estoque espelhado da loja do Choy.',
    },
    regionId: 'coronet' as const,
    subregionId: 'summit-camp',
    map: { x: 49.59, y: 28.04 },
    detailMap: { x: 17.06, y: 44.47 },
    services: {
      en: 'Rest · Craft · Store · Fast travel',
      pt: 'Descanso · Craft · Loja · Viagem rápida',
    },
  }
]
