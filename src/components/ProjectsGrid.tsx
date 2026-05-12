import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import project1 from "@/assets/project-1.jpg";
import modernHouse1 from "@/assets/modern-house-1.jpg";
import modernHouse2 from "@/assets/modern-house-2.jpg";
import modernHouse3 from "@/assets/modern-house-3.jpg";
import modernHouse4 from "@/assets/modern-house-4.jpg";
import modernHouse5 from "@/assets/modern-house-5.jpg";
import project3 from "@/assets/project-3.jpg";
import project3a from "@/assets/project-3a.jpg";
import project3b from "@/assets/project-3b.jpg";
import project3overview from "@/assets/project-3-overview.jpg";

interface ProjectTile {
  src: string;
  title: string;
  subtitle?: string;
  price?: string;
}

const tiles: ProjectTile[] = [
  { src: project1, title: "SCANDINAVIAN PRIVATE HOUSE", subtitle: "PANGKALAN KERINCI, 2025", price: "Rp\u00a08XX.XXX.XXX" },
  { src: modernHouse1, title: "MODERN HOUSE", subtitle: "Eksterior", price: "Rp\u00a05XX.XXX.XXX" },
  { src: modernHouse2, title: "MODERN HOUSE", subtitle: "Detail Fasad" },
  { src: modernHouse3, title: "MODERN HOUSE", subtitle: "Living Area" },
  { src: modernHouse4, title: "MODERN HOUSE", subtitle: "Tampak Samping" },
  { src: modernHouse5, title: "MODERN HOUSE", subtitle: "Taman" },
  { src: project3overview, title: "KITCHEN SET", subtitle: "PEKAN BARU, 2025", price: "Rp\u00a08X.XXX.XXX" },
  { src: project3, title: "KITCHEN SET", subtitle: "Detail Kabinet" },
  { src: project3a, title: "KITCHEN SET", subtitle: "Area Memasak" },
  { src: project3b, title: "KITCHEN SET", subtitle: "Zona Laundry" },
];

const ProjectTileCard = ({ tile, index }: { tile: ProjectTile; index: number }) => {
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
        src={tile.src}
        alt={`${tile.title} – ${tile.subtitle ?? ""}`}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <h4 className="text-primary-foreground text-sm font-medium tracking-wide">{tile.title}</h4>
        {tile.subtitle && (
          <p className="text-primary-foreground/70 text-xs mt-1">{tile.subtitle}</p>
        )}
      </div>
      {tile.price && (
        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 text-xs font-medium">
          {tile.price}
        </div>
      )}
    </motion.div>
  );
};

const ProjectsGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-minimal text-muted-foreground mb-4">SELECTED WORK</h2>
            <h3 className="text-4xl md:text-5xl font-display font-light text-architectural">Proyek Kami</h3>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {tiles.map((t, i) => (
              <ProjectTileCard key={`${t.title}-${i}`} tile={t} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
