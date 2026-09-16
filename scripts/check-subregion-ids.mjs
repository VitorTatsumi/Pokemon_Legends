import fs from 'fs'

const regions = fs.readFileSync('src/data/hisuiRegions.ts', 'utf8')
const ids = new Set([...regions.matchAll(/sub\('([^']+)'/g)].map((m) => m[1]))

function check(file, pattern) {
  const s = fs.readFileSync(file, 'utf8')
  const subs = [...s.matchAll(pattern)].map((m) => m[1])
  const bad = [...new Set(subs.filter((id) => !ids.has(id)))]
  console.log(file, 'bad:', bad.length ? bad.join(', ') : 'none')
}

check('src/data/laUnowns.ts', /subregionId: '([^']+)'/g)
check('src/data/laOutbreaks.ts', /subregionId: '([^']+)'/g)
check('src/data/laAlphas.ts', /subregionId: '([^']+)'/g)
check('src/data/laCamps.ts', /subregionId: '([^']+)'/g)
check('src/data/laLegendaries.ts', /subregionId: '([^']+)'/g)
check('src/data/laWisps.ts', /subregionId: '([^']+)'/g)
