import fs from 'fs'

const text = fs.readFileSync('src/data/laPokedex.ts', 'utf8')
const entries = [...text.matchAll(/\{ hisui: (\d+), dex: (\d+), name: '([^']+)' \}/g)].map(
  (m) => ({ hisui: +m[1], dex: +m[2], name: m[3] }),
)

function isHisui(slug) {
  return /(^|-)hisui(an)?(-|$)/i.test(slug)
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
        const forms = (sp.varieties || []).filter((v) => isHisui(v.pokemon.name))
        return Promise.all(
          forms.map(async (v) => {
            let spriteId = e.dex
            try {
              const pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${v.pokemon.name}`)
              if (pokeRes.ok) {
                const poke = await pokeRes.json()
                if (typeof poke.id === 'number') spriteId = poke.id
              }
            } catch {
              // keep base
            }
            return {
              hisui: e.hisui,
              dex: e.dex,
              baseName: e.name,
              formId: v.pokemon.name,
              spriteId,
              labelEn: `Hisuian ${e.name}`,
              labelPt: `Forma de Hisui: ${e.name}`,
            }
          }),
        )
      } catch {
        return []
      }
    }),
  )
  out.push(...results.flat())
  process.stdout.write(`\r${Math.min(i + conc, entries.length)}/${entries.length} hisui:${out.length}`)
}

const body = out
  .map(
    (m) =>
      `  { hisui: ${m.hisui}, dex: ${m.dex}, baseName: '${m.baseName}', formId: '${m.formId}', spriteId: ${m.spriteId}, labelEn: '${m.labelEn}', labelPt: '${m.labelPt}' },`,
  )
  .join('\n')

const file = `export type LaHisuiFormEntry = {
  hisui: number
  dex: number
  baseName: string
  formId: string
  /** PokeAPI pokemon id used for Hisuian sprite CDN */
  spriteId: number
  labelEn: string
  labelPt: string
}

/** Hisuian regional forms present in the Hisui Pokédex (via PokeAPI varieties). */
export const LA_HISUI_FORMS: LaHisuiFormEntry[] = [
${body}
]
`

fs.writeFileSync('src/data/laHisuiForms.ts', file)
console.log(`\nWrote ${out.length} Hisui forms`)
