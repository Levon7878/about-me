import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "hexa-verse",
    title: "HexaVerse",
    description:
      "A modern digital agency website showcasing IT services, pricing plans, case studies and client workflows — built with a responsive layout, smooth interactions and a polished marketing-focused UI.",
    tags: ["Vue.js", "Vite", "Responsive Design", "Vercel"],
    featured: true,
    liveUrl: "https://hexa-verse.vercel.app/",
    repoUrl: "https://github.com/Levon7878/HexaVerse",
  },
  {
    id: "medlink",
    title: "Medlink",
    description:
      "A multi-page medical website built with Vue 3 and Tailwind CSS — featuring responsive layouts, Vue Router navigation and a polished UI foundation for healthcare-focused web experiences.",
    tags: ["Vue.js", "Vue Router", "Tailwind CSS", "Vercel"],
    featured: true,
    liveUrl: "https://medlink-seven-tau.vercel.app/",
    repoUrl: "https://github.com/Levon7878/Medlink",
  },
  {
    id: "brandaxis",
    title: "BrandAxis",
    description:
      "An AI-assisted Google Ads landing page for a performance and positioning agency — structured around Google Ads landing page best practices with clear value proposition, social proof, strong CTAs and conversion-focused sections.",
    tags: ["AI", "Google Ads", "Landing Page", "HTML/CSS", "Vercel"],
    featured: true,
    liveUrl: "https://brandix-gamma.vercel.app/",
    repoUrl: "https://github.com/Levon7878/brandix",
  },
];
