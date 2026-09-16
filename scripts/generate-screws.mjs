/**
 * Generate colorfulScrews.ts with approximate map % coords
 * anchored to known wild-zone / landmark positions.
 */
import fs from 'node:fs'

const WZ = {
  1: [58.8, 93.0],
  2: [62.3, 66.6],
  3: [50.2, 27.6],
  4: [41.5, 8.0],
  5: [42.0, 60.1],
  6: [92.3, 53.3],
  7: [29.2, 43.1],
  8: [71.8, 42.3],
  9: [12.4, 56.3],
  10: [15.8, 65.9],
  11: [82.3, 60.1],
  12: [42.8, 82.5],
  13: [57.1, 14.5],
  14: [10.0, 42.9],
  15: [80.7, 18.5],
  16: [36.7, 68.2],
  17: [76.7, 77.3],
  18: [20.5, 18.3],
  19: [81.5, 31.0],
  20: [50.2, 49.9],
}

const L = {
  hotelZ: [65.02, 84.44],
  racine: [83.55, 77.37],
  restNah: [89.42, 66.7],
  restYeah: [32.75, 23.86],
  restWow: [58.59, 35.73],
  looker: [44.68, 20.9],
  museum: [60.59, 5.12],
  academie: [58, 28],
  passagePalais: [46, 30],
  researchLab: [53.59, 95.88],
  rustHQ: [33.07, 60.95],
  justiceDojo: [68.15, 49.71],
  cityHall: [78, 48],
  jaunePC: [90.06, 33.5],
  cafeSoleil: [22, 72],
  cafeKizuna: [88, 28],
  hotelRichissime: [74.09, 10.6],
  coulant: [34, 56],
  prism: [50.17, 54.57],
}

function near(base, dx, dy) {
  return [
    Math.round((base[0] + dx) * 10) / 10,
    Math.round((base[1] + dy) * 10) / 10,
  ]
}

/** [id, district, en, pt, x, y] */
const screws = [
  // Vert 1-22
  [1, 'vert', 'Scaffolding north-west from Hotel Z', 'Andaime a noroeste do Hotel Z', ...near(L.hotelZ, -4, -3)],
  [2, 'vert', 'Vert Sector 9 rooftops', 'Telhados do Setor Vert 9', ...near(WZ[1], -8, -4)],
  [3, 'vert', 'Scaffolding north-east from Hotel Z', 'Andaime a nordeste do Hotel Z', ...near(L.hotelZ, 5, -2)],
  [4, 'vert', 'Rooftops east from Hotel Z', 'Telhados a leste do Hotel Z', ...near(L.hotelZ, 7, 1)],
  [5, 'vert', 'Vert Sector 5 scaffolding', 'Andaime do Setor Vert 5', ...near(WZ[2], -6, 4)],
  [6, 'vert', 'Vert Sector 4 scaffolding (lower)', 'Andaime do Setor Vert 4 (parte baixa)', ...near(WZ[1], -4, -6)],
  [7, 'vert', 'Vert Sector 4 scaffolding (upper)', 'Andaime do Setor Vert 4 (parte alta)', ...near(WZ[1], -3, -8)],
  [8, 'vert', 'Vert Sector 4 rooftops', 'Telhados do Setor Vert 4', ...near(WZ[1], -6, -7)],
  [9, 'vert', 'Vert Sector 2 rooftops', 'Telhados do Setor Vert 2', ...near(WZ[2], 5, -5)],
  [10, 'vert', 'Vert Sector 1 west scaffolding', 'Andaime oeste do Setor Vert 1', ...near(WZ[2], -3, -8)],
  [11, 'vert', 'Vert Sector 1 north scaffolding', 'Andaime norte do Setor Vert 1', ...near(WZ[2], 2, -10)],
  [12, 'vert', 'Vert Sector 1 east courtyard', 'Pátio leste do Setor Vert 1', ...near(WZ[2], 6, -6)],
  [13, 'vert', 'Vert Sector 1 east scaffolding', 'Andaime leste do Setor Vert 1', ...near(WZ[2], 8, -7)],
  [14, 'vert', 'Vert Sector 3 west rooftops', 'Telhados oeste do Setor Vert 3', ...near(WZ[2], -2, 8)],
  [15, 'vert', 'Rooftops east from Wild Zone 2', 'Telhados a leste da Wild Zone 2', ...near(WZ[2], 6, 1)],
  [16, 'vert', 'Coulant Waterway scaffolding', 'Andaime da Via d\'água Coulant', ...near(L.coulant, 4, 4)],
  [17, 'vert', 'Rooftop near east side of Wild Zone 17', 'Telhado perto do lado leste da Wild Zone 17', ...near(WZ[17], 4, 0)],
  [18, 'vert', 'Vert Sector 7 scaffolding', 'Andaime do Setor Vert 7', ...near(WZ[17], -3, 3)],
  [19, 'vert', 'Inside Racine Construction', 'Dentro da Racine Construction', ...near(L.racine, 0, 0)],
  [20, 'vert', 'Scaffolding north-east from Racine Construction', 'Andaime a nordeste da Racine Construction', ...near(L.racine, 4, -3)],
  [21, 'vert', 'Scaffolding north from Racine Construction', 'Andaime ao norte da Racine Construction', ...near(L.racine, 0, -4)],
  [22, 'vert', 'Roof of Restaurant Le Nah', 'Telhado do Restaurante Le Nah', ...near(L.restNah, 0, -1)],

  // Rouge 23-47
  [23, 'rouge', 'Rouge Sector 1 scaffolding (center)', 'Andaime central do Setor Rouge 1', ...near(WZ[3], -4, 4)],
  [24, 'rouge', 'Rouge Sector 1 scaffolding (top)', 'Andaime superior do Setor Rouge 1', ...near(WZ[3], -5, 2)],
  [25, 'rouge', 'Scaffolding west from Wild Zone 3 (south)', 'Andaime a oeste da Wild Zone 3 (sul)', ...near(WZ[3], -6, 3)],
  [26, 'rouge', 'Scaffolding west from Wild Zone 3 (north)', 'Andaime a oeste da Wild Zone 3 (norte)', ...near(WZ[3], -6, -2)],
  [27, 'rouge', 'Rooftops west from Wild Zone 3', 'Telhados a oeste da Wild Zone 3', ...near(WZ[3], -8, 0)],
  [28, 'rouge', 'Rouge Sector 5 rooftops, south of Looker Bureau', 'Telhados do Setor Rouge 5, sul do Looker', ...near(L.looker, 2, 4)],
  [29, 'rouge', 'Roof of Passage Ombragé', 'Telhado do Passage Ombragé', ...near(L.passagePalais, -3, -2)],
  [30, 'rouge', 'Roof of Restaurant Le Yeah', 'Telhado do Restaurante Le Yeah', ...near(L.restYeah, 0, -1)],
  [31, 'rouge', 'Rouge Sector 3 rooftops', 'Telhados do Setor Rouge 3', ...near(WZ[3], 6, 2)],
  [32, 'rouge', 'Scaffolding west from Wild Zone 13 (top)', 'Andaime a oeste da Wild Zone 13 (topo)', ...near(WZ[13], -5, -1)],
  [33, 'rouge', 'Scaffolding west from Wild Zone 13 (lower)', 'Andaime a oeste da Wild Zone 13 (baixo)', ...near(WZ[13], -5, 2)],
  [34, 'rouge', 'Rooftops south of Wild Zone 13', 'Telhados ao sul da Wild Zone 13', ...near(WZ[13], 0, 4)],
  [35, 'rouge', 'Rouge Sector 7 south scaffolding', 'Andaime sul do Setor Rouge 7', ...near(WZ[4], -6, 6)],
  [36, 'rouge', 'Rooftop west from Wild Zone 4', 'Telhado a oeste da Wild Zone 4', ...near(WZ[4], -5, 1)],
  [37, 'rouge', 'Scaffolding west from Wild Zone 4', 'Andaime a oeste da Wild Zone 4', ...near(WZ[4], -4, 3)],
  [38, 'rouge', 'Scaffolding west from Lumiose Museum (west)', 'Andaime a oeste do Museu (lado oeste)', ...near(L.museum, -5, 0)],
  [39, 'rouge', 'Scaffolding west from Lumiose Museum (east)', 'Andaime a oeste do Museu (lado leste)', ...near(L.museum, -2, 1)],
  [40, 'rouge', 'Passage du Palais rooftop', 'Telhado do Passage du Palais', ...near(L.passagePalais, 0, 0)],
  [41, 'rouge', 'Rouge Sector 8 scaffolding (north)', 'Andaime norte do Setor Rouge 8', ...near(WZ[13], 5, -3)],
  [42, 'rouge', 'Rouge Sector 8 scaffolding (east, lower)', 'Andaime leste do Setor Rouge 8 (baixo)', ...near(WZ[13], 7, 1)],
  [43, 'rouge', 'Rouge Sector 8 scaffolding (east, upper)', 'Andaime leste do Setor Rouge 8 (alto)', ...near(WZ[13], 7, -2)],
  [44, 'rouge', 'Scaffolding south from Hotel Richissime', 'Andaime ao sul do Hotel Richissime', ...near(L.hotelRichissime, 0, 4)],
  [45, 'rouge', 'Académie Étoile rooftop (back)', 'Telhado da Académie Étoile (fundos)', ...near(L.academie, 1, -2)],
  [46, 'rouge', 'Académie Étoile walkway roof', 'Telhado da passarela da Académie Étoile', ...near(L.academie, -1, 1)],
  [47, 'rouge', 'Scaffolding near Restaurant Le Wow', 'Andaime perto do Restaurante Le Wow', ...near(L.restWow, -2, 2)],

  // Bleu 48-65
  [48, 'bleu', 'Bleu Sector 7 east scaffolding', 'Andaime leste do Setor Bleu 7', ...near(WZ[12], -4, -2)],
  [49, 'bleu', 'Bleu Sector 7 east rooftops', 'Telhados leste do Setor Bleu 7', ...near(WZ[12], -6, 0)],
  [50, 'bleu', 'Scaffolding west of Pokémon Research Lab (upper)', 'Andaime a oeste do Lab. de Pesquisa (alto)', ...near(L.researchLab, -5, -1)],
  [51, 'bleu', 'Scaffolding west of Pokémon Research Lab (lower)', 'Andaime a oeste do Lab. de Pesquisa (baixo)', ...near(L.researchLab, -5, 2)],
  [52, 'bleu', 'Bleu Sector 7 west rooftops', 'Telhados oeste do Setor Bleu 7', ...near(WZ[12], -8, -3)],
  [53, 'bleu', 'Bleu Sector 7 north scaffolding', 'Andaime norte do Setor Bleu 7', ...near(WZ[12], -5, -5)],
  [54, 'bleu', 'Rooftop west side of Wild Zone 12', 'Telhado no lado oeste da Wild Zone 12', ...near(WZ[12], -4, 1)],
  [55, 'bleu', 'Bleu Sector 3 south scaffolding', 'Andaime sul do Setor Bleu 3', ...near(WZ[16], -6, 6)],
  [56, 'bleu', 'Bleu Sector 3 north-east scaffolding', 'Andaime nordeste do Setor Bleu 3', ...near(WZ[16], -4, 4)],
  [57, 'bleu', 'Bleu Sector 5 scaffolding (north)', 'Andaime norte do Setor Bleu 5', ...near(WZ[5], -8, -2)],
  [58, 'bleu', 'Bleu Sector 5 scaffolding (south)', 'Andaime sul do Setor Bleu 5', ...near(WZ[5], -8, 3)],
  [59, 'bleu', 'Bleu Sector 5 rooftops', 'Telhados do Setor Bleu 5', ...near(WZ[5], -6, 1)],
  [60, 'bleu', 'Rooftop south-west from Wild Zone 16', 'Telhado a sudoeste da Wild Zone 16', ...near(WZ[16], -4, 3)],
  [61, 'bleu', 'Rooftop south-west from Rust Syndicate Office', 'Telhado a sudoeste da Sede Rust', ...near(L.rustHQ, -3, 4)],
  [62, 'bleu', 'Bleu Sector 6 scaffolding (mid)', 'Andaime do Setor Bleu 6 (meio)', ...near(WZ[16], 4, 5)],
  [63, 'bleu', 'Bleu Sector 6 scaffolding (top)', 'Andaime do Setor Bleu 6 (topo)', ...near(WZ[16], 5, 3)],
  [64, 'bleu', 'Scaffolding opposite Café Soleil', 'Andaime em frente ao Café Soleil', ...near(L.cafeSoleil, 3, 0)],
  [65, 'bleu', 'Scaffolding west from Wild Zone 10', 'Andaime a oeste da Wild Zone 10', ...near(WZ[10], -4, 0)],

  // Jaune 66-84
  [66, 'jaune', 'Jaune Sector 2 courtyard', 'Pátio do Setor Jaune 2', ...near(WZ[19], -2, 4)],
  [67, 'jaune', 'Justice Dojo rooftops', 'Telhados do Dojo da Justiça', ...near(L.justiceDojo, 1, -1)],
  [68, 'jaune', 'Jaune Sector 6 scaffolding', 'Andaime do Setor Jaune 6', ...near(WZ[11], 2, -6)],
  [69, 'jaune', 'Rooftop near NW corner of Wild Zone 11', 'Telhado perto do canto NO da Wild Zone 11', ...near(WZ[11], -3, -3)],
  [70, 'jaune', 'Jaune Sector 9 south scaffolding', 'Andaime sul do Setor Jaune 9', ...near(WZ[6], -4, 3)],
  [71, 'jaune', 'Scaffolding east from City Hall', 'Andaime a leste da Prefeitura', ...near(L.cityHall, 4, 0)],
  [72, 'jaune', 'Atop City Hall', 'No alto da Prefeitura', ...near(L.cityHall, 0, -1)],
  [73, 'jaune', 'Jaune Sector 11 rooftop (south)', 'Telhado sul do Setor Jaune 11', ...near(WZ[6], -2, -4)],
  [74, 'jaune', 'Jaune Sector 11 rooftop (center)', 'Telhado central do Setor Jaune 11', ...near(WZ[6], -3, -2)],
  [75, 'jaune', 'Scaffolding north from Jaune Pokémon Center', 'Andaime ao norte do Centro Pokémon Jaune', ...near(L.jaunePC, 0, -4)],
  [76, 'jaune', 'Scaffolding east from Wild Zone 19', 'Andaime a leste da Wild Zone 19', ...near(WZ[19], 4, 0)],
  [77, 'jaune', 'Rooftop near south entrance of Wild Zone 15', 'Telhado perto da entrada sul da Wild Zone 15', ...near(WZ[15], 0, 4)],
  [78, 'jaune', 'Scaffolding south-east from Café Kizuna', 'Andaime a sudeste do Café Kizuna', ...near(L.cafeKizuna, 3, 3)],
  [79, 'jaune', 'Jaune Sector 5 rooftop near Wild Zone 19', 'Telhado do Setor Jaune 5 perto da WZ 19', ...near(WZ[19], -4, 2)],
  [80, 'jaune', 'Enclosed space north from Wild Zone 8', 'Espaço fechado ao norte da Wild Zone 8', ...near(WZ[8], 0, -4)],
  [81, 'jaune', 'Jaune Sector 4 scaffolding (Hibernal Ave)', 'Andaime do Setor Jaune 4 (Av. Hibernal)', ...near(WZ[8], -5, -2)],
  [82, 'jaune', 'Jaune Sector 3 rooftop (Hibernal Ave)', 'Telhado do Setor Jaune 3 (Av. Hibernal)', ...near(WZ[8], -4, 3)],
  [83, 'jaune', 'Jaune Sector 3 central scaffolding', 'Andaime central do Setor Jaune 3', ...near(WZ[8], -6, 1)],
  [84, 'jaune', 'Jaune Sector 3 rooftop (Wild Zone 8 side)', 'Telhado do Setor Jaune 3 (lado da WZ 8)', ...near(WZ[8], -3, 4)],

  // Magenta 85-100
  [85, 'magenta', 'Rooftop west from Centrico Plaza / Wild Zone 20', 'Telhado a oeste da Praça Centrico / WZ 20', ...near(WZ[20], -6, 0)],
  [86, 'magenta', 'Magenta Sector 2 scaffolding', 'Andaime do Setor Magenta 2', ...near(WZ[7], -4, -4)],
  [87, 'magenta', 'Courtyard west from Wild Zone 7', 'Pátio a oeste da Wild Zone 7', ...near(WZ[7], -5, 1)],
  [88, 'magenta', 'Magenta Sector 6 north scaffolding (mid)', 'Andaime norte do Setor Magenta 6 (meio)', ...near(WZ[9], 4, -3)],
  [89, 'magenta', 'Magenta Sector 6 north scaffolding (top)', 'Andaime norte do Setor Magenta 6 (topo)', ...near(WZ[9], 5, -5)],
  [90, 'magenta', 'Magenta Sector 6 rooftops (south)', 'Telhados sul do Setor Magenta 6', ...near(WZ[9], 3, 2)],
  [91, 'magenta', 'Wild Zone 9 scaffolding', 'Andaime da Wild Zone 9', ...near(WZ[9], 2, 0)],
  [92, 'magenta', 'Scaffolding south from Wild Zone 14 (mid)', 'Andaime ao sul da Wild Zone 14 (meio)', ...near(WZ[14], 1, 5)],
  [93, 'magenta', 'Scaffolding south from Wild Zone 14 (top)', 'Andaime ao sul da Wild Zone 14 (topo)', ...near(WZ[14], 2, 4)],
  [94, 'magenta', 'Scaffolding west from Wild Zone 14', 'Andaime a oeste da Wild Zone 14', ...near(WZ[14], -3, 1)],
  [95, 'magenta', 'Magenta Sector 8 south-west scaffolding', 'Andaime sudoeste do Setor Magenta 8', ...near(WZ[18], 2, 4)],
  [96, 'magenta', 'Magenta Sector 7 rooftops', 'Telhados do Setor Magenta 7', ...near(WZ[18], 4, 2)],
  [97, 'magenta', 'Magenta Sector 9 west scaffolding (inner)', 'Andaime oeste do Setor Magenta 9 (interno)', ...near(WZ[18], -2, -2)],
  [98, 'magenta', 'Magenta Sector 9 west scaffolding (outer)', 'Andaime oeste do Setor Magenta 9 (externo)', ...near(WZ[18], -4, -1)],
  [99, 'magenta', 'Magenta Sector 9 rooftops', 'Telhados do Setor Magenta 9', ...near(WZ[18], 0, -3)],
  [100, 'magenta', 'Magenta Sector 9 central scaffolding', 'Andaime central do Setor Magenta 9', ...near(WZ[18], 1, 0)],
]

const body = screws
  .map(
    ([id, district, en, pt, x, y]) => `  {
    id: ${id},
    districtKey: '${district}',
    location: { en: ${JSON.stringify(en)}, pt: ${JSON.stringify(pt)} },
    map: { x: ${x}, y: ${y} },
  }`,
  )
  .join(',\n')

const out = `export type Localized = { en: string; pt: string }

export type ScrewDistrict = 'vert' | 'rouge' | 'bleu' | 'jaune' | 'magenta'

export type ColorfulScrew = {
  id: number
  districtKey: ScrewDistrict
  location: Localized
  map: { x: number; y: number }
}

/** Approximate map positions (%, same space as Wild Zones) for all 100 Colorful Screws. */
export const COLORFUL_SCREWS: ColorfulScrew[] = [
${body},
]

export function screwKey(id: number) {
  return \`screw:\${id}\`
}
`

fs.writeFileSync('src/data/colorfulScrews.ts', out, 'utf8')
console.log('wrote', screws.length, 'screws')
