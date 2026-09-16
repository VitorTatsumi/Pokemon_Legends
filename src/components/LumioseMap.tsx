import { useMemo, useRef, useState } from 'react'
import { MapZoomControls } from './MapZoomControls'
import { SchematicCity } from './SchematicCity'
import { WILD_ZONES } from '../data/wildZones'
import { useMapZoom } from '../hooks/useMapZoom'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './LumioseMap.css'

const MAP_SRC = '/lumiose-map.png'

type Props = {
  locale: Locale
  selectedId: number | null
  onSelect: (id: number) => void
  progressByZone: Record<number, { caught: number; total: number }>
}

export function LumioseMap({ locale, selectedId, onSelect, progressByZone }: Props) {
  const [imageOk, setImageOk] = useState(true)
  const markers = useMemo(() => WILD_ZONES, [])
  const viewportRef = useRef<HTMLDivElement>(null)
  const zoomApi = useMapZoom(viewportRef)

  return (
    <div className="map-shell">
      <div className="map-toolbar">
        <div>
          <h2>{t(locale, 'mapTitle')}</h2>
          <p>{t(locale, 'mapHint')}</p>
        </div>
      </div>

      <div
        ref={viewportRef}
        className={['map-viewport', zoomApi.isZoomed ? 'is-zoomed' : ''].filter(Boolean).join(' ')}
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
          <div className="map-disc map-disc--photo">
            <img
              className="map-photo"
              src={MAP_SRC}
              alt={t(locale, 'mapTitle')}
              onLoad={() => setImageOk(true)}
              onError={() => setImageOk(false)}
              draggable={false}
            />
            {!imageOk && <SchematicCity />}

            {markers.map((zone) => {
              const prog = progressByZone[zone.id]
              const done = prog && prog.caught === prog.total && prog.total > 0
              return (
                <button
                  key={zone.id}
                  type="button"
                  className={[
                    'zone-marker',
                    selectedId === zone.id ? 'is-selected' : '',
                    done ? 'is-complete' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={{
                    left: `${zone.map.x}%`,
                    top: `${zone.map.y}%`,
                  }}
                  onClick={() => onSelect(zone.id)}
                  onPointerDown={(event) => event.stopPropagation()}
                  aria-label={`${t(locale, 'wildZone')} ${zone.id}`}
                >
                  <span>{zone.id}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
