import { RevealSection } from "@/components/shared/reveal-section";
import { Subheading } from "@/components/typography/subheading";
import { Paragraph } from "@/components/typography/paragraph";
import { LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/lib/site-config";

export function CommunitySection() {
  return (
    <RevealSection className="flex max-w-2xl flex-col gap-4">
      <Subheading as="h2">Topluluğumuzla birlikte büyüyor</Subheading>
      <Paragraph>
        AETHER kapalı kapılar ardında inşa edilmiyor. Her sistem, onu
        kullanacak kişilerle birlikte şekilleniyor ve ilerleme
        gerçekleştikçe açıkça paylaşılıyor.
      </Paragraph>
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <LinkButton href={siteConfig.discordUrl} external>
          Discord
        </LinkButton>
        <LinkButton href="/development" variant="outline">
          Geliştirme Günlüğü
        </LinkButton>
      </div>
    </RevealSection>
  );
}
