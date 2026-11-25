import type { Metadata } from "next";
import { lpSerif } from "@/lib/fonts";

import HomePage from "../HomePage";

/*
 * /ai-workforce — the AI Workforce offer's home.
 *
 * 🔴 MOVED HERE FROM "/" ON 25 NOV 2026, founder instruction: "/" is now
 * the neutral home that lets a visitor choose between the AI Workforce
 * and the new Workforce Continuity offer. This is the same page, the
 * same component (../HomePage.tsx) and the same metadata it had at "/".
 * The AI pages' logo (LpHeader) and footer booking link now point here.
 */
export const metadata: Metadata = {
  alternates: { canonical: "/ai-workforce" },
  title: "Novada | We streamline the work behind the care",
  description:
    "The Novada AI Workforce runs the administration behind Australian care providers and medical practices, inside the systems you already use. It asks before anything consequential and records every action.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "We streamline the work behind the care | Novada",
    description:
      "AI Workforce for Australian care providers and medical practices. Alongside your team, never instead of it, and never anything clinical.",
    type: "website",
  },
};

export default function Page() {
  return (
    <div className={lpSerif.variable}>
      <HomePage />
    </div>
  );
}
