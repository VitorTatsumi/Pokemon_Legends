import type { Localized } from './markets'

export type LzaLegendaryKind = 'legendary' | 'mythical' | 'dlc'

export type LzaLegendary = {
  id: string
  dex: number
  kind: LzaLegendaryKind
  name: Localized
  location: Localized
  /** Rough map pin on Lumiose overview when known (percent). */
  map?: { x: number; y: number }
  /** Story / mission gate */
  unlock: Localized
  requirements: Localized
  tips: Localized
  level?: number
  /** Optional encounter / promo shot under /lza-encounters/ */
  encounterImageSrc?: string
}

/**
 * Legendary & Mythical Pokémon obtainable in Legends: Z-A
 * (base game + Mega Dimension DLC). Sources: Serebii / Game8.
 */
export const LZA_LEGENDARIES: LzaLegendary[] = [
  {
    id: 'xerneas',
    dex: 716,
    kind: 'legendary',
    name: { en: 'Xerneas', pt: 'Xerneas' },
    location: { en: 'Wild Zone 11', pt: 'Zona Selvagem 11' },
    map: { x: 62, y: 48 },
    unlock: {
      en: 'Post-game — after L mentions the two legendaries approaching Lumiose.',
      pt: 'Pós-jogo — depois que L menciona os dois lendários a caminho de Lumiose.',
    },
    requirements: {
      en: 'Talk to Mable; defeat Anomalous Alphas in Wild Zones 3, 5, and 9; then return to Mable.',
      pt: 'Fale com Mable; derrote os Alfas anômalos nas Zonas 3, 5 e 9; volte a falar com Mable.',
    },
    tips: {
      en: 'Appears by the water in Wild Zone 11 at Lv. 75. Save before the encounter.',
      pt: 'Aparece perto da água na Zona 11 no Nv. 75. Salve antes do encontro.',
    },
    level: 75,
    encounterImageSrc: '/lza-encounters/xerneas.png?v=1',
  },
  {
    id: 'yveltal',
    dex: 717,
    kind: 'legendary',
    name: { en: 'Yveltal', pt: 'Yveltal' },
    location: {
      en: 'Rouge Sector 2 — Galerie de la Lune rooftop',
      pt: 'Setor Rouge 2 — terraço da Galerie de la Lune',
    },
    map: { x: 48, y: 58 },
    unlock: {
      en: 'Post-game — parallel quest to Xerneas (“The One That Takes”).',
      pt: 'Pós-jogo — missão paralela à do Xerneas (“The One That Takes”).',
    },
    requirements: {
      en: 'Talk to Grisham/Griselle at Café Nouveau, then Vinnie at Quasartico. Clear simulated Rogue Mega rematches (Victreebel, Hawlucha, Tyranitar).',
      pt: 'Fale com Grisham/Griselle no Café Nouveau e com Vinnie na Quasartico. Vença as rematches simuladas de Rogue Mega (Victreebel, Hawlucha, Tyranitar).',
    },
    tips: {
      en: 'Found on the shopping-arcade roof in Rouge Sector 2 at Lv. 75.',
      pt: 'No terraço da galeria no Setor Rouge 2, Nv. 75.',
    },
    level: 75,
    encounterImageSrc: '/lza-encounters/yveltal.png?v=1',
  },
  {
    id: 'zygarde',
    dex: 718,
    kind: 'legendary',
    name: { en: 'Zygarde', pt: 'Zygarde' },
    location: {
      en: 'Wild Zone 20 — beneath Prism Tower',
      pt: 'Zona Selvagem 20 — sob a Torre Prism',
    },
    map: { x: 50, y: 50 },
    unlock: {
      en: 'After catching both Xerneas and Yveltal; defeat L at Hotel Z.',
      pt: 'Após capturar Xerneas e Yveltal; derrote L no Hotel Z.',
    },
    requirements: {
      en: 'Three-phase fight (10% → 50% → Complete). Survive Core Enforcer / Land’s Wrath patterns.',
      pt: 'Luta em três fases (10% → 50% → Completo). Sobreviva a Core Enforcer / Land’s Wrath.',
    },
    tips: {
      en: 'Catchable at Lv. 84 after the Complete Forme phase. L gives the Zygarde Cube for form changes.',
      pt: 'Capturável no Nv. 84 após a fase Completa. L entrega o Cubo Zygarde para trocar formas.',
    },
    level: 84,
    encounterImageSrc: '/lza-encounters/zygarde.png?v=1',
  },
  {
    id: 'diancie',
    dex: 719,
    kind: 'mythical',
    name: { en: 'Diancie', pt: 'Diancie' },
    location: {
      en: 'Looker Bureau → Magenta Sector 8 rooftop',
      pt: 'Looker Bureau → terraço do Setor Magenta 8',
    },
    map: { x: 42, y: 44 },
    unlock: {
      en: 'Requires Diancite in your bag, then visit Looker Bureau.',
      pt: 'Requer Diancite na mochila; depois visite o Looker Bureau.',
    },
    requirements: {
      en: 'Talk to Mimi/Emma; follow Mimi to a Mega Crystal rooftop. Catch Diancie when it appears with Carbink.',
      pt: 'Fale com Mimi/Emma; siga Mimi até um terraço com Mega Cristais. Capture Diancie quando aparecer com Carbink.',
    },
    tips: {
      en: 'Encounter level 70. Emma comments on Mega Evolution lore after the catch.',
      pt: 'Nível 70. Emma comenta a lore de Mega Evolução após a captura.',
    },
    level: 70,
    encounterImageSrc: '/lza-encounters/diancie.jpg?v=1',
  },
  {
    id: 'mewtwo',
    dex: 150,
    kind: 'legendary',
    name: { en: 'Mewtwo', pt: 'Mewtwo' },
    location: { en: 'Lysandre Labs B3F', pt: 'Laboratórios Lysandre B3F' },
    map: { x: 55, y: 62 },
    unlock: {
      en: 'Requires Mewtwonite X and Y (event distribution), then enter Lysandre Labs B3F.',
      pt: 'Requer Mewtwonite X e Y (distribuição de evento); depois entre em Lysandre Labs B3F.',
    },
    requirements: {
      en: 'Lab reactivates Project M. Mable calls you — catch Mewtwo on site.',
      pt: 'O lab reativa o Projeto M. Mable liga — capture Mewtwo no local.',
    },
    tips: {
      en: 'Lv. 70. Bring strong Fighting / Dark / Ghost coverage.',
      pt: 'Nv. 70. Leve cobertura Lutador / Sombrio / Fantasma.',
    },
    level: 70,
    encounterImageSrc: '/lza-encounters/mewtwo.jpg?v=1',
  },
  {
    id: 'heatran',
    dex: 485,
    kind: 'dlc',
    name: { en: 'Heatran', pt: 'Heatran' },
    location: {
      en: 'Hyperspace Infernal Arena (Mega Dimension)',
      pt: 'Arena Infernal do Hiperespaço (Mega Dimension)',
    },
    unlock: {
      en: 'Progress Mega Dimension story into the Infernal Arena Rogue Mega fight.',
      pt: 'Avance a história de Mega Dimension até a luta Rogue Mega na Arena Infernal.',
    },
    requirements: {
      en: 'Defeat Mega Heatran while dodging magma hazards, then catch it. Receive Heatranite.',
      pt: 'Derrote Mega Heatran desviando da lava e capture-o. Receba a Heatranite.',
    },
    tips: { en: 'Lv. 80. Watch floor lava patterns.', pt: 'Nv. 80. Cuidado com padrões de lava no chão.' },
    level: 80,
    encounterImageSrc: '/lza-encounters/heatran.png?v=1',
  },
  {
    id: 'darkrai',
    dex: 491,
    kind: 'dlc',
    name: { en: 'Darkrai', pt: 'Darkrai' },
    location: {
      en: 'Hyperspace Newmoon Nightmare',
      pt: 'Pesadelo da Lua Nova (Hiperespaço)',
    },
    unlock: {
      en: 'Craft a Bad Dreams Cruller with Ansha to reach the distortion above Prism Tower.',
      pt: 'Prepare um Bad Dreams Cruller com Ansha para a distorção acima da Torre Prism.',
    },
    requirements: {
      en: 'Two-phase fight (base → Mega). Catch after victory; receive Darkrainite.',
      pt: 'Luta em duas fases (base → Mega). Capture após vencer; receba a Darkrainite.',
    },
    tips: {
      en: 'Lv. 85. Suggested berries: Hyper Tanga ×3, Kasib ×3, Coba ×1, Yache ×1.',
      pt: 'Nv. 85. Berries sugeridas: Hyper Tanga ×3, Kasib ×3, Coba ×1, Yache ×1.',
    },
    level: 85,
    encounterImageSrc: '/lza-encounters/darkrai.png?v=1',
  },
  {
    id: 'groudon',
    dex: 383,
    kind: 'dlc',
    name: { en: 'Groudon', pt: 'Groudon' },
    location: {
      en: 'Hyperspace Desolate Land (Jaune Sector 11 portal)',
      pt: 'Terra Desolada do Hiperespaço (portal Setor Jaune 11)',
    },
    unlock: {
      en: 'After Darkrai; research with Corbeau; craft Omega Donut (Hoennian Salt).',
      pt: 'Após Darkrai; pesquisas com Corbeau; prepare o Omega Donut (Sal de Hoenn).',
    },
    requirements: {
      en: 'Defeat Groudon then Primal Groudon (Water moves fail vs Primal). Catch; receive Red Orb.',
      pt: 'Derrote Groudon e depois Groudon Primal (Água falha no Primal). Capture; receba o Orbe Vermelho.',
    },
    tips: { en: 'Lv. 80.', pt: 'Nv. 80.' },
    level: 80,
    encounterImageSrc: '/lza-encounters/groudon.png?v=1',
  },
  {
    id: 'kyogre',
    dex: 382,
    kind: 'dlc',
    name: { en: 'Kyogre', pt: 'Kyogre' },
    location: {
      en: 'Hyperspace Primordial Sea (Wild Zone 5 portal)',
      pt: 'Mar Primordial do Hiperespaço (portal Zona Selvagem 5)',
    },
    unlock: {
      en: 'After Darkrai; craft Alpha Donut with Corbeau’s recipe + Hoennian Salt.',
      pt: 'Após Darkrai; prepare o Alpha Donut com a receita de Corbeau + Sal de Hoenn.',
    },
    requirements: {
      en: 'Defeat Kyogre then Primal Kyogre. Catch; receive Blue Orb.',
      pt: 'Derrote Kyogre e depois Kyogre Primal. Capture; receba o Orbe Azul.',
    },
    tips: { en: 'Lv. 80.', pt: 'Nv. 80.' },
    level: 80,
    encounterImageSrc: '/lza-encounters/kyogre.png?v=1',
  },
  {
    id: 'rayquaza',
    dex: 384,
    kind: 'dlc',
    name: { en: 'Rayquaza', pt: 'Rayquaza' },
    location: {
      en: 'Hyperspace Sky Pillar (portal above Hotel Z)',
      pt: 'Sky Pillar do Hiperespaço (portal acima do Hotel Z)',
    },
    unlock: {
      en: 'After Groudon & Kyogre; craft Delta Donut for Ansha.',
      pt: 'Após Groudon e Kyogre; prepare o Delta Donut para Ansha.',
    },
    requirements: {
      en: 'Defeat Rayquaza then Mega Rayquaza (wind protection). Catch and show Ansha.',
      pt: 'Derrote Rayquaza e depois Mega Rayquaza (proteção de vento). Capture e mostre a Ansha.',
    },
    tips: {
      en: 'Lv. 85. Unlocks many post-Rayquaza mythical side missions.',
      pt: 'Nv. 85. Libera várias missões de míticos pós-Rayquaza.',
    },
    level: 85,
    encounterImageSrc: '/lza-encounters/rayquaza.jpg?v=2',
  },
  {
    id: 'meltan',
    dex: 808,
    kind: 'mythical',
    name: { en: 'Meltan', pt: 'Meltan' },
    location: { en: 'Rouge Sector 1 (side mission)', pt: 'Setor Rouge 1 (missão secundária)' },
    map: { x: 46, y: 56 },
    unlock: {
      en: 'After defeating Rayquaza — side mission appears in Rouge Sector 1.',
      pt: 'Após derrotar Rayquaza — missão secundária no Setor Rouge 1.',
    },
    requirements: {
      en: 'A trainer asks you to catch Meltan before it damages the area.',
      pt: 'Um treinador pede que você capture Meltan antes que cause estragos.',
    },
    tips: { en: 'Lv. 70. Leads into Melmetal gift sequence.', pt: 'Nv. 70. Leva à sequência do Melmetal.' },
    level: 70,
    encounterImageSrc: '/lza-encounters/meltan.png?v=2',
  },
  {
    id: 'melmetal',
    dex: 809,
    kind: 'mythical',
    name: { en: 'Melmetal', pt: 'Melmetal' },
    location: {
      en: 'Hyperspace Lumiose (after Meltan)',
      pt: 'Lumiose Hiperespaço (após Meltan)',
    },
    unlock: {
      en: 'Catch Meltan; follow the new Hyperspace portal.',
      pt: 'Capture Meltan; siga o novo portal do Hiperespaço.',
    },
    requirements: {
      en: 'Talk to the girl among Meltan; say you like Meltan then Melmetal to receive it.',
      pt: 'Fale com a menina entre os Meltan; diga que gosta de Meltan e depois de Melmetal para recebê-lo.',
    },
    tips: { en: 'Gift at Lv. 80.', pt: 'Presente no Nv. 80.' },
    level: 80,
    encounterImageSrc: '/lza-encounters/melmetal.png?v=2',
  },
  {
    id: 'magearna',
    dex: 801,
    kind: 'mythical',
    name: { en: 'Magearna', pt: 'Magearna' },
    location: { en: 'Quasartico Inc. (Jett)', pt: 'Quasartico Inc. (Jett)' },
    map: { x: 52, y: 40 },
    unlock: {
      en: 'After Rayquaza; help Vinnie, then meet Jett with a dormant ball.',
      pt: 'Após Rayquaza; ajude Vinnie e encontre Jett com a Poké Ball adormecida.',
    },
    requirements: {
      en: 'Bring 999 Mega Shards; activate the Magearnite Mega Stone to awaken Magearna.',
      pt: 'Leve 999 Mega Fragmentos; ative a Magearnite para despertar Magearna.',
    },
    tips: { en: 'Joins at Lv. 80 with its Mega Stone.', pt: 'Entra no Nv. 80 com sua Mega Pedra.' },
    level: 80,
    encounterImageSrc: '/lza-encounters/magearna.png?v=1',
  },
  {
    id: 'hoopa',
    dex: 720,
    kind: 'mythical',
    name: { en: 'Hoopa', pt: 'Hoopa' },
    location: { en: 'Hyperspace Lumiose', pt: 'Lumiose Hiperespaço' },
    unlock: {
      en: 'After Rayquaza; Prison Bottle found in AZ’s room at Hotel Z.',
      pt: 'Após Rayquaza; Prison Bottle encontrada no quarto de AZ no Hotel Z.',
    },
    requirements: {
      en: 'Enter the distortion Corbeau reports; defeat Hoopa Unbound, then it joins (can shift to Confined).',
      pt: 'Entre na distorção que Corbeau reporta; derrote Hoopa Unbound; ele se junta (pode ir para Confined).',
    },
    tips: { en: 'Lv. 80.', pt: 'Nv. 80.' },
    level: 80,
    encounterImageSrc: '/lza-encounters/hoopa.png?v=1',
  },
  {
    id: 'volcanion',
    dex: 721,
    kind: 'mythical',
    name: { en: 'Volcanion', pt: 'Volcanion' },
    location: {
      en: 'Pokémon Research Lab (Mable)',
      pt: 'Laboratório de Pesquisa Pokémon (Mable)',
    },
    map: { x: 58, y: 36 },
    unlock: {
      en: 'After Rayquaza — Mable finds a hacked ball containing Volcanion.',
      pt: 'Após Rayquaza — Mable acha uma ball hackeada com Volcanion.',
    },
    requirements: {
      en: 'Battle Volcanion in a secluded lab room, then catch it.',
      pt: 'Lute contra Volcanion numa sala isolada do lab e capture-o.',
    },
    tips: { en: 'Lv. 80. Fire/Water — prepare accordingly.', pt: 'Nv. 80. Fogo/Água — prepare-se.' },
    level: 80,
    encounterImageSrc: '/lza-encounters/volcanion.png?v=1',
  },
  {
    id: 'genesect',
    dex: 649,
    kind: 'mythical',
    name: { en: 'Genesect', pt: 'Genesect' },
    location: {
      en: 'Hyperspace Lumiose (via Wild Zone 13 wall)',
      pt: 'Lumiose Hiperespaço (via parede Zona 13)',
    },
    map: { x: 68, y: 42 },
    unlock: {
      en: 'After Rayquaza; buy all four Genesect Drives (540 Mega Shards each) from the Vert Sector 7 TM vendor.',
      pt: 'Após Rayquaza; compre as quatro Genesect Drives (540 Mega Fragmentos cada) no vendedor de MTs do Setor Vert 7.',
    },
    requirements: {
      en: 'Ask the vendor for intel → Wild Zone 13 wall distortion → catch Genesect.',
      pt: 'Peça info ao vendedor → distorção na parede da Zona 13 → capture Genesect.',
    },
    tips: { en: 'Lv. 60.', pt: 'Nv. 60.' },
    level: 60,
    encounterImageSrc: '/lza-encounters/genesect.png?v=1',
  },
  {
    id: 'marshadow',
    dex: 802,
    kind: 'mythical',
    name: { en: 'Marshadow', pt: 'Marshadow' },
    location: {
      en: 'Rouge Sector 1 training court (North Boulevard lead-in)',
      pt: 'Quadra de treino do Setor Rouge 1 (pista do Boulevard Norte)',
    },
    map: { x: 47, y: 55 },
    unlock: {
      en: 'After Rayquaza — Safety Group member on North Boulevard starts the ghost-child rumor quest.',
      pt: 'Após Rayquaza — membro do Safety Group no Boulevard Norte inicia a missão do “filho fantasma”.',
    },
    requirements: {
      en: 'At the training court, wait until Prism Tower’s shadow tip hits the Poké Ball mark, then interact with the ground.',
      pt: 'Na quadra, espere a ponta da sombra da Torre Prism cruzar a marca de Poké Ball e interaja com o chão.',
    },
    tips: { en: 'Lv. 80. Timing with the tower shadow is required.', pt: 'Nv. 80. O timing da sombra da torre é obrigatório.' },
    level: 80,
    encounterImageSrc: '/lza-encounters/marshadow.png?v=1',
  },
  {
    id: 'zeraora',
    dex: 807,
    kind: 'mythical',
    name: { en: 'Zeraora', pt: 'Zeraora' },
    location: {
      en: 'Hyperspace portal near the train station (South Boulevard path)',
      pt: 'Portal do Hiperespaço perto da estação (caminho Boulevard Sul)',
    },
    map: { x: 50, y: 70 },
    unlock: {
      en: 'After Rayquaza; catch Diancie & Mewtwo; trade Canari Bread for Popping Candy; craft Plasma Donut with Ansha.',
      pt: 'Após Rayquaza; capture Diancie e Mewtwo; troque Canari Bread por Popping Candy; prepare Plasma Donut com Ansha.',
    },
    requirements: {
      en: 'Enter the Hyperspace fight with Korrina/Emma vs Rogue Mega Zeraora, then catch it.',
      pt: 'Entre no Hiperespaço com Korrina/Emma contra Rogue Mega Zeraora e capture-o.',
    },
    tips: {
      en: 'Lv. 85. Watch Electroweb / Plasma Fists patterns.',
      pt: 'Nv. 85. Cuidado com padrões de Electroweb / Plasma Fists.',
    },
    level: 85,
    encounterImageSrc: '/lza-encounters/zeraora.png?v=1',
  },
  {
    id: 'latias',
    dex: 380,
    kind: 'dlc',
    name: { en: 'Latias', pt: 'Latias' },
    location: {
      en: 'Hyperspace Lumiose — Special Scans (Unknown Zones)',
      pt: 'Lumiose Hiperespaço — Special Scans (Zonas Desconhecidas)',
    },
    unlock: {
      en: 'After Rayquaza; accept Corbeau’s Special Scans task; earn 25,000 Hyperspace points, then ask Philippe to scan.',
      pt: 'Após Rayquaza; aceite a tarefa de Special Scans de Corbeau; ganhe 25.000 pontos no Hiperespaço e peça scan a Philippe.',
    },
    requirements: {
      en: 'Random Unknown Zone encounter. After 5 dry scans, the next legendary is guaranteed until all Special Scan targets are caught. Can be shiny.',
      pt: 'Encontro aleatório em Zona Desconhecida. Após 5 scans sem achado, o próximo lendário é garantido até pegar todos do Special Scan. Pode ser shiny.',
    },
    tips: {
      en: 'Appears around Lv. 60. Keep scanning until Latias appears in an Unknown Zone.',
      pt: 'Aparece por volta do Nv. 60. Continue os scans até Latias surgir numa Zona Desconhecida.',
    },
    level: 60,
    encounterImageSrc: '/lza-encounters/latias.png?v=2',
  },
  {
    id: 'latios',
    dex: 381,
    kind: 'dlc',
    name: { en: 'Latios', pt: 'Latios' },
    location: {
      en: 'Hyperspace Lumiose — Special Scans (Unknown Zones)',
      pt: 'Lumiose Hiperespaço — Special Scans (Zonas Desconhecidas)',
    },
    unlock: {
      en: 'After Rayquaza; accept Corbeau’s Special Scans task; earn 25,000 Hyperspace points, then ask Philippe to scan.',
      pt: 'Após Rayquaza; aceite a tarefa de Special Scans de Corbeau; ganhe 25.000 pontos no Hiperespaço e peça scan a Philippe.',
    },
    requirements: {
      en: 'Random Unknown Zone encounter. After 5 dry scans, the next legendary is guaranteed until all Special Scan targets are caught. Can be shiny.',
      pt: 'Encontro aleatório em Zona Desconhecida. Após 5 scans sem achado, o próximo lendário é garantido até pegar todos do Special Scan. Pode ser shiny.',
    },
    tips: {
      en: 'Appears around Lv. 60. Keep scanning until Latios appears in an Unknown Zone.',
      pt: 'Aparece por volta do Nv. 60. Continue os scans até Latios surgir numa Zona Desconhecida.',
    },
    level: 60,
    encounterImageSrc: '/lza-encounters/latios.jpg?v=2',
  },
  {
    id: 'cobalion',
    dex: 638,
    kind: 'dlc',
    name: { en: 'Cobalion', pt: 'Cobalion' },
    location: {
      en: 'Hyperspace Lumiose — Special Scans (Unknown Zones)',
      pt: 'Lumiose Hiperespaço — Special Scans (Zonas Desconhecidas)',
    },
    unlock: {
      en: 'After Rayquaza; accept Corbeau’s Special Scans task; earn 25,000 Hyperspace points, then ask Philippe to scan.',
      pt: 'Após Rayquaza; aceite a tarefa de Special Scans de Corbeau; ganhe 25.000 pontos no Hiperespaço e peça scan a Philippe.',
    },
    requirements: {
      en: 'Random Unknown Zone encounter. After 5 dry scans, the next legendary is guaranteed until all Special Scan targets are caught. Can be shiny.',
      pt: 'Encontro aleatório em Zona Desconhecida. Após 5 scans sem achado, o próximo lendário é garantido até pegar todos do Special Scan. Pode ser shiny.',
    },
    tips: {
      en: 'Appears around Lv. 60. One of the Swords of Justice via Special Scans.',
      pt: 'Aparece por volta do Nv. 60. Uma das Espadas da Justiça via Special Scans.',
    },
    level: 60,
    encounterImageSrc: '/lza-encounters/cobalion.png?v=2',
  },
  {
    id: 'terrakion',
    dex: 639,
    kind: 'dlc',
    name: { en: 'Terrakion', pt: 'Terrakion' },
    location: {
      en: 'Hyperspace Lumiose — Special Scans (Unknown Zones)',
      pt: 'Lumiose Hiperespaço — Special Scans (Zonas Desconhecidas)',
    },
    unlock: {
      en: 'After Rayquaza; accept Corbeau’s Special Scans task; earn 25,000 Hyperspace points, then ask Philippe to scan.',
      pt: 'Após Rayquaza; aceite a tarefa de Special Scans de Corbeau; ganhe 25.000 pontos no Hiperespaço e peça scan a Philippe.',
    },
    requirements: {
      en: 'Random Unknown Zone encounter. After 5 dry scans, the next legendary is guaranteed until all Special Scan targets are caught. Can be shiny.',
      pt: 'Encontro aleatório em Zona Desconhecida. Após 5 scans sem achado, o próximo lendário é garantido até pegar todos do Special Scan. Pode ser shiny.',
    },
    tips: {
      en: 'Appears around Lv. 60. One of the Swords of Justice via Special Scans.',
      pt: 'Aparece por volta do Nv. 60. Uma das Espadas da Justiça via Special Scans.',
    },
    level: 60,
    encounterImageSrc: '/lza-encounters/terrakion.png?v=2',
  },
  {
    id: 'virizion',
    dex: 640,
    kind: 'dlc',
    name: { en: 'Virizion', pt: 'Virizion' },
    location: {
      en: 'Hyperspace Lumiose — Special Scans (Unknown Zones)',
      pt: 'Lumiose Hiperespaço — Special Scans (Zonas Desconhecidas)',
    },
    unlock: {
      en: 'After Rayquaza; accept Corbeau’s Special Scans task; earn 25,000 Hyperspace points, then ask Philippe to scan.',
      pt: 'Após Rayquaza; aceite a tarefa de Special Scans de Corbeau; ganhe 25.000 pontos no Hiperespaço e peça scan a Philippe.',
    },
    requirements: {
      en: 'Random Unknown Zone encounter. After 5 dry scans, the next legendary is guaranteed until all Special Scan targets are caught. Can be shiny.',
      pt: 'Encontro aleatório em Zona Desconhecida. Após 5 scans sem achado, o próximo lendário é garantido até pegar todos do Special Scan. Pode ser shiny.',
    },
    tips: {
      en: 'Appears around Lv. 60. One of the Swords of Justice via Special Scans.',
      pt: 'Aparece por volta do Nv. 60. Uma das Espadas da Justiça via Special Scans.',
    },
    level: 60,
    encounterImageSrc: '/lza-encounters/virizion.jpg?v=2',
  },
  {
    id: 'keldeo',
    dex: 647,
    kind: 'dlc',
    name: { en: 'Keldeo', pt: 'Keldeo' },
    location: {
      en: 'Hyperspace Lumiose — Special Scans (Unknown Zones)',
      pt: 'Lumiose Hiperespaço — Special Scans (Zonas Desconhecidas)',
    },
    unlock: {
      en: 'After Rayquaza; accept Corbeau’s Special Scans task; earn 25,000 Hyperspace points, then ask Philippe to scan.',
      pt: 'Após Rayquaza; aceite a tarefa de Special Scans de Corbeau; ganhe 25.000 pontos no Hiperespaço e peça scan a Philippe.',
    },
    requirements: {
      en: 'Random Unknown Zone encounter. After 5 dry scans, the next legendary is guaranteed until all Special Scan targets are caught. Cannot be shiny.',
      pt: 'Encontro aleatório em Zona Desconhecida. Após 5 scans sem achado, o próximo lendário é garantido até pegar todos do Special Scan. Não pode ser shiny.',
    },
    tips: {
      en: 'Appears around Lv. 60. Mythical Special Scan target — no shiny form.',
      pt: 'Aparece por volta do Nv. 60. Alvo mítico do Special Scan — sem forma shiny.',
    },
    level: 60,
    encounterImageSrc: '/lza-encounters/keldeo.jpg?v=2',
  },
  {
    id: 'meloetta',
    dex: 648,
    kind: 'dlc',
    name: { en: 'Meloetta', pt: 'Meloetta' },
    location: {
      en: 'Hyperspace Lumiose — Special Scans (Unknown Zones)',
      pt: 'Lumiose Hiperespaço — Special Scans (Zonas Desconhecidas)',
    },
    unlock: {
      en: 'After Rayquaza; accept Corbeau’s Special Scans task; earn 25,000 Hyperspace points, then ask Philippe to scan.',
      pt: 'Após Rayquaza; aceite a tarefa de Special Scans de Corbeau; ganhe 25.000 pontos no Hiperespaço e peça scan a Philippe.',
    },
    requirements: {
      en: 'Random Unknown Zone encounter. After 5 dry scans, the next legendary is guaranteed until all Special Scan targets are caught. Cannot be shiny.',
      pt: 'Encontro aleatório em Zona Desconhecida. Após 5 scans sem achado, o próximo lendário é garantido até pegar todos do Special Scan. Não pode ser shiny.',
    },
    tips: {
      en: 'Appears around Lv. 60. Mythical Special Scan target — no shiny form.',
      pt: 'Aparece por volta do Nv. 60. Alvo mítico do Special Scan — sem forma shiny.',
    },
    level: 60,
    encounterImageSrc: '/lza-encounters/meloetta.png?v=3',
  },
]
