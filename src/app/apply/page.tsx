"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, Shield, Star, TrendingUp, Users,
  Clock, AlertCircle, Calendar, MessageSquare, ChevronDown, ArrowRight,
  ChevronLeft, ChevronRight
} from "lucide-react";

import Link from "next/link";
import Logo from "@/components/Logo";

// ─── Initials Avatar (replaces stock photos — no fake faces) ───────────────
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
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const color = AVATAR_COLORS[index % AVATAR_COLORS.length];
  return (
    <div
      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${color}`}
    >
      {initials}
    </div>
  );
}


// ─── Scroll to form helper ──────────────────────────────────────────────────
function scrollToForm() {
  document.getElementById("apply-form-embed")?.scrollIntoView({ behavior: "smooth", block: "center" });
}


// ─── Data ───────────────────────────────────────────────────────────────────

const BENEFITS = [
  "The exact system we'd deploy to generate 30–60 qualified sales calls every month for your business",
  "A custom acquisition plan — the channels, targeting, and messaging tailored to your market",
  "A clear revenue projection showing what 30–60 monthly sales calls means for your bottom line",
  "How to stop relying on referrals and build a predictable pipeline that fills your calendar every month",
  "Whether we're the right fit — and if not, you still walk away with a strategy you can execute yourself",
];


const TESTIMONIALS = [
  {
    quote: "Within three weeks we had 14 qualified sales calls booked with exactly the type of client we wanted. Every call was the right fit — right budget, right industry, ready to move.",
    name: "Tony",
    role: "Founder, South Line Media",
  },
  {
    quote: "We'd been burned by two agencies before. This time, the qualified sales calls actually showed up. We closed four new retainer clients in our first 45 days — all from calls they booked.",
    name: "Anthony",
    role: "Founder, Ripple Clarke",
  },
  {
    quote: "$42K to $91K monthly revenue in under 60 days. The system filled our calendar with qualified sales calls every week — 18 per month, all with decision-makers ready to buy.",
    name: "Josh",
    role: "Director, Maxicare Plus",
  },
  {
    quote: "We scaled from $28K to $76K monthly in 90 days. What impressed me most was how quickly they understood our positioning and built outreach that didn't sound generic.",
    name: "Gunendu",
    role: "Director, Growth-Loop Consulting",
  },
  {
    quote: "Every qualified sales call is with someone who already understands our value. Conversion rate jumped from 28% to over 60%. The calls are with buyers, not tyre-kickers.",
    name: "Nate",
    role: "Owner, Larsky Tach and Feed",
  },
  {
    quote: "Close rate went from 25% to over 65%. Every qualified sales call is with someone who's ready and already understands our value. We just confirm the fit and close.",
    name: "Terver",
    role: "Founder, CareJewel",
  },
  {
    quote: "More qualified sales calls in month one than the previous six months combined. I actually had to pause the system because I couldn't take any more calls.",
    name: "Jessica",
    role: "Founder, Jessica Teds Coaching",
  },
  {
    quote: "18 qualified sales calls booked in month one — our best month ever. They found the exact niche where demand was high and competition was low. Every call converted.",
    name: "Mo",
    role: "Founder, Framer Health",
  },
  {
    quote: "Doubled our active participants in four months. Every qualified sales call was warm, values-driven, and with exactly the right people. The calendar fills itself now.",
    name: "Malkin",
    role: "CEO, Support24",
  },
];

const NEXT_STEPS = [
  {
    icon: Calendar,
    step: "Step 1",
    title: "You're Taken to Our Booking Page",
    desc: "The moment you submit, you'll be redirected straight to our calendar — no waiting, no back-and-forth.",
  },
  {
    icon: Clock,
    step: "Step 2",
    title: "Pick a Time That Works for You",
    desc: "Choose a 30-minute slot that fits your schedule. Morning, afternoon, or evening — we work around you.",
  },
  {
    icon: MessageSquare,
    step: "Step 3",
    title: "You Get Your Custom Strategy",
    desc: "We review your business beforehand and walk you through the exact strategy to generate 30–60 qualified sales calls monthly. You keep the plan — whether we work together or not.",
  },
];

const FAQS = [
  {
    q: "Is this call really free?",
    a: "Yes, 100% free. We'll show you the exact system to generate 30–60 qualified sales calls every month — no charge, no obligation to work with us afterwards.",
  },
  {
    q: "Will I be pressured to buy anything?",
    a: "Absolutely not. We only work with businesses we're confident we can generate 30–60 qualified sales calls for. If we're not a fit, we'll tell you — and you still walk away with a clear plan.",
  },
  {
    q: "How long does the call take?",
    a: "30 minutes. We show you the exact system we'd use to generate 30–60 qualified sales calls monthly for your business. No fluff, no hard sell.",
  },
  {
    q: "What do I need to prepare?",
    a: "Nothing formal. Just come with an open mind and be ready to share a bit about your current business, your ideal clients, and your revenue goals.",
  },
  {
    q: "What if I've been burned by agencies before?",
    a: "We hear this on almost every call. That's exactly why this strategy call is free — no retainers, no upfront fees, no commitment. We show you the exact system to get 30–60 qualified sales calls monthly. If it makes sense to work together, great. If not, you keep the plan.",
  },
];

const VIDEO_TESTIMONIALS = [
  {
    id: "CBL83P7OYgI",
    title: "Nicole — Morasco Media Services",
    name: "Nicole",
    company: "Founder, Morasco Media Services",
  },
  {
    id: "upgMW2nwwpk",
    title: "Tony — South Line Media",
    name: "Tony",
    company: "Founder, South Line Media",
  },
  {
    id: "G44OKPVh3Uk",
    title: "Michael — Aaronson Investigations",
    name: "Michael",
    company: "Founder, Aaronson Investigations",
  },
  {
    id: "Ef4YTXOnCP0",
    title: "Jeff — Vertical Axis",
    name: "Jeff",
    company: "Founder, Vertical Axis",
  },
  {
    id: "0qabR5mfAfQ",
    title: "Anthony — Ripple Clarke",
    name: "Anthony",
    company: "Founder, Ripple Clarke",
  },
  {
    id: "JXEvONrDaOk",
    title: "Damian — Groundwork Ventures",
    name: "Damian",
    company: "Founder, Groundwork Ventures",
  },
  {
    id: "O3HUPQyflH8",
    title: "Jack — House Valley",
    name: "Jack",
    company: "Founder, House Valley",
  },
  {
    id: "w5iJNOADdXU",
    title: "Nate — Larsky Tach and Feed",
    name: "Nate",
    company: "Founder, Larsky Tach and Feed",
  },
];

const TRUST_ITEMS = [
  { icon: Shield, label: "100% Free — No Credit Card" },
  { icon: CheckCircle, label: "Custom Plan for Your Business" },
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
      <div className="px-5 pb-5 text-base text-white/80 leading-relaxed border-t border-white/[0.05] pt-4">
        {a}
      </div>
    </details>
  );
}

// ─── Video Slider ────────────────────────────────────────────────────────────
function VideoSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = VIDEO_TESTIMONIALS.length;

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const prev = () => goTo((current - 1 + total) % total, -1);
  const next = useCallback(() => goTo((current + 1) % total, 1), [current, total, goTo]);

  const video = VIDEO_TESTIMONIALS[current];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Desktop: side arrows + padded card. Mobile: full-width card */}
      <div className="relative">
        {/* Side arrows — desktop only */}
        <motion.button
          onClick={prev}
          animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 16px rgba(212,175,55,0.4)", "0 0 0px rgba(212,175,55,0)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.93 }}
          className="hidden sm:flex absolute left-0 top-[42%] -translate-y-1/2 w-12 h-12 rounded-full bg-navy-900/90 border border-gold-500/35 items-center justify-center text-gold-400 hover:border-gold-500/80 hover:bg-navy-800 transition-colors duration-200 z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          onClick={next}
          animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 24px rgba(212,175,55,0.6)", "0 0 0px rgba(212,175,55,0)"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.93 }}
          className="hidden sm:flex absolute right-0 top-[42%] -translate-y-1/2 w-12 h-12 rounded-full bg-gold-500/15 border border-gold-500/60 items-center justify-center text-gold-400 hover:bg-gold-500/25 hover:border-gold-500 transition-colors duration-200 z-10"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        {/* Video card — full width on mobile, padded on desktop */}
        <div className="sm:px-16">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={video.id}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="glass-card gradient-border p-3"
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
              {/* Caption */}
              <div className="flex items-center gap-3 mt-3 px-2 pb-1">
                <div className="w-7 h-7 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-gold-300">{video.name[0]}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/70">{video.name}</p>
                  <p className="text-[11px] text-white/35">{video.company}</p>
                </div>
                <div className="ml-auto text-gold-400 text-xs flex-shrink-0">★★★★★</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile arrows row — below video */}
      <div className="flex sm:hidden items-center justify-center gap-4 mt-4">
        <motion.button
          onClick={prev}
          animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 16px rgba(212,175,55,0.4)", "0 0 0px rgba(212,175,55,0)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          whileTap={{ scale: 0.93 }}
          className="w-12 h-12 rounded-full bg-navy-900/90 border border-gold-500/35 flex items-center justify-center text-gold-400"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        {/* Dot indicators inline on mobile */}
        <div className="flex items-center gap-2">
          {VIDEO_TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-gold-400" : "w-2 bg-white/20"
              }`}
              aria-label={`Go to video ${i + 1}`}
            />
          ))}
        </div>

        <motion.button
          onClick={next}
          animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 24px rgba(212,175,55,0.6)", "0 0 0px rgba(212,175,55,0)"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          whileTap={{ scale: 0.93 }}
          className="w-12 h-12 rounded-full bg-gold-500/15 border border-gold-500/60 flex items-center justify-center text-gold-400"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Dot indicators — desktop only */}
      <div className="hidden sm:flex items-center justify-center gap-2 mt-5">
        {VIDEO_TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-gold-400" : "w-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to video ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function ApplyPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.novadatech.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* NOTE: No conversion tag here — it fires on /confirmed-call after form submit */}

      {/* ── Minimal sticky header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-container section-padding">
          <div className="flex items-center justify-between h-16">
            <Link href="/apply" className="flex items-center">
              <Logo variant="light" className="h-9 w-auto" />
            </Link>
            <div className="flex items-center gap-2 text-xs text-white/40">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Spots available this week</span>
            </div>
          </div>
        </div>
      </header>

      <div className="h-16" />

      {/* ── Hero + VSL ── */}
      <section className="relative pt-6 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,162,63,0.08)_0%,_transparent_60%)]" />

        <div className="relative max-container section-padding text-center">
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-slow" />
            <span className="text-sm text-gold-400 font-medium">
              See How to Get 30–60 Qualified Sales Calls — Free
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-balance max-w-4xl mx-auto"
          >
            We&apos;ll Show You Exactly How to Get{" "}
            <span className="gradient-text">30 – 60 Qualified Sales Calls</span>{" "}
            Every Month For Free
          </motion.h1>

        </div>
      </section>

      {/* ── VSL ── */}
      <section className="section-padding pt-3 pb-0">
        <div className="max-container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/w6atSnPDjJw?autoplay=1&mute=1"
                title="How Novada Tech Generates High-Value Clients"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>
          </motion.div>

          {/* Subheadline + proof bar — below video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-xl md:text-2xl font-semibold text-white/90 max-w-2xl mx-auto leading-relaxed">
              In 30 minutes, we&apos;ll map out the exact system we&apos;d use to generate
              30–60 qualified sales calls every month for your business. Completely free.
            </p>

          </motion.div>
        </div>
      </section>

      {/* ── FORM — standalone, centred ── */}
      <section className="section-padding pt-8 pb-0">
        <div className="max-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
              <div>
                {/* Form card header */}
                <div className="glass-card gradient-border rounded-t-2xl rounded-b-none px-7 pt-7 pb-5 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">
                      Spots Available This Week
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    See How to Get 30–60 Sales Calls Monthly — Free
                  </h2>
                  <p className="mt-1.5 text-base text-white/80">
                    Complete the short form below and we&apos;ll show you the exact system. Takes under 2 minutes.
                  </p>
                  {/* Step indicator — honest 2-step flow */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs text-white/40 mb-1.5">
                      <span className="flex items-center gap-1.5">
                        <span className="text-gold-400 font-medium">Step 1</span>
                        <span>— Your details</span>
                        <span className="text-white/20">→</span>
                        <span>Step 2 — Pick your time</span>
                      </span>
                      <span>50%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10">
                      <div className="h-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 w-1/2" />
                    </div>
                  </div>
                </div>

                {/* GHL Form */}
                <div className="glass-card rounded-t-none rounded-b-2xl overflow-hidden" style={{ borderTop: "none" }}>
                  <iframe
                    src="https://link.novadatech.com/widget/form/2UikgU0iSTsy1ax334cR"
                    style={{ width: "100%", minHeight: "380px", border: "none", display: "block" }}
                    id="apply-form-embed"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-activation-type="alwaysActivated"
                    data-deactivation-type="neverDeactivate"
                    data-form-name="Novada Tech Apply Form"
                    data-height="380"
                    data-layout-iframe-id="apply-form-embed"
                    data-form-id="2UikgU0iSTsy1ax334cR"
                    title="Apply for Strategy Session"
                  />
                </div>

                {/* Trust strip */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {TRUST_ITEMS.map(({ icon: Icon, label }, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 text-xs text-white/75 bg-white/[0.05] border border-white/[0.10] rounded-lg px-3 py-2.5 font-medium"
                    >
                      <Icon className="w-3.5 h-3.5 flex-shrink-0 text-gold-400" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>

                {/* Social proof — near the form for high-intent Google Ads traffic */}
                <div className="mt-5 rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[10px] font-bold text-gold-300">J</span>
                    </div>
                    <div>
                      <p className="text-sm text-white/70 italic leading-relaxed">&ldquo;$42K to $91K monthly revenue in under 60 days. The system filled our calendar with qualified sales calls every week.&rdquo;</p>
                      <p className="mt-1.5 text-xs text-white/40">Josh — Director, Maxicare Plus</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/[0.05] flex items-center justify-center gap-4 text-xs text-white/35">
                    <span className="flex items-center gap-1.5"><Users className="w-3 h-3 text-gold-500/50" /> 350+ businesses scaled</span>
                    <span className="text-white/15">·</span>
                    <span className="flex items-center gap-1.5"><TrendingUp className="w-3 h-3 text-gold-500/50" /> $50M+ revenue generated</span>
                  </div>
                </div>
              </div>
          </motion.div>
        </div>
      </section>

      {/* ── What You'll Walk Away With — below form, single centred box ── */}
      <section className="section-padding pt-12 pb-0">
        <div className="max-container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-0.5">
              What You&apos;ll Walk Away With
            </h3>
            <p className="text-base text-white/80 mb-4">From your free 30-minute strategy call</p>
            <p className="text-base text-emerald-400/80 italic mb-4 leading-relaxed">You walk away with the full strategy — implement it yourself or let us do it for you. Either way, the plan is yours to keep.</p>
            <ul className="space-y-2.5">
              {BENEFITS.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-white/80 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── What Happens Next — close to form to reduce post-submit anxiety ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">
              After You Submit
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Here&apos;s What Happens Next
            </h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto">
              No guesswork — here&apos;s exactly what to expect the moment you hit submit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {NEXT_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card gradient-border p-6 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-gold-400" />
                </div>
                <span className="text-xs text-gold-500/60 font-medium uppercase tracking-wider mb-2">
                  {step.step}
                </span>
                <h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-base text-white/80 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why This Call Is Worth Your 30 Minutes ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Why This Call Is{" "}
              <span className="gradient-text">Worth Your 30 Minutes</span>
            </h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto">
              Most businesses leave this call with a clearer growth plan than they&apos;ve had in years — even if they never work with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-5">
                What You&apos;ll See on the Call
              </p>
              <div className="space-y-3">
                {[
                  "The exact channels and targeting we'd use to reach your ideal clients",
                  "The messaging framework that gets decision-makers to book calls with you",
                  "A revenue projection — what 30–60 qualified sales calls per month means for your business",
                  "The full strategy — yours to keep and implement yourself if you choose",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span className="text-base text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-5">
                What This Call Is NOT
              </p>
              <div className="space-y-3">
                {[
                  "Not a sales pitch — you'll never be pressured to buy anything",
                  "Not a generic template — every strategy is built for your specific business",
                  "Not a teaser — you get the full plan, not a watered-down preview",
                  "Not a commitment — implement it yourself or ask us to do it. Your choice.",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-base text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={scrollToForm}
              className="btn-primary mt-6 mx-auto"
            >
              Get My Free Strategy
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">
              How It Works
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              What We Cover on Your Free Strategy Call
            </h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto">
              In 30 minutes, we walk you through the exact strategy to get 30–60 qualified sales calls every month.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: "01",
                title: "Your Offer & Market Analysis",
                desc: "We break down your business, ideal client profile, and current pipeline — and show you where the biggest opportunity for qualified sales calls is hiding.",
              },
              {
                num: "02",
                title: "Your Custom Acquisition Strategy",
                desc: "We map out the exact channels, targeting, and messaging that will get decision-makers to book qualified sales calls with you — specific to your market.",
              },
              {
                num: "03",
                title: "Your Revenue Projection",
                desc: "We show you what 30–60 qualified sales calls per month means for your revenue — based on your offer, close rate, and deal size.",
              },
              {
                num: "04",
                title: "Your Choice: DIY or Done-For-You",
                desc: "You walk away with the full strategy. Implement it yourself, hire your own team to run it, or ask us to do it for you. No pressure either way.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card gradient-border p-6 h-full flex flex-col"
              >
                <span className="text-3xl font-bold text-gold-500/20 mb-3">{step.num}</span>
                <h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-base text-white/80 leading-relaxed flex-1">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Is This Right for You? ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">
              Is This Right for You?
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              This Free Strategy Call Is Built For:
            </h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto">
              We put serious work into every strategy we build. To make sure the call is valuable for both of us, check both columns honestly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card gradient-border p-7"
            >
              <h3 className="text-base font-semibold text-emerald-400 mb-5 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> This Call Is For You If...
              </h3>
              <div className="space-y-3">
                {[
                  "You sell a high-value service or product ($3K–$50K+)",
                  "You want to see the exact strategy to get 30–60 qualified sales calls monthly",
                  "You're tired of guessing what's working and what isn't",
                  "You want a clear, actionable plan — not a generic pitch deck",
                  "You're open to implementing the strategy yourself or having us do it",
                  "You value your time and want a focused, no-fluff 30-minute call",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-base text-white/80 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-7 border border-white/[0.04]"
            >
              <h3 className="text-base font-semibold text-white/50 mb-5 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400/60" /> This Call Is NOT For You If...
              </h3>
              <div className="space-y-3">
                {[
                  "You don't have a product or service ready to sell yet",
                  "You're looking for a magic bullet, not a real strategy",
                  "You're not willing to spend 30 minutes on a focused call",
                  "You just want someone to tell you what you want to hear",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <div className="w-3 h-[2px] bg-red-400/50 rounded-full" />
                    </div>
                    <span className="text-base text-white/80 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-base text-white/80 leading-relaxed">
                If the left column describes you — the strategy call is free, the plan is yours to keep, and there&apos;s zero obligation. Fill in the form above.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Client Success: Video Testimonials ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">
              Client Success
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              They Started With the Same Free Call
            </h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto">
              Every one of these business owners booked a free strategy call, got the plan, and chose to implement it. Here&apos;s what happened.
            </p>
          </div>

          <VideoSlider />

          {/* CTA — sits directly under the slider */}
          <div className="mt-12 text-center">
            <div className="inline-block w-px h-8 bg-gradient-to-b from-white/20 to-transparent mb-8" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Ready to see how we&apos;d fill your calendar?
            </h3>
            <button
              onClick={scrollToForm}
              className="btn-primary mt-6 mx-auto"
            >
              Get My Free Strategy
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="mt-5 flex items-center justify-center gap-5 text-xs text-white/35 flex-wrap">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-gold-500/60" /> Zero obligation</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><span className="text-gold-400 tracking-tight">★★★★★</span> 4.9 on Trustpilot</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold-500/60" /> Takes under 2 min</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-4">
              What Our Clients Say
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              350+ Business Owners Got the Free Strategy. Here&apos;s What They Did With It.
            </h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto leading-relaxed">
              Some implemented it themselves. Some asked us to do it. All of them started with the same free call.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.07 }}
                className="glass-card p-6 border border-white/[0.05] flex flex-col"
              >
                <div className="text-gold-400 text-xs mb-3">★★★★★</div>
                <p className="text-base text-white/80 leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center gap-3">
                  <InitialsAvatar name={t.name} index={i} />
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-base text-white/80">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA — sits directly under written testimonials */}
          <div className="mt-12 text-center">
            <div className="inline-block w-px h-8 bg-gradient-to-b from-white/20 to-transparent mb-8" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              They all started with one free call.
            </h3>
            <button
              onClick={scrollToForm}
              className="btn-primary mt-6 mx-auto"
            >
              Get My Free Strategy
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="mt-5 flex items-center justify-center gap-5 text-xs text-white/35 flex-wrap">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-gold-500/60" /> Zero obligation</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><span className="text-gold-400 tracking-tight">★★★★★</span> 4.9 on Trustpilot</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold-500/60" /> Takes under 2 min</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-2xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">
              Questions
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final Hard CTA — replaces dead-end stats bar ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,162,63,0.1)_0%,_transparent_70%)]" />

            <div className="relative px-8 py-14 md:px-14">
              <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-4">
                You&apos;ve Seen the Proof
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight text-balance">
                Your Free Strategy to Get 30–60 Qualified Sales Calls Is One Form Away.
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-lg mx-auto leading-relaxed">
                350+ business owners have already seen this strategy. The call is free. The plan is yours. Implement it yourself or let us do it for you.
              </p>

              <button
                onClick={scrollToForm}
                className="btn-primary mt-8 inline-flex text-base"
              >
                Get My Free Strategy
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-white/25">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" /> Zero Risk
                </span>
                <a
                  href="https://www.trustpilot.com/review/novadatech.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white/50 transition-colors"
                >
                  <Star className="w-3.5 h-3.5" />
                  <span className="underline underline-offset-2 decoration-white/20">4.9★ Trustpilot</span>
                </a>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> 30-Min Call
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" /> No Obligation
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> 350+ Businesses Scaled
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
