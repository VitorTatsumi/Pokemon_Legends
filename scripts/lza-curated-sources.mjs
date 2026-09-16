/**
 * Authoritative obtain overrides (prefer over IGN/Serebii when they conflict).
 * Master Ball / Shiny Charm: Mable research (Bulbapedia + IGN + player confirmation).
 */
export const LZA_CURATED_SOURCES = {
  'Master Ball': {
    sources: ["Mable's Research Level 49"],
    kind: 'research',
  },
  'Shiny Charm': {
    sources: ["Mable's Research Level 50"],
    kind: 'research',
  },
  'Bottle Cap': {
    sources: ["Mable's Research Level 36 (×10)", 'Also found via missions, shops, and Hyperspace rewards'],
    kind: 'research',
  },
  'Gold Bottle Cap': {
    sources: ["Mable's Research Level 48 (×3)", 'Also found via late-game rewards'],
    kind: 'research',
  },
  'Exp. Candy S': {
    sources: ["Mable's Research Level 10 (×10)", 'Loot and mission rewards'],
    kind: 'research',
  },
  'Exp. Candy M': {
    sources: ["Mable's Research Level 25 (×10)", 'Loot and mission rewards'],
    kind: 'research',
  },
  'Exp. Candy L': {
    sources: ["Mable's Research Level 43 (×10)", 'Loot and mission rewards'],
    kind: 'research',
  },
  'Exp. Candy XL': {
    sources: ["Mable's Research Level 47 (×10)", 'Loot and mission rewards'],
    kind: 'research',
  },
  'Premier Ball': {
    sources: [
      'Pokémon Center — bonus when buying 10+ Poké Balls at once',
      'Shop: Autumnal Avenue',
      'Side Mission 163: Help Us Pick a Name',
      'Hyperspace floating Poké Balls',
    ],
    kind: 'shop',
  },
  'Cherish Ball': {
    sources: ['Event / special distribution (not sold in shops)'],
    kind: 'event',
  },
}
