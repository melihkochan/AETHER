"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, CheckCircle2, Pickaxe, User, Wrench, type LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Caption } from "@/components/typography/caption";
import { Subheading } from "@/components/typography/subheading";
import { Paragraph } from "@/components/typography/paragraph";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";

const flowSteps: { icon: LucideIcon; label: string }[] = [
  { icon: Pickaxe, label: "Madenci" },
  { icon: Box, label: "Demir" },
  { icon: Wrench, label: "Mekanik" },
  { icon: CheckCircle2, label: "Tamir" },
  { icon: User, label: "Oyuncu" },
];

export function LivingEconomySection() {
  return (
    <Section spacing="lg" className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex max-w-2xl flex-col gap-4">
            <Caption>Yaşayan Ekonomi</Caption>
            <Subheading as="h2">Her adımın bir karşılığı var</Subheading>
            <Paragraph>
              AETHER ekonomisi kapalı bir döngüdür. Bir madencinin çıkardığı
              hammadde bir mekaniğin elinde onarıma dönüşür ve sonunda başka
              bir oyuncunun hikâyesine dokunur. Hiçbir emek karşılıksız
              kalmaz.
            </Paragraph>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerContainer}
            className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-between"
          >
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.label}
                variants={fadeUp}
                className="flex flex-col items-center gap-3 md:flex-row"
              >
                <div className="flex w-full flex-col items-center gap-2 rounded-xl border border-border bg-card px-6 py-5 md:w-auto">
                  <step.icon className="size-5 text-accent" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground">
                    {step.label}
                  </span>
                </div>
                {index < flowSteps.length - 1 && (
                  <ArrowRight
                    className="size-4 rotate-90 shrink-0 text-muted-foreground md:rotate-0"
                    aria-hidden="true"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
