import { RevealSection } from "@/components/shared/reveal-section";
import { Heading } from "@/components/typography/heading";
import { LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/lib/site-config";

export function WorldCtaSection() {
  return (
    <RevealSection
      amount={0.6}
      sectionClassName="pb-24 md:pb-32"
      className="flex flex-col items-center gap-8 text-center"
    >
      <Heading as="h2" className="md:text-5xl">
        AETHER seni bekliyor.
      </Heading>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <LinkButton href={siteConfig.discordUrl} external variant="outline" size="lg" className="px-8">
          Discord
        </LinkButton>
        <LinkButton href={siteConfig.playUrl} size="lg" className="px-8">
          Oyna
        </LinkButton>
      </div>
    </RevealSection>
  );
}
