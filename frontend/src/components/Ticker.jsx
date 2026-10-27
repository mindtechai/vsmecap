import { TICKER_ITEMS } from "@/data/content";

export const Ticker = () => {
  // Three copies so the loop is seamless. Only the first copy is read by screen readers.
  const copies =;

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
        /* Enforced flex layout mode explicitly inside the global animation utility block */
        .vsme-ticker-strip { 
          animation: vsmeTickerCrawl 48s linear infinite !important; 
          will-change: transform; 
          display: flex !important;
          width: max-content !important;
        }
        /* Visitors who prefer reduced motion get a static, swipeable strip instead of a hidden one */
        @media (prefers-reduced-motion: reduce) {
          .vsme-ticker-wrap { overflow-x: auto; }
          .vsme-ticker-strip { animation: none !important; }
        }
      `}} />

      {/* Edge gradient layers */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" aria-hidden="true" />

      {/* Crawling strip: Added explicit flex-row and shrink-0 to prevent layout collapse on narrow viewports */}
      <div className="vsme-ticker-strip flex flex-row flex-shrink-0 whitespace-nowrap items-center gap-x-12 sm:gap-x-20 pr-12 sm:pr-20">
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
  );
};
