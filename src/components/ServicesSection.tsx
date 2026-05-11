import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ArrowRight, MessageSquare, PenTool, HardHat, CheckCircle2, Package, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { packages } from "@/data/packages";

const services = [
  {
    num: "01",
    icon: MessageSquare,
    title: "KONSULTASI",
    subtitle: "Konsultasi & Perencanaan",
    desc: "Konsultasi desain, analisis kelayakan proyek, dan perencanaan anggaran. Kami membantu Anda memahami kebutuhan proyek sejak awal.",
  },
  {
    num: "02",
    icon: PenTool,
    title: "DESAIN",
    subtitle: "Desain Arsitektur & Interior",
    desc: "Desain arsitektur, interior, dan pembuatan gambar teknis (DED) yang detail untuk rumah tinggal maupun bangunan komersial.",
  },
  {
    num: "03",
    icon: HardHat,
    title: "KONSTRUKSI",
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
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-10 md:mb-20"
          >
            <h2 className="text-minimal text-muted-foreground mb-3">SERVICES</h2>
            <h3 className="text-3xl md:text-6xl font-light text-architectural">Layanan Kami</h3>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-12">
            {services.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * (i + 1) }}
                className="group border-t border-border pt-5 md:pt-8"
              >
                <span className="text-minimal text-muted-foreground font-medium">{s.num}</span>
                <h4 className="text-xl md:text-2xl font-light mt-2 md:mt-4 mb-1 md:mb-2 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                  {s.title}
                </h4>
                <p className="text-sm font-medium text-muted-foreground mb-2 md:mb-4">{s.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Paket Pembangunan sub-section */}
          <div ref={pkgRef} className="mt-16 md:mt-32 pt-10 md:pt-20 border-t border-border">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isPkgInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center max-w-4xl mx-auto"
            >
              <h2 className="text-minimal text-muted-foreground mb-6">PAKET PEMBANGUNAN</h2>
              <h3 className="text-4xl md:text-7xl font-light text-architectural leading-[1.05] mb-6">
                Empat budget,
                <br />
                <span className="italic text-muted-foreground">empat rasa.</span>
              </h3>
              <div className="w-12 h-px bg-foreground/40 mx-auto mb-6" />
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                Empat paket, satu kualitas terbaik — setiap titik awal kami sesuaikan dengan kebutuhan keluarga dan kondisi tanah Anda.
              </p>
            </motion.div>

            {/* Price tabs - Compact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isPkgInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {packages.map((p, i) => (
                <button
                  key={p.num}
                  onClick={() => setActivePkg(i)}
                  aria-pressed={activePkg === i}
                  className={`relative px-4 py-2 text-left border rounded-sm transition-all duration-300 ${
                    activePkg === i
                      ? "bg-foreground text-background border-foreground shadow-lg"
                      : "bg-background text-foreground border-border hover:border-foreground/50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs opacity-50">{p.num}</span>
                    <span className="text-sm font-medium">{p.type}</span>
                  </div>
                </button>
              ))}
            </motion.div>

            <p className="text-sm text-muted-foreground mb-4">Klik tombol di atas untuk melihat tipe lainnya</p>
            <motion.div
              key={activePkg}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-foreground text-background overflow-hidden"
            >
              {/* Image - Full width at top */}
              <div className="w-full bg-muted flex items-center justify-center">
                <img
                  src={packages[activePkg].image}
                  alt={`${packages[activePkg].type} ${packages[activePkg].tagline}`}
                  loading="lazy"
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>

              {/* Info - Below image */}
              <div className="p-6 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <p className="text-minimal opacity-60 mb-2">PAKET {packages[activePkg].num}</p>
                    <h4 className="text-2xl md:text-4xl font-light mb-2">{packages[activePkg].tagline}</h4>
                    <p className="text-xl md:text-2xl font-light opacity-80">{packages[activePkg].price}</p>
                  </div>
                  <p className="opacity-70 leading-relaxed max-w-md md:text-right">{packages[activePkg].shortDesc}</p>
                </div>

                <div className="mt-6 pt-6 border-t border-background/20 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {packages[activePkg].features.slice(0, 4).map((f, i) => (
                      <span key={i} className="text-sm opacity-80 flex items-center gap-2">
                        <span className="w-1 h-1 bg-background/60 rounded-full"></span>
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-6">
                    <Link
                      to={`/paket/${packages[activePkg].slug}`}
                      className="inline-flex items-center gap-2 text-sm border-b border-background pb-1 hover:gap-3 transition-all"
                    >
                      Lihat lengkap <ArrowRight size={16} />
                    </Link>
                    <a
                      href={`https://wa.me/6281271172937?text=Halo%2C%20saya%20tertarik%20dengan%20Paket%20${encodeURIComponent(packages[activePkg].type)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm border-b border-background/40 pb-1 hover:border-background transition-colors"
                    >
                      Konsultasi <ArrowUpRight size={16} />
                    </a>
                  </div>
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
