"""Build every page's hero from ONE base, swapping only the dashboard.

Founder instruction, 17 Nov 2026, after signing off the care hero:
    "You can implement across all pages. Make each page dashboard design
     unique so it's different from each other and gives the page a
     different experience based on the offer."

So the rule from round 3 still holds and is NOT revisited here: HiBob's
layout, blobs, placement and colours stay exactly as they are, and only
two things ever change - the dashboard and the figure. This script keeps
the same figure on every page (one brand) and varies the dashboard.

⚠️ hero.png AND hero-practices.png ARE THE SAME PICTURE. They differ by
1,895 pixels inside x 245..440, y 260..282 - the banner wording - and by
nothing at all outside the panel. There is no second base to maintain:
every page builds from hero.png.

⚠️ THE BLOBS ARE STILL HIBOB'S ARTWORK on every page this writes. That
was raised, the founder reaffirmed it, and it is recorded in
reference_hero_image_provenance. Nothing here makes the file clean.

Dashboards come from the HTML replica in scratchpad/dash at 2880x2160
(2x), so the crop is 2880x1541 and lands in the 1669x893 panel slightly
DOWNsampled - crisp - instead of upscaled from a 1440-wide source.
"""
import os
import sys
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

S = 2
W, H = 938 * S, 654 * S

# every path resolves from THIS FILE, so the kit runs from anywhere
HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(HERE, "..", "..", ".."))
AU = os.path.join(REPO, "novada-website", "public", "ai-workforce")
US = os.path.join(REPO, "novadatech-com", "public", "ai-workforce")
HERO = os.path.join(AU, "hero.png")   # the one base, for both repos
LADY = os.path.join(HERE, "assets", "figure.webp")
DASH = os.path.join(HERE, "dash", "out", "%s.png")

# variant -> output files. The AU care hero is NOT in this table: it was
# approved on the real Figma export and is left exactly as it shipped.
JOBS = [
    ("care-au",      [os.path.join(AU, "hero-workforce.webp")], "figure"),
    ("practices-au", [os.path.join(AU, "hero-practices.webp")], "practices"),
    ("home-au",      [os.path.join(AU, "hero-home.webp")], "home"),
    ("why-au",       [os.path.join(AU, "hero-why.webp")], "why"),
    ("care-us",      [os.path.join(US, "hero-workforce.webp")], "figure"),
    ("practices-us", [os.path.join(US, "hero-practices.webp")], "practices"),
    ("home-us",      [os.path.join(US, "hero-home.webp")], "home"),
    ("why-us",       [os.path.join(US, "hero-why.webp")], "why"),
]

# Panel rect, measured from hero.png's ALPHA, not by eye.
# ⚠️ Opaque runs cols 142..1810, rows 186..1078. An eyeball reading put
# the right edge at 1806; four columns of their orange banner then
# survived every clear and rendered as a stray orange hairline.
PX0, PY0 = 71 * S, 93 * S
PX1, PY1 = 905 * S + 1, 539 * S + 1             # EXCLUSIVE
PW, PH = PX1 - PX0, PY1 - PY0
RADIUS = 6 * S

HEAD_TOP, CHIN, HAIR_RIGHT = 12 * S, 245 * S, 905 * S
CHIN_FRAC = 0.373            # chin height as a fraction of the cutout

# ── THE FIGURES ──────────────────────────────────────────────────────
# Founder, 18 Nov 2026: a DIFFERENT woman on the home, practices and
# about heroes, same style. Care keeps the original (figure.webp).
# Each new one is placed by matching FACE SIZE and FACE POSITION to the
# original, measured on a shared ruler in the finished heroes: the
# original's brow-to-chin is ~210px and her chin sits at y~410, face
# centre x~1335 (2x hero px). ⚠️ NOT hair-top-to-chin: the original has
# a lot of hair and her head is tipped back laughing, so a hair-based
# match made every new face sit ~90px low and the practices one ~28% big.
# Source px per figure: (file, hair top, chin, face centre x, size mult).
# The practices shot is full-length, so her head is small in frame; the
# mult brings her face to the same size, which also keeps her shoulders
# off the bar chart. home + why are 0.92 so their hair clears the top
# edge of the image (at 1.00 it ran ~16px past y=0 and was cut flat).
#   Pexels 1587009  -> figure-home       (folder, navy sweater)
#   Pexels 19989572 -> figure-practices  Weijia MA (navy blazer)
#   Pexels 30479371 -> figure-why        (black blazer)
#   all matted with rembg isnet-general-use; Pexels licence
HEAD_SPAN, FACE_X, CHIN_Y = 427, 1335, 410
FIGS = {
    "home":      ("figure-home.webp",      38, 914, 1025, 0.92),
    "practices": ("figure-practices.webp", 20, 539,  857, 0.69),
    "why":       ("figure-why.webp",       22, 867,  933, 0.92),
}

def place(key):
    if key == "figure":
        return lady, LX, LY
    f, top, chin, cx, mult = FIGS[key]
    im = Image.open(os.path.join(HERE, "assets", f)).convert("RGBA")
    sc = HEAD_SPAN / (chin - top) * mult
    im = im.resize((round(im.width * sc), round(im.height * sc)), Image.LANCZOS)
    return im, round(FACE_X - cx * sc), round(CHIN_Y - chin * sc)

base0 = Image.open(HERO).convert("RGBA").resize((W, H), Image.LANCZOS)
orig = np.array(base0)
lady0 = Image.open(LADY).convert("RGBA")

# the figure is identical on every page, so scale it once
scale = (CHIN - HEAD_TOP) / (lady0.height * CHIN_FRAC)
lw, lh = round(lady0.width * scale), round(lady0.height * scale)
lady = lady0.resize((lw, lh), Image.LANCZOS)
LX, LY = HAIR_RIGHT - lw, HEAD_TOP
print("panel %s %dx%d ratio %.3f | figure %.3f -> %dx%d at (%d,%d)"
      % ((PX0, PY0, PX1, PY1), PW, PH, PW / PH, scale, lw, lh, LX, LY))

# ── the front blobs, computed ONCE: they are identical on every page ──
R, G, B, A = (orig[:, :, i].astype(int) for i in range(4))
yy, xx = np.mgrid[0:H, 0:W]
is_blue = (B - np.maximum(R, G)) > 40
# ⚠️ their model's auburn hair also satisfies "R minus B", so orange is
# only trusted on the left, where the orange blob actually lives.
is_orange = (R - B > 60) & (R > 180) & (xx < 900)
outside_panel = (xx < PX0) | (xx > PX1) | (yy < PY0) | (yy > PY1)
heart = (xx >= 1560) & (yy >= 930)              # overlaps the panel
orange_lip = is_orange & (yy >= PY1 - 24)       # laps the panel's bottom
front = (A > 20) & (is_blue | is_orange) & (outside_panel | heart | orange_lip)

# ⚠️ MORPHOLOGICAL OPENING IS NOT OPTIONAL. The colour key also catches
# HiBob's model's flyaway HAIR where each strand blends into the blue,
# and those strands then paste onto our composite as pale wisps over our
# figure's black top. Erode-then-dilate deletes anything thinner than
# the kernel and leaves the solid shape.
mk = Image.fromarray(np.where(front, 255, 0).astype(np.uint8), "L")
mk = mk.filter(ImageFilter.MinFilter(5)).filter(ImageFilter.MaxFilter(5))
front = np.array(mk) > 127
blob = np.zeros_like(orig)
blob[front] = orig[front]
blob[:, :, 3] = np.array(Image.fromarray(
    np.where(front, 255, 0).astype(np.uint8), "L").filter(ImageFilter.GaussianBlur(0.8)))
blob_img = Image.fromarray(blob, "RGBA")
print("front-blob pixels: %d" % front.sum())

# rounded panel mask, built at 2x and downsampled so the corners are clean
mask = Image.new("L", (PW * 2, PH * 2), 0)
ImageDraw.Draw(mask).rounded_rectangle([0, 0, PW * 2 - 1, PH * 2 - 1], RADIUS * 2, fill=255)
mask = mask.resize((PW, PH), Image.LANCZOS)

fail = 0
for variant, outs, figkey in JOBS:
    src = DASH % variant
    if not os.path.exists(src):
        print("  MISSING dashboard:", src); fail += 1; continue

    base = base0.copy()
    d = ImageDraw.Draw(base)
    # their woman's head is the only part of her outside the panel
    d.rectangle([450 * S, 0, W, PY0], fill=(0, 0, 0, 0))
    # ⚠️ clear the panel rect too. Compositing over the top is not
    # enough: the rounded mask is antialiased, so a ~3px fringe of their
    # banner survives along the right edge and reads as an orange line.
    d.rectangle([PX0 - 2, PY0 - 2, PX1 + 1, PY1 + 1], fill=(0, 0, 0, 0))
    # ⚠️ and the margin right of the panel: their model's hair feathers
    # out past the edge at alpha 8-20. The blue shapes out here come
    # back with the blobs below.
    d.rectangle([PX1, 0, W, H], fill=(0, 0, 0, 0))

    dash = Image.open(src).convert("RGB")
    crop_h = round(dash.width * PH / PW)
    if crop_h > dash.height:
        print("  %s: dashboard too short (%d < %d)" % (variant, dash.height, crop_h))
        fail += 1; continue
    panel = Image.new("RGBA", (PW, PH), (0, 0, 0, 0))
    panel.paste(dash.crop((0, 0, dash.width, crop_h)).resize((PW, PH), Image.LANCZOS), (0, 0))
    panel.putalpha(mask)
    base.alpha_composite(panel, (PX0, PY0))

    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    fig, fx, fy = place(figkey)
    layer.alpha_composite(fig, (fx, fy))
    clip = np.array(layer)
    clip[PY1:, :, 3] = 0                        # cut her at the panel bottom
    if figkey != "figure":
        clip[:, PX1:, 3] = 0                    # and at its right edge
    base.alpha_composite(Image.fromarray(clip, "RGBA"))
    base.alpha_composite(blob_img)

    for out in outs:
        tmp = out + ".tmp.webp"                 # atomic: never a half file
        base.save(tmp, "WEBP", quality=92, method=6)
        os.replace(tmp, out)
        print("  %-14s -> %-58s %7d bytes"
              % (variant, os.path.relpath(out, REPO), os.path.getsize(out)))

print("FAILED" if fail else "all heroes built")
sys.exit(1 if fail else 0)
