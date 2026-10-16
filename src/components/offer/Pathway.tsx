/*
 * ══════════════════════════════════════════════════════════════════════
 * THE PATHWAY. Audit, what changes, the ongoing service.
 *
 * The founder's three-step diagram, built as one component and rendered
 * in seven places on this domain: the homepage, both hubs and all four
 * pillar pages. Everything it says comes from PATHWAYS in
 * src/content/offers.ts, so a renamed offer renames itself everywhere.
 *
 * ⚠️ THE THREE STEPS ARE NOT THREE OF THE SAME THING, and the design
 * has to say so before the words are read. Steps one and three are
 * PRODUCTS: bordered, on white, and they link to their own page. Step
 * two is an OUTCOME, something that happens rather than something you
 * buy: no border, no link, tinted back. A reader who thinks the middle
 * is a third thing to purchase has misread the model, and that is the
 * exact misreading this diagram exists to prevent.
 *
 * ⚠️ THE NUMBERING IS REAL. 01 / 02 / 03 is used here because this IS a
 * sequence and the order carries information the reader needs. Do not
 * copy the device onto a set of parallel items elsewhere.
 *
 * ⚠️ "YOU ARE HERE" IS NOT DECORATION EITHER. On a pillar page the step
 * for that page stops being a link and says so, because a link to the
 * page you are already on is a dead end and a diagram that cannot show
 * you your own position is worth less than one that can.
 *
 * ⚠️ WIDTH. Three steps plus two arrows is a five-column grid on
 * desktop and a single stack on mobile, where the arrows rotate to
 * point down. Nothing here may force the page body to scroll
 * sideways: the labels are long and must wrap, never truncate.
 * ══════════════════════════════════════════════════════════════════════
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MICRO, MICRO_TIGHT, NUM, SMALL } from "@/components/desk/tokens";
import { pathwayFor, type Audience, type PathwayStep } from "@/content/offers";

/* The arrow between two steps. Points right on desktop, down on mobile,
   from one rotation rather than two icons, so the two can never drift. */
function Connector() {
  /* An <li>, not a <div>: only <li> (and script/template) may be a
     direct child of <ol>, and the connector sits in the grid as a
     sibling of the steps. aria-hidden keeps it out of the list that a
     screen reader announces. */
  return (
    <li
      aria-hidden
      className="flex items-center justify-center py-1 md:px-3 md:py-0"
    >
      <ArrowRight className="h-4 w-4 rotate-90 text-ink-300 md:rotate-0" />
    </li>
  );
}

function Step({
  step,
  index,
  current,
}: {
  step: PathwayStep;
  index: number;
  current: boolean;
}) {
  const n = String(index + 1).padStart(2, "0");
  const isProduct = Boolean(step.href);
  const last = index === 2;

  /* The outcome. Deliberately the quietest of the three: no border, no
     card, no link. It is the result of step one, not a purchase. */
  if (!isProduct) {
    return (
      <li className="flex min-w-0 flex-col justify-center px-1 py-4 md:px-4 md:py-0">
        <span className={`${MICRO} ${NUM} text-ink-300`}>{n}</span>
        <span className={`${MICRO_TIGHT} mt-2 text-ink-400`}>{step.kind}</span>
        <span className="mt-2 text-base text-ink-600">{step.label}</span>
      </li>
    );
  }

  const inner = (
    <>
      <span className="flex items-center justify-between gap-3">
        <span className={`${MICRO} ${NUM} text-ink-300`}>{n}</span>
        {current ? (
          <span className={`${MICRO_TIGHT} flex items-center gap-1.5 text-brand-500`}>
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            You are here
          </span>
        ) : null}
      </span>
      <span
        className={`${MICRO_TIGHT} mt-3 block ${
          last ? "text-brand-500" : "text-ink-400"
        }`}
      >
        {step.kind}
      </span>
      <span className="mt-2 block text-base font-semibold text-ink-950">
        {step.label}
      </span>
      {!current ? (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500">
          Read the page
          <ArrowRight
            aria-hidden
            className="h-3.5 w-3.5 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
          />
        </span>
      ) : null}
    </>
  );

  /* The ongoing service carries the accent, because it is the thing the
     reader is trying to picture and the reason the audit exists. */
  const surface = `flex h-full min-w-0 flex-col rounded-lg border bg-white p-5 transition-colors duration-150 ease-standard ${
    last ? "border-brand-500/40" : "border-ink-200"
  }`;

  return (
    <li className={current ? "min-w-0" : "group min-w-0"}>
      {current ? (
        <div aria-current="step" className={`${surface} shadow-raise`}>
          {inner}
        </div>
      ) : (
        <Link href={step.href!} className={`${surface} hover:border-brand-500 hover:shadow-raise`}>
          {inner}
        </Link>
      )}
    </li>
  );
}

export default function Pathway({
  audience,
  currentHref,
  showHeading = true,
  note,
}: {
  audience: Audience["slug"];
  /** The page this is rendered on, so its own step can say so. */
  currentHref?: string;
  /** Off where the band heading already names the audience. */
  showHeading?: boolean;
  /** One line under the diagram, where the page needs to qualify it. */
  note?: string;
}) {
  const p = pathwayFor(audience);
  return (
    <div className="min-w-0">
      {showHeading ? (
        <h3 className={`${MICRO} text-brand-500`}>{p.heading}</h3>
      ) : null}

      {/* 1fr auto 1fr auto 1fr: the three steps share the width and the
          two arrows take only what they need. items-stretch so the two
          product cards are the same height whatever the labels do. */}
      <ol
        className={`grid grid-cols-1 items-stretch md:grid-cols-[1fr_auto_1fr_auto_1fr] ${
          showHeading ? "mt-5" : ""
        }`}
      >
        {p.steps.map((s, i) => (
          <StepWithConnector
            key={s.label}
            step={s}
            index={i}
            current={Boolean(currentHref && s.href === currentHref)}
          />
        ))}
      </ol>

      {note ? <p className={`${SMALL} mt-5 max-w-prose`}>{note}</p> : null}
    </div>
  );
}

/* Fragment rather than a wrapper element, so the grid lays out the step
   and the arrow as siblings instead of nesting them in one cell. */
function StepWithConnector({
  step,
  index,
  current,
}: {
  step: PathwayStep;
  index: number;
  current: boolean;
}) {
  return (
    <>
      <Step step={step} index={index} current={current} />
      {index < 2 ? <Connector /> : null}
    </>
  );
}
