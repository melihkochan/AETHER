"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Caption } from "@/components/typography/caption";
import { Subheading } from "@/components/typography/subheading";
import { Paragraph } from "@/components/typography/paragraph";
import { StatCard } from "@/components/world/stat-card";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";
import { worldImages } from "@/lib/world/images";

const stats = [
  {
    value: "12.000+",
    label: "Nüfus",
    description: "Şehirde yaşayan aktif karakter sayısı.",
  },
  {
    value: "340+",
    label: "İşletme Sayısı",
    description: "Oyuncular tarafından işletilen aktif işletme.",
  },
  {
    value: "15+",
    label: "Etkinlikler",
    description: "Her hafta düzenlenen etkinlik sayısı.",
  },
  {
    value: "24",
    label: "Aktif Meslekler",
    description: "Şehirde sürdürülebilen farklı meslek.",
  },
];

export function CitySection() {
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
            <Caption>Şehir</Caption>
            <Subheading as="h2">Nefes alan bir şehir</Subheading>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl md:aspect-[21/9]">
              <Image
                src={worldImages.city}
                alt="AETHER şehir sokakları, gece hayatı"
                fill
                sizes="(min-width: 768px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <Paragraph className="max-w-2xl">
              AETHER, tek bir merkez etrafında değil; birbirine bağlı
              mahallelerin ve toplulukların oluşturduğu bir doku etrafında
              kurulur. Her sokağın kendi ritmi, her mahallenin kendi
              karakteri vardır.
            </Paragraph>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <StatCard {...stat} className="h-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
