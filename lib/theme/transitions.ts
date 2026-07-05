export const transitions = {
  fast: "150ms",
  base: "220ms",
  slow: "360ms",
  easing: "cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

export type TransitionToken = keyof typeof transitions;
