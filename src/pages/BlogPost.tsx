import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import { articles } from "@/data/articles";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const BlogPost = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0D1A10" }}>
      <TopBar />
      <Header />
      
      <main className="flex-1 pb-24">
        {/* Hero do Artigo */}
        <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${article.imageUrl})` }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0D1A10 0%, rgba(13,26,16,0.85) 50%, #0D1A10 100%)" }} />
          
          <div className="container relative mx-auto px-6 max-w-4xl">
            <Link to="/#blog" className="inline-flex items-center gap-2 text-[#D6AF45] font-body text-sm font-semibold hover:text-[#F0D37B] transition-colors mb-8">
              <ArrowLeft size={16} /> Voltar para a página inicial
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#D6AF45] text-black">
                <Tag size={12} /> {article.category}
              </div>
              <div className="flex items-center gap-2 text-[#A3B3A7] font-body text-sm font-semibold tracking-wide">
                <User size={14} className="text-[#D6AF45]" /> {article.author}
              </div>
              <div className="flex items-center gap-2 text-[#A3B3A7] font-body text-sm font-semibold tracking-wide">
                <Calendar size={14} className="text-[#D6AF45]" /> {article.date}
              </div>
            </div>
            
            <h1 className="font-heading font-bold text-[#FFFFFF] leading-[1.15]" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              {article.title}
            </h1>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <div className="container mx-auto px-6 max-w-3xl">
          <div 
            className="prose prose-invert prose-lg max-w-none"
            style={{ 
              color: "#D1D5DB",
              fontFamily: "'Inter', sans-serif"
            }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          {/* CTA no fim do artigo */}
          <div className="mt-20 p-8 md:p-12 rounded-3xl flex flex-col sm:flex-row items-center gap-8 justify-between relative overflow-hidden" 
               style={{ 
                 background: "rgba(13, 26, 16, 0.95)", 
                 border: "1px solid rgba(214,175,69,0.2)",
                 boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
               }}>
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D6AF45] opacity-5 blur-[100px] pointer-events-none" />

            <div className="relative z-10 text-center sm:text-left">
              <h3 className="font-heading font-bold text-2xl text-white mb-3">Precisa de orientação sobre o seu caso?</h3>
              <p className="font-body text-[#A3B3A7] text-sm md:text-base">Nossa equipe é especialista neste assunto e está pronta para analisar seus direitos de forma sigilosa.</p>
            </div>
            <a 
              href="https://wa.me/5577999657852?text=Ol%C3%A1.%20Preciso%20de%20atendimento%20juridico."
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 whitespace-nowrap px-8 py-4 rounded-xl font-body font-bold text-black text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D6AF45]/20"
              style={{ background: "linear-gradient(135deg, #F0D37B, #C89E3F)" }}
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default BlogPost;
