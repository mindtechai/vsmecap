import { TICKER_ITEMS } from "@/data/content";

export const Ticker = () => (
  <div data-testid="regulatory-ticker" className="overflow-hidden bg-[#0F172A] py-2.5">
    <div className="marquee-track">
      {[0, 1].map((dup) => (
        <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
          {TICKER_ITEMS.map((t, i) => (
            <span
              key={i}
              className="mx-8 whitespace-nowrap text-[12px] font-semibold tracking-[0.08em] text-[#94a3b8]"
            >
              {t}
              <span className="ml-8 text-[#00C08B]">•</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
