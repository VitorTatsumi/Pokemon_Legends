# LZA Guide Master

Guia local leve para **Pokémon Legends: Z-A**. A primeira ferramenta é o **Mapa de Lumiose City** com as 20 Wild Zones.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (em geral `http://localhost:5173`).

## Recursos

- Escolha de idioma no início: **PT-BR** / **EN**
- Mapa interativo com Wild Zones clicáveis (zoom + arrastar)
- Lista de Pokémon por zona (dia / noite / qualquer horário)
- Alphas garantidos por zona
- Marcadores de captura salvos no navegador (`localStorage`)
- Sidebar pronta para novas ferramentas

## Mapa de referência

O app inclui um **mapa esquemático** circular de Lumiose.

Para usar a imagem de referência (ex.: o mapa do Reddit):

1. Salve a imagem como `public/lumiose-map.jpg`
2. No app, ative o botão **Usar imagem de referência** / **Use reference image**

Os marcadores das Wild Zones ficam sobrepostos à imagem; as posições podem ser ajustadas em `src/data/wildZones.ts` (`map.x`, `map.y`, `map.r`).

## Dados

Listas baseadas em guias da comunidade (Polygon, Siliconera, PowerPyx, Bulbapedia). Podem precisar de ajuste fino conforme o jogo atualiza.
