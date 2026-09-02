"use client";

/*
 * /case-study : the case-study grid.
 *
 * REBUILT 2026-09-02 into the Desk visual system, on founder instruction.
 * Was the "Morningside" dark language (src/components/ms.ts). Copy is
 * unchanged; the visual system and two behaviours are not.
 *
 * ── TWO FIXES MADE IN THIS REBUILD ───────────────────────────────────
 *  1. PERFORMANCE. The old grid mounted a live YouTube iframe for every
 *     case study, eight of them, on page load. That is roughly 8MB of
 *     player script for a page most visitors scroll rather than watch.
 *     Now a poster facade loads the player on click. See
 *     src/components/desk/VideoFacade.tsx.
 *  2. DESTINATION. Both CTAs pointed at /#book. That anchor is now the
 *     Desk booking calendar, which books a healthcare review. These are
 *     lead-generation case studies, so every visitor clicking "see if
 *     you qualify" was being sent to the wrong offer's calendar. They
 *     now point at /meetings-3#book, which is that offer's own booking
 *     calendar and the only surviving page for it.
 *
 * Chrome is FunnelHeader/FunnelFooter rather than DeskNav. See the
 * header of src/components/desk/FunnelChrome.tsx.
 *
 * ⚠️ These pages carry specific revenue outcomes, so the results-vary
 * disclaimer under the grid is required by Google's Unreliable Claims
 * policy and by /guarantee-terms clause 7. Do not remove it.
 */

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CASE_STUDIES } from "./data";
import { FunnelHeader, FunnelFooter } from "@/components/desk/FunnelChrome";
import VideoFacade from "@/components/desk/VideoFacade";
import { MICRO, NUM, PAD, WRAP, DISPLAY } from "@/components/desk/Band";

const BOOK = "/meetings-3#book";
const BODY = "text-[15px] leading-relaxed text-[#454E5C] md:text-base";

export default function CaseStudyIndexPage() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <FunnelHeader
        ctaHref={BOOK}
        ctaLabel="See if you qualify"
        ctaLabelShort="Book a call"
      />

      <main>
        {/* ── Hero ── */}
        <section className="border-t border-[#E3E6EC] bg-white">
          <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] pb-12 pt-14 md:pb-16 md:pt-20`}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className={`${MICRO} text-[#003DDB]`}>Case studies</p>
              <h1
                className={`${DISPLAY} mt-5 max-w-[16ch] text-[42px] text-[#0A0D14] sm:text-[56px] md:text-[72px]`}
              >
                Real founders. Real results.
              </h1>
              <p className={`${BODY} mt-6 max-w-[640px]`}>
                Inside the Novada Tech partnership. Real numbers, real outcomes,
                from filling pipelines with qualified meetings to automating
                operations with custom AI.
              </p>

              <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-3 border-t border-[#E3E6EC] pt-6">
                <p className={`${MICRO} text-[#9AA3B1]`}>
                  <span className={`${NUM} text-[#0B0E14]`}>
                    {CASE_STUDIES.length}
                  </span>{" "}
                  case studies
                </p>
                <p className={`${MICRO} text-[#9AA3B1]`}>
                  Rated <span className={`${NUM} text-[#0B0E14]`}>4.9/5</span>{" "}
                  from <span className={`${NUM} text-[#0B0E14]`}>77+</span>{" "}
                  independent reviews
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Grid ── */}
        <section className="border-t border-[#E3E6EC] bg-[#F7F8FA]">
          <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-12 md:py-16`}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CASE_STUDIES.map((c, i) => (
                <motion.article
                  key={c.slug}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
                  className="group flex flex-col overflow-hidden rounded-[10px] border border-[#E3E6EC] bg-white transition-colors hover:border-[#C3CFE6]"
                >
                  <div className="relative aspect-video w-full bg-[#0A0D14]">
                    <VideoFacade id={c.videoId} title={c.pageTitle} />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className={`${MICRO} text-[#003DDB]`}>{c.offeringLabel}</p>

                    <p className="mt-4 text-[17px] font-semibold leading-snug tracking-tight text-[#0B0E14]">
                      {c.cardHeadline}
                    </p>

                    <p className="mt-3 text-[13px] leading-relaxed text-[#5B6472]">
                      {c.customerName}
                      <span className="mx-1.5 text-[#C3CAD5]">·</span>
                      {c.customerRole}, {c.customerCompany}
                    </p>

                    <div className="mt-6 flex-1" />

                    <Link
                      href={`/case-study/${c.slug}`}
                      className="inline-flex items-center gap-1.5 border-t border-[#E3E6EC] pt-4 text-[14px] font-semibold text-[#003DDB] transition-colors hover:text-[#0030AE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2"
                    >
                      Read the case study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-[640px] text-center text-[13px] leading-relaxed text-[#5B6472]">
              Results shown are individual client outcomes and are not typical.
              Your results will vary and are not guaranteed.
            </p>
          </div>
        </section>

        {/* ── Closing call to action. Ink: the one desk moment here. ── */}
        <section className="border-t border-[#E3E6EC] bg-[#0A0D14]">
          <div className={`${WRAP} ${PAD} border-x border-white/10 py-16 md:py-24`}>
            <div className="grid gap-10 lg:grid-cols-[124px_minmax(0,1fr)] lg:gap-12">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <div className="flex items-center gap-3 lg:block">
                  <span className={`${MICRO} ${NUM} text-white/35`}>01</span>
                  <span
                    aria-hidden
                    className="h-px w-6 bg-white/15 lg:my-3 lg:h-6 lg:w-px"
                  />
                  <h2 className={`${MICRO} text-white/75`}>Next</h2>
                </div>
              </div>

              <div className="min-w-0">
                <p
                  className={`${DISPLAY} max-w-[18ch] text-[32px] text-white sm:text-[42px] md:text-[52px]`}
                >
                  Ready to be the next case study?
                </p>
                <p className="mt-6 max-w-[560px] text-[15px] leading-relaxed text-white/70 md:text-base">
                  Every result on this page started with one conversation. If
                  your business is ready to scale, let us see if it is a fit.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link
                    href={BOOK}
                    className="inline-flex items-center justify-center gap-2 rounded-[6px] bg-white px-6 py-3.5 text-[14px] font-semibold text-[#0A0D14] transition-colors hover:bg-[#E8ECF5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0D14]"
                  >
                    See if you qualify
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <p className={`${MICRO} text-white/40`}>
                    <span className={NUM}>30</span> minutes
                    <span className="mx-1.5 text-white/25">·</span>
                    No obligation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FunnelFooter note="Qualified meetings, booked for you" />
    </div>
  );
}
