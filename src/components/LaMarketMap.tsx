import { useMemo, useRef, useState } from 'react'
import { LA_MARKETS } from '../data/laMarkets'
import { useMapZoom } from '../hooks/useMapZoom'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import { MapZoomControls } from './MapZoomControls'
import './LumioseMap.css'
import './MarketMap.css'
import './HisuiMap.css'

const MAP_SRC = '/jubilife-village-map.png'

type Props = {
  locale: Locale
  selectedId: number | null
  onSelect: (id: number) => void
}

export function LaMarketMap({ locale, selectedId, onSelect }: Props) {
  const [imageOk, setImageOk] = useState(true)
  const viewportRef = useRef<HTMLDivElement>(null)
  const zoomApi = useMapZoom(viewportRef)
  const markers = useMemo(() => LA_MARKETS, [])

  return (
    <div className="map-shell hisui-map">
      <div className="map-toolbar">
        <div>
          <h2>{t(locale, 'marketsTitle')}</h2>
          <p>{t(locale, 'laMarketsHint')}</p>
        </div>
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
                alt={t(locale, 'marketsTitle')}
                onLoad={() => setImageOk(true)}
                onError={() => setImageOk(false)}
                draggable={false}
              />
            ) : (
              <div className="hisui-map__photo hisui-map__photo--fallback" />
            )}
            {markers.map((market) => (
              <button
                key={market.id}
                type="button"
                className={[
                  'market-marker',
                  selectedId === market.id ? 'is-selected' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={{ left: `${market.map.x}%`, top: `${market.map.y}%` }}
                onClick={() => onSelect(market.id)}
                onPointerDown={(event) => event.stopPropagation()}
                aria-label={market.name[locale]}
                title={market.name[locale]}
              >
                <img src="/market.svg" alt="" draggable={false} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
