import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Welton Nogueira",
    text: "Parabéns ao escritório Viana Advocacia por ser um destaque em Carinhanha e toda a região! Sua dedicação e expertise em fornecer serviços jurídicos de alta qualidade são verdadeiramente inspiradores. É um privilégio ter profissionais tão comprometidos e qualificados à disposição da população.",
  },
  {
    name: "Caio Gracco",
    text: "Excelente Escritório de Advocacia! Experiência incrível do início ao fim. Profissionais altamente capacitados, comprometidos em oferecer um atendimento personalizado e atento a cada detalhe. Demonstram um profundo conhecimento jurídico, explicando com clareza e transparência todos os passos do processo. Recomendo sem hesitar para qualquer pessoa que busque uma assessoria jurídica de excelência e um acompanhamento humanizado!",
  },
  {
    name: "Debora Tavares",
    text: "Agradeço profundamente ao Advogado Wallysson Viana Silva por ter alcançado um resultado favorável ao meu caso. Terei o prazer em recomendar seus serviços a outras pessoas que possam precisar de assistência jurídica. Obrigada pelo seu trabalho de excelência, e também o de toda a equipe!",
  },
  {
    name: "Lucas Alkmim",
    text: "Grande escritório, só tenho a agradecer pela atenção, excelente serviço, transparência e honestidade.",
  },
  {
    name: "Zilmene Souza",
    text: "O Wallysson Viana Silva é um advogado com excelente capacidade técnica, presteza no atendimento e muito cuidadoso no acompanhamento de seus processos. Super recomendo.",
  },
  {
    name: "Jaisa Brito",
    text: "Dr. Wallysson Viana, um profissional de excelência, honesto e íntegro, que inspira confiança e seriedade no exercício de sua profissão.",
  },
  {
    name: "Anelton Santos",
    text: "Recomendo, serviço de qualidade e profissionalismo.",
  },
  {
    name: "Mile Pereira",
    text: "Excelente profissional, super indico.",
  },
];

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Viana+Advocacia,+Carinhanha+-+BA";

const TestimonialsSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveIdx(idx);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((activeIdx + 1) % testimonials.length);
  }, [activeIdx, goTo]);

  const prev = useCallback(() => {
    goTo((activeIdx - 1 + testimonials.length) % testimonials.length);
  }, [activeIdx, goTo]);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #111D14 0%, #0D1A10 100%)" }}
    >
      <div className="divider-gold absolute top-0 left-0 right-0" style={{ opacity: 0.2 }} />

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(214,175,69,0.06) 0%, transparent 75%)" }}
      />

      <div className="container relative mx-auto px-6 py-20 lg:py-28">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <p
            className="font-body text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#D6AF45" }}
          >
            Depoimentos
          </p>
          <h2
            className="font-heading font-bold"
            style={{ fontSize: "clamp(1.9rem,3.5vw,2.8rem)", color: "#F5EDD8" }}
          >
            O que nossos clientes{" "}
            <span className="text-gold-gradient">dizem</span>
          </h2>
          <div className="divider-gold w-16 mx-auto" style={{ opacity: 0.6 }} />
        </div>

        {/* Google Rating Badge */}
        <div className="flex justify-center mb-14">
          <div
            className="inline-flex items-center gap-5 px-8 py-5 rounded-2xl"
            style={{
              background: "rgba(34,64,42,0.35)",
              border: "1px solid rgba(214,175,69,0.2)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.3), 0 0 24px rgba(214,175,69,0.06)",
            }}
          >
            <svg viewBox="0 0 24 24" width="28" height="28" className="shrink-0">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-3xl" style={{ color: "#F0D37B" }}>
                  5.0
                </span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F0D37B" strokeWidth={0} style={{ color: "#F0D37B" }} />
                  ))}
                </div>
              </div>
              <p className="font-body text-xs mt-0.5" style={{ color: "rgba(240,211,123,0.55)" }}>
                
              </p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-14 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: "rgba(34,64,42,0.5)",
              border: "1px solid rgba(214,175,69,0.25)",
              color: "#D6AF45",
            }}
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-14 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: "rgba(34,64,42,0.5)",
              border: "1px solid rgba(214,175,69,0.25)",
              color: "#D6AF45",
            }}
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={20} />
          </button>

          {/* Card */}
          <div className="overflow-hidden">
            <div
              className="relative rounded-2xl px-8 py-10 md:px-12 md:py-12 min-h-[280px] flex flex-col justify-center"
              style={{
                background: "rgba(34,64,42,0.35)",
                border: "1px solid rgba(214,175,69,0.2)",
                boxShadow: "0 8px 48px rgba(0,0,0,0.35), 0 0 24px rgba(214,175,69,0.06)",
              }}
            >
              {/* Quote icon */}
              <Quote
                size={48}
                className="absolute top-6 right-8 opacity-[0.08]"
                style={{ color: "#D6AF45" }}
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill="#D6AF45" strokeWidth={0} style={{ color: "#D6AF45" }} />
                ))}
              </div>

              {/* Testimonial text with fade transition */}
              <div className="relative transition-all duration-500">
                {testimonials.map((t, i) => (
                  <p
                    key={t.name}
                    className="font-body text-base md:text-lg leading-relaxed italic transition-all duration-500"
                    style={{
                      position: activeIdx === i ? "relative" : "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      color: "rgba(240,211,123,0.75)",
                      opacity: activeIdx === i ? 1 : 0,
                      transform: activeIdx === i ? "translateY(0)" : "translateY(12px)",
                      pointerEvents: activeIdx === i ? "auto" : "none",
                    }}
                  >
                    "{t.text}"
                  </p>
                ))}
              </div>

              {/* Author with fade transition */}
              <div className="mt-8 relative" style={{ minHeight: "48px" }}>
                {testimonials.map((t, i) => (
                  <div
                    key={t.name + "-author"}
                    className="flex items-center gap-3 absolute inset-0 transition-all duration-500"
                    style={{
                      opacity: activeIdx === i ? 1 : 0,
                      transform: activeIdx === i ? "translateY(0)" : "translateY(8px)",
                    }}
                  >
                    {/* Avatar */}
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center font-heading font-bold text-sm shrink-0"
                      style={{
                        background: "rgba(214,175,69,0.15)",
                        border: "1px solid rgba(214,175,69,0.3)",
                        color: "#D6AF45",
                      }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold" style={{ color: "#F5EDD8" }}>
                        {t.name}
                      </p>
                      <p className="font-body text-xs" style={{ color: "rgba(240,211,123,0.4)" }}>
                        Avaliação no Google
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: activeIdx === i ? "28px" : "8px",
                  height: "8px",
                  background:
                    activeIdx === i
                      ? "linear-gradient(90deg, #F0D37B, #D6AF45)"
                      : "rgba(214,175,69,0.2)",
                }}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA to Google Reviews */}
        <div className="text-center mt-12">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-body text-sm font-semibold transition-all duration-300 hover:scale-105 hover:gap-3"
            style={{
              border: "1px solid rgba(214,175,69,0.35)",
              color: "#D6AF45",
              background: "rgba(214,175,69,0.06)",
            }}
          >
            Ver todas as avaliações no Google
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
