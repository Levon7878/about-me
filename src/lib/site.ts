/**
 * Centralised site configuration used for SEO, metadata and structured data.
 */
export const siteConfig = {
  name: "Levon Babagulyan",
  title: "Levon Babagulyan — Frontend Developer",
  role: "Frontend Developer",
  description:
    "Frontend Developer specialising in modern, responsive and user-friendly web applications with React, Next.js and TypeScript. I turn Figma designs into pixel-perfect, high-performance interfaces.",
  url: "https://levonbabagulyan.dev",
  locale: "en_US",
  email: "lyovbabagulyan@gmail.com",
  phone: "+37477881159",
  linkedin: "https://www.linkedin.com/in/levon-babagulyan/",
  github: "https://github.com/Levon7878",
  keywords: [
    "Levon Babagulyan",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "UI Engineer",
    "Web Developer",
    "Abovyan",
    "Armenia",
  ],
  ogImage: "/opengraph-image",
  twitterHandle: "@levonbabagulyan",
} as const;

export type SiteConfig = typeof siteConfig;
