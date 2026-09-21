/*
 * ══════════════════════════════════════════════════════════════════════
 * DEVICE 4 · WORKER COMPLIANCE IS A CALENDAR, NOT A FILING CABINET
 *
 * The thesis of /care/workforce, and the founder named it as the
 * strongest single line available on that page. It currently exists only
 * as prose in the `moment` block, which is the weakest possible place
 * for the strongest available idea.
 *
 * THE ARGUMENT, drawn: an expiry has exactly two dates attached to it.
 * A filing cabinet knows one of them, the day you needed the person and
 * could not use them. A calendar knows the other, ninety days earlier,
 * while there is still time to do something. The distance between those
 * two dates IS the product, so the device draws the distance.
 *
 * The form is a dumbbell: before and after, per item, one hue in two
 * roles. It is the right form because the reader has to compare two
 * points on the same axis for the same thing, which is exactly what a
 * dumbbell is for.
 *
 * ⚠️ WHAT IS DELIBERATELY NOT HERE
 *
 *   · No named credential. Registration names, screening names and
 *     certification names differ by country, so naming any of them marks
 *     the site as foreign to half its audience. The three rows use the
 *     generic nouns the workforce page already uses in its own copy:
 *     registration, credential, training currency.
 *   · No regulator, no scheme, no jurisdiction, anywhere.
 *   · No dates, no month names, no counts of expiries, no percentage of
 *     anything renewed on time. There is no such data and inventing a
 *     plausible-looking spread of expiry dates would be fabricating it.
 *   · The three rows are deliberately IDENTICAL in length. Ninety days
 *     is a rule that applies to all of them equally, and drawing three
 *     different windows would imply a measurement that does not exist.
 *     The uniformity is the policy, drawn.
 *
 * THE ONE FIGURE, and its source: 90. It is a parameter of this service,
 * already stated in offers.ts ("expiries tracked ninety days ahead"), and
 * the arithmetic beside it, 90 days = 13 weeks, is a calendar fact. Both
 * are printed in the same block as the number.
 *
 * Server component. No client JavaScript. One motion: the window wipes
 * open, once. See viz.module.css.
 * ══════════════════════════════════════════════════════════════════════
 */

import { MICRO, MICRO_TIGHT } from "../tokens";
import { Legend, Stat, TableTwin, VizCard, VizNote, SW } from "./Primitives";
import styles from "./viz.module.css";

/* Thirteen weeks. The grid is a calendar ground, not a data series: it
   exists so the distance between the two dots is countable rather than
   impressionistic. */
const WEEKS = 13;

/* The generic categories, taken word for word from the Compliance line
   on /care/workforce: "registration, credential and training currency". */
const ROWS = [
  {
    key: "registration",
    label: "A registration",
    detail: "Renewed on a cycle the practice does not set.",
  },
  {
    key: "credential",
    label: "A credential",
    detail: "Issued by somebody else, with its own expiry.",
  },
  {
    key: "training",
    label: "A training currency",
    detail: "Lapses quietly. Nothing announces it.",
  },
];

export default function ComplianceHorizon({
  reveal = true,
  className = "",
}: {
  /** Pass false if you wrap this yourself, or if it sits above the fold. */
  reveal?: boolean;
  className?: string;
}) {
  return (
    <VizCard
      reveal={reveal}
      className={className}
      eyebrow="The calendar nobody watches"
      title="Every expiry has two dates on it. A filing cabinet only holds the second one."
      tag="A working rule, not a record"
      footer={
        <div className="flex flex-col gap-4">
          <Legend
            items={[
              { swatch: SW.dotBrand, label: "The date the calendar surfaces it" },
              {
                swatch: SW.dotSignal,
                label: "The date the practice needs the person",
              },
            ]}
          />
          <p className="max-w-prose text-xs text-ink-400">
            The three rows are the same length on purpose. Ninety days is a
            rule applied to every expiry equally, not a measurement of any
            practice, and drawing three different windows would imply data
            that does not exist.
          </p>
        </div>
      }
    >
      {/* ── The figure. ── */}
      <div className="grid gap-6 border-b border-ink-100 pb-7 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-10">
        <Stat
          tone="brand"
          value="90"
          unit="days"
          label="of notice before an expiry becomes a scheduling problem"
          source="90 days = 13 weeks. The working parameter of the desk."
        />
        <p className="max-w-prose self-center text-sm text-ink-600 md:text-base">
          A document in a folder answers the question &ldquo;do we have
          it&rdquo;. It never asks the question that matters, which is
          &ldquo;when does it stop being true&rdquo;. That question has a date
          on it, and a date belongs in a calendar.
        </p>
      </div>

      {/* ── The track. ──────────────────────────────────────────────────
          Desktop: time runs left to right. Mobile: the same markup, with
          the labels stacked above the rail, so nothing has to scroll
          sideways and no second copy of the text exists for a screen
          reader to read twice. ── */}
      <div className="mt-8">
        {/* The window. A tinted band under the whole rail, with a hard
            brand edge where it opens and a hard signal edge where it
            closes. This is the only element on the device that moves. */}
        <div className="relative">
          <div
            aria-hidden
            className={`${styles.window} pointer-events-none absolute inset-0 rounded-sm border-l-2 border-r-2 border-l-brand-500 border-r-signal-600 bg-brand-50`}
          />

          <div className="relative px-3 py-5 md:px-4">
            {/* The week ground. Thirteen hairline cells, 2px apart, so
                the distance between the two dots is countable. */}
            <div aria-hidden className="mb-5 flex gap-1">
              {Array.from({ length: WEEKS }).map((_, w) => (
                <span
                  key={w}
                  className={`h-1.5 flex-1 rounded-xs ${
                    w === WEEKS - 1 ? "bg-signal-200" : "bg-brand-200"
                  }`}
                />
              ))}
            </div>

            {ROWS.map((row) => (
              <div key={row.key} className="py-2.5">
                <p className={`${MICRO_TIGHT} text-ink-950`}>{row.label}</p>
                <div className="mt-2 flex items-center gap-3">
                  {/* Left dot: surfaced. 2px surface ring so it stays
                      legible where it crosses the rail. */}
                  <span
                    aria-hidden
                    className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-500 ring-2 ring-white"
                  />
                  {/* The rail between the two dates. This distance is the
                      product. */}
                  <span
                    aria-hidden
                    className="h-0.5 min-w-0 flex-1 rounded-full bg-ink-200"
                  />
                  <span
                    aria-hidden
                    className="h-2.5 w-2.5 shrink-0 rounded-full bg-signal-600 ring-2 ring-white"
                  />
                </div>
                <p className="mt-2 text-xs text-ink-500">{row.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The axis. Two ends, named, and the span between them measured
            in the only unit that is a calendar fact. */}
        <div className="mt-4 grid gap-3 border-t border-ink-100 pt-4 sm:grid-cols-2">
          <p className="text-xs text-ink-600">
            <span className={`${MICRO} block text-brand-500`}>
              Ninety days out
            </span>
            <span className="mt-1.5 block">
              The renewal is actioned while it is still only admin.
            </span>
          </p>
          <p className="text-xs text-ink-600 sm:text-right">
            <span className={`${MICRO} block text-signal-600`}>
              The day they are rostered
            </span>
            <span className="mt-1.5 block">
              Where a filing cabinet finds out, and where it becomes a
              scheduling problem.
            </span>
          </p>
        </div>
      </div>

      <div className="mt-8">
        <VizNote>
          A filing cabinet holds the document. It does not hold the date. The
          practice finds out at the moment it needs that person to work, which
          is the one moment nothing can be done about it.
        </VizNote>
      </div>

      <TableTwin
        caption="The two dates attached to each category of expiry, and the notice between them."
        head={["What expires", "Surfaced by the calendar", "Found in a folder"]}
        rows={ROWS.map((r) => [
          r.label,
          "90 days ahead",
          "The day the person is needed",
        ])}
      />

      <p className={`${MICRO} mt-4 text-ink-400`}>
        Both dates are rules, not observations
      </p>
    </VizCard>
  );
}
