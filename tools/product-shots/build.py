"""Cut Novada's own product screens into the website's feature visuals.

Run `node patches.mjs` first, then `python build.py`.
Writes novada-website/public/product/*.webp (AU site only, see README).

Every crop is snapped to a real card's border in the Figma export, so
each shot is one whole card, never a slice through the middle of one.
"""
import os
import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "source")
OUT = os.path.join(HERE, "..", "..", "public", "product")
PATCH = os.path.join(HERE, "out")
os.makedirs(OUT, exist_ok=True)

WHITE = (255, 255, 255)

# ── Label patches: (file, cover rect, fill, patch id, ink top-left) ──
# The cover rect paints out the old label; the patch is pasted so that
# its own ink top-left lands on the ORIGINAL ink top-left, which keeps
# the baseline without guessing at font metrics.
PATCHES = {
    "task-execution.png": [
        ((646, 1736, 792, 1756), WHITE, "actor", (649, 1740)),
        ((646, 1798, 792, 1818), WHITE, "actor", (649, 1802)),
        ((646, 1860, 792, 1880), WHITE, "actor", (649, 1864)),
    ],
    "exceptions.png": [
        # text 670..763 and the caret at 774..776; caret is moved to sit
        # the same 11px after the shorter label
        ((667, 645, 780, 665), WHITE, "filter", (670, 649)),
    ],
    "tasks.png": [
        ((630, 706, 715, 722), (248, 250, 253), "header", (634, 710)),
    ],
}

def ink_box(im):
    a = np.asarray(im)[:, :, 3]
    ys, xs = np.where(a > 90)
    return xs.min(), ys.min()

def patched(name):
    im = Image.open(os.path.join(SRC, name)).convert("RGB")
    caret = None
    if name == "exceptions.png":
        caret = im.crop((772, 650, 779, 660))
    for rect, fill, pid, (tx, ty) in PATCHES.get(name, []):
        im.paste(fill, rect)
        p = Image.open(os.path.join(PATCH, f"patch-{pid}.png")).convert("RGBA")
        ix, iy = ink_box(p)
        im.alpha_composite if False else None
        base = im.convert("RGBA")
        base.alpha_composite(p, (tx - ix, ty - iy))
        im = base.convert("RGB")
        if caret is not None and pid == "filter":
            a = np.asarray(p)[:, :, 3]
            right = tx - ix + np.where(a.max(0) > 90)[0].max()
            im.paste(caret, (right + 11 - 2, 650))
    return im

# ── The shots: name -> (source, crop box) ─────────────────────────────
SHOTS = {
    # care: "Completes the work instead of flagging it"
    "care-execution":   ("task-execution.png", (285, 526, 993, 1294)),
    "care-policy":      ("task-execution.png", (1013, 780, 1389, 1063)),
    # care: "Shows every action in one place"
    "care-tasks":       ("tasks.png", (284, 608, 972, 1266)),
    # care: "Runs on the software you already pay for"
    "care-coverage":    ("rostering.png", (285, 557, 983, 976)),
    "care-systems":     ("agent-profile.png", (1025, 817, 1389, 1017)),
    # home: the work queue section
    "home-exceptions":  ("exceptions.png", (285, 488, 983, 1107)),
    "home-recovery":    ("exceptions.png", (1004, 812, 1389, 1046)),
    # why-novada: the activity record
    "why-history":      ("task-execution.png", (285, 1613, 925, 1971)),
    "why-confirmation": ("task-execution.png", (1013, 1081, 1389, 1294)),
}

cache = {}
for name, (src, box) in SHOTS.items():
    if src not in cache:
        cache[src] = patched(src)
    shot = cache[src].crop(box)
    out = os.path.join(OUT, name + ".webp")
    shot.save(out, "WEBP", quality=90, method=6)
    shot.save(os.path.join(PATCH, name + ".png"))
    print("  %-18s %4dx%-4d %6d bytes" % (name, shot.width, shot.height, os.path.getsize(out)))
print("product shots built")
