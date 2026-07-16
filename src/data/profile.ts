import type { Profile, Stat } from "@/types";

export const profile: Profile = {
  name: "Levon Babagulyan",
  role: "Frontend Developer",
  location: "Abovyan, Armenia",
  email: "lyovbabagulyan@gmail.com",
  phone: "+37477881159",
  shortBio:
    "I build modern, responsive and user-friendly web applications — turning Figma designs into pixel-perfect, high-performance interfaces.",
  about: [
    "Hi, I'm Levon Babagulyan, a Frontend Developer focused on creating modern, responsive, and user-friendly web applications.",
    "I specialize in transforming Figma designs into high-quality interfaces using React, Vue.js, and modern frontend technologies.",
    "I enjoy building reusable components, improving performance, and creating polished digital experiences with attention to detail.",
  ],
  availableForWork: true,
  resumeUrl: "/resume.pdf",
  // Drop a photo in /public and set its path here, e.g. "/levon.jpg".
  avatar: undefined,
};

export const stats: Stat[] = [
  { label: "Years of experience", value: "2+" },
  { label: "Projects delivered", value: "20+" },
  { label: "Technologies", value: "15+" },
];
