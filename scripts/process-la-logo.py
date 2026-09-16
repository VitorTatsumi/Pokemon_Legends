from PIL import Image, ImageDraw

src = r'public/la-logo.png'
out = r'public/la-logo.png'

img = Image.open(src).convert('RGBA')
w, h = img.size
pixels = img.load()

# Flood-fill near-white background from image edges (preserve white logo outlines).
visited = [[False] * w for _ in range(h)]
stack = []

def is_bg(x, y):
    r, g, b, a = pixels[x, y]
    # Near-white / light gray Google thumbnail background
    return r >= 230 and g >= 230 and b >= 230 and abs(r - g) < 12 and abs(g - b) < 12

for x in range(w):
    stack.append((x, 0))
    stack.append((x, h - 1))
for y in range(h):
    stack.append((0, y))
    stack.append((w - 1, y))

bg_mask = Image.new('L', (w, h), 0)
mask_px = bg_mask.load()

while stack:
    x, y = stack.pop()
    if x < 0 or y < 0 or x >= w or y >= h or visited[y][x]:
        continue
    visited[y][x] = True
    if not is_bg(x, y):
        continue
    mask_px[x, y] = 255
    stack.extend(((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)))

# Soften mask edges slightly for cleaner alpha
from PIL import ImageFilter

soft = bg_mask.filter(ImageFilter.GaussianBlur(radius=0.8))
soft_px = soft.load()

for y in range(h):
    for x in range(w):
        m = soft_px[x, y]
        if m == 0:
            continue
        r, g, b, a = pixels[x, y]
        # Fully remove solid bg; partially fade fringe
        alpha = max(0, 255 - m)
        pixels[x, y] = (r, g, b, alpha)

# Crop to non-transparent content with small padding
bbox = img.getbbox()
if bbox:
    pad = 4
    left = max(0, bbox[0] - pad)
    top = max(0, bbox[1] - pad)
    right = min(w, bbox[2] + pad)
    bottom = min(h, bbox[3] + pad)
    img = img.crop((left, top, right, bottom))

img.save(out, 'PNG')
print('saved', out, img.size)
