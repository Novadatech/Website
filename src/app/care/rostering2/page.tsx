import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import BookingEmbed from "@/components/desk/BookingEmbed";
import { Band } from "@/components/desk/Band";
import {
  BODY,
  D1,
  D2,
  D4,
  FRAME,
  GUTTER,
  MICRO,
  MICRO_TIGHT,
  SMALL,
} from "@/components/desk/tokens";
import { CTA_LABEL, EVIDENCE } from "@/content/offers";

/*
 * ══════════════════════════════════════════════════════════════════════
 * /care/rostering2 — A CONVERSION REBUILD OF /care/rostering, FOR REVIEW.
 *
 * Not linked from anywhere. Built 29 October 2026 so the founder can
 * compare it against the live page before anything replaces it.
 *
 * 🔴 WHY. Meta reports 75 clicks to /care/rostering and zero bookings.
 * The calendar on that page works, tested on 29 October at both widths,
 * so this is not a broken embed. Measured instead:
 *
 *     mobile   page 19,786px tall, calendar at 17,955px  (91% down)
 *     desktop  page 14,716px tall, calendar at 13,156px  (89% down)
 *
 * A phone visitor scrolls roughly twenty-one screens before reaching
 * the only thing on the page they can act on. The competitor the
 * founder pointed at puts a four-field form at y≈200.
 *
 * ⚠️ WHAT WAS COPIED FROM THAT COMPETITOR, deliberately:
 *   · The conversion action sits in the first screen, beside the
 *     headline, not at the end of the argument.
 *   · A short question as the H1, in the words the ad is bought on.
 *   · Four scannable benefit lines under it.
 *   · A proof strip immediately under the fold.
 *   · Short sections, plain sentences, one idea each.
 *   · A reassurance line directly beneath the booking action.
 *
 * 🔴 WHAT WAS NOT COPIED, AND CANNOT BE. Their page rests on "4.9★,
 * 1,000+ reviews, 8,200+ providers" and a wall of filmed testimonials.
 * We have none for this offer, and the ratings and case studies on this
 * domain belong to a different Novada business line and may never be
 * re-pointed at an offer that did not earn them. Inventing them is not
 * on the table. The proof strip therefore carries what we can actually
 * stand behind: two published scheme rules and two sourced workforce
 * figures, each with its origin printed beside it. That is weaker than
 * a testimonial wall and it is the honest version. See the note in the
 * founder summary about getting real ones.
 *
 * ⚠️ RULES THAT STILL BIND ON THIS PAGE:
 *   · NO PRICING anywhere.
 *   · "We never recommend less care" is a safety line, not positioning.
 *   · A rostered hour is not automatically billable.
 *   · "Gap" is not used: this page discusses participant contributions
 *     and resident fees, where it reads as an out-of-pocket.
 *   · The NDIS figures are NDIS only and say so. This page also serves
 *     Support at Home and residential aged care.
 *   · No em dashes.
 * ══════════════════════════════════════════════════════════════════════
 */

export const metadata: Metadata = {
  title: "Rostering and claiming review for NDIS and aged care | Novada",
  description:
    "Find out what your roster is costing you, and what you delivered and never claimed. One piece of work, findings inside two weeks. For Australian NDIS, Support at Home and residential aged care providers.",
  robots: { index: false, follow: false },
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "Rostering and claiming review for NDIS and aged care | Novada",
    description:
      "Two weeks. Your own numbers. No subscription.",
    type: "website",
  },
};

/* Four lines, scannable, each one a thing the reader gets or avoids.
   Modelled on the competitor's hero bullets. */
const HERO_POINTS = [
  "Findings inside two weeks of getting access",
  "One piece of work, not a subscription",
  "Your own rosters, payroll and claims, read by us",
  "If there is little to find, the report says so",
];

const WHAT_YOU_GET = [
  {
    h: "What the roster is costing you",
    b: "Overtime added to workers already on shift. Agency cover bought for gaps that were visible in advance. Travel and allocation that did not have to happen that way.",
  },
  {
    h: "What you delivered and never claimed",
    b: "Supports that happened and never reached a claim. Claims rejected and never resent. Items and rates applied wrongly. Contributions and payments nobody reconciled.",
  },
  {
    h: "A number, with its assumptions beside it",
    b: "Where your records support an estimate we make one, and we show you how we got there. Where they do not, we say so instead of estimating anyway.",
  },
  {
    h: "A plan in priority order",
    b: "What to fix first, what it is worth fixing, and a 30, 60 and 90 day sequence. Yours to run, with or without us.",
  },
];

const STEPS = [
  {
    n: "01",
    h: "Thirty minutes on the phone",
    b: "How your roster is worked today, and how what you deliver gets recorded and claimed. You leave knowing whether a review would find anything.",
  },
  {
    n: "02",
    h: "We read twelve weeks",
    b: "Read-only access, or the exports you already produce. Rostering and payroll on one side, service delivery and claims on the other.",
  },
  {
    n: "03",
    h: "You get the report",
    b: "Inside two weeks of that access working. Written, with the examples attached so you can check every line of it yourself.",
  },
];

const FAQ = [
  {
    q: "Is this a Practice Standards audit?",
    a: "No, and it is not a statutory or financial audit either. Nothing goes to the NDIS Commission or the Aged Care Quality and Safety Commission, nothing touches your registration, and we issue no certification.",
  },
  {
    q: "Does it cover billing and claims, or just rostering?",
    a: "Both, weighted the same. A provider can have every shift covered and still be paid for less than it delivered.",
  },
  {
    q: "Does it cover NDIS, Support at Home and residential?",
    a: "Yes, but not identically, because the funding arrangements are not the same. We scope to whichever you actually operate.",
  },
  {
    q: "Will you tell us to cut staff?",
    a: "No. Every change has to respect participant and resident needs, worker entitlements and any mandated staffing level. If the only saving means less support, we say so and leave it.",
  },
  {
    q: "Do you look for overbilling as well?",
    a: "Yes, with the same attention. Revenue assurance is accuracy, not maximising claims, and the exposure from an unsupported claim is larger than the gain from a missed one.",
  },
  {
    q: "Are we locked in?",
    a: "No. One piece of work, scoped in writing before it starts, with no subscription attached.",
  },
];

function Booking({ id }: { id?: string }) {
  return (
    <div id={id} className="scroll-mt-24">
      <BookingEmbed
        desk="care-rostering"
        source="care-rostering2"
        tone="dark"
        title={`${CTA_LABEL} with Novada`}
      />
    </div>
  );
}

export default function Page() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav tone="dark" audience="care" bookHref="#book" />

      <main>
        {/* ── HERO. The conversion action is IN here, not at the end. ── */}
        <section className="relative overflow-hidden border-b border-white/10 bg-canvas-ink">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -left-40 -top-56 h-[620px] w-[620px] rounded-full bg-brand-500/20 blur-[130px]" />
            <div className="absolute -bottom-72 -right-40 h-[560px] w-[560px] rounded-full bg-signal-600/10 blur-[140px]" />
          </div>

          <div
            className={`${FRAME} ${GUTTER} relative border-x border-white/10 pb-14 pt-10 md:pb-20 md:pt-14`}
          >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-14">
              <div className="min-w-0">
                <p className={`${MICRO} text-brand-200`}>
                  For NDIS, Support at Home and residential aged care
                </p>

                {/* ⚠️ SHORT, AND IN THE WORDS THE AD IS BOUGHT ON. The live
                    page opens on a thirteen-word abstraction about losing
                    money in two directions. That is a good line and it is
                    not a cold-traffic headline. */}
                <h1 className={`${D1} mt-5 max-w-headline text-white`}>
                  What is your roster really costing you?
                </h1>

                <p className="mt-6 max-w-prose text-lg text-white/75">
                  We read twelve weeks of your own rosters, payroll and claims,
                  and show you two things: the money going out that did not
                  have to, and the money owed to you that never came in. One
                  piece of work, with findings inside two weeks.
                </p>

                <ul className="mt-8 flex flex-col gap-3">
                  {HERO_POINTS.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <Check
                        aria-hidden
                        strokeWidth={2.4}
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-200"
                      />
                      <span className="text-base text-white/85">{t}</span>
                    </li>
                  ))}
                </ul>

                <p className={`${MICRO_TIGHT} mt-9 text-white/55`}>
                  Back office only &nbsp;·&nbsp; Nothing clinical, ever
                  &nbsp;·&nbsp; Australian owned
                </p>
              </div>

              {/* THE ASK, ON THE FIRST SCREEN. */}
              <div className="min-w-0">
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 md:p-5">
                  <p className={`${MICRO} text-brand-200`}>Book your review</p>
                  <p className="mt-2 text-base font-semibold text-white">
                    Thirty minutes. Nothing is signed on the call.
                  </p>
                  <div className="mt-4">
                    <Booking id="book" />
                  </div>
                  <p className={`${MICRO_TIGHT} mt-3 text-white/55`}>
                    A meaningful number of providers conclude it is not for
                    them yet, and we say so on the call.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROOF STRIP, directly under the fold. ─────────────────── */}
        <section className="border-b border-ink-100 bg-ink-50">
          <div className={`${FRAME} ${GUTTER} border-x border-ink-100 py-12 md:py-16`}>
            <p className={`${MICRO} text-ink-500`}>
              Why providers are looking at this now
            </p>
            <h2 className={`${D4} mt-4 max-w-headline text-ink-950`}>
              Two scheme rules changed what an unclaimed support is worth.
            </h2>

            <div className="mt-9 grid gap-px overflow-hidden rounded-lg bg-ink-200 md:grid-cols-2">
              {[EVIDENCE.claimWindow, EVIDENCE.claimHold].map((f) => (
                <div key={f.value} className="bg-white p-6 md:p-7">
                  <p className={`${D2} text-brand-500`}>{f.value}</p>
                  <p className="mt-3 text-sm font-medium text-ink-950">
                    {f.label}
                  </p>
                  <p className={`${MICRO_TIGHT} mt-3 text-ink-400`}>
                    {f.source}
                  </p>
                </div>
              ))}
            </div>

            {/* 🔴 NDIS ONLY. This page also serves Support at Home and
                residential aged care, which run under different
                arrangements. Never let these two drift. */}
            <p className={`${SMALL} mt-5 max-w-prose`}>
              Both are NDIS rules, published by the scheme, not estimates of
              ours. Support at Home and residential aged care run under
              different arrangements. After the window closes an unclaimed
              support is not late, it is gone.
            </p>
          </div>
        </section>

        {/* ── WHAT YOU GET ─────────────────────────────────────────── */}
        <Band index="01" label="What you get">
          <h2 className={`${D2} max-w-headline text-ink-950`}>
            Four things, in writing.
          </h2>
          <p className={`${BODY} mt-6`}>
            Twelve weeks of your own records, read on both sides of the
            operation. A provider can have every shift covered and still be
            paid for less than it delivered.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-ink-100 md:grid-cols-2">
            {WHAT_YOU_GET.map((c) => (
              <div key={c.h} className="bg-white p-6 md:p-7">
                <h3 className="text-base font-semibold text-ink-950">{c.h}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                  {c.b}
                </p>
              </div>
            ))}
          </div>
        </Band>

        {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
        <Band index="02" label="How it works" tone="tint">
          <h2 className={`${D2} max-w-headline text-ink-950`}>
            Three steps, and the first one is a phone call.
          </h2>

          <ol className="mt-10 grid gap-px overflow-hidden rounded-lg bg-ink-100 md:grid-cols-3">
            {STEPS.map((s) => (
              <li key={s.n} className="bg-white p-6 md:p-7">
                <span className={`${MICRO} tabular text-ink-300`}>{s.n}</span>
                <h3 className="mt-3 text-base font-semibold text-ink-950">
                  {s.h}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                  {s.b}
                </p>
              </li>
            ))}
          </ol>
        </Band>

        {/* ── WHAT WE WILL NOT DO. The competitor has a money-back
             guarantee in this slot. We cannot offer one without a
             pricing decision, and these four are the thing a provider
             is actually nervous about. ─────────────────────────────── */}
        <Band index="03" label="What we will not do">
          <h2 className={`${D2} max-w-headline text-ink-950`}>
            The limits are the product.
          </h2>

          <div className="mt-10 flex flex-col gap-px overflow-hidden rounded-lg bg-ink-100">
            {[
              {
                h: "We never recommend less care.",
                b: "Every change has to respect participant and resident needs, worker qualifications, entitlements and any mandated staffing level. If the only saving means less support, we say so and leave it.",
              },
              {
                h: "A rostered hour is not a billable hour.",
                b: "We never treat scheduled time as automatically claimable. A claim needs actual delivery, or another circumstance the rules expressly permit, with evidence behind it.",
              },
              {
                h: "We look for overbilling as well.",
                b: "Revenue assurance is accuracy, not maximising claims. Duplicate and unsupported claims go in the report with the same weight as anything you are owed.",
              },
              {
                h: "We identify, your qualified people decide.",
                b: "We do not determine support eligibility, change a classification or interpret a claiming rule for you. Every correction is yours to authorise.",
              },
            ].map((b) => (
              <div
                key={b.h}
                className="grid gap-2 bg-white p-6 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] md:gap-8 md:p-7"
              >
                <p className="text-base font-semibold text-ink-950">{b.h}</p>
                <p className="text-sm leading-relaxed text-ink-600">{b.b}</p>
              </div>
            ))}
          </div>
        </Band>

        {/* ── WHO IT IS FOR ────────────────────────────────────────── */}
        <Band index="04" label="Who it is for" tone="tint">
          <h2 className={`${D2} max-w-headline text-ink-950`}>
            Built for providers running their own workforce.
          </h2>
          <p className={`${BODY} mt-6`}>
            NDIS, Support at Home and residential aged care providers with
            their own rostered staff, enough volume that overtime and agency
            cover are a real line in the accounts, and claiming they have
            never had an outside pair of eyes on.
          </p>
          <p className={`${BODY} mt-5`}>
            If you are a sole trader, or you subcontract all delivery, this is
            not for you and the call will say so in the first ten minutes.
          </p>
        </Band>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <Band index="05" label="Questions">
          <h2 className={`${D2} max-w-headline text-ink-950`}>
            The questions we get first.
          </h2>
          <dl className="mt-10 flex flex-col gap-px overflow-hidden rounded-lg bg-ink-100">
            {FAQ.map((f) => (
              <div
                key={f.q}
                className="grid gap-2 bg-white p-6 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:gap-8 md:p-7"
              >
                <dt className="text-base font-semibold text-ink-950">{f.q}</dt>
                <dd className="text-sm leading-relaxed text-ink-600">{f.a}</dd>
              </div>
            ))}
          </dl>
        </Band>

        {/* ── CLOSING ASK, with the calendar again. ────────────────── */}
        <section className="border-t border-white/10 bg-canvas-ink">
          <div
            className={`${FRAME} ${GUTTER} border-x border-white/10 py-14 md:py-20`}
          >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-14">
              <div className="min-w-0">
                <p className={`${MICRO} text-brand-200`}>Book your review</p>
                <h2 className={`${D2} mt-5 max-w-headline text-white`}>
                  Find out whether there is anything there.
                </h2>
                <p className="mt-6 max-w-prose text-base text-white/70">
                  Thirty minutes on how your roster is worked today, and on how
                  what you deliver gets recorded, claimed and reconciled. You
                  leave with an honest view of whether a review would find
                  anything, or would not.
                </p>
                <p className="mt-5 max-w-prose text-base text-white/70">
                  If you are an NDIS provider with older unclaimed supports,
                  the 1 December window is worth raising on that call.
                </p>
                <p className={`${MICRO_TIGHT} mt-8 text-white/55`}>
                  Nothing is signed on the call &nbsp;·&nbsp; No pricing
                  discussed before we understand the operation
                </p>
              </div>

              <div className="min-w-0">
                <Booking />
              </div>
            </div>

            <p className={`${SMALL} mt-12 max-w-prose text-white/45`}>
              Prefer to read the full detail first?{" "}
              <Link
                href="/care/rostering"
                className="font-semibold text-brand-200 underline-offset-4 hover:underline"
              >
                The long version of this page
              </Link>{" "}
              sets out every item we look at, on both sides.
            </p>
          </div>
        </section>
      </main>

      <DeskFooter />
    </div>
  );
}
