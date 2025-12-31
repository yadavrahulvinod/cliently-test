import { useState, useRef, useEffect } from 'react';

interface Testimonial {
  name: string;
  company: string;
  text: string;
  avatar: string;
  image?: string;
}

interface TestimonialMarqueeProps {
  testimonials: Testimonial[];
  direction?: 'left' | 'right';
  speed?: number;
}

// Generic professional headshot images
const testimonialImages = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
];

const TestimonialCard = ({ testimonial, imageIndex }: { testimonial: Testimonial; imageIndex: number }) => (
  <div className="flex-shrink-0 w-[280px] md:w-[350px] mx-3 p-6 bg-card rounded-2xl border border-white/10 shadow-2xl hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 group hover:border-foreground/20 whitespace-normal">
    <p className="text-foreground/80 text-sm leading-relaxed mb-6 line-clamp-4">
      "{testimonial.text}"
    </p>
    <div className="flex items-center gap-3">
      <img
        src={testimonialImages[imageIndex % testimonialImages.length]}
        alt={testimonial.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">{testimonial.company}</p>
      </div>
    </div>
  </div>
);

const TestimonialMarquee = ({ testimonials, direction = 'left', speed = 30 }: TestimonialMarqueeProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Create a sufficient number of duplicates to fill the screen + buffer
  // For a typical 1920px screen and 350px cards, we need about 6 cards visible.
  // 4 testimonials * 350px = 1400px (might be short).
  // Let's quadruple the testimonials to be safe.
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <div
      ref={containerRef}
      className="flex overflow-hidden select-none"
      onMouseDown={() => setIsPaused(true)}
      onMouseUp={() => setIsPaused(false)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div
        className={`flex ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'}`}
        style={{
          '--duration': `${speed}s`,
          animationPlayState: isPaused ? 'paused' : 'running',
          width: 'max-content'
        } as React.CSSProperties}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} imageIndex={index} />
        ))}
      </div>
      {/* Duplicate the track to ensure seamless loop if using CSS transform on the parent? 
          Actually, the standard way is:
          Container > Inner (width: max-content, animate: translateX)
          Inner contains 2 sets of items. 
          0% -> 0, 100% -> -50% (if 2 sets).
          
          If I have 4 sets above, I should animate from 0 to -25%? 
          Or simpler: make sure the list is long enough, and just animate -50% of the WHOLE width.
          Wait, if I animate -50%, I need exactly 2 identical halves.
          
          So:
          const items = [...testimonials, ...testimonials]; // 2 halves
          But if testimonials are few, 2 halves might not fill screen.
          
          Better:
          const set = [...testimonials]; // Ensure this set is wide enough (e.g. repeat it if needed).
          Then create TWO of these sets.
      */}
    </div>
  );
};

// Re-implementing correctly for CSS infinite loop
const TestimonialMarqueeFixed = ({ testimonials, direction = 'left', speed = 40 }: TestimonialMarqueeProps) => {
  const [isPaused, setIsPaused] = useState(false);

  // Ensure we have enough items to fill a wide screen
  // 350px per card + 24px margin (mx-3 * 2) = ~374px
  // 1920 / 374 ~= 5.1 items.
  // If testimonials.length is 4, we need to double it first to be safe as a "base set".
  const baseSet = testimonials.length < 5 ? [...testimonials, ...testimonials] : testimonials;

  return (
    <div
      className="overflow-hidden whitespace-nowrap"
      onMouseDown={() => setIsPaused(true)}
      onMouseUp={() => setIsPaused(false)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div
        className={`inline-flex ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'}`}
        style={{
          '--duration': `${speed}s`,
          animationPlayState: isPaused ? 'paused' : 'running',
        } as React.CSSProperties}
      >
        {/* Render the set twice for infinite loop effect (0 to -50%) */}
        <div className="flex">
          {baseSet.map((testimonial, index) => (
            <TestimonialCard key={`a-${index}`} testimonial={testimonial} imageIndex={index} />
          ))}
        </div>
        <div className="flex">
          {baseSet.map((testimonial, index) => (
            <TestimonialCard key={`b-${index}`} testimonial={testimonial} imageIndex={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialMarqueeFixed;
