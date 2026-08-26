"use client";

/*
 * /why-novada : the approach page named in the Website Rebuild Brief
 * section 3: alongside-not-instead, onshore, measurement-first, and the
 * operating proof.
 *
 * Built 2026-08-26. No testimonials, client names, logos or ratings on
 * this page: they are pending legal review (brief section 8), and the
 * legacy 4.9/5 rating relates to a different service line and must not
 * be carried onto the new pages.
 *
 * Team photography is a FOUNDER TO CONFIRM item, so this page carries no
 * people imagery yet.
 */

import { ArrowRight } from "lucide-react";
import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import {
  BODY,
  BTN_PRIMARY,
  CARD,
  CONTAINER,
  EYEBROW,
  H1,
  H2,
  H3,
  LEAD,
  SECTION,
} from "@/components/desk/tokens";

const PRINCIPLES = [
  {
    title: "Alongside, not instead",
    body: "We never replace your front desk or your coordinators. We carry the phone-and-schedule load so the people at the counter can look after the person in front of them. Nothing at the front counter changes: greeting, payments and in-person care stay with your team.",
  },
  {
    title: "Nothing clinical, ever",
    body: "No triage, no assessment, no advice. Anything clinical routes straight to your team under a protocol we agree in writing before we take a single call. That boundary is in the service agreement, not in fine print.",
  },
  {
    title: "Onshore and Australian owned",
    body: "An Australian team, working Australian hours and Australian rules, inside your systems. Your data stays where it already lives.",
  },
  {
    title: "Your systems, not ours",
    body: "We work in the practice management and care platforms you already run. Nothing migrates, nothing is replaced, and you keep the system of record.",
  },
];

export default function WhyNovadaPage() {
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
              <p className={EYEBROW}>Why Novada</p>
              <h1 className={`${H1} mt-5 text-[#0E1116]`}>
                We measure the desk.{" "}
                <span className="text-[#003DDB]">Nobody else does.</span>
              </h1>
              <p className={`${LEAD} mt-6 max-w-[760px]`}>
                Every healthcare business has a desk. In a clinic it is the
                front desk turning calls into appointments. In a care business
                it is the coordination office turning rosters into delivered
                hours. Revenue is won or lost there, and it is a role staffed
                38 of the 168 hours the work actually arrives in.
              </p>
            </div>
          </div>
        </section>

        {/* The measurement promise */}
        <section className="bg-[#0B1E4B]">
          <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
            <div className="max-w-[880px]">
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-[#9FB3E8]">
                The measurement promise
              </p>
              <h2 className={`${H2} mt-4 text-white`}>
                We won&apos;t quote you an industry statistic.
              </h2>
              <p className="mt-6 text-base md:text-lg text-[#D8E1F8] leading-relaxed">
                We traced this market&apos;s most-quoted numbers to their
                sources, and most dissolved on contact. Figures attributed to
                colleges that never published them. Dollar-per-missed-call
                claims with no study behind them. American benchmarks dressed
                up as Australian ones. So we don&apos;t use them.
              </p>
              <p className="mt-5 text-base md:text-lg text-[#D8E1F8] leading-relaxed">
                Instead we measure your desk: every enquiry, response time,
                booking outcome and reason lost, reported monthly. If a number
                appears anywhere on this website, it carries its source in the
                same breath.
              </p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="bg-white">
          <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
            <div className="max-w-[720px] mb-10">
              <p className={EYEBROW}>How we work</p>
              <h2 className={`${H2} mt-4 text-[#0E1116]`}>
                Four rules we don&apos;t bend.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {PRINCIPLES.map((p) => (
                <div key={p.title} className={`${CARD} p-7 md:p-8`}>
                  <h3 className={H3}>{p.title}</h3>
                  <p className={`${BODY} mt-3`}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operating proof */}
        <section className="bg-[#F4F6FA] border-y border-[#E2E7EE]">
          <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
            <div className={`${CARD} p-8 md:p-12 border-l-4 border-l-[#003DDB] max-w-[960px]`}>
              <p className={EYEBROW}>Proof of operations</p>
              <p className="mt-5 text-lg md:text-2xl font-medium text-[#0E1116] leading-snug">
                This isn&apos;t a proposal. Our desk answers after-hours calls
                for Australian care providers every night of the year, inside
                their systems, to their escalation protocols, with a structured
                handover waiting every morning.
              </p>
              <p className={`${BODY} mt-5`}>
                That operating capability is the credibility base for both the
                Patient Access Desk and the Workforce Ops Desk. It is the same
                team and the same discipline.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#003DDB]">
          <div className={`${CONTAINER} ${SECTION} py-16 md:py-24 text-center`}>
            <h2 className={`${H2} text-white`}>See it against your own numbers.</h2>
            <p className="mt-5 text-base md:text-lg text-[#D8E1F8] leading-relaxed max-w-[640px] mx-auto">
              We&apos;ll map your workload and show you exactly what we&apos;d
              measure in your first 30 days.
            </p>
            <a
              href="/#book"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-4 text-sm md:text-base font-semibold text-[#003DDB] transition-colors hover:bg-[#F4F6FA]"
            >
              Book a Review
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <DeskFooter />
    </div>
  );
}
