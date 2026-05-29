import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logoViana from "@/assets/logo-viana.png";

const navLinks = [
  { label: "O Escritório", href: "#sobre" },
  { label: "Equipe", href: "#equipe" },
  { label: "Áreas", href: "#areas" },
  { label: "Unidades", href: "#unidades" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(13,26,16,0.92)"
          : "rgba(13,26,16,0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(214,175,69,0.15)",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" aria-label="Viana Advocacia">
          <img
            src={logoViana}
            alt="Viana Advocacia"
            className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            style={{
              filter: 'brightness(1.15) saturate(1.3) drop-shadow(0 2px 6px rgba(214,175,69,0.35))',
            }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative font-body text-sm font-medium tracking-wide transition-colors duration-200 group"
              style={{ color: "rgba(240,211,123,0.8)" }}
            >
              <span className="group-hover:text-[#F0D37B] transition-colors duration-200">{l.label}</span>
              <span
                className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ background: "linear-gradient(90deg,#F0D37B,#C89E3F)" }}
              />
            </a>
          ))}
        </nav>

        {/* CTA button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/5577999657852?text=Ol%C3%A1.%20Preciso%20de%20atendimento%20juridico."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-body text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{
              background: "linear-gradient(135deg,#D6AF45,#C89E3F)",
              color: "#0D1A10",
            }}
          >
            <MessageCircle size={15} />
            Falar com Advogado
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden transition-colors duration-200"
          style={{ color: "#F0D37B" }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-4 space-y-4 animate-fade-up"
          style={{
            background: "rgba(13,26,16,0.97)",
            borderTop: "1px solid rgba(214,175,69,0.1)",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-body text-base font-medium py-2 transition-colors duration-200 hover:text-[#F0D37B]"
              style={{ color: "rgba(240,211,123,0.75)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5577999657852?text=Ol%C3%A1.%20Preciso%20de%20atendimento%20juridico."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer flex items-center justify-center gap-2 w-full py-3 rounded-lg font-body font-semibold text-sm mt-2"
            style={{ background: "linear-gradient(135deg,#D6AF45,#C89E3F)", color: "#0D1A10" }}
          >
            <MessageCircle size={16} />
            Falar com Advogado
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
