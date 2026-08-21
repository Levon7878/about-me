"use client";

import { useEffect, useId, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectPreview } from "@/sections/Projects/ProjectPreview";
import type { Project } from "@/types";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4">
          <motion.button
            type="button"
            aria-label="Close project details"
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-border bg-surface shadow-2xl sm:rounded-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute right-3 top-3 z-20 grid size-9 place-items-center rounded-full border border-border bg-surface/90 text-muted backdrop-blur-sm transition-colors hover:text-foreground"
            >
              <X className="size-4" />
            </button>

            <ProjectPreview
              project={project}
              className="shrink-0 rounded-none"
              sizes="(max-width: 768px) 100vw, 672px"
              priority
            />

            <div className="overflow-y-auto p-6 sm:p-7">
              <h2 id={titleId} className="text-xl font-semibold sm:text-2xl">
                {project.title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              {(project.liveUrl || project.repoUrl) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <Button as="a" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      View live
                      <ArrowUpRight className="size-4" />
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button
                      as="a"
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                    >
                      <GithubIcon className="size-4" />
                      Source code
                    </Button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
