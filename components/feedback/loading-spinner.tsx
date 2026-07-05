import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "size-4",
  md: "size-6",
  lg: "size-8",
} as const;

type LoadingSpinnerProps = {
  size?: keyof typeof sizeClasses;
  className?: string;
  label?: string;
};

export function LoadingSpinner({
  size = "md",
  className,
  label = "Yükleniyor",
}: LoadingSpinnerProps) {
  return (
    <span role="status" className={cn("inline-flex items-center justify-center", className)}>
      <Loader2 className={cn("animate-spin text-muted-foreground", sizeClasses[size])} aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </span>
  );
}
