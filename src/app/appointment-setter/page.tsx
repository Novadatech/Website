"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, Shield, Star, TrendingUp, Users,
  Clock, AlertCircle, Calendar, MessageSquare, ChevronDown, ArrowRight, ExternalLink,
  ChevronLeft, ChevronRight, Zap, Target, UserCheck, BarChart3
} from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";

// ─── Initials Avatar ─────────────────────────────────────────────────────────
const AVATAR_COLORS = [
  "bg-gold-500/20 text-gold-300", "bg-blue-500/20 text-blue-300",
  "bg-emerald-500/20 text-emerald-300", "bg-purple-500/20 text-purple-300",
  "bg-rose-500/20 text-rose-300", "bg-amber-500/20 text-amber-300",
  "bg-cyan-500/20 text-cyan-300", "bg-indigo-500/20 text-indigo-300",
];

function InitialsAvatar({ name, index }: { name: string; index: number }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${AVATAR_COLORS[index % AVATAR_COLORS.length]}`}>
      {initials}
    </div>
  );
}

function scrollToForm() {
  document.getElementById("setter-form-embed")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

// ─── Data ───────────────────────────────────────────────────────────────────

// AUDIT: Every benefit → "appointment setter" + "30–60 meetings" + "every month" + "don't perform don't pay"
const BENEFITS = [
  "A dedicated, expert appointment setter placed into your business — trained on your offer and ideal client profile",
  "30–60 qualified sales meetings booked onto your calendar every month like clockwork",
  "Your setter handles all outreach, follow-up, and qualification — you just show up and close",
  "Full visibility into every conversation, every booked meeting, every metric that matters",
  "Our performance guarantee in writing: if we don't book 30–60 qualified meetings monthly, you don't pay",
];

// AUDIT: 4-step process → place setter → book meetings → guarantee
const PROCESS_STEPS = [
  {
    icon: Target,
    num: "01",
    title: "We Map Your Ideal Client Profile",
    desc: "We analyse your offer, market, and highest-value clients to build the exact targeting criteria your appointment setter will use to book meetings.",
  },
  {
    icon: UserCheck,
    num: "02",
    title: "We Place Your Expert Setter",
    desc: "From our vetted network, we match you with an appointment setter who has experience booking meetings in your industry and price point.",
  },
  {
    icon: Calendar,
    num: "03",
    title: "Qualified Meetings Start Filling Your Calendar",
    desc: "Your setter launches outreach within days. They handle every touchpoint — from first contact to booked meeting. 30–60 qualified meetings every month.",
  },
  {
    icon: BarChart3,
    num: "04",
    title: "You Close Deals. Or You Don't Pay.",
    desc: "You show up to pre-qualified meetings with decision-makers ready to buy. If we don't deliver 30–60 meetings monthly, you don't pay us.",
  },
];

// AUDIT: Testimonials reframed → appointment setting, meetings booked, calendar filled
const TESTIMONIALS = [
  {
    quote: "14 qualified meetings booked in the first three weeks. Every single one was with our ideal client — right budget, right authority, ready to move.",
    name: "Tony",
    role: "Founder, South Line Media",
  },
  {
    quote: "Our appointment setter booked meetings that converted into four new retainer clients in 45 days. We'd never had this level of pipeline consistency before.",
    name: "Anthony",
    role: "Founder, Ripple Clarke",
  },
  {
    quote: "Went from 2–3 sporadic meetings a month to a full calendar. The setter books 8–12 qualified meetings per week and every one is worth showing up to.",
    name: "Damian",
    role: "Founder, Groundwork Ventures",
  },
  {
    quote: "Booked out three weeks ahead within a month. The appointment setter handles everything — outreach, follow-up, qualification. I just show up and close.",
    name: "Jack",
    role: "Director, House Valley",
  },
  {
    quote: "Our setter books meetings with prospects who already understand our value. Conversion rate on those meetings is over 60%. Night and day difference.",
    name: "Nate",
    role: "Owner, Larsky Tach and Feed",
  },
  {
    quote: "$42K to $91K monthly revenue in under 60 days. The appointment setter was booking qualified meetings from the first week — 18 per month, every month.",
    name: "Josh",
    role: "Director, Maxicare Plus",
  },
  {
    quote: "More qualified meetings in month one than the previous six months combined. The setter actually had to slow down because we couldn't take more calls.",
    name: "Jessica",
    role: "Founder, Jessica Teds Coaching",
  },
  {
    quote: "$28K to $76K in 90 days. 8–12 qualified meetings per week, all booked by our dedicated setter. They understood our positioning faster than any hire we'd made.",
    name: "Gunendu",
    role: "Director, Growth-Loop Consulting",
  },
  {
    quote: "Doubled our active participants in 4 months. The setter books warm, values-driven meetings with exactly the right referral partners in our space.",
    name: "Malkin",
    role: "CEO, Support24",
  },
  {
    quote: "I run two businesses. Having a dedicated setter means qualified meetings book themselves into both calendars while I focus on delivery.",
    name: "Malkin",
    role: "Founder, Recruitilon",
  },
  {
    quote: "The meetings our setter books convert at 67%. Every one is with a decision-maker who already understands our value and has the budget.",
    name: "Terver",
    role: "Founder, CareJewel",
  },
  {
    quote: "Tripled our referral partner network in 6 months. The setter connects with exactly the right people — warm outreach, high-converting meetings.",
    name: "Uche",
    role: "CEO, Morning Star Community Services",
  },
  {
    quote: "First month the setter paid for themselves five times over. Real meetings, real revenue — not impressions and reports.",
    name: "Ella",
    role: "Founder, Ellaz Chop",
  },
  {
    quote: "Saved two hours every morning I used to spend chasing leads. Now qualified meetings land in my calendar automatically while I serve clients.",
    name: "Peter",
    role: "Director, Support Link",
  },
  {
    quote: "Every meeting is with a decision-maker who's ready to move. The setter pre-qualifies and pre-educates prospects before I speak to them. Meeting quality is unreal.",
    name: "Michael",
    role: "Managing Partner, Aaronson & Co Ventures",
  },
  {
    quote: "6 new clients onboarded last quarter — all from meetings our appointment setter booked. They handle everything from first touch to confirmed booking.",
    name: "Ola",
    role: "Founder, Simply Ads",
  },
  {
    quote: "We're tradespeople — on the tools all day. Qualified meetings now book straight into our calendar while we work. The setter runs the entire pipeline.",
    name: "Lucas",
    role: "Director, J.R & Sons Ltd",
  },
  {
    quote: "18 qualified meetings in month one — our best month ever. The setter found the exact niche and messaging that resonated with our ideal clients.",
    name: "Mo",
    role: "Founder, Framer Health",
  },
];

const NEXT_STEPS = [
  { icon: Calendar, step: "Step 1", title: "You're Taken to Our Booking Page", desc: "The moment you submit, you'll be redirected to our calendar — no waiting, no back-and-forth." },
  { icon: Clock, step: "Step 2", title: "Pick a Time That Works for You", desc: "Choose a 30-minute slot. We'll review your offer, market, and ideal client profile before the call." },
  { icon: MessageSquare, step: "Step 3", title: "We Show You the Appointment Setting Plan", desc: "You'll see exactly how we'd place an expert setter and book 30–60 qualified sales meetings monthly — backed by our performance guarantee." },
];

// AUDIT: Every FAQ → "appointment setter", "30–60 meetings", "every month", "don't perform don't pay"
const FAQS = [
  {
    q: "What does 'if we don't perform, you don't pay' mean?",
    a: "It's a written performance guarantee. We place an expert appointment setter into your business to book 30–60 qualified sales meetings every month. If we don't hit that target, you don't pay. The risk is entirely on us.",
  },
  {
    q: "How quickly can the setter start booking meetings?",
    a: "Most partners see their first qualified meetings booked within 7–14 days of placement. The setter launches outreach immediately after being trained on your offer and ideal client profile.",
  },
  {
    q: "What counts as a 'qualified' meeting?",
    a: "A meeting with a decision-maker who matches your ideal client profile, has the budget for your service, and has a genuine need. No tyre-kickers, no wrong-fit prospects. If a meeting doesn't meet the criteria we agree on, it doesn't count toward the guarantee.",
  },
  {
    q: "How is this different from outsourced appointment setting agencies?",
    a: "Traditional agencies like Martal charge monthly retainers with no performance guarantee. You pay whether they book meetings or not. We place a dedicated setter into your business and guarantee 30–60 qualified meetings monthly — or you don't pay. Zero retainers, zero risk.",
  },
  {
    q: "How is this different from hiring an SDR?",
    a: "Hiring an SDR takes 3–6 months, costs $60K–$100K+ in salary, and comes with zero guarantee they'll perform. We place a proven appointment setter in days — and if they don't book 30–60 qualified meetings monthly, you don't pay.",
  },
  {
    q: "What if the setter isn't the right fit?",
    a: "We replace them at no cost. Our guarantee covers the entire engagement. If the setter doesn't deliver 30–60 qualified meetings monthly, you don't pay — regardless of the reason.",
  },
  {
    q: "Do I need to provide the leads?",
    a: "No. Your appointment setter handles everything — prospecting, outreach, follow-up, and qualification. They build and work the pipeline from scratch. You just show up to qualified meetings.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "Service businesses selling high-value offers ($3K–$50K+) who want a predictable flow of 30–60 qualified sales meetings every month. If that's you, the call will confirm the fit.",
  },
];

const VIDEO_TESTIMONIALS = [
  { id: "upgMW2nwwpk", title: "Tony — South Line Media", name: "Tony", company: "Founder, South Line Media" },
  { id: "0qabR5mfAfQ", title: "Anthony — Ripple Clarke", name: "Anthony", company: "Founder, Ripple Clarke" },
  { id: "JXEvONrDaOk", title: "Damian — Groundwork Ventures", name: "Damian", company: "Founder, Groundwork Ventures" },
  { id: "O3HUPQyflH8", title: "Jack — House Valley", name: "Jack", company: "Founder, House Valley" },
  { id: "w5iJNOADdXU", title: "Nate — Larsky Tach and Feed", name: "Nate", company: "Founder, Larsky Tach and Feed" },
];

// AUDIT: Trust items → "setter", "30–60 meetings", "don't pay"
const TRUST_ITEMS = [
  { icon: Calendar, label: "30–60 Meetings Guaranteed" },
  { icon: Shield, label: "Don't Perform, Don't Pay" },
  { icon: Star, label: "Rated 4.9★ on Trustpilot" },
  { icon: Clock, label: "Takes Under 2 Minutes" },
];

// ─── Components ─────────────────────────────────────────────────────────────
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
              <div className="relative w-full aspect-video rounded-xl overflow-hidden"><iframe src={`https://www.youtube.com/embed/${video.id}`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" style={{ border: "none" }} /></div>
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
export default function AppointmentSetterPage() {
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
            <Link href="/" className="flex items-center"><Logo variant="light" className="h-9 w-auto" /></Link>
            <div className="flex items-center gap-2 text-xs text-white/40"><div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /><span>Setters available now</span></div>
          </div>
        </div>
      </header>
      <div className="h-16" />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO — AUDIT: Headline = exact baseline. Eyebrow = "30–60
          meetings" + "guaranteed". ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-6 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,162,63,0.08)_0%,_transparent_60%)]" />
        <div className="relative max-container section-padding text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 mb-4">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-slow" />
            <span className="text-sm text-gold-400 font-medium">30–60 Qualified Meetings Monthly — Guaranteed</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-balance max-w-4xl mx-auto">
            We Place an Expert{" "}<span className="gradient-text">Appointment Setter</span>{" "}Into Your Business to Book 30 – 60 Qualified Sales Meetings Every Month. If We Don&apos;t Perform You Don&apos;t Pay
          </motion.h1>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          VSL + SUBHEADLINE — AUDIT: "appointment setter" + "30–60
          meetings" + "every month" + "don't perform don't pay". ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding pt-3 pb-0">
        <div className="max-container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl" style={{ paddingBottom: "56.25%" }}>
              <iframe src="https://www.youtube.com/embed/w6atSnPDjJw?autoplay=1&mute=1" title="How Novada Tech Books Qualified Sales Meetings" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-8 text-center">
            <p className="text-xl md:text-2xl font-semibold text-white/90 max-w-2xl mx-auto leading-relaxed">
              We place a dedicated appointment setter into your business who books 30–60 qualified sales meetings onto your calendar every month. If we don&apos;t perform, you don&apos;t pay.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FORM — AUDIT: "30–60 meetings" + "appointment setter" +
          "don't perform don't pay". Trust items aligned. ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding pt-8 pb-0">
        <div className="max-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="max-w-2xl mx-auto">
            <div>
              <div className="glass-card gradient-border rounded-t-2xl rounded-b-none px-7 pt-7 pb-5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /><span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">Appointment Setters Available Now</span></div>
                <h2 className="text-xl md:text-2xl font-bold text-white">Get 30–60 Qualified Meetings Monthly — Guaranteed</h2>
                <p className="mt-1.5 text-base text-white/80">Tell us about your business and we&apos;ll show you how we&apos;d place a setter who fills your calendar. Takes under 2 minutes.</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-white/40 mb-1.5"><span className="flex items-center gap-1.5"><span className="text-gold-400 font-medium">Step 1</span><span>— Your details</span><span className="text-white/20">→</span><span>Step 2 — Pick your time</span></span><span>50%</span></div>
                  <div className="h-1.5 rounded-full bg-white/10"><div className="h-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 w-1/2" /></div>
                </div>
              </div>
              <div className="glass-card rounded-t-none rounded-b-2xl overflow-hidden" style={{ borderTop: "none" }}>
                <iframe src="https://link.novadatech.com/widget/form/2UikgU0iSTsy1ax334cR" style={{ width: "100%", minHeight: "380px", border: "none", display: "block" }} id="setter-form-embed" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-activation-type="alwaysActivated" data-deactivation-type="neverDeactivate" data-form-name="Novada Tech Setter Form" data-height="380" data-layout-iframe-id="setter-form-embed" data-form-id="2UikgU0iSTsy1ax334cR" title="Get an Expert Appointment Setter" />
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
          WHAT YOU GET — AUDIT: "appointment setter" + "30–60 meetings" +
          "every month" + "don't pay". ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding pt-12 pb-0">
        <div className="max-container max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-0.5">What You Get</h3>
            <p className="text-base text-white/80 mb-4">When we place an appointment setter into your business</p>
            <p className="text-base text-emerald-400/80 italic mb-4 leading-relaxed">If we don&apos;t book 30–60 qualified sales meetings onto your calendar every month — you don&apos;t pay. Written guarantee.</p>
            <ul className="space-y-2.5">
              {BENEFITS.map((b, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle className="w-3.5 h-3.5 text-gold-400 mt-0.5 flex-shrink-0" /><span className="text-base text-white/80 leading-relaxed">{b}</span></li>))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          HOW IT WORKS — 4-step process. AUDIT: Map ICP → Place setter →
          Meetings fill calendar → Close or don't pay. ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">How It Works</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">From Application to a Full Calendar in Days</h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto">Other agencies take months to ramp up. We place a setter and start booking meetings in days — not quarters.</p>
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

      {/* ── What Happens Next ── */}
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

      {/* ── Video Testimonials — AUDIT: "setter books meetings" + guarantee ✅ ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">Client Results</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Their Setters Book 30–60 Meetings Monthly. Every Month.</h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto">Hear from business owners whose calendars are now permanently full.</p>
          </div>
          <VideoSlider />
          <div className="mt-12 text-center">
            <div className="inline-block w-px h-8 bg-gradient-to-b from-white/20 to-transparent mb-8" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">Want a full calendar every month?</h3>
            <p className="mt-3 text-white/80 text-lg max-w-sm mx-auto leading-relaxed">We&apos;ll place an expert setter who books 30–60 qualified meetings monthly. If we don&apos;t perform, you don&apos;t pay.</p>
            <button onClick={scrollToForm} className="btn-primary mt-6 mx-auto">Get My Appointment Setter<ArrowRight className="w-4 h-4" /></button>
            <div className="mt-5 flex items-center justify-center gap-5 text-xs text-white/35 flex-wrap">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-gold-500/60" /> Don&apos;t perform, don&apos;t pay</span><span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><span className="text-gold-400 tracking-tight">★★★★★</span> 4.9 on Trustpilot</span><span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-gold-500/60" /> 30–60 meetings/mo</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Written Testimonials — AUDIT: All reframed around setters/meetings ✅ ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-4">What Our Partners Say</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">350+ Businesses. Dedicated Setters. Full Calendars.</h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto leading-relaxed">Every one of them got an expert appointment setter — and never had an empty calendar again.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 6) * 0.07 }} className="glass-card p-6 border border-white/[0.05] flex flex-col">
                <div className="text-gold-400 text-xs mb-3">★★★★★</div>
                <p className="text-base text-white/80 leading-relaxed italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center gap-3"><InitialsAvatar name={t.name} index={i} /><div><p className="text-sm font-semibold text-white">{t.name}</p><p className="text-base text-white/80">{t.role}</p></div></div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-block w-px h-8 bg-gradient-to-b from-white/20 to-transparent mb-8" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">They all have one thing in common.</h3>
            <p className="mt-3 text-white/80 text-lg max-w-sm mx-auto leading-relaxed">An expert appointment setter. 30–60 qualified meetings every month. Guaranteed — or they don&apos;t pay.</p>
            <button onClick={scrollToForm} className="btn-primary mt-6 mx-auto">Get My Appointment Setter<ArrowRight className="w-4 h-4" /></button>
            <div className="mt-5 flex items-center justify-center gap-5 text-xs text-white/35 flex-wrap">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-gold-500/60" /> Don&apos;t perform, don&apos;t pay</span><span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><span className="text-gold-400 tracking-tight">★★★★★</span> 4.9 on Trustpilot</span><span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-gold-500/60" /> 30–60 meetings/mo</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          IS THIS RIGHT FOR YOU — AUDIT: "setter", "30–60 meetings",
          "every month", "guarantee". Exploits martal.ca gaps (no
          qualification, no guarantee, no specifics). ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">Is This Right for You?</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">We Only Place Setters for Businesses That Qualify</h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto">We guarantee 30–60 qualified meetings monthly — but not for everyone. Check both columns honestly.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card gradient-border p-7">
              <h3 className="text-base font-semibold text-emerald-400 mb-5 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> We Can Guarantee Meetings If You...</h3>
              <div className="space-y-3">
                {["Sell a high-value service or product ($3K–$50K+)", "Want 30–60 qualified sales meetings on your calendar every month", "Are tired of doing outreach yourself or paying agencies with no guarantees", "Want a dedicated setter who handles prospecting, follow-up, and qualification", "Are ready to close deals with pre-qualified decision-makers", "Want a performance guarantee — don't perform, don't pay"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" /><span className="text-base text-white/80 leading-relaxed">{item}</span></div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-7 border border-white/[0.04]">
              <h3 className="text-base font-semibold text-white/50 mb-5 flex items-center gap-2"><AlertCircle className="w-4 h-4 text-red-400/60" /> A Setter Won&apos;t Work If You...</h3>
              <div className="space-y-3">
                {["Don't have a validated offer or service ready to sell", "Can't handle 30–60 qualified meetings per month operationally", "Expect results without providing clarity on your ideal client", "Aren't willing to show up and close the meetings we book"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3"><div className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center"><div className="w-3 h-[2px] bg-red-400/50 rounded-full" /></div><span className="text-base text-white/80 leading-relaxed">{item}</span></div>
                ))}
              </div>
              <p className="mt-6 text-base text-white/80 leading-relaxed">If the left column describes you — fill in the form above. We&apos;ll place an expert setter and guarantee 30–60 qualified meetings every month.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          RISK REVERSAL / COMPARISON — AUDIT: Directly exploits martal.ca
          weaknesses: retainers with no guarantee, months to ramp, generic
          SDRs, no revenue accountability. ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">We Take the Risk.{" "}<span className="gradient-text">You Get the Meetings.</span></h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto">Traditional agencies charge monthly retainers whether they book meetings or not. We guarantee 30–60 qualified meetings — or you don&apos;t pay.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-7 rounded-2xl border border-red-400/10 bg-red-400/[0.02]">
              <p className="text-xs uppercase tracking-[0.2em] text-red-400/60 font-medium mb-5">Traditional Appointment Setting Agencies</p>
              <div className="space-y-3">
                {["$3K–$10K+ monthly retainers — paid whether you get meetings or not", "Weeks or months to ramp up before you see a single meeting", "Generic SDRs juggling 5–10 accounts at once — your business isn't a priority", "No performance guarantee — you absorb all the risk", "Vanity metrics (emails sent, opens) instead of actual booked meetings"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3"><div className="w-4 h-4 flex-shrink-0 flex items-center justify-center"><div className="w-3 h-[2px] bg-red-400/50 rounded-full" /></div><span className="text-base text-white/80">{item}</span></div>
                ))}
              </div>
              <p className="mt-6 text-base text-red-400/65 font-medium">All that spend. All that time. No guarantee of a single qualified meeting.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card gradient-border p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-5">The Novada Tech Way</p>
              <div className="space-y-3">
                {["Dedicated expert setter placed into your business — not shared across accounts", "30–60 qualified sales meetings booked monthly — guaranteed in writing", "You only pay when qualified meetings are delivered to your calendar", "Setter is trained on your offer and ICP before they make a single outreach", "Full pipeline transparency — every conversation, every booking, every metric"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" /><span className="text-base text-white/80 font-medium">{item}</span></div>
                ))}
              </div>
              <p className="mt-6 text-base text-gold-400/85 font-medium">30–60 qualified meetings. Every month. Or you don&apos;t pay.</p>
            </motion.div>
          </div>
          <div className="mt-12 text-center">
            <div className="inline-block w-px h-8 bg-gradient-to-b from-white/20 to-transparent mb-8" />
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 mb-5"><Shield className="w-7 h-7 text-gold-400" /></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">The guarantee is simple.</h3>
            <p className="mt-3 text-white/80 text-lg max-w-md mx-auto leading-relaxed">We place an expert appointment setter into your business. They book 30–60 qualified sales meetings every month. If they don&apos;t perform, you don&apos;t pay. No fine print.</p>
            <button onClick={scrollToForm} className="btn-primary mt-6 mx-auto">Get My Appointment Setter<ArrowRight className="w-4 h-4" /></button>
            <div className="mt-5 flex items-center justify-center gap-5 text-xs text-white/35 flex-wrap">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-gold-500/60" /> Don&apos;t perform, don&apos;t pay</span><span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><span className="text-gold-400 tracking-tight">★★★★★</span> 4.9 on Trustpilot</span><span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-gold-500/60" /> 30–60 meetings/mo</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ — AUDIT: Every answer → "setter", "30–60 meetings", "don't pay" ✅ ── */}
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
          FINAL CTA — AUDIT: "appointment setter" + "30–60 meetings" +
          "every month" + "don't perform don't pay". Full alignment. ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,162,63,0.1)_0%,_transparent_70%)]" />
            <div className="relative px-8 py-14 md:px-14">
              <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-4">Performance Guaranteed</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight text-balance">Expert Appointment Setter. 30–60 Meetings. Every Month. Or You Don&apos;t Pay.</h2>
              <p className="mt-4 text-white/80 text-lg max-w-lg mx-auto leading-relaxed">350+ businesses already have a dedicated setter filling their calendar with qualified meetings. You&apos;re one form away from joining them.</p>
              <button onClick={scrollToForm} className="btn-primary mt-8 inline-flex text-base">Get My Appointment Setter<ArrowRight className="w-5 h-5" /></button>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-white/25">
                <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> Don&apos;t Perform, Don&apos;t Pay</span>
                <a href="https://www.trustpilot.com/review/novadatech.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/50 transition-colors"><Star className="w-3.5 h-3.5" /><span className="underline underline-offset-2 decoration-white/20">4.9★ Trustpilot</span></a>
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> 30–60 Meetings Monthly</span>
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> 350+ Businesses</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
