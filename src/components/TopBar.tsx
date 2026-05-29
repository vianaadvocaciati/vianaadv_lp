import { MapPin, Mail, Phone } from "lucide-react";

const TopBar = () => (
  <div className="hidden lg:block" style={{ background: "hsl(138,32%,5%)", borderBottom: "1px solid rgba(214,175,69,0.15)" }}>
    <div className="container mx-auto px-6 py-2 flex items-center justify-between font-body text-xs" style={{ color: "rgba(240,211,123,0.75)" }}>
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-1.5">
          <MapPin size={12} className="shrink-0" style={{ color: "#D6AF45" }} />
          Carinhanha e Cocos, BA
        </span>
        <span className="flex items-center gap-1.5">
          <Mail size={12} className="shrink-0" style={{ color: "#D6AF45" }} />
          wally.viana@hotmail.com
        </span>
      </div>
      <span className="flex items-center gap-1.5">
        <Phone size={12} className="shrink-0" style={{ color: "#D6AF45" }} />
        Atendimento: (77) 99965-7852
      </span>
    </div>
  </div>
);

export default TopBar;
