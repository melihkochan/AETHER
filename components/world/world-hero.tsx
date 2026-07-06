"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Heading } from "@/components/typography/heading";
import { Paragraph } from "@/components/typography/paragraph";
import { fadeUp } from "@/lib/animations/variants";
import { worldImages } from "@/lib/world/images";

export function WorldHero() {
  return (
    <section className="relative -mt-16 flex min-h-[85vh] items-end overflow-hidden pt-16">
      <Image
        src={worldImages.hero}
        alt="Gece AETHER şehir manzarası"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />

      <Container className="relative z-10 pb-16 md:pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex max-w-2xl flex-col gap-6"
        >
          <Heading as="h1" className="md:text-6xl">
            AETHER Dünyası
          </Heading>
          <Paragraph className="max-w-xl text-lg text-muted-foreground">
            Her mahalle, her işletme ve her sistem tek bir amaç için var:
            oyuncuların birlikte hikâye yazması. Bu bir şehir rehberinden
            fazlası — yaşayan bir dünyanın haritası.
          </Paragraph>
        </motion.div>
      </Container>
    </section>
  );
}
