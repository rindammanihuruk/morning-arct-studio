import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HardHat } from "lucide-react";

import indako1 from "@/assets/portfolio/progress-indako-1.jpg";
import indako2 from "@/assets/portfolio/progress-indako-2.jpg";
import serbelawan1 from "@/assets/portfolio/progress-serbelawan-1.jpg";
import serbelawan2 from "@/assets/portfolio/progress-serbelawan-2.jpg";
import serbelawan3 from "@/assets/portfolio/progress-serbelawan-3.jpg";
import serbelawan4 from "@/assets/portfolio/progress-serbelawan-4.jpg";
import gaperta1 from "@/assets/portfolio/progress-gaperta-1.jpg";
import gaperta2 from "@/assets/portfolio/progress-gaperta-2.jpg";
import gaperta3 from "@/assets/portfolio/progress-gaperta-3.jpg";
import gaperta4 from "@/assets/portfolio/progress-gaperta-4.jpg";
import wl1 from "@/assets/portfolio/progress-wl-1.jpg";
import wl2 from "@/assets/portfolio/progress-wl-2.jpg";
import wl3 from "@/assets/portfolio/progress-wl-3.jpg";
import kost1 from "@/assets/portfolio/progress-kost-1.jpg";

interface ProgressItem {
  src: string;
  project: string;
  caption: string;
}

const items: ProgressItem[] = [
  { src: indako1, project: "INDAKO TRAINING CENTER", caption: "Tampak fasad" },
  { src: indako2, project: "INDAKO TRAINING CENTER", caption: "Konstruksi struktur" },
  { src: serbelawan1, project: "RUMAH SERBELAWAN", caption: "Pembangunan dinding" },
  { src: serbelawan2, project: "RUMAH SERBELAWAN", caption: "Fasad depan" },
  { src: serbelawan3, project: "RUMAH SERBELAWAN", caption: "Aksen kayu" },
  { src: serbelawan4, project: "RUMAH SERBELAWAN", caption: "Pekerjaan pagar" },
  { src: gaperta1, project: "GAPERTA CAFÉ", caption: "Struktur lengkung" },
  { src: gaperta2, project: "GAPERTA CAFÉ", caption: "Detail bata" },
  { src: gaperta3, project: "GAPERTA CAFÉ", caption: "Beton & bata" },
  { src: gaperta4, project: "GAPERTA CAFÉ", caption: "Detail atap" },
  { src: wl1, project: "WL COFFEE", caption: "Pekerjaan tanah" },
  { src: wl2, project: "WL COFFEE", caption: "Dinding bata melingkar" },
  { src: wl3, project: "WL COFFEE", caption: "Pengerjaan dinding" },
  { src: kost1, project: "KOST TJ GUSTA", caption: "Awal pembangunan" },
];

const ProgressCard = ({ item, index }: { item: ProgressItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 6) * 0.05 }}
      className="group relative overflow-hidden bg-muted aspect-[4/3]"
    >
      <img
        src={item.src}
        alt={`${item.project} – ${item.caption}`}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-foreground/80 backdrop-blur-sm text-primary-foreground px-2 py-1 text-[10px] tracking-[0.15em]">
        <HardHat size={11} />
        IN PROGRESS
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-foreground/80 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-primary-foreground text-sm font-medium">{item.project}</span>
        <span className="text-primary-foreground/70 text-xs mt-0.5">{item.caption}</span>
      </div>
    </motion.div>
  );
};

const ProgressGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12 max-w-2xl"
          >
            <h2 className="text-minimal text-muted-foreground mb-4">ON SITE</h2>
            <h3 className="text-4xl md:text-5xl font-light text-architectural mb-4">
              Sedang Dibangun
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Dokumentasi proses konstruksi langsung dari lapangan — bukti komitmen
              kami terhadap setiap tahap pembangunan.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {items.map((it, i) => (
              <ProgressCard key={`${it.project}-${i}`} item={it} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressGallery;
