/**
 * Generate src/data/laMissions.ts with regionId + subregionId for Hisui detail maps.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

/** @type {Record<string, { en: string; pt: string; defaultSub: string }>} */
const REGIONS = {
  jubilife: { en: 'Jubilife Village', pt: 'Vila Jubilo', defaultSub: 'galaxy-hall' },
  obsidian: { en: 'Obsidian Fieldlands', pt: 'Planície Obsidiana', defaultSub: 'fieldlands-camp' },
  crimson: { en: 'Crimson Mirelands', pt: 'Pântano Carmesim', defaultSub: 'mirelands-camp' },
  cobalt: { en: 'Cobalt Coastlands', pt: 'Costa Cobalto', defaultSub: 'coastlands-camp' },
  coronet: { en: 'Coronet Highlands', pt: 'Cordilheira Coronet', defaultSub: 'highlands-camp' },
  alabaster: { en: 'Alabaster Icelands', pt: 'Tundra Alba', defaultSub: 'snowfields-camp' },
}

/** Main missions: [num, en, pt, descEn, descPt, regionId, subregionId] */
const MAIN = [
  [1, 'In an Unfamiliar Land', 'Em uma terra desconhecida', 'Professor Laventon has brought you to Jubilife Village, an unfamiliar settlement bustling with unfamiliar faces. How will you find your footing in this strange land?', 'O Professor Laventon trouxe você à Vila Jubilo. Como vai se adaptar a esta terra estranha?', 'jubilife', 'front-gate'],
  [2, "The Galaxy Team's Entry Trial", 'A prova de entrada da Equipe Galáctica', "You've been set a trial you must clear to join the Galaxy Team. Catch a Bidoof, a Starly, and a Shinx in the Obsidian Fieldlands.", 'Prova para entrar na Equipe Galáctica: capture Bidoof, Starly e Shinx na Planície Obsidiana.', 'obsidian', 'aspiration-hill'],
  [3, 'The Basics of Crafting', 'Noções básicas de craft', "You've cleared your trial and joined the Survey Corps. Learn about crafting items to use on your missions.", 'Você entrou no Corpo de Pesquisa. Aprenda a craftar itens para as missões.', 'jubilife', 'craftworks'],
  [4, 'Getting to Work on Research Tasks', 'Começando as tarefas de pesquisa', "In order to complete the Pokédex, you'll need to accomplish research tasks set by Professor Laventon.", 'Para completar a Pokédex, cumpra as tarefas de pesquisa do Professor Laventon.', 'jubilife', 'galaxy-hall'],
  [5, 'A Request from Mai', 'Um pedido de Mai', 'The Galaxy Team has gotten a request from Mai of the Diamond Clan. Go hear more and lend her your help.', 'A Equipe Galáctica recebeu um pedido de Mai do Clã Diamante. Vá ajudar.', 'obsidian', 'deertrack-heights'],
  [6, 'Summoned by Commander Kamado', 'Convocado pelo Comandante Kamado', 'Commander Kamado has summoned you, and it seems urgent. Go find out what the commander needs.', 'O Comandante Kamado convocou você com urgência. Descubra o que ele precisa.', 'jubilife', 'galaxy-hall'],
  [7, 'The Frenzy of the Lord of the Woods', 'O frenesi do Senhor das Florestas', 'Kleavor, the Lord of the Woods, seems to have been driven into a frenzy by a strange lightning strike. Quell his frenzy.', 'Kleavor, Senhor das Florestas, entrou em frenesi. Acalme-o.', 'obsidian', 'grandtree-arena'],
  [8, "Arezu's Predicament", 'O dilema de Arezu', 'Arezu, a warden from the Crimson Mirelands, has come to Jubilife Village to speak with Commander Kamado. Quell Noble Lilligant.', 'Arezu veio à Vila Jubilo. Acalme a Nobre Lilligant no Pântano Carmesim.', 'crimson', 'brava-arena'],
  [9, 'A New Mission', 'Uma nova missão', 'Commander Kamado has welcomed new arrivals. Continue studying the Pokémon of Hisui so all can live safely here.', 'Kamado recebeu novos moradores. Continue estudando os Pokémon de Hisui.', 'jubilife', 'galaxy-hall'],
  [10, 'The Lordless Island', 'A ilha sem senhor', 'Curious rumors pour in from the Cobalt Coastlands, an area without a noble Pokémon. Investigate.', 'Rumores estranhos vêm da Costa Cobalto, sem Pokémon nobre. Investigue.', 'cobalt', 'firespit-island'],
  [11, 'Scaling Perilous Heights', 'Escalando alturas perigosas', 'Electrode, the Lord of the Hollow, has been driven into a frenzy. Quell its frenzy in the Coronet Highlands.', 'Electrode, Senhor da Cavidade, entrou em frenesi. Acalme-o.', 'coronet', 'moonview-arena'],
  [12, 'The Slumbering Lord of the Tundra', 'O Senhor adormecido da Tundra', 'Avalugg, the Lord of the Tundra, has been driven into a frenzy. Quell his frenzy in the Alabaster Icelands.', 'Avalugg, Senhor da Tundra, entrou em frenesi. Acalme-o.', 'alabaster', 'icepeak-arena'],
  [13, 'Disaster Looming', 'Desastre iminente', 'The roaring of that massive tremor echoes in your ears. What in the world could have happened?', 'O rugido de um tremor enorme ecoa. O que aconteceu?', 'jubilife', 'galaxy-hall'],
  [14, 'The Trial of Lake Verity', 'A prova do Lago Verity', 'Clear the trial set by the Pokémon that protects Lake Verity in the Obsidian Fieldlands.', 'Passe na prova do guardião do Lago Verity.', 'obsidian', 'verity-cavern'],
  [15, 'The Trial of Lake Valor', 'A prova do Lago Valor', 'Clear the trial set by the Pokémon that protects Lake Valor in the Crimson Mirelands.', 'Passe na prova do guardião do Lago Valor.', 'crimson', 'valor-cavern'],
  [16, 'The Trial of Lake Acuity', 'A prova do Lago Acuity', 'Clear the trial set by the Pokémon that protects Lake Acuity in the Alabaster Icelands.', 'Passe na prova do guardião do Lago Acuity.', 'alabaster', 'lake-acuity'],
  [17, 'Atop Mount Coronet', 'No topo do Monte Coronet', 'Commander Kamado has led a force to Mount Coronet. Hurry there to stop his reckless plan!', 'Kamado levou uma força ao Monte Coronet. Corra para impedir seu plano!', 'coronet', 'temple-of-sinnoh'],
  [18, 'The Counterpart', 'A contraparte', 'There was a second almighty Sinnoh all along! Find another method to catch this fearsome Pokémon.', 'Havia um segundo Sinnoh todo-poderoso! Encontre outro jeito de capturá-lo.', 'coronet', 'temple-of-sinnoh'],
  [19, 'A New Day Dawns', 'Um novo dia amanhece', 'The rift in space-time has disappeared. Return to completing the Pokédex.', 'A fenda espaço-temporal sumiu. Volte a completar a Pokédex.', 'jubilife', 'galaxy-hall'],
  [20, 'The Researcher of Myths', 'O pesquisador de mitos', 'Look into Legendary Pokémon with the merchant Volo, who is learned in the myths of Hisui.', 'Investigue Pokémon lendários com o mercador Volo.', 'jubilife', 'galaxy-hall'],
  [21, 'The Plate of the Lakes', 'A Placa dos Lagos', 'Cogita hints that a plate is connected to the Pokémon of the three great lakes.', 'Cogita sugere uma placa ligada aos Pokémon dos três lagos.', 'obsidian', 'lake-verity'],
  [22, 'The Plate of Firespit Island', 'A Placa da Ilha Firespit', 'Cogita hints that a plate is connected to Firespit Island in the Cobalt Coastlands.', 'Cogita sugere uma placa ligada à Ilha Firespit.', 'cobalt', 'firespit-island'],
  [23, 'The Plate of Moonview Arena', 'A Placa da Arena da Vista Lunar', 'Cogita hints that a plate is connected to a mysterious Pokémon at Moonview Arena.', 'Cogita sugere uma placa ligada à Arena da Vista Lunar.', 'coronet', 'moonview-arena'],
  [24, 'The Plate of Snowpoint Temple', 'A Placa do Templo Snowpoint', 'Cogita hints that a plate is connected to a giant sealed beneath Snowpoint Temple.', 'Cogita sugere uma placa ligada ao Templo Snowpoint.', 'alabaster', 'snowpoint-temple'],
  [25, 'The Plate of Prelude Beach', 'A Placa da Praia Prelúdio', 'Cogita hints that Prelude Beach near Jubilife has deep ties to Hisui’s ancient myths.', 'Cogita sugere que a Praia Prelúdio tem laços com os mitos antigos.', 'jubilife', 'front-gate'],
  [26, 'Seeking the Remaining Plates', 'Em busca das placas restantes', 'You’ve gathered 17 plates. Search for the remaining plate with Volo’s aid.', 'Você reuniu 17 placas. Busque a restante com Volo.', 'coronet', 'temple-of-sinnoh'],
  [27, 'The Deified Pokémon', 'O Pokémon deificado', 'You have the Azure Flute, key to meeting Arceus. What will happen when you play it?', 'Você tem a Flauta Azul, chave para encontrar Arceus.', 'coronet', 'spear-pillar'],
]

const REQUESTS = [
  [1, 'Wurmple Can Evolve', 'Catch a Wurmple for Beauregard of the Security Corps so he can evolve it.'],
  [2, 'Adorable Starly', 'Show a Starly to Marli of the Supply Corps.'],
  [3, "What Did Shinx's Ears Look Like?", 'Show a Shinx to the villager Toshi.'],
  [4, 'Big Buizel, Little Buizel', 'Catch a large Buizel for Dorian of the Security Corps.'],
  [5, 'What It Takes to Be Awesome', 'Bring Poké Balls to the village boy Sho.'],
  [6, 'Mushroom Cake Marketing', 'Learn Morel’s mushroom cake crafting recipe.'],
  [7, 'Playing with Drifloon', 'Investigate a Drifloon playing with a village child — speak to Miki.'],
  [8, 'Bothersome Bidoof', 'Deal with mischievous Bidoof causing trouble — speak to Tsumugi.'],
  [9, "Zubat's Eyes", 'Help Clarissa of the Security Corps with a request about Zubat’s eyes.'],
  [10, "Wurmple's Evolved!", 'Follow up with Beauregard about his evolved Wurmple.'],
  [11, 'The Timbre of the Fields', 'Complete Kricketot’s Pokédex page and show it to Yeo.'],
  [12, 'A Perfect Pickling Stone', 'Catch a Geodude for Radisa to use as a pickling stone.'],
  [13, 'Trees That Bear Berries', 'Get a Cheri Berry for Bjorn of the Agriculture Corps.'],
  [14, 'Berry Helpful', 'Find Oran Berries for the villager Andra.'],
  [15, 'Balloon Race in the Fieldlands', 'Burst 17 balloons in the Obsidian Fieldlands balloon race.'],
  [16, 'Strange Happenings at Midnight', 'Investigate strange events at Sanqua’s house at night.'],
  [17, 'To Bloom or Not to Bloom', 'Complete Cherrim’s Pokédex page for Kichi.'],
  [18, 'Please! Make Me a Pokéshi Doll!', 'Show Anvin a Pokéshi Doll you crafted.'],
  [19, 'A Peculiar Ponyta', 'Investigate a rare Ponyta request from Yota.'],
  [20, 'The Mysterious Will-o’-the-Wisp', 'Catch the will-o’-the-wisp Paira saw on Windswept Run.'],
  [21, 'Back-Alley Mr. Mime', 'Help Andra with a suspicious Mr. Mime.'],
  [22, 'Eerie Apparitions in the Night', 'Collect the 107 wisps scattered across Hisui.'],
  [23, 'Getting Ahold of New Wares', 'Help Choy expand the general store’s stock (Request 23).'],
  [24, 'Inspiration from Hippopotas', 'Show Anthe a male and female Hippopotas.'],
  [25, 'The Pokémon in the Woodland Photo', 'Catch the Pokémon that wandered into Dagero’s photo.'],
  [26, 'Aim for the Big Leagues!', 'Score 10,000+ points at the target practice outside Jubilife.'],
  [27, 'Help Wanted: Plowing the Fields', 'Lend Miller a Pokémon to plow the farm fields.'],
  [28, 'Measuring Your Compatibility', 'Show Belamy that you can befriend Pokémon.'],
  [29, 'The Search for Bitter Leaves', 'Collect materials Shinon needs for medicine.'],
  [30, 'A Beautiful Rose...', 'Complete Roselia’s Pokédex page for Berra.'],
  [31, 'Setting Up the Bogbound Camp', 'Help set up Bogbound Camp in the Crimson Mirelands.'],
  [32, 'The Headache-Stricken Psyduck', 'Find medicine for Martia’s headache-prone Psyduck.'],
  [33, 'What a Massive Mushroom!', 'Investigate Parasect’s mushroom with Morel.'],
  [34, "Croagunk's Curative Poison", 'Help Pesselle make medicine with Croagunk’s poison.'],
  [35, 'Battling with Pachirisu', 'Help Ren learn to command a Pachirisu in battle.'],
  [36, 'Watering with Care', 'Advise Odo about an under-the-weather Sudowoodo.'],
  [37, 'The Fragrance of Nostalgic Herbs', 'Find the herb-covered Pokémon Risa remembers from home.'],
  [38, 'Gone Astray...in the Mirelands', 'Find Wanda for Zeke in the Crimson Mirelands.'],
  [39, 'All about Magikarp', 'Teach Ceci more about Magikarp.'],
  [40, 'The Charm Lost in the Swamp', 'Find Yojiro’s charm lost while fleeing an alpha Hippowdon.'],
  [41, 'An Elegant Tail', 'Show Asabei the elegant Pokémon whose tail he glimpsed.'],
  [42, 'Help Wanted: Watering the Fields', 'Lend Miller a Pokémon to help irrigate the fields.'],
  [43, 'More New Wares', 'Help Choy expand the general store again (Request 43).'],
  [44, 'The Pokémon in the Nighttime Photo', 'Identify and catch the Pokémon in Dagero’s night photo.'],
  [45, 'Shellos of the East and West', 'Show Anthe two differently colored Shellos.'],
  [46, 'Setting Up the Coastlands Camp', 'Help find Yorrich and set up the Coastlands Camp.'],
  [47, 'Balloon Race in the Coastlands', 'Burst 24 balloons in the Cobalt Coastlands balloon race.'],
  [48, 'The Taste of Home', 'Gather ingredients Floaro needs for a homeland treat for Eevee.'],
  [49, 'Keep an Eye Out for Aipom!', 'Recover Hiko’s pack stolen by Aipom.'],
  [50, 'Double the Tails, Double the Fun', 'Catch and show Netta a Pokémon with two tail fins.'],
  [51, 'Coming Up Roses', 'Bring Hiemo a Pokémon with a scythe on each arm (on Ramanas Island).'],
  [52, "Eevee's Evolutions", 'Discuss Eevee’s evolution with Floaro.'],
  [53, "Octillery's Ink", 'Complete Octillery’s Pokédex page for Radisa.'],
  [54, 'Serving Up Swap Snacks', 'Learn Bonn’s shelved candy recipe.'],
  [55, 'Poor, Peckish Piplup', 'Bring a Bean Cake to help Maris feed a famished Piplup.'],
  [56, 'Getting Help from Machoke', 'Show Bosley Machoke’s completed Pokédex page.'],
  [57, 'The Taste of Honey', 'Help Almous with Combee honey flavor research.'],
  [58, 'Gone Astray...in the Coastlands', 'Find Wanda for Zeke in the Cobalt Coastlands.'],
  [59, 'Misdreavus the Hairstyle Muse', 'Show Arezu a Misdreavus for new hairstyle inspiration.'],
  [60, 'Help Wanted: Rock Smashing in the Fields', 'Lend Miller a Pokémon to smash a giant boulder.'],
  [61, 'Even More New Wares', 'Help Choy expand the general store again (Request 61).'],
  [62, 'The Pokémon in the River Photo', 'Confirm the “pair of leaves” in Dagero’s photo is a Pokémon.'],
  [63, 'Fancy, Fashionable Wormadam', 'Show Anthe a Wormadam for clothing inspiration.'],
  [64, 'Getting to Know Ghosts', 'Show Ward Gastly’s completed Pokédex page to help Conlan.'],
  [65, 'Setting Up the Mountain Camp', 'Investigate a Bronzor blocking Mountain Camp construction.'],
  [66, "The Sea's Legend", 'Investigate the ocean Pokémon linked to “The Sea’s Legend.”'],
  [67, "The Clefairy's Moonlit Dance", 'Learn more about Clefairy’s behavior for Astair.'],
  [68, 'A Nosepass to Guide the Way', 'Help Gully with a request about Nosepass.'],
  [69, 'Gone Astray...in the Highlands', 'Find Wanda for Zeke in the Coronet Highlands.'],
  [70, 'Colorful New Looks', 'Gather materials Anthe needs for new clothing colors.'],
  [71, 'New Wares Yet Again', 'Help Choy expand the general store again (Request 71).'],
  [72, "Pesselle's Easy Errand", 'Bring Pesselle 100 Medicinal Leeks.'],
  [73, 'Which Is the Real Burmy?', 'Show Leif, Duna, and Tarush different Burmy forms.'],
  [74, 'A Bit of Help from Blissey', 'Help Pippa with a request concerning Blissey.'],
  [75, 'Kirlia the Hairstyle Muse', 'Show Arezu a Kirlia for new hairstyle inspiration.'],
  [76, 'Mushroom Hunting with Swinub', 'Help Morel at Heart’s Crag using Swinub’s skill.'],
  [77, 'Gone Astray...in the Fieldlands', 'Find Wanda for Zeke in the Obsidian Fieldlands.'],
  [78, 'Setting Up the Icepeak Camp', 'Find Craig for Brice near the Alabaster falls.'],
  [79, 'Balloon Race in the Icelands', 'Burst 30 balloons in the Alabaster Icelands balloon race.'],
  [80, 'The Perfect Pickle Recipe', 'Gather ingredients for Radisa’s pickle recipe.'],
  [81, 'In Search of a Fiery Pokémon', 'Help Brice get a Fire-type Pokémon for Icepeak Camp.'],
  [82, 'Traces of a Lost Village', 'Search Avalanche Slopes for traces of Mani’s ancestral village.'],
  [83, 'Snow-White Vulpix in the Snow', 'Help Keaka with his Alolan Vulpix (Keokeo).'],
  [84, 'The Bergmite Enthusiast', 'Show Dominia Bergmite’s completed Pokédex page.'],
  [85, 'At Home under the Eaves', 'Investigate a wild Chimecho under village eaves for Ida.'],
  [86, 'Gone Astray...in the Icelands', 'Find Zeke for Wanda in the Alabaster Icelands.'],
  [87, 'Rolling with Spheal', 'Find Senki’s Spheal that rolled into Bolderoll Ravine.'],
  [88, 'Steely Lucario', 'Battle Rye and his partner Lucario.'],
  [89, "The Diamond Clan's Treasure", 'Defeat Adaman in battle to learn about a treasure.'],
  [90, "The Pearl Clan's Treasure", 'Defeat Irida in battle to learn about a treasure.'],
  [91, 'On the Trail of Giratina', 'Investigate a huge shadow in the Cobalt Coastlands — possibly Giratina.'],
  [92, 'A Token of Gratitude', 'Help Medi of the Diamond Clan find a rare Pokémon from her past.'],
  [93, 'The Darksome Nightmare', 'Learn from Cael about a terrifying Pokémon and survey it.'],
  [94, 'Incarnate Forces of Hisui', 'Investigate the forces of nature incarnate for the Pokédex.'],
  [95, 'A New Anomaly', 'Research a spot that Munchlax is curious about for Mai.'],
  [96, 'Massive Mass Outbreak in the Fieldlands', 'Investigate a Massive Mass Outbreak for Mai in the Fieldlands.'],
  [97, 'Massive Mass Outbreak in the Mirelands', 'Investigate a Massive Mass Outbreak for Mai in the Mirelands.'],
  [98, 'Massive Mass Outbreak in the Coastlands', 'Investigate a Massive Mass Outbreak for Mai in the Coastlands.'],
  [99, 'Tricky Treat Strategy', 'Bring Mushroom Cakes to the Secret Hollow for Mai.'],
  [100, 'Massive Mass Outbreak in the Highlands', 'Investigate a Massive Mass Outbreak for Mai in the Highlands.'],
  [101, 'Massive Mass Outbreak in the Icelands', 'Investigate a Massive Mass Outbreak for Mai in the Icelands.'],
  [102, 'Daybreak', 'Adaman and Irida take you to the Fieldlands for a sunrise view.'],
  [103, 'Digging for Tomorrow', 'Calm a Pokémon in Oreburrow Tunnel for Kochika.'],
  [104, "Battling the Security Corps' Secret Weapon", 'Battle a skilled Security Corps member suggested by Zisu.'],
  [105, 'The Ultimate Balloon Race', 'Burst 40 balloons in the Coronet Highlands balloon race.'],
  [106, "Adaman's Hope", 'Battle Origin Forme Dialga at Adaman’s request.'],
  [107, "Irida's Wish", 'Battle Origin Forme Palkia at Irida’s request.'],
  [108, "Bidoof's Path of Solitude", 'Clear the Path of Solitude with a well-trained Bidoof.'],
  [109, "Eevee's Path of Solitude", 'Clear the Path of Solitude with Eevee using the foe’s moves.'],
  [110, "Wormadam's Path of Solitude", 'Clear the Path of Solitude with a particular Wormadam form.'],
  [111, "Abra's Path of Solitude", 'Clear the Path of Solitude carefully with Abra vs. the Mimic master.'],
  [112, "Blissey's Path of Solitude", 'Clear the Path of Solitude with Blissey using healing moves.'],
  [113, "Sneasel's Path of Solitude", 'Clear the Path of Solitude with a distortion Sneasel.'],
  [114, "Rotom's Path of Solitude", 'Clear the Path of Solitude with Rotom and a mechanical item.'],
  [115, "Bastiodon's Path of Solitude", 'Clear the Path of Solitude with Bastiodon swapping offense/defense.'],
  [116, "Roselia's Path of Solitude", 'Clear the Path of Solitude with Roselia when the foe is drowsy.'],
  [117, "Magikarp's Path of Solitude", 'Clear the Path of Solitude with a sturdy Magikarp.'],
  [118, "Roserade's Path of Solitude", 'Clear the Path of Solitude with Roserade when the foe roosts.'],
  [119, "Kleavor's Path of Solitude", 'Clear the Path of Solitude with Kleavor exploiting weakness.'],
  [120, "Lilligant's Path of Solitude", 'Clear the Path of Solitude with Lilligant’s dance.'],
  [121, "Wurmple's Path of Solitude", 'Clear the Path of Solitude with a fully trained Wurmple.'],
  [122, "Kricketot's Path of Solitude", 'Clear the Path of Solitude with a fully trained Kricketot.'],
]

/** Explicit request overrides: number -> [regionId, subregionId] */
const REQUEST_PLACE = {
  15: ['obsidian', 'fieldlands-camp'],
  20: ['obsidian', 'windswept-run'],
  31: ['crimson', 'bogbound-camp'],
  38: ['crimson', 'gapejaw-bog'],
  40: ['crimson', 'sludge-mound'],
  46: ['cobalt', 'coastlands-camp'],
  47: ['cobalt', 'coastlands-camp'],
  49: ['cobalt', 'aipom-hills'],
  51: ['obsidian', 'ramanas-island'],
  58: ['cobalt', 'deadwood-haunt'],
  65: ['coronet', 'mountain-camp'],
  66: ['cobalt', 'tranquility-cove'],
  67: ['coronet', 'fabled-spring'],
  68: ['coronet', 'celestica-trail'],
  69: ['coronet', 'celestica-ruins'],
  76: ['alabaster', 'hearts-crag'],
  77: ['obsidian', 'horseshoe-plains'],
  78: ['alabaster', 'icepeak-camp'],
  79: ['alabaster', 'snowfields-camp'],
  81: ['alabaster', 'icepeak-camp'],
  82: ['alabaster', 'avalanche-slopes'],
  83: ['alabaster', 'whiteout-valley'],
  86: ['alabaster', 'bonechill-wastes'],
  87: ['coronet', 'bolderoll-ravine'],
  91: ['cobalt', 'turnback-cave'],
  96: ['obsidian', 'fieldlands-camp'],
  97: ['crimson', 'mirelands-camp'],
  98: ['cobalt', 'coastlands-camp'],
  99: ['alabaster', 'secret-hollow'],
  100: ['coronet', 'highlands-camp'],
  101: ['alabaster', 'snowfields-camp'],
  102: ['obsidian', 'aspiration-hill'],
  103: ['obsidian', 'oreburrow-tunnel'],
  105: ['coronet', 'highlands-camp'],
  106: ['coronet', 'temple-of-sinnoh'],
  107: ['coronet', 'temple-of-sinnoh'],
  23: ['jubilife', 'choy-shop'],
  43: ['jubilife', 'choy-shop'],
  61: ['jubilife', 'choy-shop'],
  71: ['jubilife', 'choy-shop'],
  18: ['jubilife', 'craftworks'],
  24: ['jubilife', 'canala-clothing'],
  45: ['jubilife', 'canala-clothing'],
  59: ['jubilife', 'canala-clothing'],
  63: ['jubilife', 'canala-clothing'],
  70: ['jubilife', 'canala-clothing'],
  75: ['jubilife', 'canala-clothing'],
  25: ['jubilife', 'photo-studio'],
  44: ['jubilife', 'photo-studio'],
  62: ['jubilife', 'photo-studio'],
  27: ['jubilife', 'farm'],
  42: ['jubilife', 'farm'],
  60: ['jubilife', 'farm'],
  13: ['jubilife', 'farm'],
  104: ['jubilife', 'training-grounds'],
  35: ['jubilife', 'training-grounds'],
  88: ['jubilife', 'training-grounds'],
  108: ['jubilife', 'training-grounds'],
  109: ['jubilife', 'training-grounds'],
  110: ['jubilife', 'training-grounds'],
  111: ['jubilife', 'training-grounds'],
  112: ['jubilife', 'training-grounds'],
  113: ['jubilife', 'training-grounds'],
  114: ['jubilife', 'training-grounds'],
  115: ['jubilife', 'training-grounds'],
  116: ['jubilife', 'training-grounds'],
  117: ['jubilife', 'training-grounds'],
  118: ['jubilife', 'training-grounds'],
  119: ['jubilife', 'training-grounds'],
  120: ['jubilife', 'training-grounds'],
  121: ['jubilife', 'training-grounds'],
  122: ['jubilife', 'training-grounds'],
  89: ['crimson', 'diamond-settlement'],
  90: ['alabaster', 'pearl-settlement'],
  92: ['crimson', 'diamond-settlement'],
  93: ['alabaster', 'pearl-settlement'],
  94: ['obsidian', 'floaro-gardens'],
  95: ['obsidian', 'nature-pantry'],
}

function inferPlace(text) {
  const t = text.toLowerCase()
  if (/icelands|alabaster|avalugg|snowpoint|icepeak|heart.?s crag|bergmite|keokeo|secret hollow|avalanche/.test(t))
    return ['alabaster', REGIONS.alabaster.defaultSub]
  if (/highlands|coronet|clefairy|nosepass|mountain camp|electrode|moonview|bolderoll ravine|spheal|ultimate balloon/.test(t))
    return ['coronet', REGIONS.coronet.defaultSub]
  if (/coastlands|firespit|aipom|octillery|giratina|basculegion|deadwood|ramanas|sea.?s legend/.test(t))
    return ['cobalt', REGIONS.cobalt.defaultSub]
  if (/mirelands|bogbound|croagunk|hippowdon|parasect|lilligant|crimson|diamond clan/.test(t))
    return ['crimson', REGIONS.crimson.defaultSub]
  if (/fieldlands|obsidian|kleavor|kricketot|ponyta|windswept|balloon race in the field|oreburrow|daybreak/.test(t))
    return ['obsidian', REGIONS.obsidian.defaultSub]
  return ['jubilife', REGIONS.jubilife.defaultSub]
}

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function loc(en, pt) {
  return `{ en: '${esc(en)}', pt: '${esc(pt)}' }`
}

function main() {
  const lines = []
  lines.push(`import type { HisuiRegionId } from './hisuiRegions'`)
  lines.push(``)
  lines.push(`export type LaMissionKind = 'main' | 'side'`)
  lines.push(``)
  lines.push(`export type Localized = { en: string; pt: string }`)
  lines.push(``)
  lines.push(`export type LaMission = {`)
  lines.push(`  id: string`)
  lines.push(`  kind: LaMissionKind`)
  lines.push(`  number: number`)
  lines.push(`  name: Localized`)
  lines.push(`  description: Localized`)
  lines.push(`  location: Localized`)
  lines.push(`  unlock: Localized`)
  lines.push(`  regionId: HisuiRegionId`)
  lines.push(`  subregionId: string`)
  lines.push(`}`)
  lines.push(``)
  lines.push(`export const LA_MISSIONS: LaMission[] = [`)

  for (const [num, en, pt, descEn, descPt, regionId, subregionId] of MAIN) {
    const region = REGIONS[regionId]
    lines.push(`  {`)
    lines.push(`    id: 'main-${num}',`)
    lines.push(`    kind: 'main',`)
    lines.push(`    number: ${num},`)
    lines.push(`    name: ${loc(en, pt)},`)
    lines.push(`    description: ${loc(descEn, descPt)},`)
    lines.push(`    location: ${loc(region.en, region.pt)},`)
    lines.push(
      `    unlock: ${loc(num === 1 ? 'Start of the game' : `Complete Mission ${num - 1}`, num === 1 ? 'Início do jogo' : `Conclua a Missão ${num - 1}`)},`,
    )
    lines.push(`    regionId: '${regionId}',`)
    lines.push(`    subregionId: '${subregionId}',`)
    lines.push(`  },`)
  }

  for (const [num, en, descEn] of REQUESTS) {
    const [regionId, subregionId] = REQUEST_PLACE[num] ?? inferPlace(`${en} ${descEn}`)
    const region = REGIONS[regionId]
    lines.push(`  {`)
    lines.push(`    id: 'side-${num}',`)
    lines.push(`    kind: 'side',`)
    lines.push(`    number: ${num},`)
    lines.push(`    name: ${loc(en, en)},`)
    lines.push(`    description: ${loc(descEn, descEn)},`)
    lines.push(`    location: ${loc(region.en, region.pt)},`)
    lines.push(
      `    unlock: ${loc('Available as you progress the story', 'Disponível conforme avança a história')},`,
    )
    lines.push(`    regionId: '${regionId}',`)
    lines.push(`    subregionId: '${subregionId}',`)
    lines.push(`  },`)
  }

  lines.push(`]`)
  lines.push(``)
  lines.push(`export function laMissionsForRegion(regionId: HisuiRegionId | null, kind?: LaMissionKind | 'all') {`)
  lines.push(`  if (!regionId) return []`)
  lines.push(`  return LA_MISSIONS.filter((m) => {`)
  lines.push(`    if (m.regionId !== regionId) return false`)
  lines.push(`    if (kind && kind !== 'all' && m.kind !== kind) return false`)
  lines.push(`    return true`)
  lines.push(`  })`)
  lines.push(`}`)
  lines.push(``)
  lines.push(`export function laMissionCountByRegion(kind: LaMissionKind | 'all' = 'all') {`)
  lines.push(`  const counts: Partial<Record<HisuiRegionId, number>> = {}`)
  lines.push(`  for (const m of LA_MISSIONS) {`)
  lines.push(`    if (kind !== 'all' && m.kind !== kind) continue`)
  lines.push(`    counts[m.regionId] = (counts[m.regionId] ?? 0) + 1`)
  lines.push(`  }`)
  lines.push(`  return counts`)
  lines.push(`}`)
  lines.push(``)
  lines.push(`export function laMissionMapPosition(`)
  lines.push(`  mission: LaMission,`)
  lines.push(`  subMap: { x: number; y: number },`)
  lines.push(`  siblingsAtSub: LaMission[],`)
  lines.push(`): { x: number; y: number } {`)
  lines.push(`  const idx = siblingsAtSub.findIndex((m) => m.id === mission.id)`)
  lines.push(`  const total = siblingsAtSub.length`)
  lines.push(`  if (total <= 1 || idx < 0) return { x: subMap.x, y: subMap.y }`)
  lines.push(`  const angle = (idx / total) * Math.PI * 2`)
  lines.push(`  const radius = 2.2 + (idx % 4) * 0.45`)
  lines.push(`  return {`)
  lines.push(`    x: Math.min(96, Math.max(4, subMap.x + Math.cos(angle) * radius)),`)
  lines.push(`    y: Math.min(96, Math.max(4, subMap.y + Math.sin(angle) * radius)),`)
  lines.push(`  }`)
  lines.push(`}`)
  lines.push(``)

  const out = path.join(root, 'src/data/laMissions.ts')
  fs.writeFileSync(out, lines.join('\n'))
  console.log('Wrote', out, `(${MAIN.length} main + ${REQUESTS.length} requests)`)
}

main()
