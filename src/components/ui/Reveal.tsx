"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article" | "span";
}

/**
 * Lightweight scroll-reveal wrapper. Respects `prefers-reduced-motion`
 * automatically via Framer Motion.
 */
export function Reveal({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
