import type { ComponentProps } from "react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type DividerSpacing = "sm" | "md" | "lg";

const spacingClasses: Record<DividerSpacing, string> = {
  sm: "my-4",
  md: "my-8",
  lg: "my-12",
};

type DividerProps = ComponentProps<typeof Separator> & {
  spacing?: DividerSpacing;
};

export function Divider({ spacing = "md", className, ...props }: DividerProps) {
  return (
    <Separator className={cn(spacingClasses[spacing], className)} {...props} />
  );
}
