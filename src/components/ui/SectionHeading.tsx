"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/** Consistent heading block used at the top of every section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      <motion.span
        variants={fadeInUp}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-primary"
      >
        <span className="size-1.5 rounded-full bg-primary" aria-hidden />
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeInUp}
        className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeInUp} className="text-base text-muted sm:text-lg">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
