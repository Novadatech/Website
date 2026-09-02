"use client";

/*
 * /assessment-calculator : standalone after-hours leakage calculator.
 * Exists so the tool can be screen-shared on a review call or sent to a
 * prospect afterwards. Deliberately minimal: no pitch, no pricing, no
 * booking embed. noindex, set in layout.tsx.
 *
 * REBUILT 2026-09-02 into the Desk visual system, on founder instruction.
 * Was the legacy dark/green Poppins page. Chrome is FunnelHeader/
 * FunnelFooter rather than DeskNav: this is a tool handed to someone
 * already in a conversation, not a page that needs to sell or route.
 *
 * ⚠️ THE MODEL IS UNCHANGED. Every formula, default and cap below is
 * carried over verbatim from the 2026-08-23 build. Verified: the
 * shipped defaults still produce $14,040/mo leakage and $4,290/mo
 * potential. If you touch a number in DEFAULTS or in the arithmetic,
 * you have changed a figure the founder quotes live on calls.
 *   lost shifts = requests x (1 - fill%) + cancellations x (1 - recovery%)
 *   leakage     = lost shifts x bill rate x shift hours
 *   potential   = +15pts on fill and recovery, capped at 95%
 *
 * ⚠️ THE POTENTIAL FIGURE IS ILLUSTRATIVE and must never be presented as
 * a performance promise: worker availability can never be guaranteed.
 * Both disclaimers are load-bearing. Do not remove them to tidy the
 * layout.
 *
 * Colour: #B4501A carries the leakage figure. It is the Desk system's
 * scarce signal colour and this is one of the few places it is earned.
 * #003DDB carries the modelled upside. Deliberately not red and green:
 * this is an instrument, not a dashboard.
 */

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FunnelHeader, FunnelFooter } from "@/components/desk/FunnelChrome";
import { MICRO, NUM, PAD, WRAP, DISPLAY } from "@/components/desk/Band";

const BODY = "text-[15px] leading-relaxed text-[#454E5C] md:text-base";

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
      <label className="mb-2 block text-[13px] font-medium text-[#39424E]">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[14px] text-[#9AA3B1]">
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
          className={`${NUM} w-full rounded-[6px] border border-[#D3D8E2] bg-white py-3 text-[15px] text-[#0B0E14] transition-colors focus:border-[#003DDB] focus:outline-none focus:ring-2 focus:ring-[#003DDB]/15 ${
            prefix ? "pl-8" : "pl-4"
          } ${suffix ? "pr-16" : "pr-4"}`}
        />
        {suffix && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[12px] text-[#9AA3B1]">
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
      <div className="mb-2 flex items-center justify-between">
        <label className="text-[13px] font-medium text-[#39424E]">{label}</label>
        <span className={`${NUM} text-[14px] font-semibold text-[#003DDB]`}>
          {value}%
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        step={5}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full cursor-pointer accent-[#003DDB]"
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
    <div className="grid gap-px overflow-hidden rounded-[10px] border border-[#E3E6EC] bg-[#E3E6EC] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
      {/* ── Inputs ── */}
      <div className="bg-white p-6 md:p-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <p className={`${MICRO} text-[#0B0E14]`}>
            Your after-hours numbers
          </p>
          <button
            type="button"
            onClick={() => setInputs(DEFAULTS)}
            className={`${MICRO} text-[#9AA3B1] transition-colors hover:text-[#003DDB]`}
          >
            Reset
          </button>
        </div>

        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
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
          <div className="grid gap-4 sm:grid-cols-2">
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
      </div>

      {/* ── Results. Ink, because this is the desk moment of the page. ── */}
      <div className="flex flex-col gap-px bg-[#E3E6EC]">
        <div className="flex-1 bg-[#0A0D14] p-6 md:p-8">
          <p className={`${MICRO} text-[#E08A4C]`}>
            Current after-hours revenue leakage
          </p>
          <p className={`${NUM} ${DISPLAY} mt-4 text-[44px] leading-none text-white md:text-[56px]`}>
            {fmt(revenueLeakage)}
            <span className="ml-2 align-baseline text-[15px] font-normal tracking-normal text-white/45">
              / month
            </span>
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-white/65">
            <span className={NUM}>{fmt(revenueLeakage * 12)}</span> a year
            <span className="mx-1.5 text-white/25">·</span>
            <span className={NUM}>{fmt(marginLeakage)}</span> a month in gross
            margin
          </p>
          <p className={`${MICRO} mt-5 leading-relaxed text-white/40`}>
            <span className={NUM}>{Math.round(lostUnfilled)}</span> unfilled
            bookings + <span className={NUM}>{Math.round(lostUnrecovered)}</span>{" "}
            unrecovered cancellations ={" "}
            <span className={NUM}>{Math.round(lostShifts)}</span> lost shifts a
            month
          </p>
        </div>

        <div className="flex-1 bg-[#0A0D14] p-6 md:p-8">
          <p className={`${MICRO} text-[#7AA2FF]`}>
            Modelled value of an improved fill rate
          </p>
          <p className={`${NUM} ${DISPLAY} mt-4 text-[44px] leading-none text-white md:text-[56px]`}>
            {fmt(potentialRevenue)}
            <span className="ml-2 align-baseline text-[15px] font-normal tracking-normal text-white/45">
              / month
            </span>
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-white/65">
            <span className={NUM}>{fmt(potentialRevenue * 12)}</span> a year
            <span className="mx-1.5 text-white/25">·</span>
            <span className={NUM}>{fmt(potentialMargin)}</span> a month in gross
            margin
          </p>
          <p className={`${MICRO} mt-5 leading-relaxed text-white/40`}>
            Modelled at +<span className={NUM}>{IMPROVEMENT_PTS}</span>{" "}
            percentage points on fill and recovery, capped at{" "}
            <span className={NUM}>{IMPROVEMENT_CAP}</span>%
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AssessmentCalculatorPage() {
  return (
    <div data-theme="desk" className="flex min-h-screen flex-col bg-white font-sans">
      <FunnelHeader
        backLabel="Back to the desk"
        backHref="/workforce-ops-desk"
      />

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="border-t border-[#E3E6EC] bg-white">
          <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] pb-10 pt-12 md:pb-12 md:pt-16`}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className={`${MICRO} text-[#003DDB]`}>
                After-hours assessment
              </p>
              <h1
                className={`${DISPLAY} mt-5 max-w-[20ch] text-[38px] text-[#0A0D14] sm:text-[50px] md:text-[62px]`}
              >
                What are unfilled shifts and cancellations costing you?
              </h1>
              <p className={`${BODY} mt-6 max-w-[640px]`}>
                Enter your own after-hours numbers. The model shows the revenue
                currently leaking through unfilled bookings and unrecovered
                cancellations, and what a better fill rate would be worth.
                Nothing is sent anywhere. The numbers stay in this browser.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── The tool ── */}
        <section className="border-t border-[#E3E6EC] bg-[#F7F8FA]">
          <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-10 md:py-14`}>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              <LeakageCalculator />
            </motion.div>

            <p className="mx-auto mt-6 max-w-[640px] text-center text-[13px] leading-relaxed text-[#5B6472]">
              Modelling is based entirely on the numbers entered above and is
              illustrative only. It is not a guarantee of performance. Worker
              availability can never be guaranteed.
            </p>
          </div>
        </section>

        {/* ── How the numbers are worked out ── */}
        <section className="border-t border-[#E3E6EC] bg-white">
          <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-12 md:py-16`}>
            <div className="grid gap-8 lg:grid-cols-[124px_minmax(0,1fr)] lg:gap-12">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <div className="flex items-center gap-3 lg:block">
                  <span className={`${MICRO} ${NUM} text-[#9AA3B1]`}>01</span>
                  <span
                    aria-hidden
                    className="h-px w-6 bg-[#E3E6EC] lg:my-3 lg:h-6 lg:w-px"
                  />
                  <h2 className={`${MICRO} text-[#0B0E14]`}>Method</h2>
                </div>
              </div>

              <div className="min-w-0">
                <p
                  className={`${DISPLAY} text-[30px] text-[#0A0D14] sm:text-[38px] md:text-[44px]`}
                >
                  Nothing here is a black box
                </p>

                <dl className="mt-8 max-w-[760px] divide-y divide-[#E3E6EC] border-y border-[#E3E6EC]">
                  {[
                    {
                      t: "Lost shifts",
                      d: "Booking requests that go unfilled, plus cancellations that are never recovered.",
                    },
                    {
                      t: "Revenue leakage",
                      d: "Lost shifts multiplied by your bill rate and your average shift length. Gross margin uses your bill rate less your loaded worker cost.",
                    },
                    {
                      t: "Modelled value",
                      d: "A 15 percentage point improvement in both fill and recovery, capped at 95 per cent. It is an illustrative scenario for discussion, not a promise. Nobody can guarantee that workers are available.",
                    },
                  ].map((row) => (
                    <div
                      key={row.t}
                      className="grid gap-2 py-5 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-6"
                    >
                      <dt className={`${MICRO} pt-1 text-[#003DDB]`}>{row.t}</dt>
                      <dd className={BODY}>{row.d}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* No guarantee link: that page is about a minimum of fifteen sales
          meetings a month, which is a different offer entirely and not a
          promise we make about after-hours coordination. */}
      <FunnelFooter note="Outsourced after-hours coordination" showGuarantee={false} />
    </div>
  );
}
