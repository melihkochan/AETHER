import type { ComponentProps, ElementType } from "react";

import { cn } from "@/lib/utils";

type SubheadingProps = ComponentProps<"h2"> & {
  as?: "h2" | "h3" | "h4";
};

export function Subheading({ as, className, ...props }: SubheadingProps) {
  const Tag = (as ?? "h2") as ElementType;

  return (
    <Tag
      className={cn(
        "text-2xl font-medium tracking-tight text-foreground md:text-3xl",
        className
      )}
      {...props}
    />
  );
}
