/*
 * Shared Desk layout primitives.
 *
 * Extracted 2026-09-02, when the four remaining legacy pages (/meetings-3,
 * /assessment-calculator, /case-study and /guarantee-terms) were rebuilt in
 * the Desk visual system. The home page and the two offer pages each carry
 * their own private copy of Band/Rail from the original 2026-08-26 build;
 * those were deliberately NOT touched, because they are the live Desk pages
 * and a refactor there buys nothing but regression risk. New pages import
 * from here instead of forking a fifth copy.
 *
 * No "use client" directive: these are pure presentational components with
 * no hooks or handlers, so they render inside server components too. The
 * case-study detail page depends on that.
 *
 * ── WHAT THIS SYSTEM IS ──────────────────────────────────────────────
 * White canvas. A continuous vertical hairline frame (border-x) that runs
 * unbroken down the whole page, so every band shares one rhythm and the
 * page reads as a single ruled document rather than a stack of cards.
 * A numbered index rail on the left of each band whose micro-caps label IS
 * the section's <h2>. Bold condensed caps for display type. Space Grotesk
 * micro-caps, tabular, for anything instrument-like. Inter for body.
 * #003DDB is the accent. Ink #0A0D14 is reserved for "desk moments", the
 * bands where the product itself is being shown.
 *
 * ⚠️ 12px TYPE FLOOR. Nothing that carries meaning may render below 12px.
 * The rail labels are section headings and are the smallest structural
 * type on any Desk page, so the floor is load-bearing, not cosmetic.
 * The legacy pages these four replaced used 9px, 10px and 11px labels.
 */

import type React from "react";

export type Tone = "light" | "tint" | "dark";

/* Layout. Written as complete class strings so the Tailwind scanner sees
   the literal arbitrary values. Never interpolate a colour into a class. */
export const WRAP = "mx-auto w-full max-w-[1240px]";
export const PAD = "px-5 sm:px-8 lg:px-12";
export const BAND_Y = "py-16 md:py-24";

/** Micro-caps interface label. Space Grotesk stands in for a technical grotesk. */
export const MICRO =
  "font-supply text-[12px] font-medium uppercase tracking-[0.14em]";
export const MICRO_SM =
  "font-supply text-[12px] font-medium uppercase tracking-[0.12em]";
/** Any figure a reader might compare to another figure gets tabular nums. */
export const NUM = "font-supply tabular-nums";

export const DISPLAY =
  "font-condensed font-bold uppercase leading-[0.92] tracking-[-0.012em]";

export const BTN_PRIMARY =
  "group inline-flex items-center justify-center gap-2 rounded-[6px] bg-[#003DDB] px-6 py-3.5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#0030AE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2";
export const BTN_GHOST =
  "group inline-flex items-center justify-center gap-2 rounded-[6px] border border-[#D3D8E2] bg-white px-6 py-3.5 text-[14px] font-semibold text-[#0B0E14] transition-colors duration-200 hover:border-[#003DDB] hover:text-[#003DDB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2";
/** On an ink band the primary button inverts, so it still carries the most weight. */
export const BTN_ON_INK =
  "group inline-flex items-center justify-center gap-2 rounded-[6px] bg-white px-6 py-3.5 text-[14px] font-semibold text-[#0A0D14] transition-colors duration-200 hover:bg-[#E8ECF5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0D14]";

export const BODY = "text-[15px] md:text-base leading-relaxed text-[#39424E]";
export const BODY_ON_INK = "text-[15px] md:text-base leading-relaxed text-white/70";

/**
 * The numbered index rail. Its label is rendered as the section's <h2>,
 * which is why it holds the 12px floor: it is a heading, not a decoration.
 * Sticks alongside the band content on large screens so the reader always
 * knows which section they are in.
 */
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
    <div className="lg:sticky lg:top-24 lg:self-start">
      <div className="flex items-center gap-3 lg:block">
        <span className={`${MICRO} ${NUM} ${dark ? "text-white/35" : "text-[#9AA3B1]"}`}>
          {index}
        </span>
        <span
          aria-hidden
          className={`h-px w-6 lg:my-3 lg:h-6 lg:w-px ${
            dark ? "bg-white/15" : "bg-[#E3E6EC]"
          }`}
        />
        <h2 className={`${MICRO} ${dark ? "text-white/75" : "text-[#0B0E14]"}`}>
          {label}
        </h2>
      </div>
    </div>
  );
}

/**
 * One horizontal band. Carries the continuous vertical hairlines and the
 * rail gutter, which is what makes consecutive bands read as one ruled
 * document instead of a stack of unrelated sections.
 */
export function Band({
  id,
  index,
  label,
  tone = "light",
  children,
}: {
  id?: string;
  index: string;
  label: string;
  tone?: Tone;
  children: React.ReactNode;
}) {
  const dark = tone === "dark";
  const surface =
    tone === "dark"
      ? "border-white/10 bg-[#0A0D14]"
      : tone === "tint"
        ? "border-[#E3E6EC] bg-[#F7F8FA]"
        : "border-[#E3E6EC] bg-white";
  return (
    <section id={id} className={`scroll-mt-24 border-t ${surface}`}>
      <div
        className={`${WRAP} ${PAD} ${BAND_Y} border-x ${
          dark ? "border-white/10" : "border-[#E3E6EC]"
        }`}
      >
        <div className="grid gap-8 lg:grid-cols-[124px_minmax(0,1fr)] lg:gap-12">
          <Rail index={index} label={label} tone={tone} />
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}

/**
 * A band with no rail, for full-bleed content that needs the whole
 * measure: a hero, a booking calendar, a closing call to action. Keeps the
 * same vertical hairlines so the frame stays continuous.
 */
export function PlainBand({
  id,
  tone = "light",
  className = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  const dark = tone === "dark";
  const surface =
    tone === "dark"
      ? "border-white/10 bg-[#0A0D14]"
      : tone === "tint"
        ? "border-[#E3E6EC] bg-[#F7F8FA]"
        : "border-[#E3E6EC] bg-white";
  return (
    <section id={id} className={`scroll-mt-24 border-t ${surface}`}>
      <div
        className={`${WRAP} ${PAD} ${className || BAND_Y} border-x ${
          dark ? "border-white/10" : "border-[#E3E6EC]"
        }`}
      >
        {children}
      </div>
    </section>
  );
}

/**
 * Section headline inside a band. Sized to sit under a rail label without
 * competing with the page's single <h1>, so it renders as a <p>: the rail
 * label above it is already the semantic <h2>.
 */
export function BandTitle({
  tone = "light",
  className = "",
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <p
      className={`${DISPLAY} text-[30px] sm:text-[38px] md:text-[46px] ${
        dark ? "text-white" : "text-[#0A0D14]"
      } ${className}`}
    >
      {children}
    </p>
  );
}

/** Small sourced/legal note. Never below 12px. */
export function Note({
  tone = "light",
  className = "",
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <p
      className={`text-[12px] leading-relaxed ${
        dark ? "text-white/45" : "text-[#788899]"
      } ${className}`}
    >
      {children}
    </p>
  );
}
