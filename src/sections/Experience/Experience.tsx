"use client";

import { Briefcase, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/data/experience";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import type { Experience as ExperienceType } from "@/types";

function TimelineItem({ item }: { item: ExperienceType }) {
  return (
    <motion.li variants={fadeInUp} className="relative pl-10 sm:pl-14">
      {/* Node */}
      <span className="absolute left-0 top-1 grid size-8 place-items-center rounded-full border border-border bg-surface text-primary sm:size-10">
        <Briefcase className="size-4" />
      </span>

      <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/30 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold sm:text-xl">{item.role}</h3>
            <p className="mt-0.5 font-medium text-primary">{item.company}</p>
          </div>
          {item.current && <Badge variant="primary">Current</Badge>}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
          <span>{item.period}</span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="size-3.5" />
            {item.location}
          </span>
        </div>

        <ul className="mt-4 flex flex-col gap-2">
          {item.responsibilities.map((responsibility) => (
            <li
              key={responsibility}
              className="flex gap-2.5 text-sm leading-relaxed text-muted"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              {responsibility}
            </li>
          ))}
        </ul>

        {item.stack && item.stack.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {item.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        )}
      </div>
    </motion.li>
  );
}

export function Experience() {
  return (
    <Section id="experience" aria-label="Work experience" className="bg-surface/30">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        description="A track record of turning designs into reliable, maintainable frontends."
      />

      <motion.ol
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mx-auto mt-14 flex max-w-3xl flex-col gap-8 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border sm:before:left-5"
      >
        {experiences.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </motion.ol>
    </Section>
  );
}
