/**
 * Legends: Arceus (Hisui) item sprites — Serebii PLA set, not standard PokeAPI icons.
 */
const SEREBII_LA =
  'https://www.serebii.net/itemdex/sprites/legends'

/**
 * App slug → Serebii legends filename (without .png).
 * Prefer PLA-accurate icons over national-dex stand-ins.
 */
const LA_SPRITE_FILES: Record<string, string> = {
  // Balls
  'poke-ball': 'pokeball',
  'great-ball': 'greatball',
  'ultra-ball': 'ultraball',
  'heavy-ball': 'heavyball',
  'leaden-ball': 'leadenball',
  'feather-ball': 'featherball',
  'wing-ball': 'wingball',
  'gigaton-ball': 'gigatonball',
  'jet-ball': 'jetball',
  'origin-ball': 'originball',

  // Medicines
  potion: 'potion',
  'super-potion': 'superpotion',
  'hyper-potion': 'hyperpotion',
  'max-potion': 'maxpotion',
  'full-heal': 'fullheal',
  'full-restore': 'fullrestore',
  revive: 'revive',
  'max-revive': 'maxrevive',
  remedy: 'remedy',
  'fine-remedy': 'fineremedy',
  'superb-remedy': 'superbremedy',
  'max-ether': 'maxether',

  // Field tools
  'smoke-bomb': 'smokebomb',
  'smoke-ball': 'smokebomb',
  'scatter-bang': 'scatterbang',
  'fluffy-tail': 'scatterbang',
  'stealth-spray': 'stealthspray',
  repel: 'stealthspray',
  'sticky-glob': 'stickyglob',
  'sticky-barb': 'stickyglob',

  // Cakes
  'cake-lure-base': 'hopoberry',
  'mushroom-cake': 'mushroomcake',
  'honey-cake': 'honeycake',
  'grain-cake': 'graincake',
  'bean-cake': 'beancake',
  'salt-cake': 'saltcake',
  'sweet-heart': 'dazzlinghoney',

  // Materials
  apricorn: 'apricorn',
  'green-apricorn': 'apricorn',
  tumblestone: 'tumblestone',
  'black-tumblestone': 'blacktumblestone',
  'sky-tumblestone': 'skytumblestone',
  'hard-stone': 'tumblestone',
  'iron-chunk': 'ironchunk',
  'iron-ball': 'ironchunk',
  'caster-fern': 'casterfern',
  'miracle-seed': 'casterfern',
  bugwort: 'bugwort',
  'medicinal-leek': 'medicinalleek',
  'energy-root': 'medicinalleek',
  vivichoke: 'vivichoke',
  'revival-herb': 'vivichoke',
  'sootfoot-root': 'sootfootroot',
  'pop-pod': 'poppod',
  'sea-incense': 'poppod',
  swordcap: 'swordcap',
  'big-mushroom': 'swordcap',
  'dazzling-honey': 'dazzlinghoney',
  wood: 'wood',
  'sand-radish': 'sandradish',
  'ball-of-mud': 'ballofmud',
  'spoiled-apricot': 'spoiledapricorn',
  'springy-mushroom': 'springymushroom',
  'hearty-grains': 'heartygrains',
  'plump-beans': 'plumpbeans',
  'crunchy-salt': 'crunchysalt',
  'pep-up-plant': 'medicinalleek',
  'kings-leaf': 'vivichoke',
  'iron-barktongue': 'ironbarktongue',
  direshroom: 'direshroom',
  'doppel-bonnets': 'doppelbonnets',
  'candy-truffle': 'candytruffle',
  'red-shard': 'redshard',
  'blue-shard': 'blueshard',
  'green-shard': 'greenshard',

  // Berries
  'oran-berry': 'oranberry',
  'cheri-berry': 'cheriberry',
  'chesto-berry': 'chestoberry',
  'pecha-berry': 'pechaberry',
  'rawst-berry': 'rawstberry',
  'nanab-berry': 'nanabberry',
  'leppa-berry': 'leppaberry',
  'sitrus-berry': 'sitrusberry',
  'hopo-berry': 'hopoberry',

  // Aux / battle
  'aux-power': 'auxpower',
  'x-attack': 'auxpower',
  'aux-guard': 'auxguard',
  'x-defense': 'auxguard',
  'aux-evasion': 'auxevasion',
  'dire-hit': 'direhit',
  'aux-powerguard': 'auxpowerguard',

  // Extra medicines / food
  'old-gateau': 'oldgateau',
  'max-elixir': 'maxelixir',
  'twice-spiced-radish': 'sandradish',
  'aspear-berry': 'aspearberry',

  // Misc / shop
  'crafting-kit': 'craftingkit',
  'poke-ball-recipe': 'pokeballrecipe',
  'great-ball-recipe': 'greatballrecipe',
  'lost-satchel': 'lostsatchel',
  'jubilife-muffin': 'jubilifemuffin',
  'choice-dumpling': 'choicedumpling',
  'swap-snack': 'swapsnack',
  /** Clothing stand-in — no dedicated Serebii clothing icon */
  'oval-charm': 'craftingkit',
  clothing: 'craftingkit',

  // Valuables / candies / grit (mission rewards)
  stardust: 'stardust',
  'star-piece': 'starpiece',
  nugget: 'nugget',
  'comet-shard': 'cometshard',
  'rare-candy': 'rarecandy',
  /** Serebii Legends set has no dedicated Exp. Candy icons — use Rare Candy */
  'exp-candy-s': 'rarecandy',
  'exp-candy-m': 'rarecandy',
  'exp-candy-l': 'rarecandy',
  'exp-candy-xl': 'rarecandy',
  'grit-dust': 'gritdust',
  'grit-gravel': 'gritgravel',
  'grit-pebble': 'gritpebble',
  'grit-rock': 'gritrock',
  'razz-berry': 'razzberry',
  'pokeshi-doll': 'pokeshidoll',
  'peat-block': 'peatblock',
  'black-augurite': 'blackaugurite',
  'linking-cord': 'linkingcord',
  'seed-of-mastery': 'seedofmastery',
  'odd-keystone': 'oddkeystone',
  'adamant-mint': 'adamantmint',
  'modest-mint': 'modestmint',
  'adamant-crystal': 'adamantcrystal',
  'lustrous-globe': 'lustrousglobe',
  pokedex: 'pokedex',

  // Evolution stones
  'fire-stone': 'firestone',
  'thunder-stone': 'thunderstone',
  'water-stone': 'waterstone',
  'leaf-stone': 'leafstone',
  'moon-stone': 'moonstone',
  'sun-stone': 'sunstone',
  'shiny-stone': 'shinystone',
  'dusk-stone': 'duskstone',
  'dawn-stone': 'dawnstone',
  'ice-stone': 'icestone',
  'oval-stone': 'ovalstone',
  'metal-coat': 'metalcoat',
  protector: 'protector',
  electirizer: 'electirizer',
  magmarizer: 'magmarizer',
  'reaper-cloth': 'reapercloth',
  'dubious-disc': 'dubiousdisc',
  upgrade: 'upgrade',
  'razor-claw': 'razorclaw',
  'razor-fang': 'razorfang',

  // Plates
  'mind-plate': 'mindplate',
  'insect-plate': 'insectplate',
  'earth-plate': 'earthplate',
  'meadow-plate': 'meadowplate',
  'splash-plate': 'splashplate',
  'flame-plate': 'flameplate',
  'zap-plate': 'zapplate',
  'icicle-plate': 'icicleplate',
  'iron-plate': 'ironplate',
  'toxic-plate': 'toxicplate',
  'pixie-plate': 'pixieplate',
  'dread-plate': 'dreadplate',
  'fist-plate': 'fistplate',
  'sky-plate': 'skyplate',
  'draco-plate': 'dracoplate',
  'spooky-plate': 'spookyplate',
  'stone-plate': 'stoneplate',
  'blank-plate': 'blankplate',
  'legend-plate': 'legendplate',
  'aguav-berry': 'aguavberry',
  'griseous-core': 'griseouscore',
}

/** Resolve a Hisui/PLA item sprite URL from an app slug. */
export function laItemSpriteUrl(sprite: string) {
  if (sprite.startsWith('http://') || sprite.startsWith('https://')) return sprite
  const file = LA_SPRITE_FILES[sprite] ?? sprite.replace(/-/g, '')
  return `${SEREBII_LA}/${file}.png`
}
