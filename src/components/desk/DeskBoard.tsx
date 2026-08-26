"use client";

/*
 * Hero visual for the Desk brand: the desk actually working, one clinic
 * event and one care event, side by side.
 *
 * This is the "real and operational" imagery the brief calls for
 * (section 7) rather than stock photography. It is a depiction of the
 * standard workflow, not data, and carries the illustrative label so it
 * can never be read as a performance claim.
 */

import { motion } from "framer-motion";
import { Check, PhoneIncoming, CalendarX } from "lucide-react";

const EVENTS = [
  {
    icon: PhoneIncoming,
    time: "7:42 PM",
    tag: "Clinic",
    title: "New patient call, after close.",
    steps: [
      ["Answered in your practice name", "7:42 PM"],
      ["Booked in your practice software", "7:46 PM"],
    ],
  },
  {
    icon: CalendarX,
    time: "4:03 AM",
    tag: "Care",
    title: "Support worker calls off a 6am shift.",
    steps: [
      ["Cover arranged from your approved team", "4:19 AM"],
      ["In your morning handover", "7:55 AM"],
    ],
  },
];

export default function DeskBoard() {
  return (
    <div className="rounded-2xl border border-[#E2E7EE] bg-white p-5 md:p-6 shadow-[0_24px_60px_rgba(11,30,75,0.10)]">
      <div className="flex items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#003DDB] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#003DDB]" />
          </span>
          <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5A6676]">
            The desk, overnight
          </span>
        </div>
        <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#8FA0C4]">
          Illustrative example
        </span>
      </div>

      <div className="space-y-4">
        {EVENTS.map((e, i) => (
          <motion.div
            key={e.time}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.25 }}
            className="rounded-xl border border-[#E2E7EE] bg-[#F4F6FA] p-4"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#003DDB]">
                <e.icon className="h-3.5 w-3.5 text-white" strokeWidth={2} />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#003DDB]">
                {e.time}
              </span>
              <span className="rounded-full border border-[#C7D2E8] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#5A6676]">
                {e.tag}
              </span>
            </div>
            <p className="text-sm font-semibold text-[#0E1116] mb-3">{e.title}</p>
            <div className="space-y-1.5">
              {e.steps.map(([label, time], j) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.25 + j * 0.15 }}
                  className="flex items-center justify-between gap-3"
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <Check className="h-3.5 w-3.5 flex-shrink-0 text-[#003DDB]" strokeWidth={3} />
                    <span className="truncate text-xs text-[#39424E]">{label}</span>
                  </span>
                  <span className="flex-shrink-0 text-[10px] font-medium uppercase tracking-[0.08em] text-[#8FA0C4]">
                    {time}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="mt-4 rounded-lg bg-[#003DDB] px-4 py-3 text-xs font-semibold text-white"
      >
        Both handled. Nobody at the practice or the office was woken.
      </motion.p>
    </div>
  );
}
