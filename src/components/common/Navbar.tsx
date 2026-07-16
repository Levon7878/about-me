"use client";

import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useUIStore } from "@/lib/store";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuOpen = useUIStore((s) => s.mobileMenuOpen);
  const setMobileMenuOpen = useUIStore((s) => s.setMobileMenuOpen);
  const toggleMobileMenu = useUIStore((s) => s.toggleMobileMenu);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:h-18 lg:px-8"
      >
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-foreground",
                  activeId === item.id ? "text-foreground" : "text-muted",
                )}
              >
                {activeId === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-surface-2"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden sm:block">
            <Button as="a" href="#contact" size="sm">
              Let&apos;s talk
            </Button>
          </div>
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-border bg-surface text-foreground md:hidden"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      activeId === item.id
                        ? "bg-surface-2 text-foreground"
                        : "text-muted hover:bg-surface-2 hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex items-center justify-between px-2">
                <SocialLinks />
                <Button as="a" href="#contact" size="sm" onClick={() => setMobileMenuOpen(false)}>
                  Let&apos;s talk
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
