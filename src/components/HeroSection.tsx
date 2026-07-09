import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dark-elegant.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-foreground bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-10 bg-clay/70" />
            <span className="text-clay text-minimal">JASA ARSITEKTUR & KONSTRUKSI</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-display text-6xl md:text-8xl lg:text-[9rem] font-light text-primary-foreground text-architectural mb-8"
          >
            Build Your
            <br />
            <span className="italic text-clay-soft">Dream</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/80 font-light tracking-wide max-w-xl mb-10"
          >
            Konsultasi, desain, dan konstruksi berkualitas tinggi di seluruh Sumatera
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="https://wa.me/6281271172937"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-clay text-accent-foreground px-8 py-4 text-minimal hover:bg-clay/90 transition-all shadow-warm hover:shadow-soft hover:-translate-y-0.5"
            >
              <MessageCircle size={16} />
              KONSULTASI GRATIS
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-3 text-primary-foreground/70 text-minimal hover:text-primary-foreground transition-colors"
            >
              LIHAT LAYANAN
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-px h-16 bg-primary-foreground/40" />
        <div className="text-minimal text-primary-foreground/60 mt-4 rotate-90 origin-center">
          SCROLL
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
