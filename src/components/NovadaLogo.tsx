interface NovadaLogoProps {
  className?: string;
  variant?: "light" | "dark";
}

/**
 * Novada Tech wordmark — tight SVG, no internal whitespace.
 * Designed to sit directly on dark backgrounds without a wrapper.
 * Icon on left, stacked "Novada / Tech" on right.
 */
export default function NovadaLogo({
  className = "",
  variant = "light",
}: NovadaLogoProps) {
  const textColor = variant === "light" ? "#FFFFFF" : "#0A1A3F";

  return (
    <svg
      viewBox="0 0 152 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Novada Tech"
    >
      {/* Icon — two overlapping geometric shapes forming an N */}
      {/* Back layer: purple rounded rectangle */}
      <rect
        x="0"
        y="8"
        width="26"
        height="38"
        rx="4"
        fill="#6B5BE5"
      />
      {/* Front layer: lighter blue rounded rectangle, offset */}
      <rect
        x="14"
        y="0"
        width="26"
        height="38"
        rx="4"
        fill="#4F7FE0"
      />

      {/* Stacked wordmark — Novada / Tech */}
      <text
        x="50"
        y="22"
        fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
        fontSize="20"
        fontWeight="800"
        letterSpacing="-0.3"
        fill={textColor}
      >
        Novada
      </text>
      <text
        x="50"
        y="44"
        fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
        fontSize="20"
        fontWeight="800"
        letterSpacing="-0.3"
        fill={textColor}
      >
        Tech
      </text>
    </svg>
  );
}
