"use client";

/*
 * /workforce-ops-desk : the care-provider offer page (NDIS, home care,
 * aged care). Built 2026-08-26 from "Novada Workforce Ops Desk - One
 * Pager" (approved source copy) and the Website Rebuild Brief section 5.
 *
 * ⚠️ LEGAL CONSTRAINT ON THIS PAGE SPECIFICALLY (brief rule 7):
 * strictly NO referral, incentive, gift or growth-promise language
 * anywhere. The 2026 NDIS inducement ban carries criminal exposure. This
 * is not a style preference. Do not add "grow your business", "referral
 * bonus", "reward", "incentive" or similar, in copy, alt text or
 * metadata, under any circumstances.
 *
 * Also binding: no pricing, nothing clinical, no guarantees, approved
 * statistics only with sources printed, Australian spelling, no em
 * dashes, never "answering service" or "BPO".
 */

import { ArrowRight, Check } from "lucide-react";
import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import BookingEmbed from "@/components/desk/BookingEmbed";
import {
  BODY,
  BTN_PRIMARY,
  CARD,
  CARD_TINT,
  CONTAINER,
  EYEBROW,
  H1,
  H2,
  H3,
  LEAD,
  SECTION,
  SOURCE,
} from "@/components/desk/tokens";

const PAINS = [
  "Managers carry the on-call phone all night, then work a full day.",
  "A 4am call-off means someone senior is awake finding cover.",
  "Onboarding, induction and training records live in six places, none of them audit-ready.",
  "Your coordinator just resigned, and the phone doesn't care.",
];

const MODULES = [
  {
    title: "After-Hours Continuity",
    items: [
      "Call handling from close of business to morning, plus weekends.",
      "Roster gap and call-off coordination.",
      "Incident intake and escalation to your protocol.",
      "A structured morning handover.",
    ],
  },
  {
    title: "Managed Workforce Operations",
    items: [
      "Everything in After-Hours Continuity.",
      "Daytime rostering administration.",
      "Enquiry and intake admin.",
      "Onboarding, induction and training administration.",
      "Compliance records maintained to the 7-year statutory standard, produced on demand at audit.",
    ],
  },
];

const EVIDENCE = [
  {
    figure: "11.66% vs 6.61%",
    body: "Direct care costs rose 11.66% while direct care revenue rose 6.61%. The gap lands on your margin.",
    source: "StewartBrown, nine months to March 2026",
  },
  {
    figure: "72%+",
    body: "Staff costs now exceed 72% of operating revenue in residential aged care, and award wages rose again in July.",
    source: "StewartBrown; Fair Work Commission",
  },
  {
    figure: "7 years",
    body: "Worker and service records now carry a 7-year statutory retention obligation. Somebody has to keep them audit-ready.",
    source: "NDIS legislation, 2026",
  },
];

const STEPS = [
  {
    n: "01",
    title: "The review",
    body: "We map your after-hours load, coordination workload and record-keeping obligations.",
  },
  {
    n: "02",
    title: "The handover plan",
    body: "Your escalation protocol, contacts and systems access, documented and agreed before we take a single call.",
  },
  {
    n: "03",
    title: "The desk runs",
    body: "Cover starts, the structured handover lands every morning, and the monthly report shows every event.",
  },
];

export default function WorkforceOpsDeskPage() {
  return (
    <div className="bg-white font-sans">
      <DeskNav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-white">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -left-40 h-[420px] w-[420px] rounded-full bg-[#003DDB] opacity-[0.06]"
          />
          <div className={`${CONTAINER} ${SECTION} relative py-16 md:py-24`}>
            <div className="max-w-[880px]">
              <p className={EYEBROW}>
                Managed Workforce Operations · NDIS · Home Care · Aged Care
              </p>
              <h1 className={`${H1} mt-5 text-[#0E1116]`}>
                Add operations capacity.{" "}
                <span className="text-[#003DDB]">
                  Not another coordinator&apos;s salary.
                </span>
              </h1>
              <p className={`${LEAD} mt-6 max-w-[760px]`}>
                Novada runs the coordination desk for Australian care
                providers: rostering administration, after-hours cover, intake
                and the records. Inside your existing systems, measured and
                reported monthly.
              </p>
              <a href="#book" className={`${BTN_PRIMARY} mt-9`}>
                Book an Operations Review
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Sound familiar */}
        <section className="bg-[#F4F6FA] border-y border-[#E2E7EE]">
          <div className={`${CONTAINER} ${SECTION} py-14 md:py-20`}>
            <h2 className={`${H2} text-[#0E1116] mb-8`}>Sound familiar?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {PAINS.map((p) => (
                <div key={p} className={`${CARD} p-6`}>
                  <p className="text-[15px] text-[#0E1116] leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two modules */}
        <section className="bg-white">
          <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
            <div className="max-w-[720px] mb-10">
              <p className={EYEBROW}>Two ways to engage</p>
              <h2 className={`${H2} mt-4 text-[#0E1116]`}>
                Start with the nights. Or hand over the desk.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {MODULES.map((m) => (
                <div key={m.title} className={`${CARD} p-7 md:p-9`}>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#0E1116]">
                    {m.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {m.items.map((i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#003DDB]">
                          <Check className="h-3 w-3 text-white" strokeWidth={3} />
                        </span>
                        <span className={BODY}>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back office only, by design */}
        <section className="bg-[#0B1E4B]">
          <div className={`${CONTAINER} ${SECTION} py-14 md:py-20`}>
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-[#9FB3E8]">
              Scope
            </p>
            <h2 className={`${H2} mt-4 text-white max-w-[760px]`}>
              Back office only, by design.
            </h2>
            <p className="mt-6 text-base md:text-lg text-[#D8E1F8] leading-relaxed max-w-[900px]">
              We never deliver supports, never make worker-to-participant
              matching decisions, and never hold the participant relationship.
              Onshore team; worker screening clearances held wherever
              participant contact is plausible; your data stays in your own
              systems (ShiftCare, FlowLogic, Brevity, Carelink and more).
            </p>
          </div>
        </section>

        {/* Why now */}
        <section className="bg-white">
          <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
            <div className="max-w-[720px] mb-10">
              <p className={EYEBROW}>Why now</p>
              <h2 className={`${H2} mt-4 text-[#0E1116]`}>
                Why providers are looking at this now.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {EVIDENCE.map((e) => (
                <div key={e.figure} className={`${CARD_TINT} p-7 flex flex-col`}>
                  <p className="font-condensed text-[30px] md:text-[36px] font-bold leading-none text-[#003DDB]">
                    {e.figure}
                  </p>
                  <p className={`${BODY} mt-4 flex-1`}>{e.body}</p>
                  <p className={`${SOURCE} mt-5`}>{e.source}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-base md:text-lg font-medium text-[#0B1E4B] max-w-[860px] leading-relaxed">
              When margins are this tight, the question isn&apos;t whether
              coordination gets done. It&apos;s whether it needs another salary
              to do it.
            </p>
          </div>
        </section>

        {/* Proof */}
        <section className="bg-[#F4F6FA] border-y border-[#E2E7EE]">
          <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
            <div className={`${CARD} p-8 md:p-12 border-l-4 border-l-[#003DDB] max-w-[960px]`}>
              <p className={EYEBROW}>This isn&apos;t a proposal</p>
              <p className="mt-5 text-lg md:text-2xl font-medium text-[#0E1116] leading-snug">
                Our desk answers after-hours calls for Australian care
                providers every night of the year, inside their systems, to
                their escalation protocols, with a structured handover waiting
                every morning.
              </p>
            </div>
          </div>
        </section>

        {/* How it starts */}
        <section className="bg-white">
          <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
            <div className="max-w-[720px] mb-10">
              <p className={EYEBROW}>How it starts</p>
              <h2 className={`${H2} mt-4 text-[#0E1116]`}>Three steps.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.n} className={`${CARD} p-7`}>
                  <span className="font-condensed text-[40px] font-bold leading-none text-[#C7D2E8]">
                    {s.n}
                  </span>
                  <h3 className={`${H3} mt-4`}>{s.title}</h3>
                  <p className={`${BODY} mt-2`}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking */}
        <section id="book" className="bg-[#003DDB] scroll-mt-20">
          <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
            <div className="max-w-[760px]">
              <h2 className={`${H2} text-white`}>Book an operations review.</h2>
              <p className="mt-5 text-base md:text-lg text-[#D8E1F8] leading-relaxed">
                We&apos;ll map your after-hours load, coordination workload and
                record-keeping obligations, and show you exactly what we&apos;d
                take off your team first.
              </p>
            </div>
            <div className="mt-10 max-w-[860px]">
              <BookingEmbed
                source="workforce-ops-desk"
                title="Book an operations review with Novada"
              />
            </div>
          </div>
        </section>
      </main>
      <DeskFooter />
    </div>
  );
}
