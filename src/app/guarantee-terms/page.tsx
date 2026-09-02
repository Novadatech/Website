/*
 * /guarantee-terms : the accessible guarantee terms required by Google
 * Ads' Unreliable Claims policy. Linked twice from /meetings-3, once
 * directly beneath the guarantee claim, and from the lander footer.
 * Deliberately indexable: an ad reviewer has to be able to reach it.
 *
 * REBUILT 2026-09-02 into the Desk visual system, on founder instruction.
 * Was the legacy dark/green Poppins page. Now white canvas, hairline
 * frame, condensed caps display, #003DDB accent, 12px type floor, and
 * the same contents-rail-plus-numbered-clauses document structure as
 * /privacy-policy and /terms-of-service, which are its siblings.
 *
 * Chrome is FunnelHeader/FunnelFooter, not DeskNav/DeskFooter. See the
 * header of src/components/desk/FunnelChrome.tsx: this page serves the
 * meetings offer, and DeskNav would hand a paid visitor five exits into
 * a different offer for a different industry.
 *
 * ── TWO SUBSTANTIVE CORRECTIONS MADE IN THIS REBUILD ─────────────────
 * Both were live contradictions on a page whose entire job is to make a
 * guarantee claim defensible. Flagged to the founder when shipped.
 *
 *  1. Clause 3 said the engagement was "a flat monthly partnership fee
 *     plus a one-off setup". There is no setup fee. It was taken to zero
 *     across the contracts, the at-signing invoices and all four
 *     closed-won operations emails on 12 August 2026, and /meetings-3
 *     carries "No retainer. No setup fee. No lock-in." as its approved
 *     compliance framing. The clause now describes the flat monthly fee
 *     only. No figure is printed: pricing is a sales-call matter and
 *     this page has never carried one.
 *
 *  2. Clause 6 said "you will only ever be billed for qualified meetings
 *     booked up to that point", which directly contradicted clause 3's
 *     "there are no per-meeting fees" three clauses earlier. A reader
 *     comparing them cannot tell which model they are buying, and on a
 *     page that exists to substantiate a claim that is the worst
 *     possible defect. The per-meeting sentence is gone. The clause now
 *     says what is actually true and verifiable (no minimum term, no
 *     lock-in, no exit fee) and refers the final month to the service
 *     agreement rather than inventing a term for it.
 *
 * BINDING COPY RULES: Australian spelling, no em dashes, no pricing
 * figures, and no claim that this page has been legally reviewed.
 */

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { FunnelHeader, FunnelFooter } from "@/components/desk/FunnelChrome";
import { MICRO, NUM, PAD, WRAP, DISPLAY } from "@/components/desk/Band";

export const metadata: Metadata = {
  title: "Guarantee and Terms | Novada Tech",
  description:
    "Exactly what the Novada Tech 15 qualified meetings a month guarantee covers, how a qualified meeting is defined, what you pay and when, and what happens if a meeting cancels.",
  robots: { index: true, follow: true },
};

const MICRO_TIGHT =
  "font-supply text-[12px] font-medium uppercase tracking-[0.07em]";
const BODY = "text-[15px] leading-[1.75] text-[#454E5C] md:text-[16px]";
const LINK =
  "text-[#003DDB] underline decoration-[#003DDB]/30 underline-offset-[3px] transition-colors hover:decoration-[#003DDB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2";

const LAST_UPDATED = "2 September 2026";

/* Clause order is declared once. Cross references read their number out
   of this map, so reordering cannot leave a stale "see clause 5" behind. */
const ORDER = [
  "guarantee",
  "qualified",
  "pay",
  "cancellations",
  "shortfall",
  "lockin",
  "results",
  "questions",
] as const;

type ClauseId = (typeof ORDER)[number];

const NO: Record<ClauseId, number> = ORDER.reduce(
  (acc, id, i) => {
    acc[id] = i + 1;
    return acc;
  },
  {} as Record<ClauseId, number>,
);

/** Emphasis inside a clause. The commitment itself, not decoration. */
function K({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-[#0B0E14]">{children}</strong>;
}

type Clause = {
  id: ClauseId;
  title: string;
  subs: ReactNode[];
  notice?: { label: string; body: ReactNode };
};

const CLAUSES: Clause[] = [
  {
    id: "guarantee",
    title: "The guarantee",
    subs: [
      <>
        Once your campaign is live, we guarantee a minimum of{" "}
        <K>15 qualified meetings per calendar month</K>, as defined in clause{" "}
        {NO.qualified}.
      </>,
      <>
        This guarantee is written into your service agreement. It is a
        contractual commitment, not an aspiration, and it applies from your
        first full calendar month after launch. The build and launch period is
        typically your first two weeks.
      </>,
    ],
    notice: {
      label: "What this page is",
      body: (
        <>
          The service agreement you sign before we start contains these same
          commitments in full contractual form. Nothing on this page is a
          marketing line that disappears in the contract. Where the two differ,
          the signed agreement governs.
        </>
      ),
    },
  },
  {
    id: "qualified",
    title: "What counts as a qualified meeting",
    subs: [
      <>
        Before anything launches, we agree the definition of a qualified meeting
        with you in writing at onboarding: industry, decision maker seniority,
        company size, geography, and your own disqualifiers.
      </>,
      <>
        A qualified meeting is a booked appointment with a prospect who matches
        that agreed profile. The definition is{" "}
        <K>fixed before launch</K>. It is never invented or reinterpreted after
        the fact, and only meetings matching it ever count towards the minimum
        in clause {NO.guarantee}.
      </>,
    ],
  },
  {
    id: "pay",
    title: "What you pay, and when",
    subs: [
      <>
        The engagement is a simple, flat monthly partnership fee, agreed with
        you transparently on your strategy call and set out in your service
        agreement before you commit to anything.
      </>,
      <>
        <K>There are no per-meeting fees.</K> Whether the system books fifteen
        meetings in a month or fifty, the monthly fee stays the same, so the
        more it books, the less each meeting effectively costs you.
      </>,
      <>
        The monthly fee is billed in advance on your billing date, never
        earlier. If a month falls short of the guaranteed 15 meetings, your next
        bill is deferred until every guaranteed meeting has been delivered. See
        clause {NO.shortfall}.
      </>,
    ],
  },
  {
    id: "cancellations",
    title: "Cancellations, reschedules and no-shows",
    subs: [
      <>
        Our team handles rescheduling and rebooking as part of the service. A
        rescheduled meeting remains the same single meeting and is never counted
        twice towards the minimum.
      </>,
      <>
        Because there are no per-meeting fees, a cancellation never costs you
        anything extra. How cancellations and no-shows are treated against the
        guaranteed minimum is agreed in writing in your service agreement before
        launch.
      </>,
    ],
  },
  {
    id: "shortfall",
    title: "If we fall short of the guarantee",
    subs: [
      <>
        If we deliver fewer than 15 qualified meetings in a calendar month, we
        keep working <K>at no additional charge until all 15 are delivered</K>,
        and your next monthly bill is deferred until they land.
      </>,
      <>
        A slow month costs us, not you. Meetings beyond 15 keep coming at no
        extra cost, and you remain free to end the engagement at any time under
        clause {NO.lockin}.
      </>,
    ],
  },
  {
    id: "lockin",
    title: "No lock-in",
    subs: [
      <>
        The engagement is month to month. There is{" "}
        <K>no minimum term, no lock-in contract and no exit fee.</K> You can
        pause or end the engagement at any time.
      </>,
      <>
        The notice position and the treatment of your final month are set out in
        your service agreement, and we will walk you through both on the call
        before you commit to anything.
      </>,
    ],
  },
  {
    id: "results",
    title: "Results disclaimer",
    subs: [
      <>
        Case studies and testimonials on our website are individual client
        outcomes and are <K>not typical</K>. Revenue figures relate to those
        specific businesses at specific times.
      </>,
      <>
        Your results will vary and, outside the specific meeting volume
        guarantee described in clauses {NO.guarantee} and {NO.shortfall}, are
        not guaranteed. Booked meetings are an input to your sales process.
        Revenue outcomes depend on your offer, your pricing and your sales
        execution.
      </>,
    ],
  },
  {
    id: "questions",
    title: "Questions",
    subs: [
      <>
        If anything here is unclear, ask us before you commit, either on your
        strategy call or by getting in touch directly.
      </>,
      <>
        By email at{" "}
        <a href="mailto:support@novadatech.com.au" className={LINK}>
          support@novadatech.com.au
        </a>
        , by phone on{" "}
        <a href="tel:+18333853923" className={LINK}>
          +1 833 385 3923
        </a>{" "}
        in the United States, or{" "}
        <a href="tel:+61485000813" className={LINK}>
          +61 485 000 813
        </a>{" "}
        in Australia.
      </>,
    ],
  },
];

function Notice({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mt-6 border-l-2 border-[#003DDB] bg-[#F5F8FF] py-4 pl-5 pr-5">
      <p className={`${MICRO} text-[#003DDB]`}>{label}</p>
      <div className={`${BODY} mt-2.5 text-[#2B3340]`}>{children}</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="border-t border-[#E3E6EC] bg-white">
      <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] pb-12 pt-14 md:pb-16 md:pt-20`}>
        <p className={`${MICRO} text-[#003DDB]`}>The written guarantee</p>
        <h1
          className={`${DISPLAY} mt-5 max-w-[15ch] text-[42px] text-[#0A0D14] sm:text-[56px] md:text-[68px]`}
        >
          Guarantee and terms
        </h1>
        <p className={`${BODY} mt-6 max-w-[680px]`}>
          This page sets out, in plain language, exactly what the Novada Tech
          meeting guarantee covers, how a qualified meeting is defined, what you
          pay and when, and what happens when a meeting cancels.
        </p>
        <p className={`${MICRO_TIGHT} mt-8 text-[#9AA3B1]`}>
          Last updated{" "}
          <span className={`${NUM} text-[#5B6472]`}>{LAST_UPDATED}</span>
        </p>
      </div>
    </section>
  );
}

/* The headline commitment, pulled out above the clauses so a reader who
   arrived from the lander sees the substance before the numbering. */
function Summary() {
  const points = [
    {
      k: "15",
      label: "Qualified meetings a month",
      body: "A written minimum in your service agreement, not a marketing line.",
    },
    {
      k: "0",
      label: "Per-meeting fees",
      body: "One flat monthly fee. Book fifty in a month and it does not change.",
    },
    {
      k: "0",
      label: "Lock-in, minimum term or exit fee",
      body: "Month to month. We re-earn your business every month.",
    },
  ];
  return (
    <section className="border-t border-[#E3E6EC] bg-[#0A0D14]">
      <div className={`${WRAP} ${PAD} border-x border-white/10 py-12 md:py-16`}>
        <p className={`${MICRO} text-white/50`}>In short</p>
        <div className="mt-8 grid gap-px overflow-hidden rounded-[8px] bg-white/10 sm:grid-cols-3">
          {points.map((p) => (
            <div key={p.label} className="bg-[#0A0D14] p-6 md:p-7">
              <p className={`${NUM} ${DISPLAY} text-[52px] text-white md:text-[64px]`}>
                {p.k}
              </p>
              <p className={`${MICRO} mt-3 text-white`}>{p.label}</p>
              <p className="mt-2.5 text-[14px] leading-relaxed text-white/60">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contents() {
  return (
    <nav aria-labelledby="contents-heading" className="lg:sticky lg:top-24">
      <h2 id="contents-heading" className={`${MICRO} text-[#0B0E14]`}>
        Contents
      </h2>
      <span
        aria-hidden
        className="mt-3 block h-px w-6 bg-[#E3E6EC] lg:h-6 lg:w-px"
      />
      <ol className="mt-4 space-y-2.5 lg:mt-5">
        {CLAUSES.map((c) => (
          <li key={c.id}>
            <a
              href={`#${c.id}`}
              className="group grid grid-cols-[26px_minmax(0,1fr)] gap-x-2 text-[13px] leading-[1.5] text-[#5B6472] transition-colors hover:text-[#003DDB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2"
            >
              <span className={`${NUM} text-[#9AA3B1] group-hover:text-[#003DDB]`}>
                {NO[c.id]}.
              </span>
              <span>{c.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ClauseBlock({ clause }: { clause: Clause }) {
  const n = NO[clause.id];
  return (
    <section
      id={clause.id}
      className="scroll-mt-24 border-t border-[#E3E6EC] py-9 first:border-t-0 first:pt-0 md:py-11"
    >
      <h2 className="flex items-baseline gap-3">
        <span className={`${NUM} ${MICRO} text-[#003DDB]`}>{n}</span>
        <span className="text-[20px] font-semibold tracking-tight text-[#0B0E14] md:text-[22px]">
          {clause.title}
        </span>
      </h2>

      <div className="mt-6 space-y-5">
        {clause.subs.map((sub, i) => (
          <div
            key={i}
            className="grid grid-cols-[42px_minmax(0,1fr)] gap-x-3 sm:grid-cols-[52px_minmax(0,1fr)] sm:gap-x-4"
          >
            <span className={`${NUM} pt-[3px] text-[13px] text-[#9AA3B1]`}>
              {n}.{i + 1}
            </span>
            <div className={`${BODY} max-w-[680px]`}>{sub}</div>
          </div>
        ))}
      </div>

      {clause.notice ? (
        <div className="sm:pl-[52px]">
          <div className="max-w-[680px]">
            <Notice label={clause.notice.label}>{clause.notice.body}</Notice>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function Body() {
  return (
    <section className="border-t border-[#E3E6EC] bg-white">
      <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-12 md:py-16`}>
        <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
          <div className="lg:self-start">
            <Contents />
          </div>

          <div className="min-w-0">
            {CLAUSES.map((c) => (
              <ClauseBlock key={c.id} clause={c} />
            ))}

            <div className="mt-12 border-t border-[#E3E6EC] pt-8">
              <p className={`${MICRO} text-[#9AA3B1]`}>About this page</p>
              <p className="mt-3 max-w-[680px] text-[15px] leading-[1.75] text-[#5B6472]">
                This page describes the guarantee that applies to the meetings
                engagement. It is not advice about your situation, and it does
                not set out the full extent of your rights under Australian
                law. Your signed service agreement is the operative document. If
                a term here matters to a decision you are making, take your own
                advice on it.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="/meetings-3#book"
                  className="inline-flex items-center justify-center gap-2 rounded-[6px] bg-[#003DDB] px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#0030AE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2"
                >
                  Book a strategy call
                </Link>
                <p className={`${MICRO_TIGHT} text-[#9AA3B1]`}>
                  Novada Tech <span className="text-[#C3CAD5]">·</span> Last
                  updated{" "}
                  <span className={`${NUM} text-[#5B6472]`}>{LAST_UPDATED}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GuaranteeTermsPage() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <FunnelHeader backLabel="Back to the offer" backHref="/meetings-3" />
      <main>
        <Hero />
        <Summary />
        <Body />
      </main>
      <FunnelFooter note="Qualified meetings, booked for you" />
    </div>
  );
}
