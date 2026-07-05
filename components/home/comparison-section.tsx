"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Subheading } from "@/components/typography/subheading";
import { Caption } from "@/components/typography/caption";
import { fadeUp } from "@/lib/animations/variants";

const comparisons = [
  { traditional: "Endless grinding", aether: "Meaningful progression" },
  { traditional: "Robbery simulator", aether: "Living social world" },
  { traditional: "NPC economy", aether: "Player driven economy" },
  { traditional: "Copy-paste scripts", aether: "Unified ecosystem" },
];

export function ComparisonSection() {
  return (
    <Section spacing="lg" className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-10">
          <Subheading as="h2">What makes AETHER different</Subheading>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="overflow-hidden rounded-xl border border-border"
          >
            <div className="grid grid-cols-2">
              <div className="p-4 md:p-5">
                <Caption>Traditional Roleplay</Caption>
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
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
