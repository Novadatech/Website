"use client";

/*
 * Home page FAQ, the six items specified in the Website Rebuild Brief
 * section 4.9, shipped as written.
 *
 * ⚠️ The pricing answer must never carry a number, range or anchor
 * (binding copy rule 2). Do not "helpfully" add one.
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CARD, CONTAINER, EYEBROW, H2, SECTION } from "./tokens";

const FAQS = [
  {
    q: "Is this an answering service?",
    a: "No. Answering services take messages. We complete the work: the booking made in your software, the recall run, the shift gap coordinated, the record kept, and the outcome reported.",
  },
  {
    q: "Do you replace our receptionist?",
    a: "No, and we won't pretend to. Front-of-house needs people at the counter. We carry the phone-and-schedule load so your team can look after the person in front of them.",
  },
  {
    q: "What systems do you work in?",
    a: "Yours. Practice management systems (Cliniko, Halaxy, Dental4Windows, ezyVet, Best Practice and more) and care platforms (ShiftCare, FlowLogic, Brevity, Carelink and more). Your data never leaves your systems.",
  },
  {
    q: "What about clinical calls?",
    a: "We never give clinical advice or triage. Anything clinical routes to your team immediately under a protocol we agree in writing before we take a single call.",
  },
  {
    q: "How does pricing work?",
    a: "It's based on workload, and benchmarked against the all-in cost of the role you'd otherwise hire. That's exactly what the review works out.",
  },
  {
    q: "How do we start?",
    a: "A short review, then a measured baseline week inside your systems, then the desk runs and the monthly report starts.",
  },
];

export default function HomeFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#F4F6FA] border-t border-[#E2E7EE] scroll-mt-20">
      <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
        <div className="max-w-[720px] mb-10">
          <p className={EYEBROW}>Questions</p>
          <h2 className={`${H2} mt-4 text-[#0E1116]`}>Straight answers.</h2>
        </div>
        <div className="max-w-[860px] space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className={`${CARD} overflow-hidden`}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-5 text-left"
              >
                <span className="text-[15px] md:text-base font-semibold text-[#0E1116]">
                  {f.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 flex-shrink-0 text-[#003DDB] transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <p className="px-5 md:px-6 pb-5 text-sm md:text-[15px] text-[#39424E] leading-relaxed">
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
