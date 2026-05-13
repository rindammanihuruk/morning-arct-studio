import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import IndustrialSplash from "@/components/IndustrialSplash";
import { MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen relative">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <a
          href="https://wa.me/6281271172937"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-clay text-accent-foreground flex items-center justify-center shadow-warm hover:scale-110 transition-transform"
          aria-label="Buka konsultasi WhatsApp"
        >
          <MessageCircle size={22} />
        </a>
        <LeadCaptureModal />
      </div>
    </motion.div>
  );
};

export default Index;
