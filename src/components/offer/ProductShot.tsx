/**
 * A screen of the Novada product, framed as a floating card.
 *
 * Founder instruction, 18 Nov 2026: use the product's own screens in the
 * feature sections, keep the floating cards ("85% onboarding", "Overnight
 * handover sent") over them, and edit the screens to fit each offer.
 *
 * Built by novada-website/tools/product-shots:
 *   AU care, home, why-novada -> real crops of the Figma exports (build.py)
 *   practices (AU + US), US care, home, why -> the same cards rebuilt in
 *     the export's design with that offer's content (panels/)
 *
 * ⚠️ Each page uses ITS OWN market's files. The AU care screens say SIL,
 * AEDT and ShiftCare and must never ship on novadatech.com.
 */
export default function ProductShot({
  src,
  width,
  height,
  alt,
  className = "",
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-ink-100 bg-white shadow-float ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        width={width}
        height={height}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />
    </div>
  );
}
