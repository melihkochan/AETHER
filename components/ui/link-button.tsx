import Link from "next/link";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LinkButtonProps = Omit<ComponentProps<typeof Link>, "href"> &
  VariantProps<typeof buttonVariants> & {
    href: string;
    external?: boolean;
  };

export function LinkButton({
  href,
  variant,
  size,
  className,
  external,
  ...props
}: LinkButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
        onClick={props.onClick}
      >
        {props.children}
      </a>
    );
  }

  return <Link href={href} className={classes} {...props} />;
}
