/** Sprite URL helpers for Legends: Z-A items (Serebii ZA + PokeAPI fallbacks). */

const POKEAPI_ITEM =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items'
const SEREBII_ITEM = 'https://www.serebii.net/itemdex/sprites'
const SEREBII_ZA = 'https://www.serebii.net/itemdex/sprites/za/th'

/**
 * Our slug → Serebii ZA `/itemdex/sprites/za/th/{file}.png` filename.
 * Apostrophes / Lv. suffixes differ from hyphenated PokeAPI-style slugs.
 */
const ZA_SPRITE_FILE: Record<string, string> = {
  'lidas-things': "lida'sthings",
  'epice-noire': 'epicenoire',
  // Dirty Scarf asset is linked on Serebii but currently 404; silk scarf is the closest ZA scarf icon.
  'dirty-scarf': 'silkscarf',
  'red-canari-plush': 'redcanariplushlv.1',
  'gold-canari-plush': 'goldcanariplushlv.1',
  'pink-canari-plush': 'pinkcanariplushlv.1',
  'green-canari-plush': 'greencanariplushlv.1',
  'blue-canari-plush': 'bluecanariplushlv.1',
  'autographed-plush': 'autographedplush',
  'cherished-ring': 'cherishedring',
  'tasty-trash': 'tastytrash',
  'revitalizing-twig': 'revitalizingtwig',
  'important-letter': 'importantletter',
  'popping-candy': 'poppingcandy',
  'hoennian-salt': 'hoenniansalt',
  'arboliva-oil': 'arbolivaoil',
  'lumiosian-butter': 'lumiosianbutter',
  'nice-butter': 'nicebutter',
  'great-butter': 'greatbutter',
  'amazing-butter': 'amazingbutter',
  'supreme-butter': 'supremebutter',
  'hyperspace-butter': 'hyperspacebutter',
  'canari-bread': 'canaribread',
  'mega-shard': 'megashard',
  'colorful-screw': 'colorfulscrew',
  'seed-of-mastery': 'seedofmastery',
  'key-to-room-202': 'keytoroom202',
  'super-lumiose-galette': 'superlumiosegalette',
  'lab-key-card-a': 'labkeycarda',
  'lab-key-card-b': 'labkeycardb',
  'lab-key-card-c': 'labkeycardc',
  // M/X cards aren't uploaded yet — reuse card A art rather than a Poké Ball.
  'lab-key-card-m': 'labkeycarda',
  'lab-key-card-x': 'labkeycarda',
  pebble: 'pebble',
  'garchompite-z': 'garchompitez',
  'lucarionite-z': 'lucarionitez',
  'absolite-z': 'absolitez',
  'raichunite-x': 'raichunitex',
  'raichunite-y': 'raichunitey',
}

/** Optional absolute URL fallbacks (Bulbagarden) when Serebii ZA is missing. */
const SPRITE_URL_FALLBACKS: Record<string, string[]> = {
  'lidas-things': [
    'https://archives.bulbagarden.net/media/upload/3/32/Bag_Lida%27s_Things_ZA_Sprite.png',
  ],
  'epice-noire': [
    'https://archives.bulbagarden.net/media/upload/d/dd/Bag_%C3%89pice_Noire_ZA_Sprite.png',
  ],
  'red-canari-plush': [
    'https://archives.bulbagarden.net/media/upload/7/7c/Bag_Red_Canari_Plush_Lv._1_ZA_Sprite.png',
  ],
  'gold-canari-plush': [
    'https://archives.bulbagarden.net/media/upload/8/87/Bag_Gold_Canari_Plush_Lv._1_ZA_Sprite.png',
  ],
  'pink-canari-plush': [
    'https://archives.bulbagarden.net/media/upload/2/2b/Bag_Pink_Canari_Plush_Lv._1_ZA_Sprite.png',
  ],
  'green-canari-plush': [
    'https://archives.bulbagarden.net/media/upload/a/ab/Bag_Green_Canari_Plush_Lv._1_ZA_Sprite.png',
  ],
  'blue-canari-plush': [
    'https://archives.bulbagarden.net/media/upload/a/a6/Bag_Blue_Canari_Plush_Lv._1_ZA_Sprite.png',
  ],
  'dirty-scarf': [
    'https://archives.bulbagarden.net/media/upload/0/01/Bag_Silk_Scarf_ZA_Sprite.png',
  ],
}

/**
 * Ordered candidates: Serebii ZA exclusives, PokeAPI, classic Serebii, then Poké Ball.
 */
export function lzaItemSpriteCandidates(sprite: string): string[] {
  const compact = sprite.replace(/-/g, '')
  const zaFile = ZA_SPRITE_FILE[sprite] ?? compact
  const out: string[] = []
  const push = (url: string) => {
    if (!out.includes(url)) out.push(url)
  }

  // Legends: Z-A exclusive bag sprites live under /itemdex/sprites/za/th/
  push(`${SEREBII_ZA}/${zaFile}.png`)
  if (zaFile !== compact) push(`${SEREBII_ZA}/${compact}.png`)
  if (/canariplush$/i.test(compact)) {
    push(`${SEREBII_ZA}/${compact}lv.1.png`)
  }

  for (const url of SPRITE_URL_FALLBACKS[sprite] ?? []) push(url)

  // Z-A TMs / mega stones also resolve well on classic Serebii compact names.
  if (/^tm\d+$/i.test(sprite) || /ite$/i.test(compact)) {
    push(`${SEREBII_ITEM}/${compact}.png`)
  }

  push(`${POKEAPI_ITEM}/${sprite}.png`)
  push(`${SEREBII_ITEM}/${compact}.png`)
  if (compact !== sprite) push(`${SEREBII_ITEM}/${sprite}.png`)
  push(`${POKEAPI_ITEM}/poke-ball.png`)
  return out
}

export function lzaItemSpriteUrl(sprite: string) {
  return lzaItemSpriteCandidates(sprite)[0]
}
