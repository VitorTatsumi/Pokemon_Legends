import { useEffect, useMemo, useState } from 'react'
import type { Mission, MissionKind } from '../data/missions'
import { MISSIONS } from '../data/missions'
import { parseMissionRewards } from '../data/rewardItems'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './MissionPanel.css'

type Props = {
  locale: Locale
  selectedId: string | null
  kind: MissionKind
  completed: Record<string, boolean>
  hideCompleted: boolean
  onSelect: (id: string) => void
  onKindChange: (kind: MissionKind) => void
  onHideCompletedChange: (hide: boolean) => void
  onToggle: (id: string) => void
  onClose: () => void
}

export function MissionPanel({
  locale,
  selectedId,
  kind,
  completed,
  hideCompleted,
  onSelect,
  onKindChange,
  onHideCompletedChange,
  onToggle,
  onClose,
}: Props) {
  const [query, setQuery] = useState('')
  const selected = MISSIONS.find((m) => m.id === selectedId && m.kind === kind) ?? null

  useEffect(() => {
    if (!selectedId) return
    const el = document.querySelector(`[data-mission-id="${selectedId}"]`)
    el?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [selectedId, kind, query, hideCompleted])

  const completedCount = useMemo(
    () => MISSIONS.filter((m) => m.kind === kind && completed[m.id]).length,
    [completed, kind],
  )
  const totalOfKind = useMemo(() => MISSIONS.filter((m) => m.kind === kind).length, [kind])

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return MISSIONS.filter((m) => {
      if (m.kind !== kind) return false
      if (hideCompleted && completed[m.id]) return false
      if (!q) return true
      return (
        m.name[locale].toLowerCase().includes(q) ||
        m.location[locale].toLowerCase().includes(q) ||
        String(m.number).includes(q) ||
        (m.requester?.toLowerCase().includes(q) ?? false)
      )
    })
  }, [completed, hideCompleted, kind, locale, query])

  return (
    <aside className={`mission-panel${selected ? '' : ' mission-panel--list-only'}`}>
      <header className="mission-panel__head">
        <div>
          <p className="mission-panel__eyebrow">{t(locale, 'toolMissions')}</p>
          <h2>{selected ? selected.name[locale] : t(locale, 'missionsTitle')}</h2>
          <p className="mission-panel__progress">
            {completedCount}/{totalOfKind}
          </p>
        </div>
        {selected && (
          <button type="button" className="mission-panel__close" onClick={onClose}>
            {t(locale, 'close')}
          </button>
        )}
      </header>

      {selected ? (
        <MissionDetails
          locale={locale}
          mission={selected}
          completed={Boolean(completed[selected.id])}
          onToggle={() => onToggle(selected.id)}
        />
      ) : (
        <p className="mission-panel__hint">{t(locale, 'missionsSelectHint')}</p>
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
              {t(locale, 'missionsMain')}
            </button>
            <button
              type="button"
              className={kind === 'side' ? 'is-active' : undefined}
              onClick={() => onKindChange('side')}
            >
              {t(locale, 'missionsSide')}
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
            onChange={(e) => onHideCompletedChange(e.target.checked)}
          />
          {t(locale, 'missionsHideCompleted')}
        </label>

        <ul className="mission-list">
          {list.map((m) => (
            <li key={m.id}>
              <button
                type="button"
                data-mission-id={m.id}
                className={[
                  selectedId === m.id ? 'is-active' : '',
                  completed[m.id] ? 'is-completed' : '',
                ]
                  .filter(Boolean)
                  .join(' ') || undefined}
                onClick={() => onSelect(m.id)}
              >
                <span className={m.kind === 'main' ? 'badge badge--main' : 'badge badge--side'}>
                  {m.kind === 'main' ? 'M' : 'S'}
                  {m.number}
                </span>
                <span className="mission-list__name">
                  <span className="mission-list__title">{m.name[locale]}</span>
                </span>
                {completed[m.id] && (
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

function MissionDetails({
  locale,
  mission,
  completed,
  onToggle,
}: {
  locale: Locale
  mission: Mission
  completed: boolean
  onToggle: () => void
}) {
  return (
    <div className="mission-details">
      <div className="mission-details__meta">
        <span className={mission.kind === 'main' ? 'badge badge--main' : 'badge badge--side'}>
          {mission.kind === 'main' ? t(locale, 'mainMission') : t(locale, 'sideMission')}{' '}
          {mission.number}
        </span>
      </div>
      <p className="mission-details__desc">{mission.description[locale]}</p>
      <dl className="mission-details__facts">
        <div>
          <dt>{t(locale, 'missionLocation')}</dt>
          <dd>{mission.location[locale]}</dd>
        </div>
        <div>
          <dt>{t(locale, 'missionUnlock')}</dt>
          <dd>{mission.unlock[locale]}</dd>
        </div>
        {mission.requester && (
          <div>
            <dt>{t(locale, 'missionRequester')}</dt>
            <dd>{mission.requester}</dd>
          </div>
        )}
        {mission.rewards && (
          <div>
            <dt>{t(locale, 'missionRewards')}</dt>
            <dd>
              <ul className="reward-list">
                {parseMissionRewards(
                  mission.rewards.en,
                  mission.rewards.pt,
                  locale,
                ).map((reward) => (
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
            </dd>
          </div>
        )}
      </dl>
      <button
        type="button"
        className={`mission-details__toggle${completed ? ' is-on' : ''}`}
        onClick={onToggle}
      >
        {completed ? t(locale, 'missionsCompleted') : t(locale, 'missionsMarkCompleted')}
      </button>
    </div>
  )
}
