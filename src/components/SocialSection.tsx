import { Facebook, Instagram } from "lucide-react";

const SocialSection = () => (
  <section
    id="redes-sociais"
    className="relative overflow-hidden"
    style={{
      background: "linear-gradient(135deg, #22402A 0%, #1a3321 60%, #22402A 100%)",
      borderTop: "1px solid rgba(240,211,123,0.15)",
      borderBottom: "1px solid rgba(240,211,123,0.15)",
    }}
  >
    {/* Decorative glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(214,175,69,0.07) 0%, transparent 100%)",
      }}
    />

    <div className="container relative mx-auto px-6 py-20 text-center max-w-2xl">
      <p
        className="font-body text-xs font-semibold uppercase tracking-[0.2em] mb-4"
        style={{ color: "#D6AF45" }}
      >
        Acompanhe
      </p>
      <h2
        className="font-heading font-bold mb-4"
        style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "#F5EDD8" }}
      >
        Nossas{" "}
        <span className="text-gold-gradient">redes sociais</span>
      </h2>
      <p className="font-body text-base mb-12" style={{ color: "rgba(240,211,123,0.6)" }}>
        Dicas jurídicas, novidades e muito mais — siga-nos nas redes.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-5">
        <a
          href="https://www.facebook.com/VaianaADV/?locale=pt_BR"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-10 py-4 rounded-xl font-body font-semibold tracking-wide transition-all duration-400"
          style={{
            background: "transparent",
            color: "#D6AF45",
            border: "1px solid rgba(214,175,69,0.4)",
            letterSpacing: "0.05em",
            fontSize: "0.9rem",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(214,175,69,0.25)";
            e.currentTarget.style.borderColor = "rgba(214,175,69,0.9)";
            e.currentTarget.style.boxShadow = "0 0 28px rgba(214,175,69,0.35), 0 0 56px rgba(214,175,69,0.12)";
            e.currentTarget.style.color = "#F5E6A3";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "rgba(214,175,69,0.4)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.color = "#D6AF45";
          }}
        >
          <Facebook size={18} />
          Facebook
        </a>
        <a
          href="https://www.instagram.com/vianaadvocaciaba/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-10 py-4 rounded-xl font-body font-semibold tracking-wide transition-all duration-400"
          style={{
            background: "transparent",
            color: "#D6AF45",
            border: "1px solid rgba(214,175,69,0.4)",
            letterSpacing: "0.05em",
            fontSize: "0.9rem",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(214,175,69,0.25)";
            e.currentTarget.style.borderColor = "rgba(214,175,69,0.9)";
            e.currentTarget.style.boxShadow = "0 0 28px rgba(214,175,69,0.35), 0 0 56px rgba(214,175,69,0.12)";
            e.currentTarget.style.color = "#F5E6A3";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "rgba(214,175,69,0.4)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.color = "#D6AF45";
          }}
        >
          <Instagram size={18} />
          Instagram
        </a>
      </div>
    </div>
  </section>
);

export default SocialSection;
