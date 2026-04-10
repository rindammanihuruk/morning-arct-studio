import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    image: project1,
    title: "RUMAH MODERN MINIMALIS",
    location: "MEDAN, 2024",
    price: "Rp\u00a0990.000.000",
    desc: "Rumah tinggal 2 lantai dengan desain modern minimalis, luas bangunan 180 m²",
  },
  {
    image: project2,
    title: "RUKO KOMERSIAL",
    location: "PADANG, 2023",
    price: "Rp\u00a02.100.000.000",
    desc: "Ruko 3 lantai untuk area bisnis strategis, luas bangunan 300 m²",
  },
  {
    image: project3,
    title: "VILLA TROPIS",
    location: "BUKITTINGGI, 2023",
    price: "Rp\u00a01.500.000.000",
    desc: "Villa dengan sentuhan tropis modern, memanfaatkan pemandangan alam Bukittinggi, 250 m²",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
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
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-sm px-5 py-3">
          <span className="text-lg font-medium">{project.price}</span>
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-2xl font-light text-architectural mb-2">{project.title}</h4>
          <p className="text-minimal text-muted-foreground">{project.location}</p>
        </div>
        <div className="md:col-span-2">
          <p className="text-muted-foreground leading-relaxed mb-4">{project.desc}</p>
          <button className="flex items-center gap-2 text-minimal text-foreground hover:text-muted-foreground transition-colors">
            ESTIMASI MATERIAL
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
