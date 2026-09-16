import { useMemo, useState } from 'react'
import {
  CATALOG_DONUTS,
  CATALOG_DONUT_BY_ID,
  DONUT_BERRIES,
  DONUT_BERRY_BY_ID,
  DONUT_CATEGORY_LABEL,
  DONUT_CATEGORY_ORDER,
  DONUT_FLAVOR_LABEL,
  DONUT_FLAVORS,
  MAX_DONUT_BERRIES,
  STANDARD_DONUT_SPRITE,
  berrySpriteUrl,
  donutEnergy,
  donutStars,
  effectiveLevelBoost,
  exampleAdjectiveForCategory,
  flavorScore,
  formatDonutGameName,
  formatHyperspaceDuration,
  catalogDonutDisplayName,
  hyperspaceTimes,
  namingBerryId,
  resolveDonutType,
  starMultiplier,
  sumBerryCalories,
  sumBerryFlavors,
  sumBerryLevels,
  type CatalogDonut,
  type DonutCategoryId,
  type DonutFlavor,
  type SavedDonutRecipe,
} from '../data/lzaDonuts'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './DonutPanel.css'

type Props = {
  locale: Locale
  recipes: SavedDonutRecipe[]
  onSave: (name: string, berryIds: string[], specialId: string | null) => void
  onDelete: (id: string) => void
  onRename: (id: string, name: string) => void
}

type BerryFilter = 'all' | 'hyper' | DonutFlavor

export function LzaDonutsView({ locale, recipes, onSave, onDelete, onRename }: Props) {
  const [bench, setBench] = useState<string[]>([])
  const [category, setCategory] = useState<DonutCategoryId>('special')
  const [selectedId, setSelectedId] = useState<string>(SPECIAL_FIRST_ID)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<BerryFilter>('hyper')
  const [saveName, setSaveName] = useState('')

  const selected = CATALOG_DONUT_BY_ID[selectedId] ?? null
  const flavors = useMemo(() => sumBerryFlavors(bench), [bench])
  const calories = useMemo(() => sumBerryCalories(bench), [bench])
  const levels = useMemo(() => sumBerryLevels(bench), [bench])
  const score = flavorScore(flavors)
  const stars = donutStars(score)
  const energy = donutEnergy(calories, stars)
  const levelBoost = effectiveLevelBoost(levels, stars)
  const mult = starMultiplier(stars)
  const hsTimes = useMemo(() => hyperspaceTimes(energy), [energy])
  const resolved = resolveDonutType(flavors)
  const resultSprite = resolved.catalog?.spriteSrc ?? STANDARD_DONUT_SPRITE
  const resultName = useMemo(() => {
    if (resolved.special) return resolved.special.name[locale]
    if (!bench.length) return t(locale, 'donutsEmptyResult')
    if (!resolved.category || resolved.category === 'special') {
      return t(locale, 'donutsStandardResult')
    }
    const dom = DONUT_FLAVORS.filter((f) => {
      const max = Math.max(...DONUT_FLAVORS.map((x) => flavors[x]))
      return flavors[f] === max && max > 0
    })
    const adjFlavor = dom[0] ?? 'sweet'
    const adjective =
      stars > 0
        ? exampleAdjectiveForCategory(
            resolved.category,
            stars,
            adjFlavor === 'spicy' ? 0 : 1,
          )
        : null
    return formatDonutGameName({
      locale,
      stars,
      category: resolved.category,
      berryId: namingBerryId(bench),
      adjective,
    })
  }, [bench, flavors, locale, resolved.category, resolved.special, stars])

  const catalogInTab = useMemo(
    () =>
      CATALOG_DONUTS.filter((d) => d.category === category).sort((a, b) => {
        const sa = a.stars ?? -1
        const sb = b.stars ?? -1
        return sa - sb
      }),
    [category],
  )

  const berries = useMemo(() => {
    const q = query.trim().toLowerCase()
    return DONUT_BERRIES.filter((b) => {
      if (filter === 'hyper' && !b.hyper) return false
      if (filter !== 'all' && filter !== 'hyper' && b.flavors[filter] <= 0) return false
      if (!q) return true
      return b.name[locale].toLowerCase().includes(q) || b.id.includes(q)
    }).sort((a, b) => b.menu - a.menu)
  }, [filter, locale, query])

  function addBerry(id: string) {
    setBench((prev) => (prev.length >= MAX_DONUT_BERRIES ? prev : [...prev, id]))
  }

  function removeAt(index: number) {
    setBench((prev) => prev.filter((_, i) => i !== index))
  }

  function selectDonut(donut: CatalogDonut, loadRecommended = true) {
    setCategory(donut.category)
    setSelectedId(donut.id)
    if (loadRecommended) setBench(donut.recommended.slice(0, MAX_DONUT_BERRIES))
  }

  function handleSave() {
    const name =
      saveName.trim() ||
      resolved.catalog?.name[locale] ||
      `${t(locale, 'donutsRecipe')} ${recipes.length + 1}`
    onSave(name, bench, resolved.special?.id ?? resolved.catalog?.id ?? null)
    setSaveName('')
  }

  const targetReqs = selected?.requirements ?? null
  const targetFlavor = selected?.dominantFlavor ?? null

  return (
    <div className="donut-layout">
      <section className="donut-browser">
        <header className="donut-browser__head">
          <div>
            <h2>{t(locale, 'donutsTitle')}</h2>
            <p>{t(locale, 'donutsHint')}</p>
          </div>
        </header>

        <div className="donut-cat-tabs" role="tablist" aria-label={t(locale, 'donutsCategories')}>
          {DONUT_CATEGORY_ORDER.map((id) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={category === id}
              className={category === id ? 'is-active' : undefined}
              onClick={() => {
                setCategory(id)
                const first = CATALOG_DONUTS.find((d) => d.category === id)
                if (first) {
                  setSelectedId(first.id)
                }
              }}
            >
              {DONUT_CATEGORY_LABEL[id][locale]}
            </button>
          ))}
        </div>

        <div className="donut-specials" role="list">
          {catalogInTab.map((d) => (
            <button
              key={d.id}
              type="button"
              role="listitem"
              className={selectedId === d.id ? 'is-active' : undefined}
              onClick={() => selectDonut(d, true)}
              title={t(locale, 'donutsLoadRecommended')}
            >
              <img src={d.spriteSrc} alt="" width={40} height={40} draggable={false} />
              <span>
                <strong>{catalogDonutDisplayName(d, locale)}</strong>
                <small>
                  {d.stars == null
                    ? t(locale, 'donutsLoadRecommended')
                    : d.stars === 0
                      ? t(locale, 'donutsBasicTier')
                      : `${'★'.repeat(d.stars)}${'☆'.repeat(Math.max(0, 5 - d.stars))}`}
                </small>
              </span>
            </button>
          ))}
        </div>

        <div className="donut-filters">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t(locale, 'donutsSearchBerry')}
            aria-label={t(locale, 'donutsSearchBerry')}
          />
          <div className="donut-filters__chips" role="group">
            {(
              [
                ['hyper', 'donutsFilterHyper'],
                ['all', 'donutsFilterAll'],
                ...DONUT_FLAVORS.map((f) => [f, f] as const),
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                className={filter === key ? 'is-active' : undefined}
                onClick={() => setFilter(key as BerryFilter)}
              >
                {key === 'hyper' || key === 'all'
                  ? t(locale, label as 'donutsFilterHyper' | 'donutsFilterAll')
                  : DONUT_FLAVOR_LABEL[key as DonutFlavor][locale]}
              </button>
            ))}
          </div>
        </div>

        <div className="donut-berry-grid" role="list">
          {berries.map((berry) => (
            <button
              key={berry.id}
              type="button"
              role="listitem"
              className="donut-berry-card"
              disabled={bench.length >= MAX_DONUT_BERRIES}
              onClick={() => addBerry(berry.id)}
            >
              <img src={berrySpriteUrl(berry.id)} alt="" width={32} height={32} loading="lazy" />
              <strong>{berry.name[locale]}</strong>
              <span className="donut-berry-card__meta">
                Lv {berry.level} · {berry.calories} cal
              </span>
              <span className="donut-berry-card__flavors">
                {DONUT_FLAVORS.filter((f) => berry.flavors[f] > 0)
                  .map((f) => `${DONUT_FLAVOR_LABEL[f][locale][0]}${berry.flavors[f]}`)
                  .join(' ')}
              </span>
            </button>
          ))}
        </div>
      </section>

      <aside className="donut-panel">
        <header className="donut-panel__head">
          <div>
            <p className="donut-panel__eyebrow">{t(locale, 'toolDonuts')}</p>
            <h2>{t(locale, 'donutsSimulator')}</h2>
          </div>
          <button type="button" className="donut-panel__clear" onClick={() => setBench([])}>
            {t(locale, 'donutsClear')}
          </button>
        </header>

        <div className="donut-result">
          <img src={resultSprite} alt="" width={72} height={72} draggable={false} />
          <div>
            <strong>{resultName}</strong>
            <p>
              {stars <= 0 && score > 0
                ? `${t(locale, 'donutsBasicTier')} · ${score} ${t(locale, 'donutsFlavorScore')}`
                : `${'★'.repeat(stars)}${'☆'.repeat(Math.max(0, 5 - stars))} · ${score} ${t(locale, 'donutsFlavorScore')}`}
            </p>
            <p>
              {energy} {t(locale, 'donutsCal')}
              {stars > 0 ? ` · ×${mult.toFixed(1)}` : ''}
              {' · '}
              {t(locale, 'donutsLevelSum')} +{levelBoost}
              {' · '}
              {bench.length}/{MAX_DONUT_BERRIES}
            </p>
            {resolved.special && (
              <p className="donut-result__ok">{t(locale, 'donutsSpecialReady')}</p>
            )}
            {selected?.category === 'special' && selected.requirements && !resolved.special && bench.length > 0 && (
              <p className="donut-result__warn">{t(locale, 'donutsSpecialMissing')}</p>
            )}
            {targetFlavor &&
              resolved.category &&
              resolved.category !== selected?.category &&
              bench.length > 0 && (
                <p className="donut-result__warn">{t(locale, 'donutsTypeMismatch')}</p>
              )}
            {bench.length > 0 && !resolved.special && stars > 0 && (
              <p className="donut-result__hint">{t(locale, 'donutsNameHint')}</p>
            )}
          </div>
        </div>

        <section className="donut-hs-time" aria-label={t(locale, 'donutsHyperspaceTime')}>
          <h3>{t(locale, 'donutsSurveyTime')}</h3>
          <p className="donut-hs-time__hint">{t(locale, 'donutsHyperspaceTimeHint')}</p>
          <ul>
            {hsTimes.map(({ rank, seconds }) => (
              <li key={rank}>
                <span className="donut-hs-time__rank">{'★'.repeat(rank)}</span>
                <strong>{formatHyperspaceDuration(seconds)}</strong>
              </li>
            ))}
          </ul>
        </section>

        <section className="donut-bench">
          <h3>
            {t(locale, 'donutsBench')} ({bench.length}/{MAX_DONUT_BERRIES})
          </h3>
          <ul className="donut-bench__list">
            {Array.from({ length: MAX_DONUT_BERRIES }, (_, i) => {
              const id = bench[i]
              const berry = id ? DONUT_BERRY_BY_ID[id] : null
              return (
                <li key={i}>
                  {berry ? (
                    <button type="button" onClick={() => removeAt(i)} title={t(locale, 'donutsRemove')}>
                      <img src={berrySpriteUrl(berry.id)} alt="" width={28} height={28} />
                      <span>{berry.name[locale]}</span>
                    </button>
                  ) : (
                    <span className="donut-bench__empty">{i + 1}</span>
                  )}
                </li>
              )
            })}
          </ul>
        </section>

        <section className="donut-flavors">
          <h3>{t(locale, 'donutsFlavors')}</h3>
          <ul>
            {DONUT_FLAVORS.map((f) => {
              const req = targetReqs?.[f] ?? 0
              const val = flavors[f]
              const focus = targetFlavor === f
              const pct =
                req > 0
                  ? Math.min(100, (val / req) * 100)
                  : Math.min(100, val / 4)
              const ok = req > 0 ? val >= req : !focus || val > 0
              return (
                <li key={f} className={focus ? 'is-focus' : undefined}>
                  <div className="donut-flavors__row">
                    <span>{DONUT_FLAVOR_LABEL[f][locale]}</span>
                    <strong className={ok ? 'is-ok' : 'is-low'}>
                      {val}
                      {req > 0 ? ` / ${req}` : ''}
                    </strong>
                  </div>
                  <div className="donut-flavors__bar">
                    <span style={{ width: `${pct}%` }} className={ok ? 'is-ok' : undefined} />
                  </div>
                </li>
              )
            })}
          </ul>
        </section>

        <section className="donut-save">
          <h3>{t(locale, 'donutsSaveTitle')}</h3>
          <div className="donut-save__row">
            <input
              type="text"
              value={saveName}
              onChange={(e) => setSaveName(e.target.value)}
              placeholder={t(locale, 'donutsSavePlaceholder')}
              disabled={bench.length === 0}
            />
            <button type="button" disabled={bench.length === 0} onClick={handleSave}>
              {t(locale, 'donutsSave')}
            </button>
          </div>
        </section>

        <section className="donut-saved">
          <h3>
            {t(locale, 'donutsSaved')} ({recipes.length})
          </h3>
          {recipes.length === 0 ? (
            <p className="donut-saved__empty">{t(locale, 'donutsSavedEmpty')}</p>
          ) : (
            <ul className="donut-saved__list">
              {recipes.map((recipe) => (
                <SavedRecipeRow
                  key={recipe.id}
                  locale={locale}
                  recipe={recipe}
                  onLoad={() => {
                    const cat = recipe.specialId
                      ? CATALOG_DONUT_BY_ID[recipe.specialId]
                      : null
                    if (cat) {
                      setCategory(cat.category)
                      setSelectedId(cat.id)
                    }
                    setBench(recipe.berryIds.slice(0, MAX_DONUT_BERRIES))
                  }}
                  onDelete={() => onDelete(recipe.id)}
                  onRename={(name) => onRename(recipe.id, name)}
                />
              ))}
            </ul>
          )}
        </section>
      </aside>
    </div>
  )
}

const SPECIAL_FIRST_ID = CATALOG_DONUTS.find((d) => d.category === 'special')?.id ?? 'darkrai'

function SavedRecipeRow({
  locale,
  recipe,
  onLoad,
  onDelete,
  onRename,
}: {
  locale: Locale
  recipe: SavedDonutRecipe
  onLoad: () => void
  onDelete: () => void
  onRename: (name: string) => void
}) {
  const catalog = recipe.specialId ? CATALOG_DONUT_BY_ID[recipe.specialId] : null
  const sprite = catalog?.spriteSrc ?? STANDARD_DONUT_SPRITE

  return (
    <li className="donut-saved__item">
      <button type="button" className="donut-saved__load" onClick={onLoad}>
        <img src={sprite} alt="" width={36} height={36} draggable={false} />
        <span>
          <strong>{recipe.name}</strong>
          <small>
            {recipe.berryIds.length} {t(locale, 'donutsBerries')}
            {catalog ? ` · ${catalog.name[locale]}` : ''}
          </small>
        </span>
      </button>
      <button
        type="button"
        className="donut-saved__rename"
        onClick={() => {
          const next = window.prompt(t(locale, 'donutsRenamePrompt'), recipe.name)
          if (next && next.trim()) onRename(next.trim())
        }}
      >
        {t(locale, 'donutsRename')}
      </button>
      <button type="button" className="donut-saved__delete" onClick={onDelete}>
        {t(locale, 'donutsDelete')}
      </button>
    </li>
  )
}
