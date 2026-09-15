import { cn } from "../../lib/cn.ts";

/**
 * Procedural wireframe terrain mesh for the Advantage band.
 * Generates a fine, dense isometric mountain range with a prominent jagged peak on the right,
 * a vertical beacon beam rising to a crisp haloed dot, and a faint coordinate grid.
 *
 * Fully deterministic (no Math.random) and SSR-safe.
 */

const COLS = 34;
const ROWS = 16;

function getHeight(c: number, r: number): number {
  const u = c / (COLS - 1);
  const v = r / (ROWS - 1);

  // Irregular jagged skyline harmonics
  const hBase =
    Math.sin(u * Math.PI * 3.2 + 0.5) * 15 +
    Math.sin(u * Math.PI * 7.5 - v * 2.2) * 10 +
    Math.cos(u * Math.PI * 13.0 + v * 3.1) * 7 +
    Math.sin(u * Math.PI * 21.0 - v * 4.0) * 4 +
    Math.cos(u * Math.PI * 29.0) * 2.5;

  // 1. Dominant narrow gaussian peak near the right at ~78% width (u ~ 0.78)
  const dx1 = (u - 0.78) / 0.055;
  const dy1 = (v - 0.2) / 0.22;
  const peak1 = 175 * Math.exp(-(dx1 * dx1 + dy1 * dy1));

  // 2. Lesser narrow gaussian peak near 45% (u ~ 0.45)
  const dx2 = (u - 0.45) / 0.065;
  const dy2 = (v - 0.26) / 0.24;
  const peak2 = 105 * Math.exp(-(dx2 * dx2 + dy2 * dy2));

  // 3. Secondary sub-peak on the right shoulder (u ~ 0.89)
  const dx3 = (u - 0.89) / 0.07;
  const dy3 = (v - 0.32) / 0.22;
  const peak3 = 50 * Math.exp(-(dx3 * dx3 + dy3 * dy3));

  // 4. Secondary sub-peak near u ~ 0.28
  const dx4 = (u - 0.28) / 0.06;
  const dy4 = (v - 0.35) / 0.25;
  const peak4 = 35 * Math.exp(-(dx4 * dx4 + dy4 * dy4));

  const total = hBase + peak1 + peak2 + peak3 + peak4;
  const depthFlatten = 1.0 - v * 0.55;

  // Left horizontal falloff: mesh fades out toward the left edge
  let leftTaper = Math.min(1.0, Math.max(0.0, u / 0.28));
  leftTaper = leftTaper * leftTaper * (3 - 2 * leftTaper);

  // Right edge taper so mesh doesn't slam into the edge
  const rightTaper = Math.min(1.0, Math.max(0.0, (1.0 - u) / 0.08));

  return Math.max(0, total * depthFlatten * leftTaper * rightTaper);
}

interface MeshData {
  rowPolylines: readonly { readonly points: string; readonly opacity: number }[];
  colPolylines: readonly { readonly points: string; readonly opacity: number }[];
  peak: { readonly x: number; readonly y: number };
}

function generateTerrain(): MeshData {
  const baseY = 210;
  const rowStep = 8;
  const colStep = 26;
  const skewX = 10;
  const originX = 0;

  const grid: [number, number][][] = [];
  let peakX = 706;
  let peakY = 70.5;
  let maxH = -1;

  for (let r = 0; r < ROWS; r++) {
    const rowPts: [number, number][] = [];
    for (let c = 0; c < COLS; c++) {
      const h = getHeight(c, r);
      const x = Math.round((originX + c * colStep + r * skewX) * 10) / 10;
      const y = Math.round((baseY + r * rowStep - h) * 10) / 10;
      rowPts.push([x, y]);

      if (h > maxH) {
        maxH = h;
        peakX = x;
        peakY = y;
      }
    }
    grid.push(rowPts);
  }

  const rowPolylines: { points: string; opacity: number }[] = [];
  for (let r = 0; r < ROWS; r++) {
    const row = grid[r];
    if (!row) continue;
    const pts = row.map(([x, y]) => `${x},${y}`).join(" ");
    // Depth falloff: nearest rows ~0.85 opacity, farthest ~0.18
    const opacity = Math.round((0.18 + (r / (ROWS - 1)) * 0.67) * 100) / 100;
    rowPolylines.push({ points: pts, opacity });
  }

  const colPolylines: { points: string; opacity: number }[] = [];
  for (let c = 0; c < COLS; c++) {
    const u = c / (COLS - 1);
    // Horizontal falloff: fade toward the left edge
    const hFactor = Math.round((0.18 + Math.pow(u, 1.2) * 0.82) * 100) / 100;
    const colPts: string[] = [];
    for (let r = 0; r < ROWS; r++) {
      const row = grid[r];
      const pt = row?.[c];
      if (pt) {
        colPts.push(`${pt[0]},${pt[1]}`);
      }
    }
    colPolylines.push({ points: colPts.join(" "), opacity: hFactor });
  }

  return {
    rowPolylines,
    colPolylines,
    peak: { x: peakX, y: peakY },
  };
}

const MESH = generateTerrain();
const BEACON_Y = 20;

export function WireTerrain({ className }: { className?: string } = {}) {
  return (
    <svg
      viewBox="0 0 900 340"
      preserveAspectRatio="xMidYMax slice"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Crisp glowing beacon halo */}
        <radialGradient id="wire-beacon-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="35%" stopColor="#b4d4f8" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#4a90e2" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#4a90e2" stopOpacity="0" />
        </radialGradient>

        {/* Light beam fading down to mountain peak */}
        <linearGradient id="wire-beam-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#cfe0f0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#cfe0f0" stopOpacity="0.05" />
        </linearGradient>

        {/* Depth fade for longitudinal ribs */}
        <linearGradient id="wire-col-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cfe0f0" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#cfe0f0" stopOpacity="0.9" />
        </linearGradient>

        {/* Horizontal fade for contour ridges */}
        <linearGradient id="wire-row-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#cfe0f0" stopOpacity="0" />
          <stop offset="15%" stopColor="#cfe0f0" stopOpacity="0.3" />
          <stop offset="45%" stopColor="#cfe0f0" stopOpacity="0.85" />
          <stop offset="80%" stopColor="#cfe0f0" stopOpacity="1" />
          <stop offset="100%" stopColor="#cfe0f0" stopOpacity="1" />
        </linearGradient>

        {/* Faint coordinate grid pattern across the band */}
        <pattern
          id="wire-bg-grid"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 48 0 L 0 0 0 48"
            fill="none"
            stroke="#cfe0f0"
            strokeWidth="0.4"
            strokeOpacity="0.06"
          />
        </pattern>

        {/* Bottom fade mask so mesh dissolves softly at bottom */}
        <linearGradient id="wire-bottom-mask-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="70%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <mask id="wire-bottom-mask">
          <rect width="100%" height="100%" fill="url(#wire-bottom-mask-grad)" />
        </mask>
      </defs>

      {/* Faint background grid */}
      <rect width="100%" height="100%" fill="url(#wire-bg-grid)" />

      {/* Terrain mesh with bottom dissolve */}
      <g mask="url(#wire-bottom-mask)">
        {/* Column polylines (longitudinal depth ribs) */}
        {MESH.colPolylines.map((col, i) => (
          <polyline
            key={`c-${i}`}
            points={col.points}
            fill="none"
            stroke="url(#wire-col-fade)"
            strokeWidth="0.55"
            strokeOpacity={col.opacity}
          />
        ))}

        {/* Row polylines (contour ridges with depth-based opacity and horizontal fade) */}
        {MESH.rowPolylines.map((row, i) => (
          <polyline
            key={`r-${i}`}
            points={row.points}
            fill="none"
            stroke="url(#wire-row-fade)"
            strokeWidth="0.55"
            strokeOpacity={row.opacity}
          />
        ))}

        {/* Vertical light beam rising from the taller peak */}
        <line
          x1={MESH.peak.x}
          y1={BEACON_Y}
          x2={MESH.peak.x}
          y2={MESH.peak.y}
          stroke="url(#wire-beam-gradient)"
          strokeWidth="1.2"
          strokeOpacity="0.25"
        />
        <line
          x1={MESH.peak.x}
          y1={BEACON_Y}
          x2={MESH.peak.x}
          y2={MESH.peak.y}
          stroke="url(#wire-beam-gradient)"
          strokeWidth="0.55"
        />

        {/* Peak contact accent */}
        <circle
          cx={MESH.peak.x}
          cy={MESH.peak.y}
          r="1.5"
          fill="#ffffff"
          fillOpacity="0.9"
        />

        {/* Beacon halo and bright dot at top */}
        <circle
          cx={MESH.peak.x}
          cy={BEACON_Y}
          r="8"
          fill="url(#wire-beacon-glow)"
        />
        <circle
          cx={MESH.peak.x}
          cy={BEACON_Y}
          r="3"
          fill="#cfe0f0"
          fillOpacity="0.3"
        />
        <circle cx={MESH.peak.x} cy={BEACON_Y} r="1.5" fill="#ffffff" />
      </g>
    </svg>
  );
}
