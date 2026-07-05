"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/typography/heading";
import { Paragraph } from "@/components/typography/paragraph";
import { LinkButton } from "@/components/ui/link-button";
import { fadeUp } from "@/lib/animations/variants";
import { siteConfig } from "@/lib/site-config";

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
            Anlamlı roleplay için kurulmuş,
            <br />
            modern bir sosyal dünya.
          </Heading>
          <Paragraph className="max-w-xl text-lg text-muted-foreground">
            AETHER, her etkileşimin bir hikâye yarattığı premium bir sosyal
            roleplay ekosistemidir.
          </Paragraph>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <LinkButton href={siteConfig.playUrl} size="lg" className="px-6">
              Oyna
            </LinkButton>
            <LinkButton href="/documentation" variant="outline" size="lg" className="px-6">
              Dokümantasyon
            </LinkButton>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
