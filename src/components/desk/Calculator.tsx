"use client";

/*
 * ══════════════════════════════════════════════════════════════════════
 * THE ASSESSMENT CALCULATOR.
 *
 * ⚠️ THE RULE THIS COMPONENT EXISTS TO OBEY, and it is not negotiable:
 *
 *     EVERY NUMBER IN THE OUTPUT COMES FROM THE READER'S OWN INPUTS,
 *     AND THE ARITHMETIC IS PRINTED ON SCREEN.
 *
 * This site's whole credibility position is that it will not publish a
 * figure it cannot source. BaselineReport ships with empty cells ON
 * PURPOSE and says why in its caption. EVIDENCE in offers.ts makes
 * `source` a required field. A calculator that said "practices like
 * yours lose $184,000 a year" would contradict all of that on the same
 * page, and it would be the fastest way to undo the trust the rest of
 * the site is built to earn.
 *
 * So there are no industry averages in here, no benchmarks, and no
 * assumptions of our own. The defaults are starting points the reader is
 * expected to overwrite, they are labelled as such, and the formula line
 * under the result shows exactly how their inputs produced it.
 *
 * ⚠️ THE SECOND SLIDER IS THEIRS TOO. The retired leakage calculator
 * modelled an improvement for the reader: it added a fixed 15 points to
 * their fill rate and showed the money that produced. That is a
 * performance claim wearing a slider, and this site does not make
 * performance claims. Here the reader sets the "if it were" figure
 * themselves, so the upside is their hypothesis and never our promise.
 *
 * ⚠️ NO PRICING, EVER. This computes what a gap is worth to them. It
 * must never imply what we charge, or that we cost less than the gap.
 *
 * Client component, because it has state. It renders fully at its
 * default values on the server, so it is never an empty box waiting on
 * hydration, and nothing inside it starts at opacity:0.
 * ══════════════════════════════════════════════════════════════════════
 */

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { D1, MICRO, MICRO_TIGHT } from "./tokens";

export type CalcField = {
  key: string;
  /** The question, in the reader's words. Never a variable name. */
  label: string;
  /** What it means, when the label alone could be read two ways. */
  hint?: string;
  min: number;
  max: number;
  step: number;
  /** A starting point, not a benchmark. The reader overwrites it. */
  value: number;
  /** Rendered as money rather than a count. */
  money?: boolean;
  /** Rendered as a percentage. */
  pct?: boolean;
};

/**
 * ⚠️ THE MATH LIVES IN THIS FILE, NOT IN THE CONFIG, and it has to.
 * The configs are imported by server components and passed across the
 * server/client boundary, and a function cannot cross it: React refuses
 * with "Functions cannot be passed directly to Client Components". So
 * the config is pure serialisable data carrying a `kind`, and the sums
 * are looked up here. Adding a calculator means adding a kind here and
 * a config there, in that order.
 */
export type CalcKind = "patient-access" | "operations" | "workforce";

export type CalcConfig = {
  kind: CalcKind;
  eyebrow: string;
  /** The question the calculator answers, as a sentence. */
  title: string;
  fields: CalcField[];
  /** The "if it were" field. The reader's hypothesis, not ours. */
  recovery: CalcField;
  /** What the headline figure counts. */
  resultLabel: string;
  /** What the recovered figure counts. */
  recoveredLabel: string;
};

type V = Record<string, number>;
type Fmt = { m: (n: number) => string; n: (n: number) => string };

const MATH: Record<
  CalcKind,
  { annual: (v: V) => number; workings: (v: V, f: Fmt) => string[] }
> = {
  "patient-access": {
    annual: (v) => v.missed * v.weeks * (v.share / 100) * v.value,
    workings: (v, f) => {
      const calls = v.missed * v.weeks;
      const people = calls * (v.share / 100);
      return [
        `${v.missed} missed calls a week × ${v.weeks} weeks = ${f.n(calls)} calls`,
        `${f.n(calls)} × ${v.share}% that were a new patient = ${f.n(Math.round(people))} first conversations you did not have`,
        `${f.n(Math.round(people))} × ${f.m(v.value)} = ${f.m(people * v.value)}`,
      ];
    },
  },
  operations: {
    annual: (v) => v.unfilled * v.hours * v.rate * v.weeks,
    workings: (v, f) => {
      const hrs = v.unfilled * v.hours;
      const wk = hrs * v.rate;
      return [
        `${v.unfilled} uncovered shifts a week × ${v.hours} hours = ${f.n(hrs)} hours`,
        `${f.n(hrs)} hours × ${f.m(v.rate)} billed = ${f.m(wk)} a week`,
        `${f.m(wk)} × ${v.weeks} weeks = ${f.m(wk * v.weeks)}`,
      ];
    },
  },
  workforce: {
    annual: (v) => v.hires * v.open * v.cost,
    workings: (v, f) => {
      const weeks = v.hires * v.open;
      return [
        `${v.hires} roles a year × ${v.open} weeks open = ${f.n(weeks)} vacant weeks`,
        `${f.n(weeks)} × ${f.m(v.cost)} a week = ${f.m(weeks * v.cost)}`,
      ];
    },
  },
};

function money(n: number, locale: string, currency: string) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(n)));
}

export default function Calculator({
  config,
  locale = "en-US",
  currency = "USD",
  bookHref = "#book",
}: {
  config: CalcConfig;
  locale?: string;
  currency?: string;
  bookHref?: string;
}) {
  const [vals, setVals] = useState<Record<string, number>>(() =>
    Object.fromEntries(
      [...config.fields, config.recovery].map((f) => [f.key, f.value]),
    ),
  );

  const set = (k: string, n: number) =>
    setVals((v) => ({ ...v, [k]: Number.isFinite(n) ? n : 0 }));

  const { annual, recovered, workings } = useMemo(() => {
    const fmt: Fmt = {
      m: (n: number) => money(n, locale, currency),
      n: (n: number) =>
        new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(n),
    };
    const math = MATH[config.kind];
    const a = math.annual(vals);
    const pct = Math.min(100, Math.max(0, vals[config.recovery.key] ?? 0));
    return {
      annual: a,
      recovered: a * (pct / 100),
      workings: math.workings(vals, fmt),
    };
  }, [vals, config, locale, currency]);

  return (
    <figure className="overflow-hidden rounded-lg border border-ink-200 bg-white shadow-lift">
      <figcaption className="border-b border-ink-100 px-5 py-4 md:px-7 md:py-5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <p className={`${MICRO} text-brand-500`}>{config.eyebrow}</p>
          <p className={`${MICRO_TIGHT} text-ink-500`}>
            Your numbers, not ours
          </p>
        </div>
        <p className="mt-3 max-w-prose text-base font-semibold text-ink-950">
          {config.title}
        </p>
      </figcaption>

      <div className="grid gap-px bg-ink-100 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        {/* ── THE INPUTS. Every one of them is a question about their own
            operation. Nothing here is prefilled from an industry figure,
            and the caption says so. ── */}
        <div className="bg-white p-5 md:p-7">
          <p className={`${MICRO} text-ink-500`}>What is true for you</p>
          <div className="mt-6 flex flex-col gap-7">
            {config.fields.map((f) => (
              <label key={f.key} className="block">
                <span className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium text-ink-950">
                    {f.label}
                  </span>
                  <span className="tabular text-sm font-semibold text-brand-500">
                    {f.money
                      ? money(vals[f.key], locale, currency)
                      : f.pct
                        ? `${vals[f.key]}%`
                        : vals[f.key]}
                  </span>
                </span>
                {f.hint ? (
                  <span className="mt-1 block text-xs text-ink-500">
                    {f.hint}
                  </span>
                ) : null}
                <input
                  type="range"
                  min={f.min}
                  max={f.max}
                  step={f.step}
                  value={vals[f.key]}
                  onChange={(e) => set(f.key, Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-ink-100 accent-brand-500"
                />
              </label>
            ))}
          </div>
        </div>

        {/* ── THE RESULT, and the arithmetic that produced it. ── */}
        <div className="bg-ink-50 p-5 md:p-7">
          <p className={`${MICRO} text-ink-500`}>{config.resultLabel}</p>
          <p className={`${D1} mt-4 text-ink-950`}>
            {money(annual, locale, currency)}
          </p>

          {/* The sum, in full. A reader who does not believe the number
              can check it, which is the point. */}
          <ol className="mt-6 flex flex-col gap-2 border-t border-ink-200 pt-5">
            {workings.map((w) => (
              <li key={w} className="tabular text-sm text-ink-600">
                {w}
              </li>
            ))}
          </ol>

          <div className="mt-8 border-t border-ink-200 pt-6">
            <label className="block">
              <span className="flex items-baseline justify-between gap-4">
                <span className="text-sm font-medium text-ink-950">
                  {config.recovery.label}
                </span>
                <span className="tabular text-sm font-semibold text-brand-500">
                  {vals[config.recovery.key]}%
                </span>
              </span>
              {config.recovery.hint ? (
                <span className="mt-1 block text-xs text-ink-500">
                  {config.recovery.hint}
                </span>
              ) : null}
              <input
                type="range"
                min={config.recovery.min}
                max={config.recovery.max}
                step={config.recovery.step}
                value={vals[config.recovery.key]}
                onChange={(e) =>
                  set(config.recovery.key, Number(e.target.value))
                }
                className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-ink-200 accent-brand-500"
              />
            </label>
            <p className="mt-5 text-sm text-ink-600">
              {config.recoveredLabel}{" "}
              <span className="tabular font-semibold text-ink-950">
                {money(recovered, locale, currency)}
              </span>{" "}
              a year.
            </p>
          </div>

          <a
            href={bookHref}
            className="group mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-brand-500 px-6 text-sm font-semibold text-white shadow-cta transition-[background-color,box-shadow] duration-150 ease-standard hover:bg-brand-600 hover:shadow-lift"
          >
            Take these numbers to the review
            <ArrowRight
              aria-hidden
              className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>

      {/* ── THE HONESTY LABEL. Not "illustrative", which invites the
          reader to assume there are real numbers somewhere. A flat
          statement of what this is and what it is not. ── */}
      <div className="border-t border-ink-100 bg-ink-50 px-5 py-5 md:px-7">
        <p className="max-w-prose text-xs leading-[1.6] text-ink-500">
          This is your own arithmetic, worked on the figures you just entered.
          It contains no industry averages and no assumptions of ours, the
          starting values are placeholders to be overwritten rather than
          benchmarks, and the second figure is the hypothesis you set, not a
          result we are promising. Nothing here is a projection of what
          engaging us would produce.
        </p>
      </div>
    </figure>
  );
}
