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

/* ======================================================================
   PATIENT REVENUE LEAKAGE AUDIT
   What unused appointment time is worth over a year.

   🔴 TWO FIGURES, GROSS AND NET, AND THAT IS THE WHOLE DESIGN. The
   brief requires potential gross appointment revenue to be distinguished
   from actual profit. A disclaimer cannot do that, because gross is the
   number a reader repeats. So the margin is an input the reader supplies
   and the net figure prints directly beneath every gross one.

   ⚠️ THERE IS NO MISSED-CALL FIGURE IN THIS SUM, and the page says so.
   No honest Australian one exists; every cost-per-missed-call number in
   circulation is invented. Never add one.
   ====================================================================== */
export const LEAKAGE_CALC: CalcConfig = {
  kind: "leakage",
  eyebrow: "What unused appointment time is worth over a year",
  title:
    "What is a year of appointment time nobody booked actually worth to your practice?",
  fields: [
    {
      key: "hours",
      label: "Unused bookable hours in a typical week",
      hint: "Across all practitioners. Open time nobody booked, plus cancellations nobody refilled.",
      min: 0,
      max: 200,
      step: 1,
      value: 20,
    },
    {
      key: "fee",
      label: "Your average fee for an hour of appointment time",
      hint: "From your own fee guide. A 30-minute appointment at $90 makes an hour $180.",
      min: 0,
      max: 1000,
      step: 10,
      value: 180,
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
    {
      key: "margin",
      label: "What is left after the practitioner and the cost of seeing the patient",
      hint: "Your own figure. Practitioner pay, materials, consumables, card fees.",
      min: 5,
      max: 90,
      step: 1,
      value: 35,
      pct: true,
    },
  ],
  marginKey: "margin",
  netLabel: "What would be left after the cost of delivering it:",
  recovery: {
    key: "recovery",
    label: "If this much of it turned out to be recoverable",
    hint: "Your hypothesis, not our promise. Move it to whatever you think is realistic.",
    min: 0,
    max: 100,
    step: 5,
    value: 20,
    pct: true,
  },
  resultLabel: "Unused appointment time, at your fees, gross",
  recoveredLabel: "At that rate, the part worth looking at is",
  recoveredNetLabel: "After the cost of delivering it:",
  footnote:
    "Your own arithmetic, on the figures you entered. The starting values are placeholders, not benchmarks. Not every unused hour can be filled, and the percentage is yours rather than a result we promise. There is no missed-call figure in this sum: no honest Australian one exists.",
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

/*
 * PATIENT BOOKING & RETENTION CONTINUITY.
 *
 * A stock of PEOPLE rather than hours, which is why it opens with a
 * subtraction. Input 2 asks how many of the overdue list a person
 * actually rang last month, with the helper "Calls, not texts." Most
 * readers type a very small number, and having typed it themselves they
 * have proved the proposition without being told it.
 *
 * 🔴 LAWYER ITEM. This values contacting patients the practice has
 * already determined are due. It is addressed to the owner about their
 * own clinically set list, never to a patient, and it carries three
 * counterweights. If it is ever judged uncomfortable, the fix is to keep
 * the subtraction and drop the money: show the headcount and stop.
 *
 * ⚠️ The slider drives the headline figure, so there is deliberately no
 * `recoveredLabel`. Adding one applies the percentage twice.
 */
export const RECALL_CALC: CalcConfig = {
  kind: "recall",
  eyebrow: "What a year of unworked recalls is worth",
  title:
    "How many patients your practitioners said should come back has a person actually rung?",
  fields: [
    {
      key: "overdue",
      label: "Patients overdue on your recall list right now",
      hint: "Overdue against the interval your practitioners set, not due soon. Your software will give you this.",
      min: 0,
      max: 5000,
      step: 10,
      value: 400,
    },
    {
      /* \u26a0\ufe0f NEW ON 15 OCTOBER 2026, and it is what makes the result
         true. Without it the model priced the standing backlog once
         and ignored that the list refills every month, which is the
         entire reason this is a continuity service rather than a job.
         A practice reads this straight off its own recall report. */
      key: "newly",
      label: "Patients who fall overdue in a typical month",
      hint: "From your own recall report. Patients who passed the interval your practitioners set and did not book.",
      min: 0,
      max: 1000,
      step: 5,
      value: 120,
    },
    {
      key: "rung",
      label: "How many of them a person rings in a typical month",
      hint: "Calls, not texts. The texts are already going out.",
      min: 0,
      max: 1000,
      step: 5,
      value: 20,
    },
    {
      key: "fee",
      label: "Your average fee for the appointment a recall leads to",
      hint: "From your own fee guide.",
      min: 0,
      max: 1000,
      step: 10,
      value: 160,
      money: true,
    },
    {
      key: "margin",
      label: "What is left after the practitioner and the cost of seeing the patient",
      hint: "Your own figure. Practitioner pay, materials, consumables, card fees.",
      min: 5,
      max: 90,
      step: 1,
      value: 35,
      pct: true,
    },
  ],
  marginKey: "margin",
  leadLabel: "Overdue patients a year nobody rings",
  netLabel: "What would be left after the cost of delivering them:",
  recovery: {
    key: "booked",
    label: "If this many of them booked once somebody rang",
    hint: "Your hypothesis, not our promise. Plenty of them have moved, see somebody else, or do not need an appointment.",
    min: 0,
    max: 50,
    step: 1,
    value: 10,
    pct: true,
  },
  resultLabel: "A year of those appointments, at your fees, gross",
  footnote:
    "Your own arithmetic, on the figures you entered. The starting values are placeholders, not benchmarks. Not every overdue patient should be booked. These are your recalls, set by your practitioners at the interval they chose, and we add nobody to the list.",
};

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
