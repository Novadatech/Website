import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Band, BandHeading } from "@/components/desk/Band";
import DeskFooter from "@/components/desk/DeskFooter";
import DeskNav from "@/components/desk/DeskNav";
import StickyCta from "@/components/desk/StickyCta";
import {
  BODY,
  BTN_ON_INK,
  BTN_PRIMARY,
  D1,
  FRAME,
  GUTTER,
  HERO_Y,
  MICRO,
  MICRO_TIGHT,
  RAIL_GRID,
  SMALL,
} from "@/components/desk/tokens";
import { BOOKING, CTA_LABEL, EVIDENCE, LEAKAGE } from "@/content/offers";

/*
 * /practices — the practices hub, rebuilt 14 October 2026 for the new
 * two-pillar offer.
 *
 * 🔴 THE TWO PILLARS ARE SEQUENTIAL, NOT PARALLEL, and this is the one
 * structural difference from the care hub. There the two halves solve
 * different problems and a provider might need only one. Here the audit
 * finds what is being lost and the continuity service stops it being
 * lost, in that order.
 *
 * The spine pair encodes the order in grammar rather than asserting it:
 * "Find out what you are losing" and "Stop losing it every week". The
 * pronoun in the second has no referent except the first, so the two
 * cards cannot be read as alternatives even sitting side by side.
 * ⚠️ Never paraphrase either phrase, anywhere.
 *
 * 🔴 NO CALENDAR HERE. Each pillar has its own, feeding its own pipeline.
 * The ask recommends the audit and demotes the other route to a text
 * link. Equal buttons would be the product quiz the old site was
 * criticised for.
 *
 * 🔴 "GAP" IS BANNED AS A SCHEDULING WORD on this domain. In Australian
 * healthcare it is the patient's out-of-pocket after the rebate.
 */

export const metadata: Metadata = {
  title: "Patient bookings and appointment time | Novada Tech",
  description:
    "Find out how many bookings your practice is losing, then stop losing them. Audit and ongoing booking continuity for Australian healthcare practices.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "Patient bookings and appointment time | Novada Tech",
    description:
      "You may already have all the patient demand you need. The question is how much of it turns into an appointment.",
    type: "website",
  },
};

/* One object per step, so the card and the exhibit column cannot
   disagree about which step does what. */
const STEPS = [
  {
    offer: LEAKAGE,
    question: "“How many people contacted us last month and never got an appointment?”",
    commercial: "One-off piece of work",
    link: "See what we look at",
  },
  {
    offer: BOOKING,
    question: "“Who is ringing the patients who ignored the last three texts?”",
    commercial: "Month to month",
    link: "See how it is run",
  },
];

const EXHIBIT = [
  {
    event: "Enquiries that never became appointments",
    found: "Counted, with the reason each one stalled",
    fixed: "Followed up until there is an answer either way",
  },
  {
    event: "Cancellations that left the time unused",
    found: "Counted, and how long each one stayed empty",
    fixed: "Offered to patients waiting for an earlier time",
  },
  {
    event: "Recalls the practitioners had already set",
    found: "Counted, and how many were completed",
    fixed: "Worked by phone, at the interval the practitioner set",
  },
];

const BOUNDARIES = [
  {
    h: "We never work to a booking target.",
    b: "The objective is not to maximise appointments regardless of need. Recalls are yours, set by your practitioners at the interval they chose clinically. We administer them. We do not create them, and no patient is ever contacted to reach a number.",
  },
  {
    h: "Nothing clinical.",
    b: "No triage, no judgement of urgency, no advice of any kind. Anything clinical stops with us and goes to your own registered people, under a protocol agreed in writing.",
  },
  {
    h: "We do not promise a revenue figure.",
    b: "What we look for is written on these pages. What we find comes out of your own records. Not every missed call was a patient wanting an appointment.",
  },
  {
    h: "We never ask a patient for a review.",
    b: "Not a rating, not a testimonial, not a referral. We also put no offer and no incentive in a recall message, ever.",
  },
  {
    h: "Your systems, your records.",
    b: "We work inside the practice software you already run, with access agreed in writing. We do not touch the clinical record, and there is no platform to buy.",
  },
];

export default function Page() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav tone="dark" audience="practices" bookHref="#book" />

      <main>
        {/* ── HERO ───────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-white/10 bg-canvas-ink">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -left-40 -top-56 h-[620px] w-[620px] rounded-full bg-brand-500/20 blur-[130px]" />
            <div className="absolute -bottom-72 -right-40 h-[560px] w-[560px] rounded-full bg-signal-600/10 blur-[140px]" />
          </div>
          <div
            className={`${FRAME} ${GUTTER} ${HERO_Y} relative border-x border-white/10`}
          >
            <div className={RAIL_GRID}>
              <div aria-hidden className="lg:sticky lg:top-28 lg:self-start">
                <span className="block h-px w-10 bg-brand-200 lg:mt-3 lg:h-10 lg:w-0.5" />
              </div>
              <div className="min-w-0">
                <p className={`${MICRO} text-brand-200`}>
                  For dental, allied health and medical practices in Australia
                </p>
                {/* Argues against an adjacent category: a marketing agency
                    cannot say this without talking itself out of a sale. */}
                <h1 className={`${D1} mt-6 max-w-headline text-white`}>
                  You may already have all the patient demand you need.
                </h1>
                <p className="mt-7 max-w-prose text-base text-white/70">
                  The question is how much of it turns into an appointment.
                  First we read your own enquiry, booking, cancellation and
                  recall records, and show you where bookings are going
                  missing. Then, if the numbers justify it, we run the
                  follow-up that stops it happening again.
                </p>
                <div className="mt-9">
                  <a href="#book" className={BTN_ON_INK}>
                    {CTA_LABEL}
                    <ArrowRight
                      aria-hidden
                      className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
                <p className="mt-5 text-sm text-white/55">
                  30 minutes. Nothing is signed on the call.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 01 THE TWO STEPS ───────────────────────────────────── */}
        <Band index="01" label="The two steps">
          <BandHeading>Find it, then stop losing it</BandHeading>
          <p className={`${BODY} mt-6`}>
            One is a one-off look at your own numbers. The other is the ongoing
            work that keeps those bookings from going missing again. They run
            in that order, because you cannot fix what nobody has counted.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-ink-100 md:grid-cols-2">
            {STEPS.map((s) => (
              <Link
                key={s.offer.href}
                href={s.offer.href}
                className="group flex h-full flex-col bg-white p-6 transition-colors duration-150 ease-standard hover:bg-brand-50 md:p-8"
              >
                <p className={`${MICRO} text-brand-500`}>{s.offer.spine}</p>
                <p className="mt-3 text-xl font-semibold text-ink-950">
                  {s.offer.navLabel ?? s.offer.name}
                </p>
                <p className={`${MICRO_TIGHT} mt-1.5 text-ink-400`}>
                  {s.offer.name}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-600">
                  {s.offer.summary}
                </p>
                <p className="mt-5 border-l-2 border-ink-200 pl-4 text-sm italic text-ink-950">
                  {s.question}
                </p>
                <p
                  className={`${MICRO_TIGHT} mt-5 inline-flex self-start rounded-xs bg-ink-50 px-2.5 py-1 text-ink-500`}
                >
                  {s.commercial}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-500">
                  {s.link}
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>

          {/* The second route has to be real, not a dead end. */}
          <p className={`${BODY} mt-7`}>
            Most practices start with the first. A practice that already knows
            the front desk cannot keep up can start with the second. That is a
            fair call.
          </p>
        </Band>

        {/* ── 02 THE MOMENT ──────────────────────────────────────── */}
        <Band index="02" label="The moment" tone="tint">
          <BandHeading>Eleven on a Tuesday</BandHeading>
          <p className={`${BODY} mt-7`}>
            The phone rings out at eleven on a Tuesday, in a practice that is
            open, fully staffed and running normally. Whoever is at the front
            desk is mid-checkout, with a patient standing in front of them.
            That caller tries again later, or tries somebody else. Nothing is
            recorded either way.
          </p>

          <p className="mt-9 text-base font-semibold text-ink-950">
            Nobody is doing anything wrong
          </p>
          <p className={`${BODY} mt-3`}>
            A front desk is one person doing one thing at a time, and the
            patient at the counter always wins. That is the correct decision,
            made correctly, every time. It is also why the recall list is the
            first thing dropped every day. It is the only job at the desk with
            nobody standing in front of it.
          </p>

          {/* ⚠️ The only two statistics permitted on these pages. Both are
              about AVAILABILITY and explicitly exclude cost, which is the
              one thing this offer does not touch. No missed-call figure
              appears anywhere, because no honest Australian one exists. */}
          <div className="mt-11 grid gap-px overflow-hidden rounded-lg bg-ink-100 md:grid-cols-2">
            {[EVIDENCE.gpAccess, EVIDENCE.gpWait].map((f) => (
              <div key={f.value} className="bg-white p-6 md:p-7">
                <p className={`${D1} text-brand-500`}>{f.value}</p>
                <p className="mt-3 text-sm font-medium text-ink-950">
                  {f.label}
                </p>
                <p className={`${MICRO_TIGHT} mt-3 text-ink-400`}>{f.source}</p>
              </div>
            ))}
          </div>
          <p className={`${SMALL} mt-5 max-w-prose`}>
            Those reasons are availability, not price: no appointment when it
            was needed, the practice too busy, the wait too long. Some of those
            patients were ringing practices that were open.
          </p>
        </Band>

        {/* ── 03 THE EXHIBIT ─────────────────────────────────────────
            Three columns, and the sequence IS the left-to-right reading
            order. One column of events, then the two responses in order.
            That is the only way "do the audit first" becomes obvious
            rather than asserted. ── */}
        <Band index="03" label="The exhibit">
          <BandHeading>The same week, twice</BandHeading>
          <p className={`${BODY} mt-6`}>
            One week in a multi-practitioner physiotherapy clinic. A busy
            clinic, one receptionist, more enquiries than the front desk can
            finish.
          </p>

          <div className="mt-10 overflow-x-auto rounded-lg border border-ink-100">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">
                What the audit counts, and what the ongoing work does about it.
              </caption>
              <thead>
                <tr className="bg-ink-50">
                  <th className={`${MICRO} p-4 text-ink-500`} scope="col">
                    What happened that week
                  </th>
                  <th className={`${MICRO} p-4 text-brand-500`} scope="col">
                    {LEAKAGE.spine}
                  </th>
                  <th className={`${MICRO} p-4 text-brand-500`} scope="col">
                    {BOOKING.spine}
                  </th>
                </tr>
              </thead>
              <tbody>
                {EXHIBIT.map((r) => (
                  <tr key={r.event} className="border-t border-ink-100">
                    <th
                      scope="row"
                      className="p-4 align-top text-sm font-medium text-ink-950"
                    >
                      {r.event}
                    </th>
                    <td className="p-4 align-top text-sm text-ink-600">
                      {r.found}
                    </td>
                    <td className="p-4 align-top text-sm text-ink-600">
                      {r.fixed}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={`${SMALL} mt-6 max-w-prose`}>
            An illustration, not a client. We have not seen your records, and
            we would not guess.
          </p>
        </Band>

        {/* ── 04 WHERE TO START ──────────────────────────────────── */}
        <Band index="04" label="Where to start" tone="tint">
          <BandHeading>Start with the audit</BandHeading>
          <p className={`${BODY} mt-7`}>
            It reads your own records, so the number is yours and not an
            industry figure. It also tells you whether the ongoing work is
            worth paying for.
          </p>
          {/* The absence-as-positioning move. Every competitor in this
              category quotes one of the fabricated figures. Naming the
              absence is the one claim a dishonest one cannot copy. */}
          <p className={`${BODY} mt-5`}>
            There is no honest Australian figure for what a missed call is
            worth. The ones circulating are invented, and you will not find one
            here. Only a measurement of your own practice means anything.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="#book" className={BTN_PRIMARY}>
              {CTA_LABEL}
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
              />
            </a>
            <span className={SMALL}>
              30 minutes. Nothing is signed on the call.
            </span>
          </div>
        </Band>

        {/* ── 05 THE BOUNDARIES ──────────────────────────────────── */}
        <Band index="05" label="The boundaries">
          <BandHeading>What we will never do</BandHeading>
          <p className={`${BODY} mt-6`}>These are contractual, not cultural.</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-ink-100 md:grid-cols-2">
            {BOUNDARIES.map((b) => (
              <div key={b.h} className="bg-white p-6 md:p-7">
                <h4 className="text-base font-semibold text-ink-950">{b.h}</h4>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                  {b.b}
                </p>
              </div>
            ))}
          </div>
          <p className={`${SMALL} mt-6 max-w-prose`}>
            Anything that could be urgent goes to your qualified people under
            an agreed escalation path. Nothing we do is clinical, and nothing
            we do replaces legal or privacy advice.
          </p>
        </Band>

        {/* ── 06 THE ASK ─────────────────────────────────────────── */}
        <section id="book" className="border-t border-white/10 bg-canvas-ink">
          <div
            className={`${FRAME} ${GUTTER} border-x border-white/10 py-16 md:py-24 lg:py-32`}
          >
            <div className={RAIL_GRID}>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-3 lg:block">
                  <span className={`${MICRO} tabular text-white/55`}>06</span>
                  <span
                    aria-hidden
                    className="h-px w-6 bg-white/20 lg:my-3 lg:h-6 lg:w-px"
                  />
                  <h2 className={`${MICRO} text-white/85`}>Book</h2>
                </div>
              </div>
              <div className="min-w-0">
                <BandHeading dark>{CTA_LABEL}</BandHeading>
                <p className="mt-6 max-w-prose text-base text-white/70">
                  Thirty minutes on how booking enquiries reach your practice
                  today and what happens to them. You leave with an honest view
                  of whether this fits. A meaningful proportion conclude that it
                  does not yet, and we say so.
                </p>
                <p className="mt-7 text-base text-white">
                  Nothing is signed on the call.
                </p>

                <p className="mt-11 text-lg font-semibold text-white">
                  Not sure which? Start with the audit.
                </p>
                <p className="mt-3 max-w-prose text-base text-white/70">
                  If you already know the front desk cannot keep up, book the
                  booking review instead. Each is booked on its own page.
                </p>

                <div className="mt-9">
                  <p className={`${MICRO} text-brand-200`}>{LEAKAGE.name}</p>
                  <div className="mt-3">
                    <Link href={`${LEAKAGE.href}#book`} className={BTN_ON_INK}>
                      {CTA_LABEL}
                      <ArrowRight
                        aria-hidden
                        className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>

                {/* ⚠️ A text link, not a second button. A ranked pair is a
                    recommendation; an equal pair is the quiz again. */}
                <p className="mt-7">
                  <Link
                    href={`${BOOKING.href}#book`}
                    className="group inline-flex items-center gap-2 border-b border-white/25 pb-0.5 text-sm font-semibold text-white transition-colors duration-150 ease-standard hover:border-brand-200 hover:text-brand-200"
                  >
                    Front desk already underwater? Book the booking review
                    <ArrowRight
                      aria-hidden
                      className="h-3.5 w-3.5 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
                    />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DeskFooter bookHref="#book" />
      <StickyCta
        label={CTA_LABEL}
        tagline="Dental, allied health and medical practices."
      />
    </div>
  );
}
