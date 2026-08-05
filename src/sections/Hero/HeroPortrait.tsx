import Image from "next/image";
import { Code2, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export function HeroPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[17rem] sm:max-w-[19rem] lg:max-w-[21rem]">
      <div
        aria-hidden
        className="animate-aurora absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/35 via-primary/10 to-accent/25 blur-2xl"
      />

      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border/70 bg-surface p-1.5 shadow-2xl shadow-primary/15">
        <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-surface-2">
          {profile.avatar ? (
            <Image
              src={profile.avatar}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 19rem, 21rem"
              className="object-cover object-[center_22%]"
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-gradient-to-br from-surface-2 to-surface">
              <div className="absolute inset-0 bg-grid opacity-[0.35]" aria-hidden />
              <span className="grid size-28 place-items-center rounded-3xl bg-primary text-4xl font-extrabold text-primary-foreground shadow-lg shadow-primary/30">
                LB
              </span>
            </div>
          )}

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/50 via-background/10 to-transparent"
          />
        </div>
      </div>

      <div className="absolute -left-3 top-6 hidden rounded-2xl border border-border bg-surface/95 px-3.5 py-2.5 shadow-xl backdrop-blur sm:block">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Code2 className="size-4 text-primary" />
          {profile.role}
        </div>
      </div>
      <div className="absolute -right-2 bottom-6 hidden rounded-2xl border border-border bg-surface/95 px-3.5 py-2.5 shadow-xl backdrop-blur sm:block">
        <div className="flex items-center gap-2 text-sm font-medium">
          <MapPin className="size-4 text-primary" />
          {profile.location}
        </div>
      </div>
    </div>
  );
}
