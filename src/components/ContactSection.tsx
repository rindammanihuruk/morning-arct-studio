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
              <h2 className="text-minimal text-clay mb-4">GET IN TOUCH</h2>
              <h3 className="text-4xl md:text-6xl font-display font-light text-architectural mb-12">
                Mari Wujudkan
                <br />
                <span className="italic text-clay">Proyek Anda</span>
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-4">KONTAK</h4>
                  <div className="space-y-6">
                    <div>
                      <p className="text-lg">Rindam M</p>
                      <a
                        href="https://wa.me/628116314114"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        +62 811 6314 114
                      </a>
                      <a
                        href="mailto:rindammanihuruk@gmail.com"
                        className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        rindammanihuruk@gmail.com
                      </a>
                    </div>
                    <div>
                      <p className="text-lg">Angga T</p>
                      <a
                        href="https://wa.me/6282169994505"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        +62 821 6999 4505
                      </a>
                      <a
                        href="mailto:anggatriandayani@gmail.com"
                        className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        anggatriandayani@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-4">STUDIO</h4>
                  <div className="space-y-4 text-lg not-italic">
                    <address className="not-italic">
                      <span className="text-minimal text-muted-foreground block mb-1">PANGKALAN KERINCI</span>
                      Jl. Pemda Komp. Pesona Kerinci No. 24A
                    </address>
                    <address className="not-italic">
                      <span className="text-minimal text-muted-foreground block mb-1">MEDAN</span>
                      Jl. Penerbangan Komp. Perhubungan No. 2
                    </address>
                    <address className="not-italic">
                      <span className="text-minimal text-muted-foreground block mb-1">DKI JAKARTA</span>
                      Green Pramuka City, Tower Pino 07/MF
                      <br />
                      Jl. Ahmad Yani Kav. 49, Jakarta Pusat
                    </address>
                  </div>
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
                  <a
                    href="https://instagram.com/morning_arct.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xl hover:text-muted-foreground transition-colors duration-300"
                  >
                    Instagram — @morning_arct.studio
                  </a>
                </div>
              </div>
              <div className="pt-12 border-t border-border">
                <p className="text-muted-foreground mb-6">
                  Setiap proyek kami mulai dari mendengarkan, memahami visi Anda, dan menerjemahkannya menjadi ruang yang melebihi ekspektasi.
                </p>
                <a
                  href="https://wa.me/628116314114?text=Halo%20MORNING%20ARCT%20STUDIO%2C%20saya%20tertarik%20untuk%20konsultasi%20proyek."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-clay text-accent-foreground px-8 py-4 text-minimal hover:bg-clay/90 transition-all shadow-warm hover:-translate-y-0.5"
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
