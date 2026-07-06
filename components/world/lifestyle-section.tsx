"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Backpack, Car, Home, IdCard, Shirt, Smartphone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Caption } from "@/components/typography/caption";
import { Subheading } from "@/components/typography/subheading";
import { FeatureCard } from "@/components/ui/feature-card";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";
import { worldImages } from "@/lib/world/images";

const lifestyleItems = [
  {
    icon: Home,
    title: "Evler",
    description: "Karakterinizin kendine ait köşesi; kişiselleştirin, paylaşın, sahiplenin.",
  },
  {
    icon: Car,
    title: "Araçlar",
    description: "Şehri keşfetmenin ve kendini ifade etmenin bir yolu.",
  },
  {
    icon: Smartphone,
    title: "Telefon",
    description: "Sosyal hayatınızın ve işletmenizin yönetildiği dijital merkez.",
  },
  {
    icon: IdCard,
    title: "Kimlik",
    description: "Karakterinizin şehirdeki resmi varlığı ve geçmişi.",
  },
  {
    icon: Backpack,
    title: "Envanter",
    description: "Yanınızda taşıdığınız her şeyin düzenli tutulduğu sistem.",
  },
  {
    icon: Shirt,
    title: "Giyim",
    description: "Karakterinizin tarzını ve kimliğini yansıtan görsel kimlik.",
  },
];

export function LifestyleSection() {
  return (
    <Section spacing="lg" className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="flex flex-col gap-6"
          >
            <Caption>Şehir Yaşamı</Caption>
            <Subheading as="h2">Günlük hayatın her ayrıntısı</Subheading>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl md:aspect-[21/9]">
              <Image
                src={worldImages.lifestyle}
                alt="Gece şehrinde bir araç, şehir yaşamı"
                fill
                sizes="(min-width: 768px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {lifestyleItems.map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  className="h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
