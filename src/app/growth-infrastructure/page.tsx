"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, Shield, Star, TrendingUp, Users,
  Clock, AlertCircle, ChevronDown, ArrowRight, ExternalLink,
  ChevronLeft, ChevronRight, Play
} from "lucide-react";
import Link from "next/link";
import NovadaLogo from "@/components/NovadaLogo";

function scrollToForm() {
  document.getElementById("growth-form-embed")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

// ─── Data ───────────────────────────────────────────────────────────────────

const OUTCOMES = [
  "20+ qualified appointments on your calendar every month — guaranteed",
  "Authority video content built around you that grows your brand",
  "Multi-platform video content engine that compounds your visibility",
  "Pre-qualified appointment booking — no tyre-kickers on your calendar",
  "Complete CRM and pipeline infrastructure — yours to keep",
  "A predictable, forecastable monthly pipeline you can build a business on",
  "Built into your business, run for you, owned by you",
];

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
    quote: "We went from $42K to $91K monthly in under 60 days. The pipeline became predictable for the first time — we could forecast and hire with confidence.",
    name: "Josh",
    role: "Director, Maxicare Plus",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    quote: "We'd been burned by two agencies before. Growth Infrastructure was different — it was a system, not a service. 4 new retainer clients in the first 45 days.",
    name: "Uche",
    role: "Founder, The Morning Star Community Services",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    quote: "Discovery call conversion jumped from 28% to over 60%. The authority content meant prospects arrived already sold on us — we just confirmed fit.",
    name: "Malkin",
    role: "Founder, Support24",
    avatar: "https://i.pravatar.cc/150?img=53",
  },
  {
    quote: "More qualified appointments in month one than in the previous six months combined. The infrastructure ran on its own — I went back to delivery.",
    name: "Jessica",
    role: "Founder, Jessica Teds Coaching",
    avatar: "https://i.pravatar.cc/150?img=47",
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
    a: "If your offer is under $5K, if you don't have a deliverable service ready, or if you're looking for a magic-button solution that requires zero involvement — this isn't the right fit. We're selective because the guarantee only works when the underlying business is ready to scale.",
  },
];

const QUALIFIES = [
  "You sell a high-value service or product ($3K+)",
  "You want 20+ qualified appointments filling your calendar every month",
  "You're ready to install a system, not hire another vendor",
];

const NOT_FOR = [
  "Your offer is under $5K or not yet validated",
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
        <motion.button onClick={prev} animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 16px rgba(212,175,55,0.4)", "0 0 0px rgba(212,175,55,0)"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.93 }} className="hidden sm:flex absolute left-0 top-[42%] -translate-y-1/2 w-12 h-12 rounded-full bg-navy-900/90 border border-gold-500/35 items-center justify-center text-gold-400 hover:border-gold-500/80 hover:bg-navy-800 transition-colors duration-200 z-10" aria-label="Previous"><ChevronLeft className="w-6 h-6" /></motion.button>
        <motion.button onClick={next} animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 24px rgba(212,175,55,0.6)", "0 0 0px rgba(212,175,55,0)"] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.93 }} className="hidden sm:flex absolute right-0 top-[42%] -translate-y-1/2 w-12 h-12 rounded-full bg-gold-500/15 border border-gold-500/60 items-center justify-center text-gold-400 hover:bg-gold-500/25 hover:border-gold-500 transition-colors duration-200 z-10" aria-label="Next"><ChevronRight className="w-6 h-6" /></motion.button>

        <div className="sm:px-16">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={video.id} initial={{ opacity: 0, x: direction * 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: direction * -40 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="glass-card gradient-border p-3">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <iframe src={`https://www.youtube.com/embed/${video.id}`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" style={{ border: "none" }} />
              </div>
              <div className="flex items-center gap-3 mt-3 px-2 pb-1">
                <div className="w-7 h-7 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-gold-300">{video.name[0]}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/70">{video.name}</p>
                  <p className="text-[11px] text-white/35">{video.company}</p>
                </div>
                <div className="ml-auto text-gold-400 text-xs flex-shrink-0">{"★★★★★"}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex sm:hidden items-center justify-center gap-4 mt-4">
        <motion.button onClick={prev} animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 16px rgba(212,175,55,0.4)", "0 0 0px rgba(212,175,55,0)"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} whileTap={{ scale: 0.93 }} className="w-12 h-12 rounded-full bg-navy-900/90 border border-gold-500/35 flex items-center justify-center text-gold-400" aria-label="Previous"><ChevronLeft className="w-6 h-6" /></motion.button>
        <div className="flex items-center gap-2">
          {VIDEO_TESTIMONIALS.map((_, i) => (<button key={i} onClick={() => goTo(i, i > current ? 1 : -1)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-gold-400" : "w-2 bg-white/20"}`} aria-label={`Go to video ${i + 1}`} />))}
        </div>
        <motion.button onClick={next} animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 24px rgba(212,175,55,0.6)", "0 0 0px rgba(212,175,55,0)"] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} whileTap={{ scale: 0.93 }} className="w-12 h-12 rounded-full bg-gold-500/15 border border-gold-500/60 flex items-center justify-center text-gold-400" aria-label="Next"><ChevronRight className="w-6 h-6" /></motion.button>
      </div>

      <div className="hidden sm:flex items-center justify-center gap-2 mt-5">
        {VIDEO_TESTIMONIALS.map((_, i) => (<button key={i} onClick={() => goTo(i, i > current ? 1 : -1)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-gold-400" : "w-2 bg-white/20 hover:bg-white/40"}`} aria-label={`Go to video ${i + 1}`} />))}
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
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className="fixed bottom-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-xl border-t border-white/[0.08] py-3 px-5 sm:px-8">
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
      {/* ── Minimal sticky header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-container section-padding">
          <div className="flex items-center justify-between h-20">
            <Link href="/growth-infrastructure" className="flex items-center">
              <NovadaLogo variant="light" className="h-12 w-auto" />
            </Link>
            <div className="flex items-center gap-2 text-xs text-white/40">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>3 partner spots available this quarter</span>
            </div>
          </div>
        </div>
      </header>
      <div className="h-20" />

      {/* ── Hero + Above-Fold CTA ── */}
      <section className="relative pt-6 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,162,63,0.08)_0%,_transparent_60%)]" />
        <div className="relative max-container section-padding text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 mb-4">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-slow" />
            <span className="text-sm text-gold-400 font-medium">Growth Infrastructure&trade; — Performance Guaranteed</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-balance max-w-4xl mx-auto">
            Get{" "}
            <span className="gradient-text">20+ Qualified Appointments</span>{" "}Every Month — Guaranteed Or You Don&apos;t Pay.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            We install a complete client acquisition infrastructure into your business — outbound system, authority video content, and appointment booking — designed to generate consistent pipeline in as little as 14 days.
          </motion.p>

          {/* ABOVE-THE-FOLD CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-6">
            <button onClick={scrollToForm} className="btn-primary text-base md:text-lg px-10 py-4">
              See If You Qualify
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="mt-3 flex items-center justify-center gap-4 text-xs text-white/35 flex-wrap">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-gold-500/60" /> 20+ appointments guaranteed monthly</span>
              <span className="text-white/15">|</span>
              <a href="https://www.trustpilot.com/review/novadatech.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/50 transition-colors">
                <span className="text-gold-400 tracking-tight">{"★★★★★"}</span>
                <span className="underline underline-offset-2 decoration-white/20">4.9 on Trustpilot</span>
              </a>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-gold-500/60" /> Join 350+ service businesses</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VSL with duration label + presenter identity ── */}
      <section className="section-padding pt-6 pb-0">
        <div className="max-container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
            <div className="flex items-center justify-center gap-2 mb-3 text-sm text-white/50">
              <Play className="w-3.5 h-3.5 text-gold-400" />
              <span>Watch the 2-min overview</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl" style={{ paddingBottom: "56.25%" }}>
              <iframe src="https://www.youtube.com/embed/_fVB00BpPpI?autoplay=1&mute=1&rel=0" title="Growth Infrastructure — How It Works" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-white/40">
              <div className="w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[8px] font-bold text-gold-300">A</span>
              </div>
              <span>Presented by <span className="text-white/60 font-medium">Ade</span> — Novada Tech</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Video Testimonials (early trust) ── */}
      <section className="section-padding py-12">
        <div className="max-container">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">Real Operators · Real Results</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Hear From Businesses Scaling Using Our System</h2>
          </div>
          <VideoSlider />
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="section-padding pt-4 pb-0">
        <div className="max-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto">
            <div>
              <div className="glass-card gradient-border rounded-t-2xl rounded-b-none px-7 pt-7 pb-5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /><span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">3 Partner Spots Available This Quarter</span></div>
                <h2 className="text-xl md:text-2xl font-bold text-white">See If You Qualify For Our Partnership Program</h2>
                <p className="mt-1.5 text-base text-white/80">Tell us about your business. If we&apos;re a fit, we&apos;ll guarantee 20+ qualified appointments every month — or you don&apos;t pay.</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-white/40 mb-1.5">
                    <span className="flex items-center gap-1.5"><span className="text-gold-400 font-medium">Step 1</span><span>— Your details</span><span className="text-white/20">{"→"}</span><span>Step 2 — Pick your time</span></span>
                    <span>50%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10"><div className="h-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 w-1/2" /></div>
                </div>
              </div>
              <div className="glass-card rounded-t-none rounded-b-2xl overflow-hidden" style={{ borderTop: "none" }}>
                <iframe src="https://link.novadatech.com/widget/form/2UikgU0iSTsy1ax334cR" style={{ width: "100%", minHeight: "380px", border: "none", display: "block" }} id="growth-form-embed" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-activation-type="alwaysActivated" data-deactivation-type="neverDeactivate" data-form-name="Novada Tech Growth Infrastructure Form" data-height="380" data-layout-iframe-id="growth-form-embed" data-form-id="2UikgU0iSTsy1ax334cR" title="See If You Qualify" />
              </div>

              {/* Trust strip */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                  { icon: Shield, label: "20+ Appointments Guaranteed", micro: "Written into your agreement" },
                  { icon: CheckCircle, label: "If We Miss, You Don't Pay" },
                  { icon: Star, label: "Rated 4.9★ on Trustpilot", link: "https://www.trustpilot.com/review/novadatech.com.au" },
                  { icon: Clock, label: "Live In 14 Days" },
                ].map(({ icon: Icon, label, link, micro }, i) => {
                  const content = (
                    <div key={i} className={`flex flex-col gap-1 text-xs text-white/75 bg-white/[0.05] border border-white/[0.10] rounded-lg px-3 py-2.5 font-medium ${link ? "hover:border-gold-500/30 transition-colors cursor-pointer" : ""}`}>
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-3.5 h-3.5 flex-shrink-0 text-gold-400" />
                        <span className={link ? "underline underline-offset-2 decoration-white/20" : ""}>{label}</span>
                        {link && <ExternalLink className="w-3 h-3 flex-shrink-0 text-white/30" />}
                      </div>
                      {micro && <span className="text-[10px] text-white/35 ml-6">{micro}</span>}
                    </div>
                  );
                  if (link) return <a key={i} href={link} target="_blank" rel="noopener noreferrer">{content}</a>;
                  return content;
                })}
              </div>

              {/* Social proof near form */}
              <div className="mt-5 rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                <div className="flex items-start gap-3">
                  <img src="https://i.pravatar.cc/150?img=12" alt="Josh" className="w-9 h-9 rounded-full object-cover flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-white/70 italic leading-relaxed">&ldquo;We&apos;d been burned by two agencies before. Growth Infrastructure was different — it was a system, not a service. 4 new retainer clients in the first 45 days.&rdquo;</p>
                    <p className="mt-1.5 text-xs text-white/40">Josh — Founder, Maxicare Australia</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/[0.05] flex items-center justify-center gap-4 text-xs text-white/35 flex-wrap">
                  <span className="flex items-center gap-1.5"><Users className="w-3 h-3 text-gold-500/50" /> 350+ businesses scaled</span>
                  <span className="text-white/15">{"·"}</span>
                  <span className="flex items-center gap-1.5"><TrendingUp className="w-3 h-3 text-gold-500/50" /> $50M+ tracked revenue across 350+ clients</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What You Walk Away With ── */}
      <section className="section-padding pt-12 pb-0">
        <div className="max-container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">What You Walk Away With</h3>
            <p className="text-base text-white/80 mb-4">Inside the Growth Infrastructure&trade; partnership</p>
            <p className="text-base text-emerald-400/80 italic mb-2 leading-relaxed">Live in 14 days. 20+ qualified appointments by month one.</p>
            <p className="text-base text-emerald-400/80 italic mb-5 leading-relaxed">If we don&apos;t deliver — you don&apos;t pay.</p>
            <ul className="space-y-3">
              {OUTCOMES.map((o, i) => (
                <li key={i} className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" /><span className="text-base text-white/80 leading-relaxed">{o}</span></li>
              ))}
            </ul>
          </motion.div>

          <div className="mt-8 text-center">
            <button onClick={scrollToForm} className="btn-primary mx-auto">
              See If You Qualify
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Why This Isn't Another Agency (Differentiation) ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">Why This Isn&apos;t Another Agency</p>
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
              <div className="p-4 text-center bg-gold-500/[0.05] border-l border-gold-500/15">
                <p className="text-xs md:text-sm font-semibold text-gold-400">Novada Tech</p>
              </div>
            </div>
            {DIFFERENTIATION.map((row, i) => (
              <div key={i} className={`grid grid-cols-4 border-b border-white/[0.04] last:border-0 ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}>
                <div className="p-4 flex items-center"><span className="text-xs md:text-sm text-white/60">{row.label}</span></div>
                <div className="p-4 flex items-center justify-center text-center"><span className="text-xs text-white/45">{row.agency}</span></div>
                <div className="p-4 flex items-center justify-center text-center"><span className="text-xs text-white/45">{row.leadgen}</span></div>
                <div className="p-4 flex items-center justify-center text-center bg-gold-500/[0.04] border-l border-gold-500/10"><span className="text-xs text-gold-400/90 font-medium">{row.novada}</span></div>
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

      {/* ── Is This Right for You? — condensed to 3 bullets ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">Is This Right for You?</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">We&apos;re Selective. The Guarantee Only Works When The Business Is Ready.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card gradient-border p-7">
              <h3 className="text-base font-semibold text-emerald-400 mb-5 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Growth Infrastructure Is For You If...</h3>
              <div className="space-y-3">
                {QUALIFIES.map((item, i) => (
                  <div key={i} className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" /><span className="text-base text-white/80 leading-relaxed">{item}</span></div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-7 border border-white/[0.04]">
              <h3 className="text-base font-semibold text-white/50 mb-5 flex items-center gap-2"><AlertCircle className="w-4 h-4 text-red-400/60" /> This Isn&apos;t For You If...</h3>
              <div className="space-y-3">
                {NOT_FOR.map((item, i) => (
                  <div key={i} className="flex items-start gap-3"><div className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center"><div className="w-3 h-[2px] bg-red-400/50 rounded-full" /></div><span className="text-base text-white/80 leading-relaxed">{item}</span></div>
                ))}
              </div>
              <p className="mt-6 text-base text-white/80 leading-relaxed">If the left column describes you — apply above. If we&apos;re a fit, we guarantee 20+ qualified appointments every month.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Written Testimonials ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-4">What Our Partners Say</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">350+ Businesses Have Installed Our Growth Infrastructure</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 4) * 0.07 }} className="glass-card p-6 border border-white/[0.05] flex flex-col">
                <div className="text-gold-400 text-xs mb-3">{"★★★★★"}</div>
                <p className="text-base text-white/80 leading-relaxed italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
                  <div><p className="text-sm font-semibold text-white">{t.name}</p><p className="text-base text-white/80">{t.role}</p></div>
                </div>
              </motion.div>
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
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">Your Questions Answered</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Questions Serious Operators Ask</h2>
          </div>
          <div className="space-y-3">{FAQS.map((faq, i) => (<FAQItem key={i} q={faq.q} a={faq.a} />))}</div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="pt-6 pb-16 section-padding">
        <div className="max-container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,162,63,0.1)_0%,_transparent_70%)]" />
            <div className="relative px-8 py-14 md:px-14">
              <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-4">Performance Guaranteed</p>
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
                <a href="https://www.trustpilot.com/review/novadatech.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/50 transition-colors"><Star className="w-3.5 h-3.5" /><span className="underline underline-offset-2 decoration-white/20">4.9{"★"} Trustpilot</span></a>
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
