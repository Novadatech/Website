"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, Shield, Star, TrendingUp, Users,
  Clock, ChevronDown, ArrowRight,
  ChevronLeft, ChevronRight, Play, Video, Send, CalendarCheck,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import NovadaLogo from "@/components/NovadaLogo";
import HeroTrustBar from "@/components/HeroTrustBar";

function scrollToForm() {
  // Form was removed from this page; route the CTA to the dedicated booking page.
  window.location.assign("/book-call");
}

// ─── Data ───────────────────────────────────────────────────────────────────

const OUTCOMES_FEATURED = {
  metric: "20+",
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
  { label: "Performance Guarantee", agency: "None", diy: "N/A", novada: "20+ meetings/mo or you don't pay" },
];

const TESTIMONIALS = [
  {
    metric: "$91K/mo",
    metricLabel: "monthly revenue",
    quote: "We went from $42K to $91K monthly in under 60 days. The pipeline became predictable for the first time — we could forecast and hire with confidence.",
    name: "Jeff",
    role: "Founder, Vertical Access",
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
    role: "Founder, Aaron's Investigation",
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

const VIDEO_TESTIMONIALS = [
  { id: "CBL83P7OYgI", title: "Nicole — Morasco Media Services", name: "Nicole", company: "Founder, Morasco Media Services" },
  { id: "upgMW2nwwpk", title: "Tony — South Line Media", name: "Tony", company: "Founder, South Line Media" },
  { id: "G44OKPVh3Uk", title: "Michael — Aaronson Investigations", name: "Michael", company: "Founder, Aaronson Investigations" },
  { id: "Ef4YTXOnCP0", title: "Jeff — Vertical Axis", name: "Jeff", company: "Founder, Vertical Axis" },
  { id: "0qabR5mfAfQ", title: "Anthony — Ripple Clarke", name: "Anthony", company: "Founder, Ripple Clarke" },
  { id: "JXEvONrDaOk", title: "Damian — Groundwork Ventures", name: "Damian", company: "Founder, Groundwork Ventures" },
  { id: "O3HUPQyflH8", title: "Jack — House Valley", name: "Jack", company: "Founder, House Valley" },
  { id: "w5iJNOADdXU", title: "Nate — Larsky Tach and Feed", name: "Nate", company: "Founder, Larsky Tach and Feed" },
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
    a: "If we don't deliver 20+ qualified sales meetings in any given month, you don't pay us for that month. A qualified meeting is with a decision-maker who matches your ICP, has budget for your offer, and has confirmed interest — agreed in writing before activation. Not invented after the fact. It's written into the agreement, not a marketing line.",
  },
  {
    q: "How quickly will I see meetings booked?",
    a: "Most partners see the first qualified meeting on the calendar within 7 – 14 days of activation. The full 20+/month target is consistently hit by the end of month one. We move fast because the underlying system is already proven — we install it into your specific business.",
  },
  {
    q: "Who is this NOT for?",
    a: "If your offer is under $3K, if your service isn't validated yet, or if you're looking for a magic-button solution that requires zero involvement — this isn't the right fit. We're selective because the guarantee only works when the underlying business is ready to scale.",
  },
];

// ─── FAQ Item ───────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group glass-card border border-white/[0.06] rounded-xl overflow-hidden">
      <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
        <span className="text-sm font-medium text-white">{q}</span>
        <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="px-5 pb-5 text-base text-white/80 leading-relaxed border-t border-white/[0.05] pt-4">{a}</div>
    </details>
  );
}

// ─── Video Slider ────────────────────────────────────────────────────────────
function VideoSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = VIDEO_TESTIMONIALS.length;
  const goTo = useCallback((index: number, dir: number) => { setDirection(dir); setCurrent(index); }, []);
  const prev = () => goTo((current - 1 + total) % total, -1);
  const next = useCallback(() => goTo((current + 1) % total, 1), [current, total, goTo]);
  const video = VIDEO_TESTIMONIALS[current];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <motion.button onClick={prev} animate={{ boxShadow: ["0 0 0px rgba(255,90,48,0)", "0 0 16px rgba(255,90,48,0.5)", "0 0 0px rgba(255,90,48,0)"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.93 }} className="hidden sm:flex absolute left-0 top-[42%] -translate-y-1/2 w-12 h-12 rounded-full bg-zinc-900/90 border border-ember-500/35 items-center justify-center text-ember-500 hover:border-ember-500/80 hover:bg-zinc-800 transition-colors duration-200 z-10" aria-label="Previous"><ChevronLeft className="w-6 h-6" /></motion.button>
        <motion.button onClick={next} animate={{ boxShadow: ["0 0 0px rgba(255,90,48,0)", "0 0 24px rgba(255,90,48,0.7)", "0 0 0px rgba(255,90,48,0)"] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.93 }} className="hidden sm:flex absolute right-0 top-[42%] -translate-y-1/2 w-12 h-12 rounded-full bg-ember-500/15 border border-ember-500/60 items-center justify-center text-ember-500 hover:bg-ember-500/25 hover:border-ember-400 transition-colors duration-200 z-10" aria-label="Next"><ChevronRight className="w-6 h-6" /></motion.button>

        <div className="sm:px-16">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={video.id} initial={{ opacity: 0, x: direction * 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: direction * -40 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="glass-card dark-red-gradient-border p-3">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <iframe src={`https://www.youtube.com/embed/${video.id}`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" style={{ border: "none" }} />
              </div>
              <div className="flex items-center gap-3 mt-3 px-2 pb-1">
                <div className="w-7 h-7 rounded-full bg-ember-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-ember-400">{video.name[0]}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/70">{video.name}</p>
                  <p className="text-[11px] text-white/35">{video.company}</p>
                </div>
                <div className="ml-auto text-ember-500 text-xs flex-shrink-0">{"★★★★★"}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex sm:hidden items-center justify-center gap-4 mt-4">
        <motion.button onClick={prev} animate={{ boxShadow: ["0 0 0px rgba(255,90,48,0)", "0 0 16px rgba(255,90,48,0.5)", "0 0 0px rgba(255,90,48,0)"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} whileTap={{ scale: 0.93 }} className="w-12 h-12 rounded-full bg-zinc-900/90 border border-ember-500/35 flex items-center justify-center text-ember-500" aria-label="Previous"><ChevronLeft className="w-6 h-6" /></motion.button>
        <div className="flex items-center gap-2">
          {VIDEO_TESTIMONIALS.map((_, i) => (<button key={i} onClick={() => goTo(i, i > current ? 1 : -1)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-ember-500" : "w-2 bg-white/20"}`} aria-label={`Go to video ${i + 1}`} />))}
        </div>
        <motion.button onClick={next} animate={{ boxShadow: ["0 0 0px rgba(255,90,48,0)", "0 0 24px rgba(255,90,48,0.7)", "0 0 0px rgba(255,90,48,0)"] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} whileTap={{ scale: 0.93 }} className="w-12 h-12 rounded-full bg-ember-500/15 border border-ember-500/60 flex items-center justify-center text-ember-500" aria-label="Next"><ChevronRight className="w-6 h-6" /></motion.button>
      </div>

      <div className="hidden sm:flex items-center justify-center gap-2 mt-5">
        {VIDEO_TESTIMONIALS.map((_, i) => (<button key={i} onClick={() => goTo(i, i > current ? 1 : -1)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-ember-500" : "w-2 bg-white/20 hover:bg-white/40"}`} aria-label={`Go to video ${i + 1}`} />))}
      </div>
    </div>
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
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className="fixed bottom-0 left-0 right-0 z-50 bg-surface-950/95 backdrop-blur-xl border-t border-white/[0.08] py-3 px-5 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">20+ qualified meetings every month</p>
              <p className="text-xs text-white/50">Authority + Outreach. Guaranteed or you don&apos;t pay.</p>
            </div>
            <button onClick={scrollToForm} className="btn-primary-dark-red text-sm py-3 px-6 w-full sm:w-auto">
              See If You Qualify
              <ArrowRight className="w-4 h-4" />
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
    <div className="bg-surface-950">
      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-950/95 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-container section-padding">
          <div className="flex items-center justify-between h-20">
            <Link href="/linkedin-growth" className="flex items-center"><NovadaLogo variant="light" className="h-12 w-auto" /></Link>
            <button onClick={scrollToForm} className="btn-primary-dark-red text-sm py-2.5 px-5">
              See If You Qualify
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>
      <div className="h-20" />

      {/* ── HERO ── */}
      <section className="relative pt-6 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-surface-950 to-surface-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,90,48,0.14)_0%,_transparent_60%)]" />
        <div className="relative max-container section-padding text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ember-500/20 bg-ember-500/5 mb-4">
            <span className="w-2 h-2 rounded-full bg-ember-500 animate-pulse-slow" />
            <span className="text-sm text-ember-500 font-medium">For B2B service businesses that want to scale on LinkedIn</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-balance max-w-4xl mx-auto">
            350+ B2B Founders Use Our{" "}<span className="text-ember-500">System</span>{" "}To Book{" "}<span className="text-ember-500">20+ Qualified Sales Meetings</span>{" "}Every Month — Without Ads, SDRs, Or chasing prospects.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            We install and manage your entire client acquisition engine, guaranteeing 20+ qualified sales meetings every month. No ad spend. No SDRs. No chasing prospects. If we don&apos;t deliver, you don&apos;t pay.
          </motion.p>

          {/* Hero Trust Bar */}
          <HeroTrustBar className="mt-7" />

          {/* Above-fold CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-6">
            <button onClick={scrollToForm} className="btn-primary-dark-red text-base md:text-lg px-10 py-4">
              See If You Qualify
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── VSL ── */}
      <section className="section-padding pt-8 pb-24 md:pb-32">
        <div className="max-container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
            <div className="flex items-center justify-center gap-2 mb-3 text-sm text-white/50">
              <Play className="w-3.5 h-3.5 text-ember-500" />
              <span>Watch the 2-min overview</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl" style={{ paddingBottom: "56.25%" }}>
              <iframe src="https://www.youtube.com/embed/-mQwJS3ZCBg?autoplay=1&mute=1&rel=0" title="How LinkedIn Growth System works" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-white/40">
              <div className="w-5 h-5 rounded-full bg-ember-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[8px] font-bold text-ember-400">A</span>
              </div>
              <span>Presented by <span className="text-white/60 font-medium">Ade</span> — Novada Tech</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="section-padding pb-24 md:pb-32">
        <div className="max-container max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 text-center">
            {[
              { num: "$45.7M+", label: "Tracked Pipeline Generated" },
              { num: "20+", label: "Qualified Meetings Monthly" },
              { num: "14 days", label: "Avg Time To First Meeting" },
              { num: "$0", label: "Ad Spend Required" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <p className="text-3xl md:text-5xl font-bold text-ember-500 tracking-tight leading-none">{s.num}</p>
                <p className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.18em] text-white/45 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video Testimonials (early trust) ── */}
      <section className="section-padding pb-24 md:pb-32">
        <div className="max-container">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-3">Real Operators · Real Results</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Founders Already Running The System</h2>
          </div>
          <VideoSlider />
        </div>
      </section>

      {/* ── What You Walk Away With ── */}
      <section className="section-padding pb-24 md:pb-32">
        <div className="max-container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-3">What You Walk Away With</p>
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">Inside The LinkedIn Growth System&trade; Partnership</h2>
            <p className="mt-4 text-base text-white/70 max-w-2xl mx-auto leading-relaxed">Live in 14 days. 20+ qualified meetings by month one. If we don&apos;t deliver — you don&apos;t pay.</p>
          </div>

          {/* Featured outcome — the guarantee */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl border border-ember-500/25 bg-gradient-to-br from-ember-500/[0.08] via-ember-500/[0.02] to-transparent p-8 md:p-10 mb-6 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-ember-500/10 blur-3xl pointer-events-none" />
            <div className="relative grid md:grid-cols-5 gap-8 md:gap-10 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-ember-500/15 border border-ember-500/35 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-ember-500" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.18em] text-ember-500/85 font-semibold">The Guarantee</p>
                </div>
                <p className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-none">{OUTCOMES_FEATURED.metric}</p>
                <p className="mt-3 text-lg text-white/80 font-medium leading-snug">{OUTCOMES_FEATURED.metricLabel}</p>
              </div>
              <div className="md:col-span-3 md:border-l md:border-white/[0.10] md:pl-10">
                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-4">{OUTCOMES_FEATURED.title}</h3>
                <p className="text-base text-white/75 leading-relaxed">{OUTCOMES_FEATURED.desc}</p>
              </div>
            </div>
          </motion.div>

          {/* Supporting outcome tiles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OUTCOMES_GRID.map((o, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-ember-500/30 hover:bg-white/[0.035] transition-colors">
                <div className="w-11 h-11 rounded-xl bg-ember-500/10 border border-ember-500/20 flex items-center justify-center mb-4 group-hover:bg-ember-500/15 transition-colors">
                  <o.icon className="w-5 h-5 text-ember-500" />
                </div>
                <h4 className="text-base md:text-lg font-bold text-white mb-2 leading-snug">{o.title}</h4>
                <p className="text-sm text-white/65 leading-relaxed">{o.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button onClick={scrollToForm} className="btn-primary-dark-red mx-auto">
              See If You Qualify
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── PROBLEM AGITATION ── */}
      <section className="section-padding py-24 md:py-28">
        <div className="max-container max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-3">The Real Problem</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">LinkedIn Isn&apos;t Broken. The Way Everyone&apos;s Using It Is.</h2>
            <p className="mt-3 text-base text-white/70 max-w-2xl mx-auto">If any of these sound familiar, you&apos;re running the 2020 playbook in a 2026 inbox.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {PROBLEMS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-ember-500/10 border border-ember-500/20 flex items-center justify-center mb-4">
                  <p.icon className="w-6 h-6 text-ember-500/80" />
                </div>
                <p className="text-xs uppercase tracking-[0.15em] text-ember-500/70 font-semibold mb-2">{p.tag}</p>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">{p.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Inline CTA — CTA cadence between sections */}
          <div className="mt-12 text-center">
            <button onClick={scrollToForm} className="btn-primary-dark-red mx-auto">
              See If You Qualify
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── AUTHORITY MATH (UNIQUE MECHANISM) ── */}
      <section className="section-padding py-24 md:py-28">
        <div className="max-container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-3">The Authority Difference</p>
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Why Outreach Alone Stopped Working — And{" "}
              <span className="text-ember-500">What Replaced It.</span>
            </h2>
            <p className="mt-4 text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              Without authority, your message is one of 100. With authority, you&apos;re the one they were waiting to hear from. Same outreach. Different math.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Old way */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-7 rounded-2xl border border-ember-500/15 bg-ember-500/[0.02]">
              <p className="text-xs uppercase tracking-[0.2em] text-ember-500/60 font-semibold mb-5">{AUTHORITY_MATH.oldWay.title}</p>
              <div className="space-y-3 mb-6">
                {AUTHORITY_MATH.oldWay.rows.map((row, i) => (
                  <div key={i} className="flex items-start gap-3"><XCircle className="w-4 h-4 text-ember-500/60 mt-0.5 flex-shrink-0" /><span className="text-sm text-white/70 leading-relaxed">{row}</span></div>
                ))}
              </div>
              <div className="pt-5 border-t border-white/[0.06] space-y-2.5">
                {AUTHORITY_MATH.oldWay.stats.map((s, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-white/60">{s.label}</span>
                    <span className="text-ember-500/80 font-bold">{s.value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-ember-500/65 font-medium">Brutal math. And reply rates keep falling.</p>
            </motion.div>

            {/* New way */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card dark-red-gradient-border p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-ember-500/80 font-semibold mb-5">{AUTHORITY_MATH.newWay.title}</p>
              <div className="space-y-3 mb-6">
                {AUTHORITY_MATH.newWay.rows.map((row, i) => (
                  <div key={i} className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-ember-500 mt-0.5 flex-shrink-0" /><span className="text-sm text-white/85 leading-relaxed font-medium">{row}</span></div>
                ))}
              </div>
              <div className="pt-5 border-t border-white/[0.08] space-y-2.5">
                {AUTHORITY_MATH.newWay.stats.map((s, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-white/60">{s.label}</span>
                    <span className="text-ember-500 font-bold">{s.value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-ember-500/80 font-medium">Same outreach. ~12x more qualified meetings.</p>
            </motion.div>
          </div>

          {/* 3-Pillar visual */}
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {[
              { icon: Video, title: "Authority Video Content", desc: "4 – 6 short videos per month, scripted around your expertise. Distributed across LinkedIn, YouTube and short-form so prospects research you and find proof — not silence." },
              { icon: Send, title: "Targeted Outreach", desc: "Daily, precise outreach to ICP-matched prospects. Reply handling done for you, sequences trained on your voice, optimised weekly." },
              { icon: CalendarCheck, title: "Pre-Qualified Booking", desc: "Only decision-makers with budget and fit make it to your calendar. Pre-qualified, pre-sold, and ready to buy when the call starts." },
            ].map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-ember-500/10 flex items-center justify-center mb-4"><p.icon className="w-6 h-6 text-ember-500" /></div>
                <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button onClick={scrollToForm} className="btn-primary-dark-red mx-auto">
              See If You Qualify
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-padding py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,48,0.06)_0%,_transparent_60%)] pointer-events-none" />
        <div className="relative max-container max-w-5xl">
          <div className="mb-14 md:mb-20 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-4">How It Works</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.05] text-balance">
              From application to <span className="text-ember-500">live pipeline.</span>
            </h2>
          </div>

          {/* Horizontal connected timeline */}
          <div className="relative">
            {/* Dashed connector line behind icons — desktop only */}
            <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] border-t border-dashed border-ember-500/40" />

            <div className="grid md:grid-cols-3 gap-y-12 md:gap-x-6">
              {HOW_IT_WORKS.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="relative text-center px-4">
                  {/* Ember-bordered icon ring */}
                  <div className="relative z-10 mx-auto w-20 h-20 rounded-full border-2 border-ember-500/60 bg-surface-950 flex items-center justify-center mb-5">
                    <step.icon className="w-8 h-8 text-ember-500" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45 font-semibold mb-2">
                    Step {i + 1} <span className="text-ember-500/80">· {step.days}</span>
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm md:text-base text-white/65 leading-relaxed max-w-[280px] mx-auto">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-14 md:mt-20 text-center">
            <button onClick={scrollToForm} className="btn-primary-dark-red mx-auto">
              See If You Qualify
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="mt-5 text-xs text-white/40 italic max-w-md mx-auto">Then we keep optimising every month so your calendar stays at 20+ qualified meetings.</p>
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATION TABLE ── */}
      <section className="section-padding py-24 md:py-28">
        <div className="max-container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-3">Why This Beats Every Other Option</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              The Difference Between Sending Messages — And{" "}
              <span className="text-ember-500">Owning Your Industry</span>
            </h2>
            <p className="mt-4 text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
              Generic LinkedIn agencies sell volume. DIY drains your time. LinkedIn Growth System&trade; installs a permanent authority engine into your business — and guarantees the result.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
            <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/[0.06]">
              <div className="p-4 col-span-1" />
              <div className="p-4 text-center"><p className="text-xs md:text-sm font-medium text-white/55">Generic LinkedIn Agency</p></div>
              <div className="p-4 text-center"><p className="text-xs md:text-sm font-medium text-white/55">DIY (You)</p></div>
              <div className="p-4 text-center bg-ember-500/[0.05] border-l border-ember-500/15">
                <p className="text-xs md:text-sm font-semibold text-ember-500">LinkedIn Growth System&trade;</p>
              </div>
            </div>
            {DIFFERENTIATION.map((row, i) => (
              <div key={i} className={`grid grid-cols-4 border-b border-white/[0.04] last:border-0 ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}>
                <div className="p-4 flex items-center"><span className="text-xs md:text-sm text-white/60">{row.label}</span></div>
                <div className="p-4 flex items-center justify-center text-center"><span className="text-sm text-white/55">{row.agency}</span></div>
                <div className="p-4 flex items-center justify-center text-center"><span className="text-sm text-white/55">{row.diy}</span></div>
                <div className="p-4 flex items-center justify-center text-center bg-ember-500/[0.04] border-l border-ember-500/10"><span className="text-sm text-ember-500 font-medium">{row.novada}</span></div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button onClick={scrollToForm} className="btn-primary-dark-red mx-auto">
              See If You Qualify
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── WRITTEN TESTIMONIALS (big-photo cards) ── */}
      <section className="section-padding py-24 md:py-32">
        <div className="max-container">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-4">350+ Businesses · $45.7M+ Tracked Revenue</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.05] text-balance">We build outbound that <span className="text-ember-500">compounds.</span></h2>
            <p className="mt-5 text-base text-white/55 max-w-xl mx-auto">Every result below is from a named client engagement.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1 }}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden flex flex-col"
              >
                {/* Top: metric + stars + quote */}
                <div className="p-7 md:p-8">
                  <div className="flex items-baseline gap-2 mb-4 flex-wrap">
                    <p className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none">{t.metric}</p>
                    <p className="text-sm text-white/40 font-medium">/ {t.metricLabel}</p>
                  </div>
                  <div className="text-ember-500 text-sm mb-4 tracking-widest">{"★★★★★"}</div>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                </div>

                {/* Big customer image */}
                <div className="relative aspect-[4/5] bg-white/[0.02] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Name + role */}
                <div className="px-7 md:px-8 py-5 border-t border-white/[0.06]">
                  <p className="text-base font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-white/55">{t.role}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button onClick={scrollToForm} className="btn-primary-dark-red mx-auto">
              See If You Qualify
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="pt-16 pb-0 section-padding border-t border-white/[0.04]">
        <div className="max-container max-w-2xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-3">Your Questions Answered</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Questions Serious Operators Ask</h2>
          </div>
          <div className="space-y-3">{FAQS.map((faq, i) => (<FAQItem key={i} q={faq.q} a={faq.a} />))}</div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="pt-6 pb-16 section-padding">
        <div className="max-container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-surface-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,48,0.16)_0%,_transparent_70%)]" />
            <div className="relative px-8 py-14 md:px-14">
              <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-4">Performance Guaranteed</p>
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight text-balance">
                Stop Sending Messages.{" "}
                <span className="text-ember-500">Start Owning Your Industry.</span>
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto leading-relaxed">350+ founders have made the switch from cold outreach to authority + outreach. 20+ qualified meetings every month, guaranteed. Or you don&apos;t pay.</p>

              <button onClick={scrollToForm} className="btn-primary-dark-red mt-8 inline-flex text-base">
                See If You Qualify
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-white/25">
                <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> 20+ Meetings Guaranteed</span>
                <a href="https://www.trustpilot.com/review/novadatech.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/50 transition-colors"><Star className="w-3.5 h-3.5" /><span className="underline underline-offset-2 decoration-white/20">5.0{"★"} Trustpilot</span></a>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" /> Written Guarantee</span>
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> 350+ Businesses</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <StickyCtaBar />
      <div className="h-16 sm:h-0" />
    </div>
  );
}
