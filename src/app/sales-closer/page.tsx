"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, Shield, Star, TrendingUp, Users,
  Clock, AlertCircle, ChevronDown, ArrowRight,
  ChevronLeft, ChevronRight, Zap, Play, Phone, Target
} from "lucide-react";
import Link from "next/link";
import NovadaLogo from "@/components/NovadaLogo";

function scrollToForm() {
  // Form was removed from this page; route the CTA to the dedicated booking page.
  window.location.assign("/book-call");
}

// ─── Data ───────────────────────────────────────────────────────────────────


// TODO: Replace placeholder avatar URLs with actual client photos
const TESTIMONIALS = [
  {
    metric: "$91K/mo",
    metricLabel: "monthly revenue",
    quote: "$42K to $91K monthly revenue in under 60 days. The closer was on calls within the first week and closed 3 deals in the first 10 days.",
    name: "Josh",
    role: "Director, Maxicare Plus",
    avatar: "/testimonials/josh-maxicare.jpg",
  },
  {
    metric: "4 clients",
    metricLabel: "in first 45 days",
    quote: "We closed four new retainer clients in the first 45 days. The closer understood our offer better than we expected — prospects were signing before the call was over.",
    name: "Uche",
    role: "Founder, The Morning Star Community Services",
    avatar: "/testimonials/uche-morningstar.jpg",
  },
  {
    metric: "28% → 60%",
    metricLabel: "discovery call close rate",
    quote: "Discovery call conversion jumped from 28% to over 60%. The closer pre-handles objections and closes with a structure we never had before.",
    name: "Malkin",
    role: "Founder, Support24",
    avatar: "/testimonials/malkin-support24.jpg",
  },
  {
    metric: "6 months",
    metricLabel: "of meetings in month one",
    quote: "More clients closed in month one than the previous six months combined. The closer actually had to pause taking calls because we couldn't fulfil fast enough.",
    name: "Jessica",
    role: "Founder, Jessica Teds Coaching",
    avatar: "/testimonials/jessica-teds.jpg",
  },
];

const FAQS = [
  {
    q: "What does 'if we don't close, you don't pay' mean?",
    a: "It's a written performance guarantee. We place an expert closer into your business and they work your pipeline. If they don't close deals, you don't pay us. The risk is entirely on us \u2014 not on you.",
  },
  {
    q: "How quickly is the closer placed?",
    a: "Within 7 days. We match you with a vetted closer, train them on your offer, and have them taking calls within a week. Most businesses see their first closed deal within 14 days of placement.",
  },
  {
    q: "How do you vet your closers?",
    a: "Every closer in our network has a proven track record of closing high-ticket offers ($3K\u2013$50K+). They're trained on objection handling, consultative selling, and your specific industry before they take a single call.",
  },
  {
    q: "What if the closer doesn't fit my business?",
    a: "We replace them at no cost. Our guarantee covers the entire engagement \u2014 if we don't close deals for you, you don't pay. We absorb all the risk of a bad fit.",
  },
  {
    q: "How is this different from hiring a salesperson?",
    a: "Hiring takes months, costs $60K\u2013$120K+ in salary, and there's no guarantee they'll close. We place a proven closer in 7 days with zero upfront cost and a performance guarantee. If they don't close, you pay nothing.",
  },
  {
    q: "How is this different from Closers.io or other agencies?",
    a: "Most agencies charge $8K\u2013$18K upfront just to start recruiting \u2014 with no guarantee on results. We place a closer in 7 days, not months. And you only pay when deals are closed. No retainers, no setup fees, no risk.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "Service businesses selling high-ticket offers ($3K\u2013$50K+) who have qualified meetings but need an expert closer to convert them into revenue. If that's you, the call will confirm the fit.",
  },
  {
    q: "Do I still need to generate leads?",
    a: "You bring the qualified meetings \u2014 we bring the closer who converts them into signed deals. If you need help generating meetings too, we can discuss that on the call.",
  },
];

const VIDEO_TESTIMONIALS = [
  { id: "CBL83P7OYgI", title: "Nicole \u2014 Morasco Media Services", name: "Nicole", company: "Founder, Morasco Media Services" },
  { id: "upgMW2nwwpk", title: "Tony \u2014 South Line Media", name: "Tony", company: "Founder, South Line Media" },
  { id: "G44OKPVh3Uk", title: "Michael \u2014 Aaronson Investigations", name: "Michael", company: "Founder, Aaronson Investigations" },
  { id: "Ef4YTXOnCP0", title: "Jeff \u2014 Vertical Axis", name: "Jeff", company: "Founder, Vertical Axis" },
  { id: "0qabR5mfAfQ", title: "Anthony \u2014 Ripple Clarke", name: "Uche", company: "Founder, Ripple Clarke" },
  { id: "JXEvONrDaOk", title: "Damian \u2014 Groundwork Ventures", name: "Damian", company: "Founder, Groundwork Ventures" },
  { id: "O3HUPQyflH8", title: "Jack \u2014 House Valley", name: "Jack", company: "Founder, House Valley" },
  { id: "w5iJNOADdXU", title: "Nate \u2014 Larsky Tach and Feed", name: "Malkin", company: "Founder, Larsky Tach and Feed" },
];

const TRUST_ITEMS: { icon: typeof Shield; label: string; link?: string; micro?: string }[] = [
  { icon: Zap, label: "Closer Placed in 7 Days", micro: "Written into your agreement" },
  { icon: Shield, label: "Don\u2019t Close, Don\u2019t Pay" },
  { icon: Star, label: "Rated 4.9\u2605 on Trustpilot", link: "https://www.trustpilot.com/review/novadatech.com.au" },
  { icon: Clock, label: "Takes Under 2 Minutes" },
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
        <motion.button onClick={prev} animate={{ boxShadow: ["0 0 0px rgba(255,90,48,0)", "0 0 16px rgba(255,90,48,0.4)", "0 0 0px rgba(255,90,48,0)"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.93 }} className="hidden sm:flex absolute left-0 top-[42%] -translate-y-1/2 w-12 h-12 rounded-full bg-zinc-900/90 border border-ember-500/35 items-center justify-center text-ember-500 hover:border-ember-500/80 hover:bg-zinc-800 transition-colors duration-200 z-10" aria-label="Previous"><ChevronLeft className="w-6 h-6" /></motion.button>
        <motion.button onClick={next} animate={{ boxShadow: ["0 0 0px rgba(255,90,48,0)", "0 0 24px rgba(255,90,48,0.6)", "0 0 0px rgba(255,90,48,0)"] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.93 }} className="hidden sm:flex absolute right-0 top-[42%] -translate-y-1/2 w-12 h-12 rounded-full bg-ember-500/15 border border-ember-500/60 items-center justify-center text-ember-500 hover:bg-ember-500/25 hover:border-ember-500 transition-colors duration-200 z-10" aria-label="Next"><ChevronRight className="w-6 h-6" /></motion.button>
        <div className="sm:px-16">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={video.id} initial={{ opacity: 0, x: direction * 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: direction * -40 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="glass-card gradient-border p-3">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <iframe src={`https://www.youtube.com/embed/${video.id}`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" style={{ border: "none" }} />
              </div>
              <div className="flex items-center gap-3 mt-3 px-2 pb-1">
                <div className="w-7 h-7 rounded-full bg-ember-500/20 flex items-center justify-center flex-shrink-0"><span className="text-[10px] font-bold text-ember-400">{video.name[0]}</span></div>
                <div><p className="text-xs font-semibold text-white/70">{video.name}</p><p className="text-[11px] text-white/35">{video.company}</p></div>
                <div className="ml-auto text-ember-500 text-xs flex-shrink-0">{"\u2605\u2605\u2605\u2605\u2605"}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex sm:hidden items-center justify-center gap-4 mt-4">
        <motion.button onClick={prev} animate={{ boxShadow: ["0 0 0px rgba(255,90,48,0)", "0 0 16px rgba(255,90,48,0.4)", "0 0 0px rgba(255,90,48,0)"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} whileTap={{ scale: 0.93 }} className="w-12 h-12 rounded-full bg-zinc-900/90 border border-ember-500/35 flex items-center justify-center text-ember-500" aria-label="Previous"><ChevronLeft className="w-6 h-6" /></motion.button>
        <div className="flex items-center gap-2">{VIDEO_TESTIMONIALS.map((_, i) => (<button key={i} onClick={() => goTo(i, i > current ? 1 : -1)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-ember-500" : "w-2 bg-white/20"}`} aria-label={`Go to video ${i + 1}`} />))}</div>
        <motion.button onClick={next} animate={{ boxShadow: ["0 0 0px rgba(255,90,48,0)", "0 0 24px rgba(255,90,48,0.6)", "0 0 0px rgba(255,90,48,0)"] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} whileTap={{ scale: 0.93 }} className="w-12 h-12 rounded-full bg-ember-500/15 border border-ember-500/60 flex items-center justify-center text-ember-500" aria-label="Next"><ChevronRight className="w-6 h-6" /></motion.button>
      </div>
      <div className="hidden sm:flex items-center justify-center gap-2 mt-5">{VIDEO_TESTIMONIALS.map((_, i) => (<button key={i} onClick={() => goTo(i, i > current ? 1 : -1)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-ember-500" : "w-2 bg-white/20 hover:bg-white/40"}`} aria-label={`Go to video ${i + 1}`} />))}</div>
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
              <p className="text-sm font-semibold text-white">Expert closer placed in 7 days</p>
              <p className="text-xs text-white/50">Don&apos;t close, don&apos;t pay. Written guarantee.</p>
            </div>
            <button onClick={scrollToForm} className="btn-primary text-sm py-3 px-6 w-full sm:w-auto">
              Get My Expert Closer
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function SalesCloserPage() {
return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-950/95 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-container section-padding">
          <div className="flex items-center justify-between h-20">
            <Link href="/sales-closer" className="flex items-center"><NovadaLogo variant="light" className="h-12 w-auto" /></Link>
            <button onClick={scrollToForm} className="btn-primary text-sm py-2.5 px-5">
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>
      <div className="h-20" />

      {/* ── Hero + Above-Fold CTA ── */}
      <section className="relative pt-6 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-surface-950 to-surface-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,90,48,0.08)_0%,_transparent_60%)]" />
        <div className="relative max-container section-padding text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ember-500/20 bg-ember-500/5 mb-4">
            <span className="w-2 h-2 rounded-full bg-ember-500 animate-pulse-slow" />
            <span className="text-sm text-ember-500 font-medium">Expert Closer Placed in 7 Days — Guaranteed</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-balance max-w-4xl mx-auto">
            We Place an Expert{" "}<span className="gradient-text">Sales Closer</span>{" "}Into Your Business Within 7 Days. If We Don&apos;t Close You Don&apos;t Pay
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            An expert sales closer in your business within 7 days. Closing deals on your pipeline. If they don&apos;t close, you don&apos;t pay us a cent. The risk is entirely on us.
          </motion.p>

          {/* ABOVE-THE-FOLD CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-6">
            <button onClick={scrollToForm} className="btn-primary text-base md:text-lg px-10 py-4">
              Get My Expert Closer
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="mt-3 flex items-center justify-center gap-4 text-xs text-white/35 flex-wrap">
              <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-ember-500/60" /> Placed in 7 days</span>
              <span className="text-white/15">|</span>
              <a href="https://www.trustpilot.com/review/novadatech.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/50 transition-colors">
                <span className="text-ember-500 tracking-tight">{"\u2605\u2605\u2605\u2605\u2605"}</span>
                <span className="underline underline-offset-2 decoration-white/20">4.9 on Trustpilot</span>
              </a>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-ember-500/60" /> Don&apos;t close, don&apos;t pay</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VSL with duration label + presenter identity ── */}
      <section className="section-padding pt-6 pb-0">
        <div className="max-container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
            <div className="flex items-center justify-center gap-2 mb-3 text-sm text-white/50">
              <Play className="w-3.5 h-3.5 text-ember-500" />
              <span>Watch the 2-min overview</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl" style={{ paddingBottom: "56.25%" }}>
              <iframe src="https://www.youtube.com/embed/w6atSnPDjJw?autoplay=1&mute=1&rel=0" title="How Novada Tech Places Expert Sales Closers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-white/40">
              <div className="w-5 h-5 rounded-full bg-ember-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[8px] font-bold text-ember-400">S</span>
              </div>
              <span>Presented by <span className="text-white/60 font-medium">Sarah</span> — Novada Tech</span>
            </div>
          </motion.div>
        </div>
      </section>

            {/* ── STATS BAR ── */}
      <section className="section-padding pb-24 md:pb-32">
        <div className="max-container max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 text-center">
            {[
              { num: "$45.7M+", label: "Tracked Pipeline Generated*" },
              { num: "85.4%", label: "Qualified Reply Rate" },
              { num: "14 days", label: "Avg Time To First Meeting" },
              { num: "$0", label: "Ad Spend Required" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <p className="text-3xl md:text-5xl font-bold text-ember-500 tracking-tight leading-none">{s.num}</p>
                <p className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.18em] text-white/45 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-center text-[11px] text-white/30 italic">*Estimated lifetime pipeline across live and historical clients. An estimate, not a guarantee.</p>
        </div>
      </section>



      {/* ── Video Testimonials — moved up for early trust ── */}
      <section className="section-padding py-12">
        <div className="max-container">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-3">Client Results</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Our Closers Are Closing Deals. Every Week.</h2>
          </div>
          <VideoSlider />
        </div>
      </section>

      {/* ── What You Walk Away With (featured + tile grid) ── */}
      <section className="section-padding py-24 md:py-32">
        <div className="max-container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-3">What You Get</p>
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">Inside The Closer Placement</h2>
            <p className="mt-4 text-base text-white/70 max-w-2xl mx-auto leading-relaxed">Expert closer placed in your business in 7 days. Trained on your offer. Closing deals while you stay focused on delivery.</p>
          </div>

          {/* Featured outcome */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl border border-ember-500/25 bg-gradient-to-br from-ember-500/[0.08] via-ember-500/[0.02] to-transparent p-8 md:p-10 mb-6 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-ember-500/10 blur-3xl pointer-events-none" />
            <div className="relative grid md:grid-cols-5 gap-8 md:gap-10 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-ember-500/15 border border-ember-500/35 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-ember-500" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.18em] text-ember-500/85 font-semibold">The Placement</p>
                </div>
                <p className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-none">7 days</p>
                <p className="mt-3 text-lg text-white/80 font-medium leading-snug">to expert closer in your business</p>
              </div>
              <div className="md:col-span-3 md:border-l md:border-white/[0.10] md:pl-10">
                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-4">Expert sales closer trained on your offer.</h3>
                <p className="text-base text-white/75 leading-relaxed">Taking every qualified call, pre-handling objections, closing deals. You stay focused on delivery. Pay only when deals close.</p>
              </div>
            </div>
          </motion.div>

          {/* Supporting tiles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Phone, title: "Off The Phone", desc: "Your closer takes every qualified conversation. You stop being the bottleneck. Time goes back to delivery and growth." },
              { icon: Shield, title: "Pay On Close", desc: "Performance guaranteed. You only pay when deals are signed. If the closer doesn't perform, you owe us nothing." },
              { icon: Target, title: "Trained On Your Offer", desc: "Closer ramped on your service, your ICP, your objection patterns. Closing from day one — not week six." },
              { icon: TrendingUp, title: "Pipeline Conversion", desc: "Discovery-call conversion rates double or triple. Same pipeline, more deals closed, more revenue collected." },
              { icon: Clock, title: "Placed In 7 Days", desc: "From signed agreement to closer ready in your business in under 7 days. No 90-day ramp. No SDR recruitment cycle." },
              { icon: CheckCircle, title: "Sales Cycle Owned", desc: "Pre-handles objections, structures the close, follows up — every step of the cycle handled professionally and consistently." }
            ].map((o, i) => (
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
            <button onClick={scrollToForm} className="btn-primary mx-auto">
              Get Your Closer
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>



            {/* ── HOW IT WORKS (horizontal connected timeline) ── */}
      <section className="section-padding py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,48,0.06)_0%,_transparent_60%)] pointer-events-none" />
        <div className="relative max-container max-w-5xl">
          <div className="mb-14 md:mb-20 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-4">How It Works</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.05] text-balance">
              From application to <span className="text-ember-500">expert closer placed.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Dashed connector line behind icons — desktop only */}
            <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] border-t border-dashed border-ember-500/40" />

            <div className="grid md:grid-cols-3 gap-y-12 md:gap-x-6">
              {[
              { icon: Shield, days: "Days 1 – 3", title: "Discovery + onboarding.", desc: "Closer ramped on your offer, ICP and objection patterns. Full discovery of your sales cycle." },
              { icon: Phone, days: "Days 4 – 7", title: "Closer placed.", desc: "Your closer starts taking every qualified call. You stop being the bottleneck. You go back to delivery." },
              { icon: TrendingUp, days: "Day 7 +", title: "Deals close.", desc: "Discovery-call conversion doubles. Same pipeline, more closed revenue. You only pay when deals are signed." }
              ].map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="relative text-center px-4">
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
            <button onClick={scrollToForm} className="btn-primary mx-auto">
              Get Your Closer
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="mt-5 text-xs text-white/40 italic max-w-md mx-auto">Then your closer keeps closing — month over month, deal over deal.</p>
          </div>
        </div>
      </section>




      {/* ── Is This Right for You? — condensed to 3 bullets ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-3">Is This Right for You?</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">We Only Place Closers for Businesses That Qualify</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card gradient-border p-7">
              <h3 className="text-base font-semibold text-emerald-400 mb-5 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> We Can Place a Closer If You...</h3>
              <div className="space-y-3">
                {[
                  "Sell a high-value service or product ($3K\u2013$50K+)",
                  "Have qualified meetings but need someone to close them into revenue",
                  "Want an expert closer in your business within 7 days — not months",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" /><span className="text-base text-white/80 leading-relaxed">{item}</span></div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-7 border border-white/[0.04]">
              <h3 className="text-base font-semibold text-white/50 mb-5 flex items-center gap-2"><AlertCircle className="w-4 h-4 text-red-400/60" /> A Closer Won&apos;t Work If You...</h3>
              <div className="space-y-3">
                {[
                  "Don't have a validated offer or deliverable product",
                  "Don't have qualified meetings coming in for the closer to work",
                  "Aren't willing to share your sales process and pipeline data",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3"><div className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center"><div className="w-3 h-[2px] bg-red-400/50 rounded-full" /></div><span className="text-base text-white/80 leading-relaxed">{item}</span></div>
                ))}
              </div>
              <p className="mt-6 text-base text-white/80 leading-relaxed">If the left column describes you — fill in the form above. We&apos;ll place an expert closer within 7 days, guaranteed.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials — 4 strongest with photos ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-4">What Our Partners Say</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">350+ Businesses. Expert Closers. Real Revenue.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1 }}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden flex flex-col h-full"
              >
                <div className="p-7 md:p-8">
                  <div className="flex items-baseline gap-2 mb-4 flex-wrap">
                    <p className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none">{t.metric}</p>
                    <p className="text-sm text-white/40 font-medium">/ {t.metricLabel}</p>
                  </div>
                  <div className="text-ember-500 text-sm mb-4 tracking-widest">{"\u2605\u2605\u2605\u2605\u2605"}</div>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div className="relative aspect-[4/5] bg-white/[0.02] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="px-7 md:px-8 py-5 border-t border-white/[0.06]">
                  <p className="text-base font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-white/55">{t.role}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button onClick={scrollToForm} className="btn-primary mt-6 mx-auto">Get My Expert Closer<ArrowRight className="w-4 h-4" /></button>
            <div className="mt-5 flex items-center justify-center gap-5 text-xs text-white/35 flex-wrap">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-ember-500/60" /> Don&apos;t close, don&apos;t pay</span>
              <span className="text-white/15">|</span>
              <a href="https://www.trustpilot.com/review/novadatech.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/50 transition-colors">
                <span className="text-ember-500 tracking-tight">{"\u2605\u2605\u2605\u2605\u2605"}</span>
                <span className="underline underline-offset-2 decoration-white/20">4.9 on Trustpilot</span>
              </a>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-ember-500/60" /> Placed in 7 days</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-2xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-3">Questions</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">{FAQS.map((faq, i) => (<FAQItem key={i} q={faq.q} a={faq.a} />))}</div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-surface-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,48,0.1)_0%,_transparent_70%)]" />
            <div className="relative px-8 py-14 md:px-14">
              <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-4">Performance Guaranteed</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight text-balance">Expert Closer. 7 Days. Deals Closed. Or You Don&apos;t Pay.</h2>
              <p className="mt-4 text-white/80 text-lg max-w-lg mx-auto leading-relaxed">350+ businesses already have an expert closer handling their sales. You&apos;re one form away from joining them.</p>
              <button onClick={scrollToForm} className="btn-primary mt-8 inline-flex text-base">Get My Expert Closer<ArrowRight className="w-5 h-5" /></button>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-white/25">
                <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> Don&apos;t Close, Don&apos;t Pay</span>
                <a href="https://www.trustpilot.com/review/novadatech.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/50 transition-colors"><Star className="w-3.5 h-3.5" /><span className="underline underline-offset-2 decoration-white/20">4.9{"\u2605"} Trustpilot</span></a>
                <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5" /> Placed in 7 Days</span>
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> 350+ Businesses</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <StickyCtaBar />
      <div className="h-16 sm:h-0" />
    </>
  );
}
