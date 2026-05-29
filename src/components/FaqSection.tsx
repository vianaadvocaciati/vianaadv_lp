import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como funciona a primeira consulta?",
    answer: "Nossa primeira consulta tem como objetivo entender os detalhes do seu caso. Avaliamos a documentação e apresentamos as melhores estratégias jurídicas disponíveis.",
  },
  {
    question: "Quais são as áreas de atuação do escritório?",
    answer: "Atuamos nas áreas de direito previdenciário, família e sucessões, civil e imobiliário, trabalhista, criminal, eleitoral e público. Nossa equipe multidisciplinar está pronta para lhe atender.",
  },
  {
    question: "Quais documentos preciso levar no primeiro atendimento?",
    answer: "Sugerimos trazer documentos de identificação básica (RG/CPF, comprovante de residência) e todos os papéis relacionados ao seu caso (contratos, conversas, notificações, etc).",
  },
  {
    question: "Vocês atendem clientes de outras cidades ou estados?",
    answer: "Sim! Trabalhamos com processos eletrônicos e oferecemos reuniões e acompanhamento 100% online para clientes que não podem comparecer presencialmente à nossa unidade.",
  },
  {
    question: "Qual o tempo médio de um processo?",
    answer: "O tempo de duração de um processo pode variar amplamente, dependendo da sua complexidade e da agilidade do tribunal. Durante o atendimento, forneceremos uma estimativa realista com base na nossa experiência.",
  },
  {
    question: "Como posso acompanhar o meu processo?",
    answer: "Enviaremos atualizações constantes via WhatsApp e e-mail sempre que houver movimentações relevantes no seu caso. Nossa equipe estará sempre à disposição para tirar dúvidas.",
  },
];

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #111D14 0%, #0D1A10 100%)" }}
    >
      <div className="divider-gold absolute top-0 left-0 right-0" style={{ opacity: 0.2 }} />
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(34,64,42,0.5) 0%, transparent 75%)" }}
      />

      <div className="container relative mx-auto px-6 py-20 lg:py-28 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <p
            className="font-body text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#D6AF45" }}
          >
            Dúvidas Comuns
          </p>
          <h2
            className="font-heading font-bold"
            style={{ fontSize: "clamp(1.9rem,3.5vw,2.8rem)", color: "#F5EDD8" }}
          >
            Perguntas{" "}
            <span className="text-gold-gradient">Frequentes</span>
          </h2>
          <div className="divider-gold w-16 mx-auto" style={{ opacity: 0.6 }} />
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  border: isOpen ? "1px solid rgba(214,175,69,0.3)" : "1px solid rgba(214,175,69,0.1)",
                  background: isOpen ? "rgba(34,64,42,0.45)" : "rgba(34,64,42,0.2)",
                  boxShadow: isOpen ? "0 4px 24px rgba(0,0,0,0.25), 0 0 16px rgba(214,175,69,0.08)" : "none",
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-body font-medium text-base leading-snug"
                    style={{ color: isOpen ? "#F0D37B" : "#F5EDD8" }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 transition-transform duration-300"
                    style={{
                      color: "#D6AF45",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>

                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "500px" : "0px" }}
                >
                  <p
                    className="px-6 pb-5 font-body text-sm leading-relaxed"
                    style={{ color: "rgba(240,211,123,0.65)" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
