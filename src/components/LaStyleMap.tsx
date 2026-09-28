import { useMemo, useRef, useState, type ReactNode } from 'react'
import type { StyleKind } from '../data/laStyleSpots'
import { LA_STYLE_SPOTS } from '../data/laStyleSpots'
import { useMapZoom } from '../hooks/useMapZoom'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import { MapZoomControls } from './MapZoomControls'
import './LumioseMap.css'
import './StyleMap.css'
import './HisuiMap.css'

const MAP_SRC = '/jubilife-village-map.png'

const ICON: Record<StyleKind, string> = {
  salon: '/salon.svg',
  clothier: '/clothier.svg',
}

type Props = {
  locale: Locale
  selectedId: number | null
  kind: StyleKind | 'all'
  onSelect: (id: number) => void
  toolbarExtra?: ReactNode
}

export function LaStyleMap({ locale, selectedId, kind, onSelect, toolbarExtra }: Props) {
  const [imageOk, setImageOk] = useState(true)
  const viewportRef = useRef<HTMLDivElement>(null)
  const zoomApi = useMapZoom(viewportRef)
  const markers = useMemo(
    () => (kind === 'all' ? LA_STYLE_SPOTS : LA_STYLE_SPOTS.filter((s) => s.kind === kind)),
    [kind],
  )

  return (
    <div className="map-shell hisui-map">
      <div className="map-toolbar">
        <div>
          <h2>{t(locale, 'styleTitle')}</h2>
          <p>{t(locale, 'laStyleHint')}</p>
        </div>
        {toolbarExtra}
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
          <div
            className="hisui-map__frame hisui-map__frame--detail"
            style={{ ['--hisui-detail-aspect' as string]: '1' }}
          >
            {imageOk ? (
              <img
                className="hisui-map__photo"
                src={MAP_SRC}
                alt={t(locale, 'styleTitle')}
                onLoad={() => setImageOk(true)}
                onError={() => setImageOk(false)}
                draggable={false}
              />
            ) : (
              <div className="hisui-map__photo hisui-map__photo--fallback" />
            )}
            {markers.map((spot) => (
              <button
                key={spot.id}
                type="button"
                className={[
                  'style-marker',
                  `style-marker--${spot.kind}`,
                  selectedId === spot.id ? 'is-selected' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={{ left: `${spot.map.x}%`, top: `${spot.map.y}%` }}
                onClick={() => onSelect(spot.id)}
                onPointerDown={(event) => event.stopPropagation()}
                aria-label={spot.name[locale]}
                title={spot.name[locale]}
              >
                <img src={ICON[spot.kind]} alt="" draggable={false} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
