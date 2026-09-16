import fs from 'fs'

const regionsSrc = fs.readFileSync('src/data/hisuiRegions.ts', 'utf8')
const aliasSrc = fs.readFileSync('src/data/laSubregionAliases.ts', 'utf8')

/** Parse AliasTarget values from the TS source (best-effort). */
function parseAliases(src) {
  const aliases = {}
  // Simple string aliases: key: 'value'
  for (const m of src.matchAll(
    /(?:^|\n)\s*(?:'([^']+)'|([a-z0-9-]+)):\s*'([^']+)'/g,
  )) {
    const key = m[1] || m[2]
    if (['en', 'pt'].includes(key)) continue
    aliases[key] = m[3]
  }
  // Object aliases: key: { region: 'value', ... }
  for (const m of src.matchAll(
    /(?:^|\n)\s*(?:'([^']+)'|([a-z0-9-]+)):\s*\{([^}]+)\}/g,
  )) {
    const key = m[1] || m[2]
    const obj = {}
    for (const p of m[3].matchAll(/([a-z]+):\s*'([^']+)'/g)) {
      obj[p[1]] = p[2]
    }
    aliases[key] = obj
  }
  return aliases
}

const aliases = parseAliases(aliasSrc)

function regionSubs(regionId) {
  const re = new RegExp(
    `id: '${regionId}'[\\s\\S]*?subregions:\\s*\\[([\\s\\S]*?)\\],`,
  )
  const m = regionsSrc.match(re)
  if (!m) return new Set()
  return new Set([...m[1].matchAll(/sub\('([^']+)'/g)].map((x) => x[1]))
}

function resolve(regionId, sub) {
  const subs = regionSubs(regionId)
  if (subs.has(sub)) return { ok: true, resolved: sub }
  const alias = aliases[sub]
  const mapped = typeof alias === 'string' ? alias : alias?.[regionId]
  if (mapped && subs.has(mapped)) return { ok: true, resolved: mapped }
  return { ok: false, resolved: null, alias: mapped || null }
}

const files = [
  ['wisps', 'src/data/laWisps.ts'],
  ['unowns', 'src/data/laUnowns.ts'],
  ['alphas', 'src/data/laAlphas.ts'],
  ['camps', 'src/data/laCamps.ts'],
  ['legendaries', 'src/data/laLegendaries.ts'],
  ['outbreaks', 'src/data/laOutbreaks.ts'],
]

let totalFallbacks = 0
for (const [name, file] of files) {
  const s = fs.readFileSync(file, 'utf8')
  const items = [
    ...s.matchAll(/regionId:\s*'([^']+)'[\s\S]*?subregionId:\s*'([^']+)'/g),
  ]
  const fallbacks = []
  for (const m of items) {
    const r = resolve(m[1], m[2])
    if (!r.ok) fallbacks.push({ regionId: m[1], sub: m[2], alias: r.alias })
  }
  totalFallbacks += fallbacks.length
  const uniq = [
    ...new Map(fallbacks.map((f) => [`${f.regionId}:${f.sub}`, f])).values(),
  ]
  console.log(
    `${name}: ${items.length} items, ${fallbacks.length} fallbacks (${uniq.length} unique)`,
  )
  if (uniq.length) {
    console.log(
      ' ',
      uniq
        .map(
          (f) =>
            `${f.regionId}/${f.sub}${f.alias ? '->' + f.alias + '(miss)' : ''}`,
        )
        .join(' | '),
    )
  }
}
console.log('total fallbacks:', totalFallbacks)
