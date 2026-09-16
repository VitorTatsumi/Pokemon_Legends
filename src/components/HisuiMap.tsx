import { useRef } from 'react'
import {
  getHisuiRegion,
  HISUI_REGIONS,
  type HisuiRegionId,
} from '../data/hisuiRegions'
import { spawnsForSubregion } from '../data/laSpawns'
import { useMapZoom } from '../hooks/useMapZoom'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import { MapZoomControls } from './MapZoomControls'
import './LumioseMap.css'
import './HisuiMap.css'

const MAP_SRC = '/hisui-map.png'
/** Map image aspect (1200×675) — used so circular hit areas stay round. */
const MAP_ASPECT = 1200 / 675

type Props = {
  locale: Locale
  selectedRegionId: HisuiRegionId | null
  detailRegionId: HisuiRegionId | null
  selectedSubregionId: string | null
  onSelectRegion: (id: HisuiRegionId) => void
  onSelectSubregion: (id: string) => void
  onOpenDetail: (id: HisuiRegionId) => void
  onClearRegion: () => void
  onCloseDetail: () => void
}

export function HisuiMap({
  locale,
  selectedRegionId,
  detailRegionId,
  selectedSubregionId,
  onSelectRegion,
  onSelectSubregion,
  onOpenDetail,
  onClearRegion,
  onCloseDetail,
}: Props) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const zoomApi = useMapZoom(viewportRef)
  const selected = HISUI_REGIONS.find((r) => r.id === selectedRegionId) ?? null
  const detailRegion = getHisuiRegion(detailRegionId)
  const showingDetail = Boolean(detailRegion?.detailMapSrc)
  const expanded = selected != null && !showingDetail

  return (
    <div className="map-shell hisui-map">
      <div className="map-toolbar">
        <div>
          <h2>
            {showingDetail
              ? detailRegion!.name[locale]
              : t(locale, 'hisuiMapTitle')}
          </h2>
          <p>
            {showingDetail
              ? t(locale, 'hisuiDetailMapHint')
              : expanded
                ? t(locale, 'hisuiMapExpandedHint')
                : t(locale, 'hisuiMapHint')}
          </p>
        </div>
        {(expanded || showingDetail) && (
          <div className="map-toolbar__actions">
            <button
              type="button"
              onClick={showingDetail ? onCloseDetail : onClearRegion}
            >
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
              {detailRegion!.subregions.map((sub, index) => {
                if (!sub.map) return null
                const spawnCount = spawnsForSubregion(sub.id)?.pokemon.length ?? 0
                return (
                  <button
                    key={sub.id}
                    type="button"
                    className={[
                      'hisui-sub-marker',
                      selectedSubregionId === sub.id ? 'is-selected' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    style={{
                      left: `${sub.map.x}%`,
                      top: `${sub.map.y}%`,
                    }}
                    aria-label={
                      spawnCount > 0
                        ? `${sub.name[locale]} (${spawnCount})`
                        : sub.name[locale]
                    }
                    aria-pressed={selectedSubregionId === sub.id}
                    title={
                      spawnCount > 0
                        ? `${sub.name[locale]} · ${spawnCount} Pokémon`
                        : sub.name[locale]
                    }
                    onClick={() => {
                      if (zoomApi.shouldIgnoreClick()) return
                      onSelectSubregion(sub.id)
                    }}
                    onPointerDown={(event) => event.stopPropagation()}
                  >
                    <span>{index + 1}</span>
                    {spawnCount > 0 ? (
                      <span className="hisui-sub-marker__count" aria-hidden>
                        {spawnCount > 99 ? '99+' : spawnCount}
                      </span>
                    ) : null}
                  </button>
                )
              })}
            </div>
          ) : (
            <div className="hisui-map__frame">
              <img
                className="hisui-map__photo"
                src={MAP_SRC}
                alt={t(locale, 'hisuiMapTitle')}
                draggable={false}
              />

              {HISUI_REGIONS.map((region) => {
                const isSelected = region.id === selectedRegionId
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
                    aria-label={region.name[locale]}
                    aria-pressed={isSelected}
                    title={
                      region.detailMapSrc
                        ? t(locale, 'hisuiDoubleClickDetail')
                        : undefined
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
                      region.detailMapSrc
                        ? t(locale, 'hisuiDoubleClickDetail')
                        : undefined
                    }
                    onClick={() => onSelectRegion(region.id)}
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
                        {region.detailMapSrc
                          ? t(locale, 'hisuiDetailMapBadge')
                          : `${region.subregions.length} ${t(locale, 'hisuiSubregionsShort')}`}
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
  // radius is % of width; convert height % so the hit area stays circular
  const radiusY = radius * MAP_ASPECT
  return {
    left: `${x}%`,
    top: `${y}%`,
    width: `${radius * 2}%`,
    height: `${radiusY * 2}%`,
  }
}
