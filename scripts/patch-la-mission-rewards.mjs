/**
 * Patch LA mission rewards with real item lists + regenerate sprite-friendly text.
 * Also used as source of truth for request reward tables.
 *
 * Run: node scripts/patch-la-mission-rewards.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const missionsPath = path.join(__dirname, '../src/data/laMissions.ts')

/** @type {Record<number, { en: string; pt: string }>} */
const MAIN_REWARDS = {
  1: { en: '—', pt: '—' },
  2: { en: 'Survey Corps uniform', pt: 'Uniforme do Corpo de Pesquisa' },
  3: { en: 'Pokédex · Poké Ball recipe · ₽3,000', pt: 'Pokédex · Receita de Poké Ball · ₽3.000' },
  4: { en: 'Crafting Kit · Potion recipe', pt: 'Kit de craft · Receita de Poção' },
  5: { en: '—', pt: '—' },
  6: { en: '—', pt: '—' },
  7: { en: 'Mind Plate · Insect Plate', pt: 'Placa Mental · Placa Inseto' },
  8: { en: 'Earth Plate · Meadow Plate', pt: 'Placa Terra · Placa Prado' },
  9: { en: '—', pt: '—' },
  10: { en: 'Splash Plate · Flame Plate', pt: 'Placa Respingo · Placa Chama' },
  11: { en: 'Zap Plate · Icicle Plate', pt: 'Placa Choque · Placa Gelo' },
  12: { en: 'Iron Plate · Toxic Plate', pt: 'Placa Ferro · Placa Tóxica' },
  13: { en: '—', pt: '—' },
  14: { en: 'Pixie Plate', pt: 'Placa Fada' },
  15: { en: 'Dread Plate', pt: 'Placa Medo' },
  16: { en: 'Fist Plate', pt: 'Placa Punho' },
  17: { en: '—', pt: '—' },
  18: { en: 'Origin Ball', pt: 'Bola Origem' },
  19: { en: '—', pt: '—' },
  20: { en: '—', pt: '—' },
  21: { en: 'Sky Plate', pt: 'Placa Céu' },
  22: { en: 'Draco Plate', pt: 'Placa Draco' },
  23: { en: 'Spooky Plate', pt: 'Placa Assombro' },
  24: { en: 'Stone Plate', pt: 'Placa Pedra' },
  25: { en: 'Blank Plate', pt: 'Placa Branca' },
  26: { en: 'Legend Plate', pt: 'Placa Lenda' },
  27: { en: 'Arceus encounter', pt: 'Encontro com Arceus' },
}

/**
 * Request rewards from Pro Game Guides / IGN / Bulbapedia (base game 1–90).
 * Format: English parts separated by " · ", Portuguese parallel.
 * @type {Record<number, { en: string; pt: string }>}
 */
const SIDE_REWARDS = {
  1: { en: 'Dazzling Honey ×3', pt: 'Mel Deslumbrante ×3' },
  2: { en: 'Poké Ball ×10', pt: 'Poké Ball ×10' },
  3: { en: 'Potion ×3', pt: 'Poção ×3' },
  4: { en: 'Oran Berry ×5 · Exp. Candy S ×1', pt: 'Fruta Oran ×5 · Doce Exp. S ×1' },
  5: { en: 'Grit Dust ×3', pt: 'Pó de Determinação ×3' },
  6: { en: 'Mushroom Cake recipe', pt: 'Receita de Bolo de Cogumelo' },
  7: { en: 'Stardust ×1', pt: 'Poeira Estelar ×1' },
  8: { en: 'Rare Candy ×1', pt: 'Doce Raro ×1' },
  9: { en: 'Aux Power ×2', pt: 'Aux. Poder ×2' },
  10: { en: 'Exp. Candy S ×1', pt: 'Doce Exp. S ×1' },
  11: { en: 'Vivichoke ×3', pt: 'Vivichoke ×3' },
  12: { en: 'Honey Cake ×3 · Exp. Candy S ×1', pt: 'Bolo de Mel ×3 · Doce Exp. S ×1' },
  13: { en: 'Poké Ball ×15', pt: 'Poké Ball ×15' },
  14: { en: 'Revive ×3', pt: 'Reviver ×3' },
  15: { en: 'Rare Candy ×1 · Feather Ball ×15', pt: 'Doce Raro ×1 · Bola Pena ×15' },
  16: { en: 'Nanab Berry ×7', pt: 'Fruta Nanab ×7' },
  17: { en: 'Vivichoke ×5', pt: 'Vivichoke ×5' },
  18: { en: 'Pokéshi Doll ×1', pt: 'Boneco Pokéshi ×1' },
  19: { en: 'Razz Berry ×5', pt: 'Fruta Razz ×5' },
  20: { en: 'Exp. Candy S ×2', pt: 'Doce Exp. S ×2' },
  21: { en: 'Aux Guard ×2', pt: 'Aux. Guarda ×2' },
  22: { en: 'Twice-Spiced Radish ×1 · Spiritomb encounter', pt: 'Rabanete Bi temperado ×1 · Encontro com Spiritomb' },
  23: { en: 'New general store items', pt: 'Novos itens na loja geral' },
  24: { en: 'New clothing items', pt: 'Novas roupas' },
  25: { en: 'New photo studio options', pt: 'Novas opções no estúdio' },
  26: { en: 'Great Ball ×15 · Nugget ×1', pt: 'Great Ball ×15 · Pepita ×1' },
  27: { en: 'More farm fields', pt: 'Mais campos na fazenda' },
  28: { en: 'Rare Candy ×1', pt: 'Doce Raro ×1' },
  29: { en: 'Fine Remedy ×3 · Hopo Berry ×5', pt: 'Remédio Fino ×3 · Fruta Hopo ×5' },
  30: { en: 'Grain Cake ×5 · Exp. Candy S ×2', pt: 'Bolo de Grãos ×5 · Doce Exp. S ×2' },
  31: { en: 'Bogbound Camp', pt: 'Acampamento do Pântano' },
  32: { en: 'Max Revive ×1', pt: 'Reviver Máximo ×1' },
  33: { en: 'Candy Truffle ×5', pt: 'Trufa Doce ×5' },
  34: { en: 'Full Heal ×3 · Exp. Candy S ×3', pt: 'Cura Total ×3 · Doce Exp. S ×3' },
  35: { en: 'Sitrus Berry ×3 · Grit Gravel ×1', pt: 'Fruta Sitrus ×3 · Cascalho de Determinação ×1' },
  36: { en: 'Heavy Ball ×15 · Exp. Candy S ×1', pt: 'Heavy Ball ×15 · Doce Exp. S ×1' },
  37: { en: 'Smoke Bomb ×5 · Exp. Candy S ×2', pt: 'Bomba de Fumaça ×5 · Doce Exp. S ×2' },
  38: { en: 'Stardust ×3', pt: 'Poeira Estelar ×3' },
  39: { en: 'Rare Candy ×1', pt: 'Doce Raro ×1' },
  40: { en: 'Iron Chunk ×5 · Grit Gravel ×1', pt: 'Pedaço de Ferro ×5 · Cascalho de Determinação ×1' },
  41: { en: 'Aux Evasion ×2 · Grit Gravel ×2', pt: 'Aux. Evasão ×2 · Cascalho de Determinação ×2' },
  42: { en: 'More farm fields', pt: 'Mais campos na fazenda' },
  43: { en: 'New general store items', pt: 'Novos itens na loja geral' },
  44: { en: 'New photo studio options', pt: 'Novas opções no estúdio' },
  45: { en: 'New clothing items', pt: 'Novas roupas' },
  46: { en: 'Coastlands Camp', pt: 'Acampamento da Costa' },
  47: { en: 'Nugget ×1 · Ultra Ball ×10', pt: 'Pepita ×1 · Ultra Ball ×10' },
  48: { en: 'Exp. Candy S ×5 · Jubilife Muffin recipe', pt: 'Doce Exp. S ×5 · Receita de Muffin Jubilo' },
  49: { en: 'Scatter Bang ×5 · Exp. Candy M ×1', pt: 'Bang Explosiva ×5 · Doce Exp. M ×1' },
  50: { en: 'Star Piece ×1', pt: 'Pedacinho de Estrela ×1' },
  51: { en: 'Seed of Mastery ×1', pt: 'Semente de Domínio ×1' },
  52: { en: 'Rare Candy ×1 · Fire/Thunder/Water Stone ×1', pt: 'Doce Raro ×1 · Pedra Fogo/Trovão/Água ×1' },
  53: { en: 'Bean Cake ×5 · Exp. Candy M ×1', pt: 'Bolo de Feijão ×5 · Doce Exp. M ×1' },
  54: { en: 'Swap Snack recipe', pt: 'Receita de Lanche de Troca' },
  55: { en: 'Razz Berry ×5 · Hyper Potion ×3', pt: 'Fruta Razz ×5 · Hiperpoção ×3' },
  56: { en: 'Grit Gravel ×3 · Aux Powerguard ×1', pt: 'Cascalho de Determinação ×3 · Aux. Poderguarda ×1' },
  57: { en: "King's Leaf ×3 · Dazzling Honey ×3", pt: 'Folha do Rei ×3 · Mel Deslumbrante ×3' },
  58: { en: 'Star Piece ×1', pt: 'Pedacinho de Estrela ×1' },
  59: { en: 'New hairstyles', pt: 'Novos penteados' },
  60: { en: 'More farm fields', pt: 'Mais campos na fazenda' },
  61: { en: 'New general store items', pt: 'Novos itens na loja geral' },
  62: { en: 'New photo studio options', pt: 'Novas opções no estúdio' },
  63: { en: 'New clothing items', pt: 'Novas roupas' },
  64: { en: 'Linking Cord ×1', pt: 'Cordão de Ligação ×1' },
  65: { en: 'Mountain Camp', pt: 'Acampamento da Montanha' },
  66: { en: 'Comet Shard ×3', pt: 'Fragmento de Cometa ×3' },
  67: { en: 'Salt Cake ×5 · Exp. Candy M ×2', pt: 'Bolo de Sal ×5 · Doce Exp. M ×2' },
  68: { en: 'Black Augurite ×1 · Exp. Candy M ×2', pt: 'Augurita Negra ×1 · Doce Exp. M ×2' },
  69: { en: 'Star Piece ×2', pt: 'Pedacinho de Estrela ×2' },
  70: { en: 'New clothing items', pt: 'Novas roupas' },
  71: { en: 'New general store items', pt: 'Novos itens na loja geral' },
  72: { en: 'Adamant Mint ×1 · Modest Mint ×1', pt: 'Menta Adamant ×1 · Menta Modest ×1' },
  73: { en: 'Leaf Stone ×1 · Exp. Candy M ×3', pt: 'Pedra da Folha ×1 · Doce Exp. M ×3' },
  74: { en: 'Shiny Stone ×1 · Max Revive ×2', pt: 'Pedra Brilhante ×1 · Reviver Máximo ×2' },
  75: { en: 'New hairstyles', pt: 'Novos penteados' },
  76: { en: 'Sand Radish ×5 · Exp. Candy L ×1', pt: 'Rabanete da Areia ×5 · Doce Exp. L ×1' },
  77: { en: 'Star Piece ×3', pt: 'Pedacinho de Estrela ×3' },
  78: { en: 'Icepeak Camp', pt: 'Acampamento do Pico de Gelo' },
  79: { en: 'Nugget ×3', pt: 'Pepita ×3' },
  80: { en: 'Twice-Spiced Radish recipe', pt: 'Receita de Rabanete Bi temperado' },
  81: { en: 'Full Restore ×3 · Exp. Candy L ×1', pt: 'Restaurar Tudo ×3 · Doce Exp. L ×1' },
  82: { en: 'Dawn Stone ×1', pt: 'Pedra da Alvorada ×1' },
  83: { en: 'Exp. Candy L ×1', pt: 'Doce Exp. L ×1' },
  84: { en: 'Grit Pebble ×3', pt: 'Seixo de Determinação ×3' },
  85: { en: 'Rare Candy ×1 · Sun Stone ×1', pt: 'Doce Raro ×1 · Pedra do Sol ×1' },
  86: { en: 'Ice Stone ×1 · Star Piece ×5 · Peat Block ×1', pt: 'Pedra do Gelo ×1 · Pedacinho de Estrela ×5 · Bloco de Turfa ×1' },
  87: { en: 'Sticky Glob ×5 · Rare Candy ×1', pt: 'Globo Pegajoso ×5 · Doce Raro ×1' },
  88: { en: 'Grit Rock ×1', pt: 'Rocha de Determinação ×1' },
  89: { en: 'Adamant Crystal · Comet Shard ×3', pt: 'Cristal Adamant · Fragmento de Cometa ×3' },
  90: { en: 'Lustrous Globe · Comet Shard ×3', pt: 'Orbe Lustroso · Fragmento de Cometa ×3' },
  91: { en: 'Griseous Core ×1 · Grit Rock ×1', pt: 'Núcleo Griseous ×1 · Rocha de Determinação ×1' },
  92: { en: 'Grit Rock ×1', pt: 'Rocha de Determinação ×1' },
  93: { en: 'Exp. Candy XL ×1', pt: 'Doce Exp. XL ×1' },
  94: { en: 'Exp. Candy L ×4', pt: 'Doce Exp. L ×4' },
  95: { en: 'Ultra Ball ×30 · Apricorn ×60 · Tumblestone ×60', pt: 'Ultra Ball ×30 · Apricorn ×60 · Pedra Rolante ×60' },
  96: { en: 'Tumblestone ×30 · Iron Chunk ×40 · Smoke Bomb ×20', pt: 'Pedra Rolante ×30 · Pedaço de Ferro ×40 · Bomba de Fumaça ×20' },
  97: { en: 'Aguav Berry ×15 · Apricorn ×20 · Black Tumblestone ×30 · Iron Chunk ×3', pt: 'Fruta Aguav ×15 · Apricorn ×20 · Pedra Rolante Preta ×30 · Pedaço de Ferro ×3' },
  98: { en: 'Sticky Glob ×30 · Tumblestone ×30 · Sky Tumblestone ×30 · Iron Chunk ×30', pt: 'Globo Pegajoso ×30 · Pedra Rolante ×30 · Pedra Rolante do Céu ×30 · Pedaço de Ferro ×30' },
  99: { en: 'Star Piece ×3 · Iron Chunk ×30 · Aguav Berry ×30', pt: 'Pedacinho de Estrela ×3 · Pedaço de Ferro ×30 · Fruta Aguav ×30' },
  100: { en: 'Apricorn ×30 · Tumblestone ×30 · Ball of Mud ×20', pt: 'Apricorn ×30 · Pedra Rolante ×30 · Bola de Lama ×20' },
  101: { en: 'Iron Chunk ×30 · Caster Fern ×20 · Ball of Mud ×20', pt: 'Pedaço de Ferro ×30 · Samambaia Fundidora ×20 · Bola de Lama ×20' },
  102: { en: 'Dawn Stone ×1 · Seed of Mastery ×1 · Exp. Candy XL ×3', pt: 'Pedra da Alvorada ×1 · Semente de Domínio ×1 · Doce Exp. XL ×3' },
  103: { en: 'Iron Chunk ×20 · Grit Rock ×1', pt: 'Pedaço de Ferro ×20 · Rocha de Determinação ×1' },
  104: { en: 'Grit Rock ×3 · Unlock Ress', pt: 'Rocha de Determinação ×3 · Desbloqueia Ress' },
  105: { en: 'Nugget ×5', pt: 'Pepita ×5' },
  106: { en: 'Exp. Candy XL ×1 · Leaf Stone ×1', pt: 'Doce Exp. XL ×1 · Pedra da Folha ×1' },
  107: { en: 'Exp. Candy XL ×1 · Ice Stone ×1', pt: 'Doce Exp. XL ×1 · Pedra do Gelo ×1' },
  108: { en: 'Seed of Mastery ×1 · Exp. Candy L ×3', pt: 'Semente de Domínio ×1 · Doce Exp. L ×3' },
  109: { en: 'Seed of Mastery ×1 · Exp. Candy S ×10', pt: 'Semente de Domínio ×1 · Doce Exp. S ×10' },
  110: { en: 'Seed of Mastery ×1 · Exp. Candy M ×3', pt: 'Semente de Domínio ×1 · Doce Exp. M ×3' },
  111: { en: 'Seed of Mastery ×1 · Exp. Candy L ×3', pt: 'Semente de Domínio ×1 · Doce Exp. L ×3' },
  112: { en: 'Seed of Mastery ×1 · Exp. Candy L ×3', pt: 'Semente de Domínio ×1 · Doce Exp. L ×3' },
  113: { en: 'Seed of Mastery ×1 · Exp. Candy L ×3', pt: 'Semente de Domínio ×1 · Doce Exp. L ×3' },
  114: { en: 'Seed of Mastery ×1 · Exp. Candy L ×3', pt: 'Semente de Domínio ×1 · Doce Exp. L ×3' },
  115: { en: 'Seed of Mastery ×1 · Exp. Candy L ×3', pt: 'Semente de Domínio ×1 · Doce Exp. L ×3' },
  116: { en: 'Seed of Mastery ×1 · Exp. Candy L ×3', pt: 'Semente de Domínio ×1 · Doce Exp. L ×3' },
  117: { en: 'Seed of Mastery ×1 · Exp. Candy L ×3', pt: 'Semente de Domínio ×1 · Doce Exp. L ×3' },
  118: { en: 'Seed of Mastery ×1 · Exp. Candy L ×3', pt: 'Semente de Domínio ×1 · Doce Exp. L ×3' },
  119: { en: 'Seed of Mastery ×1 · Exp. Candy L ×3', pt: 'Semente de Domínio ×1 · Doce Exp. L ×3' },
  120: { en: 'Seed of Mastery ×1 · Exp. Candy L ×3', pt: 'Semente de Domínio ×1 · Doce Exp. L ×3' },
  121: { en: 'Seed of Mastery ×1 · Exp. Candy L ×3', pt: 'Semente de Domínio ×1 · Doce Exp. L ×3' },
  122: { en: 'Seed of Mastery ×1 · Exp. Candy L ×3', pt: 'Semente de Domínio ×1 · Doce Exp. L ×3' },
}

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

let src = fs.readFileSync(missionsPath, 'utf8')

function replaceRewards(kind, num, reward) {
  const id = `${kind}-${num}`
  const re = new RegExp(
    `(id: '${id}',[\\s\\S]*?rewards: \\{ en: ')[^']*(', pt: ')[^']*(' \\})`,
  )
  if (!re.test(src)) {
    // Insert rewards if missing (after unlock line)
    const insertRe = new RegExp(
      `(id: '${id}',[\\s\\S]*?unlock: \\{ en: '[^']*', pt: '[^']*' \\},)\\n`,
    )
    if (!insertRe.test(src)) {
      console.warn('skip missing', id)
      return false
    }
    src = src.replace(
      insertRe,
      `$1\n    rewards: { en: '${esc(reward.en)}', pt: '${esc(reward.pt)}' },\n`,
    )
    return true
  }
  src = src.replace(re, `$1${esc(reward.en)}$2${esc(reward.pt)}$3`)
  return true
}

let n = 0
for (const [num, reward] of Object.entries(MAIN_REWARDS)) {
  if (replaceRewards('main', Number(num), reward)) n++
}
for (const [num, reward] of Object.entries(SIDE_REWARDS)) {
  if (replaceRewards('side', Number(num), reward)) n++
}

fs.writeFileSync(missionsPath, src)
console.log('Patched rewards for', n, 'missions')
