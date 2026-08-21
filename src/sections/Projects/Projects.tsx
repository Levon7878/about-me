"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/sections/Projects/ProjectCard";
import { ProjectDetailModal } from "@/sections/Projects/ProjectDetailModal";
import { projects } from "@/data/projects";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import type { Project } from "@/types";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </motion.div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
}
