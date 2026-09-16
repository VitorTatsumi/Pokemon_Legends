import { useMemo, useRef } from 'react'
import {
  getHisuiRegion,
  HISUI_REGIONS,
  type HisuiRegionId,
} from '../data/hisuiRegions'
import type { LaMission, LaMissionKind } from '../data/laMissions'
import {
  laMissionCountByRegion,
  laMissionMapPosition,
  laMissionsForRegion,
} from '../data/laMissions'
import { useMapZoom } from '../hooks/useMapZoom'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import { MapZoomControls } from './MapZoomControls'
import './LumioseMap.css'
import './HisuiMap.css'
import './MissionMap.css'

const MAP_SRC = '/hisui-map.png'
const MAP_ASPECT = 1200 / 675

type Props = {
  locale: Locale
  selectedRegionId: HisuiRegionId | null
  detailRegionId: HisuiRegionId | null
  kind: LaMissionKind
  selectedId: string | null
  completed: Record<string, boolean>
  hideCompleted: boolean
  onSelectRegion: (id: HisuiRegionId) => void
  onOpenDetail: (id: HisuiRegionId) => void
  onClearRegion: () => void
  onCloseDetail: () => void
  onSelectMission: (id: string) => void
}

export function LaMissionMap({
  locale,
  selectedRegionId,
  detailRegionId,
  kind,
  selectedId,
  completed,
  hideCompleted,
  onSelectRegion,
  onOpenDetail,
  onClearRegion,
  onCloseDetail,
  onSelectMission,
}: Props) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const zoomApi = useMapZoom(viewportRef)
  const selected = HISUI_REGIONS.find((r) => r.id === selectedRegionId) ?? null
  const detailRegion = getHisuiRegion(detailRegionId)
  const showingDetail = Boolean(detailRegion?.detailMapSrc)
  const expanded = selected != null && !showingDetail
  const regionCounts = useMemo(() => laMissionCountByRegion(kind), [kind])

  const detailMarkers = useMemo(() => {
    if (!detailRegion) return []
    const missions = laMissionsForRegion(detailRegion.id, kind).filter((m) =>
      hideCompleted ? !completed[m.id] : true,
    )
    const bySub = new Map<string, LaMission[]>()
    for (const m of missions) {
      const list = bySub.get(m.subregionId) ?? []
      list.push(m)
      bySub.set(m.subregionId, list)
    }
    const out: { mission: LaMission; x: number; y: number }[] = []
    for (const [subId, siblings] of bySub) {
      const sub = detailRegion.subregions.find((s) => s.id === subId)
      if (!sub?.map) continue
      for (const mission of siblings) {
        out.push({
          mission,
          ...laMissionMapPosition(mission, sub.map, siblings),
        })
      }
    }
    return out
  }, [completed, detailRegion, hideCompleted, kind])

  return (
    <div className="map-shell hisui-map">
      <div className="map-toolbar">
        <div>
          <h2>
            {showingDetail ? detailRegion!.name[locale] : t(locale, 'laMissionsTitle')}
          </h2>
          <p>
            {showingDetail
              ? t(locale, 'laMissionsDetailHint')
              : expanded
                ? t(locale, 'laMissionsExpandedHint')
                : t(locale, 'laMissionsHint')}
          </p>
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
              {detailMarkers.map(({ mission, x, y }) => (
                <button
                  key={mission.id}
                  type="button"
                  className={[
                    'mission-marker',
                    mission.kind === 'main' ? 'mission-marker--main' : 'mission-marker--side',
                    selectedId === mission.id ? 'is-selected' : '',
                    completed[mission.id] ? 'is-completed' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  onClick={() => {
                    if (zoomApi.shouldIgnoreClick()) return
                    onSelectMission(mission.id)
                  }}
                  onPointerDown={(event) => event.stopPropagation()}
                  aria-label={`${mission.kind === 'main' ? t(locale, 'laMainMission') : t(locale, 'laSideMission')} ${mission.number}: ${mission.name[locale]}`}
                  title={mission.name[locale]}
                >
                  <span>
                    {mission.kind === 'main' ? 'M' : 'P'}
                    {mission.number}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="hisui-map__frame">
              <img
                className="hisui-map__photo"
                src={MAP_SRC}
                alt={t(locale, 'laMissionsTitle')}
                draggable={false}
              />
              {HISUI_REGIONS.map((region) => {
                const isSelected = region.id === selectedRegionId
                const count = regionCounts[region.id] ?? 0
                return (
                  <button
                    key={region.id}
                    type="button"
                    className={[
                      'hisui-region-hit',
                      isSelected ? 'is-selected' : '',
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
                      // Single click only highlights/filters — detail map needs double-click.
                      onSelectRegion(region.id)
                    }}
                    onDoubleClick={(event) => {
                      event.preventDefault()
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
                    key={`${region.id}-label`}
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
                      region.detailMapSrc
                        ? t(locale, 'hisuiDoubleClickDetail')
                        : undefined
                    }
                    onClick={() => {
                      if (zoomApi.shouldIgnoreClick()) return
                      onSelectRegion(region.id)
                    }}
                    onDoubleClick={(event) => {
                      event.preventDefault()
                      if (!region.detailMapSrc) return
                      if (zoomApi.shouldIgnoreClick()) return
                      onOpenDetail(region.id)
                    }}
                    onPointerDown={(event) => event.stopPropagation()}
                  >
                    <span className="hisui-region-label__pin" aria-hidden />
                    <span className="hisui-region-label__text">
                      <strong>{region.name[locale]}</strong>
                      <small>
                        {count}{' '}
                        {kind === 'side'
                          ? count === 1
                            ? t(locale, 'laSideMission').toLowerCase()
                            : t(locale, 'laMissionsSide').toLowerCase()
                          : count === 1
                            ? t(locale, 'laMissionSingular')
                            : t(locale, 'laMissionPlural')}
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
