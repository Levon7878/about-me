import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "A production-grade personal website built with Next.js 15, TypeScript and Tailwind CSS — featuring smooth Framer Motion animations, light/dark theming and a fully accessible, responsive layout.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    featured: true,
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "component-library",
    title: "Reusable UI Component Library",
    description:
      "A design-system-driven component library with fully typed props, composable primitives and documented usage — engineered for consistency and reuse across products.",
    tags: ["React", "TypeScript", "Storybook", "Design System"],
    featured: true,
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "dashboard",
    title: "Analytics Dashboard",
    description:
      "A responsive data dashboard translating complex Figma designs into pixel-perfect UI, with server state handled by TanStack Query and lightweight global state via Zustand.",
    tags: ["React", "TanStack Query", "Zustand", "Charts"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "landing",
    title: "Marketing Landing Page",
    description:
      "A high-converting, SEO-optimised landing page with scroll-based animations, optimised images and a perfect Lighthouse performance score.",
    tags: ["Next.js", "SEO", "Performance", "Animations"],
    liveUrl: "#",
    repoUrl: "#",
  },
];
