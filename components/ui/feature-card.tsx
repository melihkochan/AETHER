import type { LucideIcon } from "lucide-react";

import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({
  icon: IconComponent,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <Card className={cn("flex flex-col gap-4 p-6", className)}>
      <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-accent">
        <IconComponent className="size-5" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-1.5">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
    </Card>
  );
}
