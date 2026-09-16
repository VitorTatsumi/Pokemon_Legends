import { useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  HISUI_REGIONS,
  getHisuiRegion,
  type HisuiRegionId,
} from '../data/hisuiRegions'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './MissionPanel.css'
import './LaPinGuide.css'

export type LaPinListItem = {
  id: string
  title: string
  subtitle?: string
  body?: string
  regionId: HisuiRegionId
  subregionId?: string
  done?: boolean
  extra?: ReactNode
}

type Props = {
  locale: Locale
  eyebrow: string
  title: string
  hint: string
  items: LaPinListItem[]
  selectedId: string | null
  regionFilter: HisuiRegionId | 'all'
  hideDone: boolean
  completedCount: number
  totalCount: number
  onSelect: (id: string) => void
  onRegionFilter: (id: HisuiRegionId | 'all') => void
  onHideDoneChange: (hide: boolean) => void
  onToggle?: (id: string) => void
  onClose: () => void
  detailFields?: (item: LaPinListItem) => { label: string; value: string }[]
}

export function LaPinPanel({
  locale,
  eyebrow,
  title,
  hint,
  items,
  selectedId,
  regionFilter,
  hideDone,
  completedCount,
  totalCount,
  onSelect,
  onRegionFilter,
  onHideDoneChange,
  onToggle,
  onClose,
  detailFields,
}: Props) {
  const [query, setQuery] = useState('')
  const selected = items.find((i) => i.id === selectedId) ?? null

  useEffect(() => {
    if (!selectedId) return
    document
      .querySelector(`[data-la-pin-id="${selectedId}"]`)
      ?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [selectedId, regionFilter, hideDone, query])

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((i) => {
      if (regionFilter !== 'all' && i.regionId !== regionFilter) return false
      if (hideDone && i.done) return false
      if (!q) return true
      return (
        i.title.toLowerCase().includes(q) ||
        (i.subtitle?.toLowerCase().includes(q) ?? false) ||
        (i.body?.toLowerCase().includes(q) ?? false)
      )
    })
  }, [hideDone, items, query, regionFilter])

  const regionName = (id: HisuiRegionId) =>
    HISUI_REGIONS.find((r) => r.id === id)?.name[locale] ?? id

  const subName = (regionId: HisuiRegionId, subId?: string) => {
    if (!subId) return ''
    return (
      getHisuiRegion(regionId)?.subregions.find((s) => s.id === subId)?.name[locale] ??
      subId
    )
  }

  return (
    <aside className={`mission-panel${selected ? '' : ' mission-panel--list-only'}`}>
      <header className="mission-panel__head">
        <div>
          <p className="mission-panel__eyebrow">{eyebrow}</p>
          <h2>{selected ? selected.title : title}</h2>
          <p className="mission-panel__progress">
            {completedCount}/{totalCount}
          </p>
        </div>
        {selected && (
          <button type="button" className="mission-panel__close" onClick={onClose}>
            {t(locale, 'close')}
          </button>
        )}
      </header>

      {selected ? (
        <div className="mission-details">
          {selected.subtitle && (
            <p className="mission-details__desc">{selected.subtitle}</p>
          )}
          {selected.body && <p className="mission-details__desc">{selected.body}</p>}
          <dl className="mission-details__facts">
            <div>
              <dt>{t(locale, 'hisuiRegions')}</dt>
              <dd>{regionName(selected.regionId)}</dd>
            </div>
            {selected.subregionId && (
              <div>
                <dt>{t(locale, 'hisuiSubregions')}</dt>
                <dd>{subName(selected.regionId, selected.subregionId)}</dd>
              </div>
            )}
            {detailFields?.(selected).map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          {selected.extra}
          {onToggle && (
            <button
              type="button"
              className={
                selected.done
                  ? 'mission-details__toggle is-on'
                  : 'mission-details__toggle'
              }
              onClick={() => onToggle(selected.id)}
              aria-pressed={Boolean(selected.done)}
            >
              {selected.done
                ? t(locale, 'missionsCompleted')
                : t(locale, 'missionsMarkCompleted')}
            </button>
          )}
        </div>
      ) : (
        <p className="mission-panel__hint">{hint}</p>
      )}

      <section className="mission-panel__list-section">
        <div className="mission-panel__section-head">
          <h3>{t(locale, 'laGuideList')}</h3>
        </div>

        <div className="la-pin-filters" role="group" aria-label={t(locale, 'hisuiRegions')}>
          <button
            type="button"
            className={regionFilter === 'all' ? 'is-active' : undefined}
            onClick={() => onRegionFilter('all')}
          >
            {t(locale, 'laGuideAllRegions')}
          </button>
          {HISUI_REGIONS.map((r) => (
            <button
              key={r.id}
              type="button"
              className={regionFilter === r.id ? 'is-active' : undefined}
              onClick={() => onRegionFilter(r.id)}
            >
              {r.name[locale]}
            </button>
          ))}
        </div>

        <div className="mission-panel__search">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t(locale, 'missionsSearch')}
            aria-label={t(locale, 'missionsSearch')}
          />
        </div>

        <label className="mission-panel__hide">
          <input
            type="checkbox"
            checked={hideDone}
            onChange={(e) => onHideDoneChange(e.currentTarget.checked)}
          />
          {t(locale, 'laGuideHideDone')}
        </label>

        <ul className="mission-list">
          {list.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                data-la-pin-id={item.id}
                className={[
                  selectedId === item.id ? 'is-active' : '',
                  item.done ? 'is-completed' : '',
                ]
                  .filter(Boolean)
                  .join(' ') || undefined}
                onClick={() => onSelect(item.id)}
              >
                <span className="mission-list__name">
                  {item.title}
                  <small className="mission-list__sub">
                    {[regionName(item.regionId), subName(item.regionId, item.subregionId)]
                      .filter(Boolean)
                      .join(' · ')}
                  </small>
                </span>
                {item.done && (
                  <span className="mission-list__done" aria-hidden>
                    ✓
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}
