import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import inspo1 from "@/assets/inspo-1.jpg";
import inspo2 from "@/assets/inspo-2.jpg";
import inspo3 from "@/assets/inspo-3.jpg";
import inspo4 from "@/assets/inspo-4.jpg";
import inspo5 from "@/assets/inspo-5.jpg";
import inspo6 from "@/assets/inspo-6.jpg";
import inspo7 from "@/assets/inspo-7.jpg";
import inspo8 from "@/assets/inspo-8.jpg";
import inspo9 from "@/assets/inspo-9.jpg";
import inspo10 from "@/assets/inspo-10.jpg";

interface InspoItem {
  src: string;
  title: string;
  category: string;
}

const items: InspoItem[] = [
  { src: inspo1, title: "Tropical Minimalist House", category: "RESIDENTIAL" },
  { src: inspo2, title: "Industrial Loft Interior", category: "RENOVATION" },
  { src: inspo3, title: "Construction in Progress", category: "CONSTRUCTION" },
  { src: inspo4, title: "Modern Villa with Pool", category: "RESIDENTIAL" },
  { src: inspo5, title: "Scandinavian Kitchen", category: "INTERIOR" },
  { src: inspo6, title: "Commercial Facade", category: "COMMERCIAL" },
  { src: inspo7, title: "Floating Wood Staircase", category: "INTERIOR" },
  { src: inspo8, title: "Mountain View Bedroom", category: "INTERIOR" },
  { src: inspo9, title: "Spa-style Bathroom", category: "INTERIOR" },
  { src: inspo10, title: "Twilight Modern House", category: "RESIDENTIAL" },
];

const InspoCard = ({ item, index }: { item: InspoItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 5) * 0.05 }}
      className="group relative overflow-hidden bg-muted break-inside-avoid mb-3 md:mb-4"
    >
      <img
        src={item.src}
        alt={item.title}
        loading="lazy"
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <figcaption className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-foreground/80 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-primary-foreground/70 text-[10px] tracking-[0.2em] mb-1">
          {item.category}
        </span>
        <span className="text-primary-foreground text-sm font-medium">{item.title}</span>
      </figcaption>
    </motion.figure>
  );
};

const InspirationGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12 max-w-2xl"
          >
            <h2 className="text-minimal text-muted-foreground mb-4">INSPIRATION</h2>
            <h3 className="text-4xl md:text-5xl font-display font-light text-architectural mb-4">
              Rekomendasi Konstruksi
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Kurasi visual dari berbagai gaya bangunan dan interior — sebagai
              referensi untuk proyek impian Anda.
            </p>
          </motion.div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 md:gap-4">
            {items.map((it, i) => (
              <InspoCard key={it.title} item={it} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationGallery;
