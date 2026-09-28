import { useMemo } from 'react'
import type { StyleKind, StyleSpot } from '../data/styleSpots'
import { STYLE_SPOTS, styleItemSpriteUrl } from '../data/styleSpots'
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

export function StylePanel({
  locale,
  selectedId,
  kind,
  onSelect,
  onKindChange,
  onClose,
}: Props) {
  const selected = STYLE_SPOTS.find((s) => s.id === selectedId) ?? null

  const list = useMemo(() => {
    if (kind === 'all') return STYLE_SPOTS
    return STYLE_SPOTS.filter((s) => s.kind === kind)
  }, [kind])

  const switcherList = useMemo(() => {
    if (!selected) return list
    if (kind === 'all' || selected.kind === kind) return list
    return STYLE_SPOTS
  }, [kind, list, selected])

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
        <>
          <label className="style-panel__switcher">
            <span className="style-panel__switcher-label">{t(locale, 'styleList')}</span>
            <select
              className="style-panel__switcher-select"
              value={selected.id}
              onChange={(e) => onSelect(Number(e.target.value))}
            >
              {switcherList.map((spot) => (
                <option key={spot.id} value={spot.id}>
                  {spot.name[locale]} — {t(locale, KIND_LABEL[spot.kind])}
                </option>
              ))}
            </select>
          </label>
          <StyleDetails locale={locale} spot={selected} />
        </>
      ) : (
        <>
          <p className="style-panel__hint">{t(locale, 'styleSelectHint')}</p>
          <section className="style-panel__list-section">
            <div className="style-panel__section-head">
              <h3>{t(locale, 'styleList')}</h3>
            </div>

            <div
              className="style-panel__filters"
              role="group"
              aria-label={t(locale, 'styleType')}
            >
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
                className={[
                  'style-panel__filter--clothier',
                  kind === 'clothier' ? 'is-active' : '',
                ]
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
                  <button type="button" onClick={() => onSelect(spot.id)}>
                    <span className={`style-list__icon style-list__icon--${spot.kind}`}>
                      <img src={ICON[spot.kind]} alt="" draggable={false} />
                    </span>
                    <span className="style-list__body">
                      <strong>{spot.name[locale]}</strong>
                      <span>
                        {t(locale, KIND_LABEL[spot.kind])} · {spot.items.length}{' '}
                        {t(locale, 'styleOfferCount')}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </aside>
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
      <p className="style-details__meta">
        <span>{t(locale, KIND_LABEL[spot.kind])}</span>
        <span aria-hidden="true">·</span>
        <span>{spot.description[locale]}</span>
      </p>

      <div className="style-details__items">
        <h3>{t(locale, spot.kind === 'salon' ? 'styleServices' : 'styleItems')}</h3>
        <ul className="style-item-list">
          {spot.items.map((entry) => {
            const src = styleItemSpriteUrl(entry.sprite)
            const isPixelArt =
              src.includes('/sprites/items/') || src.includes('Bag_')
            return (
              <li key={entry.name.en}>
                <img
                  className={`style-item-list__sprite${isPixelArt ? ' style-item-list__sprite--pixel' : ''}`}
                  src={src}
                  alt=""
                  width={32}
                  height={32}
                  loading="lazy"
                />
                <div className="style-item-list__text">
                  <div className="style-item-list__main">
                    <strong>{entry.name[locale]}</strong>
                    <span className="style-item-list__price">
                      {formatStylePrice(locale, entry.price)}
                    </span>
                  </div>
                  {entry.note ? (
                    <StyleItemNote text={entry.note[locale]} />
                  ) : (
                    <span className="style-item-list__note">
                      {t(locale, spot.kind === 'salon' ? 'styleServiceNote' : 'styleShopNote')}
                    </span>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
