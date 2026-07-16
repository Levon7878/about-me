import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-60 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5",
  secondary:
    "border border-border bg-surface text-foreground hover:border-primary/40 hover:bg-surface-2",
  ghost: "text-foreground hover:bg-surface-2",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
};

interface StyleProps {
  variant?: Variant;
  size?: Size;
}

type ButtonProps =
  | ({ as?: "button" } & StyleProps & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as: "a" } & StyleProps & AnchorHTMLAttributes<HTMLAnchorElement>);

/** Polymorphic button that renders as `<button>` (default) or `<a>`. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps & { className?: string; children: ReactNode }) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.as === "a") {
    const { as: _as, ...anchorProps } = props;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as: _as, ...buttonProps } = props;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
