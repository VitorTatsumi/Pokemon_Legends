import { useEffect, useMemo, useState } from 'react'
import { HisuiMap } from './components/HisuiMap'
import { HisuiPanel } from './components/HisuiPanel'
import { LanguageGate } from './components/LanguageGate'
import { LumioseMap } from './components/LumioseMap'
import { LaMissionMap } from './components/LaMissionMap'
import { LaMissionPanel } from './components/LaMissionPanel'
import { LaMarketMap } from './components/LaMarketMap'
import { LaMarketPanel } from './components/LaMarketPanel'
import { LaExtraTools } from './components/LaExtraTools'
import { LaStyleMap } from './components/LaStyleMap'
import { LaStylePanel } from './components/LaStylePanel'
import { MissionMap } from './components/MissionMap'
import { MissionPanel } from './components/MissionPanel'
import { ScrewMap } from './components/ScrewMap'
import { ScrewPanel } from './components/ScrewPanel'
import { PokedexPanel } from './components/PokedexPanel'
import { Sidebar, type ToolId } from './components/Sidebar'
import { ZonePanel } from './components/ZonePanel'
import { LzaItemsView } from './components/LzaItemsPanel'
import { LzaMableView } from './components/LzaMablePanel'
import { LzaLegendariesView } from './components/LzaLegendariesPanel'
import { LzaDonutsView } from './components/DonutPanel'
import {
  LocationsView,
  type LocationCategory,
} from './components/LocationsView'
import { GAMES } from './data/games'
import type { HisuiRegionId } from './data/hisuiRegions'
import { getHisuiRegion } from './data/hisuiRegions'
import type { ScrewDistrict } from './data/colorfulScrews'
import { COLORFUL_SCREWS } from './data/colorfulScrews'
import type { MissionKind } from './data/missions'
import { MISSIONS } from './data/missions'
import type { LaMissionKind } from './data/laMissions'
import { LA_MISSIONS } from './data/laMissions'
import type { CenterDistrict } from './data/pokemonCenters'
import { POKEMON_CENTERS } from './data/pokemonCenters'
import type { StyleKind } from './data/styleSpots'
import { STYLE_SPOTS } from './data/styleSpots'
import { LA_STYLE_SPOTS } from './data/laStyleSpots'
import { WILD_ZONES } from './data/wildZones'
import {
  catchKey,
  useCaughtProgress,
  useGame,
  useLocale,
  useMissionProgress,
  useLaMissionProgress,
  usePokedexProgress,
  useLaSpawnProgress,
  useScrewProgress,
  useLaResearchProgress,
  useLaWispProgress,
  useLaUnownProgress,
  useLaAlphaProgress,
  useLaCampProgress,
  useLaSolitudeProgress,
  useLaLegendaryProgress,
  useDonutRecipes,
} from './hooks/useStorage'
import type { Locale } from './i18n'
import { t } from './i18n'
import './App.css'

function firstMissionId(kind: MissionKind) {
  return MISSIONS.find((m) => m.kind === kind)?.id ?? null
}

function firstLaMissionId(kind: LaMissionKind) {
  return LA_MISSIONS.find((m) => m.kind === kind)?.id ?? null
}

function App() {
  const { locale, setLocale, onboarded } = useLocale()
  const { game, setGame } = useGame()
  const { toggle, reset, isCaught } = useCaughtProgress()
  const {
    toggle: toggleLaSpawn,
    isCaught: isLaSpawnCaught,
  } = useLaSpawnProgress()
  const {
    toggle: toggleDex,
    reset: resetDex,
    isCaught: isDexCaught,
  } = usePokedexProgress('lza')
  const {
    toggle: toggleLaDex,
    reset: resetLaDex,
    isCaught: isLaDexCaught,
  } = usePokedexProgress('la')
  const {
    collected: screwsCollected,
    toggle: toggleScrew,
    reset: resetScrews,
  } = useScrewProgress()
  const {
    completed: missionsCompleted,
    toggle: toggleMission,
  } = useMissionProgress()
  const {
    completed: laMissionsCompleted,
    toggle: toggleLaMission,
  } = useLaMissionProgress()
  const { caught: laResearchDone, toggle: toggleLaResearch } = useLaResearchProgress()
  const { completed: wispDone, toggle: toggleWisp } = useLaWispProgress()
  const { completed: unownDone, toggle: toggleUnown } = useLaUnownProgress()
  const { completed: alphaDone, toggle: toggleAlpha } = useLaAlphaProgress()
  const { completed: campDone, toggle: toggleCamp } = useLaCampProgress()
  const { completed: solitudeDone, toggle: toggleSolitude } = useLaSolitudeProgress()
  const { completed: legendaryDone, toggle: toggleLegendary } = useLaLegendaryProgress()
  const {
    recipes: donutRecipes,
    save: saveDonutRecipe,
    remove: removeDonutRecipe,
    rename: renameDonutRecipe,
  } = useDonutRecipes()
  const [tool, setTool] = useState<ToolId>('pokedex')
  /** Bumped when opening a region-guide tool so the overview map remounts. */
  const [regionGuideEpoch, setRegionGuideEpoch] = useState(0)
  const [regionGuideFocusId, setRegionGuideFocusId] = useState<string | null>(null)
  const [craftsItemId, setCraftsItemId] = useState<string | null>(null)
  const [selectedId, setSelectedId] = useState<number | null>(1)
  const [missionKind, setMissionKind] = useState<MissionKind>('main')
  const [selectedMissionId, setSelectedMissionId] = useState<string | null>(() =>
    firstMissionId('main'),
  )
  const [hideCompletedMissions, setHideCompletedMissions] = useState(false)
  const [laMissionKind, setLaMissionKind] = useState<LaMissionKind>('main')
  const [selectedLaMissionId, setSelectedLaMissionId] = useState<string | null>(() =>
    firstLaMissionId('main'),
  )
  const [hideCompletedLaMissions, setHideCompletedLaMissions] = useState(false)
  const [selectedScrewId, setSelectedScrewId] = useState<number | null>(1)
  const [screwDistrict, setScrewDistrict] = useState<ScrewDistrict | 'all'>('all')
  const [hideCollectedScrews, setHideCollectedScrews] = useState(false)
  const [selectedCenterId, setSelectedCenterId] = useState<number | null>(1)
  const [centerDistrict, setCenterDistrict] = useState<CenterDistrict | 'all'>('all')
  const [selectedMarketId, setSelectedMarketId] = useState<number | null>(1)
  const [selectedLaMarketId, setSelectedLaMarketId] = useState<number | null>(1)
  const [selectedCafeId, setSelectedCafeId] = useState<number | null>(1)
  const [selectedStyleId, setSelectedStyleId] = useState<number | null>(1)
  const [styleKind, setStyleKind] = useState<StyleKind | 'all'>('all')
  const [selectedLaStyleId, setSelectedLaStyleId] = useState<number | null>(1)
  const [laStyleKind, setLaStyleKind] = useState<StyleKind | 'all'>('all')
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<number | null>(1)
  const [locationCategory, setLocationCategory] = useState<LocationCategory>('centers')
  const [pickingLang, setPickingLang] = useState(false)
  const [hisuiRegionId, setHisuiRegionId] = useState<HisuiRegionId | null>(null)
  const [hisuiSubregionId, setHisuiSubregionId] = useState<string | null>(null)
  const [hisuiDetailRegionId, setHisuiDetailRegionId] = useState<HisuiRegionId | null>(
    null,
  )
  const [hisuiSubnavOpen, setHisuiSubnavOpen] = useState(false)
  const [missionRegionId, setMissionRegionId] = useState<HisuiRegionId | null>(null)
  const [missionDetailRegionId, setMissionDetailRegionId] = useState<HisuiRegionId | null>(
    null,
  )

  useEffect(() => {
    document.title = 'Legends Guide Master'
  }, [])

  useEffect(() => {
    setTool('pokedex')
    setHisuiRegionId(null)
    setHisuiSubregionId(null)
    setHisuiDetailRegionId(null)
    setHisuiSubnavOpen(false)
    setMissionRegionId(null)
    setMissionDetailRegionId(null)
  }, [game])

  function handleOpenMegaStone(itemId: string) {
    setCraftsItemId(itemId)
    setTool('crafts')
  }

  function handleToolChange(next: ToolId) {
    if (next !== 'crafts') setCraftsItemId(null)
    if (
      next === 'centers' ||
      next === 'markets' ||
      next === 'cafes' ||
      next === 'style' ||
      next === 'restaurants'
    ) {
      if (game === 'lza') {
        setLocationCategory(next)
        setTool('locations')
        setRegionGuideFocusId(null)
        setHisuiSubnavOpen(false)
        return
      }
    }
    setTool(next)
    setRegionGuideFocusId(null)
    if (next !== 'map') setHisuiSubnavOpen(false)
    if (
      next === 'wisps' ||
      next === 'unowns' ||
      next === 'alphas' ||
      next === 'outbreaks' ||
      next === 'camps' ||
      next === 'legendaries'
    ) {
      setRegionGuideEpoch((n) => n + 1)
    }
  }

  function handleHisuiRegionSelect(id: HisuiRegionId) {
    setHisuiRegionId(id)
    setHisuiSubregionId(null)
    setHisuiSubnavOpen(true)
    if (hisuiDetailRegionId != null && hisuiDetailRegionId !== id) {
      setHisuiDetailRegionId(null)
    }
  }

  function handleHisuiClear() {
    setHisuiRegionId(null)
    setHisuiSubregionId(null)
    setHisuiDetailRegionId(null)
  }

  function handleHisuiOpenDetail(id: HisuiRegionId) {
    setTool('map')
    setHisuiSubnavOpen(true)
    setHisuiRegionId(id)
    setHisuiSubregionId(null)
    setHisuiDetailRegionId(id)
  }

  function handleHisuiSidebarRegion(id: HisuiRegionId) {
    setTool('map')
    setHisuiSubnavOpen(true)
    setHisuiRegionId(id)
    setHisuiSubregionId(null)
    if (hisuiDetailRegionId != null && hisuiDetailRegionId !== id) {
      setHisuiDetailRegionId(null)
    }
  }

  function handleHisuiMapOverview() {
    setTool('map')
    if (hisuiSubnavOpen) {
      setHisuiSubnavOpen(false)
    } else {
      setHisuiSubnavOpen(true)
    }
    setHisuiRegionId(null)
    setHisuiSubregionId(null)
    setHisuiDetailRegionId(null)
  }

  function handleHisuiCloseDetail() {
    setHisuiDetailRegionId(null)
  }

  function handleHisuiSelectSubregion(id: string) {
    setHisuiSubregionId(id)
    const regionId = hisuiRegionId ?? hisuiDetailRegionId
    if (!regionId) return
    const region = getHisuiRegion(regionId)
    if (region?.detailMapSrc) {
      setHisuiRegionId(regionId)
      setHisuiDetailRegionId(regionId)
    }
  }

  function handleMissionRegionClick(id: HisuiRegionId) {
    setMissionRegionId(id)
    setSelectedLaMissionId(null)
    if (missionDetailRegionId != null && missionDetailRegionId !== id) {
      setMissionDetailRegionId(null)
    }
  }

  function handleMissionOpenDetail(id: HisuiRegionId) {
    setMissionRegionId(id)
    setSelectedLaMissionId(null)
    setMissionDetailRegionId(id)
  }

  function handleMissionClearRegion() {
    setMissionRegionId(null)
    setMissionDetailRegionId(null)
    setSelectedLaMissionId(null)
  }

  function handleMissionCloseDetail() {
    setMissionDetailRegionId(null)
  }

  const progressByZone = useMemo(() => {
    const map: Record<number, { caught: number; total: number }> = {}
    for (const zone of WILD_ZONES) {
      const entries = [
        ...zone.pokemon.map((p) => catchKey(zone.id, p.id)),
        ...zone.alphas.map((a) => catchKey(zone.id, a.id)),
      ]
      map[zone.id] = {
        total: entries.length,
        caught: entries.filter((k) => isCaught(k)).length,
      }
    }
    return map
  }, [isCaught])

  function handleMissionKindChange(kind: MissionKind) {
    setMissionKind(kind)
    const current = MISSIONS.find((m) => m.id === selectedMissionId)
    if (!current || current.kind !== kind) {
      setSelectedMissionId(firstMissionId(kind))
    }
  }

  function handleHideCompletedMissionsChange(hide: boolean) {
    setHideCompletedMissions(hide)
    if (hide && selectedMissionId != null && missionsCompleted[selectedMissionId]) {
      setSelectedMissionId(null)
    }
  }

  function handleToggleMission(id: string) {
    toggleMission(id)
    if (hideCompletedMissions && !missionsCompleted[id] && selectedMissionId === id) {
      setSelectedMissionId(null)
    }
  }

  function handleLaMissionKindChange(kind: LaMissionKind) {
    setLaMissionKind(kind)
    const current = LA_MISSIONS.find((m) => m.id === selectedLaMissionId)
    if (!current || current.kind !== kind || current.regionId !== missionRegionId) {
      const next = LA_MISSIONS.find(
        (m) => m.kind === kind && (missionRegionId == null || m.regionId === missionRegionId),
      )
      setSelectedLaMissionId(next?.id ?? null)
    }
  }

  function handleHideCompletedLaMissionsChange(hide: boolean) {
    setHideCompletedLaMissions(hide)
    if (hide && selectedLaMissionId != null && laMissionsCompleted[selectedLaMissionId]) {
      setSelectedLaMissionId(null)
    }
  }

  function handleToggleLaMission(id: string) {
    toggleLaMission(id)
    if (hideCompletedLaMissions && !laMissionsCompleted[id] && selectedLaMissionId === id) {
      setSelectedLaMissionId(null)
    }
  }

  function handleSelectLaMission(id: string) {
    setSelectedLaMissionId(id)
    const mission = LA_MISSIONS.find((m) => m.id === id)
    if (!mission) return
    setMissionRegionId(mission.regionId)
    const region = getHisuiRegion(mission.regionId)
    if (region?.detailMapSrc) setMissionDetailRegionId(mission.regionId)
  }

  function handleOpenHisuiLocation(regionId: HisuiRegionId, subregionId: string) {
    setTool('map')
    setHisuiSubnavOpen(true)
    setHisuiRegionId(regionId)
    setHisuiSubregionId(subregionId)
    const region = getHisuiRegion(regionId)
    setHisuiDetailRegionId(region?.detailMapSrc ? regionId : null)
  }

  function handleOpenOutbreak(outbreakId: string) {
    setRegionGuideFocusId(outbreakId)
    setRegionGuideEpoch((n) => n + 1)
    setTool('outbreaks')
  }

  function handleScrewDistrictChange(district: ScrewDistrict | 'all') {
    setScrewDistrict(district)
    if (district === 'all') return
    const current = COLORFUL_SCREWS.find((s) => s.id === selectedScrewId)
    if (!current || current.districtKey !== district) {
      setSelectedScrewId(COLORFUL_SCREWS.find((s) => s.districtKey === district)?.id ?? null)
    }
  }

  function handleHideCollectedScrewsChange(hide: boolean) {
    setHideCollectedScrews(hide)
    if (hide && selectedScrewId != null && screwsCollected[selectedScrewId]) {
      setSelectedScrewId(null)
    }
  }

  function handleToggleScrew(id: number) {
    toggleScrew(id)
    if (hideCollectedScrews && !screwsCollected[id] && selectedScrewId === id) {
      setSelectedScrewId(null)
    }
  }

  function handleCenterDistrictChange(district: CenterDistrict | 'all') {
    setCenterDistrict(district)
    if (district === 'all') return
    const current = POKEMON_CENTERS.find((c) => c.id === selectedCenterId)
    if (!current || current.districtKey !== district) {
      setSelectedCenterId(POKEMON_CENTERS.find((c) => c.districtKey === district)?.id ?? null)
    }
  }

  function handleStyleKindChange(next: StyleKind | 'all') {
    setStyleKind(next)
    if (next === 'all') return
    const current = STYLE_SPOTS.find((s) => s.id === selectedStyleId)
    if (!current || current.kind !== next) {
      setSelectedStyleId(STYLE_SPOTS.find((s) => s.kind === next)?.id ?? null)
    }
  }

  function handleLaStyleKindChange(next: StyleKind | 'all') {
    setLaStyleKind(next)
    if (next === 'all') return
    const current = LA_STYLE_SPOTS.find((s) => s.id === selectedLaStyleId)
    if (!current || current.kind !== next) {
      setSelectedLaStyleId(LA_STYLE_SPOTS.find((s) => s.kind === next)?.id ?? null)
    }
  }

  if (!onboarded || !locale || pickingLang) {
    return (
      <LanguageGate
        onSelect={(next: Locale) => {
          setLocale(next)
          setPickingLang(false)
        }}
      />
    )
  }

  const selected = WILD_ZONES.find((z) => z.id === selectedId) ?? null

  return (
    <div className={`app-shell app-shell--${game}`}>
        <Sidebar
          locale={locale}
          game={game}
          onGameChange={setGame}
          activeTool={tool}
          onToolChange={handleToolChange}
          hisuiRegionId={hisuiRegionId}
          hisuiSubnavOpen={hisuiSubnavOpen}
          onHisuiMapOverview={handleHisuiMapOverview}
          onHisuiSelectRegion={handleHisuiSidebarRegion}
          onChangeLanguage={() => setPickingLang(true)}
        />
      <main className="app-main">
        {game === 'la' ? (
          <>
            {tool === 'pokedex' && (
              <PokedexPanel
                locale={locale}
                variant="la"
                isCaught={isLaDexCaught}
                onToggle={toggleLaDex}
                onReset={resetLaDex}
                researchDone={laResearchDone}
                onToggleResearch={toggleLaResearch}
                onOpenHisuiLocation={handleOpenHisuiLocation}
                onOpenOutbreak={handleOpenOutbreak}
              />
            )}
            {tool === 'map' && (
              <div className="map-layout">
                <HisuiMap
                  key={hisuiDetailRegionId ?? 'overview'}
                  locale={locale}
                  selectedRegionId={hisuiRegionId}
                  detailRegionId={hisuiDetailRegionId}
                  selectedSubregionId={hisuiSubregionId}
                  onSelectRegion={handleHisuiRegionSelect}
                  onSelectSubregion={handleHisuiSelectSubregion}
                  onOpenDetail={handleHisuiOpenDetail}
                  onClearRegion={handleHisuiClear}
                  onCloseDetail={handleHisuiCloseDetail}
                />
                <HisuiPanel
                  locale={locale}
                  selectedRegionId={hisuiRegionId}
                  selectedSubregionId={hisuiSubregionId}
                  onSelectSubregion={handleHisuiSelectSubregion}
                  onClearRegion={handleHisuiClear}
                  isCaught={isLaSpawnCaught}
                  onToggleCaught={toggleLaSpawn}
                />
              </div>
            )}
            {tool === 'missions' && (
              <div className="map-layout">
                <LaMissionMap
                  key={missionDetailRegionId ?? 'mission-overview'}
                  locale={locale}
                  selectedRegionId={missionRegionId}
                  detailRegionId={missionDetailRegionId}
                  kind={laMissionKind}
                  selectedId={selectedLaMissionId}
                  completed={laMissionsCompleted}
                  hideCompleted={hideCompletedLaMissions}
                  onSelectRegion={handleMissionRegionClick}
                  onOpenDetail={handleMissionOpenDetail}
                  onClearRegion={handleMissionClearRegion}
                  onCloseDetail={handleMissionCloseDetail}
                  onSelectMission={setSelectedLaMissionId}
                />
                <LaMissionPanel
                  key={`${laMissionKind}-${missionRegionId ?? 'none'}`}
                  locale={locale}
                  selectedRegionId={missionRegionId}
                  selectedId={selectedLaMissionId}
                  kind={laMissionKind}
                  completed={laMissionsCompleted}
                  hideCompleted={hideCompletedLaMissions}
                  onSelect={handleSelectLaMission}
                  onKindChange={handleLaMissionKindChange}
                  onHideCompletedChange={handleHideCompletedLaMissionsChange}
                  onToggle={handleToggleLaMission}
                  onClose={() => setSelectedLaMissionId(null)}
                  onClearRegion={handleMissionClearRegion}
                />
              </div>
            )}
            {tool === 'markets' && (
              <div className="map-layout">
                <LaMarketMap
                  locale={locale}
                  selectedId={selectedLaMarketId}
                  onSelect={setSelectedLaMarketId}
                />
                <LaMarketPanel
                  locale={locale}
                  selectedId={selectedLaMarketId}
                  onSelect={setSelectedLaMarketId}
                  onClose={() => setSelectedLaMarketId(null)}
                />
              </div>
            )}
            {tool === 'style' && (
              <div className="map-layout">
                <LaStyleMap
                  locale={locale}
                  selectedId={selectedLaStyleId}
                  kind={laStyleKind}
                  onSelect={setSelectedLaStyleId}
                />
                <LaStylePanel
                  locale={locale}
                  selectedId={selectedLaStyleId}
                  kind={laStyleKind}
                  onSelect={setSelectedLaStyleId}
                  onKindChange={handleLaStyleKindChange}
                  onClose={() => setSelectedLaStyleId(null)}
                />
              </div>
            )}
            <LaExtraTools
              locale={locale}
              tool={tool}
              regionGuideEpoch={regionGuideEpoch}
              regionGuideFocusId={regionGuideFocusId}
              onOpenHisuiLocation={handleOpenHisuiLocation}
              wispDone={wispDone}
              onToggleWisp={toggleWisp}
              unownDone={unownDone}
              onToggleUnown={toggleUnown}
              alphaDone={alphaDone}
              onToggleAlpha={toggleAlpha}
              campDone={campDone}
              onToggleCamp={toggleCamp}
              legendaryDone={legendaryDone}
              onToggleLegendary={toggleLegendary}
              solitudeDone={solitudeDone}
              onToggleSolitude={toggleSolitude}
            />
          </>
        ) : (
          <>
        {tool === 'pokedex' && (
          <PokedexPanel
            locale={locale}
            variant="lza"
            isCaught={isDexCaught}
            onToggle={toggleDex}
            onReset={resetDex}
            onOpenMegaStone={handleOpenMegaStone}
          />
        )}
        {tool === 'map' && (
          <div className="map-layout">
            <LumioseMap
              locale={locale}
              selectedId={selectedId}
              onSelect={setSelectedId}
              progressByZone={progressByZone}
            />
            <ZonePanel
              locale={locale}
              zone={selected}
              isCaught={isCaught}
              onToggle={toggle}
              onReset={reset}
              onClose={() => setSelectedId(null)}
            />
          </div>
        )}
        {tool === 'missions' && (
          <div className="map-layout">
            <MissionMap
              locale={locale}
              selectedId={selectedMissionId}
              kind={missionKind}
              completed={missionsCompleted}
              hideCompleted={hideCompletedMissions}
              onSelect={setSelectedMissionId}
            />
            <MissionPanel
              key={missionKind}
              locale={locale}
              selectedId={selectedMissionId}
              kind={missionKind}
              completed={missionsCompleted}
              hideCompleted={hideCompletedMissions}
              onSelect={setSelectedMissionId}
              onKindChange={handleMissionKindChange}
              onHideCompletedChange={handleHideCompletedMissionsChange}
              onToggle={handleToggleMission}
              onClose={() => setSelectedMissionId(null)}
            />
          </div>
        )}
        {tool === 'crafts' && (
          <LzaItemsView locale={locale} initialSelectedId={craftsItemId} />
        )}
        {tool === 'mable' && <LzaMableView locale={locale} />}
        {tool === 'legendaries-lza' && <LzaLegendariesView locale={locale} />}
        {tool === 'donuts' && (
          <LzaDonutsView
            locale={locale}
            recipes={donutRecipes}
            onSave={saveDonutRecipe}
            onDelete={removeDonutRecipe}
            onRename={renameDonutRecipe}
          />
        )}
        {tool === 'screws' && (
          <div className="map-layout">
            <ScrewMap
              locale={locale}
              selectedId={selectedScrewId}
              district={screwDistrict}
              hideCollected={hideCollectedScrews}
              collected={screwsCollected}
              onSelect={setSelectedScrewId}
            />
            <ScrewPanel
              locale={locale}
              selectedId={selectedScrewId}
              district={screwDistrict}
              hideCollected={hideCollectedScrews}
              collected={screwsCollected}
              onSelect={setSelectedScrewId}
              onDistrictChange={handleScrewDistrictChange}
              onHideCollectedChange={handleHideCollectedScrewsChange}
              onToggle={handleToggleScrew}
              onReset={resetScrews}
              onClose={() => setSelectedScrewId(null)}
            />
          </div>
        )}
        {tool === 'locations' && (
          <LocationsView
            locale={locale}
            category={locationCategory}
            onCategoryChange={setLocationCategory}
            selectedCenterId={selectedCenterId}
            centerDistrict={centerDistrict}
            onSelectCenter={setSelectedCenterId}
            onCloseCenter={() => setSelectedCenterId(null)}
            onCenterDistrictChange={handleCenterDistrictChange}
            selectedMarketId={selectedMarketId}
            onSelectMarket={setSelectedMarketId}
            onCloseMarket={() => setSelectedMarketId(null)}
            selectedCafeId={selectedCafeId}
            onSelectCafe={setSelectedCafeId}
            onCloseCafe={() => setSelectedCafeId(null)}
            selectedStyleId={selectedStyleId}
            styleKind={styleKind}
            onSelectStyle={setSelectedStyleId}
            onCloseStyle={() => setSelectedStyleId(null)}
            onStyleKindChange={handleStyleKindChange}
            selectedRestaurantId={selectedRestaurantId}
            onSelectRestaurant={setSelectedRestaurantId}
            onCloseRestaurant={() => setSelectedRestaurantId(null)}
          />
        )}
          </>
        )}
      </main>
    </div>
  )
}

export default App
