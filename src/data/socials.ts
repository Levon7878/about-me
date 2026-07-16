import { Mail, Phone } from "lucide-react";
import type { SocialLink } from "@/types";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/BrandIcons";
import { profile } from "./profile";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Levon7878",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/levon-babagulyan/",
    icon: LinkedinIcon,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/levonbabagulyan",
    icon: XIcon,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  ...(profile.phone
    ? [
        {
          label: "Phone",
          href: `tel:${profile.phone.replace(/\s+/g, "")}`,
          icon: Phone,
        } satisfies SocialLink,
      ]
    : []),
];
