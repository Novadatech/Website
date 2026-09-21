/*
 * ══════════════════════════════════════════════════════════════════════
 * DEVICE 5 · MEASURED AGAINST YOUR OWN BASELINE
 *
 * This is the device that answers the data question, so it is worth
 * saying plainly what it is doing.
 *
 * The founder wants data on the site. The site cannot carry an external
 * statistic: the house rule is that every figure prints its source in
 * the same block, and the site rule is that no country, state, city,
 * currency, regulator or scheme may appear anywhere in marketing copy.
 * Almost every citable source names a country in its own title, so the
 * two rules collide and the statistic loses. On top of that, the Proof
 * band on the homepage tells the reader, in writing, that we went
 * looking for this market's most-quoted numbers and mostly did not find
 * them. A market statistic elsewhere on the same site would make the
 * site contradict itself.
 *
 * So this device does the opposite of inventing one. It shows the
 * monthly report with EVERY VALUE CELL EMPTY, and says why.
 *
 * ⚠️ DO NOT PUT NUMBERS IN THESE CELLS. Not sample numbers, not greyed
 * numbers, not numbers behind an "illustrative" label. The empty cell is
 * the entire argument: it is a written commitment that the first figure
 * in this report will be the reader's own, taken before anything
 * changes. A competitor with fabricated benchmarks cannot copy an empty
 * table, which is exactly why it works.
 *
 * ⚠️ AND DO NOT LET IT READ AS A LOADING SKELETON. Three things stop
 * that, and all three are load-bearing: the row labels are real and
 * complete, the caption states the emptiness is deliberate, and the tag
 * in the card header says there are no figures in it at all.
 *
 * Rows come from the caller so both service pages can pass their own
 * `measured` array, which each page already declares. The two desks
 * measure different things and must not be given a shared invented list.
 *
 * Server component. No client JavaScript. STATIC, deliberately: a report
 * that animates is a dashboard, and a dashboard implies live data this
 * site does not have.
 * ══════════════════════════════════════════════════════════════════════
 */

import { MICRO, MICRO_TIGHT } from "../tokens";
import { VizCard, VizNote } from "./Primitives";

/** The empty value cell. A rule where the figure will be, not a zero and
 *  not a dash that could be mistaken for "none". */
function Blank({ wide = false }: { wide?: boolean }) {
  return (
    <span
      aria-hidden
      className={`block h-0.5 rounded-full bg-ink-200 ${wide ? "w-16" : "w-9"}`}
    />
  );
}

export default function BaselineReport({
  /** The things this desk measures. Pass the page's own `measured` array:
   *  both service pages already declare one, and they measure different
   *  things. Never give the two pages a shared invented list. */
  rows,
  /**
   * The row set apart below the heavier rule, because it is prose rather
   * than a figure and because it is the half of a report most suppliers
   * do not send at all.
   *
   * ⚠️ OPTIONAL, AND DELIBERATELY NOT DEFAULTED. The `measured` array on
   * /patient-access-desk already ends with this exact line, so a default
   * here rendered it twice, once in the table and once below it. Either
   * pass the whole array as `rows` and leave this unset, or name one of
   * the rows here and it will be lifted out of the table rather than
   * repeated in it.
   */
  reasonRow,
  reveal = true,
  className = "",
}: {
  rows: string[];
  reasonRow?: string;
  /** Pass false if you wrap this yourself, or if it sits above the fold. */
  reveal?: boolean;
  className?: string;
}) {
  /* Lifting, not duplicating. A row named as the reason row is removed
     from the table body rather than appearing in both places. */
  const valueRows = reasonRow ? rows.filter((r) => r !== reasonRow) : rows;

  return (
    <VizCard
      reveal={reveal}
      className={className}
      eyebrow="The monthly report"
      title="The baseline is taken before anything changes, so every figure after it is yours."
      tag="No figures in it, on purpose"
      footer={
        <p className="max-w-prose text-xs text-ink-500">
          This is the structure of the report, not a sample of one. There are
          no numbers in it because there are none to show yet: the service is
          new to practices, there are no case studies, and a figure borrowed
          from somebody else would not be about your practice anyway.
        </p>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[460px] border-collapse text-left">
          <caption className="sr-only">
            The structure of the monthly report. Every value cell is
            deliberately empty: the first figures in it are measured from the
            practice of the reader, before the service starts.
          </caption>
          <colgroup>
            <col />
            <col className="w-[22%]" />
            <col className="w-[22%]" />
            <col className="w-[18%]" />
          </colgroup>

          <thead>
            <tr>
              <th
                scope="col"
                className={`${MICRO_TIGHT} border-b-2 border-ink-200 pb-3 pr-4 align-bottom text-ink-500`}
              >
                What is measured
              </th>
              <th
                scope="col"
                className={`${MICRO_TIGHT} border-b-2 border-ink-200 pb-3 pr-4 align-bottom text-ink-950`}
              >
                Baseline
                <span className="mt-1 block text-xs font-normal normal-case tracking-normal text-ink-400">
                  before anything changes
                </span>
              </th>
              <th
                scope="col"
                className={`${MICRO_TIGHT} border-b-2 border-ink-200 pb-3 pr-4 align-bottom text-ink-950`}
              >
                This month
                <span className="mt-1 block text-xs font-normal normal-case tracking-normal text-ink-400">
                  the month being reported
                </span>
              </th>
              <th
                scope="col"
                className={`${MICRO_TIGHT} border-b-2 border-ink-200 pb-3 align-bottom text-ink-950`}
              >
                Change
                <span className="mt-1 block text-xs font-normal normal-case tracking-normal text-ink-400">
                  against your own baseline
                </span>
              </th>
            </tr>
          </thead>

          <tbody>
            {valueRows.map((r) => (
              <tr key={r}>
                <th
                  scope="row"
                  className="border-b border-ink-100 py-4 pr-6 text-left align-top text-sm font-normal text-ink-950"
                >
                  {r}
                </th>
                <td className="border-b border-ink-100 py-4 pr-4 align-middle">
                  <Blank />
                  <span className="sr-only">Not shown</span>
                </td>
                <td className="border-b border-ink-100 py-4 pr-4 align-middle">
                  <Blank />
                  <span className="sr-only">Not shown</span>
                </td>
                <td className="border-b border-ink-100 py-4 align-middle">
                  <Blank />
                  <span className="sr-only">Not shown</span>
                </td>
              </tr>
            ))}

            {/* The row that is not a figure. Set apart by a heavier rule.
                Its cell holds three text rules rather than one value rule,
                because the answer is written, not scored. */}
            {reasonRow ? (
              <tr>
                <th
                  scope="row"
                  className="border-t-2 border-ink-200 py-4 pr-6 text-left align-top text-sm font-semibold text-ink-950"
                >
                  {reasonRow}
                </th>
                <td
                  colSpan={3}
                  className="border-t-2 border-ink-200 py-4 align-middle"
                >
                  <span className="flex flex-col gap-1.5">
                    <Blank wide />
                    <Blank wide />
                    <Blank />
                  </span>
                  <span className="sr-only">
                    Written, not scored. Not shown here.
                  </span>
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <VizNote>
          These cells are blank on purpose. The first numbers in them will be
          yours, measured before we start, so the only thing the reporting can
          compare you against is where you actually were.
        </VizNote>
      </div>

      <p className={`${MICRO} mt-6 text-ink-400`}>
        No industry figure is used anywhere in this report
      </p>
    </VizCard>
  );
}
