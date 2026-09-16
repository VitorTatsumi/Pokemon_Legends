import { useMemo, useRef } from 'react'
import {
  getHisuiRegion,
  HISUI_REGIONS,
  type HisuiRegionId,
} from '../data/hisuiRegions'
import {
  type LaRegionPin,
  pinCountByRegion,
  pinMapPosition,
  pinsForRegion,
} from '../data/laRegionPins'
import { useMapZoom } from '../hooks/useMapZoom'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import { MapZoomControls } from './MapZoomControls'
import './LumioseMap.css'
import './HisuiMap.css'
import './LaPinGuide.css'

const MAP_SRC = '/hisui-map.png'
const MAP_ASPECT = 1200 / 675

type Props = {
  locale: Locale
  title: string
  hint: string
  expandedHint: string
  detailHint: string
  itemLabel: string
  pins: LaRegionPin[]
  markerClassName: string
  /** Category-specific pin icon (SVG in /public). */
  markerIconSrc?: string
  selectedRegionId: HisuiRegionId | null
  detailRegionId: HisuiRegionId | null
  selectedSubregionId: string | null
  selectedId: string | null
  completed: Record<string, boolean>
  hideDone: boolean
  onSelectRegion: (id: HisuiRegionId) => void
  onOpenDetail: (id: HisuiRegionId) => void
  onClearRegion: () => void
  onCloseDetail: () => void
  onSelectSubregion: (id: string) => void
  onSelectPin: (id: string) => void
}

export function LaRegionCollectibleMap({
  locale,
  title,
  hint,
  expandedHint,
  detailHint,
  itemLabel,
  pins,
  markerClassName,
  markerIconSrc,
  selectedRegionId,
  detailRegionId,
  selectedSubregionId: _selectedSubregionId,
  selectedId,
  completed,
  hideDone,
  onSelectRegion,
  onOpenDetail,
  onClearRegion,
  onCloseDetail,
  onSelectSubregion,
  onSelectPin,
}: Props) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const zoomApi = useMapZoom(viewportRef)
  const selected = HISUI_REGIONS.find((r) => r.id === selectedRegionId) ?? null
  const detailRegion = getHisuiRegion(detailRegionId)
  const showingDetail = Boolean(detailRegion?.detailMapSrc)
  const expanded = selected != null && !showingDetail
  const regionCounts = useMemo(() => pinCountByRegion(pins), [pins])

  /** All item pins for the open region (no subregion markers). */
  const detailMarkers = useMemo(() => {
    if (!detailRegion) return []
    const scoped = pinsForRegion(pins, detailRegion.id).filter((p) =>
      hideDone ? !completed[p.id] : true,
    )
    const bySub = new Map<string, LaRegionPin[]>()
    for (const p of scoped) {
      const list = bySub.get(p.subregionId) ?? []
      list.push(p)
      bySub.set(p.subregionId, list)
    }
    const placed: { pin: LaRegionPin; x: number; y: number }[] = []
    for (const pin of scoped) {
      if (pin.detailMap) {
        placed.push({ pin, x: pin.detailMap.x, y: pin.detailMap.y })
        continue
      }
      const sub = detailRegion.subregions.find((s) => s.id === pin.subregionId)
      if (!sub?.map) continue
      const siblings = bySub.get(pin.subregionId) ?? [pin]
      placed.push({ pin, ...pinMapPosition(pin, sub.map, siblings) })
    }
    return placed
  }, [completed, detailRegion, hideDone, pins])

  return (
    <div className="map-shell hisui-map">
      <div className="map-toolbar">
        <div>
          <h2>{showingDetail ? detailRegion!.name[locale] : title}</h2>
          <p>{showingDetail ? detailHint : expanded ? expandedHint : hint}</p>
        </div>
        {(expanded || showingDetail) && (
          <div className="map-toolbar__actions">
            <button type="button" onClick={showingDetail ? onCloseDetail : onClearRegion}>
              {t(locale, 'hisuiBackOverview')}
            </button>
          </div>
        )}
      </div>

      <div
        ref={viewportRef}
        className={['map-viewport', 'hisui-map__viewport', zoomApi.isZoomed ? 'is-zoomed' : '']
          .filter(Boolean)
          .join(' ')}
        onPointerDown={zoomApi.onPointerDown}
        onPointerMove={zoomApi.onPointerMove}
        onPointerUp={zoomApi.onPointerUp}
        onPointerCancel={zoomApi.onPointerCancel}
      >
        <MapZoomControls
          locale={locale}
          canZoomIn={zoomApi.canZoomIn}
          canZoomOut={zoomApi.canZoomOut}
          isZoomed={zoomApi.isZoomed}
          onZoomIn={zoomApi.zoomIn}
          onZoomOut={zoomApi.zoomOut}
          onReset={zoomApi.reset}
        />

        <div
          className="map-stage"
          style={{
            transform: `translate(${zoomApi.pan.x}px, ${zoomApi.pan.y}px) scale(${zoomApi.zoom})`,
          }}
        >
          {showingDetail ? (
            <div
              className="hisui-map__frame hisui-map__frame--detail"
              style={{
                ['--hisui-detail-aspect' as string]: String(
                  detailRegion!.detailMapAspect ?? 1,
                ),
              }}
            >
              <img
                className="hisui-map__photo"
                src={detailRegion!.detailMapSrc}
                alt={detailRegion!.name[locale]}
                draggable={false}
              />
              {detailMarkers.map(({ pin, x, y }) => (
                <button
                  key={pin.id}
                  type="button"
                  className={[
                    markerClassName,
                    selectedId === pin.id ? 'is-selected' : '',
                    completed[pin.id] ? 'is-done' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  onClick={() => {
                    if (zoomApi.shouldIgnoreClick()) return
                    onSelectSubregion(pin.subregionId)
                    onSelectPin(pin.id)
                  }}
                  onPointerDown={(event) => event.stopPropagation()}
                  aria-label={pin.name[locale]}
                  title={pin.name[locale]}
                >
                  {markerIconSrc ? (
                    <img
                      className="la-pin-marker__icon"
                      src={markerIconSrc}
                      alt=""
                      draggable={false}
                    />
                  ) : (
                    <span>{pin.markerLabel ?? pin.name.en.slice(0, 2)}</span>
                  )}
                </button>
              ))}
            </div>
          ) : (
            <div className="hisui-map__frame">
              <img className="hisui-map__photo" src={MAP_SRC} alt={title} draggable={false} />
              {HISUI_REGIONS.map((region) => {
                const isSelected = region.id === selectedRegionId
                const count = regionCounts[region.id] ?? 0
                return (
                  <button
                    key={`hit-${region.id}`}
                    type="button"
                    className={[
                      'hisui-region-hit',
                      isSelected ? 'is-selected' : '',
                      expanded && !isSelected ? 'is-muted' : '',
                      region.detailMapSrc ? 'has-detail' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    style={{
                      ...hitStyle(region.center.x, region.center.y, region.radius),
                      ['--hisui-accent' as string]: region.accent,
                    }}
                    aria-label={`${region.name[locale]} (${count})`}
                    title={
                      region.detailMapSrc
                        ? t(locale, 'hisuiDoubleClickDetail')
                        : region.name[locale]
                    }
                    onClick={() => {
                      if (zoomApi.shouldIgnoreClick()) return
                      onSelectRegion(region.id)
                    }}
                    onDoubleClick={() => {
                      if (!region.detailMapSrc) return
                      if (zoomApi.shouldIgnoreClick()) return
                      onOpenDetail(region.id)
                    }}
                    onPointerDown={(event) => event.stopPropagation()}
                  />
                )
              })}
              {HISUI_REGIONS.map((region) => {
                const isSelected = region.id === selectedRegionId
                const count = regionCounts[region.id] ?? 0
                return (
                  <button
                    key={`label-${region.id}`}
                    type="button"
                    className={[
                      'hisui-region-label',
                      isSelected ? 'is-selected' : '',
                      expanded && !isSelected ? 'is-muted' : '',
                      region.detailMapSrc ? 'has-detail' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    style={{
                      left: `${region.center.x}%`,
                      top: `${region.center.y}%`,
                      ['--hisui-accent' as string]: region.accent,
                    }}
                    title={
                      region.detailMapSrc ? t(locale, 'hisuiDoubleClickDetail') : undefined
                    }
                    onClick={() => {
                      onSelectRegion(region.id)
                    }}
                    onDoubleClick={() => {
                      if (!region.detailMapSrc) return
                      onOpenDetail(region.id)
                    }}
                    onPointerDown={(event) => event.stopPropagation()}
                  >
                    <span className="hisui-region-label__pin" aria-hidden />
                    <span className="hisui-region-label__text">
                      <strong>{region.name[locale]}</strong>
                      <small>
                        {count} {itemLabel}
                      </small>
                    </span>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function hitStyle(x: number, y: number, radius: number) {
  const radiusY = radius * MAP_ASPECT
  return {
    left: `${x}%`,
    top: `${y}%`,
    width: `${radius * 2}%`,
    height: `${radiusY * 2}%`,
  }
}
