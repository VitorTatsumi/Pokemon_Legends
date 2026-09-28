import { useMemo, useState } from 'react'
import type { CanariPlush } from '../data/canariPlushes'
import {
  CANARI_FULL_UPGRADE_SCREWS,
  CANARI_GIANT_PLUSH_REMAINING,
  CANARI_LEVEL_COSTS,
  CANARI_PLUSHES,
  canariPlushTotalCost,
} from '../data/canariPlushes'
import { lzaItemSpriteCandidates } from '../data/lzaItemSprites'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './ScrewPanel.css'
import './CanariPanel.css'

type Props = {
  locale: Locale
  selectedId: string | null
  onClose: () => void
}

export function CanariSprite({ sprite, size }: { sprite: string; size: number }) {
  const candidates = useMemo(() => lzaItemSpriteCandidates(sprite), [sprite])
  const [index, setIndex] = useState(0)
  const src = candidates[Math.min(index, candidates.length - 1)]

  return (
    <img
      className="canari-item-list__sprite"
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

export function CanariPanel({ locale, selectedId, onClose }: Props) {
  const selected = CANARI_PLUSHES.find((p) => p.id === selectedId) ?? null

  return (
    <aside className={`screw-panel canari-panel${selected ? '' : ' screw-panel--list-only'}`}>
      <header className="screw-panel__head">
        <div>
          <p className="screw-panel__eyebrow">{t(locale, 'canariEyebrow')}</p>
          <h2>{selected ? selected.name[locale] : t(locale, 'canariTitle')}</h2>
          <p className="screw-panel__progress">
            {t(locale, 'canariProgressHint')
              .replace('{upgrade}', String(CANARI_FULL_UPGRADE_SCREWS))
              .replace('{giant}', String(CANARI_GIANT_PLUSH_REMAINING))}
          </p>
        </div>
        {selected && (
          <button type="button" className="screw-panel__close" onClick={onClose}>
            {t(locale, 'close')}
          </button>
        )}
      </header>

      {selected ? (
        <CanariDetails locale={locale} plush={selected} />
      ) : (
        <CanariGuide locale={locale} />
      )}
    </aside>
  )
}

function CanariGuide({ locale }: { locale: Locale }) {
  return (
    <div className="canari-guide">
      <p className="screw-panel__hint">{t(locale, 'canariSelectHint')}</p>

      <section className="canari-guide__card">
        <h3>{t(locale, 'canariWhere')}</h3>
        <p>{t(locale, 'canariWhereDetail')}</p>
      </section>

      <section className="canari-guide__card">
        <h3>{t(locale, 'canariCostsTitle')}</h3>
        <ul>
          <li>
            {t(locale, 'canariLevel')} 1 — {CANARI_LEVEL_COSTS[0]}{' '}
            {t(locale, 'canariScrewsShort')}
          </li>
          <li>
            {t(locale, 'canariLevel')} 2 — {CANARI_LEVEL_COSTS[1]}{' '}
            {t(locale, 'canariScrewsShort')}
          </li>
          <li>
            {t(locale, 'canariLevel')} 3 — {CANARI_LEVEL_COSTS[2]}{' '}
            {t(locale, 'canariScrewsShort')}
          </li>
          <li>
            {t(locale, 'canariAllUpgradeCost').replace(
              '{n}',
              String(CANARI_FULL_UPGRADE_SCREWS),
            )}
          </li>
          <li>
            {t(locale, 'canariGiantReward').replace(
              '{n}',
              String(CANARI_GIANT_PLUSH_REMAINING),
            )}
          </li>
        </ul>
      </section>

      <section className="canari-guide__card">
        <h3>{t(locale, 'canariNotesTitle')}</h3>
        <ul>
          <li>{t(locale, 'canariNoteStack')}</li>
          <li>{t(locale, 'canariNoteTravel')}</li>
        </ul>
      </section>
    </div>
  )
}

function CanariDetails({ locale, plush }: { locale: Locale; plush: CanariPlush }) {
  const total = canariPlushTotalCost(plush)

  return (
    <div className="canari-details">
      <div className="canari-details__hero">
        <CanariSprite sprite={plush.sprite} size={64} />
        <p className="canari-details__summary">{plush.summary[locale]}</p>
      </div>

      <p className="canari-details__meta">
        <span>{t(locale, 'canariWhere')}</span>
        <span aria-hidden="true">·</span>
        <span>{t(locale, 'canariWhereDetail')}</span>
      </p>

      <div className="canari-details__items">
        <h3>
          {t(locale, 'canariLevels')} · {total} {t(locale, 'canariScrewsShort')}
        </h3>
        <ul className="canari-item-list">
          {plush.levels.map((lv) => (
            <li key={lv.level}>
              <CanariSprite sprite="colorful-screw" size={32} />
              <div className="canari-item-list__text">
                <div className="canari-item-list__main">
                  <strong>
                    {t(locale, 'canariLevel')} {lv.level}
                  </strong>
                  <span className="canari-item-list__price">
                    {lv.screwCost} {t(locale, 'canariScrewsShort')}
                  </span>
                </div>
                <span className="canari-item-list__note">{lv.effect[locale]}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
