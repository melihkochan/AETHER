"use client";

import type { LucideIcon } from "lucide-react";
import type { ReactElement } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type DropdownItem =
  | {
      type?: "item";
      label: string;
      icon?: LucideIcon;
      onSelect?: () => void;
      variant?: "default" | "destructive";
      disabled?: boolean;
    }
  | { type: "separator" };

type DropdownProps = {
  trigger: ReactElement;
  items: DropdownItem[];
  align?: "start" | "center" | "end";
};

export function Dropdown({ trigger, items, align = "start" }: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={trigger} />
      <DropdownMenuContent align={align}>
        {items.map((item, index) =>
          item.type === "separator" ? (
            <DropdownMenuSeparator key={`separator-${index}`} />
          ) : (
            <DropdownMenuItem
              key={item.label}
              variant={item.variant}
              disabled={item.disabled}
              onClick={item.onSelect}
            >
              {item.icon && <item.icon className="size-4" aria-hidden="true" />}
              {item.label}
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
