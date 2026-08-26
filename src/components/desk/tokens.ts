/*
 * Design tokens for the Desk brand (home page + the two offer pages +
 * Why Novada), rebuilt 2026-08-26 to the Website Rebuild Brief.
 *
 * Ratified visual language: white canvas, brand blue #003DDB, near-black
 * ink, Inter for text, bold condensed caps for display headlines. Lifted
 * from the LinkedIn banner and the two one-pager PDFs, which are the
 * approved reference artefacts.
 *
 * This is deliberately separate from the legacy dark/green system still
 * used by /workforce, /meetings and the older pages. Do not mix them.
 */

export const BLUE = "#003DDB";
export const NAVY = "#0B1E4B";
export const INK = "#0E1116";
export const BODY_TEXT = "#39424E";
export const MUTED = "#5A6676";
export const LINE = "#E2E7EE";
export const TINT = "#F4F6FA";
export const TINT_BLUE = "#D8E1F8";

/* Display headline: bold condensed caps, matching the banner. */
export const DISPLAY =
  "font-condensed font-bold uppercase tracking-[-0.01em] leading-[0.95]";

/* Section heading sizes */
export const H1 = `${DISPLAY} text-[42px] sm:text-[56px] md:text-[72px]`;
export const H2 = `${DISPLAY} text-[32px] sm:text-[40px] md:text-[52px]`;
export const H3 = "text-lg font-semibold text-[#0E1116]";

/* Eyebrow label above headings */
export const EYEBROW =
  "text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-[#003DDB]";

/* Body copy */
export const LEAD = "text-base md:text-lg text-[#39424E] leading-relaxed";
export const BODY = "text-sm md:text-base text-[#39424E] leading-relaxed";
export const SMALL = "text-sm text-[#5A6676] leading-relaxed";

/* Source line printed under every statistic (binding copy rule 6) */
export const SOURCE =
  "text-[11px] uppercase tracking-[0.1em] text-[#8FA0C4] font-medium";

/* Buttons */
export const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-[#003DDB] px-7 py-4 text-sm md:text-base font-semibold text-white transition-all hover:bg-[#0031ae] hover:shadow-[0_10px_30px_rgba(0,61,219,0.25)]";
export const BTN_PRIMARY_SM =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-[#003DDB] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0031ae] whitespace-nowrap";
export const BTN_SECONDARY =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-[#C7D2E8] bg-white px-7 py-4 text-sm md:text-base font-semibold text-[#0B1E4B] transition-colors hover:border-[#003DDB] hover:text-[#003DDB]";

/* Surfaces */
export const CARD =
  "rounded-xl border border-[#E2E7EE] bg-white shadow-[0_1px_2px_rgba(11,30,75,0.04)]";
export const CARD_TINT = "rounded-xl border border-[#E2E7EE] bg-[#F4F6FA]";

/* Layout */
export const SECTION = "px-5 sm:px-8 lg:px-12";
export const CONTAINER = "mx-auto w-full max-w-[1180px]";
