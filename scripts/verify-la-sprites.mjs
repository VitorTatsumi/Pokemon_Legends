import fs from 'fs'
import { createRequire } from 'module'

// Inline resolver matching laItemSprites.ts
const SEREBII_LA = 'https://www.serebii.net/itemdex/sprites/legends'
const map = {
  'poke-ball': 'pokeball',
  'great-ball': 'greatball',
  'ultra-ball': 'ultraball',
  'heavy-ball': 'heavyball',
  'leaden-ball': 'leadenball',
  'feather-ball': 'featherball',
  'wing-ball': 'wingball',
  potion: 'potion',
  'super-potion': 'superpotion',
  'hyper-potion': 'hyperpotion',
  'max-potion': 'maxpotion',
  'full-heal': 'fullheal',
  'full-restore': 'fullrestore',
  revive: 'revive',
  'max-revive': 'maxrevive',
  'smoke-bomb': 'smokebomb',
  'scatter-bang': 'scatterbang',
  'stealth-spray': 'stealthspray',
  'sticky-glob': 'stickyglob',
  'cake-lure-base': 'hopoberry',
  'mushroom-cake': 'mushroomcake',
  'honey-cake': 'honeycake',
  'grain-cake': 'graincake',
  'bean-cake': 'beancake',
  'salt-cake': 'saltcake',
  apricorn: 'apricorn',
  tumblestone: 'tumblestone',
  'black-tumblestone': 'blacktumblestone',
  'sky-tumblestone': 'skytumblestone',
  'iron-chunk': 'ironchunk',
  'caster-fern': 'casterfern',
  bugwort: 'bugwort',
  'medicinal-leek': 'medicinalleek',
  vivichoke: 'vivichoke',
  'sootfoot-root': 'sootfootroot',
  'pop-pod': 'poppod',
  swordcap: 'swordcap',
  'dazzling-honey': 'dazzlinghoney',
  wood: 'wood',
  'sand-radish': 'sandradish',
  'oran-berry': 'oranberry',
  'cheri-berry': 'cheriberry',
  'chesto-berry': 'chestoberry',
  'pecha-berry': 'pechaberry',
  'rawst-berry': 'rawstberry',
  'nanab-berry': 'nanabberry',
  'leppa-berry': 'leppaberry',
  'sitrus-berry': 'sitrusberry',
  'hopo-berry': 'hopoberry',
  'aux-power': 'auxpower',
  'aux-guard': 'auxguard',
  'aux-evasion': 'auxevasion',
  'max-ether': 'maxether',
  'poke-ball-recipe': 'pokeballrecipe',
  'great-ball-recipe': 'greatballrecipe',
  clothing: 'craftingkit',
}

function url(slug) {
  const file = map[slug] ?? slug.replace(/-/g, '')
  return `${SEREBII_LA}/${file}.png`
}

const slugs = new Set()
for (const f of ['src/data/laMarkets.ts', 'src/data/laCrafts.ts']) {
  const src = fs.readFileSync(f, 'utf8')
  for (const m of src.matchAll(/(?:sprite|resultSprite):\s*'([^']+)'/g)) slugs.add(m[1])
  for (const m of src.matchAll(/item\(\s*'[^']*',\s*'[^']*',\s*\d+,\s*'([^']+)'/g))
    slugs.add(m[1])
}

const broken = []
for (const slug of [...slugs].sort()) {
  const u = url(slug)
  const r = await fetch(u, { method: 'HEAD' })
  if (!r.ok) broken.push({ slug, status: r.status, url: u })
}
console.log('checked', slugs.size, 'broken', broken.length)
if (broken.length) console.log(JSON.stringify(broken, null, 2))
