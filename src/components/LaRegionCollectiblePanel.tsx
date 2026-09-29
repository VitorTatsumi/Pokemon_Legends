import { useEffect, useMemo, useState } from 'react'
import { getHisuiRegion, HISUI_REGIONS, type HisuiRegionId } from '../data/hisuiRegions'
import {
  type LaRegionPin,
  pinCountByRegion,
  pinsForRegion,
} from '../data/laRegionPins'
import { spriteUrl } from '../data/wildZones'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './HisuiPanel.css'
import './MissionPanel.css'
import './LaPinGuide.css'

type Props = {
  locale: Locale
  eyebrow: string
  title: string
  selectHint: string
  itemLabel: string
  pins: LaRegionPin[]
  selectedRegionId: HisuiRegionId | null
  selectedSubregionId: string | null
  selectedId: string | null
  completed: Record<string, boolean>
  hideDone: boolean
  /** When false, hide progress toggle / completed UI (e.g. outbreaks). */
  trackProgress?: boolean
  onSelectRegion: (id: HisuiRegionId) => void
  onSelectSubregion: (id: string) => void
  onSelectPin: (id: string) => void
  onClearRegion: () => void
  onClosePin: () => void
  onHideDoneChange: (hide: boolean) => void
  onToggle?: (id: string) => void
  onOpenDetail: (id: HisuiRegionId) => void
}

export function LaRegionCollectiblePanel({
  locale,
  eyebrow,
  title,
  selectHint,
  itemLabel,
  pins,
  selectedRegionId,
  selectedSubregionId: _selectedSubregionId,
  selectedId,
  completed,
  hideDone,
  trackProgress = true,
  onSelectRegion,
  onSelectSubregion,
  onSelectPin,
  onClearRegion,
  onClosePin,
  onHideDoneChange,
  onToggle,
  onOpenDetail,
}: Props) {
  const [query, setQuery] = useState('')
  const region = getHisuiRegion(selectedRegionId)
  const selectedPin = pins.find((p) => p.id === selectedId) ?? null

  const regionCounts = useMemo(() => pinCountByRegion(pins), [pins])

  const regionPins = useMemo(
    () => (selectedRegionId ? pinsForRegion(pins, selectedRegionId) : pins),
    [pins, selectedRegionId],
  )

  const scopedPins = useMemo(
    () =>
      regionPins.filter((p) => (hideDone && trackProgress ? !completed[p.id] : true)),
    [completed, hideDone, regionPins, trackProgress],
  )

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return scopedPins
    return scopedPins.filter((p) => {
      const sub =
        getHisuiRegion(p.regionId)?.subregions.find((s) => s.id === p.subregionId)?.name[
          locale
        ] ?? ''
      const spawnHit = p.spawns?.some((s) => s.name[locale].toLowerCase().includes(q)) ?? false
      return (
        p.name[locale].toLowerCase().includes(q) ||
        sub.toLowerCase().includes(q) ||
        (p.note?.[locale].toLowerCase().includes(q) ?? false) ||
        (p.description?.[locale].toLowerCase().includes(q) ?? false) ||
        spawnHit
      )
    })
  }, [locale, query, scopedPins])

  const doneInScope = useMemo(() => {
    if (!trackProgress) return 0
    return regionPins.filter((p) => completed[p.id]).length
  }, [completed, regionPins, trackProgress])

  const totalInScope = regionPins.length

  useEffect(() => {
    if (!selectedId) return
    document
      .querySelector(`[data-region-pin-id="${selectedId}"]`)
      ?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [selectedId, hideDone, query])

  useEffect(() => {
    setQuery('')
  }, [selectedRegionId])

  const subName = (regionId: HisuiRegionId, subId: string) =>
    getHisuiRegion(regionId)?.subregions.find((s) => s.id === subId)?.name[locale] ??
    subId

  return (
    <aside className={`hisui-panel${region || selectedPin ? '' : ' hisui-panel--empty'}`}>
      <header className="hisui-panel__head">
        <div>
          <p className="hisui-panel__eyebrow">{eyebrow}</p>
          <h2>
            {selectedPin
              ? selectedPin.name[locale]
              : region
                ? region.name[locale]
                : title}
          </h2>
          <p className="mission-panel__progress">
            {trackProgress ? `${doneInScope}/${totalInScope}` : totalInScope}
          </p>
        </div>
        {(selectedPin || region) && (
          <button
            type="button"
            className="hisui-panel__close"
            onClick={selectedPin ? onClosePin : onClearRegion}
          >
            {selectedPin ? t(locale, 'close') : t(locale, 'hisuiBackOverview')}
          </button>
        )}
      </header>

      {selectedPin ? (
        <div className="mission-details mission-details--fill">
          <div className="la-pin-detail-hero">
            {(selectedPin.iconSrc ||
              selectedPin.spriteId != null ||
              selectedPin.spriteIdAlt != null) && (
              <div className="la-pin-detail-hero__sprites">
                {selectedPin.iconSrc ? (
                  <img
                    className="la-pin-detail-hero__sprite la-pin-detail-hero__sprite--icon"
                    src={selectedPin.iconSrc}
                    alt=""
                    width={56}
                    height={56}
                  />
                ) : (
                  <>
                    {selectedPin.spriteId != null && (
                      <img
                        className="la-pin-detail-hero__sprite"
                        src={spriteUrl(selectedPin.spriteId)}
                        alt=""
                        width={72}
                        height={72}
                        loading="lazy"
                      />
                    )}
                    {selectedPin.spriteIdAlt != null && (
                      <img
                        className="la-pin-detail-hero__sprite"
                        src={spriteUrl(selectedPin.spriteIdAlt)}
                        alt=""
                        width={72}
                        height={72}
                        loading="lazy"
                      />
                    )}
                  </>
                )}
              </div>
            )}
            <p className="mission-details__desc">
              {selectedPin.description?.[locale] ?? selectedPin.note?.[locale]}
            </p>
          </div>
          <dl className="mission-details__facts mission-details__facts--compact">
            <div>
              <dt>{t(locale, 'hisuiRegions')}</dt>
              <dd>
                {HISUI_REGIONS.find((r) => r.id === selectedPin.regionId)?.name[locale]}
              </dd>
            </div>
            <div>
              <dt>{t(locale, 'hisuiSubregions')}</dt>
              <dd>{subName(selectedPin.regionId, selectedPin.subregionId)}</dd>
            </div>
            {selectedPin.note && (
              <div>
                <dt>{t(locale, 'laPinTip')}</dt>
                <dd>{selectedPin.note[locale]}</dd>
              </div>
            )}
            {selectedPin.facts?.map((f) => (
              <div key={f.label.en}>
                <dt>{f.label[locale]}</dt>
                <dd>{f.value[locale]}</dd>
              </div>
            ))}
          </dl>
          {selectedPin.spawns && selectedPin.spawns.length > 0 && (
            <section className="la-pin-spawns" aria-label={t(locale, 'laDistortionsSpawns')}>
              <h3 className="la-pin-spawns__title">{t(locale, 'laDistortionsSpawns')}</h3>
              <ul className="la-pin-spawns__grid">
                {selectedPin.spawns.map((s) => (
                  <li key={`${s.dex}-${s.name.en}`}>
                    <img
                      src={spriteUrl(s.spriteId ?? s.dex)}
                      alt=""
                      width={28}
                      height={28}
                      loading="lazy"
                    />
                    <span className="la-pin-spawns__meta">
                      <strong>{s.name[locale]}</strong>
                      {s.note && <small>{s.note[locale]}</small>}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {selectedPin.locationImageSrc && (
            <figure className="la-pin-media__location la-pin-media__location--encounter">
              <img src={selectedPin.locationImageSrc} alt="" loading="lazy" />
              <figcaption>
                {selectedPin.locationImageSrc.includes('/la-encounters/')
                  ? t(locale, 'laPinEncounterShot')
                  : t(locale, 'laPinLocationMap')}
              </figcaption>
            </figure>
          )}
          {trackProgress && onToggle && (
            <button
              type="button"
              className={
                completed[selectedPin.id]
                  ? 'mission-details__toggle is-on'
                  : 'mission-details__toggle'
              }
              onClick={() => onToggle(selectedPin.id)}
              aria-pressed={Boolean(completed[selectedPin.id])}
            >
              {completed[selectedPin.id]
                ? t(locale, 'missionsCompleted')
                : t(locale, 'missionsMarkCompleted')}
            </button>
          )}
        </div>
      ) : region ? (
        <div className="hisui-details">
          <p className="hisui-details__desc">{region.description[locale]}</p>

          <section className="hisui-spawn-section">
            <div className="zone-panel__section-head">
              <h3>
                {itemLabel}
                <span className="hisui-spawn-section__progress">
                  {' '}
                  · {trackProgress ? `${doneInScope}/${totalInScope}` : totalInScope}
                </span>
              </h3>
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

            {trackProgress && (
              <label className="mission-panel__hide">
                <input
                  type="checkbox"
                  checked={hideDone}
                  onChange={(e) => onHideDoneChange(e.currentTarget.checked)}
                />
                {t(locale, 'laGuideHideDone')}
              </label>
            )}

            <ul className="mission-list">
              {list.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    data-region-pin-id={p.id}
                    className={[
                      selectedId === p.id ? 'is-active' : '',
                      trackProgress && completed[p.id] ? 'is-completed' : '',
                    ]
                      .filter(Boolean)
                      .join(' ') || undefined}
                    onClick={() => {
                      onSelectPin(p.id)
                    }}
                  >
                    <span className="mission-list__name">
                      <span className="mission-list__title">
                        {(p.iconSrc || p.spriteId != null) && (
                          <img
                            className={`mission-list__sprite${p.iconSrc ? ' mission-list__sprite--icon' : ''}`}
                            src={p.iconSrc ?? spriteUrl(p.spriteId!)}
                            alt=""
                            width={28}
                            height={28}
                            loading="lazy"
                          />
                        )}
                        {p.name[locale]}
                      </span>
                      <small className="mission-list__sub">
                        {subName(p.regionId, p.subregionId)}
                      </small>
                    </span>
                    {trackProgress && completed[p.id] && (
                      <span className="mission-list__done" aria-hidden>
                        ✓
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </div>
      ) : (
        <div className="hisui-details">
          <p className="hisui-panel__hint">{selectHint}</p>
          <ul className="hisui-sub-list">
            {HISUI_REGIONS.map((r) => {
              const total = regionCounts[r.id] ?? 0
              if (total === 0) return null
              const done = trackProgress
                ? pinsForRegion(pins, r.id).filter((p) => completed[p.id]).length
                : 0
              return (
                <li key={r.id}>
                  <button type="button" onClick={() => onSelectRegion(r.id)}>
                    <span className="hisui-sub-list__label">{r.name[locale]}</span>
                    <span className="hisui-sub-list__count">
                      {trackProgress ? `${done}/${total}` : total}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </aside>
  )
}
