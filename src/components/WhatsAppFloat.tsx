import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/5577999657852?text=Ol%C3%A1.%20Preciso%20de%20atendimento%20juridico."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar pelo WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full text-white transition-all duration-300 hover:scale-110"
    style={{
      background: "linear-gradient(135deg, #25D366, #1ebe5d)",
      boxShadow: "0 4px 24px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.3)",
    }}
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppFloat;
