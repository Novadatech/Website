"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, Shield, Star, TrendingUp, Users,
  Clock, AlertCircle, ChevronDown, ArrowRight,
  ChevronLeft, ChevronRight, Play, Video, Send, CalendarCheck
} from "lucide-react";
import Link from "next/link";
import NovadaLogo from "@/components/NovadaLogo";
import HeroTrustBar from "@/components/HeroTrustBar";

function scrollToForm() {
  // Form was removed from this page; route the CTA to the dedicated booking page.
  window.location.assign("/book-call");
}

// ─── Data ───────────────────────────────────────────────────────────────────


const DIFFERENTIATION = [
  {
    label: "Payment Model",
    agency: "Monthly retainer",
    leadgen: "Pay-per-lead",
    novada: "Performance guaranteed",
  },
  {
    label: "What You Get",
    agency: "Reports & dashboards",
    leadgen: "Raw lead data",
    novada: "Booked appointments + system",
  },
  {
    label: "Performance Guarantee",
    agency: "None",
    leadgen: "None",
    novada: "20+ appointments/mo or you don't pay",
  },
  {
    label: "Authority Building",
    agency: "Optional add-on",
    leadgen: "Not included",
    novada: "Built into the system",
  },
  {
    label: "Asset Ownership",
    agency: "Theirs",
    leadgen: "Theirs",
    novada: "Yours — installed in your business",
  },
  {
    label: "Time to Pipeline",
    agency: "60–90 days",
    leadgen: "Variable",
    novada: "Live in 14 days",
  },
];

const TESTIMONIALS = [
  {
    metric: "$91K/mo",
    metricLabel: "monthly revenue",
    quote: "We went from $42K to $91K monthly in under 60 days. The pipeline became predictable for the first time — we could forecast and hire with confidence.",
    name: "Josh",
    role: "Director, Maxicare Plus",
    avatar: "/testimonials/josh-maxicare.jpg",
  },
  {
    metric: "4 clients",
    metricLabel: "in first 45 days",
    quote: "We'd been burned by two agencies before. Growth Infrastructure was different — it was a system, not a service. 4 new retainer clients in the first 45 days.",
    name: "Uche",
    role: "Founder, The Morning Star Community Services",
    avatar: "/testimonials/uche-morningstar.jpg",
  },
  {
    metric: "28% → 60%",
    metricLabel: "discovery call close rate",
    quote: "Discovery call conversion jumped from 28% to over 60%. The authority content meant prospects arrived already sold on us — we just confirmed fit.",
    name: "Malkin",
    role: "Founder, Support24",
    avatar: "/testimonials/malkin-support24.jpg",
  },
  {
    metric: "6 months",
    metricLabel: "of meetings in month one",
    quote: "More qualified appointments in month one than in the previous six months combined. The infrastructure ran on its own — I went back to delivery.",
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
    q: "What counts as a 'qualified appointment'?",
    a: "A qualified appointment is with a decision-maker who fits your ideal client profile, has budget for your offer, and has confirmed interest in your service. The criteria is agreed and signed off with you before activation — not invented after the fact. If it doesn't meet the criteria, it doesn't count toward the 20+.",
  },
  {
    q: "What does the guarantee actually mean?",
    a: "If we don't deliver 20+ qualified appointments in any given month, you don't pay us for that month. The guarantee is written into the agreement — not a marketing line. We absorb the risk, not you.",
  },
  {
    q: "How is this different from a marketing agency?",
    a: "Agencies sell campaigns — you pay every month and the moment you stop, the leads stop. Growth Infrastructure is a system installed into your business. It produces appointments daily, builds an authority asset you own, and is engineered to compound. You're buying a permanent capability, not renting attention.",
  },
  {
    q: "Why 20+ appointments specifically?",
    a: "20+ qualified appointments per month is the threshold where most premium-ticket service businesses scale predictably. It's enough volume to forecast revenue, hire confidently, and turn growth into a system rather than a guess. Less than that and your pipeline is fragile; more than that requires deeper sales infrastructure first.",
  },
  {
    q: "How long until I see the first appointments?",
    a: "The infrastructure is fully live within 14 days of activation. First qualified appointments typically land on your calendar inside that window, with the full 20+/month target hit by the end of month one. We move fast because the system is already proven — we just install it into your specific business.",
  },
  {
    q: "Will I have to be on every call?",
    a: "Only if you want to be. The system includes appointment booking, qualification, and pre-call education. Some clients want every call. Others have us route appointments directly to a closer. Both work — it's your business, your choice.",
  },
  {
    q: "What if I've been burned by agencies before?",
    a: "Most of our partners have. That's exactly why this is a guaranteed performance offer with the infrastructure owned by you. You can't be burned by a system that's installed in your business and a guarantee that says you don't pay if results don't show up.",
  },
  {
    q: "Who is this NOT for?",
    a: "If your offer is under $3K, if you don't have a deliverable service ready, or if you're looking for a magic-button solution that requires zero involvement — this isn't the right fit. We're selective because the guarantee only works when the underlying business is ready to scale.",
  },
];

const QUALIFIES = [
  "You sell a high-value service or product ($3K+)",
  "You want 20+ qualified appointments filling your calendar every month",
  "You're ready to install a system, not hire another vendor",
];

const NOT_FOR = [
  "Your offer is under $3K or not yet validated",
  "You're looking for a quick fix or a magic-button solution",
  "You don't have capacity to handle 20+ qualified appointments monthly",
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
        <motion.button onClick={prev} animate={{ boxShadow: ["0 0 0px rgba(255,90,48,0)", "0 0 16px rgba(255,90,48,0.4)", "0 0 0px rgba(255,90,48,0)"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} whileTap={{ scale: 0.93 }} className="w-12 h-12 rounded-full bg-zinc-900/90 border border-ember-500/35 flex items-center justify-center text-ember-500" aria-label="Previous"><ChevronLeft className="w-6 h-6" /></motion.button>
        <div className="flex items-center gap-2">
          {VIDEO_TESTIMONIALS.map((_, i) => (<button key={i} onClick={() => goTo(i, i > current ? 1 : -1)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-ember-500" : "w-2 bg-white/20"}`} aria-label={`Go to video ${i + 1}`} />))}
        </div>
        <motion.button onClick={next} animate={{ boxShadow: ["0 0 0px rgba(255,90,48,0)", "0 0 24px rgba(255,90,48,0.6)", "0 0 0px rgba(255,90,48,0)"] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} whileTap={{ scale: 0.93 }} className="w-12 h-12 rounded-full bg-ember-500/15 border border-ember-500/60 flex items-center justify-center text-ember-500" aria-label="Next"><ChevronRight className="w-6 h-6" /></motion.button>
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
              <p className="text-sm font-semibold text-white">20+ qualified appointments every month</p>
              <p className="text-xs text-white/50">Guaranteed. Or you don&apos;t pay.</p>
            </div>
            <button onClick={scrollToForm} className="btn-primary text-sm py-3 px-6 w-full sm:w-auto">
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
export default function GrowthInfrastructurePage() {
return (
    <>
      {/* ── Minimal sticky header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-950/95 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-container section-padding">
          <div className="flex items-center justify-between h-20">
            <Link href="/growth-infrastructure" className="flex items-center">
              <NovadaLogo variant="light" className="h-12 w-auto" />
            </Link>
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
            <span className="text-sm text-ember-500 font-medium">Growth Infrastructure&trade; — Performance Guaranteed</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-balance max-w-4xl mx-auto">
            Get{" "}
            <span className="gradient-text">20+ Qualified Appointments</span>{" "}Every Month — Guaranteed Or You Don&apos;t Pay.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            We install a complete client acquisition infrastructure into your business — outbound system, authority video content, and appointment booking — designed to generate consistent pipeline in as little as 14 days.
          </motion.p>

          {/* STANDALONE TRUST BAR — prominent social proof above the CTA so it
              registers in the 3-second cold-traffic window and primes the click. */}
          <HeroTrustBar className="mt-7" />

          {/* ABOVE-THE-FOLD CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-6">
            <button onClick={scrollToForm} className="btn-primary text-base md:text-lg px-10 py-4">
              See If You Qualify
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── VSL with duration label + presenter identity ── */}
      <section className="section-padding pt-8 pb-24 md:pb-32">
        <div className="max-container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
            <div className="flex items-center justify-center gap-2 mb-3 text-sm text-white/50">
              <Play className="w-3.5 h-3.5 text-ember-500" />
              <span>Watch the 2-min overview</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl" style={{ paddingBottom: "56.25%" }}>
              <iframe src="https://www.youtube.com/embed/-mQwJS3ZCBg?autoplay=1&mute=1&rel=0" title="Growth Infrastructure — How It Works" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
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



      {/* ── Video Testimonials (early trust) ── */}
      <section className="section-padding pb-24 md:pb-32">
        <div className="max-container">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-3">Real Operators · Real Results</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Hear From Businesses Scaling Using Our System</h2>
          </div>
          <VideoSlider />
        </div>
      </section>

      {/* ── What You Walk Away With (featured + tile grid) ── */}
      <section className="section-padding py-24 md:py-32">
        <div className="max-container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-3">What You Walk Away With</p>
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">Inside The Growth Infrastructure Partnership</h2>
            <p className="mt-4 text-base text-white/70 max-w-2xl mx-auto leading-relaxed">20+ qualified appointments every month. Authority content + outreach + booking — built into your business, yours to keep.</p>
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
                  <p className="text-xs uppercase tracking-[0.18em] text-ember-500/85 font-semibold">The Guarantee</p>
                </div>
                <p className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-none">20+</p>
                <p className="mt-3 text-lg text-white/80 font-medium leading-snug">qualified appointments every month</p>
              </div>
              <div className="md:col-span-3 md:border-l md:border-white/[0.10] md:pl-10">
                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-4">Predictable pipeline. Written guarantee. Yours to keep.</h3>
                <p className="text-base text-white/75 leading-relaxed">Authority + outreach + booking infrastructure installed into your business. We run it for you. You own it forever. If we don't deliver — you don't pay.</p>
              </div>
            </div>
          </motion.div>

          {/* Supporting tiles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Video, title: "Authority Video Engine", desc: "4–6 short videos per month featuring you. Pre-sells expertise across LinkedIn, YouTube and shorts before outreach lands." },
              { icon: Send, title: "Done-For-You Outreach", desc: "Daily targeted outreach to ICP-matched prospects. Sequences trained on your voice. Reply handling fully included." },
              { icon: CalendarCheck, title: "Pre-Qualified Bookings", desc: "Only decision-makers with budget and fit hit your calendar. Pre-sold before the call ever starts." },
              { icon: TrendingUp, title: "Complete Infrastructure", desc: "CRM, pipeline and automation built and configured. Visibility into every stage. Yours to keep forever." },
              { icon: Shield, title: "Performance Guarantee", desc: "20+ qualified appointments every month — or you don't pay. Written into your agreement, not a marketing line." },
              { icon: Users, title: "Built. Run. Owned.", desc: "Built into your business, run for you, owned by you. Not held hostage by an agency. Profile, content, sequences — all yours." }
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
              See If You Qualify
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
              From application to <span className="text-ember-500">live infrastructure.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Dashed connector line behind icons — desktop only */}
            <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] border-t border-dashed border-ember-500/40" />

            <div className="grid md:grid-cols-3 gap-y-12 md:gap-x-6">
              {[
              { icon: Shield, days: "Days 1 – 4", title: "Authority + plan.", desc: "Profile rewrite, content calendar, ICP definition. Authority assets ready before week one ends." },
              { icon: Send, days: "Days 5 – 10", title: "Build + launch.", desc: "Outbound sequences, reply-handling flows and CRM infrastructure built on our platform. Authority content starts publishing." },
              { icon: CalendarCheck, days: "Days 11 – 14", title: "Meetings booked.", desc: "Outreach scales. Pre-qualified, decision-maker appointments land on your calendar inside the 14-day window." }
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
              See If You Qualify
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="mt-5 text-xs text-white/40 italic max-w-md mx-auto">Then we keep optimising every month so your calendar stays at 20+ qualified appointments.</p>
          </div>
        </div>
      </section>





      {/* ── Why This Isn't Another Agency (Differentiation) ── */}
      <section className="section-padding py-24 md:py-32 border-t border-white/[0.04]">
        <div className="max-container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-3">Why This Isn&apos;t Another Agency</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              The Difference Between{" "}
              <span className="gradient-text">A Service</span> and{" "}
              <span className="gradient-text">A System</span>
            </h2>
            <p className="mt-4 text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
              Agencies rent you attention. Lead-gen tools sell you data. Novada Tech installs a complete acquisition system into your business — and guarantees it performs.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
            {/* Header */}
            <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/[0.06]">
              <div className="p-4 col-span-1" />
              <div className="p-4 text-center"><p className="text-xs md:text-sm font-medium text-white/55">Marketing Agency</p></div>
              <div className="p-4 text-center"><p className="text-xs md:text-sm font-medium text-white/55">Lead-Gen Tool</p></div>
              <div className="p-4 text-center bg-ember-500/[0.05] border-l border-ember-500/15">
                <p className="text-xs md:text-sm font-semibold text-ember-500">Novada Tech</p>
              </div>
            </div>
            {DIFFERENTIATION.map((row, i) => (
              <div key={i} className={`grid grid-cols-4 border-b border-white/[0.04] last:border-0 ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}>
                <div className="p-4 flex items-center"><span className="text-xs md:text-sm text-white/60">{row.label}</span></div>
                <div className="p-4 flex items-center justify-center text-center"><span className="text-xs text-white/45">{row.agency}</span></div>
                <div className="p-4 flex items-center justify-center text-center"><span className="text-xs text-white/45">{row.leadgen}</span></div>
                <div className="p-4 flex items-center justify-center text-center bg-ember-500/[0.04] border-l border-ember-500/10"><span className="text-xs text-ember-500/90 font-medium">{row.novada}</span></div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button onClick={scrollToForm} className="btn-primary mx-auto">
              See If You Qualify
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Written Testimonials ── */}
      <section className="section-padding py-24 md:py-32 border-t border-white/[0.04]">
        <div className="max-container">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-4">What Our Partners Say</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">350+ Businesses Have Installed Our Growth Infrastructure</h2>
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
            <button onClick={scrollToForm} className="btn-primary mt-6 mx-auto">
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

      {/* ── Final CTA ── */}
      <section className="pt-6 pb-16 section-padding">
        <div className="max-container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-surface-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,48,0.1)_0%,_transparent_70%)]" />
            <div className="relative px-8 py-14 md:px-14">
              <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-4">Performance Guaranteed</p>
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight text-balance">
                Your Pipeline Doesn&apos;t Need More Effort.{" "}
                <span className="gradient-text">It Needs Infrastructure.</span>
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto leading-relaxed">350+ businesses have made the switch from campaigns to infrastructure. 20+ qualified appointments every month, guaranteed. Or you don&apos;t pay.</p>

              <button onClick={scrollToForm} className="btn-primary mt-8 inline-flex text-base">
                See If You Qualify
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-white/25">
                <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> 20+ Appointments Guaranteed</span>
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
    </>
  );
}
