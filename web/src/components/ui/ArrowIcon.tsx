import { cn } from "../../lib/cn.ts";

/** The thin right arrow used by every link and button in the mockup. */
export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
      className={cn("h-[0.875em] w-[0.875em] shrink-0", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 8h11M9.25 3.75 13.5 8l-4.25 4.25" />
    </svg>
  );
}
