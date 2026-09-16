import { useEffect, useMemo, useState } from 'react'
import { LA_HISUI_FORMS, hisuiFormsForDex, type LaHisuiFormEntry } from '../data/laHisuiForms'
import { LA_POKEDEX } from '../data/laPokedex'
import { hisuiLocationsForDex } from '../data/laSpawns'
import { outbreaksForDex } from '../data/laOutbreaks'
import { HISUI_REGIONS, type HisuiRegionId } from '../data/hisuiRegions'
import { laEvolutionsForDex } from '../data/laEvolutions'
import {
  researchLevelFromPoints,
  researchMilestoneKey,
  researchPointsForDex,
  researchTaskProgress,
  researchTasksForDex,
  type LaResearchTask,
} from '../data/laResearchTasks'
import { LZA_MEGAS, type LzaMegaEntry } from '../data/lzaMegas'
import { megaStoneForMegaId } from '../data/lzaMegaStones'
import { LZA_ITEMS } from '../data/lzaItems'
import { lzaItemSpriteUrl } from '../data/lzaItemSprites'
import { LZA_POKEDEX, wildZonesForDex } from '../data/lzaPokedex'
import { TYPE_COLORS } from '../data/pokemonUi'
import { spriteUrl } from '../data/wildZones'
import { usePokemonDetails, usePokemonFormDetails } from '../hooks/usePokemonDetails'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import { PokemonFacts } from './PokemonDetailSections'
import './ZonePanel.css'
import './PokedexPanel.css'
import './LaPinGuide.css'

type ViewTab = 'all' | 'megas' | 'hisui'
export type PokedexVariant = 'lza' | 'la'

type DexEntry = {
  regional: number
  dex: number
  name: string
}

type Props = {
  locale: Locale
  variant?: PokedexVariant
  isCaught: (dex: number) => boolean
  onToggle: (dex: number) => void
  onReset: () => void
  researchDone?: Record<string, boolean>
  onToggleResearch?: (taskId: string) => void
  onOpenHisuiLocation?: (regionId: HisuiRegionId, subregionId: string) => void
  onOpenOutbreak?: (outbreakId: string) => void
  onOpenMegaStone?: (itemId: string) => void
}

export function PokedexPanel({
  locale,
  variant = 'lza',
  isCaught,
  onToggle,
  onReset,
  researchDone = {},
  onToggleResearch,
  onOpenHisuiLocation,
  onOpenOutbreak,
  onOpenMegaStone,
}: Props) {
  const showMegas = variant === 'lza'
  const showHisuiTab = variant === 'la'
  const [viewTab, setViewTab] = useState<ViewTab>('all')
  const [query, setQuery] = useState('')
  const [expandedKey, setExpandedKey] = useState<string | null>(null)
  const [hideCaught, setHideCaught] = useState(false)

  const catalog = useMemo<DexEntry[]>(() => {
    if (variant === 'la') {
      return LA_POKEDEX.map((e) => ({ regional: e.hisui, dex: e.dex, name: e.name }))
    }
    return LZA_POKEDEX.map((e) => ({ regional: e.lumiose, dex: e.dex, name: e.name }))
  }, [variant])

  useEffect(() => {
    setViewTab('all')
    setExpandedKey(null)
    setQuery('')
    setHideCaught(false)
  }, [variant])

  const caughtCount = useMemo(
    () => catalog.filter((e) => isCaught(e.dex)).length,
    [catalog, isCaught],
  )

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return catalog.filter((entry) => {
      if (hideCaught && isCaught(entry.dex)) return false
      if (!q) return true
      const reg = String(entry.regional)
      const nat = String(entry.dex)
      return (
        entry.name.toLowerCase().includes(q) ||
        reg.includes(q) ||
        nat.includes(q) ||
        reg.padStart(3, '0').includes(q) ||
        nat.padStart(3, '0').includes(q)
      )
    })
  }, [catalog, query, hideCaught, isCaught])

  const megaList = useMemo(() => {
    if (!showMegas) return []
    const q = query.trim().toLowerCase()
    return LZA_MEGAS.filter((mega) => {
      if (hideCaught && isCaught(mega.dex)) return false
      if (!q) return true
      const label = (locale === 'pt' ? mega.labelPt : mega.labelEn).toLowerCase()
      const reg = String(mega.lumiose)
      const nat = String(mega.dex)
      return (
        label.includes(q) ||
        mega.baseName.toLowerCase().includes(q) ||
        mega.megaId.includes(q) ||
        reg.includes(q) ||
        nat.includes(q) ||
        reg.padStart(3, '0').includes(q) ||
        nat.padStart(3, '0').includes(q)
      )
    })
  }, [showMegas, query, hideCaught, isCaught, locale])

  const hisuiList = useMemo(() => {
    if (!showHisuiTab) return []
    const q = query.trim().toLowerCase()
    return LA_HISUI_FORMS.filter((form) => {
      if (hideCaught && isCaught(form.dex)) return false
      if (!q) return true
      const label = (locale === 'pt' ? form.labelPt : form.labelEn).toLowerCase()
      const reg = String(form.hisui)
      const nat = String(form.dex)
      return (
        label.includes(q) ||
        form.baseName.toLowerCase().includes(q) ||
        form.formId.includes(q) ||
        reg.includes(q) ||
        nat.includes(q) ||
        reg.padStart(3, '0').includes(q) ||
        nat.padStart(3, '0').includes(q)
      )
    }).sort((a, b) => a.hisui - b.hisui)
  }, [showHisuiTab, query, hideCaught, isCaught, locale])

  useEffect(() => {
    setExpandedKey(null)
  }, [viewTab])

  useEffect(() => {
    if (expandedKey == null) return
    const el = document.querySelector(`[data-dex-card="${expandedKey}"]`)
    el?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [expandedKey])

  const title =
    viewTab === 'megas'
      ? t(locale, 'pokedexMegaTitle')
      : viewTab === 'hisui'
        ? t(locale, 'pokedexHisuiFormsTitle')
        : t(locale, variant === 'la' ? 'pokedexHisuiTitle' : 'pokedexTitle')

  const progress =
    viewTab === 'megas'
      ? `${megaList.length}/${LZA_MEGAS.length}`
      : viewTab === 'hisui'
        ? `${hisuiList.length}/${LA_HISUI_FORMS.length}`
        : `${caughtCount}/${catalog.length}`

  const progressLabel =
    viewTab === 'megas'
      ? t(locale, 'pokedexMegaCount')
      : viewTab === 'hisui'
        ? t(locale, 'pokedexHisuiFormsCount')
        : t(locale, 'pokedexProgress')

  const hint =
    viewTab === 'megas'
      ? t(locale, 'pokedexMegaHint')
      : viewTab === 'hisui'
        ? t(locale, 'pokedexHisuiFormsHint')
        : t(locale, 'pokedexHint')

  return (
    <section className={`pokedex-panel pokedex-panel--${variant}`}>
      <header className="pokedex-panel__head">
        <div>
          <p className="pokedex-panel__eyebrow">{t(locale, 'toolPokedex')}</p>
          <h2>{title}</h2>
          <p className="pokedex-panel__progress">
            {progressLabel}: {progress}
          </p>
        </div>
        <button type="button" className="pokedex-panel__reset" onClick={onReset}>
          {t(locale, 'resetProgress')}
        </button>
      </header>

      {variant === 'lza' && (
        <div className="pokedex-view-tabs" role="tablist" aria-label={t(locale, 'toolPokedex')}>
          <button
            type="button"
            role="tab"
            aria-selected={viewTab === 'all'}
            className={
              viewTab === 'all' ? 'pokedex-view-tabs__btn is-active' : 'pokedex-view-tabs__btn'
            }
            onClick={() => setViewTab('all')}
          >
            {t(locale, 'pokedexViewAll')}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewTab === 'megas'}
            className={
              viewTab === 'megas' ? 'pokedex-view-tabs__btn is-active' : 'pokedex-view-tabs__btn'
            }
            onClick={() => setViewTab('megas')}
          >
            {t(locale, 'pokedexViewMegas')}
          </button>
        </div>
      )}

      {variant === 'la' && (
        <div className="pokedex-view-tabs" role="tablist" aria-label={t(locale, 'toolPokedex')}>
          <button
            type="button"
            role="tab"
            aria-selected={viewTab === 'all'}
            className={
              viewTab === 'all' ? 'pokedex-view-tabs__btn is-active' : 'pokedex-view-tabs__btn'
            }
            onClick={() => setViewTab('all')}
          >
            {t(locale, 'pokedexViewAll')}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewTab === 'hisui'}
            className={
              viewTab === 'hisui' ? 'pokedex-view-tabs__btn is-active' : 'pokedex-view-tabs__btn'
            }
            onClick={() => setViewTab('hisui')}
          >
            {t(locale, 'pokedexViewHisui')}
          </button>
        </div>
      )}

      <div className="pokedex-panel__toolbar">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t(locale, 'pokedexSearch')}
          aria-label={t(locale, 'pokedexSearch')}
        />
        <button
          type="button"
          className={hideCaught ? 'is-active' : undefined}
          onClick={() => setHideCaught((v) => !v)}
        >
          {t(locale, 'pokedexHideCaught')}
        </button>
      </div>

      <p className="pokedex-panel__hint">{hint}</p>

      <div className="pokedex-grid">
        {viewTab === 'all' &&
          list.map((entry) => {
            const key = `${variant}-${entry.dex}`
            return (
              <PokedexCard
                key={`${variant}-${entry.regional}`}
                cardKey={key}
                locale={locale}
                variant={variant}
                entry={entry}
                caught={isCaught(entry.dex)}
                expanded={expandedKey === key}
                onToggleExpand={() => setExpandedKey((prev) => (prev === key ? null : key))}
                onToggleCaught={() => onToggle(entry.dex)}
                researchDone={researchDone}
                onToggleResearch={onToggleResearch}
                onOpenHisuiLocation={onOpenHisuiLocation}
                onOpenOutbreak={onOpenOutbreak}
                onOpenMegaStone={onOpenMegaStone}
              />
            )
          })}

        {viewTab === 'megas' &&
          megaList.map((mega) => {
            const entry: DexEntry = {
              regional: mega.lumiose,
              dex: mega.dex,
              name: mega.baseName,
            }
            return (
              <PokedexCard
                key={mega.megaId}
                cardKey={mega.megaId}
                locale={locale}
                variant={variant}
                entry={entry}
                caught={isCaught(mega.dex)}
                expanded={expandedKey === mega.megaId}
                focusMega={mega}
                onToggleExpand={() =>
                  setExpandedKey((prev) => (prev === mega.megaId ? null : mega.megaId))
                }
                onToggleCaught={() => onToggle(mega.dex)}
                researchDone={researchDone}
                onToggleResearch={onToggleResearch}
                onOpenHisuiLocation={onOpenHisuiLocation}
                onOpenOutbreak={onOpenOutbreak}
                onOpenMegaStone={onOpenMegaStone}
              />
            )
          })}

        {viewTab === 'hisui' &&
          hisuiList.map((form) => {
            const entry: DexEntry = {
              regional: form.hisui,
              dex: form.dex,
              name: form.baseName,
            }
            return (
              <PokedexCard
                key={form.formId}
                cardKey={form.formId}
                locale={locale}
                variant={variant}
                entry={entry}
                caught={isCaught(form.dex)}
                expanded={expandedKey === form.formId}
                focusHisui={form}
                onToggleExpand={() =>
                  setExpandedKey((prev) => (prev === form.formId ? null : form.formId))
                }
                onToggleCaught={() => onToggle(form.dex)}
                researchDone={researchDone}
                onToggleResearch={onToggleResearch}
                onOpenHisuiLocation={onOpenHisuiLocation}
                onOpenOutbreak={onOpenOutbreak}
              />
            )
          })}
      </div>

      {((viewTab === 'all' && list.length === 0) ||
        (viewTab === 'megas' && megaList.length === 0) ||
        (viewTab === 'hisui' && hisuiList.length === 0)) && (
        <p className="pokedex-panel__empty">{t(locale, 'pokedexEmpty')}</p>
      )}
    </section>
  )
}

function PokedexCard({
  locale,
  variant,
  entry,
  cardKey,
  caught,
  expanded,
  focusMega,
  focusHisui,
  onToggleExpand,
  onToggleCaught,
  researchDone = {},
  onToggleResearch,
  onOpenHisuiLocation,
  onOpenOutbreak,
  onOpenMegaStone,
}: {
  locale: Locale
  variant: PokedexVariant
  entry: DexEntry
  cardKey: string
  caught: boolean
  expanded: boolean
  focusMega?: LzaMegaEntry
  focusHisui?: LaHisuiFormEntry
  onToggleExpand: () => void
  onToggleCaught: () => void
  researchDone?: Record<string, boolean>
  onToggleResearch?: (taskId: string) => void
  onOpenHisuiLocation?: (regionId: HisuiRegionId, subregionId: string) => void
  onOpenOutbreak?: (outbreakId: string) => void
  onOpenMegaStone?: (itemId: string) => void
}) {
  const showZones = variant === 'lza'
  const showHisuiLocations = variant === 'la'
  const showMegas = variant === 'lza'
  const showHisuiForms = variant === 'la'
  const learnsetGame = variant === 'la' ? 'la' : 'lza'
  const zones = useMemo(
    () => (showZones ? wildZonesForDex(entry.dex) : []),
    [entry.dex, showZones],
  )
  const hisuiLocations = useMemo(() => {
    if (!showHisuiLocations) return []
    return hisuiLocationsForDex(entry.dex)
  }, [entry.dex, showHisuiLocations])
  const outbreakLocations = useMemo(() => {
    if (!showHisuiLocations) return []
    return outbreaksForDex(entry.dex)
  }, [entry.dex, showHisuiLocations])
  const hisuiLocationLabels = useMemo(() => {
    return hisuiLocations.map((hit) => {
      const region = HISUI_REGIONS.find((r) => r.id === hit.regionId)
      const sub = region?.subregions.find((s) => s.id === hit.subregionId)
      if (!region || !sub) return hit.subregionId
      return `${region.name[locale]} — ${sub.name[locale]}`
    })
  }, [hisuiLocations, locale])
  const outbreakLocationLabels = useMemo(() => {
    return outbreakLocations.map((hit) => {
      const region = HISUI_REGIONS.find((r) => r.id === hit.regionId)
      const sub = region?.subregions.find((s) => s.id === hit.subregionId)
      const place =
        region && sub
          ? `${region.name[locale]} — ${sub.name[locale]}`
          : hit.subregionId
      return `${t(locale, 'pokedexOutbreak')}: ${place}`
    })
  }, [outbreakLocations, locale])
  const formsForDex = useMemo(
    () => (showHisuiForms ? hisuiFormsForDex(entry.dex) : []),
    [showHisuiForms, entry.dex],
  )
  const defaultHisui = formsForDex[0]
  const hasRegionalHisui = formsForDex.some((form) => !form.exclusive)
  const exclusiveHisuiOnly =
    formsForDex.length > 0 && formsForDex.every((form) => form.exclusive)
  const megaMode = Boolean(focusMega)
  const hisuiMode = Boolean(focusHisui)
  const focusedFormId = focusMega?.megaId ?? focusHisui?.formId ?? null
  const defaultFormId =
    focusedFormId ??
    (defaultHisui && (hasRegionalHisui || exclusiveHisuiOnly) ? defaultHisui.formId : 'base')
  const [formTab, setFormTab] = useState<'base' | string>(defaultFormId)
  const [detailsMounted, setDetailsMounted] = useState(expanded)

  useEffect(() => {
    if (expanded) {
      setDetailsMounted(true)
      return
    }
    const timer = window.setTimeout(() => setDetailsMounted(false), 380)
    return () => window.clearTimeout(timer)
  }, [expanded])

  const loadBase = detailsMounted && !megaMode && !hisuiMode
  const {
    details: baseDetails,
    megas,
    loading: baseLoading,
    error: baseError,
  } = usePokemonDetails(loadBase ? entry.dex : null, locale, learnsetGame)

  const activeFormId = focusedFormId ?? (formTab === 'base' ? null : formTab)
  const {
    details: formDetails,
    loading: formLoading,
    error: formError,
  } = usePokemonFormDetails(
    detailsMounted && activeFormId ? activeFormId : null,
    locale,
    entry.dex,
    learnsetGame,
  )

  useEffect(() => {
    if (!expanded) return
    setFormTab(
      focusedFormId ??
        (defaultHisui && (hasRegionalHisui || exclusiveHisuiOnly)
          ? defaultHisui.formId
          : 'base'),
    )
  }, [
    expanded,
    entry.dex,
    focusedFormId,
    defaultHisui?.formId,
    hasRegionalHisui,
    exclusiveHisuiOnly,
  ])

  useEffect(() => {
    if (focusedFormId || formTab === 'base') return
    const known =
      (showMegas && megas.some((m) => m.id === formTab)) ||
      formsForDex.some((h) => h.formId === formTab)
    if (!known) {
      setFormTab(
        defaultHisui && (hasRegionalHisui || exclusiveHisuiOnly)
          ? defaultHisui.formId
          : 'base',
      )
    }
  }, [
    formTab,
    megas,
    formsForDex,
    focusedFormId,
    showMegas,
    defaultHisui,
    hasRegionalHisui,
    exclusiveHisuiOnly,
  ])

  const onHisuiForm =
    hisuiMode ||
    formsForDex.some((h) => h.formId === formTab) ||
    Boolean(defaultHisui && formTab === defaultHisui.formId)
  const onAltForm = Boolean(focusedFormId) || formTab !== 'base'
  const details = onAltForm ? formDetails : baseDetails
  const loading = onAltForm ? formLoading : baseLoading
  const error = onAltForm ? formError : baseError

  const researchTasks = useMemo(
    () => (variant === 'la' ? researchTasksForDex(entry.dex) : []),
    [entry.dex, variant],
  )
  const researchPoints = researchPointsForDex(entry.dex, researchDone)
  const researchLevel = researchLevelFromPoints(researchPoints)
  const evolutions = useMemo(
    () => (variant === 'la' ? laEvolutionsForDex(entry.dex) : []),
    [entry.dex, variant],
  )

  const focusLabel =
    focusMega != null
      ? locale === 'pt'
        ? focusMega.labelPt
        : focusMega.labelEn
      : focusHisui != null
        ? locale === 'pt'
          ? focusHisui.labelPt
          : focusHisui.labelEn
        : defaultHisui != null
          ? locale === 'pt'
            ? defaultHisui.labelPt
            : defaultHisui.labelEn
          : null

  const defaultSprite = defaultHisui
    ? spriteUrl(defaultHisui.spriteId)
    : spriteUrl(entry.dex)

  const altSpriteFromIndex = useMemo(() => {
    if (megaMode) return spriteUrl(focusMega!.spriteId)
    if (hisuiMode) return spriteUrl(focusHisui!.spriteId)
    if (formTab === 'base') return null
    if (showMegas) {
      const megaHit = LZA_MEGAS.find((m) => m.megaId === formTab)
      if (megaHit) return spriteUrl(megaHit.spriteId)
    }
    const hisuiHit = formsForDex.find((h) => h.formId === formTab)
    return hisuiHit ? spriteUrl(hisuiHit.spriteId) : null
  }, [megaMode, hisuiMode, focusMega, focusHisui, formTab, showMegas, formsForDex])

  const summaryName = detailsMounted && onAltForm
    ? formDetails?.name ?? focusLabel ?? entry.name
    : baseDetails?.name ?? entry.name

  const summarySprite =
    (detailsMounted && onAltForm ? formDetails?.spriteUrl : null) ||
    altSpriteFromIndex ||
    defaultSprite

  const displayName = details?.name ?? summaryName
  const artUrl = details?.artworkUrl || altSpriteFromIndex || summarySprite
  const formMegas = showMegas ? megas : []
  const showFormTabs =
    !focusedFormId &&
    (formMegas.length > 0 ||
      (hasRegionalHisui && formsForDex.length > 0) ||
      formsForDex.length > 1)
  const activeHisuiEntry =
    formsForDex.find((h) => h.formId === formTab) ??
    (hisuiMode ? focusHisui : undefined) ??
    defaultHisui
  const isExclusiveHisui = Boolean(activeHisuiEntry?.exclusive)
  const isHisuiTab = onHisuiForm || Boolean(details?.isHisui)
  const isMegaTab =
    megaMode || (showMegas && LZA_MEGAS.some((m) => m.megaId === formTab)) || Boolean(details?.isMega)

  const activeMegaId = focusMega?.megaId ?? (showMegas && formTab !== 'base' ? formTab : null)
  const megaStone =
    activeMegaId && isMegaTab ? megaStoneForMegaId(String(activeMegaId)) : null
  const megaStoneItem = megaStone
    ? LZA_ITEMS.find((item) => item.id === megaStone.itemId)
    : null
  const megaStoneName = megaStoneItem?.name[locale] ?? megaStone?.nameEn ?? ''

  return (
    <article
      data-dex-card={cardKey}
      className={[
        'pokedex-card',
        detailsMounted ? 'is-expanded' : '',
        expanded ? 'is-open' : '',
        caught ? 'is-caught' : '',
        megaMode ? 'is-mega' : '',
        hisuiMode ? 'is-hisui' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="pokedex-card__row">
        <button type="button" className="pokedex-card__summary" onClick={onToggleExpand}>
          <span className="pokedex-card__num">#{String(entry.regional).padStart(3, '0')}</span>
          <span className="pokedex-card__sprite">
            <img
              src={summarySprite}
              alt=""
              width={48}
              height={48}
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                const fallback = spriteUrl(entry.dex)
                if (img.src !== fallback) img.src = fallback
              }}
            />
            {megaMode && <span className="pokedex-card__mega-badge">MEGA</span>}
            {hisuiMode && <span className="pokedex-card__hisui-badge">HISUI</span>}
          </span>
          <span className="pokedex-card__meta">
            <strong>{summaryName}</strong>
            <span>
              {focusedFormId
                ? `${entry.name} · #${String(entry.dex).padStart(3, '0')}`
                : `${t(locale, 'pokedexNational')}: #${String(entry.dex).padStart(3, '0')}`}
            </span>
          </span>
        </button>
        <button
          type="button"
          className={caught ? 'pokedex-card__mark is-on' : 'pokedex-card__mark'}
          onClick={onToggleCaught}
          aria-pressed={caught}
          aria-label={caught ? t(locale, 'markUncaught') : t(locale, 'markCaught')}
          title={caught ? t(locale, 'caught') : t(locale, 'notCaught')}
        >
          {caught ? '✓' : ''}
        </button>
        <button
          type="button"
          className="pokedex-card__chevron"
          onClick={onToggleExpand}
          aria-expanded={expanded}
          aria-label={expanded ? 'Collapse' : 'Expand'}
        >
          <span className="pokedex-card__chevron-icon" aria-hidden>
            ▾
          </span>
        </button>
      </div>

      {detailsMounted && (
        <div
          className={['pokedex-card__details-wrap', expanded ? 'is-open' : '']
            .filter(Boolean)
            .join(' ')}
          aria-hidden={!expanded}
        >
          <div className="pokedex-card__details">
          {showFormTabs && (
            <div className="pokedex-tabs" role="tablist" aria-label={t(locale, 'pokedexForms')}>
              {showHisuiForms ? (
                <>
                  {formsForDex.map((form) => (
                    <button
                      key={form.formId}
                      type="button"
                      role="tab"
                      aria-selected={formTab === form.formId}
                      tabIndex={expanded ? 0 : -1}
                      className={
                        formTab === form.formId
                          ? 'pokedex-tabs__btn is-active'
                          : 'pokedex-tabs__btn'
                      }
                      onClick={() => setFormTab(form.formId)}
                    >
                      {hasRegionalHisui && !form.exclusive
                        ? t(locale, 'pokedexTabHisui')
                        : locale === 'pt'
                          ? form.labelPt
                          : form.labelEn}
                    </button>
                  ))}
                  {hasRegionalHisui && (
                    <button
                      type="button"
                      role="tab"
                      aria-selected={formTab === 'base'}
                      tabIndex={expanded ? 0 : -1}
                      className={
                        formTab === 'base' ? 'pokedex-tabs__btn is-active' : 'pokedex-tabs__btn'
                      }
                      onClick={() => setFormTab('base')}
                    >
                      {t(locale, 'pokedexTabOriginal')}
                    </button>
                  )}
                </>
              ) : (
                <>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={formTab === 'base'}
                    tabIndex={expanded ? 0 : -1}
                    className={
                      formTab === 'base' ? 'pokedex-tabs__btn is-active' : 'pokedex-tabs__btn'
                    }
                    onClick={() => setFormTab('base')}
                  >
                    {t(locale, 'pokedexTabBase')}
                  </button>
                  {formMegas.map((mega) => (
                    <button
                      key={mega.id}
                      type="button"
                      role="tab"
                      aria-selected={formTab === mega.id}
                      tabIndex={expanded ? 0 : -1}
                      className={
                        formTab === mega.id ? 'pokedex-tabs__btn is-active' : 'pokedex-tabs__btn'
                      }
                      onClick={() => setFormTab(mega.id)}
                    >
                      {locale === 'pt' ? mega.labelPt : mega.labelEn}
                    </button>
                  ))}
                </>
              )}
            </div>
          )}

          <div className="poke-detail__hero">
            <img src={artUrl} alt={displayName} />
            <div className="poke-detail__hero-meta">
              {details?.genus && <p className="pokedex-card__genus">{details.genus}</p>}
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
              {showZones && !onAltForm && zones.length > 0 && (
                <p className="pokedex-card__zones">
                  {t(locale, 'pokedexWildZones')}:{' '}
                  {zones.map((id) => `${t(locale, 'wildZone')} ${id}`).join(', ')}
                </p>
              )}
              {showHisuiLocations && hisuiLocations.length > 0 && (
                <div className="pokedex-card__zones pokedex-locations">
                  <strong>{t(locale, 'pokedexHisuiLocations')}:</strong>
                  {hisuiLocations.map((hit, idx) => {
                    const region = HISUI_REGIONS.find((r) => r.id === hit.regionId)
                    const sub = region?.subregions.find((s) => s.id === hit.subregionId)
                    const label = hisuiLocationLabels[idx]
                    const alphaNote = hit.alpha ? ' ★' : ''
                    if (onOpenHisuiLocation && region) {
                      return (
                        <button
                          key={`${hit.regionId}-${hit.subregionId}-${idx}`}
                          type="button"
                          className="pokedex-location-link"
                          onClick={() => onOpenHisuiLocation(hit.regionId, hit.subregionId)}
                        >
                          {label}
                          {alphaNote}
                        </button>
                      )
                    }
                    return (
                      <span key={`${hit.regionId}-${hit.subregionId}-${idx}`}>
                        {label}
                        {alphaNote}
                        {idx < hisuiLocations.length - 1 ? ' · ' : ''}
                      </span>
                    )
                  })}
                </div>
              )}
              {showHisuiLocations && outbreakLocations.length > 0 && (
                <div className="pokedex-card__zones pokedex-locations">
                  <strong>{t(locale, 'pokedexOutbreakLocations')}:</strong>
                  {outbreakLocations.map((hit, idx) => {
                    const label = outbreakLocationLabels[idx]
                    if (onOpenOutbreak) {
                      return (
                        <button
                          key={hit.id}
                          type="button"
                          className="pokedex-location-link pokedex-location-link--outbreak"
                          onClick={() => onOpenOutbreak(hit.id)}
                        >
                          {label}
                        </button>
                      )
                    }
                    return (
                      <span key={hit.id}>
                        {label}
                        {idx < outbreakLocations.length - 1 ? ' · ' : ''}
                      </span>
                    )
                  })}
                </div>
              )}
              {isMegaTab && onAltForm && (
                <p className="pokedex-card__zones">{t(locale, 'pokedexMegaNote')}</p>
              )}
              {megaStone && (
                <button
                  type="button"
                  className="pokedex-megastone"
                  tabIndex={expanded ? 0 : -1}
                  onClick={(e) => {
                    e.stopPropagation()
                    onOpenMegaStone?.(megaStone.itemId)
                  }}
                  title={megaStoneName}
                >
                  <img
                    src={lzaItemSpriteUrl(megaStone.sprite)}
                    alt=""
                    width={24}
                    height={24}
                    draggable={false}
                  />
                  <span>
                    <strong>{megaStoneName}</strong>
                    <small>{t(locale, 'pokedexMegaStoneLink')}</small>
                  </span>
                </button>
              )}
              {isHisuiTab && formTab !== 'base' && (
                <p className="pokedex-card__zones">
                  {t(
                    locale,
                    isExclusiveHisui ? 'pokedexHisuiExclusiveNote' : 'pokedexHisuiNote',
                  )}
                </p>
              )}
              <button
                type="button"
                className={caught ? 'catch-btn is-on' : 'catch-btn'}
                onClick={onToggleCaught}
                aria-pressed={caught}
                tabIndex={expanded ? 0 : -1}
              >
                {caught ? t(locale, 'caught') : t(locale, 'notCaught')}
              </button>
            </div>
          </div>

          {loading && <p className="poke-detail__status">{t(locale, 'pokeLoading')}</p>}
          {error && <p className="poke-detail__status">{t(locale, 'pokeLoadError')}</p>}
          {details && !loading && <PokemonFacts locale={locale} details={details} />}
          {variant === 'la' && evolutions.length > 0 && (
            <div className="poke-moves">
              <h4>{t(locale, 'laEvolutionsTitle')}</h4>
              <ul className="poke-moves__list">
                {evolutions.map((evo) => (
                  <li key={evo.id}>
                    <span className="poke-moves__name">
                      {evo.fromName[locale]} → {evo.toName[locale]}
                    </span>
                    <span className="poke-moves__tag">{evo.method[locale]}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {variant === 'la' && researchTasks.length > 0 && onToggleResearch && (
            <div className="la-research">
              <div className="la-research__head">
                {t(locale, 'laResearchFor').replace('{name}', displayName)}
              </div>
              <p className="la-research__level">
                {t(locale, 'laResearchLevel')}: {researchLevel}
              </p>
              <ul className="la-research__rows">
                {researchTasks.map((task) => (
                  <ResearchTaskRow
                    key={task.id}
                    locale={locale}
                    task={task}
                    researchDone={researchDone}
                    onToggleResearch={onToggleResearch}
                  />
                ))}
              </ul>
            </div>
          )}
          </div>
        </div>
      )}
    </article>
  )
}

function ResearchTaskRow({
  locale,
  task,
  researchDone,
  onToggleResearch,
}: {
  locale: Locale
  task: LaResearchTask
  researchDone: Record<string, boolean>
  onToggleResearch: (taskId: string) => void
}) {
  const { highest } = researchTaskProgress(task, researchDone)

  return (
    <li className="la-research__row">
      <span
        className={
          task.double ? 'la-research__priority is-double' : 'la-research__priority'
        }
        aria-hidden
        title={task.double ? '×2' : undefined}
      >
        {task.double ? '⇈' : ''}
      </span>
      <span className="la-research__label">{task.description[locale]}</span>
      <span className="la-research__count" title={t(locale, 'laResearchProgress')}>
        {highest}
      </span>
      <div className="la-research__milestones" role="group">
        {task.milestones.map((m) => {
          const key = researchMilestoneKey(task.id, m)
          const done = Boolean(researchDone[key])
          return (
            <button
              key={key}
              type="button"
              className={done ? 'la-research__stage is-done' : 'la-research__stage'}
              aria-pressed={done}
              onClick={() => onToggleResearch(key)}
            >
              {done ? <span className="la-research__check">✓</span> : null}
              <span>{m}</span>
            </button>
          )
        })}
      </div>
    </li>
  )
}
