import { useEffect, useState } from "react";

export const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    document.getElementById("top")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      data-testid="scroll-top-button"
      aria-label="Back to top"
      title="Back to top"
      onClick={toTop}
      style={{ display: visible ? "flex" : "none" }}
      className="fixed bottom-6 right-6 z-50 h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-[rgba(18,18,18,0.35)] text-xl text-white backdrop-blur-md hover:bg-[rgba(18,18,18,0.65)]"
    >
      ↑
    </button>
  );
};
