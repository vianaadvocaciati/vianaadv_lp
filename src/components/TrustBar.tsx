const stats = [
  { value: "Atendimento Online", label: "Para todo o Brasil" },
  { value: "2 Unidades", label: "Cocos e Carinhanha" },
  { value: "Causas complexas com excelência", label: "" },
];

const TrustBar = () => (
  <section
    className="relative overflow-hidden"
    style={{
      background: "linear-gradient(135deg, #22402A 0%, #1a3321 50%, #22402A 100%)",
      borderTop: "1px solid rgba(240,211,123,0.18)",
      borderBottom: "1px solid rgba(240,211,123,0.18)",
    }}
  >
    {/* Subtle pattern */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(214,175,69,0.06) 0%, transparent 70%)",
      }}
    />
    <div className="container relative mx-auto px-6 py-10 grid md:grid-cols-3 gap-0">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="flex flex-col items-center text-center py-4 group"
          style={{
            borderRight: i < stats.length - 1 ? "1px solid rgba(240,211,123,0.12)" : "none",
          }}
        >
          <p
            className="font-heading font-bold text-3xl lg:text-4xl text-gold-gradient leading-tight"
          >
            {s.value}
          </p>
          <p
            className="font-body text-sm mt-1 uppercase tracking-widest"
            style={{ color: "rgba(240,211,123,0.55)" }}
          >
            {s.label}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default TrustBar;
