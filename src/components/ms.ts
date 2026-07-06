/*
 * Morningside design-language tokens — measured from morningside.ai
 * (see home page header comment for the full audit). Shared by every
 * main-site page so the system stays consistent.
 */

/** Page wrapper: flat near-black + Poppins light type */
export const MS_PAGE = "bg-[#080808] font-poppins";

/** Signature green */
export const MS_GREEN = "#0CC481";

/** Warm off-white body-text token */
export const MS_OFFWHITE = "#EDECE4";

/** Gradient heading text (white → green). Add pb-1/pb-2 on the element so
 *  bg-clip-text doesn't crop descenders. */
export const GRAD_TEXT =
  "bg-gradient-to-r from-white to-[#0CC481] bg-clip-text text-transparent";

/** Primary button: white rectangle, black uppercase Space Grotesk */
export const BTN_WHITE =
  "font-supply inline-flex items-center gap-2 rounded bg-white px-6 py-3 text-sm font-medium uppercase tracking-[0.1em] text-black transition-colors hover:bg-white/85";

/** Green uppercase arrow link */
export const LINK_GREEN =
  "font-supply inline-flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-[#0CC481] hover:text-white transition-colors";

/** Muted uppercase arrow link */
export const LINK_MUTED =
  "font-supply inline-flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-[#EDECE4]/60 hover:text-[#0CC481] transition-colors";

/** Small-caps section label */
export const MS_LABEL =
  "font-supply text-xs uppercase tracking-[0.2em] text-[#EDECE4]/40";

/** Card surface: 12px radius, hairline border, 135° dark gradient */
export const MS_CARD =
  "rounded-xl border border-[#EDECE4]/[0.06] bg-gradient-to-br from-[#111413] to-[#050808]";

/** Teal-green hero wash (place absolute inside a relative hero section) */
export const HERO_WASH =
  "absolute inset-x-0 top-0 h-[70vh] bg-[linear-gradient(180deg,#0F1C1C_0%,rgba(8,8,8,0)_100%)] pointer-events-none";

/** Deep green glow rising from the bottom (closers / pinned sections) */
export const GLOW_BOTTOM =
  "absolute inset-0 bg-[linear-gradient(0deg,rgba(11,109,74,0.5)_0%,rgba(11,109,74,0)_50%)] pointer-events-none";

/** Giant italic gradient numeral (static above content on mobile,
 *  absolutely positioned by the caller on md+) */
export const MS_NUMERAL =
  "font-poppins italic font-extralight text-[88px] md:text-[160px] leading-none bg-gradient-to-b from-[#12513c] to-[#0CC481] bg-clip-text text-transparent select-none px-4 md:px-6 block md:absolute md:top-1/2 md:-translate-y-1/2 z-0";
