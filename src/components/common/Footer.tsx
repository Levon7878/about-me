import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "./SocialLinks";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40">
      <Container className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="text-xl font-bold tracking-tight">
              Levon<span className="text-primary">.</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {profile.role} crafting fast, accessible and delightful web
              experiences. Open to new opportunities and collaborations.
            </p>
            <div className="mt-5">
              <SocialLinks />
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-foreground">Navigate</span>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:flex sm:flex-col">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted">
            © {year} {profile.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors hover:border-primary/40 hover:text-primary"
          >
            Back to top
            <ArrowUp className="size-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
