import type { CenterDistrict } from '../data/pokemonCenters'
import type { StyleKind } from '../data/styleSpots'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import { CafeMap } from './CafeMap'
import { CafePanel } from './CafePanel'
import { CenterMap } from './CenterMap'
import { CenterPanel } from './CenterPanel'
import { MarketMap } from './MarketMap'
import { MarketPanel } from './MarketPanel'
import { RestaurantMap } from './RestaurantMap'
import { RestaurantPanel } from './RestaurantPanel'
import { StyleMap } from './StyleMap'
import { StylePanel } from './StylePanel'
import './LocationsView.css'

export type LocationCategory =
  | 'centers'
  | 'markets'
  | 'cafes'
  | 'style'
  | 'restaurants'

export const LOCATION_CATEGORIES: LocationCategory[] = [
  'centers',
  'markets',
  'cafes',
  'style',
  'restaurants',
]

const CATEGORY_I18N: Record<LocationCategory, string> = {
  centers: 'toolCenters',
  markets: 'toolMarkets',
  cafes: 'toolCafes',
  style: 'toolStyle',
  restaurants: 'toolRestaurants',
}

type Props = {
  locale: Locale
  category: LocationCategory
  onCategoryChange: (category: LocationCategory) => void
  selectedCenterId: number | null
  centerDistrict: CenterDistrict | 'all'
  onSelectCenter: (id: number) => void
  onCloseCenter: () => void
  onCenterDistrictChange: (district: CenterDistrict | 'all') => void
  selectedMarketId: number | null
  onSelectMarket: (id: number) => void
  onCloseMarket: () => void
  selectedCafeId: number | null
  onSelectCafe: (id: number) => void
  onCloseCafe: () => void
  selectedStyleId: number | null
  styleKind: StyleKind | 'all'
  onSelectStyle: (id: number) => void
  onCloseStyle: () => void
  onStyleKindChange: (kind: StyleKind | 'all') => void
  selectedRestaurantId: number | null
  onSelectRestaurant: (id: number) => void
  onCloseRestaurant: () => void
}

function LocationTabs({
  locale,
  category,
  onCategoryChange,
}: {
  locale: Locale
  category: LocationCategory
  onCategoryChange: (category: LocationCategory) => void
}) {
  return (
    <div
      className="locations-view__tabs"
      role="tablist"
      aria-label={t(locale, 'locationsCategories')}
    >
      {LOCATION_CATEGORIES.map((id) => (
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

export function LocationsView({
  locale,
  category,
  onCategoryChange,
  selectedCenterId,
  centerDistrict,
  onSelectCenter,
  onCloseCenter,
  onCenterDistrictChange,
  selectedMarketId,
  onSelectMarket,
  onCloseMarket,
  selectedCafeId,
  onSelectCafe,
  onCloseCafe,
  selectedStyleId,
  styleKind,
  onSelectStyle,
  onCloseStyle,
  onStyleKindChange,
  selectedRestaurantId,
  onSelectRestaurant,
  onCloseRestaurant,
}: Props) {
  const tabs = (
    <LocationTabs
      locale={locale}
      category={category}
      onCategoryChange={onCategoryChange}
    />
  )

  return (
    <div className="locations-view map-layout">
      {category === 'centers' && (
        <>
          <CenterMap
            locale={locale}
            selectedId={selectedCenterId}
            district={centerDistrict}
            onSelect={onSelectCenter}
            toolbarExtra={tabs}
          />
          <CenterPanel
            locale={locale}
            selectedId={selectedCenterId}
            district={centerDistrict}
            onSelect={onSelectCenter}
            onDistrictChange={onCenterDistrictChange}
            onClose={onCloseCenter}
          />
        </>
      )}
      {category === 'markets' && (
        <>
          <MarketMap
            locale={locale}
            selectedId={selectedMarketId}
            onSelect={onSelectMarket}
            toolbarExtra={tabs}
          />
          <MarketPanel
            locale={locale}
            selectedId={selectedMarketId}
            onSelect={onSelectMarket}
            onClose={onCloseMarket}
          />
        </>
      )}
      {category === 'cafes' && (
        <>
          <CafeMap
            locale={locale}
            selectedId={selectedCafeId}
            onSelect={onSelectCafe}
            toolbarExtra={tabs}
          />
          <CafePanel
            locale={locale}
            selectedId={selectedCafeId}
            onSelect={onSelectCafe}
            onClose={onCloseCafe}
          />
        </>
      )}
      {category === 'style' && (
        <>
          <StyleMap
            locale={locale}
            selectedId={selectedStyleId}
            kind={styleKind}
            onSelect={onSelectStyle}
            toolbarExtra={tabs}
          />
          <StylePanel
            locale={locale}
            selectedId={selectedStyleId}
            kind={styleKind}
            onSelect={onSelectStyle}
            onKindChange={onStyleKindChange}
            onClose={onCloseStyle}
          />
        </>
      )}
      {category === 'restaurants' && (
        <>
          <RestaurantMap
            locale={locale}
            selectedId={selectedRestaurantId}
            onSelect={onSelectRestaurant}
            toolbarExtra={tabs}
          />
          <RestaurantPanel
            locale={locale}
            selectedId={selectedRestaurantId}
            onSelect={onSelectRestaurant}
            onClose={onCloseRestaurant}
          />
        </>
      )}
    </div>
  )
}
