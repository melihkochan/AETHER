import type { CSSProperties } from "react";

import { Badge } from "@/components/ui/badge";
import { roleColors, softTint, type Role } from "@/lib/theme";
import { cn } from "@/lib/utils";

type RoleBadgeProps = {
  role: Role;
  className?: string;
};

export function RoleBadge({ role, className }: RoleBadgeProps) {
  const color = roleColors[role];

  return (
    <Badge
      variant="outline"
      className={cn("border capitalize", className)}
      style={
        {
          color,
          borderColor: softTint(color, 30),
          backgroundColor: softTint(color, 10),
        } as CSSProperties
      }
    >
      {role}
    </Badge>
  );
}
