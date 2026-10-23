import { Header } from "@/components/Header";
import { Ticker } from "@/components/Ticker";
import { Hero } from "@/components/Hero";
import { Modules } from "@/components/Modules";
import {
  UkCompanies,
  PublicSector,
  Product,
  WhyNow,
  Moat,
  Market,
} from "@/components/Sections";
import { LegalAndInvest } from "@/components/LegalAndInvest";
import { PartnersAbout } from "@/components/PartnersAbout";
import { Risks } from "@/components/Risks";
import { Faqs } from "@/components/Faqs";
import { Privacy, Footer } from "@/components/Closing";
import { ScrollTop } from "@/components/ScrollTop";

function App() {
  return (
    <div className="min-h-screen bg-white text-[#26292e]">
      <Header />
      <Ticker />
      <main>
        <Hero />
        <Modules />
        <UkCompanies />
        <PublicSector />
        <Product />
        <WhyNow />
        <Moat />
        <Market />
        <LegalAndInvest />
        <PartnersAbout />
        <Risks />
        <Faqs />
        <Privacy />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
