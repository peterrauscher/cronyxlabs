import type { VentureKey } from "../../data/ventures.ts";

/* -------------------------------------------------------------------------- */
/* Helix                                                                      */
/* Swirling cold-blue nebula of filaments fanning from lower-left to          */
/* upper-right, star points with radial halos, low-opacity blue wash.         */
/* -------------------------------------------------------------------------- */

function HelixArt() {
  const filaments = [
    // Wispy strands peeling away high above core
    { d: "M 0 210 C 60 110 160 30 310 12", strokeWidth: 0.5, opacity: 0.18, isCore: false },
    { d: "M 0 185 C 70 80 170 20 290 8", strokeWidth: 0.5, opacity: 0.16, isCore: false },
    { d: "M 5 200 C 95 105 200 35 325 15", strokeWidth: 0.5, opacity: 0.22, isCore: false },
    { d: "M 10 225 C 80 120 190 40 340 18", strokeWidth: 0.6, opacity: 0.26, isCore: false },
    { d: "M 20 235 C 90 135 210 50 360 25", strokeWidth: 0.7, opacity: 0.32, isCore: false },
    // Upper transition strands
    { d: "M 15 240 C 90 150 200 70 360 35", strokeWidth: 0.8, opacity: 0.4, isCore: false },
    { d: "M 30 250 C 110 165 215 80 375 42", strokeWidth: 0.8, opacity: 0.46, isCore: false },
    // Straight-ish diagonal strands
    { d: "M 10 238 C 130 175 250 108 370 45", strokeWidth: 0.6, opacity: 0.3, isCore: false },
    { d: "M 25 242 C 140 180 250 115 380 50", strokeWidth: 0.7, opacity: 0.36, isCore: false },
    // Bright dense core bundle (3-4 core strands)
    { d: "M 18 248 C 108 188 218 128 368 58", strokeWidth: 1.1, opacity: 0.75, isCore: true },
    { d: "M 20 245 C 110 185 220 125 370 55", strokeWidth: 1.5, opacity: 0.95, isCore: true },
    { d: "M 22 243 C 112 183 222 123 372 53", strokeWidth: 1.2, opacity: 0.85, isCore: true },
    { d: "M 25 247 C 116 187 225 126 374 57", strokeWidth: 1.0, opacity: 0.7, isCore: true },
    // Lower transition strands
    { d: "M 35 255 C 120 195 230 135 385 68", strokeWidth: 0.8, opacity: 0.48, isCore: false },
    { d: "M 45 258 C 130 202 240 142 390 82", strokeWidth: 0.8, opacity: 0.42, isCore: false },
    { d: "M 40 252 C 160 210 270 150 395 90", strokeWidth: 0.6, opacity: 0.34, isCore: false },
    { d: "M 60 260 C 150 215 260 155 395 100", strokeWidth: 0.7, opacity: 0.36, isCore: false },
    // Wispy strands peeling away below core
    { d: "M 75 260 C 170 228 280 175 400 120", strokeWidth: 0.6, opacity: 0.28, isCore: false },
    { d: "M 95 260 C 190 238 300 195 400 145", strokeWidth: 0.5, opacity: 0.22, isCore: false },
    { d: "M 120 260 C 215 245 320 215 400 170", strokeWidth: 0.5, opacity: 0.18, isCore: false },
  ];

  const stars = [
    { cx: 92, cy: 200, haloR: 12, coreR: 1.4 },
    { cx: 155, cy: 163, haloR: 18, coreR: 2.2 },
    { cx: 226, cy: 125, haloR: 16, coreR: 1.8 },
    { cx: 305, cy: 86, haloR: 12, coreR: 1.4 },
  ];

  return (
    <svg
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className="h-full w-full"
    >
      <defs>
        <radialGradient id="venture-helix-wash" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#2b4c8f" stopOpacity="0.32" />
          <stop offset="55%" stopColor="#15274d" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#05070c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="venture-helix-filament" x1="10%" y1="90%" x2="90%" y2="10%">
          <stop offset="0%" stopColor="#2b4c8f" stopOpacity="0" />
          <stop offset="25%" stopColor="#2b4c8f" stopOpacity="0.65" />
          <stop offset="55%" stopColor="#9ec7ff" stopOpacity="0.95" />
          <stop offset="85%" stopColor="#2b4c8f" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#2b4c8f" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="venture-helix-filament-core" x1="10%" y1="90%" x2="90%" y2="10%">
          <stop offset="0%" stopColor="#2b4c8f" stopOpacity="0" />
          <stop offset="25%" stopColor="#9ec7ff" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="75%" stopColor="#9ec7ff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#2b4c8f" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="venture-helix-star-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="30%" stopColor="#9ec7ff" stopOpacity="0.55" />
          <stop offset="70%" stopColor="#2b4c8f" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#05070c" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="260" fill="#05070c" />
      <rect width="400" height="260" fill="url(#venture-helix-wash)" />

      {filaments.map((f, i) => (
        <path
          key={i}
          d={f.d}
          stroke={f.isCore ? "url(#venture-helix-filament-core)" : "url(#venture-helix-filament)"}
          strokeWidth={f.strokeWidth}
          fill="none"
          opacity={f.opacity}
        />
      ))}

      {stars.map((s, idx) => (
        <g key={idx}>
          <circle cx={s.cx} cy={s.cy} r={s.haloR} fill="url(#venture-helix-star-halo)" />
          <circle cx={s.cx} cy={s.cy} r={s.coreR} fill="#ffffff" />
        </g>
      ))}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Tessera                                                                    */
/* Crumpled triangulated sheet receding to upper-left, displaced 6×5 grid,   */
/* ~45 thin lines in #3fd0a2/#2f8f6d, ~8 filled triangles, 6 vertex dots.     */
/* -------------------------------------------------------------------------- */

interface TesseraPoint {
  x: number;
  y: number;
}

function TesseraArt() {
  const cols = 6;
  const rows = 5;

  const points: TesseraPoint[] = Array.from({ length: rows * cols }, (_, i) => {
    const c = i % cols;
    const r = Math.floor(i / cols);
    const u = (c / (cols - 1)) ** 1.25;
    const v = (r / (rows - 1)) ** 1.25;
    const xBase = 35 + u * 330;
    const yBase = 25 + v * 205;
    const dx = Math.sin(r * 2.3 + c * 1.7) * 14 + Math.cos(c * 2.1) * 7;
    const dy = Math.cos(r * 1.9 + c * 2.5) * 12 + Math.sin(r * 2.7) * 7;
    return {
      x: Number((xBase + dx).toFixed(1)),
      y: Number((yBase + dy).toFixed(1)),
    };
  });

  const getPt = (r: number, c: number): TesseraPoint => {
    const pt = points[r * cols + c];
    return pt ?? { x: 0, y: 0 };
  };

  // 12 lightly filled triangles across the crumpled sheet (4 added toward lower-right)
  const triangles = [
    { p1: getPt(1, 1), p2: getPt(1, 2), p3: getPt(2, 1), fill: "#3fd0a2", opacity: 0.08 },
    { p1: getPt(1, 2), p2: getPt(2, 2), p3: getPt(2, 1), fill: "#2f8f6d", opacity: 0.06 },
    { p1: getPt(1, 2), p2: getPt(1, 3), p3: getPt(2, 3), fill: "#3fd0a2", opacity: 0.09 },
    { p1: getPt(1, 3), p2: getPt(2, 3), p3: getPt(2, 4), fill: "#2f8f6d", opacity: 0.05 },
    { p1: getPt(2, 1), p2: getPt(2, 2), p3: getPt(3, 2), fill: "#3fd0a2", opacity: 0.07 },
    { p1: getPt(2, 2), p2: getPt(3, 2), p3: getPt(3, 3), fill: "#3fd0a2", opacity: 0.1 },
    { p1: getPt(2, 3), p2: getPt(2, 4), p3: getPt(3, 3), fill: "#2f8f6d", opacity: 0.06 },
    { p1: getPt(3, 1), p2: getPt(3, 2), p3: getPt(4, 2), fill: "#3fd0a2", opacity: 0.05 },
    // 4 additional filled triangles toward lower-right
    { p1: getPt(2, 4), p2: getPt(3, 5), p3: getPt(3, 4), fill: "#3fd0a2", opacity: 0.09 },
    { p1: getPt(3, 3), p2: getPt(3, 4), p3: getPt(4, 3), fill: "#3fd0a2", opacity: 0.08 },
    { p1: getPt(3, 4), p2: getPt(4, 4), p3: getPt(4, 3), fill: "#2f8f6d", opacity: 0.07 },
    { p1: getPt(3, 4), p2: getPt(3, 5), p3: getPt(4, 4), fill: "#3fd0a2", opacity: 0.08 },
  ];

  // Grid edges with line opacity range raised by ~30%
  const edges: { x1: number; y1: number; x2: number; y2: number; color: string; opacity: number; width: number }[] = [];

  // Horizontal edges
  for (let r = 0; r < rows; r++) {
    const maxC = r === 0 ? 4 : 5;
    for (let c = 0; c < maxC; c++) {
      const p1 = getPt(r, c);
      const p2 = getPt(r, c + 1);
      const distC = Math.abs(c - 2.5) / 2.5;
      const distR = Math.abs(r - 2) / 2;
      const op = Number((0.75 - (distC * 0.26 + distR * 0.23)).toFixed(2));
      const color = (r + c) % 2 === 0 ? "#3fd0a2" : "#2f8f6d";
      edges.push({
        x1: p1.x,
        y1: p1.y,
        x2: p2.x,
        y2: p2.y,
        color,
        opacity: Math.max(0.26, Math.min(0.78, op)),
        width: color === "#3fd0a2" ? 0.9 : 0.7,
      });
    }
  }

  // Vertical edges
  for (let c = 0; c < cols; c++) {
    const maxR = c >= 1 && c <= 4 ? 4 : c === 0 ? 2 : 3;
    for (let r = 0; r < maxR; r++) {
      const p1 = getPt(r, c);
      const p2 = getPt(r + 1, c);
      const distC = Math.abs(c - 2.5) / 2.5;
      const distR = Math.abs(r - 1.5) / 1.5;
      const op = Number((0.72 - (distC * 0.26 + distR * 0.23)).toFixed(2));
      const color = (r + c) % 2 === 0 ? "#2f8f6d" : "#3fd0a2";
      edges.push({
        x1: p1.x,
        y1: p1.y,
        x2: p2.x,
        y2: p2.y,
        color,
        opacity: Math.max(0.26, Math.min(0.78, op)),
        width: color === "#3fd0a2" ? 0.8 : 0.7,
      });
    }
  }

  // Diagonal edges (fold lines) - raised opacity to 0.62
  const diags: [number, number, number, number][] = [
    [1, 1, 2, 2],
    [2, 1, 1, 2],
    [1, 2, 2, 3],
    [2, 2, 3, 3],
    [2, 3, 3, 4],
    [2, 2, 3, 1],
    // lower-right fold lines
    [2, 4, 3, 5],
    [3, 3, 4, 4],
    [3, 4, 4, 3],
    [3, 4, 4, 5],
  ];
  for (const [r1, c1, r2, c2] of diags) {
    const p1 = getPt(r1, c1);
    const p2 = getPt(r2, c2);
    edges.push({
      x1: p1.x,
      y1: p1.y,
      x2: p2.x,
      y2: p2.y,
      color: "#3fd0a2",
      opacity: 0.62,
      width: 0.9,
    });
  }

  // Bright vertex dots at intersections
  const vertexDots = [
    { ...getPt(1, 2), r: 1.8, opacity: 0.85 },
    { ...getPt(2, 1), r: 1.5, opacity: 0.75 },
    { ...getPt(2, 2), r: 2.2, opacity: 0.95 },
    { ...getPt(2, 3), r: 1.8, opacity: 0.85 },
    { ...getPt(3, 2), r: 2.0, opacity: 0.9 },
    { ...getPt(3, 3), r: 1.5, opacity: 0.75 },
    { ...getPt(3, 4), r: 1.8, opacity: 0.85 },
    { ...getPt(4, 3), r: 1.6, opacity: 0.8 },
  ];

  return (
    <svg
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className="h-full w-full"
    >
      <defs>
        <radialGradient id="venture-tessera-ambient" cx="60%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#104a37" stopOpacity="0.45" />
          <stop offset="55%" stopColor="#08291e" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#05070c" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="260" fill="#05070c" />
      <rect width="400" height="260" fill="url(#venture-tessera-ambient)" />

      {/* Triangles */}
      {triangles.map((tri, i) => (
        <polygon
          key={i}
          points={`${tri.p1.x},${tri.p1.y} ${tri.p2.x},${tri.p2.y} ${tri.p3.x},${tri.p3.y}`}
          fill={tri.fill}
          fillOpacity={tri.opacity}
        />
      ))}

      {/* Grid Edges */}
      {edges.map((e, i) => (
        <line
          key={i}
          x1={e.x1}
          y1={e.y1}
          x2={e.x2}
          y2={e.y2}
          stroke={e.color}
          strokeWidth={e.width}
          opacity={e.opacity}
        />
      ))}

      {/* Vertex Dots */}
      {vertexDots.map((dot, i) => (
        <circle key={i} cx={dot.x} cy={dot.y} r={dot.r} fill="#6ee7b7" opacity={dot.opacity} />
      ))}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Orbit                                                                      */
/* Single large luminous dune wave with bright crest and soft falloff,        */
/* 3 stacked filled paths with vertical gradients (0.10/0.18/0.30),           */
/* 1px crest stroke (#ffffff, 0.75), dark vignette at edges.                  */
/* -------------------------------------------------------------------------- */

function OrbitArt() {
  return (
    <svg
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className="h-full w-full"
    >
      <defs>
        <radialGradient id="venture-orbit-ambient" cx="65%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.18" />
          <stop offset="60%" stopColor="#64748b" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#05070c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="venture-orbit-grad-vert" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="65%" stopColor="#cbd5e1" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#05070c" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="venture-orbit-vignette" cx="50%" cy="50%" r="70%">
          <stop offset="40%" stopColor="#05070c" stopOpacity="0" />
          <stop offset="85%" stopColor="#05070c" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#05070c" stopOpacity="0.8" />
        </radialGradient>
      </defs>

      <rect width="400" height="260" fill="#05070c" />
      <rect width="400" height="260" fill="url(#venture-orbit-ambient)" />

      {/* Back dune form */}
      <path
        d="M 0 160 C 120 120 230 45 400 85 L 400 260 L 0 260 Z"
        fill="url(#venture-orbit-grad-vert)"
        opacity={0.1}
      />

      {/* Middle dune form */}
      <path
        d="M 0 182 C 125 135 240 52 400 93 L 400 260 L 0 260 Z"
        fill="url(#venture-orbit-grad-vert)"
        opacity={0.18}
      />

      {/* Front dune form */}
      <path
        d="M 0 204 C 130 150 250 60 400 102 L 400 260 L 0 260 Z"
        fill="url(#venture-orbit-grad-vert)"
        opacity={0.3}
      />

      {/* 1px bright crest stroke tracing top edge of frontmost form */}
      <path
        d="M 0 204 C 130 150 250 60 400 102"
        stroke="#ffffff"
        strokeWidth={1}
        strokeOpacity={0.75}
        fill="none"
      />

      {/* Subtle dark vignette at frame edges */}
      <rect width="400" height="260" fill="url(#venture-orbit-vignette)" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Forge                                                                      */
/* Two large overlapping glowing spheres, soft luminous orbs fading to rim,   */
/* no hard visible edge, violet (#a08cf0) & amber (#e07a3c) cores,            */
/* mixBlendMode: screen on front orb, wide faint outer bloom.                 */
/* -------------------------------------------------------------------------- */

function ForgeArt() {
  return (
    <svg
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className="h-full w-full"
    >
      <defs>
        {/* Opacity is held high across the body so each orb still reads as a
            lit sphere, then dropped fast over the last 12% so no hard rim
            appears against the near-black frame. */}
        <radialGradient id="venture-forge-violet" cx="50%" cy="50%" r="50%" fx="36%" fy="34%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="20%" stopColor="#c4b5fd" stopOpacity="0.92" />
          <stop offset="48%" stopColor="#8b5cf6" stopOpacity="0.85" />
          <stop offset="74%" stopColor="#5b21b6" stopOpacity="0.68" />
          <stop offset="90%" stopColor="#2e1065" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#1e1050" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="venture-forge-amber" cx="50%" cy="50%" r="50%" fx="38%" fy="36%">
          <stop offset="0%" stopColor="#fff7ed" stopOpacity="0.95" />
          <stop offset="20%" stopColor="#fed7aa" stopOpacity="0.92" />
          <stop offset="48%" stopColor="#f97316" stopOpacity="0.85" />
          <stop offset="74%" stopColor="#c2410c" stopOpacity="0.66" />
          <stop offset="90%" stopColor="#7c2d12" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#451a03" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="venture-forge-bloom" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c084fc" stopOpacity="0.12" />
          <stop offset="35%" stopColor="#fb923c" stopOpacity="0.08" />
          <stop offset="70%" stopColor="#7c3aed" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#05070c" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="260" fill="#05070c" />

      {/* Outer bloom around overlap - much wider and fainter */}
      <circle cx="200" cy="130" r="160" fill="url(#venture-forge-bloom)" />

      {/* Violet sphere (behind-left) */}
      <circle cx="168" cy="130" r="76" fill="url(#venture-forge-violet)" />

      {/* Amber sphere in front-right with screen blend mode */}
      <circle
        cx="232"
        cy="130"
        r="76"
        fill="url(#venture-forge-amber)"
        style={{ mixBlendMode: "screen" }}
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Nexus                                                                      */
/* 7×5 matrix of small rotated squares with radial hierarchy in size and      */
/* opacity, bright centre diamond with tight halo, mid-ring clearly legible.  */
/* -------------------------------------------------------------------------- */

function NexusArt() {
  const columns = 7;
  const rows = 5;
  const dx = 28;
  const dy = 24;
  const startX = 200 - 3 * dx;
  const startY = 130 - 2 * dy;
  const maxDist = Math.hypot(3, 2);

  const centerSize = 12.0;
  const cornerSize = 4.8; // 12.0 / 4.8 = 2.5x ratio

  const diamonds = Array.from({ length: columns * rows }, (_, i) => {
    const c = i % columns;
    const r = Math.floor(i / columns);
    const x = startX + c * dx;
    const y = startY + r * dy;
    const dist = Math.hypot(c - 3, r - 2);
    const t = dist / maxDist;
    const size = Number((centerSize - t * (centerSize - cornerSize)).toFixed(1));
    const opacity = dist === 0 ? 1.0 : Number((0.95 - (t ** 0.8) * (0.95 - 0.32)).toFixed(2));
    const isCenter = dist === 0;

    return { id: i, x, y, size, opacity, isCenter };
  });

  return (
    <svg
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className="h-full w-full"
    >
      <defs>
        <radialGradient id="venture-nexus-tight-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="25%" stopColor="#c4b5fd" stopOpacity="0.5" />
          <stop offset="65%" stopColor="#8b5cf6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#6d28d9" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="venture-nexus-ambient" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.32" />
          <stop offset="60%" stopColor="#2e1065" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#05070c" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="260" fill="#05070c" />
      <rect width="400" height="260" fill="url(#venture-nexus-ambient)" />

      {/* Tight glow around centre diamond */}
      <circle cx="200" cy="130" r="26" fill="url(#venture-nexus-tight-glow)" />

      {/* 7×5 diamond grid */}
      {diamonds.map((d) => (
        <rect
          key={d.id}
          x={d.x - d.size / 2}
          y={d.y - d.size / 2}
          width={d.size}
          height={d.size}
          transform={`rotate(45 ${d.x} ${d.y})`}
          fill={d.isCenter ? "#ffffff" : "#a78bfa"}
          opacity={d.opacity}
        />
      ))}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* VentureArt Switcher                                                        */
/* -------------------------------------------------------------------------- */

export function VentureArt({ variant }: { variant: VentureKey }) {
  switch (variant) {
    case "helix":
      return <HelixArt />;
    case "tessera":
      return <TesseraArt />;
    case "orbit":
      return <OrbitArt />;
    case "forge":
      return <ForgeArt />;
    case "nexus":
      return <NexusArt />;
  }
}
