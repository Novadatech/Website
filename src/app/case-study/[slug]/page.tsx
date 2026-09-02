/*
 * /case-study/[slug] : the case-study detail page. Server component, so
 * it can carry its own per-case metadata.
 *
 * REBUILT 2026-09-02 into the Desk visual system, on founder instruction.
 * Copy is unchanged and still comes from ../data.ts. The five narrative
 * sections now use the Desk numbered index rails, which is the closest
 * structural match the system has: each rail label IS that section's
 * <h2>, so the document outline survives the restyle.
 *
 * Two fixes carried over from the grid rebuild: the video is a
 * click-to-load facade rather than an eager iframe, and both CTAs point
 * at /meetings-3#book rather than /#book. /#book is now the Desk
 * healthcare calendar, and these are lead-generation case studies, so
 * that link had been sending every reader to the wrong offer.
 *
 * ⚠️ These pages carry specific revenue outcomes. The results-vary
 * disclaimer near the metrics is required by Google's Unreliable Claims
 * policy and by /guarantee-terms clause 7. Do not remove it.
 */

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { CASE_STUDIES, getCaseStudy } from "../data";
import { FunnelHeader, FunnelFooter } from "@/components/desk/FunnelChrome";
import VideoFacade from "@/components/desk/VideoFacade";
import { Band, MICRO, NUM, PAD, WRAP, DISPLAY } from "@/components/desk/Band";

const BOOK = "/meetings-3#book";
const PROSE = "text-[15px] leading-[1.75] text-[#454E5C] md:text-[16px]";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Case Study | Novada Tech" };

  const title = `${cs.pageTitle} | Novada Tech`;
  return {
    title,
    description: cs.pageSubtitle,
    openGraph: {
      title,
      description: cs.pageSubtitle,
      type: "article",
      locale: "en_AU",
    },
  };
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className={`${PROSE} max-w-[680px] space-y-5`}>
      {items.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

function SectionHead({ children }: { children: ReactNode }) {
  return (
    <p
      className={`${DISPLAY} mb-7 text-[28px] text-[#0A0D14] sm:text-[34px] md:text-[40px]`}
    >
      {children}
    </p>
  );
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <FunnelHeader
        ctaHref={BOOK}
        ctaLabel="See if you qualify"
        ctaLabelShort="Book a call"
      />

      <main>
        {/* ── Title block ── */}
        <section className="border-t border-[#E3E6EC] bg-white">
          <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] pb-10 pt-8 md:pb-14 md:pt-10`}>
            <Link
              href="/case-study"
              className={`${MICRO} inline-flex items-center gap-1.5 text-[#5B6472] transition-colors hover:text-[#003DDB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2`}
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All case studies
            </Link>

            <p className={`${MICRO} mt-9 text-[#003DDB]`}>
              {cs.offeringLabel}
              <span className="mx-1.5 text-[#C3CAD5]">·</span>
              Case study
            </p>

            <h1
              className={`${DISPLAY} mt-5 max-w-[20ch] text-[38px] text-[#0A0D14] sm:text-[50px] md:text-[62px]`}
            >
              {cs.pageTitle}
            </h1>

            <p className={`${PROSE} mt-6 max-w-[720px]`}>{cs.pageSubtitle}</p>

            <div className="mt-8 border-t border-[#E3E6EC] pt-6">
              <p className={`${MICRO} text-[#9AA3B1]`}>
                <span className="text-[#0B0E14]">{cs.customerName}</span>
                <span className="mx-1.5 text-[#C3CAD5]">·</span>
                {cs.customerRole}, {cs.customerCompany}
              </p>
            </div>
          </div>
        </section>

        {/* ── Video ── */}
        <section className="border-t border-[#E3E6EC] bg-[#F7F8FA]">
          <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-10 md:py-14`}>
            <div className="relative mx-auto aspect-video w-full max-w-[900px] overflow-hidden rounded-[10px] border border-[#E3E6EC] bg-[#0A0D14]">
              <VideoFacade id={cs.videoId} title={cs.pageTitle} tone="dark" />
            </div>
          </div>
        </section>

        {/* ── Introduction ── */}
        <section className="border-t border-[#E3E6EC] bg-white">
          <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-12 md:py-16`}>
            <p className="max-w-[760px] border-l-2 border-[#003DDB] pl-6 text-[18px] leading-[1.7] text-[#0B0E14] md:text-[21px]">
              {cs.introduction}
            </p>
          </div>
        </section>

        {/* ── Narrative ── */}
        <Band index="01" label="The founder">
          <SectionHead>Meet {cs.customerName}</SectionHead>
          <Paragraphs items={cs.theFounder} />
        </Band>

        <Band index="02" label="The challenge" tone="tint">
          <SectionHead>Where the business was stuck</SectionHead>
          <Paragraphs items={cs.theChallenge} />
        </Band>

        <Band index="03" label="The solution">
          <SectionHead>What we installed</SectionHead>
          <Paragraphs items={cs.theSolution} />
        </Band>

        <Band index="04" label="The results" tone="dark">
          <p
            className={`${DISPLAY} mb-7 text-[28px] text-white sm:text-[34px] md:text-[40px]`}
          >
            What changed for the business
          </p>
          <div className="max-w-[680px] space-y-5 text-[15px] leading-[1.75] text-white/70 md:text-[16px]">
            {cs.theResults.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10 max-w-[720px] rounded-[10px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <p className={`${MICRO} text-white/50`}>By the numbers</p>
            <ul className="mt-5 space-y-3.5">
              {cs.resultsMetrics.map((r, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span className="mt-[3px] flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full bg-[#003DDB]">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-white md:text-base">
                    {r}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 max-w-[720px] text-[13px] leading-relaxed text-white/45">
            Results shown are individual client outcomes and are not typical.
            Your results will vary and are not guaranteed.
          </p>
        </Band>

        <Band index="05" label="In their words">
          <SectionHead>{cs.customerName}&rsquo;s reflection</SectionHead>
          <p className={`${PROSE} max-w-[680px]`}>{cs.inTheirWords}</p>
        </Band>

        {/* ── Closing call to action ── */}
        <section className="border-t border-[#E3E6EC] bg-[#F7F8FA]">
          <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-16 md:py-20`}>
            <div className="grid gap-10 lg:grid-cols-[124px_minmax(0,1fr)] lg:gap-12">
              <div className="lg:self-start">
                <div className="flex items-center gap-3 lg:block">
                  <span className={`${MICRO} ${NUM} text-[#9AA3B1]`}>06</span>
                  <span
                    aria-hidden
                    className="h-px w-6 bg-[#E3E6EC] lg:my-3 lg:h-6 lg:w-px"
                  />
                  <h2 className={`${MICRO} text-[#0B0E14]`}>Next</h2>
                </div>
              </div>

              <div className="min-w-0">
                <p
                  className={`${DISPLAY} max-w-[18ch] text-[30px] text-[#0A0D14] sm:text-[38px] md:text-[46px]`}
                >
                  Ready for the same outcome?
                </p>
                <p className={`${PROSE} mt-6 max-w-[560px]`}>
                  Every result on this page started with one conversation. Find
                  out if Novada Tech is the right partner to scale your business.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link
                    href={BOOK}
                    className="inline-flex items-center justify-center gap-2 rounded-[6px] bg-[#003DDB] px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#0030AE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2"
                  >
                    See if you qualify
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/case-study"
                    className="inline-flex items-center justify-center gap-2 rounded-[6px] border border-[#D3D8E2] bg-white px-6 py-3.5 text-[14px] font-semibold text-[#0B0E14] transition-colors hover:border-[#003DDB] hover:text-[#003DDB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2"
                  >
                    Read another
                  </Link>
                </div>

                <p className={`${MICRO} mt-7 text-[#9AA3B1]`}>
                  Rated <span className={`${NUM} text-[#0B0E14]`}>4.9/5</span>{" "}
                  from <span className={`${NUM} text-[#0B0E14]`}>77+</span>{" "}
                  independent client reviews
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FunnelFooter note="Qualified meetings, booked for you" />
    </div>
  );
}
