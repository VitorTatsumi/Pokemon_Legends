import { useMemo } from 'react'
import type { LaMarket, LaMarketKind } from '../data/laMarkets'
import { LA_MARKETS, laMarketItemSpriteUrl } from '../data/laMarkets'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './MarketPanel.css'

type Props = {
  locale: Locale
  selectedId: number | null
  kind: LaMarketKind | 'all'
  onSelect: (id: number) => void
  onKindChange: (kind: LaMarketKind | 'all') => void
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

const FILTER_KINDS: LaMarketKind[] = [
  'general',
  'berries',
  'craft',
  'clothing',
  'special',
  'trading',
]

function formatPrice(price: number, locale: Locale, currency?: 'pokedollars' | 'merit') {
  if (price <= 0) return t(locale, 'laMarketsPriceVaries')
  if (currency === 'merit') {
    return `${price.toLocaleString('en-US')} ${t(locale, 'laMarketsMerit')}`
  }
  return `₽${price.toLocaleString('en-US')}`
}

export function LaMarketPanel({
  locale,
  selectedId,
  kind,
  onSelect,
  onKindChange,
  onClose,
}: Props) {
  const selected = LA_MARKETS.find((m) => m.id === selectedId) ?? null

  const list = useMemo(() => {
    if (kind === 'all') return LA_MARKETS
    return LA_MARKETS.filter((m) => m.kind === kind)
  }, [kind])

  const switcherList = useMemo(() => {
    if (!selected) return list
    if (kind === 'all' || selected.kind === kind) return list
    return LA_MARKETS
  }, [kind, list, selected])

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
              {switcherList.map((market) => (
                <option key={market.id} value={market.id}>
                  {market.name[locale]} — {t(locale, KIND_KEY[market.kind])}
                </option>
              ))}
            </select>
          </label>
          <LaMarketDetails locale={locale} market={selected} />
        </>
      ) : (
        <>
          <p className="market-panel__hint">{t(locale, 'marketsSelectHint')}</p>
          <section className="market-panel__list-section">
            <div className="market-panel__section-head">
              <h3>{t(locale, 'marketsList')}</h3>
            </div>

            <div
              className="market-panel__filters"
              role="group"
              aria-label={t(locale, 'marketsType')}
            >
              <button
                type="button"
                className={kind === 'all' ? 'is-active' : undefined}
                onClick={() => onKindChange('all')}
              >
                {t(locale, 'marketsAll')}
              </button>
              {FILTER_KINDS.map((filterKind) => (
                <button
                  key={filterKind}
                  type="button"
                  className={kind === filterKind ? 'is-active' : undefined}
                  onClick={() => onKindChange(filterKind)}
                >
                  {t(locale, KIND_KEY[filterKind])}
                </button>
              ))}
            </div>

            <ul className="market-list">
              {list.map((market) => (
                <li key={market.id}>
                  <button type="button" onClick={() => onSelect(market.id)}>
                    <span className="market-list__icon">
                      <img src="/market.svg" alt="" draggable={false} />
                    </span>
                    <span className="market-list__body">
                      <strong>{market.name[locale]}</strong>
                      <span>
                        {t(locale, KIND_KEY[market.kind])} · {market.items.length}{' '}
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

function LaMarketDetails({ locale, market }: { locale: Locale; market: LaMarket }) {
  return (
    <div className="market-details">
      <p className="market-details__meta">
        <span>{t(locale, KIND_KEY[market.kind])}</span>
        <span aria-hidden="true">·</span>
        <span>{market.location[locale]}</span>
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
