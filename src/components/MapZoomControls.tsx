import type { Locale } from '../i18n'
import { t } from '../i18n'

type Props = {
  locale: Locale
  canZoomIn: boolean
  canZoomOut: boolean
  isZoomed: boolean
  onZoomIn: () => void
  onZoomOut: () => void
  onReset: () => void
}

export function MapZoomControls({
  locale,
  canZoomIn,
  canZoomOut,
  isZoomed,
  onZoomIn,
  onZoomOut,
  onReset,
}: Props) {
  return (
    <div
      className="map-zoom"
      role="group"
      aria-label={t(locale, 'zoomIn')}
      onPointerDown={(event) => event.stopPropagation()}
    >
      <button type="button" onClick={onZoomIn} disabled={!canZoomIn} aria-label={t(locale, 'zoomIn')} title={t(locale, 'zoomIn')}>
        +
      </button>
      <button type="button" onClick={onZoomOut} disabled={!canZoomOut} aria-label={t(locale, 'zoomOut')} title={t(locale, 'zoomOut')}>
        −
      </button>
      <button type="button" onClick={onReset} disabled={!isZoomed} aria-label={t(locale, 'resetView')} title={t(locale, 'resetView')}>
        ⌂
      </button>
    </div>
  )
}
