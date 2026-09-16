/**
 * Probe Serebii Legends Arceus item sprites and emit mapping.
 */
const SEREBII = 'https://www.serebii.net/itemdex/sprites/legends'

/** Our slug → candidate serebii filenames (no .png) */
const CANDIDATES = {
  'poke-ball': ['pokeball'],
  'great-ball': ['greatball'],
  'ultra-ball': ['ultraball'],
  'heavy-ball': ['heavyball'],
  'leaden-ball': ['leadenball'],
  'feather-ball': ['featherball'],
  'wing-ball': ['wingball'],
  'gigaton-ball': ['gigatonball'],
  'jet-ball': ['jetball'],
  'origin-ball': ['originball'],
  potion: ['potion'],
  'super-potion': ['superpotion'],
  'hyper-potion': ['hyperpotion'],
  'max-potion': ['maxpotion'],
  'full-heal': ['fullheal'],
  'full-restore': ['fullrestore'],
  revive: ['revive'],
  'max-revive': ['maxrevive'],
  'sweet-heart': ['cakelurebase', 'honey', 'dazzlinghoney', 'mushroomcake', 'honeycake'],
  'smoke-ball': ['smokebomb'],
  'fluffy-tail': ['scatterbang'],
  repel: ['stealthspray'],
  'sticky-barb': ['stickyglob'],
  'energy-root': ['medicinalleek', 'vivichoke', 'sootfootroot', 'energyroot'],
  'revival-herb': ['revivalherb'],
  'big-mushroom': ['swordcap', 'direshroom', 'bigmushroom'],
  'oran-berry': ['oranberry'],
  'cheri-berry': ['cheriberry'],
  'chesto-berry': ['chestoberry'],
  'pecha-berry': ['pechaberry'],
  'rawst-berry': ['rawstberry'],
  'nanab-berry': ['nanabberry'],
  'leppa-berry': ['leppaberry'],
  'sitrus-berry': ['sitrusberry'],
  'green-apricorn': ['apricorn', 'greenapricorn'],
  'hard-stone': ['tumblestone', 'blacktumblestone', 'skytumblestone', 'hardstone'],
  'miracle-seed': ['casterfern', 'bugwort', 'miracleseed'],
  'iron-ball': ['ironchunk'],
  'sea-incense': ['poppod'],
  'x-attack': ['auxpower', 'xattack'],
  'x-defense': ['auxguard', 'xdefense'],
  'dire-hit': ['auxevasion', 'direhit'],
  'max-ether': ['maxether'],
  'oval-charm': ['clothing', 'ovalcharm'],
}

async function exists(name) {
  const r = await fetch(`${SEREBII}/${name}.png`, { method: 'HEAD' })
  return r.ok
}

const mapping = {}
const missing = []

for (const [slug, cands] of Object.entries(CANDIDATES)) {
  let hit = null
  for (const c of cands) {
    if (await exists(c)) {
      hit = c
      break
    }
  }
  if (hit) mapping[slug] = hit
  else missing.push(slug)
}

console.log(JSON.stringify({ mapping, missing }, null, 2))
