import type { HisuiRegionId } from './hisuiRegions'
import type { Localized } from './laCollectible'

export type LaLegendaryKind = 'noble' | 'legendary' | 'mythical'

export type LaLegendary = {
  id: string
  dex: number
  kind: LaLegendaryKind
  name: Localized
  /** Short lore / encounter summary shown in the detail panel. */
  description: Localized
  /** Typing shown in the detail panel (e.g. "Fire / Steel"). */
  typing: Localized
  regionId: HisuiRegionId
  subregionId: string
  map: { x: number; y: number }
  detailMap?: { x: number; y: number }
  mission: Localized
  requirements: Localized
  tips: Localized
  rewards?: Localized
  /** In-game encounter / noble intro screenshot under /la-encounters/ */
  encounterImageSrc?: string
}

export const LA_LEGENDARY_KIND_KEYS: Record<
  LaLegendaryKind,
  'laLegKindNoble' | 'laLegKindLegendary' | 'laLegKindMythical'
> = {
  noble: 'laLegKindNoble',
  legendary: 'laLegKindLegendary',
  mythical: 'laLegKindMythical',
}

export const LA_LEGENDARIES: LaLegendary[] = [
  {
    id: 'kleavor',
    dex: 900,
    kind: 'noble',
    name: { en: 'Noble Kleavor', pt: 'Nobre Kleavor' },
    description: {
      en: 'Lord of the Woods warden-frenzied form. Quell the frenzy at Grandtree Arena with balms before the Survey Corps can continue.',
      pt: 'Forma frenética do Senhor das Florestas. Acalme o frenesi na Arena da Grande Árvore com bálsamos para o Corpo de Pesquisa seguir.',
    },
    typing: { en: 'Bug / Rock', pt: 'Inseto / Pedra' },
    regionId: 'obsidian',
    subregionId: 'grandtree-arena',
    map: { x: 47.74, y: 66.04 },
    detailMap: { x: 86.17, y: 92.58 },
    mission: {
      en: 'Mission 7 — The Frenzy of the Lord of the Woods',
      pt: 'Missão 7 — Frenesi do Senhor das Florestas',
    },
    requirements: {
      en: 'Balms from Mai; Survey Corps membership; reach Grandtree Arena.',
      pt: 'Bálsamos de Mai; membro do Corpo de Pesquisa; chegar à Arena da Grande Árvore.',
    },
    tips: {
      en: 'Dodge charge attacks; throw balms when Kleavor is stunned. Stay mobile around the arena pillars.',
      pt: 'Desvie das investidas; lance bálsamos quando Kleavor estiver atordoado. Mova-se entre os pilares da arena.',
    },
    rewards: {
      en: 'Story progress; Obsidian Fieldlands survey continues.',
      pt: 'Progresso da história; pesquisa da Planície Obsidiana continua.',
    },
    encounterImageSrc: '/la-encounters/kleavor.png?v=2',
  },
  {
    id: 'lilligant',
    dex: 549,
    kind: 'noble',
    name: { en: 'Noble Lilligant', pt: 'Nobre Lilligant' },
    description: {
      en: 'Lady of the Ridge in a dancing frenzy. Calm her at Brava Arena during Arezu’s predicament in the Crimson Mirelands.',
      pt: 'Senhora do Cume em frenesi de dança. Acalme-a na Arena Brava durante o dilema de Arezu no Pântano Carmesim.',
    },
    typing: { en: 'Grass', pt: 'Planta' },
    regionId: 'crimson',
    subregionId: 'brava-arena',
    map: { x: 62.73, y: 59.69 },
    detailMap: { x: 35.54, y: 4.99 },
    mission: {
      en: "Mission 8 — Arezu's Predicament",
      pt: 'Missão 8 — O dilema de Arezu',
    },
    requirements: {
      en: 'Craft Lilligant balms; reach Brava Arena in the Mirelands.',
      pt: 'Craft bálsamos de Lilligant; chegar à Arena Brava no Pântano.',
    },
    tips: {
      en: 'Watch petal barrages and spinning dances. Balm during recovery windows after big attacks.',
      pt: 'Cuidado com pétalas e giros de dança. Use bálsamos nas janelas após ataques grandes.',
    },
    rewards: {
      en: 'Story progress; Crimson Mirelands path opens further.',
      pt: 'Progresso da história; o Pântano Carmesim abre mais caminhos.',
    },
    encounterImageSrc: '/la-encounters/lilligant.png?v=2',
  },
  {
    id: 'arcanine',
    dex: 59,
    kind: 'noble',
    name: { en: 'Noble Arcanine', pt: 'Nobre Arcanine' },
    description: {
      en: 'Hisuian Arcanine as Lord of the Isles. Quell the frenzy inside the Lava Dome Sanctum on Firespit Island.',
      pt: 'Arcanine de Hisui como Senhor das Ilhas. Acalme o frenesi no Santuário do Domo de Lava na Ilha Firespit.',
    },
    typing: { en: 'Fire / Rock', pt: 'Fogo / Pedra' },
    regionId: 'cobalt',
    subregionId: 'lava-dome-sanctum',
    map: { x: 81.68, y: 46.86 },
    detailMap: { x: 88.89, y: 6.15 },
    mission: {
      en: 'Mission 10 — The Lordless Island',
      pt: 'Missão 10 — A ilha sem senhor',
    },
    requirements: {
      en: 'Reach Firespit Island; craft Arcanine balms; speak with the wardens.',
      pt: 'Chegue à Ilha Firespit; craft bálsamos de Arcanine; fale com os guardiões.',
    },
    tips: {
      en: 'Use water-side cover against fire blasts. Balm when Arcanine pauses after charging.',
      pt: 'Use cobertura perto da água contra rajadas de fogo. Bálsamo quando Arcanine pausar após investir.',
    },
    rewards: {
      en: 'Story progress; Cobalt Coastlands frenzy resolved.',
      pt: 'Progresso da história; frenesi da Costa Cobalto resolvido.',
    },
    encounterImageSrc: '/la-encounters/arcanine.jpg?v=2',
  },
  {
    id: 'electrode',
    dex: 101,
    kind: 'noble',
    name: { en: 'Noble Electrode', pt: 'Nobre Electrode' },
    description: {
      en: 'Hisuian Electrode as Lord of the Hollow. Face the explosive frenzy at Moonview Arena in the Coronet Highlands.',
      pt: 'Electrode de Hisui como Senhor do Oco. Enfrente o frenesi explosivo na Arena da Vista Lunar na Cordilheira Coronet.',
    },
    typing: { en: 'Electric / Grass', pt: 'Elétrico / Planta' },
    regionId: 'coronet',
    subregionId: 'moonview-arena',
    map: { x: 48.65, y: 27.38 },
    detailMap: { x: 10.59, y: 39.85 },
    mission: {
      en: 'Mission 11 — Scaling Perilous Heights',
      pt: 'Missão 11 — Escalando alturas perigosas',
    },
    requirements: {
      en: 'Electrode balms; Coronet Highlands access; reach Moonview Arena.',
      pt: 'Bálsamos de Electrode; acesso a Coronet; chegar à Arena da Vista Lunar.',
    },
    tips: {
      en: 'Avoid the explosion radius; balm during stun windows after big rolls.',
      pt: 'Fuja do raio da explosão; bálsamo nas janelas de stun após grandes roladas.',
    },
    rewards: {
      en: 'Story progress; path toward the Temple of Sinnoh continues.',
      pt: 'Progresso da história; o caminho ao Templo de Sinnoh continua.',
    },
    encounterImageSrc: '/la-encounters/electrode.jpg?v=2',
  },
  {
    id: 'avalugg',
    dex: 713,
    kind: 'noble',
    name: { en: 'Noble Avalugg', pt: 'Nobre Avalugg' },
    description: {
      en: 'Hisuian Avalugg as Lord of the Tundra. Quell the ice frenzy at Icepeak Arena in the Alabaster Icelands.',
      pt: 'Avalugg de Hisui como Senhor da Tundra. Acalme o frenesi de gelo na Arena do Pico Gelado na Tundra Alba.',
    },
    typing: { en: 'Ice / Rock', pt: 'Gelo / Pedra' },
    regionId: 'alabaster',
    subregionId: 'icepeak-arena',
    map: { x: 26.94, y: 23.95 },
    detailMap: { x: 11.37, y: 46.4 },
    mission: {
      en: 'Mission 12 — The Slumbering Lord of the Tundra',
      pt: 'Missão 12 — Senhor adormecido da Tundra',
    },
    requirements: {
      en: 'Avalugg balms; reach Icepeak Arena in the Alabaster Icelands.',
      pt: 'Bálsamos de Avalugg; chegar à Arena do Pico Gelado na Tundra Alba.',
    },
    tips: {
      en: 'Stay mobile on ice; target when flipped or stunned after heavy charges.',
      pt: 'Mova-se no gelo; ataque quando virado ou atordoado após investidas pesadas.',
    },
    rewards: {
      en: 'Story progress; Alabaster Icelands frenzy resolved.',
      pt: 'Progresso da história; frenesi da Tundra Alba resolvido.',
    },
    encounterImageSrc: '/la-encounters/avalugg.jpg?v=2',
  },
  {
    id: 'uxie',
    dex: 480,
    kind: 'legendary',
    name: { en: 'Uxie', pt: 'Uxie' },
    description: {
      en: 'Lake guardian of knowledge. Encountered in Acuity Cavern after clearing the Lake Acuity trial.',
      pt: 'Guardião do lago do conhecimento. Encontrado na Caverna Acuity após a prova do Lago Acuity.',
    },
    typing: { en: 'Psychic', pt: 'Psíquico' },
    regionId: 'alabaster',
    subregionId: 'acuity-cavern',
    map: { x: 46, y: 24 },
    mission: {
      en: 'Mission 16 — The Trial of Lake Acuity',
      pt: 'Missão 16 — Prova do Lago Acuity',
    },
    requirements: {
      en: 'Clear the Lake Acuity trial puzzles; enter the cavern.',
      pt: 'Complete os puzzles da prova do Lago Acuity; entre na caverna.',
    },
    tips: {
      en: 'Weaken without fainting; bring Ultra Balls and wait for a calm catch window.',
      pt: 'Enfraqueça sem nocar; leve Ultra Balls e espere uma janela calma de captura.',
    },
    rewards: {
      en: 'Story progress toward the Red Chain / plates arc.',
      pt: 'Progresso da história rumo ao arco da Corrente Vermelha / placas.',
    },
    encounterImageSrc: '/la-encounters/uxie.jpg?v=2',
  },
  {
    id: 'mesprit',
    dex: 481,
    kind: 'legendary',
    name: { en: 'Mesprit', pt: 'Mesprit' },
    description: {
      en: 'Lake guardian of emotion. After the Verity trial it flees across the Fieldlands — chase and catch it in the wild.',
      pt: 'Guardião do lago da emoção. Após a prova de Verity, foge pela Planície — persiga e capture no campo.',
    },
    typing: { en: 'Psychic', pt: 'Psíquico' },
    regionId: 'obsidian',
    subregionId: 'verity-cavern',
    map: { x: 38, y: 68 },
    mission: {
      en: 'Mission 14 — The Trial of Lake Verity',
      pt: 'Missão 14 — Prova do Lago Verity',
    },
    requirements: {
      en: 'Clear the Lake Verity trial; then pursue Mesprit outside.',
      pt: 'Complete a prova do Lago Verity; depois persiga Mesprit do lado de fora.',
    },
    tips: {
      en: 'Mesprit flees between spots — use the map marker and catch when it stops.',
      pt: 'Mesprit foge entre pontos — use o marcador do mapa e capture quando parar.',
    },
    rewards: {
      en: 'Story progress toward assembling the lake trio.',
      pt: 'Progresso da história na reunião do trio dos lagos.',
    },
    encounterImageSrc: '/la-encounters/mesprit.jpg?v=2',
  },
  {
    id: 'azelf',
    dex: 482,
    kind: 'legendary',
    name: { en: 'Azelf', pt: 'Azelf' },
    description: {
      en: 'Lake guardian of willpower. Encountered in Valor Cavern after clearing the Lake Valor trial.',
      pt: 'Guardião do lago da força de vontade. Encontrado na Caverna Valor após a prova do Lago Valor.',
    },
    typing: { en: 'Psychic', pt: 'Psíquico' },
    regionId: 'crimson',
    subregionId: 'valor-cavern',
    map: { x: 55, y: 60 },
    mission: {
      en: 'Mission 15 — The Trial of Lake Valor',
      pt: 'Missão 15 — Prova do Lago Valor',
    },
    requirements: {
      en: 'Clear the Lake Valor trial; enter Valor Cavern.',
      pt: 'Complete a prova do Lago Valor; entre na Caverna Valor.',
    },
    tips: {
      en: 'Save before the encounter. Weaken carefully and stock Ultra Balls.',
      pt: 'Salve antes do encontro. Enfraqueça com cuidado e estoque Ultra Balls.',
    },
    rewards: {
      en: 'Story progress toward the lake trio / Red Chain.',
      pt: 'Progresso da história no trio dos lagos / Corrente Vermelha.',
    },
    encounterImageSrc: '/la-encounters/azelf.jpg?v=2',
  },
  {
    id: 'dialga-palkia',
    dex: 483,
    kind: 'legendary',
    name: { en: 'Dialga / Palkia', pt: 'Dialga / Palkia' },
    description: {
      en: 'Climax at the Temple of Sinnoh. Face Dialga or Palkia (player choice) with the Origin Ball during the Mount Coronet finale.',
      pt: 'Clímax no Templo de Sinnoh. Enfrente Dialga ou Palkia (escolha do jogador) com a Origin Ball no final do Monte Coronet.',
    },
    typing: {
      en: 'Steel / Dragon · Water / Dragon',
      pt: 'Aço / Dragão · Água / Dragão',
    },
    regionId: 'coronet',
    subregionId: 'temple-of-sinnoh',
    map: { x: 52, y: 34 },
    mission: {
      en: 'Missions 17–18 — Mount Coronet climax',
      pt: 'Missões 17–18 — clímax do Monte Coronet',
    },
    requirements: {
      en: 'Story progress through Mission 17; follow Adaman/Irida prompts.',
      pt: 'Progresso da história até a Missão 17; siga as indicações de Adaman/Irida.',
    },
    tips: {
      en: 'Origin Ball encounter — follow story prompts. Save beforehand.',
      pt: 'Encontro com Origin Ball — siga a história. Salve antes.',
    },
    rewards: {
      en: 'Main story climax; post-game plate quests unlock afterward.',
      pt: 'Clímax da história; pedidos de placas do pós-jogo liberam depois.',
    },
    encounterImageSrc: '/la-encounters/dialga-palkia.png?v=2',
  },
  {
    id: 'giratina',
    dex: 487,
    kind: 'legendary',
    name: { en: 'Giratina', pt: 'Giratina' },
    description: {
      en: 'Post-story clash with Volo in Turnback Cave. Giratina appears in Origin Forme pressure after the plates confrontation.',
      pt: 'Confronto pós-história com Volo em Turnback Cave. Giratina aparece sob pressão da Forma Origem após o confronto das placas.',
    },
    typing: { en: 'Ghost / Dragon', pt: 'Fantasma / Dragão' },
    regionId: 'cobalt',
    subregionId: 'turnback-cave',
    map: { x: 72, y: 50 },
    mission: {
      en: 'Mission 26 — The Researcher’s Path / Turnback Cave',
      pt: 'Missão 26 — Caminho do pesquisador / Turnback Cave',
    },
    requirements: {
      en: 'Complete the main story plates arc with Cogita and Volo.',
      pt: 'Complete o arco das placas da história com Cogita e Volo.',
    },
    tips: {
      en: 'Prepare for Origin Forme pressure; bring strong Fairy/Ice/Dragon answers and plenty of balls.',
      pt: 'Prepare-se para a Forma Origem; leve respostas Fada/Gelo/Dragão e muitas balls.',
    },
    rewards: {
      en: 'Story continuation toward Arceus; Giratina can be caught.',
      pt: 'Continuação da história rumo a Arceus; Giratina pode ser capturado.',
    },
    encounterImageSrc: '/la-encounters/giratina.png?v=2',
  },
  {
    id: 'cresselia',
    dex: 488,
    kind: 'legendary',
    name: { en: 'Cresselia', pt: 'Cresselia' },
    description: {
      en: 'Lunar legendary tied to Darkrai’s request chain. Appears around Moonview Arena after the post-game moon path begins.',
      pt: 'Lendário lunar ligado à cadeia de pedidos de Darkrai. Aparece perto da Arena da Vista Lunar no caminho lunar do pós-jogo.',
    },
    typing: { en: 'Psychic', pt: 'Psíquico' },
    regionId: 'coronet',
    subregionId: 'moonview-arena',
    map: { x: 50, y: 26 },
    mission: {
      en: 'Request 69 — The Sea’s Legend / moon path lead-in',
      pt: 'Pedido 69 — Lenda do mar / início do caminho lunar',
    },
    requirements: {
      en: 'Post-game request chain from Cogita; progress the Cresselia questline.',
      pt: 'Cadeia de pedidos do pós-jogo com Cogita; avance a quest de Cresselia.',
    },
    tips: {
      en: 'Night encounters are preferred. Weaken carefully — Cresselia recovers and flees if mishandled.',
      pt: 'Prefira encontros à noite. Enfraqueça com cuidado — Cresselia se recupera e foge se mal manejada.',
    },
    rewards: {
      en: 'Unlocks the Darkrai request path afterward.',
      pt: 'Libera o caminho do pedido de Darkrai depois.',
    },
    encounterImageSrc: '/la-encounters/cresselia.png?v=2',
  },
  {
    id: 'darkrai',
    dex: 491,
    kind: 'mythical',
    name: { en: 'Darkrai', pt: 'Darkrai' },
    description: {
      en: 'Mythical of nightmares at Seaside Hollow. Available via Request 72 after completing Cresselia’s quest.',
      pt: 'Mítico dos pesadelos no Oco à Beira-mar. Disponível no Pedido 72 após completar a quest de Cresselia.',
    },
    typing: { en: 'Dark', pt: 'Sombrio' },
    regionId: 'cobalt',
    subregionId: 'seaside-hollow',
    map: { x: 69, y: 49 },
    mission: {
      en: 'Request 72 — Eerie Apparitions in the Night',
      pt: 'Pedido 72 — Aparições sinistras na noite',
    },
    requirements: {
      en: 'Complete the Cresselia request first; then enter Seaside Hollow.',
      pt: 'Complete o pedido de Cresselia antes; depois entre no Oco à Beira-mar.',
    },
    tips: {
      en: 'Save before the fight. Bring Fairy/Fighting pressure and Ultra Balls.',
      pt: 'Salve antes da luta. Leve pressão Fada/Lutador e Ultra Balls.',
    },
    rewards: {
      en: 'Mythical catch; completes the moon/nightmare request pair.',
      pt: 'Captura mítica; completa o par de pedidos lua/pesadelo.',
    },
    encounterImageSrc: '/la-encounters/darkrai.png?v=2',
  },
  {
    id: 'heatran',
    dex: 485,
    kind: 'legendary',
    name: { en: 'Heatran', pt: 'Heatran' },
    description: {
      en: 'Lava Dome Pokémon inside Firespit Island. Post-game Mission 22 sends you into the Lava Dome Sanctum for the Iron Plate.',
      pt: 'Pokémon do Domo de Lava dentro da Ilha Firespit. A Missão 22 do pós-jogo leva você ao Santuário do Domo de Lava pela Placa de Ferro.',
    },
    typing: { en: 'Fire / Steel', pt: 'Fogo / Aço' },
    regionId: 'cobalt',
    subregionId: 'lava-dome-sanctum',
    map: { x: 71, y: 45 },
    mission: {
      en: 'Mission 22 — The Plate of Firespit Island',
      pt: 'Missão 22 — A Placa da Ilha Firespit',
    },
    requirements: {
      en: 'Finish the main story; speak with Cogita; talk to Irida & Iscan at Molten Arena to open the sanctum.',
      pt: 'Termine a história principal; fale com Cogita; fale com Irida e Iscan na Arena Derretida para abrir o santuário.',
    },
    tips: {
      en: 'Break the fire barrier with Balls of Mud first. Weak to Water, Ground, and Fighting. Lv.70; Iron Plate on catch.',
      pt: 'Quebre a barreira de fogo com Bolas de Lama primeiro. Fraco a Água, Terra e Lutador. Nv.70; Placa de Ferro ao capturar.',
    },
    rewards: {
      en: 'Iron Plate; progresses the plate collection toward Arceus.',
      pt: 'Placa de Ferro; avança a coleta de placas rumo a Arceus.',
    },
    encounterImageSrc: '/la-encounters/heatran.png?v=2',
  },
  {
    id: 'regigigas',
    dex: 486,
    kind: 'legendary',
    name: { en: 'Regigigas', pt: 'Regigigas' },
    description: {
      en: 'Colossal sealed in Snowpoint Temple. Bring the three Regis to lift the seal and battle Regigigas.',
      pt: 'Colosso selado no Templo Snowpoint. Leve os três Regis para romper o selo e enfrentar Regigigas.',
    },
    typing: { en: 'Normal', pt: 'Normal' },
    regionId: 'alabaster',
    subregionId: 'snowpoint-temple',
    map: { x: 47, y: 18 },
    mission: {
      en: 'Request — The Snowpoint Temple seal',
      pt: 'Pedido — selo do Templo Snowpoint',
    },
    requirements: {
      en: 'Have Regirock, Regice, and Registeel in your party; enter Snowpoint Temple.',
      pt: 'Tenha Regirock, Regice e Registeel na equipe; entre no Templo Snowpoint.',
    },
    tips: {
      en: 'Slow Start window — unload damage early before it powers up. Save first.',
      pt: 'Janela de Slow Start — cause dano cedo antes de ele fortalecer. Salve antes.',
    },
    rewards: {
      en: 'Legendary catch; completes the Regi temple encounter.',
      pt: 'Captura lendária; completa o encontro do templo Regi.',
    },
    encounterImageSrc: '/la-encounters/regigigas.jpg?v=2',
  },
  {
    id: 'enamorus',
    dex: 905,
    kind: 'legendary',
    name: { en: 'Enamorus', pt: 'Enamorus' },
    description: {
      en: 'Fourth forces of nature. Appears in the Crimson Mirelands after Tornadus, Thundurus, and Landorus are caught.',
      pt: 'Quarta força da natureza. Aparece no Pântano Carmesim após capturar Tornadus, Thundurus e Landorus.',
    },
    typing: { en: 'Fairy / Flying', pt: 'Fada / Voador' },
    regionId: 'crimson',
    subregionId: 'scarlet-bog',
    map: { x: 57, y: 57 },
    mission: {
      en: 'Incarnate forces of Hisui — Enamorus',
      pt: 'Forças encarnadas de Hisui — Enamorus',
    },
    requirements: {
      en: 'Catch Tornadus, Thundurus, and Landorus first; then search Scarlet Bog.',
      pt: 'Capture Tornadus, Thundurus e Landorus antes; depois busque no Brejo Escarlate.',
    },
    tips: {
      en: 'Appears after the three forces are caught. Bring Steel/Poison answers and Ultra Balls.',
      pt: 'Aparece após capturar as três forças. Leve respostas Aço/Veneno e Ultra Balls.',
    },
    rewards: {
      en: 'Completes the forces of nature quartet in Hisui.',
      pt: 'Completa o quarteto das forças da natureza em Hisui.',
    },
    encounterImageSrc: '/la-encounters/enamorus.jpg?v=2',
  },
  {
    id: 'arceus',
    dex: 493,
    kind: 'mythical',
    name: { en: 'Arceus', pt: 'Arceus' },
    description: {
      en: 'The Deified Pokémon at the Hall of Origin. Final mythic encounter after completing the Hisui Pokédex and obtaining the Azure Flute.',
      pt: 'O Pokémon deificado no Salão da Origem. Encontro mítico final após completar a Pokédex de Hisui e obter a Flauta Azul.',
    },
    typing: { en: 'Normal', pt: 'Normal' },
    regionId: 'coronet',
    subregionId: 'hall-of-origin',
    map: { x: 52, y: 32 },
    mission: {
      en: 'Mission 27 — The Deified Pokémon',
      pt: 'Missão 27 — O Pokémon deificado',
    },
    requirements: {
      en: 'Complete the Hisui Pokédex; obtain the Azure Flute; reach the Hall of Origin.',
      pt: 'Complete a Pokédex de Hisui; obtenha a Flauta Azul; chegue ao Salão da Origem.',
    },
    tips: {
      en: 'Save; bring plenty of balls. Arceus changes type with plates — prepare flexible coverage.',
      pt: 'Salve; leve muitas balls. Arceus muda de tipo com placas — prepare cobertura flexível.',
    },
    rewards: {
      en: 'Story completion; Legend Plate / mythical path.',
      pt: 'Conclusão da história; Placa Lendária / caminho mítico.',
    },
    encounterImageSrc: '/la-encounters/arceus.png?v=2',
  },
]
