import { cn } from "../../lib/cn.ts";

/**
 * Inline SVG render of the ringed planet and orbital paths from the mockup CTA.
 * Uses deterministic gradients and clip paths to render the 3D occlusion of
 * the ring around the sphere without any raster assets or runtime animation.
 */
export function OrbitScene({ className }: { className?: string } = {}) {
  return (
    <svg
      viewBox="0 0 420 380"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
      className={cn("h-full w-full", className)}
    >
      <defs>
        {/* Sphere shading: highlight upper-left -> terminator lower-right */}
        <radialGradient
          id="orbit-sphere-grad"
          cx="38%"
          cy="32%"
          r="62%"
          fx="30%"
          fy="24%"
        >
          <stop offset="0%" stopColor="#eaf1ff" />
          <stop offset="35%" stopColor="#a8bad4" />
          <stop offset="70%" stopColor="#7f93b8" />
          <stop offset="92%" stopColor="#2b3752" />
          <stop offset="100%" stopColor="#141a29" />
        </radialGradient>

        {/* Soft outer glow / vignette behind the sphere */}
        <radialGradient id="orbit-sphere-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4a658a" stopOpacity="0.35" />
          <stop offset="45%" stopColor="#2b3f5c" stopOpacity="0.22" />
          <stop offset="75%" stopColor="#152033" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#02050a" stopOpacity="0" />
        </radialGradient>

        {/* Foreground ring gradient: bright pale blue-white falling to ~0.3 opacity */}
        <linearGradient
          id="orbit-ring-grad"
          x1="0%"
          y1="100%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#dce7f8" stopOpacity="1" />
          <stop offset="40%" stopColor="#c2d5ed" stopOpacity="0.82" />
          <stop offset="70%" stopColor="#8fa3c0" stopOpacity="0.52" />
          <stop offset="100%" stopColor="#687b99" stopOpacity="0.30" />
        </linearGradient>

        {/* Clip path for the back half of the foreground ring (behind sphere) */}
        <clipPath id="orbit-ring-back-clip">
          <rect x="-100" y="-100" width="620" height="290.5" />
        </clipPath>

        {/* Clip path for the front half of the foreground ring (in front of sphere) */}
        <clipPath id="orbit-ring-front-clip">
          <rect x="-100" y="189.5" width="620" height="300" />
        </clipPath>
      </defs>

      {/* Soft outer glow vignette circle */}
      <circle cx="210" cy="190" r="150" fill="url(#orbit-sphere-glow)" />

      {/* 3 large, faint orbital ellipses running off the edges */}
      <g transform="rotate(-18 210 190)">
        <ellipse
          cx="210"
          cy="190"
          rx="250"
          ry="100"
          fill="none"
          stroke="#8fa2c0"
          strokeWidth="1"
          opacity="0.12"
        />
        {/* Satellite dot 1 */}
        <circle cx="402" cy="126" r="2.5" fill="#eaf1ff" opacity="0.85" />
        <circle cx="402" cy="126" r="6" fill="#8fa2c0" opacity="0.18" />
      </g>

      <g transform="rotate(26 210 190)">
        <ellipse
          cx="210"
          cy="190"
          rx="280"
          ry="110"
          fill="none"
          stroke="#8fa2c0"
          strokeWidth="1"
          opacity="0.09"
        />
        {/* Satellite dot 2 */}
        <circle cx="70" cy="95" r="2" fill="#c6d4e8" opacity="0.75" />
      </g>

      <g transform="rotate(-56 210 190)">
        <ellipse
          cx="210"
          cy="190"
          rx="310"
          ry="120"
          fill="none"
          stroke="#8fa2c0"
          strokeWidth="1"
          opacity="0.07"
        />
      </g>

      {/* Foreground ring: back half (passes behind the sphere's top) */}
      <g transform="rotate(-32 210 190)">
        <ellipse
          cx="210"
          cy="190"
          rx="124"
          ry="44"
          fill="none"
          stroke="url(#orbit-ring-grad)"
          strokeWidth="11"
          clipPath="url(#orbit-ring-back-clip)"
        />
      </g>

      {/* Central sphere */}
      <circle cx="210" cy="190" r="72" fill="url(#orbit-sphere-grad)" />

      {/* Foreground ring: front half (passes in front of the sphere's bottom) */}
      <g transform="rotate(-32 210 190)">
        <ellipse
          cx="210"
          cy="190"
          rx="124"
          ry="44"
          fill="none"
          stroke="url(#orbit-ring-grad)"
          strokeWidth="11"
          clipPath="url(#orbit-ring-front-clip)"
        />
      </g>
    </svg>
  );
}
