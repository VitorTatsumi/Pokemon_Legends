import json
from pathlib import Path

entries = json.loads(Path("scripts/lza-pokedex-raw.json").read_text(encoding="utf-8"))
out = []
out.append("export type LzaPokedexEntry = {")
out.append("  /** Lumiose Pokédex number (Legends: Z-A order) */")
out.append("  lumiose: number")
out.append("  /** National Dex number */")
out.append("  dex: number")
out.append("  name: string")
out.append("}")
out.append("")
out.append("/** Complete Lumiose Pokédex for Pokémon Legends: Z-A (232 entries). */")
out.append("export const LZA_POKEDEX: LzaPokedexEntry[] = [")
for e in entries:
    name = e["name"].replace("\\", "\\\\").replace("'", "\\'")
    out.append(f"  {{ lumiose: {e['lumiose']}, dex: {e['dex']}, name: '{name}' }},")
out.append("]")
out.append("")
out.append("export function getLzaEntryByDex(dex: number) {")
out.append("  return LZA_POKEDEX.find((e) => e.dex === dex) ?? null")
out.append("}")
out.append("")

Path("src/data/lzaPokedex.ts").write_text("\n".join(out) + "\n", encoding="utf-8")
print("wrote", len(entries), "entries")
