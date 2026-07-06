"use client";

import { motion } from "framer-motion";
import { Coffee, Fish, Fuel, Pickaxe, ShoppingCart, Truck, Wrench } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Caption } from "@/components/typography/caption";
import { Subheading } from "@/components/typography/subheading";
import { FeatureCard } from "@/components/ui/feature-card";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";

const businesses = [
  {
    icon: ShoppingCart,
    title: "Market",
    description: "Günlük ihtiyaçların karşılandığı, mahalle sakinlerinin uğrak noktası.",
  },
  {
    icon: Coffee,
    title: "Cafe",
    description: "Kahve kokusu eşliğinde sohbetlerin ve iş birliklerinin doğduğu mekân.",
  },
  {
    icon: Wrench,
    title: "Mekanik",
    description: "Araç bakımı ve onarımının yapıldığı, şehrin garaj kültürünün merkezi.",
  },
  {
    icon: Fuel,
    title: "Benzinlik",
    description: "Şehirlerarası her yolculuğun başladığı durak noktası.",
  },
  {
    icon: Truck,
    title: "Lojistik",
    description: "Ürünlerin işletmeden işletmeye taşındığı dağıtım ağının kalbi.",
  },
  {
    icon: Pickaxe,
    title: "Madencilik",
    description: "Hammaddenin topraktan çıkarılıp üretim zincirine katıldığı ilk durak.",
  },
  {
    icon: Fish,
    title: "Balıkçılık",
    description: "Kıyı şeridinde sürdürülen, şehrin deniz ürünleri tedarikini sağlayan işletme.",
  },
];

export function EconomySection() {
  return (
    <Section spacing="lg" className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Caption>Ekonomi</Caption>
            <Subheading as="h2">Oyuncuların kurduğu işletmeler</Subheading>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4"
          >
            {businesses.map((business) => (
              <motion.div key={business.title} variants={fadeUp}>
                <FeatureCard
                  icon={business.icon}
                  title={business.title}
                  description={business.description}
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
