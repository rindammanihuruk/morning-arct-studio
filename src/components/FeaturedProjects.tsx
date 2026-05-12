import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import dimigo1 from "@/assets/portfolio/dimigo-1.jpg";
import dimigo2 from "@/assets/portfolio/dimigo-2.jpg";
import dimigo3 from "@/assets/portfolio/dimigo-3.jpg";
import dimigo4 from "@/assets/portfolio/dimigo-4.jpg";
import dimigo5 from "@/assets/portfolio/dimigo-5.jpg";
import dimigo6 from "@/assets/portfolio/dimigo-6.jpg";

import devi1 from "@/assets/portfolio/devi-1.jpg";
import devi2 from "@/assets/portfolio/devi-2.jpg";
import devi3 from "@/assets/portfolio/devi-3.jpg";
import devi4 from "@/assets/portfolio/devi-4.jpg";
import devi5 from "@/assets/portfolio/devi-5.jpg";

import indako1 from "@/assets/portfolio/indako-1.jpg";
import indako2 from "@/assets/portfolio/indako-2.jpg";

import serbelawan1 from "@/assets/portfolio/serbelawan-1.jpg";
import serbelawan2 from "@/assets/portfolio/serbelawan-2.jpg";
import serbelawan3 from "@/assets/portfolio/serbelawan-3.jpg";

import gaperta1 from "@/assets/portfolio/gaperta-1.jpg";
import gaperta2 from "@/assets/portfolio/gaperta-2.jpg";
import gaperta3 from "@/assets/portfolio/gaperta-3.jpg";

import wl1 from "@/assets/portfolio/wl-1.jpg";
import wl2 from "@/assets/portfolio/wl-2.jpg";
import wl3 from "@/assets/portfolio/wl-3.jpg";
import wl4 from "@/assets/portfolio/wl-4.jpg";

import kost1 from "@/assets/portfolio/kost-1.jpg";
import kost2 from "@/assets/portfolio/kost-2.jpg";

import kerinci1 from "@/assets/portfolio/kerinci-1.jpg";
import kerinci2 from "@/assets/portfolio/kerinci-2.jpg";
import kerinci3 from "@/assets/portfolio/kerinci-3.jpg";

import siantar1 from "@/assets/portfolio/siantar-1.jpg";
import siantar2 from "@/assets/portfolio/siantar-2.jpg";
import siantar3 from "@/assets/portfolio/siantar-3.jpg";
import siantar4 from "@/assets/portfolio/siantar-4.jpg";

import kamar1 from "@/assets/portfolio/kamar-1.jpg";
import kamar2 from "@/assets/portfolio/kamar-2.jpg";

import sidikalang1 from "@/assets/portfolio/sidikalang-1.jpg";
import sidikalang2 from "@/assets/portfolio/sidikalang-2.jpg";

import tomok1 from "@/assets/portfolio/tomok-1.jpg";
import tomok2 from "@/assets/portfolio/tomok-2.jpg";

interface FeaturedProject {
  title: string;
  year: string;
  category: string;
  images: string[];
}

const featured: FeaturedProject[] = [
  {
    title: "DIMIGO POOL, RESTO & BAR",
    year: "2022",
    category: "COMMERCIAL",
    images: [dimigo1, dimigo2, dimigo3, dimigo4, dimigo5, dimigo6],
  },
  {
    title: "INTERIOR RUMAH IBU DEVI",
    year: "2024",
    category: "INTERIOR",
    images: [devi1, devi2, devi3, devi4, devi5],
  },
  {
    title: "INDAKO TRAINING CENTER",
    year: "2024",
    category: "COMMERCIAL",
    images: [indako1, indako2],
  },
  {
    title: "RUMAH SERBELAWAN",
    year: "2025",
    category: "RESIDENTIAL",
    images: [serbelawan1, serbelawan2, serbelawan3],
  },
  {
    title: "GAPERTA CAFÉ",
    year: "2025",
    category: "COMMERCIAL",
    images: [gaperta1, gaperta2, gaperta3],
  },
  {
    title: "WL COFFEE",
    year: "2026",
    category: "COMMERCIAL",
    images: [wl1, wl2, wl3, wl4],
  },
  {
    title: "KOST TJ GUSTA",
    year: "2026",
    category: "RESIDENTIAL",
    images: [kost1, kost2],
  },
  {
    title: "RUMAH KERINCI",
    year: "2025",
    category: "RESIDENTIAL",
    images: [kerinci1, kerinci2, kerinci3],
  },
  {
    title: "RESTO & BAR SIANTAR",
    year: "2022",
    category: "COMMERCIAL",
    images: [siantar1, siantar2, siantar3, siantar4],
  },
  {
    title: "DESAIN INTERIOR KAMAR",
    year: "2022",
    category: "INTERIOR",
    images: [kamar1, kamar2],
  },
  {
    title: "RUMAH SIDIKALANG",
    year: "2024",
    category: "RESIDENTIAL",
    images: [sidikalang1, sidikalang2],
  },
  {
    title: "REDESAIN PASAR RAKYAT TOMOK",
    year: "2025",
    category: "COMMERCIAL",
    images: [tomok1, tomok2],
  },
];

const FeaturedBlock = ({ project, index }: { project: FeaturedProject; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.05 }}
      className="mb-16"
    >
      <div className="flex items-end justify-between mb-4 gap-4 flex-wrap">
        <div>
          <p className="text-minimal text-muted-foreground mb-1">{project.category}</p>
          <h4 className="text-2xl md:text-3xl font-light text-architectural">
            {project.title}
          </h4>
        </div>
        <span className="text-muted-foreground text-sm">{project.year}</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {project.images.map((src, i) => (
          <div
            key={i}
            className="group relative overflow-hidden bg-muted aspect-[4/3]"
          >
            <img
              src={src}
              alt={`${project.title} - ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const FeaturedProjects = () => {
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
            <h2 className="text-minimal text-muted-foreground mb-4">FEATURED WORK</h2>
            <h3 className="text-4xl md:text-5xl font-display font-light text-architectural mb-4">
              Proyek Terbangun
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Dokumentasi proyek-proyek kami yang telah terealisasi — dari restoran,
              kafe, kantor, hingga rumah tinggal di seluruh Sumatera.
            </p>
          </motion.div>
          <div>
            {featured.map((p, i) => (
              <FeaturedBlock key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
