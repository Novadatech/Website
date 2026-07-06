"use client";

/* Booking page — Morningside design language (see src/components/ms.ts).
 * Copy + GHL calendar embed unchanged; visual system swapped. */

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, TrendingUp, Clock, Check } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import HeroTrustBar from "@/components/HeroTrustBar";
import NovadaLogo from "@/components/NovadaLogo";
import { GRAD_TEXT, MS_CARD, HERO_WASH } from "@/components/ms";

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
    <div className="bg-[#080808] font-poppins">
      {/* NOTE: No conversion tag on /book-call by design.
          This page is linked directly from site CTAs (a page view here is
          NOT a form submission), so firing a conversion on load would count
          non-converters and corrupt Google Ads smart bidding. The genuine
          conversion — the completed booking — fires on /confirmed-call,
          which is the post-booking redirect destination. If a separate
          "lead form submit" conversion is wanted, configure it on the GHL
          form's submission/redirect, not on this directly-linkable page. */}

      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-xl border-b border-[#EDECE4]/10">
        <div className="max-container section-padding">
          <div className="flex items-center h-20">
            <Link href="/" className="flex items-center"><NovadaLogo variant="light" className="h-12 w-auto" /></Link>
          </div>
        </div>
      </header>
      <div className="h-20" />

      {/* Hero */}
      <section className="relative pt-12 pb-10 md:pt-16 md:pb-14 overflow-hidden">
        <div className={HERO_WASH} />

        <div className="relative max-container section-padding text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-supply text-xs uppercase tracking-[0.25em] text-[#0CC481] mb-6"
          >
            Limited Spots Available
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.12] text-balance max-w-3xl mx-auto pb-1 ${GRAD_TEXT}`}
          >
            Book your free strategy call.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base md:text-lg font-light text-[#EDECE4]/80 max-w-2xl mx-auto leading-relaxed"
          >
            In 30 minutes, we&apos;ll map where the biggest return is hiding in
            your business — pipeline, operations, or both — and show you
            exactly which system gets you there.
          </motion.p>

          {/* STANDALONE TRUST BAR — prominent social proof */}
          <HeroTrustBar className="mt-8" />

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-supply mt-8 flex flex-wrap items-center justify-center gap-6 text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>30 Min Call</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>A Clear Plan Either Way</span>
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
              <div className={`${MS_CARD} p-8 sticky top-28`}>
                <h3 className="text-lg font-normal text-[#EDECE4] mb-6">
                  What to Expect
                </h3>
                <div className="space-y-5">
                  {[
                    "We'll review your business — offer, market, and operations",
                    "Identify your biggest constraint: pipeline, costs, or clarity on AI",
                    "Map which system fits: Growth Infrastructure, Operations Infrastructure, or an AI audit",
                    "Give you a clear plan with expected returns — yours either way",
                    "No pressure — just an honest conversation",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#0CC481] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-base font-light text-[#EDECE4]/75 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[#EDECE4]/[0.08]">
                  <p className="text-base font-light text-[#EDECE4]/65 leading-relaxed">
                    This call is best suited for established business owners —
                    whether you need more qualified sales meetings, want AI to
                    take over manual operations, or want to know where AI pays
                    off first.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Calendar embed — right area */}
            <div className="lg:col-span-2">
              <div
                id="calendar-embed"
                className="rounded-xl border border-[#EDECE4]/[0.08] bg-white/[0.02] p-2 min-h-[600px] relative z-10"
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
            <div className="border-t border-b border-dashed border-[#EDECE4]/15 px-6 py-12">
              <div className="text-[#0CC481] text-sm mb-5 tracking-widest">
                ★★★★★
              </div>
              <p className="text-lg font-light text-[#EDECE4] leading-relaxed max-w-lg mx-auto">
                &ldquo;We went from{" "}
                <span className="text-[#0CC481]">
                  $42K to $91K monthly in under 60 days.
                </span>{" "}
                The pipeline became predictable for the first time — we could
                forecast and hire with confidence.&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/testimonials/jeff-verticalaccess.jpg"
                  alt="Jeff"
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0 grayscale"
                />
                <div className="text-left">
                  <p className="text-sm text-[#EDECE4]">Jeff</p>
                  <p className="font-supply text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40">Founder, Vertical Axis</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
