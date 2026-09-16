import https from 'https'

const samples = [
  'clefablite',
  'victreebelite',
  'meganiumite',
  'charizardite-x',
  'charizarditex',
  'gengarite',
  'absolite-z',
  'absolitez',
  'lucarionite-z',
  'mega-shard',
  'colorful-screw',
  'tm-normal',
  'tm107',
  'hyper-cheri-berry',
  'cheri-berry',
  'strange-ball',
  'canari-bread',
  'lumiose-galette',
  'poke-ball',
]

function head(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD', timeout: 8000 }, (res) => {
      resolve(res.statusCode)
      res.resume()
    })
    req.on('error', () => resolve(0))
    req.on('timeout', () => {
      req.destroy()
      resolve(0)
    })
    req.end()
  })
}

for (const s of samples) {
  const poke = await head(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${s}.png`,
  )
  const sere = await head(`https://www.serebii.net/itemdex/sprites/${s}.png`)
  console.log(`${s.padEnd(22)} poke=${poke} sere=${sere}`)
}
