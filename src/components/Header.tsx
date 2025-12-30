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
      <div className="container">
        {/* Desktop Navigation - Base44 style glassmorphism */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={clientlyLogo} alt="Cliently" className="h-6 md:h-7 w-auto" />
          </Link>

          {/* Center Nav - Glass pill with individual pill items */}
          <nav className="flex items-center gap-1 px-2 py-2 rounded-full glass-strong">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-foreground text-background'
                    : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Button 
            onClick={openWhatsApp} 
            className="rounded-full px-6 bg-foreground text-background hover:bg-foreground/90"
          >
            Start Building
          </Button>
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
                  className={`text-base font-medium py-3 px-4 rounded-xl transition-all ${
                    location.pathname === link.path
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
