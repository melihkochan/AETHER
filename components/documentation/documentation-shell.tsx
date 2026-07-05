import type { ReactNode } from "react";

import { Breadcrumb } from "@/components/documentation/breadcrumb";
import { Sidebar } from "@/components/documentation/sidebar";
import { Toc } from "@/components/documentation/toc";
import type { DocMeta, NavGroup, TocItem } from "@/lib/docs/types";

type DocumentationShellProps = {
  navGroups: NavGroup[];
  meta: DocMeta;
  toc: TocItem[];
  children: ReactNode;
};

export function DocumentationShell({
  navGroups,
  meta,
  toc,
  children,
}: DocumentationShellProps) {
  return (
    <div className="mx-auto flex w-full max-w-7xl gap-10 px-6">
      <aside className="hidden shrink-0 basis-56 py-10 lg:block">
        <div className="sticky top-24">
          <Sidebar navGroups={navGroups} />
        </div>
      </aside>

      <main className="min-w-0 flex-1 py-10">
        <Breadcrumb category={meta.category} title={meta.title} />
        <div className="mt-6">{children}</div>
      </main>

      <aside className="hidden shrink-0 basis-48 py-10 xl:block">
        <div className="sticky top-24">
          <Toc items={toc} />
        </div>
      </aside>
    </div>
  );
}
