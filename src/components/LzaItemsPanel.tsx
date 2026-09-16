import { useEffect, useMemo, useState } from 'react'
import {
  LZA_ITEM_CATEGORIES,
  LZA_ITEM_CATEGORY_KEYS,
  LZA_ITEMS,
  LZA_OBTAIN_KIND_KEYS,
  type LzaItem,
  type LzaItemCategory,
  type LzaItemPrice,
} from '../data/lzaItems'
import { lzaItemSpriteCandidates } from '../data/lzaItemSprites'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './MissionPanel.css'
import './LaCraft.css'

type Tab = 'all' | LzaItemCategory

type Props = {
  locale: Locale
  initialSelectedId?: string | null
}

export function LzaItemsView({ locale, initialSelectedId = null }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(initialSelectedId)
  const [tab, setTab] = useState<Tab>('all')

  useEffect(() => {
    if (!initialSelectedId) return
    setSelectedId(initialSelectedId)
    const item = LZA_ITEMS.find((i) => i.id === initialSelectedId)
    if (item) setTab(item.category)
  }, [initialSelectedId])

  return (
    <div className="map-layout map-layout--crafts">
      <LzaItemsBrowser
        locale={locale}
        tab={tab}
        selectedId={selectedId}
        onTabChange={setTab}
        onSelect={setSelectedId}
      />
      <LzaItemsPanel
        locale={locale}
        selectedId={selectedId}
        onClose={() => setSelectedId(null)}
      />
    </div>
  )
}

function LzaItemSprite({
  sprite,
  size,
}: {
  sprite: string
  size: number
}) {
  const candidates = useMemo(() => lzaItemSpriteCandidates(sprite), [sprite])
  const [index, setIndex] = useState(0)
  const src = candidates[Math.min(index, candidates.length - 1)]

  return (
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      draggable={false}
      onError={() => {
        setIndex((i) => (i + 1 < candidates.length ? i + 1 : i))
      }}
    />
  )
}

function formatPrice(locale: Locale, price: LzaItemPrice) {
  const amount = price.amount.toLocaleString(locale === 'pt' ? 'pt-BR' : 'en-US')
  const currency =
    price.currency === 'megaShards'
      ? t(locale, 'lzaItemsPriceMegaShards')
      : t(locale, 'lzaItemsPricePokedollars')
  const kind =
    price.kind === 'sell' ? t(locale, 'lzaItemsPriceSell') : t(locale, 'lzaItemsPriceBuy')
  return { amount, currency, kind }
}

function LzaItemsBrowser({
  locale,
  tab,
  selectedId,
  onTabChange,
  onSelect,
}: {
  locale: Locale
  tab: Tab
  selectedId: string | null
  onTabChange: (tab: Tab) => void
  onSelect: (id: string) => void
}) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return LZA_ITEMS.filter((item) => {
      const category = /^TM\d+/i.test(item.name.en) ? 'tms' : item.category
      if (tab !== 'all' && category !== tab) return false
      if (!q) return true
      const sourceHit =
        item.source[locale].toLowerCase().includes(q) ||
        (item.sources?.some((s) => s.label[locale].toLowerCase().includes(q)) ?? false)
      return (
        item.name[locale].toLowerCase().includes(q) ||
        item.description[locale].toLowerCase().includes(q) ||
        sourceHit ||
        (item.move?.[locale].toLowerCase().includes(q) ?? false) ||
        t(locale, LZA_ITEM_CATEGORY_KEYS[category]).toLowerCase().includes(q)
      )
    })
  }, [locale, query, tab])

  return (
    <div className="map-shell la-craft-browser">
      <div className="map-toolbar">
        <div>
          <h2>{t(locale, 'lzaItemsTitle')}</h2>
          <p>
            {LZA_ITEMS.length} {t(locale, 'lzaItemsCount')} · {filtered.length}{' '}
            {t(locale, 'lzaItemsShowing')}
          </p>
        </div>
      </div>

      <div className="la-craft-browser__body">
        <div className="mission-panel__kind-tabs la-craft-tabs la-craft-tabs--wrap" role="group">
          <button
            type="button"
            className={tab === 'all' ? 'is-active' : undefined}
            onClick={() => onTabChange('all')}
          >
            {t(locale, 'lzaItemsAll')}
          </button>
          {LZA_ITEM_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={tab === cat ? 'is-active' : undefined}
              onClick={() => onTabChange(cat)}
            >
              {t(locale, LZA_ITEM_CATEGORY_KEYS[cat])}
            </button>
          ))}
        </div>

        <div className="mission-panel__search">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t(locale, 'lzaItemsSearch')}
            aria-label={t(locale, 'lzaItemsSearch')}
          />
        </div>

        <div className="la-craft-browser__grid" role="list">
          {filtered.map((item) => (
            <button
              key={item.id}
              type="button"
              role="listitem"
              className={['la-craft-card', selectedId === item.id ? 'is-active' : '']
                .filter(Boolean)
                .join(' ')}
              onClick={() => onSelect(item.id)}
            >
              <LzaItemSprite key={item.sprite} sprite={item.sprite} size={40} />
              <strong>{item.name[locale]}</strong>
              <span className="la-craft-card__meta">
                {item.move
                  ? `${t(locale, LZA_ITEM_CATEGORY_KEYS[item.category])} · ${item.move[locale]}`
                  : t(locale, LZA_ITEM_CATEGORY_KEYS[item.category])}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function LzaItemsPanel({
  locale,
  selectedId,
  onClose,
}: {
  locale: Locale
  selectedId: string | null
  onClose: () => void
}) {
  const item: LzaItem | null =
    selectedId != null ? (LZA_ITEMS.find((i) => i.id === selectedId) ?? null) : null

  if (!item) {
    return (
      <aside className="mission-panel la-craft-panel">
        <div className="mission-panel__empty">
          <p>{t(locale, 'lzaItemsSelectHint')}</p>
        </div>
      </aside>
    )
  }

  const price = item.price ? formatPrice(locale, item.price) : null
  const sources = item.sources?.length
    ? item.sources
    : [{ kind: 'other' as const, label: item.source }]

  return (
    <aside className="mission-panel la-craft-panel">
      <div className="mission-panel__header">
        <div>
          <p className="mission-panel__eyebrow">{t(locale, 'lzaItemsTitle')}</p>
          <h2>{item.name[locale]}</h2>
        </div>
        <button type="button" className="mission-panel__close" onClick={onClose}>
          {t(locale, 'close')}
        </button>
      </div>

      <div className="la-craft-detail">
        <div className="la-craft-detail__hero">
          <div className="la-craft-detail__sprite">
            <LzaItemSprite key={item.sprite} sprite={item.sprite} size={56} />
          </div>
          <div className="la-craft-detail__hero-text">
            <p className="la-craft-detail__category">
              {t(locale, LZA_ITEM_CATEGORY_KEYS[item.category])}
            </p>
            {item.move && <p className="la-craft-detail__unlock">{item.move[locale]}</p>}
            <p className="la-craft-detail__desc">{item.description[locale]}</p>
          </div>
        </div>

        {price && (
          <section className="la-craft-detail__section">
            <h3>{t(locale, 'lzaItemsPrice')}</h3>
            <div className="lza-item-price">
              <span className="lza-item-price__kind">{price.kind}</span>
              <strong className="lza-item-price__amount">{price.amount}</strong>
              <span className="lza-item-price__currency">{price.currency}</span>
            </div>
          </section>
        )}

        <section className="la-craft-detail__section">
          <h3>{t(locale, 'lzaItemsSource')}</h3>
          <ul className="lza-item-sources">
            {sources.map((src, i) => (
              <li key={`${src.kind}-${i}`} className={`lza-item-source lza-item-source--${src.kind}`}>
                <span className="lza-item-source__kind">
                  {t(locale, LZA_OBTAIN_KIND_KEYS[src.kind])}
                </span>
                <span className="lza-item-source__label">{src.label[locale]}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </aside>
  )
}
