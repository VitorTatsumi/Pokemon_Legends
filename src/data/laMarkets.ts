import { laItemSpriteUrl } from './laItemSprites'

export type Localized = { en: string; pt: string }

export type LaMarketKind =
  | 'general'
  | 'materials'
  | 'berries'
  | 'craft'
  | 'clothing'
  | 'special'
  | 'trading'

export type LaMarketItem = {
  name: Localized
  price: number
  /** Hisui/PLA item sprite slug (see laItemSprites.ts) */
  sprite: string
  description?: Localized
  note?: Localized
  currency?: 'pokedollars' | 'merit'
}

export type LaMarket = {
  id: number
  name: Localized
  kind: LaMarketKind
  description: Localized
  location: Localized
  items: LaMarketItem[]
  /** Percent coordinates on /jubilife-village-map.png */
  map: { x: number; y: number }
}

export function laMarketItemSpriteUrl(sprite: string) {
  return laItemSpriteUrl(sprite)
}

function item(
  en: string,
  pt: string,
  price: number,
  sprite: string,
  description?: Localized,
  note?: Localized,
  currency?: 'pokedollars' | 'merit',
): LaMarketItem {
  return {
    name: { en, pt },
    price,
    sprite,
    description,
    note,
    currency,
  }
}

const afterKleavor: Localized = {
  en: 'After defeating Kleavor',
  pt: 'Após derrotar Kleavor',
}

const req23: Localized = {
  en: 'Unlock: Request 23',
  pt: 'Desbloqueio: Pedido 23',
}
const req43: Localized = {
  en: 'Unlock: Request 43',
  pt: 'Desbloqueio: Pedido 43',
}
const req61: Localized = {
  en: 'Unlock: Request 61',
  pt: 'Desbloqueio: Pedido 61',
}
const req71: Localized = {
  en: 'Unlock: Request 71',
  pt: 'Desbloqueio: Pedido 71',
}

/**
 * Jubilife Village shops for Legends: Arceus.
 * Coords aligned to jubilife-village-map.png subregion markers.
 * Inventories from Game8 / frontiernav / IGN guides.
 */
export const LA_MARKETS: LaMarket[] = [
  {
    id: 1,
    name: { en: "Choy's General Store", pt: 'Loja Geral do Choy' },
    kind: 'general',
    description: {
      en: 'Poké Balls, medicines, and field tools. Stock expands with Choy’s requests. Base camps sell the same goods.',
      pt: 'Poké Balls, remédios e ferramentas de campo. O estoque cresce com os pedidos do Choy. Acampamentos vendem os mesmos itens.',
    },
    location: {
      en: 'Jubilife Village — central plaza (also every base camp)',
      pt: 'Vila Jubilo — praça central (também em todo acampamento)',
    },
    map: { x: 61.5, y: 23.0 },
    items: [
      item(
        'Poké Ball',
        'Poké Ball',
        100,
        'poke-ball',
        {
          en: 'A ball for catching wild Pokémon. Can also be crafted.',
          pt: 'Bola para capturar Pokémon selvagens. Também pode ser craftada.',
        },
      ),
      item(
        'Heavy Ball',
        'Heavy Ball',
        120,
        'heavy-ball',
        {
          en: 'Heavy and short-range, but strong against unaware Pokémon.',
          pt: 'Pesada e de curto alcance, mas forte contra Pokémon desatentos.',
        },
        req23,
      ),
      item(
        'Feather Ball',
        'Feather Ball',
        140,
        'feather-ball',
        {
          en: 'Flies fast and true — ideal for nimble or flying Pokémon.',
          pt: 'Voa rápido e precisa — ideal para Pokémon ágeis ou voadores.',
        },
        req23,
      ),
      item(
        'Great Ball',
        'Great Ball',
        300,
        'great-ball',
        {
          en: 'Higher catch rate than a Poké Ball.',
          pt: 'Taxa de captura maior que a Poké Ball.',
        },
        req43,
      ),
      item(
        'Leaden Ball',
        'Leaden Ball',
        320,
        'leaden-ball',
        {
          en: 'Improved Heavy Ball design.',
          pt: 'Versão melhorada da Heavy Ball.',
        },
        req61,
      ),
      item(
        'Wing Ball',
        'Wing Ball',
        340,
        'wing-ball',
        {
          en: 'Improved Feather Ball design.',
          pt: 'Versão melhorada da Feather Ball.',
        },
        req61,
      ),
      item(
        'Ultra Ball',
        'Ultra Ball',
        600,
        'ultra-ball',
        {
          en: 'Even higher catch rate than a Great Ball.',
          pt: 'Taxa de captura ainda maior que a Great Ball.',
        },
        req71,
      ),
      item(
        'Potion',
        'Poção',
        200,
        'potion',
        {
          en: 'Restores 60 HP to a Pokémon.',
          pt: 'Restaura 60 de HP de um Pokémon.',
        },
      ),
      item(
        'Super Potion',
        'Super Poção',
        400,
        'super-potion',
        {
          en: 'Restores 100 HP to a Pokémon.',
          pt: 'Restaura 100 de HP de um Pokémon.',
        },
        req23,
      ),
      item(
        'Hyper Potion',
        'Hiper Poção',
        800,
        'hyper-potion',
        {
          en: 'Restores 150 HP to a Pokémon.',
          pt: 'Restaura 150 de HP de um Pokémon.',
        },
        req43,
      ),
      item(
        'Max Potion',
        'Poção Máxima',
        2000,
        'max-potion',
        {
          en: 'Fully restores a Pokémon’s HP.',
          pt: 'Restaura totalmente o HP de um Pokémon.',
        },
        req61,
      ),
      item(
        'Full Heal',
        'Cura Total',
        600,
        'full-heal',
        {
          en: 'Cures all status conditions.',
          pt: 'Cura todas as condições de status.',
        },
        req43,
      ),
      item(
        'Full Restore',
        'Restaurar Tudo',
        2500,
        'full-restore',
        {
          en: 'Fully restores HP and cures status conditions.',
          pt: 'Restaura o HP por completo e cura status.',
        },
        req71,
      ),
      item(
        'Revive',
        'Revive',
        700,
        'revive',
        {
          en: 'Revives a fainted Pokémon with half HP.',
          pt: 'Revive um Pokémon desmaiado com metade do HP.',
        },
      ),
      item(
        'Max Revive',
        'Revive Máximo',
        3000,
        'max-revive',
        {
          en: 'Revives a fainted Pokémon with full HP.',
          pt: 'Revive um Pokémon desmaiado com HP cheio.',
        },
        req71,
      ),
      item(
        'Cake-Lure Base',
        'Base de Bolo Isca',
        100,
        'cake-lure-base',
        {
          en: 'Base ingredient for lure cakes.',
          pt: 'Ingrediente base para bolos isca.',
        },
      ),
      item(
        'Mushroom Cake',
        'Bolo de Cogumelo',
        400,
        'mushroom-cake',
        {
          en: 'Attracts monstrous and Dragon-type Pokémon.',
          pt: 'Atrai Pokémon monstruosos e do tipo Dragão.',
        },
        req23,
      ),
      item(
        'Honey Cake',
        'Bolo de Mel',
        400,
        'honey-cake',
        {
          en: 'Attracts Bug- and Fairy-like Pokémon.',
          pt: 'Atrai Pokémon Inseto e com traços de Fada.',
        },
        req23,
      ),
      item(
        'Grain Cake',
        'Bolo de Grãos',
        400,
        'grain-cake',
        {
          en: 'Attracts Pokémon that roam the fields.',
          pt: 'Atrai Pokémon que vagueiam pelos campos.',
        },
        req43,
      ),
      item(
        'Bean Cake',
        'Bolo de Feijão',
        400,
        'bean-cake',
        {
          en: 'Attracts fish and bird Pokémon.',
          pt: 'Atrai Pokémon peixe e pássaros.',
        },
        req61,
      ),
      item(
        'Salt Cake',
        'Bolo de Sal',
        400,
        'salt-cake',
        {
          en: 'Attracts plant- and mineral-like Pokémon.',
          pt: 'Atrai Pokémon com traços de planta ou mineral.',
        },
        req71,
      ),
      item(
        'Smoke Bomb',
        'Bomba de Fumaça',
        400,
        'smoke-bomb',
        {
          en: 'Creates cover so wild Pokémon notice you less.',
          pt: 'Cria cobertura para Pokémon selvagens te notarem menos.',
        },
        req23,
      ),
      item(
        'Scatter Bang',
        'Bang Espalha',
        500,
        'scatter-bang',
        {
          en: 'Scares off weaker Pokémon in the area.',
          pt: 'Afasta Pokémon mais fracos da área.',
        },
        req43,
      ),
      item(
        'Stealth Spray',
        'Spray Furtivo',
        800,
        'stealth-spray',
        {
          en: 'Muffles footsteps so Pokémon notice you less.',
          pt: 'Abafa passos para Pokémon te notarem menos.',
        },
        req43,
      ),
      item(
        'Sticky Glob',
        'Globo Pegajoso',
        800,
        'sticky-glob',
        {
          en: 'May stun a Pokémon on hit.',
          pt: 'Pode atordoar um Pokémon ao acertar.',
        },
        req71,
      ),
    ],
  },
  {
    id: 2,
    name: { en: 'Ginkgo Guild (Tuli)', pt: 'Guilda Ginkgo (Tuli)' },
    kind: 'berries',
    description: {
      en: 'Tuli sells crafting materials and Berries after you quell Kleavor.',
      pt: 'Tuli vende materiais de craft e Berries após acalmar Kleavor.',
    },
    location: {
      en: 'Jubilife Village — near the General Store',
      pt: 'Vila Jubilo — perto da Loja Geral',
    },
    map: { x: 59.5, y: 23.0 },
    items: [
      item(
        'Medicinal Leek',
        'Alho-poró Medicinal',
        120,
        'medicinal-leek',
        {
          en: 'Material for crafting medicines.',
          pt: 'Material para craftar remédios.',
        },
        afterKleavor,
      ),
      item(
        'Bugwort',
        'Erva Amarga',
        180,
        'bugwort',
        {
          en: 'Bitter wildflower used in crafting.',
          pt: 'Flor amarga usada em craft.',
        },
        afterKleavor,
      ),
      item(
        'Swordcap',
        'Chapéu-Espada',
        240,
        'swordcap',
        {
          en: 'Material for Aux Powers.',
          pt: 'Material para Aux Powers.',
        },
        afterKleavor,
      ),
      item(
        'Iron Barktongue',
        'Língua-Casca de Ferro',
        240,
        'wood',
        {
          en: 'Material for Aux Guards.',
          pt: 'Material para Aux Guards.',
        },
        afterKleavor,
      ),
      item(
        'Vivichoke',
        'Vivichoke',
        400,
        'vivichoke',
        {
          en: 'Material for revival items.',
          pt: 'Material para itens de revival.',
        },
        afterKleavor,
      ),
      item(
        'Oran Berry',
        'Berry Oran',
        80,
        'oran-berry',
        {
          en: 'Restores 20 HP. Can be thrown to lure Pokémon.',
          pt: 'Restaura 20 de HP. Pode ser jogada para atrair Pokémon.',
        },
        afterKleavor,
      ),
      item(
        'Cheri Berry',
        'Berry Cheri',
        120,
        'cheri-berry',
        {
          en: 'Cures paralysis.',
          pt: 'Cura paralisia.',
        },
        afterKleavor,
      ),
      item(
        'Chesto Berry',
        'Berry Chesto',
        120,
        'chesto-berry',
        {
          en: 'Cures drowsiness / sleep.',
          pt: 'Cura sonolência / sono.',
        },
        afterKleavor,
      ),
      item(
        'Pecha Berry',
        'Berry Pecha',
        120,
        'pecha-berry',
        {
          en: 'Cures poison.',
          pt: 'Cura envenenamento.',
        },
        afterKleavor,
      ),
      item(
        'Rawst Berry',
        'Berry Rawst',
        120,
        'rawst-berry',
        {
          en: 'Cures burn.',
          pt: 'Cura queimadura.',
        },
        afterKleavor,
      ),
      item(
        'Nanab Berry',
        'Berry Nanab',
        200,
        'nanab-berry',
        {
          en: 'Restores HP and calms wild Pokémon.',
          pt: 'Restaura HP e acalma Pokémon selvagens.',
        },
        afterKleavor,
      ),
      item(
        'Hopo Berry',
        'Berry Hopo',
        300,
        'leppa-berry',
        {
          en: 'Restores PP; dulls wild Pokémon reactions.',
          pt: 'Restaura PP; reduz reações de Pokémon selvagens.',
        },
        afterKleavor,
      ),
      item(
        'Sitrus Berry',
        'Berry Sitrus',
        800,
        'sitrus-berry',
        {
          en: 'Restores up to half of max HP.',
          pt: 'Restaura até metade do HP máximo.',
        },
        afterKleavor,
      ),
    ],
  },
  {
    id: 3,
    name: { en: 'Craftworks (Anvin)', pt: 'Oficina (Anvin)' },
    kind: 'craft',
    description: {
      en: 'Anvin sells crafting materials and recipes. Use the workbench outside to craft.',
      pt: 'Anvin vende materiais e receitas de craft. Use a bancada do lado de fora.',
    },
    location: {
      en: 'Jubilife Village — Craftworks',
      pt: 'Vila Jubilo — Oficina',
    },
    map: { x: 42.0, y: 23.0 },
    items: [
      item(
        'Apricorn',
        'Bolota',
        40,
        'apricorn',
        {
          en: 'Shell used to craft Poké Balls.',
          pt: 'Casca usada para craftar Poké Balls.',
        },
      ),
      item(
        'Tumblestone',
        'Pedra Rolante',
        60,
        'tumblestone',
        {
          en: 'Ore used when crafting balls.',
          pt: 'Minério usado no craft de bolas.',
        },
      ),
      item(
        'Black Tumblestone',
        'Pedra Rolante Preta',
        80,
        'black-tumblestone',
        {
          en: 'Dark ore for Heavy Ball crafting.',
          pt: 'Minério escuro para craft de Heavy Ball.',
        },
      ),
      item(
        'Sky Tumblestone',
        'Pedra Rolante Celeste',
        100,
        'sky-tumblestone',
        {
          en: 'Sky-blue ore for Feather Ball crafting.',
          pt: 'Minério celeste para craft de Feather Ball.',
        },
      ),
      item(
        'Caster Fern',
        'Samambaia Caster',
        140,
        'caster-fern',
        {
          en: 'Fern used in several field recipes.',
          pt: 'Samambaia usada em várias receitas de campo.',
        },
      ),
      item(
        'Iron Chunk',
        'Pedaço de Ferro',
        200,
        'iron-chunk',
        {
          en: 'Iron ore for durable crafted goods.',
          pt: 'Minério de ferro para itens resistentes.',
        },
      ),
      item(
        'Sootfoot Root',
        'Raiz Sootfoot',
        300,
        'sootfoot-root',
        {
          en: 'Root used in smoke-related crafts.',
          pt: 'Raiz usada em crafts ligados a fumaça.',
        },
      ),
      item(
        'Pop Pod',
        'Pod Pop',
        400,
        'pop-pod',
        {
          en: 'Sea vegetable used in Scatter Bang recipes.',
          pt: 'Vegetal marinho usado em receitas de Scatter Bang.',
        },
      ),
      item(
        'Vivichoke',
        'Vivichoke',
        400,
        'vivichoke',
        {
          en: 'Bud used for revival crafts.',
          pt: 'Broto usado em crafts de revival.',
        },
      ),
      item(
        'Recipe: Remedy',
        'Receita: Remédio',
        1000,
        'remedy',
        {
          en: 'Unlocks crafting Remedy.',
          pt: 'Desbloqueia o craft de Remédio.',
        },
      ),
      item(
        'Recipe: Fine Remedy',
        'Receita: Bom Remédio',
        3000,
        'fine-remedy',
        {
          en: 'Unlocks crafting Fine Remedy.',
          pt: 'Desbloqueia o craft de Bom Remédio.',
        },
      ),
      item(
        'Recipe: Superb Remedy',
        'Receita: Ótimo Remédio',
        8000,
        'superb-remedy',
        {
          en: 'Unlocks crafting Superb Remedy.',
          pt: 'Desbloqueia o craft de Ótimo Remédio.',
        },
      ),
      item(
        'Recipe: Aux Power',
        'Receita: Aux Power',
        1500,
        'aux-power',
        {
          en: 'Unlocks crafting Aux Power.',
          pt: 'Desbloqueia o craft de Aux Power.',
        },
      ),
      item(
        'Recipe: Aux Guard',
        'Receita: Aux Guard',
        1500,
        'aux-guard',
        {
          en: 'Unlocks crafting Aux Guard.',
          pt: 'Desbloqueia o craft de Aux Guard.',
        },
      ),
      item(
        'Recipe: Aux Evasion',
        'Receita: Aux Evasion',
        1500,
        'aux-evasion',
        {
          en: 'Unlocks crafting Aux Evasion.',
          pt: 'Desbloqueia o craft de Aux Evasion.',
        },
      ),
      item(
        'Recipe: Dire Hit',
        'Receita: Dire Hit',
        4000,
        'dire-hit',
        {
          en: 'Unlocks crafting Dire Hit.',
          pt: 'Desbloqueia o craft de Dire Hit.',
        },
      ),
      item(
        'Recipe: Aux Powerguard',
        'Receita: Aux Powerguard',
        4000,
        'aux-powerguard',
        {
          en: 'Unlocks crafting Aux Powerguard.',
          pt: 'Desbloqueia o craft de Aux Powerguard.',
        },
      ),
      item(
        'Recipe: Full Heal',
        'Receita: Cura Total',
        5000,
        'full-heal',
        {
          en: 'Unlocks crafting Full Heal.',
          pt: 'Desbloqueia o craft de Cura Total.',
        },
      ),
      item(
        'Recipe: Max Ether',
        'Receita: Éter Máximo',
        5000,
        'max-ether',
        {
          en: 'Unlocks crafting Max Ether.',
          pt: 'Desbloqueia o craft de Éter Máximo.',
        },
      ),
      item(
        'Recipe: Max Elixir',
        'Receita: Elixir Máximo',
        25000,
        'max-elixir',
        {
          en: 'Unlocks crafting Max Elixir.',
          pt: 'Desbloqueia o craft de Elixir Máximo.',
        },
      ),
      item(
        'Recipe: Sticky Glob',
        'Receita: Globo Pegajoso',
        20000,
        'sticky-glob',
        {
          en: 'Unlocks crafting Sticky Glob.',
          pt: 'Desbloqueia o craft de Globo Pegajoso.',
        },
      ),
      item(
        'Recipe: Max Revive',
        'Receita: Revive Máximo',
        25000,
        'max-revive',
        {
          en: 'Unlocks crafting Max Revive.',
          pt: 'Desbloqueia o craft de Revive Máximo.',
        },
      ),
      item(
        'Recipe: Star Piece',
        'Receita: Pedra Estelar',
        10000,
        'star-piece',
        {
          en: 'Unlocks crafting Star Piece.',
          pt: 'Desbloqueia o craft de Pedra Estelar.',
        },
      ),
      item(
        'Recipe: Honey Cake',
        'Receita: Bolo de Mel',
        1000,
        'honey-cake',
        {
          en: 'Unlocks crafting Honey Cake.',
          pt: 'Desbloqueia o craft de Bolo de Mel.',
        },
      ),
      item(
        'Recipe: Grain Cake',
        'Receita: Bolo de Grãos',
        1000,
        'grain-cake',
        {
          en: 'Unlocks crafting Grain Cake.',
          pt: 'Desbloqueia o craft de Bolo de Grãos.',
        },
      ),
      item(
        'Recipe: Bean Cake',
        'Receita: Bolo de Feijão',
        1000,
        'bean-cake',
        {
          en: 'Unlocks crafting Bean Cake.',
          pt: 'Desbloqueia o craft de Bolo de Feijão.',
        },
      ),
      item(
        'Recipe: Salt Cake',
        'Receita: Bolo de Sal',
        1000,
        'salt-cake',
        {
          en: 'Unlocks crafting Salt Cake.',
          pt: 'Desbloqueia o craft de Bolo de Sal.',
        },
      ),
    ],
  },
  {
    id: 4,
    name: { en: 'Ginkgo Guild (Ginter)', pt: 'Guilda Ginkgo (Ginter)' },
    kind: 'special',
    description: {
      en: 'Ginter sells rotating rare specials — evolution stones, Linking Cord, Peat Block, and one-time Rotom appliances. Stock refreshes every 20 Pokémon caught (after Mission 7).',
      pt: 'Ginter vende especiais raros rotativos — pedras de evolução, Cabo de Ligação, Bloco de Turfa e aparelhos de Rotom. O estoque muda a cada 20 Pokémon capturados (após a Missão 7).',
    },
    location: {
      en: 'Jubilife Village — Ginkgo Guild cart outside Galaxy Hall',
      pt: 'Vila Jubilo — barraca da Guilda Ginkgo em frente ao Salão Galáctico',
    },
    map: { x: 48.0, y: 16.0 },
    items: [
      item('Fire Stone', 'Pedra de Fogo', 5000, 'fire-stone', {
        en: 'Sold as “Flame-Patterned Rock”.',
        pt: 'Vendida como “Rocha Flamejante”.',
      }),
      item('Water Stone', 'Pedra da Água', 5000, 'water-stone', {
        en: 'Sold as “Water-Droplet Rock”.',
        pt: 'Vendida como “Rocha em Forma de Gota”.',
      }),
      item('Thunder Stone', 'Pedra do Trovão', 5000, 'thunder-stone', {
        en: 'Sold as “Lightning-Bolt Rock”.',
        pt: 'Vendida como “Rocha Relâmpago”.',
      }),
      item('Leaf Stone', 'Pedra da Folha', 5000, 'leaf-stone', {
        en: 'Sold as “Leaf Imprint Rock”.',
        pt: 'Vendida como “Rocha com Impressão de Folha”.',
      }),
      item('Moon Stone', 'Pedra da Lua', 5000, 'moon-stone', {
        en: 'Sold as “Moonlike Rock”.',
        pt: 'Vendida como “Rocha Lunar”.',
      }),
      item('Sun Stone', 'Pedra do Sol', 5000, 'sun-stone', {
        en: 'Sold as “Sunlike Rock”.',
        pt: 'Vendida como “Rocha Solar”.',
      }),
      item('Shiny Stone', 'Pedra Brilhante', 5000, 'shiny-stone', {
        en: 'Sold as “Dazzling Rock”.',
        pt: 'Vendida como “Rocha Deslumbrante”.',
      }),
      item('Dusk Stone', 'Pedra do Crepúsculo', 5000, 'dusk-stone', {
        en: 'Sold as “Deep-Dark Rock”.',
        pt: 'Vendida como “Rocha Escura”.',
      }),
      item('Dawn Stone', 'Pedra da Alvorada', 5000, 'dawn-stone', {
        en: 'Sold as “Eyelike Rock”.',
        pt: 'Vendida como “Rocha em Forma de Olho”.',
      }),
      item('Ice Stone', 'Pedra do Gelo', 5000, 'ice-stone', {
        en: 'Sold as “Snow-Patterned Rock”.',
        pt: 'Vendida como “Rocha Nevada”.',
      }),
      item('Oval Stone', 'Pedra Oval', 2000, 'oval-stone', {
        en: 'Sold as “Egg-Like Rock”.',
        pt: 'Vendida como “Rocha em Forma de Ovo”.',
      }),
      item('Linking Cord', 'Cabo de Ligação', 8000, 'linking-cord', {
        en: 'Sold as “Mysterious Cord”.',
        pt: 'Vendido como “Cabo Misterioso”.',
      }),
      item('Black Augurite', 'Augurita Negra', 8000, 'black-augurite', {
        en: 'Sold as “Jet-Black Rock”. Evolves Scyther → Kleavor.',
        pt: 'Vendida como “Rocha Azeviche”. Evolui Scyther → Kleavor.',
      }),
      item('Peat Block', 'Bloco de Turfa', 10000, 'peat-block', {
        en: 'Sold as “Hunk of Coal”. Evolves Ursaring → Ursaluna.',
        pt: 'Vendido como “Pedaço de Carvão”. Evolui Ursaring → Ursaluna.',
      }),
      item('Metal Coat', 'Revestimento Metálico', 8000, 'metal-coat', {
        en: 'Sold as “Metallic Spread”.',
        pt: 'Vendido como “Cobertura Metálica”.',
      }),
      item('Protector', 'Protetor', 10000, 'protector', {
        en: 'Sold as “Unwieldy Armor”.',
        pt: 'Vendido como “Armadura Desajeitada”.',
      }),
      item('Electirizer', 'Eletirizador', 10000, 'electirizer', {
        en: 'Sold as “Electricity Box”.',
        pt: 'Vendido como “Caixa Elétrica”.',
      }),
      item('Magmarizer', 'Magmatizador', 10000, 'magmarizer', {
        en: 'Sold as “Magma Box”.',
        pt: 'Vendido como “Caixa de Magma”.',
      }),
      item('Reaper Cloth', 'Tecido Sinistro', 10000, 'reaper-cloth', {
        en: 'Sold as “Mysterious Cloth”.',
        pt: 'Vendido como “Tecido Misterioso”.',
      }),
      item('Dubious Disc', 'Disco Duvidoso', 10000, 'dubious-disc', {
        en: 'Sold as “Transparent Mechanism”.',
        pt: 'Vendido como “Mecanismo Transparente”.',
      }),
      item('Upgrade', 'Melhoria', 10000, 'upgrade', {
        en: 'Sold as “Mysterious Box”.',
        pt: 'Vendida como “Caixa Misteriosa”.',
      }),
      item('Razor Claw', 'Garra Afiada', 10000, 'razor-claw', {
        en: 'Sold as “Mystery Claw”.',
        pt: 'Vendida como “Garra Misteriosa”.',
      }),
      item('Razor Fang', 'Presa Afiada', 10000, 'razor-fang', {
        en: 'Sold as “Mystery Fang”.',
        pt: 'Vendida como “Presa Misteriosa”.',
      }),
      item(
        'Mechanical Box',
        'Caixa Mecânica',
        20000,
        'upgrade',
        {
          en: 'One-time. Changes Rotom into Heat Rotom.',
          pt: 'Compra única. Muda Rotom para Heat Rotom.',
        },
        {
          en: 'One-time purchase',
          pt: 'Compra única',
        },
      ),
      item(
        'Mechanical Cabinet',
        'Armário Mecânico',
        20000,
        'upgrade',
        {
          en: 'One-time. Changes Rotom into Frost Rotom.',
          pt: 'Compra única. Muda Rotom para Frost Rotom.',
        },
        {
          en: 'One-time purchase',
          pt: 'Compra única',
        },
      ),
      item(
        'Mechanical Tub',
        'Banheira Mecânica',
        20000,
        'upgrade',
        {
          en: 'One-time. Changes Rotom into Wash Rotom.',
          pt: 'Compra única. Muda Rotom para Wash Rotom.',
        },
        {
          en: 'One-time purchase',
          pt: 'Compra única',
        },
      ),
      item(
        'Mechanical Pinwheel',
        'Cata-vento Mecânico',
        20000,
        'upgrade',
        {
          en: 'One-time. Changes Rotom into Fan Rotom.',
          pt: 'Compra única. Muda Rotom para Fan Rotom.',
        },
        {
          en: 'One-time purchase',
          pt: 'Compra única',
        },
      ),
      item(
        'Mechanical Circular Saw',
        'Serra Circular Mecânica',
        20000,
        'upgrade',
        {
          en: 'One-time. Changes Rotom into Mow Rotom.',
          pt: 'Compra única. Muda Rotom para Mow Rotom.',
        },
        {
          en: 'One-time purchase',
          pt: 'Compra única',
        },
      ),
    ],
  },
  {
    id: 5,
    name: { en: "Simona's Trading Post", pt: 'Posto de Trocas da Simona' },
    kind: 'trading',
    description: {
      en: 'Spend Merit Points earned from releasing Pokémon. Stocks Linking Cord, Exp. Candies, Grit items, and Seeds of Mastery.',
      pt: 'Gaste Pontos de Mérito obtidos ao liberar Pokémon. Vende Cabo de Ligação, Doces Exp., itens Grit e Sementes de Maestria.',
    },
    location: {
      en: 'Jubilife Village — near the Training Grounds / pastures road',
      pt: 'Vila Jubilo — perto do Campo de Treino / caminho do pasto',
    },
    map: { x: 34.0, y: 18.0 },
    items: [
      item(
        'Linking Cord',
        'Cabo de Ligação',
        1000,
        'linking-cord',
        {
          en: 'Evolves trade-evolution Pokémon when used.',
          pt: 'Evolui Pokémon de troca quando usado.',
        },
        undefined,
        'merit',
      ),
      item(
        'Exp. Candy S',
        'Doce Exp. S',
        20,
        'exp-candy-s',
        { en: 'Grants a small amount of Exp.', pt: 'Concede pouca Exp.' },
        undefined,
        'merit',
      ),
      item(
        'Exp. Candy M',
        'Doce Exp. M',
        100,
        'exp-candy-m',
        { en: 'Grants a moderate amount of Exp.', pt: 'Concede Exp. moderada.' },
        undefined,
        'merit',
      ),
      item(
        'Exp. Candy L',
        'Doce Exp. L',
        500,
        'exp-candy-l',
        { en: 'Grants a large amount of Exp.', pt: 'Concede muita Exp.' },
        undefined,
        'merit',
      ),
      item(
        'Rare Candy',
        'Doce Raro',
        1000,
        'rare-candy',
        { en: 'Raises a Pokémon’s level by 1.', pt: 'Aumenta o nível em 1.' },
        undefined,
        'merit',
      ),
      item(
        'Seed of Mastery',
        'Semente de Maestria',
        1200,
        'seed-of-mastery',
        {
          en: 'Master a move for freer battle use.',
          pt: 'Domina um golpe para uso mais livre em batalha.',
        },
        undefined,
        'merit',
      ),
      item(
        'Grit Dust',
        'Poeira de Grit',
        100,
        'grit-dust',
        {
          en: 'Raises one effort level.',
          pt: 'Aumenta um nível de esforço.',
        },
        undefined,
        'merit',
      ),
      item(
        'Grit Gravel',
        'Cascalho de Grit',
        300,
        'grit-gravel',
        {
          en: 'Raises effort levels more than Dust.',
          pt: 'Aumenta esforços mais que a Poeira.',
        },
        undefined,
        'merit',
      ),
      item(
        'Grit Pebble',
        'Seixo de Grit',
        600,
        'grit-pebble',
        {
          en: 'Raises effort levels more than Gravel.',
          pt: 'Aumenta esforços mais que o Cascalho.',
        },
        undefined,
        'merit',
      ),
      item(
        'Grit Rock',
        'Rocha de Grit',
        1000,
        'grit-rock',
        {
          en: 'Greatly raises one effort level.',
          pt: 'Aumenta muito um nível de esforço.',
        },
        undefined,
        'merit',
      ),
    ],
  },
  {
    id: 6,
    name: { en: "Canala's Clothing Shop", pt: 'Loja de Roupas da Canala' },
    kind: 'clothing',
    description: {
      en: 'Clothing and appearance options for your character. Stock expands as you raise Survey Corps rank.',
      pt: 'Roupas e opções de aparência. O estoque cresce com o ranque do Corpo de Pesquisa.',
    },
    location: {
      en: 'Jubilife Village — next to the Craftworks',
      pt: 'Vila Jubilo — ao lado da Oficina',
    },
    map: { x: 54.0, y: 23.0 },
    items: [
      item(
        'Everyday Outfit sets',
        'Conjuntos casuais',
        0,
        'clothing',
        {
          en: 'Hats, tops, bottoms, and shoes sold in rotating sets.',
          pt: 'Chapéus, blusas, calças e sapatos em conjuntos rotativos.',
        },
        {
          en: 'Prices vary by piece',
          pt: 'Preços variam por peça',
        },
      ),
      item(
        'Survey Corps styles',
        'Estilos do Corpo de Pesquisa',
        0,
        'clothing',
        {
          en: 'Uniforms and accessories unlocked with Galaxy Team rank.',
          pt: 'Uniformes e acessórios desbloqueados com o ranque da Equipe Galáctica.',
        },
      ),
    ],
  },
]

export function getLaMarket(id: number | null) {
  if (id == null) return null
  return LA_MARKETS.find((m) => m.id === id) ?? null
}
