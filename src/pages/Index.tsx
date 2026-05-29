import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import AreasSection from "@/components/AreasSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UnitsSection from "@/components/UnitsSection";
import FaqSection from "@/components/FaqSection";
import BlogSection from "@/components/BlogSection";
import SocialSection from "@/components/SocialSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <div className="min-h-screen" style={{ background: "#0D1A10" }}>
    <TopBar />
    <Header />
    <HeroSection />
    <TrustBar />
    <AboutSection />
    <TeamSection />
    <AreasSection />
    <TestimonialsSection />
    <UnitsSection />
    <FaqSection />
    {/* <BlogSection /> */}
    <SocialSection />
    <CtaSection />
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Index;
