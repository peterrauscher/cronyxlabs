import type { ReactNode } from "react";
import { cn } from "../../lib/cn.ts";

/**
 * The single horizontal rhythm of the page: content spans ~90% of the viewport
 * up to a 1360px ceiling, matching the mockup's gutters.
 */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-14", className)}>
      {children}
    </div>
  );
}
