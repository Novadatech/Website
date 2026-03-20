"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle, Shield, Star, TrendingUp, Users,
  Clock, AlertCircle, Calendar, MessageSquare, ChevronDown, ArrowRight
} from "lucide-react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";

const PROOF_POINTS = [
  { icon: Star, text: "4.9★ Trustpilot" },
  { icon: Users, text: "350+ Businesses Scaled" },
  { icon: TrendingUp, text: "$50M+ Revenue Generated" },
  { icon: Shield, text: "Pay Only For Results" },
];

const BENEFITS = [
  "The exact AI system we use to generate high-value clients predictably",
  "A custom client acquisition plan built specifically for your business",
  "How to stop relying on referrals and start scaling on demand",
  "How to eliminate wasted ad spend and only pay for real results",
  "Why 350+ business owners trust Novada Tech to run their growth engine",
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
    quote: "Within 30 days we had more qualified leads than the previous 6 months combined. The system just works.",
    name: "James Mitchell",
    role: "Founder, Apex Growth Partners",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "I was sceptical at first but the results speak for themselves. Our revenue has grown by over 40% since partnering with Novada Tech.",
    name: "Sarah Thompson",
    role: "CEO, Meridian Advisory Group",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "We went from chasing leads to having a full pipeline in under a month. Best investment we've made this year.",
    name: "David Clarke",
    role: "Director, Summit Consulting Co.",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    quote: "Finally a system that brings in clients on autopilot. We closed three high-ticket deals in our first month. Incredible ROI.",
    name: "Emily Watson",
    role: "Managing Director, Clearview Solutions",
    photo: "https://randomuser.me/api/portraits/women/28.jpg",
  },
  {
    quote: "Our cost per acquisition dropped by 60% and the quality of leads went through the roof. Novada Tech completely changed how we grow.",
    name: "Michael Reynolds",
    role: "Founder, Pinnacle Media Group",
    photo: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    quote: "We had tried every agency under the sun. Novada Tech was the first one to actually deliver and then keep delivering month after month.",
    name: "Jessica Andrews",
    role: "CEO, Luminary Digital",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote: "The strategy call alone gave us more clarity than 6 months working with our previous agency. Signed up on the spot.",
    name: "Thomas Bennett",
    role: "Owner, Brentwood Financial Services",
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    quote: "I was spending a fortune on ads with zero consistency. Now our pipeline is full and we're turning away clients we don't want.",
    name: "Rachel Foster",
    role: "Founder, Coastal Strategy Partners",
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    quote: "Booked 11 discovery calls in the first two weeks. The system is genuinely different to anything else I've seen in the market.",
    name: "Andrew Morrison",
    role: "Director, Northgate Consulting Group",
    photo: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    quote: "We scaled from $30K to $85K monthly revenue in under 90 days. The AI acquisition system is unlike anything we've used before.",
    name: "Lauren Hayes",
    role: "CEO, BlueSky Ventures",
    photo: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    quote: "Pay for results only? That's what sold me. And they actually delivered. Our close rate on inbound leads is now over 70%.",
    name: "Christopher Hall",
    role: "Founder, Sterling Advisory",
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    quote: "The onboarding was seamless and within the first week we were already seeing movement. Month two we had our best revenue ever.",
    name: "Amanda Wilson",
    role: "Managing Director, Horizon Business Group",
    photo: "https://randomuser.me/api/portraits/women/72.jpg",
  },
  {
    quote: "I've worked with five agencies over four years. Novada Tech is the only one that treats my business like their own.",
    name: "Robert Carter",
    role: "Partner, Westfield Growth Co.",
    photo: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    quote: "We went from two inbound leads a month to over twenty. Our sales team is busier than ever and morale is through the roof.",
    name: "Nicole Parker",
    role: "CEO, Elevate Business Solutions",
    photo: "https://randomuser.me/api/portraits/women/38.jpg",
  },
  {
    quote: "The team is responsive, transparent and genuinely invested in your results. That's rare. The numbers prove it too.",
    name: "Daniel Murphy",
    role: "Director, Granite Peak Consulting",
    photo: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    quote: "Within six weeks we had more booked calls than we knew what to do with. We actually had to pause the system to catch up.",
    name: "Samantha Reid",
    role: "Founder, Whitmore Partners",
    photo: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  {
    quote: "The ROI is undeniable. For every dollar we put in, we're getting eight back. I wish we'd found them two years ago.",
    name: "Jonathan Brooks",
    role: "Owner, Lakewood Services Group",
    photo: "https://randomuser.me/api/portraits/men/70.jpg",
  },
  {
    quote: "Our old agency gave us vanity metrics. Novada Tech gives us revenue. The difference is night and day.",
    name: "Victoria Harrison",
    role: "CEO, Bridgepoint Advisory",
    photo: "https://randomuser.me/api/portraits/women/55.jpg",
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
    desc: "Before the call, our team reviews your business so we come prepared with a tailored growth plan — not a generic pitch.",
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
];

const VIDEO_TESTIMONIALS = [
  { id: "0qabR5mfAfQ", title: "Client Testimonial 1" },
  { id: "JXEvONrDaOk", title: "Client Testimonial 2" },
  { id: "O3HUPQyflH8", title: "Client Testimonial 3" },
  { id: "w5iJNOADdXU", title: "Client Testimonial 4" },
];

const TRUST_ITEMS = [
  { icon: Shield, label: "Zero Risk, Zero Obligation" },
  { icon: CheckCircle, label: "No Spam, Ever" },
  { icon: Star, label: "Rated 4.9★ on Trustpilot" },
  { icon: Clock, label: "Under 2 Minutes to Complete" },
];

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
      <Script id="gtag-conversion-apply" strategy="afterInteractive">
        {`gtag('event', 'conversion', {'send_to': 'AW-16650862607/p15dCIjGk4ocEI-A4IM-'});`}
      </Script>

      {/* Minimal sticky header */}
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

      {/* Urgency Bar — quantified scarcity */}
      <div className="bg-gold-500/10 border-b border-gold-500/20 py-3 px-4">
        <p className="text-sm text-gold-400 font-medium flex items-center justify-center gap-2 text-center">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span><strong>Only 4 spots remaining this week</strong> — once they&apos;re gone, the next availability is in 2 weeks</span>
        </p>
      </div>

      {/* ── HERO ── */}
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
            Find Out Exactly How We&apos;d Generate{" "}
            <span className="gradient-text">High-Value Clients</span>{" "}
            For Your Business — In 30 Days
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            Tell us about your business and we&apos;ll map out a custom AI client acquisition
            strategy — completely free. No obligation. No hard sell.
          </motion.p>

          {/* 4-point proof bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto"
          >
            {PROOF_POINTS.map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.03] border border-white/[0.06] py-4 px-3"
              >
                <Icon className="w-5 h-5 text-gold-400" />
                <span className="text-xs text-white/50 text-center leading-snug">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── VSL ── */}
      <section className="section-padding pt-2 pb-8">
        <div className="max-container max-w-3xl">
          <p className="text-xs text-white/30 text-center mb-4 uppercase tracking-widest">Watch this before you fill the form</p>
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/w6atSnPDjJw"
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
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs text-white/40 mb-1.5">
                      <span>Step 1 of 2 — Your Details</span>
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

                {/* Trust strip — 4 items in a clean row */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {TRUST_ITEMS.map(({ icon: Icon, label }, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/30 bg-white/[0.02] border border-white/[0.04] rounded-lg px-3 py-2">
                      <Icon className="w-3.5 h-3.5 flex-shrink-0 text-white/20" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Left — 2 benefit cards, perfectly balanced */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-5 order-last lg:order-first"
            >
              {/* What you'll discover */}
              <div className="glass-card gradient-border p-6">
                <h3 className="text-base font-semibold text-white mb-4">
                  What You&apos;ll Discover on Your Free Call
                </h3>
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

          {/* ── Testimonials — full-width 3 columns, flush below the grid ── */}
          <div className="mt-10 pt-8 border-t border-white/[0.06]">
            <p className="text-xs uppercase tracking-[0.2em] text-gold-500/60 font-medium text-center mb-6">
              What Our Clients Say
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 border border-white/[0.05] flex flex-col"
                >
                  <div className="text-gold-400 text-xs mb-3">★★★★★</div>
                  <p className="text-sm text-white/60 leading-relaxed italic flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center gap-3">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={36}
                      height={36}
                      className="rounded-full object-cover flex-shrink-0"
                      unoptimized
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-white/40">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What Happens Next ── */}
      <section className="section-padding py-16 border-t border-white/[0.04] mt-12">
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

          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {VIDEO_TESTIMONIALS.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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
              </motion.div>
            ))}
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

          {/* Final CTA */}
          <div className="mt-12 text-center rounded-2xl bg-white/[0.02] border border-white/[0.06] p-8">
            <p className="text-white font-semibold mb-1">Still not sure?</p>
            <p className="text-white/40 text-sm mb-6">
              The call is completely free — there&apos;s nothing to lose and a full client pipeline to gain.
            </p>
            <button
              className="btn-primary inline-flex"
              onClick={() =>
                document.getElementById("apply-form-embed")?.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              Claim My Free Strategy Session
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Bottom Stats ── */}
      <section className="py-10 border-t border-white/[0.04]">
        <div className="max-container section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "350+", label: "Businesses Scaled" },
              { number: "$50M+", label: "Revenue Generated" },
              { number: "4.9★", label: "Trustpilot Rating" },
              { number: "30 Days", label: "To First Results" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-bold gradient-text">{stat.number}</p>
                <p className="text-xs text-white/40 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
