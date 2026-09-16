import { useMemo, useRef, useState, type ReactNode } from 'react'
import type { CenterDistrict } from '../data/pokemonCenters'
import { POKEMON_CENTERS } from '../data/pokemonCenters'
import { useMapZoom } from '../hooks/useMapZoom'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import { MapZoomControls } from './MapZoomControls'
import { SchematicCity } from './SchematicCity'
import './LumioseMap.css'
import './CenterMap.css'

const MAP_SRC = '/lumiose-map.png'

type Props = {
  locale: Locale
  selectedId: number | null
  district: CenterDistrict | 'all'
  onSelect: (id: number) => void
  toolbarExtra?: ReactNode
}

export function CenterMap({ locale, selectedId, district, onSelect, toolbarExtra }: Props) {
  const [imageOk, setImageOk] = useState(true)
  const viewportRef = useRef<HTMLDivElement>(null)
  const zoomApi = useMapZoom(viewportRef)
  const markers = useMemo(
    () =>
      district === 'all'
        ? POKEMON_CENTERS
        : POKEMON_CENTERS.filter((c) => c.districtKey === district),
    [district],
  )

  return (
    <div className="map-shell">
      <div className="map-toolbar">
        <div>
          <h2>{t(locale, 'centersTitle')}</h2>
          <p>{t(locale, 'centersHint')}</p>
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
              alt={t(locale, 'centersTitle')}
              onLoad={() => setImageOk(true)}
              onError={() => setImageOk(false)}
              draggable={false}
            />
            {!imageOk && <SchematicCity />}
            {markers.map((center) => (
              <button
                key={center.id}
                type="button"
                className={[
                  'center-marker',
                  selectedId === center.id ? 'is-selected' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={{ left: `${center.map.x}%`, top: `${center.map.y}%` }}
                onClick={() => onSelect(center.id)}
                onPointerDown={(event) => event.stopPropagation()}
                aria-label={`${t(locale, 'pokemonCenter')} ${center.name[locale]}`}
                title={`${t(locale, 'pokemonCenter')} ${center.name[locale]}`}
              >
                <img src="/pokemon-center.svg" alt="" draggable={false} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
