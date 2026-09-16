import { useCallback, useEffect, useState } from 'react'
import { isGameId, type GameId } from '../data/games'
import type { SavedDonutRecipe } from '../data/lzaDonuts'
import type { Locale } from '../i18n'

const LANG_KEY = 'lza-locale'
const CAUGHT_KEY = 'lza-caught'
const LA_SPAWN_CAUGHT_KEY = 'la-spawns-caught'
const SCREWS_KEY = 'lza-screws'
const MISSIONS_KEY = 'lza-missions'
const LA_MISSIONS_KEY = 'la-missions'
const ONBOARDED_KEY = 'lza-onboarded'
const GAME_KEY = 'guide-game'
const POKEDEX_KEY = 'lza-pokedex'
const LA_POKEDEX_KEY = 'la-pokedex'
const LA_RESEARCH_KEY = 'la-research'
const LA_WISPS_KEY = 'la-wisps'
const LA_UNOWNS_KEY = 'la-unowns'
const LA_ALPHAS_KEY = 'la-alphas'
const LA_CAMPS_KEY = 'la-camps'
const LA_SOLITUDE_KEY = 'la-solitude'
const LA_LEGENDARIES_KEY = 'la-legendaries'
const LZA_DONUT_RECIPES_KEY = 'lza-donut-recipes'

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale | null>(() => {
    const saved = localStorage.getItem(LANG_KEY)
    return saved === 'pt' || saved === 'en' ? saved : null
  })
  const [onboarded, setOnboarded] = useState(
    () => localStorage.getItem(ONBOARDED_KEY) === '1',
  )

  const setLocale = useCallback((next: Locale) => {
    localStorage.setItem(LANG_KEY, next)
    localStorage.setItem(ONBOARDED_KEY, '1')
    setLocaleState(next)
    setOnboarded(true)
  }, [])

  return { locale, setLocale, onboarded }
}

export function useGame() {
  const [game, setGameState] = useState<GameId>(() => {
    const saved = localStorage.getItem(GAME_KEY)
    return isGameId(saved) ? saved : 'lza'
  })

  const setGame = useCallback((next: GameId) => {
    localStorage.setItem(GAME_KEY, next)
    setGameState(next)
  }, [])

  return { game, setGame }
}

function useKeyCaughtProgress(storageKey: string) {
  const [caught, setCaught] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || '{}')
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(caught))
  }, [caught, storageKey])

  const toggle = useCallback((key: string) => {
    setCaught((prev) => ({ ...prev, [key]: !prev[key] }))
  }, [])

  const reset = useCallback(() => setCaught({}), [])

  const isCaught = useCallback((key: string) => Boolean(caught[key]), [caught])

  return { caught, toggle, reset, isCaught }
}

export function useCaughtProgress() {
  return useKeyCaughtProgress(CAUGHT_KEY)
}

/** Per-subregion wild spawn checklist for Legends: Arceus. */
export function useLaSpawnProgress() {
  return useKeyCaughtProgress(LA_SPAWN_CAUGHT_KEY)
}

export function useScrewProgress() {
  const [collected, setCollected] = useState<Record<number, boolean>>(() => {
    try {
      const raw = JSON.parse(localStorage.getItem(SCREWS_KEY) || '{}') as Record<string, boolean>
      const next: Record<number, boolean> = {}
      for (const [k, v] of Object.entries(raw)) {
        const id = Number(k)
        if (Number.isFinite(id) && v) next[id] = true
      }
      return next
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem(SCREWS_KEY, JSON.stringify(collected))
  }, [collected])

  const toggle = useCallback((id: number) => {
    setCollected((prev) => {
      const next = { ...prev }
      if (next[id]) delete next[id]
      else next[id] = true
      return next
    })
  }, [])

  const reset = useCallback(() => setCollected({}), [])

  return { collected, toggle, reset }
}

export function useMissionProgress(storageKey: string = MISSIONS_KEY) {
  const [completed, setCompleted] = useState<Record<string, boolean>>(() => {
    try {
      const raw = JSON.parse(localStorage.getItem(storageKey) || '{}') as Record<string, boolean>
      const next: Record<string, boolean> = {}
      for (const [k, v] of Object.entries(raw)) {
        if (v) next[k] = true
      }
      return next
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(completed))
  }, [completed, storageKey])

  const toggle = useCallback((id: string) => {
    setCompleted((prev) => {
      const next = { ...prev }
      if (next[id]) delete next[id]
      else next[id] = true
      return next
    })
  }, [])

  const reset = useCallback(() => setCompleted({}), [])

  return { completed, toggle, reset }
}

/** Mission / request checklist for Legends: Arceus. */
export function useLaMissionProgress() {
  return useMissionProgress(LA_MISSIONS_KEY)
}

export function usePokedexProgress(game: 'lza' | 'la' = 'lza') {
  const storageKey = game === 'la' ? LA_POKEDEX_KEY : POKEDEX_KEY
  const [caught, setCaught] = useState<Record<number, boolean>>(() => {
    try {
      const raw = JSON.parse(localStorage.getItem(storageKey) || '{}') as Record<string, boolean>
      const next: Record<number, boolean> = {}
      for (const [k, v] of Object.entries(raw)) {
        const id = Number(k)
        if (Number.isFinite(id) && v) next[id] = true
      }
      return next
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(caught))
  }, [caught, storageKey])

  const toggle = useCallback((dex: number) => {
    setCaught((prev) => {
      const next = { ...prev }
      if (next[dex]) delete next[dex]
      else next[dex] = true
      return next
    })
  }, [])

  const reset = useCallback(() => setCaught({}), [])

  const isCaught = useCallback((dex: number) => Boolean(caught[dex]), [caught])

  return { caught, toggle, reset, isCaught }
}

export function catchKey(zoneId: number, pokemonId: string) {
  return `z${zoneId}:${pokemonId}`
}

/** Checklist progress keyed by string id (wisps, unowns, camps, etc.). */
export function useLaChecklistProgress(storageKey: string) {
  return useMissionProgress(storageKey)
}

export function useLaResearchProgress() {
  return useKeyCaughtProgress(LA_RESEARCH_KEY)
}

export function useLaWispProgress() {
  return useLaChecklistProgress(LA_WISPS_KEY)
}

export function useLaUnownProgress() {
  return useLaChecklistProgress(LA_UNOWNS_KEY)
}

export function useLaAlphaProgress() {
  return useLaChecklistProgress(LA_ALPHAS_KEY)
}

export function useLaCampProgress() {
  return useLaChecklistProgress(LA_CAMPS_KEY)
}

export function useLaSolitudeProgress() {
  return useLaChecklistProgress(LA_SOLITUDE_KEY)
}

export function useLaLegendaryProgress() {
  return useLaChecklistProgress(LA_LEGENDARIES_KEY)
}

export function useDonutRecipes() {
  const [recipes, setRecipes] = useState<SavedDonutRecipe[]>(() => {
    try {
      const raw = JSON.parse(localStorage.getItem(LZA_DONUT_RECIPES_KEY) || '[]')
      return Array.isArray(raw) ? raw : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(LZA_DONUT_RECIPES_KEY, JSON.stringify(recipes))
  }, [recipes])

  const save = useCallback(
    (name: string, berryIds: string[], specialId: string | null) => {
      const entry = {
        id: `donut-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        name,
        berryIds,
        createdAt: Date.now(),
        specialId,
      }
      setRecipes((prev) => [entry, ...prev])
    },
    [],
  )

  const remove = useCallback((id: string) => {
    setRecipes((prev) => prev.filter((r) => r.id !== id))
  }, [])

  const rename = useCallback((id: string, name: string) => {
    setRecipes((prev) => prev.map((r) => (r.id === id ? { ...r, name } : r)))
  }, [])

  return { recipes, save, remove, rename }
}
