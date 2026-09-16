import { useEffect, useState } from 'react'
import type { LzaLearnset } from '../data/lzaLearnsets'
import { fetchLzaLearnset } from '../data/lzaLearnsets'
import { fetchLaLearnset } from '../data/laLearnsets'
import type { Locale } from '../i18n'

export type LearnsetGame = 'lza' | 'la'

export type PokemonTypeName =
  | 'normal'
  | 'fire'
  | 'water'
  | 'electric'
  | 'grass'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy'

export type PokemonStatKey =
  | 'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense'
  | 'speed'

export type PokemonStat = {
  key: PokemonStatKey
  value: number
}

export type PokemonAbility = {
  name: string
  hidden: boolean
}

export type PokemonDetails = {
  dex: number
  formId: string
  name: string
  genus: string
  types: PokemonTypeName[]
  abilities: PokemonAbility[]
  stats: PokemonStat[]
  learnset: LzaLearnset
  artworkUrl: string
  spriteUrl: string
  isMega: boolean
  isHisui: boolean
}

export type MegaFormRef = {
  id: string
  labelEn: string
  labelPt: string
}

export type HisuiFormRef = {
  id: string
  labelEn: string
  labelPt: string
}

type CacheEntry = {
  en: PokemonDetails | null
  pt: PokemonDetails | null
  megas: MegaFormRef[]
  hisuiForms: HisuiFormRef[]
  error?: string
}

const cache = new Map<string, CacheEntry>()
const inflight = new Map<string, Promise<CacheEntry>>()
const resourceNameCache = new Map<string, { en: string; pt: string }>()
const megaListCache = new Map<number, MegaFormRef[]>()
const hisuiListCache = new Map<number, HisuiFormRef[]>()

function pickLocalized(
  entries: { language: { name: string }; [key: string]: unknown }[],
  locale: Locale,
  field: string,
): string {
  const prefer = locale === 'pt' ? ['pt-BR', 'pt', 'en'] : ['en']
  for (const lang of prefer) {
    const hit = entries.find((e) => e.language.name === lang)
    if (hit && typeof hit[field] === 'string' && (hit[field] as string).trim()) {
      return (hit[field] as string).replace(/\f|\n|\r/g, ' ').replace(/\s+/g, ' ').trim()
    }
  }
  const any = entries.find((e) => typeof e[field] === 'string' && (e[field] as string).trim())
  return any ? String(any[field]).replace(/\f|\n|\r/g, ' ').replace(/\s+/g, ' ').trim() : ''
}

function capitalize(name: string) {
  return name
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ')
}

function megaLabelFromSlug(slug: string, speciesName: string) {
  const lower = slug.toLowerCase()
  if (lower.endsWith('-mega-x')) return `Mega ${speciesName} X`
  if (lower.endsWith('-mega-y')) return `Mega ${speciesName} Y`
  if (lower.endsWith('-mega-z') || lower.includes('-mega-z')) return `Mega ${speciesName} Z`
  if (lower.includes('female-mega')) return `Mega ${speciesName} ♀`
  if (lower.includes('male-mega')) return `Mega ${speciesName} ♂`
  if (lower.includes('mega')) return `Mega ${speciesName}`
  return capitalize(slug)
}

function hisuiLabelFromSlug(speciesName: string, locale: Locale) {
  return locale === 'pt' ? `Forma de Hisui: ${speciesName}` : `Hisuian ${speciesName}`
}

function isMegaSlug(slug: string) {
  return /(^|-)mega(-|$)/i.test(slug)
}

function isHisuiSlug(slug: string) {
  return /(^|-)hisui(an)?(-|$)/i.test(slug)
}

async function localizedResourceName(url: string, fallback: string) {
  const cached = resourceNameCache.get(url)
  if (cached) return cached

  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error('fetch failed')
    const data = await res.json()
    const entry = {
      en: pickLocalized(data.names ?? [], 'en', 'name') || capitalize(fallback),
      pt: pickLocalized(data.names ?? [], 'pt', 'name') || capitalize(fallback),
    }
    resourceNameCache.set(url, entry)
    return entry
  } catch {
    const entry = { en: capitalize(fallback), pt: capitalize(fallback) }
    resourceNameCache.set(url, entry)
    return entry
  }
}

async function formDisplayNames(
  poke: {
    name: string
    forms?: { url: string }[]
  },
  speciesNameEn: string,
  speciesNamePt: string,
  kind: 'mega' | 'hisui',
) {
  const fallbackEn =
    kind === 'hisui'
      ? hisuiLabelFromSlug(speciesNameEn, 'en')
      : megaLabelFromSlug(poke.name, speciesNameEn)
  const fallbackPt =
    kind === 'hisui'
      ? hisuiLabelFromSlug(speciesNamePt, 'pt')
      : megaLabelFromSlug(poke.name, speciesNamePt)
  const formUrl = poke.forms?.[0]?.url
  if (!formUrl) return { en: fallbackEn, pt: fallbackPt }

  try {
    const res = await fetch(formUrl)
    if (!res.ok) throw new Error('fetch failed')
    const data = await res.json()
    return {
      en: pickLocalized(data.names ?? [], 'en', 'name') || fallbackEn,
      pt: pickLocalized(data.names ?? [], 'pt', 'name') || fallbackPt,
    }
  } catch {
    return { en: fallbackEn, pt: fallbackPt }
  }
}

async function buildDetailsFromPoke(
  poke: {
    id: number
    name: string
    types: { slot: number; type: { name: string } }[]
    abilities: { ability: { name: string; url: string }; is_hidden: boolean }[]
    stats: { base_stat: number; stat: { name: string } }[]
    sprites?: {
      front_default?: string | null
      other?: { 'official-artwork'?: { front_default?: string | null } }
    }
    forms?: { url: string }[]
  },
  species: {
    names?: { language: { name: string }; name: string }[]
    genera?: { language: { name: string }; genus: string }[]
  },
  learnsetEn: LzaLearnset,
  learnsetPt: LzaLearnset,
  opts: { formId: string; isMega: boolean; isHisui: boolean; baseDex: number },
): Promise<CacheEntry> {
  const types = poke.types
    .sort((a, b) => a.slot - b.slot)
    .map((t) => t.type.name as PokemonTypeName)

  const abilityEntries = await Promise.all(
    poke.abilities
      .sort((a, b) => Number(a.is_hidden) - Number(b.is_hidden))
      .map(async (a) => {
        const names = await localizedResourceName(a.ability.url, a.ability.name)
        return { hidden: a.is_hidden, names }
      }),
  )

  const stats = poke.stats.map(
    (s) =>
      ({
        key: s.stat.name as PokemonStatKey,
        value: s.base_stat,
      }) satisfies PokemonStat,
  )

  const artwork =
    poke.sprites?.other?.['official-artwork']?.front_default ||
    poke.sprites?.front_default ||
    ''
  const sprite = poke.sprites?.front_default || artwork

  const speciesNameEn =
    pickLocalized(species.names ?? [], 'en', 'name') || capitalize(poke.name)
  const speciesNamePt =
    pickLocalized(species.names ?? [], 'pt', 'name') || capitalize(poke.name)

  let nameEn = speciesNameEn
  let namePt = speciesNamePt
  if (opts.isMega || opts.isHisui) {
    const formNames = await formDisplayNames(
      poke,
      speciesNameEn,
      speciesNamePt,
      opts.isHisui ? 'hisui' : 'mega',
    )
    nameEn = formNames.en
    namePt = formNames.pt
  }

  return {
    en: {
      dex: opts.baseDex,
      formId: opts.formId,
      name: nameEn,
      genus: pickLocalized(species.genera ?? [], 'en', 'genus'),
      types,
      abilities: abilityEntries.map((a) => ({
        name: a.names.en,
        hidden: a.hidden,
      })),
      stats,
      learnset: learnsetEn,
      artworkUrl: artwork,
      spriteUrl: sprite,
      isMega: opts.isMega,
      isHisui: opts.isHisui,
    },
    pt: {
      dex: opts.baseDex,
      formId: opts.formId,
      name: namePt,
      genus: pickLocalized(species.genera ?? [], 'pt', 'genus'),
      types,
      abilities: abilityEntries.map((a) => ({
        name: a.names.pt,
        hidden: a.hidden,
      })),
      stats,
      learnset: learnsetPt,
      artworkUrl: artwork,
      spriteUrl: sprite,
      isMega: opts.isMega,
      isHisui: opts.isHisui,
    },
    megas: [],
    hisuiForms: [],
  }
}

async function resolveMegaRefs(
  species: {
    names?: { language: { name: string }; name: string }[]
    varieties?: { is_default: boolean; pokemon: { name: string; url: string } }[]
  },
  defaultName: string,
): Promise<MegaFormRef[]> {
  const speciesNameEn =
    pickLocalized(species.names ?? [], 'en', 'name') || capitalize(defaultName)
  const speciesNamePt =
    pickLocalized(species.names ?? [], 'pt', 'name') || capitalize(defaultName)

  return (species.varieties ?? [])
    .filter((v) => isMegaSlug(v.pokemon.name))
    .map((variety) => {
      const slug = variety.pokemon.name
      return {
        id: slug,
        labelEn: megaLabelFromSlug(slug, speciesNameEn),
        labelPt: megaLabelFromSlug(slug, speciesNamePt),
      }
    })
}

async function resolveHisuiRefs(
  species: {
    names?: { language: { name: string }; name: string }[]
    varieties?: { is_default: boolean; pokemon: { name: string; url: string } }[]
  },
  defaultName: string,
): Promise<HisuiFormRef[]> {
  const speciesNameEn =
    pickLocalized(species.names ?? [], 'en', 'name') || capitalize(defaultName)
  const speciesNamePt =
    pickLocalized(species.names ?? [], 'pt', 'name') || capitalize(defaultName)

  return (species.varieties ?? [])
    .filter((v) => isHisuiSlug(v.pokemon.name))
    .map((variety) => ({
      id: variety.pokemon.name,
      labelEn: hisuiLabelFromSlug(speciesNameEn, 'en'),
      labelPt: hisuiLabelFromSlug(speciesNamePt, 'pt'),
    }))
}

async function loadPokemon(
  id: string | number,
  baseDex?: number,
  game: LearnsetGame = 'lza',
): Promise<CacheEntry> {
  const rawKey = String(id)
  const key = game === 'la' ? `la:${rawKey}` : rawKey
  const existing = cache.get(key)
  if (existing?.en?.learnset && existing?.pt?.learnset) return existing
  const pending = inflight.get(key)
  if (pending) return pending

  const promise = (async (): Promise<CacheEntry> => {
    try {
      const numeric = typeof id === 'number' || /^\d+$/.test(rawKey)
      const dexNum = numeric ? Number(id) : (baseDex ?? 0)
      const isMega = !numeric && isMegaSlug(rawKey)
      const isHisui = !numeric && isHisuiSlug(rawKey)

      const speciesDex = isMega || isHisui ? dexNum : numeric ? Number(id) : dexNum
      if (!speciesDex) throw new Error('missing base dex')

      const fetchLearn =
        game === 'la'
          ? (d: number, loc: Locale) => fetchLaLearnset(d, loc)
          : (d: number, loc: Locale) => fetchLzaLearnset(d, loc)

      const [pokeRes, speciesRes, learnsetEn, learnsetPt] = await Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon/${rawKey}`),
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${speciesDex}`),
        fetchLearn(speciesDex, 'en'),
        fetchLearn(speciesDex, 'pt'),
      ])
      if (!pokeRes.ok || !speciesRes.ok) throw new Error('fetch failed')

      const poke = await pokeRes.json()
      const species = await speciesRes.json()

      const entry = await buildDetailsFromPoke(poke, species, learnsetEn, learnsetPt, {
        formId: rawKey,
        isMega,
        isHisui,
        baseDex: speciesDex,
      })

      if (numeric && !isMega && !isHisui) {
        const cachedMegas = megaListCache.get(speciesDex)
        entry.megas = cachedMegas ?? (await resolveMegaRefs(species, poke.name as string))
        megaListCache.set(speciesDex, entry.megas)

        const cachedHisui = hisuiListCache.get(speciesDex)
        entry.hisuiForms =
          cachedHisui ?? (await resolveHisuiRefs(species, poke.name as string))
        hisuiListCache.set(speciesDex, entry.hisuiForms)
      }

      cache.set(key, entry)
      return entry
    } catch {
      const entry: CacheEntry = {
        en: null,
        pt: null,
        megas: [],
        hisuiForms: [],
        error: 'failed',
      }
      cache.set(key, entry)
      return entry
    } finally {
      inflight.delete(key)
    }
  })()

  inflight.set(key, promise)
  return promise
}

function detailsCacheKey(id: string | number, game: LearnsetGame) {
  return game === 'la' ? `la:${id}` : String(id)
}

export function usePokemonDetails(
  dex: number | null,
  locale: Locale,
  game: LearnsetGame = 'lza',
) {
  const [details, setDetails] = useState<PokemonDetails | null>(() => {
    if (dex == null) return null
    return cache.get(detailsCacheKey(dex, game))?.[locale] ?? null
  })
  const [megas, setMegas] = useState<MegaFormRef[]>(() => {
    if (dex == null) return []
    return cache.get(detailsCacheKey(dex, game))?.megas ?? megaListCache.get(dex) ?? []
  })
  const [hisuiForms, setHisuiForms] = useState<HisuiFormRef[]>(() => {
    if (dex == null) return []
    return (
      cache.get(detailsCacheKey(dex, game))?.hisuiForms ?? hisuiListCache.get(dex) ?? []
    )
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (dex == null) {
      setDetails(null)
      setMegas([])
      setHisuiForms([])
      setLoading(false)
      setError(false)
      return
    }

    let cancelled = false
    const cached = cache.get(detailsCacheKey(dex, game))
    if (cached?.[locale]?.learnset) {
      setDetails(cached[locale])
      setMegas(cached.megas ?? [])
      setHisuiForms(cached.hisuiForms ?? [])
      setLoading(false)
      setError(false)
      return
    }

    setLoading(true)
    setError(false)
    loadPokemon(dex, dex, game).then((entry) => {
      if (cancelled) return
      const next = entry[locale]
      setDetails(next)
      setMegas(entry.megas ?? [])
      setHisuiForms(entry.hisuiForms ?? [])
      setLoading(false)
      setError(!next)
    })

    return () => {
      cancelled = true
    }
  }, [dex, locale, game])

  return { details, megas, hisuiForms, loading, error }
}

export function usePokemonFormDetails(
  formId: string | null,
  locale: Locale,
  baseDex: number | null,
  game: LearnsetGame = 'lza',
) {
  const [details, setDetails] = useState<PokemonDetails | null>(() => {
    if (!formId) return null
    return cache.get(detailsCacheKey(formId, game))?.[locale] ?? null
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!formId || baseDex == null) {
      setDetails(null)
      setLoading(false)
      setError(false)
      return
    }

    let cancelled = false
    const cached = cache.get(detailsCacheKey(formId, game))
    if (cached?.[locale]?.learnset) {
      setDetails(cached[locale])
      setLoading(false)
      setError(false)
      return
    }

    setLoading(true)
    setError(false)
    loadPokemon(formId, baseDex, game).then((entry) => {
      if (cancelled) return
      const next = entry[locale]
      setDetails(next)
      setLoading(false)
      setError(!next)
    })

    return () => {
      cancelled = true
    }
  }, [formId, locale, baseDex, game])

  return { details, loading, error }
}
