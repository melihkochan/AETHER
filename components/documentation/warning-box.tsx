import type { ReactNode } from "react";

import { Callout } from "@/components/documentation/callout";

type WarningBoxProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function WarningBox({ title, children, className }: WarningBoxProps) {
  return (
    <Callout type="warning" title={title} className={className}>
      {children}
    </Callout>
  );
}
