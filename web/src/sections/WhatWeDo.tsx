import { Container } from "../components/ui/Container.tsx";
import { Eyebrow } from "../components/ui/Eyebrow.tsx";
import { cn } from "../lib/cn.ts";

/**
 * "What we do" band — the four-capability grid.
 *
 * The mockup only shows the numbered kicker, so the section's H2 is kept for
 * screen readers and the visible label lives in the `Eyebrow`.
 *
 * Icons are drawn on a 32×32 grid so all four read at the same optical weight.
 */

function IconBuild() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9 text-ink-soft"
    >
      {/* isometric cube: hexagonal outline plus the three-spoke Y join */}
      <path d="M16 2.5 L28 9.5 V23 L16 29.5 L4 23 V9.5 Z" />
      <path d="M16 16 V29.5 M16 16 L4 9.5 M16 16 L28 9.5" />
    </svg>
  );
}

function IconPartner() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9 text-ink-soft"
    >
      {/* two clasped hands: forearms enter from lower-left and lower-right, meeting in a handshake with thumb arc and fingers */}
      <path d="M 8.1 16.2 C 4.8 16.7, 4.5 12.2, 7.1 10.3 C 9.5 6.9, 12.1 7.5, 14.7 9.1" />
      <path d="M 14.7 9.1 C 17.5 9.0, 20.2 6.1, 22.9 9.5 C 26.4 11.8, 26.2 15.7, 22.7 16.3" />
      <path d="M 14.7 9.1 C 12.3 11.2, 13.4 14.4, 16.4 11.7 C 18.7 10.8, 20.8 15.0, 22.6 16.3" />
      <path d="M 22.7 16.4 C 23.4 17.4, 23.3 19.4, 21.6 19.5 C 21.4 20.5, 20.5 21.3, 19.7 21.4 C 19.3 22.5, 18.0 23.4, 17.1 23.3 C 16.2 24.7, 14.4 24.5, 13.7 23.0 C 15.1 20.7, 10.7 16.6, 8.6 17.5 L 8.1 16.2" />
      <path d="M 19.6 17.2 C 20.3 18.0, 21.2 18.7, 21.5 19.5" />
      <path d="M 18.0 19.6 C 18.8 19.9, 19.0 20.8, 19.6 21.4" />
      <path d="M 16.2 21.5 C 16.5 22.1, 16.9 22.6, 17.1 23.2" />
    </svg>
  );
}

function IconCompound() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9 text-ink-soft"
    >
      {/* three stacked layers, the top plate lightly filled */}
      <path d="M16 4 L28 10.5 L16 17 L4 10.5 Z" fill="currentColor" fillOpacity="0.07" />
      <path d="M4 15.5 L16 22 L28 15.5" />
      <path d="M4 20.5 L16 27 L28 20.5" />
    </svg>
  );
}

function IconOperate() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9 text-ink-soft"
    >
      {/* four-point sparkle with long thin spikes around a small centre */}
      <path d="M16 3 C16 11.8 20.2 16 29 16 C20.2 16 16 20.2 16 29 C16 20.2 11.8 16 3 16 C11.8 16 16 11.8 16 3 Z" />
    </svg>
  );
}

const ITEMS = [
  {
    title: "Build",
    copy: "Native software, platform protocols, and autonomous AI systems.",
    Icon: IconBuild,
  },
  {
    title: "Partner",
    copy: "High-conviction venture co-creation with technical founders.",
    Icon: IconPartner,
  },
  {
    title: "Compound",
    copy: "Reinvested capital, shared infrastructure, and unified distribution.",
    Icon: IconCompound,
  },
  {
    title: "Operate",
    copy: "Permanent stewardship and operational autonomy without fund clocks.",
    Icon: IconOperate,
  },
];

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-title"
      className="band-defer bg-cream-alt py-14 lg:py-16"
    >
      <Container>
        <h2 id="what-we-do-title" className="sr-only">
          What we do
        </h2>
        <Eyebrow index="01">WHAT WE DO</Eyebrow>

        <div className="mt-9 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:mt-11 lg:grid-cols-4 lg:gap-x-0">
          {ITEMS.map(({ title, copy, Icon }, index) => (
            <div
              key={title}
              className={cn("lg:px-10", index === 0 ? "lg:pl-0" : "lg:border-l lg:border-line")}
            >
              <Icon />
              <h3 className="mt-6 text-[1.5rem] font-medium tracking-[-0.01em] text-ink">
                {title}
              </h3>
              <p className="body-sm mt-4 max-w-[220px] text-muted">{copy}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
