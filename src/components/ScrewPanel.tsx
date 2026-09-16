import { useEffect, useMemo } from 'react'
import type { ColorfulScrew, ScrewDistrict } from '../data/colorfulScrews'
import { COLORFUL_SCREWS } from '../data/colorfulScrews'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './ScrewPanel.css'

type Props = {
  locale: Locale
  selectedId: number | null
  district: ScrewDistrict | 'all'
  hideCollected: boolean
  collected: Record<number, boolean>
  onSelect: (id: number) => void
  onDistrictChange: (district: ScrewDistrict | 'all') => void
  onHideCollectedChange: (hide: boolean) => void
  onToggle: (id: number) => void
  onReset: () => void
  onClose: () => void
}

const DISTRICTS: ScrewDistrict[] = ['vert', 'rouge', 'bleu', 'jaune', 'magenta']

export function ScrewPanel({
  locale,
  selectedId,
  district,
  hideCollected,
  collected,
  onSelect,
  onDistrictChange,
  onHideCollectedChange,
  onToggle,
  onReset,
  onClose,
}: Props) {
  const selected = COLORFUL_SCREWS.find((s) => s.id === selectedId) ?? null

  useEffect(() => {
    if (selectedId == null) return
    const el = document.querySelector(`[data-screw-id="${selectedId}"]`)
    el?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [selectedId, district, hideCollected])

  const collectedCount = useMemo(
    () => COLORFUL_SCREWS.filter((s) => collected[s.id]).length,
    [collected],
  )

  const list = useMemo(() => {
    return COLORFUL_SCREWS.filter((s) => {
      if (district !== 'all' && s.districtKey !== district) return false
      if (hideCollected && collected[s.id]) return false
      return true
    })
  }, [collected, district, hideCollected])

  return (
    <aside className={`screw-panel${selected ? '' : ' screw-panel--list-only'}`}>
      <header className="screw-panel__head">
        <div>
          <p className="screw-panel__eyebrow">{t(locale, 'toolScrews')}</p>
          <h2>
            {selected
              ? `${t(locale, 'colorfulScrew')} ${selected.id}`
              : t(locale, 'screwsTitle')}
          </h2>
          <p className="screw-panel__progress">
            {collectedCount}/{COLORFUL_SCREWS.length}
          </p>
        </div>
        {selected && (
          <button type="button" className="screw-panel__close" onClick={onClose}>
            {t(locale, 'close')}
          </button>
        )}
      </header>

      {selected ? (
        <ScrewDetails
          locale={locale}
          screw={selected}
          collected={Boolean(collected[selected.id])}
          onToggle={() => onToggle(selected.id)}
        />
      ) : (
        <p className="screw-panel__hint">{t(locale, 'screwsSelectHint')}</p>
      )}

      <section className="screw-panel__list-section">
        <div className="screw-panel__section-head">
          <h3>{t(locale, 'screwsList')}</h3>
        </div>

        <div className="screw-panel__filters" role="group" aria-label={t(locale, 'district')}>
          <button
            type="button"
            className={district === 'all' ? 'is-active' : undefined}
            onClick={() => onDistrictChange('all')}
          >
            {t(locale, 'screwsAll')}
          </button>
          {DISTRICTS.map((d) => (
            <button
              key={d}
              type="button"
              className={[
                `screw-panel__filter--${d}`,
                district === d ? 'is-active' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => onDistrictChange(d)}
            >
              {d[0].toUpperCase() + d.slice(1)}
            </button>
          ))}
        </div>

        <label className="screw-panel__hide">
          <input
            type="checkbox"
            checked={hideCollected}
            onChange={(e) => onHideCollectedChange(e.target.checked)}
          />
          {t(locale, 'screwsHideCollected')}
        </label>

        <ul className="screw-list">
          {list.map((screw) => (
            <li key={screw.id}>
              <button
                type="button"
                data-screw-id={screw.id}
                className={[
                  'screw-list__item',
                  selectedId === screw.id ? 'is-active' : '',
                  collected[screw.id] ? 'is-collected' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => onSelect(screw.id)}
              >
                <span className="screw-list__icon">
                  <img src="/colorful-screw.png" alt="" draggable={false} />
                </span>
                <span className="screw-list__body">
                  <strong>
                    #{screw.id} · {t(locale, screw.districtKey)}
                  </strong>
                  <span>{screw.location[locale]}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        <button type="button" className="screw-panel__reset" onClick={onReset}>
          {t(locale, 'screwsReset')}
        </button>
      </section>
    </aside>
  )
}

function ScrewDetails({
  locale,
  screw,
  collected,
  onToggle,
}: {
  locale: Locale
  screw: ColorfulScrew
  collected: boolean
  onToggle: () => void
}) {
  return (
    <div className="screw-details">
      <dl className="screw-details__facts">
        <div>
          <dt>{t(locale, 'district')}</dt>
          <dd>{t(locale, screw.districtKey)}</dd>
        </div>
        <div>
          <dt>{t(locale, 'missionLocation')}</dt>
          <dd>{screw.location[locale]}</dd>
        </div>
      </dl>
      <button
        type="button"
        className={`screw-details__toggle${collected ? ' is-on' : ''}`}
        onClick={onToggle}
      >
        {collected ? t(locale, 'screwsCollected') : t(locale, 'screwsMarkCollected')}
      </button>
    </div>
  )
}
