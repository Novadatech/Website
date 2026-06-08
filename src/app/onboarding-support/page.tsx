"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, UserCheck, Zap, Check, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function OnboardingSupportPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.novadatech.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* NOTE: This page is for EXISTING CLIENTS booking their onboarding
          session — not for prospects. No conversion tag here. The calendar
          widget below currently points at the same GHL booking ID as
          /book-call — if a dedicated onboarding calendar/team-member is
          set up in GHL, swap the widget src to that one. */}

      {/* Hero */}
      <section className="relative pt-32 pb-10 md:pt-40 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-surface-950 to-surface-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,90,48,0.08)_0%,_transparent_60%)]" />

        <div className="relative max-container section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ember-500/20 bg-ember-500/5 mb-6"
          >
            <Sparkles className="w-4 h-4 text-ember-500" />
            <span className="text-sm text-ember-500 font-medium uppercase tracking-[0.15em]">
              Welcome to Novada Tech · Client Onboarding
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance max-w-3xl mx-auto"
          >
            Book Your{" "}
            <span className="gradient-text">Onboarding Session</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            30 minutes with your dedicated onboarding lead. We&apos;ll complete
            the setup, gather everything we need, and get your growth
            infrastructure live so we can start scaling your business.
          </motion.p>

          {/* Trust signals — onboarding-focused */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/30"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>30 Min Session</span>
            </div>
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4" />
              <span>Dedicated Lead</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Setup Completed On Call</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>Quick Activation</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calendar Embed Section */}
      <section className="section-padding pb-20 md:pb-28">
        <div className="max-container">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* What We'll Cover — left sidebar */}
            <AnimatedSection direction="left" className="lg:col-span-1">
              <div className="glass-card gradient-border p-8 sticky top-28">
                <h3 className="text-lg font-semibold text-white mb-6">
                  What We&apos;ll Cover
                </h3>
                <div className="space-y-5">
                  {[
                    "Confirm your offer, ideal client profile, and pricing",
                    "Set up CRM access, integrations, and pipeline tracking",
                    "Gather brand assets, messaging, and key talking points",
                    "Walk through your dashboards and reporting tools",
                    "Confirm next steps and your activation timeline",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-ember-500 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-white/80 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <p className="text-base text-white/80 leading-relaxed">
                    Pick a time that suits you. Your onboarding lead will be
                    fully briefed on your business before the session — so we
                    can hit the ground running.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Calendar embed — right area */}
            <div className="lg:col-span-2">
              <div
                id="calendar-embed"
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-2 min-h-[600px] relative z-10"
              >
                <iframe
                  src="https://link.novadatech.com/widget/booking/QO8M58PsBFu5aP11Ewek"
                  style={{
                    width: "100%",
                    minHeight: "700px",
                    border: "none",
                    overflow: "hidden",
                    display: "block",
                  }}
                  scrolling="no"
                  id="QO8M58PsBFu5aP11Ewek_1779377905612"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prep checklist — what to have ready for the session */}
      <section className="section-padding pb-20">
        <div className="max-container max-w-3xl">
          <AnimatedSection>
            <div className="glass-card p-8 border border-white/[0.04]">
              <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-4 text-center">
                Before The Call
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-6">
                A Few Things To Have Ready
              </h3>
              <p className="text-base text-white/70 leading-relaxed text-center max-w-xl mx-auto mb-8">
                The more prepared you are, the more we can lock in during your
                30 minutes. Nothing here is critical — but having these on hand
                will help us complete your setup faster.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Your current offer / pricing and ideal client profile",
                  "Logins for the tools we agreed to integrate with",
                  "Brand assets — logo, colours, any key visuals",
                  "A short summary of your sales process today",
                  "The decision-maker(s) on the call if possible",
                  "Any questions you'd like answered before activation",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ember-500 mt-0.5 flex-shrink-0" />
                    <span className="text-base text-white/80 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
