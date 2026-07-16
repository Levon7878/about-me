import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Adds a subtle hover lift + border highlight for interactive cards. */
  interactive?: boolean;
}

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-6 sm:p-7",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5",
        className,
      )}
    >
      {children}
    </div>
  );
}
