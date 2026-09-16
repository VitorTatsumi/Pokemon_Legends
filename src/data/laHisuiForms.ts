export type LaHisuiFormEntry = {
  hisui: number
  dex: number
  baseName: string
  formId: string
  /** PokeAPI pokemon id used for Hisuian sprite CDN */
  spriteId: number
  labelEn: string
  labelPt: string
  /**
   * Species unique to Hisui (new evolution / legendary), not a regional
   * variant of an older species. These have no “original form” tab.
   */
  exclusive?: boolean
}

/**
 * Hisuian forms + Hisui-exclusive evolutions in the Hisui Pokédex.
 * Ordered by Hisui Pokédex number. First entry per dex is the default.
 */
export const LA_HISUI_FORMS: LaHisuiFormEntry[] = [
  { hisui: 3, dex: 724, baseName: 'Decidueye', formId: 'decidueye-hisui', spriteId: 10244, labelEn: 'Hisuian Decidueye', labelPt: 'Forma de Hisui: Decidueye' },
  { hisui: 6, dex: 157, baseName: 'Typhlosion', formId: 'typhlosion-hisui', spriteId: 10233, labelEn: 'Hisuian Typhlosion', labelPt: 'Forma de Hisui: Typhlosion' },
  { hisui: 9, dex: 503, baseName: 'Samurott', formId: 'samurott-hisui', spriteId: 10236, labelEn: 'Hisuian Samurott', labelPt: 'Forma de Hisui: Samurott' },
  { hisui: 50, dex: 899, baseName: 'Wyrdeer', formId: 'wyrdeer', spriteId: 899, labelEn: 'Wyrdeer', labelPt: 'Wyrdeer', exclusive: true },
  { hisui: 73, dex: 900, baseName: 'Kleavor', formId: 'kleavor', spriteId: 900, labelEn: 'Kleavor', labelPt: 'Kleavor', exclusive: true },
  { hisui: 84, dex: 211, baseName: 'Qwilfish', formId: 'qwilfish-hisui', spriteId: 10234, labelEn: 'Hisuian Qwilfish', labelPt: 'Forma de Hisui: Qwilfish' },
  { hisui: 85, dex: 904, baseName: 'Overqwil', formId: 'overqwil', spriteId: 904, labelEn: 'Overqwil', labelPt: 'Overqwil', exclusive: true },
  { hisui: 94, dex: 549, baseName: 'Lilligant', formId: 'lilligant-hisui', spriteId: 10237, labelEn: 'Hisuian Lilligant', labelPt: 'Forma de Hisui: Lilligant' },
  { hisui: 114, dex: 901, baseName: 'Ursaluna', formId: 'ursaluna', spriteId: 901, labelEn: 'Ursaluna', labelPt: 'Ursaluna', exclusive: true },
  { hisui: 116, dex: 705, baseName: 'Sliggoo', formId: 'sliggoo-hisui', spriteId: 10241, labelEn: 'Hisuian Sliggoo', labelPt: 'Forma de Hisui: Sliggoo' },
  { hisui: 117, dex: 706, baseName: 'Goodra', formId: 'goodra-hisui', spriteId: 10242, labelEn: 'Hisuian Goodra', labelPt: 'Forma de Hisui: Goodra' },
  { hisui: 150, dex: 58, baseName: 'Growlithe', formId: 'growlithe-hisui', spriteId: 10229, labelEn: 'Hisuian Growlithe', labelPt: 'Forma de Hisui: Growlithe' },
  { hisui: 151, dex: 59, baseName: 'Arcanine', formId: 'arcanine-hisui', spriteId: 10230, labelEn: 'Hisuian Arcanine', labelPt: 'Forma de Hisui: Arcanine' },
  { hisui: 166, dex: 550, baseName: 'Basculin', formId: 'basculin-white-striped', spriteId: 10247, labelEn: 'White-Striped Basculin', labelPt: 'Basculin Listras Brancas' },
  { hisui: 167, dex: 902, baseName: 'Basculegion', formId: 'basculegion-male', spriteId: 902, labelEn: 'Basculegion ♂', labelPt: 'Basculegion ♂', exclusive: true },
  { hisui: 167, dex: 902, baseName: 'Basculegion', formId: 'basculegion-female', spriteId: 10248, labelEn: 'Basculegion ♀', labelPt: 'Basculegion ♀', exclusive: true },
  { hisui: 192, dex: 100, baseName: 'Voltorb', formId: 'voltorb-hisui', spriteId: 10231, labelEn: 'Hisuian Voltorb', labelPt: 'Forma de Hisui: Voltorb' },
  { hisui: 193, dex: 101, baseName: 'Electrode', formId: 'electrode-hisui', spriteId: 10232, labelEn: 'Hisuian Electrode', labelPt: 'Forma de Hisui: Electrode' },
  { hisui: 202, dex: 215, baseName: 'Sneasel', formId: 'sneasel-hisui', spriteId: 10235, labelEn: 'Hisuian Sneasel', labelPt: 'Forma de Hisui: Sneasel' },
  { hisui: 203, dex: 903, baseName: 'Sneasler', formId: 'sneasler', spriteId: 903, labelEn: 'Sneasler', labelPt: 'Sneasler', exclusive: true },
  { hisui: 216, dex: 713, baseName: 'Avalugg', formId: 'avalugg-hisui', spriteId: 10243, labelEn: 'Hisuian Avalugg', labelPt: 'Forma de Hisui: Avalugg' },
  { hisui: 219, dex: 570, baseName: 'Zorua', formId: 'zorua-hisui', spriteId: 10238, labelEn: 'Hisuian Zorua', labelPt: 'Forma de Hisui: Zorua' },
  { hisui: 220, dex: 571, baseName: 'Zoroark', formId: 'zoroark-hisui', spriteId: 10239, labelEn: 'Hisuian Zoroark', labelPt: 'Forma de Hisui: Zoroark' },
  { hisui: 222, dex: 628, baseName: 'Braviary', formId: 'braviary-hisui', spriteId: 10240, labelEn: 'Hisuian Braviary', labelPt: 'Forma de Hisui: Braviary' },
  { hisui: 234, dex: 905, baseName: 'Enamorus', formId: 'enamorus-incarnate', spriteId: 905, labelEn: 'Enamorus', labelPt: 'Enamorus', exclusive: true },
  { hisui: 234, dex: 905, baseName: 'Enamorus', formId: 'enamorus-therian', spriteId: 10249, labelEn: 'Enamorus Therian', labelPt: 'Enamorus Forma Therian', exclusive: true },
]

export function hisuiFormsForDex(dex: number) {
  return LA_HISUI_FORMS.filter((form) => form.dex === dex)
}

/** Default Hisui form for a national dex (first listed). */
export function hisuiFormForDex(dex: number) {
  return hisuiFormsForDex(dex)[0]
}
