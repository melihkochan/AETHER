export const calloutColors = {
  info: "var(--accent)",
  warning: "#fbbf24",
  tip: "#34d399",
} as const;

export type CalloutColorType = keyof typeof calloutColors;
