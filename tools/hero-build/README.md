# Hero build

Builds the hero image for every page on both sites. Not part of the Next
build: run it by hand when a hero needs to change, then commit the
`.webp` files it writes.

## What a hero is made of

```
hero.png  ──►  frame: HiBob's layout, blobs, placement, colours  ── UNCHANGED
dash/out  ──►  the dashboard inside the panel                    ── per page
assets/   ──►  the figure                                        ── per page (18 Nov)
```

Only the dashboard changes between pages. The frame and the figure are
identical site-wide, which is why there is one base image and not seven.

### 🔴 The blob artwork is still HiBob's

Two of the three rights that mattered are gone: their model's likeness,
and their dashboard UI. **The blob shapes are not.** This was raised with
the founder on 17 Nov 2026 and they chose to keep the design. Do not
record these files as fully cleared, and do not "clean them up" without
asking.

### ⚠️ The Pexels licence forbids implying endorsement

The figure is Pexels **35696305** (Tran Nhu Tuan, @kooldark). Free for
marketing, modification allowed, no attribution required, but: *"don't
imply endorsement of your product by people or brands."* She appears
beside the product, unnamed and unquoted. **Never place this image next
to a testimonial, a name or a quotation.**

## The figures (18 Nov 2026)

Founder: a different woman on the home, practices and about heroes, same
style. Care keeps `figure.webp` (Pexels 35696305). The others, all Pexels
licence, matted with rembg `isnet-general-use` (flood-fill left white
halos in the hair):

| page | file | Pexels |
|---|---|---|
| home | `figure-home.webp` | 1587009 |
| practices | `figure-practices.webp` | 19989572, Weijia MA |
| about | `figure-why.webp` | 30479371 |

⚠️ Placed by FACE size and position (brow-to-chin ~210px, chin y~410,
face centre x~1335), not hair-top-to-chin: the original's hair volume
made the first attempt put every new face ~90px low. ⚠️ A close-up shot
does not work: it ends mid-panel. Pick waist-up framing.

rembg's model download fails behind the TLS proxy; fetch
`isnet-general-use.onnx` with curl into `~/.u2net/`.

## The four screens

Each page shows a different screen of the same product, so the site does
not repeat one picture eight times.

| screen | pages | main panel |
|---|---|---|
| Overview | `/care/ai-workforce` (+ `/lp`) | the agent list |
| Patient Access | `/practices/ai-workforce` | the agent list |
| Work queue | `/` | a task table |
| Audit trail | `/why-novada` | a log table |

Each has its own nav selection, headline, KPI set and panel *type*, in
AU and US variants. Defined in `dash/variants.js`.

## Running it

```sh
node dash/render.mjs          # variants.js -> dash/out/*.png  (2880x2160)
python dash/metrics.py        # calibration: care-au-calib vs the Figma export
python hero_build_all.py      # composites -> public/ai-workforce/*.webp
node verify_all.mjs <base-url> '{"/":"hero-home.webp", ...}'
```

`render.mjs` needs `playwright-core`; it borrows the copy inside the
Playwright MCP package. Set `PLAYWRIGHT_CORE` if that moves.

## Adding a page

1. Add a variant to `dash/variants.js`.
2. Add it to `JOBS` in `hero_build_all.py`.
3. Run the four commands above.
4. Point the page's `<img>` at the new file.

Keep the headline under about 30 characters and the subtitle under about
55. **Anything past x≈660 in the 1440-wide dashboard runs under the
figure's hair.** Every subtitle in the first draft was too long.

## Things that cost a day

- **Measure, don't look.** `dash/metrics.py` compares the replica to
  Novada's Figma export on ink bounding boxes and card edges. Eyeballing
  a side-by-side had the h1 13% too wide and the filter stack sitting on
  top of two KPI cards; both looked fine until measured. Everything is
  now within 1–2px.
- **Only the top 770px of the dashboard ever ships**, and the figure
  covers x≥700. The message has to live in the top-left. The bottom card
  in the Figma original is invisible on the web.
- **Measure the panel from the alpha, never by eye.** Opaque runs cols
  142..1810 at 2x. An eyeball reading said 1806, and four columns of
  HiBob's orange banner survived every clear as a stray orange hairline
  down the panel edge.
- **Their model's hair feathers past the panel** at alpha 8–20, so the
  whole right margin is cleared and the blue shapes repainted over it.
- **Restoring those blobs by colour key drags in her flyaway hair**,
  which lands on our figure as pale wisps. The morphological opening in
  `hero_build_all.py` deletes anything thinner than the kernel. It is
  not optional.
- **`ImageDraw.floodfill` is a silent no-op on an `"L"` image** in
  Pillow 12.3. `cutout.py` carries its masks as RGB for that reason.
- **`NODE_PATH` does not apply to ESM imports**, only to CJS resolution.
- **Do not use the Playwright MCP here.** It hangs silently, ~30 min per
  call. `render.mjs` drives playwright-core directly.
- `hero.png` is no longer referenced by any page, but it is the base
  every hero is built from. Do not delete it. `hero-practices.png` is
  the same picture with different banner wording (1,895 pixels) and is
  no longer needed.

## Naming (18 Nov 2026)

The founder renamed the product: **AI employees / AI workforce -> AI
Operations Agents**, care roles **Coordinator -> Agent** (the operations
role is **Operations Lead Agent**, so it does not collide with the product
name), and every practice role gains **Agent**. The dashboards follow.

The Figma export still carries the old names, so **every hero, AU care
included, now ships from the replica**. `care-au-calib` is the untouched
copy kept only for `metrics.py`; never ship it.

## Known defect in the source dashboard

The Figma export has the **HR Coordinator row's status label
overflowing**: it reads "Active · writes he", clipped mid-word at the
card edge, chevron over the text, status dot detached. The HTML replica
does not have this bug, so nothing built here shows it, but the Figma
file is still wrong and will show it anywhere else that export is used.
