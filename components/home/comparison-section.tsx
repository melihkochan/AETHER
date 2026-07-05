import { Check, X } from "lucide-react";

import { RevealSection } from "@/components/shared/reveal-section";
import { Subheading } from "@/components/typography/subheading";
import { Caption } from "@/components/typography/caption";

const comparisons = [
  { traditional: "Bitmeyen tekrar döngüsü", aether: "Anlamlı ilerleme" },
  { traditional: "Soygun simülatörü", aether: "Canlı bir sosyal dünya" },
  { traditional: "NPC ekonomisi", aether: "Oyuncu odaklı ekonomi" },
  { traditional: "Kopyala-yapıştır scriptler", aether: "Bütünleşik ekosistem" },
];

export function ComparisonSection() {
  return (
    <RevealSection amount={0.3} className="flex flex-col gap-10">
      <Subheading as="h2">AETHER&apos;ı farklı kılan nedir</Subheading>

      <div className="overflow-hidden rounded-xl border border-border">
        <div className="grid grid-cols-2">
          <div className="p-4 md:p-5">
            <Caption>Geleneksel Roleplay</Caption>
          </div>
          <div className="border-l border-border p-4 md:p-5">
            <Caption>AETHER</Caption>
          </div>
        </div>

        <div className="divide-y divide-border border-t border-border">
          {comparisons.map((row) => (
            <div key={row.traditional} className="grid grid-cols-2">
              <div className="flex items-center gap-3 p-4 md:p-5">
                <X
                  className="size-4 shrink-0 text-muted-foreground/60"
                  aria-hidden="true"
                />
                <span className="text-sm text-muted-foreground">
                  {row.traditional}
                </span>
              </div>
              <div className="flex items-center gap-3 border-l border-border p-4 md:p-5">
                <Check className="size-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-sm text-foreground">{row.aether}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
