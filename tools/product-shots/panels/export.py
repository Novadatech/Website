"""Copy the rendered replica cards into each site as WebP.

Run after `node panels/render.mjs`. The names match the AU care shots
(build.py), so a page imports the same file name on either site:

  novada-website  /public/product/practices-*.webp       (practices-au)
  novadatech-com  /public/product/care-*, home-*, why-*   (care-us)
                  /public/product/practices-*.webp        (practices-us)

The cards are rendered at 2x, so these are sharper than the AU care
shots, which come from 1x Figma exports.
"""
import os
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "..", "out", "panels")
REPO = os.path.abspath(os.path.join(HERE, "..", "..", "..", ".."))
AU = os.path.join(REPO, "novada-website", "public", "product")
US = os.path.join(REPO, "novadatech-com", "public", "product")

CARE = {"timeline": "care-execution", "checklist": "care-policy", "table": "care-tasks",
        "bars": "care-coverage", "systems": "care-systems", "queue": "home-exceptions",
        "recovery": "home-recovery", "history": "why-history", "confirmation": "why-confirmation"}
PRAC = {"timeline": "practices-calls", "checklist": "practices-policy", "table": "practices-tasks",
        "bars": "practices-refills", "systems": "practices-systems"}

JOBS = [("care-us", CARE, US), ("practices-au", PRAC, AU), ("practices-us", PRAC, US)]

for variant, names, dest in JOBS:
    os.makedirs(dest, exist_ok=True)
    for panel, name in names.items():
        im = Image.open(os.path.join(SRC, f"{variant}-{panel}.png")).convert("RGB")
        out = os.path.join(dest, name + ".webp")
        im.save(out, "WEBP", quality=88, method=6)
        print("  %-13s %-13s -> %-16s %4dx%-4d %6d bytes" % (
            variant, panel, os.path.relpath(out, REPO).split(os.sep)[0], im.width, im.height, os.path.getsize(out)))
print("replica cards exported")
