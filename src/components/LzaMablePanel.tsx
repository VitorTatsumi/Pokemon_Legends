import { useMemo, useState } from 'react'
import { lzaItemSpriteCandidates } from '../data/lzaItemSprites'
import {
  formatMableRewardLabel,
  MABLE_REWARDS,
  MABLE_TASK_CATEGORY_KEYS,
  MABLE_TASKS,
  type MableReward,
  type MableTask,
} from '../data/lzaMableResearch'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './MissionPanel.css'
import './LaCraft.css'
import './LzaMable.css'

type Tab = 'rewards' | 'tasks'

type Props = {
  locale: Locale
}

export function LzaMableView({ locale }: Props) {
  const [tab, setTab] = useState<Tab>('rewards')
  const [selectedId, setSelectedId] = useState<string | null>('reward-49')

  return (
    <div className="map-layout map-layout--crafts">
      <MableBrowser
        locale={locale}
        tab={tab}
        selectedId={selectedId}
        onTabChange={setTab}
        onSelect={setSelectedId}
      />
      <MableDetailPanel
        locale={locale}
        tab={tab}
        selectedId={selectedId}
        onClose={() => setSelectedId(null)}
      />
    </div>
  )
}

function ItemSprite({ sprite, size }: { sprite: string; size: number }) {
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

function MableBrowser({
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
  const [category, setCategory] = useState<MableTask['category'] | 'all'>('all')

  const rewardRows = useMemo(() => {
    const q = query.trim().toLowerCase()
    return MABLE_REWARDS.filter((r) => {
      if (!q) return true
      return (
        formatMableRewardLabel(r, locale).toLowerCase().includes(q) ||
        String(r.level).includes(q)
      )
    })
  }, [locale, query])

  const taskRows = useMemo(() => {
    const q = query.trim().toLowerCase()
    return MABLE_TASKS.filter((task) => {
      if (category !== 'all' && task.category !== category) return false
      if (!q) return true
      return (
        task.name[locale].toLowerCase().includes(q) ||
        task.description[locale].toLowerCase().includes(q) ||
        t(locale, MABLE_TASK_CATEGORY_KEYS[task.category]).toLowerCase().includes(q)
      )
    })
  }, [category, locale, query])

  return (
    <div className="map-shell la-craft-browser">
      <div className="map-toolbar">
        <div>
          <h2>{t(locale, 'mableTitle')}</h2>
          <p>{t(locale, 'mableHint')}</p>
        </div>
      </div>

      <div className="la-craft-browser__body">
        <div className="mission-panel__kind-tabs la-craft-tabs" role="group">
          <button
            type="button"
            className={tab === 'rewards' ? 'is-active' : undefined}
            onClick={() => {
              onTabChange('rewards')
              onSelect('reward-49')
            }}
          >
            {t(locale, 'mableTabRewards')}
          </button>
          <button
            type="button"
            className={tab === 'tasks' ? 'is-active' : undefined}
            onClick={() => {
              onTabChange('tasks')
              onSelect(MABLE_TASKS[0]?.id ?? null)
            }}
          >
            {t(locale, 'mableTabTasks')}
          </button>
        </div>

        {tab === 'tasks' && (
          <div className="mission-panel__kind-tabs la-craft-tabs la-craft-tabs--wrap" role="group">
            <button
              type="button"
              className={category === 'all' ? 'is-active' : undefined}
              onClick={() => setCategory('all')}
            >
              {t(locale, 'lzaItemsAll')}
            </button>
            {(Object.keys(MABLE_TASK_CATEGORY_KEYS) as MableTask['category'][]).map((cat) => (
              <button
                key={cat}
                type="button"
                className={category === cat ? 'is-active' : undefined}
                onClick={() => setCategory(cat)}
              >
                {t(locale, MABLE_TASK_CATEGORY_KEYS[cat])}
              </button>
            ))}
          </div>
        )}

        <div className="mission-panel__search">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t(locale, 'mableSearch')}
            aria-label={t(locale, 'mableSearch')}
          />
        </div>

        <div className="la-craft-browser__grid" role="list">
          {tab === 'rewards'
            ? rewardRows.map((reward) => {
                const id = `reward-${reward.level}`
                return (
                  <button
                    key={id}
                    type="button"
                    role="listitem"
                    className={['la-craft-card', selectedId === id ? 'is-active' : '']
                      .filter(Boolean)
                      .join(' ')}
                    onClick={() => onSelect(id)}
                  >
                    {reward.sprite ? (
                      <ItemSprite sprite={reward.sprite} size={40} />
                    ) : (
                      <span className="mable-level-badge">Lv {reward.level}</span>
                    )}
                    <strong>
                      {t(locale, 'mableLevel')} {reward.level}
                    </strong>
                    <span className="la-craft-card__meta">
                      {formatMableRewardLabel(reward, locale)}
                    </span>
                  </button>
                )
              })
            : taskRows.map((task) => (
                <button
                  key={task.id}
                  type="button"
                  role="listitem"
                  className={['la-craft-card', selectedId === task.id ? 'is-active' : '']
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => onSelect(task.id)}
                >
                  <span className="mable-level-badge mable-level-badge--task">
                    {task.stages.length}
                  </span>
                  <strong>{task.name[locale]}</strong>
                  <span className="la-craft-card__meta">
                    {t(locale, MABLE_TASK_CATEGORY_KEYS[task.category])} · {task.stages.length}{' '}
                    {t(locale, 'mableStages')}
                  </span>
                </button>
              ))}
        </div>
      </div>
    </div>
  )
}

function MableDetailPanel({
  locale,
  tab,
  selectedId,
  onClose,
}: {
  locale: Locale
  tab: Tab
  selectedId: string | null
  onClose: () => void
}) {
  const reward: MableReward | null =
    tab === 'rewards' && selectedId?.startsWith('reward-')
      ? (MABLE_REWARDS.find((r) => `reward-${r.level}` === selectedId) ?? null)
      : null
  const task: MableTask | null =
    tab === 'tasks' && selectedId
      ? (MABLE_TASKS.find((x) => x.id === selectedId) ?? null)
      : null

  if (!reward && !task) {
    return (
      <aside className="mission-panel la-craft-panel">
        <div className="mission-panel__empty">
          <p>{t(locale, 'mableSelectHint')}</p>
        </div>
      </aside>
    )
  }

  return (
    <aside className="mission-panel la-craft-panel">
      <div className="mission-panel__header">
        <div>
          <p className="mission-panel__eyebrow">{t(locale, 'mableTitle')}</p>
          <h2>
            {reward
              ? `${t(locale, 'mableLevel')} ${reward.level}`
              : task!.name[locale]}
          </h2>
        </div>
        <button type="button" className="mission-panel__close" onClick={onClose}>
          {t(locale, 'close')}
        </button>
      </div>

      <div className="la-craft-detail">
        {reward && (
          <>
            <div className="la-craft-detail__hero">
              <div className="la-craft-detail__sprite">
                {reward.sprite ? (
                  <ItemSprite sprite={reward.sprite} size={56} />
                ) : (
                  <span className="mable-level-badge">Lv {reward.level}</span>
                )}
              </div>
              <div className="la-craft-detail__hero-text">
                <p className="la-craft-detail__category">{t(locale, 'mableTabRewards')}</p>
                <p className="la-craft-detail__desc">
                  {formatMableRewardLabel(reward, locale)}
                </p>
              </div>
            </div>
            <section className="la-craft-detail__section">
              <h3>{t(locale, 'mableHowToClaim')}</h3>
              <p className="la-craft-detail__desc">{t(locale, 'mableClaimBody')}</p>
            </section>
          </>
        )}

        {task && (
          <>
            <div className="la-craft-detail__hero">
              <div className="la-craft-detail__hero-text">
                <p className="la-craft-detail__category">
                  {t(locale, MABLE_TASK_CATEGORY_KEYS[task.category])}
                </p>
                <p className="la-craft-detail__desc">{task.description[locale]}</p>
              </div>
            </div>
            <section className="la-craft-detail__section">
              <h3>
                {t(locale, 'mableObjectives')} · {task.stages.length} {t(locale, 'mableStages')}
              </h3>
              <ol className="mable-stages">
                {task.stages.map((stage) => (
                  <li key={stage.stage} className="mable-stage">
                    <span className="mable-stage__n">
                      {t(locale, 'mableStage')} {stage.stage}
                    </span>
                    <strong className="mable-stage__target">
                      {task.category === 'zone' || stage.target === 1
                        ? t(locale, 'mableCompleteOnce')
                        : `${t(locale, 'mableTarget')}: ${stage.target.toLocaleString(
                            locale === 'pt' ? 'pt-BR' : 'en-US',
                          )}`}
                    </strong>
                  </li>
                ))}
              </ol>
            </section>
          </>
        )}
      </div>
    </aside>
  )
}
