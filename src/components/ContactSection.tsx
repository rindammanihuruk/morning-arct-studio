import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto" ref={ref}>
          <div className="grid md:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-minimal text-muted-foreground mb-4">GET IN TOUCH</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Mari Wujudkan
                <br />
                Proyek Anda
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">WHATSAPP</h4>
                  <a
                    href="https://wa.me/628116314114"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl hover:text-muted-foreground transition-colors duration-300"
                  >
                    +62 811 631 4114
                  </a>
                </div>
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">EMAIL</h4>
                  <a
                    href="mailto:hello@archstudio.id"
                    className="text-xl hover:text-muted-foreground transition-colors duration-300"
                  >
                    hello@archstudio.id
                  </a>
                </div>
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">STUDIO</h4>
                  <address className="text-xl not-italic">
                    Jl. Gatot Subroto No. 88
                    <br />
                    Medan, Sumatera Utara 20112
                  </address>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">IKUTI KAMI</h4>
                <div className="space-y-4">
                  <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                    Instagram
                  </a>
                  <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="pt-12 border-t border-border">
                <p className="text-muted-foreground mb-6">
                  Setiap proyek kami mulai dari mendengarkan, memahami visi Anda, dan menerjemahkannya menjadi ruang yang melebihi ekspektasi.
                </p>
                <a
                  href="https://wa.me/628116314114?text=Halo%20ARCH%20STUDIO%2C%20saya%20tertarik%20untuk%20konsultasi%20proyek."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-foreground text-background px-8 py-4 text-minimal hover:opacity-80 transition-opacity"
                >
                  KONSULTASI VIA WHATSAPP
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
