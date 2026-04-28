import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "About", 
      href: "#",
      dropdown: [
        { name: "About NG", href: "/about" },
        { name: "Achievements", href: "/achievements" },
        { name: "Talent", href: "/talent" },
        { name: "Careers", href: "/careers" },
        { name: "News", href: "/news" },
        { name: "Nimbus", href: "/nimbus" },
        { name: "Links", href: "/links" },
      ]
    },
    { 
      name: "Teams", 
      href: "#",
      dropdown: [
        { name: "League of Legends", href: "/teams/lol" },
        { name: "Valorant", href: "/teams/valorant" },
        { name: "CrossFire", href: "/teams/crossfire" },
        { name: "Fortnite", href: "/teams/fortnite" },
        { name: "FC 2026", href: "/teams/fc2026" },
        { name: "Tekken 8", href: "/teams/tekken-8" },
        { name: "Management", href: "/teams/management" },
      ]
    },
    { name: "Partners", href: "/partners" },
    { name: "Store", href: "/store" },
    { name: "News", href: "/news" },
    { name: "Links", href: "/links" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-card-border shadow-lg" : "bg-transparent py-2"
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 z-50 group">
          <img src="/ng-logo-white.png" alt="NG Logo" className="h-8 w-auto group-hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.8)] transition-all" />
          <span className="font-display font-bold text-xl tracking-wider hidden sm:block">NEXT GENERATION</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div 
              key={link.name}
              className="relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.dropdown ? (
                <button className="px-4 py-2 text-sm font-semibold hover:text-primary transition-colors flex items-center gap-1">
                  {link.name} <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.name ? "rotate-180 text-primary" : ""}`} />
                </button>
              ) : (
                <Link href={link.href} className="px-4 py-2 text-sm font-semibold hover:text-primary transition-colors block">
                  {link.name}
                </Link>
              )}

              {/* Dropdown */}
              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2 w-48"
                    >
                      <div className="bg-card border border-card-border rounded-xl shadow-xl overflow-hidden py-2 flex flex-col">
                        {link.dropdown.map((dropLink) => (
                          <Link 
                            key={dropLink.name} 
                            href={dropLink.href}
                            className="px-4 py-2 text-sm hover:bg-primary/20 hover:text-primary transition-colors text-left"
                          >
                            {dropLink.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-foreground hover:text-primary transition-colors z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 lg:hidden pt-24 px-6 pb-6 overflow-y-auto flex flex-col"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <div key={`mobile-${link.name}`} className="border-b border-card-border/50 pb-4">
                    {link.dropdown ? (
                      <div className="flex flex-col gap-3">
                        <span className="text-lg font-display font-bold text-muted-foreground uppercase tracking-widest">{link.name}</span>
                        <div className="flex flex-col gap-2 pl-4 border-l border-primary/30">
                          {link.dropdown.map((dropLink) => (
                            <Link 
                              key={`mobile-drop-${dropLink.name}`} 
                              href={dropLink.href}
                              className="text-lg font-semibold hover:text-primary transition-colors py-1"
                            >
                              {dropLink.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link href={link.href} className="text-2xl font-display font-bold hover:text-primary transition-colors block">
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
