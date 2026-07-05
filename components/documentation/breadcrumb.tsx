import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbProps = {
  category: string;
  title: string;
};

export function Breadcrumb({ category, title }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
      <Link href="/documentation" className="hover:text-foreground">
        Dokümantasyon
      </Link>
      <ChevronRight className="size-3.5" aria-hidden="true" />
      <span>{category}</span>
      <ChevronRight className="size-3.5" aria-hidden="true" />
      <span className="text-foreground">{title}</span>
    </nav>
  );
}
