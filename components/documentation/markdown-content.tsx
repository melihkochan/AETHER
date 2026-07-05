import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { Children, isValidElement } from "react";

import { Callout, type CalloutType } from "@/components/documentation/callout";
import { CodeBlock } from "@/components/documentation/code-block";

type HastNode = {
  type: string;
  tagName?: string;
  value?: string;
  children?: HastNode[];
};

const CALLOUT_PATTERN = /^\[!(INFO|WARNING|TIP)\]\s*(.*)$/i;

function getPlainText(node: HastNode): string {
  if (node.type === "text") return node.value ?? "";
  return (node.children ?? []).map(getPlainText).join("");
}

const components: Components = {
  h2: ({ id, children }) => (
    <h2
      id={id}
      className="mt-12 scroll-mt-24 text-2xl font-medium tracking-tight text-foreground first:mt-0"
    >
      {children}
    </h2>
  ),
  h3: ({ id, children }) => (
    <h3
      id={id}
      className="mt-8 scroll-mt-24 text-lg font-medium tracking-tight text-foreground"
    >
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-4 text-base leading-7 text-foreground/90">{children}</p>
  ),
  a: ({ href, children }) => (
    <Link
      href={href ?? "#"}
      className="text-accent underline underline-offset-4 hover:text-accent/80"
    >
      {children}
    </Link>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 flex flex-col gap-2 pl-5 text-base leading-7 text-foreground/90 [&>li]:list-disc">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 flex flex-col gap-2 pl-5 text-base leading-7 text-foreground/90 [&>li]:list-decimal">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  table: ({ children }) => (
    <div className="mt-4 overflow-x-auto rounded-xl border border-border">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-card">{children}</thead>,
  th: ({ children }) => (
    <th className="border-b border-border px-4 py-2 text-left font-medium text-foreground">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-border px-4 py-2 text-foreground/90">{children}</td>
  ),
  hr: () => <hr className="my-8 border-border" />,
  pre: ({ children }) => <>{children}</>,
  code: ({ className, children }) => {
    const match = /language-(\w+)/.exec(className ?? "");

    if (match) {
      return (
        <CodeBlock language={match[1]} className="mt-4">
          {String(children)}
        </CodeBlock>
      );
    }

    return (
      <code className="rounded bg-secondary px-1.5 py-0.5 text-[0.85em] text-foreground">
        {children}
      </code>
    );
  },
  blockquote: ({ node, children }) => {
    const rootChildren = ((node?.children ?? []) as unknown as HastNode[]);
    const paragraphs = rootChildren.filter(
      (child) => child.type === "element" && child.tagName === "p"
    );
    const firstText = paragraphs[0] ? getPlainText(paragraphs[0]) : "";
    const match = firstText.match(CALLOUT_PATTERN);

    if (match) {
      const type = match[1].toLowerCase() as CalloutType;
      const title = match[2] || undefined;
      const body = Children.toArray(children).filter(isValidElement).slice(1);

      return (
        <Callout type={type} title={title} className="mt-4">
          {body}
        </Callout>
      );
    }

    return (
      <blockquote className="mt-4 border-l-2 border-border pl-4 text-foreground/90">
        {children}
      </blockquote>
    );
  },
};

type MarkdownContentProps = {
  content: string;
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSlug]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  );
}
