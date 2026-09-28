import { useEffect, useMemo, useState } from 'react'
import { getHisuiRegion, type HisuiRegionId } from '../data/hisuiRegions'
import {
  spawnsForSubregion,
  type LaPokemonSpawn,
  type LaSpawnMethod,
  type LaSpawnTime,
} from '../data/laSpawns'
import { spriteUrl } from '../data/wildZones'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './HisuiPanel.css'
import './ZonePanel.css'
import './LocationShot.css'

type Props = {
  locale: Locale
  selectedRegionId: HisuiRegionId | null
  selectedSubregionId: string | null
  onSelectSubregion: (id: string) => void
  onClearRegion: () => void
  isCaught: (key: string) => boolean
  onToggleCaught: (key: string) => void
}

export function laCatchKey(subregionId: string, pokemonId: string, time: string, method: string) {
  return `la:${subregionId}:${pokemonId}:${time}:${method}`
}

const METHOD_KEY: Record<LaSpawnMethod, string> = {
  ground: 'laMethodGround',
  water: 'laMethodWater',
  air: 'laMethodAir',
  tree: 'laMethodTree',
  ore: 'laMethodOre',
}

export function HisuiPanel({
  locale,
  selectedRegionId,
  selectedSubregionId,
  onSelectSubregion,
  onClearRegion,
  isCaught,
  onToggleCaught,
}: Props) {
  const selected = getHisuiRegion(selectedRegionId)
  const spawnEntry = spawnsForSubregion(selectedSubregionId)
  const selectedSub = selected?.subregions.find((s) => s.id === selectedSubregionId) ?? null
  const [filter, setFilter] = useState<'all' | 'day' | 'night'>('all')
  const [shiny, setShiny] = useState(false)

  useEffect(() => {
    if (selectedSubregionId == null) return
    const el = document.querySelector(`[data-hisui-sub="${selectedSubregionId}"]`)
    el?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [selectedSubregionId])

  useEffect(() => {
    setFilter('all')
  }, [selectedSubregionId])

  const filtered = useMemo(() => {
    if (!spawnEntry) return []
    return spawnEntry.pokemon.filter((p) => {
      if (filter === 'all') return true
      return p.time === 'any' || p.time === filter
    })
  }, [spawnEntry, filter])

  const caughtCount = spawnEntry
    ? spawnEntry.pokemon.filter((p) =>
        isCaught(laCatchKey(spawnEntry.subregionId, p.id, p.time, p.method)),
      ).length
    : 0

  return (
    <aside className={`hisui-panel${selected ? '' : ' hisui-panel--empty'}`}>
      <header className="hisui-panel__head">
        <div>
          <p className="hisui-panel__eyebrow">{t(locale, 'gameLaTitle')}</p>
          <h2>{selected ? selected.name[locale] : t(locale, 'hisuiMapTitle')}</h2>
        </div>
        {selected && (
          <button type="button" className="hisui-panel__close" onClick={onClearRegion}>
            {t(locale, 'hisuiBackOverview')}
          </button>
        )}
      </header>

      {selected ? (
        <div className="hisui-details">
          <p className="hisui-details__desc">{selected.description[locale]}</p>

          {selected.locationImageSrc && (
            <figure className="lza-location-shot hisui-location-shot">
              <img src={selected.locationImageSrc} alt="" loading="lazy" />
              <figcaption>{t(locale, 'lzaLocationShot')}</figcaption>
            </figure>
          )}

          <div className="hisui-details__subs">
            <h3>
              {t(locale, 'hisuiSubregions')}
              <span>{selected.subregions.length}</span>
            </h3>
            <ul className="hisui-sub-list">
              {selected.subregions.map((sub, index) => {
                const count = spawnsForSubregion(sub.id)?.pokemon.length ?? 0
                return (
                  <li key={sub.id}>
                    <button
                      type="button"
                      data-hisui-sub={sub.id}
                      className={selectedSubregionId === sub.id ? 'is-active' : undefined}
                      onClick={() => onSelectSubregion(sub.id)}
                    >
                      {sub.map ? (
                        <span className="hisui-sub-list__num" aria-hidden>
                          {index + 1}
                        </span>
                      ) : null}
                      <span className="hisui-sub-list__label">{sub.name[locale]}</span>
                      {count > 0 ? (
                        <span className="hisui-sub-list__count" title={t(locale, 'pokemon')}>
                          {count}
                        </span>
                      ) : null}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          {selectedSub && (
            <section className="hisui-spawn-section">
              <div className="zone-panel__section-head">
                <h3>
                  {selectedSub.name[locale]}
                  {spawnEntry ? (
                    <span className="hisui-spawn-section__progress">
                      {' '}
                      · {caughtCount}/{spawnEntry.pokemon.length}
                    </span>
                  ) : null}
                </h3>
                {spawnEntry && spawnEntry.pokemon.length > 0 && (
                  <div
                    className="zone-panel__sprite-tabs"
                    role="group"
                    aria-label={t(locale, 'pokemon')}
                  >
                    <button
                      type="button"
                      className={!shiny ? 'is-active' : undefined}
                      onClick={() => setShiny(false)}
                    >
                      {t(locale, 'spriteNormal')}
                    </button>
                    <button
                      type="button"
                      className={shiny ? 'is-active' : undefined}
                      onClick={() => setShiny(true)}
                    >
                      {t(locale, 'spriteShiny')}
                    </button>
                  </div>
                )}
              </div>

              {!spawnEntry || spawnEntry.pokemon.length === 0 ? (
                <p className="hisui-spawn-section__empty">{t(locale, 'hisuiNoSpawns')}</p>
              ) : (
                <>
                  <div className="zone-panel__filters" role="group">
                    {(['all', 'day', 'night'] as const).map((f) => (
                      <button
                        key={f}
                        type="button"
                        className={filter === f ? 'is-active' : undefined}
                        onClick={() => setFilter(f)}
                      >
                        {t(
                          locale,
                          f === 'all'
                            ? 'filterAll'
                            : f === 'day'
                              ? 'filterDay'
                              : 'filterNight',
                        )}
                      </button>
                    ))}
                  </div>
                  <ul className="poke-list hisui-poke-list">
                    {filtered.map((p) => {
                      const key = laCatchKey(spawnEntry.subregionId, p.id, p.time, p.method)
                      return (
                        <SpawnRow
                          key={key}
                          locale={locale}
                          spawn={p}
                          shiny={shiny}
                          caught={isCaught(key)}
                          onToggle={() => onToggleCaught(key)}
                        />
                      )
                    })}
                  </ul>
                </>
              )}
            </section>
          )}
        </div>
      ) : (
        <p className="hisui-panel__hint">{t(locale, 'hisuiSelectHint')}</p>
      )}
    </aside>
  )
}

function SpawnRow({
  locale,
  spawn,
  shiny,
  caught,
  onToggle,
}: {
  locale: Locale
  spawn: LaPokemonSpawn
  shiny: boolean
  caught: boolean
  onToggle: () => void
}) {
  return (
    <li className={caught ? 'is-caught' : undefined}>
      <div className="poke-list__select hisui-poke-row">
        <img src={spriteUrl(spawn.dex, shiny)} alt="" width={48} height={48} loading="lazy" />
        <div className="poke-list__info">
          <strong>
            {spawn.alpha ? 'α ' : ''}
            {spawn.name}
          </strong>
          <div className="poke-list__tags">
            <TimeTag locale={locale} time={spawn.time} />
            <span className="tag">{t(locale, METHOD_KEY[spawn.method])}</span>
            {spawn.alpha ? <span className="tag tag--warn">{t(locale, 'alphaSpawn')}</span> : null}
          </div>
        </div>
      </div>
      <button
        type="button"
        className={caught ? 'catch-btn is-on' : 'catch-btn'}
        onClick={onToggle}
        aria-pressed={caught}
      >
        {caught ? t(locale, 'caught') : t(locale, 'notCaught')}
      </button>
    </li>
  )
}

function TimeTag({ locale, time }: { locale: Locale; time: LaSpawnTime }) {
  if (time === 'any') return <span className="tag">{t(locale, 'anyTime')}</span>
  if (time === 'day') return <span className="tag tag--day">{t(locale, 'day')}</span>
  return <span className="tag tag--night">{t(locale, 'night')}</span>
}
