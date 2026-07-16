import { socialLinks } from "@/data/socials";
import { cn } from "@/lib/cn";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            title={label}
            className="grid size-10 place-items-center rounded-full border border-border bg-surface text-muted transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
          >
            <Icon className={cn("size-5", iconClassName)} />
          </a>
        </li>
      ))}
    </ul>
  );
}
