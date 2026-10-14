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

import type { CalcConfig, CalcField } from "@/components/desk/Calculator";

const RECOVERY: CalcField = {
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

/* ======================================================================
   ROSTERING AUDIT & EFFICIENCY
   What the premium on avoidable cover is worth over a year.

   🔴 THE PREMIUM, NOT THE COST, AND THIS IS A SAFETY LINE RATHER THAN
   A COPY PREFERENCE. The retired Operations calculator multiplied
   uncovered shifts by a billing rate, which measured the wrong thing and
   implied the goal was to stop paying for the shift. Both inputs here
   ask only for the EXTRA paid to cover a shift the expensive way. The
   shift still has to be covered and the worker still has to be paid.
   Asking for the premium is what makes this arithmetic structurally
   incapable of reading as "cut your staffing costs", which the offer
   brief forbids outright.

   ⚠️ The recovery slider starts at 25, not 50. A modest default from a
   firm with no case studies is more credible than an ambitious one, and
   a reader who raises it themselves has persuaded themselves.
   ====================================================================== */
export const ROSTERING_CALC: CalcConfig = {
  kind: "rostering",
  eyebrow: "What the avoidable cover is costing you",
  title:
    "How much are you paying in overtime and agency rates to cover absences you could see coming?",
  fields: [
    {
      key: "otHours",
      label: "Overtime hours you pay in a typical week",
      hint: "Across your whole workforce, from your payroll report.",
      min: 0,
      max: 400,
      step: 5,
      value: 40,
    },
    {
      key: "otPremium",
      label: "What an overtime hour costs above the ordinary rate",
      hint: "The premium only, not the whole hourly cost.",
      min: 0,
      max: 100,
      step: 1,
      value: 18,
      money: true,
    },
    {
      key: "agencyShifts",
      label: "Agency shifts you book in a typical month",
      hint: "Only the ones booked because nobody internal was available.",
      min: 0,
      max: 200,
      step: 1,
      value: 12,
    },
    {
      key: "agencyPremium",
      label: "What an agency shift costs above running it yourself",
      hint: "The invoice, less what that shift costs with your own worker.",
      min: 0,
      max: 1000,
      step: 10,
      value: 180,
      money: true,
    },
  ],
  recovery: {
    ...RECOVERY,
    label: "If this much of it turned out to be avoidable",
    value: 25,
  },
  resultLabel: "On your figures, the premium you pay for cover is worth",
  recoveredLabel: "At that rate, the part worth looking at is",
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

/*
 * WORKFORCE CONTINUITY.
 *
 * ⚠️ NOT the practices Workforce Desk calculator with different words.
 * It shares the arithmetic (roles x weeks open x weekly cost) and
 * nothing else: this one costs the premium paid to cover a VACANCY,
 * where the rostering calculator costs the premium paid to cover an
 * ABSENCE. Different weeks. The page says so, because a reader who has
 * used both and suspects double counting discounts both numbers.
 */
export const CONTINUITY_CALC: CalcConfig = {
  kind: "workforce",
  eyebrow: "What the wait between hiring and rostering is costing you",
  title:
    "From the day you decide you need somebody, how long until they can take a shift, and what covers the shifts in between?",
  fields: [
    {
      key: "hires",
      label: "Support workers you need to bring on in a year",
      hint: "Replacements included. With turnover where it is, this is usually the larger number.",
      min: 1,
      max: 150,
      step: 1,
      value: 25,
    },
    {
      key: "open",
      label: "Weeks from deciding to hire to that person taking a shift",
      hint: "Advertising, screening, checks, induction and system access, end to end.",
      min: 1,
      max: 26,
      step: 1,
      value: 6,
    },
    {
      key: "cost",
      label: "What a week of that wait costs you to cover",
      hint: "The overtime and agency premium on the shifts that person would have taken.",
      min: 100,
      max: 10000,
      step: 100,
      value: 900,
      money: true,
    },
  ],
  recovery: {
    ...RECOVERY,
    label: "If you took this much out of the wait",
    value: 30,
  },
  resultLabel: "On your figures, a year of waiting is worth",
  recoveredLabel: "At that rate, the part worth looking at is",
};
