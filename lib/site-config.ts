import type { NavItem } from "@/types/nav";

export const siteConfig = {
  name: "AETHER",
  description:
    "AETHER, her sistemin anlamlı oyuncu etkileşimi yaratmak için var olduğu, premium bir sosyal roleplay ekosistemidir.",
  discordUrl: "https://discord.gg/aether",
  // TODO: replace with the client download / launcher link once it exists,
  // then swap this button for Login per the roadmap.
  playUrl: "#",
  version: "v0.1.0 — Ön Alfa",
  navItems: [
    { label: "Ana Sayfa", href: "/" },
    { label: "Dünya", href: "/world" },
    { label: "Dokümantasyon", href: "/documentation" },
    { label: "Kurallar", href: "/rules" },
    { label: "Geliştirme", href: "/development" },
    { label: "Topluluk", href: "/community" },
  ] satisfies NavItem[],
};
