import type { StyleKind, StyleItem, StyleSpot } from './styleSpots'

export type { StyleKind, StyleItem, StyleSpot }

const ITEM =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items'
const PKM =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

const LA_STYLE_SPRITES: Record<string, string> = {
  'Change outfit': `${ITEM}/silk-scarf.png`,
  'Flat Cap': `${ITEM}/rocky-helmet.png`,
  'Bowlet Hat': `${ITEM}/focus-band.png`,
  'Brimmed Hat': `${ITEM}/choice-band.png`,
  'Festival masks': `${PKM}/25.png`,
  Eyewear: `${ITEM}/black-glasses.png`,
  Tops: `${ITEM}/choice-scarf.png`,
  Bottoms: `${ITEM}/soft-sand.png`,
  Shoes: `${ITEM}/soft-sand.png`,
  'Full outfits': `${ITEM}/assault-vest.png`,
  'Contact color': `${ITEM}/wise-glasses.png`,
  'Styling session': `${ITEM}/choice-scarf.png`,
  'Base hairstyles': `${ITEM}/silk-scarf.png`,
  'Extra hair colors': `${PKM}/549.png`,
  'Misdreavus colors': `${PKM}/200.png`,
  'Kirlia colors': `${PKM}/281.png`,
  'Sinnoh Style': `${PKM}/493.png`,
  'Change clothes': `${ITEM}/silk-scarf.png`,
}

function item(
  en: string,
  pt: string,
  opts?: { price?: number; note?: { en: string; pt: string }; sprite?: string },
): StyleItem {
  return {
    name: { en, pt },
    sprite: opts?.sprite ?? LA_STYLE_SPRITES[en] ?? `${ITEM}/silk-scarf.png`,
    ...(opts?.price != null ? { price: opts.price } : {}),
    ...(opts?.note ? { note: opts.note } : {}),
  }
}

const afterLilligant = {
  en: 'Unlocks after calming Noble Lilligant (Arezu arrives)',
  pt: 'Desbloqueia após acalmar a Nobre Lilligant (Arezu chega)',
}

const reqMisdreavus = {
  en: 'Request 59 — Misdreavus the Hairstyle Muse',
  pt: 'Pedido 59 — Misdreavus, musa do penteado',
}

const reqKirlia = {
  en: 'Request 75 — Kirlia the Hairstyle Muse',
  pt: 'Pedido 75 — Kirlia, musa do penteado',
}

/**
 * Style spots in Jubilife Village (Legends: Arceus).
 * Coords on /jubilife-village-map.png — aligned with known shop markers.
 */
export const LA_STYLE_SPOTS: StyleSpot[] = [
  {
    id: 1,
    kind: 'clothier',
    name: { en: "Canala's Clothing Shop (Anthe)", pt: 'Loja de Roupas da Canala (Anthe)' },
    description: {
      en: 'Buy clothes and change your outfit or contact color. Stock expands with Survey Corps rank, research, and requests.',
      pt: 'Compre roupas e mude o visual ou a cor das lentes. O estoque cresce com ranque, pesquisa e pedidos.',
    },
    map: { x: 54.0, y: 23.0 },
    items: [
      item('Change outfit', 'Trocar roupa', {
        price: 0,
        note: {
          en: 'Talk to Anthe to wear owned clothes and change contact color',
          pt: 'Fale com Anthe para vestir roupas que você tem e mudar a cor das lentes',
        },
      }),
      item('Flat Cap', 'Boné Flat', { price: 1200 }),
      item('Bowlet Hat', 'Chapéu Bowlet', { price: 4500 }),
      item('Brimmed Hat', 'Chapéu de aba', { price: 7800 }),
      item('Festival masks', 'Máscaras de festival', {
        price: 1300,
        note: {
          en: 'Pokémon masks unlock at Research Level 10 (and some save bonuses)',
          pt: 'Máscaras de Pokémon liberam no Nível de Pesquisa 10 (e alguns bônus de save)',
        },
      }),
      item('Eyewear', 'Óculos', {
        note: {
          en: 'Glasses and goggles in several colors',
          pt: 'Óculos e óculos de proteção em várias cores',
        },
      }),
      item('Tops', 'Blusas / casacos', {
        note: {
          en: 'Everyday tops, jackets, and Galaxy Team pieces',
          pt: 'Blusas do dia a dia, casacos e peças da Equipe Galáctica',
        },
      }),
      item('Bottoms', 'Calças / saias', {
        note: {
          en: 'Trousers, shorts, and matching bottoms',
          pt: 'Calças, shorts e peças combinando',
        },
      }),
      item('Shoes', 'Sapatos', {
        note: {
          en: 'Sandals, boots, and Survey Corps footwear',
          pt: 'Sandálias, botas e calçados do Corpo de Pesquisa',
        },
      }),
      item('Full outfits', 'Trajes completos', {
        note: {
          en: 'Kimono sets and coordinated looks (incl. save-file gifts)',
          pt: 'Conjuntos de quimono e looks combinados (incl. presentes de save)',
        },
      }),
      item('Contact color', 'Cor das lentes', {
        price: 0,
        note: {
          en: 'Change eye / contact color when adjusting your look',
          pt: 'Mude a cor dos olhos / lentes ao ajustar o visual',
        },
      }),
    ],
  },
  {
    id: 2,
    kind: 'salon',
    name: { en: 'Hairdresser (Arezu)', pt: 'Cabeleireira (Arezu)' },
    description: {
      en: 'Change hairstyle, hair color, and eyebrow color for ₽500. More styles and colors unlock with story and requests.',
      pt: 'Mude penteado, cor do cabelo e das sobrancelhas por ₽500. Mais opções com a história e pedidos.',
    },
    map: { x: 71.0, y: 20.0 },
    items: [
      item('Styling session', 'Sessão de visual', {
        price: 500,
        note: {
          en: 'Hairstyle + hair color + eyebrow color in one visit',
          pt: 'Penteado + cor do cabelo + cor das sobrancelhas numa visita',
        },
      }),
      item('Base hairstyles', 'Penteados básicos', {
        note: {
          en: 'Short, side part, braids, topknot, and more (gender-specific sets)',
          pt: 'Curto, lado partido, tranças, topete e mais (conjuntos por gênero)',
        },
      }),
      item('Extra hair colors', 'Cores extras de cabelo', {
        note: afterLilligant,
      }),
      item('Misdreavus colors', 'Cores Misdreavus', {
        note: reqMisdreavus,
      }),
      item('Kirlia colors', 'Cores Kirlia', {
        note: reqKirlia,
      }),
      item('Sinnoh Style', 'Estilo Sinnoh', {
        note: {
          en: 'Special hairstyle after defeating Arceus',
          pt: 'Penteado especial após derrotar Arceus',
        },
      }),
    ],
  },
  {
    id: 3,
    kind: 'clothier',
    name: { en: 'Player Quarters (Mirror)', pt: 'Seus Aposentos (Espelho)' },
    description: {
      en: 'Use the mirror in your room to change into clothes you already own. No shopping here.',
      pt: 'Use o espelho no seu quarto para vestir roupas que já possui. Sem compras aqui.',
    },
    map: { x: 22.0, y: 30.0 },
    items: [
      item('Change clothes', 'Trocar roupa', {
        price: 0,
        note: {
          en: 'Hat, top, bottoms, shoes, eyewear, or full outfit',
          pt: 'Chapéu, blusa, calça, sapatos, óculos ou traje completo',
        },
      }),
      item('Contact color', 'Cor das lentes', {
        price: 0,
        note: {
          en: 'Same contact options as at the Clothier',
          pt: 'Mesmas opções de lentes da Loja de Roupas',
        },
      }),
    ],
  },
]
