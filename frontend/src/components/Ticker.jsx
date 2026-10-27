import { TICKER_ITEMS } from "@/data/content";

export const Ticker = () => {
  // We mirror the sequence exactly twice to ensure a seamless looping boundary track
  const trackGroups = Array.from({ length: 2 }, (_, index) => index);

  return (
    <div
      role="region"
      aria-label="Important notices"
      className="vsme-ticker-wrap block w-full min-h-[3rem] bg-[#0F172A] border-y border-slate-800/80 py-3 sm:py-4 overflow-hidden relative isolate z-30 select-none"
    >
      {/* ⚡ PURE HARDWARE-ACCELERATED MOBILE TRANSFORMS FORCING BLOCK COMPUTATIONS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes vsmeMobileCrawl {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-100%, 0, 0); }
        }
        .vsme-track-wrapper {
          white-space: nowrap !important;
          display: block !important;
          width: 1000% !important; /* Forces massive boundary layout allocation preventing mobile wrapping */
        }
        .vsme-ticker-strip { 
          display: inline-block !important;
          animation: vsmeMobileCrawl 32s linear infinite !important; 
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .vsme-ticker-strip { animation: none !important; }
          .vsme-ticker-wrap { overflow-x: auto; }
        }
      `}} />

      {/* Edge gradient layers */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" aria-hidden="true" />

      {/* ⚡ Outer Track Wrap Bypassing Mobile Flex Collapse Limits */}
      <div className="vsme-track-wrapper">
        {trackGroups.map((groupIndex) => (
          <div 
            key={groupIndex} 
            className="vsme-ticker-strip px-4"
            aria-hidden={groupIndex > 0 ? "true" : undefined}
          >
            {TICKER_ITEMS.map((item, idx) => (
              <span
                key={`${groupIndex}-${idx}`}
                className="text-[12px] sm:text-[15px] font-mono font-bold tracking-widest text-slate-100 antialiased uppercase inline-block mx-6 sm:mx-10"
              >
                {item} <span className="text-[#EA580C] ml-6 sm:ml-10">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>

    </div>
  );
};
