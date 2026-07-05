import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type SectionSpacing = "sm" | "md" | "lg";

const spacingClasses: Record<SectionSpacing, string> = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32",
};

type SectionProps = ComponentProps<"section"> & {
  spacing?: SectionSpacing;
};

export function Section({ spacing = "md", className, ...props }: SectionProps) {
  return (
    <section className={cn(spacingClasses[spacing], className)} {...props} />
  );
}
