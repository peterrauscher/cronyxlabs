export type VentureKey = "helix" | "tessera" | "orbit" | "forge" | "nexus";

export type Venture = {
  readonly key: VentureKey;
  readonly name: string;
  readonly label: string;
  readonly blurb: string;
  readonly href: string;
};

export const VENTURES: readonly Venture[] = [
  {
    key: "helix",
    name: "Helix",
    label: "AI / RESEARCH",
    blurb: "Agents for complex workflows and research.",
    href: "#ventures",
  },
  {
    key: "tessera",
    name: "Tessera",
    label: "INFRASTRUCTURE",
    blurb: "Modern infrastructure for scalable applications.",
    href: "#ventures",
  },
  {
    key: "orbit",
    name: "Orbit",
    label: "PLATFORM",
    blurb: "Tools for a healthier, more focused life.",
    href: "#ventures",
  },
  {
    key: "forge",
    name: "Forge",
    label: "DEVELOPER TOOLS",
    blurb: "Build, ship, and scale with confidence.",
    href: "#ventures",
  },
  {
    key: "nexus",
    name: "Nexus",
    label: "DIGITAL SERVICES",
    blurb: "Strategic AI and software consulting for ambitious teams.",
    href: "#ventures",
  },
] as const;
