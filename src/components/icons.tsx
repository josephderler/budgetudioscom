import type { SVGProps } from "react";

/**
 * Lightweight, consistent line-icon set drawn in a 24x24 grid with a 1.75
 * stroke. Used across the site instead of emoji so the UI reads as a polished,
 * custom product rather than default clip-art.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Compass — Explore & Discover */
export function CompassIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Speech + letters — Learn Words */
export function WordsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 3v-3H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      <path d="M7.5 12 9 8l1.5 4M7.9 11h2.2" />
      <path d="M13 8v4M13 8h2.2a1.3 1.3 0 0 1 0 2.6H13M13 10.6h2.4a1.3 1.3 0 0 1 0 2.6H13" />
    </svg>
  );
}

/** Music note — Make Music */
export function MusicIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 18V6l10-2v10" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="16.5" cy="16" r="2.5" />
    </svg>
  );
}

/** Two hands / heart — Help Friends */
export function FriendsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-6-4.35-8.5-8A4.3 4.3 0 0 1 12 8.5 4.3 4.3 0 0 1 20.5 13C18 16.65 12 21 12 21Z" />
      <path d="M12 8.5V13" />
    </svg>
  );
}

/** Sparkle palette — Fun Activities */
export function ActivitiesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3a9 9 0 1 0 0 18c1 0 1.6-.9 1.2-1.8-.5-1.1.3-2.2 1.5-2.2H17a4 4 0 0 0 4-4c0-5-4-8-9-8Z" />
      <circle cx="8.5" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="10" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Shield check — Safe & Kid-Friendly */
export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v5c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/** Mail — contact */
export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

/** Phone — contact */
export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5L15.5 11l4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" />
    </svg>
  );
}

/** Map pin — contact / location */
export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21c4-4 7-7.2 7-11a7 7 0 1 0-14 0c0 3.8 3 7 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/** Building — company */
export function BuildingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" />
      <path d="M14 10h5a1 1 0 0 1 1 1v10M4 21h16" />
      <path d="M7 8h3M7 12h3M7 16h3M17 14h0M17 18h0" />
    </svg>
  );
}

/** Document — legal */
export function DocumentIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3h7l5 5v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v5h5M9 13h6M9 17h6M9 9h2" />
    </svg>
  );
}

/** Lock — privacy */
export function LockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <path d="M12 14v2" />
    </svg>
  );
}

/** Clock — response time */
export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

/** Check — lists */
export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

/** Globe — countries */
export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </svg>
  );
}

/** Sparkles — years / celebration */
export function SparklesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
      <path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" />
    </svg>
  );
}

/** Translate / languages */
export function TranslateIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6h8M8 4v2c0 3.5-2 6-4 7.5M6.5 9.5c.8 2 2.5 3.5 4.5 4.5" />
      <path d="M13 20l3.5-9 3.5 9M14.3 17h4.4" />
    </svg>
  );
}

/** Child / family */
export function ChildIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="6" r="2.5" />
      <path d="M8 21v-5l-1.5-1.5A2 2 0 0 1 8.3 11h7.4a2 2 0 0 1 1.8 3.5L16 16v5" />
    </svg>
  );
}

/** Headset — support */
export function HeadsetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M20 19a4 4 0 0 1-4 4h-2" />
    </svg>
  );
}

/** Paper plane — send */
export function SendIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21 3 10.5 13.5M21 3l-6.5 18-4-8-8-4L21 3Z" />
    </svg>
  );
}

/** Arrow left — back */
export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

/** Scale — terms / legal balance */
export function ScaleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v16M7 20h10M5 8h14M5 8l-2.5 5a3 3 0 0 0 5 0L5 8Zm14 0-2.5 5a3 3 0 0 0 5 0L19 8Z" />
    </svg>
  );
}
