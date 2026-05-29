import { CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-desk.jpg";

const checks = [
  "Atendimento humanizado e transparente",
  "Atuação combativa nos tribunais e delegacias",
  "Acompanhamento contínuo do seu processo",
];

const AboutSection = () => (
  <section
    id="sobre"
    className="relative overflow-hidden"
    style={{ background: "linear-gradient(180deg, #0D1A10 0%, #111D14 100%)" }}
  >
    {/* Decorative gold glow top-right */}
    <div
      className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
      style={{
        background: "radial-gradient(circle, rgba(214,175,69,0.06) 0%, transparent 70%)",
        transform: "translate(20%, -20%)",
      }}
    />

    <div className="container relative mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">
      {/* Left — image */}
      <div className="relative order-2 lg:order-1 animate-slide-left">
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(214,175,69,0.15)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.55)",
          }}
        >
          <img
            src={aboutImg}
            alt="Mesa de advogado com documentos"
            width={640}
            height={512}
            loading="lazy"
            className="w-full h-auto object-cover"
            style={{ filter: "saturate(0.8) brightness(0.9)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(13,26,16,0.7) 0%, transparent 50%)" }}
          />
        </div>

        {/* Gold accent badge */}
        <div
          className="absolute -bottom-5 -right-5 px-6 py-4 rounded-xl font-body text-sm font-semibold glow-gold animate-float"
          style={{
            background: "linear-gradient(135deg, #D6AF45, #C89E3F)",
            color: "#0D1A10",
            boxShadow: "0 8px 32px rgba(140,102,34,0.4)",
          }}
        >
          Viana Advocacia
        </div>
      </div>

      {/* Right — copy */}
      <div className="space-y-7 order-1 lg:order-2 animate-slide-right">
        <p
          className="font-body text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "#D6AF45" }}
        >
          Sobre o Escritório
        </p>

        <h2
          className="font-heading font-bold leading-tight"
          style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#F5EDD8" }}
        >
          Compromisso com a{" "}
          <span className="text-gold-gradient">defesa</span>{" "}
          dos seus direitos
        </h2>

        <p className="font-body text-base leading-relaxed" style={{ color: "rgba(240,211,123,0.65)" }}>
          Fundado e liderado pelo{" "}
          <strong style={{ color: "#F0D37B" }}>Dr. Wallysson Viana Silva</strong>, o escritório Viana
          Advocacia é referência em advocacia estratégica na Bahia. Com atuação firme e ética,
          oferecemos atendimento especializado e focado em resultados para pessoas físicas e jurídicas.
        </p>

        {/* Divider */}
        <div className="divider-gold w-16" />

        <ul className="space-y-4">
          {checks.map((c) => (
            <li key={c} className="flex items-start gap-3 font-body text-sm" style={{ color: "rgba(240,211,123,0.8)" }}>
              <CheckCircle2
                size={18}
                className="shrink-0 mt-0.5"
                style={{ color: "#D6AF45" }}
              />
              {c}
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/5577999657852?text=Ol%C3%A1.%20Preciso%20de%20atendimento%20juridico."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-body font-semibold text-sm transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg,#D6AF45,#C89E3F)",
            color: "#0D1A10",
            boxShadow: "0 4px 20px rgba(140,102,34,0.3)",
          }}
        >
          Agende uma consulta
        </a>
      </div>
    </div>
  </section>
);

export default AboutSection;
