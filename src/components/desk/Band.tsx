/*
 * The band: one horizontal section of a Desk page, with the index rail
 * down its left edge and the continuous hairline frame down both sides.
 *
 * Server components, no state, no motion. Extracted 16 September 2026
 * from three near-identical private copies in src/app/page.tsx,
 * src/components/desk/ServicePage.tsx and src/app/why-novada/page.tsx,
 * which had already drifted apart on padding and on the rail width.
 *
 * ⚠️ THE RAIL LABEL IS THE SECTION'S <h2>. That is the whole heading
 * structure of a Desk page: h1 in the hero, h2 in each rail, h3 for the
 * section's display headline, h4 below it. Do not add a competing h2.
 */

import {
  BAND_Y,
  BAND_Y_TIGHT,
  D2,
  FRAME,
  GUTTER,
  /* Aliased: the legacy block at the foot of this file exports MICRO
     and NUM under their ORIGINAL Space Grotesk definitions, for the six
     sealed pages that still import them from here. */
  MICRO as T_MICRO,
  NUM as T_NUM,
  RAIL_GRID,
} from "./tokens";

export type Tone = "light" | "tint" | "dark";

export function Rail({
  index,
  label,
  tone = "light",
}: {
  index: string;
  label: string;
  tone?: Tone;
}) {
  const dark = tone === "dark";
  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      <div className="flex items-center gap-3 lg:block">
        <span
          className={`${T_MICRO} ${T_NUM} ${dark ? "text-white/55" : "text-ink-400"}`}
        >
          {index}
        </span>
        <span
          aria-hidden
          className={`h-px w-6 lg:my-3 lg:h-6 lg:w-px ${
            dark ? "bg-white/20" : "bg-ink-200"
          }`}
        />
        <h2 className={`${T_MICRO} ${dark ? "text-white/85" : "text-ink-950"}`}>
          {label}
        </h2>
      </div>
    </div>
  );
}

export function Band({
  id,
  index,
  label,
  tone = "light",
  tight = false,
  children,
}: {
  id?: string;
  index: string;
  label: string;
  tone?: Tone;
  tight?: boolean;
  children: React.ReactNode;
}) {
  const dark = tone === "dark";
  const surface =
    tone === "dark"
      ? "border-white/10 bg-canvas-ink"
      : tone === "tint"
        ? "border-ink-100 bg-ink-50"
        : "border-ink-100 bg-white";
  return (
    <section id={id} className={`border-t ${surface}`}>
      <div
        className={`${FRAME} ${GUTTER} ${tight ? BAND_Y_TIGHT : BAND_Y} border-x ${
          dark ? "border-white/10" : "border-ink-100"
        }`}
      >
        <div className={RAIL_GRID}>
          <Rail index={index} label={label} tone={tone} />
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}

/** The section's display headline. Always an h3: the rail label is the h2. */
export function BandHeading({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <h3 className={`${D2} max-w-headline ${dark ? "text-white" : "text-ink-950"}`}>
      {children}
    </h3>
  );
}

/**
 * The statement device: a short, heavy sentence on an ink surface with
 * the brand rule down its left edge. Used for the proof claim and for
 * the recognisable moment on each service page. Deliberately scarce.
 */
export function Statement({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-statement border-l-2 border-brand-400 pl-6 text-2xl font-medium text-white">
      {children}
    </p>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   LEGACY TOKENS, AUSTRALIAN DOMAIN ONLY.

   ⚠️ DO NOT USE THESE IN NEW WORK, and do not "tidy" them into the new
   tokens. They are the ORIGINAL definitions, kept byte for byte, because
   six pages still import them from this file and must keep rendering
   exactly as they do today:

     /book                     the shareable booking link
     /meetings-3               a live paid lander for the Growth
                               Infrastructure offer (noindex, guarantee
                               headline). Ads point at it.
     /confirmed-call           its conversion page
     /case-study               linked from /confirmed-call
     /guarantee-terms          the written terms of a live guarantee
     /assessment-calculator    the after-hours sales-call tool

   Those pages belong to a different business line and are deliberately
   sealed from the desk architecture rather than rebuilt in it. New desk
   pages import from @/components/desk/tokens instead.

   ⚠️ MICRO and NUM here are font-supply (Space Grotesk). The desk system
   uses Inter. That difference is the whole reason these cannot be
   aliased onto the new tokens.
   ══════════════════════════════════════════════════════════════════════ */

export const WRAP = "mx-auto w-full max-w-[1240px]";
export const PAD = "px-5 sm:px-8 lg:px-12";
export const MICRO =
  "font-supply text-[12px] font-medium uppercase tracking-[0.14em]";
export const MICRO_SM =
  "font-supply text-[12px] font-medium uppercase tracking-[0.12em]";
export const NUM = "font-supply tabular-nums";
export const DISPLAY =
  "font-condensed font-bold uppercase leading-[0.92] tracking-[-0.012em]";
export const BTN_PRIMARY =
  "group inline-flex items-center justify-center gap-2 rounded-[6px] bg-[#003DDB] px-6 py-3.5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#0030AE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2";
export const BTN_GHOST =
  "group inline-flex items-center justify-center gap-2 rounded-[6px] border border-[#D3D8E2] bg-white px-6 py-3.5 text-[14px] font-semibold text-[#0B0E14] transition-colors duration-200 hover:border-[#003DDB] hover:text-[#003DDB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2";
