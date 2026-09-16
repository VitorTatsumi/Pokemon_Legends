import type { HisuiRegionId } from './hisuiRegions'
import type { Localized } from './laCollectible'

export type LaOutbreak = {
  id: string
  regionId: HisuiRegionId
  subregionId: string
  speciesDex: number
  speciesName: Localized
  note: Localized
}

/** Representative mass-outbreak rows by area (post-game). */
export const LA_OUTBREAKS: LaOutbreak[] = [
  { id: 'ob-bidoof', regionId: 'obsidian', subregionId: 'horseshoe-plains', speciesDex: 399, speciesName: { en: 'Bidoof', pt: 'Bidoof' }, note: { en: 'Common early outbreak.', pt: 'Surto comum no início.' } },
  { id: 'ob-starly', regionId: 'obsidian', subregionId: 'aspiration-hill', speciesDex: 396, speciesName: { en: 'Starly', pt: 'Starly' }, note: { en: 'Daytime flocks.', pt: 'Bandos de dia.' } },
  { id: 'ob-shinx', regionId: 'obsidian', subregionId: 'deertrack-heights', speciesDex: 403, speciesName: { en: 'Shinx', pt: 'Shinx' }, note: { en: 'Watch for alphas.', pt: 'Atenção a alfas.' } },
  { id: 'ob-ponyta', regionId: 'obsidian', subregionId: 'horseshoe-plains', speciesDex: 77, speciesName: { en: 'Ponyta', pt: 'Ponyta' }, note: { en: 'Plains outbreak.', pt: 'Surto nas planícies.' } },
  { id: 'ob-eevee', regionId: 'obsidian', subregionId: 'nature-space', speciesDex: 133, speciesName: { en: 'Eevee', pt: 'Eevee' }, note: { en: 'Rare-ish outbreak.', pt: 'Surto mais raro.' } },
  { id: 'ob-scyther', regionId: 'obsidian', subregionId: 'the-heartwood', speciesDex: 123, speciesName: { en: 'Scyther', pt: 'Scyther' }, note: { en: 'Forest canopy.', pt: 'Dossel da floresta.' } },
  { id: 'ob-paras', regionId: 'obsidian', subregionId: 'the-heartwood', speciesDex: 46, speciesName: { en: 'Paras', pt: 'Paras' }, note: { en: 'Near trees.', pt: 'Perto de árvores.' } },
  { id: 'ob-buizel', regionId: 'obsidian', subregionId: 'tidewater-dam', speciesDex: 418, speciesName: { en: 'Buizel', pt: 'Buizel' }, note: { en: 'Water edges.', pt: 'Margens da água.' } },
  { id: 'cr-petilil', regionId: 'crimson', subregionId: 'golden-lowlands', speciesDex: 548, speciesName: { en: 'Petilil', pt: 'Petilil' }, note: { en: 'Grass patches.', pt: 'Touceiras.' } },
  { id: 'cr-psyduck', regionId: 'crimson', subregionId: 'gapejaw-bog', speciesDex: 54, speciesName: { en: 'Psyduck', pt: 'Psyduck' }, note: { en: 'Bog waters.', pt: 'Águas do pântano.' } },
  { id: 'cr-croagunk', regionId: 'crimson', subregionId: 'scarlet-bog', speciesDex: 453, speciesName: { en: 'Croagunk', pt: 'Croagunk' }, note: { en: 'Toxic flats.', pt: 'Planícies tóxicas.' } },
  { id: 'cr-yanma', regionId: 'crimson', subregionId: 'cloudpool-ridge', speciesDex: 193, speciesName: { en: 'Yanma', pt: 'Yanma' }, note: { en: 'Airspace outbreaks.', pt: 'Surtos aéreos.' } },
  { id: 'cr-tangela', regionId: 'crimson', subregionId: 'gapejaw-bog', speciesDex: 114, speciesName: { en: 'Tangela', pt: 'Tangela' }, note: { en: 'Vine clusters.', pt: 'Agrupamentos de cipó.' } },
  { id: 'cr-hippopotas', regionId: 'crimson', subregionId: 'sludge-mound', speciesDex: 449, speciesName: { en: 'Hippopotas', pt: 'Hippopotas' }, note: { en: 'Sandy bog edges.', pt: 'Bordas arenosas.' } },
  { id: 'cr-spiritomb', regionId: 'crimson', subregionId: 'shrouded-ruins', speciesDex: 442, speciesName: { en: 'Spiritomb', pt: 'Spiritomb' }, note: { en: 'Special conditions.', pt: 'Condições especiais.' } },
  { id: 'co-magikarp', regionId: 'cobalt', subregionId: 'tranquility-cove', speciesDex: 129, speciesName: { en: 'Magikarp', pt: 'Magikarp' }, note: { en: 'Coastal waters.', pt: 'Águas costeiras.' } },
  { id: 'co-remoraid', regionId: 'cobalt', subregionId: 'castaway-shore', speciesDex: 223, speciesName: { en: 'Remoraid', pt: 'Remoraid' }, note: { en: 'Shore outbreaks.', pt: 'Surtos na costa.' } },
  { id: 'co-aipom', regionId: 'cobalt', subregionId: 'aipoms-paradise', speciesDex: 190, speciesName: { en: 'Aipom', pt: 'Aipom' }, note: { en: 'Tree canopy.', pt: 'Dossel.' } },
  { id: 'co-qwilfish', regionId: 'cobalt', subregionId: 'islespy-shore', speciesDex: 211, speciesName: { en: 'Hisuian Qwilfish', pt: 'Qwilfish de Hisui' }, note: { en: 'Sea foam.', pt: 'Espuma do mar.' } },
  { id: 'co-growlithe', regionId: 'cobalt', subregionId: 'firespit-island', speciesDex: 58, speciesName: { en: 'Hisuian Growlithe', pt: 'Growlithe de Hisui' }, note: { en: 'Volcanic isle.', pt: 'Ilha vulcânica.' } },
  { id: 'co-basculin', regionId: 'cobalt', subregionId: 'tranquility-cove', speciesDex: 550, speciesName: { en: 'Basculin', pt: 'Basculin' }, note: { en: 'River mouths.', pt: 'Desembocaduras.' } },
  { id: 'co-octillery', regionId: 'cobalt', subregionId: 'hideaway-bay', speciesDex: 224, speciesName: { en: 'Octillery', pt: 'Octillery' }, note: { en: 'Deep pools.', pt: 'Poças profundas.' } },
  { id: 'cn-bergmite', regionId: 'coronet', subregionId: 'celestica-trail', speciesDex: 712, speciesName: { en: 'Bergmite', pt: 'Bergmite' }, note: { en: 'Highlands chill.', pt: 'Frio da cordilheira.' } },
  { id: 'cn-ralts', regionId: 'coronet', subregionId: 'fabled-spring', speciesDex: 280, speciesName: { en: 'Ralts', pt: 'Ralts' }, note: { en: 'Near springs.', pt: 'Perto de nascentes.' } },
  { id: 'cn-bronzor', regionId: 'coronet', subregionId: 'ancient-quarry', speciesDex: 436, speciesName: { en: 'Bronzor', pt: 'Bronzor' }, note: { en: 'Quarry floors.', pt: 'Piso da pedreira.' } },
  { id: 'cn-gible', regionId: 'coronet', subregionId: 'clamberclaw-cliffs', speciesDex: 443, speciesName: { en: 'Gible', pt: 'Gible' }, note: { en: 'Cliff dens.', pt: 'Tocas nos penhascos.' } },
  { id: 'cn-nosepass', regionId: 'coronet', subregionId: 'bolderoll-ravine', speciesDex: 299, speciesName: { en: 'Nosepass', pt: 'Nosepass' }, note: { en: 'Magnetic rocks.', pt: 'Rochas magnéticas.' } },
  { id: 'cn-clefairy', regionId: 'coronet', subregionId: 'sacred-plaza', speciesDex: 35, speciesName: { en: 'Clefairy', pt: 'Clefairy' }, note: { en: 'Night plaza.', pt: 'Praça à noite.' } },
  { id: 'cn-toxicroak', regionId: 'coronet', subregionId: 'cloudbreaker-head', speciesDex: 454, speciesName: { en: 'Toxicroak', pt: 'Toxicroak' }, note: { en: 'Highland wetlands.', pt: 'Áreas úmidas altas.' } },
  { id: 'al-swinub', regionId: 'alabaster', subregionId: 'whiteout-valley', speciesDex: 220, speciesName: { en: 'Swinub', pt: 'Swinub' }, note: { en: 'Snowfields.', pt: 'Campos de neve.' } },
  { id: 'al-snover', regionId: 'alabaster', subregionId: 'bonechill-valley', speciesDex: 459, speciesName: { en: 'Snover', pt: 'Snover' }, note: { en: 'Tree lines.', pt: 'Linha de árvores.' } },
  { id: 'al-bergmite2', regionId: 'alabaster', subregionId: 'avaluggs-legacy', speciesDex: 712, speciesName: { en: 'Bergmite', pt: 'Bergmite' }, note: { en: 'Ice shelves.', pt: 'Plataformas de gelo.' } },
  { id: 'al-glalie', regionId: 'alabaster', subregionId: 'icebound-falls', speciesDex: 362, speciesName: { en: 'Glalie', pt: 'Glalie' }, note: { en: 'Cave mouths.', pt: 'Bocas de caverna.' } },
  { id: 'al-froslass', regionId: 'alabaster', subregionId: 'icepeak-arena', speciesDex: 478, speciesName: { en: 'Froslass', pt: 'Froslass' }, note: { en: 'Night ice.', pt: 'Gelo noturno.' } },
  { id: 'al-snorunt', regionId: 'alabaster', subregionId: 'glacier-terrace', speciesDex: 361, speciesName: { en: 'Snorunt', pt: 'Snorunt' }, note: { en: 'Icy terraces.', pt: 'Terraços gelados.' } },
  { id: 'al-zorua', regionId: 'alabaster', subregionId: 'bonechill-valley', speciesDex: 570, speciesName: { en: 'Hisuian Zorua', pt: 'Zorua de Hisui' }, note: { en: 'Night illusions.', pt: 'Ilusões noturnas.' } },
  { id: 'al-rufflet', regionId: 'alabaster', subregionId: 'arena-approach', speciesDex: 627, speciesName: { en: 'Rufflet', pt: 'Rufflet' }, note: { en: 'Cliff thermals.', pt: 'Térmicas nos penhascos.' } },
  { id: 'al-machop', regionId: 'alabaster', subregionId: 'snowfall-hot-spring', speciesDex: 66, speciesName: { en: 'Machop', pt: 'Machop' }, note: { en: 'Near springs.', pt: 'Perto das fontes.' } },
  { id: 'ob-luxio', regionId: 'obsidian', subregionId: 'raveling-ravine', speciesDex: 404, speciesName: { en: 'Luxio', pt: 'Luxio' }, note: { en: 'Ravine packs.', pt: 'Matilhas no ravina.' } },
  { id: 'cr-yanmega', regionId: 'crimson', subregionId: 'cloudpool-ridge', speciesDex: 469, speciesName: { en: 'Yanmega', pt: 'Yanmega' }, note: { en: 'Evolved air outbreak.', pt: 'Surto aéreo evoluído.' } },
  /** Massive Mass Outbreaks — Hisui starters (no static wild zones). */
  {
    id: 'mmo-rowlet',
    regionId: 'coronet',
    subregionId: 'sacred-plaza',
    speciesDex: 722,
    speciesName: { en: 'Rowlet', pt: 'Rowlet' },
    note: {
      en: 'Massive Mass Outbreak (Coronet Highlands).',
      pt: 'Surto em Massa Gigante (Cordilheira Coronet).',
    },
  },
  {
    id: 'mmo-dartrix',
    regionId: 'coronet',
    subregionId: 'sacred-plaza',
    speciesDex: 723,
    speciesName: { en: 'Dartrix', pt: 'Dartrix' },
    note: {
      en: 'Massive Mass Outbreak (Coronet Highlands).',
      pt: 'Surto em Massa Gigante (Cordilheira Coronet).',
    },
  },
  {
    id: 'mmo-cyndaquil',
    regionId: 'crimson',
    subregionId: 'golden-lowlands',
    speciesDex: 155,
    speciesName: { en: 'Cyndaquil', pt: 'Cyndaquil' },
    note: {
      en: 'Massive Mass Outbreak (Crimson Mirelands).',
      pt: 'Surto em Massa Gigante (Pântano Carmesim).',
    },
  },
  {
    id: 'mmo-quilava',
    regionId: 'crimson',
    subregionId: 'golden-lowlands',
    speciesDex: 156,
    speciesName: { en: 'Quilava', pt: 'Quilava' },
    note: {
      en: 'Massive Mass Outbreak (Crimson Mirelands).',
      pt: 'Surto em Massa Gigante (Pântano Carmesim).',
    },
  },
  {
    id: 'mmo-oshawott',
    regionId: 'alabaster',
    subregionId: 'whiteout-valley',
    speciesDex: 501,
    speciesName: { en: 'Oshawott', pt: 'Oshawott' },
    note: {
      en: 'Massive Mass Outbreak (Alabaster Icelands).',
      pt: 'Surto em Massa Gigante (Tundra Alba).',
    },
  },
  {
    id: 'mmo-dewott',
    regionId: 'alabaster',
    subregionId: 'whiteout-valley',
    speciesDex: 502,
    speciesName: { en: 'Dewott', pt: 'Dewott' },
    note: {
      en: 'Massive Mass Outbreak (Alabaster Icelands).',
      pt: 'Surto em Massa Gigante (Tundra Alba).',
    },
  },
]

export function outbreaksForDex(dex: number) {
  return LA_OUTBREAKS.filter((o) => o.speciesDex === dex)
}
