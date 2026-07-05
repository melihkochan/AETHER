"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/typography/heading";
import { buttonVariants } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations/variants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function FinalCtaSection() {
  return (
    <Section spacing="lg" className="border-t border-border pb-24 md:pb-32">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="flex flex-col items-center gap-8 text-center"
        >
          <Heading as="h2" className="md:text-5xl">
            Technology follows experience.
          </Heading>
          <Link
            href={siteConfig.playUrl}
            className={cn(buttonVariants({ variant: "default", size: "lg" }), "px-8")}
          >
            Play AETHER
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
