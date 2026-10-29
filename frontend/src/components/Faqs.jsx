import { useState } from "react";
import { FAQS, CONTACT_MAILTO } from "@/data/content";

// Structured data so search engines can show these questions and answers.
const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a }
  }))
}).replace(/</g, "\\u003c");

export const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="max-w-3xl mb-10">
          <span className="bg-slate-100 text-slate-600 text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded border border-slate-200">
            FAQS
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0F172A]">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Answers about VSME reporting, the free tier, data handling and the limits of what VSMECAP provides. This is general information, not legal, accounting or financial advice.
          </p>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = "faq-panel-" + idx;
            const buttonId = "faq-button-" + idx;
            return (
              <div key={idx}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(idx)}
                    className="flex w-full min-h-[56px] items-center justify-between gap-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
                  >
                    <span className="text-[15px] sm:text-base font-bold text-[#0F172A]">{item.q}</span>
                    <svg
                      className={"h-5 w-5 flex-shrink-0 text-slate-500 transition-transform " + (isOpen ? "rotate-180" : "")}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-5 pr-9 text-sm leading-relaxed text-slate-600"
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-slate-600">
          Question not answered here?{" "}
          <a href={CONTACT_MAILTO} className="font-bold text-[#0F172A] underline hover:text-[#00996f]">
            Contact us
          </a>
          .
        </p>
      </div>
    </section>
  );
};
