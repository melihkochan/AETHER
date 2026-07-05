import type { Metadata } from "next";

import { DesignSystemPlayground } from "./playground";

export const metadata: Metadata = {
  title: "Design System — AETHER",
  robots: { index: false, follow: false },
};

export default function DesignSystemPage() {
  return <DesignSystemPlayground />;
}
