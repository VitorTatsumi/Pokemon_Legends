import { useEffect, useMemo } from 'react'
import type { CenterDistrict, PokemonCenter } from '../data/pokemonCenters'
import { POKEMON_CENTERS } from '../data/pokemonCenters'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './CenterPanel.css'
import './LocationShot.css'

type Props = {
  locale: Locale
  selectedId: number | null
  district: CenterDistrict | 'all'
  onSelect: (id: number) => void
  onDistrictChange: (district: CenterDistrict | 'all') => void
  onClose: () => void
}

const DISTRICTS: CenterDistrict[] = [
  'vert',
  'rouge',
  'bleu',
  'jaune',
  'magenta',
  'centrico',
]

export function CenterPanel({
  locale,
  selectedId,
  district,
  onSelect,
  onDistrictChange,
  onClose,
}: Props) {
  const selected = POKEMON_CENTERS.find((c) => c.id === selectedId) ?? null

  useEffect(() => {
    if (selectedId == null) return
    const el = document.querySelector(`[data-center-id="${selectedId}"]`)
    el?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [selectedId, district])

  const list = useMemo(() => {
    if (district === 'all') return POKEMON_CENTERS
    return POKEMON_CENTERS.filter((c) => c.districtKey === district)
  }, [district])

  return (
    <aside className={`center-panel${selected ? '' : ' center-panel--list-only'}`}>
      <header className="center-panel__head">
        <div>
          <p className="center-panel__eyebrow">{t(locale, 'toolCenters')}</p>
          <h2>
            {selected
              ? `${t(locale, 'pokemonCenter')} ${selected.name[locale]}`
              : t(locale, 'centersTitle')}
          </h2>
        </div>
        {selected && (
          <button type="button" className="center-panel__close" onClick={onClose}>
            {t(locale, 'close')}
          </button>
        )}
      </header>

      {selected ? (
        <CenterDetails locale={locale} center={selected} />
      ) : (
        <p className="center-panel__hint">{t(locale, 'centersSelectHint')}</p>
      )}

      <section className="center-panel__list-section">
        <div className="center-panel__section-head">
          <h3>{t(locale, 'centersList')}</h3>
        </div>

        <div className="center-panel__filters" role="group" aria-label={t(locale, 'district')}>
          <button
            type="button"
            className={district === 'all' ? 'is-active' : undefined}
            onClick={() => onDistrictChange('all')}
          >
            {t(locale, 'centersAll')}
          </button>
          {DISTRICTS.map((d) => (
            <button
              key={d}
              type="button"
              className={[
                `center-panel__filter--${d}`,
                district === d ? 'is-active' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => onDistrictChange(d)}
            >
              {d === 'centrico'
                ? t(locale, 'centrico')
                : d[0].toUpperCase() + d.slice(1)}
            </button>
          ))}
        </div>

        <ul className="center-list">
          {list.map((center) => (
            <li key={center.id}>
              <button
                type="button"
                data-center-id={center.id}
                className={[
                  'center-list__item',
                  selectedId === center.id ? 'is-active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => onSelect(center.id)}
              >
                <span className="center-list__icon">
                  <img src="/pokemon-center.svg" alt="" draggable={false} />
                </span>
                <span className="center-list__body">
                  <strong>
                    #{center.id} · {center.name[locale]}
                  </strong>
                  <span>{center.location[locale]}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}

function CenterDetails({
  locale,
  center,
}: {
  locale: Locale
  center: PokemonCenter
}) {
  return (
    <div className="center-details">
      {center.locationImageSrc && (
        <figure className="lza-location-shot">
          <img src={center.locationImageSrc} alt="" loading="lazy" />
          <figcaption>{t(locale, 'lzaLocationShot')}</figcaption>
        </figure>
      )}
      <dl className="center-details__facts">
        <div>
          <dt>{t(locale, 'district')}</dt>
          <dd>{t(locale, center.districtKey)}</dd>
        </div>
        <div>
          <dt>{t(locale, 'missionLocation')}</dt>
          <dd>{center.location[locale]}</dd>
        </div>
        <div>
          <dt>{t(locale, 'centersTravel')}</dt>
          <dd>
            {center.travelPoint
              ? t(locale, 'centersTravelYes')
              : t(locale, 'centersTravelNo')}
          </dd>
        </div>
      </dl>
    </div>
  )
}
