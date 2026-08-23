"use client";

/*
 * /assessment-calculator — standalone after-hours leakage calculator.
 * Created 2026-08-23 when the calculator was retired from /workforce
 * (the lander now argues cost replacement, not revenue recovery). This
 * page exists so the tool can be screen-shared on a Cost Review call or
 * sent to a prospect afterwards.
 *
 * Deliberately minimal: no pitch, no pricing, no booking embed. Just the
 * tool, its assumptions and one link back. noindex (sales tool, not a
 * marketing page). Route is in BARE_ROUTES so no site chrome renders.
 *
 * Model (unchanged from the original build, verified defaults produce
 * $14,040/mo leakage and $4,290/mo potential):
 *   lost shifts = requests x (1 - fill%) + cancellations x (1 - recovery%)
 *   leakage     = lost shifts x bill rate x shift hours
 *   potential   = +15pts on fill and recovery, capped at 95%
 * The potential figure is ILLUSTRATIVE and must never be presented as a
 * performance promise: worker availability can never be guaranteed.
 */

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const ACCENT = "#0CC481";
const CARD =
  "rounded-xl border border-[#EDECE4]/[0.08] bg-gradient-to-br from-[#111413] to-[#050808]";
const GRAD_TEXT =
  "bg-gradient-to-r from-white to-[#0CC481] bg-clip-text text-transparent";

function track(event: string) {
  try {
    (window as unknown as { dataLayer?: Record<string, unknown>[] }).dataLayer?.push({ event });
  } catch {
    /* analytics must never break the page */
  }
}

const fmt = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;

function NumberField({
  label,
  value,
  onChange,
  prefix,
  suffix,
  min = 0,
  step = 1,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  step?: number;
}) {
  return (
    <div>
      <label className="block text-sm text-[#EDECE4]/75 mb-1.5">{label}</label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-[#EDECE4]/45">
            {prefix}
          </span>
        )}
        <input
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={Number.isFinite(value) ? value : ""}
          onChange={(e) => onChange(Math.max(min, Number(e.target.value)))}
          className={`w-full rounded-lg border border-[#EDECE4]/15 bg-white/[0.03] py-3 text-sm text-white focus:outline-none focus:border-[#0CC481]/60 focus:bg-white/[0.05] transition-colors ${
            prefix ? "pl-8" : "pl-4"
          } ${suffix ? "pr-16" : "pr-4"}`}
        />
        {suffix && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#EDECE4]/45">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function PercentSlider({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-sm text-[#EDECE4]/75">{label}</label>
        <span className="font-supply text-sm text-[#0CC481]">{value}%</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        step={5}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#0CC481] cursor-pointer"
      />
    </div>
  );
}

const IMPROVEMENT_PTS = 15;
const IMPROVEMENT_CAP = 95;

const DEFAULTS = {
  billRate: 65,
  workerCost: 48,
  shiftHours: 8,
  requests: 30,
  fillRate: 60,
  cancellations: 25,
  recoveryRate: 40,
};

function LeakageCalculator() {
  const trackedRef = useRef(false);
  const [inputs, setInputs] = useState(DEFAULTS);

  const set = (key: keyof typeof inputs) => (v: number) => {
    if (!trackedRef.current) {
      trackedRef.current = true;
      track("assessment_calculator_use");
    }
    setInputs((s) => ({ ...s, [key]: v }));
  };

  const { billRate, workerCost, shiftHours, requests, fillRate, cancellations, recoveryRate } =
    inputs;

  const marginPerHour = Math.max(billRate - workerCost, 0);
  const revenuePerShift = billRate * shiftHours;
  const marginPerShift = marginPerHour * shiftHours;

  // Current monthly leakage
  const lostUnfilled = requests * (1 - fillRate / 100);
  const lostUnrecovered = cancellations * (1 - recoveryRate / 100);
  const lostShifts = lostUnfilled + lostUnrecovered;
  const revenueLeakage = lostShifts * revenuePerShift;
  const marginLeakage = lostShifts * marginPerShift;

  // Modelled improvement scenario (+pts, capped; never below current)
  const improvedFill = Math.min(fillRate + IMPROVEMENT_PTS, Math.max(IMPROVEMENT_CAP, fillRate));
  const improvedRecovery = Math.min(
    recoveryRate + IMPROVEMENT_PTS,
    Math.max(IMPROVEMENT_CAP, recoveryRate),
  );
  const regainedShifts =
    requests * ((improvedFill - fillRate) / 100) +
    cancellations * ((improvedRecovery - recoveryRate) / 100);
  const potentialRevenue = regainedShifts * revenuePerShift;
  const potentialMargin = regainedShifts * marginPerShift;

  return (
    <div className={`${CARD} p-6 md:p-9 text-left`}>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
        {/* Inputs */}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3 mb-1">
            <p className="font-supply text-[11px] uppercase tracking-[0.18em] text-[#EDECE4]/50">
              Your after-hours numbers · per month
            </p>
            <button
              type="button"
              onClick={() => setInputs(DEFAULTS)}
              className="font-supply text-[10px] uppercase tracking-[0.12em] text-[#EDECE4]/40 hover:text-[#0CC481] transition-colors"
            >
              Reset
            </button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <NumberField
              label="Average client bill rate"
              prefix="$"
              suffix="/ hour"
              value={billRate}
              onChange={set("billRate")}
            />
            <NumberField
              label="Worker fully loaded cost"
              prefix="$"
              suffix="/ hour"
              value={workerCost}
              onChange={set("workerCost")}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <NumberField
              label="Average shift duration"
              suffix="hours"
              value={shiftHours}
              onChange={set("shiftHours")}
              step={0.5}
            />
            <NumberField
              label="After-hours booking requests"
              suffix="/ month"
              value={requests}
              onChange={set("requests")}
            />
          </div>
          <PercentSlider label="Currently filled" value={fillRate} onChange={set("fillRate")} />
          <NumberField
            label="After-hours cancellations"
            suffix="/ month"
            value={cancellations}
            onChange={set("cancellations")}
          />
          <PercentSlider
            label="Currently recovered"
            value={recoveryRate}
            onChange={set("recoveryRate")}
          />
        </div>

        {/* Results */}
        <div className="flex flex-col gap-4">
          <div className="rounded-xl border border-[#FF6B6B]/25 bg-[#FF6B6B]/[0.05] p-6 flex-1">
            <p className="font-supply text-[11px] uppercase tracking-[0.18em] text-[#FF6B6B] mb-3">
              Current after-hours revenue leakage
            </p>
            <p className="font-supply text-3xl md:text-4xl font-medium text-white leading-none">
              {fmt(revenueLeakage)}
              <span className="text-base text-[#EDECE4]/50 font-normal"> / month</span>
            </p>
            <p className="mt-2 text-sm text-[#EDECE4]/70">
              {fmt(revenueLeakage * 12)} a year · {fmt(marginLeakage)}/month in gross
              margin
            </p>
            <p className="font-supply mt-4 text-[10px] uppercase tracking-[0.12em] text-[#EDECE4]/45 leading-relaxed">
              {Math.round(lostUnfilled)} unfilled bookings + {Math.round(lostUnrecovered)}{" "}
              unrecovered cancellations = {Math.round(lostShifts)} lost shifts a month
            </p>
          </div>

          <div className="rounded-xl border border-[#0CC481]/30 bg-[#0CC481]/[0.05] p-6 flex-1">
            <p className="font-supply text-[11px] uppercase tracking-[0.18em] text-[#0CC481] mb-3">
              Potential value of improved fill rate
            </p>
            <p className="font-supply text-3xl md:text-4xl font-medium text-white leading-none">
              {fmt(potentialRevenue)}
              <span className="text-base text-[#EDECE4]/50 font-normal"> / month</span>
            </p>
            <p className="mt-2 text-sm text-[#EDECE4]/70">
              {fmt(potentialRevenue * 12)} a year · {fmt(potentialMargin)}/month in gross
              margin
            </p>
            <p className="font-supply mt-4 text-[10px] uppercase tracking-[0.12em] text-[#EDECE4]/45 leading-relaxed">
              Modelled at +{IMPROVEMENT_PTS} percentage points on fill and recovery,
              capped at {IMPROVEMENT_CAP}%
            </p>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-[#EDECE4]/50 leading-relaxed max-w-2xl mx-auto">
        Modelling is based entirely on the numbers entered above and is
        illustrative only. It is not a guarantee of performance. Worker
        availability can never be guaranteed.
      </p>
    </div>
  );
}

export default function AssessmentCalculatorPage() {
  return (
    <div className="bg-[#080808] font-poppins overflow-x-clip min-h-screen flex flex-col">
      {/* Minimal header */}
      <header className="border-b border-[#EDECE4]/10">
        <div className="max-container section-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="/workforce" className="flex items-baseline gap-1.5">
              <span className="text-white font-bold text-lg md:text-xl tracking-tight">Novada</span>
              <span className="font-semibold text-lg md:text-xl tracking-tight" style={{ color: ACCENT }}>
                Workforce
              </span>
            </a>
            <a
              href="/workforce"
              className="text-sm text-[#EDECE4]/70 hover:text-white transition-colors"
            >
              Back to overview
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 section-padding py-12 md:py-16">
        <div className="max-container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="font-supply text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-4">
              After-Hours Assessment Calculator
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white text-balance">
              What are unfilled shifts and cancellations{" "}
              <span className={GRAD_TEXT}>costing you each month?</span>
            </h1>
            <p className="mt-4 text-base text-[#EDECE4]/80 max-w-2xl mx-auto leading-relaxed">
              Enter your own after-hours numbers. The model shows the revenue
              currently leaking through unfilled bookings and unrecovered
              cancellations, and what a better fill rate would be worth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <LeakageCalculator />
          </motion.div>

          {/* How the numbers are worked out: shown so nothing is a black box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`${CARD} mt-6 p-6 md:p-7`}
          >
            <p className="font-supply text-[11px] uppercase tracking-[0.18em] text-[#EDECE4]/50 mb-4">
              How these numbers are worked out
            </p>
            <ul className="space-y-2.5 text-sm text-[#EDECE4]/70 leading-relaxed">
              <li>
                <span className="text-white">Lost shifts</span> = booking
                requests that go unfilled, plus cancellations that are never
                recovered.
              </li>
              <li>
                <span className="text-white">Revenue leakage</span> = lost
                shifts multiplied by your bill rate and average shift length.
                Gross margin uses your bill rate less your loaded worker cost.
              </li>
              <li>
                <span className="text-white">Potential value</span> models a 15
                percentage point improvement in both fill and recovery, capped
                at 95%. It is an illustrative scenario for discussion, not a
                promise. Nobody can guarantee that workers are available.
              </li>
            </ul>
          </motion.div>
        </div>
      </main>

      <footer className="border-t border-[#EDECE4]/[0.07]">
        <div className="max-container section-padding py-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-white font-bold text-base tracking-tight">
              Novada <span style={{ color: ACCENT }}>Workforce</span>
            </p>
            <p className="font-supply text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40">
              Outsourced after-hours coordination
            </p>
            <p className="text-xs text-[#EDECE4]/35">
              A <span className="text-[#EDECE4]/55">Novada Tech</span> service · ©{" "}
              {new Date().getFullYear()} Novada Tech. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
