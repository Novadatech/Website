"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import NovadaLogo from "@/components/NovadaLogo";
import { CASE_STUDIES } from "./data";

export default function CaseStudyIndexPage() {
  return (
    <div className="bg-surface-950">
      {/* ── Header (same shape as /linkedin-growth) ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-950/95 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-container section-padding">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <NovadaLogo variant="light" className="h-12 w-auto" />
            </Link>
            <Link
              href="/book-call"
              className="btn-primary text-sm py-2.5 px-5"
            >
              See If You Qualify
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>
      <div className="h-20" />

      {/* ── Hero ── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-surface-950 to-surface-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,90,48,0.10)_0%,_transparent_60%)]" />

        <div className="relative max-container section-padding text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-4"
          >
            Case Studies
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance max-w-3xl mx-auto"
          >
            Real Founders.{" "}
            <span className="text-ember-500">Real Results.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
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
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden flex flex-col hover:border-ember-500/30 hover:bg-white/[0.035] transition-colors"
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
                  <p className="text-[10px] uppercase tracking-[0.18em] text-ember-500/80 font-semibold mb-3">
                    {c.offeringLabel}
                  </p>

                  {/* Headline */}
                  <p className="text-base md:text-lg font-semibold text-white leading-snug mb-4">
                    {c.cardHeadline}
                  </p>

                  {/* Customer */}
                  <p className="text-xs text-white/45 mb-5">
                    {c.customerName} — {c.customerRole}, {c.customerCompany}
                  </p>

                  {/* View case study CTA */}
                  <div className="mt-auto">
                    <Link
                      href={`/case-study/${c.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ember-500 hover:text-ember-400 transition-colors group/cta"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-padding pb-24 md:pb-32">
        <div className="max-container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-surface-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,48,0.16)_0%,_transparent_70%)]" />
            <div className="relative px-8 py-14 md:px-14">
              <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-4">
                Ready to be the next case study?
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight text-balance">
                See If Your Business Qualifies For{" "}
                <span className="text-ember-500">a Partnership.</span>
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto leading-relaxed">
                Every result on this page started with one conversation. If
                your business is ready to scale, let&apos;s see if it&apos;s a
                fit.
              </p>
              <Link
                href="/book-call"
                className="btn-primary mt-8 inline-flex text-base"
              >
                See If You Qualify
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="mt-5 text-xs text-white/35 flex items-center justify-center gap-2">
                <Play className="w-3 h-3 text-ember-500/60" /> Performance
                guaranteed. If we don&apos;t deliver — you don&apos;t pay.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
