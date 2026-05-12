import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { label: "PORTOFOLIO", href: "/portfolio", external: false },
  { label: "LAYANAN", href: "/#services", external: false },
  { label: "TENTANG", href: "/#about", external: false },
  { label: "BLOG", href: "#", external: false },
  { label: "KONTAK", href: "/#contact", external: false },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkBaseClass = `text-minimal transition-colors duration-300 ${
    scrolled
      ? "text-muted-foreground hover:text-foreground"
      : "text-primary-foreground/70 hover:text-primary-foreground"
  }`;

  const highlightClass = scrolled
    ? "text-minimal px-4 py-2 rounded-sm bg-foreground text-background hover:bg-foreground/85 transition-all duration-300 shadow-sm"
    : "text-minimal px-4 py-2 rounded-sm bg-primary-foreground text-foreground hover:bg-primary-foreground/90 transition-all duration-300 shadow-sm";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <Link
          to="/"
          className={`flex items-center gap-2 md:gap-3 text-minimal font-semibold tracking-[0.2em] min-w-0 ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          <img
            src={logo}
            alt="Morning Arct Studio logo"
            className="h-9 w-9 shrink-0 object-contain transition-all duration-300"
          />
          <span className="hidden sm:inline text-[10px] lg:text-xs whitespace-nowrap truncate">
            <span className="lg:hidden">MORNING ARCT</span>
            <span className="hidden lg:inline">MORNING ARCT STUDIO</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5 lg:gap-10 shrink-0">
          {navLinks.map((link) => {
            const isRoute = link.href.startsWith("/") && !link.href.startsWith("/#");
            const isPortfolio = link.label === "PORTOFOLIO";
            const cls = isPortfolio ? highlightClass : linkBaseClass;
            return isRoute ? (
              <Link key={link.label} to={link.href} className={cls}>
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className={cls}>
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Mobile: always-visible Portfolio CTA + menu button */}
        <div className="md:hidden flex items-center gap-2 -mr-2">
          <Link
            to="/portfolio"
            className={`text-[10px] tracking-[0.2em] font-semibold px-3 py-1.5 rounded-sm transition-colors ${
              scrolled
                ? "bg-foreground text-background hover:bg-foreground/85"
                : "bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
            }`}
          >
            PORTOFOLIO
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={`p-2 transition-colors ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden bg-background border-b border-border transition-[max-height,opacity] duration-500 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => {
            const isRoute = link.href.startsWith("/") && !link.href.startsWith("/#");
            const isPortfolio = link.label === "PORTOFOLIO";
            const cls = isPortfolio
              ? "text-minimal inline-flex w-fit px-4 py-2 rounded-sm bg-foreground text-background hover:bg-foreground/85 transition-colors"
              : "text-minimal text-foreground hover:text-muted-foreground transition-colors";
            return isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className={cls}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={cls}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
