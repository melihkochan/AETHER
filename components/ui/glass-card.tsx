import type { ComponentProps, CSSProperties } from "react";

import { Card } from "@/components/ui/card";
import { shadows } from "@/lib/theme";
import { cn } from "@/lib/utils";

type GlassCardProps = ComponentProps<typeof Card>;

export function GlassCard({ className, style, ...props }: GlassCardProps) {
  return (
    <Card
      className={cn("border-border/60 bg-card/60 backdrop-blur-xl", className)}
      style={{ boxShadow: shadows.glass, ...style } as CSSProperties}
      {...props}
    />
  );
}
