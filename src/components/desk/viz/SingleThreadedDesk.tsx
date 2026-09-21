/*
 * ══════════════════════════════════════════════════════════════════════
 * DEVICE 1 · THE SINGLE-THREADED FRONT DESK
 *
 * The mechanism the whole business rests on, and the strongest device on
 * the site. Everything else on the page is downstream of this one being
 * believed.
 *
 * THE ARGUMENT, drawn rather than described: five queues are live at the
 * same time during opening hours, and there is one person. So in any
 * given moment exactly one of the five is being served and the other
 * four are waiting. Nobody is doing anything wrong. The patient at the
 * counter is always right to win. The loss is structural.
 *
 * ⚠️ WHY THIS IS NOT THE 168/38 WEEK GRID FROM THE CARE SITE.
 *
 * The sibling site (novada-website/src/components/desk/WeekGrid.tsx)
 * draws a week as 168 cells and fills the 38 a full-time week covers. It
 * is a good device THERE and it must not be copied HERE, for two
 * separate reasons and either one is fatal:
 *
 *   1. It names a country by implication. "38" is a jurisdiction's
 *      standard full-time week. The two-market rule in offers.ts does
 *      not permit that, and a reader in the other market simply reads it
 *      as wrong.
 *   2. Far worse, it argues for AFTER-HOURS COVER, and this site
 *      explicitly refuses to sell that. The "Not after hours" boundary
 *      says the expensive problem is the call missed WHILE YOU ARE OPEN.
 *      A 168/38 grid on this site would be contradicted by the site four
 *      sections later.
 *
 * The honest arithmetic available here is not coverage, it is
 * CONCURRENCY: one server, several queues, all of them live inside the
 * hours the practice is already open. That is this device.
 *
 * ⚠️ NO CLOCK TIMES, NO DURATIONS, NO COUNTS OF CALLS. The columns are
 * an ordered sequence of moments, not minutes, and nothing here may be
 * read as a response time. The site bans response-time claims and a
 * timestamp in a mock is a response-time claim in a costume.
 *
 * ⚠️ THE ONE-SERVER RULE IS ENFORCED IN THE DATA STRUCTURE, not by
 * hand-painting cells. `SERVED` holds one lane index per column, and the
 * served cell is derived from it, so two lanes can never be blue in the
 * same column however carelessly this file is later edited. That is the
 * whole claim of the device, so it is worth making structurally true.
 *
 * Server component. No client JavaScript. Motion is CSS, gated on the
 * reveal observer already mounted in the root layout. See viz.module.css.
 * ══════════════════════════════════════════════════════════════════════
 */

import type { CSSProperties } from "react";
import { MICRO, MICRO_TIGHT } from "../tokens";
import { Legend, Stat, TableTwin, VizCard, VizNote, SW } from "./Primitives";
import styles from "./viz.module.css";

/* Twelve moments. Not twelve minutes, not twelve of anything countable.
   Enough columns for a pattern to be visible, few enough that each cell
   is still ~23px wide on a 390px screen. */
const STEPS = 12;

/**
 * Which lane the one person is on, at each moment.
 *
 * Read it as the correct decision made every time: the counter wins
 * whenever somebody is standing at it, and the desk only ever leaves the
 * counter in the gaps. Lane 4, recall, is never served. That is not an
 * oversight in the diagram, it is the point of the diagram.
 */
const SERVED: number[] = [0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 3, 0];

type Lane = {
  key: string;
  label: string;
  /** The end state, in words. The direct label for the row. */
  note: string;
  noteState: "served" | "gone" | "waiting";
  /**
   * Twelve characters, one per moment.
   *   "." nothing waiting in this lane yet
   *   "w" arrived, waiting
   *   "x" gone: the caller hung up, or the day ended with it undone
   *
   * "s" is never written here. The served cell is taken from SERVED, so
   * the one-person rule cannot be broken from this table.
   */
  demand: string;
};

/* The five lanes, and every one of them is traceable to a sentence
   already on the site. This is not an invented taxonomy:
     counter        "the patient standing in front of them always wins"
     phone          "the phone rings out at eleven on a Tuesday"
     enquiries      "calls, web enquiries and messages answered"
     cancellations  "the call to fill this afternoon's cancellation"
     recall         "the recall list never gets run"                     */
const LANES: Lane[] = [
  {
    key: "counter",
    label: "At the counter",
    note: "Always wins, correctly",
    noteState: "served",
    demand: "wwwwwwwwwwww",
  },
  {
    key: "phone",
    label: "The phone",
    note: "Rings out",
    noteState: "gone",
    demand: ".wwwwx.wwwx.",
  },
  {
    key: "enquiries",
    label: "Web enquiries",
    note: "Still in the queue",
    noteState: "waiting",
    demand: "...wwwwwwwww",
  },
  {
    key: "cancellations",
    label: "A cancellation",
    note: "Reached, eventually",
    noteState: "served",
    demand: ".wwwwwwwwwww",
  },
  {
    key: "recall",
    label: "The recall list",
    note: "Never reached",
    noteState: "gone",
    demand: "wwwwwwwwwwwx",
  },
];

type Cell = "idle" | "waiting" | "served" | "gone";

/** The one-server rule, applied. A lane is served only where SERVED says
 *  the person is on it; everything else keeps the state it declared. */
function cellsFor(lane: Lane, laneIndex: number): Cell[] {
  const declared = lane.demand.padEnd(STEPS, ".").slice(0, STEPS).split("");
  return declared.map((d, col) => {
    if (SERVED[col] === laneIndex) return "served";
    if (d === "w") return "waiting";
    if (d === "x") return "gone";
    return "idle";
  });
}

const CELL_CLASS: Record<Cell, string> = {
  idle: "bg-ink-50",
  waiting: "bg-ink-100",
  served: "bg-brand-500",
  gone: "bg-signal-50",
};

/** The inner glyph. Identity never rests on hue alone: each state has a
 *  mark that survives greyscale, colour blindness and forced-colors. */
function glyph(state: Cell) {
  if (state === "waiting")
    return <span className="block h-0.5 w-1/2 bg-ink-400" />;
  /* ⚠️ The struck cell needs `overflow-hidden` on the CELL, not here: a
     rotated rule overflows its own box, and at 390px this diagonal
     escaped its cell and crossed the two beside it. */
  if (state === "gone")
    return <span className="block h-0.5 w-2/3 rotate-45 bg-signal-600" />;
  return null;
}

const STATE_WORD: Record<Cell, string> = {
  idle: "Nothing waiting",
  waiting: "Waiting",
  served: "Being served",
  gone: "Gone",
};

const NOTE_SWATCH = {
  served: SW.served,
  waiting: SW.waiting,
  gone: SW.gone,
} as const;

export default function SingleThreadedDesk({
  reveal = true,
  className = "",
}: {
  /** Pass false if you wrap this yourself, or if it sits above the fold. */
  reveal?: boolean;
  className?: string;
}) {
  const grid = LANES.map((lane, i) => ({ lane, cells: cellsFor(lane, i) }));

  /* Counted from the diagram, not asserted about anybody. Used in the
     table twin, where a count is the readable form. */
  const servedCount = (i: number) => SERVED.filter((s) => s === i).length;

  return (
    <VizCard
      reveal={reveal}
      className={className}
      eyebrow="The front desk, drawn"
      title="Five queues are live at once. There is one person. Four of them are always waiting."
      tag="A mechanism, not a measurement"
      footer={
        <div className="flex flex-col gap-4">
          <Legend
            items={[
              { swatch: SW.served, label: "The desk is on it" },
              { swatch: SW.waiting, label: "Arrived, waiting" },
              { swatch: SW.gone, label: "Gone" },
              { swatch: SW.idle, label: "Nothing waiting" },
            ]}
          />
          <p className="max-w-prose text-xs text-ink-400">
            Twelve moments in an ordinary open hour, in order. Not twelve
            minutes, and not a record of anything. No timings appear in this
            diagram because this site makes no claim about response times.
          </p>
        </div>
      }
    >
      {/* ── The two figures. Both are countable by the reader without
          leaving the page, and both say so underneath. ── */}
      <div className="grid gap-6 border-b border-ink-100 pb-7 sm:grid-cols-2 sm:gap-10">
        <Stat
          value="1"
          label="thing the person at the desk can do at any one moment"
          source="A definition of one person, not a measurement of yours."
        />
        <Stat
          tone="brand"
          value="5"
          label="queues live at the same time while the practice is open"
          source="Counted from the lanes below. Each one is named elsewhere on this site."
        />
      </div>

      {/* ── The lanes. ── */}
      <div className="mt-7">
        {grid.map(({ lane, cells }) => (
          <div
            key={lane.key}
            className="border-b border-ink-100 py-3 last:border-b-0 last:pb-0"
          >
            <div className="grid items-center gap-x-5 gap-y-2 sm:grid-cols-[150px_minmax(0,1fr)] lg:grid-cols-[150px_minmax(0,1fr)_168px]">
              <p className={`${MICRO_TIGHT} text-ink-950`}>{lane.label}</p>

              {/* The track. 2px surface gaps between cells, per the mark
                  spec: white does the separating, never a stroke drawn
                  around a mark. */}
              <div className="flex min-w-0 gap-0.5" aria-hidden>
                {cells.map((state, col) => (
                  <span
                    key={col}
                    style={{ "--col": col } as CSSProperties}
                    className={`${styles.cell} flex h-5 flex-1 items-center justify-center overflow-hidden rounded-xs ${CELL_CLASS[state]}`}
                  >
                    {glyph(state)}
                  </span>
                ))}
              </div>

              {/* The direct label. Selective by construction: one per
                  lane, at the end of the row, never a value per cell. */}
              <p className="flex items-start gap-2 text-xs text-ink-600 sm:col-span-2 lg:col-span-1">
                <span aria-hidden className="mt-0.5 shrink-0">
                  {NOTE_SWATCH[lane.noteState]}
                </span>
                {lane.note}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <VizNote>
          Every grey cell is a correct decision. There is one person, the
          patient at the counter is always right to win, and the rest of the
          work is deferred by somebody competent, every day.
        </VizNote>
      </div>

      <TableTwin
        caption="Each queue at the front desk, how often the one person reached it across twelve moments, and where it ended."
        head={["Queue", "Moments served", "Outcome"]}
        rows={LANES.map((lane, i) => [
          lane.label,
          `${servedCount(i)} of ${STEPS}`,
          lane.note,
        ])}
      />

      <p className={`${MICRO} mt-4 text-ink-400`}>
        Counts taken from the diagram above
      </p>

      {/* Belt and braces for a screen reader. The visual track is
          aria-hidden and the table above carries the detail, so this line
          states the one rule the picture encodes, in case the table is
          never opened. */}
      <p className="sr-only">
        Across all twelve moments shown, exactly one queue is ever being
        served and the other four are waiting. The four states used are:{" "}
        {STATE_WORD.served}, {STATE_WORD.waiting}, {STATE_WORD.gone}, and{" "}
        {STATE_WORD.idle}.
      </p>
    </VizCard>
  );
}
