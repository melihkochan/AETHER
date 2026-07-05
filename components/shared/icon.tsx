import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const sizeClasses = {
  xs: "size-3",
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
} as const;

type IconProps = {
  icon: LucideIcon;
  size?: keyof typeof sizeClasses;
  className?: string;
};

export function Icon({ icon: IconComponent, size = "md", className }: IconProps) {
  return (
    <IconComponent className={cn(sizeClasses[size], className)} aria-hidden="true" />
  );
}
