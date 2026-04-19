import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const packages = [
  {
    num: "01",
    type: "Type 36",
    price: "Rp 200 Juta",
    tagline: "Sederhana & Fungsional",
    desc: "Rumah mungil yang efisien — 2 kamar tidur, ruang tamu lapang, dan dapur fungsional. Cocok untuk pasangan atau keluarga kecil.",
    features: ["2 Kamar Tidur", "1 Kamar Mandi", "Carport Terbuka", "Luas Bangunan ±36m²"],
  },
  {
    num: "02",
    type: "Type 45",
    price: "Rp 300 Juta",
    tagline: "Lebih Lega & Modern",
    desc: "Tambahan ruang dan finishing yang lebih rapi. 2–3 kamar tidur, teras lebih nyaman, dan area servis terpisah.",
    features: ["2–3 Kamar Tidur", "2 Kamar Mandi", "Teras Depan", "Luas Bangunan ±45m²"],
  },
  {
    num: "03",
    type: "Type 60",
    price: "Rp 400 Juta",
    tagline: "Nyaman dengan Carport",
    desc: "Ruang lebih luas, 3 kamar tidur, desain minimalis elegan dengan aksen kayu. Cocok untuk keluarga kecil-menengah.",
    features: ["3 Kamar Tidur", "2 Kamar Mandi", "Carport Tertutup", "Luas Bangunan ±60m²"],
  },
  {
    num: "04",
    type: "Type 70–80",
    price: "Rp 500 Juta",
    tagline: "Mewah & Premium",
    desc: "Desain elegan, material berkualitas, taman/teras luas. 3+ kamar tidur dengan nuansa premium meskipun satu lantai.",
    features: ["3+ Kamar Tidur", "3 Kamar Mandi", "Taman & Teras Luas", "Material Premium"],
  },
];

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
              className="grid md:grid-cols-2 gap-12 bg-foreground text-background p-8 md:p-16"
            >
              <div>
                <p className="text-minimal opacity-60 mb-4">PAKET {packages[activePkg].num}</p>
                <h4 className="text-3xl md:text-5xl font-light mb-4">{packages[activePkg].tagline}</h4>
                <p className="text-2xl md:text-3xl font-light opacity-80 mb-8">{packages[activePkg].price}</p>
                <p className="opacity-70 leading-relaxed mb-8 max-w-md">{packages[activePkg].desc}</p>
                <a
                  href="https://wa.me/628116314114"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm border-b border-background/40 pb-1 hover:border-background transition-colors"
                >
                  Konsultasi Paket Ini <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="space-y-px">
                <p className="text-minimal opacity-60 mb-6">SPESIFIKASI</p>
                {packages[activePkg].features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-4 border-t border-background/20"
                  >
                    <span className="opacity-80">{f}</span>
                    <span className="text-minimal opacity-40">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
