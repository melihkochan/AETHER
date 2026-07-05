export const statusColors = {
  online: "#34d399",
  offline: "#71717a",
  pending: "#fbbf24",
  busy: "#f87171",
} as const;

export type Status = keyof typeof statusColors;
