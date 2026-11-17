"""
Cut the model out of the Pexels studio shot.

The background is near-white but NOT pure white (there is a soft shadow
and a faint vertical seam on the right), and her blouse and shirt cuffs
are ALSO near-white. A plain luminance threshold therefore punches
holes straight through her clothing.

So, two passes:
  1. flood fill inward from the border, so only white CONNECTED to the
     edge counts as background. Her blouse is enclosed by the dark
     blazer and is never reached.
  2. keep only the LARGEST remaining component. The backdrop has a
     faint seam and a scuff near the right edge that survive pass 1
     because they are a shade too dark to flood into; they are not
     attached to her, so this drops them.
"""
import os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

import os as _os
SRC = _os.environ.get("SRC","cand/lady_full.jpg")
OUT = _os.environ.get("OUT","cand/lady_cut.png")
THRESH = int(_os.environ.get("THRESH","38"))          # flood-fill tolerance, 0-255 per channel
FEATHER = 1.1        # px of alpha blur, kills the jagged key edge

im = Image.open(SRC).convert("RGB")
w, h = im.size
print("source:", im.size)

SENT = (255, 0, 255)          # cannot occur in the photo
work = im.copy()

seeds = []
for x in range(0, w, 40):
    seeds += [(x, 0), (x, h - 1)]
for y in range(0, h, 40):
    seeds += [(0, y), (w - 1, y)]

used = 0
for s in seeds:
    px = work.getpixel(s)
    if px == SENT or sum(px) / 3 < int(_os.environ.get("MINLUM","200")):
        continue
    ImageDraw.floodfill(work, s, SENT, thresh=THRESH)
    used += 1
print("seeds used:", used, "of", len(seeds))

a = np.array(work)
bg = (a[:, :, 0] == 255) & (a[:, :, 1] == 0) & (a[:, :, 2] == 255)
print("pass 1 background: %.1f%%" % (100.0 * bg.mean()))

# ---- pass 2: largest connected foreground component ----------------
fg = ~bg
# Seed from the centre of mass of the darkest pixels, which is her
# blazer: guaranteed to be inside the subject, never in the backdrop.
lum = np.array(im.convert("L"))
dark = lum < 60
ys, xs = np.nonzero(dark)
seed = (int(xs.mean()), int(ys.mean()))
print("dark centroid seed:", seed, "lum there:", lum[seed[1], seed[0]])
assert fg[seed[1], seed[0]], "seed landed on background"

# ⚠️ ImageDraw.floodfill is a NO-OP on an "L" image in Pillow 12.3:
# it returns without filling anything and without raising. It only
# works on RGB, so the mask has to be carried as RGB.
m = np.where(fg, 255, 0).astype(np.uint8)
comp = Image.fromarray(np.dstack([m, m, m]), "RGB")
ImageDraw.floodfill(comp, seed, SENT, thresh=0)
c = np.array(comp)
keep = (c[:, :, 0] == 255) & (c[:, :, 1] == 0) & (c[:, :, 2] == 255)
print("kept component: %.1f%% of frame (fg was %.1f%%)"
      % (100.0 * keep.mean(), 100.0 * fg.mean()))

alpha = np.where(keep, 255, 0).astype(np.uint8)
al = Image.fromarray(alpha, "L")
al = al.filter(ImageFilter.MinFilter(3))        # pull the halo in 1px
al = al.filter(ImageFilter.GaussianBlur(FEATHER))

out = im.convert("RGBA")
out.putalpha(al)

bbox = out.getbbox()
out = out.crop(bbox)
print("bbox:", bbox, "-> cropped:", out.size)

tmp = OUT + ".tmp.png"
out.save(tmp, "PNG")
os.replace(tmp, OUT)
print("wrote", OUT, os.path.getsize(OUT), "bytes")
