import { RevealSection } from "@/components/shared/reveal-section";
import { Subheading } from "@/components/typography/subheading";
import { Paragraph } from "@/components/typography/paragraph";

export function ManifestoSection() {
  return (
    <RevealSection className="flex max-w-2xl flex-col gap-4">
      <Subheading as="h2">Her sistem bir hikâye yaratır.</Subheading>
      <Paragraph>
        AETHER, görevler veya tekrarlayan işler etrafında kurulmadı. Her
        sistem — ekonomi, dünya, topluluk — oyunculara birbirleriyle
        etkileşim kurmaları için bir sebep sunmak amacıyla var oluyor.
        İnsanlar arasında geçen anları tasarlıyoruz, aralarındaki
        görev listesini değil.
      </Paragraph>
    </RevealSection>
  );
}
