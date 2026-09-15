import { Container } from "../components/ui/Container.tsx";
import { Eyebrow } from "../components/ui/Eyebrow.tsx";
import { WireTerrain } from "../components/art/WireTerrain.tsx";
import { cn } from "../lib/cn.ts";

/**
 * 4-point sparkle / asterisk icon for "Technical depth".
 */
function TechnicalDepthIcon({ className }: { className?: string } = {}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M16 4c0 6.63 5.37 12 12 12-6.63 0-12 5.37-12 12 0-6.63-5.37-12-12-12 6.63 0 12-5.37 12-12Z" />
    </svg>
  );
}

/**
 * Rounded square with checkmark icon for "Product focus".
 */
function ProductFocusIcon({ className }: { className?: string } = {}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="4" y="4" width="24" height="24" rx="5.33" />
      <path d="M11.33 16.67l3.33 3.33 6.67-6.67" />
    </svg>
  );
}

/**
 * Circle with downward arrow and flanking ticks for "Long-term thinking".
 */
function LongTermThinkingIcon({ className }: { className?: string } = {}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="16" cy="16" r="12" />
      <path d="M16 9.33v13.33M12 18.67l4 4 4-4" />
      <path d="M8 16h2.67M21.33 16h2.67" />
    </svg>
  );
}

/**
 * Diamond / rhombus inside a circle for "Capital & distribution".
 */
function CapitalDistributionIcon({ className }: { className?: string } = {}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="16" cy="16" r="12" />
      <path d="M16 8l8 8-8 8-8-8Z" />
    </svg>
  );
}

const ADVANTAGES = [
  {
    title: "Technical depth",
    description: "Modern stacks, real-world systems.",
    icon: TechnicalDepthIcon,
  },
  {
    title: "Product focus",
    description: "Users, not just features.",
    icon: ProductFocusIcon,
  },
  {
    title: "Long-term thinking",
    description: "Compounding value, not short-term wins.",
    icon: LongTermThinkingIcon,
  },
  {
    title: "Capital & distribution",
    description: "Backing great ideas beyond the build.",
    icon: CapitalDistributionIcon,
  },
] as const;

export function Advantage() {
  return (
    <section
      id="advantage"
      aria-labelledby="advantage-title"
      className="band-defer relative isolate overflow-hidden bg-night py-16 text-night-text lg:py-18"
    >
      {/* Wireframe mountain terrain texture, upper band */}
      <div
        className="pointer-events-none absolute right-0 top-[8%] h-[62%] w-full select-none opacity-35 lg:w-[64%] lg:opacity-90"
        aria-hidden="true"
      >
        <WireTerrain />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-night/60 to-night" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-[505px]">
          <Eyebrow tone="light">THE CRONYX ADVANTAGE</Eyebrow>
          <h2 id="advantage-title" className="display-2 mt-6 text-night-text">
            More than products.
            <br />
            A compounding engine.
          </h2>
          <p className="body-lg mt-6 max-w-[470px] text-night-muted">
            We combine deep technical expertise, product discipline, and a long-term
            mindset to build and scale what matters.
          </p>
        </div>

        {/* 4-up row of advantages */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-0">
          {ADVANTAGES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={cn(
                  "flex items-start gap-4",
                  index === 0
                    ? "lg:pl-0 lg:pr-8"
                    : "lg:border-l lg:border-night-line lg:px-8",
                )}
              >
                <Icon className="mt-0.5 size-8 shrink-0 text-night-text/80" />
                <div>
                  <h3 className="text-[0.9375rem] font-medium text-night-text">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.875rem] leading-[1.55] text-night-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
