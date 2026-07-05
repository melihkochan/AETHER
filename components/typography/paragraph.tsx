import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ParagraphProps = ComponentProps<"p">;

export function Paragraph({ className, ...props }: ParagraphProps) {
  return (
    <p
      className={cn("text-base leading-7 text-foreground/90", className)}
      {...props}
    />
  );
}
