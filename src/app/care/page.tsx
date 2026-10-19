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
  CARD,
  D1,
  FRAME,
  GUTTER,
  HERO_Y,
  MICRO,
  MICRO_TIGHT,
  RAIL_GRID,
  SMALL,
} from "@/components/desk/tokens";
import Pathway from "@/components/offer/Pathway";
import { CONTINUITY, CTA_LABEL, EVIDENCE, ROSTERING } from "@/content/offers";

/*
 * /care — the care audience hub, rebuilt 14 October 2026 for the new
 * two-pillar offer.
 *
 * ⚠️ THIS PAGE SELLS THE DISTINCTION, NOT EITHER PILLAR. Its whole job
 * is to make a provider able to say out loud what the two halves are,
 * and that they probably need both. Detail belongs on the pillar pages.
 *
 * 🔴 NO CALENDAR ON THIS PAGE, and that is not an oversight. Each
 * pillar has its own calendar feeding its own pipeline, so a calendar
 * here would be named for one half, wrong for the other at the moment of
 * commitment, and would file the booking against the wrong offer.
 *
 * ⚠️ SO THE ASK IS A PRESCRIPTION, NOT A CHOOSER. The retired hub
 * handed the reader two product cards under a booking heading and made
 * them diagnose themselves at peak intent, which was the most expensive
 * problem on the old site. This one recommends a half, gives the reason,
 * and demotes the other route to a text link. Never flatten those two
 * routes into equal buttons: a ranked pair is a recommendation, an equal
 * pair is the quiz again.
 *
 * ⚠️ THE FIXED PAIR OF PHRASES is the comprehension spine of the whole
 * care side: "the workers you already have" / "the workers you do not
 * have yet". It appears here, as the section heading on each pillar
 * page, and in each page's admission of its own limit. Never paraphrase
 * it. A synonym breaks the one thing holding the two halves apart.
 */

export const metadata: Metadata = {
  title: "Rostering and workforce for NDIS and aged care | Novada",
  description:
    "Make better use of the workforce you have, and build the workforce you need. For Australian NDIS, home care and aged care providers. Book a 30-minute review.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "Rostering and workforce for NDIS and aged care | Novada",
    description:
      "One is about how well you use the workers you already have. The other is about whether you have enough workers at all. Most providers need both.",
    type: "website",
  },
};

/* The two halves, as one object each, so the card and the exhibit row
   cannot disagree about which pillar answers which question. */
const HALVES = [
  {
    offer: ROSTERING,
    question:
      "“Why are we paying overtime when some of our workers have hours available?”",
    commercial: "One-off piece of work",
    link: "See what we look at",
    exhibitQ: "Was there a cleared worker nearby who wanted the hours?",
    exhibitA:
      "We look at your rosters, overtime and agency bookings over time, find the pattern, and show you the cover that was already available and cheaper.",
  },
  {
    offer: CONTINUITY,
    question:
      "“Why are we still using an agency for shortages we could see coming?”",
    commercial: "Month to month",
    link: "See how it is built",
    exhibitQ: "Was there simply nobody to ring?",
    exhibitA:
      "We help you recruit, screen and induct enough relief workers that there is somebody to ring next Saturday, and the Saturday after that.",
  },
];

const BOUNDARIES = [
  {
    h: "We never recommend less care.",
    b: "Every change has to respect participant and resident needs, worker qualifications, entitlements and any mandated staffing level. Efficiency here means waste, never thinner cover.",
  },
  {
    h: "We do not promise savings.",
    b: "What we look for is written on these pages. What we find comes out of your own rosters and payroll, so we will not put a number on it before we have seen them.",
  },
  {
    h: "We will not end your agency use.",
    b: "Agencies stay necessary for emergencies, specialist needs and genuine shortfalls. What we work on is the avoidable use: the predictable absences you are paying agency rates to cover.",
  },
  {
    h: "You stay the employer.",
    b: "You employ your own people and choose every hire. Final suitability, safeguarding and employment decisions are yours.",
  },
  {
    h: "Your systems, not ours.",
    b: "We work inside the rostering and payroll systems you already run. Nothing migrates, and there is no platform to buy.",
  },
];

export default function Page() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav tone="dark" audience="care" bookHref="#book" />

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
                  For NDIS, home care and aged care providers
                </p>
                <h1 className={`${D1} mt-6 max-w-headline text-white`}>
                  Make better use of the workforce you have. Build the workforce
                  you need.
                </h1>
                {/* "Two things." is load-bearing: a reader who has just met
                    a two-clause H1 will otherwise try to read the clauses
                    as one idea restated. */}
                <p className="mt-7 max-w-prose text-base text-white/70">
                  Two things. We look at what the roster costs to run and at
                  what you delivered and never properly claimed, and show you
                  both. And we help you recruit, screen and induct the workers
                  you are short of. Most providers need both, and one
                  conversation covers both.
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

        {/* ── 01 THE TWO HALVES ──────────────────────────────────────
            Directly under the hero, before any problem narrative. Five
            seconds surfaces a page's primary purpose and never a third,
            lesser one, so the distinction cannot be left to be found
            later. It has to be the next thing. ── */}
        <Band index="01" label="The two halves">
          <BandHeading>Two halves of the same problem</BandHeading>
          <p className={`${BODY} mt-6`}>
            One is about how well you use the workers you already have. The
            other is about whether you have enough workers at all.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-ink-100 md:grid-cols-2">
            {HALVES.map((h) => (
              <Link
                key={h.offer.href}
                href={h.offer.href}
                className="group flex h-full flex-col bg-white p-6 transition-colors duration-150 ease-standard hover:bg-brand-50 md:p-8"
              >
                <p className={`${MICRO} text-brand-500`}>{h.offer.spine}</p>
                <p className="mt-3 text-xl font-semibold text-ink-950">
                  {h.offer.navLabel ?? h.offer.name}
                </p>
                <p className={`${MICRO_TIGHT} mt-1.5 text-ink-400`}>
                  {h.offer.name}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-600">
                  {h.offer.summary}
                </p>
                <p className="mt-5 border-l-2 border-ink-200 pl-4 text-sm italic text-ink-950">
                  {h.question}
                </p>
                {/* The commercial shape sits on the card, not at the ask.
                    This is the one place the reader is deliberately
                    comparing the halves, so a difference between them
                    reads as information rather than as terms. */}
                <p
                  className={`${MICRO_TIGHT} mt-5 inline-flex self-start rounded-xs bg-ink-50 px-2.5 py-1 text-ink-500`}
                >
                  {h.commercial}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-500">
                  {h.link}
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>

          <p className={`${BODY} mt-7`}>
            Most providers have both. You do not need to work out which, and
            finding out is what the call is for.
          </p>

          {/* \u26a0\ufe0f THE SAME DIAGRAM AS THE HOMEPAGE, one audience. It is
              rendered from PATHWAYS, never written out here, so this
              page cannot disagree with the homepage about what we do. */}
          <div className="mt-14 border-t border-ink-100 pt-12">
            <Pathway audience="care" showHeading={false} note="The two halves are bought separately. Most providers need both, but the audit is not a gate you have to pass through: if you already know you are short of workers, start there." />
          </div>
        </Band>

        {/* ── 02 THE MOMENT ──────────────────────────────────────── */}
        <Band index="02" label="The moment" tone="tint">
          <BandHeading>Six o&rsquo;clock on a Saturday</BandHeading>
          <p className={`${BODY} mt-7`}>
            A support worker in one of your SIL houses calls in sick at six on a
            Saturday evening. You extend the worker already on shift, at
            overtime. If nobody will stay, you ring an agency. The participant
            is supported, which is the part that matters, and it costs more than
            that shift was ever funded for. By Monday it is just another
            weekend.
          </p>

          <p className="mt-9 text-base font-semibold text-ink-950">
            Nobody is doing anything wrong
          </p>
          <p className={`${BODY} mt-3`}>
            The coordinator made the right call with the options in front of
            them at six on a Saturday. The problem sits upstream of them. There
            was no cheaper cover visible, and there may not have been any
            cheaper cover to find. Those are two different problems, and they
            have two different answers.
          </p>

          {/* ⚠️ AUSTRALIAN AND DISABILITY-SPECIFIC. Both figures come from
              one report, read out of the primary PDF, and the labels must
              keep saying "disability support". This audience also includes
              home care and aged care, so widening them would be a claim
              the source does not support. */}
          <div className="mt-11 grid gap-px overflow-hidden rounded-lg bg-ink-100 md:grid-cols-2">
            {[EVIDENCE.turnover, EVIDENCE.fullTime].map((f) => (
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
            A workforce that turns over at that rate needs a recruitment
            pipeline running all the time, not only when a shift is empty.
          </p>
        </Band>

        {/* ── 03 THE EXHIBIT ─────────────────────────────────────────
            One absence, traced to two causes. The only way to make "most
            providers need both" believable rather than asserted, and it
            lets the reader answer in their head instead of in a form. ── */}
        <Band index="03" label="One absence, two answers">
          <BandHeading>Same Saturday, two different causes</BandHeading>
          <p className={`${BODY} mt-6`}>
            Which half you need depends on which of these is true for you.
          </p>

          <div className="mt-10 flex flex-col gap-px overflow-hidden rounded-lg bg-ink-100">
            {HALVES.map((h) => (
              <div
                key={h.offer.href}
                className="grid gap-5 bg-white p-6 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:gap-8 md:p-8"
              >
                <div>
                  <p className={`${MICRO} text-brand-500`}>
                    {h.offer.navLabel ?? h.offer.name}
                  </p>
                  <p className="mt-3 text-base font-semibold text-ink-950">
                    {h.offer.spine}
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="text-base font-medium text-ink-950">
                    {h.exhibitQ}
                  </p>
                  <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-600">
                    {h.exhibitA}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Constraint handled in eleven words rather than a disclaimer
              block: we must never imply an audit has already happened. */}
          <p className={`${SMALL} mt-6 max-w-prose`}>
            Most providers answer yes to both. Nothing here is a finding about
            your service. We have not seen your rosters, and we would not guess.
          </p>
        </Band>

        {/* ── 04 ONE CONVERSATION ────────────────────────────────── */}
        <Band index="04" label="How it starts" tone="tint">
          <BandHeading>Both halves start the same way</BandHeading>
          <p className={`${BODY} mt-7`}>
            Both halves start the same way, with a look at how your workforce is
            being used and where it is short. You book the review for the half
            you think you need, and if it turns out to be the other one, that is
            a useful thing to find out in thirty minutes.
          </p>
          <p className={`${BODY} mt-5`}>
            You leave with an honest view of whether this fits. A meaningful
            proportion conclude that it does not yet, and we say so.
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
            Where a roster raises an award or enterprise agreement question, we
            identify it for your qualified people to resolve. Nothing we do
            replaces legal, payroll, clinical or regulatory advice, and nothing
            we do is clinical.
          </p>
        </Band>

        {/* ── 06 THE ASK ─────────────────────────────────────────────
            No calendar here, by design: see the note at the top of this
            file. A recommendation with a reason, and the other route
            visibly subordinate. ── */}
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
                  Thirty minutes on how your workforce is being used today and
                  where it is short. You leave with an honest view of whether
                  this fits, including if it does not.
                </p>
                <p className="mt-7 text-base text-white">
                  Nothing is signed on the call.
                </p>

                <p className="mt-11 text-lg font-semibold text-white">
                  Not sure which? Start with the rostering review.
                </p>
                <p className="mt-3 max-w-prose text-base text-white/70">
                  The expensive problem is usually the cover you are already
                  paying for, and that review reads your own numbers. If you
                  already know the harder problem is that there is nobody to
                  ring, start with workforce continuity instead. Each review is
                  booked on its own page.
                </p>

                <div className="mt-9">
                  <p className={`${MICRO} text-brand-200`}>
                    {ROSTERING.name}
                  </p>
                  <div className="mt-3">
                    <Link href={`${ROSTERING.href}#book`} className={BTN_ON_INK}>
                      {CTA_LABEL}
                      <ArrowRight
                        aria-hidden
                        className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>

                {/* ⚠️ A TEXT LINK, NOT A SECOND BUTTON. Two equal actions
                    split intent; a ranked pair catches the reader who
                    already knows the answer is the other half. */}
                <p className="mt-7">
                  <Link
                    href={`${CONTINUITY.href}#book`}
                    className="group inline-flex items-center gap-2 border-b border-white/25 pb-0.5 text-sm font-semibold text-white transition-colors duration-150 ease-standard hover:border-brand-200 hover:text-brand-200"
                  >
                    Staffing is the bigger problem? Book the workforce review
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
        tagline="NDIS, home care and aged care providers."
      />
    </div>
  );
}
