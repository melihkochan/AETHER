"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type CodeBlockProps = {
  language?: string;
  children: string;
  className?: string;
};

export function CodeBlock({ language, children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children.replace(/\n$/, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={cn("overflow-hidden rounded-xl border border-border", className)}>
      <div className="flex items-center justify-between border-b border-border bg-card px-4 py-2">
        <span className="text-xs text-muted-foreground">{language ?? "text"}</span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Kodu kopyala"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          {copied ? (
            <Check className="size-3.5" aria-hidden="true" />
          ) : (
            <Copy className="size-3.5" aria-hidden="true" />
          )}
        </button>
      </div>
      <pre className="overflow-x-auto bg-background p-4 text-sm leading-6 text-foreground/90">
        <code>{children.replace(/\n$/, "")}</code>
      </pre>
    </div>
  );
}
