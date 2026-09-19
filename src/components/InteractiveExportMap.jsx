import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Ship, 
  Plane, 
  CheckCircle2, 
  ArrowUpRight, 
  Compass, 
  ShieldCheck, 
  MapPin, 
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import { WORLD_MAP_PATH, AUSTRALIA_SHAPE, EXPORT_DESTINATIONS } from '../data/countryShapes';

export default function InteractiveExportMap({ onOpenQuote }) {
  const [selectedId, setSelectedId] = useState('sri-lanka');
  const [hoveredId, setHoveredId] = useState(null);

  const activeId = hoveredId || selectedId;
  const activeCountry = EXPORT_DESTINATIONS.find((d) => d.id === activeId) || EXPORT_DESTINATIONS[0];

  // Origin point in Australia (Melbourne / Sydney Hub)
  const originX = AUSTRALIA_SHAPE.hubCoords.x;
  const originY = AUSTRALIA_SHAPE.hubCoords.y;

  // Compute curved flight / maritime trade corridor path
  const getCorridorPath = (dest) => {
    const x2 = dest.hubCoords.x;
    const y2 = dest.hubCoords.y;

    if (dest.id === 'sri-lanka') {
      return `M ${originX},${originY} Q 751.5,289.5 ${x2},${y2}`;
    }
    if (dest.id === 'china') {
      return `M ${originX},${originY} Q 799.5,218.7 ${x2},${y2}`;
    }
    if (dest.id === 'united-kingdom') {
      return `M ${originX},${originY} Q 646.0,152.0 ${x2},${y2}`;
    }

    const mx = (originX + x2) / 2;
    const my = (originY + y2) / 2;
    const dist = Math.hypot(x2 - originX, y2 - originY);
    return `M ${originX},${originY} Q ${mx - 20},${my - dist * 0.22} ${x2},${y2}`;
  };

  return (
    <div className="w-full space-y-8">
      {/* Top Mobile/Touch Fast Selector Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <span className="text-xs uppercase tracking-widest text-slate-400 font-medium mr-1 hidden sm:inline-flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-gold-400" />
          Select Destination:
        </span>
        {EXPORT_DESTINATIONS.map((dest) => {
          const isSelected = activeCountry.id === dest.id;
          return (
            <button
              key={dest.id}
              onClick={() => {
                setSelectedId(dest.id);
                setHoveredId(null);
              }}
              onMouseEnter={() => setHoveredId(dest.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 border cursor-pointer ${
                isSelected
                  ? 'bg-gold-500/20 text-gold-300 border-gold-400/80 shadow-[0_0_15px_rgba(203,171,116,0.25)]'
                  : 'bg-[#041328]/70 text-slate-300 border-white/10 hover:border-gold-500/40 hover:text-white hover:bg-[#072042]'
              }`}
            >
              <span className="text-base leading-none">{dest.flagEmoji}</span>
              <span>{dest.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main 2-Column Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* LEFT COLUMN: Interactive Global Map Canvas (7 cols on lg) */}
        <div className="lg:col-span-7 bg-[#041328]/80 backdrop-blur-xl rounded-3xl p-4 sm:p-6 border border-gold-500/30 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
          {/* Subtle Corner Glow Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Map Header Overlay */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-2 relative z-10">
            <div className="flex items-center gap-2 text-xs font-mono text-gold-300 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Trade Corridors • Australia Origin</span>
            </div>
            <div className="text-[11px] text-slate-400 font-mono hidden sm:block">
              Hover or tap a hub to inspect
            </div>
          </div>

          {/* Scalable SVG World Map Canvas */}
          <div className="relative w-full aspect-[950/500] my-auto flex items-center justify-center">
            <svg
              viewBox="0 0 950 500"
              className="w-full h-full select-none"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Glow Filter for Active Trade Routes */}
                <filter id="corridor-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Linear gradient for shimmering trade arc */}
                <linearGradient id="gold-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9b7745" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#f5d485" stopOpacity="1" />
                  <stop offset="100%" stopColor="#cbab74" stopOpacity="0.9" />
                </linearGradient>

                {/* Radar pulse animation for hubs */}
                <style>{`
                  @keyframes tradeFlowAnim {
                    from { stroke-dashoffset: 40; }
                    to { stroke-dashoffset: 0; }
                  }
                  .trade-corridor-animated {
                    animation: tradeFlowAnim 1.4s linear infinite;
                  }
                `}</style>
              </defs>

              {/* Background Graticule Grid Lines (Lat / Lon) */}
              <g stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" strokeDasharray="3 4">
                <line x1="0" y1="125" x2="950" y2="125" />
                <line x1="0" y1="250" x2="950" y2="250" />
                <line x1="0" y1="375" x2="950" y2="375" />
                <line x1="190" y1="0" x2="190" y2="500" />
                <line x1="380" y1="0" x2="380" y2="500" />
                <line x1="570" y1="0" x2="570" y2="500" />
                <line x1="760" y1="0" x2="760" y2="500" />
              </g>

              {/* Base World Continents Silhouette */}
              <path
                d={WORLD_MAP_PATH}
                fill="#0d254a"
                stroke="#1c4475"
                strokeWidth="0.75"
                strokeLinejoin="round"
                className="transition-colors duration-500"
              />

              {/* RADIATING TRADE CORRIDORS FROM AUSTRALIA */}
              {EXPORT_DESTINATIONS.map((dest) => {
                const isActive = activeCountry.id === dest.id;
                const pathStr = getCorridorPath(dest);

                return (
                  <g key={`corridor-${dest.id}`} className="transition-opacity duration-300">
                    {/* Inactive Corridor Base */}
                    {!isActive && (
                      <path
                        d={pathStr}
                        fill="none"
                        stroke="rgba(203, 171, 116, 0.28)"
                        strokeWidth="1.2"
                        strokeDasharray="4 4"
                      />
                    )}

                    {/* Active Glowing Corridor */}
                    {isActive && (
                      <>
                        {/* Wide Ambient Glow Underlay */}
                        <path
                          d={pathStr}
                          fill="none"
                          stroke="#d4af37"
                          strokeWidth="6"
                          strokeOpacity="0.35"
                          filter="url(#corridor-glow)"
                          strokeLinecap="round"
                        />
                        {/* Solid High-Intensity Arc */}
                        <path
                          d={pathStr}
                          fill="none"
                          stroke="#fef08a"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          filter="url(#corridor-glow)"
                        />
                        {/* Flowing Dash Animation Overlay */}
                        <path
                          d={pathStr}
                          fill="none"
                          stroke="#9b7745"
                          strokeWidth="2.5"
                          strokeDasharray="8 6"
                          strokeLinecap="round"
                          className="trade-corridor-animated"
                        />
                      </>
                    )}
                  </g>
                );
              })}

              {/* ORIGIN HUB: AUSTRALIA (Melbourne / Sydney) */}
              <g transform={`translate(${originX}, ${originY})`} className="cursor-pointer">
                {/* Expanding Radar Waves */}
                <circle r="18" fill="none" stroke="#cbab74" strokeWidth="1" opacity="0.3">
                  <animate attributeName="r" values="6;26" dur="2.4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <circle r="12" fill="none" stroke="#f5d485" strokeWidth="1.2" opacity="0.5">
                  <animate attributeName="r" values="4;18" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
                </circle>
                {/* Solid Core Beacon */}
                <circle r="6.5" fill="#041328" stroke="#d4af37" strokeWidth="2" />
                <circle r="3.5" fill="#f5d485" />

                {/* Origin Hub Label Callout (shifted safely left to avoid edge clipping) */}
                <g transform="translate(-136, -8)">
                  <rect
                    x="0"
                    y="-10"
                    width="126"
                    height="28"
                    rx="6"
                    fill="#041328"
                    fillOpacity="0.92"
                    stroke="#b38e58"
                    strokeWidth="0.8"
                    filter="drop-shadow(0 4px 6px rgba(0,0,0,0.5))"
                  />
                  <text x="8" y="2" fill="#fef08a" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="sans-serif">
                    AUSTRALIA (ORIGIN)
                  </text>
                  <text x="8" y="12" fill="#94a3b8" fontSize="7.5" fontWeight="500" fontFamily="sans-serif">
                    Melbourne & Sydney Hub
                  </text>
                </g>
              </g>

              {/* DESTINATION BEACONS & INTERACTIVE NODES */}
              {EXPORT_DESTINATIONS.map((dest) => {
                const isActive = activeCountry.id === dest.id;
                const hx = dest.hubCoords.x;
                const hy = dest.hubCoords.y;
                const ox = dest.mapLabelOffset.x;
                const oy = dest.mapLabelOffset.y;
                const displayName = dest.id === 'united-kingdom' ? 'UK (London)' : dest.name;
                const boxWidth = displayName.length * 6.5 + 32;

                return (
                  <g
                    key={`node-${dest.id}`}
                    transform={`translate(${hx}, ${hy})`}
                    className="cursor-pointer"
                    onClick={() => {
                      setSelectedId(dest.id);
                      setHoveredId(null);
                    }}
                    onMouseEnter={() => setHoveredId(dest.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Large Invisible Hit Area for Easy Clicking */}
                    <circle r="26" fill="transparent" />

                    {/* Animated Radar Ripples when Active */}
                    {isActive ? (
                      <>
                        <circle r="20" fill="none" stroke="#f59e0b" strokeWidth="1.2">
                          <animate attributeName="r" values="5;24" dur="1.8s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.9;0" dur="1.8s" repeatCount="indefinite" />
                        </circle>
                        <circle r="9" fill="#f59e0b" fillOpacity="0.35" />
                        <circle r="6" fill="#041328" stroke="#f59e0b" strokeWidth="2" />
                        <circle r="2.8" fill="#ffffff" />
                      </>
                    ) : (
                      <>
                        <circle r="6" fill="#072042" stroke="#cbab74" strokeWidth="1.5" strokeOpacity="0.8" />
                        <circle r="2.5" fill="#cbab74" />
                      </>
                    )}

                    {/* Country Badge Label */}
                    <g transform={`translate(${ox}, ${oy})`}>
                      <rect
                        x={-boxWidth / 2}
                        y="-12"
                        width={boxWidth}
                        height="22"
                        rx="11"
                        fill={isActive ? '#041328' : '#072042'}
                        fillOpacity="0.95"
                        stroke={isActive ? '#f59e0b' : 'rgba(203,171,116,0.35)'}
                        strokeWidth={isActive ? '1.5' : '0.8'}
                        filter="drop-shadow(0 4px 8px rgba(0,0,0,0.6))"
                      />
                      <text
                        x={-boxWidth / 2 + 8}
                        y="3"
                        fontSize="11"
                        fontFamily="sans-serif"
                      >
                        {dest.flagEmoji}
                      </text>
                      <text
                        x={-boxWidth / 2 + 25}
                        y="2.5"
                        fill={isActive ? '#ffffff' : '#cbd5e1'}
                        fontSize="9.5"
                        fontWeight={isActive ? '700' : '500'}
                        letterSpacing="0.02em"
                        fontFamily="sans-serif"
                      >
                        {displayName}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Bottom Map Legend */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10 text-xs text-slate-300">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                <span>Active Trade Corridors</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span>Australia Origin Hub</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-gold-300 font-mono text-[11px]">
              <Compass className="w-3.5 h-3.5 text-gold-400" />
              <span>Direct Cold-Chain Sea & Air Corridors</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Destination Detail & Exact Silhouette Showcase (5 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCountry.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="h-full bg-[#041328]/85 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gold-500/30 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              {/* Header: Destination Badge + Country Identity */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-500/40">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                    <span>{activeCountry.region} • Export Destination</span>
                  </span>

                  <span className="font-mono text-xs text-gold-400/80 font-bold tracking-widest px-2.5 py-0.5 rounded bg-white/5 border border-white/10">
                    ISO {activeCountry.code}
                  </span>
                </div>

                <div>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-3xl sm:text-4xl">{activeCountry.flagEmoji}</span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                      {activeCountry.name}
                    </h3>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gold-400" />
                    Primary Port Hub: {activeCountry.capital}
                  </p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {activeCountry.description}
                </p>
              </div>

              {/* EXACT GEOGRAPHIC SILHOUETTE VIEWPORT */}
              <div className="bg-[#02091b]/95 border border-gold-500/30 rounded-2xl p-3.5 sm:p-4 relative overflow-hidden shadow-inner">
                {/* Viewport Top Meta Bar */}
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1 border-b border-white/5 pb-1.5">
                  <span className="text-gold-300 uppercase tracking-wider flex items-center gap-1">
                    <Compass className="w-3 h-3 text-gold-400" />
                    Exact Territorial Silhouette
                  </span>
                  <span className="text-slate-400 tracking-wider">
                    CALIBRATED 1:1 GEOMETRY
                  </span>
                </div>

                {/* SVG Silhouette Display */}
                <div className="relative h-40 sm:h-44 flex items-center justify-center">
                  {/* Subtle Technical Blueprint Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none rounded-xl" />

                  {/* Watermark ISO Code in Background */}
                  <div className="absolute right-2 bottom-1 text-5xl sm:text-6xl font-serif font-black text-white/[0.04] select-none pointer-events-none">
                    {activeCountry.code}
                  </div>

                  <svg
                    viewBox="0 0 300 300"
                    className="w-full h-full max-h-36 sm:max-h-40 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.7)]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <linearGradient id={`shape-grad-${activeCountry.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e3e6b" stopOpacity="0.95" />
                        <stop offset="50%" stopColor="#0f2647" stopOpacity="0.98" />
                        <stop offset="100%" stopColor="#07172e" stopOpacity="1" />
                      </linearGradient>
                    </defs>

                    {/* The Exact Silhouette Path */}
                    <path
                      d={activeCountry.svgPath}
                      fill={`url(#shape-grad-${activeCountry.id})`}
                      stroke="#cbab74"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />

                    {/* Capital/Primary Port Beacon Dot */}
                    <g transform={`translate(${activeCountry.capitalDotCoords.x}, ${activeCountry.capitalDotCoords.y})`}>
                      <circle r="10" fill="none" stroke="#f59e0b" strokeWidth="1" className="animate-ping opacity-75" />
                      <circle r="5" fill="#f59e0b" fillOpacity="0.3" stroke="#f5d485" strokeWidth="1" />
                      <circle r="2.5" fill="#ffffff" />

                      {/* City Name Label */}
                      <g transform="translate(8, -6)">
                        <rect
                          x="0"
                          y="-9"
                          width={activeCountry.capital.length * 6.8 + 12}
                          height="16"
                          rx="3"
                          fill="#041328"
                          fillOpacity="0.92"
                          stroke="#cbab74"
                          strokeWidth="0.8"
                        />
                        <text
                          x="6"
                          y="2.5"
                          fill="#fef08a"
                          fontSize="8.5"
                          fontWeight="700"
                          fontFamily="sans-serif"
                        >
                          {activeCountry.capital}
                        </text>
                      </g>
                    </g>
                  </svg>
                </div>

                {/* Viewport Bottom Status Strip */}
                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-white/5">
                  <span className="flex items-center gap-1 text-slate-300">
                    <MapPin className="w-2.5 h-2.5 text-gold-400" />
                    Gateway: <strong className="text-white font-medium">{activeCountry.capital}</strong>
                  </span>
                  <span className="text-emerald-400 font-medium">
                    Verified Trade Route
                  </span>
                </div>
              </div>

              {/* TARGETED EXPORT PRODUCTS */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 text-gold-300">
                    <Layers className="w-3.5 h-3.5 text-gold-400" />
                    Targeted Exported Products
                  </span>
                  <span className="text-[10px] text-slate-400 lowercase font-normal">
                    Australian certified
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeCountry.products.map((prod, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 rounded-xl bg-white/[0.04] border border-white/5 hover:border-gold-500/30 transition-colors flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span className="text-xs text-slate-200 font-medium leading-tight">
                        {prod}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* LOGISTICS & TRANSIT TIMES */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-gold-400 font-medium mb-1">
                    <Ship className="w-3.5 h-3.5 text-gold-400" />
                    <span>Sea Freight Transit</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {activeCountry.transitTime.split('|')[0]?.replace('Sea:', '').trim() || 'Direct Lines'}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Port-to-Port Cold-Chain
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-gold-400 font-medium mb-1">
                    <Plane className="w-3.5 h-3.5 text-gold-400" />
                    <span>Air Cargo Transit</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {activeCountry.transitTime.split('|')[1]?.replace('Air:', '').trim() || 'Direct Flights'}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Perishable Express
                  </div>
                </div>
              </div>

              {/* ACTION BUTTON */}
              <button
                onClick={() => onOpenQuote(activeCountry.products[0])}
                className="w-full py-3.5 px-6 rounded-2xl bg-gold-gradient hover:opacity-95 text-navy-950 font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Request Quotation for {activeCountry.name}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
