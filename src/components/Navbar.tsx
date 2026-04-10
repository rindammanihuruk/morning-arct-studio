import { useState, useEffect } from "react";

const navLinks = [
  { label: "PORTOFOLIO", href: "#work" },
  { label: "LAYANAN", href: "#services" },
  { label: "TENTANG", href: "#about" },
  { label: "BLOG", href: "#" },
  { label: "KONTAK", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className={`text-minimal font-semibold tracking-[0.3em] ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          ARCH STUDIO
        </a>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-minimal transition-colors duration-300 ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
