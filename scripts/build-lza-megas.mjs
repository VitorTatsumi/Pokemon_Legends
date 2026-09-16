import fs from 'fs'

const text = fs.readFileSync('src/data/lzaPokedex.ts', 'utf8')
const entries = [...text.matchAll(/\{ lumiose: (\d+), dex: (\d+), name: '([^']+)' \}/g)].map(
  (m) => ({ lumiose: +m[1], dex: +m[2], name: m[3] }),
)

function isMega(slug) {
  return /(^|-)mega(-|$)/i.test(slug)
}

function label(slug, name) {
  const l = slug.toLowerCase()
  if (l.endsWith('-mega-x')) return `Mega ${name} X`
  if (l.endsWith('-mega-y')) return `Mega ${name} Y`
  if (l.endsWith('-mega-z') || l.includes('-mega-z')) return `Mega ${name} Z`
  if (l.includes('female-mega')) return `Mega ${name} ♀`
  if (l.includes('male-mega')) return `Mega ${name} ♂`
  if (l.includes('mega')) return `Mega ${name}`
  return slug
}

const out = []
const conc = 12
for (let i = 0; i < entries.length; i += conc) {
  const chunk = entries.slice(i, i + conc)
  const results = await Promise.all(
    chunk.map(async (e) => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${e.dex}`)
        if (!res.ok) return []
        const sp = await res.json()
        const megas = (sp.varieties || []).filter((v) => isMega(v.pokemon.name))
        return Promise.all(
          megas.map(async (v) => {
            let spriteId = e.dex
            try {
              const pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${v.pokemon.name}`)
              if (pokeRes.ok) {
                const poke = await pokeRes.json()
                if (typeof poke.id === 'number') spriteId = poke.id
              }
            } catch {
              // keep base dex fallback
            }
            return {
              lumiose: e.lumiose,
              dex: e.dex,
              baseName: e.name,
              megaId: v.pokemon.name,
              spriteId,
              labelEn: label(v.pokemon.name, e.name),
              labelPt: label(v.pokemon.name, e.name),
            }
          }),
        )
      } catch {
        return []
      }
    }),
  )
  out.push(...results.flat())
  process.stdout.write(`\r${Math.min(i + conc, entries.length)}/${entries.length} megas:${out.length}`)
}

const body = out
  .map(
    (m) =>
      `  { lumiose: ${m.lumiose}, dex: ${m.dex}, baseName: '${m.baseName}', megaId: '${m.megaId}', spriteId: ${m.spriteId}, labelEn: '${m.labelEn}', labelPt: '${m.labelPt}' },`,
  )
  .join('\n')

const file = `export type LzaMegaEntry = {
  lumiose: number
  dex: number
  baseName: string
  megaId: string
  /** PokeAPI pokemon id used for mega sprite CDN */
  spriteId: number
  labelEn: string
  labelPt: string
}

/** Mega Evolutions available for Lumiose Pokédex species (via PokeAPI varieties). */
export const LZA_MEGAS: LzaMegaEntry[] = [
${body}
]
`

fs.writeFileSync('src/data/lzaMegas.ts', file)
console.log(`\nWrote ${out.length} megas`)
