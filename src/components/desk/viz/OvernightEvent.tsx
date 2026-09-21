/*
 * ══════════════════════════════════════════════════════════════════════
 * DEVICE 4 · ONE OVERNIGHT EVENT, TRACED TO THE MORNING
 *
 * The care side's equivalent of the single-threaded desk, and the thing
 * the Operations Desk page has to make a reader believe:
 *
 *     AN ANSWERING SERVICE TAKES A MESSAGE. THE DESK FINISHES THE CALL.
 *
 * THE ARGUMENT, drawn rather than described: one call-off at four in the
 * morning passes through five stages. The on-call phone arrangement
 * completes the first three, because a woken manager does solve the
 * immediate problem. It is the last two that fall over, and those are
 * the two that exist the next morning. So the difference between the two
 * arrangements is not who answers, it is what is there at 8am.
 *
 * ⚠️ NO CLOCK TIMES, NO DURATIONS, NO ELAPSED MINUTES. The sibling care
 * site draws this same event with timestamps and a running "+16 min"
 * column. That is a response-time claim in a costume, and this site does
 * not make response-time claims in either market. The columns here are
 * an ORDERED SEQUENCE OF STAGES, not a clock.
 *
 * ⚠️ THE COMPARISON IS NOT A SLUR ON THE MANAGER. The on-call row is not
 * drawn as failure, it is drawn as a person doing three jobs correctly
 * at four in the morning and then, reasonably, not doing paperwork. The
 * copy must keep saying that. A device that makes the reader's current
 * arrangement look stupid makes the reader defensive, and the reader IS
 * the person holding that phone.
 *
 * ⚠️ MARKET-NEUTRAL. No scheme, no regulator, no award, no country. The
 * mechanics of a call-off are identical in every market, which is
 * exactly why this device is safe to ship before the US argument is
 * researched, and why the AU version of the argument is not.
 *
 * Server component. No client JavaScript. Motion is CSS, gated on the
 * reveal observer already mounted in the root layout. See viz.module.css.
 * ══════════════════════════════════════════════════════════════════════
 */

import type { CSSProperties } from "react";
import { MICRO, MICRO_TIGHT } from "../tokens";
import { Legend, TableTwin, VizCard, VizNote, SW } from "./Primitives";
import styles from "./viz.module.css";

/* The five stages one overnight event passes through, in order. Named as
   the work, not as a process diagram's nouns. */
const STAGES = [
  "Answered",
  "Identified",
  "Covered",
  "Recorded",
  "Handed over",
] as const;

type Track = {
  label: string;
  /** One entry per stage. true = the stage actually completes. */
  done: boolean[];
  /** What exists when the day starts. */
  morning: string;
  morningTone: "brand" | "signal";
};

/* ⚠️ THE TWO ROWS MUST STAY THE SAME LENGTH as STAGES. Drawing the
   on-call row shorter would imply the call goes unanswered, which is not
   the claim and is not true. */
const TRACKS: Track[] = [
  {
    label: "The Operations Desk",
    done: [true, true, true, true, true],
    morning: "A handover, with the event and what was done about it",
    morningTone: "brand",
  },
  {
    label: "An on-call phone",
    done: [true, true, true, false, false],
    morning: "A memory, and somebody who has already worked a night",
    morningTone: "signal",
  },
];

export default function OvernightEvent({
  reveal = true,
  className = "",
}: {
  reveal?: boolean;
  className?: string;
}) {
  return (
    <VizCard
      reveal={reveal}
      className={className}
      eyebrow="One overnight event, traced"
      title="An answering service takes a message. The desk finishes the call."
      tag="A sequence, not a response time"
      footer={
        <div className="flex flex-col gap-5">
          <Legend
            items={[
              { swatch: SW.served, label: "The stage completes" },
              { swatch: SW.gone, label: "Not done, reasonably" },
            ]}
          />
          <VizNote>
            Five stages in the order they happen, not five minutes and not a
            record of anything. No timings appear in this diagram because this
            site makes no claim about response times. The on-call row is not a
            failure: it is somebody solving the urgent part correctly at four in
            the morning and then, reasonably, not writing it up.
          </VizNote>
        </div>
      }
    >
      <div className="flex flex-col gap-9">
        {/* ── THE STAGE HEADER. Sits above both tracks so the columns are
            read once rather than re-read per row. Hidden from assistive
            tech because the table twin carries the same structure in a
            form a screen reader can actually navigate. ── */}
        <div className="hidden sm:grid sm:grid-cols-[168px_minmax(0,1fr)] sm:gap-x-5">
          <span />
          <ol
            aria-hidden
            className="grid grid-cols-5 gap-x-2 border-b border-ink-100 pb-3"
          >
            {STAGES.map((st, i) => (
              <li
                key={st}
                className={`${MICRO_TIGHT} flex min-w-0 items-baseline gap-1.5 text-ink-500`}
              >
                <span className="tabular text-ink-300">{i + 1}</span>
                <span className="truncate">{st}</span>
              </li>
            ))}
          </ol>
        </div>

        {TRACKS.map((t) => (
          <div
            key={t.label}
            className="grid gap-y-3 sm:grid-cols-[168px_minmax(0,1fr)] sm:items-start sm:gap-x-5"
          >
            <p
              className={`${MICRO} ${
                t.morningTone === "brand" ? "text-brand-500" : "text-ink-500"
              }`}
            >
              {t.label}
            </p>

            <div className="flex min-w-0 flex-col gap-3">
              <div className="grid grid-cols-5 gap-x-2">
                {t.done.map((ok, i) => (
                  <div key={i} className="flex min-w-0 flex-col gap-1.5">
                    <span
                      className={`${styles.cell} block h-7 rounded-xs ${
                        ok ? "bg-brand-500" : "bg-signal-50"
                      }`}
                      style={{ "--col": i } as CSSProperties}
                    >
                      {ok ? null : (
                        <span className="flex h-full w-full items-center justify-center overflow-hidden">
                          <span className="block h-0.5 w-1/2 rotate-45 bg-signal-600" />
                        </span>
                      )}
                    </span>
                    {/* The stage name repeats under each cell below sm,
                        where the shared header row is hidden. */}
                    <span
                      className={`${MICRO_TIGHT} truncate text-ink-400 sm:hidden`}
                    >
                      {STAGES[i]}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-ink-600">
                <span className={`${MICRO_TIGHT} text-ink-400`}>
                  In the morning
                </span>{" "}
                <span className="text-ink-950">{t.morning}</span>
              </p>
            </div>
          </div>
        ))}

        <p className="border-l-2 border-brand-500 pl-5 text-base text-ink-950">
          Both arrangements answer the phone and both find somebody to work the
          shift. They differ in the two stages that are still there when the day
          starts, which are also the only two an auditor can ever read.
        </p>
      </div>

      <TableTwin
        caption="One overnight call-off traced through five stages, comparing the Operations Desk with an on-call phone. Each cell states whether the stage completes."
        head={["Stage", "The Operations Desk", "An on-call phone"]}
        rows={STAGES.map((st, i) => [
          st,
          TRACKS[0].done[i] ? "Completes" : "Not done",
          TRACKS[1].done[i] ? "Completes" : "Not done",
        ])}
      />
    </VizCard>
  );
}
