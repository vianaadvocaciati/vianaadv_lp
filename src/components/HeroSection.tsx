import { Award, MessageCircle, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-justice.jpg";

const HeroSection = () => (
  <section
    className="relative overflow-hidden min-h-[92vh] flex items-center"
    style={{ background: "linear-gradient(160deg, #0D1A10 0%, #162B1B 50%, #0D1A10 100%)" }}
  >
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Balança da justiça"
        className="w-full h-full object-cover"
        style={{ opacity: 0.12, objectPosition: "center 30%" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(13,26,16,0.97) 0%, rgba(22,43,27,0.88) 50%, rgba(13,26,16,0.97) 100%)",
        }}
      />
    </div>

    {/* Decorative gold orbs */}
    <div
      className="absolute top-1/4 right-0 w-96 h-96 rounded-full pointer-events-none"
      style={{
        background: "radial-gradient(circle, rgba(214,175,69,0.12) 0%, transparent 70%)",
        transform: "translate(30%, -20%)",
      }}
    />
    <div
      className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
      style={{
        background: "radial-gradient(circle, rgba(34,64,42,0.5) 0%, transparent 70%)",
        transform: "translate(-30%, 30%)",
      }}
    />

    {/* Thin gold vertical accent line */}
    <div
      className="absolute left-0 top-0 bottom-0 w-px hidden lg:block"
      style={{ background: "linear-gradient(180deg, transparent, rgba(214,175,69,0.4), transparent)" }}
    />

    <div className="container relative mx-auto px-6 py-20 lg:py-0 grid lg:grid-cols-2 gap-16 items-center">
      {/* Left column — copy */}
      <div className="space-y-8">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-body font-semibold uppercase tracking-widest animate-fade-up"
          style={{
            border: "1px solid rgba(214,175,69,0.3)",
            color: "#D6AF45",
            background: "rgba(214,175,69,0.06)",
          }}
        >
          <Award size={14} />
          Mais de 19 Anos de Atuação
        </div>

        {/* Headline */}
        <h1
          className="font-heading font-bold leading-[1.1] animate-fade-up delay-100"
          style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)", color: "#F5EDD8" }}
        >
          Excelência e tradição{" "}
          <span className="text-gold-gradient">na defesa</span>
          <br />
          do seu direito.
        </h1>

        {/* Subtext */}
        <p
          className="font-body text-lg leading-relaxed max-w-lg animate-fade-up delay-200"
          style={{ color: "rgba(240,211,123,0.6)" }}
        >
          Atuação combativa e estratégica para proteger seu patrimônio, sua família e sua liberdade.
          Sólida presença em{" "}
          <strong style={{ color: "#D6AF45" }}>Carinhanha</strong> e{" "}
          <strong style={{ color: "#D6AF45" }}>Cocos</strong>.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
          <a
            href="https://wa.me/5577999657852?text=Ol%C3%A1.%20Preciso%20de%20atendimento%20juridico."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 rounded-xl font-body font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl glow-gold"
            style={{ background: "linear-gradient(135deg,#F0D37B,#D6AF45,#C89E3F)", color: "#0D1A10" }}
          >
            <MessageCircle size={20} />
            Falar com um Advogado
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-body font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(214,175,69,0.35)",
              color: "#D6AF45",
              background: "rgba(214,175,69,0.06)",
            }}
          >
            Conheça o Escritório
          </a>
        </div>
      </div>

      {/* Right column — image card */}
      <div className="relative hidden lg:block animate-fade-in delay-400">
        <div
          className="relative rounded-2xl overflow-hidden animate-border-glow"
          style={{
            border: "1px solid rgba(214,175,69,0.2)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(240,211,123,0.1)",
          }}
        >
          <img
            src={heroImg}
            alt="Balança da justiça em fórum"
            className="w-full h-[520px] object-cover"
            style={{ filter: "saturate(0.85) contrast(1.05)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(13,26,16,0.85) 0%, transparent 55%)",
            }}
          />
          {/* Floating quote card */}
          <div
            className="absolute bottom-6 left-6 right-6 p-5 rounded-xl glass-card-strong"
          >
            <p className="font-heading text-lg italic" style={{ color: "#F0D37B" }}>
              "Buscamos resolver os problemas de forma ágil e segura."
            </p>
            <p className="font-body text-xs mt-2" style={{ color: "rgba(240,211,123,0.6)" }}>
              — Dr. Wallysson Viana Silva
            </p>
          </div>
        </div>

        {/* Decorative corner accent */}
        <div
          className="absolute -top-3 -right-3 w-20 h-20 rounded-full pointer-events-none animate-float"
          style={{ background: "radial-gradient(circle, rgba(240,211,123,0.2) 0%, transparent 70%)" }}
        />
      </div>
    </div>

    {/* Scroll hint */}
    <a
      href="#sobre"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-fade-in delay-700"
      style={{ color: "rgba(214,175,69,0.5)" }}
    >
      <span className="font-body text-xs tracking-widest uppercase">Saiba mais</span>
      <ChevronDown size={18} className="animate-bounce" />
    </a>
  </section>
);

export default HeroSection;
