"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, Shield, Star, TrendingUp, Users,
  Clock, AlertCircle, Calendar, MessageSquare, ChevronDown, ArrowRight, ExternalLink,
  ChevronLeft, ChevronRight
} from "lucide-react";
import Image from "next/image";
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
const PROOF_POINTS = [
  { icon: Star, text: "4.9★ Trustpilot", href: "https://www.trustpilot.com/review/novadatech.com.au" },
  { icon: Users, text: "350+ Businesses Scaled", href: null },
  { icon: TrendingUp, text: "$50M+ Revenue Generated", href: null },
  { icon: Shield, text: "Pay Only For Results", href: null },
];

const BENEFITS = [
  "A custom acquisition plan — the exact channels, targeting, and messaging we'd use for your business specifically",
  "A clear revenue projection based on your offer, market, and current pipeline",
  "Honest feedback on what's blocking your growth and the fastest path to fix it",
  "How to stop relying on referrals and build a predictable system that fills your calendar",
  "Whether a Growth Partnership is the right fit — and if not, we'll tell you why",
];

const WHO_ITS_FOR = [
  "You sell a high-value service ($3K–$50K+)",
  "You're tired of chasing referrals or inconsistent leads",
  "You want a predictable system that fills your pipeline",
  "You're ready to scale without hiring a big sales team",
  "You want real results — not just reports and excuses",
];

const TESTIMONIALS = [
  {
    quote: "I was already running ads but the leads were all over the place — wrong industries, wrong budgets. Within three weeks we had 14 new meetings booked with exactly the type of client we wanted.",
    name: "Tony",
    role: "Founder, South Line Media",
  },
  {
    quote: "We'd been burned by two agencies before and the pay-for-results pitch sounded too good to be true. It wasn't. We closed four new retainer clients in our first 45 days.",
    name: "Anthony",
    role: "Founder, Ripple Clarke",
  },
  {
    quote: "Our biggest problem wasn't the product — it was getting in front of the right people consistently. The pipeline went from sporadic to predictable within the first month.",
    name: "Damian",
    role: "Founder, Groundwork Ventures",
  },
  {
    quote: "We'd been growing mainly through referrals and the feast-and-famine cycle was exhausting. In 30 days Novada Tech had us booked out three weeks ahead. The system just keeps running.",
    name: "Jack",
    role: "Director, House Valley",
  },
  {
    quote: "Finding quality B2B clients in our space isn't easy. Novada Tech built outreach that educated prospects before we even spoke to them. Our conversion rate on discovery calls jumped to over 60%.",
    name: "Nate",
    role: "Owner, Larsky Tach and Feed",
  },
  {
    quote: "We went from $42K to over $91K monthly revenue in under 60 days. The team understood our space quickly and built a system that brought in high-quality leads consistently. The ROI speaks for itself.",
    name: "Josh",
    role: "Director, Maxicare Plus",
  },
  {
    quote: "Within the first month the system brought in more clients than I'd converted in the previous six months combined. I actually had to pause it to catch up with demand.",
    name: "Jessica",
    role: "Founder, Jessica Teds Coaching",
  },
  {
    quote: "We scaled from $28K to $76K monthly in 90 days. What impressed me most was how quickly they understood our positioning and built outreach that didn't sound generic.",
    name: "Gunendu",
    role: "Director, Growth-Loop Consulting",
  },
  {
    quote: "In the NDIS space, trust is everything. I was worried outreach would feel cold. Instead Novada Tech built campaigns that led with our values and the right clients found us. We've doubled our active participants in four months.",
    name: "Malkin",
    role: "CEO, Support24",
  },
  {
    quote: "I run two businesses and couldn't justify spending hours generating leads for both. Novada Tech runs acquisition for Recruitilon on autopilot. I show up to calls, close deals, and the pipeline refills itself.",
    name: "Malkin",
    role: "Founder, Recruitilon",
  },
  {
    quote: "The targeting is incredibly precise — now we only speak to clients who are ready and already understand our value. Our close rate went from about 25% to over 65%.",
    name: "Terver",
    role: "Founder, CareJewel",
  },
  {
    quote: "Growing a community services business requires a different approach. Novada Tech understood that and built outreach that connected with the right referral partners. We've tripled our referral network in six months.",
    name: "Uche",
    role: "CEO, Morning Star Community Services",
  },
  {
    quote: "I was doing everything on Instagram and getting followers but not customers. Novada Tech flipped that around — actual bookings and catering enquiries. The first month alone more than paid for itself.",
    name: "Ella",
    role: "Founder, Ellaz Chop",
  },
  {
    quote: "Before Novada Tech I spent two hours every morning trying to generate leads. Now I spend that time serving clients. The acquisition runs in the background and I focus on delivery.",
    name: "Peter",
    role: "Director, Support Link",
  },
  {
    quote: "We operate in a niche that requires trust before a conversation starts. Novada Tech built warm outreach that positioned us as the authority before we spoke to a single prospect. Meeting quality went through the roof.",
    name: "Michael",
    role: "Managing Partner, Aaronson & Co Ventures",
  },
  {
    quote: "Ironic that a marketing agency needed help with its own client acquisition — but it's true. Novada Tech brought structure and consistency to our pipeline. We've onboarded six new clients in the past quarter alone.",
    name: "Ola",
    role: "Founder, Simply Ads",
  },
  {
    quote: "Family businesses like ours don't have time to chase leads. We're on the tools every day. The fact that this system runs in the background and books calls into our calendar is genuinely incredible.",
    name: "Lucas",
    role: "Director, J.R & Sons Ltd",
  },
  {
    quote: "Health and wellness is a crowded space. Novada Tech helped us find the specific niche where demand was high and competition was low. First month we had 18 qualified consultations booked — our best month ever.",
    name: "Mo",
    role: "Founder, Framer Health",
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
    title: "We Arrive Ready With Your Strategy",
    desc: "Before the call, our team reviews your business so we arrive with a tailored growth plan — not a generic pitch.",
  },
];

const FAQS = [
  {
    q: "Is this call really free?",
    a: "Yes, 100% free. There is no charge for the strategy call and no obligation to work with us afterwards.",
  },
  {
    q: "Will I be pressured to buy anything?",
    a: "Absolutely not. We only work with businesses we're genuinely confident we can help. If we're not a fit, we'll tell you honestly — and you still walk away with a clear strategy.",
  },
  {
    q: "How long does the call take?",
    a: "30 minutes. We keep it focused and actionable — no fluff, no hard sell. Just a clear plan for your business.",
  },
  {
    q: "What do I need to prepare?",
    a: "Nothing formal. Just come with an open mind and be ready to share a bit about your current business, your ideal clients, and your revenue goals.",
  },
  {
    q: "What if I've been burned by agencies before?",
    a: "We hear this on almost every call. The key difference: we don't charge retainers or upfront fees. We only earn when you earn. If we don't generate results, you don't pay us. That's not a line — it's how our agreements are structured.",
  },
];

const VIDEO_TESTIMONIALS = [
  {
    id: "upgMW2nwwpk",
    title: "Tony — South Line Media",
    name: "Tony",
    company: "Founder, South Line Media",
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
  { icon: Shield, label: "Zero Risk, Zero Obligation" },
  { icon: CheckCircle, label: "No Spam, Ever" },
  { icon: Star, label: "Rated 4.9★ on Trustpilot" },
  { icon: Clock, label: "Under 2 Minutes to Complete" },
];

// ─── FAQ Item ───────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group glass-card border border-white/[0.06] rounded-xl overflow-hidden">
      <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
        <span className="text-sm font-medium text-white">{q}</span>
        <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="px-5 pb-5 text-sm text-white/50 leading-relaxed border-t border-white/[0.05] pt-4">
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
            <Link href="/" className="flex items-center">
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

      {/* ── Urgency bar ── */}
      <div className="bg-gold-500/10 border-b border-gold-500/20 py-3 px-4">
        <p className="text-sm text-gold-400 font-medium flex items-center justify-center gap-2 text-center">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>
            <strong>Limited new partnerships open each month</strong> — we review applications on a rolling basis and only take on clients we can genuinely help
          </span>
        </p>
      </div>

      {/* ── Hero ── */}
      <section className="relative pt-12 pb-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,162,63,0.08)_0%,_transparent_60%)]" />

        <div className="relative max-container section-padding text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-4"
          >
            Free Growth Strategy Session
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance max-w-4xl mx-auto"
          >
            Walk Away With a Custom Plan Showing Exactly How We&apos;d Generate{" "}
            <span className="gradient-text">High-Value Clients</span>{" "}
            For Your Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            In 30 minutes, we map out the exact system — channels, targeting, and messaging —
            tailored to your business. Completely free. No obligation. No hard sell.
          </motion.p>

          {/* 4-point proof bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto"
          >
            {PROOF_POINTS.map(({ icon: Icon, text, href }, i) => {
              const inner = (
                <div className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.03] border border-white/[0.06] py-4 px-3 w-full">
                  <Icon className="w-5 h-5 text-gold-400" />
                  <span className="text-xs text-white/50 text-center leading-snug">{text}</span>
                </div>
              );
              return href ? (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  {inner}
                </a>
              ) : (
                <div key={i}>{inner}</div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── VSL ── */}
      <section className="section-padding pt-2 pb-8">
        <div className="max-container max-w-3xl">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-medium">
              <TrendingUp className="w-4 h-4 flex-shrink-0" />
              See exactly how we&apos;ve helped 350+ businesses build predictable pipelines — before you apply
            </div>
          </div>
          <div
            className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              src="https://www.youtube.com/embed/w6atSnPDjJw?autoplay=1&mute=1"
              title="How Novada Tech Generates High-Value Clients"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
      </section>

      {/* ── MAIN 2-COLUMN: Benefits LEFT · Form RIGHT ── */}
      <section className="section-padding pt-8 pb-0">
        <div className="max-container">
          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* Form — first on mobile, right on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3 order-first lg:order-last"
            >
              <div className="sticky top-24">
                {/* Form card header */}
                <div className="glass-card gradient-border rounded-t-2xl rounded-b-none px-7 pt-7 pb-5 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">
                      Spots Available This Week
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    Claim Your Free Strategy Session
                  </h2>
                  <p className="mt-1.5 text-sm text-white/50">
                    Complete the short form — takes under 2 minutes. Zero risk, zero obligation.
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
                    style={{ width: "100%", minHeight: "480px", border: "none", display: "block" }}
                    id="apply-form-embed"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-activation-type="alwaysActivated"
                    data-deactivation-type="neverDeactivate"
                    data-form-name="Novada Tech Apply Form"
                    data-height="480"
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

                {/* Trustpilot link */}
                <a
                  href="https://www.trustpilot.com/review/novadatech.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 text-xs text-white/60 hover:text-white transition-colors font-medium"
                >
                  <span className="text-gold-400">★★★★★</span>
                  <span>Verified 4.9/5 — 77+ reviews on Trustpilot</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>

            {/* Left — benefit cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-5 order-last lg:order-first"
            >
              {/* What you'll walk away with */}
              <div className="glass-card gradient-border p-6">
                <h3 className="text-base font-semibold text-white mb-1">
                  What You&apos;ll Walk Away With
                </h3>
                <p className="text-xs text-white/40 mb-4">From your free 30-minute strategy call</p>
                <ul className="space-y-3">
                  {BENEFITS.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-white/60 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who it's for */}
              <div className="glass-card gradient-border p-6">
                <h3 className="text-base font-semibold text-white mb-4">
                  This Is For You If...
                </h3>
                <ul className="space-y-3">
                  {WHO_ITS_FOR.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What Happens Next — moved directly below form ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">
              After You Submit
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Here&apos;s What Happens Next
            </h2>
            <p className="mt-3 text-white/40 text-sm max-w-lg mx-auto">
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
                <p className="text-xs text-white/40 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
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
              Real Results From Real Businesses
            </h2>
            <p className="mt-3 text-white/40 text-sm max-w-lg mx-auto">
              Don&apos;t take our word for it — hear directly from business owners we&apos;ve helped scale.
            </p>
          </div>

          <VideoSlider />

          {/* CTA — sits directly under the slider */}
          <div className="mt-12 text-center">
            <div className="inline-block w-px h-8 bg-gradient-to-b from-white/20 to-transparent mb-8" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Seen enough? Your spot is waiting.
            </h3>
            <p className="mt-3 text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
              The call is free, the plan is custom, and the risk is zero.
            </p>
            <button
              onClick={scrollToForm}
              className="btn-primary mt-6 mx-auto"
            >
              Claim My Free Strategy Session
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="mt-5 flex items-center justify-center gap-5 text-xs text-white/35 flex-wrap">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-gold-500/60" /> Zero obligation</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><span className="text-gold-400 tracking-tight">★★★★★</span> 4.9 on Trustpilot</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold-500/60" /> Under 2 min to apply</span>
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
              350+ businesses have made this same decision.
            </h2>
            <p className="mt-3 text-white/50 text-sm max-w-lg mx-auto leading-relaxed">
              Here&apos;s what they say on the other side.
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
                <p className="text-sm text-white/60 leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center gap-3">
                  <InitialsAvatar name={t.name} index={i} />
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA — sits directly under written testimonials */}
          <div className="mt-12 text-center">
            <div className="inline-block w-px h-8 bg-gradient-to-b from-white/20 to-transparent mb-8" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Your story could be next.
            </h3>
            <p className="mt-3 text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
              Every one of those business owners started by filling in the same form you&apos;re looking at now.
            </p>
            <button
              onClick={scrollToForm}
              className="btn-primary mt-6 mx-auto"
            >
              Claim My Free Strategy Session
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="mt-5 flex items-center justify-center gap-5 text-xs text-white/35 flex-wrap">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-gold-500/60" /> Zero obligation</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><span className="text-gold-400 tracking-tight">★★★★★</span> 4.9 on Trustpilot</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold-500/60" /> Under 2 min to apply</span>
            </div>
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
              We&apos;re Selective About Who We Partner With
            </h2>
            <p className="mt-3 text-white/40 text-sm max-w-lg mx-auto">
              We only take on clients we know we can get results for. Check both columns honestly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Good fit */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card gradient-border p-7"
            >
              <h3 className="text-base font-semibold text-emerald-400 mb-5 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> We&apos;re a Fit If You Are...
              </h3>
              <div className="space-y-3">
                {[
                  "A business owner selling a high-value service ($3K–$50K+)",
                  "Ready to scale but lack the system or team to get there",
                  "Tired of inconsistent referrals, random leads, and wasted ad spend",
                  "Looking for a real partner — not another agency sending you reports",
                  "Willing to follow a proven process and take calls with qualified prospects",
                  "Want results without retainers, setup fees, or long-term contracts",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/70 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Not a fit */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-7 border border-white/[0.04]"
            >
              <h3 className="text-base font-semibold text-white/50 mb-5 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400/60" /> We Are NOT a Fit If You...
              </h3>
              <div className="space-y-3">
                {[
                  "Don't have a deliverable product or service ready to sell",
                  "Expect overnight results without following a proven process",
                  "Refuse to take calls or engage with qualified prospects",
                  "Are looking for a cheap, one-size-fits-all solution",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <div className="w-3 h-[2px] bg-red-400/50 rounded-full" />
                    </div>
                    <span className="text-sm text-white/40 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-white/30 leading-relaxed">
                If the left column describes you — stop scrolling and fill in the form above. This session is free and there&apos;s zero obligation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Risk Reversal ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              We Take the Risk.{" "}
              <span className="gradient-text">You Reap the Rewards.</span>
            </h2>
            <p className="mt-3 text-white/40 text-sm max-w-lg mx-auto">
              Every other agency charges you regardless of results. We don&apos;t.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Traditional */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-7 rounded-2xl border border-red-400/10 bg-red-400/[0.02]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-red-400/60 font-medium mb-5">
                Traditional Agencies Charge
              </p>
              <div className="space-y-3">
                {[
                  "Monthly retainers — paid whether you win or lose",
                  "Upfront ad budgets — often with no accountability",
                  "Setup fees — just to get started",
                  "Long-term contracts — locking you in for 12 months",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                      <div className="w-3 h-[2px] bg-red-400/50 rounded-full" />
                    </div>
                    <span className="text-sm text-white/40">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-red-400/50 font-medium">
                None of that guarantees you a single client.
              </p>
            </motion.div>

            {/* Our model */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card gradient-border p-7"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-5">
                Our Growth Partnership
              </p>
              <div className="space-y-3">
                {[
                  "You only pay for qualified meetings booked",
                  "You only share revenue on deals we help you close",
                  "You only invest when real money comes in",
                  "We handle the entire acquisition and sales cycle",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span className="text-sm text-white/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-gold-400/70 font-medium">
                We don&apos;t win unless you win. That&apos;s how partnerships should work.
              </p>
            </motion.div>
          </div>

          {/* CTA — sits directly under the risk section */}
          <div className="mt-12 text-center">
            <div className="inline-block w-px h-8 bg-gradient-to-b from-white/20 to-transparent mb-8" />
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 mb-5">
              <Shield className="w-7 h-7 text-gold-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Zero risk to get started.
            </h3>
            <p className="mt-3 text-white/50 text-sm max-w-md mx-auto leading-relaxed">
              Your strategy session is 100% free. No credit card. No commitment. If we can&apos;t map out a clear path to results, you owe us nothing.
            </p>
            <button
              onClick={scrollToForm}
              className="btn-primary mt-6 mx-auto"
            >
              Claim My Free Strategy Session
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="mt-5 flex items-center justify-center gap-5 text-xs text-white/35 flex-wrap">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-gold-500/60" /> Zero obligation</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><span className="text-gold-400 tracking-tight">★★★★★</span> 4.9 on Trustpilot</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold-500/60" /> Under 2 min to apply</span>
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
                Now It&apos;s Your Turn.
              </h2>
              <p className="mt-4 text-white/40 text-sm max-w-lg mx-auto leading-relaxed">
                350+ businesses chose to fill this form. The only difference between them and you is they took the first step. The call is free. The plan is custom. The risk is zero.
              </p>

              <button
                onClick={scrollToForm}
                className="btn-primary mt-8 inline-flex text-base"
              >
                Claim My Free Strategy Session
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
