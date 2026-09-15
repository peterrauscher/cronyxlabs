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
    label: "AUTONOMOUS INTELLIGENCE",
    blurb: "Multi-agent intelligence systems engineered for complex research and high-context workflows.",
    href: "#ventures",
  },
  {
    key: "tessera",
    name: "Tessera",
    label: "DISTRIBUTED COMPUTE",
    blurb: "Resilient infrastructure and distributed compute fabrics for mission-critical software.",
    href: "#ventures",
  },
  {
    key: "orbit",
    name: "Orbit",
    label: "COGNITIVE SYSTEMS",
    blurb: "Deep-work interfaces and cognitive environments designed to eliminate contextual friction.",
    href: "#ventures",
  },
  {
    key: "forge",
    name: "Forge",
    label: "DEVELOPER PLATFORMS",
    blurb: "Next-generation developer toolchains and build environments optimized for velocity and rigor.",
    href: "#ventures",
  },
  {
    key: "nexus",
    name: "Nexus",
    label: "APPLIED ADVISORY",
    blurb: "Applied AI architecture and specialized systems engineering for high-stakes enterprise scale.",
    href: "#ventures",
  },
] as const;
