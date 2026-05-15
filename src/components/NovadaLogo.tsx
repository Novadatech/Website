import Image from "next/image";

interface NovadaLogoProps {
  className?: string;
  variant?: "light" | "dark";
}

/**
 * Novada Tech wordmark — favicon icon + stacked "Novada / Tech" text.
 * Designed to sit directly on dark backgrounds without a wrapper.
 */
export default function NovadaLogo({
  className = "",
  variant = "light",
}: NovadaLogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy-950";

  return (
    <div
      className={`inline-flex items-center gap-3 ${className}`}
      aria-label="Novada Tech"
    >
      {/* Icon — favicon */}
      <Image
        src="/favicon.png"
        alt=""
        width={56}
        height={56}
        priority
        className="h-12 w-12 flex-shrink-0"
      />

      {/* Stacked wordmark — Novada / Tech */}
      <div
        className={`flex flex-col leading-none font-extrabold tracking-tight text-xl ${textColor}`}
      >
        <span>Novada</span>
        <span className="mt-1">Tech</span>
      </div>
    </div>
  );
}
