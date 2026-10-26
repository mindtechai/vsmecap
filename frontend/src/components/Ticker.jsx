import { TICKER_ITEMS } from "@/data/content";

export const Ticker = () => {
  const tripledItems = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="block w-full bg-[#0F172A] border-y border-slate-800/80 py-4 overflow-hidden relative z-30 select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes vsmeTickerCrawl {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.3333%, 0, 0); }
        }
        .vsme-ticker-strip { animation: vsmeTickerCrawl 48s linear infinite; will-change: transform; }
        @media (prefers-reduced-motion: reduce) {
          .vsme-ticker-strip { animation: none; }
        }
      `}} />

      {/* Edge gradient layers */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" />

      {/* Crawling strip: shown on every screen size */}
      <div className="vsme-ticker-strip flex w-max flex-shrink-0 whitespace-nowrap items-center gap-x-20 pr-20">
        {tripledItems.map((item, idx) => (
          <span
            key={idx}
            className="text-[13px] sm:text-[15px] font-mono font-bold tracking-widest text-slate-100 antialiased flex-shrink-0 uppercase"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
