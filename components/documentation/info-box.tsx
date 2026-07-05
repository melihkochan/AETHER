import type { ReactNode } from "react";

import { Callout } from "@/components/documentation/callout";

type InfoBoxProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function InfoBox({ title, children, className }: InfoBoxProps) {
  return (
    <Callout type="info" title={title} className={className}>
      {children}
    </Callout>
  );
}
