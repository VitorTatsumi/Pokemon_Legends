import { GAME_IDS, GAMES, type GameId } from '../data/games'
import { HISUI_REGIONS, type HisuiRegionId } from '../data/hisuiRegions'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import './Sidebar.css'

export type ToolId =
  | 'pokedex'
  | 'map'
  | 'missions'
  | 'screws'
  | 'locations'
  | 'centers'
  | 'markets'
  | 'cafes'
  | 'style'
  | 'restaurants'
  | 'crafts'
  | 'mable'
  | 'legendaries-lza'
  | 'donuts'
  | 'recipes'
  | 'field-guide'
  | 'wisps'
  | 'unowns'
  | 'alphas'
  | 'outbreaks'
  | 'camps'
  | 'distortions'
  | 'legendaries'
  | 'solitude'
  | 'team'

type Props = {
  locale: Locale
  game: GameId
  onGameChange: (game: GameId) => void
  activeTool: ToolId
  onToolChange: (tool: ToolId) => void
  hisuiRegionId: HisuiRegionId | null
  hisuiSubnavOpen: boolean
  onHisuiMapOverview: () => void
  onHisuiSelectRegion: (id: HisuiRegionId) => void
  onChangeLanguage: () => void
}

export function Sidebar({
  locale,
  game,
  onGameChange,
  activeTool,
  onToolChange,
  hisuiRegionId,
  hisuiSubnavOpen,
  onHisuiMapOverview,
  onHisuiSelectRegion,
  onChangeLanguage,
}: Props) {
  const meta = GAMES[game]

  return (
    <aside className={`sidebar sidebar--${game}`}>
      <div className="sidebar__brand">
        {game === 'la' ? (
          <img
            className="sidebar__logo sidebar__logo--la sidebar__logo--image"
            src="/la-logo.png"
            alt={t(locale, meta.titleKey)}
            width={54}
            height={40}
          />
        ) : (
          <img
            className="sidebar__logo sidebar__logo--lza sidebar__logo--image"
            src="/lza-logo.png"
            alt={t(locale, meta.titleKey)}
            width={54}
            height={40}
          />
        )}
        <div>
          <strong>{t(locale, meta.titleKey)}</strong>
          <p>{t(locale, meta.subtitleKey)}</p>
        </div>
      </div>

      <div
        className="sidebar__game-tabs"
        role="tablist"
        aria-label={t(locale, 'switchGame')}
      >
        {GAME_IDS.map((id) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={game === id}
            className={[
              'sidebar__game-tab',
              `sidebar__game-tab--${id}`,
              game === id ? 'is-active' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => onGameChange(id)}
          >
            {id === 'la' ? (
              <img
                className="sidebar__game-tab-logo"
                src="/la-logo.png"
                alt=""
                width={22}
                height={16}
              />
            ) : (
              <img
                className="sidebar__game-tab-logo"
                src="/lza-logo.png"
                alt=""
                width={22}
                height={16}
              />
            )}
            {GAMES[id].short}
          </button>
        ))}
      </div>

      {game === 'lza' ? (
        <>
          <p className="sidebar__section">{t(locale, 'tools')}</p>
          <nav className="sidebar__nav">
            <button
              type="button"
              className={activeTool === 'pokedex' ? 'is-active' : undefined}
              onClick={() => onToolChange('pokedex')}
            >
              {t(locale, 'toolPokedex')}
            </button>
            <button
              type="button"
              className={activeTool === 'team' ? 'is-active' : undefined}
              onClick={() => onToolChange('team')}
            >
              {t(locale, 'toolTeam')}
            </button>
            <button
              type="button"
              className={activeTool === 'map' ? 'is-active' : undefined}
              onClick={() => onToolChange('map')}
            >
              {t(locale, 'toolMap')}
            </button>
            <button
              type="button"
              className={
                activeTool === 'locations' ||
                activeTool === 'centers' ||
                activeTool === 'markets' ||
                activeTool === 'cafes' ||
                activeTool === 'style' ||
                activeTool === 'restaurants'
                  ? 'is-active'
                  : undefined
              }
              onClick={() => onToolChange('locations')}
            >
              {t(locale, 'toolLocations')}
            </button>
            <button
              type="button"
              className={activeTool === 'missions' ? 'is-active' : undefined}
              onClick={() => onToolChange('missions')}
            >
              {t(locale, 'toolMissions')}
            </button>
            <button
              type="button"
              className={activeTool === 'crafts' ? 'is-active' : undefined}
              onClick={() => onToolChange('crafts')}
            >
              {t(locale, 'toolCrafts')}
            </button>
            <button
              type="button"
              className={activeTool === 'mable' ? 'is-active' : undefined}
              onClick={() => onToolChange('mable')}
            >
              {t(locale, 'toolMable')}
            </button>
            <button
              type="button"
              className={activeTool === 'legendaries-lza' ? 'is-active' : undefined}
              onClick={() => onToolChange('legendaries-lza')}
            >
              {t(locale, 'toolLzaLegendaries')}
            </button>
            <button
              type="button"
              className={activeTool === 'donuts' ? 'is-active' : undefined}
              onClick={() => onToolChange('donuts')}
            >
              {t(locale, 'toolDonuts')}
            </button>
            <button
              type="button"
              className={activeTool === 'screws' ? 'is-active' : undefined}
              onClick={() => onToolChange('screws')}
            >
              {t(locale, 'toolScrews')}
            </button>
          </nav>
        </>
      ) : (
        <>
          <p className="sidebar__section">{t(locale, 'tools')}</p>
          <nav className="sidebar__nav">
            <button
              type="button"
              className={activeTool === 'pokedex' ? 'is-active' : undefined}
              onClick={() => onToolChange('pokedex')}
            >
              {t(locale, 'toolPokedex')}
            </button>
            <button
              type="button"
              className={activeTool === 'team' ? 'is-active' : undefined}
              onClick={() => onToolChange('team')}
            >
              {t(locale, 'toolTeam')}
            </button>
            <button
              type="button"
              className={activeTool === 'map' && hisuiRegionId == null
                  ? 'is-active'
                  : activeTool === 'map' && hisuiSubnavOpen
                    ? 'is-expanded'
                    : undefined}
              onClick={onHisuiMapOverview}
              aria-expanded={hisuiSubnavOpen}
            >
              {t(locale, 'toolHisuiMap')}
            </button>
            {activeTool === 'map' && (
              <div
                className={['sidebar__subnav', hisuiSubnavOpen ? 'is-open' : '']
                  .filter(Boolean)
                  .join(' ')}
                role="group"
                aria-label={t(locale, 'hisuiRegions')}
                aria-hidden={!hisuiSubnavOpen}
              >
                <div className="sidebar__subnav-inner">
                  {HISUI_REGIONS.map((region) => (
                    <button
                      key={region.id}
                      type="button"
                      tabIndex={hisuiSubnavOpen ? 0 : -1}
                      className={hisuiRegionId === region.id ? 'is-active' : undefined}
                      onClick={() => onHisuiSelectRegion(region.id)}
                    >
                      {region.name[locale]}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <button
              type="button"
              className={activeTool === 'missions' ? 'is-active' : undefined}
              onClick={() => onToolChange('missions')}
            >
              {t(locale, 'toolMissions')}
            </button>
            <button
              type="button"
              className={
                activeTool === 'locations' ||
                activeTool === 'markets' ||
                activeTool === 'style'
                  ? 'is-active'
                  : undefined
              }
              onClick={() => onToolChange('locations')}
            >
              {t(locale, 'toolLocations')}
            </button>
            <button
              type="button"
              className={
                activeTool === 'crafts' || activeTool === 'recipes'
                  ? 'is-active'
                  : undefined
              }
              onClick={() => onToolChange('crafts')}
            >
              {t(locale, 'toolCrafts')}
            </button>
            <button
              type="button"
              className={
                activeTool === 'field-guide' ||
                activeTool === 'wisps' ||
                activeTool === 'unowns' ||
                activeTool === 'alphas' ||
                activeTool === 'outbreaks' ||
                activeTool === 'camps'
                  ? 'is-active'
                  : undefined
              }
              onClick={() => onToolChange('field-guide')}
            >
              {t(locale, 'toolFieldGuide')}
            </button>
            <button
              type="button"
              className={activeTool === 'legendaries' ? 'is-active' : undefined}
              onClick={() => onToolChange('legendaries')}
            >
              {t(locale, 'toolLegendaries')}
            </button>
            <button
              type="button"
              className={activeTool === 'solitude' ? 'is-active' : undefined}
              onClick={() => onToolChange('solitude')}
            >
              {t(locale, 'toolSolitude')}
            </button>
          </nav>
        </>
      )}

      <button type="button" className="sidebar__lang" onClick={onChangeLanguage}>
        {t(locale, 'changeLanguage')}: {locale.toUpperCase()}
      </button>
    </aside>
  )
}
