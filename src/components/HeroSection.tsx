import { motion } from "framer-motion";
import { Building2, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-clay/90 text-accent-foreground text-minimal mb-8 shadow-soft"
        >
          <Building2 size={14} />
          <span>JASA ARSITEKTUR & KONSTRUKSI</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-display text-6xl md:text-8xl lg:text-[10rem] font-light text-primary-foreground text-architectural mb-8"
        >
          Build Your
          <br />
          <span className="italic text-clay-soft">Dream</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-primary-foreground/85 font-light tracking-wide max-w-2xl mx-auto mb-10"
        >
          Konsultasi, desain, dan konstruksi berkualitas tinggi di seluruh Sumatera
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          href="https://wa.me/6281271172937"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-clay text-accent-foreground px-8 py-4 text-minimal hover:bg-clay/90 transition-all shadow-warm hover:shadow-soft hover:-translate-y-0.5"
        >
          <MessageCircle size={16} />
          KONSULTASI GRATIS VIA WHATSAPP
        </motion.a>
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
