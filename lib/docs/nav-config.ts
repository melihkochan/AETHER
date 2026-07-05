import type { DocCategory, DocMeta, NavGroup } from "./types";

export const CATEGORY_ORDER: DocCategory[] = [
  "Genel Bakış",
  "Oynanış",
  "Ekonomi",
  "Yaşam",
  "Destek",
];

export function buildNavGroups(docs: DocMeta[]): NavGroup[] {
  return CATEGORY_ORDER.map((category) => ({
    category,
    items: docs
      .filter((doc) => doc.category === category)
      .sort((a, b) => a.order - b.order),
  })).filter((group) => group.items.length > 0);
}
