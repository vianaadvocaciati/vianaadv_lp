import { useState } from "react";
import { MapPin, Phone, Navigation } from "lucide-react";

const units = [
  {
    id: "carinhanha",
    label: "Carinhanha",
    address: "R. do Livramento, 69 - Centro, Carinhanha - BA, 46445-000",
    phone: "(77) 99965-7852",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.0!2d-43.764!3d-14.303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDE4JzEwLjgiUyA0M8KwNDUnNTAuNCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000",
    gps: "https://maps.google.com/?q=R.+do+Livramento,+69+-+Centro,+Carinhanha+-+BA",
  },
  {
    id: "cocos",
    label: "Cocos",
    address: "R. Moisés Alves de Moura, 33 - Centro, Cocos - BA, 47680-000",
    phone: "(77) 3489-1592",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.0!2d-44.535!3d-14.182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDEwJzU1LjIiUyA0NMKwMzInMDYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000001",
    gps: "https://maps.google.com/?q=R.+Mois%C3%A9s+Alves+de+Moura,+33+-+Centro,+Cocos+-+BA",
  },
];

const UnitsSection = () => {
  const [active, setActive] = useState(0);
  const unit = units[active];

  return (
    <section
      id="unidades"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0D1A10 0%, #111D14 100%)" }}
    >
      <div className="divider-gold absolute top-0 left-0 right-0" style={{ opacity: 0.2 }} />
      <div className="container relative mx-auto px-6 py-20 lg:py-28">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <p
            className="font-body text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#D6AF45" }}
          >
            Nossas Unidades
          </p>
          <h2
            className="font-heading font-bold"
            style={{ fontSize: "clamp(1.9rem,3.5vw,2.8rem)", color: "#F5EDD8" }}
          >
            Encontre-nos em{" "}
            <span className="text-gold-gradient">dois endereços</span>
          </h2>
          <div className="divider-gold w-16 mx-auto" style={{ opacity: 0.6 }} />
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center gap-3 mb-10">
          {units.map((u, i) => (
            <button
              key={u.id}
              onClick={() => setActive(i)}
              className="px-7 py-3 rounded-xl font-body text-sm font-semibold transition-all duration-250"
              style={
                active === i
                  ? {
                      background: "linear-gradient(135deg,#D6AF45,#C89E3F)",
                      color: "#0D1A10",
                      boxShadow: "0 4px 20px rgba(140,102,34,0.35)",
                    }
                  : {
                      background: "rgba(34,64,42,0.35)",
                      color: "rgba(240,211,123,0.65)",
                      border: "1px solid rgba(214,175,69,0.15)",
                    }
              }
            >
              {u.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Info card */}
          <div
            className="rounded-2xl p-8 space-y-5"
            style={{
              background: "rgba(34,64,42,0.3)",
              border: "1px solid rgba(214,175,69,0.15)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
            }}
          >
            <h3 className="font-heading text-2xl font-bold" style={{ color: "#F5EDD8" }}>
              {unit.label}
            </h3>

            <p className="flex items-start gap-3 font-body text-sm" style={{ color: "rgba(240,211,123,0.7)" }}>
              <MapPin size={18} className="shrink-0 mt-0.5" style={{ color: "#D6AF45" }} />
              {unit.address}
            </p>
            <p className="flex items-center gap-3 font-body text-sm" style={{ color: "rgba(240,211,123,0.7)" }}>
              <Phone size={18} className="shrink-0" style={{ color: "#D6AF45" }} />
              {unit.phone}
            </p>

            <a
              href={unit.gps}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body text-sm font-semibold transition-all duration-300 hover:scale-105 mt-2"
              style={{
                background: "linear-gradient(135deg,#D6AF45,#C89E3F)",
                color: "#0D1A10",
                boxShadow: "0 4px 16px rgba(140,102,34,0.3)",
              }}
            >
              <Navigation size={15} />
              Abrir no GPS
            </a>
          </div>

          {/* Map */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              height: "340px",
              border: "1px solid rgba(214,175,69,0.15)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
            }}
          >
            <iframe
              key={unit.id}
              title={`Mapa ${unit.label}`}
              src={unit.mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.6) brightness(0.85)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitsSection;
