import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

/** Wordmark that links back to the top of the page. */
export function Logo({ className, onClick }: LogoProps) {
  return (
    <a
      href="#top"
      onClick={onClick}
      aria-label="Levon Babagulyan — back to top"
      className={cn(
        "group inline-flex items-center gap-2 rounded-full text-lg font-bold tracking-tight",
        className,
      )}
    >
      <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform group-hover:scale-105">
        LB
      </span>
      <span className="hidden sm:inline">
        Levon<span className="text-primary">.</span>
      </span>
    </a>
  );
}
