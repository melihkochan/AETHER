import type { ReactNode } from "react";

import { Callout } from "@/components/documentation/callout";

type TipBoxProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function TipBox({ title, children, className }: TipBoxProps) {
  return (
    <Callout type="tip" title={title} className={className}>
      {children}
    </Callout>
  );
}
