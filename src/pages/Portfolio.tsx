import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectsGrid from "@/components/ProjectsGrid";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProgressGallery from "@/components/ProgressGallery";
import InspirationGallery from "@/components/InspirationGallery";
import ContactSection from "@/components/ContactSection";

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen relative bg-background">
        <Navbar />

        {/* Page header */}
        <header className="pt-40 pb-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-minimal text-muted-foreground mb-4"
              >
                PORTOFOLIO
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-7xl font-light text-architectural mb-6"
              >
                Our Work
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-2xl text-lg text-muted-foreground leading-relaxed"
              >
                Koleksi proyek arsitektur dan konstruksi kami di seluruh Sumatera,
                dilengkapi estimasi biaya material untuk setiap desain.
              </motion.p>
            </div>
          </div>
        </header>

        <ProjectsGrid />
        <FeaturedProjects />
        <ProgressGallery />
        <InspirationGallery />
        <ContactSection />

        <a
          href="https://wa.me/6281271172937"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Buka konsultasi WhatsApp"
        >
          <MessageCircle size={22} />
        </a>
      </div>
    </motion.div>
  );
};

export default Portfolio;
