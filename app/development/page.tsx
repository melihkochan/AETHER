import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Geliştirme — AETHER",
};

export default function DevelopmentPage() {
  return <PlaceholderPage title="Geliştirme" />;
}
