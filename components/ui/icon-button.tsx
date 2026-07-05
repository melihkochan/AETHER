import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";

type IconButtonProps = Omit<ComponentProps<typeof Button>, "children"> & {
  icon: LucideIcon;
  label: string;
};

export function IconButton({
  icon: IconComponent,
  label,
  variant = "ghost",
  size = "icon",
  ...props
}: IconButtonProps) {
  return (
    <Button variant={variant} size={size} aria-label={label} {...props}>
      <IconComponent className="size-4" aria-hidden="true" />
    </Button>
  );
}
