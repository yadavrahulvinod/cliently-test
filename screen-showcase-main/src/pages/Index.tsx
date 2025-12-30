import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PortfolioGrid from '@/components/PortfolioGrid';
import LogoStrip from '@/components/LogoStrip';
import StickyFeaturesSection from '@/components/StickyFeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Build Better Sites, Faster | Modern Website Builder</title>
        <meta
          name="description"
          content="The site builder trusted by startups to Fortune 500. Build fast and scale with an integrated CMS, SEO, Analytics, and more."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <PortfolioGrid />
          <LogoStrip />
          <StickyFeaturesSection />
          <TestimonialsSection />
        </main>
      </div>
    </>
  );
};

export default Index;
