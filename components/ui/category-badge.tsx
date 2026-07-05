import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";

type CategoryBadgeProps = {
  children: ReactNode;
  className?: string;
};

export function CategoryBadge({ children, className }: CategoryBadgeProps) {
  return (
    <Badge variant="secondary" className={className}>
      {children}
    </Badge>
  );
}
