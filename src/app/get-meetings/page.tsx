"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, Shield, Star, TrendingUp, Users,
  Clock, AlertCircle, Calendar, MessageSquare, ChevronDown, ArrowRight, ExternalLink,
  ChevronLeft, ChevronRight
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
  document.getElementById("meetings-form-embed")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

// ─── Data ───────────────────────────────────────────────────────────────────

// AUDIT: Every benefit must reinforce "30–60 qualified sales meetings monthly, or you don't pay"
const BENEFITS = [
  "The exact system we deploy to generate 30–60 qualified sales meetings every month for your business",
  "A custom acquisition plan — channels, targeting, and messaging built specifically for your market",
  "A clear revenue projection showing what 30–60 monthly sales meetings means for your bottom line",
  "How we eliminate cold outreach guesswork and fill your calendar with pre-qualified prospects every month",
  "Our performance guarantee in writing — if we don't deliver qualified meetings, you don't pay",
];

// AUDIT: Testimonials are real client quotes — they naturally align (meetings, pipeline, calendar)
const TESTIMONIALS = [
  {
    quote: "Within three weeks we had 14 new meetings booked with exactly the type of client we wanted. The targeting was spot on — every meeting was worth showing up to.",
    name: "Tony",
    role: "Founder, South Line Media",
  },
  {
    quote: "We closed four new retainer clients in our first 45 days. The meetings were pre-qualified — prospects already understood our value before we got on the call.",
    name: "Anthony",
    role: "Founder, Ripple Clarke",
  },
  {
    quote: "We went from $42K to over $91K monthly revenue in under 60 days. The qualified meetings drove everything — consistent, high-quality, every single week.",
    name: "Josh",
    role: "Director, Maxicare Plus",
  },
  {
    quote: "We scaled from $28K to $76K monthly in 90 days. 8–12 qualified meetings per week — every one of them was the right fit.",
    name: "Gunendu",
    role: "Director, Growth-Loop Consulting",
  },
  {
    quote: "Our conversion rate on discovery calls jumped to over 60%. The meetings are with people who are ready to buy — not tyre-kickers.",
    name: "Nate",
    role: "Owner, Larsky Tach and Feed",
  },
  {
    quote: "Close rate went from 25% to 67%. Every meeting is with someone who already understands our value — we just confirm the fit.",
    name: "Terver",
    role: "Founder, CareJewel",
  },
  {
    quote: "More qualified meetings in month one than the previous six months combined. I actually had to pause the system to catch up with demand.",
    name: "Jessica",
    role: "Founder, Jessica Teds Coaching",
  },
  {
    quote: "18 qualified meetings in month one — our best month ever. Found the exact niche where demand was high and competition was low.",
    name: "Mo",
    role: "Founder, Framer Health",
  },
  {
    quote: "Doubled our active participants in 4 months. The meetings were with exactly the right referral partners — warm, values-driven, and high-converting.",
    name: "Malkin",
    role: "CEO, Support24",
  },
];

// AUDIT: Steps reinforce "submit → book → get your guaranteed meetings plan"
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
    title: "We Show You the Guaranteed Meetings System",
    desc: "Our team reviews your business and shows you exactly how we'd generate 30–60 qualified sales meetings monthly — with a performance guarantee.",
  },
];

// AUDIT: Every FAQ answer must reference "qualified sales meetings", "every month", or "don't pay"
const FAQS = [
  {
    q: "What does 'or you don't pay' actually mean?",
    a: "It means exactly what it says. We guarantee 30–60 qualified sales meetings on your calendar every month. If we don't deliver, you don't pay us. That's written into our agreement — not a marketing line.",
  },
  {
    q: "How do you define a 'qualified' meeting?",
    a: "A qualified meeting is with a decision-maker who matches your ideal client profile, has the budget, and has a genuine need for your service. No tyre-kickers, no wrong-fit prospects. If a meeting doesn't meet the criteria, it doesn't count.",
  },
  {
    q: "How soon will I start getting meetings?",
    a: "Most partners see qualified sales meetings on their calendar within 7–14 days of activation. We move fast because we've already built the systems that work.",
  },
  {
    q: "Will I be pressured to sign up on the call?",
    a: "No. The call is to show you how we'd generate 30–60 qualified meetings monthly for your specific business. If it makes sense to work together, great. If not, you keep the strategy.",
  },
  {
    q: "What do I need to prepare for the call?",
    a: "Nothing formal. Just be ready to share a bit about your business, your ideal clients, and your revenue goals. We'll handle the rest.",
  },
  {
    q: "What if I've been burned by agencies before?",
    a: "Most of our partners have. That's why we built a performance guarantee — you only pay when qualified meetings are delivered to your calendar. No retainers, no ad budgets, no risk. If we don't perform, you don't pay.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "We work best with service businesses selling $3K–$50K+ offers who want a predictable flow of 30–60 qualified sales meetings every month. If that's you, the call will confirm the fit.",
  },
];

const VIDEO_TESTIMONIALS = [
  { id: "upgMW2nwwpk", title: "Tony — South Line Media", name: "Tony", company: "Founder, South Line Media" },
  { id: "0qabR5mfAfQ", title: "Anthony — Ripple Clarke", name: "Anthony", company: "Founder, Ripple Clarke" },
  { id: "JXEvONrDaOk", title: "Damian — Groundwork Ventures", name: "Damian", company: "Founder, Groundwork Ventures" },
  { id: "O3HUPQyflH8", title: "Jack — House Valley", name: "Jack", company: "Founder, House Valley" },
  { id: "w5iJNOADdXU", title: "Nate — Larsky Tach and Feed", name: "Nate", company: "Founder, Larsky Tach and Feed" },
  { id: "G44OKPVh3Uk", title: "Michael — Aaronson Investigations", name: "Michael", company: "Founder, Aaronson Investigations" },
  { id: "Ef4YTXOnCP0", title: "Jeff — Vertical Axis", name: "Jeff", company: "Founder, Vertical Axis" },
  { id: "CBL83P7OYgI", title: "Nicole — Morasco Media Services", name: "Nicole", company: "Founder, Morasco Media Services" },
];

// AUDIT: Trust items reinforce "guaranteed meetings" and "don't pay" — no conflicting messages
const TRUST_ITEMS = [
  { icon: Shield, label: "Performance Guarantee" },
  { icon: CheckCircle, label: "You Don't Pay Until We Deliver" },
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
      <div className="relative">
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

      {/* Mobile arrows */}
      <div className="flex sm:hidden items-center justify-center gap-4 mt-4">
        <motion.button onClick={prev} animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 16px rgba(212,175,55,0.4)", "0 0 0px rgba(212,175,55,0)"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} whileTap={{ scale: 0.93 }} className="w-12 h-12 rounded-full bg-navy-900/90 border border-gold-500/35 flex items-center justify-center text-gold-400" aria-label="Previous"><ChevronLeft className="w-6 h-6" /></motion.button>
        <div className="flex items-center gap-2">
          {VIDEO_TESTIMONIALS.map((_, i) => (<button key={i} onClick={() => goTo(i, i > current ? 1 : -1)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-gold-400" : "w-2 bg-white/20"}`} aria-label={`Go to video ${i + 1}`} />))}
        </div>
        <motion.button onClick={next} animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 24px rgba(212,175,55,0.6)", "0 0 0px rgba(212,175,55,0)"] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} whileTap={{ scale: 0.93 }} className="w-12 h-12 rounded-full bg-gold-500/15 border border-gold-500/60 flex items-center justify-center text-gold-400" aria-label="Next"><ChevronRight className="w-6 h-6" /></motion.button>
      </div>

      {/* Desktop dots */}
      <div className="hidden sm:flex items-center justify-center gap-2 mt-5">
        {VIDEO_TESTIMONIALS.map((_, i) => (<button key={i} onClick={() => goTo(i, i > current ? 1 : -1)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-gold-400" : "w-2 bg-white/20 hover:bg-white/40"}`} aria-label={`Go to video ${i + 1}`} />))}
      </div>
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function GetMeetingsPage() {
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
      {/* ── Minimal sticky header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-container section-padding">
          <div className="flex items-center justify-between h-16">
            <Link href="/get-meetings" className="flex items-center">
              <Logo variant="light" className="h-9 w-auto" />
            </Link>
            <div className="flex items-center gap-2 text-xs text-white/40">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Accepting new partners</span>
            </div>
          </div>
        </div>
      </header>

      <div className="h-16" />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO — AUDIT: Headline is the exact baseline. Eyebrow reinforces
          the guarantee. No conflicting messages.
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-6 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,162,63,0.08)_0%,_transparent_60%)]" />

        <div className="relative max-container section-padding text-center">
          {/* Eyebrow — reinforces guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-slow" />
            <span className="text-sm text-gold-400 font-medium">
              Performance Guaranteed — Or You Don&apos;t Pay
            </span>
          </motion.div>

          {/* HEADLINE — this IS the baseline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-balance max-w-4xl mx-auto"
          >
            Get 30 – 60{" "}
            <span className="gradient-text">Qualified Sales Meetings</span>{" "}
            Every Month Or You Don&apos;t Pay
          </motion.h1>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          VSL — AUDIT: Subheadline reinforces "30–60 meetings" + "don't pay"
          guarantee. No mention of "free call" — this page is about the
          performance guarantee on the actual service.
          ══════════════════════════════════════════════════════════════════════ */}
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
                title="How Novada Tech Generates Qualified Sales Meetings"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-xl md:text-2xl font-semibold text-white/90 max-w-2xl mx-auto leading-relaxed">
              We install a Proven Client Acquisition System into your business that puts 30–60 qualified sales meetings on your calendar every month. If we don&apos;t deliver, you don&apos;t pay.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FORM — AUDIT: Header reinforces "30–60 meetings" + "or you don't
          pay". Trust items = guarantee language. No conflicting "free"
          messaging — this page sells the guaranteed service.
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding pt-8 pb-0">
        <div className="max-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div>
              <div className="glass-card gradient-border rounded-t-2xl rounded-b-none px-7 pt-7 pb-5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">
                    Accepting New Partners
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  Get 30–60 Guaranteed Sales Meetings Monthly
                </h2>
                <p className="mt-1.5 text-base text-white/80">
                  Tell us about your business and we&apos;ll show you exactly how we&apos;d fill your calendar. Takes under 2 minutes.
                </p>
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

              <div className="glass-card rounded-t-none rounded-b-2xl overflow-hidden" style={{ borderTop: "none" }}>
                <iframe
                  src="https://link.novadatech.com/widget/form/2UikgU0iSTsy1ax334cR"
                  style={{ width: "100%", minHeight: "380px", border: "none", display: "block" }}
                  id="meetings-form-embed"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-activation-type="alwaysActivated"
                  data-deactivation-type="neverDeactivate"
                  data-form-name="Novada Tech Meetings Form"
                  data-height="380"
                  data-layout-iframe-id="meetings-form-embed"
                  data-form-id="2UikgU0iSTsy1ax334cR"
                  title="Get Guaranteed Sales Meetings"
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {TRUST_ITEMS.map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-white/75 bg-white/[0.05] border border-white/[0.10] rounded-lg px-3 py-2.5 font-medium">
                    <Icon className="w-3.5 h-3.5 flex-shrink-0 text-gold-400" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              <a href="https://www.trustpilot.com/review/novadatech.com.au" target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 text-xs text-white/60 hover:text-white transition-colors font-medium">
                <span className="text-gold-400">★★★★★</span>
                <span>Verified 4.9/5 — 77+ reviews on Trustpilot</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WHAT YOU GET — AUDIT: Every bullet references "30–60 meetings",
          "every month", "calendar", or "guarantee". ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding pt-12 pb-0">
        <div className="max-container max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-0.5">
              What You Get
            </h3>
            <p className="text-base text-white/80 mb-4">When you partner with us</p>
            <p className="text-base text-emerald-400/80 italic mb-4 leading-relaxed">If we don&apos;t deliver 30–60 qualified sales meetings to your calendar every month — you don&apos;t pay us a cent.</p>
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

      {/* ══════════════════════════════════════════════════════════════════════
          WHAT HAPPENS NEXT — AUDIT: Step 3 references the guaranteed
          meetings system. ✅
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
          VIDEO TESTIMONIALS — AUDIT: Subtitle ties to "qualified meetings
          every month" + guarantee. CTA reinforces "guaranteed meetings". ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">Client Success</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">They Get 30–60 Qualified Meetings Monthly. Every Month.</h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto">Hear directly from business owners who now have a guaranteed flow of qualified sales meetings.</p>
          </div>

          <VideoSlider />

          <div className="mt-12 text-center">
            <div className="inline-block w-px h-8 bg-gradient-to-b from-white/20 to-transparent mb-8" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">Want the same guaranteed results?</h3>
            <p className="mt-3 text-white/80 text-lg max-w-sm mx-auto leading-relaxed">We&apos;ll show you how we&apos;d generate 30–60 qualified sales meetings for your business every month — or you don&apos;t pay.</p>
            <button onClick={scrollToForm} className="btn-primary mt-6 mx-auto">
              Get My Guaranteed Meetings Plan
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="mt-5 flex items-center justify-center gap-5 text-xs text-white/35 flex-wrap">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-gold-500/60" /> Performance guaranteed</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><span className="text-gold-400 tracking-tight">★★★★★</span> 4.9 on Trustpilot</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold-500/60" /> Takes under 2 min</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WRITTEN TESTIMONIALS — AUDIT: Header ties to "guaranteed meetings".
          CTA reinforces "or you don't pay". ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-4">What Our Partners Say</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">350+ Businesses. Guaranteed Meetings. Every Month.</h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto leading-relaxed">Every one of them started exactly where you are right now.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 6) * 0.07 }} className="glass-card p-6 border border-white/[0.05] flex flex-col">
                <div className="text-gold-400 text-xs mb-3">★★★★★</div>
                <p className="text-base text-white/80 leading-relaxed italic flex-1">&ldquo;{t.quote}&rdquo;</p>
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

          <div className="mt-12 text-center">
            <div className="inline-block w-px h-8 bg-gradient-to-b from-white/20 to-transparent mb-8" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">They all have one thing in common.</h3>
            <p className="mt-3 text-white/80 text-lg max-w-sm mx-auto leading-relaxed">30–60 qualified sales meetings on their calendar. Every month. Guaranteed — or they don&apos;t pay.</p>
            <button onClick={scrollToForm} className="btn-primary mt-6 mx-auto">
              Get My Guaranteed Meetings Plan
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="mt-5 flex items-center justify-center gap-5 text-xs text-white/35 flex-wrap">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-gold-500/60" /> Performance guaranteed</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><span className="text-gold-400 tracking-tight">★★★★★</span> 4.9 on Trustpilot</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold-500/60" /> Takes under 2 min</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          IS THIS RIGHT FOR YOU — AUDIT: Good-fit items reference "qualified
          meetings", "every month", "guaranteed". Not-fit CTA reinforces
          guarantee. ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">Is This Right for You?</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">We Only Guarantee Meetings for Businesses That Qualify</h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto">We can&apos;t guarantee 30–60 qualified meetings for everyone. Check both columns honestly.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card gradient-border p-7">
              <h3 className="text-base font-semibold text-emerald-400 mb-5 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> We Can Guarantee Meetings If You...</h3>
              <div className="space-y-3">
                {[
                  "Sell a high-value service or product ($3K–$50K+)",
                  "Want 30–60 qualified sales meetings filling your calendar every month",
                  "Are tired of unpredictable revenue, cold leads, and wasted ad spend",
                  "Want a system that delivers meetings on autopilot — not another marketing agency",
                  "Are ready to show up to pre-qualified meetings and close deals",
                  "Want a performance guarantee — you only pay when meetings are delivered",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-base text-white/80 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-7 border border-white/[0.04]">
              <h3 className="text-base font-semibold text-white/50 mb-5 flex items-center gap-2"><AlertCircle className="w-4 h-4 text-red-400/60" /> We Can&apos;t Guarantee Meetings If You...</h3>
              <div className="space-y-3">
                {[
                  "Don't have a deliverable product or service ready to sell",
                  "Expect results without following a proven process",
                  "Refuse to show up to qualified meetings or engage with prospects",
                  "Are looking for a cheap, one-size-fits-all solution",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center"><div className="w-3 h-[2px] bg-red-400/50 rounded-full" /></div>
                    <span className="text-base text-white/80 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-base text-white/80 leading-relaxed">If the left column describes you — fill in the form above. We&apos;ll guarantee 30–60 qualified sales meetings every month, or you don&apos;t pay.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          RISK REVERSAL — AUDIT: This is where the guarantee shines.
          Traditional = risk on you. Ours = risk on us. "Or you don't pay"
          is the throughline. ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">We Take the Risk.{" "}<span className="gradient-text">You Get the Meetings.</span></h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto">Other agencies charge you thousands with no guarantee. We guarantee 30–60 qualified meetings — or you don&apos;t pay.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-7 rounded-2xl border border-red-400/10 bg-red-400/[0.02]">
              <p className="text-xs uppercase tracking-[0.2em] text-red-400/60 font-medium mb-5">Traditional Agencies</p>
              <div className="space-y-3">
                {["Monthly retainers — paid whether you get meetings or not", "Upfront ad budgets — often with zero accountability", "Setup fees — before a single meeting is booked", "Long-term contracts — locked in with no performance guarantee"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center"><div className="w-3 h-[2px] bg-red-400/50 rounded-full" /></div>
                    <span className="text-base text-white/80">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-base text-red-400/65 font-medium">None of that guarantees you a single qualified meeting.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card gradient-border p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-5">Our Performance Guarantee</p>
              <div className="space-y-3">
                {["30–60 qualified sales meetings delivered to your calendar monthly", "You only pay when meetings are booked — not before", "No retainers, no ad spend, no setup fees", "If we don't deliver, you don't pay — written into the agreement"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span className="text-base text-white/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-base text-gold-400/85 font-medium">We don&apos;t eat unless you eat. That&apos;s a real guarantee.</p>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block w-px h-8 bg-gradient-to-b from-white/20 to-transparent mb-8" />
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 mb-5"><Shield className="w-7 h-7 text-gold-400" /></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">The guarantee is simple.</h3>
            <p className="mt-3 text-white/80 text-lg max-w-md mx-auto leading-relaxed">30–60 qualified sales meetings on your calendar every month. If we don&apos;t deliver, you don&apos;t pay. No fine print.</p>
            <button onClick={scrollToForm} className="btn-primary mt-6 mx-auto">
              Get My Guaranteed Meetings Plan
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="mt-5 flex items-center justify-center gap-5 text-xs text-white/35 flex-wrap">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-gold-500/60" /> Performance guaranteed</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><span className="text-gold-400 tracking-tight">★★★★★</span> 4.9 on Trustpilot</span>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold-500/60" /> Takes under 2 min</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FAQ — AUDIT: Every answer references "qualified sales meetings",
          "every month", "don't pay", or "guarantee". ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-2xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">Questions</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FINAL CTA — AUDIT: Headline = "30–60 meetings guaranteed".
          Body = guarantee reinforcement. Button = action. ✅
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,162,63,0.1)_0%,_transparent_70%)]" />

            <div className="relative px-8 py-14 md:px-14">
              <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-4">Performance Guaranteed</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight text-balance">30–60 Qualified Sales Meetings. Every Month. Or You Don&apos;t Pay.</h2>
              <p className="mt-4 text-white/80 text-lg max-w-lg mx-auto leading-relaxed">350+ businesses already get guaranteed qualified meetings on their calendar every month. You&apos;re one form away from joining them.</p>

              <button onClick={scrollToForm} className="btn-primary mt-8 inline-flex text-base">
                Get My Guaranteed Meetings Plan
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-white/25">
                <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> Performance Guaranteed</span>
                <a href="https://www.trustpilot.com/review/novadatech.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/50 transition-colors"><Star className="w-3.5 h-3.5" /><span className="underline underline-offset-2 decoration-white/20">4.9★ Trustpilot</span></a>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" /> No Pay Until We Deliver</span>
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> 350+ Businesses Scaled</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
