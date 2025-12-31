import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import clientlyLogo from '@/assets/cliently-logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const openWhatsApp = () => {
    window.open('https://wa.me/918356891147?text=Hi%20Cliently!%20I%27m%20interested%20in%20your%20services.', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="w-full px-4 md:px-12">
        {/* Desktop Navigation - Base44 style glassmorphism */}
        {/* Desktop Navigation - Single Long Pill Style */}
        <div className="hidden md:flex items-center justify-center pt-2">
          <div className="flex items-center justify-between w-full px-4 py-2.5 rounded-full glass-strong border border-white/10 shadow-lg backdrop-blur-md bg-black/40">
            {/* Logo inside nav */}
            <Link to="/" className="flex items-center shrink-0 pl-2">
              <img src={clientlyLogo} alt="Cliently" className="h-6 md:h-7 w-auto" />
            </Link>

            {/* Center Nav Links */}
            <nav className="flex items-center gap-1 mx-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === link.path
                    ? 'bg-foreground text-background shadow-md'
                    : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button inside nav */}
            <Button
              onClick={openWhatsApp}
              className="rounded-full px-6 py-5 shrink-0 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
            >
              Start Building
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between glass-strong rounded-full px-4 py-3">
            <Link to="/">
              <img src={clientlyLogo} alt="Cliently" className="h-6 w-auto" />
            </Link>
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4">
          <div className="glass-strong rounded-2xl p-4 animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium py-3 px-4 rounded-xl transition-all ${location.pathname === link.path
                    ? 'bg-foreground text-background'
                    : 'text-foreground/70 hover:bg-foreground/5'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                onClick={openWhatsApp}
                className="mt-2 rounded-full bg-foreground text-background hover:bg-foreground/90"
              >
                Start Building
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
