import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatCardProps = {
  value: string;
  label: string;
  description: string;
  className?: string;
};

export function StatCard({ value, label, description, className }: StatCardProps) {
  return (
    <Card className={cn("flex flex-col gap-2 p-6", className)}>
      <span className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {value}
      </span>
      <span className="text-sm font-medium text-foreground">{label}</span>
      <span className="text-sm text-muted-foreground">{description}</span>
    </Card>
  );
}
