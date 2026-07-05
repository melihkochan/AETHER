export const roleColors = {
  owner: "#f87171",
  admin: "#38bdf8",
  staff: "#a78bfa",
  moderator: "#34d399",
  member: "#a1a1aa",
} as const;

export type Role = keyof typeof roleColors;
