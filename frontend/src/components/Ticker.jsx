import { TICKER_ITEMS } from "@/data/content";

export const Ticker = () => {
  // Generates the tracking array dynamically to bypass stream formatting issues
  const copies = Array.from({ length: 3 }, (_, index) => index);

  return (
    <div
      role="region"
      aria-label="Important notices"
      className="vsme-ticker-wrap block w-full min-h-[3rem] bg-[#0F172A] border-y border-slate-800/80 py-3 sm:py-4 overflow-hidden relative isolate z-30 select-none"
      style={{ display: "block" }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes vsmeTickerCrawl {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.3333%, 0, 0); }
        }
        /* ⚡ Hardware accelerated structural layout tracking fixes mobile track stalls */
        .vsme-track-inner {
          display: flex !important;
          width: max-content !important;
          animation: vsmeTickerCrawl 48s linear infinite !important; 
          will-change: transform;
        }
        .vsme-ticker-strip { 
          display: flex !important;
          flex-direction: row !important;
          flex-shrink: 0 !important;
          align-items: center !important;
          white-space: nowrap !important;
        }
        /* Visitors who prefer reduced motion get a static, swipeable strip instead of a hidden one */
        @media (prefers-reduced-motion: reduce) {
          .vsme-track-inner { animation: none !important; }
          .vsme-ticker-wrap { overflow-x: auto; }
        }
      `}} />

      {/* Edge gradient layers */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" aria-hidden="true" />

      {/* ⚡ Added dynamic inner structural element bounding width calculation parameters */}
      <div className="vsme-track-inner">
        <div className="vsme-ticker-strip gap-x-12 sm:gap-x-20 pr-12 sm:pr-20">
          {copies.map((copy) =>
            TICKER_ITEMS.map((item, idx) => (
              <span
                key={`${copy}-${idx}`}
                aria-hidden={copy > 0 ? "true" : undefined}
                className="text-[12px] sm:text-[15px] font-mono font-bold tracking-widest text-slate-100 antialiased flex-shrink-0 uppercase"
              >
                {item}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
