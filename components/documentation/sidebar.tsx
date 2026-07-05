"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

import { CategoryItem } from "@/components/documentation/category-item";
import { DocsSearch } from "@/components/documentation/search";
import type { NavGroup } from "@/lib/docs/types";
import { cn } from "@/lib/utils";

type SidebarProps = {
  navGroups: NavGroup[];
};

export function Sidebar({ navGroups }: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  return (
    <nav aria-label="Dokümantasyon" className="flex flex-col gap-6">
      <DocsSearch navGroups={navGroups} />

      {navGroups.map((group) => {
        const isCollapsed = collapsed[group.category] ?? false;

        return (
          <div key={group.category} className="flex flex-col gap-1.5">
            <button
              type="button"
              onClick={() =>
                setCollapsed((prev) => ({
                  ...prev,
                  [group.category]: !isCollapsed,
                }))
              }
              aria-expanded={!isCollapsed}
              className="flex items-center gap-1 text-xs font-medium tracking-wider text-muted-foreground uppercase"
            >
              <ChevronRight
                className={cn(
                  "size-3 transition-transform",
                  !isCollapsed && "rotate-90"
                )}
                aria-hidden="true"
              />
              {group.category}
            </button>

            {!isCollapsed && (
              <div className="flex flex-col border-l border-border">
                {group.items.map((item) => (
                  <CategoryItem
                    key={item.href}
                    label={item.title}
                    href={item.href}
                    active={pathname === item.href}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
