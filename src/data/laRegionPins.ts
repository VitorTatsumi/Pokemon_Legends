import type { HisuiRegionId } from './hisuiRegions'
import type { Localized } from './laCollectible'

/** Normalized pin used by region/subregion collectible guides. */
export type LaRegionPin = {
  id: string
  name: Localized
  description?: Localized
  note?: Localized
  regionId: HisuiRegionId
  subregionId: string
  /** Optional overview coords (Hisui map). */
  map?: { x: number; y: number }
  /** Optional detail-map coords (preferred when showing a region map). */
  detailMap?: { x: number; y: number }
  /** Short label on detail pins (e.g. Unown letter, wisp number). */
  markerLabel?: string
  /** Extra fact rows in the detail panel. */
  facts?: { label: Localized; value: Localized }[]
  /** PokeAPI sprite id (national dex or form id). */
  spriteId?: number
  /** Optional second sprite (e.g. Dialga / Palkia). */
  spriteIdAlt?: number
  /** Local icon (e.g. distortion rift) used instead of a Pokémon sprite. */
  iconSrc?: string
  /** Region / arena map preview shown in details. */
  locationImageSrc?: string
  /** Optional spawn roster (e.g. Space-Time Distortion pools). */
  spawns?: {
    dex: number
    spriteId?: number
    name: Localized
    note?: Localized
  }[]
}

export function pinsForRegion(pins: LaRegionPin[], regionId: string) {
  return pins.filter((p) => p.regionId === regionId)
}

export function pinsForSubregion(pins: LaRegionPin[], subregionId: string) {
  return pins.filter((p) => p.subregionId === subregionId)
}

export function pinCountByRegion(pins: LaRegionPin[]) {
  const counts: Partial<Record<HisuiRegionId, number>> = {}
  for (const p of pins) {
    counts[p.regionId] = (counts[p.regionId] ?? 0) + 1
  }
  return counts
}

export function pinCountBySubregion(pins: LaRegionPin[], regionId: string) {
  const counts: Record<string, number> = {}
  for (const p of pins) {
    if (p.regionId !== regionId) continue
    counts[p.subregionId] = (counts[p.subregionId] ?? 0) + 1
  }
  return counts
}

export function pinMapPosition(
  pin: LaRegionPin,
  subMap: { x: number; y: number },
  siblingsAtSub: LaRegionPin[],
): { x: number; y: number } {
  if (pin.detailMap) return { x: pin.detailMap.x, y: pin.detailMap.y }
  const idx = siblingsAtSub.findIndex((p) => p.id === pin.id)
  const total = siblingsAtSub.length
  if (total <= 1 || idx < 0) return { x: subMap.x, y: subMap.y }
  const angle = (idx / total) * Math.PI * 2
  const radius = 2.0 + (idx % 4) * 0.4
  return {
    x: Math.min(96, Math.max(4, subMap.x + Math.cos(angle) * radius)),
    y: Math.min(96, Math.max(4, subMap.y + Math.sin(angle) * radius)),
  }
}
