import { useMemo, useState } from 'react'
import { LA_ALPHAS } from '../data/laAlphas'
import { LA_CAMPS } from '../data/laCamps'
import { LA_LEGENDARIES } from '../data/laLegendaries'
import { LA_OUTBREAKS } from '../data/laOutbreaks'
import { LA_SOLITUDE } from '../data/laSolitude'
import { LA_UNOWNS } from '../data/laUnowns'
import { LA_WISPS } from '../data/laWisps'
import type { HisuiRegionId } from '../data/hisuiRegions'
import { getHisuiRegion } from '../data/hisuiRegions'
import type { LaRegionPin } from '../data/laRegionPins'
import { resolveSubregionId } from '../data/laSubregionAliases'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import { LaCraftBrowser, LaCraftPanel, LaRecipesBrowser, LaRecipesPanel, type CraftTab } from './LaCraftPanel'
import { LaPinPanel } from './LaPinPanel'
import { LaRegionCollectibleMap } from './LaRegionCollectibleMap'
import { LaRegionCollectiblePanel } from './LaRegionCollectiblePanel'
import type { ToolId } from './Sidebar'

type Progress = Record<string, boolean>

type RegionGuideTool =
  | 'wisps'
  | 'unowns'
  | 'alphas'
  | 'camps'
  | 'legendaries'
  | 'outbreaks'

type Props = {
  locale: Locale
  tool: ToolId
  /** Changes when the sidebar region-guide item is clicked — resets to overview map. */
  regionGuideEpoch?: number
  /** Optional pin to open when mounting a region guide (e.g. outbreak from Pokédex). */
  regionGuideFocusId?: string | null
  onOpenHisuiLocation: (regionId: HisuiRegionId, subregionId: string) => void
  wispDone: Progress
  onToggleWisp: (id: string) => void
  unownDone: Progress
  onToggleUnown: (id: string) => void
  alphaDone: Progress
  onToggleAlpha: (id: string) => void
  campDone: Progress
  onToggleCamp: (id: string) => void
  legendaryDone: Progress
  onToggleLegendary: (id: string) => void
  solitudeDone: Progress
  onToggleSolitude: (id: string) => void
}

function pinBase(
  regionId: HisuiRegionId,
  subregionId: string,
): Pick<LaRegionPin, 'regionId' | 'subregionId'> {
  return {
    regionId,
    subregionId: resolveSubregionId(regionId, subregionId),
  }
}

export function LaExtraTools(props: Props) {
  const { locale, tool } = props
  if (tool === 'crafts') return <CraftsView {...props} />
  if (tool === 'recipes') return <RecipesView {...props} />
  if (tool === 'solitude') {
    return (
      <SolitudeView
        locale={locale}
        done={props.solitudeDone}
        onToggle={props.onToggleSolitude}
      />
    )
  }
  if (
    tool === 'wisps' ||
    tool === 'unowns' ||
    tool === 'alphas' ||
    tool === 'camps' ||
    tool === 'legendaries' ||
    tool === 'outbreaks'
  ) {
    return (
      <RegionGuideView
        key={`${tool}-${props.regionGuideEpoch ?? 0}`}
        {...props}
        tool={tool}
      />
    )
  }
  return null
}

function toWispPins(): LaRegionPin[] {
  return LA_WISPS.map((w) => ({
    id: w.id,
    name: w.name,
    description: w.description,
    note: w.note,
    ...pinBase(w.regionId, w.subregionId),
    map: w.map,
    detailMap: w.detailMap,
    markerLabel: w.name.en.replace(/\D/g, '') || '·',
  }))
}

function toUnownPins(): LaRegionPin[] {
  return LA_UNOWNS.map((u) => ({
    id: u.id,
    name: u.name,
    description: u.description,
    note: u.note,
    ...pinBase(u.regionId, u.subregionId),
    map: u.map,
    detailMap: u.detailMap,
    markerLabel: u.form,
  }))
}

function toAlphaPins(): LaRegionPin[] {
  return LA_ALPHAS.map((a) => ({
    id: a.id,
    name: a.name,
    description: a.description,
    ...pinBase(a.regionId, a.subregionId),
    map: a.map,
    detailMap: a.detailMap,
    markerLabel: 'α',
    facts: [
      {
        label: { en: 'Species', pt: 'Espécie' },
        value: { en: a.speciesName, pt: a.speciesName },
      },
    ],
  }))
}

function toCampPins(): LaRegionPin[] {
  return LA_CAMPS.map((c) => ({
    id: c.id,
    name: c.name,
    description: c.description,
    note: c.services,
    ...pinBase(c.regionId, c.subregionId),
    map: c.map,
    detailMap: c.detailMap,
    markerLabel: 'C',
  }))
}

/** Hisuian / special form sprite ids for nobles & legendaries. */
const LEGENDARY_SPRITE_IDS: Record<string, { primary: number; alt?: number }> = {
  kleavor: { primary: 900 },
  lilligant: { primary: 10237 },
  arcanine: { primary: 10230 },
  electrode: { primary: 10232 },
  avalugg: { primary: 10243 },
  'dialga-palkia': { primary: 483, alt: 484 },
  giratina: { primary: 10007 },
}

function toLegendaryPins(): LaRegionPin[] {
  return LA_LEGENDARIES.map((l) => {
    const region = getHisuiRegion(l.regionId)
    const sprites = LEGENDARY_SPRITE_IDS[l.id]
    return {
      id: l.id,
      name: l.name,
      description: l.mission,
      note: l.tips,
      ...pinBase(l.regionId, l.subregionId),
      map: l.map,
      detailMap: l.detailMap,
      markerLabel: l.kind === 'noble' ? 'N' : 'L',
      spriteId: sprites?.primary ?? l.dex,
      spriteIdAlt: sprites?.alt,
      locationImageSrc: l.encounterImageSrc ?? region?.detailMapSrc,
      facts: [
        {
          label: { en: 'Requirements', pt: 'Requisitos' },
          value: l.requirements,
        },
        ...(l.rewards
          ? [{ label: { en: 'Rewards', pt: 'Recompensas' }, value: l.rewards }]
          : []),
      ],
    }
  })
}

function toOutbreakPins(): LaRegionPin[] {
  return LA_OUTBREAKS.map((o) => ({
    id: o.id,
    name: o.speciesName,
    note: o.note,
    ...pinBase(o.regionId, o.subregionId),
    markerLabel: String(o.speciesDex).slice(-2),
    spriteId: o.speciesDex,
    facts: [
      {
        label: { en: 'Dex', pt: 'Dex' },
        value: { en: `#${o.speciesDex}`, pt: `#${o.speciesDex}` },
      },
    ],
  }))
}

function RegionGuideView({
  locale,
  tool,
  regionGuideFocusId = null,
  wispDone,
  onToggleWisp,
  unownDone,
  onToggleUnown,
  alphaDone,
  onToggleAlpha,
  campDone,
  onToggleCamp,
  legendaryDone,
  onToggleLegendary,
}: Props & { tool: RegionGuideTool }) {
  const focusPin = useMemo(() => {
    if (!regionGuideFocusId) return null
    const pins =
      tool === 'outbreaks'
        ? toOutbreakPins()
        : tool === 'wisps'
          ? toWispPins()
          : tool === 'unowns'
            ? toUnownPins()
            : tool === 'alphas'
              ? toAlphaPins()
              : tool === 'camps'
                ? toCampPins()
                : tool === 'legendaries'
                  ? toLegendaryPins()
                  : []
    return pins.find((p) => p.id === regionGuideFocusId) ?? null
  }, [regionGuideFocusId, tool])

  const [selectedRegionId, setSelectedRegionId] = useState<HisuiRegionId | null>(
    focusPin?.regionId ?? null,
  )
  const [detailRegionId, setDetailRegionId] = useState<HisuiRegionId | null>(
    focusPin?.regionId ?? null,
  )
  const [selectedSubregionId, setSelectedSubregionId] = useState<string | null>(
    focusPin?.subregionId ?? null,
  )
  const [selectedId, setSelectedId] = useState<string | null>(focusPin?.id ?? null)
  const [hideDone, setHideDone] = useState(false)

  const cfg = useMemo(() => {
    switch (tool) {
      case 'wisps':
        return {
          pins: toWispPins(),
          done: wispDone,
          toggle: onToggleWisp,
          trackProgress: true,
          title: t(locale, 'laWispsTitle'),
          hint: t(locale, 'laRegionGuideHint'),
          expandedHint: t(locale, 'laRegionGuideExpandedHint'),
          detailHint: t(locale, 'laRegionGuideDetailHint'),
          selectHint: t(locale, 'laRegionGuideSelectHint'),
          eyebrow: t(locale, 'toolWisps'),
          itemLabel: t(locale, 'toolWisps').toLowerCase(),
          marker: 'la-pin-marker la-pin-marker--wisp',
          markerIcon: '/pin-wisp.svg?v=2',
        }
      case 'unowns':
        return {
          pins: toUnownPins(),
          done: unownDone,
          toggle: onToggleUnown,
          trackProgress: true,
          title: t(locale, 'laUnownsTitle'),
          hint: t(locale, 'laRegionGuideHint'),
          expandedHint: t(locale, 'laRegionGuideExpandedHint'),
          detailHint: t(locale, 'laRegionGuideDetailHint'),
          selectHint: t(locale, 'laRegionGuideSelectHint'),
          eyebrow: t(locale, 'toolUnowns'),
          itemLabel: t(locale, 'toolUnowns').toLowerCase(),
          marker: 'la-pin-marker la-pin-marker--unown',
          markerIcon: '/pin-unown.svg',
        }
      case 'alphas':
        return {
          pins: toAlphaPins(),
          done: alphaDone,
          toggle: onToggleAlpha,
          trackProgress: true,
          title: t(locale, 'laAlphasTitle'),
          hint: t(locale, 'laRegionGuideHint'),
          expandedHint: t(locale, 'laRegionGuideExpandedHint'),
          detailHint: t(locale, 'laRegionGuideDetailHint'),
          selectHint: t(locale, 'laRegionGuideSelectHint'),
          eyebrow: t(locale, 'toolAlphas'),
          itemLabel: t(locale, 'toolAlphas').toLowerCase(),
          marker: 'la-pin-marker la-pin-marker--alpha',
          markerIcon: '/pin-alpha.svg?v=2',
        }
      case 'camps':
        return {
          pins: toCampPins(),
          done: campDone,
          toggle: onToggleCamp,
          trackProgress: true,
          title: t(locale, 'laCampsTitle'),
          hint: t(locale, 'laRegionGuideHint'),
          expandedHint: t(locale, 'laRegionGuideExpandedHint'),
          detailHint: t(locale, 'laRegionGuideDetailHint'),
          selectHint: t(locale, 'laRegionGuideSelectHint'),
          eyebrow: t(locale, 'toolCamps'),
          itemLabel: t(locale, 'toolCamps').toLowerCase(),
          marker: 'la-pin-marker la-pin-marker--camp',
          markerIcon: '/pin-camp.svg',
        }
      case 'legendaries':
        return {
          pins: toLegendaryPins(),
          done: legendaryDone,
          toggle: onToggleLegendary,
          trackProgress: true,
          title: t(locale, 'laLegendariesTitle'),
          hint: t(locale, 'laRegionGuideHint'),
          expandedHint: t(locale, 'laRegionGuideExpandedHint'),
          detailHint: t(locale, 'laRegionGuideDetailHint'),
          selectHint: t(locale, 'laRegionGuideSelectHint'),
          eyebrow: t(locale, 'toolLegendaries'),
          itemLabel: t(locale, 'toolLegendaries').toLowerCase(),
          marker: 'la-pin-marker la-pin-marker--legendary',
          markerIcon: '/pin-legendary.svg',
        }
      case 'outbreaks':
        return {
          pins: toOutbreakPins(),
          done: {},
          toggle: undefined,
          trackProgress: false,
          title: t(locale, 'laOutbreaksTitle'),
          hint: t(locale, 'laRegionGuideHint'),
          expandedHint: t(locale, 'laRegionGuideExpandedHint'),
          detailHint: t(locale, 'laRegionGuideDetailHint'),
          selectHint: t(locale, 'laRegionGuideSelectHint'),
          eyebrow: t(locale, 'toolOutbreaks'),
          itemLabel: t(locale, 'toolOutbreaks').toLowerCase(),
          marker: 'la-pin-marker la-pin-marker--outbreak',
          markerIcon: '/pin-outbreak.svg',
        }
    }
  }, [
    alphaDone,
    campDone,
    legendaryDone,
    locale,
    onToggleAlpha,
    onToggleCamp,
    onToggleLegendary,
    onToggleUnown,
    onToggleWisp,
    tool,
    unownDone,
    wispDone,
  ])

  function handleSelectRegion(id: HisuiRegionId) {
    setSelectedRegionId(id)
    setSelectedSubregionId(null)
    setSelectedId(null)
    if (detailRegionId != null && detailRegionId !== id) {
      setDetailRegionId(null)
    }
  }

  function handleOpenDetail(id: HisuiRegionId) {
    setSelectedRegionId(id)
    setDetailRegionId(id)
  }

  function handleSelectPin(id: string) {
    setSelectedId(id)
    const pin = cfg.pins.find((p) => p.id === id)
    if (!pin) return
    setSelectedRegionId(pin.regionId)
    setSelectedSubregionId(pin.subregionId)
    const region = getHisuiRegion(pin.regionId)
    if (region?.detailMapSrc) setDetailRegionId(pin.regionId)
  }

  function handleClearRegion() {
    setSelectedRegionId(null)
    setDetailRegionId(null)
    setSelectedSubregionId(null)
    setSelectedId(null)
  }

  function handleCloseDetail() {
    setDetailRegionId(null)
    setSelectedSubregionId(null)
    setSelectedId(null)
  }

  function handleSelectSubregion(id: string) {
    setSelectedSubregionId(id)
    setSelectedId(null)
    if (selectedRegionId) setDetailRegionId(selectedRegionId)
  }

  function handleHideDone(hide: boolean) {
    setHideDone(hide)
    if (hide && selectedId && cfg.done[selectedId]) {
      setSelectedId(null)
    }
  }

  return (
    <div className="map-layout">
      <LaRegionCollectibleMap
        key={`${tool}-${detailRegionId ?? 'overview'}`}
        locale={locale}
        title={cfg.title}
        hint={cfg.hint}
        expandedHint={cfg.expandedHint}
        detailHint={cfg.detailHint}
        itemLabel={cfg.itemLabel}
        pins={cfg.pins}
        markerClassName={cfg.marker}
        markerIconSrc={cfg.markerIcon}
        selectedRegionId={selectedRegionId}
        detailRegionId={detailRegionId}
        selectedSubregionId={selectedSubregionId}
        selectedId={selectedId}
        completed={cfg.done}
        hideDone={hideDone}
        onSelectRegion={handleSelectRegion}
        onOpenDetail={handleOpenDetail}
        onClearRegion={handleClearRegion}
        onCloseDetail={handleCloseDetail}
        onSelectSubregion={handleSelectSubregion}
        onSelectPin={handleSelectPin}
      />
      <LaRegionCollectiblePanel
        locale={locale}
        eyebrow={cfg.eyebrow}
        title={cfg.title}
        selectHint={cfg.selectHint}
        itemLabel={cfg.itemLabel}
        pins={cfg.pins}
        selectedRegionId={selectedRegionId}
        selectedSubregionId={selectedSubregionId}
        selectedId={selectedId}
        completed={cfg.done}
        hideDone={hideDone}
        trackProgress={cfg.trackProgress}
        onSelectRegion={handleSelectRegion}
        onSelectSubregion={handleSelectSubregion}
        onSelectPin={handleSelectPin}
        onClearRegion={handleClearRegion}
        onClosePin={() => setSelectedId(null)}
        onHideDoneChange={handleHideDone}
        onToggle={cfg.toggle}
        onOpenDetail={handleOpenDetail}
      />
    </div>
  )
}

function CraftsView({
  locale,
  onOpenHisuiLocation,
}: Pick<Props, 'locale' | 'onOpenHisuiLocation'>) {
  const [craftId, setCraftId] = useState<string | null>(null)
  const [tab, setTab] = useState<CraftTab>('items')

  const handleTabChange = (next: CraftTab) => {
    setTab(next)
    setCraftId(null)
  }

  return (
    <div className="map-layout map-layout--crafts">
      <LaCraftBrowser
        locale={locale}
        selectedId={craftId}
        tab={tab}
        onTabChange={handleTabChange}
        onSelect={setCraftId}
      />
      <LaCraftPanel
        locale={locale}
        selectedId={craftId}
        tab={tab}
        onClose={() => setCraftId(null)}
        onOpenLocation={onOpenHisuiLocation}
      />
    </div>
  )
}

function RecipesView({
  locale,
  onOpenHisuiLocation,
}: Pick<Props, 'locale' | 'onOpenHisuiLocation'>) {
  const [recipeId, setRecipeId] = useState<string | null>(null)

  return (
    <div className="map-layout map-layout--crafts">
      <LaRecipesBrowser
        locale={locale}
        selectedId={recipeId}
        onSelect={setRecipeId}
      />
      <LaRecipesPanel
        locale={locale}
        selectedId={recipeId}
        onClose={() => setRecipeId(null)}
        onOpenLocation={onOpenHisuiLocation}
      />
    </div>
  )
}

function SolitudeView({
  locale,
  done,
  onToggle,
}: {
  locale: Locale
  done: Progress
  onToggle: (id: string) => void
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [hideDone, setHideDone] = useState(false)
  return (
    <div className="map-layout">
      <div className="map-shell">
        <div className="map-toolbar">
          <div>
            <h2>{t(locale, 'laSolitudeTitle')}</h2>
            <p>{t(locale, 'laSolitudeHint')}</p>
          </div>
        </div>
        <div className="map-viewport" style={{ padding: '1.25rem', overflow: 'auto' }}>
          <ul className="mission-list">
            {LA_SOLITUDE.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  className={selectedId === s.id ? 'is-active' : undefined}
                  onClick={() => setSelectedId(s.id)}
                >
                  <span className="mission-list__name">
                    {s.name[locale]}
                    <small className="mission-list__sub">{s.rewards[locale]}</small>
                  </span>
                  {done[s.id] && <span className="mission-list__done">✓</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <LaPinPanel
        locale={locale}
        eyebrow={t(locale, 'toolSolitude')}
        title={t(locale, 'laSolitudeTitle')}
        hint={t(locale, 'laSolitudeHint')}
        items={LA_SOLITUDE.map((s) => ({
          id: s.id,
          title: s.name[locale],
          subtitle: s.opponent[locale],
          body: `${s.requirements[locale]} — ${s.rewards[locale]}`,
          regionId: 'jubilife',
          subregionId: 'training-grounds',
          done: Boolean(done[s.id]),
        }))}
        selectedId={selectedId}
        regionFilter="all"
        hideDone={hideDone}
        completedCount={LA_SOLITUDE.filter((s) => done[s.id]).length}
        totalCount={LA_SOLITUDE.length}
        onSelect={setSelectedId}
        onRegionFilter={() => undefined}
        onHideDoneChange={setHideDone}
        onToggle={onToggle}
        onClose={() => setSelectedId(null)}
        detailFields={(item) => {
          const s = LA_SOLITUDE.find((x) => x.id === item.id)
          if (!s) return []
          return [
            { label: t(locale, 'missionUnlock'), value: s.requirements[locale] },
            { label: t(locale, 'laMissionRewards'), value: s.rewards[locale] },
          ]
        }}
      />
    </div>
  )
}
