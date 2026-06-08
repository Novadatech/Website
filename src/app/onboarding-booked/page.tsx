"use client";

import { motion } from "framer-motion";
import { CheckCircle, Mail, Calendar, Clock, MessageSquare, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function OnboardingBookedPage() {
  return (
    <>
      {/* NOTE: No Google Ads / Meta conversion tags here by design.
          This page is reached by EXISTING clients booking their onboarding
          session — they have already converted as paying customers. Firing
          a "Schedule" or "Booked Call" ad conversion would inflate the ad
          platforms' optimisation signals with non-prospect events and
          corrupt smart bidding. The sales-funnel conversion is /confirmed-call. */}

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-surface-950 to-surface-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,90,48,0.08)_0%,_transparent_60%)]" />

        <div className="relative max-container section-padding text-center py-32">
          {/* Success icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="mx-auto mb-8"
          >
            <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto">
              <CheckCircle className="w-12 h-12 text-emerald-400" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6"
          >
            Welcome To The Team
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance"
          >
            You&apos;re All Set!{" "}
            <span className="gradient-text">Your Onboarding Session is Booked.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-base text-white/80 max-w-2xl mx-auto leading-relaxed"
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
            <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-4">
              What Happens Next
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">
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
                <div className="glass-card gradient-border p-7 flex gap-5 items-start group hover:bg-white/[0.04] transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-ember-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6 text-ember-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base text-white/80 leading-relaxed">
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
      <section className="section-padding pb-20">
        <div className="max-container max-w-3xl">
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-surface-950" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,48,0.08)_0%,_transparent_70%)]" />

              <div className="relative px-8 py-14 md:px-14 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-4">
                  Need Anything Before The Call?
                </p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  We&apos;re Here If You Need Us
                </h3>
                <p className="text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
                  Have a question, need to reschedule, or want to send us
                  something ahead of the session? Reach our team directly
                  using the details below.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="mailto:support@novadatech.com.au"
                    className="btn-primary text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    support@novadatech.com.au
                  </a>
                  <a
                    href="tel:+61485000813"
                    className="btn-secondary text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    (+61) 485 000 813
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
