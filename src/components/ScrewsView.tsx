import type { ReactNode } from 'react'
import type { ScrewDistrict } from '../data/colorfulScrews'
import {
  CANARI_PLUSHES,
  canariPlushTotalCost,
} from '../data/canariPlushes'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import { CanariPanel, CanariSprite } from './CanariPanel'
import { ScrewMap } from './ScrewMap'
import { ScrewPanel } from './ScrewPanel'
import './LocationsView.css'
import './CanariPanel.css'

export type ScrewsTab = 'screws' | 'canari'

type Props = {
  locale: Locale
  tab: ScrewsTab
  onTabChange: (tab: ScrewsTab) => void
  selectedScrewId: number | null
  screwDistrict: ScrewDistrict | 'all'
  hideCollectedScrews: boolean
  screwsCollected: Record<number, boolean>
  onSelectScrew: (id: number) => void
  onCloseScrew: () => void
  onScrewDistrictChange: (district: ScrewDistrict | 'all') => void
  onHideCollectedScrewsChange: (hide: boolean) => void
  onToggleScrew: (id: number) => void
  onResetScrews: () => void
  selectedCanariId: string | null
  onSelectCanari: (id: string) => void
  onCloseCanari: () => void
}

function ScrewsTabs({
  locale,
  tab,
  onTabChange,
}: {
  locale: Locale
  tab: ScrewsTab
  onTabChange: (tab: ScrewsTab) => void
}) {
  return (
    <div
      className="locations-view__tabs screws-view__tabs"
      role="tablist"
      aria-label={t(locale, 'screwsCategories')}
    >
      <button
        type="button"
        role="tab"
        aria-selected={tab === 'screws'}
        className={tab === 'screws' ? 'is-active' : undefined}
        onClick={() => onTabChange('screws')}
      >
        {t(locale, 'screwsTabScrews')}
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={tab === 'canari'}
        className={tab === 'canari' ? 'is-active' : undefined}
        onClick={() => onTabChange('canari')}
      >
        {t(locale, 'screwsTabCanari')}
      </button>
    </div>
  )
}

function CanariShop({
  locale,
  selectedId,
  onSelect,
  toolbarExtra,
}: {
  locale: Locale
  selectedId: string | null
  onSelect: (id: string) => void
  toolbarExtra?: ReactNode
}) {
  return (
    <div className="canari-shop">
      <div className="canari-shop__toolbar">
        <div>
          <h2>{t(locale, 'canariTitle')}</h2>
          <p>{t(locale, 'canariHint')}</p>
        </div>
        {toolbarExtra}
      </div>

      <div className="canari-shop__grid" role="list">
        {CANARI_PLUSHES.map((plush) => {
          const total = canariPlushTotalCost(plush)
          const selected = selectedId === plush.id
          return (
            <button
              key={plush.id}
              type="button"
              role="listitem"
              className={`canari-card${selected ? ' is-selected' : ''}`}
              aria-pressed={selected}
              onClick={() => onSelect(plush.id)}
            >
              <span className="canari-card__sprite">
                <CanariSprite sprite={plush.sprite} size={72} />
              </span>
              <span className="canari-card__body">
                <strong className="canari-card__name">{plush.name[locale]}</strong>
                <span className="canari-card__summary">{plush.summary[locale]}</span>
                <span className="canari-card__cost">
                  {total} {t(locale, 'canariScrewsShort')} · Lv.1–3
                </span>
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function ScrewsView({
  locale,
  tab,
  onTabChange,
  selectedScrewId,
  screwDistrict,
  hideCollectedScrews,
  screwsCollected,
  onSelectScrew,
  onCloseScrew,
  onScrewDistrictChange,
  onHideCollectedScrewsChange,
  onToggleScrew,
  onResetScrews,
  selectedCanariId,
  onSelectCanari,
  onCloseCanari,
}: Props) {
  const tabs = <ScrewsTabs locale={locale} tab={tab} onTabChange={onTabChange} />

  if (tab === 'canari') {
    return (
      <div className="map-layout locations-view">
        <CanariShop
          locale={locale}
          selectedId={selectedCanariId}
          onSelect={onSelectCanari}
          toolbarExtra={tabs}
        />
        <CanariPanel
          locale={locale}
          selectedId={selectedCanariId}
          onClose={onCloseCanari}
        />
      </div>
    )
  }

  return (
    <div className="map-layout locations-view">
      <ScrewMap
        locale={locale}
        selectedId={selectedScrewId}
        district={screwDistrict}
        hideCollected={hideCollectedScrews}
        collected={screwsCollected}
        onSelect={onSelectScrew}
        toolbarExtra={tabs}
      />
      <ScrewPanel
        locale={locale}
        selectedId={selectedScrewId}
        district={screwDistrict}
        hideCollected={hideCollectedScrews}
        collected={screwsCollected}
        onSelect={onSelectScrew}
        onDistrictChange={onScrewDistrictChange}
        onHideCollectedChange={onHideCollectedScrewsChange}
        onToggle={onToggleScrew}
        onReset={onResetScrews}
        onClose={onCloseScrew}
      />
    </div>
  )
}
