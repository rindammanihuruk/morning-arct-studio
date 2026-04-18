import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/" className={`flex items-center gap-3 text-minimal font-semibold tracking-[0.2em] ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          <img
            src={logo}
            alt="Morning Arct Studio logo"
            className="h-9 w-9 object-contain transition-all duration-300"
          />
          MORNING ARCT STUDIO
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const className = `text-minimal transition-colors duration-300 ${
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-primary-foreground/70 hover:text-primary-foreground"
            }`;
            const isRoute = link.href.startsWith("/") && !link.href.startsWith("/#");
            return isRoute ? (
              <Link key={link.label} to={link.href} className={className}>
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className={className}>
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
