import Image from "next/image";
import { Code2, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

/**
 * Hero portrait. Renders an optimized photo when `profile.avatar` is set,
 * otherwise a styled, on-brand placeholder that's easy to swap later.
 */
export function HeroPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
      {/* Glow */}
      <div
        aria-hidden
        className="animate-aurora absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/30 to-accent/20 blur-2xl"
      />

      <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border bg-surface shadow-2xl shadow-primary/10">
        {profile.avatar ? (
          <Image
            src={profile.avatar}
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="(max-width: 1024px) 24rem, 28rem"
            className="object-cover"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-gradient-to-br from-surface-2 to-surface">
            <div className="absolute inset-0 bg-grid opacity-[0.35]" aria-hidden />
            <span className="grid size-28 place-items-center rounded-3xl bg-primary text-4xl font-extrabold text-primary-foreground shadow-lg shadow-primary/30">
              LB
            </span>
            <span className="absolute bottom-6 rounded-full border border-border bg-background/70 px-4 py-1.5 text-xs text-muted backdrop-blur">
              Add your photo in <code className="text-primary">/public</code>
            </span>
          </div>
        )}
      </div>

      {/* Floating accents */}
      <div className="absolute -left-4 top-8 hidden rounded-2xl border border-border bg-surface/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Code2 className="size-4 text-primary" />
          {profile.role}
        </div>
      </div>
      <div className="absolute -right-3 bottom-10 hidden rounded-2xl border border-border bg-surface/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
        <div className="flex items-center gap-2 text-sm font-medium">
          <MapPin className="size-4 text-primary" />
          {profile.location}
        </div>
      </div>
    </div>
  );
}
