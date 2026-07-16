"use client";

import { Code2, Palette, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { profile } from "@/data/profile";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

const highlights = [
  {
    icon: Palette,
    title: "Figma to code",
    text: "Pixel-perfect translation of designs into responsive, production-ready interfaces.",
  },
  {
    icon: Code2,
    title: "Reusable components",
    text: "Composable, fully-typed components built with clean architecture and SOLID principles.",
  },
  {
    icon: Zap,
    title: "Performance-first",
    text: "Fast-loading, optimised experiences with accessibility baked in from the start.",
  },
];

export function About() {
  return (
    <Section id="about" aria-label="About me">
      <SectionHeading
        eyebrow="About me"
        title="Turning ideas into polished interfaces"
        description="A frontend developer who cares deeply about detail, performance and user experience."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-14">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-5 lg:col-span-3"
        >
          {profile.about.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={fadeInUp}
              className="text-base leading-relaxed text-muted sm:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        <motion.ul
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-4 lg:col-span-2"
        >
          {highlights.map(({ icon: Icon, title, text }) => (
            <motion.li key={title} variants={fadeInUp}>
              <Card interactive className="flex items-start gap-4 p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-muted">{text}</p>
                </div>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
