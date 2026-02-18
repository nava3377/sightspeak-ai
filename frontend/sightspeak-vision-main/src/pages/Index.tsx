import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowToUseSection from "@/components/HowToUseSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import TeamSection from "@/components/TeamSection";
import ScopeSection from "@/components/ScopeSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowToUseSection />
      <FeaturesSection />
      <DemoSection />
      <TeamSection />
      <ScopeSection />
      <FooterSection />
    </div>
  );
};

export default Index;
