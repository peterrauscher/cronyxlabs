import type { ReactNode } from "react";
import { cn } from "../../lib/cn.ts";

/**
 * Monospace uppercase kicker. With `index` it renders the mockup's
 * "01  /  WHAT WE DO" numbered form.
 */
export function Eyebrow({
  children,
  index,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  index?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p className={cn("eyebrow", tone === "light" && "text-night-faint", className)}>
      {index ? (
        <>
          <span className={tone === "light" ? "text-night-muted" : "text-muted"}>{index}</span>
          <span className="px-3 opacity-60">/</span>
        </>
      ) : null}
      {children}
    </p>
  );
}
