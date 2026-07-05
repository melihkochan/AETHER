"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { fadeUp } from "@/lib/animations/variants";
import { cn } from "@/lib/utils";

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
  border?: boolean;
  amount?: number;
  sectionClassName?: string;
};

export function RevealSection({
  children,
  className,
  border = true,
  amount = 0.5,
  sectionClassName,
}: RevealSectionProps) {
  return (
    <Section
      spacing="lg"
      className={cn(border && "border-t border-border", sectionClassName)}
    >
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount }}
          variants={fadeUp}
          className={className}
        >
          {children}
        </motion.div>
      </Container>
    </Section>
  );
}
