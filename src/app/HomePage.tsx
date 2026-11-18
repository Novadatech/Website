"use client";

import { ChevronDown } from "lucide-react";

import DeskFooter from "@/components/desk/DeskFooter";
import { MICRO } from "@/components/desk/tokens";
import ProductShot from "@/components/offer/ProductShot";
import {
  Blobs,
  CREAM,
  CREAM_DEEP,
  Cta,
  CtaSoft,
  DEEP,
  LpHeader,
  Rating,
  Section,
  SectionHead,
  SERIF,
  TextLink,
  Tick,
} from "@/components/lp/kit";
import { FRAME, GUTTER } from "@/components/desk/tokens";

/*
 * ══════════════════════════════════════════════════════════════════════
 * / — THE HOME PAGE.
 *
 * Rebuilt 10 November 2026 on the same shape as the two offer pages,
 * on the founder's instruction, as part of reducing the site to four
 * pages: this one, the two AI Workforce offers, and Why Novada.
 *
 * 🔴 IT IS NO LONGER A ROUTER BETWEEN TWO AUDIENCES. The page it
 * replaced sent a visitor to /care or /practices, each of which was a
 * hub listing two offers. Both hubs are archived and both pairs of
 * offers are retired. There are two offers now and this page names
 * them, so the hub layer has nothing left to do.
 *
 * ⚠️ THIS PAGE HAS NO CALENDAR AND SHOULD NOT GET ONE. Its job is to
 * put a visitor in front of the right offer page, where the booking
 * actually is. #book here is a chooser, not an embed. Putting a
 * calendar here would mean a booking that cannot be attributed to
 * either offer, which is how a lead reaches the wrong coordinator.
 *
 * ⚠️ THE POSITION LINE IS NOT ON THIS PAGE AND THAT IS NOT AN
 * OVERSIGHT. "We streamline the work behind the care." lives in the
 * footer, the page title and the share card, all of which this page
 * still carries. It was removed from the H1 in October when the
 * founder asked for an offer-led headline. Changing where it appears
 * is a brand decision and a three-file change: page.tsx,
 * opengraph-image.tsx and DeskFooter.
 * ══════════════════════════════════════════════════════════════════════
 */

/* The two offers. 🔴 THIS IS THE WHOLE OFFER SET as of 10 November
   2026. The Rostering Audit, Workforce Continuity, Revenue Leakage
   Audit and Patient Booking offers are retired and their pages
   archived. Do not add a third card here without the founder: the
   number of offers is a positioning decision, not a layout one. */
const OFFERS = [
  {
    eyebrow: "For NDIS, aged care & home care providers",
    name: "Novada AI Operations Agents for care",
    lead: "Rostering, compliance, HR and payroll, after-hours calls and claims administration.",
    points: [
      "Five specialised AI Operations Agents, deployed on their own or together.",
      "They fill the shift, chase the clearance and get the hours to payroll.",
      "Every action recorded in one Control Centre.",
    ],
    href: "/care/ai-workforce",
    cta: "See the care offer",
    img: "/ai-workforce/why-employees.png",
  },
  {
    eyebrow: "For GP, specialist & allied health practices",
    name: "Novada AI Operations Agents for practices",
    lead: "Patient calls, cancelled appointments, referrals, recalls and billing exceptions.",
    points: [
      "Six specialised AI Operations Agents, deployed on their own or together.",
      "They answer the call, refill the slot and work the claim.",
      "Your clinicians keep every clinical and billing decision.",
    ],
    href: "/practices/ai-workforce",
    cta: "See the practices offer",
    img: "/ai-workforce/why-systems.png",
  },
];

const PROVIDERS = [
  { name: "Maxicare Plus", file: "maxicare.png", h: "h-9 md:h-10" },
  { name: "Morning Star Community Services", file: "morningstar.png", h: "h-14 md:h-16" },
  { name: "Supportslink", file: "supportslink.png", h: "h-9 md:h-11" },
];

const WHY = [
  {
    img: "/ai-workforce/why-employees.png",
    h: "It does the work",
    b: "Not a dashboard that tells your team what is outstanding. An AI Operations Agent that completes the task and records what it did.",
  },
  {
    img: "/ai-workforce/why-control.png",
    h: "You stay in control",
    b: "You decide what runs automatically, what needs approval, and what must always reach a person.",
  },
  {
    img: "/ai-workforce/why-systems.png",
    h: "It uses your systems",
    b: "Your existing software keeps its records. The AI works across it rather than replacing it.",
  },
];

/* 🔴 SECTOR AND RESEARCH FIGURES, NOT NOVADA RESULTS, and phrased
   conditionally for that reason. The same rule as both offer pages:
   never replace one of these with a Novada performance number, and if
   a figure changes, the replacement needs a real published source
   recorded here first.

   ⚠️ `src` IS NOT RENDERED and is kept so provenance lives with the
   figure. Do not delete it as dead code.

   Sources: medRxiv systematic review (2025); McMaster Health Forum
   rapid review; Kaiser Permanente Medical Group; StewartBrown Aged
   Care Financial Performance Survey (Sep 2025); AIHW Aged Care
   Provider Workforce Survey (2023); BJGP systematic review. */
const SECTOR = [
  {
    img: "/ai-workforce/stat-hr-light.png",
    n: "40%",
    b: "Efficiency gain in administrative work when AI handles documentation and claims",
    src: "Systematic review, 2025",
  },
  {
    img: "/ai-workforce/stat-afterhours-light.png",
    n: "30%",
    b: "Less after-hours administrative work when AI supports documentation",
    src: "McMaster Health Forum",
  },
  {
    img: "/ai-workforce/stat-roles-light.png",
    n: "15,791",
    b: "Hours of documentation time saved in a single year at one health group",
    src: "Kaiser Permanente",
  },
  {
    img: "/ai-workforce/stat-ops-light.png",
    n: "24.1%",
    b: "Of aged care provider revenue goes to administration and support today",
    src: "StewartBrown, Sep 2025",
  },
  {
    img: "/ai-workforce/stat-stages-light.png",
    n: "27%",
    b: "Of directly employed aged care staff left their job within twelve months",
    src: "AIHW, 2023",
  },
  {
    img: "/ai-workforce/stat-control-light.png",
    n: "15.2%",
    b: "Of general practice appointments are missed, on average",
    src: "BJGP systematic review",
  },
];

/* 🔴 VERBATIM AND FOUNDER-SUPPLIED. Do not reword, do not trim to fit
   the card. ⚠️ EMMANUELLA, TWO LS, founder-confirmed 29 October.
   ⚠️ NO HEADSHOTS: the repo holds no verified set, and a wrong face
   against a real client's quote is worse than no face. */
const TESTIMONIALS = [
  {
    org: "Maxicare Plus",
    name: "Founder, Josh",
    quote:
      "One thing we value about Novada Tech is that they understand the operational challenges NDIS providers face. Building a care business requires more than finding workers. It requires reliable processes, proper planning and consistent support. Novada brings a practical, proactive approach and genuinely takes the time to understand what our organisation needs.",
  },
  {
    org: "Morning Star Community Services",
    name: "Founder, Emmanuella",
    quote:
      "In the care sector, having reliable people and well-managed processes makes a real difference. What stands out about Novada Tech is their professionalism, attention to detail and focus on making operations more manageable. They understand the importance of accountability, consistency and having the right support behind service delivery.",
  },
  {
    org: "Support Link",
    name: "Founder, Peter",
    quote:
      "Novada Tech takes a structured and professional approach to understanding business needs. They recognise the importance of strong workforce processes, clear communication and dependable administrative support. Their commitment to practical solutions and ongoing improvement is what makes them a valuable partner.",
  },
];

const FAQ = [
  {
    q: "What are Novada AI Operations Agents?",
    a: "They run on an AI-powered operational platform for Australian healthcare organisations. You engage specialised AI Operations Agents that coordinate and execute approved administrative workflows across your supported business systems.",
  },
  {
    q: "How is it different from ChatGPT or a conventional AI chatbot?",
    a: "A chatbot responds to questions or generates information. Novada AI Operations Agents perform authorised operational actions through connected systems, follow defined workflows, request approvals, verify outcomes and maintain activity records.",
  },
  {
    q: "Can AI Operations Agents actually complete tasks?",
    a: "That is the core purpose of the offering. A supported AI Operations Agent is designed to perform permitted actions rather than simply recommend them. Actual capabilities depend on the available integrations, configured workflows, system permissions and required approvals.",
  },
  {
    q: "Do we need to replace our current software?",
    a: "Not necessarily. The platform works alongside supported existing applications rather than requiring a wholesale system replacement, and your existing systems remain authoritative for their own records unless explicitly agreed otherwise.",
  },
  {
    q: "Does Novada guarantee cost savings?",
    a: "No. The business value depends on the workflows implemented, the volume of tasks handled, integration complexity and the amount of human administrative effort reduced. Potential efficiencies should be measured against a real operational baseline.",
  },
  {
    /* ⚠️ NO FIGURE. Price does not appear in writing before a call. */
    q: "How much does it cost to deploy an AI Operations Agent?",
    a: "Pricing is based on the selected AI Operations Agent, the required workflows, supported integrations, usage and implementation requirements. Your proposal sets out the applicable costs once the scope is understood.",
  },
];

/** The Control Centre mock. ⚠️ Every row names a real AI Operations Agent and a
    real status. No figure in here may describe a Novada outcome. */
/* The real product: the exception queue, with the morning summary and
   the agent's own recovery attempt floating over it. Founder instruction
   18 Nov 2026. Images: tools/product-shots. AU care screens only.
   ⚠️ The recovery card is hidden below sm: at 390px it would cover
   most of the queue. */
function ControlVisual() {
  return (
    <div className="relative px-2 pb-0 pt-[80px] sm:px-6 sm:pb-20">
        <div className="absolute left-0 top-0 z-20 w-[250px] overflow-hidden rounded-lg border border-ink-100 bg-white shadow-float">
          <div
            className="px-4 py-3.5"
            style={{ background: "linear-gradient(110deg,#003DDB 0%,#0030AE 55%,#3A6CFF 100%)" }}
          >
            <p style={SERIF} className="text-sm font-bold text-white">
              Good morning. Here is last night.
            </p>
            <p className="mt-1 text-[11px] text-white/75">8 resolved, 2 held for you</p>
          </div>
        </div>
        <ProductShot
          src="/product/home-exceptions.webp"
          width={698}
          height={619}
          alt="The exception queue in the Novada Control Centre: an uncovered morning shift escalated to the on-call manager, and a payroll variance held for review"
          className="relative z-10"
        />
        <ProductShot
          src="/product/home-recovery.webp"
          width={385}
          height={234}
          alt="The recovery the agent attempted before escalating: eligibility checked, offers sent to two eligible workers, no acceptance in the offer window"
          className="absolute bottom-0 right-0 z-20 hidden w-[270px] sm:block"
        />
    </div>
  );
}

/* ── THE PAGE ─────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <div
      data-theme="desk"
      data-lp="cream"
      className="min-h-screen font-sans"
      style={{ backgroundColor: CREAM }}
    >
      <LpHeader cta="See the offers" />

      <main>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: CREAM }}>
          <div
            className={`${FRAME} ${GUTTER} relative grid items-center gap-12 pb-20 pt-6 md:pb-28 md:pt-16 lg:grid-cols-[0.92fr_1.12fr] lg:gap-10`}
          >
            {/* ⚠️ min-w-0 ON BOTH GRID ITEMS. A grid item's min-width is
                auto, so the widest unbreakable thing inside either
                column silently widens BOTH and the h1 renders past the
                right gutter at 390px. */}
            <div className="min-w-0">
              <p className={`${MICRO} text-brand-500`}>
                For Australian care providers &amp; medical practices
              </p>

              <h1
                style={SERIF}
                className="mt-5 text-[clamp(2.1rem,1.35rem+3.2vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.02em] text-ink-950"
              >
                Deploy AI Operations Agents that do the work. Not just tell you what needs
                doing.
              </h1>

              <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-ink-600">
                Novada AI Operations Agents run the administration behind Australian
                healthcare, inside the systems you already use. They complete
                approved work, ask before anything consequential, and record
                every action in one place.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Cta href="#offers">See the offers</Cta>
                <CtaSoft href="#how">
                  How it works
                  <ChevronDown aria-hidden className="h-4 w-4" />
                </CtaSoft>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                <Rating />
              </div>
            </div>

            <div className="min-w-0 lg:pl-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                /* ⚠️ ONE LAYOUT, SEVEN SCREENS. Founder instruction,
                   17 Nov 2026: roll the hero across every page, and give
                   each page its OWN dashboard so the pages do not read as
                   the same picture with the words changed. The frame, the
                   blobs, the placement and the figure are identical
                   site-wide; only the screen inside the panel differs.
                   This page shows the OVERNIGHT WORK QUEUE.
                   Built by hero_build_all.py from dash/out/home-au.png.
                   🔴 THE BLOB ARTWORK IS STILL HIBOB'S, kept by founder
                   decision. The two dominant rights - their model's
                   likeness and their dashboard UI - are gone; the shapes
                   are not. Do not record this file as fully cleared. */
                src="/ai-workforce/hero-home.webp"
                alt="The Novada Control Centre performance report: 143 tasks verified in the last seven days, rising each day, with 89.4% read back from the source system, beside an operations manager"
                width={938}
                height={654}
                fetchPriority="high"
                decoding="async"
                className="h-auto w-full lg:-mr-6 xl:-mr-10"
              />
            </div>
          </div>
        </section>

        {/* ── CLIENT STRIP ─────────────────────────────────────────── */}
        <section className="border-y border-ink-100/70" style={{ backgroundColor: CREAM_DEEP }}>
          <div className={`${FRAME} ${GUTTER} py-10`}>
            <p style={SERIF} className="text-center text-lg font-bold text-ink-800">
              Australian healthcare providers already run Novada AI Operations Agents
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-20">
              {PROVIDERS.map((p) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={p.name}
                  src={`/clients/${p.file}`}
                  alt={p.name}
                  className={`${p.h} w-auto object-contain`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── THE TWO OFFERS ───────────────────────────────────────────
            🔴 THIS BAND REPLACED THE TWO-DOOR ROUTER. The visitor used
            to be sent to /care or /practices and choose an offer there.
            Both hubs are archived, so the choice happens here. */}
        <Section id="offers">
          <SectionHead sub="Two teams of AI Operations Agents, built for the two kinds of organisation we serve. Pick the one that sounds like you.">
            Which one are you?
          </SectionHead>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {OFFERS.map((o) => (
              <article
                key={o.name}
                className="reveal flex flex-col rounded-lg border border-ink-100 bg-white p-8 shadow-lift transition-[transform,box-shadow] duration-200 ease-standard hover:-translate-y-0.5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={o.img}
                  alt=""
                  width={130}
                  height={130}
                  className="h-[72px] w-[72px] object-contain"
                />
                <p className={`${MICRO} mt-5 text-brand-500`}>{o.eyebrow}</p>
                <h3 style={SERIF} className="mt-3 text-2xl font-bold leading-snug text-ink-950">
                  {o.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{o.lead}</p>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {o.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <Tick />
                      <span className="text-sm leading-relaxed text-ink-600">{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Cta href={o.href}>{o.cta}</Cta>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* ── WHY ──────────────────────────────────────────────────── */}
        <Section bg={CREAM_DEEP}>
          <SectionHead>Why choose a Novada AI Operations Agent?</SectionHead>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {WHY.map((w) => (
              <div key={w.h} className="reveal text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.img}
                  alt=""
                  width={130}
                  height={130}
                  className="mx-auto h-[104px] w-[104px] object-contain"
                />
                <h3 style={SERIF} className="mt-5 text-xl font-bold text-ink-950">
                  {w.h}
                </h3>
                <p className="mx-auto mt-3 max-w-[34ch] text-[15px] leading-relaxed text-ink-600">
                  {w.b}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────
            ⚠️ overflow-hidden IS LOAD-BEARING: the shapes behind the
            card carry negative offsets and without a clip they extend
            the document past the viewport at 390px. */}
        <section id="how" className="overflow-hidden" style={{ backgroundColor: CREAM }}>
          <div
            className={`${FRAME} ${GUTTER} grid items-center gap-14 py-16 md:py-24 lg:grid-cols-2 lg:gap-16`}
          >
            <div className="min-w-0">
              <h2
                style={SERIF}
                className="text-[clamp(1.6rem,1.15rem+1.8vw,2.35rem)] font-bold leading-[1.15] tracking-[-0.015em] text-ink-950"
              >
                Every action, visible in one place
              </h2>
              <ul className="mt-7 flex flex-col gap-4">
                {[
                  "Which tasks are done, running, waiting or stuck.",
                  "Which actions are sitting on your approval.",
                  "A traceable record of what each AI Operations Agent did, when, and in which system.",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-white"
                    >
                      <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                        <path
                          d="M2.5 6.2 4.8 8.5 9.5 3.8"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink-600">{b}</span>
                  </li>
                ))}
              </ul>
              {/* 🔴 LOAD-BEARING. Without it the Control Centre reads as
                  a replacement system of record, which is a claim we
                  cannot support and a migration we are not selling. */}
              <p className="mt-6 max-w-[58ch] border-l-2 border-ink-200 pl-4 text-sm leading-relaxed text-ink-500">
                Your existing rostering, practice management, HR, payroll,
                billing and clinical systems remain the authoritative records
                for their respective functions unless explicitly agreed
                otherwise.
              </p>
              <div className="mt-8">
                <TextLink href="#offers">See the two offers</TextLink>
              </div>
            </div>
            <div className="relative min-w-0">
              <Blobs flip />
              <div className="relative z-10">
                <ControlVisual />
              </div>
            </div>
          </div>
        </section>

        {/* ── THE DEEP BAND ────────────────────────────────────────── */}
        <section style={{ backgroundColor: DEEP }}>
          <div className={`${FRAME} ${GUTTER} py-16 md:py-24`}>
            <SectionHead dark>The business impact of AI Operations Agents</SectionHead>
            <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {SECTOR.map((s, i) => (
                <div
                  key={s.n + s.b}
                  className="reveal text-center"
                  style={{ ["--reveal-delay" as string]: `${Math.min(i, 4) * 60}ms` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt=""
                    width={78}
                    height={78}
                    className="mx-auto h-[62px] w-[62px] object-contain"
                  />
                  <p
                    style={SERIF}
                    className="tabular mt-4 text-[clamp(2.25rem,1.7rem+2.2vw,3.25rem)] font-bold leading-none tracking-[-0.02em] text-white"
                  >
                    {s.n}
                  </p>
                  <p className="mx-auto mt-3 max-w-[30ch] text-[15px] leading-relaxed text-white/75">
                    {s.b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
        <Section>
          <SectionHead wide>
            Running a healthcare organisation is complex. Novada takes the
            administration behind it off your team.
          </SectionHead>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={t.org}
                className="reveal flex flex-col rounded-lg border border-ink-100 bg-white px-7 py-8 text-center shadow-lift"
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              >
                <p
                  style={SERIF}
                  className="text-[15px] font-bold uppercase tracking-[0.03em] text-ink-950"
                >
                  {t.org}
                </p>
                <blockquote
                  style={SERIF}
                  className="mt-6 flex-1 text-[15px] italic leading-relaxed text-ink-700"
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 text-sm text-ink-500">
                  {t.name}, {t.org}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* ── FAQ ──────────────────────────────────────────────────────
            ⚠️ NATIVE <details>. No JS, keyboard and screen reader
            support for free, and it still works if hydration never
            finishes. */}
        <Section bg={CREAM_DEEP}>
          <SectionHead>Frequently asked questions</SectionHead>
          <div className="mx-auto mt-12 flex max-w-[76ch] flex-col gap-3">
            {FAQ.map((f, i) => (
              <details
                key={f.q}
                className="reveal group rounded-lg border border-ink-100 bg-white shadow-raise [&_summary::-webkit-details-marker]:hidden"
                style={{ ["--reveal-delay" as string]: `${Math.min(i, 4) * 50}ms` }}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 p-6 text-base font-semibold text-ink-950">
                  <span>{f.q}</span>
                  <ChevronDown
                    aria-hidden
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-ink-400 transition-transform duration-200 ease-standard group-open:rotate-180"
                  />
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed text-ink-600">{f.a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* ── CHOOSE ───────────────────────────────────────────────────
            🔴 A CHOOSER, NOT A CALENDAR. See the file header: the
            booking lives on each offer page, where it can be attributed
            to that offer's pipeline. A calendar here produces a lead
            nobody can route. */}
        <section id="book" style={{ backgroundColor: DEEP }}>
          <div className={`${FRAME} ${GUTTER} py-16 md:py-24`}>
            <SectionHead
              dark
              sub="Both start with a free 30-minute conversation about your workload, your systems and which work could be handled safely. No obligation to proceed."
            >
              Deploy your first AI Operations Agent
            </SectionHead>

            <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
              {OFFERS.map((o) => (
                <a
                  key={o.href}
                  href={o.href}
                  className="group flex flex-col rounded-lg border border-white/15 bg-white/[0.06] p-7 transition-colors duration-150 ease-standard hover:border-brand-200/50 hover:bg-white/10"
                >
                  <p className={`${MICRO} text-brand-200`}>{o.eyebrow}</p>
                  <p style={SERIF} className="mt-3 text-xl font-bold text-white">
                    {o.name}
                  </p>
                  <span className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-200">
                    {o.cta}
                    <ChevronDown
                      aria-hidden
                      className="h-4 w-4 -rotate-90 transition-transform duration-150 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <DeskFooter />
    </div>
  );
}
