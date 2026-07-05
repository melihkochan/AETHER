import { Loader2 } from "lucide-react";
import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";

type LoadingButtonProps = ComponentProps<typeof Button> & {
  isLoading?: boolean;
  loadingText?: string;
};

export function LoadingButton({
  isLoading = false,
  loadingText,
  disabled,
  children,
  ...props
}: LoadingButtonProps) {
  return (
    <Button disabled={disabled || isLoading} aria-busy={isLoading} {...props}>
      {isLoading && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
      {isLoading && loadingText ? loadingText : children}
    </Button>
  );
}
