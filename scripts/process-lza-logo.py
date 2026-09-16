from PIL import Image

src = r'public/lza-logo.png'
img = Image.open(src).convert('RGBA')
bbox = img.getbbox()
print('bbox', bbox)
if bbox:
    pad = 8
    w, h = img.size
    left = max(0, bbox[0] - pad)
    top = max(0, bbox[1] - pad)
    right = min(w, bbox[2] + pad)
    bottom = min(h, bbox[3] + pad)
    img = img.crop((left, top, right, bottom))
img.save(src, 'PNG')
print('saved', img.size)
