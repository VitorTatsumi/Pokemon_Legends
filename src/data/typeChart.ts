import type { PokemonTypeName } from '../hooks/usePokemonDetails'

/** Attacker → Defender → multiplier (Gen 6+) */
const CHART: Record<PokemonTypeName, Partial<Record<PokemonTypeName, number>>> = {
  normal: { rock: 0.5, ghost: 0, steel: 0.5 },
  fire: {
    fire: 0.5,
    water: 0.5,
    grass: 2,
    ice: 2,
    bug: 2,
    rock: 0.5,
    dragon: 0.5,
    steel: 2,
  },
  water: { fire: 2, water: 0.5, grass: 0.5, ground: 2, rock: 2, dragon: 0.5 },
  electric: {
    water: 2,
    electric: 0.5,
    grass: 0.5,
    ground: 0,
    flying: 2,
    dragon: 0.5,
  },
  grass: {
    fire: 0.5,
    water: 2,
    grass: 0.5,
    poison: 0.5,
    ground: 2,
    flying: 0.5,
    bug: 0.5,
    rock: 2,
    dragon: 0.5,
    steel: 0.5,
  },
  ice: {
    fire: 0.5,
    water: 0.5,
    grass: 2,
    ice: 0.5,
    ground: 2,
    flying: 2,
    dragon: 2,
    steel: 0.5,
  },
  fighting: {
    normal: 2,
    ice: 2,
    poison: 0.5,
    flying: 0.5,
    psychic: 0.5,
    bug: 0.5,
    rock: 2,
    ghost: 0,
    dark: 2,
    steel: 2,
    fairy: 0.5,
  },
  poison: {
    grass: 2,
    poison: 0.5,
    ground: 0.5,
    rock: 0.5,
    ghost: 0.5,
    steel: 0,
    fairy: 2,
  },
  ground: {
    fire: 2,
    electric: 2,
    grass: 0.5,
    poison: 2,
    flying: 0,
    bug: 0.5,
    rock: 2,
    steel: 2,
  },
  flying: {
    electric: 0.5,
    grass: 2,
    fighting: 2,
    bug: 2,
    rock: 0.5,
    steel: 0.5,
  },
  psychic: { fighting: 2, poison: 2, psychic: 0.5, dark: 0, steel: 0.5 },
  bug: {
    fire: 0.5,
    grass: 2,
    fighting: 0.5,
    poison: 0.5,
    flying: 0.5,
    psychic: 2,
    ghost: 0.5,
    dark: 2,
    steel: 0.5,
    fairy: 0.5,
  },
  rock: {
    fire: 2,
    ice: 2,
    fighting: 0.5,
    ground: 0.5,
    flying: 2,
    bug: 2,
    steel: 0.5,
  },
  ghost: { normal: 0, psychic: 2, ghost: 2, dark: 0.5 },
  dragon: { dragon: 2, steel: 0.5, fairy: 0 },
  dark: { fighting: 0.5, psychic: 2, ghost: 2, dark: 0.5, fairy: 0.5 },
  steel: {
    fire: 0.5,
    water: 0.5,
    electric: 0.5,
    ice: 2,
    rock: 2,
    steel: 0.5,
    fairy: 2,
  },
  fairy: {
    fire: 0.5,
    fighting: 2,
    poison: 0.5,
    dragon: 2,
    dark: 2,
    steel: 0.5,
  },
}

export const ALL_TYPES: PokemonTypeName[] = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
]

function matchup(attacker: PokemonTypeName, defender: PokemonTypeName): number {
  return CHART[attacker][defender] ?? 1
}

/** Damage taken when hit by `attacking` type. */
export function defenseMultiplier(
  defendingTypes: PokemonTypeName[],
  attacking: PokemonTypeName,
): number {
  return defendingTypes.reduce((mult, def) => mult * matchup(attacking, def), 1)
}

/** Best STAB-type multiplier when attacking a mon of `defending` type. */
export function offenseMultiplier(
  attackingTypes: PokemonTypeName[],
  defending: PokemonTypeName,
): number {
  if (attackingTypes.length === 0) return 1
  return Math.max(...attackingTypes.map((atk) => matchup(atk, defending)))
}

export type TypeMatchRow = {
  type: PokemonTypeName
  defense: number
  offense: number
}

export function typeMatchTable(types: PokemonTypeName[]): TypeMatchRow[] {
  return ALL_TYPES.map((type) => ({
    type,
    defense: defenseMultiplier(types, type),
    offense: offenseMultiplier(types, type),
  }))
}

export function formatMultiplier(value: number): string {
  if (value === 0) return '0'
  if (value === 0.25) return '1/4'
  if (value === 0.5) return '1/2'
  if (value === 1) return ''
  if (value === 2) return '2'
  if (value === 4) return '4'
  return `${value}`
}

export const TYPE_ABBR: Record<PokemonTypeName, string> = {
  normal: 'NOR',
  fire: 'FIR',
  water: 'WAT',
  electric: 'ELE',
  grass: 'GRA',
  ice: 'ICE',
  fighting: 'FIG',
  poison: 'POI',
  ground: 'GRO',
  flying: 'FLY',
  psychic: 'PSY',
  bug: 'BUG',
  rock: 'ROC',
  ghost: 'GHO',
  dragon: 'DRA',
  dark: 'DAR',
  steel: 'STE',
  fairy: 'FAI',
}
