export type NavLink = { readonly label: string; readonly href: string };

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Products", href: "#ventures" },
  { label: "Services", href: "#what-we-do" },
  { label: "About", href: "#mission" },
  { label: "Careers", href: "#contact" },
  { label: "Contact", href: "#contact" },
] as const;

export type SocialLink = {
  readonly label: string;
  readonly href: string;
  /** SVG path data drawn on a 24×24 viewBox. */
  readonly path: string;
};

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/cronyx-labs",
    path: "M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.25 8.5h3.4V21h-3.4V8.5Zm5.6 0h3.26v1.71h.05c.45-.86 1.56-1.77 3.21-1.77 3.43 0 4.06 2.26 4.06 5.2V21h-3.4v-6.32c0-1.51-.27-2.83-1.87-2.83-1.57 0-1.91 1.32-1.91 2.74V21h-3.4V8.5Z",
  },
  {
    label: "X",
    href: "https://x.com/cronyxlabs",
    path: "M17.53 3h3.2l-6.99 7.99L21.75 21h-5.9l-4.62-6.04L5.94 21H2.73l7.3-8.34L2.25 3h6.05l4.3 5.68L17.53 3Zm-1.12 16.06h1.77L7.64 4.84H5.74l10.67 14.22Z",
  },
  {
    label: "GitHub",
    href: "https://github.com/cronyxlabs",
    path: "M12 2.25a9.75 9.75 0 0 0-3.08 19c-.49.09-.67-.21-.67-.47v-1.65c-2.71.59-3.28-1.31-3.28-1.31-.44-1.13-1.08-1.43-1.08-1.43-.88-.6.07-.59.07-.59.98.07 1.49 1 1.49 1 .87 1.49 2.28 1.06 2.84.81.09-.63.34-1.06.62-1.3-2.17-.25-4.45-1.09-4.45-4.83 0-1.07.38-1.94 1-2.62-.1-.25-.43-1.25.1-2.6 0 0 .82-.26 2.69 1a9.3 9.3 0 0 1 4.9 0c1.87-1.26 2.69-1 2.69-1 .53 1.35.2 2.35.1 2.6.62.68 1 1.55 1 2.62 0 3.75-2.29 4.58-4.47 4.82.35.3.66.9.66 1.81v2.68c0 .26-.17.57-.67.47A9.75 9.75 0 0 0 12 2.25Z",
  },
] as const;
