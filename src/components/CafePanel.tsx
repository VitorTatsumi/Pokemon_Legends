import { useEffect } from 'react'
import type { Cafe } from '../data/cafes'
import { CAFES } from '../data/cafes'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './CafePanel.css'
import './LocationShot.css'

type Props = {
  locale: Locale
  selectedId: number | null
  onSelect: (id: number) => void
  onClose: () => void
}

export function CafePanel({ locale, selectedId, onSelect, onClose }: Props) {
  const selected = CAFES.find((c) => c.id === selectedId) ?? null

  useEffect(() => {
    if (selectedId == null) return
    const el = document.querySelector(`[data-cafe-id="${selectedId}"]`)
    el?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [selectedId])

  return (
    <aside className={`cafe-panel${selected ? '' : ' cafe-panel--list-only'}`}>
      <header className="cafe-panel__head">
        <div>
          <p className="cafe-panel__eyebrow">{t(locale, 'toolCafes')}</p>
          <h2>{selected ? selected.name[locale] : t(locale, 'cafesTitle')}</h2>
        </div>
        {selected && (
          <button type="button" className="cafe-panel__close" onClick={onClose}>
            {t(locale, 'close')}
          </button>
        )}
      </header>

      {selected ? (
        <CafeDetails locale={locale} cafe={selected} />
      ) : (
        <p className="cafe-panel__hint">{t(locale, 'cafesSelectHint')}</p>
      )}

      <section className="cafe-panel__list-section">
        <div className="cafe-panel__section-head">
          <h3>{t(locale, 'cafesList')}</h3>
        </div>

        <ul className="cafe-list">
          {CAFES.map((cafe) => (
            <li key={cafe.id}>
              <button
                type="button"
                data-cafe-id={cafe.id}
                className={selectedId === cafe.id ? 'is-active' : undefined}
                onClick={() => onSelect(cafe.id)}
              >
                <span className="cafe-list__icon">
                  <img src="/cafe.svg" alt="" draggable={false} />
                </span>
                <span className="cafe-list__body">
                  <strong>{cafe.name[locale]}</strong>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}

function CafeDetails({ locale, cafe }: { locale: Locale; cafe: Cafe }) {
  return (
    <div className="cafe-details">
      {cafe.locationImageSrc && (
        <figure className="lza-location-shot">
          <img src={cafe.locationImageSrc} alt="" loading="lazy" />
          <figcaption>{t(locale, 'lzaLocationShot')}</figcaption>
        </figure>
      )}
      <dl className="cafe-details__facts">
        <div>
          <dt>{t(locale, 'missionLocation')}</dt>
          <dd>{cafe.description[locale]}</dd>
        </div>
      </dl>
    </div>
  )
}
