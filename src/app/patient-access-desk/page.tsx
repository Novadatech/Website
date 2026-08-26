"use client";

/*
 * /patient-access-desk : the clinic-side offer page.
 * Built 2026-08-26 from "Novada Patient Access Desk - One Pager" (the
 * approved source copy) and the Website Rebuild Brief section 5.
 *
 * Binding copy rules apply in full (brief section 9): Australian
 * spelling, no em dashes, no pricing, nothing clinical, no guarantees,
 * approved statistics only with sources printed, no testimonials or
 * client names, never "virtual receptionist" or "answering service".
 *
 * The buyer fear this page disarms: losing control of the phones and the
 * practice software. Answered with alongside-not-instead, your-systems,
 * and the monthly report.
 */

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import DeskNav from "@/components/desk/DeskNav";
import StickyCta from "@/components/desk/StickyCta";
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
  "The phone rings out while your front desk is with the patient standing in front of them.",
  "The recall and reactivation list never actually gets run.",
  "Cancellations leave holes in today's book that nobody has time to fill.",
  "You're about to add another admin salary just to keep up.",
];

const WE_RUN = [
  "Calls, web enquiries and messages: answered, including evenings and Saturday.",
  "Bookings, rescheduling and new-patient intake, directly in your own software (Cliniko, Halaxy, Dental4Windows, ezyVet, Best Practice and more).",
  "Recalls and reactivation, run every week.",
  "Cancellation recovery and same-day no-show follow-up.",
  "A monthly Patient Access Report: every enquiry, response time, booking outcome and reason lost.",
];

const EVIDENCE = [
  {
    figure: "+4.75%",
    body: "Award wages rose again on 1 July 2026, with superannuation now at 12%. The cost of the next admin hire rises every July.",
    source: "Fair Work Commission; ATO",
  },
  {
    figure: "46% vs 13%",
    body: "46% of Australian small businesses grew revenue last year. Only 13% grew headcount.",
    source: "CPA Australia Asia-Pacific Small Business Survey",
  },
  {
    figure: "$87,740 to $114,827",
    body: "What missed appointments cost two Queensland physiotherapy clinics per clinic, per year, in a peer-reviewed study.",
    source: "BMJ Open, 2025",
  },
];

const STEPS = [
  {
    n: "01",
    title: "The review",
    body: "We map your call, booking, recall and cancellation workload, and what it is costing you today.",
  },
  {
    n: "02",
    title: "The baseline",
    body: "Week one. We measure your current numbers inside your own software, before we change anything.",
  },
  {
    n: "03",
    title: "The desk runs",
    body: "We take the workload, and the monthly report shows every call, booking and recovery from day one.",
  },
];

export default function PatientAccessDeskPage() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-white">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -left-40 h-[420px] w-[420px] rounded-full bg-[#003DDB] opacity-[0.06]"
          />
          <div className={`${CONTAINER} ${SECTION} relative py-16 md:py-24`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-[880px]"
            >
              <p className={EYEBROW}>
                Managed Patient Access Operations · Australia
              </p>
              <h1 className={`${H1} mt-5 text-[#0E1116]`}>
                Add patient capacity.{" "}
                <span className="text-[#003DDB]">
                  Not another front-desk salary.
                </span>
              </h1>
              <p className={`${LEAD} mt-6 max-w-[760px]`}>
                Novada runs the phone-and-schedule workload for growing
                Australian practices: dental, physiotherapy, occupational
                therapy, psychology, podiatry, speech pathology, veterinary and
                other private clinics. Inside your existing practice software,
                with every outcome measured.
              </p>
              <a href="#book" className={`${BTN_PRIMARY} mt-9`}>
                Book a Capacity Review
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Sound familiar */}
        <section className="bg-[#F4F6FA] border-y border-[#E2E7EE]">
          <div className={`${CONTAINER} ${SECTION} py-14 md:py-20`}>
            <h2 className={`${H2} text-[#0E1116] mb-8`}>Sound familiar?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {PAINS.map((p, i) => (
                <AnimatedSection key={p} delay={i * 0.07}>
                  <div className={`${CARD} h-full p-6`}>
                    <p className="text-[15px] text-[#0E1116] leading-relaxed">{p}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* What we run */}
        <section className="bg-white">
          <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
            <div className="max-w-[720px] mb-9">
              <p className={EYEBROW}>What we run</p>
              <h2 className={`${H2} mt-4 text-[#0E1116]`}>
                The phone-and-schedule workload, handled.
              </h2>
            </div>
            <ul className="grid gap-4 md:grid-cols-2 max-w-[980px]">
              {WE_RUN.map((w) => (
                <li key={w} className={`${CARD} p-6 flex items-start gap-3`}>
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#003DDB]">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  <span className={BODY}>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What we don't do */}
        <section className="bg-[#0B1E4B]">
          <div className={`${CONTAINER} ${SECTION} py-14 md:py-20`}>
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-[#9FB3E8]">
              What we don&apos;t do
            </p>
            <h2 className={`${H2} mt-4 text-white max-w-[760px]`}>
              Alongside your front desk, not instead of it.
            </h2>
            <p className="mt-6 text-base md:text-lg text-[#D8E1F8] leading-relaxed max-w-[860px]">
              Anything clinical is out of scope. No triage, no advice; urgent
              matters route straight to your team under an agreed protocol. And
              nothing at the front counter: greeting, payments and patient care
              stay with your people.
            </p>
          </div>
        </section>

        {/* Why now */}
        <section className="bg-white">
          <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
            <div className="max-w-[720px] mb-10">
              <p className={EYEBROW}>Why now</p>
              <h2 className={`${H2} mt-4 text-[#0E1116]`}>
                Why practices are looking at this now.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {EVIDENCE.map((e, i) => (
                <AnimatedSection key={e.figure} delay={i * 0.1} className="h-full">
                <div className={`${CARD} h-full border-t-4 border-t-[#003DDB] p-7 flex flex-col`}>
                  <p className="font-condensed text-[34px] md:text-[40px] font-bold leading-none text-[#003DDB]">
                    {e.figure}
                  </p>
                  <p className={`${BODY} mt-4 flex-1`}>{e.body}</p>
                  <p className={`${SOURCE} mt-5 border-t border-[#E2E7EE] pt-4`}>{e.source}</p>
                </div>
                </AnimatedSection>
              ))}
            </div>
            <p className="mt-8 text-base md:text-lg font-medium text-[#0B1E4B] max-w-[820px] leading-relaxed">
              Before you add the next salary, we&apos;ll benchmark the workload
              against the actual cost of that hire: your numbers, not industry
              claims.
            </p>
          </div>
        </section>

        {/* Why trust us */}
        <section className="bg-[#F4F6FA] border-y border-[#E2E7EE]">
          <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
            <div className={`${CARD} p-8 md:p-12 border-l-4 border-l-[#003DDB] max-w-[960px]`}>
              <p className={EYEBROW}>Why trust us with your phones</p>
              <p className="mt-5 text-lg md:text-2xl font-medium text-[#0E1116] leading-snug">
                Our team already runs a 24/7 coordination desk for Australian
                care providers: every call answered, every night of the year,
                inside their systems and to their protocols.
              </p>
              <p className={`${BODY} mt-5`}>
                We measure everything we do, and we&apos;ll show you your own
                numbers, not recycled industry statistics.
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
            <div className="space-y-4">
              {STEPS.map((s, i) => (
                <AnimatedSection key={s.n} delay={i * 0.1} direction="left">
                  <div
                    className={`${CARD} flex flex-col gap-4 p-7 md:flex-row md:items-center md:gap-10 md:p-9`}
                    style={{ marginLeft: `${i * 1.5}%` }}
                  >
                    <span className="font-condensed text-[62px] md:text-[84px] font-bold leading-[0.8] text-[#003DDB]">
                      {s.n}
                    </span>
                    <div className="md:border-l md:border-[#E2E7EE] md:pl-10">
                      <h3 className="text-xl md:text-2xl font-bold text-[#0E1116]">
                        {s.title}
                      </h3>
                      <p className={`${BODY} mt-2 max-w-[620px]`}>{s.body}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Booking */}
        <section id="book" className="bg-[#003DDB] scroll-mt-20">
          <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
            <div className="max-w-[760px]">
              <h2 className={`${H2} text-white`}>Book a capacity review.</h2>
              <p className="mt-5 text-base md:text-lg text-[#D8E1F8] leading-relaxed">
                We&apos;ll map your call, booking and recall workload, and show
                you exactly what we&apos;d measure in your first 30 days.
              </p>
            </div>
            <div className="mt-10 max-w-[860px]">
              <BookingEmbed
                source="patient-access-desk"
                title="Book a capacity review with Novada"
              />
            </div>
          </div>
        </section>
      </main>
      <DeskFooter />
      <StickyCta label="Book a Capacity Review" />
    </div>
  );
}
