import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Portfolio items with varied sizes for masonry effect
const portfolioItems = [
  { id: 1, name: 'TechStart', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop', type: 'website' },
  { id: 2, name: 'Algo', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop', type: 'mobile' },
  { id: 3, name: 'Creative Flow', span: 'col-span-1 row-span-3', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop', type: 'mobile' },
  { id: 4, name: 'Canvas', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=600&fit=crop', type: 'website' },
  { id: 5, name: 'Voice AI', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=600&fit=crop', type: 'website' },
  { id: 6, name: 'Impact Studio', span: 'col-span-1 row-span-3', image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=400&h=800&fit=crop', type: 'mobile' },
  { id: 7, name: 'Town', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=600&fit=crop', type: 'website' },
  { id: 8, name: 'Haptic', span: 'col-span-1 row-span-3', image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=800&fit=crop', type: 'mobile' },
  { id: 9, name: 'Sona', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=600&fit=crop', type: 'website' },
  { id: 10, name: 'Comet', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop', type: 'mobile' },
  { id: 11, name: 'Novel Reading', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=600&fit=crop', type: 'website' },
  { id: 12, name: 'Datalands', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=400&h=600&fit=crop', type: 'mobile' },
  { id: 13, name: 'AI Assistant', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=600&fit=crop', type: 'website' },
  { id: 14, name: 'Polarsteps', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=400&h=600&fit=crop', type: 'mobile' },
  { id: 15, name: 'Growth', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop', type: 'website' },
  { id: 16, name: 'HiKeys', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=600&fit=crop', type: 'website' },
  { id: 17, name: 'Fashion Hub', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=400&h=600&fit=crop', type: 'mobile' },
  { id: 18, name: 'Patel Realty', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=600&fit=crop', type: 'website' },
  { id: 19, name: 'Wellness', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=400&h=600&fit=crop', type: 'mobile' },
  { id: 20, name: 'Singh Logistics', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=600&fit=crop', type: 'website' },
  { id: 21, name: 'Creative Agency', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1522542550221-31fd8575f1a4?w=400&h=600&fit=crop', type: 'mobile' },
  { id: 22, name: 'Mehta Foods', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=600&fit=crop', type: 'website' },
];

// Logo brands
const brands = [
  'BIRD', 'SPACEX', 'ElevenLabs', 'Dribbble', 'miro', 'perplexity', 'DOORDASH', 'mixpanel'
];

const PortfolioCollage = () => {
  return (
    <section className="py-8 bg-background overflow-hidden">
      {/* Portfolio Grid - 7 columns masonry style */}
      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 px-2">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`${item.span} min-h-[120px] rounded-xl overflow-hidden relative group cursor-pointer transition-transform duration-300 hover:scale-[1.02]`}
            >
              <img 
                src={item.image} 
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-medium text-foreground">
                  {item.name}
                </span>
                <span className="text-[10px] text-muted-foreground capitalize">
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom blur gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none" />
        
        {/* See More Button - glowing effect */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <Button
            asChild
            className="rounded-full px-8 py-6 text-base bg-foreground/10 backdrop-blur-sm border border-foreground/20 text-foreground hover:bg-foreground/20 animate-glow-pulse"
          >
            <Link to="/portfolio">See More</Link>
          </Button>
        </div>
      </div>

      {/* Brand logos */}
      <div className="container mt-16">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-sm md:text-base font-semibold text-muted-foreground/50 tracking-wider"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioCollage;
