import { useMemo, useState } from 'react'
import {
  LZA_LEGENDARIES,
  type LzaLegendary,
  type LzaLegendaryKind,
} from '../data/lzaLegendaries'
import {
  DONUT_FLAVOR_LABEL,
  DONUT_FLAVORS,
  SPECIAL_DONUT_BY_LEGENDARY,
  type SpecialDonut,
} from '../data/lzaDonuts'
import { spriteUrl } from '../data/wildZones'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './MissionPanel.css'
import './LaCraft.css'
import './LzaLegendaries.css'

type Props = {
  locale: Locale
}

const KIND_KEYS: Record<LzaLegendaryKind, string> = {
  legendary: 'lzaLegCatLegendary',
  mythical: 'lzaLegCatMythical',
  dlc: 'lzaLegCatDlc',
}

export function LzaLegendariesView({ locale }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(LZA_LEGENDARIES[0]?.id ?? null)
  const selected = LZA_LEGENDARIES.find((x) => x.id === selectedId) ?? null

  return (
    <div className="map-layout map-layout--crafts">
      <LegendBrowser
        locale={locale}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
      <LegendDetailPanel
        locale={locale}
        selected={selected}
        onClose={() => setSelectedId(null)}
      />
    </div>
  )
}

function LegendBrowser({
  locale,
  selectedId,
  onSelect,
}: {
  locale: Locale
  selectedId: string | null
  onSelect: (id: string) => void
}) {
  const [query, setQuery] = useState('')
  const [kind, setKind] = useState<LzaLegendaryKind | 'all'>('all')

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase()
    return LZA_LEGENDARIES.filter((entry) => {
      if (kind !== 'all' && entry.kind !== kind) return false
      if (!q) return true
      return (
        entry.name[locale].toLowerCase().includes(q) ||
        entry.location[locale].toLowerCase().includes(q) ||
        t(locale, KIND_KEYS[entry.kind]).toLowerCase().includes(q)
      )
    })
  }, [kind, locale, query])

  return (
    <div className="map-shell la-craft-browser">
      <div className="map-toolbar">
        <div>
          <h2>{t(locale, 'lzaLegTitle')}</h2>
          <p>{t(locale, 'lzaLegHint')}</p>
        </div>
      </div>

      <div className="la-craft-browser__body">
        <div className="mission-panel__kind-tabs la-craft-tabs la-craft-tabs--wrap" role="group">
          <button
            type="button"
            className={kind === 'all' ? 'is-active' : undefined}
            onClick={() => setKind('all')}
          >
            {t(locale, 'lzaItemsAll')}
          </button>
          {(Object.keys(KIND_KEYS) as LzaLegendaryKind[]).map((k) => (
            <button
              key={k}
              type="button"
              className={kind === k ? 'is-active' : undefined}
              onClick={() => setKind(k)}
            >
              {t(locale, KIND_KEYS[k])}
            </button>
          ))}
        </div>

        <div className="mission-panel__search">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t(locale, 'lzaLegSearch')}
            aria-label={t(locale, 'lzaLegSearch')}
          />
        </div>

        <div className="la-craft-browser__grid" role="list">
          {rows.map((entry) => (
            <button
              key={entry.id}
              type="button"
              role="listitem"
              className={['la-craft-card', selectedId === entry.id ? 'is-active' : '']
                .filter(Boolean)
                .join(' ')}
              onClick={() => onSelect(entry.id)}
            >
              <img
                src={spriteUrl(entry.dex)}
                alt=""
                width={40}
                height={40}
                draggable={false}
              />
              <strong>{entry.name[locale]}</strong>
              <span className="la-craft-card__meta">
                {t(locale, KIND_KEYS[entry.kind])}
                {entry.level != null ? ` · Lv ${entry.level}` : ''}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function LegendDetailPanel({
  locale,
  selected,
  onClose,
}: {
  locale: Locale
  selected: LzaLegendary | null
  onClose: () => void
}) {
  if (!selected) {
    return (
      <aside className="mission-panel la-craft-panel">
        <div className="mission-panel__empty">
          <p>{t(locale, 'lzaLegSelectHint')}</p>
        </div>
      </aside>
    )
  }

  const donut = SPECIAL_DONUT_BY_LEGENDARY[selected.id]

  return (
    <aside className="mission-panel la-craft-panel">
      <div className="mission-panel__header">
        <div>
          <p className="mission-panel__eyebrow">{t(locale, KIND_KEYS[selected.kind])}</p>
          <h2>{selected.name[locale]}</h2>
        </div>
        <button type="button" className="mission-panel__close" onClick={onClose}>
          {t(locale, 'close')}
        </button>
      </div>

      <div className="la-craft-detail">
        <div className="la-craft-detail__hero lza-leg-hero">
          <div className="la-craft-detail__sprite">
            <img
              src={spriteUrl(selected.dex)}
              alt=""
              width={64}
              height={64}
              draggable={false}
            />
          </div>
          <div className="la-craft-detail__hero-text">
            <p className="la-craft-detail__category">{selected.location[locale]}</p>
            {selected.level != null && (
              <p className="lza-leg-level">Lv. {selected.level}</p>
            )}
          </div>
        </div>

        {selected.encounterImageSrc && (
          <figure className="lza-leg-shot">
            <img src={selected.encounterImageSrc} alt="" loading="lazy" />
            <figcaption>{t(locale, 'laPinEncounterShot')}</figcaption>
          </figure>
        )}

        {donut && (
          <section className="la-craft-detail__section lza-leg-donut">
            <h3>{t(locale, 'lzaLegDonut')}</h3>
            <div className="lza-leg-donut__row">
              <img src={donut.spriteSrc} alt="" width={56} height={56} draggable={false} />
              <div>
                <strong>{donut.name[locale]}</strong>
                <p className="la-craft-detail__desc">
                  {donutFlavorSummary(donut, locale)}
                </p>
              </div>
            </div>
          </section>
        )}

        <section className="la-craft-detail__section">
          <h3>{t(locale, 'lzaLegUnlock')}</h3>
          <p className="la-craft-detail__desc">{selected.unlock[locale]}</p>
        </section>

        <section className="la-craft-detail__section">
          <h3>{t(locale, 'lzaLegRequirements')}</h3>
          <p className="la-craft-detail__desc">{selected.requirements[locale]}</p>
        </section>

        <section className="la-craft-detail__section">
          <h3>{t(locale, 'lzaLegTips')}</h3>
          <p className="la-craft-detail__desc">{selected.tips[locale]}</p>
        </section>
      </div>
    </aside>
  )
}

function donutFlavorSummary(donut: SpecialDonut, locale: Locale) {
  return DONUT_FLAVORS.map(
    (f) => `${DONUT_FLAVOR_LABEL[f][locale]} ${donut.requirements[f]}+`,
  ).join(' · ')
}
