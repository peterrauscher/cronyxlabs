import { cn } from "../../lib/cn.ts";

/**
 * Inline SVG rendering of the sunrise-above-the-clouds alpine scene.
 * Sized to fill the mission band's wide image card with zero raster dependencies.
 */
export function SummitScene({ className }: { className?: string } = {}) {
  return (
    <svg
      viewBox="0 0 900 420"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className={cn("h-full w-full select-none", className)}
    >
      <defs>
        {/* Sky: deep slate at top -> dusty mauve -> warm amber starting at 55% -> bright golden horizon */}
        <linearGradient id="summit-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a4a63" />
          <stop offset="32%" stopColor="#5c5768" />
          <stop offset="55%" stopColor="#cf8a52" />
          <stop offset="72%" stopColor="#f3b573" />
          <stop offset="86%" stopColor="#fad198" />
          <stop offset="100%" stopColor="#fde3be" />
        </linearGradient>

        {/* Sun bloom: wide soft radial bloom */}
        <radialGradient id="summit-sun-bloom" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd9a0" stopOpacity="1" />
          <stop offset="35%" stopColor="#ffd9a0" stopOpacity="0.7" />
          <stop offset="70%" stopColor="#f7cf9a" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#f7cf9a" stopOpacity="0" />
        </radialGradient>

        {/* Sun core: brilliant warm core */}
        <radialGradient id="summit-sun-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="50%" stopColor="#fff4e0" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffd599" stopOpacity="0.8" />
        </radialGradient>

        {/* Horizontal lens streaks */}
        <linearGradient id="summit-lens-streak" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="35%" stopColor="#fff3dc" stopOpacity="0.32" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="65%" stopColor="#fff3dc" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* Shared cloud blur filter: stdDeviation="6" (<= 8) */}
        <filter id="summit-cloud-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>

        {/* Frontmost cloud bank: crisp white top to soft blue-grey to warm sunlit underside */}
        <linearGradient id="summit-cloud-front" x1="0.3" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#f4f7fb" />
          <stop offset="68%" stopColor="#e2ebf4" />
          <stop offset="88%" stopColor="#fcd9b5" />
          <stop offset="100%" stopColor="#e8a263" />
        </linearGradient>
      </defs>

      {/* Sky background */}
      <rect width="900" height="420" fill="url(#summit-sky)" />

      {/* Sunrise sun: sits above the cloud horizon to the left of the main peak */}
      <circle cx="380" cy="246" r="160" fill="url(#summit-sun-bloom)" />
      <ellipse cx="380" cy="246" rx="260" ry="12" fill="url(#summit-sun-bloom)" opacity="0.45" />
      <circle cx="380" cy="246" r="15" fill="url(#summit-sun-core)" />
      <ellipse cx="380" cy="246" rx="220" ry="1.5" fill="url(#summit-lens-streak)" opacity="0.65" />
      <ellipse cx="355" cy="247" rx="130" ry="1.0" fill="url(#summit-lens-streak)" opacity="0.45" />

      {/* 1. Far ridge (far left only): soft, hazy, low contrast in atmospheric distance */}
      <path
        d="M -20,295 L -20,280 L 25,268 L 65,274 L 110,258 L 155,266 L 205,252 L 250,264 L 290,256 L 335,276 L 340,320 L -20,320 Z"
        fill="#4a5566"
        opacity="0.45"
      />

      {/* Sea of clouds — Bank 1: distant horizon inversion deck with lobed top edge */}
      <path
        d="M -20,310 L -20,282 C 10,272 35,272 55,278 C 80,268 110,268 135,274 C 165,262 195,262 225,268 C 255,256 290,256 320,263 C 350,254 385,254 415,262 C 445,256 475,256 505,266 C 535,260 565,262 595,274 C 620,270 645,275 670,285 L 670,340 L -20,340 Z"
        fill="#fff8f0"
        filter="url(#summit-cloud-blur)"
        opacity="0.65"
      />

      {/* 2. Mid ridge behind the main peak on the right */}
      <path
        d="M 710,275 L 742,246 L 782,255 L 824,230 L 864,245 L 898,235 L 920,246 L 920,380 L 710,380 Z"
        fill="#232c37"
        opacity="0.75"
      />

      {/* Sea of clouds — Bank 2: mid-tier billowing cloud deck with distinct rounded lobes */}
      <path
        d="M -20,340 L -20,312 C 5,300 30,300 50,308 C 75,296 105,296 130,304 C 160,288 195,288 225,298 C 255,282 295,282 325,292 C 355,280 395,280 425,292 C 455,284 485,286 515,298 C 545,294 575,302 605,316 C 635,312 660,322 685,335 L 685,395 L -20,395 Z"
        fill="#eef3f8"
        filter="url(#summit-cloud-blur)"
        opacity="0.85"
      />

      {/* Warm sunlight rim on Bank 2 top edge nearest the sun */}
      <path
        d="M 225,298 C 255,282 295,282 325,292 C 355,280 395,280 425,292 C 455,284 485,286 515,298"
        fill="none"
        stroke="#f6cfa0"
        strokeWidth="6"
        opacity="0.35"
        filter="url(#summit-cloud-blur)"
      />

      {/* 3. Dominant Near Mountain Massif & Subsidiary Peaks */}
      {/* Base dark silhouette of the whole near range: dominant peak + 2 subsidiary summits */}
      <path
        d="M 330,420 L 350,412 L 388,378 L 425,342 L 458,308 L 488,276 L 512,248 L 535,222 L 555,198 L 588,238 L 608,232 L 630,260 L 668,226 L 698,252 L 718,258 L 758,238 L 792,258 L 830,278 L 872,305 L 910,328 L 920,335 L 920,420 Z"
        fill="#151c25"
      />

      {/* Shaded right face facets of the dominant peak and subsidiary summits */}
      <polygon points="555,198 588,238 608,232 630,260 595,295 565,245" fill="#11161e" />
      <polygon points="668,226 698,252 718,258 685,280" fill="#121720" />
      <polygon points="758,238 792,258 830,278 872,305 920,335 920,360 840,320 780,285" fill="#131922" />

      {/* Dominant Peak Sunward (Left) Face: 7 broad pale snowfield polygons covering most of the face */}
      {/* 1. Summit snowcap */}
      <polygon points="555,198 535,222 546,230 558,212" fill="#f2f6fa" opacity="0.95" />
      {/* 2. Upper sunward snowfield */}
      <polygon points="535,222 512,248 532,266 546,230" fill="#e8eef5" opacity="0.92" />
      {/* 3. Upper-mid wide snowfield */}
      <polygon points="512,248 488,276 510,302 532,266" fill="#e2ebf4" opacity="0.90" />
      {/* 4. Central broad snow basin */}
      <polygon points="488,276 458,308 484,338 510,302" fill="#d9e3ee" opacity="0.88" />
      {/* 5. Mid-lower sunward snowfield */}
      <polygon points="458,308 425,342 454,374 484,338" fill="#d0dce8" opacity="0.84" />
      {/* 6. Lower sunward snow slope */}
      <polygon points="425,342 388,378 420,410 454,374" fill="#c8d4e1" opacity="0.80" />
      {/* 7. Bottom snow apron */}
      <polygon points="388,378 350,412 380,420 420,410" fill="#c3ccd8" opacity="0.78" />

      {/* Sunlit snowfields on subsidiary peaks */}
      {/* Subsidiary 1 left face snow */}
      <polygon points="668,226 630,260 652,274 676,242" fill="#d8e2ed" opacity="0.82" />
      {/* Subsidiary 2 left face snow */}
      <polygon points="758,238 718,258 742,276 766,250" fill="#cee0ed" opacity="0.76" />

      {/* 4 narrow dark rock ribs running down the snowfield */}
      {/* Rib 1: upper crest rib */}
      <polygon points="542,216 530,240 522,268 528,270 538,242 546,218" fill="#1b222c" opacity="0.8" />
      {/* Rib 2: main central arête rib */}
      <polygon points="524,255 502,285 484,318 472,345 478,346 492,316 510,284 530,256" fill="#1b222c" opacity="0.8" />
      {/* Rib 3: lower couloir rock spine */}
      <polygon points="476,328 450,358 430,388 418,412 424,414 438,386 458,356 482,328" fill="#1b222c" opacity="0.8" />
      {/* Rib 4: lateral craggy spur */}
      <polygon points="500,265 478,290 465,302 470,305 484,292 506,268" fill="#1b222c" opacity="0.8" />

      {/* Warm sunlit rim along summit's sharp knife-edge crest */}
      <path
        d="M 458,308 L 488,276 L 512,248 L 535,222 L 555,198 L 572,218"
        fill="none"
        stroke="#ffd9a0"
        strokeWidth="1.2"
        opacity="0.65"
      />

      {/* Sea of clouds — Bank 3: frontmost billowing cloud deck with distinct rounded lobes */}
      <path
        d="M -20,440 L -20,366 C 5,350 25,350 45,358 C 75,342 110,342 135,352 C 170,332 210,332 245,344 C 285,324 330,324 365,338 C 405,322 450,322 485,338 C 520,332 555,338 585,354 C 625,348 665,358 695,374 C 740,370 780,382 815,396 C 855,392 890,398 920,406 L 920,440 Z"
        fill="url(#summit-cloud-front)"
        filter="url(#summit-cloud-blur)"
        opacity="0.95"
      />

      {/* Warm tint along the top edge of front bank nearest the sun */}
      <path
        d="M 235,344 C 275,324 320,324 355,338 C 395,322 440,322 475,338 C 505,332 535,338 565,352"
        fill="none"
        stroke="#f6cfa0"
        strokeWidth="8"
        opacity="0.35"
        filter="url(#summit-cloud-blur)"
      />
    </svg>
  );
}
