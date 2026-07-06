"use client";

/* Onboarding-booked confirmation — Morningside design language.
 * Copy unchanged; visual system swapped. */

import { motion } from "framer-motion";
import { CheckCircle, Mail, Calendar, Clock, MessageSquare, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { GRAD_TEXT, MS_CARD, HERO_WASH, GLOW_BOTTOM } from "@/components/ms";

export default function OnboardingBookedPage() {
  return (
    <div className="bg-[#080808] font-poppins">
      {/* NOTE: No Google Ads / Meta conversion tags here by design.
          This page is reached by EXISTING clients booking their onboarding
          session — they have already converted as paying customers. Firing
          a "Schedule" or "Booked Call" ad conversion would inflate the ad
          platforms' optimisation signals with non-prospect events and
          corrupt smart bidding. The sales-funnel conversion is /confirmed-call. */}

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className={HERO_WASH} />

        <div className="relative max-container section-padding text-center py-32">
          {/* Success icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="mx-auto mb-8"
          >
            <div className="w-24 h-24 rounded-full border border-[#0CC481]/30 flex items-center justify-center mx-auto">
              <CheckCircle className="w-12 h-12 text-[#0CC481]" strokeWidth={1.2} />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-supply text-xs uppercase tracking-[0.25em] text-[#0CC481] mb-6"
          >
            Welcome To The Team
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.12] text-balance max-w-3xl mx-auto pb-1 ${GRAD_TEXT}`}
          >
            You&apos;re all set. Your onboarding session is booked.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-base md:text-lg font-light text-[#EDECE4]/80 max-w-2xl mx-auto leading-relaxed"
          >
            Thank you for partnering with Novada Tech. Your dedicated
            onboarding lead is already preparing for the session — we&apos;ll
            complete your setup on the call and get your growth infrastructure
            live so we can start scaling your business.
          </motion.p>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section-padding pb-20">
        <div className="max-container max-w-3xl">
          <AnimatedSection className="text-center mb-12">
            <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-4">
              What Happens Next
            </p>
            <h2 className={`inline-block text-2xl md:text-4xl font-light tracking-tight pb-1 ${GRAD_TEXT}`}>
              Here&apos;s What to Expect Before Your Onboarding Session
            </h2>
          </AnimatedSection>

          <div className="space-y-5">
            {[
              {
                icon: Mail,
                title: "Check Your Email",
                desc: "You'll receive a confirmation email with your session details — date, time, and a calendar invite. Check your spam folder if you don't see it within a few minutes.",
              },
              {
                icon: Calendar,
                title: "Add It to Your Calendar",
                desc: "Accept the calendar invite to lock in your session. You'll also receive a reminder before the call so it stays top of mind.",
              },
              {
                icon: Clock,
                title: "Prepare for Setup",
                desc: "Have your offer details, ideal client profile, brand assets, and any tool logins ready. The more prepared you are, the more we can complete on the call.",
              },
              {
                icon: MessageSquare,
                title: "We'll Be Ready For You",
                desc: "Your onboarding lead will review your business and account details ahead of the session — so we can hit the ground running and complete your setup in the 30 minutes we have together.",
              },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`${MS_CARD} p-7 flex gap-5 items-start hover:border-[#EDECE4]/[0.14] transition-colors`}>
                  <step.icon className="w-6 h-6 text-[#0CC481] flex-shrink-0 mt-1" strokeWidth={1.4} />
                  <div>
                    <h3 className="text-lg font-normal text-[#EDECE4]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base font-light text-[#EDECE4]/65 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Need anything before the call? — support contact (no sales CTAs) */}
      <section className="relative section-padding pt-8 pb-28 overflow-hidden">
        <div className={GLOW_BOTTOM} />
        <div className="relative max-container max-w-3xl">
          <AnimatedSection>
            <div className="text-center">
              <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-4">
                Need Anything Before The Call?
              </p>
              <h3 className={`inline-block text-2xl md:text-4xl font-light tracking-tight pb-1 ${GRAD_TEXT}`}>
                We&apos;re here if you need us.
              </h3>
              <p className="mt-4 text-base font-light text-[#EDECE4]/70 max-w-lg mx-auto mb-8 leading-relaxed">
                Have a question, need to reschedule, or want to send us
                something ahead of the session? Reach our team directly
                using the details below.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:support@novadatech.com.au"
                  className="font-supply inline-flex items-center gap-2 rounded bg-white px-6 py-3 text-sm font-medium uppercase tracking-[0.1em] text-black transition-colors hover:bg-white/85"
                >
                  <Mail className="w-4 h-4" />
                  support@novadatech.com.au
                </a>
                <a
                  href="tel:+61485000813"
                  className="font-supply inline-flex items-center gap-2 rounded border border-[#EDECE4]/20 px-6 py-3 text-sm font-medium uppercase tracking-[0.1em] text-[#EDECE4] transition-colors hover:border-[#EDECE4]/50"
                >
                  <Phone className="w-4 h-4" />
                  (+61) 485 000 813
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
