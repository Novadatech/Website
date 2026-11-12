import { Bitter } from "next/font/google";

/*
 * ══════════════════════════════════════════════════════════════════════
 * THE LANDING-PAGE SERIF. ONE DECLARATION FOR THE WHOLE SITE.
 *
 * `SERIF` in src/components/lp/kit.tsx resolves var(--font-lp-serif),
 * which this sets.
 *
 * 🔴 DECLARE IT ONCE, HERE. IT USED TO BE DECLARED IN SEVEN FILES AND
 * THAT BROKE THE BUILD. Every one of them called Bitter() with these
 * exact options, and every one of their comments said next/font dedupes
 * it. It dedupes the font FILE served to the browser; it does not merge
 * the BUILD-TIME fetches to fonts.googleapis.com. Seven of those race,
 * Google rejects one, the loader regexes a response that is not CSS,
 * the match comes back null, and the build dies with
 *
 *   An error occurred in `next/font`.
 *   TypeError: Cannot read properties of null (reading '1')
 *
 * naming whichever file lost the race, which is never the file anyone
 * just changed. It failed in src/app/page.tsx and then in
 * practices/ai-workforce/confirmed/layout.tsx on the SAME commit, twice
 * in a row, on 13 November 2026.
 *
 * ⚠️ SO DO NOT ADD AN EIGHTH Bitter() ANYWHERE. Import this instead. If
 * you need a different weight or subset, add it here, to this one call.
 *
 * ══════════════════════════════════════════════════════════════════════
 * ⚠️ THIS IS STILL NOT DECLARED IN src/app/layout.tsx, AND MUST NOT BE.
 * That is a separate rule and it still holds. The root layout is
 * inherited by every page, so a font declared there is downloaded
 * site-wide. What keeps this face off the routes that do not use it is
 * not where it is declared: it is that only those routes apply
 * `lpSerif.variable` to a wrapper element. Declaring it here changes
 * nothing about that.
 *
 * 🔴 A ROUTE THAT FORGETS TO APPLY IT STILL COMPILES AND STILL RENDERS.
 * var(--font-lp-serif) resolves to nothing, every heading falls back to
 * Georgia, and the page looks nearly right. Only a computed-style check
 * catches it:
 *
 *   getComputedStyle(document.querySelector("h1")).fontFamily
 *
 * must match /Bitter/.
 * ══════════════════════════════════════════════════════════════════════
 */
export const lpSerif = Bitter({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-lp-serif",
});
