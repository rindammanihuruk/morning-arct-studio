import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    num: "01",
    title: "CONSULTATION",
    subtitle: "Konsultasi & Perencanaan",
    desc: "Konsultasi desain, analisis kelayakan proyek, dan perencanaan anggaran. Kami membantu Anda memahami kebutuhan proyek sejak awal.",
  },
  {
    num: "02",
    title: "DESIGN",
    subtitle: "Desain Arsitektur & Interior",
    desc: "Desain arsitektur, interior, dan pembuatan gambar teknis (DED) yang detail untuk rumah tinggal maupun bangunan komersial.",
  },
  {
    num: "03",
    title: "CONSTRUCTION",
    subtitle: "Pembangunan & Renovasi",
    desc: "Pembangunan rumah tinggal, bangunan komersial, dan renovasi dengan material berkualitas dan pengerjaan profesional di seluruh Sumatera.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-minimal text-muted-foreground mb-4">SERVICES</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">Layanan Kami</h3>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * (i + 1) }}
                className="group border-t border-border pt-8"
              >
                <span className="text-minimal text-muted-foreground font-medium">{s.num}</span>
                <h4 className="text-2xl font-light mt-4 mb-2 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                  {s.title}
                </h4>
                <p className="text-sm font-medium text-muted-foreground mb-4">{s.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
