"use client";

/* Case-study grid — Morningside design language (see src/components/ms.ts).
 * Copy unchanged; visual system swapped. */

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import NovadaLogo from "@/components/NovadaLogo";
import { CASE_STUDIES } from "./data";
import {
  GRAD_TEXT,
  BTN_WHITE,
  LINK_GREEN,
  MS_CARD,
  HERO_WASH,
  GLOW_BOTTOM,
} from "@/components/ms";

export default function CaseStudyIndexPage() {
  return (
    <div className="bg-[#080808] font-poppins">
      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-xl border-b border-[#EDECE4]/10">
        <div className="max-container section-padding">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <NovadaLogo variant="light" className="h-12 w-auto" />
            </Link>
            <Link href="/book-call" className={`${BTN_WHITE} !py-2.5 !px-5`}>
              See If You Qualify
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>
      <div className="h-20" />

      {/* ── Hero ── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">
        <div className={HERO_WASH} />

        <div className="relative max-container section-padding text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-supply text-xs uppercase tracking-[0.25em] text-[#0CC481] mb-6"
          >
            Case Studies
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.12] text-balance max-w-3xl mx-auto pb-1 ${GRAD_TEXT}`}
          >
            Real founders. Real results.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base md:text-lg font-light text-[#EDECE4]/80 max-w-2xl mx-auto leading-relaxed"
          >
            Inside the Novada Tech partnership. Real numbers, real outcomes —
            from filling pipelines with qualified meetings to automating
            operations with custom AI.
          </motion.p>
        </div>
      </section>

      {/* ── Case studies grid ── */}
      <section className="section-padding pb-24 md:pb-32">
        <div className="max-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {CASE_STUDIES.map((c, i) => (
              <motion.article
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className={`${MS_CARD} overflow-hidden flex flex-col hover:border-[#EDECE4]/[0.14] transition-colors`}
              >
                {/* Video embed */}
                <div className="relative w-full aspect-video bg-black overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${c.videoId}?rel=0`}
                    title={c.pageTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: "none" }}
                  />
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Offering badge */}
                  <p className="font-supply text-[10px] uppercase tracking-[0.18em] text-[#EDECE4]/40 mb-3">
                    {c.offeringLabel}
                  </p>

                  {/* Headline */}
                  <p className="text-base md:text-lg font-light text-[#EDECE4] leading-snug mb-4">
                    {c.cardHeadline}
                  </p>

                  {/* Customer */}
                  <p className="text-xs font-light text-[#EDECE4]/45 mb-5">
                    {c.customerName} — {c.customerRole}, {c.customerCompany}
                  </p>

                  {/* View case study CTA */}
                  <div className="mt-auto">
                    <Link
                      href={`/case-study/${c.slug}`}
                      className={`${LINK_GREEN} group/cta`}
                    >
                      View Case Study
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative pt-12 pb-32 md:pb-40 section-padding overflow-hidden">
        <div className={GLOW_BOTTOM} />
        <div className="relative max-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-supply text-xs uppercase tracking-[0.25em] text-[#0CC481] mb-6">
              Ready to be the next case study?
            </p>
            <h2 className={`text-3xl md:text-6xl font-light tracking-tight leading-[1.15] text-balance max-w-4xl mx-auto pb-2 ${GRAD_TEXT}`}>
              See if your business qualifies for a partnership.
            </h2>
            <p className="mt-6 text-lg font-light text-[#EDECE4]/70 max-w-xl mx-auto leading-relaxed">
              Every result on this page started with one conversation. If
              your business is ready to scale, let&apos;s see if it&apos;s a
              fit.
            </p>
            <Link href="/book-call" className={`${BTN_WHITE} mt-10`}>
              See If You Qualify
              <ChevronRight className="w-5 h-5" />
            </Link>
            <p className="font-supply mt-8 text-[10px] uppercase tracking-[0.2em] text-[#EDECE4]/35">
              Rated 4.9 on Trustpilot from 77+ verified reviews
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
