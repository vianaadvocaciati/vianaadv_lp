import { ArrowRight, Calendar, ChevronRight, Tag, User } from "lucide-react";

import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 relative overflow-hidden" style={{ background: "#0D1A10" }}>
      {/* Premium Background Elements */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-40"
        style={{ 
          background: "radial-gradient(circle, rgba(214,175,69,0.06) 0%, transparent 60%)",
          transform: "translate(20%, -30%)"
        }}
      />

      <div className="container relative mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-body font-bold uppercase tracking-widest mb-6" 
                  style={{ background: "rgba(214,175,69,0.1)", color: "#D6AF45", border: "1px solid rgba(214,175,69,0.2)" }}>
              Artigos Jurídicos
            </span>
            <h2 
              className="font-heading font-bold"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "#FFFFFF", lineHeight: 1.15 }}
            >
              Informação de valor para <br className="hidden md:block" />
              <span className="text-gold-gradient">proteger seus direitos</span>
            </h2>
          </div>
          
          <a 
            href="#"
            className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-body text-sm font-bold uppercase tracking-wide transition-all duration-300"
            style={{ 
              background: "transparent",
              border: "1px solid rgba(214,175,69,0.3)",
              color: "#F0D37B"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(214,175,69,0.08)";
              e.currentTarget.style.border = "1px solid rgba(214,175,69,0.5)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.border = "1px solid rgba(214,175,69,0.3)";
            }}
          >
            Acessar o Blog
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Grid de Artigos - Mais espaçado e legível */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((article) => (
            <Link 
              to={`/blog/${article.id}`}
              key={article.id}
              className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 focus:outline-none focus:ring-2 focus:ring-[#D6AF45] focus:ring-offset-4 focus:ring-offset-[#0D1A10]"
              style={{ 
                background: "#132317", // Contraste superior ao fundo da página
                border: "1px solid rgba(214, 175, 69, 0.15)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
              }}
              aria-label={`Ler artigo: ${article.title}`}
            >
              {/* Imagem com Aspect Ratio perfeito */}
              <div className="relative aspect-[16/10] overflow-hidden w-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${article.imageUrl})` }}
                />
                {/* Overlay gradiente escuro para garantir que não haja "estouro" de luz e melhorar o contraste das bordas */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(19, 35, 23, 1))" }} />
                
                {/* Badge da Categoria - Super legível */}
                <div 
                  className="absolute top-5 left-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest"
                  style={{ 
                    background: "#D6AF45", 
                    color: "#000000",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
                  }}
                >
                  <Tag size={12} strokeWidth={2.5} />
                  {article.category}
                </div>
              </div>

              {/* Corpo do Conteúdo - Muito mais contraste */}
              <div className="p-8 flex-1 flex flex-col relative z-10">
                <div className="flex flex-wrap items-center gap-4 mb-5">
                  <div className="flex items-center gap-1.5">
                    <User size={14} style={{ color: "#D6AF45" }} />
                    <span className="font-body text-xs font-semibold tracking-wide" style={{ color: "#A3B3A7" }}>
                      {article.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} style={{ color: "#D6AF45" }} />
                    <span className="font-body text-xs font-semibold tracking-wide" style={{ color: "#A3B3A7" }}>
                      {article.date}
                    </span>
                  </div>
                </div>

                <h3 
                  className="font-heading font-bold text-[22px] mb-4 leading-[1.3] transition-colors duration-300 group-hover:text-[#F0D37B]"
                  style={{ color: "#FFFFFF" }}
                >
                  {article.title}
                </h3>
                
                {/* Cor do parágrafo bem mais clara (E5E7EB - Gray 200) para acessibilidade (leitura sem esforço) */}
                <p className="font-body text-[15px] leading-relaxed mb-8 flex-1" style={{ color: "#D1D5DB" }}>
                  {article.excerpt}
                </p>

                {/* Link "Ler mais" estilo botão nativo */}
                <div className="mt-auto border-t pt-5 flex items-center justify-between" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                  <span 
                    className="font-body text-sm font-bold uppercase tracking-widest transition-colors duration-300"
                    style={{ color: "#F0D37B" }}
                  >
                    Ler Artigo
                  </span>
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#D6AF45]"
                    style={{ background: "rgba(214,175,69,0.1)" }}
                  >
                    <ChevronRight size={18} className="text-[#D6AF45] group-hover:text-black transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
