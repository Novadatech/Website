"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Star, TrendingUp, Clock, Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Script from "next/script";

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
      {/* Google Ads: Submit Lead Form conversion */}
      <Script id="gtag-conversion-book" strategy="afterInteractive">
        {`gtag('event', 'conversion', {'send_to': 'AW-16650862607/p15dCIjGk4ocEI-A4IM-'});`}
      </Script>

      {/* Hero */}
      <section className="relative pt-32 pb-10 md:pt-40 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,162,63,0.08)_0%,_transparent_60%)]" />

        <div className="relative max-container section-padding text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6"
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
            In 30 minutes, we&apos;ll map out exactly how to build a predictable
            client acquisition system for your business — no obligation, no hard sell.
          </motion.p>

          {/* Trust signals */}
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
              <Star className="w-4 h-4" />
              <span>4.9★ Trustpilot</span>
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
                      <Check className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-white/80 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <p className="text-base text-white/80 leading-relaxed">
                    This call is best suited for business owners selling
                    high-value services ($3K–$50K+) who are ready to scale with
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
              <div className="flex text-gold-400 justify-center text-sm mb-4">
                ★★★★★
              </div>
              <p className="text-white/80 leading-relaxed max-w-lg mx-auto">
                &ldquo;The strategy call alone gave us more clarity than 6 months
                of working with our previous agency. Highly recommend.&rdquo;
              </p>
              <p className="mt-4 text-sm text-white/30">
                Rated 4.9/5 from 77+ verified reviews on Trustpilot
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
