
import React from "react";
import Button from "../components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="group relative flex items-center"
        >
          <span className="text-2xl font-bold tracking-tight text-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110">
            PM
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-3 py-2 flex items-center gap-1 backdrop-blur-lg border border-border/40">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-primary/10 hover:scale-105 transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute inset-0 rounded-full bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button size="sm">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-surface transition"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-slide-fade-up z-40 border-t border-border/20">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2 px-4 rounded-lg hover:bg-primary/10 transition-all duration-300 transform translate-x-0 hover:translate-x-2"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {link.label}
              </a>
            ))}

            <Button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 transform scale-100 hover:scale-105 transition-transform duration-300"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
