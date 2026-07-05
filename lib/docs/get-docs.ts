import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import type { DocFrontmatter, DocMeta } from "./types";

const DOCS_DIRECTORY = path.join(process.cwd(), "content/docs");

function slugFromFilename(filename: string): string {
  const base = filename.replace(/\.md$/, "");
  return base === "index" ? "" : base;
}

function hrefFromSlug(slug: string): string {
  return slug === "" ? "/documentation" : `/documentation/${slug}`;
}

export function getAllDocsMeta(): DocMeta[] {
  const filenames = fs.readdirSync(DOCS_DIRECTORY).filter((file) => file.endsWith(".md"));

  return filenames
    .map((filename) => {
      const filePath = path.join(DOCS_DIRECTORY, filename);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data } = matter(raw);
      const slug = slugFromFilename(filename);
      const frontmatter = data as DocFrontmatter;

      return {
        ...frontmatter,
        slug,
        href: hrefFromSlug(slug),
      };
    })
    .sort((a, b) => a.order - b.order);
}

export function getDocBySlug(slug: string): { meta: DocMeta; content: string } {
  const filename = slug === "" ? "index.md" : `${slug}.md`;
  const filePath = path.join(DOCS_DIRECTORY, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as DocFrontmatter;

  return {
    meta: {
      ...frontmatter,
      slug,
      href: hrefFromSlug(slug),
    },
    content,
  };
}
