import React from 'react';

type Props = {
  className?: string;
};

const PowerhouseSNOChart: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 1000 700"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Scalable Network Organization Architecture"
    >
      <defs>
        <linearGradient id="sphereGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.8" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge in="SourceGraphic">
            <feMergeNode in="coloredBlur"/>
          </feMerge>
        </filter>
      </defs>

      {/* Background sphere */}
      <circle cx="500" cy="350" r="220" fill="url(#sphereGrad)" stroke="#f0abfc" strokeWidth="2" strokeOpacity="0.4" />
      
      {/* Grid lines - ellipses */}
      <g stroke="#f0abfc" strokeWidth="1" strokeOpacity="0.25" fill="none">
        <ellipse cx="500" cy="350" rx="220" ry="72" />
        <ellipse cx="500" cy="350" rx="220" ry="72" transform="rotate(30 500 350)" />
        <ellipse cx="500" cy="350" rx="220" ry="72" transform="rotate(60 500 350)" />
        <ellipse cx="500" cy="350" rx="220" ry="72" transform="rotate(90 500 350)" />
        <ellipse cx="500" cy="350" rx="220" ry="72" transform="rotate(120 500 350)" />
        <ellipse cx="500" cy="350" rx="220" ry="72" transform="rotate(150 500 350)" />
      </g>

      {/* Radial spokes */}
      <g stroke="#f0abfc" strokeWidth="1" strokeOpacity="0.2" fill="none">
        <line x1="500" y1="350" x2="500" y1="115" />
        <line x1="500" y1="350" x2="500" y1="585" />
        <line x1="500" y1="350" x2="265" y1="350" />
        <line x1="500" y1="350" x2="735" y1="350" />
        <line x1="500" y1="350" x2="265" y1="115" />
        <line x1="500" y1="350" x2="735" y1="115" />
        <line x1="500" y1="350" x2="265" y1="585" />
        <line x1="500" y1="350" x2="735" y1="585" />
      </g>

      {/* Center DAO */}
      <g transform="translate(500,350)">
        <circle r="85" fill="url(#nodeGrad)" stroke="#f0abfc" strokeWidth="3" filter="url(#glow)" />
        <text textAnchor="middle" dy="-0.5em" className="text-lg font-bold fill-white">
          <tspan x="0" dy="0">DAO</tspan>
          <tspan x="0" dy="1.2em" className="text-sm font-normal fill-white/70">the on-chain brain & treasury</tspan>
        </text>
      </g>

      {/* Operational Hub */}
      <g transform="translate(500,120)">
        <circle r="45" fill="url(#nodeGrad)" stroke="#f0abfc" strokeWidth="2" filter="url(#glow)" />
        <text textAnchor="middle" dy="-0.5em" className="text-lg font-bold fill-white">
          <tspan x="0" dy="0">OH</tspan>
          <tspan x="0" dy="1.2em" className="text-sm font-normal fill-white/70">global, liability-free payroll</tspan>
        </text>
      </g>

      {/* Revenue Hub */}
      <g transform="translate(220,350)">
        <circle r="45" fill="url(#nodeGrad)" stroke="#f0abfc" strokeWidth="2" filter="url(#glow)" />
        <text textAnchor="middle" dy="-0.5em" className="text-lg font-bold fill-white">
          <tspan x="0" dy="0">RGH</tspan>
          <tspan x="0" dy="1.2em" className="text-sm font-normal fill-white/70">sells services & shares proceeds</tspan>
        </text>
      </g>

      {/* Collateral Fund */}
      <g transform="translate(780,350)">
        <circle r="45" fill="url(#nodeGrad)" stroke="#f0abfc" strokeWidth="2" filter="url(#glow)" />
        <text textAnchor="middle" dy="-0.5em" className="text-lg font-bold fill-white">
          <tspan x="0" dy="0">OCF</tspan>
          <tspan x="0" dy="1.2em" className="text-sm font-normal fill-white/70">routes capital to winning work</tspan>
        </text>
      </g>

      {/* IP Guard */}
      <g transform="translate(500,580)">
        <circle r="45" fill="url(#nodeGrad)" stroke="#f0abfc" strokeWidth="2" filter="url(#glow)" />
        <text textAnchor="middle" dy="-0.5em" className="text-lg font-bold fill-white">
          <tspan x="0" dy="0">IP</tspan>
          <tspan x="0" dy="1.2em" className="text-sm font-normal fill-white/70">protects brand while obeying votes</tspan>
        </text>
      </g>

      {/* Connection lines */}
      <g stroke="#f0abfc" strokeWidth="2" strokeOpacity="0.35" fill="none">
        <line x1="500" y1="165" x2="500" y2="265" />
        <line x1="265" y1="350" x2="355" y2="350" />
        <line x1="645" y1="350" x2="735" y2="350" />
        <line x1="500" y1="535" x2="500" y2="445" />
      </g>
    </svg>
  );
};

export default PowerhouseSNOChart;
