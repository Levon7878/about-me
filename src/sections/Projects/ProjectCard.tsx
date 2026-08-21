"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { ProjectPreview } from "@/sections/Projects/ProjectPreview";
import { fadeInUp } from "@/lib/animations";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.article variants={fadeInUp}>
      <button
        type="button"
        onClick={() => onSelect(project)}
        className="group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-surface text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <ProjectPreview project={project} className="rounded-none" />

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-lg font-semibold sm:text-xl">{project.title}</h3>

          <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
            {project.summary}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </button>
    </motion.article>
  );
}
