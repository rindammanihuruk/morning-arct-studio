import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Users, Lightbulb, Info, Compass, Calendar, Hammer, MapPin } from "lucide-react";

const approaches = [
  { icon: Search, title: "Riset & Analisis", desc: "Memahami konteks lokasi, budaya, dan kebutuhan klien secara mendalam" },
  { icon: Users, title: "Kolaborasi", desc: "Kemitraan erat dengan klien, insinyur, dan tukang berpengalaman" },
  { icon: Lightbulb, title: "Inovasi", desc: "Material berkualitas dan solusi desain yang efisien dan berkelanjutan" },
];

const stats = [
  { icon: Calendar, label: "BERDIRI SEJAK", value: "2015" },
  { icon: Hammer, label: "PROYEK SELESAI", value: "200+" },
  { icon: MapPin, label: "WILAYAH", value: "Sumatera" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto" ref={ref}>
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-minimal text-muted-foreground mb-4 inline-flex items-center gap-2"><Info size={14} /> TENTANG KAMI</h2>
              <h3 className="text-4xl md:text-6xl font-display font-light text-architectural mb-12">Filosofi <span className="italic text-clay">Kami</span></h3>
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Kami percaya bahwa setiap bangunan harus mencerminkan kebutuhan penghuninya sekaligus menghormati lingkungan sekitar. Praktik kami fokus pada terciptanya ruang yang fungsional, estetis, dan tahan lama.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Didirikan pada 2015, studio kami telah menyelesaikan lebih dari 200 proyek di seluruh Sumatera — mulai dari rumah tinggal, bangunan komersial, hingga fasilitas publik.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6 inline-flex items-center gap-2"><Compass size={14} /> PENDEKATAN KAMI</h4>
                <div className="space-y-6">
                  {approaches.map((a) => {
                    const Icon = a.icon;
                    return (
                      <div key={a.title} className="border-l-2 border-foreground pl-6">
                        <h5 className="text-lg font-medium mb-2 inline-flex items-center gap-2"><Icon size={16} /> {a.title}</h5>
                        <p className="text-muted-foreground">{a.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="pt-8 border-t border-border">
                <div className="grid grid-cols-3 gap-8">
                  {stats.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.label}>
                        <h4 className="text-minimal text-muted-foreground mb-2 inline-flex items-center gap-1.5"><Icon size={12} /> {s.label}</h4>
                        <p className="text-xl">{s.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
