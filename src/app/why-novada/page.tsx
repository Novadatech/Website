import { lpSerif } from "@/lib/fonts";

import WhyNovadaPage from "./WhyNovadaPage";

/*
 * ⚠️ THE SERIF DISPLAY FACE, APPLIED ON THIS ROUTE ONLY. The single
 * declaration lives in src/lib/fonts.ts; applying `lpSerif.variable`
 * here rather than in src/app/layout.tsx is what keeps the family off
 * every route that does not use it.
 *
 * 🔴 DO NOT DECLARE Bitter() HERE AGAIN. Seven separate declarations
 * raced at build time and broke the Vercel build twice. The note in
 * src/lib/fonts.ts has the whole story.
 */

export default function Page() {
  return (
    <div className={lpSerif.variable}>
      <WhyNovadaPage />
    </div>
  );
}
