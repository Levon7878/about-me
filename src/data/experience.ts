import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "topteam",
    role: "Markup Specialist",
    company: "TopTeam (Affiliate Company)",
    location: "Remote",
    period: "04/2025 – 07/2026",
    current: true,
    responsibilities: [
      "Created responsive and pixel-perfect website layouts.",
      "Transformed Figma designs into high-quality interfaces.",
      "Optimized UI implementation across different devices.",
      "Collaborated closely with developers and designers.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Figma", "Responsive Design"],
  },
  {
    id: "rootteam",
    role: "Front-End Developer",
    company: "ROOTTEAM",
    location: "Abovyan, Armenia",
    period: "01/2024 – 01/2025",
    responsibilities: [
      "Developed modern web interfaces.",
      "Built reusable UI components.",
      "Converted Figma designs into responsive frontend applications.",
      "Worked with Vue.js, JavaScript, and modern frontend workflows.",
      "Implemented testing practices using Jest, Vue Test Utils, and Cypress.",
    ],
    stack: ["Vue.js", "JavaScript", "Jest", "Cypress", "Vue Test Utils"],
  },
];
