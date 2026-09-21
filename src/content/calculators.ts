/*
 * THE ASSESSMENT CALCULATORS, one per offer.
 *
 * ⚠️ READ THE HEADER OF src/components/desk/Calculator.tsx FIRST. The
 * rule it enforces governs everything in this file: every number in
 * every output comes from the reader's own inputs, and the arithmetic is
 * printed on screen. There are no industry averages in here.
 *
 * ⚠️ THE DEFAULTS ARE PLACEHOLDERS, NOT BENCHMARKS, and the component
 * says so in its footer. They exist so the calculator renders as a
 * working thing rather than a row of zeros, and so a reader can see the
 * shape of the sum before they touch it. Do not tune them to produce an
 * impressive number, and never cite one of them anywhere as a figure.
 *
 * ⚠️ THERE ARE THREE CALCULATORS, NOT FOUR. The Workforce Desk is one
 * product with two pages, so it gets one calculator with two sets of
 * labels and starting values. Same rule as everywhere else in this
 * architecture: if the offer is one thing, it stays one thing.
 *
 * ⚠️ AUSTRALIA. Currency USD, and the practice one counts patients
 * while the care one counts shifts and clients. The Australian domain
 * carries its own copy of this file with its own labels and values.
 */

import type { CalcConfig } from "@/components/desk/Calculator";

const RECOVERY = {
  key: "recovery",
  label: "If you closed this much of the gap",
  hint: "Your hypothesis, not our promise. Move it to whatever you think is realistic.",
  min: 0,
  max: 100,
  step: 5,
  value: 50,
  pct: true,
};

/* ══════════════════════════════════════════════════════════════════════
   THE PATIENT ACCESS DESK
   What the calls nobody could pick up are worth over a year.
   ══════════════════════════════════════════════════════════════════════ */
export const PATIENT_ACCESS_CALC: CalcConfig = {
  kind: "patient-access",
  eyebrow: "The unanswered call",
  title:
    "What is a year of calls nobody could pick up actually worth to your practice?",
  fields: [
    {
      key: "missed",
      label: "Calls you miss in a typical week",
      hint: "Rung out, voicemail, or answered too late to be useful.",
      min: 0,
      max: 80,
      step: 1,
      value: 12,
    },
    {
      key: "share",
      label: "Share of those that were a new patient",
      min: 0,
      max: 100,
      step: 5,
      value: 30,
      pct: true,
    },
    {
      key: "value",
      label: "What a new patient is worth in their first year",
      hint: "Your figure, not an average. Treatment plan, not first visit.",
      min: 100,
      max: 6000,
      step: 50,
      value: 450,
      money: true,
    },
    {
      key: "weeks",
      label: "Weeks a year you are open",
      min: 40,
      max: 52,
      step: 1,
      value: 48,
    },
  ],
  recovery: RECOVERY,
  resultLabel: "On your figures, a year of them is worth",
  recoveredLabel: "At that rate, the part you would get back is worth",
};

/* ══════════════════════════════════════════════════════════════════════
   THE OPERATIONS DESK
   What the shifts that never got covered are worth over a year.
   ══════════════════════════════════════════════════════════════════════ */
export const OPERATIONS_CALC: CalcConfig = {
  kind: "operations",
  eyebrow: "The shift nobody covered",
  title:
    "What is a year of shifts that never got filled actually worth to your service?",
  fields: [
    {
      key: "unfilled",
      label: "Shifts that go uncovered in a typical week",
      hint: "Called off and never filled, or handed back to the client.",
      min: 0,
      max: 60,
      step: 1,
      value: 6,
    },
    {
      key: "hours",
      label: "Hours in a typical shift",
      min: 2,
      max: 12,
      step: 1,
      value: 8,
    },
    {
      key: "rate",
      label: "What you bill per hour",
      hint: "Your rate, not a market figure.",
      min: 15,
      max: 150,
      step: 1,
      value: 72,
      money: true,
    },
    {
      key: "weeks",
      label: "Weeks a year you operate",
      min: 40,
      max: 52,
      step: 1,
      value: 52,
    },
  ],
  recovery: RECOVERY,
  resultLabel: "On your figures, a year of them is worth",
  recoveredLabel: "At that rate, the part you would get back is worth",
};

/* ══════════════════════════════════════════════════════════════════════
   THE WORKFORCE DESK
   What a role sitting open costs, over a year of hiring. One calculator,
   two sets of labels, because it is one product.
   ══════════════════════════════════════════════════════════════════════ */
function workforceCalc(a: {
  eyebrow: string;
  title: string;
  roleLabel: string;
  roleHint: string;
  hires: number;
  weeks: number;
  cost: number;
  costHint: string;
}): CalcConfig {
  return {
    kind: "workforce",
    eyebrow: a.eyebrow,
    title: a.title,
    fields: [
      {
        key: "hires",
        label: a.roleLabel,
        hint: a.roleHint,
        min: 1,
        max: 150,
        step: 1,
        value: a.hires,
      },
      {
        key: "open",
        label: "Weeks a role sits open before somebody starts",
        hint: "From the day you decide to hire to the day they are productive.",
        min: 1,
        max: 26,
        step: 1,
        value: a.weeks,
      },
      {
        key: "cost",
        label: "What a vacant week costs you",
        hint: a.costHint,
        min: 100,
        max: 10000,
        step: 100,
        value: a.cost,
        money: true,
      },
    ],
    recovery: RECOVERY,
    resultLabel: "On your figures, a year of vacancy is worth",
    recoveredLabel: "At that rate, the part you would get back is worth",
  };
}

export const WORKFORCE_PRACTICES_CALC = workforceCalc({
  eyebrow: "The role sitting open",
  title:
    "What does the gap between deciding to hire and somebody being useful actually cost you?",
  roleLabel: "Roles you hire in a year",
  roleHint: "Replacements included, not just new positions.",
  hires: 5,
  weeks: 7,
  cost: 1600,
  costHint:
    "Overtime, agency cover, and the appointments you could not take. Your figure.",
});

export const WORKFORCE_CARE_CALC = workforceCalc({
  eyebrow: "The role sitting open",
  title:
    "What does the gap between deciding to hire and somebody working a shift actually cost you?",
  roleLabel: "Support workers you hire in a year",
  roleHint: "Replacements included. With turnover where it is, this is usually the larger number.",
  hires: 25,
  weeks: 5,
  cost: 1100,
  costHint:
    "Overtime, agency cover, and the cases you had to turn down. Your figure.",
});
