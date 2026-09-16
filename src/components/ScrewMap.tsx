import { useMemo, useRef, useState } from 'react'
import type { ScrewDistrict } from '../data/colorfulScrews'
import { COLORFUL_SCREWS } from '../data/colorfulScrews'
import { useMapZoom } from '../hooks/useMapZoom'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import { MapZoomControls } from './MapZoomControls'
import { SchematicCity } from './SchematicCity'
import './LumioseMap.css'
import './ScrewMap.css'

const MAP_SRC = '/lumiose-map.png'

type Props = {
  locale: Locale
  selectedId: number | null
  district: ScrewDistrict | 'all'
  hideCollected: boolean
  collected: Record<number, boolean>
  onSelect: (id: number) => void
}

export function ScrewMap({
  locale,
  selectedId,
  district,
  hideCollected,
  collected,
  onSelect,
}: Props) {
  const [imageOk, setImageOk] = useState(true)
  const viewportRef = useRef<HTMLDivElement>(null)
  const zoomApi = useMapZoom(viewportRef)
  const markers = useMemo(
    () =>
      COLORFUL_SCREWS.filter((s) => {
        if (district !== 'all' && s.districtKey !== district) return false
        if (hideCollected && collected[s.id]) return false
        return true
      }),
    [collected, district, hideCollected],
  )

  return (
    <div className="map-shell">
      <div className="map-toolbar">
        <div>
          <h2>{t(locale, 'screwsTitle')}</h2>
          <p>{t(locale, 'screwsHint')}</p>
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
              alt={t(locale, 'screwsTitle')}
              onLoad={() => setImageOk(true)}
              onError={() => setImageOk(false)}
              draggable={false}
            />
            {!imageOk && <SchematicCity />}
            {markers.map((screw) => (
              <button
                key={screw.id}
                type="button"
                className={[
                  'screw-marker',
                  selectedId === screw.id ? 'is-selected' : '',
                  collected[screw.id] ? 'is-collected' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={{ left: `${screw.map.x}%`, top: `${screw.map.y}%` }}
                onClick={() => onSelect(screw.id)}
                onPointerDown={(event) => event.stopPropagation()}
                aria-label={`${t(locale, 'colorfulScrew')} ${screw.id}`}
                title={`${t(locale, 'colorfulScrew')} ${screw.id}`}
              >
                <img src="/colorful-screw.png" alt="" draggable={false} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
