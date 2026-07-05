import Link from "next/link";

import { cn } from "@/lib/utils";

type CategoryItemProps = {
  label: string;
  href: string;
  active: boolean;
};

export function CategoryItem({ label, href, active }: CategoryItemProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative flex items-center rounded-md py-1.5 pl-4 text-sm transition-colors",
        active
          ? "font-medium text-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {active && (
        <span
          className="absolute top-1/2 left-0 h-4 w-px -translate-y-1/2 bg-accent"
          aria-hidden="true"
        />
      )}
      {label}
    </Link>
  );
}
