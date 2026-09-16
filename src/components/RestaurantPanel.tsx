import type { Restaurant, RestaurantReward, RestaurantService } from '../data/restaurants'
import { RESTAURANTS, restaurantItemSpriteUrl } from '../data/restaurants'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './RestaurantPanel.css'
import './LocationShot.css'

type Props = {
  locale: Locale
  selectedId: number | null
  onSelect: (id: number) => void
  onClose: () => void
}

function starsLabel(stars: number) {
  return '★'.repeat(stars) + '☆'.repeat(Math.max(0, 3 - stars))
}

function formatPrice(price: number) {
  return `₽${price.toLocaleString('en-US')}`
}

function rankLabel(locale: Locale, restaurant: Restaurant) {
  if (restaurant.stars != null) {
    return `${starsLabel(restaurant.stars)} · ${restaurant.stars}★`
  }
  return t(locale, 'restaurantsSpecialty')
}

type OfferRow =
  | { key: string; kind: 'service'; service: RestaurantService }
  | { key: string; kind: 'reward'; reward: RestaurantReward; noteKey: 'restaurantsRematchRewards' | 'restaurantsFirstClearRewards' }

function buildOfferRows(restaurant: Restaurant): OfferRow[] {
  const rows: OfferRow[] = []
  for (const service of restaurant.services) {
    rows.push({ key: `svc-${service.name.en}`, kind: 'service', service })
  }
  for (const reward of restaurant.rematchRewards) {
    rows.push({
      key: `rematch-${reward.name.en}`,
      kind: 'reward',
      reward,
      noteKey: 'restaurantsRematchRewards',
    })
  }
  for (const reward of restaurant.firstClearRewards) {
    rows.push({
      key: `first-${reward.name.en}`,
      kind: 'reward',
      reward,
      noteKey: 'restaurantsFirstClearRewards',
    })
  }
  return rows
}

export function RestaurantPanel({ locale, selectedId, onSelect, onClose }: Props) {
  const selected = RESTAURANTS.find((r) => r.id === selectedId) ?? null

  return (
    <aside className={`restaurant-panel${selected ? '' : ' restaurant-panel--list-only'}`}>
      <header className="restaurant-panel__head">
        <div>
          <p className="restaurant-panel__eyebrow">{t(locale, 'toolRestaurants')}</p>
          <h2>{selected ? selected.name[locale] : t(locale, 'restaurantsTitle')}</h2>
        </div>
        {selected && (
          <button type="button" className="restaurant-panel__close" onClick={onClose}>
            {t(locale, 'close')}
          </button>
        )}
      </header>

      {selected ? (
        <>
          <label className="restaurant-panel__switcher">
            <span className="restaurant-panel__switcher-label">{t(locale, 'restaurantsList')}</span>
            <select
              className="restaurant-panel__switcher-select"
              value={selected.id}
              onChange={(e) => onSelect(Number(e.target.value))}
            >
              {RESTAURANTS.map((restaurant) => (
                <option key={restaurant.id} value={restaurant.id}>
                  {restaurant.name[locale]} — {rankLabel(locale, restaurant)}
                </option>
              ))}
            </select>
          </label>
          <RestaurantDetails locale={locale} restaurant={selected} />
        </>
      ) : (
        <>
          <p className="restaurant-panel__hint">{t(locale, 'restaurantsSelectHint')}</p>
          <section className="restaurant-panel__list-section">
            <div className="restaurant-panel__section-head">
              <h3>{t(locale, 'restaurantsList')}</h3>
            </div>
            <ul className="restaurant-list">
              {RESTAURANTS.map((restaurant) => (
                <li key={restaurant.id}>
                  <button type="button" onClick={() => onSelect(restaurant.id)}>
                    <span className="restaurant-list__icon">
                      <img src="/restaurant.svg" alt="" draggable={false} />
                    </span>
                    <span className="restaurant-list__body">
                      <strong>{restaurant.name[locale]}</strong>
                      <span>{rankLabel(locale, restaurant)}</span>
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

function RestaurantDetails({
  locale,
  restaurant,
}: {
  locale: Locale
  restaurant: Restaurant
}) {
  const rows = buildOfferRows(restaurant)

  return (
    <div className="restaurant-details">
      {restaurant.locationImageSrc && (
        <figure className="lza-location-shot">
          <img src={restaurant.locationImageSrc} alt="" loading="lazy" />
          <figcaption>{t(locale, 'lzaLocationShot')}</figcaption>
        </figure>
      )}
      <p className="restaurant-details__meta">
        <span>{rankLabel(locale, restaurant)}</span>
        <span aria-hidden="true">·</span>
        <span>{restaurant.description[locale]}</span>
      </p>
      <p className="restaurant-details__mission">{restaurant.sideMission[locale]}</p>

      <div className="restaurant-details__items">
        <h3>{t(locale, 'restaurantsServices')}</h3>
        <ul className="restaurant-item-list">
          {rows.map((row) => {
            if (row.kind === 'service') {
              const { service } = row
              return (
                <li key={row.key}>
                  <img
                    className="restaurant-item-list__sprite"
                    src="/restaurant.svg"
                    alt=""
                    width={32}
                    height={32}
                    draggable={false}
                  />
                  <div className="restaurant-item-list__text">
                    <div className="restaurant-item-list__main">
                      <strong>{service.name[locale]}</strong>
                      {service.price != null && (
                        <span className="restaurant-item-list__price">
                          {formatPrice(service.price)}
                        </span>
                      )}
                    </div>
                    <span className="restaurant-item-list__note">{service.detail[locale]}</span>
                  </div>
                </li>
              )
            }

            const { reward, noteKey } = row
            return (
              <li key={row.key}>
                <img
                  className="restaurant-item-list__sprite"
                  src={restaurantItemSpriteUrl(reward.sprite)}
                  alt=""
                  width={32}
                  height={32}
                  loading="lazy"
                />
                <div className="restaurant-item-list__text">
                  <div className="restaurant-item-list__main">
                    <strong>
                      {reward.name[locale]}
                      {reward.qty > 1 ? ` ×${reward.qty}` : ''}
                    </strong>
                  </div>
                  <span className="restaurant-item-list__note">{t(locale, noteKey)}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
