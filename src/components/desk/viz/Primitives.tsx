/*
 * ══════════════════════════════════════════════════════════════════════
 * THE VIZ PRIMITIVES. Server components, no state, no client JavaScript.
 *
 * Every device in this folder is built from these pieces, so the three of
 * them cannot drift into three different card treatments the way the
 * pages did before 16 September 2026.
 *
 * ⚠️ THE RULE THIS FILE EXISTS TO ENFORCE
 *
 * A figure on this site must carry its source in the same block as the
 * figure. That was a house rule kept by remembering it. Here it is kept
 * by the type system: <Stat> has a REQUIRED `source` prop, so a number
 * cannot be rendered on this site without one, and a missing source is a
 * build error rather than a review finding.
 *
 * ⚠️ AND THE RULE THAT MAKES THAT POSSIBLE
 *
 * The site may not name a country, state, city, currency, regulator or
 * scheme, and nearly every citable statistic about private practice
 * names one in its own title. So there is no external statistic on this
 * site, and there is not going to be. The only figures these devices
 * carry are of three kinds, and the `source` string says which:
 *
 *   1. A CALENDAR FACT. True by arithmetic, not by measurement.
 *      "7 days x 24 hours = 168." "90 days = 13 weeks."
 *   2. A PARAMETER OF THIS SERVICE, sourced to this service.
 *      "The working parameter of the desk."
 *   3. A COUNT TAKEN FROM THIS PAGE, countable by the reader without
 *      leaving it. "Counted from the lanes below."
 *
 * Nothing else. No market figure, no response time, no conversion rate,
 * no booking count, no currency, and no clock time in a mock, because a
 * clock time in a mock is a response-time claim wearing a costume.
 *
 * See the header of src/content/offers.ts for the full copy rules.
 * ══════════════════════════════════════════════════════════════════════
 */

import type { ReactNode } from "react";
import { DISPLAY, MICRO, MICRO_TIGHT } from "../tokens";

/* ── THE CARD ─────────────────────────────────────────────────────────
 * A device is a <figure>. It carries no heading tag of its own, ever.
 * The band around it already supplies the h2 (the rail label) and the h3
 * (the band headline), and a device dropped into an unknown band must
 * not be able to skip a level. Its title is a <figcaption>.
 * ──────────────────────────────────────────────────────────────────── */

export function VizCard({
  eyebrow,
  title,
  tag,
  children,
  footer,
  className = "",
  reveal = true,
}: {
  /** 12px micro-caps above the title. Names what the device shows. */
  eyebrow: string;
  /** One sentence. The claim the device makes, in the words of the reader. */
  title: ReactNode;
  /** Top-right qualifier. States what the device is NOT. */
  tag: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
  /**
   * Adds `.reveal` to the root so RevealRoot un-hides it once, in view,
   * and the internal motion (which is gated on `.reveal.in`) can run.
   *
   * ⚠️ Pass `reveal={false}` when you wrap this in <AnimatedSection>
   * yourself, or when the device sits above the fold. Nothing above the
   * fold on this site animates.
   */
  reveal?: boolean;
}) {
  return (
    <figure
      className={`${reveal ? "reveal " : ""}overflow-hidden rounded-lg border border-ink-200 bg-white shadow-lift ${className}`}
    >
      <div className="border-b border-ink-100 px-5 py-4 md:px-7 md:py-5">
        {/* Eyebrow and qualifier share one line at every width. Stacking
            the qualifier under the claim on a phone made it read as a
            second headline, which it is not. */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <p className={`${MICRO} text-brand-500`}>{eyebrow}</p>
          {/* The honesty label, deliberately the strongest version of it.
              Not "illustrative", which invites the reader to assume there
              are real numbers somewhere, but a flat statement of what the
              device does and does not contain. */}
          <p className={`${MICRO_TIGHT} text-ink-400`}>{tag}</p>
        </div>
        <figcaption className="mt-2.5 max-w-measure text-base font-semibold text-ink-950">
          {title}
        </figcaption>
      </div>

      <div className="px-5 py-6 md:px-7 md:py-7">{children}</div>

      {footer ? (
        <div className="border-t border-ink-100 bg-ink-50 px-5 py-4 md:px-7 md:py-5">
          {footer}
        </div>
      ) : null}
    </figure>
  );
}

/* ── THE STAT TILE ────────────────────────────────────────────────────
 * The right form for a single number is a stat tile, not a one-bar bar
 * chart. `source` is required. See the header.
 *
 * The value is set in the display face because on this site the
 * condensed face IS the heading face: an Inter figure beside a Barlow
 * headline would be the off-system one. Proportional figures, not
 * tabular: tabular-nums gives every digit the width of a zero, which
 * makes a large standalone number look loose. Tabular is for columns,
 * and the table twin uses it.
 * ──────────────────────────────────────────────────────────────────── */

export function Stat({
  value,
  unit,
  label,
  source,
  tone = "ink",
}: {
  value: string;
  /** Optional trailing unit, set small and in the body face. */
  unit?: string;
  /** Sentence case, no trailing colon. What the number counts. */
  label: string;
  /**
   * REQUIRED. Printed under the figure, in the same block as the figure.
   * One of the three permitted kinds. A figure without a source does not
   * ship, and this prop is how that is guaranteed.
   */
  source: string;
  tone?: "ink" | "brand";
}) {
  return (
    <div className="min-w-0">
      <p
        className={`${DISPLAY} text-d3 ${
          tone === "brand" ? "text-brand-500" : "text-ink-950"
        }`}
      >
        {value}
        {unit ? (
          <span className="ml-2 font-sans text-base font-semibold normal-case tracking-normal text-ink-500">
            {unit}
          </span>
        ) : null}
      </p>
      <p className="mt-2 max-w-[30ch] text-sm text-ink-600">{label}</p>
      <p className="mt-2 max-w-[34ch] text-xs text-ink-400">{source}</p>
    </div>
  );
}

/* ── THE LEGEND ───────────────────────────────────────────────────────
 * Always present when a device uses two or more states. Identity is
 * never carried by colour alone: every state has a swatch, a word, and
 * an inner glyph that survives greyscale, colour blindness, printing and
 * forced-colors.
 * ──────────────────────────────────────────────────────────────────── */

export type LegendItem = { swatch: ReactNode; label: string };

export function Legend({ items }: { items: LegendItem[] }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {items.map((it) => (
        <li
          key={it.label}
          className="flex items-center gap-2 text-xs text-ink-600"
        >
          <span aria-hidden className="shrink-0">
            {it.swatch}
          </span>
          {it.label}
        </li>
      ))}
    </ul>
  );
}

/* ── THE TABLE TWIN ───────────────────────────────────────────────────
 * Every device has a table equivalent, disclosed rather than hidden.
 * Native <details>, so it costs no JavaScript, works with JavaScript
 * off, and is keyboard operable for free.
 *
 * This is not a nicety. A diagram that can only be read by looking at it
 * fails for a screen reader, in forced-colors, in greyscale print, and
 * for a reader who cannot separate the two hues. The table is the
 * accessible equivalent, and it is also where a sceptical reader goes to
 * check that the picture is not doing something the words do not say.
 * ──────────────────────────────────────────────────────────────────── */

export function TableTwin({
  summary = "Read this as a table",
  caption,
  head,
  rows,
}: {
  summary?: string;
  /** Screen-reader caption. Says what the table is of. */
  caption: string;
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <details className="group mt-6 border-t border-ink-100 pt-4">
      <summary
        className={`${MICRO} inline-flex min-h-6 cursor-pointer list-none items-center gap-2 text-ink-500 transition-colors duration-150 hover:text-brand-500`}
      >
        <span
          aria-hidden
          className="text-ink-300 transition-transform duration-150 ease-standard group-open:rotate-90"
        >
          &rsaquo;
        </span>
        {summary}
      </summary>

      {/* WCAG 1.4.10. A wide table scrolls inside its own container. The
          page body never scrolls sideways. */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-left">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr>
              {head.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className={`${MICRO_TIGHT} border-b border-ink-200 py-2 pr-4 align-bottom text-ink-500`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                {r.map((c, j) =>
                  j === 0 ? (
                    <th
                      key={j}
                      scope="row"
                      className="border-b border-ink-100 py-2.5 pr-4 text-left align-top text-sm font-semibold text-ink-950"
                    >
                      {c}
                    </th>
                  ) : (
                    <td
                      key={j}
                      className="tabular border-b border-ink-100 py-2.5 pr-4 align-top text-sm text-ink-600"
                    >
                      {c}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
}

/* ── THE CLOSING LINE ─────────────────────────────────────────────────
 * One sentence under a device, set heavier than body copy, with the
 * brand rule on its left edge. It is the conclusion of the device in
 * words, so the argument never depends on the reader decoding a picture.
 * ──────────────────────────────────────────────────────────────────── */

export function VizNote({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-measure border-l-2 border-brand-500 pl-4 text-sm font-medium text-ink-950 md:text-base">
      {children}
    </p>
  );
}

/* ── SHARED SWATCHES ──────────────────────────────────────────────────
 * The state vocabulary, in one place, so device 1 and device 4 cannot
 * use the same colour for two different meanings.
 *
 * MEASURED, NOT EYEBALLED, against white and against the ink-50 band the
 * legend sits on:
 *   brand-500  #003DDB  7.81:1 on white   the desk is on it
 *   signal-600 #B4501A  5.12:1 on white   gone, or the day it matters
 *   ink-400    #6E7787  4.51:1 on white   waiting
 *   ink-100    #E3E6EC  ground only, never a meaning-carrying mark
 *
 * ⚠️ ink-300 #98A2B3 IS NOT USED AS A MARK ANYWHERE IN THIS FOLDER. The
 * comment in tailwind.config.ts says it is 3.0:1 against white. Measured,
 * it is 2.58:1, which is below the 3:1 floor for a graphical object a
 * reader needs in order to understand the content. It stays a divider.
 * ──────────────────────────────────────────────────────────────────── */

export const SW = {
  /** Solid brand block. The one thing being done. */
  served: (
    <span className="block h-3 w-3 rounded-xs bg-brand-500" />
  ),
  /** A ground with a centre rule. Arrived, not reached. */
  waiting: (
    <span className="flex h-3 w-3 items-center justify-center rounded-xs bg-ink-100">
      <span className="block h-0.5 w-1.5 bg-ink-400" />
    </span>
  ),
  /** A struck cell. The glyph, not the colour, is what carries this one.
   *  `overflow-hidden` is load-bearing: a rotated rule overflows its own
   *  box, and at 390px the diagonal escaped the cell and crossed its
   *  neighbours. */
  gone: (
    <span className="flex h-3 w-3 items-center justify-center overflow-hidden rounded-xs bg-signal-50">
      <span className="block h-0.5 w-2/3 rotate-45 bg-signal-600" />
    </span>
  ),
  /** Flat ground. Nothing had arrived yet.
   *  The hairline is a LEGEND affordance only: the key sits on the ink-50
   *  footer band, where an ink-50 square is invisible. The cells in the
   *  diagram itself carry no stroke. */
  idle: (
    <span className="block h-3 w-3 rounded-xs bg-ink-50 ring-1 ring-inset ring-ink-200" />
  ),
  /** An 8px dot with a 2px surface ring, for the dumbbell ends. */
  dotBrand: (
    <span className="block h-2.5 w-2.5 rounded-full bg-brand-500 ring-2 ring-white" />
  ),
  dotSignal: (
    <span className="block h-2.5 w-2.5 rounded-full bg-signal-600 ring-2 ring-white" />
  ),
};
