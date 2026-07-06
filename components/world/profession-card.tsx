import Image from "next/image";
import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ProfessionCardProps = {
  icon: LucideIcon;
  image: string;
  title: string;
  description: string;
  difficulty: string;
  income: string;
  reputation: string;
  className?: string;
};

export function ProfessionCard({
  icon: IconComponent,
  image,
  title,
  description,
  difficulty,
  income,
  reputation,
  className,
}: ProfessionCardProps) {
  return (
    <Card className={className}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute top-3 left-3 flex size-9 items-center justify-center rounded-lg bg-background/80 text-accent backdrop-blur">
          <IconComponent className="size-4" aria-hidden="true" />
        </div>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        <Badge variant="outline">Zorluk: {difficulty}</Badge>
        <Badge variant="outline">Gelir: {income}</Badge>
        <Badge variant="outline">İtibar: {reputation}</Badge>
      </CardContent>
    </Card>
  );
}
