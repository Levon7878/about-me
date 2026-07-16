import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

interface SectionProps {
  id: string;
  className?: string;
  containerClassName?: string;
  "aria-label"?: string;
  children: ReactNode;
}

/** A semantic, anchor-targetable page section with consistent vertical rhythm. */
export function Section({
  id,
  className,
  containerClassName,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={rest["aria-label"]}
      className={cn("scroll-mt-24 py-20 sm:py-24 lg:py-28", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
