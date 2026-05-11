import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, MapPin, Tag, Images, FolderOpen } from "lucide-react";
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

interface Project {
  images: string[];
  title: string;
  location: string;
  price: string;
  desc: string;
}

const projects: Project[] = [
  {
    images: [project1],
    title: "SCANDINAVIAN PRIVATE HOUSE",
    location: "PANGKALAN KERINCI (GG. TETANIC), 2025",
    price: "Rp\u00a08XX.XXX.XXX",
    desc: "Rumah dengan design modern minimalist, luas bangunan 240 m² dengan nuansa taman yang luas mendedikasikan kenyamanan keluarga",
  },
  {
    images: [modernHouse1, modernHouse2, modernHouse3, modernHouse4, modernHouse5],
    title: "MODERN HOUSE",
    location: "",
    price: "Rp\u00a05XX.XXX.XXX",
    desc: "Rumah bukan hanya sekedar tempat untuk pulang, rumah menjadi wajah dari sebuah kegigihan dan keamanan bagi keluarga. Luas tanah dan lokasi tidak menjadi penghambat dalam kerangka kerja design dan struktur untuk berdiri",
  },
  {
    images: [project3overview, project3, project3a, project3b],
    title: "KITCHEN SET",
    location: "PEKAN BARU, 2025",
    price: "Rp\u00a08X.XXX.XXX",
    desc: "Kitchen set modern dengan kombinasi material kayu natural, marmer, dan finishing glossy yang elegan. Dilengkapi kabinet atas-bawah, area memasak, kulkas built-in, serta zona laundry terintegrasi. Membutuhkan ruang minimum 2,3 m x 6 m untuk hasil yang optimal.",
  },
];

const ImageSlider = ({ images, title }: { images: string[]; title: string }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt={title}
        loading="lazy"
        width={1920}
        height={1080}
        className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
      />
    );
  }

  return (
    <div className="relative w-full h-[60vh] bg-muted">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${title} - ${i + 1}`}
          loading="lazy"
          width={1920}
          height={1080}
          className={`absolute inset-0 w-full h-[60vh] object-contain transition-opacity duration-500 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-background w-6" : "bg-background/50"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group"
    >
      <div className="relative overflow-hidden">
        <div className="relative overflow-hidden h-[60vh]">
          <ImageSlider images={project.images} title={project.title} />
        </div>
        <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-sm px-5 py-3 pointer-events-none flex items-center gap-2">
          <Tag size={14} className="text-muted-foreground" />
          <span className="text-lg font-medium">{project.price}</span>
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-2xl font-light text-architectural mb-2">{project.title}</h4>
          {project.location && (
            <p className="text-minimal text-muted-foreground inline-flex items-center gap-1.5"><MapPin size={12} /> {project.location}</p>
          )}
        </div>
        <div className="md:col-span-2">
          <p className="text-muted-foreground leading-relaxed mb-4">{project.desc}</p>
          <button className="flex items-center gap-2 text-minimal text-foreground hover:text-muted-foreground transition-colors">
            <Images size={14} /> ESTIMASI MATERIAL
            <ChevronDown size={14} className="transition-transform duration-300" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-minimal text-muted-foreground mb-4">SELECTED WORK</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">Proyek Kami</h3>
          </motion.div>
          <div className="space-y-24">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
