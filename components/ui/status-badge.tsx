import { Badge } from "@/components/ui/badge";
import { statusColors, type Status } from "@/lib/theme";
import { cn } from "@/lib/utils";

const statusLabels: Record<Status, string> = {
  online: "Online",
  offline: "Offline",
  pending: "Pending",
  busy: "Busy",
};

type StatusBadgeProps = {
  status: Status;
  className?: string;
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <Badge variant="outline" className={cn("gap-1.5", className)}>
      <span
        className="size-1.5 rounded-full"
        style={{ backgroundColor: statusColors[status] }}
        aria-hidden="true"
      />
      {statusLabels[status]}
    </Badge>
  );
}
