import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { packages } from "@/data/packages";

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
  const pkgRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isPkgInView = useInView(pkgRef, { once: true, margin: "-100px" });
  const [activePkg, setActivePkg] = useState(0);

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

          {/* Paket Pembangunan sub-section */}
          <div ref={pkgRef} className="mt-32 pt-20 border-t border-border">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isPkgInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
            >
              <div>
                <h2 className="text-minimal text-muted-foreground mb-4">PAKET PEMBANGUNAN</h2>
                <h3 className="text-3xl md:text-5xl font-light text-architectural max-w-2xl">
                  Empat budget, empat rasa.
                </h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
                Setiap paket adalah titik awal — kami menyesuaikan denah dan material berdasarkan kebutuhan keluarga dan kondisi tanah.
              </p>
            </motion.div>

            {/* Price tabs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isPkgInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-px"
            >
              {packages.map((p, i) => (
                <button
                  key={p.num}
                  onClick={() => setActivePkg(i)}
                  className={`p-6 text-left transition-all duration-500 ${
                    activePkg === i
                      ? "bg-foreground text-background"
                      : "bg-background text-foreground hover:bg-accent/10"
                  }`}
                >
                  <div className="text-minimal opacity-60 mb-2">{p.num}</div>
                  <div className="text-lg md:text-xl font-light mb-1">{p.type}</div>
                  <div className="text-sm md:text-base font-medium">{p.price}</div>
                </button>
              ))}
            </motion.div>

            {/* Active package detail */}
            <motion.div
              key={activePkg}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 bg-foreground text-background overflow-hidden"
            >
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden bg-muted">
                <img
                  src={packages[activePkg].image}
                  alt={`${packages[activePkg].type} ${packages[activePkg].tagline}`}
                  width={1600}
                  height={1067}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col">
                <p className="text-minimal opacity-60 mb-4">PAKET {packages[activePkg].num}</p>
                <h4 className="text-3xl md:text-5xl font-light mb-4">{packages[activePkg].tagline}</h4>
                <p className="text-2xl md:text-3xl font-light opacity-80 mb-6">{packages[activePkg].price}</p>
                <p className="opacity-70 leading-relaxed mb-8 max-w-md">{packages[activePkg].shortDesc}</p>

                <div className="space-y-px mb-8">
                  {packages[activePkg].features.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-3 border-t border-background/20"
                    >
                      <span className="opacity-80 text-sm">{f}</span>
                      <span className="text-minimal opacity-40">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Link
                    to={`/paket/${packages[activePkg].slug}`}
                    className="inline-flex items-center gap-2 text-sm border-b border-background pb-1 hover:gap-3 transition-all"
                  >
                    Lihat paket lengkap <ArrowRight size={16} />
                  </Link>
                  <a
                    href={`https://wa.me/628116314114?text=Halo%2C%20saya%20tertarik%20dengan%20Paket%20${encodeURIComponent(packages[activePkg].type)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm border-b border-background/40 pb-1 hover:border-background transition-colors"
                  >
                    Konsultasi <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
