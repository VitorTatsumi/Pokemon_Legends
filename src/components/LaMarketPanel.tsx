import { useEffect } from 'react'
import type { LaMarket, LaMarketKind } from '../data/laMarkets'
import { LA_MARKETS, laMarketItemSpriteUrl } from '../data/laMarkets'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './MarketPanel.css'

type Props = {
  locale: Locale
  selectedId: number | null
  onSelect: (id: number) => void
  onClose: () => void
}

const KIND_KEY: Record<LaMarketKind, string> = {
  general: 'marketsKindGeneral',
  materials: 'laMarketsKindMaterials',
  berries: 'laMarketsKindBerries',
  craft: 'laMarketsKindCraft',
  clothing: 'laMarketsKindClothing',
  special: 'laMarketsKindSpecial',
  trading: 'laMarketsKindTrading',
}

function formatPrice(price: number, locale: Locale, currency?: 'pokedollars' | 'merit') {
  if (price <= 0) return t(locale, 'laMarketsPriceVaries')
  if (currency === 'merit') {
    return `${price.toLocaleString('en-US')} ${t(locale, 'laMarketsMerit')}`
  }
  return `₽${price.toLocaleString('en-US')}`
}

export function LaMarketPanel({ locale, selectedId, onSelect, onClose }: Props) {
  const selected = LA_MARKETS.find((m) => m.id === selectedId) ?? null

  useEffect(() => {
    if (selectedId == null) return
    const el = document.querySelector(`[data-la-market-id="${selectedId}"]`)
    el?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [selectedId])

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
        <LaMarketDetails locale={locale} market={selected} />
      ) : (
        <p className="market-panel__hint">{t(locale, 'marketsSelectHint')}</p>
      )}

      <section className="market-panel__list-section">
        <div className="market-panel__section-head">
          <h3>{t(locale, 'marketsList')}</h3>
        </div>

        <ul className="market-list">
          {LA_MARKETS.map((market) => (
            <li key={market.id}>
              <button
                type="button"
                data-la-market-id={market.id}
                className={selectedId === market.id ? 'is-active' : undefined}
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
    </aside>
  )
}

function LaMarketDetails({ locale, market }: { locale: Locale; market: LaMarket }) {
  return (
    <div className="market-details">
      <dl className="market-details__facts">
        <div>
          <dt>{t(locale, 'marketsType')}</dt>
          <dd>{t(locale, KIND_KEY[market.kind])}</dd>
        </div>
        <div>
          <dt>{t(locale, 'missionLocation')}</dt>
          <dd>{market.location[locale]}</dd>
        </div>
        <div>
          <dt>{t(locale, 'laMarketsAbout')}</dt>
          <dd>{market.description[locale]}</dd>
        </div>
      </dl>

      <div className="market-details__items">
        <h3>{t(locale, 'marketsItems')}</h3>
        <ul className="market-item-list">
          {market.items.map((entry) => (
            <li key={entry.name.en}>
              <img
                className="market-item-list__sprite"
                src={laMarketItemSpriteUrl(entry.sprite)}
                alt=""
                width={32}
                height={32}
                loading="lazy"
              />
              <div className="market-item-list__text">
                <div className="market-item-list__main">
                  <strong>{entry.name[locale]}</strong>
                  <span className="market-item-list__price">
                    {formatPrice(entry.price, locale, entry.currency)}
                  </span>
                </div>
                {entry.description && (
                  <span className="market-item-list__note">{entry.description[locale]}</span>
                )}
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
