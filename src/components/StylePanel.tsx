import { useEffect, useMemo } from 'react'
import type { StyleKind, StyleSpot } from '../data/styleSpots'
import { STYLE_SPOTS } from '../data/styleSpots'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './StylePanel.css'
import './LocationShot.css'

type Props = {
  locale: Locale
  selectedId: number | null
  kind: StyleKind | 'all'
  onSelect: (id: number) => void
  onKindChange: (kind: StyleKind | 'all') => void
  onClose: () => void
}

const ICON: Record<StyleKind, string> = {
  salon: '/salon.svg',
  clothier: '/clothier.svg',
}

const KIND_LABEL: Record<StyleKind, string> = {
  salon: 'styleKindSalon',
  clothier: 'styleKindClothier',
}

export function StylePanel({
  locale,
  selectedId,
  kind,
  onSelect,
  onKindChange,
  onClose,
}: Props) {
  const selected = STYLE_SPOTS.find((s) => s.id === selectedId) ?? null

  useEffect(() => {
    if (selectedId == null) return
    const el = document.querySelector(`[data-style-id="${selectedId}"]`)
    el?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [selectedId, kind])

  const list = useMemo(() => {
    if (kind === 'all') return STYLE_SPOTS
    return STYLE_SPOTS.filter((s) => s.kind === kind)
  }, [kind])

  return (
    <aside className={`style-panel${selected ? '' : ' style-panel--list-only'}`}>
      <header className="style-panel__head">
        <div>
          <p className="style-panel__eyebrow">{t(locale, 'toolStyle')}</p>
          <h2>{selected ? selected.name[locale] : t(locale, 'styleTitle')}</h2>
        </div>
        {selected && (
          <button type="button" className="style-panel__close" onClick={onClose}>
            {t(locale, 'close')}
          </button>
        )}
      </header>

      {selected ? (
        <StyleDetails locale={locale} spot={selected} />
      ) : (
        <p className="style-panel__hint">{t(locale, 'styleSelectHint')}</p>
      )}

      <section className="style-panel__list-section">
        <div className="style-panel__section-head">
          <h3>{t(locale, 'styleList')}</h3>
        </div>

        <div className="style-panel__filters" role="group" aria-label={t(locale, 'styleType')}>
          <button
            type="button"
            className={kind === 'all' ? 'is-active' : undefined}
            onClick={() => onKindChange('all')}
          >
            {t(locale, 'styleAll')}
          </button>
          <button
            type="button"
            className={['style-panel__filter--salon', kind === 'salon' ? 'is-active' : '']
              .filter(Boolean)
              .join(' ')}
            onClick={() => onKindChange('salon')}
          >
            {t(locale, 'styleKindSalon')}
          </button>
          <button
            type="button"
            className={['style-panel__filter--clothier', kind === 'clothier' ? 'is-active' : '']
              .filter(Boolean)
              .join(' ')}
            onClick={() => onKindChange('clothier')}
          >
            {t(locale, 'styleKindClothier')}
          </button>
        </div>

        <ul className="style-list">
          {list.map((spot) => (
            <li key={spot.id}>
              <button
                type="button"
                data-style-id={spot.id}
                className={selectedId === spot.id ? 'is-active' : undefined}
                onClick={() => onSelect(spot.id)}
              >
                <span className={`style-list__icon style-list__icon--${spot.kind}`}>
                  <img src={ICON[spot.kind]} alt="" draggable={false} />
                </span>
                <span className="style-list__body">
                  <strong>{spot.name[locale]}</strong>
                  <span>{t(locale, KIND_LABEL[spot.kind])}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}

function formatStylePrice(locale: Locale, price: number | undefined) {
  if (price == null) return t(locale, 'stylePriceVaries')
  if (price === 0) return t(locale, 'stylePriceFree')
  return `₽${price.toLocaleString('en-US')}`
}

/** Split "A · B · C" notes into one line per piece. */
function StyleItemNote({ text }: { text: string }) {
  const lines = text
    .split(/\s*·\s*/)
    .map((line) => line.trim())
    .filter(Boolean)

  if (lines.length <= 1) {
    return <span className="style-item-list__note">{text}</span>
  }

  return (
    <ul className="style-item-list__note-lines">
      {lines.map((line) => (
        <li key={line}>{line}</li>
      ))}
    </ul>
  )
}

function StyleDetails({ locale, spot }: { locale: Locale; spot: StyleSpot }) {
  return (
    <div className="style-details">
      {spot.locationImageSrc && (
        <figure className="lza-location-shot">
          <img src={spot.locationImageSrc} alt="" loading="lazy" />
          <figcaption>{t(locale, 'lzaLocationShot')}</figcaption>
        </figure>
      )}
      <dl className="style-details__facts">
        <div>
          <dt>{t(locale, 'styleType')}</dt>
          <dd>{t(locale, KIND_LABEL[spot.kind])}</dd>
        </div>
        <div>
          <dt>{t(locale, 'missionLocation')}</dt>
          <dd>{spot.description[locale]}</dd>
        </div>
      </dl>

      <div className="style-details__items">
        <h3>{t(locale, spot.kind === 'salon' ? 'styleServices' : 'styleItems')}</h3>
        <ul className="style-item-list">
          {spot.items.map((entry) => (
            <li key={entry.name.en}>
              <div className="style-item-list__text">
                <div className="style-item-list__main">
                  <strong>{entry.name[locale]}</strong>
                  <span className="style-item-list__price">
                    {formatStylePrice(locale, entry.price)}
                  </span>
                </div>
                {entry.note && (
                  <StyleItemNote text={entry.note[locale]} />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
