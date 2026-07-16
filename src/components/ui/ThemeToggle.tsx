"use client";

import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useUIStore } from "@/lib/store";
import { useMounted } from "@/hooks/useMounted";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useUIStore((s) => s.theme);
  const toggleTheme = useUIStore((s) => s.toggleTheme);
  const mounted = useMounted();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className={cn(
        "relative grid size-10 place-items-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-primary/40 hover:text-primary",
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={mounted ? theme : "placeholder"}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          className="grid place-items-center"
        >
          {isDark ? <Moon className="size-5" /> : <Sun className="size-5" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
