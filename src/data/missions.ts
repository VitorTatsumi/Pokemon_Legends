export type MissionKind = 'main' | 'side'

export type Localized = { en: string; pt: string }

export type LandmarkId = keyof typeof LANDMARKS

export type Mission = {
  id: string
  kind: MissionKind
  number: number
  name: Localized
  description: Localized
  location: Localized
  unlock: Localized
  rewards?: Localized
  requester?: string
  landmark: LandmarkId
  /** Exact map % from Polygon when available (overrides landmark scatter). */
  map?: { x: number; y: number }
}

export const LANDMARKS = {
  "gare": {
    "x": 78.25,
    "y": 88.45,
    "label": {
      "en": "Gare de Lumiose",
      "pt": "Estação Gare de Lumiose"
    }
  },
  "hotelZ": {
    "x": 65.02,
    "y": 84.44,
    "label": {
      "en": "Hotel Z",
      "pt": "Hotel Z (Lumiose)"
    }
  },
  "prism": {
    "x": 50.17,
    "y": 54.57,
    "label": {
      "en": "Prism Tower / Centrico Plaza",
      "pt": "Torre Prism / Centrico Plaza"
    }
  },
  "quasartico": {
    "x": 26.98,
    "y": 25.02,
    "label": {
      "en": "Quasartico Inc.",
      "pt": "Quasartico Inc. (sede)"
    }
  },
  "rustHQ": {
    "x": 33.07,
    "y": 60.95,
    "label": {
      "en": "Rust Syndicate HQ",
      "pt": "Sede do Sindicato Rust"
    }
  },
  "justiceDojo": {
    "x": 68.15,
    "y": 49.71,
    "label": {
      "en": "Justice Dojo",
      "pt": "Dojo da Justiça"
    }
  },
  "looker": {
    "x": 44.68,
    "y": 20.9,
    "label": {
      "en": "Looker Bureau",
      "pt": "Escritório do Looker"
    }
  },
  "lysandre": {
    "x": 55,
    "y": 42,
    "label": {
      "en": "Lysandre Labs",
      "pt": "Laboratórios Lysandre"
    }
  },
  "researchLab": {
    "x": 53.59,
    "y": 95.88,
    "label": {
      "en": "Pokémon Research Lab",
      "pt": "Laboratório de Pesquisa Pokémon"
    }
  },
  "museum": {
    "x": 60.59,
    "y": 5.12,
    "label": {
      "en": "Lumiose Museum",
      "pt": "Museu de Lumiose"
    }
  },
  "academie": {
    "x": 58,
    "y": 28,
    "label": {
      "en": "Académie Étoile",
      "pt": "Académie Étoile (academia)"
    }
  },
  "rougePlaza": {
    "x": 50.2,
    "y": 27.6,
    "label": {
      "en": "Rouge Plaza",
      "pt": "Praça Rouge"
    }
  },
  "vertPlaza": {
    "x": 62.3,
    "y": 66.6,
    "label": {
      "en": "Vert Plaza",
      "pt": "Praça Vert"
    }
  },
  "bleuPlaza": {
    "x": 36.7,
    "y": 68.2,
    "label": {
      "en": "Bleu Plaza",
      "pt": "Praça Bleu"
    }
  },
  "jaunePlaza": {
    "x": 71.8,
    "y": 42.3,
    "label": {
      "en": "Jaune Plaza",
      "pt": "Praça Jaune"
    }
  },
  "magentaPlaza": {
    "x": 29.2,
    "y": 43.1,
    "label": {
      "en": "Magenta Plaza",
      "pt": "Praça Magenta"
    }
  },
  "rougeStreet": {
    "x": 41.5,
    "y": 10,
    "label": {
      "en": "Rouge Street / Cemetery",
      "pt": "Rua Rouge / Cemitério"
    }
  },
  "rougeS1": {
    "x": 44,
    "y": 20,
    "label": {
      "en": "Rouge Sector 1",
      "pt": "Setor Rouge 1"
    }
  },
  "rougeS5": {
    "x": 56,
    "y": 16,
    "label": {
      "en": "Rouge Sector 5",
      "pt": "Setor Rouge 5"
    }
  },
  "rougeS6": {
    "x": 40,
    "y": 12,
    "label": {
      "en": "Rouge Sector 6",
      "pt": "Setor Rouge 6"
    }
  },
  "rougeS7": {
    "x": 34,
    "y": 18,
    "label": {
      "en": "Rouge Sector 7",
      "pt": "Setor Rouge 7"
    }
  },
  "rougeS8": {
    "x": 58,
    "y": 12,
    "label": {
      "en": "Rouge Sector 8",
      "pt": "Setor Rouge 8"
    }
  },
  "vertS3": {
    "x": 62,
    "y": 82,
    "label": {
      "en": "Vert Sector 3",
      "pt": "Setor Vert 3"
    }
  },
  "vertS4": {
    "x": 54,
    "y": 86,
    "label": {
      "en": "Vert Sector 4",
      "pt": "Setor Vert 4"
    }
  },
  "vertS6": {
    "x": 75,
    "y": 62,
    "label": {
      "en": "Vert Sector 6",
      "pt": "Setor Vert 6"
    }
  },
  "vertS7": {
    "x": 76.7,
    "y": 77.3,
    "label": {
      "en": "Vert Sector 7",
      "pt": "Setor Vert 7"
    }
  },
  "vertS8": {
    "x": 74,
    "y": 84,
    "label": {
      "en": "Vert Sector 8",
      "pt": "Setor Vert 8"
    }
  },
  "vertS9": {
    "x": 48,
    "y": 88,
    "label": {
      "en": "Vert Sector 9",
      "pt": "Setor Vert 9"
    }
  },
  "vertPC": {
    "x": 64,
    "y": 74,
    "label": {
      "en": "Vert Pokémon Center",
      "pt": "Centro Pokémon Vert"
    }
  },
  "bleuS1": {
    "x": 24,
    "y": 72,
    "label": {
      "en": "Bleu Sector 1",
      "pt": "Setor Bleu 1"
    }
  },
  "bleuS3": {
    "x": 28,
    "y": 78,
    "label": {
      "en": "Bleu Sector 3",
      "pt": "Setor Bleu 3"
    }
  },
  "bleuS4": {
    "x": 30,
    "y": 68,
    "label": {
      "en": "Bleu Sector 4",
      "pt": "Setor Bleu 4"
    }
  },
  "bleuS5": {
    "x": 26,
    "y": 62,
    "label": {
      "en": "Bleu Sector 5",
      "pt": "Setor Bleu 5"
    }
  },
  "bleuS6": {
    "x": 32,
    "y": 74,
    "label": {
      "en": "Bleu Sector 6",
      "pt": "Setor Bleu 6"
    }
  },
  "bleuS7": {
    "x": 34,
    "y": 80,
    "label": {
      "en": "Bleu Sector 7",
      "pt": "Setor Bleu 7"
    }
  },
  "bleuS10": {
    "x": 38,
    "y": 72,
    "label": {
      "en": "Bleu Sector 10 / Shutterbug Café",
      "pt": "Setor Bleu 10 / Café Shutterbug"
    }
  },
  "jauneS1": {
    "x": 86,
    "y": 48,
    "label": {
      "en": "Jaune Sector 1",
      "pt": "Setor Jaune 1"
    }
  },
  "jauneS2": {
    "x": 82,
    "y": 36,
    "label": {
      "en": "Jaune Sector 2",
      "pt": "Setor Jaune 2"
    }
  },
  "jauneS6": {
    "x": 84,
    "y": 44,
    "label": {
      "en": "Jaune Sector 6",
      "pt": "Setor Jaune 6"
    }
  },
  "jauneS7": {
    "x": 88,
    "y": 40,
    "label": {
      "en": "Jaune Sector 7",
      "pt": "Setor Jaune 7"
    }
  },
  "jauneS8": {
    "x": 86,
    "y": 34,
    "label": {
      "en": "Jaune Sector 8",
      "pt": "Setor Jaune 8"
    }
  },
  "jauneStreet": {
    "x": 80,
    "y": 50,
    "label": {
      "en": "Jaune Street",
      "pt": "Rua Jaune"
    }
  },
  "magentaS1": {
    "x": 16,
    "y": 52,
    "label": {
      "en": "Magenta Sector 1",
      "pt": "Setor Magenta 1"
    }
  },
  "magentaS2": {
    "x": 14,
    "y": 44,
    "label": {
      "en": "Magenta Sector 2",
      "pt": "Setor Magenta 2"
    }
  },
  "magentaS3": {
    "x": 18,
    "y": 40,
    "label": {
      "en": "Magenta Sector 3",
      "pt": "Setor Magenta 3"
    }
  },
  "magentaS4": {
    "x": 22,
    "y": 54,
    "label": {
      "en": "Magenta Sector 4 / Café Pokémon-Amie",
      "pt": "Setor Magenta 4 / Café Pokémon-Amie (café)"
    }
  },
  "magentaS5": {
    "x": 18,
    "y": 58,
    "label": {
      "en": "Magenta Sector 5",
      "pt": "Setor Magenta 5"
    }
  },
  "magentaS8": {
    "x": 12,
    "y": 36,
    "label": {
      "en": "Magenta Sector 8",
      "pt": "Setor Magenta 8"
    }
  },
  "magentaS9": {
    "x": 15,
    "y": 24,
    "label": {
      "en": "Magenta Sector 9",
      "pt": "Setor Magenta 9"
    }
  },
  "magentaStreet": {
    "x": 20,
    "y": 42,
    "label": {
      "en": "Magenta Street",
      "pt": "Rua Magenta"
    }
  },
  "vernalAve": {
    "x": 52,
    "y": 64,
    "label": {
      "en": "Vernal Avenue",
      "pt": "Avenida Vernal"
    }
  },
  "vernalPC": {
    "x": 56,
    "y": 60,
    "label": {
      "en": "Vernal Pokémon Center",
      "pt": "Centro Pokémon Vernal"
    }
  },
  "autumnalAve": {
    "x": 44,
    "y": 38,
    "label": {
      "en": "Autumnal Avenue",
      "pt": "Avenida Autumnal"
    }
  },
  "hibernalAve": {
    "x": 40,
    "y": 54,
    "label": {
      "en": "Hibernal Avenue",
      "pt": "Avenida Hibernal"
    }
  },
  "estivalAve": {
    "x": 60,
    "y": 46,
    "label": {
      "en": "Estival Avenue",
      "pt": "Avenida Estival"
    }
  },
  "southBlvd": {
    "x": 50,
    "y": 78,
    "label": {
      "en": "South Boulevard",
      "pt": "Boulevard Sul"
    }
  },
  "northBlvd": {
    "x": 50,
    "y": 16,
    "label": {
      "en": "North Boulevard",
      "pt": "Boulevard Norte"
    }
  },
  "passagePalais": {
    "x": 46,
    "y": 30,
    "label": {
      "en": "Passage du Palais",
      "pt": "Passage du Palais (passagem)"
    }
  },
  "saisonCanal": {
    "x": 78,
    "y": 58,
    "label": {
      "en": "Saison Canal",
      "pt": "Canal Saison"
    }
  },
  "saisonSide": {
    "x": 88,
    "y": 56,
    "label": {
      "en": "Saison Canalside",
      "pt": "Margem do Canal Saison"
    }
  },
  "coulant": {
    "x": 34,
    "y": 56,
    "label": {
      "en": "Coulant Waterway",
      "pt": "Via d'água Coulant"
    }
  },
  "restNah": {
    "x": 54,
    "y": 34,
    "label": {
      "en": "Restaurant Le Nah",
      "pt": "Restaurante Le Nah"
    }
  },
  "restYeah": {
    "x": 60,
    "y": 30,
    "label": {
      "en": "Restaurant Le Yeah",
      "pt": "Restaurante Le Yeah"
    }
  },
  "restWow": {
    "x": 66,
    "y": 28,
    "label": {
      "en": "Restaurant Le Wow",
      "pt": "Restaurante Le Wow"
    }
  },
  "sushi": {
    "x": 48,
    "y": 36,
    "label": {
      "en": "Sushi High Roller",
      "pt": "Sushi High Roller (restaurante)"
    }
  },
  "wz1": {
    "x": 58.8,
    "y": 93,
    "label": {
      "en": "Near Wild Zone 1",
      "pt": "Perto da Wild Zone 1"
    }
  },
  "wz3": {
    "x": 50.2,
    "y": 27.6,
    "label": {
      "en": "Near Wild Zone 3",
      "pt": "Perto da Wild Zone 3"
    }
  },
  "wz4": {
    "x": 41.5,
    "y": 8,
    "label": {
      "en": "Wild Zone 4 / Cemetery",
      "pt": "Wild Zone 4 / Cemitério"
    }
  },
  "wz6": {
    "x": 92.3,
    "y": 53.3,
    "label": {
      "en": "Wild Zone 6",
      "pt": "Wild Zone 6 (zona selvagem)"
    }
  },
  "wz11": {
    "x": 82.3,
    "y": 60.1,
    "label": {
      "en": "Wild Zone 11",
      "pt": "Wild Zone 11 (zona selvagem)"
    }
  },
  "wz12": {
    "x": 42.8,
    "y": 82.5,
    "label": {
      "en": "Wild Zone 12",
      "pt": "Wild Zone 12 (zona selvagem)"
    }
  },
  "wz17": {
    "x": 76.7,
    "y": 77.3,
    "label": {
      "en": "Wild Zone 17",
      "pt": "Wild Zone 17 (zona selvagem)"
    }
  },
  "oldBuilding": {
    "x": 44,
    "y": 44,
    "label": {
      "en": "Old Building",
      "pt": "Prédio antigo"
    }
  },
  "anyPC": {
    "x": 50.2,
    "y": 49.9,
    "label": {
      "en": "Any Pokémon Center",
      "pt": "Qualquer Centro Pokémon"
    }
  },
  "battleZone": {
    "x": 50.2,
    "y": 55,
    "label": {
      "en": "Battle Zone / Citywide",
      "pt": "Zona de Batalha / Cidade"
    }
  },
  "bleuDistrict": {
    "x": 40,
    "y": 70,
    "label": {
      "en": "Bleu District",
      "pt": "Distrito Bleu"
    }
  },
  "jauneDistrict": {
    "x": 82,
    "y": 48,
    "label": {
      "en": "Jaune District",
      "pt": "Distrito Jaune"
    }
  },
  "magentaDistrict": {
    "x": 16,
    "y": 52,
    "label": {
      "en": "Magenta District",
      "pt": "Distrito Magenta"
    }
  },
  "vertDistrict": {
    "x": 62.3,
    "y": 72,
    "label": {
      "en": "Vert District",
      "pt": "Distrito Vert"
    }
  },
  "rougeDistrict": {
    "x": 46,
    "y": 18,
    "label": {
      "en": "Rouge District",
      "pt": "Distrito Rouge"
    }
  },
  "galerieLune": {
    "x": 54,
    "y": 20,
    "label": {
      "en": "Galerie de la Lune (Rouge)",
      "pt": "Galerie de la Lune (Distrito Rouge)"
    }
  }
} as const

export const MISSIONS: Mission[] = [
  {
    id: 'main-1',
    kind: 'main',
    number: 1,
    name: { en: "Get Your Travel Bag Back!", pt: "Recupere sua mala de viagem!" },
    description: { en: "After a long journey, you have arrived in Lumiose City! But a Pancham has run off with your bag... Chase after it to reclaim your belongings!", pt: "Depois de uma longa viagem, você chegou à Cidade de Lumiose! Mas um Pancham fugiu com sua mala... Corra atrás dele para recuperar seus pertences!" },
    location: { en: "Gare de Lumiose", pt: "Estação Gare de Lumiose" },
    unlock: { en: "Leave the Gare de Lumiose.", pt: "Saia da Gare de Lumiose." },
    landmark: "gare",
  },
  {
    id: 'main-2',
    kind: 'main',
    number: 2,
    name: { en: "Escape from the Battle Zone!", pt: "Fuja da Zona de Batalha!" },
    description: { en: "The city changes a lot when the sun goes down. Find your way out of this battle zone and retreat to Hotel Z with Urbain/Taunie.", pt: "A cidade muda bastante quando o sol se põe. Encontre a saída desta zona de batalha e retorne ao Hotel Z com Urbain/Taunie." },
    location: { en: "Battle Zone", pt: "Zona de Batalha" },
    unlock: { en: "Complete Main Mission 1", pt: "Conclua a Missão principal 1" },
    landmark: "battleZone",
  },
  {
    id: 'main-3',
    kind: 'main',
    number: 3,
    name: { en: "A New Life in Lumiose City", pt: "Uma nova vida na Cidade de Lumiose" },
    description: { en: "Your new life in Lumiose is off to an exciting start. Have Urbain/Taunie show you the ropes.", pt: "Sua nova vida em Lumiose começa de forma animada. Deixe Urbain/Taunie te mostrar como as coisas funcionam." },
    location: { en: "Hotel Z", pt: "Hotel Z (Lumiose)" },
    unlock: { en: "Complete Main Mission 2", pt: "Conclua a Missão principal 2" },
    landmark: "hotelZ",
  },
  {
    id: 'main-4',
    kind: 'main',
    number: 4,
    name: { en: "Battling the Z-A Royale", pt: "Batalhando no Z-A Royale" },
    description: { en: "Earn a Challenger's Ticket in the battle zone, then reach Rank Y.", pt: "Consiga um Ticket de Desafiante na zona de batalha e alcance o Rank Y." },
    location: { en: "Battle Zone", pt: "Zona de Batalha" },
    unlock: { en: "Complete Main Mission 3", pt: "Conclua a Missão principal 3" },
    landmark: "battleZone",
  },
  {
    id: 'main-5',
    kind: 'main',
    number: 5,
    name: { en: "The City in the Shadow of Prism Tower", pt: "A cidade à sombra da Torre Prism" },
    description: { en: "Urbain/Taunie shows you more of Lumiose City. Side missions begin unlocking.", pt: "Urbain/Taunie te mostra mais da Cidade de Lumiose. As missões secundárias começam a ser liberadas." },
    location: { en: "Lumiose City", pt: "Cidade de Lumiose" },
    unlock: { en: "Complete Main Mission 4", pt: "Conclua a Missão principal 4" },
    landmark: "prism",
  },
  {
    id: 'main-6',
    kind: 'main',
    number: 6,
    name: { en: "Reaching Rank X", pt: "Alcançando o Rank X" },
    description: { en: "Promotion match vs. office worker Yvon. Earn points and get a ticket for Rank X.", pt: "Partida de promoção contra o funcionário de escritório Yvon. Ganhe pontos e obtenha um ticket para o Rank X." },
    location: { en: "Z-A Royale", pt: "Royale Z-A" },
    unlock: { en: "Complete Main Mission 5", pt: "Conclua a Missão principal 5" },
    landmark: "battleZone",
  },
  {
    id: 'main-7',
    kind: 'main',
    number: 7,
    name: { en: "Reaching Rank W", pt: "Alcançando o Rank W" },
    description: { en: "Promotion match vs. grade-schooler Xavi. Aim for Rank W.", pt: "Partida de promoção contra o estudante Xavi. Mire no Rank W." },
    location: { en: "Z-A Royale", pt: "Royale Z-A" },
    unlock: { en: "Complete Main Mission 6", pt: "Conclua a Missão principal 6" },
    landmark: "battleZone",
  },
  {
    id: 'main-8',
    kind: 'main',
    number: 8,
    name: { en: "Reaching Rank V", pt: "Alcançando o Rank V" },
    description: { en: "Promotion match vs. waiter Rintaro. Aim for Rank V.", pt: "Partida de promoção contra o garçom Rintaro. Mire no Rank V." },
    location: { en: "Z-A Royale", pt: "Royale Z-A" },
    unlock: { en: "Complete Main Mission 7", pt: "Conclua a Missão principal 7" },
    landmark: "battleZone",
  },
  {
    id: 'main-9',
    kind: 'main',
    number: 9,
    name: { en: "Chase That Mysterious Pokémon!", pt: "Persiga aquele Pokémon misterioso!" },
    description: { en: "A mysterious Pokémon appears and wants you to follow it...", pt: "Um Pokémon misterioso aparece e parece querer que você o siga..." },
    location: { en: "Lumiose City", pt: "Cidade de Lumiose" },
    unlock: { en: "Complete Main Mission 8", pt: "Conclua a Missão principal 8" },
    landmark: "prism",
  },
  {
    id: 'main-10',
    kind: 'main',
    number: 10,
    name: { en: "The Secrets of Mega Evolution", pt: "Os segredos da Megaevolução" },
    description: { en: "Learn about Mega Rings, Mega Stones, and bonds before facing Rogue Mega Evolution.", pt: "Aprenda sobre Mega Anéis, Mega Pedras e laços antes de enfrentar Megaevoluções Rogue." },
    location: { en: "Quasartico Inc.", pt: "Quasartico Inc. (sede)" },
    unlock: { en: "Complete Main Mission 9", pt: "Conclua a Missão principal 9" },
    landmark: "quasartico",
  },
  {
    id: 'main-11',
    kind: 'main',
    number: 11,
    name: { en: "A Rogue Mega Slowbro", pt: "Um Mega Slowbro Rogue" },
    description: { en: "Face a Rogue Mega Slowbro in the Bleu District.", pt: "Enfrente um Mega Slowbro Rogue no Distrito Bleu." },
    location: { en: "Bleu District", pt: "Distrito Bleu" },
    unlock: { en: "Advance through Main Mission 10", pt: "Avance na Missão principal 10" },
    landmark: "bleuDistrict",
  },
  {
    id: 'main-12',
    kind: 'main',
    number: 12,
    name: { en: "A Rogue Mega Camerupt", pt: "Um Mega Camerupt Rogue" },
    description: { en: "Face a Rogue Mega Camerupt in the Jaune District.", pt: "Enfrente um Mega Camerupt Rogue no Distrito Jaune." },
    location: { en: "Jaune District", pt: "Distrito Jaune" },
    unlock: { en: "Advance through Main Mission 10", pt: "Avance na Missão principal 10" },
    landmark: "jauneDistrict",
  },
  {
    id: 'main-13',
    kind: 'main',
    number: 13,
    name: { en: "A Rogue Mega Victreebel", pt: "Um Mega Victreebel Rogue" },
    description: { en: "Face a Rogue Mega Victreebel in the Magenta District.", pt: "Enfrente um Mega Victreebel Rogue no Distrito Magenta." },
    location: { en: "Magenta District", pt: "Distrito Magenta" },
    unlock: { en: "Advance through Main Mission 10", pt: "Avance na Missão principal 10" },
    landmark: "magentaDistrict",
  },
  {
    id: 'main-14',
    kind: 'main',
    number: 14,
    name: { en: "Reaching Rank E", pt: "Alcançando o Rank E" },
    description: { en: "Promotion match vs. streamer Canari. Track her down and defeat her.", pt: "Partida de promoção contra a streamer Canari. Encontre-a e derrote-a." },
    location: { en: "Z-A Royale", pt: "Royale Z-A" },
    unlock: { en: "Complete Main Mission 10", pt: "Conclua a Missão principal 10" },
    landmark: "battleZone",
  },
  {
    id: 'main-15',
    kind: 'main',
    number: 15,
    name: { en: "A Job for Team MZ!", pt: "Um trabalho para a Equipe MZ!" },
    description: { en: "Vinnie alerts you to three more Rogue Mega cases. Take care of them all.", pt: "Vinnie avisa sobre mais três casos de Mega Rogue. Resolva todos eles." },
    location: { en: "Hotel Z", pt: "Hotel Z (Lumiose)" },
    unlock: { en: "Complete Main Mission 14", pt: "Conclua a Missão principal 14" },
    landmark: "hotelZ",
  },
  {
    id: 'main-16',
    kind: 'main',
    number: 16,
    name: { en: "A Rogue Mega Beedrill", pt: "Um Mega Beedrill Rogue" },
    description: { en: "Face a Rogue Mega Beedrill in the Vert District.", pt: "Enfrente um Mega Beedrill Rogue no Distrito Vert." },
    location: { en: "Vert District", pt: "Distrito Vert" },
    unlock: { en: "Advance through Main Mission 15", pt: "Avance na Missão principal 15" },
    landmark: "vertDistrict",
  },
  {
    id: 'main-17',
    kind: 'main',
    number: 17,
    name: { en: "A Rogue Mega Hawlucha", pt: "Um Mega Hawlucha Rogue" },
    description: { en: "Face a Rogue Mega Hawlucha in the Magenta District.", pt: "Enfrente um Mega Hawlucha Rogue no Distrito Magenta." },
    location: { en: "Magenta District", pt: "Distrito Magenta" },
    unlock: { en: "Advance through Main Mission 15", pt: "Avance na Missão principal 15" },
    landmark: "magentaDistrict",
  },
  {
    id: 'main-18',
    kind: 'main',
    number: 18,
    name: { en: "A Rogue Mega Banette", pt: "Um Mega Banette Rogue" },
    description: { en: "Face a Rogue Mega Banette in the Jaune District.", pt: "Enfrente um Mega Banette Rogue no Distrito Jaune." },
    location: { en: "Jaune District", pt: "Distrito Jaune" },
    unlock: { en: "Advance through Main Mission 15", pt: "Avance na Missão principal 15" },
    landmark: "jauneDistrict",
  },
  {
    id: 'main-19',
    kind: 'main',
    number: 19,
    name: { en: "Reaching Rank D", pt: "Alcançando o Rank D" },
    description: { en: "Promotion match vs. Ivor of the Fist of Justice. Get a Challenger's Ticket.", pt: "Partida de promoção contra Ivor do Punho da Justiça. Consiga um Ticket de Desafiante." },
    location: { en: "Justice Dojo", pt: "Dojo da Justiça" },
    unlock: { en: "Complete Main Mission 15", pt: "Conclua a Missão principal 15" },
    landmark: "justiceDojo",
  },
  {
    id: 'main-20',
    kind: 'main',
    number: 20,
    name: { en: "A Request from the Rust Syndicate", pt: "Um pedido do Sindicato Rust" },
    description: { en: "Urbain/Taunie is deep in debt with the Rust Syndicate. Team MZ must fix it.", pt: "Urbain/Taunie está afundado(a) em dívidas com o Sindicato Rust. A Equipe MZ precisa resolver isso." },
    location: { en: "Rust Syndicate HQ", pt: "Sede do Sindicato Rust" },
    unlock: { en: "Complete Main Mission 19", pt: "Conclua a Missão principal 19" },
    landmark: "rustHQ",
  },
  {
    id: 'main-21',
    kind: 'main',
    number: 21,
    name: { en: "A Rogue Mega Mawile", pt: "Um Mega Mawile Rogue" },
    description: { en: "Face a Rogue Mega Mawile in the Magenta District.", pt: "Enfrente um Mega Mawile Rogue no Distrito Magenta." },
    location: { en: "Magenta District", pt: "Distrito Magenta" },
    unlock: { en: "Advance through Main Mission 20", pt: "Avance na Missão principal 20" },
    landmark: "magentaDistrict",
  },
  {
    id: 'main-22',
    kind: 'main',
    number: 22,
    name: { en: "A Rogue Mega Barbaracle", pt: "Um Mega Barbaracle Rogue" },
    description: { en: "Face a Rogue Mega Barbaracle in the Bleu District.", pt: "Enfrente um Mega Barbaracle Rogue no Distrito Bleu." },
    location: { en: "Bleu District", pt: "Distrito Bleu" },
    unlock: { en: "Advance through Main Mission 20", pt: "Avance na Missão principal 20" },
    landmark: "bleuDistrict",
  },
  {
    id: 'main-23',
    kind: 'main',
    number: 23,
    name: { en: "A Rogue Mega Ampharos", pt: "Um Mega Ampharos Rogue" },
    description: { en: "Face a Rogue Mega Ampharos in the Rouge District.", pt: "Enfrente um Mega Ampharos Rogue no Distrito Rouge." },
    location: { en: "Rouge District", pt: "Distrito Rouge" },
    unlock: { en: "Advance through Main Mission 20", pt: "Avance na Missão principal 20" },
    landmark: "rougeDistrict",
  },
  {
    id: 'main-24',
    kind: 'main',
    number: 24,
    name: { en: "Reaching Rank C", pt: "Alcançando o Rank C" },
    description: { en: "Promotion match vs. Corbeau, boss of the Rust Syndicate.", pt: "Partida de promoção contra Corbeau, chefe do Sindicato Rust." },
    location: { en: "Rust Syndicate HQ", pt: "Sede do Sindicato Rust" },
    unlock: { en: "Complete Main Mission 20", pt: "Conclua a Missão principal 20" },
    landmark: "rustHQ",
  },
  {
    id: 'main-25',
    kind: 'main',
    number: 25,
    name: { en: "A Showdown on the Battle Court", pt: "Um confronto no campo de batalha" },
    description: { en: "Take a break and enjoy a Pokémon battle on a real battle court.", pt: "Faça uma pausa e aproveite uma batalha Pokémon em um campo de batalha de verdade." },
    location: { en: "Battle Court", pt: "Campo de Batalha" },
    unlock: { en: "Complete Main Mission 24", pt: "Conclua a Missão principal 24" },
    landmark: "battleZone",
  },
  {
    id: 'main-26',
    kind: 'main',
    number: 26,
    name: { en: "An Invitation from the SBC", pt: "Um convite da SBC" },
    description: { en: "Jacinthe of the SBC invites you. What awaits?", pt: "Jacinthe da SBC te convida. O que te espera?" },
    location: { en: "SBC / Boutique", pt: "SBC / Boutique (Lumiose)" },
    unlock: { en: "Complete Main Mission 25", pt: "Conclua a Missão principal 25" },
    landmark: "restWow",
  },
  {
    id: 'main-27',
    kind: 'main',
    number: 27,
    name: { en: "A Rogue Mega Froslass", pt: "Um Mega Froslass Rogue" },
    description: { en: "Face a Rogue Mega Froslass in the Bleu District.", pt: "Enfrente um Mega Froslass Rogue no Distrito Bleu." },
    location: { en: "Bleu District", pt: "Distrito Bleu" },
    unlock: { en: "Advance through Main Mission 26", pt: "Avance na Missão principal 26" },
    landmark: "bleuDistrict",
  },
  {
    id: 'main-28',
    kind: 'main',
    number: 28,
    name: { en: "A Rogue Mega Altaria", pt: "Um Mega Altaria Rogue" },
    description: { en: "Face a Rogue Mega Altaria in the Magenta District.", pt: "Enfrente um Mega Altaria Rogue no Distrito Magenta." },
    location: { en: "Magenta District", pt: "Distrito Magenta" },
    unlock: { en: "Advance through Main Mission 26", pt: "Avance na Missão principal 26" },
    landmark: "magentaDistrict",
  },
  {
    id: 'main-29',
    kind: 'main',
    number: 29,
    name: { en: "A Rogue Mega Venusaur", pt: "Um Mega Venusaur Rogue" },
    description: { en: "Face a Rogue Mega Venusaur in the Jaune District.", pt: "Enfrente um Mega Venusaur Rogue no Distrito Jaune." },
    location: { en: "Jaune District", pt: "Distrito Jaune" },
    unlock: { en: "Advance through Main Mission 26", pt: "Avance na Missão principal 26" },
    landmark: "jauneDistrict",
  },
  {
    id: 'main-30',
    kind: 'main',
    number: 30,
    name: { en: "Reaching Rank B", pt: "Alcançando o Rank B" },
    description: { en: "Promotion match vs. Jacinthe of the SBC.", pt: "Partida de promoção contra Jacinthe da SBC." },
    location: { en: "SBC", pt: "Sede da SBC" },
    unlock: { en: "Complete Main Mission 26", pt: "Conclua a Missão principal 26" },
    landmark: "restWow",
  },
  {
    id: 'main-31',
    kind: 'main',
    number: 31,
    name: { en: "A Summons from Vinnie", pt: "Uma convocação de Vinnie" },
    description: { en: "Vinnie has something important to discuss.", pt: "Vinnie tem algo importante para discutir." },
    location: { en: "Hotel Z", pt: "Hotel Z (Lumiose)" },
    unlock: { en: "Complete Main Mission 30", pt: "Conclua a Missão principal 30" },
    landmark: "hotelZ",
  },
  {
    id: 'main-32',
    kind: 'main',
    number: 32,
    name: { en: "A Rogue Mega Dragonite", pt: "Um Mega Dragonite Rogue" },
    description: { en: "Face a Rogue Mega Dragonite in the Vert District.", pt: "Enfrente um Mega Dragonite Rogue no Distrito Vert." },
    location: { en: "Vert District", pt: "Distrito Vert" },
    unlock: { en: "Advance through Main Mission 31", pt: "Avance na Missão principal 31" },
    landmark: "vertDistrict",
  },
  {
    id: 'main-33',
    kind: 'main',
    number: 33,
    name: { en: "A Rogue Mega Tyranitar", pt: "Um Mega Tyranitar Rogue" },
    description: { en: "Face a Rogue Mega Tyranitar in the Jaune District.", pt: "Enfrente um Mega Tyranitar Rogue no Distrito Jaune." },
    location: { en: "Jaune District", pt: "Distrito Jaune" },
    unlock: { en: "Advance through Main Mission 31", pt: "Avance na Missão principal 31" },
    landmark: "jauneDistrict",
  },
  {
    id: 'main-34',
    kind: 'main',
    number: 34,
    name: { en: "A Rogue Mega Starmie", pt: "Um Mega Starmie Rogue" },
    description: { en: "Face a Rogue Mega Starmie in the Bleu District.", pt: "Enfrente um Mega Starmie Rogue no Distrito Bleu." },
    location: { en: "Bleu District", pt: "Distrito Bleu" },
    unlock: { en: "Advance through Main Mission 31", pt: "Avance na Missão principal 31" },
    landmark: "bleuDistrict",
  },
  {
    id: 'main-35',
    kind: 'main',
    number: 35,
    name: { en: "Reaching Rank A", pt: "Alcançando o Rank A" },
    description: { en: "Find and defeat Grisham in your Rank A promotion match.", pt: "Encontre e derrote Grisham na sua partida de promoção ao Rank A." },
    location: { en: "Lumiose City", pt: "Cidade de Lumiose" },
    unlock: { en: "Complete Main Mission 31", pt: "Conclua a Missão principal 31" },
    landmark: "prism",
  },
  {
    id: 'main-36',
    kind: 'main',
    number: 36,
    name: { en: "Prism Tower's Dark Turn", pt: "A virada sombria da Torre Prism" },
    description: { en: "A thunderous noise and tremors hit Lumiose. What is happening?", pt: "Um estrondo e tremores atingem Lumiose. O que está acontecendo?" },
    location: { en: "Prism Tower", pt: "Torre Prism" },
    unlock: { en: "Complete Main Mission 35", pt: "Conclua a Missão principal 35" },
    landmark: "prism",
  },
  {
    id: 'main-37',
    kind: 'main',
    number: 37,
    name: { en: "Operation Protect Lumiose", pt: "Operação Proteger Lumiose" },
    description: { en: "Unite past rivals to save the city. Find Zygarde where it waits.", pt: "Una rivais do passado para salvar a cidade. Encontre Zygarde onde ele espera." },
    location: { en: "Prism Tower", pt: "Torre Prism" },
    unlock: { en: "Complete Main Mission 36", pt: "Conclua a Missão principal 36" },
    landmark: "prism",
  },
  {
    id: 'main-38',
    kind: 'main',
    number: 38,
    name: { en: "The Future of Lumiose City", pt: "O futuro da Cidade de Lumiose" },
    description: { en: "Decide what to do with the wishes earned by reaching Rank A.", pt: "Decida o que fazer com os desejos conquistados ao alcançar o Rank A." },
    location: { en: "Hotel Z", pt: "Hotel Z (Lumiose)" },
    unlock: { en: "Complete Main Mission 37 + credits", pt: "Conclua a Missão principal 37 + créditos" },
    landmark: "hotelZ",
  },
  {
    id: 'main-39',
    kind: 'main',
    number: 39,
    name: { en: "The Infinite Z-A Royale", pt: "O Z-A Royale Infinito" },
    description: { en: "Collect Challenger's Tickets for Infinite Z-A Royale reward matches.", pt: "Colete Tickets de Desafiante para as partidas de recompensa do Z-A Royale Infinito." },
    location: { en: "Battle Zone", pt: "Zona de Batalha" },
    unlock: { en: "Complete Main Mission 38", pt: "Conclua a Missão principal 38" },
    landmark: "battleZone",
  },
  {
    id: 'main-40',
    kind: 'main',
    number: 40,
    name: { en: "The One That Gives", pt: "Aquele que dá" },
    description: { en: "Work with Mable to protect Lumiose from \"the one that gives\" (Xerneas).", pt: "Trabalhe com Mable para proteger Lumiose de \"aquele que dá\" (Xerneas)." },
    location: { en: "Hotel Z", pt: "Hotel Z (Lumiose)" },
    unlock: { en: "Complete Main Mission 38", pt: "Conclua a Missão principal 38" },
    landmark: "hotelZ",
  },
  {
    id: 'main-41',
    kind: 'main',
    number: 41,
    name: { en: "The One That Takes", pt: "Aquele que leva" },
    description: { en: "Work with Grisham and Vinnie against \"the one that takes\" (Yveltal).", pt: "Trabalhe com Grisham e Vinnie contra \"aquele que leva\" (Yveltal)." },
    location: { en: "Galerie de la Lune", pt: "Galeria Galerie de la Lune" },
    unlock: { en: "Complete Main Mission 38", pt: "Conclua a Missão principal 38" },
    landmark: "galerieLune",
  },
  {
    id: 'main-42',
    kind: 'main',
    number: 42,
    name: { en: "To Keep the World in Balance", pt: "Para manter o mundo em equilíbrio" },
    description: { en: "Face Zygarde beneath Prism Tower and decide how to keep balance.", pt: "Enfrente Zygarde sob a Torre Prism e decida como manter o equilíbrio." },
    location: { en: "Prism Tower", pt: "Torre Prism" },
    unlock: { en: "Complete Main Missions 40 and 41", pt: "Conclua as Missões principais 40 e 41" },
    landmark: "prism",
  },
  {
    id: 'side-1',
    kind: 'side',
    number: 1,
    name: { en: "A Big Ol' Bunnelby", pt: "Um Bunnelby enorme" },
    description: { en: "Giant Bunnelby spotted in an alley outside wild zones. Meet the requester.", pt: "Um Bunnelby gigante foi visto em um beco fora das wild zones. Encontre o solicitante." },
    location: { en: "Rouge Plaza", pt: "Praça Rouge" },
    unlock: { en: "Talk to Emma during Main Mission 5", pt: "Fale com Emma durante a Missão principal 5" },
    rewards: { en: "₽400 / Fresh Water ×2", pt: "₽400 / Água Fresca ×2" },
    requester: "Trevelle",
    landmark: "rougePlaza",
    map: { x: 56.02, y: 26.88 },
  },
  {
    id: 'side-2',
    kind: 'side',
    number: 2,
    name: { en: "A Use for an Evolution Stone!", pt: "Um uso para uma Pedra de Evolução!" },
    description: { en: "Trade for Heracross — she wants a Pikachu for a Thunder Stone.", pt: "Troque por Heracross — ela quer um Pikachu por uma Pedra do Trovão." },
    location: { en: "Passage du Palais", pt: "Passage du Palais (passagem)" },
    unlock: { en: "Talk to Emma during Main Mission 5", pt: "Fale com Emma durante a Missão principal 5" },
    rewards: { en: "₽800 / Poké Ball ×5 / Potion", pt: "₽800 / Poké Ball ×5 / Poção" },
    requester: "Tracie",
    landmark: "passagePalais",
    map: { x: 53.19, y: 8.94 },
  },
  {
    id: 'side-3',
    kind: 'side',
    number: 3,
    name: { en: "Sableye in the Cemetery", pt: "Sableye no cemitério" },
    description: { en: "Retrieve something precious dropped in the cemetery wild zone.", pt: "Recupere algo precioso deixado cair na wild zone do cemitério." },
    location: { en: "Wild Zone 4 / Cemetery", pt: "Wild Zone 4 / Cemitério" },
    unlock: { en: "Talk to Emma during Main Mission 5", pt: "Fale com Emma durante a Missão principal 5" },
    rewards: { en: "₽4,000 / Revive", pt: "₽4.000 / Revive" },
    requester: "Moire",
    landmark: "wz4",
    map: { x: 51.26, y: 14.59 },
  },
  {
    id: 'side-4',
    kind: 'side',
    number: 4,
    name: { en: "A Break Time Battle", pt: "Uma batalha na pausa" },
    description: { en: "Battle a worker on break to get a Holovator running again.", pt: "Batalhe contra um trabalhador em pausa para religar um Holovator." },
    location: { en: "Rouge Sector 1", pt: "Setor Rouge 1" },
    unlock: { en: "Complete Main Mission 5", pt: "Conclua a Missão principal 5" },
    rewards: { en: "₽1,200 / Exp. Candy S ×3 / Fresh Water", pt: "₽1.200 / Doce de Exp. P ×3 / Água Fresca" },
    requester: "Sommi",
    landmark: "rougeS1",
    map: { x: 44.48, y: 29.4 },
  },
  {
    id: 'side-5',
    kind: 'side',
    number: 5,
    name: { en: "I'd Like to See an Ekans!", pt: "Eu quero ver um Ekans!" },
    description: { en: "Catch an Ekans and show it to a young girl.", pt: "Capture um Ekans e mostre a uma menina." },
    location: { en: "Magenta Sector 1", pt: "Setor Magenta 1" },
    unlock: { en: "Complete Main Mission 5", pt: "Conclua a Missão principal 5" },
    rewards: { en: "₽500 / Pecha ×3 / Cheri ×3 / Soda Pop", pt: "₽500 / Pecha ×3 / Cheri ×3 / Refrigerante" },
    requester: "Ismene",
    landmark: "magentaS1",
    map: { x: 37.51, y: 50.11 },
  },
  {
    id: 'side-6',
    kind: 'side',
    number: 6,
    name: { en: "Long-Range Moves Have Style", pt: "Golpes de longo alcance têm estilo" },
    description: { en: "Battle a Trainer who prefers long-range moves.", pt: "Batalhe contra um Treinador que prefere golpes de longo alcance." },
    location: { en: "Bleu Sector 4", pt: "Setor Bleu 4" },
    unlock: { en: "Complete Main Mission 5", pt: "Conclua a Missão principal 5" },
    rewards: { en: "₽1,000 / Nugget", pt: "₽1.000 / Pepita" },
    requester: "Distan",
    landmark: "bleuS4",
    map: { x: 31.42, y: 66.11 },
  },
  {
    id: 'side-7',
    kind: 'side',
    number: 7,
    name: { en: "A Feisty Chespin", pt: "Um Chespin bravo" },
    description: { en: "Help a cabbie blocked by a wild Chespin.", pt: "Ajude um taxista bloqueado por um Chespin selvagem." },
    location: { en: "Académie Étoile", pt: "Académie Étoile (academia)" },
    unlock: { en: "Complete Main Mission 5", pt: "Conclua a Missão principal 5" },
    rewards: { en: "₽1,000 / Exp. Candy / Chespin", pt: "₽1.000 / Doce de Exp. / Chespin" },
    requester: "Axi",
    landmark: "academie",
    map: { x: 59.18, y: 33.96 },
  },
  {
    id: 'side-8',
    kind: 'side',
    number: 8,
    name: { en: "Get Well, Fennekin", pt: "Melhore, Fennekin" },
    description: { en: "Help a lethargic wild Fennekin that refuses to eat.", pt: "Ajude um Fennekin selvagem letárgico que se recusa a comer." },
    location: { en: "Magenta Sector 2", pt: "Setor Magenta 2" },
    unlock: { en: "Complete Main Mission 5", pt: "Conclua a Missão principal 5" },
    rewards: { en: "₽1,000 / Exp. Candy / Fennekin", pt: "₽1.000 / Doce de Exp. / Fennekin" },
    requester: "Branche",
    landmark: "magentaS2",
    map: { x: 50.49, y: 75.3 },
  },
  {
    id: 'side-9',
    kind: 'side',
    number: 9,
    name: { en: "A Challenge from Froakie", pt: "Um desafio de Froakie" },
    description: { en: "Beat Froakie's time on a scaffolding course.", pt: "Bata o tempo do Froakie em um percurso de andaimes." },
    location: { en: "Jaune Sector 8", pt: "Setor Jaune 8" },
    unlock: { en: "Complete Main Mission 5", pt: "Conclua a Missão principal 5" },
    rewards: { en: "₽1,000 / Exp. Candy / Froakie", pt: "₽1.000 / Doce de Exp. / Froakie" },
    requester: "Surv",
    landmark: "jauneS8",
    map: { x: 87.75, y: 28.41 },
  },
  {
    id: 'side-10',
    kind: 'side',
    number: 10,
    name: { en: "Skiddo's Fragrant Leaves", pt: "As folhas perfumadas de Skiddo" },
    description: { en: "Collect Skiddo leaves for perfume.", pt: "Colete folhas de Skiddo para perfume." },
    location: { en: "Vernal Avenue", pt: "Avenida Vernal" },
    unlock: { en: "Complete Main Mission 6", pt: "Conclua a Missão principal 6" },
    rewards: { en: "₽800 / Sachet ×2 / Persim ×5", pt: "₽800 / Sachet ×2 / Persim ×5 (frutas)" },
    requester: "Odette",
    landmark: "vernalAve",
    map: { x: 50.6, y: 87.39 },
  },
  {
    id: 'side-11',
    kind: 'side',
    number: 11,
    name: { en: "The Kakuna Master", pt: "A mestra dos Kakuna" },
    description: { en: "Battle a girl training to become the strongest Kakuna user.", pt: "Batalhe contra uma garota treinando para se tornar a maior usuária de Kakuna." },
    location: { en: "Jaune Sector 1", pt: "Setor Jaune 1" },
    unlock: { en: "Complete Main Mission 6", pt: "Conclua a Missão principal 6" },
    rewards: { en: "₽700 / Silver Powder / Net Ball ×5", pt: "₽700 / Pó de Prata / Net Ball ×5" },
    requester: "Montée",
    landmark: "jauneS1",
    map: { x: 58.7, y: 43.55 },
  },
  {
    id: 'side-12',
    kind: 'side',
    number: 12,
    name: { en: "The Many Flowers of Flabébé", pt: "As muitas flores de Flabébé" },
    description: { en: "Show every Flabébé flower color to a hairstylist.", pt: "Mostre todas as cores de flor de Flabébé a uma cabeleireira." },
    location: { en: "South Boulevard", pt: "Boulevard Sul" },
    unlock: { en: "Complete Main Mission 6", pt: "Conclua a Missão principal 6" },
    rewards: { en: "Hair colors / Rare Candy", pt: "Cores de cabelo / Doce Raro" },
    requester: "Vivace",
    landmark: "southBlvd",
    map: { x: 22.28, y: 83.87 },
  },
  {
    id: 'side-13',
    kind: 'side',
    number: 13,
    name: { en: "Stumped at the Fountain", pt: "Preso na fonte" },
    description: { en: "Clear brambles ruining an artist's fountain scenery.", pt: "Remova os espinhos que estão estragando a vista da fonte de um artista." },
    location: { en: "Jaune Sector 7", pt: "Setor Jaune 7" },
    unlock: { en: "Complete Main Mission 6", pt: "Conclua a Missão principal 6" },
    rewards: { en: "₽1,000 / Nest Ball ×3", pt: "₽1.000 / Nest Ball ×3" },
    requester: "Croquis",
    landmark: "jauneS7",
    map: { x: 75.76, y: 21.88 },
  },
  {
    id: 'side-14',
    kind: 'side',
    number: 14,
    name: { en: "Slurpuff's Café Visit", pt: "A visita de Slurpuff ao café" },
    description: { en: "Chaperone a grumpy Slurpuff to Café Soleil.", pt: "Acompanhe um Slurpuff rabugento até o Café Soleil." },
    location: { en: "Bleu Sector 10 / Shutterbug Café", pt: "Setor Bleu 10 / Café Shutterbug" },
    unlock: { en: "Complete Main Mission 6", pt: "Conclua a Missão principal 6" },
    rewards: { en: "₽3,000 / Whipped Dream ×2", pt: "₽3.000 / Doce Batido ×2" },
    requester: "Meuse",
    landmark: "bleuS10",
    map: { x: 11.6, y: 64.18 },
  },
  {
    id: 'side-15',
    kind: 'side',
    number: 15,
    name: { en: "A Sensitive Audino", pt: "Um Audino sensível" },
    description: { en: "Calm a strangely behaving Audino with a battle.", pt: "Acalme um Audino com comportamento estranho por meio de uma batalha." },
    location: { en: "Rouge Sector 1", pt: "Setor Rouge 1" },
    unlock: { en: "Complete Main Mission 6", pt: "Conclua a Missão principal 6" },
    rewards: { en: "₽900 / Revive ×3 / Super Potion ×5", pt: "₽900 / Revive ×3 / Superpoção ×5" },
    requester: "Hea",
    landmark: "rougeS1",
    map: { x: 44.18, y: 31.97 },
  },
  {
    id: 'side-16',
    kind: 'side',
    number: 16,
    name: { en: "The Budew Show", pt: "O show do Budew" },
    description: { en: "Bring a Budew to a showcase event.", pt: "Leve um Budew a um evento de apresentação." },
    location: { en: "Vernal Pokémon Center", pt: "Centro Pokémon Vernal" },
    unlock: { en: "Complete Main Mission 6", pt: "Conclua a Missão principal 6" },
    rewards: { en: "₽10,000 / Miracle Seed", pt: "₽10.000 / Semente Milagrosa" },
    requester: "Jardin",
    landmark: "vernalPC",
    map: { x: 48.77, y: 77.09 },
  },
  {
    id: 'side-17',
    kind: 'side',
    number: 17,
    name: { en: "A Shiny Mareep?", pt: "Um Mareep Shiny?" },
    description: { en: "Help investigate a rumored Shiny Mareep in Wild Zone 1.", pt: "Ajude a investigar o rumor de um Mareep Shiny na Wild Zone 1." },
    location: { en: "Vert Sector 9", pt: "Setor Vert 9" },
    unlock: { en: "Battle Lida during Main Mission 8", pt: "Batalhe contra Lida durante a Missão principal 8" },
    rewards: { en: "₽500 / Pretty Feather ×3 / Shiny Mareep", pt: "₽500 / Pena Bonita ×3 / Mareep Shiny" },
    requester: "Duve",
    landmark: "vertS9",
    map: { x: 59.63, y: 89.32 },
  },
  {
    id: 'side-18',
    kind: 'side',
    number: 18,
    name: { en: "A Pan-tastic Pot of Tea", pt: "Um chá Pan-tastico" },
    description: { en: "Bring Pansage, Pansear, and Panpour for the perfect tea.", pt: "Traga Pansage, Pansear e Panpour para o chá perfeito." },
    location: { en: "Vert Sector 3", pt: "Setor Vert 3" },
    unlock: { en: "Battle Lida during Main Mission 8", pt: "Batalhe contra Lida durante a Missão principal 8" },
    rewards: { en: "₽1,000 / HP Up ×3 / White Herb", pt: "₽1.000 / Mais PS ×3 / Erva Branca" },
    requester: "Servando",
    landmark: "vertS3",
    map: { x: 68.2, y: 71.71 },
  },
  {
    id: 'side-19',
    kind: 'side',
    number: 19,
    name: { en: "Poisonous, Paralyzing Strategies", pt: "Estratégias de veneno e paralisia" },
    description: { en: "Battle to compare paralysis vs poison strategies.", pt: "Batalhe para comparar estratégias de paralisia e veneno." },
    location: { en: "Vert Sector 3", pt: "Setor Vert 3" },
    unlock: { en: "Battle Lida during Main Mission 8", pt: "Batalhe contra Lida durante a Missão principal 8" },
    rewards: { en: "₽1,200 / Potion ×5 / Poké Ball ×3", pt: "₽1.200 / Poção ×5 / Poké Ball ×3" },
    requester: "Venin",
    landmark: "vertS3",
    map: { x: 71.67, y: 61.46 },
  },
  {
    id: 'side-20',
    kind: 'side',
    number: 20,
    name: { en: "A Berry Clever Plan", pt: "Um plano bem frutado" },
    description: { en: "Battle a Trainer using held Berries.", pt: "Batalhe contra um Treinador que usa Frutas equipadas." },
    location: { en: "Wild Zone 6", pt: "Wild Zone 6 (zona selvagem)" },
    unlock: { en: "Battle Lida during Main Mission 8", pt: "Batalhe contra Lida durante a Missão principal 8" },
    rewards: { en: "₽900 / Oran ×10 / Exp. Candy XS ×2", pt: "₽900 / Oran ×10 / Doce de Exp. XP ×2" },
    requester: "Ticien",
    landmark: "wz6",
    map: { x: 92.16, y: 49.63 },
  },
  {
    id: 'side-21',
    kind: 'side',
    number: 21,
    name: { en: "Spewpa in the Museum", pt: "Spewpa no museu" },
    description: { en: "Find all 12 Spewpa hiding in the museum.", pt: "Encontre todos os 12 Spewpa escondidos no museu." },
    location: { en: "Lumiose Museum", pt: "Museu de Lumiose" },
    unlock: { en: "Battle Lida during Main Mission 8", pt: "Batalhe contra Lida durante a Missão principal 8" },
    rewards: { en: "₽3,000 / Wise Glasses / Normal Gem ×3", pt: "₽3.000 / Óculos da Sabedoria / Gema Normal ×3" },
    requester: "Bundo",
    landmark: "museum",
    map: { x: 61.27, y: 4.78 },
  },
  {
    id: 'side-22',
    kind: 'side',
    number: 22,
    name: { en: "A Call from Mable", pt: "Uma ligação de Mable" },
    description: { en: "Visit the Research Lab — choose a Kanto starter.", pt: "Visite o Laboratório de Pesquisa — escolha um inicial de Kanto." },
    location: { en: "Pokémon Research Lab", pt: "Laboratório de Pesquisa Pokémon" },
    unlock: { en: "During story progress", pt: "Durante o progresso da história" },
    rewards: { en: "Exp. Candy / Bulbasaur, Charmander, or Squirtle", pt: "Doce de Exp. / Bulbasaur, Charmander ou Squirtle" },
    requester: "Mable",
    landmark: "researchLab",
    map: { x: 53.55, y: 95.14 },
  },
  {
    id: 'side-23',
    kind: 'side',
    number: 23,
    name: { en: "Underneath the Holovator", pt: "Debaixo do Holovator" },
    description: { en: "Move a Pokémon living under a Holovator.", pt: "Afaste um Pokémon que vive debaixo de um Holovator." },
    location: { en: "Vernal Avenue", pt: "Avenida Vernal" },
    unlock: { en: "Battle Urbain/Taunie during Main Mission 10", pt: "Batalhe contra Urbain/Taunie durante a Missão principal 10" },
    rewards: { en: "₽1,500 / Soft Sand / Revive", pt: "₽1.500 / Areia Macia / Revive" },
    requester: "Terra",
    landmark: "vernalAve",
    map: { x: 51.88, y: 88.95 },
  },
  {
    id: 'side-24',
    kind: 'side',
    number: 24,
    name: { en: "An Abra Playmate", pt: "Um Abra de brincadeira" },
    description: { en: "Trade for Riolu — Abra wanted as a playmate.", pt: "Troque por Riolu — querem um Abra como companheiro de brincadeira." },
    location: { en: "Académie Étoile", pt: "Académie Étoile (academia)" },
    unlock: { en: "Battle Urbain/Taunie during Main Mission 10", pt: "Batalhe contra Urbain/Taunie durante a Missão principal 10" },
    rewards: { en: "₽300 / Exp. Candy XS / Riolu", pt: "₽300 / Doce de Exp. XP / Riolu" },
    requester: "Bond",
    landmark: "academie",
    map: { x: 59.27, y: 28.78 },
  },
  {
    id: 'side-25',
    kind: 'side',
    number: 25,
    name: { en: "Trubblesome Patrons", pt: "Clientes Trubbish" },
    description: { en: "Clear Trubbish from Café Pokémon-Amie.", pt: "Afaste os Trubbish do Café Pokémon-Amie." },
    location: { en: "Magenta Sector 4 / Café Pokémon-Amie", pt: "Setor Magenta 4 / Café Pokémon-Amie (café)" },
    unlock: { en: "Battle Urbain/Taunie during Main Mission 10", pt: "Batalhe contra Urbain/Taunie durante a Missão principal 10" },
    rewards: { en: "₽1,200 / Rare Candy ×2 / Dusk Ball ×5", pt: "₽1.200 / Doce Raro ×2 / Dusk Ball ×5" },
    requester: "Fumi",
    landmark: "magentaS4",
    map: { x: 33.35, y: 29.74 },
  },
  {
    id: 'side-26',
    kind: 'side',
    number: 26,
    name: { en: "Burn, Litleo, Burn", pt: "Queime, Litleo, queime" },
    description: { en: "Battle to fire up a restaurant's Litleo.", pt: "Batalhe para animar o Litleo de um restaurante." },
    location: { en: "Autumnal Avenue", pt: "Avenida Autumnal" },
    unlock: { en: "Battle Urbain/Taunie during Main Mission 10", pt: "Batalhe contra Urbain/Taunie durante a Missão principal 10" },
    rewards: { en: "TM057 Will-O-Wisp / Fire Stone", pt: "MT057 Fogo-Fátuo / Pedra do Fogo" },
    requester: "Armie",
    landmark: "autumnalAve",
    map: { x: 32.05, y: 23.29 },
  },
  {
    id: 'side-27',
    kind: 'side',
    number: 27,
    name: { en: "Restored from a Fossil", pt: "Restaurado de um fóssil" },
    description: { en: "Buy a Jaw or Sail Fossil and restore it at the lab.", pt: "Compre um Fóssil Mandíbula ou Fóssil Vela e restaure-o no laboratório." },
    location: { en: "Pokémon Research Lab", pt: "Laboratório de Pesquisa Pokémon" },
    unlock: { en: "Strategy meeting during Main Mission 10", pt: "Reunião de estratégia durante a Missão principal 10" },
    rewards: { en: "Hard Stone / Kelpsy / Tyrunt or Amaura", pt: "Pedra Dura / Kelpsy / Tyrunt ou Amaura" },
    requester: "Reg",
    landmark: "researchLab",
    map: { x: 53.29, y: 95.55 },
  },
  {
    id: 'side-28',
    kind: 'side',
    number: 28,
    name: { en: "Who Says Normal Is Weak?", pt: "Quem disse que Normal é fraco?" },
    description: { en: "Battle showcasing Normal-type strength.", pt: "Batalhe mostrando a força do tipo Normal." },
    location: { en: "Bleu Sector 7", pt: "Setor Bleu 7" },
    unlock: { en: "Strategy meeting during Main Mission 10", pt: "Reunião de estratégia durante a Missão principal 10" },
    rewards: { en: "₽3,000 / Silk Scarf", pt: "₽3.000 / Lenço de Seda" },
    requester: "Marnole",
    landmark: "bleuS7",
    map: { x: 45.99, y: 90.69 },
  },
  {
    id: 'side-29',
    kind: 'side',
    number: 29,
    name: { en: "Full Course of Battles: One Star", pt: "Menu completo de batalhas: uma estrela" },
    description: { en: "Complete a one-star battle course (no mid-heal).", pt: "Complete um menu de batalhas de uma estrela (sem curar no meio)." },
    location: { en: "Restaurant Le Nah", pt: "Restaurante Le Nah" },
    unlock: { en: "Strategy meeting during Main Mission 10", pt: "Reunião de estratégia durante a Missão principal 10" },
    rewards: { en: "TM085 Substitute / Protein ×2 / Iron ×2", pt: "MT085 Substituto / Proteína ×2 / Ferro ×2" },
    requester: "Restaurant Le Nah",
    landmark: "restNah",
    map: { x: 89.2, y: 67.07 },
  },
  {
    id: 'side-30',
    kind: 'side',
    number: 30,
    name: { en: "Show Me a Mega Camerupt!", pt: "Me mostre um Mega Camerupt!" },
    description: { en: "Mega Evolve Camerupt in battle for contact inspiration.", pt: "Megaevolua Camerupt em batalha para inspirar lentes de contato." },
    location: { en: "Vernal Avenue", pt: "Avenida Vernal" },
    unlock: { en: "Complete Main Mission 10", pt: "Conclua a Missão principal 10" },
    rewards: { en: "Fresh Water ×2 / Color contacts", pt: "Água Fresca ×2 / Lentes coloridas" },
    requester: "Arden",
    landmark: "vernalAve",
    map: { x: 49.17, y: 80.57 },
  },
  {
    id: 'side-31',
    kind: 'side',
    number: 31,
    name: { en: "Show Me a Mega Sableye!", pt: "Me mostre um Mega Sableye!" },
    description: { en: "Mega Evolve Sableye in battle.", pt: "Megaevolua Sableye em batalha." },
    location: { en: "Vernal Avenue", pt: "Avenida Vernal" },
    unlock: { en: "Complete Side Mission 30", pt: "Conclua a Missão secundária 30" },
    rewards: { en: "Soda Pop ×2 / Color contacts", pt: "Refrigerante ×2 / Lentes coloridas" },
    requester: "Arden",
    landmark: "vernalAve",
    map: { x: 49.4, y: 80.54 },
  },
  {
    id: 'side-32',
    kind: 'side',
    number: 32,
    name: { en: "Show Me a Mega Medicham!", pt: "Me mostre um Mega Medicham!" },
    description: { en: "Mega Evolve Medicham in battle.", pt: "Megaevolua Medicham em batalha." },
    location: { en: "Vernal Avenue", pt: "Avenida Vernal" },
    unlock: { en: "Complete Side Mission 31", pt: "Conclua a Missão secundária 31" },
    rewards: { en: "Lemonade ×2 / Exp. Candy M / Contacts", pt: "Limonada ×2 / Doce de Exp. M / Lentes" },
    requester: "Arden",
    landmark: "vernalAve",
    map: { x: 49.29, y: 80.84 },
  },
  {
    id: 'side-33',
    kind: 'side',
    number: 33,
    name: { en: "Who Has the Bigger Magikarp?", pt: "Quem tem o Magikarp maior?" },
    description: { en: "Show an XL+ Magikarp bigger than his.", pt: "Mostre um Magikarp XL+ maior que o dele." },
    location: { en: "Vert Plaza", pt: "Praça Vert" },
    unlock: { en: "Complete Main Mission 10", pt: "Conclua a Missão principal 10" },
    rewards: { en: "Pearl / Exp. Candy S ×10", pt: "Pérola / Doce de Exp. P ×10" },
    requester: "Kingsley",
    landmark: "vertPlaza",
    map: { x: 56.24, y: 69.06 },
  },
  {
    id: 'side-34',
    kind: 'side',
    number: 34,
    name: { en: "Moves That Put Up a Wall", pt: "Golpes que levantam um muro" },
    description: { en: "Battle focused on barrier moves.", pt: "Batalha focada em golpes de barreira." },
    location: { en: "Jaune Sector 8", pt: "Setor Jaune 8" },
    unlock: { en: "Complete Main Mission 10", pt: "Conclua a Missão principal 10" },
    rewards: { en: "TM031 Reflect / Lemonade", pt: "MT031 Refletir / Limonada" },
    requester: "Muro",
    landmark: "jauneS8",
    map: { x: 76.13, y: 27.85 },
  },
  {
    id: 'side-35',
    kind: 'side',
    number: 35,
    name: { en: "Guidance from a Yoga Master", pt: "Orientação de um mestre de ioga" },
    description: { en: "Find a yoga master to help a distracted Meditite.", pt: "Encontre um mestre de ioga para ajudar um Meditite distraído." },
    location: { en: "Jaune Street", pt: "Rua Jaune" },
    unlock: { en: "Battle Naveen during Main Mission 14", pt: "Batalhe contra Naveen durante a Missão principal 14" },
    rewards: { en: "Twisted Spoon / Exp. Candy S ×5", pt: "Colher Torcida / Doce de Exp. P ×5" },
    requester: "Paix",
    landmark: "jauneStreet",
    map: { x: 61.87, y: 44.71 },
  },
  {
    id: 'side-36',
    kind: 'side',
    number: 36,
    name: { en: "Some Friendly Competition", pt: "Uma competição amigável" },
    description: { en: "Battle a Pokémon raised with tender care (friendship evo theme).", pt: "Batalhe contra um Pokémon criado com muito carinho (tema de evolução por amizade)." },
    location: { en: "Magenta Sector 5", pt: "Setor Magenta 5" },
    unlock: { en: "Battle Naveen during Main Mission 14", pt: "Batalhe contra Naveen durante a Missão principal 14" },
    rewards: { en: "Soothe Bell", pt: "Sino da Amizade" },
    requester: "Chou",
    landmark: "magentaS5",
    map: { x: 17.43, y: 58.89 },
  },
  {
    id: 'side-37',
    kind: 'side',
    number: 37,
    name: { en: "Binacle by the Boatload", pt: "Binacle aos montes" },
    description: { en: "Chase Binacle off a prized boat.", pt: "Afaste os Binacle de um barco precioso." },
    location: { en: "Saison Canal", pt: "Canal Saison" },
    unlock: { en: "Battle Naveen during Main Mission 14", pt: "Batalhe contra Naveen durante a Missão principal 14" },
    rewards: { en: "Pearl ×3", pt: "Pérola ×3" },
    requester: "Barnie",
    landmark: "saisonCanal",
    map: { x: 18.33, y: 38.93 },
  },
  {
    id: 'side-38',
    kind: 'side',
    number: 38,
    name: { en: "Chasing Status", pt: "Em busca de status" },
    description: { en: "Battle Trainers skilled with status moves.", pt: "Batalhe contra Treinadores hábeis com golpes de status." },
    location: { en: "Magenta Street", pt: "Rua Magenta" },
    unlock: { en: "Canari Quiz during Main Mission 14", pt: "Quiz da Canari durante a Missão principal 14" },
    rewards: { en: "Protein ×3 / Calcium ×3 / Power Bracer", pt: "Proteína ×3 / Cálcio ×3 / Pulseira Poder" },
    requester: "Maxen",
    landmark: "magentaStreet",
    map: { x: 22.9, y: 43.13 },
  },
  {
    id: 'side-39',
    kind: 'side',
    number: 39,
    name: { en: "Slowpoke for Slowpoke", pt: "Slowpoke por Slowpoke" },
    description: { en: "Trade Slowpoke for Galarian Slowpoke.", pt: "Troque Slowpoke por Slowpoke de Galar." },
    location: { en: "South Boulevard", pt: "Boulevard Sul" },
    unlock: { en: "Canari Quiz during Main Mission 14", pt: "Quiz da Canari durante a Missão principal 14" },
    rewards: { en: "Pearl / Power Belt / Galarian Slowpoke", pt: "Pérola / Cinto Poder / Slowpoke de Galar" },
    requester: "Quille",
    landmark: "southBlvd",
    map: { x: 11.06, y: 73.16 },
  },
  {
    id: 'side-40',
    kind: 'side',
    number: 40,
    name: { en: "A Holovator Without Power", pt: "Um Holovator sem energia" },
    description: { en: "Zap a powerless Holovator back to life.", pt: "Dê um choque para religar um Holovator sem energia." },
    location: { en: "Vert Sector 7", pt: "Setor Vert 7" },
    unlock: { en: "Canari Quiz during Main Mission 14", pt: "Quiz da Canari durante a Missão principal 14" },
    rewards: { en: "Ultra Ball ×3 / Mega Shard ×10", pt: "Ultra Ball ×3 / Fragmento Mega ×10" },
    requester: "Élec",
    landmark: "vertS7",
    map: { x: 80.51, y: 81.46 },
  },
  {
    id: 'side-41',
    kind: 'side',
    number: 41,
    name: { en: "Watch Out for Traps", pt: "Cuidado com as armadilhas" },
    description: { en: "Experience trap moves in battle.", pt: "Experimente golpes de armadilha em batalha." },
    location: { en: "Vert Sector 8", pt: "Setor Vert 8" },
    unlock: { en: "Strategy meeting during Main Mission 15", pt: "Reunião de estratégia durante a Missão principal 15" },
    rewards: { en: "TM088 Spikes / Super Potion ×5", pt: "MT088 Espinhos / Superpoção ×5" },
    requester: "Piè",
    landmark: "vertS8",
    map: { x: 61.33, y: 88.5 },
  },
  {
    id: 'side-42',
    kind: 'side',
    number: 42,
    name: { en: "A Fan of Fairy Types", pt: "Fã de tipos Fada" },
    description: { en: "Battle a Fairy-type fan.", pt: "Batalhe contra uma fã do tipo Fada." },
    location: { en: "Wild Zone 6", pt: "Wild Zone 6 (zona selvagem)" },
    unlock: { en: "Strategy meeting during Main Mission 15", pt: "Reunião de estratégia durante a Missão principal 15" },
    rewards: { en: "Fairy Feather", pt: "Pena Fada" },
    requester: "Faye",
    landmark: "wz6",
    map: { x: 93.46, y: 50.36 },
  },
  {
    id: 'side-43',
    kind: 'side',
    number: 43,
    name: { en: "A Big Weedle Problem", pt: "Um grande problema de Weedle" },
    description: { en: "Catch an alpha Weedle ruining a garden.", pt: "Capture um Weedle alfa que está destruindo um jardim." },
    location: { en: "Magenta Sector 3", pt: "Setor Magenta 3" },
    unlock: { en: "Strategy meeting during Main Mission 15", pt: "Reunião de estratégia durante a Missão principal 15" },
    rewards: { en: "Sitrus / Hondew / Rindo ×5", pt: "Frutas Sitrus / Hondew / Rindo ×5" },
    requester: "Grandt",
    landmark: "magentaS3",
    map: { x: 30.15, y: 52.33 },
  },
  {
    id: 'side-44',
    kind: 'side',
    number: 44,
    name: { en: "Vanillite's Fragrant Snow", pt: "A neve perfumada de Vanillite" },
    description: { en: "Perfume from Vanillite snow.", pt: "Perfume feito com a neve de Vanillite." },
    location: { en: "Vernal Avenue", pt: "Avenida Vernal" },
    unlock: { en: "After Main Mission 15 progress", pt: "Após o progresso da Missão principal 15" },
    rewards: { en: "Leaf Stone / Quiet Mint ×3", pt: "Pedra da Folha / Menta Quieta ×3" },
    requester: "Odette",
    landmark: "vernalAve",
    map: { x: 51.04, y: 87.26 },
  },
  {
    id: 'side-45',
    kind: 'side',
    number: 45,
    name: { en: "On Maintenance Duty", pt: "Em serviço de manutenção" },
    description: { en: "Give a thirsty maintenance worker a drink.", pt: "Dê uma bebida a um trabalhador de manutenção sedento." },
    location: { en: "South Boulevard", pt: "Boulevard Sul" },
    unlock: { en: "Complete Main Mission 15", pt: "Conclua a Missão principal 15" },
    rewards: { en: "Serious Mint / Chilan ×10", pt: "Menta Séria / Chilan ×10" },
    requester: "Durstin",
    landmark: "southBlvd",
    map: { x: 37.17, y: 91.64 },
  },
  {
    id: 'side-46',
    kind: 'side',
    number: 46,
    name: { en: "Pidgeot Soaring High", pt: "Pidgeot voando alto" },
    description: { en: "Learn about Fly from a Pidgeot-loving courier.", pt: "Aprenda sobre Voar com um entregador fã de Pidgeot." },
    location: { en: "Saison Canalside", pt: "Margem do Canal Saison" },
    unlock: { en: "Complete Main Mission 15", pt: "Conclua a Missão principal 15" },
    rewards: { en: "TM043 Fly / Repeat Ball ×5", pt: "MT043 Voar / Repeat Ball ×5" },
    requester: "Colis",
    landmark: "saisonSide",
    map: { x: 75.08, y: 54.78 },
  },
  {
    id: 'side-47',
    kind: 'side',
    number: 47,
    name: { en: "Becoming a Furfrou Trimmer", pt: "Tornando-se tosador de Furfrou" },
    description: { en: "Help unlock Furfrou trims by showing Scyther a move.", pt: "Ajude a liberar cortes de Furfrou mostrando um golpe a Scyther." },
    location: { en: "Jaune Sector 6", pt: "Setor Jaune 6" },
    unlock: { en: "Complete Main Mission 15", pt: "Conclua a Missão principal 15" },
    rewards: { en: "Revive / Exp. Candy S / Furfrou trims", pt: "Revive / Doce de Exp. P / Cortes de Furfrou" },
    requester: "Mirte",
    landmark: "jauneS6",
    map: { x: 79.99, y: 51.88 },
  },
  {
    id: 'side-48',
    kind: 'side',
    number: 48,
    name: { en: "All Tied Up", pt: "Todo enrolado" },
    description: { en: "Free a man wrapped in Pokémon webbing from a tree.", pt: "Liberte um homem enrolado em teias de Pokémon em uma árvore." },
    location: { en: "Rouge Sector 5", pt: "Setor Rouge 5" },
    unlock: { en: "Battle Josée during Main Mission 19", pt: "Batalhe contra Josée durante a Missão principal 19" },
    rewards: { en: "Net Ball ×10", pt: "Net Ball ×10 (bolas)" },
    requester: "???",
    landmark: "rougeS5",
    map: { x: 48.81, y: 21.25 },
  },
  {
    id: 'side-49',
    kind: 'side',
    number: 49,
    name: { en: "Hit and Heal", pt: "Golpear e curar" },
    description: { en: "Battle featuring HP-draining moves.", pt: "Batalha com golpes que drenam PS." },
    location: { en: "Hibernal Avenue", pt: "Avenida Hibernal" },
    unlock: { en: "Battle Josée during Main Mission 19", pt: "Batalhe contra Josée durante a Missão principal 19" },
    rewards: { en: "Big Root / Sitrus ×10", pt: "Raiz Grande / Sitrus ×10" },
    requester: "Piresse",
    landmark: "hibernalAve",
    map: { x: 57.55, y: 38.16 },
  },
  {
    id: 'side-50',
    kind: 'side',
    number: 50,
    name: { en: "Just a Few Questions for You...", pt: "Só algumas perguntas..." },
    description: { en: "A nighttime encounter with Goomy and an officer.", pt: "Um encontro noturno com Goomy e um policial." },
    location: { en: "Magenta Street", pt: "Rua Magenta" },
    unlock: { en: "Battle Josée during Main Mission 19", pt: "Batalhe contra Josée durante a Missão principal 19" },
    rewards: { en: "Lax Mint ×3", pt: "Menta Relaxada ×3" },
    requester: "Police Officer",
    landmark: "magentaStreet",
    map: { x: 37.51, y: 47.66 },
  },
  {
    id: 'side-51',
    kind: 'side',
    number: 51,
    name: { en: "Floette Frolicking with Flowers", pt: "Floette brincando entre as flores" },
    description: { en: "Battle all five of her Floette at once.", pt: "Batalhe contra os cinco Floette dela de uma vez." },
    location: { en: "South Boulevard", pt: "Boulevard Sul" },
    unlock: { en: "After Side Mission 12 chain", pt: "Após a sequência da Missão secundária 12" },
    rewards: { en: "Hair-color rewards", pt: "Recompensas de cor de cabelo" },
    requester: "Vivace",
    landmark: "southBlvd",
    map: { x: 22.72, y: 83.95 },
  },
  {
    id: 'side-52',
    kind: 'side',
    number: 52,
    name: { en: "Numel Frozen Solid", pt: "Numel congelado sólido" },
    description: { en: "Thaw a frozen Numel with a strong Fire attack.", pt: "Descongele um Numel congelado com um ataque de Fogo forte." },
    location: { en: "Wild Zone 12", pt: "Wild Zone 12 (zona selvagem)" },
    unlock: { en: "Battle Canari during Main Mission 19", pt: "Batalhe contra Canari durante a Missão principal 19" },
    rewards: { en: "Ice Heal ×3 / Exp. Candy M", pt: "Cura Gelo ×3 / Doce de Exp. M" },
    requester: "Gelli",
    landmark: "wz12",
    map: { x: 46.61, y: 84.73 },
  },
  {
    id: 'side-53',
    kind: 'side',
    number: 53,
    name: { en: "The Most Electrifying Eelektrik", pt: "O Eelektrik mais eletrizante" },
    description: { en: "Help raise Eelektrik inspired by Canari.", pt: "Ajude a treinar um Eelektrik inspirado em Canari." },
    location: { en: "Bleu Sector 5", pt: "Setor Bleu 5" },
    unlock: { en: "Battle Canari during Main Mission 19", pt: "Batalhe contra Canari durante a Missão principal 19" },
    rewards: { en: "Thunder Stone / Calcium", pt: "Pedra do Trovão / Cálcio" },
    requester: "Anguil",
    landmark: "bleuS5",
    map: { x: 36.81, y: 81.53 },
  },
  {
    id: 'side-54',
    kind: 'side',
    number: 54,
    name: { en: "Get ENERGIZED!", pt: "Fique ENERGIZADO!" },
    description: { en: "Battle involving Focus Energy strategies.", pt: "Batalha envolvendo estratégias de Concentração." },
    location: { en: "Quasartico Inc.", pt: "Quasartico Inc. (sede)" },
    unlock: { en: "Battle Gwynn during Main Mission 19", pt: "Batalhe contra Gwynn durante a Missão principal 19" },
    rewards: { en: "Scope Lens / Ultra Ball ×3", pt: "Lente do Âmbito / Ultra Ball ×3" },
    requester: "Foco",
    landmark: "quasartico",
    map: { x: 26.84, y: 28.88 },
  },
  {
    id: 'side-55',
    kind: 'side',
    number: 55,
    name: { en: "Carvanha, Menace of the Deep!", pt: "Carvanha, ameaça das profundezas!" },
    description: { en: "Lend a Carvanha for a thriller film.", pt: "Empreste um Carvanha para um filme de suspense." },
    location: { en: "Saison Canalside", pt: "Margem do Canal Saison" },
    unlock: { en: "Battle Gwynn during Main Mission 19", pt: "Batalhe contra Gwynn durante a Missão principal 19" },
    rewards: { en: "Dive Ball ×3 / Exp. Candy M ×2", pt: "Dive Ball ×3 / Doce de Exp. M ×2" },
    requester: "Director",
    landmark: "saisonSide",
    map: { x: 68.06, y: 54.33 },
  },
  {
    id: 'side-56',
    kind: 'side',
    number: 56,
    name: { en: "We'll Just Muscle Our Way Through!", pt: "Vamos na força bruta!" },
    description: { en: "Hit a Holovator with a Fighting physical move.", pt: "Acerte um Holovator com um golpe físico de Lutador." },
    location: { en: "Jaune Sector 6", pt: "Setor Jaune 6" },
    unlock: { en: "Battle Gwynn during Main Mission 19", pt: "Batalhe contra Gwynn durante a Missão principal 19" },
    rewards: { en: "Muscle Band", pt: "Faixa Muscular" },
    requester: "Médierà",
    landmark: "jauneS6",
    map: { x: 74.76, y: 50.61 },
  },
  {
    id: 'side-57',
    kind: 'side',
    number: 57,
    name: { en: "The Camerupt Entrepreneur", pt: "O empreendedor Camerupt" },
    description: { en: "Help a Camerupt business scheme.", pt: "Ajude um esquema de negócios envolvendo Camerupt." },
    location: { en: "Bleu Sector 3", pt: "Setor Bleu 3" },
    unlock: { en: "Complete Main Mission 19", pt: "Conclua a Missão principal 19" },
    rewards: { en: "Fire Stone / Charcoal", pt: "Pedra do Fogo / Carvão" },
    requester: "Hérup",
    landmark: "bleuS3",
    map: { x: 46.67, y: 67.59 },
  },
  {
    id: 'side-58',
    kind: 'side',
    number: 58,
    name: { en: "Better to Detect Than to Protect", pt: "Melhor Detectar do que Proteger" },
    description: { en: "Compare Protect vs Detect in battle.", pt: "Compare Proteger e Detectar em batalha." },
    location: { en: "Bleu Sector 4", pt: "Setor Bleu 4" },
    unlock: { en: "Complete Main Mission 19", pt: "Conclua a Missão principal 19" },
    rewards: { en: "Black Belt / Exp. Candy M ×3", pt: "Faixa Preta / Doce de Exp. M ×3" },
    requester: "Claire",
    landmark: "bleuS4",
    map: { x: 29.11, y: 66.18 },
  },
  {
    id: 'side-59',
    kind: 'side',
    number: 59,
    name: { en: "A Rematch with Hawlucha!", pt: "Uma revanche com Hawlucha!" },
    description: { en: "Rematch a battle-hungry Hawlucha.", pt: "Revanche contra um Hawlucha ávido por batalha." },
    location: { en: "Magenta Sector 3", pt: "Setor Magenta 3" },
    unlock: { en: "Complete Main Mission 19", pt: "Conclua a Missão principal 19" },
    rewards: { en: "Focus Sash / Coba ×5", pt: "Faixa Foco / Coba ×5" },
    requester: "Dora",
    landmark: "magentaS3",
    map: { x: 23.84, y: 44.76 },
  },
  {
    id: 'side-60',
    kind: 'side',
    number: 60,
    name: { en: "Full Course of Battles: Two Stars", pt: "Menu completo de batalhas: duas estrelas" },
    description: { en: "Two-star battle course (no mid-heal).", pt: "Menu de batalhas de duas estrelas (sem curar no meio)." },
    location: { en: "Restaurant Le Yeah", pt: "Restaurante Le Yeah" },
    unlock: { en: "Complete Main Mission 19", pt: "Conclua a Missão principal 19" },
    rewards: { en: "TM094 Whirlwind / Calcium ×3 / Zinc ×3", pt: "MT094 Redemoinho / Cálcio ×3 / Zinco ×3" },
    requester: "Restaurant Le Yeah",
    landmark: "restYeah",
    map: { x: 33.14, y: 23.8 },
  },
  {
    id: 'side-61',
    kind: 'side',
    number: 61,
    name: { en: "My Favorite Holovator", pt: "Meu Holovator favorito" },
    description: { en: "Battle a Rust grunt blocking \"his\" Holovator.", pt: "Batalhe contra um capanga Rust bloqueando \"seu\" Holovator." },
    location: { en: "Bleu Sector 3", pt: "Setor Bleu 3" },
    unlock: { en: "During Main Mission 20", pt: "Durante a Missão principal 20" },
    rewards: { en: "Poison Barb / Mega Shards", pt: "Farpa Venenosa / Fragmentos Mega" },
    requester: "Grunt",
    landmark: "bleuS3",
    map: { x: 41.12, y: 74.46 },
  },
  {
    id: 'side-62',
    kind: 'side',
    number: 62,
    name: { en: "Becoming a Pro Furfrou Trimmer", pt: "Tornando-se tosador profissional de Furfrou" },
    description: { en: "Unlock more Furfrou styles.", pt: "Liberte mais estilos de Furfrou." },
    location: { en: "Jaune Sector 6", pt: "Setor Jaune 6" },
    unlock: { en: "After Side Mission 47", pt: "Após a Missão secundária 47" },
    rewards: { en: "Revive ×3 / Exp. Candy M / Trims", pt: "Revive ×3 / Doce de Exp. M / Cortes" },
    requester: "Mirte",
    landmark: "jauneS6",
    map: { x: 80.24, y: 51.65 },
  },
  {
    id: 'side-63',
    kind: 'side',
    number: 63,
    name: { en: "An Extra-Large Gogoat", pt: "Um Gogoat extra-grande" },
    description: { en: "Find an extra-large Gogoat for a courier.", pt: "Encontre um Gogoat extra-grande para um entregador." },
    location: { en: "Magenta Sector 8", pt: "Setor Magenta 8" },
    unlock: { en: "During Main Mission 20", pt: "Durante a Missão principal 20" },
    rewards: { en: "Carbos ×10", pt: "Carbos ×10 (vitamina)" },
    requester: "Lugo",
    landmark: "magentaS8",
    map: { x: 11.27, y: 29.8 },
  },
  {
    id: 'side-64',
    kind: 'side',
    number: 64,
    name: { en: "Let It Rain, Let It Pour", pt: "Que chova, que diluvie" },
    description: { en: "Battle in the rain.", pt: "Batalhe sob a chuva." },
    location: { en: "Rouge Sector 7", pt: "Setor Rouge 7" },
    unlock: { en: "During Main Mission 20", pt: "Durante a Missão principal 20" },
    rewards: { en: "Mystic Water / Fresh Water ×3", pt: "Água Mística / Água Fresca ×3" },
    requester: "Cielestine",
    landmark: "rougeS7",
    map: { x: 41.2, y: 14.19 },
  },
  {
    id: 'side-65',
    kind: 'side',
    number: 65,
    name: { en: "Apartment Block Eeriness", pt: "Estranheza no prédio" },
    description: { en: "Investigate haunted apartment rooftop noises.", pt: "Investigue barulhos assustadores no terraço de um prédio." },
    location: { en: "Rouge Sector 7", pt: "Setor Rouge 7" },
    unlock: { en: "During Main Mission 20", pt: "Durante a Missão principal 20" },
    rewards: { en: "Magnet / Wacan ×5", pt: "Ímã / Wacan ×5" },
    requester: "Ante",
    landmark: "rougeS7",
    map: { x: 37.76, y: 13.23 },
  },
  {
    id: 'side-66',
    kind: 'side',
    number: 66,
    name: { en: "Investigating with Shuppet", pt: "Investigando com Shuppet" },
    description: { en: "Bring a Shuppet to help a police investigation.", pt: "Traga um Shuppet para ajudar uma investigação policial." },
    location: { en: "Bleu Sector 1", pt: "Setor Bleu 1" },
    unlock: { en: "During Main Mission 20", pt: "Durante a Missão principal 20" },
    rewards: { en: "Exp. Candy M ×5", pt: "Doce de Exp. M ×5 (recompensa)" },
    requester: "Rancun",
    landmark: "bleuS1",
    map: { x: 42.4, y: 67.41 },
  },
  {
    id: 'side-67',
    kind: 'side',
    number: 67,
    name: { en: "Sylveon the Soother", pt: "Sylveon, o apaziguador" },
    description: { en: "Use Sylveon's soothing powers to stop fights.", pt: "Use os poderes calmantes de Sylveon para interromper brigas." },
    location: { en: "Coulant Waterway", pt: "Via d'água Coulant" },
    unlock: { en: "During Main Mission 20", pt: "Durante a Missão principal 20" },
    rewards: { en: "Shell Bell / Hondew ×5", pt: "Sino Concha / Hondew ×5" },
    requester: "Calma",
    landmark: "coulant",
    map: { x: 75.87, y: 70.48 },
  },
  {
    id: 'side-68',
    kind: 'side',
    number: 68,
    name: { en: "The Best Use for Leftovers", pt: "O melhor uso para Restos" },
    description: { en: "Battle a waitress showcasing Leftovers.", pt: "Batalhe contra uma garçonete que mostra o uso de Restos." },
    location: { en: "Vert Sector 6", pt: "Setor Vert 6" },
    unlock: { en: "During Main Mission 20", pt: "Durante a Missão principal 20" },
    rewards: { en: "Leftovers", pt: "Restos" },
    requester: "Seizi",
    landmark: "vertS6",
    map: { x: 88.4, y: 65.2 },
  },
  {
    id: 'side-69',
    kind: 'side',
    number: 69,
    name: { en: "A Sky Battle, for Old Times' Sake", pt: "Uma Batalha Aérea, pelos velhos tempos" },
    description: { en: "Flying-only Sky Battle.", pt: "Batalha Aérea só com tipos Voador." },
    location: { en: "Magenta Sector 8", pt: "Setor Magenta 8" },
    unlock: { en: "During Main Mission 20", pt: "Durante a Missão principal 20" },
    rewards: { en: "Sharp Beak / Power Anklet", pt: "Bico Afiado / Tornozeleira Poder" },
    requester: "Volli",
    landmark: "magentaS8",
    map: { x: 16.77, y: 35.71 },
  },
  {
    id: 'side-70',
    kind: 'side',
    number: 70,
    name: { en: "Who's the Strongest, Huh?!", pt: "Quem é o mais forte, hein?!" },
    description: { en: "Settle a Rust grunt argument with battles.", pt: "Resolva uma discussão de capangas Rust com batalhas." },
    location: { en: "Estival Avenue", pt: "Avenida Estival" },
    unlock: { en: "Complete Main Mission 20", pt: "Conclua a Missão principal 20" },
    rewards: { en: "Black Glasses / Focus Band", pt: "Óculos Escuros / Faixa Foco" },
    requester: "Grunt",
    landmark: "estivalAve",
    map: { x: 33.01, y: 56.31 },
  },
  {
    id: 'side-71',
    kind: 'side',
    number: 71,
    name: { en: "The Burning Gaze of Watchog", pt: "O olhar flamejante de Watchog" },
    description: { en: "Defeat an alpha Watchog near a Holovator.", pt: "Derrote um Watchog alfa perto de um Holovator." },
    location: { en: "Magenta Sector 2", pt: "Setor Magenta 2" },
    unlock: { en: "Complete Main Mission 20", pt: "Conclua a Missão principal 20" },
    rewards: { en: "Assault Vest / Full Heal ×3", pt: "Colete de Assalto / Cura Total ×3" },
    requester: "Chuckie",
    landmark: "magentaS2",
    map: { x: 39.49, y: 37.49 },
  },
  {
    id: 'side-72',
    kind: 'side',
    number: 72,
    name: { en: "Find My Galarian Stunfisk!", pt: "Ache meu Stunfisk de Galar!" },
    description: { en: "Find Galarian Stunfisk disguised as a Poké Ball in WZ11.", pt: "Encontre o Stunfisk de Galar disfarçado de Poké Ball na WZ11." },
    location: { en: "Saison Canal", pt: "Canal Saison" },
    unlock: { en: "Complete Main Mission 20", pt: "Conclua a Missão principal 20" },
    rewards: { en: "Max Revive / Power Weight / Galarian Stunfisk", pt: "Max Revive / Peso Poder / Stunfisk de Galar" },
    requester: "Terri",
    landmark: "saisonCanal",
    map: { x: 92.18, y: 62.23 },
  },
  {
    id: 'side-73',
    kind: 'side',
    number: 73,
    name: { en: "Full Course of Battles: High Rolling", pt: "Menu completo de batalhas: High Rolling" },
    description: { en: "Sushi High Roller battle course.", pt: "Menu de batalhas do Sushi High Roller." },
    location: { en: "Sushi High Roller", pt: "Sushi High Roller (restaurante)" },
    unlock: { en: "Complete Main Mission 20", pt: "Conclua a Missão principal 20" },
    rewards: { en: "Qualot / Grepa / Kelpsy ×10", pt: "Frutas Qualot / Grepa / Kelpsy ×10" },
    requester: "Sushi High Roller",
    landmark: "sushi",
    map: { x: 51.67, y: 19.99 },
  },
  {
    id: 'side-74',
    kind: 'side',
    number: 74,
    name: { en: "Delibird Gets in a Flap", pt: "Delibird em pânico" },
    description: { en: "Help a panicking Delibird menaced by Garbodor.", pt: "Ajude um Delibird em pânico ameaçado por Garbodor." },
    location: { en: "Vert Sector 8", pt: "Setor Vert 8" },
    unlock: { en: "Complete Main Mission 25", pt: "Conclua a Missão principal 25" },
    rewards: { en: "Seed of Mastery ×5", pt: "Semente da Maestria ×5" },
    requester: "???",
    landmark: "vertS8",
    map: { x: 61.28, y: 85.53 },
  },
  {
    id: 'side-75',
    kind: 'side',
    number: 75,
    name: { en: "Some Unusual Pokémon", pt: "Alguns Pokémon incomuns" },
    description: { en: "Battle unusual regional Pokémon.", pt: "Batalhe contra Pokémon regionais incomuns." },
    location: { en: "Vert Sector 9", pt: "Setor Vert 9" },
    unlock: { en: "Complete Main Mission 25", pt: "Conclua a Missão principal 25" },
    rewards: { en: "Galarica Cuff / Galarica Wreath", pt: "Pulseira Galarica / Guirlanda Galarica" },
    requester: "Touri",
    landmark: "vertS9",
    map: { x: 62.68, y: 90.09 },
  },
  {
    id: 'side-76',
    kind: 'side',
    number: 76,
    name: { en: "Let's Learn About Mega Evolution!", pt: "Vamos aprender sobre Megaevolução!" },
    description: { en: "Teach kids about Mega Evolution at school.", pt: "Ensine as crianças sobre Megaevolução na escola." },
    location: { en: "Académie Étoile", pt: "Académie Étoile (academia)" },
    unlock: { en: "Complete Main Mission 25", pt: "Conclua a Missão principal 25" },
    rewards: { en: "Mega Shard ×100", pt: "Fragmento Mega ×100" },
    requester: "Jondre",
    landmark: "academie",
    map: { x: 61.7, y: 26.63 },
  },
  {
    id: 'side-77',
    kind: 'side',
    number: 77,
    name: { en: "Catch Mawile If You Can", pt: "Capture Mawile se conseguir" },
    description: { en: "Catch the supposedly uncatchable Mawile.", pt: "Capture o Mawile que dizem ser impossível de pegar." },
    location: { en: "Magenta Sector 3", pt: "Setor Magenta 3" },
    unlock: { en: "Complete Main Mission 25", pt: "Conclua a Missão principal 25" },
    rewards: { en: "Ultra Ball ×20", pt: "Ultra Ball ×20 (bolas)" },
    requester: "Réu",
    landmark: "magentaS3",
    map: { x: 26.47, y: 48.17 },
  },
  {
    id: 'side-78',
    kind: 'side',
    number: 78,
    name: { en: "Inkay's Fragrant Ink", pt: "A tinta perfumada de Inkay" },
    description: { en: "Perfume from Inkay ink.", pt: "Perfume feito com a tinta de Inkay." },
    location: { en: "Vernal Avenue", pt: "Avenida Vernal" },
    unlock: { en: "Odette quest chain", pt: "Sequência de missões da Odette" },
    rewards: { en: "Big Pearl ×3", pt: "Pérola Grande ×3" },
    requester: "Odette",
    landmark: "vernalAve",
    map: { x: 50.82, y: 87.6 },
  },
  {
    id: 'side-79',
    kind: 'side',
    number: 79,
    name: { en: "A Fateful Swing of a Metronome", pt: "Um balanço fatídico de Metrônomo" },
    description: { en: "Battle centered on Metronome.", pt: "Batalha centrada em Metrônomo." },
    location: { en: "Jaune Sector 7", pt: "Setor Jaune 7" },
    unlock: { en: "During Main Mission 26", pt: "Durante a Missão principal 26" },
    rewards: { en: "TM099 Metronome", pt: "MT099 Metrônomo" },
    requester: "Furiko",
    landmark: "jauneS7",
    map: { x: 71.08, y: 23.59 },
  },
  {
    id: 'side-80',
    kind: 'side',
    number: 80,
    name: { en: "A Shocking Territorial Dispute", pt: "Uma disputa territorial chocante" },
    description: { en: "Clear Electric-types blocking a Holovator.", pt: "Afaste tipos Elétricos bloqueando um Holovator." },
    location: { en: "Hibernal Avenue", pt: "Avenida Hibernal" },
    unlock: { en: "During Main Mission 26", pt: "Durante a Missão principal 26" },
    rewards: { en: "Quick Ball ×4 / Lumiose Galette", pt: "Quick Ball ×4 / Galette de Lumiose" },
    requester: "Amordél",
    landmark: "hibernalAve",
    map: { x: 73.04, y: 18.35 },
  },
  {
    id: 'side-81',
    kind: 'side',
    number: 81,
    name: { en: "Pancham the Courier", pt: "Pancham, o entregador" },
    description: { en: "Help a Trainer and Pancham with a customer.", pt: "Ajude um Treinador e um Pancham com um cliente." },
    location: { en: "South Boulevard", pt: "Boulevard Sul" },
    unlock: { en: "During Main Mission 26", pt: "Durante a Missão principal 26" },
    rewards: { en: "Lumiose Galette ×2 / Lemonade", pt: "Galette de Lumiose ×2 / Limonada" },
    requester: "Andi",
    landmark: "southBlvd",
    map: { x: 82.7, y: 80.37 },
  },
  {
    id: 'side-82',
    kind: 'side',
    number: 82,
    name: { en: "Clauncher Launching Water Gun", pt: "Clauncher lançando Jato d'Água" },
    description: { en: "Motivate Clauncher to wash sludge with Water Gun.", pt: "Motive Clauncher a limpar a lama com Jato d'Água." },
    location: { en: "Jaune Street", pt: "Rua Jaune" },
    unlock: { en: "During Main Mission 26", pt: "Durante a Missão principal 26" },
    rewards: { en: "Pearl ×3 / Big Pearl", pt: "Pérola ×3 / Pérola Grande" },
    requester: "Nett",
    landmark: "jauneStreet",
    map: { x: 86.39, y: 35.8 },
  },
  {
    id: 'side-83',
    kind: 'side',
    number: 83,
    name: { en: "Honedge's Cutting Edge", pt: "O fio afiado de Honedge" },
    description: { en: "Help Honedge feel better via a Pupitar battle.", pt: "Ajude Honedge a se sentir melhor com uma batalha contra Pupitar." },
    location: { en: "Rouge Street / Cemetery", pt: "Rua Rouge / Cemitério" },
    unlock: { en: "During Main Mission 26", pt: "Durante a Missão principal 26" },
    rewards: { en: "Dusk Stone / Hyper Potion ×2", pt: "Pedra do Crepúsculo / Hiperpoção ×2" },
    requester: "Acier",
    landmark: "rougeStreet",
    map: { x: 50.78, y: 4.67 },
  },
  {
    id: 'side-84',
    kind: 'side',
    number: 84,
    name: { en: "Strike First to Make 'Em Flinch!", pt: "Ataque primeiro e faça-os recuar!" },
    description: { en: "Battle flinch-focused strategies.", pt: "Batalha focada em estratégias de flinch." },
    location: { en: "Quasartico Inc.", pt: "Quasartico Inc. (sede)" },
    unlock: { en: "During Main Mission 26", pt: "Durante a Missão principal 26" },
    rewards: { en: "King's Rock", pt: "Pedra do Rei" },
    requester: "Flynn",
    landmark: "quasartico",
    map: { x: 26.88, y: 30.78 },
  },
  {
    id: 'side-85',
    kind: 'side',
    number: 85,
    name: { en: "Follow Litwick!", pt: "Siga Litwick!" },
    description: { en: "Follow Litwick to find a missing sister.", pt: "Siga Litwick para encontrar uma irmã desaparecida." },
    location: { en: "Magenta Sector 9", pt: "Setor Magenta 9" },
    unlock: { en: "During Main Mission 26", pt: "Durante a Missão principal 26" },
    rewards: { en: "Life Orb", pt: "Orbe da Vida" },
    requester: "Consei",
    landmark: "magentaS9",
    map: { x: 16.87, y: 26.85 },
  },
  {
    id: 'side-86',
    kind: 'side',
    number: 86,
    name: { en: "Who Messed Up the Garden?", pt: "Quem estragou o jardim?" },
    description: { en: "Find who dug a hole in the Rust garden.", pt: "Descubra quem cavou um buraco no jardim Rust." },
    location: { en: "Bleu Sector 4", pt: "Setor Bleu 4" },
    unlock: { en: "Complete Main Mission 26", pt: "Conclua a Missão principal 26" },
    rewards: { en: "Weakness Policy / Adamant Mint ×3", pt: "Política de Fraqueza / Menta Firme ×3" },
    requester: "Grunt",
    landmark: "bleuS4",
    map: { x: 33.83, y: 62.25 },
  },
  {
    id: 'side-87',
    kind: 'side',
    number: 87,
    name: { en: "Becoming a Peerless Furfrou Trimmer", pt: "Tornando-se tosador inigualável de Furfrou" },
    description: { en: "Unlock final Furfrou styles.", pt: "Liberte os estilos finais de Furfrou." },
    location: { en: "Jaune Sector 6", pt: "Setor Jaune 6" },
    unlock: { en: "After Side Mission 62", pt: "Após a Missão secundária 62" },
    rewards: { en: "Max Revive / Exp. Candy L / Trims", pt: "Max Revive / Doce de Exp. G / Cortes" },
    requester: "Mirte",
    landmark: "jauneS6",
    map: { x: 80.35, y: 51.9 },
  },
  {
    id: 'side-88',
    kind: 'side',
    number: 88,
    name: { en: "The Nervous Novice Cabbie", pt: "O taxista novato nervoso" },
    description: { en: "Be a new taxi driver's first fare.", pt: "Seja a primeira corrida de um taxista novato." },
    location: { en: "Rouge Plaza", pt: "Praça Rouge" },
    unlock: { en: "Complete Main Mission 26", pt: "Conclua a Missão principal 26" },
    rewards: { en: "TM047 Agility / Swift Feather", pt: "MT047 Agilidade / Pena Veloz" },
    requester: "Tesse",
    landmark: "rougePlaza",
    map: { x: 46.79, y: 23.15 },
  },
  {
    id: 'side-89',
    kind: 'side',
    number: 89,
    name: { en: "Up, Up, and Away After Emolga!", pt: "Para cima e atrás de Emolga!" },
    description: { en: "Chase Emolga with Roto-Glide to recover Berries.", pt: "Persiga Emolga com o Roto-Glide para recuperar Frutas." },
    location: { en: "Jaune Sector 7", pt: "Setor Jaune 7" },
    unlock: { en: "Complete Main Mission 26", pt: "Conclua a Missão principal 26" },
    rewards: { en: "Kelpsy / Pomeg / Tamato ×8", pt: "Frutas Kelpsy / Pomeg / Tamato ×8" },
    requester: "Urmand",
    landmark: "jauneS7",
    map: { x: 74.77, y: 23.76 },
  },
  {
    id: 'side-90',
    kind: 'side',
    number: 90,
    name: { en: "Froslass's Unfinished Business", pt: "O assunto pendente de Froslass" },
    description: { en: "Follow a Froslass that stares intently at you.", pt: "Siga um Froslass que te olha fixamente." },
    location: { en: "Bleu Sector 3", pt: "Setor Bleu 3" },
    unlock: { en: "Complete Main Mission 30", pt: "Conclua a Missão principal 30" },
    rewards: { en: "Dawn Stone", pt: "Pedra da Aurora" },
    requester: "???",
    landmark: "bleuS3",
    map: { x: 45.05, y: 71.26 },
  },
  {
    id: 'side-91',
    kind: 'side',
    number: 91,
    name: { en: "Dragon You into Battle", pt: "Dragão te puxando pra batalha" },
    description: { en: "SBC Dragon-type battle.", pt: "Batalha de tipo Dragão da SBC." },
    location: { en: "Vert Sector 3", pt: "Setor Vert 3" },
    unlock: { en: "Complete Main Mission 30", pt: "Conclua a Missão principal 30" },
    rewards: { en: "Dragon Fang / Haban ×5", pt: "Presa do Dragão / Haban ×5" },
    requester: "Guivre",
    landmark: "vertS3",
    map: { x: 74.07, y: 62.41 },
  },
  {
    id: 'side-92',
    kind: 'side',
    number: 92,
    name: { en: "The Beldum Blockade", pt: "O bloqueio de Beldum" },
    description: { en: "Clear Beldum blocking a Holovator.", pt: "Afaste os Beldum bloqueando um Holovator." },
    location: { en: "South Boulevard", pt: "Boulevard Sul" },
    unlock: { en: "Complete Main Mission 30", pt: "Conclua a Missão principal 30" },
    rewards: { en: "Rocky Helmet / Full Restore", pt: "Capacete Rochoso / Restaurar Tudo" },
    requester: "Aimant",
    landmark: "southBlvd",
    map: { x: 19.3, y: 80.68 },
  },
  {
    id: 'side-93',
    kind: 'side',
    number: 93,
    name: { en: "Finding a Place for Heliolisk", pt: "Encontrando um lugar para Heliolisk" },
    description: { en: "Find the perfect spot for Heliolisk.", pt: "Encontre o lugar perfeito para Heliolisk." },
    location: { en: "South Boulevard", pt: "Boulevard Sul" },
    unlock: { en: "Complete Main Mission 30", pt: "Conclua a Missão principal 30" },
    rewards: { en: "Sun Stone / Exp. Candy M ×2", pt: "Pedra do Sol / Doce de Exp. M ×2" },
    requester: "Trale",
    landmark: "southBlvd",
    map: { x: 16.05, y: 77.18 },
  },
  {
    id: 'side-94',
    kind: 'side',
    number: 94,
    name: { en: "Full Course of Battles: Three Stars", pt: "Menu completo de batalhas: três estrelas" },
    description: { en: "Three-star battle course.", pt: "Menu de batalhas de três estrelas." },
    location: { en: "Restaurant Le Wow", pt: "Restaurante Le Wow" },
    unlock: { en: "Complete Main Mission 30", pt: "Conclua a Missão principal 30" },
    rewards: { en: "TM045 Knock Off / HP Up ×5 / Carbos ×5", pt: "MT045 Derrubar / Mais PS ×5 / Carbos ×5" },
    requester: "Restaurant Le Wow",
    landmark: "restWow",
    map: { x: 58.54, y: 35.09 },
  },
  {
    id: 'side-95',
    kind: 'side',
    number: 95,
    name: { en: "A Haunting Experience", pt: "Uma experiência assustadora" },
    description: { en: "Ghost-only battle.", pt: "Batalha só com tipos Fantasma." },
    location: { en: "Jaune Sector 2", pt: "Setor Jaune 2" },
    unlock: { en: "Complete Main Mission 31", pt: "Conclua a Missão principal 31" },
    rewards: { en: "Spell Tag", pt: "Talismã" },
    requester: "Malé",
    landmark: "jauneS2",
    map: { x: 70.17, y: 48.51 },
  },
  {
    id: 'side-96',
    kind: 'side',
    number: 96,
    name: { en: "Let Us Battle...Artistically", pt: "Vamos batalhar... artisticamente" },
    description: { en: "An \"artistic\" battle challenge.", pt: "Um desafio de batalha \"artístico\"." },
    location: { en: "Rouge Sector 1", pt: "Setor Rouge 1" },
    unlock: { en: "Complete Main Mission 31", pt: "Conclua a Missão principal 31" },
    rewards: { en: "TM048 Self-Destruct / Bottle Cap ×2", pt: "MT048 Autodestruição / Tampa de Garrafa ×2" },
    requester: "Fina",
    landmark: "rougeS1",
    map: { x: 47.34, y: 41.1 },
  },
  {
    id: 'side-97',
    kind: 'side',
    number: 97,
    name: { en: "Stop the Runaway Whirlipede!", pt: "Pare o Whirlipede fugitivo!" },
    description: { en: "Chase and battle a runaway Whirlipede.", pt: "Persiga e batalhe contra um Whirlipede fugitivo." },
    location: { en: "South Boulevard", pt: "Boulevard Sul" },
    unlock: { en: "Complete Main Mission 31", pt: "Conclua a Missão principal 31" },
    rewards: { en: "Repeat Ball ×3 / Quick Ball ×3", pt: "Repeat Ball ×3 / Quick Ball ×3 (bolas)" },
    requester: "Rouland",
    landmark: "southBlvd",
    map: { x: 5.12, y: 55.4 },
  },
  {
    id: 'side-98',
    kind: 'side',
    number: 98,
    name: { en: "Jumbo Variety Pumpkaboo", pt: "Pumpkaboo variedade Jumbo" },
    description: { en: "Find a Jumbo Pumpkaboo.", pt: "Encontre um Pumpkaboo Jumbo." },
    location: { en: "North Boulevard", pt: "Boulevard Norte" },
    unlock: { en: "Complete Main Mission 31", pt: "Conclua a Missão principal 31" },
    rewards: { en: "Seed of Mastery ×5 / Rare Candy ×2", pt: "Semente da Maestria ×5 / Doce Raro ×2" },
    requester: "Taille",
    landmark: "northBlvd",
    map: { x: 85.17, y: 23.64 },
  },
  {
    id: 'side-99',
    kind: 'side',
    number: 99,
    name: { en: "Pleasing Aron's Palate", pt: "Agradando o paladar de Aron" },
    description: { en: "Find seasoning for scrap-metal-eating Aron.", pt: "Encontre tempero para um Aron que come sucata de metal." },
    location: { en: "Vernal Avenue", pt: "Avenida Vernal" },
    unlock: { en: "Talk to Mable during Main Mission 35", pt: "Fale com Mable durante a Missão principal 35" },
    rewards: { en: "Zinc ×5 / Power Band", pt: "Zinco ×5 / Faixa Poder" },
    requester: "Appée",
    landmark: "vernalAve",
    map: { x: 51.76, y: 95.43 },
  },
  {
    id: 'side-100',
    kind: 'side',
    number: 100,
    name: { en: "Starmie on High", pt: "Starmie nas alturas" },
    description: { en: "Join a Starmie space-message gathering.", pt: "Participe de um encontro de Starmie com mensagens espaciais." },
    location: { en: "Magenta Street", pt: "Rua Magenta" },
    unlock: { en: "Talk to Mable during Main Mission 35", pt: "Fale com Mable durante a Missão principal 35" },
    rewards: { en: "Eviolite / Big Pearl", pt: "Eviolite / Pérola Grande" },
    requester: "Cate",
    landmark: "magentaStreet",
    map: { x: 38.71, y: 44.65 },
  },
  {
    id: 'side-101',
    kind: 'side',
    number: 101,
    name: { en: "Steadfast in Steel", pt: "Firme no Aço" },
    description: { en: "Battle a Steel-loving Rust grunt.", pt: "Batalhe contra um capanga Rust fã do tipo Aço." },
    location: { en: "Bleu Sector 6", pt: "Setor Bleu 6" },
    unlock: { en: "Talk to Mable during Main Mission 35", pt: "Fale com Mable durante a Missão principal 35" },
    rewards: { en: "Metal Coat / Exp. Candy M", pt: "Revestimento Metálico / Doce de Exp. M" },
    requester: "Grunt",
    landmark: "bleuS6",
    map: { x: 29.7, y: 76.41 },
  },
  {
    id: 'side-102',
    kind: 'side',
    number: 102,
    name: { en: "A Chilling Challenge", pt: "Um desafio gelado" },
    description: { en: "Ice-type battle challenge.", pt: "Desafio de batalha do tipo Gelo." },
    location: { en: "Wild Zone 12", pt: "Wild Zone 12 (zona selvagem)" },
    unlock: { en: "After Lysandre Labs in Main Mission 35", pt: "Após os Laboratórios Lysandre na Missão principal 35" },
    rewards: { en: "Never-Melt Ice / Ice Stone", pt: "Gelo Eterno / Pedra do Gelo" },
    requester: "Glace",
    landmark: "wz12",
    map: { x: 40.31, y: 78.51 },
  },
  {
    id: 'side-103',
    kind: 'side',
    number: 103,
    name: { en: "Facing the Furfrou League", pt: "Enfrentando a Liga Furfrou" },
    description: { en: "Defeat the Furfrou League Elite Four.", pt: "Derrote a Elite dos Quatro da Liga Furfrou." },
    location: { en: "Jaune Sector 6", pt: "Setor Jaune 6" },
    unlock: { en: "After Mirte trim quests", pt: "Após as missões de corte da Mirte" },
    rewards: { en: "Gold Bottle Cap / ₽30,000", pt: "Tampa de Garrafa Dourada / ₽30.000" },
    requester: "Mirte",
    landmark: "jauneS6",
    map: { x: 80.16, y: 52.05 },
  },
  {
    id: 'side-104',
    kind: 'side',
    number: 104,
    name: { en: "Abuzz About Bug Types", pt: "Empolgado com tipos Inseto" },
    description: { en: "Battle a Bug-type specialist.", pt: "Batalhe contra uma especialista do tipo Inseto." },
    location: { en: "Rouge Sector 7", pt: "Setor Rouge 7" },
    unlock: { en: "After Lysandre Labs in Main Mission 35", pt: "Após os Laboratórios Lysandre na Missão principal 35" },
    rewards: { en: "Exp. Candy M ×5 / Power Lens", pt: "Doce de Exp. M ×5 / Lente Poder" },
    requester: "Constance",
    landmark: "rougeS7",
    map: { x: 39.98, y: 14.12 },
  },
  {
    id: 'side-105',
    kind: 'side',
    number: 105,
    name: { en: "Trevenant, the Haunted Elder Tree!", pt: "Trevenant, a árvore ancestral assombrada!" },
    description: { en: "Lend a Trevenant for a horror film.", pt: "Empreste um Trevenant para um filme de terror." },
    location: { en: "Rouge Sector 6", pt: "Setor Rouge 6" },
    unlock: { en: "Story progress", pt: "Progresso da história" },
    rewards: { en: "Dusk Ball ×3 / Soda Pop", pt: "Dusk Ball ×3 / Refrigerante" },
    requester: "Director",
    landmark: "rougeS6",
    map: { x: 60.25, y: 18.2 },
  },
  {
    id: 'side-106',
    kind: 'side',
    number: 106,
    name: { en: "Klefki's Lost Key", pt: "A chave perdida de Klefki" },
    description: { en: "Hunt down Klefki's lost key across the city.", pt: "Procure pela cidade a chave perdida de Klefki." },
    location: { en: "Hibernal Avenue", pt: "Avenida Hibernal" },
    unlock: { en: "After Lysandre Labs in Main Mission 35", pt: "Após os Laboratórios Lysandre na Missão principal 35" },
    rewards: { en: "Nugget", pt: "Pepita" },
    requester: "Cadena",
    landmark: "hibernalAve",
    map: { x: 74.74, y: 13.86 },
  },
  {
    id: 'side-107',
    kind: 'side',
    number: 107,
    name: { en: "The World's Greatest Pikachu!", pt: "O maior Pikachu do mundo!" },
    description: { en: "1v1 Pikachu battle.", pt: "Batalha 1x1 de Pikachu." },
    location: { en: "Rouge Sector 1", pt: "Setor Rouge 1" },
    unlock: { en: "Complete Main Mission 37", pt: "Conclua a Missão principal 37" },
    rewards: { en: "Light Ball / Exp. Candy L ×3", pt: "Bola de Luz / Doce de Exp. G ×3" },
    requester: "Pikami",
    landmark: "rougeS1",
    map: { x: 46.11, y: 39.79 },
  },
  {
    id: 'side-108',
    kind: 'side',
    number: 108,
    name: { en: "Alola, Raichu!", pt: "Alola, Raichu de Alola!" },
    description: { en: "Trade Raichu for Alolan Raichu.", pt: "Troque Raichu por Raichu de Alola." },
    location: { en: "Quasartico Inc.", pt: "Quasartico Inc. (sede)" },
    unlock: { en: "Complete Main Mission 37", pt: "Conclua a Missão principal 37" },
    rewards: { en: "Tamato ×10 / Pomeg ×10 / Alolan Raichu", pt: "Tamato ×10 / Pomeg ×10 / Raichu de Alola" },
    requester: "Griddella",
    landmark: "quasartico",
    map: { x: 28.55, y: 23.98 },
  },
  {
    id: 'side-109',
    kind: 'side',
    number: 109,
    name: { en: "Wondrous Self-Healing Pokémon", pt: "Pokémon maravilhosos que se curam" },
    description: { en: "Battle a clerk who loves healing moves.", pt: "Batalhe contra um funcionário que ama golpes de cura." },
    location: { en: "Vert Pokémon Center", pt: "Centro Pokémon Vert" },
    unlock: { en: "Complete Main Mission 37", pt: "Conclua a Missão principal 37" },
    rewards: { en: "Lucky Egg / Full Restore ×5 / Max Revive ×2", pt: "Ovo da Sorte / Restaurar Tudo ×5 / Max Revive ×2" },
    requester: "Bien",
    landmark: "vertPC",
    map: { x: 74.57, y: 85.38 },
  },
  {
    id: 'side-110',
    kind: 'side',
    number: 110,
    name: { en: "A Tune That Beckons Doom", pt: "Uma melodia que chama a desgraça" },
    description: { en: "Mysterious \"30 seconds\" battle.", pt: "Misteriosa batalha de \"30 segundos\"." },
    location: { en: "Rouge Sector 8", pt: "Setor Rouge 8" },
    unlock: { en: "Complete Main Mission 37", pt: "Conclua a Missão principal 37" },
    rewards: { en: "Kasib ×5 / Exp. Candy M ×5", pt: "Kasib ×5 / Doce de Exp. M ×5" },
    requester: "Chante",
    landmark: "rougeS8",
    map: { x: 66.41, y: 9.74 },
  },
  {
    id: 'side-111',
    kind: 'side',
    number: 111,
    name: { en: "My Adorable, Adorable Babies", pt: "Meus adoráveis, adoráveis bebês" },
    description: { en: "Battle deceptively cute formidable Pokémon.", pt: "Batalhe contra Pokémon formidáveis enganosamente fofos." },
    location: { en: "Vert Sector 4", pt: "Setor Vert 4" },
    unlock: { en: "Complete Main Mission 37", pt: "Conclua a Missão principal 37" },
    rewards: { en: "Moomoo Milk ×12 / ₽20,000", pt: "Leite Moomoo ×12 / ₽20.000" },
    requester: "Aimée",
    landmark: "vertS4",
    map: { x: 53.46, y: 79.18 },
  },
  {
    id: 'side-112',
    kind: 'side',
    number: 112,
    name: { en: "Exploring the Scents of Spritzee", pt: "Explorando os aromas de Spritzee" },
    description: { en: "Gather Berries for Spritzee fragrance research.", pt: "Colete Frutas para pesquisa de fragrância de Spritzee." },
    location: { en: "Magenta Street", pt: "Rua Magenta" },
    unlock: { en: "Complete Main Mission 37", pt: "Conclua a Missão principal 37" },
    rewards: { en: "Modest Mint ×3 / Exp. Candy L", pt: "Menta Modesta ×3 / Doce de Exp. G" },
    requester: "Sente",
    landmark: "magentaStreet",
    map: { x: 8.14, y: 36.76 },
  },
  {
    id: 'side-113',
    kind: 'side',
    number: 113,
    name: { en: "Bergmite sur un Avalugg", pt: "Bergmite sobre um Avalugg" },
    description: { en: "Put four Bergmite on an XL Avalugg for photos.", pt: "Coloque quatro Bergmite em um Avalugg XL para fotos." },
    location: { en: "South Boulevard", pt: "Boulevard Sul" },
    unlock: { en: "Complete Main Mission 37", pt: "Conclua a Missão principal 37" },
    rewards: { en: "Exp. Candy L ×4", pt: "Doce de Exp. G ×4" },
    requester: "Brina",
    landmark: "southBlvd",
    map: { x: 30.51, y: 91.54 },
  },
  {
    id: 'side-114',
    kind: 'side',
    number: 114,
    name: { en: "A Feather from Skarmory", pt: "Uma pena de Skarmory" },
    description: { en: "Find a Skarmory feather in Wild Zone 17.", pt: "Encontre uma pena de Skarmory na Wild Zone 17." },
    location: { en: "Wild Zone 17 / Vert Sector 7", pt: "Wild Zone 17 / Setor Vert 7" },
    unlock: { en: "Complete Main Mission 37", pt: "Conclua a Missão principal 37" },
    rewards: { en: "Metal Coat / Babiri ×3", pt: "Revestimento Metálico / Babiri ×3" },
    requester: "Couper",
    landmark: "wz17",
    map: { x: 80.21, y: 74.04 },
  },
  {
    id: 'side-115',
    kind: 'side',
    number: 115,
    name: { en: "Tyrantrum's Furious Jaws", pt: "As mandíbulas furiosas de Tyrantrum" },
    description: { en: "Lend Tyrantrum for a kaiju film.", pt: "Empreste Tyrantrum para um filme kaiju." },
    location: { en: "Autumnal Avenue", pt: "Avenida Autumnal" },
    unlock: { en: "Story progress", pt: "Progresso da história" },
    rewards: { en: "Protein ×10", pt: "Proteína ×10" },
    requester: "Director",
    landmark: "autumnalAve",
    map: { x: 28.39, y: 19.53 },
  },
  {
    id: 'side-116',
    kind: 'side',
    number: 116,
    name: { en: "Show the Power of Aurorus!", pt: "Mostre o poder de Aurorus!" },
    description: { en: "Help settle a fossil argument — show Aurorus power.", pt: "Ajude a resolver uma discussão sobre fósseis — mostre o poder de Aurorus." },
    location: { en: "Vernal Avenue", pt: "Avenida Vernal" },
    unlock: { en: "Complete Main Mission 37", pt: "Conclua a Missão principal 37" },
    rewards: { en: "Rare Candy ×3 / Lemonade", pt: "Doce Raro ×3 / Limonada" },
    requester: "Nage",
    landmark: "vernalAve",
    map: { x: 49.59, y: 82.84 },
  },
  {
    id: 'side-117',
    kind: 'side',
    number: 117,
    name: { en: "Josée's Training", pt: "O treino de Josée" },
    description: { en: "All-out battle with Josée of the Fist of Justice.", pt: "Batalha total com Josée do Punho da Justiça." },
    location: { en: "Justice Dojo", pt: "Dojo da Justiça" },
    unlock: { en: "Complete Main Mission 38", pt: "Conclua a Missão principal 38" },
    rewards: { en: "Expert Belt / Seed of Mastery ×10", pt: "Cinto do Expert / Semente da Maestria ×10" },
    requester: "Josée",
    landmark: "justiceDojo",
    map: { x: 67.77, y: 50.61 },
  },
  {
    id: 'side-118',
    kind: 'side',
    number: 118,
    name: { en: "Goodbye, Gengar", pt: "Adeus, Gengar" },
    description: { en: "Find a missing Gengar with Gwynn's help.", pt: "Encontre um Gengar desaparecido com a ajuda de Gwynn." },
    location: { en: "Old Building", pt: "Prédio antigo" },
    unlock: { en: "Complete Side Mission 117", pt: "Conclua a Missão secundária 117" },
    rewards: { en: "Exp. Candy L ×2 / Exp. Candy XL", pt: "Doce de Exp. G ×2 / Doce de Exp. XG" },
    requester: "Gänger",
    landmark: "oldBuilding",
    map: { x: 19.89, y: 75.66 },
  },
  {
    id: 'side-119',
    kind: 'side',
    number: 119,
    name: { en: "Le Super-Tournoi de Jacinthe", pt: "O Super-Torneio de Jacinthe" },
    description: { en: "Face Jacinthe alone after 20 Infinite Z-A Royale wins.", pt: "Enfrente Jacinthe sozinho após 20 vitórias de recompensa no Z-A Royale Infinito." },
    location: { en: "North Boulevard", pt: "Boulevard Norte" },
    unlock: { en: "20 Infinite Z-A Royale reward wins", pt: "20 vitórias de recompensa no Z-A Royale Infinito" },
    rewards: { en: "₽300,000 / Luxury Balls", pt: "₽300.000 / Luxury Balls" },
    requester: "Lebanne",
    landmark: "northBlvd",
    map: { x: 74.41, y: 10.72 },
  },
]

export function missionMapPosition(
  mission: Mission,
  siblingsAtLandmark: Mission[],
): { x: number; y: number } {
  if (mission.map) return mission.map
  const base = LANDMARKS[mission.landmark]
  const idx = siblingsAtLandmark.findIndex((m) => m.id === mission.id)
  const total = siblingsAtLandmark.length
  if (total <= 1 || idx < 0) return { x: base.x, y: base.y }
  const angle = (idx / total) * Math.PI * 2
  const radius = 1.6 + (idx % 4) * 0.35
  return {
    x: Math.min(96, Math.max(4, base.x + Math.cos(angle) * radius)),
    y: Math.min(96, Math.max(4, base.y + Math.sin(angle) * radius)),
  }
}

export function missionsByLandmark(
  kindFilter: 'all' | MissionKind = 'all',
): Map<LandmarkId, Mission[]> {
  const map = new Map<LandmarkId, Mission[]>()
  for (const m of MISSIONS) {
    if (kindFilter !== 'all' && m.kind !== kindFilter) continue
    const list = map.get(m.landmark) ?? []
    list.push(m)
    map.set(m.landmark, list)
  }
  return map
}
