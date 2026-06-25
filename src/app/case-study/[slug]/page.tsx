import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, ChevronLeft, Shield } from "lucide-react";
import NovadaLogo from "@/components/NovadaLogo";
import { CASE_STUDIES, getCaseStudy } from "../data";

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

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <div className="bg-surface-950">
      {/* ── Header ── */}
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

      {/* ── Back link ── */}
      <div className="section-padding pt-8 pb-2">
        <div className="max-container max-w-4xl">
          <Link
            href="/case-study"
            className="inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white/80 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            All case studies
          </Link>
        </div>
      </div>

      {/* ── Title block ── */}
      <section className="section-padding pt-8 pb-10 md:pt-10 md:pb-12">
        <div className="max-container max-w-4xl">
          <p className="text-xs uppercase tracking-[0.2em] text-ember-500/80 font-semibold mb-4">
            {cs.offeringLabel} · Case Study
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] text-white text-balance">
            {cs.pageTitle}
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/70 max-w-3xl leading-relaxed">
            {cs.pageSubtitle}
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/75">
              <span className="w-2 h-2 rounded-full bg-ember-500" />
              {cs.customerName} — {cs.customerRole}, {cs.customerCompany}
            </span>
          </div>
        </div>
      </section>

      {/* ── Video ── */}
      <section className="section-padding pb-16 md:pb-20">
        <div className="max-container max-w-4xl">
          <div
            className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl"
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

      {/* ── Case study body ── */}
      <section className="section-padding pb-24 md:pb-32">
        <div className="max-container max-w-3xl space-y-14 md:space-y-16">
          {/* Overview */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ember-500/80 font-semibold mb-3">
              Overview
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-tight">
              The headline result.
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              {cs.overview}
            </p>
          </div>

          {/* The Challenge */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ember-500/80 font-semibold mb-3">
              The Challenge
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-tight">
              Where the business was stuck.
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              {cs.challenge}
            </p>
          </div>

          {/* The Solution */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ember-500/80 font-semibold mb-3">
              The Solution
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-tight">
              What we installed.
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-7">
              {cs.solutionIntro}
            </p>
            <div className="space-y-4">
              {cs.solutionBullets.map((b, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-ember-500/12 border border-ember-500/25 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-ember-500" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-white mb-1.5">
                        {b.title}
                      </h3>
                      <p className="text-sm md:text-base text-white/70 leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Results */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ember-500/80 font-semibold mb-3">
              The Results
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-tight">
              What changed for the business.
            </h2>
            <div className="rounded-3xl border border-ember-500/25 bg-gradient-to-br from-ember-500/[0.08] via-ember-500/[0.02] to-transparent p-7 md:p-10">
              <ul className="space-y-3.5">
                {cs.results.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3.5 text-base md:text-lg text-white/90 leading-relaxed"
                  >
                    <CheckCircle className="w-5 h-5 text-ember-500 mt-1 flex-shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-padding pb-24 md:pb-32">
        <div className="max-container max-w-3xl">
          <div className="relative rounded-3xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-surface-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,48,0.16)_0%,_transparent_70%)]" />
            <div className="relative px-8 py-14 md:px-14">
              <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-4">
                Ready for the same outcome?
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight text-balance">
                See If Your Business Qualifies For{" "}
                <span className="text-ember-500">a Partnership.</span>
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto leading-relaxed">
                Every result on this page started with one conversation. Find
                out if Novada Tech is the right partner to scale your business.
              </p>
              <Link
                href="/book-call"
                className="btn-primary mt-8 inline-flex text-base"
              >
                See If You Qualify
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="mt-5 text-xs text-white/35 flex items-center justify-center gap-2">
                <Shield className="w-3 h-3 text-ember-500/60" /> Performance
                guaranteed. If we don&apos;t deliver — you don&apos;t pay.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
