import type { Metadata } from "next";

import { WorldHero } from "@/components/world/world-hero";
import { CitySection } from "@/components/world/city-section";
import { EconomySection } from "@/components/world/economy-section";
import { ProfessionsSection } from "@/components/world/professions-section";
import { LifestyleSection } from "@/components/world/lifestyle-section";
import { EventsSection } from "@/components/world/events-section";
import { LivingEconomySection } from "@/components/world/living-economy-section";
import { WorldCtaSection } from "@/components/world/world-cta-section";

export const metadata: Metadata = {
  title: "Dünya — AETHER",
  description:
    "AETHER dünyasını keşfedin: şehir, ekonomi, meslekler, şehir yaşamı ve etkinlikler.",
};

export default function WorldPage() {
  return (
    <>
      <WorldHero />
      <CitySection />
      <EconomySection />
      <ProfessionsSection />
      <LifestyleSection />
      <EventsSection />
      <LivingEconomySection />
      <WorldCtaSection />
    </>
  );
}
