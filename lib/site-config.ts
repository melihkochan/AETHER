import type { NavItem } from "@/types/nav";

export const siteConfig = {
  name: "AETHER",
  description:
    "AETHER is a premium social roleplay ecosystem where every system exists to create meaningful player interaction.",
  discordUrl: "https://discord.gg/aether",
  // TODO: replace with the client download / launcher link once it exists,
  // then swap this button for Login per the roadmap.
  playUrl: "#",
  version: "v0.1.0 — Pre-Alpha",
  navItems: [
    { label: "Home", href: "/" },
    { label: "World", href: "/world" },
    { label: "Documentation", href: "/documentation" },
    { label: "Rules", href: "/rules" },
    { label: "Development", href: "/development" },
    { label: "Community", href: "/community" },
  ] satisfies NavItem[],
};
