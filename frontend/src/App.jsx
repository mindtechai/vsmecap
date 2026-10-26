import { Header } from "@/components/Header";
import { Ticker } from "@/components/Ticker";
import { Hero } from "@/components/Hero";
import { UkCompanies, PublicSector, Product, WhyNow, Moat, Market } from "@/components/Sections";
import { LegalAndInvest } from "@/components/LegalAndInvest";
import { PartnersAbout } from "@/components/PartnersAbout";
import { Faqs } from "@/components/Faqs";
import { Risks } from "@/components/Risks";
import { Footer, Privacy } from "@/components/Closing";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#26292e] relative pb-20 scroll-smooth">
      <Header />
      <Ticker />
      <main>
        <Hero />
        <UkCompanies />
        <PublicSector />
        <Product />
        <WhyNow />
        <Moat />
        <Market />
        <LegalAndInvest />
        <PartnersAbout />
        <Faqs />
        <Risks />
        <Privacy />
      </main>
      <Footer />

      {/* 🚀 UPGRADED ENLARGED ORANGE ENTERPRISE SCROLL-TO-TOP FLOATING ACTION BUTTON */}
      <a
        href="#top"
        aria-label="Scroll back to top of framework"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-xl bg-[#EA580C] text-white shadow-xl shadow-orange-950/10 transition-all duration-300 hover:scale-110 hover:bg-[#d94e06] focus:outline-none"
      >
        <svg 
          className="h-7 w-7 text-white" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          strokeWidth="3"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7 m0 0l7 7 m-7-7v18" />
        </svg>
      </a>
    </div>
  );
}
