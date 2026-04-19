import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { getPackageBySlug, packages } from "@/data/packages";
import { useEffect } from "react";

const PackageDetail = () => {
  const { slug } = useParams();
  const pkg = getPackageBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!pkg) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 pt-40 pb-32 text-center">
          <h1 className="text-3xl font-light text-architectural mb-6">Paket tidak ditemukan</h1>
          <Link to="/" className="text-minimal text-muted-foreground hover:text-foreground">
            ← Kembali ke beranda
          </Link>
        </div>
      </div>
    );
  }

  const otherPackages = packages.filter((p) => p.slug !== pkg.slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Back link */}
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-minimal text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft size={14} /> Semua paket
            </Link>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-12 gap-8 mb-16"
            >
              <div className="md:col-span-8">
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-minimal text-muted-foreground mb-6">
                  <span>PAKET {pkg.num}</span>
                  <span>{pkg.type}</span>
                  <span>{pkg.price}</span>
                </div>
                <h1 className="text-4xl md:text-7xl font-light text-architectural leading-[1.05]">
                  {pkg.tagline}.
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                  {pkg.shortDesc.split(".")[0]}.
                </p>
              </div>

              <div className="md:col-span-4 grid grid-cols-3 gap-px bg-border self-end">
                {pkg.specs.slice(0, 3).map((s) => (
                  <div key={s.label} className="bg-background p-4">
                    <div className="text-minimal text-muted-foreground mb-1">{s.label}</div>
                    <div className="text-lg font-light text-architectural">{s.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="aspect-[16/9] overflow-hidden mb-20 bg-muted"
            >
              <img
                src={pkg.image}
                alt={`${pkg.type} ${pkg.tagline}`}
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Concept */}
            <section className="grid md:grid-cols-12 gap-12 mb-24 pt-12 border-t border-border">
              <div className="md:col-span-3">
                <p className="text-minimal text-muted-foreground">Konsep</p>
              </div>
              <div className="md:col-span-9">
                <h2 className="text-2xl md:text-4xl font-light text-architectural leading-snug mb-10">
                  {pkg.shortDesc}
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
                  {pkg.longDesc}
                </p>
                <div>
                  <p className="text-minimal text-muted-foreground mb-4">Highlights</p>
                  <ul className="space-y-3">
                    {pkg.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex gap-4 py-3 border-t border-border text-architectural"
                      >
                        <span className="text-minimal text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Specs */}
            <section className="grid md:grid-cols-12 gap-12 mb-24 pt-12 border-t border-border">
              <div className="md:col-span-3">
                <p className="text-minimal text-muted-foreground">Spesifikasi</p>
              </div>
              <div className="md:col-span-9">
                <h2 className="text-3xl md:text-5xl font-light text-architectural mb-10">
                  Detail teknis.
                </h2>
                <div className="grid sm:grid-cols-2 gap-x-12">
                  {pkg.specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-baseline justify-between py-4 border-t border-border"
                    >
                      <span className="text-muted-foreground">{s.label}</span>
                      <span className="text-architectural font-light">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Materials */}
            <section className="grid md:grid-cols-12 gap-12 mb-24 pt-12 border-t border-border">
              <div className="md:col-span-3">
                <p className="text-minimal text-muted-foreground">Material & Finishing</p>
              </div>
              <div className="md:col-span-9">
                <h2 className="text-3xl md:text-5xl font-light text-architectural mb-10">
                  Pilihan material standar paket.
                </h2>
                <div className="grid sm:grid-cols-2 gap-px bg-border">
                  {pkg.materials.map((m) => (
                    <div key={m.num} className="bg-background p-8">
                      <div className="text-minimal text-muted-foreground mb-4">{m.num}</div>
                      <h3 className="text-xl font-light text-architectural mb-3">{m.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-foreground text-background p-10 md:p-16 mb-24">
              <p className="text-minimal opacity-60 mb-4">Tertarik dengan {pkg.type}?</p>
              <h2 className="text-3xl md:text-5xl font-light mb-8 max-w-2xl">
                Mari diskusikan kebutuhan dan kondisi tanah Anda.
              </h2>
              <a
                href={`https://wa.me/628116314114?text=Halo%2C%20saya%20tertarik%20dengan%20Paket%20${encodeURIComponent(
                  pkg.type
                )}%20(${encodeURIComponent(pkg.price)})`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base border-b border-background/40 pb-1 hover:border-background transition-colors"
              >
                Konsultasi via WhatsApp <ArrowUpRight size={18} />
              </a>
            </section>

            {/* Other packages */}
            <section className="pt-12 border-t border-border">
              <p className="text-minimal text-muted-foreground mb-10">Paket lainnya</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherPackages.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/paket/${p.slug}`}
                    className="group block"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted mb-4">
                      <img
                        src={p.image}
                        alt={`${p.type} ${p.tagline}`}
                        width={1200}
                        height={900}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="flex items-baseline gap-3 text-minimal text-muted-foreground mb-2">
                      <span>{p.num}</span>
                      <span>{p.type}</span>
                    </div>
                    <h3 className="text-xl font-light text-architectural mb-1">{p.tagline}</h3>
                    <p className="text-sm text-muted-foreground">{p.price}</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PackageDetail;
