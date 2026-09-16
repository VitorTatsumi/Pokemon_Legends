import type { Market, MarketKind } from '../data/markets'
import { MARKETS, marketItemSpriteUrl } from '../data/markets'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './MarketPanel.css'
import './LocationShot.css'

type Props = {
  locale: Locale
  selectedId: number | null
  onSelect: (id: number) => void
  onClose: () => void
}

const KIND_KEY: Record<MarketKind, string> = {
  balls: 'marketsKindBalls',
  general: 'marketsKindGeneral',
  stones: 'marketsKindStones',
  stalls: 'marketsKindStalls',
}

function formatPrice(price: number) {
  return `₽${price.toLocaleString('en-US')}`
}

export function MarketPanel({ locale, selectedId, onSelect, onClose }: Props) {
  const selected = MARKETS.find((m) => m.id === selectedId) ?? null

  return (
    <aside className={`market-panel${selected ? '' : ' market-panel--list-only'}`}>
      <header className="market-panel__head">
        <div>
          <p className="market-panel__eyebrow">{t(locale, 'toolMarkets')}</p>
          <h2>{selected ? selected.name[locale] : t(locale, 'marketsTitle')}</h2>
        </div>
        {selected && (
          <button type="button" className="market-panel__close" onClick={onClose}>
            {t(locale, 'close')}
          </button>
        )}
      </header>

      {selected ? (
        <>
          <label className="market-panel__switcher">
            <span className="market-panel__switcher-label">{t(locale, 'marketsList')}</span>
            <select
              className="market-panel__switcher-select"
              value={selected.id}
              onChange={(e) => onSelect(Number(e.target.value))}
            >
              {MARKETS.map((market) => (
                <option key={market.id} value={market.id}>
                  {market.name[locale]} — {t(locale, KIND_KEY[market.kind])}
                </option>
              ))}
            </select>
          </label>
          <MarketDetails locale={locale} market={selected} />
        </>
      ) : (
        <>
          <p className="market-panel__hint">{t(locale, 'marketsSelectHint')}</p>
          <section className="market-panel__list-section">
            <div className="market-panel__section-head">
              <h3>{t(locale, 'marketsList')}</h3>
            </div>
            <ul className="market-list">
              {MARKETS.map((market) => (
                <li key={market.id}>
                  <button
                    type="button"
                    data-market-id={market.id}
                    onClick={() => onSelect(market.id)}
                  >
                    <span className="market-list__icon">
                      <img src="/market.svg" alt="" draggable={false} />
                    </span>
                    <span className="market-list__body">
                      <strong>{market.name[locale]}</strong>
                      <span>{t(locale, KIND_KEY[market.kind])}</span>
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

function MarketDetails({ locale, market }: { locale: Locale; market: Market }) {
  return (
    <div className="market-details">
      {market.locationImageSrc && (
        <figure className="lza-location-shot">
          <img src={market.locationImageSrc} alt="" loading="lazy" />
          <figcaption>{t(locale, 'lzaLocationShot')}</figcaption>
        </figure>
      )}
      <p className="market-details__meta">
        <span>{t(locale, KIND_KEY[market.kind])}</span>
        <span aria-hidden="true">·</span>
        <span>{market.description[locale]}</span>
      </p>

      <div className="market-details__items">
        <h3>{t(locale, 'marketsItems')}</h3>
        <ul className="market-item-list">
          {market.items.map((entry) => (
            <li key={entry.name.en}>
              <img
                className="market-item-list__sprite"
                src={marketItemSpriteUrl(entry.sprite)}
                alt=""
                width={32}
                height={32}
                loading="lazy"
              />
              <div className="market-item-list__text">
                <div className="market-item-list__main">
                  <strong>{entry.name[locale]}</strong>
                  <span className="market-item-list__price">{formatPrice(entry.price)}</span>
                </div>
                {entry.note && (
                  <span className="market-item-list__note">{entry.note[locale]}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
