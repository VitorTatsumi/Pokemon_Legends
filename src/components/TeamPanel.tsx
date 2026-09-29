import { useEffect, useMemo, useRef, useState } from 'react'
import type { GameId } from '../data/games'
import {
  calcAllStats,
  clamp,
  clampEvChange,
  DEFAULT_LEVEL,
  emptyMember,
  emptyMoves,
  emptyStats,
  evTotal,
  fetchBaseStats,
  fetchTeamLearnset,
  getNature,
  getTeamHeldItem,
  MAX_EV,
  MAX_EV_TOTAL,
  MAX_EFFORT_LEVEL,
  MAX_IV,
  MAX_LEVEL,
  MIN_LEVEL,
  MOVE_SLOTS,
  NATURES,
  parseTeamJson,
  pokedexForGame,
  serializeTeam,
  TEAM_HELD_ITEMS,
  TEAM_SIZE,
  TEAM_STAT_KEYS,
  teamItemSpriteUrl,
  type NatureId,
  type TeamExport,
  type TeamLearnableMove,
  type TeamMember,
  type TeamMove,
  type TeamStatKey,
} from '../data/teamBuilder'
import { spriteUrl } from '../data/wildZones'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './TeamPanel.css'

type Props = {
  locale: Locale
  game: GameId
  team: TeamExport
  onChange: (team: TeamExport) => void
  onReset: () => void
}

const STAT_I18N: Record<TeamStatKey, string> = {
  hp: 'stat_hp',
  atk: 'stat_attack',
  def: 'stat_defense',
  spa: 'stat_special-attack',
  spd: 'stat_special-defense',
  spe: 'stat_speed',
}

export function TeamPanel({ locale, game, team, onChange, onReset }: Props) {
  const [activeSlot, setActiveSlot] = useState(0)
  const [activeMoveSlot, setActiveMoveSlot] = useState(0)
  const [pokeQuery, setPokeQuery] = useState('')
  const [itemQuery, setItemQuery] = useState('')
  const [moveQuery, setMoveQuery] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const [loadingDex, setLoadingDex] = useState<number | null>(null)
  const [learnset, setLearnset] = useState<TeamLearnableMove[]>([])
  const [learnsetLoading, setLearnsetLoading] = useState(false)
  const [learnsetError, setLearnsetError] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const catalog = useMemo(() => pokedexForGame(game), [game])
  const member = team.members[activeSlot] ?? emptyMember(activeSlot)
  const memberMoves = member.moves?.length === MOVE_SLOTS ? member.moves : emptyMoves()
  const finalStats = calcAllStats(member, game)
  const remainingEvs = MAX_EV_TOTAL - evTotal(member.evs)
  const isLa = game === 'la'
  const effortLevels = member.effortLevels ?? emptyStats(MAX_EFFORT_LEVEL)

  const pokeMatches = useMemo(() => {
    const q = pokeQuery.trim().toLowerCase()
    if (!q) return catalog.slice(0, 40)
    return catalog
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          String(p.dex).includes(q) ||
          String(p.regional).includes(q),
      )
      .slice(0, 40)
  }, [catalog, pokeQuery])

  const itemMatches = useMemo(() => {
    const q = itemQuery.trim().toLowerCase()
    if (!q) return TEAM_HELD_ITEMS
    return TEAM_HELD_ITEMS.filter(
      (item) =>
        item.name.en.toLowerCase().includes(q) ||
        item.name.pt.toLowerCase().includes(q) ||
        item.id.includes(q),
    )
  }, [itemQuery])

  const selectedMoveIds = useMemo(
    () => new Set(memberMoves.filter(Boolean).map((m) => m!.moveId)),
    [memberMoves],
  )

  const moveMatches = useMemo(() => {
    const q = moveQuery.trim().toLowerCase()
    if (!q) return learnset
    return learnset.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        String(m.moveId).includes(q) ||
        (m.tm ?? '').toLowerCase().includes(q) ||
        m.kind.includes(q),
    )
  }, [learnset, moveQuery])

  useEffect(() => {
    setPokeQuery('')
    setItemQuery('')
    setMoveQuery('')
    setActiveMoveSlot(0)
    setStatus(null)
  }, [activeSlot, game])

  useEffect(() => {
    if (member.dex == null) {
      setLearnset([])
      setLearnsetLoading(false)
      setLearnsetError(false)
      return
    }

    let cancelled = false
    setLearnsetLoading(true)
    setLearnsetError(false)
    fetchTeamLearnset(game, member.dex, locale)
      .then((moves) => {
        if (cancelled) return
        setLearnset(moves)
        setLearnsetLoading(false)
      })
      .catch(() => {
        if (cancelled) return
        setLearnset([])
        setLearnsetLoading(false)
        setLearnsetError(true)
      })

    return () => {
      cancelled = true
    }
  }, [member.dex, game, locale])

  function patchMember(slot: number, patch: Partial<TeamMember>) {
    onChange({
      ...team,
      updatedAt: new Date().toISOString(),
      members: team.members.map((m, i) => (i === slot ? { ...m, ...patch } : m)),
    })
  }

  async function selectPokemon(dex: number, name: string) {
    setLoadingDex(dex)
    setStatus(null)
    try {
      const baseStats = await fetchBaseStats(dex)
      patchMember(activeSlot, { dex, name, baseStats, moves: emptyMoves() })
      setPokeQuery('')
      setMoveQuery('')
      setActiveMoveSlot(0)
    } catch {
      setStatus(t(locale, 'teamLoadStatsError'))
    } finally {
      setLoadingDex(null)
    }
  }

  function clearSlot() {
    patchMember(activeSlot, emptyMember(activeSlot))
    setPokeQuery('')
    setItemQuery('')
    setMoveQuery('')
    setActiveMoveSlot(0)
  }

  function setIv(key: TeamStatKey, value: number) {
    patchMember(activeSlot, {
      ivs: { ...member.ivs, [key]: clamp(value, 0, MAX_IV) },
    })
  }

  function setEv(key: TeamStatKey, value: number) {
    patchMember(activeSlot, {
      evs: { ...member.evs, [key]: clampEvChange(member.evs, key, value) },
    })
  }

  function setEffortLevel(key: TeamStatKey, value: number) {
    patchMember(activeSlot, {
      effortLevels: {
        ...effortLevels,
        [key]: clamp(value, 0, MAX_EFFORT_LEVEL),
      },
    })
  }

  function maxAllEffortLevels() {
    patchMember(activeSlot, { effortLevels: emptyStats(MAX_EFFORT_LEVEL) })
  }

  function resetEffortLevels() {
    patchMember(activeSlot, { effortLevels: emptyStats(0) })
  }

  function setMoveAt(index: number, move: TeamMove | null) {
    const next = [...memberMoves]
    if (move) {
      const dup = next.findIndex((m, i) => i !== index && m?.moveId === move.moveId)
      if (dup >= 0) next[dup] = null
    }
    next[index] = move
    patchMember(activeSlot, { moves: next })
  }

  function assignMove(move: TeamLearnableMove) {
    const payload: TeamMove = { moveId: move.moveId, name: move.name }
    const existing = memberMoves.findIndex((m) => m?.moveId === move.moveId)
    if (existing >= 0) {
      setActiveMoveSlot(existing)
      return
    }
    const target =
      memberMoves[activeMoveSlot] == null
        ? activeMoveSlot
        : memberMoves.findIndex((m) => m == null)
    const index = target >= 0 ? target : activeMoveSlot
    setMoveAt(index, payload)
    const nextEmpty = [...memberMoves]
    nextEmpty[index] = payload
    const following = nextEmpty.findIndex((m, i) => i > index && m == null)
    setActiveMoveSlot(following >= 0 ? following : index)
  }

  function exportJson() {
    const blob = new Blob([serializeTeam(team)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${slugify(team.name || 'team')}-${game}.json`
    a.click()
    URL.revokeObjectURL(url)
    setStatus(t(locale, 'teamExportOk'))
  }

  function importJson(file: File) {
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const parsed = parseTeamJson(String(reader.result ?? ''), game)
        onChange(parsed)
        setActiveSlot(0)
        setStatus(t(locale, 'teamImportOk'))
        void hydrateBaseStats(parsed, onChange)
      } catch (err) {
        setStatus(
          err instanceof Error ? err.message : t(locale, 'teamImportError'),
        )
      }
    }
    reader.readAsText(file)
  }

  const held = getTeamHeldItem(member.itemId)
  const nature = getNature(member.nature)

  return (
    <section className={`team-panel team-panel--${game}`}>
      <header className="team-panel__head">
        <div>
          <p className="team-panel__eyebrow">{t(locale, 'toolTeam')}</p>
          <h2>{t(locale, 'teamTitle')}</h2>
          <p className="team-panel__hint">
            {t(locale, isLa ? 'teamHintLa' : 'teamHint')}
          </p>
        </div>
        <div className="team-panel__actions">
          <button type="button" onClick={exportJson}>
            {t(locale, 'teamExport')}
          </button>
          <button type="button" onClick={() => fileRef.current?.click()}>
            {t(locale, 'teamImport')}
          </button>
          <button type="button" className="team-panel__danger" onClick={onReset}>
            {t(locale, 'teamClear')}
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            hidden
            onChange={(e) => {
              const file = e.currentTarget.files?.[0]
              if (file) importJson(file)
              e.currentTarget.value = ''
            }}
          />
        </div>
      </header>

      <label className="team-panel__name">
        <span>{t(locale, 'teamName')}</span>
        <input
          type="text"
          value={team.name}
          onChange={(e) =>
            onChange({ ...team, name: e.currentTarget.value, updatedAt: new Date().toISOString() })
          }
          maxLength={48}
        />
      </label>

      {status && <p className="team-panel__status">{status}</p>}

      <div className="team-slots" role="tablist" aria-label={t(locale, 'teamSlots')}>
        {Array.from({ length: TEAM_SIZE }, (_, i) => {
          const m = team.members[i]
          const selected = i === activeSlot
          return (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={selected}
              className={['team-slot', selected ? 'is-active' : '', m.dex ? 'has-mon' : '']
                .filter(Boolean)
                .join(' ')}
              onClick={() => setActiveSlot(i)}
            >
              <span className="team-slot__num">{i + 1}</span>
              {m.dex ? (
                <img src={spriteUrl(m.dex)} alt="" width={48} height={48} loading="lazy" />
              ) : (
                <span className="team-slot__empty">+</span>
              )}
              <span className="team-slot__label">{m.dex ? m.name : t(locale, 'teamEmptySlot')}</span>
            </button>
          )
        })}
      </div>

      <div className="team-editor">
        <div className="team-editor__col">
          <h3>{t(locale, 'teamPickPokemon')}</h3>
          <div className="team-editor__current">
            {member.dex ? (
              <>
                <img src={spriteUrl(member.dex)} alt="" width={72} height={72} />
                <div>
                  <strong>{member.name}</strong>
                  <span>
                    #{String(member.dex).padStart(3, '0')} · Lv. {member.level}
                  </span>
                </div>
                <button type="button" onClick={clearSlot}>
                  {t(locale, 'teamClearSlot')}
                </button>
              </>
            ) : (
              <p>{t(locale, 'teamPickHint')}</p>
            )}
          </div>

          <input
            type="search"
            className="team-editor__search"
            placeholder={t(locale, 'teamSearchPokemon')}
            value={pokeQuery}
            onChange={(e) => setPokeQuery(e.currentTarget.value)}
          />
          <ul className="team-picker">
            {pokeMatches.map((p) => (
              <li key={`${p.dex}-${p.regional}`}>
                <button
                  type="button"
                  className={member.dex === p.dex ? 'is-active' : undefined}
                  disabled={loadingDex === p.dex}
                  onClick={() => void selectPokemon(p.dex, p.name)}
                >
                  <img src={spriteUrl(p.dex)} alt="" width={32} height={32} loading="lazy" />
                  <span>
                    <strong>{p.name}</strong>
                    <small>
                      #{String(p.regional).padStart(3, '0')} · Nat #{p.dex}
                    </small>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="team-editor__col">
          <h3>{t(locale, 'teamBuild')}</h3>

          <div className="team-fields">
            <label>
              <span>{t(locale, 'teamLevel')}</span>
              <input
                type="number"
                min={MIN_LEVEL}
                max={MAX_LEVEL}
                value={member.level}
                disabled={!member.dex}
                onChange={(e) =>
                  patchMember(activeSlot, {
                    level: clamp(Number(e.currentTarget.value) || DEFAULT_LEVEL, MIN_LEVEL, MAX_LEVEL),
                  })
                }
              />
            </label>

            <label>
              <span>{t(locale, 'teamNature')}</span>
              <select
                value={member.nature}
                disabled={!member.dex}
                onChange={(e) =>
                  patchMember(activeSlot, { nature: e.currentTarget.value as NatureId })
                }
              >
                {NATURES.map((n) => (
                  <option key={n.id} value={n.id}>
                    {n.name[locale]}
                    {n.plus && n.minus
                      ? ` (+${t(locale, STAT_I18N[n.plus])} / −${t(locale, STAT_I18N[n.minus])})`
                      : ''}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="team-item">
            <div className="team-item__head">
              <h4>{t(locale, 'teamHeldItem')}</h4>
              {held && (
                <button type="button" onClick={() => patchMember(activeSlot, { itemId: null })}>
                  {t(locale, 'teamClearItem')}
                </button>
              )}
            </div>
            <div className="team-item__current">
              {held ? (
                <>
                  <img src={teamItemSpriteUrl(held.sprite)} alt="" width={28} height={28} />
                  <span>{held.name[locale]}</span>
                </>
              ) : (
                <span>{t(locale, 'teamNoItem')}</span>
              )}
            </div>
            <input
              type="search"
              className="team-editor__search"
              placeholder={t(locale, 'teamSearchItem')}
              value={itemQuery}
              disabled={!member.dex}
              onChange={(e) => setItemQuery(e.currentTarget.value)}
            />
            <ul className="team-item-list">
              {itemMatches.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={member.itemId === item.id ? 'is-active' : undefined}
                    disabled={!member.dex}
                    onClick={() => patchMember(activeSlot, { itemId: item.id })}
                  >
                    <img src={teamItemSpriteUrl(item.sprite)} alt="" width={24} height={24} />
                    {item.name[locale]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="team-editor__col team-editor__col--stats">
          <div className="team-stats-head">
            <h3>{t(locale, isLa ? 'teamEffortStats' : 'teamStats')}</h3>
            {isLa ? (
              <div className="team-stats-head__actions">
                <button type="button" disabled={!member.dex} onClick={maxAllEffortLevels}>
                  {t(locale, 'teamEffortMax')}
                </button>
                <button type="button" disabled={!member.dex} onClick={resetEffortLevels}>
                  {t(locale, 'teamEffortReset')}
                </button>
              </div>
            ) : (
              <span>
                {t(locale, 'teamEvRemaining')}: {remainingEvs}/{MAX_EV_TOTAL}
              </span>
            )}
          </div>

          {isLa && (
            <p className="team-panel__hint">{t(locale, 'teamEffortHint')}</p>
          )}

          {!member.dex || !finalStats ? (
            <p className="team-panel__hint">
              {t(locale, isLa ? 'teamEffortEmpty' : 'teamStatsEmpty')}
            </p>
          ) : (
            <ul className={['team-stats', isLa ? 'team-stats--effort' : ''].filter(Boolean).join(' ')}>
              {TEAM_STAT_KEYS.map((key) => {
                const boosted = nature.plus === key
                const cut = nature.minus === key
                return (
                  <li key={key}>
                    <span
                      className={[
                        'team-stats__label',
                        boosted ? 'is-plus' : '',
                        cut ? 'is-minus' : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      {t(locale, STAT_I18N[key])}
                    </span>
                    {isLa ? (
                      <label className="team-stats__effort">
                        <span>{t(locale, 'teamEffortLevel')}</span>
                        <input
                          type="number"
                          min={0}
                          max={MAX_EFFORT_LEVEL}
                          value={effortLevels[key]}
                          onChange={(e) => setEffortLevel(key, Number(e.currentTarget.value))}
                        />
                      </label>
                    ) : (
                      <>
                        <label className="team-stats__iv">
                          <span>IV</span>
                          <input
                            type="number"
                            min={0}
                            max={MAX_IV}
                            value={member.ivs[key]}
                            onChange={(e) => setIv(key, Number(e.currentTarget.value))}
                          />
                        </label>
                        <label className="team-stats__ev">
                          <span>EV</span>
                          <input
                            type="number"
                            min={0}
                            max={MAX_EV}
                            value={member.evs[key]}
                            onChange={(e) => setEv(key, Number(e.currentTarget.value))}
                          />
                        </label>
                      </>
                    )}
                    <div className="team-stats__bar" aria-hidden>
                      <span
                        style={{
                          width: `${Math.min(100, (finalStats[key] / 400) * 100)}%`,
                        }}
                      />
                    </div>
                    <strong className="team-stats__final">{finalStats[key]}</strong>
                    <small className="team-stats__base">
                      {t(locale, 'teamBase')}: {member.baseStats?.[key] ?? '—'}
                      {isLa
                        ? ` · ${t(locale, 'teamEffortLevel')} ${effortLevels[key]}/${MAX_EFFORT_LEVEL}`
                        : ''}
                    </small>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="team-moves">
        <div className="team-moves__head">
          <div>
            <h3>{t(locale, 'teamMoves')}</h3>
            <p className="team-panel__hint">{t(locale, 'teamMovesHint')}</p>
          </div>
          {memberMoves.some(Boolean) && (
            <button
              type="button"
              disabled={!member.dex}
              onClick={() => patchMember(activeSlot, { moves: emptyMoves() })}
            >
              {t(locale, 'teamClearMoves')}
            </button>
          )}
        </div>

        <div className="team-move-slots" role="list" aria-label={t(locale, 'teamMoves')}>
          {Array.from({ length: MOVE_SLOTS }, (_, i) => {
            const move = memberMoves[i]
            return (
              <div
                key={i}
                className={[
                  'team-move-slot',
                  activeMoveSlot === i ? 'is-active' : '',
                  move ? 'has-move' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <button
                  type="button"
                  className="team-move-slot__pick"
                  disabled={!member.dex}
                  onClick={() => setActiveMoveSlot(i)}
                >
                  <span className="team-move-slot__num">{i + 1}</span>
                  <span className="team-move-slot__name">
                    {move ? move.name : t(locale, 'teamEmptyMove')}
                  </span>
                </button>
                {move && (
                  <button
                    type="button"
                    className="team-move-slot__clear"
                    aria-label={t(locale, 'teamClearMove')}
                    onClick={() => {
                      setMoveAt(i, null)
                      setActiveMoveSlot(i)
                    }}
                  >
                    ×
                  </button>
                )}
              </div>
            )
          })}
        </div>

        <input
          type="search"
          className="team-editor__search"
          placeholder={t(locale, 'teamSearchMove')}
          value={moveQuery}
          disabled={!member.dex}
          onChange={(e) => setMoveQuery(e.currentTarget.value)}
        />

        {!member.dex ? (
          <p className="team-panel__hint">{t(locale, 'teamMovesEmpty')}</p>
        ) : learnsetLoading ? (
          <p className="team-panel__hint">{t(locale, 'teamMovesLoading')}</p>
        ) : learnsetError ? (
          <p className="team-panel__hint">{t(locale, 'teamMovesError')}</p>
        ) : moveMatches.length === 0 ? (
          <p className="team-panel__hint">{t(locale, 'teamMovesNone')}</p>
        ) : (
          <ul className="team-move-list">
            {moveMatches.map((move) => {
              const selected = selectedMoveIds.has(move.moveId)
              return (
                <li key={`${move.kind}-${move.moveId}-${move.level ?? move.tm ?? ''}`}>
                  <button
                    type="button"
                    className={selected ? 'is-active' : undefined}
                    onClick={() => assignMove(move)}
                  >
                    <span className="team-move-list__tag">{formatMoveTag(locale, move)}</span>
                    <span className="team-move-list__name">
                      {move.name}
                      {move.hisuiExclusive ? (
                        <small>{t(locale, 'pokeMovesHisui')}</small>
                      ) : null}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </section>
  )
}

function formatMoveTag(locale: Locale, move: TeamLearnableMove) {
  if (move.kind === 'level' && move.level != null) {
    const base = `${t(locale, 'pokeMoveLevel')} ${move.level}`
    return move.masterLevel != null
      ? `${base} → ${t(locale, 'pokeMovesMaster')} ${move.masterLevel}`
      : base
  }
  if (move.kind === 'tm') {
    if (!move.tm) return 'TM'
    return move.tm === 'Tutor' ? t(locale, 'pokeMovesTutor') : move.tm
  }
  if (move.level != null) {
    return `${t(locale, 'pokeMoveEvo')} · ${t(locale, 'pokeMoveLevel')} ${move.level}`
  }
  return t(locale, 'pokeMoveEvo')
}

async function hydrateBaseStats(
  team: TeamExport,
  onChange: (team: TeamExport) => void,
) {
  const nextMembers = [...team.members]
  let changed = false
  for (let i = 0; i < nextMembers.length; i++) {
    const m = nextMembers[i]
    if (m.dex == null || m.baseStats) continue
    try {
      const baseStats = await fetchBaseStats(m.dex)
      nextMembers[i] = { ...m, baseStats }
      changed = true
    } catch {
      // keep empty base stats
    }
  }
  if (changed) onChange({ ...team, members: nextMembers })
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 40) || 'team'
}
