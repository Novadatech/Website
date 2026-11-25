import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { lpSerif } from "@/lib/fonts";

import WcPageView from "@/components/wc/WcPage";
import { WC_PAGES } from "@/content/wc";

/*
 * /workforce-continuity/<page> — what-we-do, how-it-works,
 * who-we-support and the five industry solutions. Founder instruction
 * 25 Nov 2026. Every page is static (generateStaticParams), copy in
 * src/content/wc.ts, its own visuals in components/wc/WcVisuals.tsx.
 */
const SLUGS = Object.keys(WC_PAGES).filter((s) => s !== "home");

export const dynamicParams = false;

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = WC_PAGES[slug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/workforce-continuity/${slug}` },
    openGraph: { locale: "en_AU", siteName: "Novada", title: page.title, description: page.description, type: "website" },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = WC_PAGES[slug];
  if (!page) notFound();
  return (
    <div className={lpSerif.variable}>
      <WcPageView page={page} />
    </div>
  );
}
