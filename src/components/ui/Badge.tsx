import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "outline";
  className?: string;
}

const variants = {
  default: "bg-surface-2 text-foreground/80 border-border",
  primary:
    "bg-primary/10 text-primary border-primary/20",
  outline: "bg-transparent text-muted border-border",
} as const;

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
