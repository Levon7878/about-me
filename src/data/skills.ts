import { Code2, Boxes, FlaskConical, Wrench, Sparkles } from "lucide-react";
import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: Code2,
    description: "Building fast, accessible and maintainable user interfaces.",
    skills: [
      "React",
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    category: "State Management",
    icon: Boxes,
    description: "Predictable, scalable application state across frameworks.",
    skills: ["Pinia", "Vuex", "Zustand", "Redux Toolkit"],
  },
  {
    category: "Testing",
    icon: FlaskConical,
    description: "Confidence through automated, meaningful test coverage.",
    skills: ["Jest", "Vue Test Utils", "Cypress", "React Testing Library"],
  },
  {
    category: "Tools",
    icon: Wrench,
    description: "Everyday tooling that keeps my workflow efficient.",
    skills: ["Git", "GitHub", "Figma", "VS Code"],
  },
  {
    category: "Additional",
    icon: Sparkles,
    description: "Practices I apply to ship polished, production-ready work.",
    skills: [
      "Responsive Design",
      "REST API Integration",
      "Component Architecture",
      "Performance Optimization",
    ],
  },
];
