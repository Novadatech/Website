/* Case-study detail — Morningside design language (see src/components/ms.ts).
 * Copy unchanged; visual system swapped. Server component. */

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle, ChevronLeft } from "lucide-react";
import NovadaLogo from "@/components/NovadaLogo";
import { CASE_STUDIES, getCaseStudy } from "../data";
import {
  GRAD_TEXT,
  BTN_WHITE,
  MS_CARD,
  HERO_WASH,
  GLOW_BOTTOM,
} from "@/components/ms";

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

function Section({
  eyebrow,
  heading,
  children,
}: {
  eyebrow: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-3">
        {eyebrow}
      </p>
      <h2 className="text-2xl md:text-[28px] font-light tracking-tight text-[#EDECE4] mb-6 leading-tight">
        {heading}
      </h2>
      {children}
    </div>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-5 text-base md:text-lg font-light text-[#EDECE4]/75 leading-[1.75]">
      {items.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
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

      {/* ── Back link ── */}
      <div className="section-padding pt-8 pb-2">
        <div className="max-container max-w-4xl">
          <Link
            href="/case-study"
            className="font-supply inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-[#EDECE4]/50 hover:text-[#EDECE4] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            All case studies
          </Link>
        </div>
      </div>

      {/* ── Title block ── */}
      <section className="relative section-padding pt-8 pb-10 md:pt-10 md:pb-12 overflow-hidden">
        <div className={HERO_WASH} />
        <div className="relative max-container max-w-4xl">
          <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-4">
            {cs.offeringLabel} · Case Study
          </p>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.12] text-balance pb-1 ${GRAD_TEXT}`}>
            {cs.pageTitle}
          </h1>
          <p className="mt-5 text-base md:text-lg font-light text-[#EDECE4]/70 max-w-3xl leading-relaxed">
            {cs.pageSubtitle}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="font-supply inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#EDECE4]/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0CC481]" />
              {cs.customerName} — {cs.customerRole}, {cs.customerCompany}
            </span>
          </div>
        </div>
      </section>

      {/* ── Video ── */}
      <section className="section-padding pb-16 md:pb-20">
        <div className="max-container max-w-4xl">
          <div
            className="relative rounded-xl overflow-hidden border border-[#EDECE4]/10 shadow-2xl"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${cs.videoId}?rel=0`}
              title={cs.pageTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Introduction (1-sentence frame) ── */}
      <section className="section-padding pb-12 md:pb-16">
        <div className="max-container max-w-3xl">
          <p className="text-lg md:text-xl font-light text-[#EDECE4] leading-[1.7] border-l-2 border-[#0CC481] pl-6">
            {cs.introduction}
          </p>
        </div>
      </section>

      {/* ── Narrative body: 6-section case study ── */}
      <section className="section-padding pb-24 md:pb-32">
        <div className="max-container max-w-3xl space-y-16 md:space-y-20">
          <Section eyebrow="The Founder" heading={`Meet ${cs.customerName}.`}>
            <Paragraphs items={cs.theFounder} />
          </Section>

          <Section eyebrow="The Challenge" heading="Where the business was stuck.">
            <Paragraphs items={cs.theChallenge} />
          </Section>

          <Section eyebrow="The Solution" heading="What we installed.">
            <Paragraphs items={cs.theSolution} />
          </Section>

          <Section eyebrow="The Results" heading="What changed for the business.">
            <Paragraphs items={cs.theResults} />

            {/* Metrics card */}
            <div className={`mt-8 ${MS_CARD} p-7 md:p-10`}>
              <p className="font-supply text-xs uppercase tracking-[0.18em] text-[#0CC481] mb-5">
                By the numbers
              </p>
              <ul className="space-y-3.5">
                {cs.resultsMetrics.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3.5 text-base md:text-lg font-light text-[#EDECE4] leading-relaxed"
                  >
                    <CheckCircle className="w-5 h-5 text-[#0CC481] mt-1 flex-shrink-0" strokeWidth={1.5} />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section eyebrow="In Their Words" heading={`${cs.customerName}'s reflection.`}>
            <p className="text-base md:text-lg font-light text-[#EDECE4]/75 leading-[1.75]">
              {cs.inTheirWords}
            </p>
          </Section>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative pt-8 pb-32 md:pb-40 section-padding overflow-hidden">
        <div className={GLOW_BOTTOM} />
        <div className="relative max-container text-center">
          <p className="font-supply text-xs uppercase tracking-[0.25em] text-[#0CC481] mb-6">
            Ready for the same outcome?
          </p>
          <h2 className={`text-3xl md:text-5xl font-light tracking-tight leading-[1.15] text-balance max-w-3xl mx-auto pb-2 ${GRAD_TEXT}`}>
            See if your business qualifies for a partnership.
          </h2>
          <p className="mt-6 text-lg font-light text-[#EDECE4]/70 max-w-xl mx-auto leading-relaxed">
            Every result on this page started with one conversation. Find
            out if Novada Tech is the right partner to scale your business.
          </p>
          <Link href="/book-call" className={`${BTN_WHITE} mt-10`}>
            See If You Qualify
            <ChevronRight className="w-5 h-5" />
          </Link>
          <p className="font-supply mt-8 text-[10px] uppercase tracking-[0.2em] text-[#EDECE4]/35">
            Rated 4.9 on Trustpilot from 77+ verified reviews
          </p>
        </div>
      </section>
    </div>
  );
}
