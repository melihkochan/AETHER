import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DocumentationShell } from "@/components/documentation/documentation-shell";
import { MarkdownContent } from "@/components/documentation/markdown-content";
import { getAllDocsMeta, getDocBySlug } from "@/lib/docs/get-docs";
import { getToc } from "@/lib/docs/get-toc";
import { buildNavGroups } from "@/lib/docs/nav-config";

type DocumentationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllDocsMeta()
    .filter((doc) => doc.slug !== "")
    .map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: DocumentationPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { meta } = getDocBySlug(slug);
    return {
      title: `${meta.title} — AETHER`,
      description: meta.description,
    };
  } catch {
    return { title: "Dokümantasyon — AETHER" };
  }
}

export default async function DocumentationPage({
  params,
}: DocumentationPageProps) {
  const { slug } = await params;

  let doc: ReturnType<typeof getDocBySlug>;
  try {
    doc = getDocBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, content } = doc;
  const navGroups = buildNavGroups(getAllDocsMeta());
  const toc = getToc(content);

  return (
    <DocumentationShell navGroups={navGroups} meta={meta} toc={toc}>
      <MarkdownContent content={content} />
    </DocumentationShell>
  );
}
