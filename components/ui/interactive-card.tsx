"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { springTransition } from "@/lib/animations/variants";
import { cn } from "@/lib/utils";

type InteractiveCardProps = {
  href?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export function InteractiveCard({
  href,
  className,
  children,
  onClick,
}: InteractiveCardProps) {
  const content = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={springTransition}
      className={cn(
        "rounded-xl border border-border bg-card p-6 text-card-foreground transition-colors hover:border-ring/40",
        className
      )}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="block w-full rounded-xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      {content}
    </button>
  );
}
