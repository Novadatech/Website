"""Measure the real Figma export and the HTML replica THE SAME WAY.

Eyeballing a side-by-side is how the H1 ended up 13% too wide and the
filter stack ended up on top of the KPI cards. Every number below is an
ink bounding box or a colour transition, so the two are comparable and
the deltas are the correction to apply.
"""
import os
import sys
import numpy as np
from PIL import Image

# Ground truth: Novada's own Figma export, kept beside this
# script so the calibration can be re-run. Override with
# the FIGMA_EXPORT environment variable.
REAL = os.environ.get("FIGMA_EXPORT", os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "reference", "01-overview-current.png"))


def load(p):
    im = Image.open(p).convert("RGB")
    if im.size != (1440, 1080):                 # the replica renders at 2x
        im = im.resize((1440, 1080), Image.LANCZOS)
    return np.array(im).astype(int)


def ink(a, x0, y0, x1, y1, thr=140):
    m = a[y0:y1, x0:x1].sum(axis=2) < thr * 3
    ys, xs = np.nonzero(m)
    if not len(xs):
        return None
    return (x0 + int(xs.min()), y0 + int(ys.min()),
            x0 + int(xs.max()), y0 + int(ys.max()))


def first_border(a, x, y0, y1, col=(228, 233, 242), tol=14):
    """⚠️ TOLERANCE IS NOT OPTIONAL. The replica renders at 2x and is
    downsampled, so a 1px #E4E9F2 border never lands on that exact
    triple; an equality test reports None and reads as 'no card'."""
    for y in range(y0, y1):
        if max(abs(int(a[y, x][i]) - col[i]) for i in range(3)) <= tol:
            return y
    return None


def box(a, x0, y0, x1, y1, thr=200):
    """bounding box of anything NOT near-white - used for the avatars"""
    m = a[y0:y1, x0:x1].sum(axis=2) < thr * 3
    ys, xs = np.nonzero(m)
    if not len(xs):
        return None
    return (x0 + int(xs.min()), y0 + int(ys.min()),
            x0 + int(xs.max()), y0 + int(ys.max()))


def metrics(a):
    h1 = ink(a, 284, 136, 980, 184)
    av1 = box(a, 304, 450, 345, 505)
    av2 = box(a, 304, 506, 345, 561)
    return {
        "eyebrow ink top": ink(a, 284, 108, 700, 134, 170),
        "h1 ink": h1,
        "h1 width": (h1[2] - h1[0]) if h1 else None,
        "h1 cap h": (h1[3] - h1[1]) if h1 else None,
        "subtitle ink": ink(a, 284, 184, 900, 212, 170),
        "chip row top": first_border(a, 1240, 130, 186),
        "health pill top": first_border(a, 1380, 184, 232),
        "kpi card top": first_border(a, 300, 210, 300),
        "kpi card bottom": first_border(a, 300, 340, 372),
        "main card top": first_border(a, 300, 360, 400),
        "card title ink": ink(a, 304, 388, 700, 420),
        "avatar 1 box": av1,
        "avatar 1 size": (av1[3] - av1[1]) if av1 else None,
        "row pitch": (av2[1] - av1[1]) if av1 and av2 else None,
    }


real = metrics(load(REAL))
rep = metrics(load(sys.argv[1] if len(sys.argv) > 1 else "out/care-au.png"))

print("%-18s %-26s %-26s %s" % ("METRIC", "REAL", "REPLICA", "DELTA"))
for k in real:
    r, p = real[k], rep[k]
    d = ""
    if isinstance(r, int) and isinstance(p, int):
        d = "%+d" % (p - r)
    elif isinstance(r, tuple) and isinstance(p, tuple):
        d = "y%+d x%+d" % (p[1] - r[1], p[0] - r[0])
    flag = "   <-- FIX" if d and d not in ("+0", "y+0 x+0") and \
        any(abs(int(n)) > 2 for n in d.replace("y", "").replace("x", "").split()) else ""
    print("%-18s %-26s %-26s %s%s" % (k, r, p, d, flag))
