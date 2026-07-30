import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavItem {
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
  avatar?: string;
}

export interface Stat {
  label: string;
  value: string;
}
