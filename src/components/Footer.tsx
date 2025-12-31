import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import clientlyLogo from '@/assets/cliently-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card pt-16 pb-8 relative">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={clientlyLogo} alt="Cliently" className="h-7 w-auto" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Modern, fast, mobile-first websites built to grow your business. We turn ideas into digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/solutions" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                Solutions
              </Link>
              <Link to="/portfolio" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link to="/about" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <nav className="flex flex-col gap-3">
              <span className="text-muted-foreground text-sm">Static Websites</span>
              <span className="text-muted-foreground text-sm">Dynamic Websites</span>
              <span className="text-muted-foreground text-sm">E-commerce Stores</span>
              <span className="text-muted-foreground text-sm">Enterprise Platforms</span>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/918356891147"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 83568 91147
              </a>
              <a
                href="mailto:cliently.live@gmail.com"
                className="flex items-center gap-3 text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                cliently.live@gmail.com
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Cliently. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/contact" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
