import PortfolioCard from './PortfolioCard';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import all portfolio images
import dashboard1 from '@/assets/portfolio/dashboard-1.jpg';
import dashboard2 from '@/assets/portfolio/dashboard-2.jpg';
import agency1 from '@/assets/portfolio/agency-1.jpg';
import agency2 from '@/assets/portfolio/agency-2.jpg';
import mobile1 from '@/assets/portfolio/mobile-1.jpg';
import mobile3 from '@/assets/portfolio/mobile-3.jpg';
import mobile4 from '@/assets/portfolio/mobile-4.jpg';
import mobile5 from '@/assets/portfolio/mobile-5.jpg';
import mobile6 from '@/assets/portfolio/mobile-6.jpg';
import aiPlatform from '@/assets/portfolio/ai-platform.jpg';
import aiAssistant from '@/assets/portfolio/ai-assistant.jpg';
import abstract1 from '@/assets/portfolio/abstract-1.jpg';
import abstract2 from '@/assets/portfolio/abstract-2.jpg';
import abstract3 from '@/assets/portfolio/abstract-3.jpg';
import readingApp from '@/assets/portfolio/reading-app.jpg';
import photographer from '@/assets/portfolio/photographer.jpg';
import art3d from '@/assets/portfolio/3d-art.jpg';
import voiceAi from '@/assets/portfolio/voice-ai.jpg';
import typography1 from '@/assets/portfolio/typography-1.jpg';
import brand1 from '@/assets/portfolio/brand-1.jpg';
import ecommerce1 from '@/assets/portfolio/ecommerce-1.jpg';
import startup1 from '@/assets/portfolio/startup-1.jpg';

// 7 columns with 22 tiles total
// Column 1 & 7: Edge columns (mostly hidden)
// Column 2 & 3: Mobile/thin columns
// Column 4, 5, 6: Desktop columns
const portfolioColumns = [
  // Column 1 - Edge (mostly hidden on left) - 3 tiles
  [
    { image: dashboard2, title: 'Data Analytics', subtitle: 'SaaS', size: 'laptop' as const },
    { image: mobile5, title: 'CryptoWallet', subtitle: 'Fintech', size: 'mobile' as const },
    { image: agency2, title: 'Bold Agency', subtitle: 'Branding', size: 'laptop' as const },
  ],
  // Column 2 - Mobile column (thin) - 3 tiles
  [
    { image: mobile1, title: 'FitTrack', subtitle: 'Fitness App', size: 'mobile' as const },
    { image: abstract2, title: 'Soft Forms', subtitle: '3D Art', size: 'square' as const },
    { image: mobile6, title: 'Social Hub', subtitle: 'Social Media', size: 'mobile' as const },
  ],
  // Column 3 - Mobile column (thin) - 3 tiles
  [
    { image: mobile3, title: 'CryptoBank', subtitle: 'Fintech App', size: 'mobile' as const },
    { image: abstract1, title: 'Brand Identity', subtitle: 'Visual Design', size: 'square' as const },
    { image: mobile4, title: 'Wanderlust', subtitle: 'Travel App', size: 'mobile' as const },
  ],
  // Column 4 - Desktop column - 4 tiles
  [
    { image: aiPlatform, title: 'AstartAI', subtitle: 'AI Platform', size: 'laptop' as const },
    { image: voiceAi, title: 'VoiceAI', subtitle: 'Voice Platform', size: 'laptop' as const },
    { image: brand1, title: 'Datalands', subtitle: 'Brand Identity', size: 'laptop' as const },
  ],
  // Column 5 - Desktop column - 3 tiles
  [
    { image: dashboard1, title: 'Analytics Pro', subtitle: 'Dashboard', size: 'laptop' as const },
    { image: aiAssistant, title: 'AI Assistant', subtitle: 'Chatbot', size: 'laptop' as const },
    { image: ecommerce1, title: 'Fashion Store', subtitle: 'E-commerce', size: 'laptop' as const },
  ],
  // Column 6 - Desktop column - 3 tiles
  [
    { image: typography1, title: 'Novel Reading', subtitle: 'Editorial', size: 'square' as const },
    { image: readingApp, title: 'ReadFlow', subtitle: 'Book App', size: 'square' as const },
    { image: art3d, title: '3D Compositions', subtitle: 'Digital Art', size: 'square' as const },
  ],
  // Column 7 - Edge (mostly hidden on right) - 3 tiles
  [
    { image: photographer, title: 'Portfolio', subtitle: 'Photography', size: 'laptop' as const },
    { image: abstract3, title: 'Neon Cubes', subtitle: '3D Art', size: 'square' as const },
    { image: startup1, title: 'StartupLaunch', subtitle: 'SaaS', size: 'laptop' as const },
  ],
];

const PortfolioGrid = () => {
  // #region agent log
  console.log('[DEBUG] PortfolioGrid rendering', { columnsCount: portfolioColumns.length });
  // #endregion
  
  try {
    return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Gradient fade on left edge */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 md:w-40 bg-gradient-to-r from-background via-background/80 to-transparent" />
      {/* Gradient fade on right edge */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 md:w-40 bg-gradient-to-l from-background via-background/80 to-transparent" />
      {/* Gradient fade at bottom - blur/merge effect */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-48 bg-gradient-to-t from-background via-background/90 to-transparent" />
      
      {/* Portfolio Grid */}
      <div className="flex justify-center gap-3 md:gap-4 px-4">
        {portfolioColumns.map((column, colIndex) => {
          // Determine column width based on position
          // Columns 0 & 6 are edge (hidden), 1 & 2 are mobile (thin), 3-5 are desktop (wider)
          const isEdgeColumn = colIndex === 0 || colIndex === 6;
          const isMobileColumn = colIndex === 1 || colIndex === 2;
          
          let columnWidth = 'w-48 md:w-56 lg:w-64'; // desktop columns
          if (isMobileColumn) {
            columnWidth = 'w-32 md:w-36 lg:w-40'; // thinner mobile columns
          }
          if (isEdgeColumn) {
            columnWidth = 'w-32 md:w-48 lg:w-56'; // edge columns
          }
          
          return (
            <div
              key={colIndex}
              className={`flex flex-shrink-0 flex-col gap-3 md:gap-4 ${columnWidth}`}
            >
              {column.map((item, itemIndex) => (
                <PortfolioCard
                  key={itemIndex}
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  size={item.size}
                  delay={colIndex + itemIndex}
                />
              ))}
            </div>
          );
        })}
      </div>

      {/* See more button */}
      <div className="relative z-30 flex justify-center -mt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/portfolio"
            className="group flex items-center gap-2 text-foreground font-medium px-6 py-3 rounded-full 
                     bg-foreground/10 backdrop-blur-sm border border-foreground/20
                     hover:bg-foreground/20 transition-all duration-300
                     shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            See more
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
  } catch (error) {
    // #region agent log
    console.error('[DEBUG] Error in PortfolioGrid', error);
    // #endregion
    console.error("Error in PortfolioGrid:", error);
    return <div>Error loading portfolio grid</div>;
  }
};

export default PortfolioGrid;

