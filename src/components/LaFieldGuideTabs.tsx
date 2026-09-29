import type { Locale } from '../i18n'
import { t } from '../i18n'
import './LocationsView.css'

export type LaFieldGuideCategory =
  | 'wisps'
  | 'unowns'
  | 'alphas'
  | 'outbreaks'
  | 'camps'
  | 'distortions'

export const LA_FIELD_GUIDE_CATEGORIES: LaFieldGuideCategory[] = [
  'wisps',
  'unowns',
  'alphas',
  'outbreaks',
  'camps',
  'distortions',
]

const CATEGORY_I18N: Record<LaFieldGuideCategory, string> = {
  wisps: 'toolWisps',
  unowns: 'toolUnowns',
  alphas: 'toolAlphas',
  outbreaks: 'toolOutbreaks',
  camps: 'toolCamps',
  distortions: 'toolDistortions',
}

export function isLaFieldGuideCategory(
  value: string,
): value is LaFieldGuideCategory {
  return (LA_FIELD_GUIDE_CATEGORIES as string[]).includes(value)
}

export function LaFieldGuideTabs({
  locale,
  category,
  onCategoryChange,
}: {
  locale: Locale
  category: LaFieldGuideCategory
  onCategoryChange: (category: LaFieldGuideCategory) => void
}) {
  return (
    <div
      className="locations-view__tabs"
      role="tablist"
      aria-label={t(locale, 'laFieldGuideCategories')}
    >
      {LA_FIELD_GUIDE_CATEGORIES.map((id) => (
        <button
          key={id}
          type="button"
          role="tab"
          aria-selected={category === id}
          className={category === id ? 'is-active' : undefined}
          onClick={() => onCategoryChange(id)}
        >
          {t(locale, CATEGORY_I18N[id])}
        </button>
      ))}
    </div>
  )
}
