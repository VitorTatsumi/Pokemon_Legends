import { getHisuiRegion, type HisuiRegionId } from './hisuiRegions'

type AliasTarget = string | Partial<Record<HisuiRegionId, string>>

/**
 * Fix outdated / approximate subregion ids used in collectible datasets.
 * String = same target in every region; object = per-region targets.
 */
const SUBREGION_ALIASES: Record<string, AliasTarget> = {
  oreburrow: 'oreburrow-tunnel',
  'ravaged-path': 'worn-bridge',
  'veildrift-grove': {
    cobalt: 'veilstone-cape',
    obsidian: 'grueling-grove',
  },
  'nature-space': 'nature-pantry',
  'aipoms-paradise': 'aipom-hills',
  'cloudbreaker-head': 'cloudcap-pass',
  'bonechill-valley': 'bonechill-wastes',
  'arena-approach': 'arenas-approach',
  'raveling-ravine': {
    coronet: 'bolderoll-ravine',
    obsidian: 'worn-bridge',
  },
  'acuity-cavern': 'lake-acuity',
  'hall-of-origin': 'spear-pillar',
  'hollys-hideaway': {
    cobalt: 'hideaway-bay',
    crimson: 'scarlet-bog',
  },
  'bravas-lookout': 'brava-arena',
  'crimson-room': 'scarlet-bog',
  'sandmark-beach': 'ginkgo-landing',
  'springs-path': 'spring-path',
  'boulders-roll': {
    crimson: 'bolderoll-slope',
    coronet: 'bolderoll-ravine',
  },
  'bolderoll-slope': {
    crimson: 'bolderoll-slope',
    coronet: 'bolderoll-ravine',
  },
  'heart-slope': 'hearts-crag',
  'vast-icebound-expanse': 'avalanche-slopes',
  'moonview-arena': {
    coronet: 'moonview-arena',
    alabaster: 'icepeak-arena',
  },
}

function pickAlias(
  alias: AliasTarget | undefined,
  regionId: HisuiRegionId,
): string | undefined {
  if (!alias) return undefined
  if (typeof alias === 'string') return alias
  return alias[regionId]
}

/** Resolve a collectible's subregion to a known Hisui subregion id. */
export function resolveSubregionId(
  regionId: HisuiRegionId,
  subregionId: string,
): string {
  const region = getHisuiRegion(regionId)
  if (!region) return subregionId
  if (region.subregions.some((s) => s.id === subregionId)) return subregionId

  const mapped = pickAlias(SUBREGION_ALIASES[subregionId], regionId)
  if (mapped && region.subregions.some((s) => s.id === mapped)) return mapped

  // Last resort: keep first mapped subregion so the pin still appears in the region.
  const withMap = region.subregions.find((s) => s.map)
  return withMap?.id ?? region.subregions[0]?.id ?? subregionId
}
