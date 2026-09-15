import { cn } from "../lib/cn.ts";

/**
 * Cronyx Labs mark: a solid planet disc crossed by an orbital ring, with the
 * wordmark set in wide-tracked sans.
 */
export function Logo({
  tone = "dark",
  className,
}: {
  /** `dark` = dark mark for light surfaces, `light` = light mark for night surfaces. */
  tone?: "dark" | "light";
  className?: string;
}) {
  const disc = tone === "dark" ? "var(--color-ink)" : "var(--color-cream)";
  const cut = tone === "dark" ? "var(--color-cream)" : "var(--color-night)";

  return (
    <a
      href="#top"
      aria-label="Cronyx Labs — home"
      className={cn(
        "group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-80",
        className,
      )}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" className="h-8 w-8 shrink-0">
        <circle cx="16" cy="16" r="15" fill={disc} />
        <g transform="rotate(-28 16 16)">
          <ellipse
            cx="16"
            cy="16"
            rx="13.5"
            ry="5.4"
            fill="none"
            stroke={cut}
            strokeWidth="1.9"
            opacity="0.95"
          />
          <circle cx="16" cy="16" r="3.9" fill={cut} />
        </g>
      </svg>
      <span
        className={cn(
          "text-[0.9375rem] font-semibold tracking-[0.18em] whitespace-nowrap",
          tone === "dark" ? "text-ink" : "text-night-text",
        )}
      >
        CRONYX LABS
      </span>
    </a>
  );
}
