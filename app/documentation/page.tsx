import type { Metadata } from "next";

import { DocumentationShell } from "@/components/documentation/documentation-shell";
import { MarkdownContent } from "@/components/documentation/markdown-content";
import { getAllDocsMeta, getDocBySlug } from "@/lib/docs/get-docs";
import { getToc } from "@/lib/docs/get-toc";
import { buildNavGroups } from "@/lib/docs/nav-config";

export const metadata: Metadata = {
  title: "Dokümantasyon — AETHER",
};

export default function DocumentationIndexPage() {
  const { meta, content } = getDocBySlug("");
  const navGroups = buildNavGroups(getAllDocsMeta());
  const toc = getToc(content);

  return (
    <DocumentationShell navGroups={navGroups} meta={meta} toc={toc}>
      <MarkdownContent content={content} />
    </DocumentationShell>
  );
}
