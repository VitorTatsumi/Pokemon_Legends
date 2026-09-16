import { useEffect, useMemo, useState } from 'react'
import { getHisuiRegion, HISUI_REGIONS, type HisuiRegionId } from '../data/hisuiRegions'
import type { LaMission, LaMissionKind } from '../data/laMissions'
import { LA_MISSIONS, laMissionsForRegion } from '../data/laMissions'
import { parseLaMissionRewards } from '../data/laRewardItems'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './MissionPanel.css'

type Props = {
  locale: Locale
  selectedRegionId: HisuiRegionId | null
  selectedId: string | null
  kind: LaMissionKind
  completed: Record<string, boolean>
  hideCompleted: boolean
  onSelect: (id: string) => void
  onKindChange: (kind: LaMissionKind) => void
  onHideCompletedChange: (hide: boolean) => void
  onToggle: (id: string) => void
  onClose: () => void
  onClearRegion: () => void
}

function subregionName(
  locale: Locale,
  regionId: HisuiRegionId,
  subregionId: string,
) {
  const region = getHisuiRegion(regionId)
  return (
    region?.subregions.find((s) => s.id === subregionId)?.name[locale] ?? subregionId
  )
}

export function LaMissionPanel({
  locale,
  selectedRegionId,
  selectedId,
  kind,
  completed,
  hideCompleted,
  onSelect,
  onKindChange,
  onHideCompletedChange,
  onToggle,
  onClose,
  onClearRegion,
}: Props) {
  const [query, setQuery] = useState('')
  const region = getHisuiRegion(selectedRegionId)

  const scopedMissions = useMemo(() => {
    if (selectedRegionId) return laMissionsForRegion(selectedRegionId, kind)
    return LA_MISSIONS.filter((m) => m.kind === kind)
  }, [selectedRegionId, kind])

  const selected =
    scopedMissions.find((m) => m.id === selectedId) ??
    LA_MISSIONS.find((m) => m.id === selectedId && m.kind === kind) ??
    null

  useEffect(() => {
    if (!selectedId) return
    const el = document.querySelector(`[data-la-mission-id="${selectedId}"]`)
    el?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [selectedId, kind, query, hideCompleted, selectedRegionId])

  const completedCount = useMemo(
    () => scopedMissions.filter((m) => completed[m.id]).length,
    [completed, scopedMissions],
  )

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return scopedMissions.filter((m) => {
      if (hideCompleted && completed[m.id]) return false
      if (!q) return true
      const sub = subregionName(locale, m.regionId, m.subregionId)
      const regionName =
        HISUI_REGIONS.find((r) => r.id === m.regionId)?.name[locale] ?? ''
      return (
        m.name[locale].toLowerCase().includes(q) ||
        m.location[locale].toLowerCase().includes(q) ||
        m.description[locale].toLowerCase().includes(q) ||
        sub.toLowerCase().includes(q) ||
        regionName.toLowerCase().includes(q) ||
        String(m.number).includes(q)
      )
    })
  }, [completed, hideCompleted, locale, query, scopedMissions])

  return (
    <aside className={`mission-panel${selected ? '' : ' mission-panel--list-only'}`}>
      <header className="mission-panel__head">
        <div>
          <p className="mission-panel__eyebrow">{t(locale, 'toolMissions')}</p>
          <h2>
            {selected
              ? selected.name[locale]
              : region
                ? region.name[locale]
                : t(locale, 'laMissionsTitle')}
          </h2>
          <p className="mission-panel__progress">
            {completedCount}/{scopedMissions.length}
          </p>
        </div>
        {(selected || region) && (
          <button
            type="button"
            className="mission-panel__close"
            onClick={selected ? onClose : onClearRegion}
          >
            {selected ? t(locale, 'close') : t(locale, 'hisuiBackOverview')}
          </button>
        )}
      </header>

      {selected ? (
        <MissionDetails
          locale={locale}
          mission={selected}
          regionName={
            HISUI_REGIONS.find((r) => r.id === selected.regionId)?.name[locale] ??
            selected.location[locale]
          }
          subregionName={subregionName(
            locale,
            selected.regionId,
            selected.subregionId,
          )}
          completed={Boolean(completed[selected.id])}
          onToggle={() => onToggle(selected.id)}
        />
      ) : (
        <p className="mission-panel__hint">
          {region
            ? t(locale, 'missionsSelectHint')
            : t(locale, 'laMissionsOverviewHint')}
        </p>
      )}

      <section className="mission-panel__list-section">
        <div className="mission-panel__section-head">
          <h3>{t(locale, 'missionsList')}</h3>
          <div
            className="mission-panel__kind-tabs"
            role="group"
            aria-label={t(locale, 'toolMissions')}
          >
            <button
              type="button"
              className={kind === 'main' ? 'is-active' : undefined}
              onClick={() => onKindChange('main')}
            >
              {t(locale, 'laMissionsMain')}
            </button>
            <button
              type="button"
              className={kind === 'side' ? 'is-active' : undefined}
              onClick={() => onKindChange('side')}
            >
              {t(locale, 'laMissionsSide')}
            </button>
          </div>
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
            checked={hideCompleted}
            onChange={(e) => onHideCompletedChange(e.currentTarget.checked)}
          />
          {t(locale, 'missionsHideCompleted')}
        </label>

        <ul className="mission-list">
          {list.map((m) => {
            const sub = subregionName(locale, m.regionId, m.subregionId)
            const regionLabel =
              !region
                ? HISUI_REGIONS.find((r) => r.id === m.regionId)?.name[locale]
                : null
            const secondary = [regionLabel, sub].filter(Boolean).join(' · ')
            return (
              <li key={m.id}>
                <button
                  type="button"
                  data-la-mission-id={m.id}
                  className={[
                    selectedId === m.id ? 'is-active' : '',
                    completed[m.id] ? 'is-completed' : '',
                  ]
                    .filter(Boolean)
                    .join(' ') || undefined}
                  onClick={() => onSelect(m.id)}
                >
                  <span
                    className={
                      m.kind === 'main' ? 'badge badge--main' : 'badge badge--side'
                    }
                  >
                    {m.kind === 'main' ? 'M' : 'P'}
                    {m.number}
                  </span>
                  <span className="mission-list__name">
                    <span className="mission-list__title">{m.name[locale]}</span>
                    {secondary ? (
                      <small className="mission-list__sub">{secondary}</small>
                    ) : null}
                  </span>
                  {completed[m.id] && (
                    <span className="mission-list__done" aria-hidden>
                      ✓
                    </span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </section>
    </aside>
  )
}

function MissionDetails({
  locale,
  mission,
  regionName,
  subregionName,
  completed,
  onToggle,
}: {
  locale: Locale
  mission: LaMission
  regionName: string
  subregionName: string
  completed: boolean
  onToggle: () => void
}) {
  const rewardRows = mission.rewards
    ? parseLaMissionRewards(mission.rewards.en, mission.rewards.pt, locale)
    : []

  return (
    <div className="mission-details">
      <div className="mission-details__meta">
        <span className={mission.kind === 'main' ? 'badge badge--main' : 'badge badge--side'}>
          {mission.kind === 'main' ? t(locale, 'laMainMission') : t(locale, 'laSideMission')}{' '}
          {mission.number}
        </span>
      </div>
      <p className="mission-details__desc">{mission.description[locale]}</p>
      <dl className="mission-details__facts">
        <div>
          <dt>{t(locale, 'hisuiRegions')}</dt>
          <dd>{regionName}</dd>
        </div>
        <div>
          <dt>{t(locale, 'hisuiSubregions')}</dt>
          <dd>{subregionName}</dd>
        </div>
        {mission.requester && (
          <div>
            <dt>{t(locale, 'laMissionRequester')}</dt>
            <dd>{mission.requester}</dd>
          </div>
        )}
        {mission.rewards && (
          <div>
            <dt>{t(locale, 'laMissionRewards')}</dt>
            <dd>
              {rewardRows.length === 0 ? (
                <span>{mission.rewards[locale]}</span>
              ) : (
                <ul className="reward-list">
                  {rewardRows.map((reward) => (
                    <li key={reward.key}>
                      {reward.spriteUrl ? (
                        <img
                          src={reward.spriteUrl}
                          alt=""
                          width={32}
                          height={32}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.visibility = 'hidden'
                          }}
                        />
                      ) : (
                        <span className="reward-list__placeholder" aria-hidden />
                      )}
                      <span>{reward.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </dd>
          </div>
        )}
        <div>
          <dt>{t(locale, 'missionUnlock')}</dt>
          <dd>{mission.unlock[locale]}</dd>
        </div>
      </dl>
      <button
        type="button"
        className={completed ? 'mission-details__toggle is-on' : 'mission-details__toggle'}
        onClick={onToggle}
        aria-pressed={completed}
      >
        {completed ? t(locale, 'missionsCompleted') : t(locale, 'missionsMarkCompleted')}
      </button>
    </div>
  )
}
