import type { Cafe, CafeItem, CafeService } from '../data/cafes'
import { CAFES, cafeItemSpriteUrl } from '../data/cafes'
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

function formatPrice(price: number) {
  return `₽${price.toLocaleString('en-US')}`
}

type OfferRow =
  | { key: string; kind: 'service'; service: CafeService }
  | { key: string; kind: 'item'; item: CafeItem }

function buildOfferRows(cafe: Cafe): OfferRow[] {
  const rows: OfferRow[] = []
  for (const service of cafe.services) {
    rows.push({ key: `svc-${service.name.en}`, kind: 'service', service })
  }
  for (const item of cafe.items) {
    rows.push({ key: `item-${item.name.en}-${item.price}`, kind: 'item', item })
  }
  return rows
}

export function CafePanel({ locale, selectedId, onSelect, onClose }: Props) {
  const selected = CAFES.find((c) => c.id === selectedId) ?? null

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
        <>
          <label className="cafe-panel__switcher">
            <span className="cafe-panel__switcher-label">{t(locale, 'cafesList')}</span>
            <select
              className="cafe-panel__switcher-select"
              value={selected.id}
              onChange={(e) => onSelect(Number(e.target.value))}
            >
              {CAFES.map((cafe) => (
                <option key={cafe.id} value={cafe.id}>
                  {cafe.name[locale]} — {cafe.items.length}{' '}
                  {t(locale, 'cafesMenuCount')}
                </option>
              ))}
            </select>
          </label>
          <CafeDetails locale={locale} cafe={selected} />
        </>
      ) : (
        <>
          <p className="cafe-panel__hint">{t(locale, 'cafesSelectHint')}</p>
          <section className="cafe-panel__list-section">
            <div className="cafe-panel__section-head">
              <h3>{t(locale, 'cafesList')}</h3>
            </div>
            <ul className="cafe-list">
              {CAFES.map((cafe) => (
                <li key={cafe.id}>
                  <button type="button" onClick={() => onSelect(cafe.id)}>
                    <span className="cafe-list__icon">
                      <img src="/cafe.svg" alt="" draggable={false} />
                    </span>
                    <span className="cafe-list__body">
                      <strong>{cafe.name[locale]}</strong>
                      <span>
                        {cafe.items.length} {t(locale, 'cafesMenuCount')}
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

function CafeDetails({ locale, cafe }: { locale: Locale; cafe: Cafe }) {
  const rows = buildOfferRows(cafe)

  return (
    <div className="cafe-details">
      {cafe.locationImageSrc && (
        <figure className="lza-location-shot">
          <img src={cafe.locationImageSrc} alt="" loading="lazy" />
          <figcaption>{t(locale, 'lzaLocationShot')}</figcaption>
        </figure>
      )}
      <p className="cafe-details__meta">
        <span>
          {cafe.items.length} {t(locale, 'cafesMenuCount')}
        </span>
        <span aria-hidden="true">·</span>
        <span>{cafe.description[locale]}</span>
      </p>

      <div className="cafe-details__items">
        <h3>{t(locale, 'cafesServices')}</h3>
        <ul className="cafe-item-list">
          {rows.map((row) => {
            if (row.kind === 'service') {
              const { service } = row
              const src = cafeItemSpriteUrl(service.sprite)
              return (
                <li key={row.key}>
                  <img
                    className="cafe-item-list__sprite cafe-item-list__sprite--pixel"
                    src={src}
                    alt=""
                    width={32}
                    height={32}
                    draggable={false}
                    loading="lazy"
                  />
                  <div className="cafe-item-list__text">
                    <div className="cafe-item-list__main">
                      <strong>{service.name[locale]}</strong>
                    </div>
                    <span className="cafe-item-list__note">{service.detail[locale]}</span>
                  </div>
                </li>
              )
            }

            const { item } = row
            const src = cafeItemSpriteUrl(item.sprite)
            const isPixelArt =
              src.includes('/sprites/items/') || src.includes('Bag_')
            return (
              <li key={row.key}>
                <img
                  className={`cafe-item-list__sprite${isPixelArt ? ' cafe-item-list__sprite--pixel' : ''}`}
                  src={src}
                  alt=""
                  width={32}
                  height={32}
                  loading="lazy"
                />
                <div className="cafe-item-list__text">
                  <div className="cafe-item-list__main">
                    <strong>{item.name[locale]}</strong>
                    <span className="cafe-item-list__price">{formatPrice(item.price)}</span>
                  </div>
                  <span className="cafe-item-list__note">{t(locale, 'cafesMenuItem')}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
