"use client";

import { motion } from "framer-motion";
import { Fish, Pickaxe, ShieldCheck, Truck, UtensilsCrossed, Wrench } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Caption } from "@/components/typography/caption";
import { Subheading } from "@/components/typography/subheading";
import { ProfessionCard } from "@/components/world/profession-card";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";
import { worldImages } from "@/lib/world/images";

const professions = [
  {
    icon: Wrench,
    image: worldImages.professions.mekanik,
    title: "Mekanik",
    description: "Araçları onarır, modifiye eder ve şehrin tekerlekleri dönmeye devam etsin diye çalışır.",
    difficulty: "Orta",
    income: "Yüksek",
    reputation: "Düşük",
  },
  {
    icon: UtensilsCrossed,
    image: worldImages.professions.kafe,
    title: "Kafe Çalışanı",
    description: "Şehrin sosyal kalbinde yer alır; her sohbet yeni bir hikâyenin başlangıcı olabilir.",
    difficulty: "Kolay",
    income: "Orta",
    reputation: "Yok",
  },
  {
    icon: Fish,
    image: worldImages.professions.balikci,
    title: "Balıkçı",
    description: "Kıyıdan geçimini çıkarır, avladığı ürünü doğrudan işletmelere ve pazara satar.",
    difficulty: "Kolay",
    income: "Orta",
    reputation: "Yok",
  },
  {
    icon: Pickaxe,
    image: worldImages.professions.madenci,
    title: "Madenci",
    description: "Şehrin üretim zincirinin ilk halkasıdır; çıkardığı hammadde onlarca işletmeyi besler.",
    difficulty: "Orta",
    income: "Orta",
    reputation: "Yok",
  },
  {
    icon: Truck,
    image: worldImages.professions.nakliyeci,
    title: "Nakliyeci",
    description: "Mal ve ürünleri işletmeler arasında taşıyarak ekonominin akışkan kalmasını sağlar.",
    difficulty: "Orta",
    income: "Yüksek",
    reputation: "Düşük",
  },
  {
    icon: ShieldCheck,
    image: worldImages.professions.emniyet,
    title: "Emniyet Görevlisi",
    description: "Şehrin düzenini korur; bu rol yüksek sorumluluk ve topluluk güveni gerektirir.",
    difficulty: "Zor",
    income: "Yüksek",
    reputation: "Yüksek",
  },
];

export function ProfessionsSection() {
  return (
    <Section spacing="lg" className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Caption>Meslekler</Caption>
            <Subheading as="h2">Şehirde bir yer edinin</Subheading>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {professions.map((profession) => (
              <motion.div key={profession.title} variants={fadeUp}>
                <ProfessionCard {...profession} className="h-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
