export const spacing = {
  xs: "0.5rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
  "2xl": "5rem",
  "3xl": "8rem",
} as const;

export type SpacingToken = keyof typeof spacing;
