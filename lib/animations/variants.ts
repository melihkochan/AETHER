import type { Transition, Variants } from "framer-motion";

import { transitions } from "@/lib/theme";

const easing: Transition["ease"] = [0.4, 0, 0.2, 1];
const exitDuration = Number.parseInt(transitions.fast, 10) / 1000;

export const springTransition: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 30,
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: easing } },
  exit: { opacity: 0, transition: { duration: exitDuration, ease: easing } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easing } },
  exit: { opacity: 0, y: 16, transition: { duration: exitDuration, ease: easing } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: easing } },
  exit: { opacity: 0, scale: 0.96, transition: { duration: exitDuration, ease: easing } },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easing } },
  exit: { opacity: 0, y: 32, transition: { duration: exitDuration, ease: easing } },
};

export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easing } },
  exit: { opacity: 0, y: -8, transition: { duration: exitDuration, ease: easing } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};
