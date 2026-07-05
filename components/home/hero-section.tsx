"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/typography/heading";
import { Paragraph } from "@/components/typography/paragraph";
import { buttonVariants } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations/variants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <Section spacing="lg" className="pt-16 md:pt-24">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex max-w-3xl flex-col gap-6"
        >
          <Heading as="h1" className="md:text-6xl">
            A modern social world,
            <br />
            built for meaningful roleplay.
          </Heading>
          <Paragraph className="max-w-xl text-lg text-muted-foreground">
            AETHER is a premium social roleplay ecosystem where every
            interaction creates a story.
          </Paragraph>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href={siteConfig.playUrl}
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "px-6")}
            >
              Play
            </Link>
            <Link
              href="/documentation"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-6")}
            >
              Documentation
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
