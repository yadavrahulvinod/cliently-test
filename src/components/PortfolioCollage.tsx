import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Portfolio items with varied sizes for masonry effect
const baseItems = [
  { id: 1, name: 'TechStart', span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop', type: 'website' },
  { id: 2, name: 'Algo', span: 'col-span-1 row-span-1 md:row-span-2', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop', type: 'mobile' },
  { id: 3, name: 'Creative Flow', span: 'col-span-1 row-span-1', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop', type: 'mobile' },
  { id: 4, name: 'Canvas', span: 'col-span-1 row-span-1 md:col-span-2', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop', type: 'website' },
  { id: 5, name: 'Voice AI', span: 'col-span-1 row-span-1 md:row-span-2', image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=600&fit=crop', type: 'website' },
  { id: 6, name: 'Impact Studio', span: 'col-span-1 row-span-1', image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=400&h=400&fit=crop', type: 'mobile' },
  { id: 7, name: 'Town', span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=800&fit=crop', type: 'website' },
  { id: 8, name: 'Haptic', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=800&fit=crop', type: 'mobile' },
  { id: 9, name: 'Sona', span: 'col-span-1 row-span-1', image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=400&fit=crop', type: 'website' },
  { id: 10, name: 'Comet', span: 'col-span-1 row-span-1 md:col-span-2', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop', type: 'mobile' },
  { id: 11, name: 'Novel Reading', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=800&fit=crop', type: 'website' },
  { id: 12, name: 'Datalands', span: 'col-span-1 row-span-1', image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=400&h=400&fit=crop', type: 'mobile' },
  { id: 13, name: 'AI Assistant', span: 'col-span-1 row-span-1 md:row-span-2', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=800&fit=crop', type: 'website' },
  { id: 14, name: 'Polarsteps', span: 'col-span-1 row-span-1 md:col-span-2', image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&h=400&fit=crop', type: 'mobile' },
  { id: 15, name: 'Growth', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=800&fit=crop', type: 'website' },
  { id: 16, name: 'HiKeys', span: 'col-span-1 row-span-1', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=400&fit=crop', type: 'website' },
  { id: 17, name: 'Fashion Hub', span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2', image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800&h=800&fit=crop', type: 'mobile' },
  { id: 18, name: 'Patel Realty', span: 'col-span-1 row-span-1', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop', type: 'website' },
  { id: 19, name: 'Wellness', span: 'col-span-1 row-span-2', image: 'https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=400&h=800&fit=crop', type: 'mobile' },
  { id: 20, name: 'Singh Logistics', span: 'col-span-1 row-span-1', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop', type: 'website' },
];

// Duplicate items to fill the grid
// Extend items slightly to fill ~1.25 pages (add 8 more items)
// Use base items only to limit height to ~1 page
const portfolioItems = baseItems;

// Logo brands
const brands = [
  'BIRD', 'SPACEX', 'ElevenLabs', 'Dribbble', 'miro', 'perplexity', 'DOORDASH', 'mixpanel'
];

const PortfolioCollage = () => {
  return (
    <section className="bg-background flex flex-col pt-8 relative">
      {/* Side Gradients for "Infinite" look */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Top/Bottom Gradients for section transitions */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      {/* Portfolio Grid - Dense masonry style */}
      <div className="flex-1 w-full max-w-[1920px] mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 px-2 auto-rows-[200px]">
          {portfolioItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className={`${item.span} relative group cursor-pointer overflow-hidden rounded-lg`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-lg font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.name}
                </span>
                <span className="text-sm text-white/80 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand logos - floating at the bottom or separate section */}
      <div className="py-12 border-t border-border/10 mt-2">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-lg md:text-xl font-bold tracking-wider"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCollage;
