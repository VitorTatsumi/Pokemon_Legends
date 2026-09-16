import { useMemo, useRef } from 'react'
import {
  HISUI_REGIONS,
  type HisuiRegionId,
} from '../data/hisuiRegions'
import { useMapZoom } from '../hooks/useMapZoom'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import { MapZoomControls } from './MapZoomControls'
import './LumioseMap.css'
import './HisuiMap.css'
import './LaPinGuide.css'

export type LaPinMarker = {
  id: string
  label: string
  regionId: HisuiRegionId
  map: { x: number; y: number }
  done?: boolean
}

type Props = {
  locale: Locale
  title: string
  hint: string
  markers: LaPinMarker[]
  selectedId: string | null
  regionFilter: HisuiRegionId | 'all'
  hideDone: boolean
  onSelect: (id: string) => void
  markerClassName?: string
}

export function LaPinMap({
  locale,
  title,
  hint,
  markers,
  selectedId,
  regionFilter,
  hideDone,
  onSelect,
  markerClassName = 'la-pin-marker',
}: Props) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const zoomApi = useMapZoom(viewportRef)

  const visible = useMemo(
    () =>
      markers.filter((m) => {
        if (regionFilter !== 'all' && m.regionId !== regionFilter) return false
        if (hideDone && m.done) return false
        return true
      }),
    [hideDone, markers, regionFilter],
  )

  return (
    <div className="map-shell">
      <div className="map-toolbar">
        <div>
          <h2>{title}</h2>
          <p>{hint}</p>
        </div>
      </div>

      <div
        ref={viewportRef}
        className={['map-viewport', zoomApi.isZoomed ? 'is-zoomed' : '']
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
          <div className="map-disc map-disc--photo hisui-map-disc">
            <img
              className="map-photo"
              src="/hisui-map.png"
              alt={title}
              draggable={false}
            />
            {HISUI_REGIONS.map((region) => (
              <div
                key={region.id}
                className="hisui-region-glow"
                style={{
                  left: `${region.center.x}%`,
                  top: `${region.center.y}%`,
                  width: `${region.radius * 2}%`,
                  paddingBottom: `${region.radius * 2}%`,
                  ['--hisui-accent' as string]: region.accent,
                  opacity: regionFilter === 'all' || regionFilter === region.id ? 0.35 : 0.1,
                }}
              />
            ))}
            {visible.map((m) => (
              <button
                key={m.id}
                type="button"
                className={[
                  markerClassName,
                  selectedId === m.id ? 'is-selected' : '',
                  m.done ? 'is-done' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={{ left: `${m.map.x}%`, top: `${m.map.y}%` }}
                onClick={() => onSelect(m.id)}
                onPointerDown={(e) => e.stopPropagation()}
                title={m.label}
                aria-label={m.label}
              >
                <span>{m.label.slice(0, 2)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
