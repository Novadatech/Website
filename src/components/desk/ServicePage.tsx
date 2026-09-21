/*
 * The shared scaffold for the two service pages.
 *
 * The brief requires the two offers to be SIBLINGS: equal weight in the
 * navigation, their own pages, neither ranked above the other. The reliable
 * way to guarantee that is for both pages to be the same component with
 * different content, rather than two hand-built pages that drift apart the
 * first time somebody edits one of them.
 *
 * So: if you are about to add a section to one service page, add it to this
 * scaffold and give the other page content for it, or accept that the two
 * offers no longer look like equals.
 *
 * Every rule that governs copy on this site lives in the header of
 * src/content/offers.ts. Read it before changing a word here.
 *
 * ⚠️ SERVER COMPONENT SINCE 16 SEPTEMBER 2026. It used to open with
 * "use client" for one useState driving the FAQ accordion, which put both
 * service pages into the client bundle in full. The FAQ is native
 * <details> now. The band primitives come from ./Band, the type, colour,
 * spacing and motion tokens from ./tokens, so this file no longer carries
 * a private copy of the design system that can drift from the homepage's.
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import BookingEmbed from "@/components/desk/BookingEmbed";
import StickyCta from "@/components/desk/StickyCta";
import Faq from "@/components/desk/Faq";
import Calculator, { type CalcConfig } from "@/components/desk/Calculator";
import {
  ComplianceHorizon,
  BaselineReport,
  OvernightEvent,
} from "@/components/desk/viz";
import { Band, BandHeading, Rail, Statement } from "@/components/desk/Band";
import {
  BAND_Y,
  BTN_PRIMARY,
  BTN_ON_INK,
  D1,
  D2,
  FRAME,
  GUTTER,
  HERO_Y,
  MICRO,
  NUM,
  RAIL_GRID,
} from "@/components/desk/tokens";
import {
  CTA_LABEL,
  BOUNDARIES,
  type Offer,
  type Audience,
} from "@/content/offers";

function Dot() {
  return (
    <span aria-hidden className="text-ink-300">
      ·
    </span>
  );
}

export type ServicePageProps = {
  offer: Offer;
  /** The 3-second test. States the offer plainly; no cleverness. */
  headline: React.ReactNode;
  /** One paragraph. What it is, in the reader's own words. */
  standfirst: string;
  /** The recognisable moment. Specific beats impressive. */
  moment: { label: string; body: string };
  /** Why the problem exists, and why it is not a staffing failure. */
  mechanism: { heading: string; body: string[] };
  /** The work, as a named register rather than a numbered list. */
  work: { k: string; v: string }[];
  /** What is measured and reported. */
  measured: string[];
  /** Which boundary tags this page surfaces, in order. */
  boundaryTags: string[];
  /** Optional device for the mechanism band, by slug. */
  device?: "compliance" | "overnight" | null;
  /**
   * The assessment calculator for THIS offer.
   *
   * ⚠️ It sits immediately above the booking band on purpose. The
   * calculator opens a gap using the reader's own arithmetic; the
   * calendar is the next thing they see. Putting anything between the
   * two wastes the only moment on the page where the reader has just
   * quantified their own problem.
   */
  calculator?: CalcConfig;
  /** The sibling, for the cross-link band. */
  sibling: Offer;
  siblingWhy: string;
};

export default function ServicePage(p: ServicePageProps) {
  /* ⚠️ THROWS ON AN UNKNOWN TAG, and that is deliberate. This used to
     be `.filter(Boolean)`, so renaming a boundary in offers.ts silently
     removed it from every page that referenced the old name, with no
     error anywhere. These pages are statically rendered, so a throw here
     fails the build, which is exactly when we want to hear about it. */
  const bounds = p.boundaryTags.map((t) => {
    const b = BOUNDARIES.find((x) => x.tag === t);
    if (!b) {
      throw new Error(
        `ServicePage(${p.offer.href}): unknown boundary tag "${t}". ` +
          `Tags must match src/content/offers.ts exactly.`,
      );
    }
    return b;
  });

  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav tone="dark" audience={p.offer.audience} />

      <main>
        {/* ── HERO. The same graphite fold as the homepage, and for the
            same reason: a white page that opens with a headline and two
            paragraphs is the shape of an article, and cold paid traffic
            reads it as one. canvas-ink is a surface this site already
            reserved for the proof band and the booking band, so this is
            a promotion of an existing surface rather than a new colour.

            Server-rendered, no entrance animation, no opacity:0 anywhere
            in the fold. The reader is on a phone between patients, often
            on a slow connection, so the fold paints from HTML and CSS
            alone.

            ⚠️ BTN_ON_INK, never BTN_PRIMARY. brand-500 on canvas-ink is
            1.9:1. See tokens.ts.

            Same rail grid as every band below it, with a rule in the
            rail cell in place of a label, so the hero's left edge and
            the page's left edge are the same left edge. ── */}
        <section className="relative overflow-hidden border-b border-white/10 bg-canvas-ink">
          {/* ⚠️ THE WASHES LIVE IN THEIR OWN CLIPPING BOX, and they must stay
              there. Written first as two absolute children of the section with
              negative -left-40 / -right-40 offsets, they pushed the document's
              scrollWidth to 420px at a 320px viewport, so every phone got a
              horizontal scrollbar and the fold could be dragged sideways. The
              section's own overflow-hidden did not contain them. An inset-0
              box with its own overflow-hidden does, at every width. */}
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
                <p className={`${MICRO} text-brand-200`}>{p.offer.name}</p>
                <h1 className={`${D1} mt-6 max-w-headline text-white`}>
                  {p.headline}
                </h1>
                <p className="mt-7 max-w-prose text-base text-white/70">
                  {p.standfirst}
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <a href="#book" className={BTN_ON_INK}>
                    {CTA_LABEL}
                    <ArrowRight
                      aria-hidden
                      className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
                    />
                  </a>
                  <span className="flex flex-col gap-1.5">
                    {p.calculator ? (
                      <a
                        href="#calculator"
                        className="group inline-flex items-center gap-2 self-start border-b border-white/25 pb-0.5 text-sm font-semibold text-white transition-colors duration-150 ease-standard hover:border-brand-200 hover:text-brand-200"
                      >
                        Work out your own number first
                        <ArrowRight
                          aria-hidden
                          className="h-3.5 w-3.5 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
                        />
                      </a>
                    ) : null}
                    <span className="text-sm text-white/60">
                      <span className={NUM}>30</span> minutes <Dot /> Nothing
                      signed on the call
                    </span>
                  </span>
                </div>

                {/* The scope, in the fold. The reader arrived from an ad
                    asking one question, which is what this actually
                    covers, and it used to take a full scroll to answer. */}
                <ul className="mt-12 grid gap-x-8 gap-y-2 border-t border-white/10 pt-6 sm:grid-cols-2">
                  {p.offer.scope.slice(0, 4).map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 py-1 text-sm text-white/60"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-200"
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE MOMENT. Ink surface. Specific beats impressive. ── */}
        <Band index="01" label={p.moment.label} tone="dark">
          <AnimatedSection>
            <Statement>{p.moment.body}</Statement>
          </AnimatedSection>
        </Band>

        {/* ── THE MECHANISM. Why it happens, and why nobody is at fault. ── */}
        <Band index="02" label="Why it happens" tone="tint">
          <AnimatedSection>
            <BandHeading>{p.mechanism.heading}</BandHeading>
            {p.mechanism.body.map((para, i) => (
              <p
                key={i}
                className={`${i === 0 ? "mt-8" : "mt-5"} max-w-prose text-base text-ink-600`}
              >
                {para}
              </p>
            ))}
          </AnimatedSection>

          {/* The device carries what the prose can only assert. reveal={false}
              because AnimatedSection already owns the entrance; both together
              double-wrap and the inner one wins at opacity:0. */}
          {p.device ? (
            <AnimatedSection delay={0.12}>
              <div className="mt-14">
                {p.device === "compliance" ? (
                  <ComplianceHorizon reveal={false} />
                ) : (
                  <OvernightEvent reveal={false} />
                )}
              </div>
            </AnimatedSection>
          ) : null}
        </Band>

        {/* ── THE WORK. A named register, not a numbered list: the reader is
            scanning for the one line that matches their own problem, and a
            key column gives them an entry point per row. ── */}
        <Band index="03" label="What we run">
          <AnimatedSection>
            <BandHeading>What we actually do.</BandHeading>
          </AnimatedSection>
          <div className="mt-12 border-t border-ink-200">
            {p.work.map((w, i) => (
              <AnimatedSection key={w.k} delay={i * 0.04}>
                <div className="grid grid-cols-1 items-start gap-x-8 gap-y-3 border-b border-ink-100 py-6 sm:grid-cols-[200px_minmax(0,1fr)]">
                  <span className={`${MICRO} pt-1 text-brand-500`}>{w.k}</span>
                  <p className="max-w-prose text-base text-ink-950">{w.v}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
                Thirty minutes on how your practice runs today.
              </span>
            </div>
          </AnimatedSection>
        </Band>

        {/* ── MEASUREMENT. The site's differentiator and the only evidence
            it offers, so it gets its own band rather than a bullet.

            One grid with hairline gaps rather than four separate cards:
            the four things measured are one report, not four products. ── */}
        <Band index="04" label="What gets measured" tone="tint">
          <AnimatedSection>
            <BandHeading>Measured against your own baseline.</BandHeading>
            <p className="mt-8 max-w-prose text-base text-ink-600">
              A baseline is taken before anything changes, so the reporting
              measures you against your own starting position rather than an
              industry figure. The monthly report includes what did not work.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <div className="mt-12">
              <BaselineReport rows={p.measured} reveal={false} />
            </div>
          </AnimatedSection>
        </Band>

        {/* ── BOUNDARIES. A conversion asset, not fine print. ── */}
        <Band index="05" label="What we do not do">
          <AnimatedSection>
            <BandHeading>The boundaries are the product.</BandHeading>
            <p className="mt-8 max-w-prose text-base text-ink-600">
              Not the fine print. These are contractual rather than cultural,
              and they do not move.
            </p>
          </AnimatedSection>
          <div className="mt-12 border-t border-ink-200">
            {bounds.map((b, i) => (
              <AnimatedSection key={b.tag} delay={i * 0.04}>
                <div className="grid grid-cols-1 items-start gap-x-8 gap-y-3 border-b border-ink-100 py-6 sm:grid-cols-[200px_minmax(0,1fr)]">
                  <span className={`${MICRO} pt-1 text-signal-600`}>{b.tag}</span>
                  <p className="max-w-prose text-base text-ink-950">{b.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Band>

        {/* ── THE SIBLING. Equal weight, never ranked. ── */}
        <Band index="06" label="The other desk" tone="tint">
          <AnimatedSection>
            <BandHeading>The two problems regenerate each other.</BandHeading>
            <p className="mt-8 max-w-prose text-base text-ink-600">
              {p.siblingWhy}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <Link
              href={p.sibling.href}
              className="group mt-10 flex flex-col gap-5 rounded-lg border border-ink-200 bg-white p-6 shadow-raise transition-[background-color,box-shadow] duration-150 ease-standard hover:bg-brand-50 hover:shadow-lift sm:flex-row sm:items-center sm:justify-between md:p-8"
            >
              <span className="min-w-0">
                <span className={`${MICRO} block text-brand-500`}>
                  {p.sibling.who}
                </span>
                <span className="mt-3 block text-xl font-semibold text-ink-950">
                  {p.sibling.name}
                </span>
                <span className="mt-2 block max-w-prose text-base text-ink-600">
                  {p.sibling.summary}
                </span>
              </span>
              <ArrowRight
                aria-hidden
                className="h-5 w-5 shrink-0 text-ink-300 transition-[transform,color] duration-150 ease-standard group-hover:translate-x-1 group-hover:text-brand-500"
              />
            </Link>
          </AnimatedSection>
        </Band>

        {/* ── QUESTIONS ── */}
        <Band id="faq" index="07" label="Questions">
          <AnimatedSection>
            <BandHeading>Before you ask us on the call.</BandHeading>
          </AnimatedSection>
          <Faq items={FAQ_FOR(p)} />
        </Band>

        {/* ── THE CALCULATOR. Last thing before the calendar. ── */}
        {p.calculator ? (
          <Band id="calculator" index="08" label="Your own numbers" tone="tint">
            <AnimatedSection>
              <BandHeading>Do the arithmetic before you talk to us.</BandHeading>
              <p className="mt-8 max-w-prose text-base text-ink-600">
                We have no case studies for this and we are not going to invent
                a figure for you. What we can do is give you the sum, so you can
                put your own numbers into it and decide whether the gap is worth
                thirty minutes of your time.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <div className="mt-12">
                <Calculator config={p.calculator} />
              </div>
            </AnimatedSection>
          </Band>
        ) : null}

        {/* ── BOOK ── */}
        <section id="book" className="border-t border-white/10 bg-canvas-ink">
          <div className={`${FRAME} ${GUTTER} ${BAND_Y} border-x border-white/10`}>
            <div className={RAIL_GRID}>
              <Rail index="09" label="Book" tone="dark" />
              <div className="min-w-0">
                <AnimatedSection>
                  <h3 className={`${D2} max-w-headline text-white`}>
                    {CTA_LABEL}.
                  </h3>
                  <p className="mt-6 max-w-prose text-base text-white/70">
                    Thirty minutes on how your practice actually runs. You leave
                    with a written assessment of whether this fits, including if
                    it does not, and a picture of your own numbers before
                    anything changes.
                  </p>
                  <p className="mt-4 max-w-prose text-sm text-white/60">
                    Nothing is signed on the call.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.08}>
                  <div className="mt-12 max-w-[940px]">
                    <BookingEmbed
                      source={`${p.offer.audience}-${p.offer.slug}`}
                      title={`${CTA_LABEL} with Novada`}
                      tone="dark"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DeskFooter />
      <StickyCta label={CTA_LABEL} tagline={p.offer.summary} />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   THE QUESTIONS EACH READER ACTUALLY RAISES.

   ⚠️ THERE IS NO LONGER A SINGLE "SHARED" SET, and that is deliberate.
   The old shared block asked "Do you replace our front desk staff?" and
   answered in terms of the counter and the practice software. Rendered
   on a care page that is the wrong vocabulary in front of the wrong
   reader, which is exactly the crossing this architecture exists to
   prevent. The four common questions are still the same QUESTIONS in
   both worlds; they are answered in each world's own words.
   ══════════════════════════════════════════════════════════════════ */

function FAQ_FOR(p: ServicePageProps): { q: string; a: string }[] {
  const practices = [
    {
      q: "Do you replace our front desk staff?",
      a: "No, and we will not describe it that way. Your team keeps the counter, the greeting, the payments and the person in the room. What we take is the work that never reaches the top of their list, and the second job somebody was given on top of the one they were hired for.",
    },
    {
      q: "What software do you work in?",
      a: "Yours. We work inside the practice software you already run, and we go deep on a small number of systems rather than claiming all of them. Tell us what you use on the call and we will tell you straight whether we already support it. Nothing migrates, and your software stays the system of record.",
    },
    {
      q: "Who can see our information?",
      a: "Named coordinators, each with their own login under your own access control, with permissions limited to the work and revoked the day somebody leaves the role. Never a shared account. Your information stays inside your own systems. We keep our own log of the work we did, which is what your monthly report is built from, and we do not assemble a copy of your records.",
    },
    {
      q: "Are we locked in?",
      a: "The engagement runs quarter to quarter, with no commitment beyond the current quarter. Commercial terms are covered on the review call and set out in writing in the proposal, so nothing is a surprise and nothing is signed on the call.",
    },
  ];

  const care = [
    {
      q: "Do you replace our coordinators?",
      a: "No, and we will not describe it that way. Your coordinators keep the relationships, the judgement calls and the daytime decisions that need somebody who knows your clients. What we take is the work that arrives when nobody is rostered to receive it, and the second job somebody senior is doing at four in the morning.",
    },
    {
      q: "What systems do you work in?",
      a: "Yours. We work inside the rostering and client systems you already run, and we go deep on a small number rather than claiming all of them. Tell us what you use on the call and we will tell you straight whether we already support it. Nothing migrates, and your systems stay the system of record.",
    },
    {
      q: "Who can see our information?",
      a: "Named coordinators, each with their own login under your own access control, with permissions limited to the work and revoked the day somebody leaves the role. Never a shared account. Your information stays inside your own systems. We keep our own log of what was done, which is what your handover and monthly report are built from, and we do not assemble a copy of your records.",
    },
    {
      q: "Are we locked in?",
      a: "The engagement runs quarter to quarter, with no commitment beyond the current quarter. Commercial terms are covered on the review call and set out in writing in the proposal, so nothing is a surprise and nothing is signed on the call.",
    },
  ];

  const specific: Record<string, { q: string; a: string }[]> = {
    "practices/patient-access": [
      {
        q: "Is this just an answering service?",
        a: "No. An answering service takes a message. We book inside your own practice software, work your recall and reactivation lists, and chase short-notice cancellations the same day. The distinction is scope, not quality, and the two are not substitutes.",
      },
      {
        q: "Do you triage?",
        a: "Never. We do not triage, assess urgency, or give clinical advice of any kind. Anything clinical stops with us and goes to your team under an escalation protocol agreed in writing before we take a single call.",
      },
    ],
    "practices/workforce": [
      {
        q: "Do our staff become your staff?",
        a: "No. Your practice employs its own people at all times and chooses every hire. We recruit on your behalf, administer the employment lifecycle and process payroll. We are not an employer of record, we do not supply labour, and we do not place our own people into your roles.",
      },
      {
        q: "Do you give employment or tax advice?",
        a: "No. We process payroll and maintain compliance records. We do not advise on tax treatment, on whether somebody is a contractor or an employee, on an employment dispute, or on how a regulatory requirement should be read. That goes to your accountant or lawyer, and we will say so rather than be drawn.",
      },
    ],
    "care/operations": [
      {
        q: "Is this an answering service?",
        a: "No. An answering service takes a message and wakes somebody up. We arrange coverage from your own approved workers, write it into your own roster, tell the people affected, and log the whole event so it is in your morning handover. The call is not passed on, it is finished.",
      },
      {
        q: "What happens when something is actually serious?",
        a: "It stops with us and goes to you. Anything needing authority or clinical judgement is escalated to your nominated contact under a matrix agreed in writing before we take a single call, and an emergency goes to 000 first, every time. We do not triage and we do not assess urgency clinically.",
      },
      {
        q: "Do you decide which worker covers a shift?",
        a: "No. Cover is arranged from your own approved workers against your own rules. We do not decide which worker suits which participant, because that judgement belongs to you and it is not one a back office should be making.",
      },
    ],
    "care/workforce": [
      {
        q: "Do our workers become your employees?",
        a: "No. You employ your own people at all times and choose every hire. We recruit on your behalf, administer the employment lifecycle and process payroll. We are not an employer of record, we do not supply labour, and we do not place our own people into your roles.",
      },
      {
        q: "Do you give employment or tax advice?",
        a: "No. We process payroll and maintain compliance records. We do not advise on tax treatment, on worker classification, on an employment dispute, or on how a regulatory requirement should be read. That goes to your accountant or lawyer, and we will say so rather than be drawn.",
      },
    ],
  };

  const key = `${p.offer.audience}/${p.offer.slug}`;
  const common = p.offer.audience === "care" ? care : practices;
  return [...(specific[key] ?? []), ...common];
}
