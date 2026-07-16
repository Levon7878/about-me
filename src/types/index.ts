import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";

/** Any icon that accepts standard SVG props (lucide or custom brand icons). */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavItem {
  /** Section id used for in-page anchor navigation. */
  id: string;
  label: string;
  href: `#${string}`;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  /** Human readable range, e.g. "01/2024 – 01/2025". */
  period: string;
  current?: boolean;
  responsibilities: string[];
  stack?: string[];
}

export type SkillCategory =
  | "Frontend"
  | "State Management"
  | "Testing"
  | "Tools"
  | "Additional";

export interface SkillGroup {
  category: SkillCategory;
  icon: LucideIcon;
  description: string;
  /** Technology names shown as tags — no proficiency levels. */
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone?: string;
  shortBio: string;
  about: string[];
  availableForWork: boolean;
  resumeUrl?: string;
  /** Path to a portrait in /public (e.g. "/me.jpg"). Falls back to a placeholder. */
  avatar?: string;
}

export interface Stat {
  label: string;
  value: string;
}
