import type { Localized } from './laCollectible'

export type LaEvolution = {
  id: string
  fromDex: number
  toDex: number
  fromName: Localized
  toName: Localized
  method: Localized
  item?: Localized
  location?: Localized
}

export const LA_EVOLUTIONS: LaEvolution[] = [
  {
    id: 'growlithe-hisui',
    fromDex: 58,
    toDex: 59,
    fromName: { en: 'Hisuian Growlithe', pt: 'Growlithe de Hisui' },
    toName: { en: 'Hisuian Arcanine', pt: 'Arcanine de Hisui' },
    method: { en: 'Use a Fire Stone.', pt: 'Use uma Pedra do Fogo.' },
    item: { en: 'Fire Stone', pt: 'Pedra do Fogo' },
  },
  {
    id: 'voltorb-hisui',
    fromDex: 100,
    toDex: 101,
    fromName: { en: 'Hisuian Voltorb', pt: 'Voltorb de Hisui' },
    toName: { en: 'Hisuian Electrode', pt: 'Electrode de Hisui' },
    method: { en: 'Use a Leaf Stone.', pt: 'Use uma Pedra da Folha.' },
    item: { en: 'Leaf Stone', pt: 'Pedra da Folha' },
  },
  {
    id: 'qwilfish-overqwil',
    fromDex: 211,
    toDex: 904,
    fromName: { en: 'Hisuian Qwilfish', pt: 'Qwilfish de Hisui' },
    toName: { en: 'Overqwil', pt: 'Overqwil' },
    method: { en: 'Use Barb Barrage in the strong style 20 times.', pt: 'Use Espinho-barragem no estilo forte 20 vezes.' },
  },
  {
    id: 'sneasel-sneasler',
    fromDex: 215,
    toDex: 903,
    fromName: { en: 'Hisuian Sneasel', pt: 'Sneasel de Hisui' },
    toName: { en: 'Sneasler', pt: 'Sneasler' },
    method: { en: 'Use a Razor Claw during the day.', pt: 'Use uma Garra Afiada durante o dia.' },
    item: { en: 'Razor Claw', pt: 'Garra Afiada' },
  },
  {
    id: 'basculin-basculegion',
    fromDex: 550,
    toDex: 902,
    fromName: { en: 'White-Striped Basculin', pt: 'Basculin Listras Brancas' },
    toName: { en: 'Basculegion', pt: 'Basculegion' },
    method: {
      en: 'Lose at least 294 HP from recoil damage (without fainting).',
      pt: 'Perca pelo menos 294 de HP por recoil (sem desmaiar).',
    },
  },
  {
    id: 'stantler-wyrdeer',
    fromDex: 234,
    toDex: 899,
    fromName: { en: 'Stantler', pt: 'Stantler' },
    toName: { en: 'Wyrdeer', pt: 'Wyrdeer' },
    method: { en: 'Use Psyshield Bash in the agile style 20 times.', pt: 'Use Escudo Psíquico no estilo ágil 20 vezes.' },
  },
  {
    id: 'scyther-kleavor',
    fromDex: 123,
    toDex: 900,
    fromName: { en: 'Scyther', pt: 'Scyther' },
    toName: { en: 'Kleavor', pt: 'Kleavor' },
    method: { en: 'Use a Black Augurite.', pt: 'Use uma Augurite Negra.' },
    item: { en: 'Black Augurite', pt: 'Augurite Negra' },
  },
  {
    id: 'ursaring-ursaluna',
    fromDex: 217,
    toDex: 901,
    fromName: { en: 'Ursaring', pt: 'Ursaring' },
    toName: { en: 'Ursaluna', pt: 'Ursaluna' },
    method: {
      en: 'Use a Peat Block during a full moon.',
      pt: 'Use um Bloco de Turfa durante a lua cheia.',
    },
    item: { en: 'Peat Block', pt: 'Bloco de Turfa' },
  },
  {
    id: 'eevee-espeon',
    fromDex: 133,
    toDex: 196,
    fromName: { en: 'Eevee', pt: 'Eevee' },
    toName: { en: 'Espeon', pt: 'Espeon' },
    method: { en: 'High friendship — evolve during the day.', pt: 'Alta amizade — evolua de dia.' },
  },
  {
    id: 'eevee-umbreon',
    fromDex: 133,
    toDex: 197,
    fromName: { en: 'Eevee', pt: 'Eevee' },
    toName: { en: 'Umbreon', pt: 'Umbreon' },
    method: { en: 'High friendship — evolve at night.', pt: 'Alta amizade — evolua à noite.' },
  },
  {
    id: 'eevee-leafeon',
    fromDex: 133,
    toDex: 470,
    fromName: { en: 'Eevee', pt: 'Eevee' },
    toName: { en: 'Leafeon', pt: 'Leafeon' },
    method: { en: 'Use a Leaf Stone (or Moss Rock area).', pt: 'Use Pedra da Folha (ou área de musgo).' },
    item: { en: 'Leaf Stone', pt: 'Pedra da Folha' },
  },
  {
    id: 'eevee-glaceon',
    fromDex: 133,
    toDex: 471,
    fromName: { en: 'Eevee', pt: 'Eevee' },
    toName: { en: 'Glaceon', pt: 'Glaceon' },
    method: { en: 'Use an Ice Stone (or Ice Rock area).', pt: 'Use Pedra do Gelo (ou área gelada).' },
    item: { en: 'Ice Stone', pt: 'Pedra do Gelo' },
  },
]

export function laEvolutionsForDex(dex: number) {
  return LA_EVOLUTIONS.filter((e) => e.fromDex === dex || e.toDex === dex)
}
