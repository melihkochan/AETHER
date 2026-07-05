import type { CSSProperties } from "react";

import { Badge } from "@/components/ui/badge";
import { roleColors, type Role } from "@/lib/theme";
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
          borderColor: `${color}4d`,
          backgroundColor: `${color}1a`,
        } as CSSProperties
      }
    >
      {role}
    </Badge>
  );
}
