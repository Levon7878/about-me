import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Project } from "@/types";

interface ProjectPreviewProps {
  project: Project;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function ProjectPreview({
  project,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: ProjectPreviewProps) {
  const accent = project.previewAccent ?? "var(--color-primary)";

  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden bg-surface-2",
        className,
      )}
    >
      {project.preview ? (
        <Image
          src={project.preview}
          alt={`${project.title} preview`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      ) : (
        <>
          <div
            aria-hidden
            className="absolute inset-0 opacity-90 transition-transform duration-500 group-hover:scale-[1.02]"
            style={{
              background: `linear-gradient(135deg, color-mix(in oklab, ${accent} 28%, var(--color-surface)) 0%, var(--color-surface-2) 55%, color-mix(in oklab, ${accent} 12%, var(--color-background)) 100%)`,
            }}
          />
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 flex items-center gap-1.5 border-b border-border/60 bg-surface/80 px-3 py-2 backdrop-blur-sm"
          >
            <span className="size-2 rounded-full bg-red-400/80" />
            <span className="size-2 rounded-full bg-amber-400/80" />
            <span className="size-2 rounded-full bg-emerald-400/80" />
            <span className="ml-2 truncate text-[10px] text-muted">
              {project.liveUrl?.replace(/^https?:\/\//, "")}
            </span>
          </div>
          <div
            aria-hidden
            className="absolute inset-0 flex items-center justify-center pt-6"
          >
            <span
              className="text-3xl font-semibold tracking-tight opacity-20 sm:text-4xl"
              style={{ color: accent }}
            >
              {project.title}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
