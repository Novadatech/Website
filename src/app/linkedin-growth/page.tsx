"use client";

/* Growth Infrastructure lander — Morningside design language (see
 * src/components/ms.ts). Copy unchanged from the pre-reskin version;
 * only the visual system was swapped. */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, Shield, TrendingUp, Users,
  Clock, ChevronDown, ChevronRight,
  Play, Video, Send, CalendarCheck,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import NovadaLogo from "@/components/NovadaLogo";
import HeroTrustBar from "@/components/HeroTrustBar";
import { CASE_STUDIES } from "@/app/case-study/data";
import {
  GRAD_TEXT,
  BTN_WHITE,
  LINK_GREEN,
  MS_CARD,
  HERO_WASH,
  GLOW_BOTTOM,
} from "@/components/ms";

const LINKEDIN_CASE_STUDIES = CASE_STUDIES.filter(
  (c) => c.offering === "linkedin-growth",
);

function scrollToForm() {
  // Form was removed from this page; route the CTA to the dedicated booking page.
  window.location.assign("/book-call");
}

// ─── Data ───────────────────────────────────────────────────────────────────

const OUTCOMES_FEATURED = {
  metric: "15+",
  metricLabel: "qualified meetings every month",
  title: "Predictable pipeline. Written guarantee. Zero ad spend.",
  desc: "A monthly calendar of pre-qualified, decision-maker meetings you can finally forecast revenue from. Built into your business, owned by you. If we don't deliver — you don't pay.",
};

const OUTCOMES_GRID = [
  {
    icon: Video,
    title: "Authority Video Engine",
    desc: "4 – 6 short videos a month featuring you. Pre-sells expertise across LinkedIn, YouTube and shorts before outreach ever lands.",
  },
  {
    icon: Send,
    title: "Done-For-You Outreach",
    desc: "Daily targeted outreach to ICP-matched prospects. Sequences trained on your voice. Reply handling fully included.",
  },
  {
    icon: CalendarCheck,
    title: "Pre-Qualified Bookings",
    desc: "Only decision-makers with budget and fit hit your calendar. Pre-sold before the call ever starts.",
  },
  {
    icon: TrendingUp,
    title: "Compounding Authority",
    desc: "Profile + content stack positioned as the obvious choice in your industry. The system gets stronger every month.",
  },
  {
    icon: Users,
    title: "Owned By You",
    desc: "Built into your business, not held hostage by an agency. Profile, content, sequences — all yours forever.",
  },
  {
    icon: Clock,
    title: "Under 30 Min A Week",
    desc: "Record content on a flexible schedule. We run the rest. Your only job: show up to qualified calls.",
  },
];

const PROBLEMS = [
  {
    icon: Send,
    tag: "The Outreach Trap",
    title: "More messages won't fix invisible authority.",
    desc: "You're sending DMs into the same inbox as 100 other vendors. Prospects check your profile, see nothing that says expert, and archive in three seconds. Reply rates are at all-time lows.",
  },
  {
    icon: Video,
    tag: "The Content Treadmill",
    title: "Posting daily earns likes, not meetings.",
    desc: "You're showing up consistently. Engagement is up. Your impressions look healthy. But none of it converts because there's no outreach system catching attention and turning it into booked calls.",
  },
  {
    icon: CalendarCheck,
    tag: "The 'Almost There' Loop",
    title: "Profile views go up. Calendar stays empty.",
    desc: "Activity is everywhere. Connections, comments, conversations. But no qualified meetings, no signed deals, no revenue moving. You're busy — but the pipeline isn't building.",
  },
];

const AUTHORITY_MATH = {
  oldWay: {
    title: "Outreach Alone (The 2020 Playbook)",
    rows: [
      "Cold message → prospect checks LinkedIn",
      "Empty profile, no authority signals",
      "Generic positioning, archived in seconds",
    ],
    stats: [
      { label: "Reply rate", value: "~1.2%" },
      { label: "Qualified rate", value: "~10% of replies" },
      { label: "Meetings per 10,000 messages", value: "~12" },
    ],
  },
  newWay: {
    title: "LinkedIn Growth System™ (Authority + Outreach)",
    rows: [
      "Authority video content already on your profile",
      "Prospect researches → sees you positioned as the expert",
      "Replies because they're pre-sold before the conversation starts",
    ],
    stats: [
      { label: "Reply rate", value: "8 – 12%" },
      { label: "Qualified rate", value: "85.4% of replies" },
      { label: "Meetings per 10,000 messages", value: "~150" },
    ],
  },
};

const HOW_IT_WORKS = [
  {
    icon: Shield,
    days: "Days 1 – 4",
    title: "Authority build.",
    desc: "We audit your profile, ICP and offer. Authority video plan, content calendar and a rewritten profile shipped before week one ends.",
  },
  {
    icon: Send,
    days: "Days 5 – 10",
    title: "System goes live.",
    desc: "Outbound sequences, ICP filters and reply-handling flows built on our internal platform. Authority content starts publishing.",
  },
  {
    icon: CalendarCheck,
    days: "Days 11 – 14",
    title: "Meetings booked.",
    desc: "Outreach scales. Prospects research you and find proof. Pre-qualified meetings land on your calendar inside the 14-day window.",
  },
];

const DIFFERENTIATION = [
  { label: "Authority Building", agency: "Optional add-on", diy: "\"You'll get to it\"", novada: "Built into the system" },
  { label: "Outreach", agency: "Generic templates", diy: "Manual + sporadic", novada: "Targeted, daily, optimised" },
  { label: "Reply Handling", agency: "You handle it", diy: "You handle it", novada: "Done for you" },
  { label: "Booking", agency: "You qualify + book", diy: "You qualify + book", novada: "Pre-qualified, booked direct" },
  { label: "Your Time", agency: "5 – 10 hrs/week", diy: "10 – 20 hrs/week", novada: "Less than 30 min/week" },
  { label: "Asset Ownership", agency: "Theirs", diy: "Yours (if you stay consistent)", novada: "Yours — installed in your business" },
  { label: "Time to First Meeting", agency: "30 – 60 days", diy: "\"Eventually\"", novada: "7 – 14 days" },
  { label: "Performance Guarantee", agency: "None", diy: "N/A", novada: "15+ meetings/mo or you don't pay" },
];

const TESTIMONIALS = [
  {
    metric: "$91K/mo",
    metricLabel: "monthly revenue",
    quote: "We went from $42K to $91K monthly in under 60 days. The pipeline became predictable for the first time — we could forecast and hire with confidence.",
    name: "Jeff",
    role: "Founder, Vertical Axis",
    avatar: "/testimonials/jeff-verticalaccess.jpg",
  },
  {
    metric: "4 clients",
    metricLabel: "in first 45 days",
    quote: "We'd been burned by two agencies before. This was different — it was a system, not a service. 4 new retainer clients in the first 45 days.",
    name: "Nicola",
    role: "Founder, Morasco Media",
    avatar: "/testimonials/nicola-morasco.jpg",
  },
  {
    metric: "28% → 60%",
    metricLabel: "discovery call close rate",
    quote: "Discovery call conversion jumped from 28% to over 60%. The authority content meant prospects arrived already sold — we just confirmed fit.",
    name: "Michael",
    role: "Founder, Aaronson Investigations",
    avatar: "/testimonials/michael-aarons.jpg",
  },
  {
    metric: "6 months",
    metricLabel: "of meetings in month one",
    quote: "More qualified meetings in month one than the previous six months combined. The system ran on its own — I went back to delivery.",
    name: "Jessica",
    role: "Founder, Jessica Teds Coaching",
    avatar: "/testimonials/jessica-teds.jpg",
  },
];

const FAQS = [
  {
    q: "Isn't LinkedIn outreach spammy?",
    a: "Spam is volume without targeting and personalisation. Our outreach is the opposite: precise ICP filters, authority content priming the conversation, and human-written sequences trained on your voice. Prospects respond because they already see you as relevant — not because they're being shouted at.",
  },
  {
    q: "What does the authority video content actually involve?",
    a: "We produce 4 – 6 short videos per month featuring you, edited for LinkedIn and short-form distribution. We write the scripts around your expertise, produce them remotely (you record from anywhere), and distribute across LinkedIn, YouTube and repurposed shorts. The result is a compounding authority asset on your profile that pre-sells before outreach ever lands.",
  },
  {
    q: "How much time do I personally need to put in?",
    a: "Less than 30 minutes per week once activated. You record content remotely on a flexible schedule (one batch usually covers 2 – 4 weeks). Outreach, reply handling, qualification and booking are entirely done for you. You show up to the qualified meetings on your calendar.",
  },
  {
    q: "Why not just hire an SDR or do this myself?",
    a: "An in-house SDR costs $80K – $120K loaded, takes 3 – 6 months to ramp, and quits inside 12 months. DIY means juggling content, outreach, reply handling, qualification and booking on top of delivery — which is why most founders abandon LinkedIn within 90 days. We install a system that costs less than a single SDR, launches in 14 days, never quits, and carries a written performance guarantee.",
  },
  {
    q: "What if I'm in a small or niche industry?",
    a: "Niche is exactly where this approach wins. The smaller and more defined your ICP, the easier it is to dominate LinkedIn through authority + targeted outreach. We've installed this in 30+ industries from healthcare to B2B SaaS to coaching to professional services.",
  },
  {
    q: "What does the guarantee actually mean?",
    a: "If we don't deliver 15+ qualified sales meetings, our 90-Day Money-Back Guarantee applies — you get your investment back. A qualified meeting is with a decision-maker who matches your ICP, has budget for your offer, and has confirmed interest — agreed in writing before activation. Not invented after the fact. It's written into the agreement, not a marketing line.",
  },
  {
    q: "How quickly will I see meetings booked?",
    a: "Most partners see the first qualified meeting on the calendar within 7 – 14 days of activation. The full 15+/month target is consistently hit by the end of month one. We move fast because the underlying system is already proven — we install it into your specific business.",
  },
  {
    q: "Who is this NOT for?",
    a: "If your offer is under $3K, if your service isn't validated yet, or if you're looking for a magic-button solution that requires zero involvement — this isn't the right fit. We're selective because the guarantee only works when the underlying business is ready to scale.",
  },
];

// ─── FAQ Item ───────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-[#EDECE4]/10">
      <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none">
        <span className="text-base font-light text-[#EDECE4]">{q}</span>
        <ChevronDown className="w-4 h-4 text-[#EDECE4]/50 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="pb-6 text-base font-light text-[#EDECE4]/70 leading-relaxed">{a}</div>
    </details>
  );
}

// ─── Sticky CTA Bar ──────────────────────────────────────────────────────────
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
              <p className="text-sm font-light text-[#EDECE4]">15+ qualified meetings every month</p>
              <p className="font-supply text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40">Authority + Outreach · Guaranteed or you don&apos;t pay</p>
            </div>
            <button onClick={scrollToForm} className={`${BTN_WHITE} !py-2.5 w-full sm:w-auto justify-center`}>
              See If You Qualify
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function LinkedinGrowthPage() {
  return (
    <div className="bg-[#080808] font-poppins">
      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-xl border-b border-[#EDECE4]/10">
        <div className="max-container section-padding">
          <div className="flex items-center justify-between h-20">
            <Link href="/linkedin-growth" className="flex items-center"><NovadaLogo variant="light" className="h-12 w-auto" /></Link>
            <button onClick={scrollToForm} className={`${BTN_WHITE} !py-2.5 !px-5`}>
              See If You Qualify
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>
      <div className="h-20" />

      {/* ── HERO ── */}
      <section className="relative pt-10 pb-0 overflow-hidden">
        <div className={HERO_WASH} />
        <div className="relative max-container section-padding text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-supply text-xs uppercase tracking-[0.25em] text-[#0CC481] mb-6">
            Growth Infrastructure&trade; — For B2B Businesses That Want To Scale On LinkedIn
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className={`text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.15] text-balance max-w-4xl mx-auto pb-1 ${GRAD_TEXT}`}>
            350+ B2B Founders Use Our System To Book 15+ Qualified Sales Meetings Every Month — Without Ads, SDRs, Or chasing prospects.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-6 text-lg md:text-xl font-light text-[#EDECE4]/80 max-w-2xl mx-auto leading-relaxed">
            We position you as the trusted expert in your niche so high-value decision-makers already trust you before the sales conversation even begins. Then we leverage that authority through our proven outbound system to consistently generate 15+ qualified sales meetings every month. No paid ads. No guesswork. Backed by our 90-Day Money-Back Guarantee.
          </motion.p>

          {/* Hero Trust Bar */}
          <HeroTrustBar className="mt-8" />

          {/* Above-fold CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-8">
            <button onClick={scrollToForm} className={`${BTN_WHITE} text-base !px-9 !py-4`}>
              See If You Qualify
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── VSL ── */}
      <section className="section-padding pt-12 pb-24 md:pb-32">
        <div className="max-container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
            <div className="flex items-center justify-center gap-2 mb-3 text-sm font-light text-[#EDECE4]/50">
              <Play className="w-3.5 h-3.5 text-[#0CC481]" />
              <span>Watch the 2-min overview</span>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-[#EDECE4]/10 shadow-2xl" style={{ paddingBottom: "56.25%" }}>
              <iframe src="https://www.youtube.com/embed/_fVB00BpPpI?autoplay=1&mute=1&rel=0" title="How LinkedIn Growth System works" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 text-xs font-light text-[#EDECE4]/40">
              <span>Presented by <span className="text-[#EDECE4]/70">Ade</span> — Novada Tech</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="section-padding pb-24 md:pb-32">
        <div className="max-container max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 text-center">
            {[
              { num: "$45.7M+", label: "Client Revenue Generated" },
              { num: "15+", label: "Qualified Meetings Monthly" },
              { num: "14 days", label: "Avg Time To First Meeting" },
              { num: "$0", label: "Ad Spend Required" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <p className="text-3xl md:text-5xl font-normal text-white tracking-tight leading-none">{s.num}</p>
                <p className="font-supply mt-3 text-[10px] md:text-xs uppercase tracking-[0.18em] text-[#EDECE4]/40">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video Testimonials (early trust) ── */}
      <section className="section-padding pb-24 md:pb-32">
        <div className="max-container">
          <div className="text-center mb-12">
            <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-4">Real Operators · Real Results</p>
            <h2 className={`inline-block text-2xl md:text-4xl font-light tracking-tight pb-1 ${GRAD_TEXT}`}>Founders Already Running The System</h2>
          </div>

          {/* Same card layout as /case-study, filtered to LinkedIn-Growth cases */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {LINKEDIN_CASE_STUDIES.map((c, i) => (
              <motion.article
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.08 }}
                className={`${MS_CARD} overflow-hidden flex flex-col hover:border-[#EDECE4]/[0.14] transition-colors`}
              >
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

                <div className="p-6 flex flex-col flex-1">
                  <p className="font-supply text-[10px] uppercase tracking-[0.18em] text-[#EDECE4]/40 mb-3">{c.offeringLabel}</p>
                  <p className="text-base md:text-lg font-light text-[#EDECE4] leading-snug mb-4">{c.cardHeadline}</p>
                  <p className="text-xs font-light text-[#EDECE4]/45 mb-5">{c.customerName} — {c.customerRole}, {c.customerCompany}</p>
                  <div className="mt-auto">
                    <Link href={`/case-study/${c.slug}`} className={`${LINK_GREEN} group/cta`}>
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

      {/* ── What You Walk Away With ── */}
      <section className="section-padding pb-24 md:pb-32">
        <div className="max-container max-w-5xl">
          <div className="text-center mb-12">
            <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-4">What You Walk Away With</p>
            <h2 className={`inline-block text-2xl md:text-4xl font-light tracking-tight leading-tight pb-1 ${GRAD_TEXT}`}>Inside The LinkedIn Growth System&trade; Partnership</h2>
            <p className="mt-4 text-base font-light text-[#EDECE4]/70 max-w-2xl mx-auto leading-relaxed">Live in 14 days. 15+ qualified meetings by month one. If we don&apos;t deliver — you don&apos;t pay.</p>
          </div>

          {/* Featured outcome — the guarantee */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`relative ${MS_CARD} p-8 md:p-10 mb-6 overflow-hidden`}>
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#0CC481]/10 blur-3xl pointer-events-none" />
            <div className="relative grid md:grid-cols-5 gap-8 md:gap-10 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-[#0CC481]" />
                  <p className="font-supply text-xs uppercase tracking-[0.18em] text-[#0CC481]">The Guarantee</p>
                </div>
                <p className={`text-6xl md:text-7xl font-extralight tracking-tight leading-none pb-1 ${GRAD_TEXT}`}>{OUTCOMES_FEATURED.metric}</p>
                <p className="mt-3 text-lg font-light text-[#EDECE4]/80 leading-snug">{OUTCOMES_FEATURED.metricLabel}</p>
              </div>
              <div className="md:col-span-3 md:border-l md:border-[#EDECE4]/10 md:pl-10">
                <h3 className="text-xl md:text-2xl font-light text-[#EDECE4] leading-snug mb-4">{OUTCOMES_FEATURED.title}</h3>
                <p className="text-base font-light text-[#EDECE4]/70 leading-relaxed">{OUTCOMES_FEATURED.desc}</p>
              </div>
            </div>
          </motion.div>

          {/* Supporting outcome tiles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OUTCOMES_GRID.map((o, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className={`group ${MS_CARD} p-6 hover:border-[#EDECE4]/[0.14] transition-colors`}>
                <o.icon className="w-6 h-6 text-[#0CC481] mb-4" strokeWidth={1.4} />
                <h4 className="text-base md:text-lg font-normal text-[#EDECE4] mb-2 leading-snug">{o.title}</h4>
                <p className="text-sm font-light text-[#EDECE4]/60 leading-relaxed">{o.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button onClick={scrollToForm} className={BTN_WHITE}>
              See If You Qualify
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── PROBLEM AGITATION ── */}
      <section className="section-padding py-24 md:py-28">
        <div className="max-container max-w-5xl">
          <div className="text-center mb-10">
            <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-4">The Real Problem</p>
            <h2 className={`inline-block text-2xl md:text-4xl font-light tracking-tight pb-1 ${GRAD_TEXT}`}>LinkedIn Isn&apos;t Broken. The Way Everyone&apos;s Using It Is.</h2>
            <p className="mt-3 text-base font-light text-[#EDECE4]/70 max-w-2xl mx-auto">If any of these sound familiar, you&apos;re running the 2020 playbook in a 2026 inbox.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {PROBLEMS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`${MS_CARD} p-6 flex flex-col`}>
                <p.icon className="w-7 h-7 text-[#EDECE4]/70 mb-4" strokeWidth={1.2} />
                <p className="font-supply text-[10px] uppercase tracking-[0.15em] text-[#0CC481]/80 mb-2">{p.tag}</p>
                <h3 className="text-base font-normal text-[#EDECE4] mb-2 leading-snug">{p.title}</h3>
                <p className="text-sm font-light text-[#EDECE4]/60 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Inline CTA — CTA cadence between sections */}
          <div className="mt-12 text-center">
            <button onClick={scrollToForm} className={BTN_WHITE}>
              See If You Qualify
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── AUTHORITY MATH (UNIQUE MECHANISM) ── */}
      <section className="section-padding py-24 md:py-28">
        <div className="max-container max-w-5xl">
          <div className="text-center mb-12">
            <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-4">The Authority Difference</p>
            <h2 className={`inline-block text-2xl md:text-4xl font-light tracking-tight leading-tight pb-1 ${GRAD_TEXT}`}>
              Why Outreach Alone Stopped Working — And What Replaced It.
            </h2>
            <p className="mt-4 text-lg font-light text-[#EDECE4]/70 max-w-2xl mx-auto leading-relaxed">
              Without authority, your message is one of 100. With authority, you&apos;re the one they were waiting to hear from. Same outreach. Different math.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Old way */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-7 rounded-xl border border-[#EDECE4]/[0.06] bg-transparent">
              <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#EDECE4]/40 mb-5">{AUTHORITY_MATH.oldWay.title}</p>
              <div className="space-y-3 mb-6">
                {AUTHORITY_MATH.oldWay.rows.map((row, i) => (
                  <div key={i} className="flex items-start gap-3"><XCircle className="w-4 h-4 text-[#EDECE4]/40 mt-0.5 flex-shrink-0" /><span className="text-sm font-light text-[#EDECE4]/60 leading-relaxed">{row}</span></div>
                ))}
              </div>
              <div className="pt-5 border-t border-[#EDECE4]/[0.08] space-y-2.5">
                {AUTHORITY_MATH.oldWay.stats.map((s, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="font-light text-[#EDECE4]/50">{s.label}</span>
                    <span className="text-[#EDECE4]/70">{s.value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs font-light text-[#EDECE4]/45 italic">Brutal math. And reply rates keep falling.</p>
            </motion.div>

            {/* New way */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className={`${MS_CARD} p-7`}>
              <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-5">{AUTHORITY_MATH.newWay.title}</p>
              <div className="space-y-3 mb-6">
                {AUTHORITY_MATH.newWay.rows.map((row, i) => (
                  <div key={i} className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[#0CC481] mt-0.5 flex-shrink-0" /><span className="text-sm font-light text-[#EDECE4] leading-relaxed">{row}</span></div>
                ))}
              </div>
              <div className="pt-5 border-t border-[#EDECE4]/10 space-y-2.5">
                {AUTHORITY_MATH.newWay.stats.map((s, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="font-light text-[#EDECE4]/50">{s.label}</span>
                    <span className="text-[#0CC481]">{s.value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs font-light text-[#0CC481]">Same outreach. ~12x more qualified meetings.</p>
            </motion.div>
          </div>

          {/* 3-Pillar visual */}
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {[
              { icon: Video, title: "Authority Video Content", desc: "4 – 6 short videos per month, scripted around your expertise. Distributed across LinkedIn, YouTube and short-form so prospects research you and find proof — not silence." },
              { icon: Send, title: "Targeted Outreach", desc: "Daily, precise outreach to ICP-matched prospects. Reply handling done for you, sequences trained on your voice, optimised weekly." },
              { icon: CalendarCheck, title: "Pre-Qualified Booking", desc: "Only decision-makers with budget and fit make it to your calendar. Pre-qualified, pre-sold, and ready to buy when the call starts." },
            ].map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`${MS_CARD} p-6 h-full`}>
                <p.icon className="w-6 h-6 text-[#0CC481] mb-4" strokeWidth={1.4} />
                <h3 className="text-base font-normal text-[#EDECE4] mb-2">{p.title}</h3>
                <p className="text-sm font-light text-[#EDECE4]/60 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button onClick={scrollToForm} className={BTN_WHITE}>
              See If You Qualify
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-padding py-24 md:py-32 relative overflow-hidden">
        <div className="relative max-container max-w-5xl">
          <div className="mb-14 md:mb-20 text-center">
            <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-4">How It Works</p>
            <h2 className={`inline-block text-3xl md:text-5xl font-light tracking-tight leading-[1.1] text-balance pb-1 ${GRAD_TEXT}`}>
              From application to live pipeline.
            </h2>
          </div>

          {/* Horizontal connected timeline */}
          <div className="relative">
            {/* Dashed connector line behind icons — desktop only */}
            <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] border-t border-dashed border-[#EDECE4]/15" />

            <div className="grid md:grid-cols-3 gap-y-12 md:gap-x-6">
              {HOW_IT_WORKS.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="relative text-center px-4">
                  <div className="relative z-10 mx-auto w-20 h-20 rounded-full border border-[#0CC481]/50 bg-[#080808] flex items-center justify-center mb-5">
                    <step.icon className="w-8 h-8 text-[#0CC481]" strokeWidth={1.2} />
                  </div>
                  <p className="font-supply text-xs uppercase tracking-[0.18em] text-[#EDECE4]/45 mb-2">
                    Step {i + 1} <span className="text-[#0CC481]/80">· {step.days}</span>
                  </p>
                  <h3 className="text-lg md:text-xl font-normal text-[#EDECE4] mb-3">{step.title}</h3>
                  <p className="text-sm md:text-base font-light text-[#EDECE4]/60 leading-relaxed max-w-[280px] mx-auto">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-14 md:mt-20 text-center">
            <button onClick={scrollToForm} className={BTN_WHITE}>
              See If You Qualify
              <ChevronRight className="w-4 h-4" />
            </button>
            <p className="mt-5 text-xs font-light text-[#EDECE4]/40 italic max-w-md mx-auto">Then we keep optimising every month so your calendar stays at 15+ qualified meetings.</p>
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATION TABLE ── */}
      <section className="section-padding py-24 md:py-28">
        <div className="max-container max-w-5xl">
          <div className="text-center mb-12">
            <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-4">Why This Beats Every Other Option</p>
            <h2 className={`inline-block text-2xl md:text-4xl font-light tracking-tight leading-tight pb-1 ${GRAD_TEXT}`}>
              The Difference Between Sending Messages — And Owning Your Industry
            </h2>
            <p className="mt-4 text-base font-light text-[#EDECE4]/70 max-w-2xl mx-auto leading-relaxed">
              Generic LinkedIn agencies sell volume. DIY drains your time. LinkedIn Growth System&trade; installs a permanent authority engine into your business — and guarantees the result.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#EDECE4]/[0.08]">
            <div className="grid grid-cols-4 bg-white/[0.02] border-b border-[#EDECE4]/[0.08]">
              <div className="p-4 col-span-1" />
              <div className="p-4 text-center"><p className="font-supply text-[10px] md:text-xs uppercase tracking-[0.1em] text-[#EDECE4]/50">Generic LinkedIn Agency</p></div>
              <div className="p-4 text-center"><p className="font-supply text-[10px] md:text-xs uppercase tracking-[0.1em] text-[#EDECE4]/50">DIY (You)</p></div>
              <div className="p-4 text-center bg-[#0CC481]/[0.06] border-l border-[#0CC481]/20">
                <p className="font-supply text-[10px] md:text-xs uppercase tracking-[0.1em] text-[#0CC481]">LinkedIn Growth System&trade;</p>
              </div>
            </div>
            {DIFFERENTIATION.map((row, i) => (
              <div key={i} className={`grid grid-cols-4 border-b border-[#EDECE4]/[0.05] last:border-0 ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}>
                <div className="p-4 flex items-center"><span className="text-xs md:text-sm font-light text-[#EDECE4]/60">{row.label}</span></div>
                <div className="p-4 flex items-center justify-center text-center"><span className="text-sm font-light text-[#EDECE4]/50">{row.agency}</span></div>
                <div className="p-4 flex items-center justify-center text-center"><span className="text-sm font-light text-[#EDECE4]/50">{row.diy}</span></div>
                <div className="p-4 flex items-center justify-center text-center bg-[#0CC481]/[0.04] border-l border-[#0CC481]/10"><span className="text-sm text-[#0CC481]">{row.novada}</span></div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button onClick={scrollToForm} className={BTN_WHITE}>
              See If You Qualify
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── WRITTEN TESTIMONIALS (big-photo cards) ── */}
      <section className="section-padding py-24 md:py-32">
        <div className="max-container">
          <div className="text-center mb-14">
            <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#EDECE4]/40 mb-4">350+ Businesses · $45.7M+ Client Revenue Generated</p>
            <h2 className={`inline-block text-3xl md:text-5xl font-light tracking-tight leading-[1.1] text-balance pb-1 ${GRAD_TEXT}`}>We build outbound that compounds.</h2>
            <p className="mt-5 text-base font-light text-[#EDECE4]/55 max-w-xl mx-auto">Every result below is from a named client engagement.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1 }}
                className={`${MS_CARD} overflow-hidden flex flex-col`}
              >
                {/* Top: metric + stars + quote */}
                <div className="p-7 md:p-8">
                  <div className="flex items-baseline gap-2 mb-4 flex-wrap">
                    <p className="text-4xl md:text-5xl font-extralight text-white tracking-tight leading-none">{t.metric}</p>
                    <p className="text-sm font-light text-[#EDECE4]/40">/ {t.metricLabel}</p>
                  </div>
                  <div className="text-[#0CC481] text-sm mb-4 tracking-widest">{"★★★★★"}</div>
                  <p className="text-base md:text-lg font-light text-[#EDECE4] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                </div>

                {/* Big customer image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Name + role */}
                <div className="px-7 md:px-8 py-5 border-t border-[#EDECE4]/[0.08]">
                  <p className="text-base text-[#EDECE4]">{t.name}</p>
                  <p className="font-supply text-xs uppercase tracking-[0.15em] text-[#EDECE4]/40 mt-1">{t.role}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button onClick={scrollToForm} className={BTN_WHITE}>
              See If You Qualify
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="pt-16 pb-0 section-padding">
        <div className="max-container max-w-2xl">
          <div className="text-center mb-10">
            <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-4">FAQs</p>
            <h2 className={`inline-block text-2xl md:text-4xl font-light tracking-tight pb-1 ${GRAD_TEXT}`}>The Questions Serious Operators Ask</h2>
          </div>
          <div>{FAQS.map((faq, i) => (<FAQItem key={i} q={faq.q} a={faq.a} />))}</div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative pt-24 pb-32 md:pt-28 md:pb-40 section-padding overflow-hidden">
        <div className={GLOW_BOTTOM} />
        <div className="relative max-container text-center">
          <p className="font-supply text-xs uppercase tracking-[0.25em] text-[#0CC481] mb-6">Performance Guaranteed</p>
          <h2 className={`text-3xl md:text-6xl font-light tracking-tight leading-[1.15] text-balance max-w-4xl mx-auto pb-2 ${GRAD_TEXT}`}>
            Stop Sending Messages. Start Owning Your Industry.
          </h2>
          <p className="mt-6 text-lg font-light text-[#EDECE4]/70 max-w-xl mx-auto leading-relaxed">350+ founders have made the switch from cold outreach to authority + outreach. 15+ qualified meetings every month, guaranteed. Or you don&apos;t pay.</p>

          <button onClick={scrollToForm} className={`${BTN_WHITE} mt-10`}>
            See If You Qualify
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="font-supply mt-10 flex flex-wrap items-center justify-center gap-6 text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/35">
            <span>15+ Meetings Guaranteed</span>
            <a href="https://www.trustpilot.com/review/novadatech.com.au" target="_blank" rel="noopener noreferrer" className="hover:text-[#EDECE4]/70 transition-colors underline underline-offset-4 decoration-[#EDECE4]/20">4.9{"★"} Trustpilot</a>
            <span>Written Guarantee</span>
            <span>350+ Businesses</span>
          </div>
        </div>
      </section>

      <StickyCtaBar />
      <div className="h-16 sm:h-0" />
    </div>
  );
}
