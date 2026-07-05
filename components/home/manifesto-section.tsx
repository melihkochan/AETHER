"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Subheading } from "@/components/typography/subheading";
import { Paragraph } from "@/components/typography/paragraph";
import { fadeUp } from "@/lib/animations/variants";

export function ManifestoSection() {
  return (
    <Section spacing="lg" className="border-t border-border">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="flex max-w-2xl flex-col gap-4"
        >
          <Subheading as="h2">Her sistem bir hikâye yaratır.</Subheading>
          <Paragraph>
            AETHER, görevler veya tekrarlayan işler etrafında kurulmadı. Her
            sistem — ekonomi, dünya, topluluk — oyunculara birbirleriyle
            etkileşim kurmaları için bir sebep sunmak amacıyla var oluyor.
            İnsanlar arasında geçen anları tasarlıyoruz, aralarındaki
            görev listesini değil.
          </Paragraph>
        </motion.div>
      </Container>
    </Section>
  );
}
