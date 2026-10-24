import { TICKER_ITEMS } from "@/data/content";

export const Ticker = () => {
  // Triple items list arrays to ensure a continuous track stream baseline
  const doubledItems = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="w-full bg-[#0F172A] border-y border-slate-800/80 py-4 overflow-hidden relative z-30 flex items-center">
      {/* Structural horizontal overlay blurs to fade content on outer screen margins */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" />

      {/* Activated continuous motion layout channel track */}
      <div className="flex whitespace-nowrap items-center gap-x-16 animate-marquee-scroll">
        {doubledItems.map((item, idx) => (
          <span 
            key={idx} 
            className="text-[12.5px] font-mono font-bold tracking-wider text-slate-200 antialiased flex-shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
