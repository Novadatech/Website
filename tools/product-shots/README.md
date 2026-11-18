# Product shots

Cuts Novada's own product screens (the Figma exports) into the feature
visuals on the AU site. Founder instruction, 18 Nov 2026: use the real
product in the sections that showed drawn mock windows, and keep the
floating cards ("85% onboarding", "Overnight handover sent") over them.

```sh
node patches.mjs    # renders the replacement labels in DM Sans -> out/
python build.py     # patches, crops -> public/product/*.webp
```

`source/` holds the five exports used, copied from the offer folder
(`Care Offer UPDATED November 2026/Novada AI Workforce/Figma Design`).

## Where each shot goes

| page | section | main screen | floating screen |
|---|---|---|---|
| `/care/ai-workforce` (+ `/lp`) | Completes the work | execution timeline | policy validation |
| | Shows every action | task table | (85% + handover cards) |
| | Runs on your software | shift coverage by day | connected systems |
| `/` | Every action, visible | exception queue | recovery attempted |
| `/why-novada` | What was done, who approved | state history | source confirmation |

## 🔴 AU only, and care only

Every export is an **Australian care** screen: SIL, AEDT, rostering,
ShiftCare, 2:1 ratios. So:

- **Never on a practices page.** There are no practices screens yet;
  those pages keep their drawn visuals.
- **Never on novadatech.com.** The US site says scheduling, not
  rostering, and has no SIL or AEDT.

## ⚠️ The exports predate the rename

They still say "AI WORKFORCE", "AI Employees" and "Coordinator". The
crops are chosen to avoid most of it, and `build.py` repaints the rest:

- "All AI employees" filter -> "All agents" (caret moved to match)
- "AI EMPLOYEE" column header -> "AGENT"
- "AI Rostering Coordinator" x3 in the state history -> "AI Rostering Agent"

**The face is DM Sans, measured, not guessed.** Scored pixel-for-pixel
against the export, DM Sans 400 12px came out at 7.9 mean error; the next
best (Plus Jakarta) at 12.5. Patches are pasted on the original ink's
top-left, so no font-metric guessing. The header needed weight 600 at
12px to match its neighbours' ink density and cap height; 500 at 11px
looked visibly lighter.

The real fix is upstream: rename in Figma and re-export, then the patch
list can go.

## Things to know

- Crops are snapped to each card's border, so a shot is one whole card.
- The exports are 1x. Shots render at 0.7-0.75x on desktop (crisp) but
  ~1.3x on a retina screen. **2x exports from Figma would sharpen them.**
- The data is invented (Harmony Community Care, Jordan Davies), so every
  visual carries "Example screen. The provider, people and figures are
  illustrative." Keep it.
- The smaller floating screen in each visual is `hidden sm:block`: at
  390px it would cover most of the main one.
