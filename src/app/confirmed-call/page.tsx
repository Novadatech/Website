"use client";

import { motion } from "framer-motion";
import { CheckCircle, Mail, Calendar, Clock, ArrowRight, MessageSquare } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import Script from "next/script";

export default function ConfirmationPage() {
  return (
    <>
      {/* Google Ads: Booked Call conversion */}
      <Script id="gtag-conversion-confirmed" strategy="afterInteractive">
        {`gtag('event', 'conversion', {'send_to': 'AW-16650862607/YmXMCIr3pYocEI-A4IM-'});`}
      </Script>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,162,63,0.08)_0%,_transparent_60%)]" />

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

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance"
          >
            You&apos;re All Set!{" "}
            <span className="gradient-text">Your Strategy Call is Booked.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-base text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Thank you for booking a Growth Strategy Call with Novada Tech.
            We&apos;re looking forward to learning about your business and showing
            you how we can help you scale.
          </motion.p>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section-padding pb-20">
        <div className="max-container max-w-3xl">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-4">
              What Happens Next
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">
              Here&apos;s What to Expect
            </h2>
          </AnimatedSection>

          <div className="space-y-5">
            {[
              {
                icon: Mail,
                title: "Check Your Email",
                desc: "You'll receive a confirmation email with your call details, including the date, time, and a calendar invite. Check your spam folder if you don't see it within a few minutes.",
              },
              {
                icon: Calendar,
                title: "Add It to Your Calendar",
                desc: "Accept the calendar invite to make sure you don't miss the call. You'll also receive a reminder before the session.",
              },
              {
                icon: Clock,
                title: "Prepare for Your Call",
                desc: "Think about your current revenue goals, your ideal client profile, and any challenges you're facing with client acquisition. The more context you share, the more value we can deliver on the call.",
              },
              {
                icon: MessageSquare,
                title: "We'll Do the Rest",
                desc: "Our team will review your business before the call so we can come prepared with insights and a preliminary growth strategy tailored to you.",
              },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card gradient-border p-7 flex gap-5 items-start group hover:bg-white/[0.04] transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6 text-gold-400" />
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

      {/* While You Wait */}
      <section className="section-padding pb-20">
        <div className="max-container max-w-3xl">
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,162,63,0.08)_0%,_transparent_70%)]" />

              <div className="relative px-8 py-14 md:px-14 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-4">
                  While You Wait
                </p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Learn More About How We Work
                </h3>
                <p className="text-white/80 max-w-lg mx-auto mb-8">
                  Explore our approach and see why business owners trust Novada Tech
                  to build their client acquisition systems.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/about" className="btn-primary text-sm">
                    About Novada Tech
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/" className="btn-secondary text-sm">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
