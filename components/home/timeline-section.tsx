"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Subheading } from "@/components/typography/subheading";
import { Caption } from "@/components/typography/caption";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";

const milestones = [
  "Temel Altyapı",
  "Tasarım Sistemi",
  "Çekirdek Framework",
  "Ekonomi",
  "Telefon",
  "Envanter",
  "İşletmeler",
  "Çıkış",
];

export function TimelineSection() {
  return (
    <Section spacing="lg" className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-10">
          <Subheading as="h2">Geliştirme</Subheading>

          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="relative ml-3 border-l border-border"
          >
            {milestones.map((milestone, index) => (
              <motion.li
                key={milestone}
                variants={fadeUp}
                className="relative py-5 pl-8 first:pt-0 last:pb-0"
              >
                <span
                  className="absolute top-[1.6rem] -left-[7px] size-3 rounded-full border-2 border-background bg-border first:top-1"
                  aria-hidden="true"
                />
                <Caption>{String(index + 1).padStart(2, "0")}</Caption>
                <p className="mt-1 text-lg font-medium text-foreground">
                  {milestone}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </Section>
  );
}
