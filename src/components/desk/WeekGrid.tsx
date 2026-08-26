"use client";

/*
 * The thesis, drawn: "The desk is a 168-hour job staffed for 38."
 *
 * A week rendered as 7 rows of 24 hours. The 38 cells a standard
 * Australian full-time week actually covers are filled; the other 130 are
 * not. This is arithmetic on the brief's own line, not a statistic, so it
 * carries no source requirement. 38 = Mon to Thu 9 to 5, plus Fri 9 to 3.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Staffed hours per weekday, as [startHour, endHour) in 24h time.
const STAFFED: Record<number, [number, number]> = {
  0: [9, 17],
  1: [9, 17],
  2: [9, 17],
  3: [9, 17],
  4: [9, 15],
};

export default function WeekGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  let cellIndex = 0;

  return (
    <div ref={ref} className="rounded-xl border border-[#E2E7EE] bg-white p-6 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <p className="font-condensed text-[40px] md:text-[52px] font-bold leading-none text-[#0E1116]">
            168 <span className="text-[#C7D2E8]">/</span>{" "}
            <span className="text-[#003DDB]">38</span>
          </p>
          <p className="mt-2 text-sm text-[#5A6676]">
            Hours a week the work arrives, against the hours the desk is
            staffed.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs text-[#5A6676]">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-[2px] bg-[#003DDB]" />
            Staffed
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-[2px] bg-[#E2E7EE]" />
            Not staffed
          </span>
        </div>
      </div>

      <div className="space-y-1.5">
        {DAYS.map((day, d) => (
          <div key={day} className="flex items-center gap-3">
            <span className="w-9 flex-shrink-0 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8FA0C4]">
              {day}
            </span>
            <div className="flex flex-1 gap-[3px]">
              {Array.from({ length: 24 }).map((_, h) => {
                const range = STAFFED[d];
                const on = !!range && h >= range[0] && h < range[1];
                const i = cellIndex++;
                return (
                  <motion.span
                    key={h}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.002 }}
                    className={`h-4 flex-1 rounded-[2px] ${
                      on ? "bg-[#003DDB]" : "bg-[#E2E7EE]"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm md:text-base font-medium text-[#0B1E4B] leading-relaxed">
        Every unfilled square is a call that rang out, a recall that never
        got run, or a shift that fell over with nobody on it.
      </p>
    </div>
  );
}
