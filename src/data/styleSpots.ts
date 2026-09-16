export type Localized = { en: string; pt: string }

export type StyleKind = 'salon' | 'clothier'

export type StyleItem = {
  name: Localized
  /** Omit when prices vary widely within the boutique. */
  price?: number
  note?: Localized
}

export type StyleSpot = {
  id: number
  kind: StyleKind
  name: Localized
  description: Localized
  items: StyleItem[]
  /** Percent coordinates from Polygon interactive map. */
  map: { x: number; y: number }
  /** In-game exterior shot under /lza-style/ */
  locationImageSrc?: string
}

function item(
  en: string,
  pt: string,
  opts?: { price?: number; note?: Localized },
): StyleItem {
  return {
    name: { en, pt },
    ...(opts?.price != null ? { price: opts.price } : {}),
    ...(opts?.note ? { note: opts.note } : {}),
  }
}

const salonServices: StyleItem[] = [
  item('Styling & color', 'Penteado e cor', {
    price: 3000,
    note: {
      en: 'Hairstyle, bangs, color, color blocking, and balayage. Extra colors via Side Missions 12 & 51.',
      pt: 'Penteado, franja, cor, color blocking e balayage. Cores extras nas Missões secundárias 12 e 51.',
    },
  }),
  item('Eyebrow touch-up', 'Retoque de sobrancelha', {
    price: 0,
    note: {
      en: 'Eyebrow shape and color',
      pt: 'Formato e cor da sobrancelha',
    },
  }),
]

/**
 * Hair salons & clothier arcades in Lumiose.
 * Boutique specialties from Bulbapedia; coords from Polygon interactive map.
 */
export const STYLE_SPOTS: StyleSpot[] = [
  {
    id: 1,
    kind: 'salon',
    name: { en: 'Hair Salon — Passage du Palais', pt: 'Salão — Passage du Palais' },
    description: {
      en: 'Change your hairstyle and hair color. Near Passage du Palais.',
      pt: 'Altere o penteado e a cor do cabelo. Perto do Passage du Palais.',
    },
    items: salonServices,
    map: { x: 55.6, y: 8.71 },
    locationImageSrc: '/lza-style/passage-du-palais.png?v=1',
  },
  {
    id: 2,
    kind: 'salon',
    name: { en: 'Hair Salon — Passage Ombragé', pt: 'Salão — Passage Ombragé' },
    description: {
      en: 'Change your hairstyle and hair color. Near Passage Ombragé.',
      pt: 'Altere o penteado e a cor do cabelo. Perto do Passage Ombragé.',
    },
    items: salonServices,
    map: { x: 36.27, y: 17.43 },
    locationImageSrc: '/lza-style/passage-ombrage.png?v=1',
  },
  {
    id: 3,
    kind: 'salon',
    name: { en: 'Hair Salon — Galerie de la Lune', pt: 'Salão — Galerie de la Lune' },
    description: {
      en: 'Change your hairstyle and hair color. Near Galerie de la Lune.',
      pt: 'Altere o penteado e a cor do cabelo. Perto da Galerie de la Lune.',
    },
    items: salonServices,
    map: { x: 54, y: 39.49 },
    locationImageSrc: '/lza-style/galerie-de-la-lune.png?v=1',
  },
  {
    id: 4,
    kind: 'salon',
    name: { en: 'Hair Salon — Promenade du Vent', pt: 'Salão — Promenade du Vent' },
    description: {
      en: 'Change your hairstyle and hair color. Near Promenade du Vent.',
      pt: 'Altere o penteado e a cor do cabelo. Perto da Promenade du Vent.',
    },
    items: salonServices,
    map: { x: 51.23, y: 81.22 },
    locationImageSrc: '/lza-style/promenade-du-vent.png?v=1',
  },
  {
    id: 5,
    kind: 'salon',
    name: { en: 'Coiffure Clips', pt: 'Coiffure Clips' },
    description: {
      en: 'A salon where you can change your hairstyle and hair color. They also offer complimentary eyebrow touch-ups.',
      pt: 'Salão para mudar penteado e cor do cabelo. Também fazem retoque de sobrancelha cortesia.',
    },
    items: salonServices,
    map: { x: 23.41, y: 83.8 },
    locationImageSrc: '/lza-style/coiffure-clips.png?v=1',
  },
  {
    id: 6,
    kind: 'clothier',
    name: { en: 'Passage du Palais', pt: 'Passage du Palais' },
    description: {
      en: 'Budget shopping arcade. Most outfits under ₽5,000.',
      pt: 'Galeria acessível. A maioria das peças fica abaixo de ₽5.000.',
    },
    items: [
      item('The Usual', 'The Usual', {
        note: {
          en: 'Simple casual clothing — hats, shirts, pants',
          pt: 'Roupas casuais simples — chapéus, camisas, calças',
        },
      }),
      item('Énergie', 'Énergie', {
        note: {
          en: 'Outdoor clothing and accessories',
          pt: 'Roupas e acessórios outdoor',
        },
      }),
      item('Le Passe-temps', 'Le Passe-temps', {
        note: {
          en: 'Chic affordable clothing — shirts, pants, overalls, shoes',
          pt: 'Roupas chic acessíveis — camisas, calças, macacões, sapatos',
        },
      }),
      item('Porte-Chance', 'Porte-Chance', {
        note: {
          en: 'Affordable accessories plus a small clothing selection',
          pt: 'Acessórios acessíveis e uma pequena seleção de roupas',
        },
      }),
      item('Pinceau', 'Pinceau', {
        note: {
          en: 'Pinceau brand — shirts, pants, overalls, socks',
          pt: 'Marca Pinceau — camisas, calças, macacões, meias',
        },
      }),
      item('Naptime', 'Naptime', {
        note: {
          en: 'Naptime brand — shirts, pants, overalls, socks, shoes',
          pt: 'Marca Naptime — camisas, calças, macacões, meias, sapatos',
        },
      }),
      item('Soil and Sneaks', 'Soil and Sneaks', {
        note: {
          en: 'Footwear with an emphasis on sneakers; also socks',
          pt: 'Calçados com foco em tênis; também meias',
        },
      }),
      item('Marquage', 'Marquage', {
        note: {
          en: 'Accessories — hats, satchels, earrings',
          pt: 'Acessórios — chapéus, bolsas, brincos',
        },
      }),
    ],
    map: { x: 54.43, y: 8.7 },
    locationImageSrc: '/lza-style/passage-du-palais.png?v=1',
  },
  {
    id: 7,
    kind: 'clothier',
    name: { en: 'Passage Ombragé', pt: 'Passage Ombragé' },
    description: {
      en: 'Mid-range arcade. Tops and bottoms often around ₽9,000.',
      pt: 'Galeria intermediária. Tops e bottoms costumam ficar perto de ₽9.000.',
    },
    items: [
      item('FILMFAN', 'FILMFAN', {
        note: {
          en: 'FILMFAN brand — Pokémon-inspired print shirts and hats',
          pt: 'Marca FILMFAN — camisas e chapéus com estampas inspiradas em Pokémon',
        },
      }),
      item('Mode Mature', 'Mode Mature', {
        note: {
          en: 'Dessert Mignon — mature, refined designs',
          pt: 'Dessert Mignon — designs maduros e refinados',
        },
      }),
      item('Mode Magnifique', 'Mode Magnifique', {
        note: {
          en: 'Dessert Mignon — bold, striking designs',
          pt: 'Dessert Mignon — designs ousados e marcantes',
        },
      }),
      item('Glammor Girli', 'Glammor Girli', {
        note: {
          en: 'Glammori — feminine styles',
          pt: 'Glammori — estilos femininos',
        },
      }),
      item('Glammor Pretti', 'Glammor Pretti', {
        note: {
          en: 'Glammori — cute designs and patterns',
          pt: 'Glammori — designs e estampas fofas',
        },
      }),
      item('Glammor Cuti', 'Glammor Cuti', {
        note: {
          en: 'Glammori — cute styles',
          pt: 'Glammori — estilos fofos',
        },
      }),
      item('Glammor Sporti', 'Glammor Sporti', {
        note: {
          en: 'Glammori — sporty styles',
          pt: 'Glammori — estilos esportivos',
        },
      }),
      item('Les Chaussures', 'Les Chaussures', {
        note: {
          en: 'Casual, trendy footwear',
          pt: 'Calçados casuais e modernos',
        },
      }),
      item('NIGHTSIDE', 'NIGHTSIDE', {
        note: {
          en: 'Gothic fashions',
          pt: 'Moda gótica',
        },
      }),
      item('Wisp', 'Wisp', {
        note: {
          en: 'Gothic fashions',
          pt: 'Moda gótica',
        },
      }),
      item('Atelier Heads', 'Atelier Heads', {
        note: {
          en: 'Accessories — hats, satchels, earrings',
          pt: 'Acessórios — chapéus, bolsas, brincos',
        },
      }),
      item('DENSOKU Lumiose', 'DENSOKU Lumiose', {
        note: {
          en: 'Sportswear, shoes, and more',
          pt: 'Roupas esportivas, calçados e mais',
        },
      }),
      item('Bundle Up', 'Bundle Up', {
        note: {
          en: 'Outerwear specialist',
          pt: 'Especializada em casacos e agasalhos',
        },
      }),
      item('Midnight Rite', 'Midnight Rite', {
        note: {
          en: 'Midnight Rite brand flagship',
          pt: 'Loja principal da marca Midnight Rite',
        },
      }),
    ],
    map: { x: 37.42, y: 18.43 },
    locationImageSrc: '/lza-style/passage-ombrage.png?v=1',
  },
  {
    id: 8,
    kind: 'clothier',
    name: { en: 'Galerie de la Lune', pt: 'Galerie de la Lune' },
    description: {
      en: 'Premium arcade. Clothing often around ₽50,000; accessories cheaper.',
      pt: 'Galeria premium. Roupas costumam ficar perto de ₽50.000; acessórios mais baratos.',
    },
    items: [
      item('SUBATOMIC', 'SUBATOMIC', {
        note: {
          en: 'SUBATOMIC brand clothing only',
          pt: 'Somente roupas da marca SUBATOMIC',
        },
      }),
      item('SUBATOMIC 4', 'SUBATOMIC 4', {
        note: {
          en: 'SUBATOMIC in black, white, red, and blue',
          pt: 'SUBATOMIC em preto, branco, vermelho e azul',
        },
      }),
      item('Kikonashi', 'Kikonashi', {
        note: {
          en: 'Clothing inspired by Eastern cultures',
          pt: 'Roupas inspiradas em culturas orientais',
        },
      }),
      item('Le Pays des Vêtements', 'Le Pays des Vêtements', {
        note: {
          en: 'Unique original designs',
          pt: 'Designs originais exclusivos',
        },
      }),
      item('Triathlon Rouge', 'Triathlon Rouge', {
        note: {
          en: 'Sportswear, shoes, and more',
          pt: 'Roupas esportivas, calçados e mais',
        },
      }),
      item('La Tornade', 'La Tornade', {
        note: {
          en: 'Accessories — hats, satchels, earrings',
          pt: 'Acessórios — chapéus, bolsas, brincos',
        },
      }),
      item('Masterpiece', 'Masterpiece', {
        note: {
          en: 'Clothing by Yashio Shiro',
          pt: 'Roupas de Yashio Shiro',
        },
      }),
      item('Le Pays des Pieds', 'Le Pays des Pieds', {
        note: {
          en: 'Unique original shoes and socks',
          pt: 'Sapatos e meias originais exclusivos',
        },
      }),
    ],
    map: { x: 54.54, y: 36.24 },
    locationImageSrc: '/lza-style/galerie-de-la-lune.png?v=1',
  },
  {
    id: 9,
    kind: 'clothier',
    name: { en: 'Passage de la Félicité', pt: 'Passage de la Félicité' },
    description: {
      en: 'Casual-leaning arcade. Most pieces ₽6,000+.',
      pt: 'Galeria mais casual. A maioria das peças a partir de ₽6.000.',
    },
    items: [
      item('Kickspin', 'Kickspin', {
        note: {
          en: 'Kickspin brand flagship',
          pt: 'Loja principal da marca Kickspin',
        },
      }),
      item('In the Zone', 'In the Zone', {
        note: {
          en: 'Gamer-popular clothing',
          pt: 'Roupas populares entre gamers',
        },
      }),
      item('Marché Bleu', 'Marché Bleu', {
        note: {
          en: 'Popular high-fashion brands',
          pt: 'Marcas de alta moda populares',
        },
      }),
      item('Équipement', 'Équipement', {
        note: {
          en: 'Accessories — hats, satchels, earrings',
          pt: 'Acessórios — chapéus, bolsas, brincos',
        },
      }),
      item('DEFOG Eyewear', 'DEFOG Eyewear', {
        note: {
          en: 'DEFOG eyewear',
          pt: 'Óculos DEFOG',
        },
      }),
      item('Triathlon Bleu', 'Triathlon Bleu', {
        note: {
          en: 'Sportswear, shoes, and more',
          pt: 'Roupas esportivas, calçados e mais',
        },
      }),
    ],
    map: { x: 25.39, y: 74.06 },
    locationImageSrc: '/lza-style/passage-felicite.png?v=1',
  },
  {
    id: 10,
    kind: 'clothier',
    name: { en: 'Promenade du Vent', pt: 'Promenade du Vent' },
    description: {
      en: 'Outdoor venue on Vernal Avenue. Tops and bottoms often around ₽8,000.',
      pt: 'Espaço ao ar livre na Vernal Avenue. Tops e bottoms costumam ficar perto de ₽8.000.',
    },
    items: [
      item('Changing Gears', 'Changing Gears', {
        note: {
          en: 'Accessories — hats, satchels, earrings',
          pt: 'Acessórios — chapéus, bolsas, brincos',
        },
      }),
      item('Fresh Fits', 'Fresh Fits', {
        note: {
          en: 'Cutting-edge individual style',
          pt: 'Estilo individual de ponta',
        },
      }),
      item('Dessert du Moment', 'Dessert du Moment', {
        note: {
          en: 'Dessert du Moment brand flagship',
          pt: 'Loja principal da marca Dessert du Moment',
        },
      }),
      item('BRAVELY', 'BRAVELY', {
        note: {
          en: 'BRAVELY brand flagship',
          pt: 'Loja principal da marca BRAVELY',
        },
      }),
      item('Boutique Couture', 'Boutique Couture', {
        note: {
          en: 'High-class outfits of nearly every kind. Unlocks after Main Mission 26.',
          pt: 'Looks de alto nível de quase todo tipo. Libera após a Missão principal 26.',
        },
      }),
    ],
    map: { x: 49.56, y: 85.11 },
    locationImageSrc: '/lza-style/promenade-du-vent.png?v=1',
  },
]
