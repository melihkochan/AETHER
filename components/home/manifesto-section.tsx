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
          <Subheading as="h2">Every system creates a story.</Subheading>
          <Paragraph>
            AETHER is not built around tasks or grinding. Every system — the
            economy, the world, the community — exists to give players a
            reason to interact with one another. We design for the moments
            that happen between people, not the checklist between them.
          </Paragraph>
        </motion.div>
      </Container>
    </Section>
  );
}
