"use client";

/*
 * Home page FAQ. Originally the six items specified in the Website
 * Rebuild Brief section 4.9, shipped as written; two more were added
 * 2026-09-01 (triage, and who can see our information).
 *
 * ⚠️ SOLE CONSUMER: src/app/page.tsx. Both offer pages deliberately
 * carry their own local accordions, so this file may be changed for the
 * home route without checking them. Verified 2026-09-01. If that ever
 * stops being true, fork this rather than making it serve two masters.
 *
 * ⚠️ The pricing answer must never carry a number, range or anchor
 * (binding copy rule 2). Do not "helpfully" add one.
 *
 * ⚠️ Nothing clinical. The triage answer is a NEGATION and must stay
 * one. It names where a clinical matter goes in each setting; it never
 * suggests we form a view about anyone.
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CARD, CONTAINER, EYEBROW, H2, SECTION } from "./tokens";

const FAQS = [
  // Added 2026-09-06. The first thing a visitor needs is the line
  // between the two offers, because everything else on the site assumes
  // they already have it.
  {
    q: "What is the difference between the two Partners?",
    a: "One runs your operation, the other builds and backs your workforce. The Operations Partner takes the after-hours line, roster and call-off coordination, intake administration and the statutory records. The Workforce Partner runs recruitment for your own team, onboarding, induction and training administration, and the pool behind your roster. You can hold either or both, and neither requires the other.",
  },
  {
    // ⚠️ Reworded 2026-08-27 on founder feedback. The previous answer read
    // "Answering services take messages. We complete the work", which could
    // be taken to mean we do NOT answer the phone and the practice still
    // needs someone else to pick up. We answer AND finish the job, so the
    // answer now says both, in that order.
    q: "Is this an answering service?",
    a: "We answer your calls, and we finish the job as well. That second half is the difference. An answering service takes a message and hands the problem back to your team. Our coordinators answer the phone, coordinate the cover in your own systems, keep the record and report the outcome."
  },
  {
    q: "Do you replace our coordinator?",
    a: "No, and we won't pretend to. We take the function, not the person: the after-hours line, the coordination workload, the records and the reporting. Most providers keep their coordinator and stop losing them to the parts of the job nobody wants."
  },
  {
    q: "What systems do you work in?",
    a: "Yours. ShiftCare, FlowLogic, Brevity, Carelink and more. Your data never leaves your systems."
  },
  {
    q: "What about clinical calls?",
    a: "We never give clinical advice or triage. Anything clinical routes to your on-call clinician or your Authorised Program Officer immediately, under a protocol we agree in writing before we take a single call."
  },
  // Sits directly under the clinical-calls answer on purpose: that
  // answer is the summary, this one is the rule stated in full.
  {
    q: "Do you triage or give advice?",
    a: "No, and we never will. We do not assess urgency and we do not give clinical advice. Anything clinical goes to your on-call clinician or your Authorised Program Officer. The protocol is agreed in writing before we take a single call."
  },
  {
    q: "Who can see our information?",
    a: "Named coordinators, each with their own login under your own access control, with permissions limited to the work. Never a shared account. Your information stays in your systems and stays in Australia, under a written agreement that mirrors your obligations under the Australian Privacy Principles."
  },
  {
    q: "How does pricing work?",
    a: "One flat fee per Partner, benchmarked against the all-in cost of the role you would otherwise add. Never an hourly rate, and no per-call or after-hours surcharges. The review works out which Partner you need."
  },
  {
    q: "How do we start?",
    a: "A short review, then a measured baseline before we change anything, then the function runs and the monthly report starts."
  },
];

export default function HomeFaq({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [open, setOpen] = useState<number | null>(0);
  const dark = tone === "dark";

  return (
    <section id="faq" className={`scroll-mt-20 border-t ${dark ? "border-white/10 bg-[#080808]" : "border-[#E2E7EE] bg-[#F4F6FA]"}`}>
      <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
        <div className="max-w-[720px] mb-10">
          <p className={dark ? "text-[12px] font-semibold uppercase tracking-[0.2em] text-[#7AA2FF]" : EYEBROW}>Questions</p>
          <h2 className={dark ? "font-poppins font-light tracking-tight text-3xl md:text-5xl mt-5 bg-gradient-to-r from-white to-[#7AA2FF] bg-clip-text text-transparent" : `${H2} mt-4 text-[#0E1116]`}>Straight answers.</h2>
        </div>
        <div className="max-w-[860px] space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className={dark ? "overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]" : `${CARD} overflow-hidden`}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-5 text-left"
              >
                <span className={`text-[15px] md:text-base font-semibold ${dark ? "text-white" : "text-[#0E1116]"}`}>
                  {f.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 flex-shrink-0 transition-transform ${dark ? "text-[#7AA2FF]" : "text-[#003DDB]"} ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <p className={`px-5 md:px-6 pb-5 text-sm md:text-[15px] leading-relaxed ${dark ? "text-[#C7D2E8]" : "text-[#39424E]"}`}>
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
