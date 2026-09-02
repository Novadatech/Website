"use client";

/*
 * /meetings-3 : the paid-ads lander for the meetings offer (Meta cold
 * traffic). Was one of a pair with /meetings-2, the Google Ads lander,
 * which was deleted on 2 September 2026 and now 308s here. This is the
 * only surviving page for this offer.
 *
 * REBUILT 2026-09-02 into the Desk visual system, on founder instruction.
 * Was the legacy dark/green Poppins lander.
 *
 * ══════════════════════════════════════════════════════════════════════
 * ⚠️ THIS PAGE IS LIVE AND TAKES PAID TRAFFIC. Four things below are
 * machinery, not decoration. All four are carried over byte-for-byte
 * from the previous build. If you change one, you break attribution or
 * the booking itself, and the failure is silent: the page still renders
 * perfectly while the money stops being traceable.
 *
 *  1. BOOKING_WIDGET_BASE, calendar 8j4TVe5uOcjxbNfVC3kp. This is the
 *     Meta calendar. /meetings-2 used hAdr4aCtDRC4RgbxhnYD, which is now
 *     orphaned but still exists, so Google and Meta bookings currently
 *     share this one calendar and cannot be told apart by calendar.
 *  2. buildBookingSrc(). Reads the click ID captured into localStorage
 *     under "nvt_click" by layout.tsx and appends it to the widget src,
 *     so the booking platform stores it on the contact. The query key
 *     must stay exactly "gclid": it matches a custom field by name.
 *  3. The form_embed.js injection in Booking(). Without it the iframe
 *     never resizes and the calendar is unusable on mobile.
 *  4. The iframe id, 8j4TVe5uOcjxbNfVC3kp_meetings. form_embed.js finds
 *     the frame by this id.
 *
 * NO CONVERSION TAGS FIRE HERE. The booking conversion fires on
 * /confirmed-call after a real booking. Do not add a tag to this page:
 * it would count page views as bookings.
 * ══════════════════════════════════════════════════════════════════════
 *
 * OFFER, source of truth: "Growth Infrastructure - Client Proposal" PDF,
 * Novada Tech Offer folder, realigned 2026-08-11. Flat monthly
 * partnership, NO PER-MEETING FEES (the old pay-per-meeting model is
 * gone: never reintroduce "you only pay when we do"). NO PRICING on this
 * page, by founder directive: investment is discussed on the call. 15+
 * qualified meetings a month guaranteed in writing; shortfall remedy is
 * that we keep working at no extra charge until delivered; no lock-in,
 * month to month; under 30 minutes a week of client time; assets built
 * under the client's name stay theirs.
 *
 * COMPLIANCE (Google Misrepresentation / Unreliable Claims):
 *  · No "$0 upfront" or "$0 activation" claims.
 *  · Results-vary disclaimers under the video case studies AND under the
 *    stats bar. Both are required. Do not remove either.
 *  · The guarantee links to /guarantee-terms, twice.
 * The "$4,000 to $10,000 a month" figure is a COMPETITOR price anchor,
 * not our pricing. It is the only money figure allowed on this page.
 *
 * STRUCTURE at the top is a founder directive and is preserved exactly:
 * headline, subheadline, rating evidence, VSL, then video testimonials.
 * All CTAs anchor to #book. No page hop.
 *
 * COPY: unchanged in substance. Em dashes were replaced with commas and
 * full stops throughout, per the standing house rule. Nothing else in
 * the argument, the claims or the disclaimers was touched.
 *
 * Chrome is FunnelHeader/FunnelFooter, not DeskNav. A cold paid lander
 * gets one action. See src/components/desk/FunnelChrome.tsx.
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Play, Check, X, Clock } from "lucide-react";
import HeroTrustBar from "@/components/HeroTrustBar";
import VideoFacade from "@/components/desk/VideoFacade";
import { FunnelHeader, FunnelFooter } from "@/components/desk/FunnelChrome";
import {
  Band,
  MICRO,
  NUM,
  PAD,
  WRAP,
  DISPLAY,
} from "@/components/desk/Band";

const BOOK = "#book";

const BODY = "text-[15px] leading-relaxed text-[#454E5C] md:text-base";
const BODY_INK = "text-[15px] leading-relaxed text-white/70 md:text-base";

const BTN = "inline-flex items-center justify-center gap-2 rounded-[6px] bg-[#003DDB] px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-[#0030AE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2";
const BTN_ON_INK = "inline-flex items-center justify-center gap-2 rounded-[6px] bg-white px-7 py-4 text-[15px] font-semibold text-[#0A0D14] transition-colors hover:bg-[#E8ECF5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0D14]";

/* ══════════════════════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="border-t border-[#E3E6EC] bg-white">
      <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] pb-12 pt-12 md:pb-16 md:pt-16`}>
        <div className="mx-auto max-w-[860px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${MICRO} text-[#003DDB]`}
          >
            Done-for-you client acquisition
            <span className="mx-2 text-[#C3CAD5]">·</span>
            For B2B and service businesses
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className={`${DISPLAY} mt-6 text-[38px] text-[#0A0D14] sm:text-[54px] md:text-[70px]`}
          >
            We book qualified sales meetings onto your calendar.{" "}
            <span className="text-[#003DDB]">Guaranteed, in writing.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-7 max-w-[660px] text-[16px] leading-relaxed text-[#39424E] md:text-[19px]"
          >
            We make you the name your market trusts, then run done-for-you
            outreach across every channel that matters.{" "}
            <span className="font-semibold text-[#0B0E14]">
              15+ qualified meetings a month, guaranteed in writing.
            </span>{" "}
            No lock-in. Cancel any time.
          </motion.p>

          {/* Rating evidence. Position is a founder directive. */}
          <HeroTrustBar className="mt-8" tone="light" />

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-9"
          >
            <a href={BOOK} className={`${BTN} w-full sm:w-auto`}>
              Book my free strategy call
              <ArrowRight className="h-4 w-4" />
            </a>

            <p className="mx-auto mt-6 max-w-[520px] text-[15px] leading-relaxed text-[#39424E]">
              A month under 15 meetings?{" "}
              <span className="font-semibold text-[#0B0E14]">
                We keep working at no extra charge until every one is delivered.
              </span>
            </p>

            <p className={`${MICRO} mt-4 text-[#9AA3B1]`}>
              <span className={NUM}>30</span> minutes
              <span className="mx-1.5 text-[#C3CAD5]">·</span>
              No obligation
              <span className="mx-1.5 text-[#C3CAD5]">·</span>
              <a
                href="/guarantee-terms"
                className="underline decoration-[#C3CAD5] underline-offset-2 transition-colors hover:text-[#003DDB] hover:decoration-[#003DDB]"
              >
                Written guarantee
              </a>
            </p>
          </motion.div>
        </div>

        {/* Competitor price anchor. Not our pricing. */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mx-auto mt-12 max-w-[720px]"
        >
          <div className="border-l-2 border-[#003DDB] bg-[#F5F8FF] py-5 pl-6 pr-6">
            <p className="text-[15px] leading-relaxed text-[#2B3340] md:text-base">
              Most appointment-setting agencies charge{" "}
              <span className={`${NUM} font-semibold text-[#0B0E14]`}>
                $4,000 to $10,000
              </span>{" "}
              a month, lock you into a three to six month contract, and
              guarantee nothing. We put 15+ qualified meetings a month in
              writing, with no per-meeting fees and no lock-in. Cancel any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   VSL. Position is a founder directive: straight after the hero.
   ══════════════════════════════════════════════════════════════════ */

function VSL() {
  return (
    <section className="border-t border-[#E3E6EC] bg-[#F7F8FA]">
      <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-12 md:py-16`}>
        <div className="mx-auto max-w-[860px]">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Play className="h-3.5 w-3.5 text-[#003DDB]" fill="currentColor" />
            <p className={`${MICRO} text-[#0B0E14]`}>
              Watch the <span className={NUM}>2</span> minute overview
            </p>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-[10px] border border-[#E3E6EC] bg-[#0A0D14]">
            <VideoFacade
              id="_fVB00BpPpI"
              title="How we book qualified sales meetings for your business"
              tone="dark"
            />
          </div>

          <p className={`${MICRO} mt-4 text-center text-[#9AA3B1]`}>
            Presented by <span className="text-[#0B0E14]">Ade</span>, founder,
            Novada Tech
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   01 · CLIENT RESULTS. Position is a founder directive: after the VSL.
   ══════════════════════════════════════════════════════════════════ */

const CASE_VIDEOS = [
  {
    id: "CBL83P7OYgI",
    metric: "3 high-value clients in 30 days",
    who: "Nicola, founder, Morasco Media Services",
  },
  {
    id: "upgMW2nwwpk",
    metric: "$20K to $100K+ monthly revenue",
    who: "Tony, founder, South Line Media",
  },
  {
    id: "G44OKPVh3Uk",
    metric: "10x revenue in 30 days",
    who: "Michael, founder, Aaronson Investigations",
  },
  {
    id: "Ef4YTXOnCP0",
    metric: "1 to 2 calls a week became 30 to 60 a month",
    who: "Jeff, founder, Vertical Axis",
  },
];

function VideoCaseStudies() {
  return (
    <Band index="01" label="Client results">
      <p className={`${DISPLAY} max-w-[20ch] text-[30px] text-[#0A0D14] sm:text-[38px] md:text-[46px]`}>
        Do not take our word for it. Hear it from them.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {CASE_VIDEOS.map((c) => (
          <article
            key={c.id}
            className="overflow-hidden rounded-[10px] border border-[#E3E6EC] bg-white"
          >
            <div className="relative aspect-video w-full bg-[#0A0D14]">
              <VideoFacade id={c.id} title={c.metric} tone="dark" />
            </div>
            <div className="p-6">
              <p className="text-[17px] font-semibold leading-snug tracking-tight text-[#0B0E14] md:text-[19px]">
                {c.metric}
              </p>
              <p className={`${MICRO} mt-3 text-[#9AA3B1]`}>{c.who}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Required disclaimer. Google Unreliable Claims policy. */}
      <p className="mt-6 max-w-[640px] text-[13px] leading-relaxed text-[#5B6472]">
        Results shown are individual client outcomes and are not typical. Your
        results will vary and are not guaranteed.
      </p>

      <div className="mt-9">
        <a href={BOOK} className={`${BTN} w-full sm:w-auto`}>
          I want results like these
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   02 · BEEN BURNED BEFORE
   ══════════════════════════════════════════════════════════════════ */

function BurnedBefore() {
  const oldWay = [
    "Paid a retainer for months and got reports, not revenue",
    "Promised leads that were never going to buy",
    "Locked into a contract while nothing changed",
    "Left doing the follow-up and the chasing yourself",
  ];
  const ourWay = [
    "Trust engineered first, so buyers arrive already convinced, not cold",
    "15+ qualified meetings a month, guaranteed in writing",
    "Fall short and we keep working at no extra charge until it is delivered",
    "No lock-in, ever. We re-earn your business every month",
  ];

  return (
    <Band index="02" label="Been burned before" tone="tint">
      <p className={`${DISPLAY} max-w-[22ch] text-[30px] text-[#0A0D14] sm:text-[38px] md:text-[46px]`}>
        You paid first. They promised. Nothing landed on your calendar.
      </p>

      <div className="mt-10 grid gap-px overflow-hidden rounded-[10px] border border-[#E3E6EC] bg-[#E3E6EC] md:grid-cols-2">
        <div className="bg-white p-7">
          <p className={`${MICRO} text-[#9AA3B1]`}>How most agencies work</p>
          <ul className="mt-6 space-y-4">
            {oldWay.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <X
                  className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-[#B4501A]"
                  strokeWidth={2}
                />
                <span className={BODY}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-7">
          <p className={`${MICRO} text-[#003DDB]`}>How we work</p>
          <ul className="mt-6 space-y-4">
            {ourWay.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-[3px] flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full bg-[#003DDB]">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                <span className="text-[15px] leading-relaxed text-[#0B0E14] md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-8 max-w-[680px] text-[17px] leading-relaxed text-[#39424E] md:text-[19px]">
        If we fall short, the cost falls on us. 15+ qualified meetings a month
        is{" "}
        <span className="font-semibold text-[#0B0E14]">
          guaranteed, in writing,
        </span>{" "}
        and we keep working at no extra charge until it is met. Our incentive
        and yours point in exactly the same direction, from day one.
      </p>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   FOUNDER NOTE. Ink: one quiet moment between two argument sections.
   ══════════════════════════════════════════════════════════════════ */

function FounderNote() {
  return (
    <section className="border-t border-white/10 bg-[#0A0D14]">
      <div className={`${WRAP} ${PAD} border-x border-white/10 py-14 md:py-20`}>
        <div className="max-w-[760px]">
          <p className={`${MICRO} text-white/50`}>A note from the founder</p>
          <blockquote className="mt-6 text-[19px] leading-[1.6] text-white md:text-[24px]">
            &ldquo;We do not take on every business, and we will not pretend we
            are the right fit for everyone. But when we do partner, the risk
            sits with us. The meetings are guaranteed in writing, there is no
            lock-in of any kind, and we re-earn your business every single
            month. That is the standard we hold ourselves to.&rdquo;
          </blockquote>
          <div className="mt-7 border-t border-white/10 pt-5">
            <p className="text-[15px] font-semibold text-white">Ade Eni</p>
            <p className={`${MICRO} mt-1.5 text-white/45`}>
              Founder and CEO, Novada Tech
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   03 · THE GUARANTEE
   ══════════════════════════════════════════════════════════════════ */

function RiskReversal() {
  const cards = [
    {
      k: "15",
      title: "Guaranteed in writing",
      desc: "A written minimum of 15 qualified meetings every month, in your service agreement, not a marketing line.",
    },
    {
      k: "0",
      title: "Extra charge if we fall short",
      desc: "If a month comes in under 15, we keep working at no extra charge until every meeting is delivered. A slow month costs us, not you.",
    },
    {
      k: "0",
      title: "Lock-in, ever",
      desc: "Month to month. No minimum term, no exit fee. We re-earn your business every month. If the engine is not producing, you walk.",
    },
  ];

  return (
    <Band index="03" label="The guarantee">
      <p className={`${DISPLAY} max-w-[20ch] text-[30px] text-[#0A0D14] sm:text-[38px] md:text-[46px]`}>
        Written into your agreement, not a marketing line
      </p>

      <div className="mt-10 grid gap-px overflow-hidden rounded-[10px] border border-[#E3E6EC] bg-[#E3E6EC] md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="bg-white p-7">
            <p className={`${NUM} ${DISPLAY} text-[52px] text-[#003DDB] md:text-[60px]`}>
              {c.k}
            </p>
            <p className="mt-4 text-[17px] font-semibold tracking-tight text-[#0B0E14]">
              {c.title}
            </p>
            <p className={`${BODY} mt-2.5`}>{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a href={BOOK} className={`${BTN} w-full sm:w-auto`}>
          Book my free strategy call
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="/guarantee-terms"
          className={`${MICRO} text-[#5B6472] underline decoration-[#C3CAD5] underline-offset-4 transition-colors hover:text-[#003DDB] hover:decoration-[#003DDB]`}
        >
          Read the full guarantee terms
        </a>
      </div>

      <p className={`${MICRO} mt-5 text-[#9AA3B1]`}>
        We define what a qualified meeting means for your business on the call,
        before you commit to anything
      </p>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   04 · THE MECHANISM
   ══════════════════════════════════════════════════════════════════ */

function Mechanism() {
  const parts = [
    {
      n: "01",
      title: "Trust Engineering™",
      desc: "We position you as the recognised authority in your niche. A rewritten profile, an authority-video content engine and credibility assets, so when a decision-maker looks you up, the answer to “can I trust them?” is already yes.",
    },
    {
      n: "02",
      title: "The Outbound Growth System",
      desc: "Our dedicated SDR team runs daily, done-for-you outreach across every channel that matters: social, email, SMS and phone, with every enquiry answered in minutes, 24/7. Leads are qualified against your exact criteria and booked straight onto your calendar.",
    },
  ];

  return (
    <Band index="04" label="The mechanism" tone="tint">
      <p className={`${DISPLAY} max-w-[20ch] text-[30px] text-[#0A0D14] sm:text-[38px] md:text-[46px]`}>
        First we make your market trust you. Then we start the conversations.
      </p>

      <p className={`${BODY} mt-6 max-w-[660px]`}>
        Most outreach fails because prospects look you up, see nothing that says
        expert, and archive you. Our system fixes both sides, trust and reach,
        so replies turn into booked, qualified meetings.
      </p>

      <div className="mt-10 divide-y divide-[#E3E6EC] border-y border-[#E3E6EC]">
        {parts.map((p) => (
          <div
            key={p.n}
            className="grid gap-4 py-8 sm:grid-cols-[80px_minmax(0,1fr)] sm:gap-8"
          >
            <p className={`${NUM} ${DISPLAY} text-[40px] leading-none text-[#C3CFE6]`}>
              {p.n}
            </p>
            <div>
              <p className="text-[19px] font-semibold tracking-tight text-[#0B0E14] md:text-[21px]">
                {p.title}
              </p>
              <p className={`${BODY} mt-3 max-w-[620px]`}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 inline-flex items-center gap-3 rounded-[6px] border border-[#D3D8E2] bg-white px-5 py-3.5">
        <Clock className="h-4 w-4 flex-shrink-0 text-[#003DDB]" />
        <span className="text-[14px] text-[#39424E] md:text-[15px]">
          Your total time investment:{" "}
          <span className="font-semibold text-[#0B0E14]">
            under <span className={NUM}>30</span> minutes a week.
          </span>{" "}
          We handle the rest.
        </span>
      </div>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   05 · HOW IT WORKS
   ══════════════════════════════════════════════════════════════════ */

function Timeline() {
  const steps = [
    {
      period: "Your free call",
      title: "We define a meeting worth your time.",
      desc: "Industry, seniority, company size, your disqualifiers. We agree the exact profile of a qualified meeting, and walk you through the written guarantee. No pressure, no obligation.",
    },
    {
      period: "We build and launch",
      title: "The system switches on.",
      desc: "Positioning, authority content and outreach sequences are built and launched by our team. You spend about an hour with us in onboarding. We do the rest.",
    },
    {
      period: "Meetings land",
      title: "Qualified meetings hit your calendar.",
      desc: "First qualified meetings typically land inside your first month. Then we optimise targeting and messaging, scaling to your guaranteed 15+ every month.",
    },
  ];

  return (
    <Band index="05" label="How it works">
      <p className={`${DISPLAY} max-w-[18ch] text-[30px] text-[#0A0D14] sm:text-[38px] md:text-[46px]`}>
        From this page to a calendar that fills itself
      </p>

      <div className="mt-10 grid gap-px overflow-hidden rounded-[10px] border border-[#E3E6EC] bg-[#E3E6EC] md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={s.period} className="bg-white p-7">
            <div className="flex items-center gap-3">
              <span
                className={`${NUM} ${MICRO} flex h-7 w-7 items-center justify-center rounded-full border border-[#003DDB] text-[#003DDB]`}
              >
                {i + 1}
              </span>
              <p className={`${MICRO} text-[#9AA3B1]`}>{s.period}</p>
            </div>
            <p className="mt-5 text-[17px] font-semibold leading-snug tracking-tight text-[#0B0E14] md:text-[19px]">
              {s.title}
            </p>
            <p className={`${BODY} mt-3`}>{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-9">
        <a href={BOOK} className={`${BTN} w-full sm:w-auto`}>
          Start with a free call
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   06 · IN THEIR WORDS  (stats + written testimonials)
   ══════════════════════════════════════════════════════════════════ */

function Proof() {
  const stats = [
    { num: "350+", label: "Businesses scaled" },
    { num: "$45.7M+", label: "Client revenue generated" },
    { num: "30+", label: "Industries served" },
    { num: "4.9", label: "From 77+ independent reviews" },
  ];

  const quotes = [
    {
      quote:
        "We went from $42K to $91K monthly in under 60 days. The pipeline became predictable for the first time, we could forecast and hire with confidence.",
      name: "Jeff",
      role: "Founder, Vertical Axis",
      avatar: "/testimonials/jeff-verticalaccess.jpg",
    },
    {
      quote:
        "We'd been burned by two agencies before. This was different, it was a system, not a service. 4 new retainer clients in the first 45 days.",
      name: "Nicola",
      role: "Founder, Morasco Media",
      avatar: "/testimonials/nicola-morasco.jpg",
    },
  ];

  return (
    <Band index="06" label="In their words" tone="dark">
      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className={`${NUM} ${DISPLAY} text-[40px] text-white md:text-[52px]`}>
              {s.num}
            </p>
            <p className={`${MICRO} mt-3 text-white/45`}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Required disclaimer. Google Unreliable Claims policy. */}
      <p className="mt-8 max-w-[640px] text-[13px] leading-relaxed text-white/45">
        Results shown are individual client outcomes and are not typical. Your
        results will vary and are not guaranteed.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {quotes.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-[10px] border border-white/10 bg-white/[0.03] p-7"
          >
            <blockquote className={`${BODY_INK} flex-1 text-white/85`}>
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.avatar}
                alt=""
                className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-[14px] font-semibold text-white">{t.name}</p>
                <p className={`${MICRO} mt-0.5 text-white/45`}>{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   07 · QUESTIONS
   ══════════════════════════════════════════════════════════════════ */

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E3E6EC]">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2"
      >
        <span className="text-[16px] font-medium text-[#0B0E14] transition-colors group-hover:text-[#003DDB] md:text-[17px]">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-[#9AA3B1] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className={`${BODY} max-w-[720px] pb-6`}>{answer}</p>
      </motion.div>
    </div>
  );
}

function FAQ() {
  const LINK =
    "text-[#003DDB] underline decoration-[#003DDB]/30 underline-offset-[3px] transition-colors hover:decoration-[#003DDB]";

  const faqs = [
    {
      q: "What counts as a qualified meeting?",
      a: "A booked appointment with a decision-maker who matches the criteria we agree with you at onboarding: industry, seniority, company size, and your own disqualifiers. Every conversation we start is aimed at that definition, and it is agreed before anything launches, not invented after the fact.",
    },
    {
      q: "What does it cost?",
      a: (
        <>
          The investment is simple, flat and transparent, with no per-meeting
          fees and no lock-in, and we walk you through it in full on your
          strategy call, before you commit to anything. What we can tell you
          here: 15+ qualified meetings a month is guaranteed in writing, and if
          a month falls short we keep working at no extra charge until every
          meeting is delivered. See our{" "}
          <a href="/guarantee-terms" className={LINK}>
            Guarantee and Terms
          </a>
          .
        </>
      ),
    },
    {
      q: "Is the 15+ meetings a month actually guaranteed?",
      a: (
        <>
          Yes. A written minimum of 15 qualified meetings every month, in your
          service agreement, not a marketing line. If a month comes in under 15,
          we keep working at no extra charge until all 15 are delivered. A slow
          month costs us, not you. And meetings keep coming beyond 15 at no
          extra cost. See our{" "}
          <a href="/guarantee-terms" className={LINK}>
            Guarantee and Terms
          </a>{" "}
          page for exactly what it covers.
        </>
      ),
    },
    {
      q: "What happens if a meeting cancels or does not hold?",
      a: "Our team handles it: rescheduling, rebooking and keeping the pipeline moving. A rescheduled meeting is the same single meeting, never counted twice, and because there are no per-meeting fees, a cancellation never costs you anything extra. How cancellations are treated against the guarantee is agreed in writing before we start.",
    },
    {
      q: "I have been burned by agencies before. Why is this different?",
      a: "Most providers sell you activity. You carry all the risk, and the moment you stop paying, everything stops with nothing to show. Ours is the reverse: the meeting minimum is written into your agreement, a short month costs us because we keep working at no extra charge until it is delivered, there is no lock-in trapping you, and everything we build under your name, content, positioning, authority, is yours and keeps working.",
    },
    {
      q: "How much of my time will this take?",
      a: "Under 30 minutes a week once we are running. Onboarding takes about an hour of your time. We handle positioning, content, outreach, replies, qualification and booking. Your job is to show up to qualified meetings.",
    },
    {
      q: "Do I need to spend money on ads?",
      a: "Not to start. The system's core runs on done-for-you outreach and authority content, with no ad budget required. If and when paid campaigns make sense for your market, we build and optimise them to a target cost per meeting, with your budget always under your control.",
    },
    {
      q: "How quickly will I see meetings?",
      a: "The system is typically built and live within your first two weeks, and the first qualified meetings usually land inside the first month. Then we scale to your guaranteed 15+ qualified meetings every month.",
    },
    {
      q: "Is there a lock-in contract?",
      a: "No lock-in, ever. Month to month, no minimum term, no exit fee. We re-earn your business every month. If the engine is not producing, you walk. We would rather earn your business than trap it.",
    },
    {
      q: "Who is this NOT for?",
      a: "We are selective, because the written guarantee only works when the underlying business is ready. If your offer is under $3K, your service is not validated yet, or you are after a magic-button solution with zero involvement, we are not the right fit, and we will tell you that on the call rather than waste your time.",
    },
  ];

  return (
    <Band index="07" label="Questions">
      <p className={`${DISPLAY} max-w-[18ch] text-[30px] text-[#0A0D14] sm:text-[38px] md:text-[46px]`}>
        Everything sceptics ask us, answered straight
      </p>

      <div className="mt-10 max-w-[760px] border-t border-[#E3E6EC]">
        {faqs.map((f) => (
          <FAQItem key={f.q} question={f.q} answer={f.a} />
        ))}
      </div>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   BOOKING
   ⚠️ Everything from here to the end of Booking() is machinery.
   See the warning block at the top of this file before editing.
   ══════════════════════════════════════════════════════════════════ */

const BOOKING_WIDGET_BASE =
  "https://link.novadatech.com/widget/booking/8j4TVe5uOcjxbNfVC3kp";

/* Appends the stored click ID (captured in layout.tsx) to the widget src
   as query params. The booking platform prefills them into matching
   custom fields on the form, tying the booked contact back to the exact
   ad click. Client-side only: the value exists only in the visitor's
   browser. The "gclid" key must match the custom field name exactly. */
function buildBookingSrc(): string {
  let stored: {
    ids?: { gclid?: string; wbraid?: string; gbraid?: string };
    utm?: { utm_campaign?: string; utm_term?: string };
  } | null = null;
  try {
    stored = JSON.parse(localStorage.getItem("nvt_click") || "null");
  } catch {
    return BOOKING_WIDGET_BASE;
  }
  if (!stored || !stored.ids) return BOOKING_WIDGET_BASE;

  const clickId =
    stored.ids.gclid || stored.ids.wbraid || stored.ids.gbraid || "";
  if (!clickId) return BOOKING_WIDGET_BASE;

  const qs = new URLSearchParams();
  qs.set("gclid", clickId); // must match the custom field key exactly
  if (stored.utm?.utm_campaign) qs.set("utm_campaign", stored.utm.utm_campaign);
  if (stored.utm?.utm_term) qs.set("utm_term", stored.utm.utm_term);
  return `${BOOKING_WIDGET_BASE}?${qs.toString()}`;
}

function Booking() {
  // SSR renders the base URL; on mount we swap in the click-ID-decorated
  // src before the widget is scrolled into view (it is at the page bottom).
  const [bookingSrc, setBookingSrc] = useState(BOOKING_WIDGET_BASE);

  useEffect(() => {
    setBookingSrc(buildBookingSrc());

    const script = document.createElement("script");
    script.src = "https://link.novadatech.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const expect = [
    "Review your offer and your ideal client profile",
    "Define exactly what a qualified meeting means for you",
    "Walk you through the written guarantee, before you commit to anything",
    "Map your first 90 days, week by week",
    "Tell you honestly if we are not the right fit",
  ];

  return (
    <section id="book" className="scroll-mt-20 border-t border-[#E3E6EC] bg-[#F7F8FA]">
      <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-16 md:py-20`}>
        <div className="max-w-[760px]">
          <p className={`${MICRO} text-[#003DDB]`}>
            Free <span className={NUM}>30</span> minute strategy call
          </p>
          <p
            className={`${DISPLAY} mt-5 text-[32px] text-[#0A0D14] sm:text-[42px] md:text-[52px]`}
          >
            Pick a time. See exactly how many meetings we would book you.
          </p>
          <p className={`${BODY} mt-6`}>
            On the call we will define what a qualified meeting looks like for
            your business, show you exactly how the system would run under your
            name, and map your first 90 days. If it is not a fit, you will leave
            with a clear plan anyway. That is the worst case.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-3">
          {/* What to expect */}
          <div className="lg:col-span-1">
            <div className="rounded-[10px] border border-[#E3E6EC] bg-white p-7 lg:sticky lg:top-24">
              <p className={`${MICRO} text-[#0B0E14]`}>On this call, we will</p>
              <ul className="mt-6 space-y-4">
                {expect.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[3px] flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full bg-[#003DDB]">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-[14px] leading-relaxed text-[#39424E]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className={`${MICRO} mt-7 border-t border-[#E3E6EC] pt-5 text-[#9AA3B1]`}>
                <span className={NUM}>30</span> minutes
                <span className="mx-1.5 text-[#C3CAD5]">·</span>
                No obligation
                <span className="mx-1.5 text-[#C3CAD5]">·</span>
                No hard sell
              </p>

              {/* Competitor price anchor, repeated beside the conversion point. */}
              <div className="mt-5 border-l-2 border-[#003DDB] bg-[#F5F8FF] py-4 pl-4 pr-4">
                <p className="text-[13px] leading-relaxed text-[#2B3340]">
                  Most appointment-setting agencies charge{" "}
                  <span className={`${NUM} font-semibold text-[#0B0E14]`}>
                    $4,000 to $10,000
                  </span>{" "}
                  a month, lock you in for three to six months, and guarantee
                  nothing. Here the meetings are guaranteed in writing, with no
                  per-meeting fees and no lock-in. Cancel any time.
                </p>
              </div>
            </div>
          </div>

          {/* Calendar embed */}
          <div className="lg:col-span-2">
            <div className="relative z-10 min-h-[600px] rounded-[10px] border border-[#E3E6EC] bg-white p-2">
              <iframe
                src={bookingSrc}
                title="Book a strategy call"
                style={{
                  width: "100%",
                  minHeight: "700px",
                  border: "none",
                  display: "block",
                }}
                scrolling="yes"
                id="8j4TVe5uOcjxbNfVC3kp_meetings"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   STICKY CTA
   ══════════════════════════════════════════════════════════════════ */

function StickyCta() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#E3E6EC] bg-white/95 px-5 py-3 backdrop-blur-md sm:px-8"
        >
          <div className={`${WRAP} flex items-center justify-between gap-4`}>
            <div className="hidden sm:block">
              <p className="text-[14px] font-medium text-[#0B0E14]">
                Qualified meetings, booked for you, guaranteed in writing
              </p>
              <p className={`${MICRO} mt-0.5 text-[#9AA3B1]`}>
                <span className={NUM}>15+</span> a month
                <span className="mx-1.5 text-[#C3CAD5]">·</span>
                No lock-in
                <span className="mx-1.5 text-[#C3CAD5]">·</span>
                Cancel any time
              </p>
            </div>
            <a
              href={BOOK}
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-[6px] bg-[#003DDB] px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#0030AE] sm:w-auto"
            >
              Book my free call
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ══════════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════════ */

export default function MeetingsLanderPage() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <FunnelHeader
        ctaHref={BOOK}
        ctaLabel="Book my free call"
        ctaLabelShort="Book a call"
      />

      <main>
        <Hero />
        <VSL />
        <VideoCaseStudies />
        <BurnedBefore />
        <FounderNote />
        <RiskReversal />
        <Mechanism />
        <Timeline />
        <Proof />
        <FAQ />
        <Booking />
      </main>

      <FunnelFooter
        note="Qualified meetings, booked for you"
        showSiteLegal={false}
      />

      <StickyCta />
      {/* Clears the sticky bar on mobile so it never covers the footer. */}
      <div className="h-16 sm:h-0" />
    </div>
  );
}
