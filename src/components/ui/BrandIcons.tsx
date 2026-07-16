import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Brand icons are not part of lucide-react (v1 removed them), so we provide
 * lightweight, accessible inline SVGs with a matching API (`className`, size).
 */
const baseProps = {
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": true,
} as const;

export function GithubIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.13-.3-.52-1.48.1-3.08 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0C17.98 5 18.95 5.3 18.95 5.3c.62 1.6.23 2.78.11 3.08.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.28 5.69.42.36.79 1.06.79 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M18.24 2.25h3.31l-7.23 8.26L22.5 21.75h-6.66l-5.22-6.82-5.97 6.82H1.34l7.73-8.84L1.5 2.25h6.83l4.71 6.23 5.2-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64Z" />
    </svg>
  );
}
