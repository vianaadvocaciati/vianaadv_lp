import { MessageCircle } from "lucide-react";

const CtaSection = () => (
  <section
    className="relative overflow-hidden"
    style={{
      background: "linear-gradient(180deg, #0D1A10 0%, #111D14 100%)",
      borderTop: "1px solid rgba(240,211,123,0.18)",
    }}
  >
    {/* Radial glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 70% 100% at 50% 50%, rgba(214,175,69,0.1) 0%, transparent 70%)",
      }}
    />

    <div className="container relative mx-auto px-6 py-16 lg:py-20 text-center max-w-3xl">
      <h2
        className="font-heading font-bold mb-4"
        style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#F5EDD8" }}
      >
        Precisa de{" "}
        <span className="text-gold-gradient">orientação jurídica</span>?
      </h2>
      <p
        className="font-body text-base mb-10 leading-relaxed"
        style={{ color: "rgba(240,211,123,0.6)" }}
      >
        Fale agora com um advogado da nossa equipe. Atendemos presencialmente em
        Carinhanha e Cocos, e também de forma 100% online para todo o Brasil.
      </p>

      <div className="flex justify-center">
        <a
          href="https://wa.me/5577999657852?text=Ol%C3%A1.%20Preciso%20de%20atendimento%20juridico."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl font-body font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl glow-gold"
          style={{
            background: "linear-gradient(135deg, #F0D37B, #D6AF45, #C89E3F)",
            color: "#0D1A10",
          }}
        >
          <MessageCircle size={20} />
          Falar pelo WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default CtaSection;
