import type { ReactNode } from "react";

import { Heading } from "@/components/typography/heading";
import { Muted } from "@/components/typography/muted";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
};

export function PageHeader({
  title,
  description,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 border-b border-border pb-8 md:flex-row md:items-end md:justify-between",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        <Heading as="h1" className="text-3xl md:text-4xl">
          {title}
        </Heading>
        {description && (
          <Muted className="max-w-2xl text-base">{description}</Muted>
        )}
      </div>
      {actions && (
        <div className="flex shrink-0 items-center gap-2">{actions}</div>
      )}
    </div>
  );
}
