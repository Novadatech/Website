/*
 * ══════════════════════════════════════════════════════════════════════
 * THE DESK SYSTEM. One file. Every page imports from here.
 *
 * Rebuilt 16 September 2026. Before that, the homepage, the two service
 * pages, Why Novada, the two legal pages and the confirmation page each
 * declared their OWN copy of WRAP, PAD, BAND, MICRO, DISPLAY and
 * BTN_PRIMARY, with slightly different values. That is why the site had
 * three heading sizes for the same role and four greys for the same
 * meaning. A token that is copy-pasted is not a token.
 *
 * The primitive values (type scale, colour ramp, spacing, radii,
 * shadows, easing) live in tailwind.config.ts. This file composes them
 * into the roles the pages actually use. Nothing here invents a value.
 *
 * ⚠️ WRITE COMPLETE CLASS STRINGS. Tailwind scans source text, so a
 * colour interpolated into a template literal produces no CSS.
 * ══════════════════════════════════════════════════════════════════════
 */

/* ── THE FRAME ─────────────────────────────────────────────────────────
 * 1240px, and the nav, the status strip, every band, the footer and the
 * sticky bar all use it, so the 1px hairline runs unbroken down both
 * edges of the page from the top to the bottom.
 *
 * ⚠️ THE STICKY BAR WAS 1180 UNTIL 16 SEPTEMBER 2026, so the one
 * component that floats over the whole page sat 30px inboard of the
 * frame everything else shares. Keep these equal.
 * ──────────────────────────────────────────────────────────────────── */
export const FRAME = "mx-auto w-full max-w-frame";
export const GUTTER = "px-5 sm:px-8 lg:px-12"; // 20 / 32 / 48
/** Both together, for the common case. */
export const SHELL = `${FRAME} ${GUTTER}`;

/* Vertical rhythm. One value per role, used everywhere. 64 / 96 / 128. */
export const BAND_Y = "py-16 md:py-24 lg:py-32";
export const BAND_Y_TIGHT = "py-12 md:py-20";
/* The hero runs tighter at the top (it sits under the status strip) and
   deeper at the bottom, so the fold holds the offer, the action and the
   qualifier on a 390px screen without scrolling. */
export const HERO_Y = "pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-32";

/* The index rail column that runs down the left of every band. */
export const RAIL_GRID =
  "grid gap-8 lg:grid-cols-[124px_minmax(0,1fr)] lg:gap-12";

/* ── TYPE ─────────────────────────────────────────────────────────────
 * Sizes carry their own line-height and tracking from the config, so a
 * call site sets a role, not three properties.
 * ──────────────────────────────────────────────────────────────────── */

/** Display face. Always paired with text-d1 … text-d4. */
export const DISPLAY = "font-condensed font-bold uppercase";
export const D1 = `${DISPLAY} text-d1`;
export const D2 = `${DISPLAY} text-d2`;
export const D3 = `${DISPLAY} text-d3`;
export const D4 = `${DISPLAY} text-d4`;

/**
 * Micro-caps interface label. 12px is the floor site-wide and this is
 * it: rail labels, eyebrows, chips, captions. Set in Inter since
 * 16 September 2026, which removed the site's third font family.
 */
export const MICRO = "text-xs font-semibold uppercase tracking-caps";
export const MICRO_TIGHT = "text-xs font-semibold uppercase tracking-caps-tight";
/** Any figure a reader might compare to another figure. */
export const NUM = "tabular";

/* Body. Measure is capped in the class so no paragraph can run long. */
export const LEAD = "max-w-prose text-lg text-ink-600";
export const BODY = "max-w-prose text-base text-ink-600";
export const BODY_INK = "max-w-prose text-base text-ink-950";
export const SMALL = "text-sm text-ink-500";

/* ── SURFACES ────────────────────────────────────────────────────────── */
export const SURFACE_LIGHT = "border-ink-100 bg-white";
export const SURFACE_TINT = "border-ink-100 bg-ink-50";
export const SURFACE_INK = "border-white/10 bg-canvas-ink";

export const CARD = "rounded-lg border border-ink-200 bg-white shadow-raise";
export const CARD_TINT = "rounded-lg border border-ink-100 bg-ink-50";

/* ── ACTIONS ──────────────────────────────────────────────────────────
 * 48px minimum height on the primary action, everywhere, on every
 * breakpoint. Hover changes colour and depth only: a button that jumps
 * under the cursor is a button that gets mis-clicked on a trackpad.
 * ──────────────────────────────────────────────────────────────────── */
export const BTN_PRIMARY =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-brand-500 px-6 text-sm font-semibold text-white shadow-cta transition-[background-color,box-shadow] duration-150 ease-standard hover:bg-brand-600 hover:shadow-lift";
/** The nav-sized action on graphite. Same inversion, same reason. */
export const BTN_ON_INK_SM =
  "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-white px-4 text-sm font-semibold text-ink-950 transition-colors duration-150 ease-standard hover:bg-brand-100";

export const BTN_PRIMARY_SM =
  "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-brand-500 px-4 text-sm font-semibold text-white transition-colors duration-150 ease-standard hover:bg-brand-600";
export const BTN_SECONDARY =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-ink-200 bg-white px-6 text-sm font-semibold text-ink-950 transition-colors duration-150 ease-standard hover:border-brand-500 hover:text-brand-500";

/**
 * THE ACTION ON A GRAPHITE SURFACE. Added 16 September 2026 with the ink
 * hero.
 *
 * ⚠️ DO NOT USE BTN_PRIMARY ON AN INK SURFACE. brand-500 is #003DDB and
 * canvas-ink is #0A0D14. That is 1.9:1, a dark blue button on a nearly
 * black ground, invisible to anyone not looking straight at it. The
 * scarce colour has to invert on this surface: the button becomes the
 * lightest thing on the screen, which is also what makes it the first
 * thing the eye lands on.
 */
export const BTN_ON_INK =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-white px-6 text-sm font-semibold text-ink-950 shadow-cta transition-[background-color,box-shadow] duration-150 ease-standard hover:bg-brand-100 hover:shadow-lift";

/** Text link that reads as an action. Underline is the affordance. */
export const LINK_ACTION =
  "group inline-flex items-center gap-2 self-start border-b border-ink-200 pb-1 text-sm font-semibold text-brand-500 transition-colors duration-150 hover:border-brand-500";

/* On an ink surface the focus ring has to change or it disappears into
   the background. Applied as an inline style variable. */
export const INK_FOCUS = { "--focus-ring": "#A6BEFF" } as Record<string, string>;

/* ── LEGACY ───────────────────────────────────────────────────────────
 * Older routes import these names. Kept as aliases onto the system above
 * so nothing renders off-palette. Do not use them in new work.
 * ──────────────────────────────────────────────────────────────────── */
export const BLUE = "#003DDB";
export const NAVY = "#0B1E4B";
export const INK = "#0B0E14";
export const BODY_TEXT = "#454E5C";
export const MUTED = "#5B6472";
export const LINE = "#E3E6EC";
export const TINT = "#F7F8FA";
export const TINT_BLUE = "#DCE6FF";
export const H1 = D1;
export const H2 = D2;
export const H3 = "text-lg font-semibold text-ink-950";
export const EYEBROW = `${MICRO} text-brand-500`;
export const SOURCE = `${MICRO_TIGHT} text-ink-400`;
export const SECTION = GUTTER;
export const CONTAINER = FRAME;
