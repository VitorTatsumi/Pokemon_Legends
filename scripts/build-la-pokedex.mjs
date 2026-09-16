import fs from 'fs'

function capitalize(name) {
  return name
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ')
}

const res = await fetch('https://pokeapi.co/api/v2/pokedex/hisui')
if (!res.ok) throw new Error(`hisui pokedex fetch failed: ${res.status}`)
const data = await res.json()

const entries = (data.pokemon_entries || [])
  .map((e) => {
    const hisui = e.entry_number
    const url = e.pokemon_species?.url || ''
    const match = url.match(/\/pokemon-species\/(\d+)\/?$/)
    const dex = match ? Number(match[1]) : NaN
    const name = capitalize(e.pokemon_species?.name || 'Unknown')
    return { hisui, dex, name }
  })
  .filter((e) => Number.isFinite(e.hisui) && Number.isFinite(e.dex))
  .sort((a, b) => a.hisui - b.hisui)

const body = entries
  .map(
    (e) =>
      `  { hisui: ${e.hisui}, dex: ${e.dex}, name: '${e.name.replace(/'/g, "\\'")}' },`,
  )
  .join('\n')

const file = `export type LaPokedexEntry = {
  /** Hisui Pokédex number (Legends: Arceus order) */
  hisui: number
  /** National Dex number */
  dex: number
  name: string
}

/** Complete Hisui Pokédex for Pokémon Legends: Arceus. */
export const LA_POKEDEX: LaPokedexEntry[] = [
${body}
]
`

fs.writeFileSync('src/data/laPokedex.ts', file)
console.log(`Wrote ${entries.length} Hisui entries`)
