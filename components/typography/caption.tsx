import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type CaptionProps = ComponentProps<"span">;

export function Caption({ className, ...props }: CaptionProps) {
  return (
    <span
      className={cn(
        "text-xs font-medium uppercase tracking-wider text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
