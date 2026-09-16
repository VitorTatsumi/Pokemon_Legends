from pathlib import Path
import re

path = Path("src/data/hisuiRegions.ts")
text = path.read_text(encoding="utf-8")
order = ["jubilife", "obsidian", "crimson", "cobalt", "coronet", "alabaster"]

m = re.search(
    r"export const HISUI_REGIONS: HisuiRegion\[\] = \[(.*)\]\n\nexport function getHisuiRegion",
    text,
    re.S,
)
if not m:
    raise SystemExit("array not found")

body = m.group(1)
parts = re.split(r"(?=  \{\n    id:)", body.strip())
parts = [p for p in parts if p.strip()]
by_id = {}
for p in parts:
    im = re.search(r"id: '([^']+)'", p)
    if not im:
        continue
    chunk = p.rstrip().rstrip(",")
    by_id[im.group(1)] = chunk

missing = [i for i in order if i not in by_id]
if missing:
    raise SystemExit(f"missing {missing} have {list(by_id)}")

new_body = ",\n".join(by_id[i] for i in order)
new_text = text[: m.start(1)] + "\n" + new_body + ",\n" + text[m.end(1) :]
path.write_text(new_text, encoding="utf-8")
print("reordered", order)
