import type { ComponentProps, ElementType } from "react";

import { cn } from "@/lib/utils";

type HeadingProps = ComponentProps<"h1"> & {
  as?: "h1" | "h2" | "h3";
};

export function Heading({ as, className, ...props }: HeadingProps) {
  const Tag = (as ?? "h1") as ElementType;

  return (
    <Tag
      className={cn(
        "text-4xl font-semibold tracking-tight text-foreground md:text-5xl",
        className
      )}
      {...props}
    />
  );
}
