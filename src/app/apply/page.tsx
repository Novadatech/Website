"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Star, TrendingUp, Users, Clock, AlertCircle } from "lucide-react";
import Script from "next/script";

const PROOF_POINTS = [
  { icon: Star, text: "4.9★ Rated on Trustpilot" },
  { icon: Users, text: "350+ Businesses Scaled" },
  { icon: TrendingUp, text: "$50M+ Revenue Generated" },
  { icon: Shield, text: "Pay Only For Results" },
];

const BENEFITS = [
  "Discover the exact AI system we use to generate high-value clients predictably",
  "Get a custom client acquisition plan built for your specific business",
  "Learn how to stop relying on referrals and start scaling on demand",
  "Find out how to cut wasted ad spend and only pay for real results",
  "See why 350+ business owners trust Novada Tech to run their growth",
];

const TESTIMONIALS = [
  {
    quote: "Within 30 days we had more qualified leads than the previous 6 months combined. The system just works.",
    name: "James R.",
    role: "Founder, B2B Services",
  },
  {
    quote: "I was sceptical at first but the results speak for themselves. Our revenue has grown by over 40% since partnering with Novada Tech.",
    name: "Sarah M.",
    role: "CEO, Consulting Firm",
  },
];

export default function ApplyPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.novadatech.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Google Ads: Lead Form conversion */}
      <Script id="gtag-conversion-apply" strategy="afterInteractive">
        {`gtag('event', 'conversion', {'send_to': 'AW-16650862607/p15dCIjGk4ocEI-A4IM-'});`}
      </Script>

      {/* Spacer for fixed navbar (h-20 = 80px) */}
      <div className="h-20" />

      {/* Urgency Bar */}
      <div className="bg-gold-500/10 border-b border-gold-500/20 py-3 px-4">
        <div className="max-container section-padding">
          <p className="text-sm text-gold-400 font-medium flex items-center justify-center gap-2 text-center">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            Limited strategy call spots available this week — Fill in your details below to secure yours
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-14 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,162,63,0.08)_0%,_transparent_60%)]" />

        <div className="relative max-container section-padding text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-5"
          >
            Free Growth Strategy Session
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance max-w-4xl mx-auto"
          >
            Find Out Exactly How We&apos;d Generate{" "}
            <span className="gradient-text">High-Value Clients</span>{" "}
            For Your Business — In 7 Days
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            Tell us about your business and we&apos;ll map out a custom AI client acquisition
            strategy — completely free. No obligation. No hard sell.
          </motion.p>

          {/* Proof bar — 4 equal columns */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {PROOF_POINTS.map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.03] border border-white/[0.06] py-4 px-3"
              >
                <Icon className="w-5 h-5 text-gold-400" />
                <span className="text-xs text-white/50 text-center leading-snug">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Spacer between proof bar and main content */}
      <div className="pb-8" />

      {/* Main Content */}
      <section className="section-padding pt-12 pb-20">
        <div className="max-container">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* Left — Benefits & Social Proof */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* What you'll discover */}
              <div className="glass-card gradient-border p-7">
                <h3 className="text-lg font-semibold text-white mb-5">
                  What You&apos;ll Discover on Your Free Call
                </h3>
                <ul className="space-y-4">
                  {BENEFITS.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-white/60 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who it's for */}
              <div className="glass-card gradient-border p-7">
                <h3 className="text-lg font-semibold text-white mb-4">
                  This Is For You If...
                </h3>
                <ul className="space-y-3">
                  {[
                    "You sell a high-value service ($3K–$50K+)",
                    "You're tired of relying on referrals or inconsistent leads",
                    "You want a system that generates clients predictably",
                    "You're ready to scale without hiring a big sales team",
                    "You want real results, not just reports and excuses",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonials */}
              <div className="space-y-4">
                {TESTIMONIALS.map((t, i) => (
                  <div key={i} className="glass-card p-6 border border-white/[0.05]">
                    <div className="text-gold-400 text-xs mb-3">★★★★★</div>
                    <p className="text-sm text-white/60 leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/[0.05]">
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-white/40">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Risk reversal */}
              <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/15 p-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Zero Risk. Zero Obligation.</p>
                    <p className="text-xs text-white/50 leading-relaxed">
                      This is a free strategy call. We only work with businesses we&apos;re
                      confident we can help. If we&apos;re not a fit, we&apos;ll tell you honestly —
                      and you still keep the strategy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Time note */}
              <div className="rounded-xl bg-gold-500/5 border border-gold-500/15 p-6">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Takes Less Than 2 Minutes</p>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Fill in a few quick details and you&apos;ll be taken straight
                      to our calendar to pick a time that suits you.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="sticky top-28">
                {/* Form header */}
                <div className="glass-card gradient-border rounded-t-2xl rounded-b-none px-8 pt-8 pb-6 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">
                      Spots Available This Week
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    Claim Your Free Strategy Session
                  </h2>
                  <p className="mt-2 text-sm text-white/50">
                    Complete the short form below — it takes under 2 minutes.
                  </p>

                  {/* Progress bar */}
                  <div className="mt-5">
                    <div className="flex items-center justify-between text-xs text-white/40 mb-2">
                      <span>Step 1 of 2 — Your Details</span>
                      <span>50%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10">
                      <div className="h-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 w-1/2" />
                    </div>
                  </div>
                </div>

                {/* GHL Form */}
                <div className="glass-card rounded-t-none rounded-b-2xl overflow-hidden"
                  style={{ borderTop: "none" }}>
                  <iframe
                    src="https://link.novadatech.com/widget/form/2UikgU0iSTsy1ax334cR"
                    style={{
                      width: "100%",
                      minHeight: "520px",
                      border: "none",
                      display: "block",
                    }}
                    id="apply-form-embed"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-activation-type="alwaysActivated"
                    data-deactivation-type="neverDeactivate"
                    data-form-name="Novada Tech Apply Form"
                    data-height="520"
                    data-layout-iframe-id="apply-form-embed"
                    data-form-id="2UikgU0iSTsy1ax334cR"
                    title="Apply for Strategy Session"
                  />
                </div>

                {/* Trust strip */}
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-white/30">
                  {[
                    { icon: Shield, label: "100% Confidential" },
                    { icon: CheckCircle, label: "No Spam, Ever" },
                    { icon: Star, label: "Rated 4.9★" },
                    { icon: Clock, label: "Under 2 Minutes" },
                  ].map(({ icon: Icon, label }, i) => (
                    <div key={i} className="flex items-center justify-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Stats Bar */}
      <section className="py-10 border-t border-white/[0.04]">
        <div className="max-container section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "350+", label: "Businesses Scaled" },
              { number: "$50M+", label: "Revenue Generated" },
              { number: "4.9★", label: "Trustpilot Rating" },
              { number: "7 Days", label: "To First Results" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-bold gradient-text">{stat.number}</p>
                <p className="text-xs text-white/40 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
