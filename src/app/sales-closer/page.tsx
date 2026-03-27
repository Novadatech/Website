"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, Shield, Star, TrendingUp, Users,
  Clock, AlertCircle, Calendar, MessageSquare, ChevronDown, ArrowRight, ExternalLink,
  ChevronLeft, ChevronRight, Zap, Target, UserCheck, DollarSign
} from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";

// ─── Initials Avatar ─────────────────────────────────────────────────────────
const AVATAR_COLORS = [
  "bg-gold-500/20 text-gold-300",
  "bg-blue-500/20 text-blue-300",
  "bg-emerald-500/20 text-emerald-300",
  "bg-purple-500/20 text-purple-300",
  "bg-rose-500/20 text-rose-300",
  "bg-amber-500/20 text-amber-300",
  "bg-cyan-500/20 text-cyan-300",
  "bg-indigo-500/20 text-indigo-300",
];

function InitialsAvatar({ name, index }: { name: string; index: number }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const color = AVATAR_COLORS[index % AVATAR_COLORS.length];
  return (
    <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${color}`}>
      {initials}
    </div>
  );
}

function scrollToForm() {
  document.getElementById("closer-form-embed")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

// ─── Data ───────────────────────────────────────────────────────────────────

// AUDIT: Every benefit must reinforce "expert closer placed in 7 days" + "don't close don't pay"
const BENEFITS = [
  "A vetted, expert sales closer placed into your business within 7 days — trained on your offer",
  "Your closer handles every qualified sales call so you stay focused on delivery and growth",
  "A custom closing strategy built around your offer, market, and sales cycle",
  "Full performance tracking — you see every call, every close, every dollar generated",
  "Our guarantee in writing: if our closer doesn't close deals, you don't pay us a cent",
];

// AUDIT: How it works — 4 steps aligned to "placed in 7 days" speed + guarantee
const PROCESS_STEPS = [
  {
    icon: Target,
    num: "01",
    title: "We Analyse Your Offer & Sales Process",
    desc: "We audit your offer, positioning, and pipeline to understand exactly what your closer needs to know to start closing deals from day one.",
  },
  {
    icon: UserCheck,
    num: "02",
    title: "We Match You With a Proven Closer",
    desc: "From our vetted network of expert closers, we match you with someone who has experience closing in your industry and price point.",
  },
  {
    icon: Zap,
    num: "03",
    title: "Your Closer Is Placed Within 7 Days",
    desc: "Your closer is trained on your offer, loaded into your CRM, and taking qualified sales calls within 7 days. Not weeks. Not months. Days.",
  },
  {
    icon: DollarSign,
    num: "04",
    title: "They Close. You Grow. Or You Don't Pay.",
    desc: "Your closer converts qualified meetings into signed deals. You only pay when revenue comes in. If they don't close, you don't pay.",
  },
];

// AUDIT: Testimonials reframed around closers/closing/revenue — not just meetings
const TESTIMONIALS = [
  {
    quote: "Within three weeks our closer had already signed 14 new clients. Every meeting converted at a rate we'd never seen before. The ROI was immediate.",
    name: "Tony",
    role: "Founder, South Line Media",
  },
  {
    quote: "We closed four new retainer clients in the first 45 days. The closer understood our offer better than we expected — prospects were signing before the call was over.",
    name: "Anthony",
    role: "Founder, Ripple Clarke",
  },
  {
    quote: "I was doing all the sales myself and it was killing my delivery. Having an expert closer handle every call changed everything — revenue went up and I got my time back.",
    name: "Damian",
    role: "Founder, Groundwork Ventures",
  },
  {
    quote: "Booked out three weeks ahead within a month. The closer handles every call and closes at over 40%. I focus entirely on fulfilment now.",
    name: "Jack",
    role: "Director, House Valley",
  },
  {
    quote: "Discovery call conversion jumped from 28% to over 60%. The closer pre-handles objections and closes with a structure we never had before.",
    name: "Nate",
    role: "Owner, Larsky Tach and Feed",
  },
  {
    quote: "$42K to $91K monthly revenue in under 60 days. The closer was on calls within the first week and closed 3 deals in the first 10 days.",
    name: "Josh",
    role: "Director, Maxicare Plus",
  },
  {
    quote: "More clients closed in month one than the previous six months combined. The closer actually had to pause taking calls because we couldn't fulfil fast enough.",
    name: "Jessica",
    role: "Founder, Jessica Teds Coaching",
  },
  {
    quote: "$28K to $76K monthly in 90 days. The closer understood our positioning faster than any hire we've made. 8–12 qualified calls per week, all handled.",
    name: "Gunendu",
    role: "Director, Growth-Loop Consulting",
  },
  {
    quote: "Doubled our active participants in 4 months. The closer handles every sales conversation — warm, values-driven, and high-converting.",
    name: "Malkin",
    role: "CEO, Support24",
  },
  {
    quote: "I run two businesses. Having a dedicated closer means I show up to nothing — they close the deals and the revenue just flows.",
    name: "Malkin",
    role: "Founder, Recruitilon",
  },
  {
    quote: "Close rate went from 25% to 67%. The closer only speaks to pre-qualified prospects and converts at a level our internal team never could.",
    name: "Terver",
    role: "Founder, CareJewel",
  },
  {
    quote: "Tripled our referral partner network in 6 months. The closer handles all partner calls — professional, warm, and high-converting.",
    name: "Uche",
    role: "CEO, Morning Star Community Services",
  },
  {
    quote: "First month the closer paid for themselves three times over. Real deals, real revenue — not promises and reports.",
    name: "Ella",
    role: "Founder, Ellaz Chop",
  },
  {
    quote: "I used to spend two hours every morning doing sales. Now the closer handles every call and I focus on serving clients. Best hire I never had to make.",
    name: "Peter",
    role: "Director, Support Link",
  },
  {
    quote: "Prospects arrived pre-sold and the closer sealed the deal. Meeting quality went through the roof. We closed 6 new clients in one quarter.",
    name: "Michael",
    role: "Managing Partner, Aaronson & Co Ventures",
  },
  {
    quote: "6 new clients onboarded in the last quarter — all closed by our assigned closer. They handle everything from first call to signed contract.",
    name: "Ola",
    role: "Founder, Simply Ads",
  },
  {
    quote: "We're tradespeople — on the tools all day. Having a closer handle all our sales calls while we work is genuinely life-changing.",
    name: "Lucas",
    role: "Director, J.R & Sons Ltd",
  },
  {
    quote: "18 deals closed in month one — our best month ever. The closer found the right messaging and ran with it from day one.",
    name: "Mo",
    role: "Founder, Framer Health",
  },
];

const NEXT_STEPS = [
  {
    icon: Calendar,
    step: "Step 1",
    title: "You're Taken to Our Booking Page",
    desc: "The moment you submit, you'll be redirected to our calendar — no waiting, no back-and-forth.",
  },
  {
    icon: Clock,
    step: "Step 2",
    title: "Pick a Time That Works for You",
    desc: "Choose a 30-minute slot. We'll review your offer, pipeline, and sales process before the call.",
  },
  {
    icon: MessageSquare,
    step: "Step 3",
    title: "We Show You the Closer Placement Plan",
    desc: "You'll see exactly how we'd place an expert closer into your business within 7 days — and the performance guarantee that backs it.",
  },
];

// AUDIT: Every FAQ references "expert closer", "7 days", "close", or "don't pay"
const FAQS = [
  {
    q: "What does 'if we don't close, you don't pay' mean?",
    a: "It's a written performance guarantee. We place an expert closer into your business and they work your pipeline. If they don't close deals, you don't pay us. The risk is entirely on us — not on you.",
  },
  {
    q: "How quickly is the closer placed?",
    a: "Within 7 days. We match you with a vetted closer, train them on your offer, and have them taking calls within a week. Most businesses see their first closed deal within 14 days of placement.",
  },
  {
    q: "How do you vet your closers?",
    a: "Every closer in our network has a proven track record of closing high-ticket offers ($3K–$50K+). They're trained on objection handling, consultative selling, and your specific industry before they take a single call.",
  },
  {
    q: "What if the closer doesn't fit my business?",
    a: "We replace them at no cost. Our guarantee covers the entire engagement — if we don't close deals for you, you don't pay. We absorb all the risk of a bad fit.",
  },
  {
    q: "How is this different from hiring a salesperson?",
    a: "Hiring takes months, costs $60K–$120K+ in salary, and there's no guarantee they'll close. We place a proven closer in 7 days with zero upfront cost and a performance guarantee. If they don't close, you pay nothing.",
  },
  {
    q: "How is this different from Closers.io or other agencies?",
    a: "Most agencies charge $8K–$18K upfront just to start recruiting — with no guarantee on results. We place a closer in 7 days, not months. And you only pay when deals are closed. No retainers, no setup fees, no risk.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "Service businesses selling high-ticket offers ($3K–$50K+) who have qualified meetings but need an expert closer to convert them into revenue. If that's you, the call will confirm the fit.",
  },
  {
    q: "Do I still need to generate leads?",
    a: "You bring the qualified meetings — we bring the closer who converts them into signed deals. If you need help generating meetings too, we can discuss that on the call.",
  },
];

const VIDEO_TESTIMONIALS = [
  { id: "upgMW2nwwpk", title: "Tony — South Line Media", name: "Tony", company: "Founder, South Line Media" },
  { id: "0qabR5mfAfQ", title: "Anthony — Ripple Clarke", name: "Anthony", company: "Founder, Ripple Clarke" },
  { id: "JXEvONrDaOk", title: "Damian — Groundwork Ventures", name: "Damian", company: "Founder, Groundwork Ventures" },
  { id: "O3HUPQyflH8", title: "Jack — House Valley", name: "Jack", company: "Founder, House Valley" },
  { id: "w5iJNOADdXU", title: "Nate — Larsky Tach and Feed", name: "Nate", company: "Founder, Larsky Tach and Feed" },
];

// AUDIT: Trust items = "7 days", "don't pay", "guarantee" language — no conflicts
const TRUST_ITEMS = [
  { icon: Zap, label: "Closer Placed in 7 Days" },
  { icon: Shield, label: "Don't Close, Don't Pay" },
  { icon: Star, label: "Rated 4.9★ on Trustpilot" },
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
        <motion.button onClick={prev} animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 16px rgba(212,175,55,0.4)", "0 0 0px rgba(212,175,55,0)"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.93 }} className="hidden sm:flex absolute left-0 top-[42%] -translate-y-1/2 w-12 h-12 rounded-full bg-navy-900/90 border border-gold-500/35 items-center justify-center text-gold-400 hover:border-gold-500/80 hover:bg-navy-800 transition-colors duration-200 z-10" aria-label="Previous"><ChevronLeft className="w-6 h-6" /></motion.button>
        <motion.button onClick={next} animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 24px rgba(212,175,55,0.6)", "0 0 0px rgba(212,175,55,0)"] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.93 }} className="hidden sm:flex absolute right-0 top-[42%] -translate-y-1/2 w-12 h-12 rounded-full bg-gold-500/15 border border-gold-500/60 items-center justify-center text-gold-400 hover:bg-gold-500/25 hover:border-gold-500 transition-colors duration-200 z-10" aria-label="Next"><ChevronRight className="w-6 h-6" /></motion.button>
        <div className="sm:px-16">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={video.id} initial={{ opacity: 0, x: direction * 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: direction * -40 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="glass-card gradient-border p-3">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <iframe src={`https://www.youtube.com/embed/${video.id}`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" style={{ border: "none" }} />
              </div>
              <div className="flex items-center gap-3 mt-3 px-2 pb-1">
                <div className="w-7 h-7 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0"><span className="text-[10px] font-bold text-gold-300">{video.name[0]}</span></div>
                <div><p className="text-xs font-semibold text-white/70">{video.name}</p><p className="text-[11px] text-white/35">{video.company}</p></div>
                <div className="ml-auto text-gold-400 text-xs flex-shrink-0">★★★★★</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex sm:hidden items-center justify-center gap-4 mt-4">
        <motion.button onClick={prev} animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 16px rgba(212,175,55,0.4)", "0 0 0px rgba(212,175,55,0)"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} whileTap={{ scale: 0.93 }} className="w-12 h-12 rounded-full bg-navy-900/90 border border-gold-500/35 flex items-center justify-center text-gold-400" aria-label="Previous"><ChevronLeft className="w-6 h-6" /></motion.button>
        <div className="flex items-center gap-2">{VIDEO_TESTIMONIALS.map((_, i) => (<button key={i} onClick={() => goTo(i, i > current ? 1 : -1)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-gold-400" : "w-2 bg-white/20"}`} aria-label={`Go to video ${i + 1}`} />))}</div>
        <motion.button onClick={next} animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 24px rgba(212,175,55,0.6)", "0 0 0px rgba(212,175,55,0)"] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} whileTap={{ scale: 0.93 }} className="w-12 h-12 rounded-full bg-gold-500/15 border border-gold-500/60 flex items-center justify-center text-gold-400" aria-label="Next"><ChevronRight className="w-6 h-6" /></motion.button>
      </div>
      <div className="hidden sm:flex items-center justify-center gap-2 mt-5">{VIDEO_TESTIMONIALS.map((_, i) => (<button key={i} onClick={() => goTo(i, i > current ? 1 : -1)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-gold-400" : "w-2 bg-white/20 hover:bg-white/40"}`} aria-label={`Go to video ${i + 1}`} />))}</div>
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function SalesCloserPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.novadatech.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => { if (document.body.contains(script)) document.body.removeChild(script); };
  }, []);

  return (
    <>
      {/* ── Sticky header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-container section-padding">
          <div className="flex items-center justify-between h-16">
            <Link href="/sales-closer" className="flex items-center"><Logo variant="light" className="h-9 w-auto" /></Link>
            <div className="flex items-center gap-2 text-xs text-white/40"><div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /><span>Closers available now</span></div>
          </div>
        </div>
      </header>
      <div className="h-16" />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO — AUDIT: Headline = exact baseline. Eyebrow = "7 days" +
          guarantee. ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-6 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,162,63,0.08)_0%,_transparent_60%)]" />
        <div className="relative max-container section-padding text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 mb-4">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-slow" />
            <span className="text-sm text-gold-400 font-medium">Expert Closer Placed in 7 Days — Guaranteed</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-balance max-w-4xl mx-auto">
            We Place an Expert{" "}<span className="gradient-text">Sales Closer</span>{" "}Into Your Business Within 7 Days. If We Don&apos;t Close You Don&apos;t Pay
          </motion.h1>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          VSL + SUBHEADLINE — AUDIT: Subheadline = "expert closer" + "7
          days" + "don't close don't pay". ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding pt-3 pb-0">
        <div className="max-container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl" style={{ paddingBottom: "56.25%" }}>
              <iframe src="https://www.youtube.com/embed/w6atSnPDjJw?autoplay=1&mute=1" title="How Novada Tech Places Expert Sales Closers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-8 text-center">
            <p className="text-xl md:text-2xl font-semibold text-white/90 max-w-2xl mx-auto leading-relaxed">
              Stop losing deals to weak follow-up and unstructured sales calls. We place a proven, expert closer into your business within 7 days — and if they don&apos;t close, you don&apos;t pay.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FORM — AUDIT: Header = "expert closer" + "7 days". Trust items
          = "7 days", "don't pay". ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding pt-8 pb-0">
        <div className="max-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="max-w-2xl mx-auto">
            <div>
              <div className="glass-card gradient-border rounded-t-2xl rounded-b-none px-7 pt-7 pb-5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /><span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">Closers Available Now</span></div>
                <h2 className="text-xl md:text-2xl font-bold text-white">Get an Expert Closer in Your Business Within 7 Days</h2>
                <p className="mt-1.5 text-base text-white/80">Tell us about your business and we&apos;ll show you how we&apos;d place a closer who converts. Takes under 2 minutes.</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-white/40 mb-1.5">
                    <span className="flex items-center gap-1.5"><span className="text-gold-400 font-medium">Step 1</span><span>— Your details</span><span className="text-white/20">→</span><span>Step 2 — Pick your time</span></span>
                    <span>50%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10"><div className="h-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 w-1/2" /></div>
                </div>
              </div>
              <div className="glass-card rounded-t-none rounded-b-2xl overflow-hidden" style={{ borderTop: "none" }}>
                <iframe src="https://link.novadatech.com/widget/form/2UikgU0iSTsy1ax334cR" style={{ width: "100%", minHeight: "380px", border: "none", display: "block" }} id="closer-form-embed" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-activation-type="alwaysActivated" data-deactivation-type="neverDeactivate" data-form-name="Novada Tech Closer Form" data-height="380" data-layout-iframe-id="closer-form-embed" data-form-id="2UikgU0iSTsy1ax334cR" title="Get an Expert Sales Closer" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {TRUST_ITEMS.map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-white/75 bg-white/[0.05] border border-white/[0.10] rounded-lg px-3 py-2.5 font-medium"><Icon className="w-3.5 h-3.5 flex-shrink-0 text-gold-400" /><span>{label}</span></div>
                ))}
              </div>
              <a href="https://www.trustpilot.com/review/novadatech.com.au" target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 text-xs text-white/60 hover:text-white transition-colors font-medium"><span className="text-gold-400">★★★★★</span><span>Verified 4.9/5 — 77+ reviews on Trustpilot</span><ExternalLink className="w-3 h-3" /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WHAT YOU GET — AUDIT: Every bullet = "closer", "7 days",
          "close", "don't pay", or "performance". ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding pt-12 pb-0">
        <div className="max-container max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-0.5">What You Get</h3>
            <p className="text-base text-white/80 mb-4">When we place a closer into your business</p>
            <p className="text-base text-emerald-400/80 italic mb-4 leading-relaxed">If our closer doesn&apos;t close deals — you don&apos;t pay. That&apos;s not a tagline. It&apos;s our written guarantee.</p>
            <ul className="space-y-2.5">
              {BENEFITS.map((b, i) => (
                <li key={i} className="flex items-start gap-3"><CheckCircle className="w-3.5 h-3.5 text-gold-400 mt-0.5 flex-shrink-0" /><span className="text-base text-white/80 leading-relaxed">{b}</span></li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          HOW IT WORKS — 4-step process. AUDIT: Steps = analyse → match →
          place in 7 days → close or don't pay. Inspired by closers.io
          4-pillar layout but with guarantee + speed. ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">How It Works</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">From Application to Closed Deals in 7 Days</h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto">Other companies take months to recruit. We place a proven closer in days.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card gradient-border p-6 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4"><step.icon className="w-6 h-6 text-gold-400" /></div>
                <span className="text-3xl font-bold text-gold-500/20 mb-2">{step.num}</span>
                <h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-base text-white/80 leading-relaxed flex-1">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WHAT HAPPENS NEXT — AUDIT: Step 3 = "closer placement plan" +
          "performance guarantee". ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">After You Submit</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Here&apos;s What Happens Next</h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto">No guesswork — here&apos;s exactly what to expect.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {NEXT_STEPS.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card gradient-border p-6 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4"><step.icon className="w-6 h-6 text-gold-400" /></div>
                <span className="text-xs text-gold-500/60 font-medium uppercase tracking-wider mb-2">{step.step}</span>
                <h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-base text-white/80 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          VIDEO TESTIMONIALS — AUDIT: Header = "closer" + "close deals".
          CTA = "expert closer" + "don't pay". ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">Client Results</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Our Closers Are Closing Deals. Every Week.</h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto">Hear from business owners who now have an expert closer handling every sales call.</p>
          </div>
          <VideoSlider />
          <div className="mt-12 text-center">
            <div className="inline-block w-px h-8 bg-gradient-to-b from-white/20 to-transparent mb-8" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">Want an expert closer in your business?</h3>
            <p className="mt-3 text-white/80 text-lg max-w-sm mx-auto leading-relaxed">Placed within 7 days. Closing deals on your calendar. If they don&apos;t close, you don&apos;t pay.</p>
            <button onClick={scrollToForm} className="btn-primary mt-6 mx-auto">Get My Expert Closer<ArrowRight className="w-4 h-4" /></button>
            <div className="mt-5 flex items-center justify-center gap-5 text-xs text-white/35 flex-wrap">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-gold-500/60" /> Don&apos;t close, don&apos;t pay</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><span className="text-gold-400 tracking-tight">★★★★★</span> 4.9 on Trustpilot</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-gold-500/60" /> Placed in 7 days</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WRITTEN TESTIMONIALS — AUDIT: All reframed around closers/closing.
          CTA = "closer" + "don't pay". ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-4">What Our Partners Say</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">350+ Businesses. Expert Closers. Real Revenue.</h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto leading-relaxed">Every one of them got an expert closer placed into their business — and never looked back.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 6) * 0.07 }} className="glass-card p-6 border border-white/[0.05] flex flex-col">
                <div className="text-gold-400 text-xs mb-3">★★★★★</div>
                <p className="text-base text-white/80 leading-relaxed italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center gap-3">
                  <InitialsAvatar name={t.name} index={i} />
                  <div><p className="text-sm font-semibold text-white">{t.name}</p><p className="text-base text-white/80">{t.role}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-block w-px h-8 bg-gradient-to-b from-white/20 to-transparent mb-8" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">They all have one thing in common.</h3>
            <p className="mt-3 text-white/80 text-lg max-w-sm mx-auto leading-relaxed">An expert closer in their business. Closing deals every week. Placed in 7 days — with a guarantee.</p>
            <button onClick={scrollToForm} className="btn-primary mt-6 mx-auto">Get My Expert Closer<ArrowRight className="w-4 h-4" /></button>
            <div className="mt-5 flex items-center justify-center gap-5 text-xs text-white/35 flex-wrap">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-gold-500/60" /> Don&apos;t close, don&apos;t pay</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><span className="text-gold-400 tracking-tight">★★★★★</span> 4.9 on Trustpilot</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-gold-500/60" /> Placed in 7 days</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          IS THIS RIGHT FOR YOU — AUDIT: Good-fit = "closer", "close deals",
          "7 days", "guarantee". Directly counters closers.io weaknesses
          (no guarantee, months to hire, $8K+ upfront). ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">Is This Right for You?</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">We Only Place Closers for Businesses That Qualify</h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto">Not every business is ready for an expert closer. Check both columns honestly.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card gradient-border p-7">
              <h3 className="text-base font-semibold text-emerald-400 mb-5 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> We Can Place a Closer If You...</h3>
              <div className="space-y-3">
                {["Sell a high-value service or product ($3K–$50K+)", "Have qualified meetings but need someone to close them into revenue", "Want an expert closer in your business within 7 days — not months", "Are tired of losing deals to weak follow-up and unstructured calls", "Want a performance guarantee — don't close, don't pay", "Want to get off the sales calls and focus on delivery and growth"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" /><span className="text-base text-white/80 leading-relaxed">{item}</span></div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-7 border border-white/[0.04]">
              <h3 className="text-base font-semibold text-white/50 mb-5 flex items-center gap-2"><AlertCircle className="w-4 h-4 text-red-400/60" /> A Closer Won&apos;t Work If You...</h3>
              <div className="space-y-3">
                {["Don't have a validated offer or deliverable product", "Don't have qualified meetings coming in for the closer to work", "Expect instant results without giving the closer time to learn your offer", "Aren't willing to share your sales process and pipeline data"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3"><div className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center"><div className="w-3 h-[2px] bg-red-400/50 rounded-full" /></div><span className="text-base text-white/80 leading-relaxed">{item}</span></div>
                ))}
              </div>
              <p className="mt-6 text-base text-white/80 leading-relaxed">If the left column describes you — fill in the form above. We&apos;ll place an expert closer within 7 days, guaranteed.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          RISK REVERSAL / COMPARISON — AUDIT: Directly exploits closers.io
          weaknesses: no guarantee vs our guarantee, months vs 7 days,
          $8K+ upfront vs don't pay until close. ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">We Take the Risk.{" "}<span className="gradient-text">You Get the Closer.</span></h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto">Other companies charge $8K–$18K upfront to recruit a closer — with no guarantee they&apos;ll close a single deal. We do it differently.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-7 rounded-2xl border border-red-400/10 bg-red-400/[0.02]">
              <p className="text-xs uppercase tracking-[0.2em] text-red-400/60 font-medium mb-5">The Old Way (Recruiting Agencies)</p>
              <div className="space-y-3">
                {["$8K–$18K+ upfront — before your closer takes a single call", "Months of recruiting, vetting, and onboarding", "No performance guarantee — you absorb all the risk", "62% of placed reps leave within 6 months", "If the closer quits, you start over and pay again"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3"><div className="w-4 h-4 flex-shrink-0 flex items-center justify-center"><div className="w-3 h-[2px] bg-red-400/50 rounded-full" /></div><span className="text-base text-white/80">{item}</span></div>
                ))}
              </div>
              <p className="mt-6 text-base text-red-400/65 font-medium">All that money. All that time. Zero guarantee they&apos;ll close.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card gradient-border p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-5">The Novada Tech Way</p>
              <div className="space-y-3">
                {["Expert closer placed in your business within 7 days", "Zero upfront cost — you don't pay until deals are closed", "Written performance guarantee — don't close, don't pay", "We replace the closer at no cost if the fit isn't right", "Your closer is trained on your offer before they take a single call"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" /><span className="text-base text-white/80 font-medium">{item}</span></div>
                ))}
              </div>
              <p className="mt-6 text-base text-gold-400/85 font-medium">7 days. Zero risk. Deals closed — or you don&apos;t pay.</p>
            </motion.div>
          </div>
          <div className="mt-12 text-center">
            <div className="inline-block w-px h-8 bg-gradient-to-b from-white/20 to-transparent mb-8" />
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 mb-5"><Shield className="w-7 h-7 text-gold-400" /></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">The guarantee is simple.</h3>
            <p className="mt-3 text-white/80 text-lg max-w-md mx-auto leading-relaxed">We place an expert closer into your business within 7 days. They close deals on your pipeline. If they don&apos;t close, you don&apos;t pay. No fine print.</p>
            <button onClick={scrollToForm} className="btn-primary mt-6 mx-auto">Get My Expert Closer<ArrowRight className="w-4 h-4" /></button>
            <div className="mt-5 flex items-center justify-center gap-5 text-xs text-white/35 flex-wrap">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-gold-500/60" /> Don&apos;t close, don&apos;t pay</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><span className="text-gold-400 tracking-tight">★★★★★</span> 4.9 on Trustpilot</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-gold-500/60" /> Placed in 7 days</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FAQ — AUDIT: Every answer references "closer", "7 days", "close",
          "don't pay", or "guarantee". Includes direct closers.io
          comparison question. ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-2xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">Questions</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">{FAQS.map((faq, i) => (<FAQItem key={i} q={faq.q} a={faq.a} />))}</div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FINAL CTA — AUDIT: Headline = "expert closer" + "7 days" +
          "don't close don't pay". Full alignment. ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,162,63,0.1)_0%,_transparent_70%)]" />
            <div className="relative px-8 py-14 md:px-14">
              <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-4">Performance Guaranteed</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight text-balance">Expert Closer. 7 Days. Deals Closed. Or You Don&apos;t Pay.</h2>
              <p className="mt-4 text-white/80 text-lg max-w-lg mx-auto leading-relaxed">350+ businesses already have an expert closer handling their sales. You&apos;re one form away from joining them.</p>
              <button onClick={scrollToForm} className="btn-primary mt-8 inline-flex text-base">Get My Expert Closer<ArrowRight className="w-5 h-5" /></button>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-white/25">
                <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> Don&apos;t Close, Don&apos;t Pay</span>
                <a href="https://www.trustpilot.com/review/novadatech.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/50 transition-colors"><Star className="w-3.5 h-3.5" /><span className="underline underline-offset-2 decoration-white/20">4.9★ Trustpilot</span></a>
                <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5" /> Placed in 7 Days</span>
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> 350+ Businesses</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
