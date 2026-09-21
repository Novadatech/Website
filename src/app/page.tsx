/*
 * novadatech.com, the homepage.
 *
 * ══════════════════════════════════════════════════════════════════════
 * REBUILT 21 SEPTEMBER 2026 AS A ROUTER, NOT A SALES PAGE.
 *
 * This page used to sell the practice offer. It cannot any more, because
 * the site now serves two audiences whose vocabularies must never cross,
 * and no single page can sell to a dentist and a home care provider in
 * the same breath without one of them deciding it is not for them.
 *
 * ⚠️ ITS JOB IS NOW NARROW: say what Novada does in one sentence, and
 * get the visitor through the correct door. The argument, the devices,
 * the desks and the booking pressure live on /practices and /care.
 *
 * ⚠️ PAID TRAFFIC MUST NEVER LAND HERE. Meta and Google ad sets point at
 * /practices, /care, or an offer page beneath them. A visitor the ad has
 * already qualified should not be asked to qualify themselves again. If
 * this page starts receiving paid traffic, the ads are misconfigured,
 * not the page.
 *
 * ⚠️ THE POSITION LINE CHANGED with this rebuild, and the reason is
 * structural. "We run your front desk, and everything behind it" is
 * clinic-shaped: a care provider has no front desk. See the header of
 * src/content/offers.ts for the full reasoning.
 * ══════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import StickyCta from "@/components/desk/StickyCta";
import Faq from "@/components/desk/Faq";
import { Band, BandHeading, Rail, Statement } from "@/components/desk/Band";
import {
  BAND_Y,
  BTN_ON_INK,
  BTN_PRIMARY,
  D1,
  D2,
  D4,
  FRAME,
  GUTTER,
  HERO_Y,
  MICRO,
  NUM,
  RAIL_GRID,
} from "@/components/desk/tokens";
import {
  AUDIENCES,
  BOUNDARIES,
  CTA_LABEL,
  HOW_IT_STARTS,
  OPERATING_PROOF,
  POSITION,
  POSITION_SUB,
  offersFor,
} from "@/content/offers";

export const metadata: Metadata = {
  title: "Novada | We run everything except the care",
  description:
    "Managed operations for healthcare practices and care providers. Run by our own team, inside the systems you already use, alongside your people and never instead of them. Nothing clinical, ever.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "We run everything except the care | Novada",
    description:
      "Two desks for practices, two for care providers. Alongside your team, never instead of it, and never anything clinical.",
    type: "website",
  },
};

function Dot() {
  return (
    <span aria-hidden className="text-ink-300">
      ·
    </span>
  );
}

/* The three things this business is most often wrongly assumed to be.
   Each is a statement about how the service is staffed and bounded, not
   a performance claim, so none needs a source. */
const PROOF_STRIP = [
  "Our own team",
  "Never a call centre",
  "Nothing clinical, ever",
];

/* ══════════════════════════════════════════════════════════════════
   THE OPENING
   The position, then the two doors, inside the same screen. A visitor
   decides in about three seconds whether this is for them, and on this
   page the answer they need is not "what is this" but "which half am
   I". The doors are therefore the largest object in the fold.
   ══════════════════════════════════════════════════════════════════ */

function Hero() {
  return (
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
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {PROOF_STRIP.map((t) => (
                <li
                  key={t}
                  className={`${MICRO} flex items-center gap-2 text-brand-200`}
                >
                  <span aria-hidden className="h-1 w-1 rounded-full bg-brand-200" />
                  {t}
                </li>
              ))}
            </ul>

            <h1 className={`${D1} mt-9 max-w-display text-white`}>{POSITION}</h1>

            <p className="mt-7 max-w-prose text-base text-white/70">
              {POSITION_SUB}
            </p>

            {/* ── THE TWO DOORS. The main event of this page. Each is a
                whole link, so on a phone a text target becomes a card
                target. Content comes from the shared AUDIENCES source so
                the pair cannot drift apart. ── */}
            <div className="mt-11 grid gap-px overflow-hidden rounded-lg bg-white/10 md:grid-cols-2">
              {AUDIENCES.map((a) => (
                <Link
                  key={a.slug}
                  href={a.href}
                  className="group flex h-full flex-col bg-canvas-raised p-6 transition-colors duration-150 ease-standard hover:bg-[#161C29] md:p-8"
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className={`${D2} text-white`}>{a.name}</span>
                    <ArrowRight
                      aria-hidden
                      className="mt-1.5 h-5 w-5 shrink-0 text-white/40 transition-[transform,color] duration-150 ease-standard group-hover:translate-x-1 group-hover:text-brand-200"
                    />
                  </span>
                  <span className="mt-3 block text-sm text-white/60">
                    {a.who}
                  </span>
                  <span className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5">
                    {offersFor(a.slug).map((o) => (
                      <span
                        key={o.href}
                        className="text-sm font-medium text-white/85"
                      >
                        {o.name}
                      </span>
                    ))}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href="#book" className={BTN_ON_INK}>
                {CTA_LABEL}
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
                />
              </a>
              <span className="text-sm text-white/60">
                <span className={NUM}>30</span> minutes <Dot /> Nothing signed on
                the call
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   WHY IT HAPPENS
   The one argument that is true in both worlds, stated without either
   world's vocabulary. This is the band that earns the rest of the page,
   and it is deliberately short: the audience-specific version, with its
   device, is one click away on each hub.
   ══════════════════════════════════════════════════════════════════ */

function Mechanism() {
  return (
    <Band index="01" label="Why it happens" tone="tint">
      <AnimatedSection>
        <BandHeading>Nobody is doing anything wrong.</BandHeading>
        <p className="mt-8 max-w-prose text-base text-ink-600">
          Every business that delivers care has a second business inside it.
          The phone, the schedule, the hiring, the records, the payroll. None
          of it is the work you trained for, none of it can be skipped, and all
          of it arrives while you are busy doing the actual job.
        </p>
        <p className="mt-5 max-w-prose text-base text-ink-600">
          So it gets handed to whoever is nearest. A front desk staffer mid-checkout.
          A manager holding an on-call phone at four in the morning. Somebody
          competent, already fully occupied, making the correct decision to
          deal with the person in front of them first, every single time.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.08}>
        <p
          className={`${D4} mt-12 max-w-headline border-l-2 border-brand-500 pl-6 text-ink-950`}
        >
          It is structural, not a staffing failure, and it does not get solved
          by asking the same people to try harder.
        </p>
      </AnimatedSection>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   THE TWO DOORS, AT FULL WIDTH
   The fold carries them as a choice. This band carries them as an
   explanation, for the visitor who scrolled instead of clicking.
   ══════════════════════════════════════════════════════════════════ */

function Doors() {
  return (
    <Band index="02" label="Which half you are">
      <AnimatedSection>
        <BandHeading>Two audiences. Four desks. One boundary.</BandHeading>
        <p className="mt-8 max-w-prose text-base text-ink-600">
          The work that keeps a practice running and the work that keeps a care
          service running are not the same work, so they do not get the same
          pages. Pick the half you are in and everything after it is written
          for you.
        </p>
      </AnimatedSection>

      <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-ink-200 shadow-raise md:grid-cols-2">
        {AUDIENCES.map((a) => (
          <Link
            key={a.slug}
            href={a.href}
            className="group flex h-full flex-col bg-white p-7 transition-colors duration-150 ease-standard hover:bg-brand-50 md:p-9"
          >
            <span className={`${MICRO} text-brand-500`}>{a.name}</span>
            <span className="mt-4 max-w-prose text-base text-ink-950">
              {a.who}
            </span>
            <span className="mt-6 block max-w-prose text-base text-ink-600">
              {a.moment}
            </span>
            <span className="mt-7 flex flex-col gap-3 border-t border-ink-100 pt-6">
              {offersFor(a.slug).map((o) => (
                <span key={o.href} className="block">
                  <span className="block text-sm font-semibold text-ink-950">
                    {o.name}
                  </span>
                  <span className="mt-1 block text-sm text-ink-600">
                    {o.summary}
                  </span>
                </span>
              ))}
            </span>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-500">
              {a.name}
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        ))}
      </div>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   BOUNDARIES
   Only the four that hold for BOTH audiences. The audience-specific
   ones live on the hubs, where they can use that audience's words.
   ══════════════════════════════════════════════════════════════════ */

function Boundaries() {
  const shared = BOUNDARIES.filter((b) => b.audience === "both");
  return (
    <Band index="03" label="What we do not do" tone="tint">
      <AnimatedSection>
        <BandHeading>The boundaries are the product.</BandHeading>
        <p className="mt-8 max-w-prose text-base text-ink-600">
          Not the fine print. These four hold whoever you are and whatever you
          buy. They are contractual rather than cultural, and they do not move.
        </p>
      </AnimatedSection>
      <div className="mt-12 border-t border-ink-200">
        {shared.map((b, i) => (
          <AnimatedSection key={b.tag} delay={i * 0.04}>
            <div className="grid grid-cols-1 items-start gap-x-8 gap-y-3 border-b border-ink-100 py-6 sm:grid-cols-[200px_minmax(0,1fr)]">
              <span className={`${MICRO} pt-1 text-signal-600`}>{b.tag}</span>
              <p className="max-w-prose text-base text-ink-950">{b.body}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Band>
  );
}

function Proof() {
  return (
    <Band index="04" label="Proof of operations" tone="dark">
      <AnimatedSection>
        <Statement>{OPERATING_PROOF}</Statement>
      </AnimatedSection>
    </Band>
  );
}

function HowItStarts() {
  return (
    <Band index="05" label="How it starts" tone="tint">
      <AnimatedSection>
        <BandHeading>Inquiring gets you a conversation.</BandHeading>
      </AnimatedSection>
      <ol className="mt-12 border-t border-ink-200">
        {HOW_IT_STARTS.map((s, i) => (
          <AnimatedSection as="li" key={s.k} delay={i * 0.04}>
            <div className="grid grid-cols-[44px_minmax(0,1fr)] items-start gap-x-4 border-b border-ink-100 py-6 sm:grid-cols-[44px_180px_minmax(0,1fr)] sm:gap-x-8">
              <span className={`${MICRO} ${NUM} pt-1 text-ink-400`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-base font-semibold text-ink-950">{s.k}</span>
              <p className="col-span-2 mt-2 max-w-prose text-base text-ink-600 sm:col-span-1 sm:mt-0">
                {s.v}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </ol>
      <AnimatedSection delay={0.16}>
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-ink-200 pt-8">
          <a href="#book" className={BTN_PRIMARY}>
            {CTA_LABEL}
            <ArrowRight
              aria-hidden
              className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
            />
          </a>
          <span className="text-sm text-ink-500">
            Thirty minutes on how your operation runs today.
          </span>
        </div>
      </AnimatedSection>
    </Band>
  );
}

/* Company-level questions only. Anything answerable only in one
   audience's vocabulary belongs on that audience's offer pages. */
const FAQ = [
  {
    q: "What does Novada actually do?",
    a: "We run the operational work that sits around the care: the phone, the schedule, the hiring, the records and the payroll. Our own team does it, inside the systems you already run, alongside your people rather than in place of them. We do not deliver care of any kind and we never touch a clinical decision.",
  },
  {
    q: "Is this outsourcing, or is it software?",
    a: "Neither, and the distinction matters. You are not buying hours and you are not buying a tool you then have to staff. You are handing over a function that somebody answers for, with named coordinators, agreed protocols and a monthly report against a baseline taken before anything changed.",
  },
  {
    q: "Who is actually doing the work?",
    a: "Named people on our own team, each with their own login under your access control, with permissions limited to the work and revoked the day somebody leaves the role. Never a shared account, never a call centre, and never somebody different every time.",
  },
  {
    q: "What happens on the review call?",
    a: "Thirty minutes on how your operation actually runs today. You leave with a written assessment of whether this fits, including if it does not. A meaningful proportion conclude that it does not yet, and we say so rather than sell anyway.",
  },
];

function Questions() {
  return (
    <Band id="faq" index="06" label="Questions">
      <AnimatedSection>
        <BandHeading>The questions we get first.</BandHeading>
      </AnimatedSection>
      <Faq items={FAQ} openFirst />
    </Band>
  );
}

function FinalCta() {
  return (
    <section id="book" className="border-t border-white/10 bg-canvas-ink">
      <div className={`${FRAME} ${GUTTER} ${BAND_Y} border-x border-white/10`}>
        <div className={RAIL_GRID}>
          <Rail index="07" label="Book" tone="dark" />
          <div className="min-w-0">
            <AnimatedSection>
              <h3 className={`${D2} max-w-headline text-white`}>
                {CTA_LABEL}.
              </h3>
              <p className="mt-6 max-w-prose text-base text-white/70">
                Thirty minutes on how your operation actually runs. You leave
                with a written assessment of whether this fits, including if it
                does not, and a picture of your own numbers before anything
                changes.
              </p>
              <p className="mt-4 max-w-prose text-sm text-white/60">
                Nothing is signed on the call.
              </p>
            </AnimatedSection>
            {/* ── NO CALENDAR ON THE ROUTER, and that is deliberate.
                Each offer books into its own calendar, so any calendar
                placed here would be named for one of the two audiences
                and wrong for the other at the exact moment of
                commitment. The router's job is to route; it hands the
                reader to the right door and the calendar is the first
                thing on it. ── */}
            <AnimatedSection delay={0.08}>
              <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-white/10 md:grid-cols-2">
                {AUDIENCES.map((a) => (
                  <Link
                    key={a.slug}
                    href={`${a.href}#book`}
                    className="group flex h-full flex-col bg-canvas-raised p-6 transition-colors duration-150 ease-standard hover:bg-[#161C29] md:p-8"
                  >
                    <span className={`${MICRO} text-brand-200`}>{a.name}</span>
                    <span className="mt-3 flex items-start justify-between gap-3">
                      <span className="text-lg font-semibold text-white">
                        Book a review
                      </span>
                      <ArrowRight
                        aria-hidden
                        className="mt-1 h-5 w-5 shrink-0 text-white/40 transition-[transform,color] duration-150 ease-standard group-hover:translate-x-1 group-hover:text-brand-200"
                      />
                    </span>
                    <span className="mt-3 block text-sm text-white/60">
                      {a.who}
                    </span>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      {/* No audience prop: on the router the nav lists the two doors. */}
      <DeskNav tone="dark" />

      <main>
        <Hero />
        <Mechanism />
        <Doors />
        <Boundaries />
        <Proof />
        <HowItStarts />
        <Questions />
        <FinalCta />
      </main>

      <DeskFooter />
      <StickyCta label={CTA_LABEL} tagline={POSITION} />
    </div>
  );
}
