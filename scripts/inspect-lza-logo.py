from PIL import Image, ImageFilter
from collections import Counter

src = r'public/lza-logo.png'
img = Image.open(src).convert('RGBA')
print('size', img.size, 'mode', img.mode)
w, h = img.size
corners = [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1), (w // 2, 0), (0, h // 2)]
for p in corners:
    print(p, img.getpixel(p))

px = list(img.getdata())
alphas = Counter(a for r, g, b, a in px)
print('unique alphas', len(alphas), 'top', alphas.most_common(5))
print('alpha0', sum(1 for *_, a in px if a == 0))
print('near_white', sum(1 for r, g, b, a in px if r > 240 and g > 240 and b > 240 and a > 200))
print('near_black', sum(1 for r, g, b, a in px if r < 20 and g < 20 and b < 20 and a > 200))
