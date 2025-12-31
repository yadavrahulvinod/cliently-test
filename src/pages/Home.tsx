import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import PortfolioCollage from '@/components/PortfolioCollage';
import StickyScrollSolutions from '@/components/StickyScrollSolutions';
import WhyChooseSection from '@/components/WhyChooseSection';
import TestimonialMarquee from '@/components/TestimonialMarquee';
import ErrorBoundary from '@/components/ErrorBoundary';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const testimonialsRow1 = [
  {
    name: 'Rajesh Kumar',
    company: 'TechStart India',
    text: 'Cliently transformed our online presence. The website they built increased our leads by 300% in just 3 months.',
    avatar: 'RK',
  },
  {
    name: 'Priya Sharma',
    company: 'Fashion Hub',
    text: 'Our e-commerce store is beautiful and easy to manage. Sales have never been better!',
    avatar: 'PS',
  },
  {
    name: 'Amit Patel',
    company: 'Patel Realty',
    text: 'Professional, fast, and they truly understand what businesses need. Highly recommended!',
    avatar: 'AP',
  },
  {
    name: 'Sneha Reddy',
    company: 'Wellness Studio',
    text: 'The booking system they built is seamless. Our customers love how easy it is to schedule appointments.',
    avatar: 'SR',
  },
];

const testimonialsRow2 = [
  {
    name: 'Vikram Singh',
    company: 'Singh Logistics',
    text: 'Outstanding work! The tracking portal they developed streamlined our entire operation.',
    avatar: 'VS',
  },
  {
    name: 'Ananya Gupta',
    company: 'Creative Agency',
    text: 'They captured our vision perfectly. The website truly represents our brand identity.',
    avatar: 'AG',
  },
  {
    name: 'Rahul Mehta',
    company: 'Mehta Foods',
    text: 'From consultation to delivery, the experience was fantastic. Our online orders doubled!',
    avatar: 'RM',
  },
  {
    name: 'Kavitha Nair',
    company: 'Nair Consultants',
    text: 'The professional design and smooth functionality impressed all our clients.',
    avatar: 'KN',
  },
];

const Home = () => {
  // #region agent log
  console.log('[DEBUG] Home component rendering');
  // #endregion

  const openWhatsApp = () => {
    window.open('https://wa.me/918356891147?text=Hi%20Cliently!%20I%27m%20interested%20in%20your%20services.', '_blank');
  };

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);

  try {
    // #region agent log
    console.log('[DEBUG] Home component - About to render JSX');
    // #endregion

    return (
      <main>
        {/* Hero Section - Framer style */}
        <HeroSection />

        {/* Portfolio Collage - Dense masonry grid filling the screen */}
        <ErrorBoundary fallback={<div className="p-8 text-center text-foreground">Portfolio Grid Error - Check Console</div>}>
          <PortfolioCollage />
        </ErrorBoundary>

        {/* Why Choose Us Section */}
        <WhyChooseSection />

        {/* Solutions Section - Sticky Scroll "Create, collaborate, go live" */}
        <section className="bg-background">
          <StickyScrollSolutions />
        </section>

        {/* Testimonials Section - Dual Marquee */}
        <section className="py-24 bg-secondary overflow-hidden relative">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
          <div className="container mb-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground">Don't just take our word for it.</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Top Row - Scrolls Left - Slower speed */}
            <TestimonialMarquee testimonials={testimonialsRow1} direction="left" speed={40} />

            {/* Bottom Row - Scrolls Right - Slower speed */}
            <TestimonialMarquee testimonials={testimonialsRow2} direction="right" speed={40} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-card relative">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how we can help your business grow with a modern, high-converting website.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                onClick={openWhatsApp}
                className="rounded-full px-8 py-6 text-base bg-foreground text-background hover:bg-foreground/90"
              >
                Chat on WhatsApp
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-base border-foreground/20 text-foreground hover:bg-foreground/5"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            <div className="max-w-6xl mx-auto h-[650px] rounded-2xl overflow-hidden shadow-2xl bg-background/50 backdrop-blur-sm relative">
              <Cal
                calLink="rahul-vinod-yadav-v0bquo/30min"
                style={{ width: "100%", height: "100%", overflow: "hidden" }}
                config={{ layout: 'month_view', theme: 'dark' }}
              />
            </div>
          </div>
        </section>
      </main>
    );
  } catch (error) {
    // #region agent log
    console.error('[DEBUG] Error in Home component', error);
    // #endregion
    console.error("Error in Home:", error);
    return <div>Error loading home page</div>;
  }
};

export default Home;
