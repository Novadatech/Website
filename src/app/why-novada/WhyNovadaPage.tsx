"use client";

import { ChevronDown } from "lucide-react";

import DeskFooter from "@/components/desk/DeskFooter";
import { FRAME, GUTTER, MICRO } from "@/components/desk/tokens";
import {
  Blobs,
  Card,
  CREAM,
  CREAM_DEEP,
  Cta,
  CtaSoft,
  DEEP,
  Dots,
  ExampleChip,
  LpHeader,
  Rating,
  Section,
  SectionHead,
  SERIF,
  TextLink,
  Tick,
} from "@/components/lp/kit";

/*
 * ══════════════════════════════════════════════════════════════════════
 * /why-novada — THE COMPANY PAGE.
 *
 * Rebuilt 10 November 2026 on the same shape as the home page and the
 * two offer pages, as part of reducing the site to four pages.
 *
 * 🔴 THE FOUR PRINCIPLES ARE CARRIED OVER VERBATIM FROM THE PAGE THIS
 * REPLACED. They are the most load-bearing copy on the site and two of
 * them are commitments, not marketing:
 *
 *   · "Nothing clinical, ever. No triage, no assessment, no advice."
 *     🔴 THIS IS IN THE SERVICE AGREEMENT. It is not a page I can
 *     reword for rhythm, and it is the sentence a clinician reads
 *     before deciding whether to trust an AI with their front desk.
 *   · "Alongside, not instead" is the answer to the first question
 *     every manager asks about an AI workforce, which is whether it is
 *     here to replace their team.
 *
 * ⚠️ THEY SURVIVED THE REPOSITIONING INTACT AND THAT IS DELIBERATE.
 * They were written when Novada ran these functions with its own
 * people. The offer is now AI employees doing the same work under the
 * same boundaries, so the rules did not need rewriting, only the
 * sentence that introduces them. If a future change makes one of them
 * untrue, the fix is to change the service, not the page.
 *
 * ⚠️ "ONSHORE" IS ALLOWED HERE. It is banned on novadatech.com, which
 * serves both Australia and the US and where the word is meaningless
 * or misleading. This domain is Australian only.
 *
 * ⚠️ NO CALENDAR ON THIS PAGE. #book is a chooser that sends the
 * visitor to the offer page their booking belongs to, same as the home
 * page. A calendar here produces a lead that cannot be attributed to
 * either offer.
 * ══════════════════════════════════════════════════════════════════════
 */

const PROVIDERS = [
  { name: "Maxicare Plus", file: "maxicare.png", h: "h-9 md:h-10" },
  { name: "Morning Star Community Services", file: "morningstar.png", h: "h-14 md:h-16" },
  { name: "Supportslink", file: "supportslink.png", h: "h-9 md:h-11" },
];

/* 🔴 VERBATIM FROM THE PREVIOUS PAGE. Read the file header before
   editing any of these, particularly 02. */
const PRINCIPLES = [
  {
    index: "01",
    title: "Alongside, not instead",
    body: "We never replace your reception, your coordinators or your managers. We take the function, not the people: the enquiries nobody got back to, the recalls and the billing, the rosters and what they cost, the hiring and the records. What stays with your team is the care itself and every decision that turns on the person receiving it.",
  },
  {
    index: "02",
    title: "Nothing clinical, ever",
    body: "No triage, no assessment, no advice. Anything clinical routes straight to your team under a protocol we agree in writing before we take a single call. That boundary is in the service agreement, not in fine print.",
  },
  {
    index: "03",
    title: "Onshore and Australian owned",
    body: "An Australian team, working Australian hours and Australian rules, inside your systems. Your data stays where it already lives.",
  },
  {
    index: "04",
    title: "Your systems, not ours",
    body: "We work in the software you already run, whether that is your practice software or your care platform. Nothing migrates, nothing is replaced, and you keep the system of record.",
  },
];

/* The two offers. 🔴 THIS IS THE WHOLE OFFER SET as of 10 November
   2026. Do not add a third without the founder. */
const OFFERS = [
  {
    eyebrow: "For NDIS, aged care & home care providers",
    name: "Novada AI Workforce for care",
    body: "The rosters and what they cost, the hiring, the screening, the training records and the payroll, inside your own systems.",
    href: "/care/ai-workforce",
    cta: "See the care offer",
    img: "/ai-workforce/why-employees.png",
  },
  {
    eyebrow: "For GP, specialist & allied health practices",
    name: "Novada AI Workforce for practices",
    body: "The enquiries nobody got back to, the bookings, the recall list and the billing behind them, inside your own practice software.",
    href: "/practices/ai-workforce",
    cta: "See the practices offer",
    img: "/ai-workforce/why-systems.png",
  },
];

/* ── THE CONTROL BOUNDARY. ────────────────────────────────────────────
 * 🔴 The third column is why this band is on the company page as well
 * as both offer pages. Someone deciding whether to trust Novada at all
 * reads this page, and this is the answer. Do not shorten it and do
 * not reorder the three so it stops being the one they finish on.
 * ──────────────────────────────────────────────────────────────────── */
const OVERSIGHT = [
  {
    h: "Actions that may be automated",
    items: [
      "Routine administrative reminders and follow-ups.",
      "Permitted record updates in your own systems.",
      "Document requests and chasing.",
      "Task tracking across functions.",
      "Preparation of reports and operational summaries.",
    ],
  },
  {
    h: "Actions that may require approval",
    items: [
      "Changes to approved rosters and schedules.",
      "Certain external communications.",
      "Updates affecting employment, clinical or regulated records.",
      "Claim corrections and resubmissions.",
      "Anything your organisation identifies as requiring authorisation.",
    ],
  },
  {
    h: "Decisions that stay with people",
    items: [
      "Clinical and care decisions, including urgency and triage.",
      "Worker suitability, hiring and disciplinary decisions.",
      "Regulatory determinations and statutory reporting accountability.",
      "Medicare eligibility and the selection of clinical billing codes.",
      "Safety-critical incidents and emergency responses.",
    ],
  },
];

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

/** The audit record. ⚠️ No figure in a mock may describe a Novada
    outcome; this one shows the state of one fictional night. */
function RecordVisual() {
  return (
    <Card title="Activity record">
      <div className="flex flex-col">
        {[
          ["21:16", "Absence received", "Approved channel"],
          ["21:17", "Roster checked", "Rostering system"],
          ["21:19", "Offers sent to 3 workers", "SMS"],
          ["21:34", "Acceptance recorded", "Rostering system"],
          ["21:34", "Sent for approval", "Control Centre"],
        ].map(([t, what, where]) => (
          <div
            key={t + what}
            className="flex items-baseline gap-3 border-b border-ink-100 px-4 py-2.5 last:border-b-0"
          >
            <span className="tabular text-[11px] font-semibold text-ink-400">{t}</span>
            <span className="flex-1 text-[13px] text-ink-800">{what}</span>
            <span className="hidden text-[11px] text-ink-400 sm:block">{where}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── THE PAGE ─────────────────────────────────────────────────────── */

export default function WhyNovadaPage() {
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
            {/* ⚠️ min-w-0 ON BOTH GRID ITEMS: a grid item's min-width is
                auto, so the widest unbreakable thing inside either one
                widens BOTH and the h1 renders past the right gutter. */}
            <div className="min-w-0">
              <p className={`${MICRO} text-brand-500`}>Why Novada</p>

              <h1
                style={SERIF}
                className="mt-5 text-[clamp(2.1rem,1.35rem+3.2vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.02em] text-ink-950"
              >
                The work behind the care is the part almost nobody measures.
              </h1>

              <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-ink-600">
                Novada builds AI employees that run that work for Australian
                care providers and medical practices. We take the function, not
                the people, and we stop at the line where care begins.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Cta href="#book">See the offers</Cta>
                <CtaSoft href="#rules">
                  Our four rules
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
                src="/ai-workforce/hero.png"
                alt="The Novada AI Control Centre, with an operations manager reviewing the overnight summary"
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
              Australian healthcare providers already run Novada AI employees
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

        {/* ── THE FOUR RULES ───────────────────────────────────────────
            🔴 VERBATIM. Read the file header: 02 is in the service
            agreement, not in the copy deck. */}
        <Section id="rules">
          <SectionHead sub="They were written when we ran this work with our own people. The offer is AI employees now, doing the same work under the same boundaries, so the rules did not need rewriting.">
            Four rules we do not bend
          </SectionHead>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.title}
                className="reveal flex flex-col rounded-lg border border-ink-100 bg-white p-7 shadow-lift md:p-8"
                style={{ ["--reveal-delay" as string]: `${Math.min(i, 4) * 60}ms` }}
              >
                <span className="tabular text-xs font-bold uppercase tracking-caps text-brand-500">
                  {p.index}
                </span>
                <h3 style={SERIF} className="mt-3 text-xl font-bold text-ink-950">
                  {p.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-600">{p.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── WHAT WE RUN ──────────────────────────────────────────── */}
        <Section bg={CREAM_DEEP}>
          <SectionHead sub="Two AI workforces, built for the two kinds of organisation we serve.">
            What we run for you
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
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-600">{o.body}</p>
                <div className="mt-8">
                  <Cta href={o.href}>{o.cta}</Cta>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* ── THE RECORD ───────────────────────────────────────────────
            ⚠️ overflow-hidden IS LOAD-BEARING: the shapes carry negative
            offsets and without a clip they extend the document past the
            viewport at 390px. */}
        <section className="overflow-hidden" style={{ backgroundColor: CREAM }}>
          <div
            className={`${FRAME} ${GUTTER} grid items-center gap-14 py-16 md:py-24 lg:grid-cols-2 lg:gap-16`}
          >
            <div className="min-w-0">
              <h2
                style={SERIF}
                className="text-[clamp(1.6rem,1.15rem+1.8vw,2.35rem)] font-bold leading-[1.15] tracking-[-0.015em] text-ink-950"
              >
                You can see what was done, and who approved it
              </h2>
              <ul className="mt-7 flex flex-col gap-4">
                {[
                  "Every action an AI employee takes is recorded: what it did, when, and in which system.",
                  "Approvals and escalations are recorded alongside them.",
                  "You set what runs automatically, what needs sign-off and what must always reach a person.",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Tick />
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
                <TextLink href="#book">See the two offers</TextLink>
              </div>
            </div>
            <div className="relative min-w-0">
              <Blobs flip />
              <div className="relative z-10 py-6">
                <RecordVisual />
              </div>
            </div>
          </div>
        </section>

        {/* ── HUMAN OVERSIGHT ──────────────────────────────────────── */}
        <Section bg={CREAM_DEEP}>
          <SectionHead wide>
            Your AI employees do the routine work. Your people keep the
            decisions.
          </SectionHead>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {OVERSIGHT.map((o, i) => (
              <div
                key={o.h}
                className="reveal flex flex-col rounded-lg border border-ink-100 bg-white p-7 shadow-lift"
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              >
                <h3 style={SERIF} className="text-lg font-bold text-ink-950">
                  {o.h}
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {o.items.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <Tick />
                      <span className="text-sm leading-relaxed text-ink-600">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p
            style={SERIF}
            className="mx-auto mt-12 max-w-[60ch] text-center text-lg font-bold leading-snug text-ink-950"
          >
            The purpose of AI is to reduce unnecessary manual effort, not to
            remove professional judgement, accountability or appropriate
            safeguards from care delivery.
          </p>
        </Section>

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

        {/* ── CHOOSE ───────────────────────────────────────────────────
            🔴 A CHOOSER, NOT A CALENDAR. The booking lives on each offer
            page, where it can be attributed to that offer's pipeline. */}
        <section id="book" style={{ backgroundColor: DEEP }}>
          <div className={`${FRAME} ${GUTTER} py-16 md:py-24`}>
            <SectionHead
              dark
              sub="Both start with a free 30-minute conversation about your workload, your systems and which work could be handled safely. No obligation to proceed."
            >
              Thirty minutes on where the work is going now
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
