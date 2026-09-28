import { useState } from 'react'
import type { HisuiRegionId } from '../data/hisuiRegions'
import type { Locale } from '../i18n'
import { LaCraftBrowser, LaCraftPanel, type CraftTab } from './LaCraftPanel'

type Props = {
  locale: Locale
  onOpenHisuiLocation: (regionId: HisuiRegionId, subregionId: string) => void
  /** Optional initial tab (e.g. recipes from a deep link). */
  initialTab?: CraftTab
}

export function LaItemsView({
  locale,
  onOpenHisuiLocation,
  initialTab = 'items',
}: Props) {
  const [craftId, setCraftId] = useState<string | null>(null)
  const [craftTab, setCraftTab] = useState<CraftTab>(initialTab)

  return (
    <div className="map-layout map-layout--crafts">
      <LaCraftBrowser
        locale={locale}
        selectedId={craftId}
        tab={craftTab}
        onTabChange={(next) => {
          setCraftTab(next)
          setCraftId(null)
        }}
        onSelect={setCraftId}
      />
      <LaCraftPanel
        locale={locale}
        selectedId={craftId}
        tab={craftTab}
        onClose={() => setCraftId(null)}
        onOpenLocation={onOpenHisuiLocation}
      />
    </div>
  )
}
