import { useMemo, useState } from 'react'
import {
  LA_CRAFT_CATEGORY_KEYS,
  LA_CRAFTS,
  LA_ITEMS,
  LA_MATERIALS,
  laCraftIngredientById,
  type LaCraftItem,
  type LaCraftRecipe,
  type LaMaterial,
} from '../data/laCrafts'
import {
  LA_SPECIAL_CATEGORY_KEYS,
  LA_SPECIAL_ITEMS,
  type LaSpecialItem,
} from '../data/laSpecialItems'
import { HISUI_REGIONS, getHisuiRegion, type HisuiRegionId } from '../data/hisuiRegions'
import { laMarketItemSpriteUrl } from '../data/laMarkets'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './MissionPanel.css'
import './MarketPanel.css'
import './LaPinGuide.css'
import './LaCraft.css'

export type CraftTab = 'materials' | 'items' | 'special'
export type RecipeBrowserTab = 'recipes'

type BrowserProps = {
  locale: Locale
  tab: CraftTab
  selectedId: string | null
  onTabChange: (tab: CraftTab) => void
  onSelect: (id: string) => void
}

/** Middle column: Materials / Items / Special (evolution & shop). */
export function LaCraftBrowser({
  locale,
  tab,
  selectedId,
  onTabChange,
  onSelect,
}: BrowserProps) {
  const [query, setQuery] = useState('')

  const materials = useMemo(() => {
    const q = query.trim().toLowerCase()
    return LA_MATERIALS.filter((m) => !q || m.name[locale].toLowerCase().includes(q))
  }, [locale, query])

  const items = useMemo(() => {
    const q = query.trim().toLowerCase()
    return LA_ITEMS.filter(
      (item) =>
        !q ||
        item.name[locale].toLowerCase().includes(q) ||
        item.description[locale].toLowerCase().includes(q) ||
        t(locale, LA_CRAFT_CATEGORY_KEYS[item.category]).toLowerCase().includes(q),
    )
  }, [locale, query])

  const specials = useMemo(() => {
    const q = query.trim().toLowerCase()
    return LA_SPECIAL_ITEMS.filter(
      (item) =>
        !q ||
        item.name[locale].toLowerCase().includes(q) ||
        item.description[locale].toLowerCase().includes(q) ||
        item.source[locale].toLowerCase().includes(q) ||
        t(locale, LA_SPECIAL_CATEGORY_KEYS[item.category]).toLowerCase().includes(q),
    )
  }, [locale, query])

  return (
    <div className="map-shell la-craft-browser">
      <div className="map-toolbar">
        <div>
          <h2>{t(locale, 'laCraftsTitle')}</h2>
          <p>
            {LA_MATERIALS.length} {t(locale, 'laCraftsMaterials')} · {LA_ITEMS.length}{' '}
            {t(locale, 'laCraftsItems')} · {LA_SPECIAL_ITEMS.length}{' '}
            {t(locale, 'laCraftsSpecial')}
          </p>
        </div>
      </div>

      <div className="la-craft-browser__body">
        <div className="mission-panel__kind-tabs la-craft-tabs" role="group">
          <button
            type="button"
            className={tab === 'materials' ? 'is-active' : undefined}
            onClick={() => onTabChange('materials')}
          >
            {t(locale, 'laCraftsMaterials')}
          </button>
          <button
            type="button"
            className={tab === 'items' ? 'is-active' : undefined}
            onClick={() => onTabChange('items')}
          >
            {t(locale, 'laCraftsItems')}
          </button>
          <button
            type="button"
            className={tab === 'special' ? 'is-active' : undefined}
            onClick={() => onTabChange('special')}
          >
            {t(locale, 'laCraftsSpecial')}
          </button>
        </div>

        <div className="mission-panel__search">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t(locale, 'laCraftsSearch')}
            aria-label={t(locale, 'laCraftsSearch')}
          />
        </div>

        <div className="la-craft-browser__grid" role="list">
          {tab === 'materials' &&
            materials.map((m) => (
              <CraftCard
                key={m.id}
                active={selectedId === m.id}
                sprite={m.sprite}
                title={m.name[locale]}
                meta={
                  m.farm[0]
                    ? HISUI_REGIONS.find((r) => r.id === m.farm[0].regionId)?.name[locale]
                    : undefined
                }
                onClick={() => onSelect(m.id)}
              />
            ))}

          {tab === 'items' &&
            items.map((item) => (
              <CraftCard
                key={item.id}
                active={selectedId === item.id}
                sprite={item.resultSprite}
                title={item.name[locale]}
                meta={t(locale, LA_CRAFT_CATEGORY_KEYS[item.category])}
                onClick={() => onSelect(item.id)}
              />
            ))}

          {tab === 'special' &&
            specials.map((item) => (
              <CraftCard
                key={item.id}
                active={selectedId === item.id}
                sprite={item.sprite}
                title={item.name[locale]}
                meta={t(locale, LA_SPECIAL_CATEGORY_KEYS[item.category])}
                onClick={() => onSelect(item.id)}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

function CraftCard({
  active,
  sprite,
  title,
  meta,
  onClick,
}: {
  active: boolean
  sprite: string
  title: string
  meta?: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      role="listitem"
      className={['la-craft-card', active ? 'is-active' : ''].filter(Boolean).join(' ')}
      onClick={onClick}
    >
      <img
        src={laMarketItemSpriteUrl(sprite)}
        alt=""
        width={40}
        height={40}
        draggable={false}
      />
      <strong>{title}</strong>
      {meta && <span className="la-craft-card__meta">{meta}</span>}
    </button>
  )
}

type PanelProps = {
  locale: Locale
  tab: CraftTab
  selectedId: string | null
  onClose: () => void
  onOpenLocation?: (regionId: HisuiRegionId, subregionId: string) => void
}

export function LaCraftPanel({
  locale,
  tab,
  selectedId,
  onClose,
  onOpenLocation,
}: PanelProps) {
  const material =
    tab === 'materials' ? (LA_MATERIALS.find((m) => m.id === selectedId) ?? null) : null
  const item =
    tab === 'items' ? (LA_ITEMS.find((i) => i.id === selectedId) ?? null) : null
  const special =
    tab === 'special' ? (LA_SPECIAL_ITEMS.find((i) => i.id === selectedId) ?? null) : null
  const selected = material ?? item ?? special

  return (
    <aside
      className={`mission-panel la-craft-panel${selected ? '' : ' mission-panel--list-only'}`}
    >
      <header className="mission-panel__head">
        <div>
          <p className="mission-panel__eyebrow">{t(locale, 'toolCrafts')}</p>
          <h2>{selected ? selected.name[locale] : t(locale, 'laCraftsTitle')}</h2>
          {!selected && (
            <p className="mission-panel__progress">
              {LA_MATERIALS.length} {t(locale, 'laCraftsMaterials')} · {LA_ITEMS.length}{' '}
              {t(locale, 'laCraftsItems')} · {LA_SPECIAL_ITEMS.length}{' '}
              {t(locale, 'laCraftsSpecial')}
            </p>
          )}
        </div>
        {selected && (
          <button type="button" className="mission-panel__close" onClick={onClose}>
            {t(locale, 'close')}
          </button>
        )}
      </header>

      {material ? (
        <MaterialDetails
          locale={locale}
          material={material}
          onOpenLocation={onOpenLocation}
        />
      ) : item ? (
        <ItemDetails locale={locale} item={item} onOpenLocation={onOpenLocation} />
      ) : special ? (
        <SpecialDetails locale={locale} item={special} />
      ) : (
        <p className="mission-panel__hint">{t(locale, 'laCraftsSelectHint')}</p>
      )}
    </aside>
  )
}

/** Standalone Recipes tool: grid + detail panel. */
export function LaRecipesBrowser({
  locale,
  selectedId,
  onSelect,
}: {
  locale: Locale
  selectedId: string | null
  onSelect: (id: string) => void
}) {
  const [query, setQuery] = useState('')

  const recipes = useMemo(() => {
    const q = query.trim().toLowerCase()
    return LA_CRAFTS.filter(
      (r) =>
        !q ||
        r.name[locale].toLowerCase().includes(q) ||
        r.description[locale].toLowerCase().includes(q) ||
        (r.unlock?.[locale].toLowerCase().includes(q) ?? false) ||
        t(locale, LA_CRAFT_CATEGORY_KEYS[r.category]).toLowerCase().includes(q),
    )
  }, [locale, query])

  return (
    <div className="map-shell la-craft-browser">
      <div className="map-toolbar">
        <div>
          <h2>{t(locale, 'laRecipesTitle')}</h2>
          <p>
            {LA_CRAFTS.length} {t(locale, 'laCraftsRecipes')} — {t(locale, 'laRecipesHint')}
          </p>
        </div>
      </div>

      <div className="la-craft-browser__body">
        <div className="mission-panel__search">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t(locale, 'laRecipesSearch')}
            aria-label={t(locale, 'laRecipesSearch')}
          />
        </div>

        <div className="la-craft-browser__grid" role="list">
          {recipes.map((r) => (
            <CraftCard
              key={r.id}
              active={selectedId === r.id}
              sprite={r.resultSprite}
              title={r.name[locale]}
              meta={
                r.unlock?.[locale] ?? t(locale, LA_CRAFT_CATEGORY_KEYS[r.category])
              }
              onClick={() => onSelect(r.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function LaRecipesPanel({
  locale,
  selectedId,
  onClose,
  onOpenLocation,
}: {
  locale: Locale
  selectedId: string | null
  onClose: () => void
  onOpenLocation?: (regionId: HisuiRegionId, subregionId: string) => void
}) {
  const recipe = LA_CRAFTS.find((r) => r.id === selectedId) ?? null

  return (
    <aside
      className={`mission-panel la-craft-panel${recipe ? '' : ' mission-panel--list-only'}`}
    >
      <header className="mission-panel__head">
        <div>
          <p className="mission-panel__eyebrow">{t(locale, 'toolRecipes')}</p>
          <h2>{recipe ? recipe.name[locale] : t(locale, 'laRecipesTitle')}</h2>
          {!recipe && (
            <p className="mission-panel__progress">
              {LA_CRAFTS.length} {t(locale, 'laCraftsRecipes')}
            </p>
          )}
        </div>
        {recipe && (
          <button type="button" className="mission-panel__close" onClick={onClose}>
            {t(locale, 'close')}
          </button>
        )}
      </header>

      {recipe ? (
        <RecipeDetails locale={locale} recipe={recipe} onOpenLocation={onOpenLocation} />
      ) : (
        <p className="mission-panel__hint">{t(locale, 'laRecipesSelectHint')}</p>
      )}
    </aside>
  )
}

function RecipeDetails({
  locale,
  recipe,
  onOpenLocation,
}: {
  locale: Locale
  recipe: LaCraftRecipe
  onOpenLocation?: (regionId: HisuiRegionId, subregionId: string) => void
}) {
  return (
    <div className="la-craft-detail">
      <div className="la-craft-detail__hero">
        <div className="la-craft-detail__sprite" aria-hidden>
          <img
            src={laMarketItemSpriteUrl(recipe.resultSprite)}
            alt=""
            width={64}
            height={64}
          />
        </div>
        <div className="la-craft-detail__hero-text">
          <p className="la-craft-detail__category">
            {t(locale, LA_CRAFT_CATEGORY_KEYS[recipe.category])}
          </p>
          {recipe.unlock && (
            <p className="la-craft-detail__unlock">{recipe.unlock[locale]}</p>
          )}
          <p className="la-craft-detail__count">
            {recipe.materials.length} {t(locale, 'laCraftsMaterials').toLowerCase()}
          </p>
        </div>
      </div>

      <p className="la-craft-detail__desc">{recipe.description[locale]}</p>

      <MaterialsSection
        locale={locale}
        materials={recipe.materials}
        onOpenLocation={onOpenLocation}
      />
    </div>
  )
}

function ItemDetails({
  locale,
  item,
  onOpenLocation,
}: {
  locale: Locale
  item: LaCraftItem
  onOpenLocation?: (regionId: HisuiRegionId, subregionId: string) => void
}) {
  return (
    <div className="la-craft-detail">
      <div className="la-craft-detail__hero">
        <div className="la-craft-detail__sprite" aria-hidden>
          <img
            src={laMarketItemSpriteUrl(item.resultSprite)}
            alt=""
            width={64}
            height={64}
          />
        </div>
        <div className="la-craft-detail__hero-text">
          <p className="la-craft-detail__category">
            {t(locale, LA_CRAFT_CATEGORY_KEYS[item.category])}
          </p>
          {item.unlock && (
            <p className="la-craft-detail__unlock">{item.unlock[locale]}</p>
          )}
        </div>
      </div>

      <p className="la-craft-detail__desc">{item.description[locale]}</p>

      <MaterialsSection
        locale={locale}
        materials={item.materials}
        onOpenLocation={onOpenLocation}
      />
    </div>
  )
}

function SpecialDetails({ locale, item }: { locale: Locale; item: LaSpecialItem }) {
  const priceLabel =
    item.price == null
      ? null
      : item.currency === 'merit'
        ? `${item.price.toLocaleString('en-US')} ${t(locale, 'laMarketsMerit')}`
        : `₽${item.price.toLocaleString('en-US')}`

  return (
    <div className="la-craft-detail">
      <div className="la-craft-detail__hero">
        <div className="la-craft-detail__sprite" aria-hidden>
          <img src={laMarketItemSpriteUrl(item.sprite)} alt="" width={64} height={64} />
        </div>
        <div className="la-craft-detail__hero-text">
          <p className="la-craft-detail__category">
            {t(locale, LA_SPECIAL_CATEGORY_KEYS[item.category])}
          </p>
          {priceLabel && <p className="la-craft-detail__count">{priceLabel}</p>}
        </div>
      </div>

      <p className="la-craft-detail__desc">{item.description[locale]}</p>

      <section className="la-craft-detail__section">
        <h3>{t(locale, 'laCraftsSource')}</h3>
        <p className="la-craft-detail__desc">{item.source[locale]}</p>
      </section>
    </div>
  )
}

function MaterialsSection({
  locale,
  materials,
  onOpenLocation,
}: {
  locale: Locale
  materials: LaCraftRecipe['materials']
  onOpenLocation?: (regionId: HisuiRegionId, subregionId: string) => void
}) {
  return (
    <section className="la-craft-detail__section">
      <h3>{t(locale, 'laCraftsMaterials')}</h3>
      <ul className="la-craft-mats">
        {materials.map((row) => {
          const ing = laCraftIngredientById(row.materialId)
          if (!ing) return null
          const farm = ing.farm[0]
          const region = farm
            ? HISUI_REGIONS.find((r) => r.id === farm.regionId)
            : undefined
          return (
            <li key={row.materialId} className="la-craft-mat">
              <img
                className="la-craft-mat__sprite"
                src={laMarketItemSpriteUrl(ing.sprite)}
                alt=""
                width={36}
                height={36}
              />
              <div className="la-craft-mat__body">
                <div className="la-craft-mat__title">
                  <strong>{ing.name[locale]}</strong>
                  <span className="la-craft-mat__qty">×{row.qty}</span>
                </div>
                {farm ? (
                  onOpenLocation ? (
                    <button
                      type="button"
                      className="la-craft-mat__farm"
                      onClick={() => onOpenLocation(farm.regionId, farm.subregionId)}
                    >
                      {region?.name[locale] ?? farm.note[locale]}
                    </button>
                  ) : (
                    <span className="la-craft-mat__note">{farm.note[locale]}</span>
                  )
                ) : ing.kind === 'item' ? (
                  <span className="la-craft-mat__note">
                    {t(locale, 'laCraftsCraftedIngredient')}
                  </span>
                ) : null}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function MaterialDetails({
  locale,
  material,
  onOpenLocation,
}: {
  locale: Locale
  material: LaMaterial
  onOpenLocation?: (regionId: HisuiRegionId, subregionId: string) => void
}) {
  return (
    <div className="la-craft-detail">
      <div className="la-craft-detail__hero">
        <div className="la-craft-detail__sprite" aria-hidden>
          <img
            src={laMarketItemSpriteUrl(material.sprite)}
            alt=""
            width={64}
            height={64}
          />
        </div>
        <div className="la-craft-detail__hero-text">
          <p className="la-craft-detail__count">
            {material.farm.length} {t(locale, 'laCraftsFarm').toLowerCase()}
          </p>
        </div>
      </div>

      <section className="la-craft-detail__section">
        <h3>{t(locale, 'laCraftsFarm')}</h3>
        <ul className="la-craft-mats">
          {material.farm.map((f) => {
            const region = HISUI_REGIONS.find((r) => r.id === f.regionId)
            const sub = getHisuiRegion(f.regionId)?.subregions.find(
              (s) => s.id === f.subregionId,
            )
            const label = `${region?.name[locale] ?? f.regionId} · ${sub?.name[locale] ?? f.subregionId}`
            return (
              <li key={`${f.regionId}-${f.subregionId}`} className="la-craft-mat">
                <div className="la-craft-mat__body la-craft-mat__body--full">
                  <div className="la-craft-mat__title">
                    {onOpenLocation ? (
                      <button
                        type="button"
                        className="la-craft-mat__farm la-craft-mat__farm--strong"
                        onClick={() => onOpenLocation(f.regionId, f.subregionId)}
                      >
                        {label}
                      </button>
                    ) : (
                      <strong>{label}</strong>
                    )}
                  </div>
                  <span className="la-craft-mat__note">{f.note[locale]}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
