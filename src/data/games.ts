export type GameId = 'lza' | 'la'

export type GameMeta = {
  id: GameId
  short: string
  titleKey: 'gameLzaTitle' | 'gameLaTitle'
  subtitleKey: 'gameLzaSubtitle' | 'gameLaSubtitle'
}

export const GAMES: Record<GameId, GameMeta> = {
  lza: {
    id: 'lza',
    short: 'LZA',
    titleKey: 'gameLzaTitle',
    subtitleKey: 'gameLzaSubtitle',
  },
  la: {
    id: 'la',
    short: 'LA',
    titleKey: 'gameLaTitle',
    subtitleKey: 'gameLaSubtitle',
  },
}

export const GAME_IDS: GameId[] = ['lza', 'la']

export function isGameId(value: string | null): value is GameId {
  return value === 'lza' || value === 'la'
}
