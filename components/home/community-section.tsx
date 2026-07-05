"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Subheading } from "@/components/typography/subheading";
import { Paragraph } from "@/components/typography/paragraph";
import { buttonVariants } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations/variants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function CommunitySection() {
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
          <Subheading as="h2">Grown with our community</Subheading>
          <Paragraph>
            AETHER isn&apos;t built behind closed doors. Every system is
            shaped alongside the people who will use it, with progress shared
            openly as it happens.
          </Paragraph>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={siteConfig.discordUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              Discord
            </a>
            <Link
              href="/development"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Development Blog
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
