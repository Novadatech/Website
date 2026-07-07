"use client";

/*
 * Operations Infrastructure — the home page's Morningside spine carrying
 * the ops offer (same pattern as /linkedin-growth): hero → industries
 * marquee → pinned scroll problem narrative → "three things" giant-numeral
 * journey cards (Diagnose / Build / Run & Refine) → attributed results →
 * stats marquee → grayscale case-study thumbnails → FAQ → gradient closer.
 * Uses the shared Navbar/Footer (reached from the Solutions dropdown).
 */

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import HeroTrustBar from "@/components/HeroTrustBar";
import { CASE_STUDIES } from "@/app/case-study/data";
import {
  GRAD_TEXT,
  BTN_WHITE,
  HERO_WASH,
  GLOW_BOTTOM,
} from "@/components/ms";
import { useState, useEffect, useRef } from "react";

const BOOKING_URL = "/book-call";

const OPS_CASE_STUDIES = CASE_STUDIES.filter((c) => c.offering === "custom-ai");

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className={HERO_WASH} />

      <div className="relative max-container section-padding text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-supply text-xs uppercase tracking-[0.25em] text-[#0CC481] mb-8"
        >
          Operations Infrastructure&trade; — Custom AI Systems
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.12] text-balance max-w-4xl mx-auto pb-2 ${GRAD_TEXT}`}
        >
          Your best people are doing work a system should be doing.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-7 text-lg md:text-xl font-light text-[#EDECE4]/80 max-w-2xl mx-auto leading-relaxed"
        >
          We design and build custom AI systems that take over the repetitive
          work slowing your business down — quoting, admin, document handling,
          reporting, logistics — so you scale output without scaling headcount.
        </motion.p>

        <HeroTrustBar className="mt-9" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-9 flex items-center justify-center"
        >
          <a href={BOOKING_URL} className={BTN_WHITE}>
            See If You Qualify
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="font-supply mt-8 text-[10px] uppercase tracking-[0.2em] text-[#EDECE4]/35"
        >
          Built for your business · Run by us · Owned by you
        </motion.p>
      </div>
    </section>
  );
}

/* ─── INDUSTRIES MARQUEE ─── */
function TrustBar() {
  const industries = [
    "Healthcare & Allied Health",
    "B2B Consulting",
    "Executive Coaching",
    "Legal Services",
    "Financial Advisory",
    "Real Estate",
    "SaaS & Tech",
    "E-commerce",
    "Recruitment",
    "Architecture & Design",
    "Accounting & Tax",
    "Insurance Broking",
  ];

  return (
    <section className="py-12 border-t border-b border-[#EDECE4]/10 overflow-hidden">
      <div className="max-container section-padding mb-10">
        <p className="font-supply text-sm uppercase tracking-[0.1em] text-[#EDECE4] text-center">
          Trusted by 350+ businesses across 30+ industries in Australia:
        </p>
      </div>
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 flex-shrink-0 items-center"
        >
          {[...industries, ...industries].map((industry, i) => (
            <span
              key={i}
              className="flex-shrink-0 text-xl font-light text-white/40 whitespace-nowrap"
            >
              {industry}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── PROBLEM NARRATIVE (pinned scroll sequence) ─── */
const PROBLEM_STATEMENTS = [
  {
    text: "Everything still runs through you. Quotes, approvals, scheduling, client updates.",
    final: false,
  },
  {
    text: "Admin is quietly eating your profit — hours of data entry, double-handling, chasing paperwork between systems.",
    final: false,
  },
  {
    text: "And growing means hiring, which means more cost, more management. Revenue grows. Profit doesn't.",
    final: false,
  },
  {
    text: "Your operations grew by accident. Now they're the ceiling.",
    final: false,
  },
  {
    text: "That's why we built Operations Infrastructure.",
    sub: "Custom AI systems that cut the manual work eating your margin.",
    final: true,
  },
];

function ProblemStatement({
  index,
  total,
  progress,
  text,
  sub,
  final,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  text: string;
  sub?: string;
  final: boolean;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const span = end - start;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const opacity = useTransform(
    progress,
    [start, start + span * 0.3, start + span * 0.7, end],
    [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0],
  );
  const y = useTransform(
    progress,
    [start, start + span * 0.3, start + span * 0.7, end],
    [isFirst ? 0 : 80, 0, 0, isLast ? 0 : -80],
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col items-center justify-center section-padding text-center"
    >
      <p
        className={
          final
            ? `text-3xl md:text-5xl font-light tracking-tight leading-tight text-balance max-w-3xl pb-1 ${GRAD_TEXT}`
            : "text-2xl md:text-4xl font-light text-[#EDECE4] leading-snug text-balance max-w-3xl"
        }
      >
        {text}
      </p>
      {sub && (
        <p className="mt-5 text-lg md:text-xl font-light text-[#EDECE4]/80">
          {sub}
        </p>
      )}
      {final && (
        <a href={BOOKING_URL} className={`${BTN_WHITE} mt-10`}>
          See If You Qualify
          <ChevronRight className="w-4 h-4" />
        </a>
      )}
    </motion.div>
  );
}

function ProblemNarrative() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const total = PROBLEM_STATEMENTS.length;

  return (
    <section ref={ref} className="relative h-[450vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,109,74,0.55)_0%,rgba(11,109,74,0)_46%)] pointer-events-none" />

        {PROBLEM_STATEMENTS.map((s, i) => (
          <ProblemStatement
            key={i}
            index={i}
            total={total}
            progress={scrollYProgress}
            text={s.text}
            sub={s.sub}
            final={s.final}
          />
        ))}

        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {PROBLEM_STATEMENTS.map((_, i) => (
            <ProgressDot
              key={i}
              index={i}
              total={total}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgressDot({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(
    progress,
    [start - 0.001, start, end, end + 0.001],
    [0.2, 1, 1, 0.2],
  );
  return (
    <motion.span
      style={{ opacity }}
      className="w-1.5 h-1.5 rounded-full bg-[#0CC481]"
    />
  );
}

/* ─── THREE THINGS (Diagnose / Build / Run & Refine) ─── */

/* Thin line-art icons, matching the sitewide style */
function IconDiagnose() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-28 h-28 md:w-36 md:h-36" aria-hidden="true">
      <circle cx="52" cy="52" r="30" stroke="#EDECE4" strokeWidth="1.2" />
      <path d="M74 74 L98 98" stroke="#EDECE4" strokeWidth="1.2" />
      <path d="M40 52 L48 60 L64 44" stroke="#EDECE4" strokeWidth="1.2" />
    </svg>
  );
}
function IconBuild() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-28 h-28 md:w-36 md:h-36" aria-hidden="true">
      <path d="M60 22 L104 60 L60 98 L16 60 Z" stroke="#EDECE4" strokeWidth="1.2" />
      <path d="M60 22 L60 98" stroke="#EDECE4" strokeWidth="1.2" />
      <path d="M16 60 L104 60" stroke="#EDECE4" strokeWidth="1.2" />
    </svg>
  );
}
function IconRefine() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-28 h-28 md:w-36 md:h-36" aria-hidden="true">
      <path d="M96 60 A36 36 0 1 1 60 24" stroke="#EDECE4" strokeWidth="1.2" />
      <path d="M60 12 L60 36 L82 26 Z" stroke="#EDECE4" strokeWidth="1.2" />
      <circle cx="60" cy="60" r="6" stroke="#EDECE4" strokeWidth="1.2" />
    </svg>
  );
}

const NUMERAL =
  "font-poppins italic font-extralight text-[88px] md:text-[160px] leading-none bg-gradient-to-b from-[#12513c] to-[#0CC481] bg-clip-text text-transparent select-none px-4 md:px-6 block md:absolute md:top-1/2 md:-translate-y-1/2 z-0";

function ThreeThings() {
  return (
    <section className="section-spacing section-padding">
      <div className="max-container max-w-6xl">
        <AnimatedSection className="mb-16 md:mb-24">
          <h2
            className={`text-4xl md:text-6xl font-light tracking-tight leading-tight pb-2 ${GRAD_TEXT}`}
          >
            Every build does three things...
          </h2>
        </AnimatedSection>

        <div className="space-y-14 md:space-y-20">
          {/* 1 — Diagnose */}
          <AnimatedSection>
            <div className="relative">
              <span className={`${NUMERAL} md:left-0`}>1</span>
              <div className="relative z-10 block max-w-[820px] mt-2 md:mt-0 md:ml-36 rounded-xl border border-[#EDECE4]/[0.06] bg-gradient-to-br from-[#111413] to-[#050808] p-8 md:p-14">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                  <div className="flex-shrink-0"><IconDiagnose /></div>
                  <div>
                    <h3 className="text-3xl md:text-[44px] font-light text-[#EDECE4] leading-tight">
                      Diagnose
                    </h3>
                    <p className="mt-4 text-base md:text-xl font-light text-[#EDECE4]/85 leading-relaxed">
                      We sit inside your operation and map where time and
                      margin actually leak — not where you think they do. You
                      get a prioritised list of what to automate first, ranked
                      by return.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 2 — Build */}
          <AnimatedSection>
            <div className="relative">
              <span className={`${NUMERAL} md:left-24`}>2</span>
              <div className="relative z-10 block max-w-[820px] mt-2 md:mt-0 md:ml-60 rounded-xl border border-[#EDECE4]/[0.06] bg-gradient-to-br from-[#111413] to-[#050808] p-8 md:p-14">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                  <div className="flex-shrink-0"><IconBuild /></div>
                  <div>
                    <h3 className="text-3xl md:text-[44px] font-light text-[#EDECE4] leading-tight">
                      Build
                    </h3>
                    <p className="mt-4 text-base md:text-xl font-light text-[#EDECE4]/85 leading-relaxed">
                      We design the AI system around your real workflow —
                      quoting engines, document automation, inventory and
                      logistics, client communication, dashboards — test it
                      against live work, and train your team. Nothing goes
                      live until it outperforms the manual process it replaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 3 — Run & Refine */}
          <AnimatedSection>
            <div className="relative">
              <span className={`${NUMERAL} md:left-44`}>3</span>
              <div className="relative z-10 block max-w-[820px] mt-2 md:mt-0 md:ml-80 rounded-xl border border-[#EDECE4]/[0.06] bg-gradient-to-br from-[#111413] to-[#050808] p-8 md:p-14">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                  <div className="flex-shrink-0"><IconRefine /></div>
                  <div>
                    <h3 className="text-3xl md:text-[44px] font-light text-[#EDECE4] leading-tight">
                      Run &amp; Refine
                    </h3>
                    <p className="mt-4 text-base md:text-xl font-light text-[#EDECE4]/85 leading-relaxed">
                      The system goes live inside your business, on your
                      accounts, with our team monitoring performance. We
                      refine it as your business changes — and once one
                      bottleneck is gone, we move to the next. You own
                      everything, whether we&apos;re in the room or not.
                    </p>
                    <p className="font-supply mt-6 text-sm uppercase tracking-[0.1em] text-[#0CC481] inline-flex items-center gap-2">
                      <Link href="/case-study" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                        See The Results
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-16 md:mt-20 text-center">
          <a href={BOOKING_URL} className={BTN_WHITE}>
            See If You Qualify
            <ChevronRight className="w-4 h-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── RESULTS (attributed outcomes, dashed grid) ─── */
function Testimonials() {
  return (
    <section className="section-spacing section-padding">
      <div className="max-container max-w-6xl">
        <AnimatedSection className="mb-16 md:mb-20">
          <h2
            className={`text-4xl md:text-6xl font-light tracking-tight leading-tight pb-2 ${GRAD_TEXT}`}
          >
            Don&apos;t just take our word for it...
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 border-t border-b border-dashed border-[#EDECE4]/15">
          <AnimatedSection>
            <figure className="px-6 md:px-14 py-14 md:py-20 text-center md:border-r md:border-dashed md:border-[#EDECE4]/15">
              <blockquote className="text-lg md:text-xl font-light text-[#EDECE4] leading-relaxed">
                <span className="text-[#0CC481]">
                  80%+ of operational time cut.
                </span>{" "}
                The business now runs leaner without sacrificing capacity —
                and the growth that was gated by ops bandwidth can finally
                happen.
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-base text-[#EDECE4]">Damian</p>
                <p className="font-supply mt-1 text-xs uppercase tracking-[0.15em] text-[#EDECE4]/40">
                  Groundwork Ventures
                </p>
              </figcaption>
            </figure>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <figure className="px-6 md:px-14 py-14 md:py-20 text-center border-t border-dashed border-[#EDECE4]/15 md:border-t-0">
              <blockquote className="text-lg md:text-xl font-light text-[#EDECE4] leading-relaxed">
                Property appraisals that were{" "}
                <span className="text-[#0CC481]">
                  time-consuming and labour-intensive now run efficient,
                  accurate, and fast
                </span>{" "}
                — more output, same standards, same team.
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-base text-[#EDECE4]">Jack</p>
                <p className="font-supply mt-1 text-xs uppercase tracking-[0.15em] text-[#EDECE4]/40">
                  House Valley
                </p>
              </figcaption>
            </figure>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.2} className="mt-10 text-center">
          <a
            href="https://www.trustpilot.com/review/novadatech.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="font-supply inline-flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-[#EDECE4]/50 hover:text-[#EDECE4] transition-colors"
          >
            <span className="text-[#0CC481]">★★★★★</span>
            Rated 4.9/5 from 77+ verified reviews on Trustpilot
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── STATS MARQUEE ─── */
function StatsStrip() {
  const stats = [
    { num: "80%+", label: "operational time cut — client result" },
    { num: "350+", label: "businesses scaled" },
    { num: "30+", label: "industries across Australia" },
    { num: "$45.7M+", label: "client revenue generated" },
    { num: "4.9★", label: "rating from 77+ Trustpilot reviews" },
  ];

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {[...stats, ...stats].map((s, i) => (
            <div key={i} className="flex-shrink-0 w-[300px] md:w-[360px] text-center px-6">
              <p className="text-4xl md:text-5xl font-normal text-white leading-none">
                {s.num}
              </p>
              <p className="mt-4 text-base md:text-lg font-light text-[#EDECE4]/80">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── CASE STUDIES (grayscale thumbnails) ─── */
function OpsCaseStudies() {
  return (
    <section id="results" className="section-spacing section-padding">
      <div className="max-container max-w-6xl">
        <AnimatedSection className="mb-14">
          <h2 className={`text-4xl md:text-6xl font-light tracking-tight leading-tight pb-2 ${GRAD_TEXT}`}>
            Operators already running the systems.
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {OPS_CASE_STUDIES.map((c, i) => (
            <AnimatedSection key={c.slug} delay={i * 0.08}>
              <Link href={`/case-study/${c.slug}`} className="block group">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${c.videoId}/hqdefault.jpg`}
                    alt={c.pageTitle}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="font-supply mt-5 text-xs uppercase tracking-[0.15em] text-[#EDECE4]/40">
                  Case Study
                </p>
                <h3 className="mt-2 text-lg font-light text-[#EDECE4] leading-snug">
                  {c.cardHeadline}
                </h3>
                <p className="mt-2 text-sm font-light text-[#EDECE4]/50">
                  {c.customerName} — {c.customerRole}, {c.customerCompany}
                </p>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="mt-14 text-center">
          <Link
            href="/case-study"
            className="font-supply inline-flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-[#EDECE4]/60 hover:text-[#0CC481] transition-colors group"
          >
            View all case studies
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const faqs = [
    {
      q: "What kinds of processes can actually be automated?",
      a: "More than most owners expect. If a task follows rules a competent staff member could write down — quoting, document generation, data entry, enquiry responses, scheduling, stock tracking, reporting — it's a candidate. The diagnostic phase exists precisely to separate what should be automated from what shouldn't.",
    },
    {
      q: "Our processes are messy and undocumented. Is that a problem?",
      a: "No — it's normal. Almost none of our clients had documented processes when we started. Part of the build is mapping how work actually flows through your business today. You end up with documented, systemised processes as a by-product of the build.",
    },
    {
      q: "Do we need technical staff to run the system?",
      a: "No. We build systems your existing team uses through the tools they already know, and our team runs and maintains the infrastructure. If your staff can use email and a web browser, they can use what we build.",
    },
    {
      q: "How long does a build take?",
      a: "It depends on the system. Focused single-workflow builds typically go live in weeks; larger multi-system builds are staged so you see the first system running before the next one starts. You're never waiting months for the first result.",
    },
    {
      q: "What does it cost?",
      a: "Every build is scoped individually after the diagnostic, because a quoting engine and a full logistics system are very different projects. What we can tell you up front: we only take on builds where the projected saving clearly outweighs the investment — and we'll show you that math before you commit.",
    },
    {
      q: "Who owns the system once it's built?",
      a: "You do. The system is installed in your business, on your accounts, with your data. We run and refine it for you, but you're not held hostage — if we parted ways tomorrow, the infrastructure stays yours.",
    },
    {
      q: "What about our data — is it secure?",
      a: "Your data stays in your systems and your accounts. We design builds around the tools you already trust, apply least-privilege access, and never train public models on your business data.",
    },
    {
      q: "Will this replace our staff?",
      a: "In our experience, it redeploys them. The businesses we work with are growing — the goal is for your best people to stop doing data entry and start doing the work that actually needs judgment. You scale without the next three hires, not by cutting the team you have.",
    },
  ];

  return (
    <section className="section-spacing section-padding border-t border-[#EDECE4]/10">
      <div className="max-container max-w-3xl">
        <AnimatedSection className="text-center mb-14">
          <h2
            className={`inline-block text-5xl md:text-7xl font-light tracking-tight pb-2 ${GRAD_TEXT}`}
          >
            FAQs
          </h2>
          <p className="mt-4 text-lg md:text-xl font-light text-[#EDECE4]/85">
            You&apos;ve got questions. We&apos;ve got answers.
          </p>
        </AnimatedSection>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 0.05}>
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-5 text-left group"
        >
          <span className="text-base md:text-lg font-light text-[#EDECE4] group-hover:text-white transition-colors pr-4">
            {question}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-[#EDECE4]/50 flex-shrink-0 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="pb-7 text-base font-light text-[#EDECE4]/70 leading-relaxed">
            {answer}
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

/* ─── FINAL CTA ─── */
function FinalCTA() {
  return (
    <section className="relative pt-24 pb-32 md:pt-32 md:pb-40 section-padding overflow-hidden">
      <div className={GLOW_BOTTOM} />

      <div className="relative max-container text-center">
        <AnimatedSection>
          <h2 className={`text-3xl md:text-6xl font-light tracking-tight leading-[1.15] text-balance max-w-4xl mx-auto pb-2 ${GRAD_TEXT}`}>
            Stop renting hours. Start owning systems.
          </h2>
          <p className={`mt-12 text-3xl md:text-6xl font-light tracking-tight pb-2 ${GRAD_TEXT}`}>
            We build for the operators who do.
          </p>
          <div className="mt-12">
            <a href={BOOKING_URL} className={BTN_WHITE}>
              See If You Qualify
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="font-supply mt-12 flex items-center justify-center gap-8 text-xs uppercase tracking-[0.15em] text-[#EDECE4]/40 flex-wrap">
            <span>Built For Your Business</span>
            <span className="hidden sm:inline text-[#EDECE4]/15">·</span>
            <span>Run By Us</span>
            <span className="hidden sm:inline text-[#EDECE4]/15">·</span>
            <span>Owned By You</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── STICKY CTA BAR ─── */
function StickyCtaBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => { setVisible(window.scrollY > 600); };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className="fixed bottom-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-xl border-t border-[#EDECE4]/10 py-3 px-5 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-sm font-light text-[#EDECE4]">Custom AI that cuts the manual work eating your margin</p>
              <p className="font-supply text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40">Built for your business · Run by us · Owned by you</p>
            </div>
            <a href={BOOKING_URL} className={`${BTN_WHITE} !py-2.5 w-full sm:w-auto justify-center`}>
              See If You Qualify
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── PAGE ─── */
export default function OperationsInfrastructurePage() {
  return (
    <div className="bg-[#080808] font-poppins">
      <Hero />
      <TrustBar />
      <ProblemNarrative />
      <ThreeThings />
      <Testimonials />
      <StatsStrip />
      <OpsCaseStudies />
      <FAQ />
      <FinalCTA />
      <StickyCtaBar />
      <div className="h-16 sm:h-0" />
    </div>
  );
}
