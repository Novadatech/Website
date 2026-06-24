"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, TrendingUp, Clock, Check } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import HeroTrustBar from "@/components/HeroTrustBar";
import NovadaLogo from "@/components/NovadaLogo";

export default function BookPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.novadatech.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* NOTE: No conversion tag on /book-call by design.
          This page is linked directly from site CTAs (a page view here is
          NOT a form submission), so firing a conversion on load would count
          non-converters and corrupt Google Ads smart bidding. The genuine
          conversion — the completed booking — fires on /confirmed-call,
          which is the post-booking redirect destination. If a separate
          "lead form submit" conversion is wanted, configure it on the GHL
          form's submission/redirect, not on this directly-linkable page. */}

      {/* ── Header (same shape as /linkedin-growth's fixed header) ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-950/95 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-container section-padding">
          <div className="flex items-center h-20">
            <Link href="/" className="flex items-center"><NovadaLogo variant="light" className="h-12 w-auto" /></Link>
          </div>
        </div>
      </header>
      <div className="h-20" />

      {/* Hero */}
      <section className="relative pt-12 pb-10 md:pt-16 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-surface-950 to-surface-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,90,48,0.08)_0%,_transparent_60%)]" />

        <div className="relative max-container section-padding text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6"
          >
            Limited Spots Available
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance max-w-3xl mx-auto"
          >
            Book Your Free{" "}
            <span className="gradient-text">Growth Strategy Call</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            In 30 minutes, we will show you exactly how we generate 15+ qualified sales calls every month for your business.
          </motion.p>

          {/* STANDALONE TRUST BAR — prominent social proof */}
          <HeroTrustBar className="mt-8" />

          {/* Trust signals (call-feature reassurance, Trustpilot moved into HeroTrustBar above) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/30"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>30 Min Call</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>Results in 14 Days</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calendar Embed Section */}
      <section className="section-padding pb-20 md:pb-28">
        <div className="max-container">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* What to expect — left sidebar */}
            <AnimatedSection direction="left" className="lg:col-span-1">
              <div className="glass-card gradient-border p-8 sticky top-28">
                <h3 className="text-lg font-semibold text-white mb-6">
                  What to Expect
                </h3>
                <div className="space-y-5">
                  {[
                    "We'll review your current offer and positioning",
                    "Identify your ideal client acquisition strategy",
                    "Map out a clear growth plan for your business",
                    "Determine if a Growth Partnership is the right fit",
                    "No pressure — just an honest conversation",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-ember-500 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-white/80 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <p className="text-base text-white/80 leading-relaxed">
                    This call is best suited for business owners selling
                    high-value services ($3K+) who are ready to scale with
                    a proven system.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Calendar embed — right area */}
            <div className="lg:col-span-2">
              <div
                id="calendar-embed"
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-2 min-h-[600px] relative z-10"
              >
                <iframe
                  src="https://link.novadatech.com/widget/booking/8j4TVe5uOcjxbNfVC3kp"
                  style={{
                    width: "100%",
                    minHeight: "700px",
                    border: "none",
                    display: "block",
                  }}
                  scrolling="yes"
                  id="8j4TVe5uOcjxbNfVC3kp_1773502048069"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom trust bar */}
      <section className="section-padding pb-20">
        <div className="max-container max-w-3xl">
          <AnimatedSection className="text-center">
            <div className="glass-card p-8 border border-white/[0.04]">
              <div className="flex text-ember-500 justify-center text-sm mb-4">
                ★★★★★
              </div>
              <p className="text-white/80 leading-relaxed max-w-lg mx-auto italic">
                &ldquo;We went from $42K to $91K monthly in under 60 days. The pipeline became predictable for the first time — we could forecast and hire with confidence.&rdquo;
              </p>
              <div className="mt-5 flex items-center justify-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/testimonials/jeff-verticalaccess.jpg"
                  alt="Jeff"
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">Jeff</p>
                  <p className="text-xs text-white/50">Founder, Vertical Access</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
