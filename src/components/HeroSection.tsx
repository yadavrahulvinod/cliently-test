import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/918356891147?text=Hi%20Cliently!%20I%27m%20interested%20in%20your%20services.', '_blank');
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-16 bg-background">
      {/* Bottom Gradient for transition */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
            Build better sites, faster
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up delay-100">
            We build websites trusted by startups to Fortune 500. Fast, modern, and built to convert.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
            <Button
              onClick={openWhatsApp}
              className="rounded-full px-8 py-6 text-base bg-foreground text-background hover:bg-foreground/90"
            >
              Start for free
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-base border-foreground/20 text-foreground hover:bg-foreground/5"
              asChild
            >
              <Link to="/contact">Start with AI</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
