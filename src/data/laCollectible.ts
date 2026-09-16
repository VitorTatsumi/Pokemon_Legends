import type { HisuiRegionId } from './hisuiRegions'

export type Localized = { en: string; pt: string }

/** Shared pin for Hisui overview / region-filtered lists. */
export type LaPinItem = {
  id: string
  name: Localized
  description?: Localized
  regionId: HisuiRegionId
  subregionId: string
  /** Percent on Hisui overview map */
  map: { x: number; y: number }
  /** Percent on the region's detail map (MapGenie-calibrated). */
  detailMap?: { x: number; y: number }
  note?: Localized
}

export type LaCollectibleKind =
  | 'wisps'
  | 'unowns'
  | 'alphas'
  | 'outbreaks'
  | 'camps'
  | 'legendaries'
  | 'solitude'
  | 'crafts'
