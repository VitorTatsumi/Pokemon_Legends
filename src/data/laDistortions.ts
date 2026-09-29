import type { HisuiRegionId } from './hisuiRegions'
import type { Localized } from './laCollectible'

export type LaDistortionTier = 'exclusive' | 'rare' | 'common' | 'postgame'

export type LaDistortionSpawn = {
  dex: number
  /** Override PokeAPI sprite when national dex alone is wrong (Hisui forms). */
  spriteId?: number
  name: Localized
  tier: LaDistortionTier
}

export type LaDistortionSite = {
  id: string
  regionId: HisuiRegionId
  subregionId: string
  name: Localized
  description: Localized
}

export type LaDistortionRegion = {
  regionId: HisuiRegionId
  sites: LaDistortionSite[]
  pokemon: LaDistortionSpawn[]
}

function mon(
  dex: number,
  en: string,
  pt: string,
  tier: LaDistortionTier,
  spriteId?: number,
): LaDistortionSpawn {
  return { dex, name: { en, pt }, tier, ...(spriteId != null ? { spriteId } : {}) }
}

function site(
  id: string,
  regionId: HisuiRegionId,
  subregionId: string,
  en: string,
  pt: string,
  descEn: string,
  descPt: string,
): LaDistortionSite {
  return {
    id,
    regionId,
    subregionId,
    name: { en, pt },
    description: { en: descEn, pt: descPt },
  }
}

/**
 * Known Space-Time Distortion spawn sites and per-region encounter pools.
 * Sources: Gamer Guides / Nintendo Life (PLA).
 * Spawns share a pool per region — every site in a region can roll the same list.
 */
export const LA_DISTORTIONS: LaDistortionRegion[] = [
  {
    regionId: 'obsidian',
    sites: [
      site(
        'std-ob-windswept',
        'obsidian',
        'windswept-run',
        'Windswept Run',
        'Corrida dos Ventos',
        'Center of Windswept Run.',
        'Centro da Corrida dos Ventos.',
      ),
      site(
        'std-ob-sandgem',
        'obsidian',
        'sandgem-flats',
        'Sandgem Flats',
        'Planícies Sandgem',
        'Center of Sandgem Flats.',
        'Centro das Planícies Sandgem.',
      ),
      site(
        'std-ob-pantry',
        'obsidian',
        'nature-pantry',
        'Nature’s Pantry',
        'Despensa da Natureza',
        'Around Nature’s Pantry.',
        'Perto da Despensa da Natureza.',
      ),
      site(
        'std-ob-horseshoe',
        'obsidian',
        'horseshoe-plains',
        'West of Horseshoe Plains',
        'Oeste da Planície da Ferradura',
        'West side of Horseshoe Plains.',
        'Lado oeste da Planície da Ferradura.',
      ),
    ],
    pokemon: [
      mon(94, 'Gengar', 'Gengar', 'exclusive'),
      mon(215, 'Sneasel (Johto)', 'Sneasel (Johto)', 'rare'),
      mon(461, 'Weavile', 'Weavile', 'rare'),
      mon(470, 'Leafeon', 'Leafeon', 'exclusive'),
      mon(700, 'Sylveon', 'Sylveon', 'exclusive'),
      mon(133, 'Eevee', 'Eevee', 'common'),
      mon(93, 'Haunter', 'Haunter', 'common'),
      mon(108, 'Lickitung', 'Lickitung', 'common'),
      mon(463, 'Lickilicky', 'Lickilicky', 'common'),
      mon(95, 'Onix', 'Onix', 'common'),
      mon(208, 'Steelix', 'Steelix', 'common'),
      mon(454, 'Toxicroak', 'Toxicroak', 'common'),
      mon(217, 'Ursaring', 'Ursaring', 'common'),
    ],
  },
  {
    regionId: 'crimson',
    sites: [
      site(
        'std-cr-gapejaw',
        'crimson',
        'gapejaw-bog',
        'Northwest Gapejaw Bog',
        'Noroeste do Brejo Gapejaw',
        'Northwest side of Gapejaw Bog.',
        'Lado noroeste do Brejo Gapejaw.',
      ),
      site(
        'std-cr-holm',
        'crimson',
        'holm-of-trials',
        'Holm of Trials',
        'Ilhota das Provas',
        'Right near the Holm of Trials.',
        'Bem perto da Ilhota das Provas.',
      ),
      site(
        'std-cr-ursa',
        'crimson',
        'ursas-ring',
        'Ursa’s Ring',
        'Anel de Ursa',
        'At Ursa’s Ring.',
        'No Anel de Ursa.',
      ),
      site(
        'std-cr-meadow',
        'crimson',
        'droning-meadow',
        'Droning Meadow',
        'Prado Zumbido',
        'Center of Droning Meadow.',
        'Centro do Prado Zumbido.',
      ),
      site(
        'std-cr-valor',
        'crimson',
        'lake-valor',
        'South of Lake Valor',
        'Sul do Lago Valor',
        'South of Lake Valor.',
        'Sul do Lago Valor.',
      ),
    ],
    pokemon: [
      mon(136, 'Flareon', 'Flareon', 'exclusive'),
      mon(197, 'Umbreon', 'Umbreon', 'exclusive'),
      mon(137, 'Porygon', 'Porygon', 'rare'),
      mon(233, 'Porygon2', 'Porygon2', 'rare'),
      mon(474, 'Porygon-Z', 'Porygon-Z', 'rare'),
      mon(155, 'Cyndaquil', 'Cyndaquil', 'postgame'),
      mon(156, 'Quilava', 'Quilava', 'postgame'),
      mon(157, 'Hisuian Typhlosion', 'Typhlosion de Hisui', 'postgame', 10233),
      mon(133, 'Eevee', 'Eevee', 'common'),
      mon(426, 'Drifblim', 'Drifblim', 'common'),
      mon(419, 'Floatzel', 'Floatzel', 'common'),
      mon(214, 'Heracross', 'Heracross', 'common'),
      mon(428, 'Lopunny', 'Lopunny', 'common'),
      mon(404, 'Luxio', 'Luxio', 'common'),
      mon(405, 'Luxray', 'Luxray', 'common'),
      mon(143, 'Snorlax', 'Snorlax', 'common'),
    ],
  },
  {
    regionId: 'cobalt',
    sites: [
      site(
        'std-co-windbreak-s',
        'cobalt',
        'windbreak-stand',
        'South of Windbreak Stand',
        'Sul do Posto Quebra-vento',
        'South from Windbreak Stand, near the slope.',
        'Sul do Posto Quebra-vento, perto da encosta.',
      ),
      site(
        'std-co-ginkgo',
        'cobalt',
        'ginkgo-landing',
        'South of Ginkgo Landing',
        'Sul do Desembarque Ginkgo',
        'A short distance south from Ginkgo Landing.',
        'Um pouco ao sul do Desembarque Ginkgo.',
      ),
      site(
        'std-co-deadwood',
        'cobalt',
        'deadwood-haunt',
        'Deadwood Haunt',
        'Assombração do Lenho Morto',
        'At Deadwood Haunt.',
        'Na Assombração do Lenho Morto.',
      ),
      site(
        'std-co-windbreak-e',
        'cobalt',
        'windbreak-stand',
        'East of Windbreak Stand',
        'Leste do Posto Quebra-vento',
        'East from Windbreak Stand.',
        'A leste do Posto Quebra-vento.',
      ),
      site(
        'std-co-islespy',
        'cobalt',
        'islespy-shore',
        'Islespy Shore',
        'Costa Islespy',
        'At Islespy Shore.',
        'Na Costa Islespy.',
      ),
    ],
    pokemon: [
      mon(81, 'Magnemite', 'Magnemite', 'rare'),
      mon(82, 'Magneton', 'Magneton', 'rare'),
      mon(462, 'Magnezone', 'Magnezone', 'rare'),
      mon(134, 'Vaporeon', 'Vaporeon', 'exclusive'),
      mon(136, 'Flareon', 'Flareon', 'exclusive'),
      mon(133, 'Eevee', 'Eevee', 'common'),
      mon(64, 'Kadabra', 'Kadabra', 'common'),
      mon(65, 'Alakazam', 'Alakazam', 'common'),
      mon(122, 'Mr. Mime', 'Mr. Mime', 'common'),
      mon(112, 'Rhydon', 'Rhydon', 'common'),
      mon(464, 'Rhyperior', 'Rhyperior', 'common'),
      mon(455, 'Carnivine', 'Carnivine', 'common'),
      mon(435, 'Skuntank', 'Skuntank', 'common'),
    ],
  },
  {
    regionId: 'coronet',
    sites: [
      site(
        'std-cn-quarry',
        'coronet',
        'ancient-quarry',
        'Ancient Quarry',
        'Pedreira Antiga',
        'Top of the Ancient Quarry.',
        'Topo da Pedreira Antiga.',
      ),
      site(
        'std-cn-celestica',
        'coronet',
        'celestica-trail',
        'Celestica Trail / Sonorous Path',
        'Trilha Celestica / Caminho Sonoro',
        'Between Celestica Trail and Sonorous Path.',
        'Entre a Trilha Celestica e o Caminho Sonoro.',
      ),
      site(
        'std-cn-plaza-s',
        'coronet',
        'sacred-plaza',
        'South of Sacred Plaza',
        'Sul da Praça Sagrada',
        'Short distance south from Sacred Plaza.',
        'Um pouco ao sul da Praça Sagrada.',
      ),
      site(
        'std-cn-bolderoll',
        'coronet',
        'bolderoll-ravine',
        'Bolderoll Ravine',
        'Ravina Bolderoll',
        'At Bolderoll Ravine.',
        'Na Ravina Bolderoll.',
      ),
      site(
        'std-cn-plaza-e',
        'coronet',
        'sacred-plaza',
        'East of Sacred Plaza',
        'Leste da Praça Sagrada',
        'East from Sacred Plaza.',
        'A leste da Praça Sagrada.',
      ),
    ],
    pokemon: [
      mon(135, 'Jolteon', 'Jolteon', 'exclusive'),
      mon(700, 'Sylveon', 'Sylveon', 'exclusive'),
      mon(467, 'Magmortar', 'Magmortar', 'exclusive'),
      mon(408, 'Cranidos', 'Cranidos', 'rare'),
      mon(409, 'Rampardos', 'Rampardos', 'rare'),
      mon(410, 'Shieldon', 'Shieldon', 'rare'),
      mon(411, 'Bastiodon', 'Bastiodon', 'rare'),
      mon(722, 'Rowlet', 'Rowlet', 'postgame'),
      mon(723, 'Dartrix', 'Dartrix', 'postgame'),
      mon(724, 'Hisuian Decidueye', 'Decidueye de Hisui', 'postgame', 10244),
      mon(133, 'Eevee', 'Eevee', 'common'),
      mon(424, 'Ambipom', 'Ambipom', 'common'),
      mon(452, 'Drapion', 'Drapion', 'common'),
      mon(356, 'Dusclops', 'Dusclops', 'common'),
      mon(477, 'Dusknoir', 'Dusknoir', 'common'),
      mon(126, 'Magmar', 'Magmar', 'common'),
      mon(224, 'Octillery', 'Octillery', 'common'),
    ],
  },
  {
    regionId: 'alabaster',
    sites: [
      site(
        'std-al-bonechill',
        'alabaster',
        'bonechill-wastes',
        'Near Bonechill Wastes',
        'Perto dos Ermos Gélidos',
        'Near Bonechill Wastes.',
        'Perto dos Ermos Gélidos.',
      ),
      site(
        'std-al-arena-w',
        'alabaster',
        'arenas-approach',
        'West Arena’s Approach',
        'Oeste do Acesso à Arena',
        'West side of Arena’s Approach.',
        'Lado oeste do Acesso à Arena.',
      ),
      site(
        'std-al-arena-e',
        'alabaster',
        'arenas-approach',
        'East Arena’s Approach',
        'Leste do Acesso à Arena',
        'East side of Arena’s Approach.',
        'Lado leste do Acesso à Arena.',
      ),
      site(
        'std-al-avalugg',
        'alabaster',
        'avaluggs-legacy',
        'Avalugg’s Legacy',
        'Legado de Avalugg',
        'At Avalugg’s Legacy.',
        'No Legado de Avalugg.',
      ),
      site(
        'std-al-avalugg-e',
        'alabaster',
        'avaluggs-legacy',
        'East of Avalugg’s Legacy',
        'Leste do Legado de Avalugg',
        'East from Avalugg’s Legacy.',
        'A leste do Legado de Avalugg.',
      ),
      site(
        'std-al-hearts',
        'alabaster',
        'hearts-crag',
        'Heart’s Crag',
        'Penhasco do Coração',
        'At Heart’s Crag.',
        'No Penhasco do Coração.',
      ),
    ],
    pokemon: [
      mon(196, 'Espeon', 'Espeon', 'exclusive'),
      mon(471, 'Glaceon', 'Glaceon', 'exclusive'),
      mon(212, 'Scizor', 'Scizor', 'rare'),
      mon(501, 'Oshawott', 'Oshawott', 'postgame'),
      mon(502, 'Dewott', 'Dewott', 'postgame'),
      mon(503, 'Hisuian Samurott', 'Samurott de Hisui', 'postgame', 10236),
      mon(133, 'Eevee', 'Eevee', 'common'),
      mon(25, 'Pikachu', 'Pikachu', 'common'),
      mon(26, 'Raichu', 'Raichu', 'common'),
      mon(125, 'Electabuzz', 'Electabuzz', 'common'),
      mon(466, 'Electivire', 'Electivire', 'common'),
      mon(78, 'Rapidash', 'Rapidash', 'common'),
      mon(364, 'Sealeo', 'Sealeo', 'common'),
      mon(365, 'Walrein', 'Walrein', 'common'),
      mon(123, 'Scyther', 'Scyther', 'common'),
      mon(465, 'Tangrowth', 'Tangrowth', 'common'),
    ],
  },
]

export function distortionSpawnsForRegion(regionId: HisuiRegionId): LaDistortionSpawn[] {
  return LA_DISTORTIONS.find((d) => d.regionId === regionId)?.pokemon ?? []
}
