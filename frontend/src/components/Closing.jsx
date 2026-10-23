export const Footer = () => (
  <footer className="bg-[#f8fafc] border-t border-[#e4e7ea] py-16">
    <div className="mx-auto max-w-[1100px] px-4 text-center sm:px-6 flex flex-col items-center gap-6">
      
      {/* 🖼️ High-Fidelity Large Brand Asset Alignment */}
      <div className="w-full max-w-[340px] pb-4 border-b border-gray-200/60 flex justify-center">
        <img 
          className="w-full h-auto object-contain mx-auto" 
          src="/vsmecap_logo_transparent_800.png" 
          alt="VSMECAP Primary Corporate Branding" 
        />
      </div>

      {/* Corporate Metadata Footprint */}
      <div className="text-[12px] text-[#767c85] space-y-1">
        <p className="font-semibold text-gray-700">VSMECAP — Audit-Ready Sustainability Pipelines</p>
        <p>© {new Date().getFullYear()} VSMECAP. All rights reserved. Registered framework mappings.</p>
      </div>
    </div>
  </footer>
);

export const Privacy = () => (
  <section id="privacy" className="bg-white py-10 border-t border-gray-100">
    <div className="mx-auto max-w-[1100px] px-4 text-center text-[12px] text-gray-400">
      <p>Data processing mappings remain structured under the technical definitions of Recommendation (EU) 2025/1710.</p>
    </div>
  </section>
);
