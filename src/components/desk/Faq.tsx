/*
 * The questions block.
 *
 * ⚠️ NO JAVASCRIPT, DELIBERATELY. This was a client accordion driven by
 * useState, which had two costs. It forced "use client" onto the whole
 * page it sat in, so every band above it hydrated for one collapsed
 * panel. And with JavaScript off or still downloading, the closed
 * answers were not in the reader's reach at all.
 *
 * <details> is the native element for this. It opens with no script, it
 * is keyboard operable and announced correctly by a screen reader, the
 * answers are always in the DOM for search and for find-in-page, and
 * browsers now expose them to find-in-page even while collapsed.
 *
 * The only motion is the chevron. Height is never animated: it is the
 * one property that guarantees layout thrash, and an answer that grows
 * under the reader's eyes while they start reading it is worse than one
 * that simply appears.
 */

import { ChevronDown } from "lucide-react";

export type QA = { q: string; a: string };

export default function Faq({
  items,
  openFirst = false,
}: {
  items: QA[];
  /** The homepage opens its first answer, so the block never reads as a
   *  row of closed doors. The service pages open none: their readers
   *  arrived with a specific question. */
  openFirst?: boolean;
}) {
  return (
    <div className="mt-10 border-t border-ink-100">
      {items.map((f, i) => (
        <details
          key={f.q}
          open={openFirst && i === 0}
          className="group border-b border-ink-100"
        >
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 py-5 [&::-webkit-details-marker]:hidden">
            <h4 className="text-base font-semibold text-ink-950">{f.q}</h4>
            <ChevronDown
              aria-hidden
              strokeWidth={2}
              className="h-4 w-4 shrink-0 text-ink-400 transition-transform duration-200 ease-standard group-open:rotate-180"
            />
          </summary>
          <p className="max-w-prose pb-6 text-base text-ink-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
