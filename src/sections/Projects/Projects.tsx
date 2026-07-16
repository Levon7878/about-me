"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/cn";
import type { Project } from "@/types";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeInUp}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 sm:p-7",
        project.featured && "lg:col-span-1",
      )}
    >
      {/* Gradient sheen on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold sm:text-xl">{project.title}</h3>
        <div className="flex items-center gap-1.5">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code`}
              className="grid size-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-primary/40 hover:text-primary"
            >
              <GithubIcon className="size-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="grid size-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <Section id="projects" aria-label="Selected projects" className="bg-surface/30">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="A selection of projects that reflect how I build for the web."
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid gap-6 md:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </Section>
  );
}
