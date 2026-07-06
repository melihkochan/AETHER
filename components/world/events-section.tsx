"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, Car, Mountain, PartyPopper, Trophy, type LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Caption } from "@/components/typography/caption";
import { Subheading } from "@/components/typography/subheading";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";
import { worldImages } from "@/lib/world/images";

const events: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Mountain,
    title: "Offroad",
    description: "Şehrin dışına taşan, arazi araçlarıyla yapılan zorlu parkur etkinlikleri.",
  },
  {
    icon: PartyPopper,
    title: "Festival",
    description: "Meydanların dolduğu, müziğin ve topluluğun bir araya geldiği kutlamalar.",
  },
  {
    icon: Car,
    title: "Araç Buluşması",
    description: "Koleksiyoncuların ve tutkunların araçlarını sergilediği buluşmalar.",
  },
  {
    icon: Trophy,
    title: "Turnuvalar",
    description: "Yarışma ruhunu ön plana çıkaran, ödüllü organizasyonlar.",
  },
  {
    icon: CalendarDays,
    title: "Şehir Etkinlikleri",
    description: "Belediye ve işletmeler tarafından düzenlenen küçük ölçekli buluşmalar.",
  },
];

export function EventsSection() {
  return (
    <Section spacing="lg" className="border-t border-border">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <Caption>Etkinlikler</Caption>
            <Subheading as="h2">Şehir hiç durmuyor</Subheading>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={worldImages.events}
                alt="AETHER şehrinde düzenlenen bir festival"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="relative ml-3 border-l border-border"
          >
            {events.map((event) => (
              <motion.li
                key={event.title}
                variants={fadeUp}
                className="relative py-5 pl-8 first:pt-0 last:pb-0"
              >
                <span
                  className="absolute top-[1.6rem] -left-[7px] size-3 rounded-full border-2 border-background bg-accent first:top-1"
                  aria-hidden="true"
                />
                <div className="flex items-center gap-2">
                  <event.icon className="size-4 text-accent" aria-hidden="true" />
                  <p className="text-lg font-medium text-foreground">{event.title}</p>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{event.description}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </Section>
  );
}
