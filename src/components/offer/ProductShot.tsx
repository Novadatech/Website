/**
 * A real screen of the Novada product, framed as a floating card.
 *
 * Founder instruction, 18 Nov 2026: use the product's own screens in
 * the feature sections, and keep the floating cards ("85% onboarding",
 * "Overnight handover sent") layered over them.
 *
 * The images are cut by tools/product-shots/build.py from the Figma
 * exports, one whole card per image, snapped to the card's border. The
 * few labels that predate the rename ("AI employee", "Coordinator") are
 * repainted there in the export's own face, DM Sans.
 *
 * ⚠️ AU ONLY. The screens are Australian care screens: SIL, AEDT,
 * rostering, ShiftCare. Never put them on novadatech.com or on a
 * practices page.
 *
 * ⚠️ The data in them is invented (Harmony Community Care, Jordan
 * Davies). Every visual that uses one carries the "Example" chip.
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
