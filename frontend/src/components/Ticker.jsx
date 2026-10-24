import { TICKER_ITEMS } from "@/data/content";

export const Ticker = () => {
  // Triple the array elements to ensure an uninterrupted, seamless infinite loop animation crawl
  const tripledItems = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div 
      data-testid="ticker-wrapper" 
      className="w-full bg-[#0F172A] border-y border-slate-800 py-3.5 overflow-hidden shadow-inner flex items-center relative z-30"
    >
      {/* Visual edge gradients to smoothly blur text entry and exit lines */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling animation block */}
      <div className="flex animate-marquee whitespace-nowrap items-center gap-x-12 px-6">
        {tripledItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-x-4 flex-shrink-0">
            <span className="text-[12px] font-mono font-semibold tracking-wider text-slate-200 antialiased">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
