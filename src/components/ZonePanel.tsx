import { useEffect, useMemo, useState } from 'react'
import type { AlphaSpawn, PokemonSpawn, TimeOfDay, WildZone } from '../data/wildZones'
import { spriteUrl } from '../data/wildZones'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import { catchKey } from '../hooks/useStorage'
import { TYPE_COLORS } from '../data/pokemonUi'
import { usePokemonDetails } from '../hooks/usePokemonDetails'
import { PokemonFacts } from './PokemonDetailSections'
import './ZonePanel.css'
import './LocationShot.css'

type Props = {
  locale: Locale
  zone: WildZone | null
  isCaught: (key: string) => boolean
  onToggle: (key: string) => void
  onReset: () => void
  onClose: () => void
}

type SelectedSpawn = {
  key: string
  dex: number
  name: string
  time?: TimeOfDay
  skittish?: boolean
  isAlpha: boolean
}

export function ZonePanel({ locale, zone, isCaught, onToggle, onReset, onClose }: Props) {
  const [filter, setFilter] = useState<'all' | 'day' | 'night'>('all')
  const [shiny, setShiny] = useState(false)
  const [selected, setSelected] = useState<SelectedSpawn | null>(null)

  useEffect(() => {
    setSelected(null)
  }, [zone?.id])

  useEffect(() => {
    if (!selected) return
    document.querySelector('.poke-detail')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [selected?.key])

  const filtered = useMemo(() => {
    if (!zone) return []
    return zone.pokemon.filter((p) => {
      if (filter === 'all') return true
      return p.time === 'any' || p.time === filter
    })
  }, [zone, filter])

  if (!zone) {
    return (
      <aside className="zone-panel zone-panel--empty">
        <p>{t(locale, 'noZone')}</p>
      </aside>
    )
  }

  const total = zone.pokemon.length
  const caughtCount = zone.pokemon.filter((p) =>
    isCaught(catchKey(zone.id, p.id)),
  ).length

  return (
    <aside className="zone-panel">
      <header className="zone-panel__head">
        <div>
          <p className="zone-panel__eyebrow">
            {t(locale, 'wildZone')} {zone.id}
          </p>
          <h2>{t(locale, zone.locationKey)}</h2>
        </div>
        <button type="button" className="zone-panel__close" onClick={onClose}>
          {t(locale, 'close')}
        </button>
      </header>

      {zone.locationImageSrc && (
        <figure className="lza-location-shot">
          <img src={zone.locationImageSrc} alt="" loading="lazy" />
          <figcaption>{t(locale, 'lzaLocationShot')}</figcaption>
        </figure>
      )}

      <div className="zone-panel__meta">
        <span>
          {t(locale, 'district')}: {t(locale, zone.districtKey)}
        </span>
        <span>
          {t(locale, 'level')}: {zone.level}
        </span>
        <span>
          {t(locale, 'unlock')}: {t(locale, zone.unlockKey)}
        </span>
        <span>
          {t(locale, 'progress')}: {caughtCount}/{total}
        </span>
      </div>

      <div className="zone-panel__filters" role="group">
        {(['all', 'day', 'night'] as const).map((f) => (
          <button
            key={f}
            type="button"
            className={filter === f ? 'is-active' : undefined}
            onClick={() => setFilter(f)}
          >
            {t(locale, f === 'all' ? 'filterAll' : f === 'day' ? 'filterDay' : 'filterNight')}
          </button>
        ))}
      </div>

      <div className="zone-panel__section-head">
        <h3>{t(locale, 'pokemon')}</h3>
        <div className="zone-panel__sprite-tabs" role="group" aria-label={t(locale, 'pokemon')}>
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
      </div>

      {selected && (
        <PokemonDetailCard
          locale={locale}
          selected={selected}
          shiny={shiny}
          caught={isCaught(selected.key)}
          onToggle={() => onToggle(selected.key)}
          onClose={() => setSelected(null)}
        />
      )}

      <section>
        <ul className="poke-list">
          {filtered.map((p) => (
            <PokemonRow
              key={p.id}
              locale={locale}
              spawn={p}
              shiny={shiny}
              isAlpha={false}
              selected={selected?.key === catchKey(zone.id, p.id)}
              caught={isCaught(catchKey(zone.id, p.id))}
              onSelect={() =>
                setSelected({
                  key: catchKey(zone.id, p.id),
                  dex: p.dex,
                  name: p.name,
                  time: p.time,
                  skittish: p.skittish,
                  isAlpha: false,
                })
              }
              onToggle={() => onToggle(catchKey(zone.id, p.id))}
            />
          ))}
        </ul>
      </section>

      <section>
        <h3>{t(locale, 'alphas')}</h3>
        {zone.alphaNoteKey && <p className="alpha-note">{t(locale, zone.alphaNoteKey)}</p>}
        {zone.alphas.length === 0 && !zone.alphaNoteKey ? (
          <p className="muted">{t(locale, 'noAlpha')}</p>
        ) : (
          <ul className="poke-list poke-list--alpha">
            {zone.alphas.map((a) => (
              <PokemonRow
                key={a.id}
                locale={locale}
                spawn={a}
                shiny={shiny}
                isAlpha
                selected={selected?.key === catchKey(zone.id, a.id)}
                caught={isCaught(catchKey(zone.id, a.id))}
                onSelect={() =>
                  setSelected({
                    key: catchKey(zone.id, a.id),
                    dex: a.dex,
                    name: a.name,
                    time: a.time,
                    isAlpha: true,
                  })
                }
                onToggle={() => onToggle(catchKey(zone.id, a.id))}
              />
            ))}
          </ul>
        )}
      </section>

      <button
        type="button"
        className="zone-panel__reset"
        onClick={() => {
          if (window.confirm(t(locale, 'resetConfirm'))) onReset()
        }}
      >
        {t(locale, 'resetProgress')}
      </button>
    </aside>
  )
}

function PokemonRow({
  locale,
  spawn,
  shiny,
  isAlpha,
  selected,
  caught,
  onSelect,
  onToggle,
}: {
  locale: Locale
  spawn: PokemonSpawn | AlphaSpawn
  shiny: boolean
  isAlpha: boolean
  selected: boolean
  caught: boolean
  onSelect: () => void
  onToggle: () => void
}) {
  return (
    <li
      className={[caught ? 'is-caught' : '', selected ? 'is-selected' : '']
        .filter(Boolean)
        .join(' ') || undefined}
    >
      <button type="button" className="poke-list__select" onClick={onSelect}>
        <img src={spriteUrl(spawn.dex, shiny)} alt="" width={48} height={48} loading="lazy" />
        <div className="poke-list__info">
          <strong>
            {isAlpha ? 'α ' : ''}
            {spawn.name}
          </strong>
          <div className="poke-list__tags">
            {'time' in spawn && spawn.time ? <TimeTag locale={locale} time={spawn.time} /> : null}
            {'skittish' in spawn && spawn.skittish ? (
              <span className="tag tag--warn">{t(locale, 'skittish')}</span>
            ) : null}
          </div>
        </div>
      </button>
      <button
        type="button"
        className={caught ? 'catch-btn is-on' : 'catch-btn'}
        onClick={onToggle}
        aria-pressed={caught}
        title={caught ? t(locale, 'markUncaught') : t(locale, 'markCaught')}
      >
        {caught ? t(locale, 'caught') : t(locale, 'notCaught')}
      </button>
    </li>
  )
}

function PokemonDetailCard({
  locale,
  selected,
  shiny,
  caught,
  onToggle,
  onClose,
}: {
  locale: Locale
  selected: SelectedSpawn
  shiny: boolean
  caught: boolean
  onToggle: () => void
  onClose: () => void
}) {
  const { details, loading, error } = usePokemonDetails(selected.dex, locale)

  return (
    <article className="poke-detail">
      <header className="poke-detail__head">
        <div>
          <p className="poke-detail__eyebrow">{t(locale, 'pokeDetails')}</p>
          <h3>
            {selected.isAlpha ? 'α ' : ''}
            {details?.name ?? selected.name}
          </h3>
          <p className="poke-detail__dex">
            #{String(selected.dex).padStart(3, '0')}
            {details?.genus ? ` · ${details.genus}` : ''}
          </p>
        </div>
        <button
          type="button"
          className="poke-detail__close"
          onClick={onClose}
          aria-label={t(locale, 'close')}
          title={t(locale, 'close')}
        >
          ×
        </button>
      </header>

      <div className="poke-detail__hero">
        <img
          src={spriteUrl(selected.dex, shiny)}
          alt={details?.name ?? selected.name}
          className="is-pixel"
        />
        <div className="poke-detail__hero-meta">
          {details && (
            <div className="poke-detail__types">
              {details.types.map((type) => (
                <span
                  key={type}
                  className="poke-type"
                  style={{ background: TYPE_COLORS[type] }}
                >
                  {t(locale, `type_${type}`)}
                </span>
              ))}
            </div>
          )}
          <div className="poke-detail__spawn-tags">
            {selected.time && <TimeTag locale={locale} time={selected.time} />}
            {selected.skittish && <span className="tag tag--warn">{t(locale, 'skittish')}</span>}
            {selected.isAlpha && <span className="tag tag--alpha">{t(locale, 'alphaSpawn')}</span>}
          </div>
          <button
            type="button"
            className={caught ? 'catch-btn is-on' : 'catch-btn'}
            onClick={onToggle}
            aria-pressed={caught}
          >
            {caught ? t(locale, 'caught') : t(locale, 'notCaught')}
          </button>
        </div>
      </div>

      {loading && <p className="poke-detail__status">{t(locale, 'pokeLoading')}</p>}
      {error && <p className="poke-detail__status">{t(locale, 'pokeLoadError')}</p>}
      {details && !loading && <PokemonFacts locale={locale} details={details} />}
    </article>
  )
}

function TimeTag({ locale, time }: { locale: Locale; time: TimeOfDay }) {
  const label =
    time === 'day' ? t(locale, 'day') : time === 'night' ? t(locale, 'night') : t(locale, 'anyTime')
  const cls = time === 'day' ? 'tag tag--day' : time === 'night' ? 'tag tag--night' : 'tag'
  return <span className={cls}>{label}</span>
}
