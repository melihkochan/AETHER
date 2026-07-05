import { Info, Lightbulb, TriangleAlert, type LucideIcon } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

import { statusColors } from "@/lib/theme";
import { cn } from "@/lib/utils";

export type CalloutType = "info" | "warning" | "tip";

const calloutConfig: Record<CalloutType, { icon: LucideIcon; color: string }> = {
  info: { icon: Info, color: "var(--accent)" },
  warning: { icon: TriangleAlert, color: statusColors.pending },
  tip: { icon: Lightbulb, color: statusColors.online },
};

type CalloutProps = {
  type: CalloutType;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Callout({ type, title, children, className }: CalloutProps) {
  const { icon: IconComponent, color } = calloutConfig[type];

  return (
    <div
      className={cn(
        "flex gap-3 rounded-xl border p-4 text-sm",
        className
      )}
      style={
        {
          borderColor: `color-mix(in oklch, ${color} 30%, transparent)`,
          backgroundColor: `color-mix(in oklch, ${color} 8%, transparent)`,
        } as CSSProperties
      }
    >
      <IconComponent
        className="mt-0.5 size-4 shrink-0"
        style={{ color } as CSSProperties}
        aria-hidden="true"
      />
      <div className="flex flex-col gap-1 text-foreground/90">
        {title && <p className="font-medium text-foreground">{title}</p>}
        <div className="leading-6 [&>p]:m-0">{children}</div>
      </div>
    </div>
  );
}
