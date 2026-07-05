export type DocCategory = "Genel Bakış" | "Oynanış" | "Ekonomi" | "Yaşam" | "Destek";

export type DocFrontmatter = {
  title: string;
  description: string;
  category: DocCategory;
  order: number;
};

export type DocMeta = DocFrontmatter & {
  slug: string;
  href: string;
};

export type TocItem = {
  depth: 2 | 3;
  text: string;
  id: string;
};

export type NavGroup = {
  category: DocCategory;
  items: DocMeta[];
};
