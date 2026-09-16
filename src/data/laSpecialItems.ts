import type { Localized } from './laCollectible'

export type LaSpecialCategory =
  | 'evolution'
  | 'held'
  | 'valuable'
  | 'key'
  | 'rotom'

export type LaSpecialItem = {
  id: string
  name: Localized
  sprite: string
  category: LaSpecialCategory
  description: Localized
  /** Where to obtain / buy */
  source: Localized
  price?: number
  /** Default pokedollars; merit = Trading Post */
  currency?: 'pokedollars' | 'merit'
}

export const LA_SPECIAL_CATEGORY_KEYS: Record<
  LaSpecialCategory,
  | 'laCraftsCatEvolution'
  | 'laCraftsCatHeld'
  | 'laCraftsCatValuable'
  | 'laCraftsCatKey'
  | 'laCraftsCatRotom'
> = {
  evolution: 'laCraftsCatEvolution',
  held: 'laCraftsCatHeld',
  valuable: 'laCraftsCatValuable',
  key: 'laCraftsCatKey',
  rotom: 'laCraftsCatRotom',
}

/**
 * Evolution stones, guild specials, Trading Post stock, and other non-craft bag items.
 */
export const LA_SPECIAL_ITEMS: LaSpecialItem[] = [
  // Evolution stones
  {
    id: 'fire-stone',
    name: { en: 'Fire Stone', pt: 'Pedra de Fogo' },
    sprite: 'fire-stone',
    category: 'evolution',
    description: {
      en: 'Evolves certain Fire-type Pokémon when used from the satchel.',
      pt: 'Evolui certos Pokémon de Fogo quando usada da bolsa.',
    },
    source: {
      en: 'Ginter (Ginkgo Guild) · Space-time distortions · ore deposits',
      pt: 'Ginter (Guilda Ginkgo) · Distorções · depósitos de minério',
    },
    price: 5000,
  },
  {
    id: 'water-stone',
    name: { en: 'Water Stone', pt: 'Pedra da Água' },
    sprite: 'water-stone',
    category: 'evolution',
    description: {
      en: 'Evolves certain Water-type Pokémon when used from the satchel.',
      pt: 'Evolui certos Pokémon de Água quando usada da bolsa.',
    },
    source: {
      en: 'Ginter (Ginkgo Guild) · Space-time distortions · ore deposits',
      pt: 'Ginter (Guilda Ginkgo) · Distorções · depósitos de minério',
    },
    price: 5000,
  },
  {
    id: 'thunder-stone',
    name: { en: 'Thunder Stone', pt: 'Pedra do Trovão' },
    sprite: 'thunder-stone',
    category: 'evolution',
    description: {
      en: 'Evolves certain Electric-type Pokémon when used from the satchel.',
      pt: 'Evolui certos Pokémon Elétricos quando usada da bolsa.',
    },
    source: {
      en: 'Ginter (Ginkgo Guild) · Space-time distortions · ore deposits',
      pt: 'Ginter (Guilda Ginkgo) · Distorções · depósitos de minério',
    },
    price: 5000,
  },
  {
    id: 'leaf-stone',
    name: { en: 'Leaf Stone', pt: 'Pedra da Folha' },
    sprite: 'leaf-stone',
    category: 'evolution',
    description: {
      en: 'Evolves certain Grass-type Pokémon when used from the satchel.',
      pt: 'Evolui certos Pokémon de Planta quando usada da bolsa.',
    },
    source: {
      en: 'Ginter (Ginkgo Guild) · Space-time distortions · ore deposits',
      pt: 'Ginter (Guilda Ginkgo) · Distorções · depósitos de minério',
    },
    price: 5000,
  },
  {
    id: 'moon-stone',
    name: { en: 'Moon Stone', pt: 'Pedra da Lua' },
    sprite: 'moon-stone',
    category: 'evolution',
    description: {
      en: 'Evolves certain Pokémon such as Clefairy and Munna.',
      pt: 'Evolui certos Pokémon como Clefairy e Munna.',
    },
    source: {
      en: 'Ginter (Ginkgo Guild) · Space-time distortions',
      pt: 'Ginter (Guilda Ginkgo) · Distorções espaço-tempo',
    },
    price: 5000,
  },
  {
    id: 'sun-stone',
    name: { en: 'Sun Stone', pt: 'Pedra do Sol' },
    sprite: 'sun-stone',
    category: 'evolution',
    description: {
      en: 'Evolves certain Pokémon such as Petilil and Cosmoem.',
      pt: 'Evolui certos Pokémon como Petilil e Cosmoem.',
    },
    source: {
      en: 'Ginter (Ginkgo Guild) · Space-time distortions',
      pt: 'Ginter (Guilda Ginkgo) · Distorções espaço-tempo',
    },
    price: 5000,
  },
  {
    id: 'shiny-stone',
    name: { en: 'Shiny Stone', pt: 'Pedra Brilhante' },
    sprite: 'shiny-stone',
    category: 'evolution',
    description: {
      en: 'Evolves certain Pokémon such as Togetic and Roselia.',
      pt: 'Evolui certos Pokémon como Togetic e Roselia.',
    },
    source: {
      en: 'Ginter (Ginkgo Guild) · Space-time distortions',
      pt: 'Ginter (Guilda Ginkgo) · Distorções espaço-tempo',
    },
    price: 5000,
  },
  {
    id: 'dusk-stone',
    name: { en: 'Dusk Stone', pt: 'Pedra do Crepúsculo' },
    sprite: 'dusk-stone',
    category: 'evolution',
    description: {
      en: 'Evolves certain Pokémon such as Murkrow and Misdreavus.',
      pt: 'Evolui certos Pokémon como Murkrow e Misdreavus.',
    },
    source: {
      en: 'Ginter (Ginkgo Guild) · Space-time distortions',
      pt: 'Ginter (Guilda Ginkgo) · Distorções espaço-tempo',
    },
    price: 5000,
  },
  {
    id: 'dawn-stone',
    name: { en: 'Dawn Stone', pt: 'Pedra da Alvorada' },
    sprite: 'dawn-stone',
    category: 'evolution',
    description: {
      en: 'Evolves male Kirlia into Gallade and female Snorunt into Froslass.',
      pt: 'Evolui Kirlia macho em Gallade e Snorunt fêmea em Froslass.',
    },
    source: {
      en: 'Ginter (Ginkgo Guild) · Space-time distortions',
      pt: 'Ginter (Guilda Ginkgo) · Distorções espaço-tempo',
    },
    price: 5000,
  },
  {
    id: 'ice-stone',
    name: { en: 'Ice Stone', pt: 'Pedra do Gelo' },
    sprite: 'ice-stone',
    category: 'evolution',
    description: {
      en: 'Evolves certain Pokémon such as Hisuian Growlithe and Alolan Vulpix.',
      pt: 'Evolui certos Pokémon como Growlithe de Hisui e Vulpix de Alola.',
    },
    source: {
      en: 'Ginter (Ginkgo Guild) · Alabaster Icelands ore · distortions',
      pt: 'Ginter (Guilda Ginkgo) · Minério da Tundra Alba · distorções',
    },
    price: 5000,
  },
  {
    id: 'oval-stone',
    name: { en: 'Oval Stone', pt: 'Pedra Oval' },
    sprite: 'oval-stone',
    category: 'evolution',
    description: {
      en: 'Evolves Happiny into Chansey when leveled up during the day while holding it.',
      pt: 'Evolui Happiny em Chansey ao subir de nível de dia com ela equipada.',
    },
    source: {
      en: 'Ginter (Ginkgo Guild) · Space-time distortions',
      pt: 'Ginter (Guilda Ginkgo) · Distorções espaço-tempo',
    },
    price: 2000,
  },
  {
    id: 'linking-cord',
    name: { en: 'Linking Cord', pt: 'Cabo de Ligação' },
    sprite: 'linking-cord',
    category: 'evolution',
    description: {
      en: 'A mysterious cord that evolves trade-evolution Pokémon when used.',
      pt: 'Cabo misterioso que evolui Pokémon de troca quando usado.',
    },
    source: {
      en: 'Ginter · Simona Trading Post (1,000 MP) · distortions',
      pt: 'Ginter · Posto da Simona (1.000 MP) · distorções',
    },
    price: 8000,
  },
  {
    id: 'black-augurite',
    name: { en: 'Black Augurite', pt: 'Augurita Negra' },
    sprite: 'black-augurite',
    category: 'evolution',
    description: {
      en: 'Evolves Scyther into Kleavor when used from the satchel.',
      pt: 'Evolui Scyther em Kleavor quando usada da bolsa.',
    },
    source: {
      en: 'Ginter · Ursaring drops · space-time distortions',
      pt: 'Ginter · Drops de Ursaring · distorções',
    },
    price: 8000,
  },
  {
    id: 'peat-block',
    name: { en: 'Peat Block', pt: 'Bloco de Turfa' },
    sprite: 'peat-block',
    category: 'evolution',
    description: {
      en: 'Evolves Ursaring into Ursaluna at night during a full moon.',
      pt: 'Evolui Ursaring em Ursaluna à noite de lua cheia.',
    },
    source: {
      en: 'Ginter · Crimson Mirelands digging · distortions',
      pt: 'Ginter · Escavação no Pântano Carmesim · distorções',
    },
    price: 10000,
  },
  {
    id: 'metal-coat',
    name: { en: 'Metal Coat', pt: 'Revestimento Metálico' },
    sprite: 'metal-coat',
    category: 'evolution',
    description: {
      en: 'Evolves Onix into Steelix and Scyther into Scizor when used.',
      pt: 'Evolui Onix em Steelix e Scyther em Scizor quando usado.',
    },
    source: {
      en: 'Ginter (Ginkgo Guild) · Space-time distortions',
      pt: 'Ginter (Guilda Ginkgo) · Distorções espaço-tempo',
    },
    price: 8000,
  },
  {
    id: 'protector',
    name: { en: 'Protector', pt: 'Protetor' },
    sprite: 'protector',
    category: 'evolution',
    description: {
      en: 'Evolves Rhydon into Rhyperior when used from the satchel.',
      pt: 'Evolui Rhydon em Rhyperior quando usado da bolsa.',
    },
    source: {
      en: 'Ginter (Ginkgo Guild) · Space-time distortions',
      pt: 'Ginter (Guilda Ginkgo) · Distorções espaço-tempo',
    },
    price: 10000,
  },
  {
    id: 'electirizer',
    name: { en: 'Electirizer', pt: 'Eletirizador' },
    sprite: 'electirizer',
    category: 'evolution',
    description: {
      en: 'Evolves Electabuzz into Electivire when used from the satchel.',
      pt: 'Evolui Electabuzz em Electivire quando usado da bolsa.',
    },
    source: {
      en: 'Ginter (Ginkgo Guild) · Space-time distortions',
      pt: 'Ginter (Guilda Ginkgo) · Distorções espaço-tempo',
    },
    price: 10000,
  },
  {
    id: 'magmarizer',
    name: { en: 'Magmarizer', pt: 'Magmatizador' },
    sprite: 'magmarizer',
    category: 'evolution',
    description: {
      en: 'Evolves Magmar into Magmortar when used from the satchel.',
      pt: 'Evolui Magmar em Magmortar quando usado da bolsa.',
    },
    source: {
      en: 'Ginter (Ginkgo Guild) · Space-time distortions',
      pt: 'Ginter (Guilda Ginkgo) · Distorções espaço-tempo',
    },
    price: 10000,
  },
  {
    id: 'reaper-cloth',
    name: { en: 'Reaper Cloth', pt: 'Tecido Sinistro' },
    sprite: 'reaper-cloth',
    category: 'evolution',
    description: {
      en: 'Evolves Dusclops into Dusknoir when used from the satchel.',
      pt: 'Evolui Dusclops em Dusknoir quando usado da bolsa.',
    },
    source: {
      en: 'Ginter (Ginkgo Guild) · Space-time distortions',
      pt: 'Ginter (Guilda Ginkgo) · Distorções espaço-tempo',
    },
    price: 10000,
  },
  {
    id: 'dubious-disc',
    name: { en: 'Dubious Disc', pt: 'Disco Duvidoso' },
    sprite: 'dubious-disc',
    category: 'evolution',
    description: {
      en: 'Evolves Porygon2 into Porygon-Z when used from the satchel.',
      pt: 'Evolui Porygon2 em Porygon-Z quando usado da bolsa.',
    },
    source: {
      en: 'Ginter (Ginkgo Guild) · Space-time distortions',
      pt: 'Ginter (Guilda Ginkgo) · Distorções espaço-tempo',
    },
    price: 10000,
  },
  {
    id: 'upgrade',
    name: { en: 'Upgrade', pt: 'Melhoria' },
    sprite: 'upgrade',
    category: 'evolution',
    description: {
      en: 'Evolves Porygon into Porygon2 when used from the satchel.',
      pt: 'Evolui Porygon em Porygon2 quando usado da bolsa.',
    },
    source: {
      en: 'Ginter (Ginkgo Guild) · Space-time distortions',
      pt: 'Ginter (Guilda Ginkgo) · Distorções espaço-tempo',
    },
    price: 10000,
  },
  {
    id: 'razor-claw',
    name: { en: 'Razor Claw', pt: 'Garra Afiada' },
    sprite: 'razor-claw',
    category: 'evolution',
    description: {
      en: 'Evolves Sneasel into Weavile at night; also raises critical-hit ratio when held.',
      pt: 'Evolui Sneasel em Weavile à noite; também aumenta críticos quando equipada.',
    },
    source: {
      en: 'Ginter · Space-time distortions · ore deposits',
      pt: 'Ginter · Distorções · depósitos de minério',
    },
    price: 10000,
  },
  {
    id: 'razor-fang',
    name: { en: 'Razor Fang', pt: 'Presa Afiada' },
    sprite: 'razor-fang',
    category: 'evolution',
    description: {
      en: 'Evolves Gligar into Gliscor at night; may make foes flinch when held.',
      pt: 'Evolui Gligar em Gliscor à noite; pode fazer o alvo vacilar quando equipada.',
    },
    source: {
      en: 'Ginter · Space-time distortions · ore deposits',
      pt: 'Ginter · Distorções · depósitos de minério',
    },
    price: 10000,
  },

  // Held / battle-adjacent valuables often from shops
  {
    id: 'exp-candy-s',
    name: { en: 'Exp. Candy S', pt: 'Doce Exp. S' },
    sprite: 'exp-candy-s',
    category: 'valuable',
    description: {
      en: 'Grants a small amount of Exp. Points to a Pokémon.',
      pt: 'Concede uma pequena quantidade de Exp. a um Pokémon.',
    },
    source: {
      en: 'Simona Trading Post · missions · outbreaks',
      pt: 'Posto da Simona · missões · outbreaks',
    },
    price: 20,
    currency: 'merit',
  },
  {
    id: 'exp-candy-m',
    name: { en: 'Exp. Candy M', pt: 'Doce Exp. M' },
    sprite: 'exp-candy-m',
    category: 'valuable',
    description: {
      en: 'Grants a moderate amount of Exp. Points to a Pokémon.',
      pt: 'Concede uma quantidade moderada de Exp. a um Pokémon.',
    },
    source: {
      en: 'Simona Trading Post · missions · outbreaks',
      pt: 'Posto da Simona · missões · outbreaks',
    },
    price: 100,
    currency: 'merit',
  },
  {
    id: 'exp-candy-l',
    name: { en: 'Exp. Candy L', pt: 'Doce Exp. L' },
    sprite: 'exp-candy-l',
    category: 'valuable',
    description: {
      en: 'Grants a large amount of Exp. Points to a Pokémon.',
      pt: 'Concede uma grande quantidade de Exp. a um Pokémon.',
    },
    source: {
      en: 'Simona Trading Post · missions · outbreaks',
      pt: 'Posto da Simona · missões · outbreaks',
    },
    price: 500,
    currency: 'merit',
  },
  {
    id: 'rare-candy',
    name: { en: 'Rare Candy', pt: 'Doce Raro' },
    sprite: 'rare-candy',
    category: 'valuable',
    description: {
      en: 'Raises a Pokémon’s level by 1.',
      pt: 'Aumenta o nível de um Pokémon em 1.',
    },
    source: {
      en: 'Simona Trading Post · missions · distortions',
      pt: 'Posto da Simona · missões · distorções',
    },
    price: 1000,
    currency: 'merit',
  },
  {
    id: 'seed-of-mastery',
    name: { en: 'Seed of Mastery', pt: 'Semente de Maestria' },
    sprite: 'seed-of-mastery',
    category: 'valuable',
    description: {
      en: 'Master a move so it can be used more freely in battle.',
      pt: 'Domina um golpe para usá-lo com mais liberdade em batalha.',
    },
    source: {
      en: 'Simona Trading Post · Path of Solitude · requests',
      pt: 'Posto da Simona · Path of Solitude · pedidos',
    },
    price: 1200,
    currency: 'merit',
  },
  {
    id: 'grit-dust',
    name: { en: 'Grit Dust', pt: 'Poeira de Grit' },
    sprite: 'grit-dust',
    category: 'valuable',
    description: {
      en: 'Raises a Pokémon’s effort level for one of its stats.',
      pt: 'Aumenta o nível de esforço de um atributo de um Pokémon.',
    },
    source: {
      en: 'Simona Trading Post · releasing Pokémon · battles',
      pt: 'Posto da Simona · liberar Pokémon · batalhas',
    },
    price: 100,
    currency: 'merit',
  },
  {
    id: 'grit-gravel',
    name: { en: 'Grit Gravel', pt: 'Cascalho de Grit' },
    sprite: 'grit-gravel',
    category: 'valuable',
    description: {
      en: 'Raises effort levels more than Grit Dust.',
      pt: 'Aumenta esforços mais que a Poeira de Grit.',
    },
    source: {
      en: 'Simona Trading Post · releasing Pokémon',
      pt: 'Posto da Simona · liberar Pokémon',
    },
    price: 300,
    currency: 'merit',
  },
  {
    id: 'grit-pebble',
    name: { en: 'Grit Pebble', pt: 'Seixo de Grit' },
    sprite: 'grit-pebble',
    category: 'valuable',
    description: {
      en: 'Raises effort levels more than Grit Gravel.',
      pt: 'Aumenta esforços mais que o Cascalho de Grit.',
    },
    source: {
      en: 'Simona Trading Post · releasing Pokémon',
      pt: 'Posto da Simona · liberar Pokémon',
    },
    price: 600,
    currency: 'merit',
  },
  {
    id: 'grit-rock',
    name: { en: 'Grit Rock', pt: 'Rocha de Grit' },
    sprite: 'grit-rock',
    category: 'valuable',
    description: {
      en: 'Greatly raises a Pokémon’s effort level for one stat.',
      pt: 'Aumenta muito o nível de esforço de um atributo.',
    },
    source: {
      en: 'Simona Trading Post · releasing Pokémon',
      pt: 'Posto da Simona · liberar Pokémon',
    },
    price: 1000,
    currency: 'merit',
  },

  // Rotom appliances (Ginter one-time)
  {
    id: 'mechanical-box',
    name: { en: 'Mechanical Box', pt: 'Caixa Mecânica' },
    sprite: 'upgrade',
    category: 'rotom',
    description: {
      en: 'Changes Rotom into Heat Rotom when used from storage.',
      pt: 'Muda Rotom para Heat Rotom quando usada no depósito.',
    },
    source: {
      en: 'Ginter special (one-time purchase)',
      pt: 'Especial do Ginter (compra única)',
    },
    price: 20000,
  },
  {
    id: 'mechanical-cabinet',
    name: { en: 'Mechanical Cabinet', pt: 'Armário Mecânico' },
    sprite: 'upgrade',
    category: 'rotom',
    description: {
      en: 'Changes Rotom into Frost Rotom when used from storage.',
      pt: 'Muda Rotom para Frost Rotom quando usado no depósito.',
    },
    source: {
      en: 'Ginter special (one-time purchase)',
      pt: 'Especial do Ginter (compra única)',
    },
    price: 20000,
  },
  {
    id: 'mechanical-tub',
    name: { en: 'Mechanical Tub', pt: 'Banheira Mecânica' },
    sprite: 'upgrade',
    category: 'rotom',
    description: {
      en: 'Changes Rotom into Wash Rotom when used from storage.',
      pt: 'Muda Rotom para Wash Rotom quando usada no depósito.',
    },
    source: {
      en: 'Ginter special (one-time purchase)',
      pt: 'Especial do Ginter (compra única)',
    },
    price: 20000,
  },
  {
    id: 'mechanical-pinwheel',
    name: { en: 'Mechanical Pinwheel', pt: 'Cata-vento Mecânico' },
    sprite: 'upgrade',
    category: 'rotom',
    description: {
      en: 'Changes Rotom into Fan Rotom when used from storage.',
      pt: 'Muda Rotom para Fan Rotom quando usado no depósito.',
    },
    source: {
      en: 'Ginter special (one-time purchase)',
      pt: 'Especial do Ginter (compra única)',
    },
    price: 20000,
  },
  {
    id: 'mechanical-saw',
    name: { en: 'Mechanical Circular Saw', pt: 'Serra Circular Mecânica' },
    sprite: 'upgrade',
    category: 'rotom',
    description: {
      en: 'Changes Rotom into Mow Rotom when used from storage.',
      pt: 'Muda Rotom para Mow Rotom quando usada no depósito.',
    },
    source: {
      en: 'Ginter special (one-time purchase)',
      pt: 'Especial do Ginter (compra única)',
    },
    price: 20000,
  },

  // Key / story valuables often relevant to item guides
  {
    id: 'odd-keystone',
    name: { en: 'Odd Keystone', pt: 'Pedra Chave Estranha' },
    sprite: 'odd-keystone',
    category: 'key',
    description: {
      en: 'A curious stone tied to Spiritomb. Needed for certain requests.',
      pt: 'Pedra curiosa ligada a Spiritomb. Usada em certos pedidos.',
    },
    source: {
      en: 'Requests · exploration finds',
      pt: 'Pedidos · achados na exploração',
    },
  },
  {
    id: 'adamant-crystal',
    name: { en: 'Adamant Crystal', pt: 'Cristal Adamant' },
    sprite: 'adamant-crystal',
    category: 'key',
    description: {
      en: 'A crystal linked to Dialga’s origin form.',
      pt: 'Cristal ligado à forma originária de Dialga.',
    },
    source: {
      en: 'Story progression / Temple of Sinnoh events',
      pt: 'Progresso da história / eventos do Templo de Sinnoh',
    },
  },
  {
    id: 'lustrous-globe',
    name: { en: 'Lustrous Globe', pt: 'Orbe Lustroso' },
    sprite: 'lustrous-globe',
    category: 'key',
    description: {
      en: 'A globe linked to Palkia’s origin form.',
      pt: 'Orbe ligado à forma originária de Palkia.',
    },
    source: {
      en: 'Story progression / Temple of Sinnoh events',
      pt: 'Progresso da história / eventos do Templo de Sinnoh',
    },
  },
  {
    id: 'griseous-core',
    name: { en: 'Griseous Core', pt: 'Núcleo Griseous' },
    sprite: 'griseous-core',
    category: 'key',
    description: {
      en: 'A core linked to Giratina’s origin form.',
      pt: 'Núcleo ligado à forma originária de Giratina.',
    },
    source: {
      en: 'Story / Turnback Cave related progression',
      pt: 'História / progresso ligado à Caverna do Retorno',
    },
  },
]
