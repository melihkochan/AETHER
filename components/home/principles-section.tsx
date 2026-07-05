"use client";

import { motion } from "framer-motion";
import { Infinity as InfinityIcon, Landmark, Sparkles, TrendingUp, Users } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Subheading } from "@/components/typography/subheading";
import { FeatureCard } from "@/components/ui/feature-card";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";

const principles = [
  {
    icon: Users,
    title: "Önce Sosyallik",
    description: "Her sistem, oyuncuları birbirinden izole etmek yerine bir araya getirmek için tasarlanır.",
  },
  {
    icon: Landmark,
    title: "Oyuncu Ekonomisi",
    description: "Ekonomiyi kurgulanmış NPC döngüleri değil, oyuncular yönlendirir.",
  },
  {
    icon: Sparkles,
    title: "Premium Deneyim",
    description: "Her etkileşim özenle tasarlanır, taslak olarak bırakılmaz.",
  },
  {
    icon: TrendingUp,
    title: "Anlamlı İlerleme",
    description: "İlerleme, harcanan saatleri değil yaşanan hikâyeleri yansıtır.",
  },
  {
    icon: InfinityIcon,
    title: "Uzun Vadeli Düşünce",
    description: "AETHER, yıllarca sürdürülüp büyütülmek üzere kuruldu; çıkarılıp bırakılmak üzere değil.",
  },
];

export function PrinciplesSection() {
  return (
    <Section spacing="lg" className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-10">
          <Subheading as="h2">Temel ilkeler</Subheading>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {principles.map((principle) => (
              <motion.div key={principle.title} variants={fadeUp}>
                <FeatureCard
                  icon={principle.icon}
                  title={principle.title}
                  description={principle.description}
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
