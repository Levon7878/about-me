"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { skillGroups } from "@/data/skills";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import type { SkillGroup } from "@/types";

function SkillGroupCard({ group }: { group: SkillGroup }) {
  const Icon = group.icon;
  return (
    <motion.div variants={fadeInUp} className="h-full">
      <Card interactive className="flex h-full flex-col">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
            <Icon className="size-5" />
          </span>
          <div>
            <h3 className="font-semibold">{group.category}</h3>
            <p className="text-xs text-muted">{group.skills.length} skills</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted">{group.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${group.category} technologies`}>
          {group.skills.map((skill) => (
            <li key={skill}>
              <Badge>{skill}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}

export function Skills() {
  return (
    <Section id="skills" aria-label="Skills and technologies">
      <SectionHeading
        eyebrow="Tech stack"
        title="Skills & technologies"
        description="The tools I reach for to build modern, reliable web applications."
      />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <SkillGroupCard key={group.category} group={group} />
        ))}
      </motion.div>
    </Section>
  );
}
