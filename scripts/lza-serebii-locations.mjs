/**
 * Parse Serebii Legends Z-A items page into concise obtain source lists.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const SEREBII_PATH = path.join(
  process.env.USERPROFILE || process.env.HOME || '',
  '.cursor/projects/c-Users-vrosa-Desktop-LZA-Guide-Master/agent-tools',
  '25b0351f-7640-459d-b2a0-3f8c13619c1d.txt',
)

/** Insert delimiters into Serebii's run-on location blobs. */
export function normalizeSerebiiLoc(loc) {
  let s = String(loc || '')
  const markers = [
    /(?=Side Mission \d+)/g,
    /(?=Shop [A-ZÀ-ÖØ-Þ])/g,
    /(?=Destroy floating)/g,
    /(?=Destroy Gold Bonus)/g,
    /(?=Defeat )/g,
    /(?=Quasartico Inc\.)/g,
    /(?=Z-A Infinite Royale)/g,
    /(?=Lumiose Poké[Dd]ex Completion Reward)/g,
    /(?=Hyperspace Lumiose\b)/g,
  ]
  for (const re of markers) s = s.replace(re, ' · ')
  return s.replace(/\s{2,}/g, ' ').replace(/\s*·\s*·\s*/g, ' · ').trim()
}

/**
 * Turn a Serebii location string into a short list of obtain lines.
 * Collapses long Wild Zone / district lists into one field entry.
 */
export function summarizeSerebiiLoc(loc) {
  const normalized = normalizeSerebiiLoc(loc)
  if (!normalized) return []

  const parts = normalized
    .split(/\s*·\s*/)
    .map((p) => p.trim())
    .filter(Boolean)

  const out = []
  const fieldChunks = []
  const shopChunks = []
  let hasFloating = false
  let hasGoldBonus = false

  for (const p of parts) {
    if (/^Destroy floating/i.test(p)) {
      hasFloating = true
      continue
    }
    if (/^Destroy Gold Bonus/i.test(p)) {
      hasGoldBonus = true
      continue
    }
    if (/^Shop\s+/i.test(p)) {
      const rest = p.replace(/^Shop\s+/i, '').trim()
      // Multiple shop venues often concatenated after a single "Shop"
      const venues = rest.split(
        /(?=Centrico Plaza|Jaune District|Magenta District|Rouge District|Vert District|South Boulevard|North Boulevard|Vernal Avenue|Hibernal Avenue|Autumnal Avenue|Quasartico)/,
      )
        .map((v) => v.trim())
        .filter(Boolean)
      if (venues.length > 3) {
        shopChunks.push('Pokémon Centers / street shops across Lumiose')
      } else if (venues.length) {
        for (const v of venues) shopChunks.push(`Shop: ${v}`)
      } else {
        shopChunks.push(`Shop: ${rest}`)
      }
      continue
    }
    if (/^Side Mission/i.test(p) || /^Defeat /i.test(p)) {
      out.push(p)
      continue
    }
    if (/^Quasartico/i.test(p)) {
      out.push('Shop: Quasartico Inc.')
      continue
    }
    if (/Infinite Royale/i.test(p)) {
      out.push('Z-A Infinite Royale reward match')
      continue
    }
    if (/Poké[Dd]ex Completion/i.test(p)) {
      out.push('Lumiose Pokédex completion reward')
      continue
    }
    // Remaining: wild zones / districts / avenues — collect for summary
    if (
      /Wild Zone|District|Boulevard|Avenue|Plaza|Sewers|Lysandre|Centrico|Hyperspace|Street|Park|Académie|Espace|Racine|Rust Syndicate/i.test(
        p,
      )
    ) {
      fieldChunks.push(p)
      continue
    }
    out.push(p)
  }

  if (shopChunks.length) {
    // Dedupe shops
    for (const s of [...new Set(shopChunks)]) out.push(s)
  }

  if (fieldChunks.length) {
    const joined = fieldChunks.join(', ')
    // If it's a short specific list, keep it; otherwise summarize.
    const pieces = joined.split(/,\s*/).filter(Boolean)
      if (pieces.length <= 4) {
        out.unshift(joined)
      } else {
        const wild = pieces.filter((x) => /Wild Zone/i.test(x)).length
        const districts = pieces.filter((x) => /District|Boulevard|Avenue|Plaza|Street/i.test(x))
          .length
        const bits = []
        if (wild) bits.push('Wild Zones')
        if (districts) bits.push('districts / streets')
        if (pieces.some((x) => /Sewers|Lysandre|Hyperspace/i.test(x))) {
          bits.push('dungeons / Hyperspace')
        }
        out.unshift(`Field loot (${bits.join(' · ') || 'across Lumiose'})`)
      }
    }

  if (hasFloating) out.push('Hyperspace floating Poké Balls')
  if (hasGoldBonus) out.push('Hyperspace Gold Bonus Poké Balls')

  // Dedupe preserving order
  const seen = new Set()
  return out.filter((x) => {
    const k = x.toLowerCase()
    if (seen.has(k)) return false
    seen.add(k)
    return true
  })
}

export function loadSerebiiItemLocations() {
  if (!fs.existsSync(SEREBII_PATH)) {
    console.warn('Serebii items file missing:', SEREBII_PATH)
    return new Map()
  }
  const text = fs.readFileSync(SEREBII_PATH, 'utf8')
  const map = new Map()
  for (const line of text.split(/\n/)) {
    if (!line.startsWith('|')) continue
    const cols = line
      .split('|')
      .map((c) => c.trim())
      .filter((_, i, a) => !(i === 0 || i === a.length - 1))
    let name
    let loc
    if (cols.length >= 4 && cols[0] === '') {
      name = cols[1]
      loc = cols[3]
    } else if (cols.length >= 3) {
      name = cols[0]
      loc = cols[2]
    } else continue
    if (!name || name === 'Name' || name === 'Picture' || /^-+$/.test(name)) continue
    if (!loc || loc === 'Location' || /^-+$/.test(loc)) continue
    map.set(name, summarizeSerebiiLoc(loc))
  }
  return map
}

// Allow quick CLI check
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const map = loadSerebiiItemLocations()
  console.log('items', map.size)
  for (const key of ['Master Ball', 'Poké Ball', 'Fast Ball', 'Shiny Charm', 'Upgrade']) {
    console.log(key, map.get(key))
  }
}
