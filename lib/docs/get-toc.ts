import GithubSlugger from "github-slugger";

import type { TocItem } from "./types";

const HEADING_PATTERN = /^(#{2,3})\s+(.*)$/gm;

export function getToc(markdown: string): TocItem[] {
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];

  for (const match of markdown.matchAll(HEADING_PATTERN)) {
    const depth = match[1].length as 2 | 3;
    const text = match[2].trim();
    const id = slugger.slug(text);

    items.push({ depth, text, id });
  }

  return items;
}
