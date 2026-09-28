import type { LaMarketKind } from '../data/laMarkets'
import type { StyleKind } from '../data/laStyleSpots'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import { LaMarketMap } from './LaMarketMap'
import { LaMarketPanel } from './LaMarketPanel'
import { LaStyleMap } from './LaStyleMap'
import { LaStylePanel } from './LaStylePanel'
import './LocationsView.css'

export type LaLocationCategory = 'markets' | 'style'

export const LA_LOCATION_CATEGORIES: LaLocationCategory[] = ['markets', 'style']

const CATEGORY_I18N: Record<LaLocationCategory, string> = {
  markets: 'toolMarkets',
  style: 'toolStyle',
}

type Props = {
  locale: Locale
  category: LaLocationCategory
  onCategoryChange: (category: LaLocationCategory) => void
  selectedMarketId: number | null
  marketKind: LaMarketKind | 'all'
  onSelectMarket: (id: number) => void
  onCloseMarket: () => void
  onMarketKindChange: (kind: LaMarketKind | 'all') => void
  selectedStyleId: number | null
  styleKind: StyleKind | 'all'
  onSelectStyle: (id: number) => void
  onCloseStyle: () => void
  onStyleKindChange: (kind: StyleKind | 'all') => void
}

function LaLocationTabs({
  locale,
  category,
  onCategoryChange,
}: {
  locale: Locale
  category: LaLocationCategory
  onCategoryChange: (category: LaLocationCategory) => void
}) {
  return (
    <div
      className="locations-view__tabs"
      role="tablist"
      aria-label={t(locale, 'locationsCategories')}
    >
      {LA_LOCATION_CATEGORIES.map((id) => (
        <button
          key={id}
          type="button"
          role="tab"
          aria-selected={category === id}
          className={category === id ? 'is-active' : undefined}
          onClick={() => onCategoryChange(id)}
        >
          {t(locale, CATEGORY_I18N[id])}
        </button>
      ))}
    </div>
  )
}

export function LaLocationsView({
  locale,
  category,
  onCategoryChange,
  selectedMarketId,
  marketKind,
  onSelectMarket,
  onCloseMarket,
  onMarketKindChange,
  selectedStyleId,
  styleKind,
  onSelectStyle,
  onCloseStyle,
  onStyleKindChange,
}: Props) {
  const tabs = (
    <LaLocationTabs
      locale={locale}
      category={category}
      onCategoryChange={onCategoryChange}
    />
  )

  return (
    <div className="locations-view map-layout">
      {category === 'markets' && (
        <>
          <LaMarketMap
            locale={locale}
            selectedId={selectedMarketId}
            kind={marketKind}
            onSelect={onSelectMarket}
            toolbarExtra={tabs}
          />
          <LaMarketPanel
            locale={locale}
            selectedId={selectedMarketId}
            kind={marketKind}
            onSelect={onSelectMarket}
            onKindChange={onMarketKindChange}
            onClose={onCloseMarket}
          />
        </>
      )}
      {category === 'style' && (
        <>
          <LaStyleMap
            locale={locale}
            selectedId={selectedStyleId}
            kind={styleKind}
            onSelect={onSelectStyle}
            toolbarExtra={tabs}
          />
          <LaStylePanel
            locale={locale}
            selectedId={selectedStyleId}
            kind={styleKind}
            onSelect={onSelectStyle}
            onKindChange={onStyleKindChange}
            onClose={onCloseStyle}
          />
        </>
      )}
    </div>
  )
}
