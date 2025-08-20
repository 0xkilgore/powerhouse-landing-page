import React from 'react';

type Props = {
  className?: string;
  /** Turn animation on/off (respects prefers-reduced-motion regardless) */
  animate?: boolean;
  /** Overall opacity of the art */
  opacity?: number;
  /** Animation speeds in seconds (lower = faster) */
  spinSeconds?: number;
  dashSeconds?: { fast: number; medium: number; slow: number };
  /** Accent colors */
  gridFrom?: string; // e.g. '#f0abfc' (fuchsia-300)
  gridTo?: string;   // e.g. '#67e8f9' (cyan-300)
  energyStops?: [string, string, string]; // e.g. ['#fb7185','#a78bfa','#22d3ee']
};

const PowerhouseHeroGlobe: React.FC<Props> = ({
  className,
  animate = true,
  opacity = 0.9,
  spinSeconds = 40,
  dashSeconds = { fast: 6, medium: 12, slow: 18 },
  gridFrom = '#f0abfc',
  gridTo = '#67e8f9',
  energyStops = ['#fb7185', '#a78bfa', '#22d3ee'],
}) => {
  // Inline styles so the component is completely self-contained
  return (
    <svg
      className={className}
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ph-gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gridFrom} />
          <stop offset="100%" stopColor={gridTo} />
        </linearGradient>
        <linearGradient id="ph-energyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={energyStops[0]} />
          <stop offset="50%" stopColor={energyStops[1]} />
          <stop offset="100%" stopColor={energyStops[2]} />
        </linearGradient>
        <radialGradient id="ph-glowFill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={gridTo} stopOpacity="0.14" />
          <stop offset="60%" stopColor={energyStops[1]} stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <filter id="ph-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="ph-sphereClip">
          <circle cx="800" cy="450" r="380" />
        </clipPath>
        <path id="ph-orbit1" d="M 320 450 C 560 220, 1040 220, 1280 450 C 1040 680, 560 680, 320 450 Z" />
        <path id="ph-orbit2" d="M 430 260 C 700 120, 900 120, 1170 260 C 940 360, 870 540, 800 720 C 700 540, 630 360, 430 260 Z" />
        <path id="ph-orbit3" d="M 400 620 C 600 520, 1000 520, 1200 620 C 1000 760, 600 760, 400 620 Z" />
      </defs>

      <style>{`
        @keyframes ph-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes ph-dash { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -1200; } }
        @keyframes ph-pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }

        .ph-spin { transform-origin: 800px 450px; ${animate ? `animation: ph-spin ${spinSeconds}s linear infinite;` : ''} }
        .ph-dash.fast   { ${animate ? `animation: ph-dash ${dashSeconds.fast}s linear infinite;` : ''} }
        .ph-dash.medium { ${animate ? `animation: ph-dash ${dashSeconds.medium}s linear infinite;` : ''} }
        .ph-dash.slow   { ${animate ? `animation: ph-dash ${dashSeconds.slow}s linear infinite;` : ''} }
        .ph-pulse { ${animate ? 'animation: ph-pulse 3s ease-in-out infinite;' : ''} }

        @media (prefers-reduced-motion: reduce) {
          .ph-spin, .ph-dash, .ph-pulse { animation: none !important; }
        }
      `}</style>

      <rect width="1600" height="900" fill="#0a0a0a" />
      <radialGradient id="ph-vignette" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#0a0a0a" stopOpacity="0" />
        <stop offset="100%" stopColor="#000000" stopOpacity="1" />
      </radialGradient>
      <rect width="1600" height="900" fill="url(#ph-vignette)" opacity="0.35" />

      <g clipPath="url(#ph-sphereClip)" className="ph-spin" opacity={opacity}>
        <circle cx="800" cy="450" r="380" fill="url(#ph-glowFill)" />

        <g stroke="url(#ph-gridGrad)" strokeOpacity="0.25" fill="none">
          <ellipse cx="800" cy="450" rx="380" ry="140" />
          <ellipse cx="800" cy="450" rx="380" ry="140" transform="rotate(30 800 450)" />
          <ellipse cx="800" cy="450" rx="380" ry="140" transform="rotate(60 800 450)" />
          <ellipse cx="800" cy="450" rx="380" ry="140" transform="rotate(90 800 450)" />
          <ellipse cx="800" cy="450" rx="380" ry="140" transform="rotate(120 800 450)" />
          <ellipse cx="800" cy="450" rx="380" ry="140" transform="rotate(150 800 450)" />
        </g>

        <g stroke="url(#ph-gridGrad)" strokeOpacity="0.18" fill="none">
          <ellipse cx="800" cy="450" rx="360" ry="60" />
          <ellipse cx="800" cy="380" rx="300" ry="40" />
          <ellipse cx="800" cy="520" rx="300" ry="40" />
          <ellipse cx="800" cy="320" rx="220" ry="26" />
          <ellipse cx="800" cy="580" rx="220" ry="26" />
        </g>

        <g fill="none" stroke="url(#ph-energyGrad)" strokeLinecap="round">
          <use href="#ph-orbit1" strokeWidth="2.2" strokeOpacity="0.75" className="ph-dash fast" strokeDasharray="12 28" />
          <use href="#ph-orbit1" strokeWidth="6" strokeOpacity="0.25" filter="url(#ph-glow)" />
          <use href="#ph-orbit2" strokeWidth="2" strokeOpacity="0.7" className="ph-dash medium" strokeDasharray="10 24" />
          <use href="#ph-orbit2" strokeWidth="5" strokeOpacity="0.22" filter="url(#ph-glow)" />
          <use href="#ph-orbit3" strokeWidth="1.8" strokeOpacity="0.7" className="ph-dash slow" strokeDasharray="8 22" />
          <use href="#ph-orbit3" strokeWidth="4" strokeOpacity="0.2" filter="url(#ph-glow)" />
        </g>

        <g>
          <circle r="3.5" className="ph-pulse" fill={energyStops[0]}>
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
              <mpath href="#ph-orbit1" />
            </animateMotion>
          </circle>
          <circle r="3" className="ph-pulse" fill={energyStops[2]}>
            <animateMotion dur="12s" begin="2s" repeatCount="indefinite" rotate="auto">
              <mpath href="#ph-orbit2" />
            </animateMotion>
          </circle>
          <circle r="2.8" className="ph-pulse" fill={energyStops[1]}>
            <animateMotion dur="10s" begin="4s" repeatCount="indefinite" rotate="auto">
              <mpath href="#ph-orbit3" />
            </animateMotion>
          </circle>
          <circle r="2.5" className="ph-pulse" fill={energyStops[2]}>
            <animateMotion dur="8s" begin="6s" repeatCount="indefinite" rotate="auto">
              <mpath href="#ph-orbit1" />
            </animateMotion>
          </circle>
        </g>
      </g>

      <circle cx="800" cy="450" r="380" fill="none" stroke="url(#ph-gridGrad)" strokeOpacity="0.25" strokeWidth="2" />
    </svg>
  );
};

export default PowerhouseHeroGlobe;
