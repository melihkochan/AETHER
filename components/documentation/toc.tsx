"use client";

import { useEffect, useState } from "react";

import { Caption } from "@/components/typography/caption";
import type { TocItem } from "@/lib/docs/types";
import { cn } from "@/lib/utils";

type TocProps = {
  items: TocItem[];
};

export function Toc({ items }: TocProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    const headingElements = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-96px 0px -70% 0px" }
    );

    headingElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Bu sayfada" className="flex flex-col gap-3">
      <Caption>Bu sayfada</Caption>
      <ul className="flex flex-col gap-2 border-l border-border">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block pl-4 text-sm transition-colors",
                item.depth === 3 && "pl-7",
                activeId === item.id
                  ? "font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
