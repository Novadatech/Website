interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function Logo({ className = "", variant = "light" }: LogoProps) {
  const textColor = variant === "light" ? "#FFFFFF" : "#0A1A3F";

  return (
    <svg
      viewBox="0 0 280 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Novada Tech"
    >
      {/* Icon — geometric N mark */}
      <rect
        x="0"
        y="12"
        width="28"
        height="40"
        rx="4"
        fill="#6C5CE7"
      />
      <rect
        x="14"
        y="0"
        width="28"
        height="40"
        rx="4"
        fill="#4F8CFF"
      />

      {/* Text — Novada Tech */}
      <text
        x="56"
        y="42"
        fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
        fontSize="30"
        fontWeight="700"
        letterSpacing="-0.5"
        fill={textColor}
      >
        Novada Tech
      </text>
    </svg>
  );
}
