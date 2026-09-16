import type { Localized } from './laCollectible'

export type LaSolitudeEntry = {
  id: string
  name: Localized
  opponent: Localized
  requirements: Localized
  rewards: Localized
  rankHint?: Localized
}

/** Path of Solitude / Training Grounds arena challenges. */
export const LA_SOLITUDE: LaSolitudeEntry[] = [
  {
    id: 'sol-bidoof',
    name: { en: 'Path of Solitude — Bidoof', pt: 'Caminho da Solidão — Bidoof' },
    opponent: { en: 'Bidoof line challenge', pt: 'Desafio da linha Bidoof' },
    requirements: { en: 'Register Bidoof in the Pokédex; Training Grounds access.', pt: 'Registre Bidoof; acesso ao Campo de Treino.' },
    rewards: { en: 'Exp. Candy S · Grit items', pt: 'Doce Exp. P · itens de Ev' },
    rankHint: { en: 'Early Survey Corps ranks', pt: 'Ranks iniciais do Corpo' },
  },
  {
    id: 'sol-starly',
    name: { en: 'Path of Solitude — Starly', pt: 'Caminho da Solidão — Starly' },
    opponent: { en: 'Starly line', pt: 'Linha Starly' },
    requirements: { en: 'Starly registered.', pt: 'Starly registrado.' },
    rewards: { en: 'Exp. Candy S · Wing items', pt: 'Doce Exp. P · penas' },
  },
  {
    id: 'sol-shinx',
    name: { en: 'Path of Solitude — Shinx', pt: 'Caminho da Solidão — Shinx' },
    opponent: { en: 'Shinx line', pt: 'Linha Shinx' },
    requirements: { en: 'Shinx registered.', pt: 'Shinx registrado.' },
    rewards: { en: 'Exp. Candy M · Thunder Stone chance', pt: 'Doce Exp. M · chance de Pedra do Trovão' },
  },
  {
    id: 'sol-eevee',
    name: { en: 'Path of Solitude — Eevee', pt: 'Caminho da Solidão — Eevee' },
    opponent: { en: 'Eevee & evolutions', pt: 'Eevee e evoluções' },
    requirements: { en: 'Eevee registered; mid ranks.', pt: 'Eevee registrado; ranks médios.' },
    rewards: { en: 'Exp. Candy L · Evolution stones', pt: 'Doce Exp. G · pedras de evolução' },
  },
  {
    id: 'sol-scyther',
    name: { en: 'Path of Solitude — Scyther', pt: 'Caminho da Solidão — Scyther' },
    opponent: { en: 'Scyther / Kleavor path', pt: 'Caminho Scyther / Kleavor' },
    requirements: { en: 'Scyther registered.', pt: 'Scyther registrado.' },
    rewards: { en: 'Black Augurite chance · Grit pebbles', pt: 'Chance de Augurite Negra · grit' },
  },
  {
    id: 'sol-growlithe',
    name: { en: 'Path of Solitude — Growlithe', pt: 'Caminho da Solidão — Growlithe' },
    opponent: { en: 'Hisuian Growlithe line', pt: 'Linha Growlithe de Hisui' },
    requirements: { en: 'Hisuian Growlithe registered.', pt: 'Growlithe de Hisui registrado.' },
    rewards: { en: 'Fire Stone · Exp. Candy L', pt: 'Pedra do Fogo · Doce Exp. G' },
  },
  {
    id: 'sol-qwilfish',
    name: { en: 'Path of Solitude — Qwilfish', pt: 'Caminho da Solidão — Qwilfish' },
    opponent: { en: 'Hisuian Qwilfish / Overqwil', pt: 'Qwilfish de Hisui / Overqwil' },
    requirements: { en: 'Hisuian Qwilfish registered.', pt: 'Qwilfish de Hisui registrado.' },
    rewards: { en: 'Exp. Candy L · Water items', pt: 'Doce Exp. G · itens de Água' },
  },
  {
    id: 'sol-sneasel',
    name: { en: 'Path of Solitude — Sneasel', pt: 'Caminho da Solidão — Sneasel' },
    opponent: { en: 'Hisuian Sneasel / Sneasler', pt: 'Sneasel de Hisui / Sneasler' },
    requirements: { en: 'Hisuian Sneasel registered.', pt: 'Sneasel de Hisui registrado.' },
    rewards: { en: 'Razor Claw chance · Grit rock', pt: 'Chance de Garra Afiada · grit' },
  },
  {
    id: 'sol-basculin',
    name: { en: 'Path of Solitude — Basculin', pt: 'Caminho da Solidão — Basculin' },
    opponent: { en: 'White-Stripe Basculin / Basculegion', pt: 'Basculin Listras Brancas / Basculegion' },
    requirements: { en: 'Basculin registered.', pt: 'Basculin registrado.' },
    rewards: { en: 'Exp. Candy XL · Grit', pt: 'Doce Exp. XG · grit' },
  },
  {
    id: 'sol-stantler',
    name: { en: 'Path of Solitude — Stantler', pt: 'Caminho da Solidão — Stantler' },
    opponent: { en: 'Stantler / Wyrdeer', pt: 'Stantler / Wyrdeer' },
    requirements: { en: 'Stantler registered.', pt: 'Stantler registrado.' },
    rewards: { en: 'Exp. Candy L · Psychic items', pt: 'Doce Exp. G · itens Psíquicos' },
  },
  {
    id: 'sol-ursaring',
    name: { en: 'Path of Solitude — Ursaring', pt: 'Caminho da Solidão — Ursaring' },
    opponent: { en: 'Ursaring / Ursaluna', pt: 'Ursaring / Ursaluna' },
    requirements: { en: 'Ursaring registered; high ranks.', pt: 'Ursaring registrado; ranks altos.' },
    rewards: { en: 'Peat Block chance · Exp. Candy XL', pt: 'Chance de Bloco de Turfa · Doce Exp. XG' },
  },
  {
    id: 'sol-garchomp',
    name: { en: 'Path of Solitude — Garchomp', pt: 'Caminho da Solidão — Garchomp' },
    opponent: { en: 'Gible line climax', pt: 'Clímax da linha Gible' },
    requirements: { en: 'Garchomp registered; late ranks.', pt: 'Garchomp registrado; ranks finais.' },
    rewards: { en: 'Exp. Candy XL · Rare candies', pt: 'Doce Exp. XG · Doces Raros' },
  },
  {
    id: 'sol-lucario',
    name: { en: 'Path of Solitude — Lucario', pt: 'Caminho da Solidão — Lucario' },
    opponent: { en: 'Riolu / Lucario', pt: 'Riolu / Lucario' },
    requirements: { en: 'Lucario registered.', pt: 'Lucario registrado.' },
    rewards: { en: 'Exp. Candy XL · Fighting items', pt: 'Doce Exp. XG · itens de Luta' },
  },
  {
    id: 'sol-electivire',
    name: { en: 'Path of Solitude — Electivire', pt: 'Caminho da Solidão — Electivire' },
    opponent: { en: 'Elekid line', pt: 'Linha Elekid' },
    requirements: { en: 'Electivire registered.', pt: 'Electivire registrado.' },
    rewards: { en: 'Electirizer-adjacent rewards · Candy', pt: 'Recompensas ligadas a Electirizer · doces' },
  },
  {
    id: 'sol-magmortar',
    name: { en: 'Path of Solitude — Magmortar', pt: 'Caminho da Solidão — Magmortar' },
    opponent: { en: 'Magby line', pt: 'Linha Magby' },
    requirements: { en: 'Magmortar registered.', pt: 'Magmortar registrado.' },
    rewards: { en: 'Magmarizer-adjacent rewards · Candy', pt: 'Recompensas ligadas a Magmarizer · doces' },
  },
  {
    id: 'sol-hisuian-typhlosion',
    name: { en: 'Path of Solitude — Typhlosion', pt: 'Caminho da Solidão — Typhlosion' },
    opponent: { en: 'Hisuian Typhlosion', pt: 'Typhlosion de Hisui' },
    requirements: { en: 'Hisuian Typhlosion registered.', pt: 'Typhlosion de Hisui registrado.' },
    rewards: { en: 'Exp. Candy XL · Ghost/Fire items', pt: 'Doce Exp. XG · itens Fantasma/Fogo' },
  },
  {
    id: 'sol-hisuian-samurott',
    name: { en: 'Path of Solitude — Samurott', pt: 'Caminho da Solidão — Samurott' },
    opponent: { en: 'Hisuian Samurott', pt: 'Samurott de Hisui' },
    requirements: { en: 'Hisuian Samurott registered.', pt: 'Samurott de Hisui registrado.' },
    rewards: { en: 'Exp. Candy XL · Dark items', pt: 'Doce Exp. XG · itens Noturnos' },
  },
  {
    id: 'sol-hisuian-decidueye',
    name: { en: 'Path of Solitude — Decidueye', pt: 'Caminho da Solidão — Decidueye' },
    opponent: { en: 'Hisuian Decidueye', pt: 'Decidueye de Hisui' },
    requirements: { en: 'Hisuian Decidueye registered.', pt: 'Decidueye de Hisui registrado.' },
    rewards: { en: 'Exp. Candy XL · Fighting items', pt: 'Doce Exp. XG · itens de Luta' },
  },
  {
    id: 'sol-zoroark',
    name: { en: 'Path of Solitude — Zoroark', pt: 'Caminho da Solidão — Zoroark' },
    opponent: { en: 'Hisuian Zoroark', pt: 'Zoroark de Hisui' },
    requirements: { en: 'Hisuian Zoroark registered; high ranks.', pt: 'Zoroark de Hisui registrado; ranks altos.' },
    rewards: { en: 'Exp. Candy XL · Rare Candy', pt: 'Doce Exp. XG · Doce Raro' },
  },
  {
    id: 'sol-arceus-note',
    name: { en: 'Path of Solitude — Master note', pt: 'Caminho da Solidão — Nota mestre' },
    opponent: { en: 'Endgame gauntlet (varies)', pt: 'Gauntlet final (varia)' },
    requirements: { en: 'Near-complete Hisui Dex; top Survey ranks.', pt: 'Pokédex quase completa; ranks máximos.' },
    rewards: { en: 'Best grit / candy yields', pt: 'Melhores grit / doces' },
    rankHint: { en: 'Post-game focus', pt: 'Foco no pós-jogo' },
  },
]
