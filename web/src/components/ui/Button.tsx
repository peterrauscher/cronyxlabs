import type { ReactNode } from "react";
import { cn } from "../../lib/cn.ts";
import { ArrowIcon } from "./ArrowIcon.tsx";

export type ButtonVariant = "primary" | "outline" | "light";

const VARIANTS: Record<ButtonVariant, string> = {
  /** Filled near-black pill on light surfaces. */
  primary: "bg-ink text-cream hover:bg-ink-soft",
  /** Hairline outline on light surfaces. */
  outline: "border border-line bg-cream/60 text-ink hover:border-ink/35 hover:bg-cream",
  /** Filled cream on dark surfaces. */
  light: "bg-cream text-ink hover:bg-white",
};

/**
 * Anchor-based CTA. The arrow nudges right on hover, matching the mockup's
 * interaction language.
 */
export function Button({
  href,
  children,
  variant = "primary",
  withArrow = true,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  withArrow?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-lg px-5 py-3 text-[0.875rem] font-medium transition-colors duration-200",
        VARIANTS[variant],
        className,
      )}
    >
      {children}
      {withArrow ? (
        <ArrowIcon className="transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-1" />
      ) : null}
    </a>
  );
}
