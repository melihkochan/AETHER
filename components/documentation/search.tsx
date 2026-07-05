"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FileText, Search as SearchIcon } from "lucide-react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { SearchInput } from "@/components/forms/search-input";
import type { NavGroup } from "@/lib/docs/types";

type DocsSearchProps = {
  navGroups: NavGroup[];
};

export function DocsSearch({ navGroups }: DocsSearchProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const allItems = useMemo(
    () => navGroups.flatMap((group) => group.items.map((item) => ({ ...item, group: group.category }))),
    [navGroups]
  );

  const results = useMemo(() => {
    if (!query.trim()) return allItems;
    const normalized = query.trim().toLowerCase();
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(normalized) ||
        item.description.toLowerCase().includes(normalized)
    );
  }, [allItems, query]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) setQuery("");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center justify-between gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="flex items-center gap-2">
          <SearchIcon className="size-3.5" aria-hidden="true" />
          Dokümanlarda ara...
        </span>
        <kbd className="rounded border border-border px-1.5 py-0.5 text-[0.7rem] text-muted-foreground">
          ⌘K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent showCloseButton={false} className="top-[20%] max-w-lg translate-y-0 gap-0 p-0 sm:max-w-lg">
          <div className="border-b border-border p-2">
            <SearchInput
              autoFocus
              placeholder="Dokümanlarda ara..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onClear={() => setQuery("")}
            />
          </div>
          <div className="max-h-80 overflow-y-auto p-2">
            {results.length === 0 && (
              <p className="px-3 py-6 text-center text-sm text-muted-foreground">
                Sonuç bulunamadı.
              </p>
            )}
            {results.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleOpenChange(false)}
                className="flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-secondary"
              >
                <FileText
                  className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                  aria-hidden="true"
                />
                <span className="flex flex-col gap-0.5">
                  <span className="font-medium text-foreground">{item.title}</span>
                  <span className="text-xs text-muted-foreground">{item.description}</span>
                </span>
              </Link>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
