export const Section = ({ id, label, labelColor = "text-[#00996f]", title, intro, note, children, tint }) => (
  <section
    id={id}
    data-testid={`section-${id}`}
    className={`scroll-mt-32 border-b border-[#e4e7ea] py-14 sm:py-20 ${tint || "bg-white"}`}
  >
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
      {label && (
        <p className={`mb-2 text-[12px] font-bold tracking-[0.14em] ${labelColor}`}>{label}</p>
      )}
      <h2 className="text-[26px] font-bold tracking-tight text-[#26292e] sm:text-[30px]">
        {title}
      </h2>
      {intro && <p className="mt-3 max-w-[680px] text-[15px] text-[#4b5058]">{intro}</p>}
      <div className="mt-10">{children}</div>
      {note && <p className="mt-6 text-[12px] italic text-[#767c85]">{note}</p>}
    </div>
  </section>
);
