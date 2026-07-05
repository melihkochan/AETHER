import type { Metadata } from "next";

import { HeroSection } from "@/components/home/hero-section";
import { ManifestoSection } from "@/components/home/manifesto-section";
import { PrinciplesSection } from "@/components/home/principles-section";
import { ComparisonSection } from "@/components/home/comparison-section";
import { TimelineSection } from "@/components/home/timeline-section";
import { CommunitySection } from "@/components/home/community-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";

export const metadata: Metadata = {
  title: "AETHER",
  description: "A premium social roleplay ecosystem.",
  openGraph: {
    title: "AETHER",
    description: "A premium social roleplay ecosystem.",
    type: "website",
    // TODO: add a real Open Graph image once brand assets exist.
    images: [],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <PrinciplesSection />
      <ComparisonSection />
      <TimelineSection />
      <CommunitySection />
      <FinalCtaSection />
    </>
  );
}
