// Small, dependency-free inline SVG country flags for the language switcher.
// Each flag renders inside a circular viewport (clipped) so it reads as a tidy
// round badge at ~18px. Flags are decorative — callers pass aria-hidden — and
// the visible text label remains the accessible name.
import { useId } from "react";
import type { Locale } from "@/i18n/translations";

type FlagProps = {
  className?: string;
};

export type FlagComponent = (props: FlagProps) => JSX.Element;

const BASE = "shrink-0 rounded-full ring-1 ring-black/10";

// Circular clip so rectangular flags present as neat round badges.
function Circle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  // Unique per instance so several flags on screen don't share a clipPath id.
  const clip = useId();
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={`${BASE} ${className ?? "h-[18px] w-[18px]"}`}
    >
      <defs>
        <clipPath id={clip}>
          <circle cx="12" cy="12" r="12" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>{children}</g>
    </svg>
  );
}

// United Kingdom — Union Jack (simplified).
function GBFlag({ className }: FlagProps) {
  return (
    <Circle className={className}>
      <rect width="24" height="24" fill="#012169" />
      {/* white diagonals */}
      <path d="M0 0 L24 24 M24 0 L0 24" stroke="#fff" strokeWidth="4.5" />
      {/* red diagonals */}
      <path d="M0 0 L24 24 M24 0 L0 24" stroke="#C8102E" strokeWidth="2.5" />
      {/* white cross */}
      <path d="M12 0 V24 M0 12 H24" stroke="#fff" strokeWidth="6" />
      {/* red cross */}
      <path d="M12 0 V24 M0 12 H24" stroke="#C8102E" strokeWidth="3.5" />
    </Circle>
  );
}

// Spain — red / yellow / red bands.
function ESFlag({ className }: FlagProps) {
  return (
    <Circle className={className}>
      <rect width="24" height="24" fill="#C60B1E" />
      <rect y="6" width="24" height="12" fill="#FFC400" />
    </Circle>
  );
}

// France — blue / white / red vertical.
function FRFlag({ className }: FlagProps) {
  return (
    <Circle className={className}>
      <rect width="8" height="24" fill="#0055A4" />
      <rect x="8" width="8" height="24" fill="#fff" />
      <rect x="16" width="8" height="24" fill="#EF4135" />
    </Circle>
  );
}

// Germany — black / red / gold horizontal.
function DEFlag({ className }: FlagProps) {
  return (
    <Circle className={className}>
      <rect width="24" height="8" fill="#000" />
      <rect y="8" width="24" height="8" fill="#DD0000" />
      <rect y="16" width="24" height="8" fill="#FFCE00" />
    </Circle>
  );
}

// Italy — green / white / red vertical.
function ITFlag({ className }: FlagProps) {
  return (
    <Circle className={className}>
      <rect width="8" height="24" fill="#009246" />
      <rect x="8" width="8" height="24" fill="#fff" />
      <rect x="16" width="8" height="24" fill="#CE2B37" />
    </Circle>
  );
}

// Portugal — green / red with a simple emblem dot.
function PTFlag({ className }: FlagProps) {
  return (
    <Circle className={className}>
      <rect width="24" height="24" fill="#DA291C" />
      <rect width="9.5" height="24" fill="#046A38" />
      <circle cx="9.5" cy="12" r="3" fill="#FFCB05" stroke="#046A38" strokeWidth="0.8" />
    </Circle>
  );
}

export const localeFlags: Record<Locale, FlagComponent> = {
  en: GBFlag,
  es: ESFlag,
  fr: FRFlag,
  de: DEFlag,
  it: ITFlag,
  pt: PTFlag,
};
