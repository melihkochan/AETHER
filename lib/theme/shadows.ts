export const shadows = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.35)",
  md: "0 6px 16px -4px rgb(0 0 0 / 0.45)",
  lg: "0 16px 40px -12px rgb(0 0 0 / 0.55)",
  glass: "0 8px 32px 0 rgb(0 0 0 / 0.35)",
} as const;

export type ShadowToken = keyof typeof shadows;
