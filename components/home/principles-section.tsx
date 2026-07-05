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
    title: "Social First",
    description: "Every system is designed to bring players together, not isolate them.",
  },
  {
    icon: Landmark,
    title: "Player Economy",
    description: "The economy is driven by players, not scripted NPC loops.",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description: "Every interaction is crafted with care, not shipped as a placeholder.",
  },
  {
    icon: TrendingUp,
    title: "Meaningful Progression",
    description: "Progress reflects the stories you've lived, not hours ground away.",
  },
  {
    icon: InfinityIcon,
    title: "Long-term Thinking",
    description: "AETHER is built to be maintained and grown for years, not launched and left.",
  },
];

export function PrinciplesSection() {
  return (
    <Section spacing="lg" className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-10">
          <Subheading as="h2">Core principles</Subheading>
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
