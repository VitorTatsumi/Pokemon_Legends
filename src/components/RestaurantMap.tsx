import { useMemo, useRef, useState, type ReactNode } from 'react'
import { RESTAURANTS } from '../data/restaurants'
import { useMapZoom } from '../hooks/useMapZoom'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import { MapZoomControls } from './MapZoomControls'
import { SchematicCity } from './SchematicCity'
import './LumioseMap.css'
import './RestaurantMap.css'

const MAP_SRC = '/lumiose-map.png'

type Props = {
  locale: Locale
  selectedId: number | null
  onSelect: (id: number) => void
  toolbarExtra?: ReactNode
}

export function RestaurantMap({ locale, selectedId, onSelect, toolbarExtra }: Props) {
  const [imageOk, setImageOk] = useState(true)
  const viewportRef = useRef<HTMLDivElement>(null)
  const zoomApi = useMapZoom(viewportRef)
  const markers = useMemo(() => RESTAURANTS, [])

  return (
    <div className="map-shell">
      <div className="map-toolbar">
        <div>
          <h2>{t(locale, 'restaurantsTitle')}</h2>
          <p>{t(locale, 'restaurantsHint')}</p>
        </div>
        {toolbarExtra}
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
              alt={t(locale, 'restaurantsTitle')}
              onLoad={() => setImageOk(true)}
              onError={() => setImageOk(false)}
              draggable={false}
            />
            {!imageOk && <SchematicCity />}
            {markers.map((restaurant) => (
              <button
                key={restaurant.id}
                type="button"
                className={[
                  'restaurant-marker',
                  selectedId === restaurant.id ? 'is-selected' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={{ left: `${restaurant.map.x}%`, top: `${restaurant.map.y}%` }}
                onClick={() => onSelect(restaurant.id)}
                onPointerDown={(event) => event.stopPropagation()}
                aria-label={restaurant.name[locale]}
                title={restaurant.name[locale]}
              >
                <img src="/restaurant.svg" alt="" draggable={false} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
