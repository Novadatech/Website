"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, Shield, Star, TrendingUp, Users,
  Clock, AlertCircle, ChevronDown, ArrowRight, ExternalLink,
  ChevronLeft, ChevronRight, Zap, Play
} from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";

function scrollToForm() {
  document.getElementById("closer-form-embed")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

// ─── Data ───────────────────────────────────────────────────────────────────

const BENEFITS = [
  "An expert sales closer placed into your business within 7 days — ready to close from day one",
  "Deals closing on your pipeline while you focus on delivery and growth — not sales calls",
  "You get off the phone permanently — your closer handles every qualified conversation",
  "You only pay when deals are closed. If the closer doesn't perform, you owe us nothing.",
  "The performance guarantee is written into the agreement — not a marketing line, a contractual commitment",
];

// TODO: Replace placeholder avatar URLs with actual client photos
const TESTIMONIALS = [
  {
    quote: "$42K to $91K monthly revenue in under 60 days. The closer was on calls within the first week and closed 3 deals in the first 10 days.",
    name: "Josh",
    role: "Director, Maxicare Plus",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    quote: "We closed four new retainer clients in the first 45 days. The closer understood our offer better than we expected — prospects were signing before the call was over.",
    name: "Anthony",
    role: "Founder, Ripple Clarke",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    quote: "Discovery call conversion jumped from 28% to over 60%. The closer pre-handles objections and closes with a structure we never had before.",
    name: "Nate",
    role: "Owner, Larsky Tach and Feed",
    avatar: "https://i.pravatar.cc/150?img=53",
  },
  {
    quote: "More clients closed in month one than the previous six months combined. The closer actually had to pause taking calls because we couldn't fulfil fast enough.",
    name: "Jessica",
    role: "Founder, Jessica Teds Coaching",
    avatar: "https://i.pravatar.cc/150?img=47",
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
  { id: "0qabR5mfAfQ", title: "Anthony \u2014 Ripple Clarke", name: "Anthony", company: "Founder, Ripple Clarke" },
  { id: "JXEvONrDaOk", title: "Damian \u2014 Groundwork Ventures", name: "Damian", company: "Founder, Groundwork Ventures" },
  { id: "O3HUPQyflH8", title: "Jack \u2014 House Valley", name: "Jack", company: "Founder, House Valley" },
  { id: "w5iJNOADdXU", title: "Nate \u2014 Larsky Tach and Feed", name: "Nate", company: "Founder, Larsky Tach and Feed" },
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
                <div className="ml-auto text-gold-400 text-xs flex-shrink-0">{"\u2605\u2605\u2605\u2605\u2605"}</div>
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-container section-padding">
          <div className="flex items-center justify-between h-16">
            <Link href="/sales-closer" className="flex items-center"><Logo variant="light" className="h-9 w-auto" /></Link>
            <div className="flex items-center gap-2 text-xs text-white/40"><div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /><span>3 placement spots available this month</span></div>
          </div>
        </div>
      </header>
      <div className="h-16" />

      {/* ── Hero + Above-Fold CTA ── */}
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
              <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-gold-500/60" /> Placed in 7 days</span>
              <span className="text-white/15">|</span>
              <a href="https://www.trustpilot.com/review/novadatech.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/50 transition-colors">
                <span className="text-gold-400 tracking-tight">{"\u2605\u2605\u2605\u2605\u2605"}</span>
                <span className="underline underline-offset-2 decoration-white/20">4.9 on Trustpilot</span>
              </a>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-gold-500/60" /> Don&apos;t close, don&apos;t pay</span>
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
              <iframe src="https://www.youtube.com/embed/_fVB00BpPpI?autoplay=1&mute=1" title="How Novada Tech Places Expert Sales Closers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
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

      {/* ── Video Testimonials — moved up for early trust ── */}
      <section className="section-padding py-12">
        <div className="max-container">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">Client Results</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Our Closers Are Closing Deals. Every Week.</h2>
          </div>
          <VideoSlider />
        </div>
      </section>

      {/* ── FORM — standalone, centred ── */}
      <section className="section-padding pt-4 pb-0">
        <div className="max-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="max-w-2xl mx-auto">
            <div>
              <div className="glass-card gradient-border rounded-t-2xl rounded-b-none px-7 pt-7 pb-5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /><span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">3 Placement Spots Available This Month</span></div>
                <h2 className="text-xl md:text-2xl font-bold text-white">Get an Expert Closer in Your Business Within 7 Days</h2>
                <p className="mt-1.5 text-base text-white/80">Tell us about your business. If you qualify, we&apos;ll place a closer within 7 days — or you don&apos;t pay.</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-white/40 mb-1.5">
                    <span className="flex items-center gap-1.5"><span className="text-gold-400 font-medium">Step 1</span><span>— Your details</span><span className="text-white/20">{"\u2192"}</span><span>Step 2 — Pick your time</span></span>
                    <span>50%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10"><div className="h-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 w-1/2" /></div>
                </div>
              </div>
              <div className="glass-card rounded-t-none rounded-b-2xl overflow-hidden" style={{ borderTop: "none" }}>
                <iframe src="https://link.novadatech.com/widget/form/2UikgU0iSTsy1ax334cR" style={{ width: "100%", minHeight: "380px", border: "none", display: "block" }} id="closer-form-embed" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-activation-type="alwaysActivated" data-deactivation-type="neverDeactivate" data-form-name="Novada Tech Closer Form" data-height="380" data-layout-iframe-id="closer-form-embed" data-form-id="2UikgU0iSTsy1ax334cR" title="Get an Expert Sales Closer" />
              </div>

              {/* Trust strip — Trustpilot clickable with external link icon */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                {TRUST_ITEMS.map(({ icon: Icon, label, link, micro }, i) => {
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

              {/* Social proof — Tony (different from testimonial grid which leads with Josh) */}
              <div className="mt-5 rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold text-blue-300">T</span>
                  </div>
                  <div>
                    <p className="text-sm text-white/70 italic leading-relaxed">&ldquo;Within three weeks our closer had already signed 14 new clients. Every meeting converted at a rate we&apos;d never seen before.&rdquo;</p>
                    <p className="mt-1.5 text-xs text-white/40">Tony — Founder, South Line Media</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/[0.05] flex items-center justify-center gap-4 text-xs text-white/35 flex-wrap">
                  <span className="flex items-center gap-1.5"><Users className="w-3 h-3 text-gold-500/50" /> 350+ businesses scaled</span>
                  <span className="text-white/15">{"\u00B7"}</span>
                  <span className="flex items-center gap-1.5"><TrendingUp className="w-3 h-3 text-gold-500/50" /> $50M+ tracked revenue across 350+ clients</span>
                  <span className="text-white/15">{"\u00B7"}</span>
                  <a href="https://www.trustpilot.com/review/novadatech.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/50 transition-colors">
                    <Star className="w-3 h-3 text-gold-500/50" />
                    <span className="underline underline-offset-2 decoration-white/20">4.9{"\u2605"} on Trustpilot (77+ reviews)</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What You Get + CTA ── */}
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
          <div className="mt-8 text-center">
            <button onClick={scrollToForm} className="btn-primary mx-auto">Get My Expert Closer<ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      </section>

      {/* ── Risk Reversal ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">We Take the Risk.{" "}<span className="gradient-text">You Get the Closer.</span></h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto">With other companies, you absorb all the risk. With us, the risk is entirely on our side.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-7 rounded-2xl border border-red-400/10 bg-red-400/[0.02]">
              <p className="text-xs uppercase tracking-[0.2em] text-red-400/60 font-medium mb-5">Other Agencies — The Risk Is on You</p>
              <div className="space-y-3">
                {["You pay thousands upfront — whether the closer performs or not", "You absorb all the risk if they underperform or quit", "No guarantee on deals closed, conversion rates, or timeline", "If it fails, you lose the money and start the search again", "Months of recruiting before a single deal is closed"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3"><div className="w-4 h-4 flex-shrink-0 flex items-center justify-center"><div className="w-3 h-[2px] bg-red-400/50 rounded-full" /></div><span className="text-base text-white/80">{item}</span></div>
                ))}
              </div>
              <p className="mt-6 text-base text-red-400/65 font-medium">All the risk sits with you. None of it sits with them.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card gradient-border p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-5">Novada Tech — The Risk Is on Us</p>
              <div className="space-y-3">
                {["Expert closer placed in your business within 7 days", "If they don't close deals, you don't pay \u2014 written into the agreement", "We absorb all the risk of underperformance, not you", "We replace the closer at no cost if the fit isn't right", "You only invest when closed deals hit your account"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" /><span className="text-base text-white/80 font-medium">{item}</span></div>
                ))}
              </div>
              <p className="mt-6 text-base text-gold-400/85 font-medium">All the risk sits with us. None of it sits with you.</p>
            </motion.div>
          </div>
          <div className="mt-12 text-center">
            <div className="inline-block w-px h-8 bg-gradient-to-b from-white/20 to-transparent mb-8" />
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 mb-5"><Shield className="w-7 h-7 text-gold-400" /></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">The guarantee is simple.</h3>
            <button onClick={scrollToForm} className="btn-primary mt-6 mx-auto">Get My Expert Closer<ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      </section>

      {/* ── Is This Right for You? — condensed to 3 bullets ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">Is This Right for You?</p>
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
            <p className="text-xs uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-4">What Our Partners Say</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">350+ Businesses. Expert Closers. Real Revenue.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 4) * 0.07 }} className="glass-card p-6 border border-white/[0.05] flex flex-col">
                <div className="text-gold-400 text-xs mb-3">{"\u2605\u2605\u2605\u2605\u2605"}</div>
                <p className="text-base text-white/80 leading-relaxed italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
                  <div><p className="text-sm font-semibold text-white">{t.name}</p><p className="text-base text-white/80">{t.role}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button onClick={scrollToForm} className="btn-primary mt-6 mx-auto">Get My Expert Closer<ArrowRight className="w-4 h-4" /></button>
            <div className="mt-5 flex items-center justify-center gap-5 text-xs text-white/35 flex-wrap">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-gold-500/60" /> Don&apos;t close, don&apos;t pay</span>
              <span className="text-white/15">|</span>
              <a href="https://www.trustpilot.com/review/novadatech.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/50 transition-colors">
                <span className="text-gold-400 tracking-tight">{"\u2605\u2605\u2605\u2605\u2605"}</span>
                <span className="underline underline-offset-2 decoration-white/20">4.9 on Trustpilot</span>
              </a>
              <span className="text-white/15">|</span>
              <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-gold-500/60" /> Placed in 7 days</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container max-w-2xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-3">Questions</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">{FAQS.map((faq, i) => (<FAQItem key={i} q={faq.q} a={faq.a} />))}</div>
        </div>
      </section>

      {/* ── Final CTA ── */}
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
