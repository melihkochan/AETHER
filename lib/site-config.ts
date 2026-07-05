import type { NavItem } from "@/types/nav";

export const siteConfig = {
  name: "AETHER",
  description:
    "AETHER is a premium social roleplay ecosystem where every system exists to create meaningful player interaction.",
  discordUrl: "https://discord.gg/aether",
  navItems: [
    { label: "Wiki", href: "/wiki" },
    { label: "Development", href: "/development" },
    { label: "Rules", href: "/rules" },
    { label: "Community", href: "/community" },
  ] satisfies NavItem[],
};
