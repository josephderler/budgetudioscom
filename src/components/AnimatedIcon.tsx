import { motion, type Variants } from "framer-motion";
import type { Icon } from "@phosphor-icons/react";

type Motion = "spin" | "bounce" | "beat" | "wiggle" | "pop" | "float";

const motions: Record<Motion, Variants> = {
  spin: {
    rest: { rotate: 0 },
    active: { rotate: 360, transition: { duration: 0.9, ease: "easeInOut" } },
  },
  bounce: {
    rest: { y: 0 },
    active: { y: [0, -5, 0, -3, 0], transition: { duration: 0.7 } },
  },
  beat: {
    rest: { scale: 1 },
    active: { scale: [1, 1.18, 0.96, 1.12, 1], transition: { duration: 0.7 } },
  },
  wiggle: {
    rest: { rotate: 0 },
    active: { rotate: [0, -10, 9, -6, 0], transition: { duration: 0.7 } },
  },
  pop: {
    rest: { scale: 1 },
    active: { scale: [1, 1.22, 1], transition: { duration: 0.45 } },
  },
  float: {
    rest: { y: 0 },
    active: { y: [0, -4, 0], transition: { duration: 0.9, ease: "easeInOut" } },
  },
};

type Props = {
  /** A Phosphor icon component. */
  icon: Icon;
  /** Which micro-animation plays while the parent group is hovered. */
  motionType?: Motion;
  className?: string;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
};

/**
 * Animated icon wrapper. Sits inside a `group` and plays a tasteful
 * micro-interaction when that group is hovered (variants driven by the
 * `whileHover` on the group via `group-hover` → framer variant propagation).
 *
 * The parent passes `initial="rest"` / `whileHover="active"` so the icon
 * animates together with the card.
 */
export default function AnimatedIcon({
  icon: IconCmp,
  motionType = "pop",
  className = "h-7 w-7",
  weight = "duotone",
}: Props) {
  return (
    <motion.span variants={motions[motionType]} className="inline-flex">
      <IconCmp className={className} weight={weight} />
    </motion.span>
  );
}
