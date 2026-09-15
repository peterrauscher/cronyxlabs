import type { ReactNode } from "react";
import { cn } from "../../lib/cn.ts";
import { ArrowIcon } from "./ArrowIcon.tsx";

/** Quiet "Learn more →" / "Our story →" text link. */
export function ArrowLink({
  href,
  children,
  tone = "dark",
  className,
}: {
  href: string;
  children: ReactNode;
  /** `dark` = dark text on light surfaces, `light` = light text on night surfaces. */
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-[0.875rem] transition-colors duration-200",
        tone === "dark" ? "text-ink-soft hover:text-accent" : "text-night-muted hover:text-night-text",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowIcon className="transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-1" />
    </a>
  );
}
