import { useEffect, useState, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';

// Import feature images
import aiFeature from '@/assets/features/ai-feature.jpg';
import designFeature from '@/assets/features/design-feature.jpg';
import cmsFeature from '@/assets/features/cms-feature.jpg';
import collaborateFeature from '@/assets/features/collaborate-feature.jpg';

const features = [
  {
    id: 'ai',
    title: 'AI',
    description:
      'Generate site layouts and advanced components in seconds with AI, so you can skip the blank canvas and start designing with confidence.',
    image: aiFeature,
  },
  {
    id: 'design',
    title: 'Design',
    description:
      'Powerful design tools that give you complete creative freedom. Create stunning visuals with an intuitive interface.',
    image: designFeature,
  },
  {
    id: 'cms',
    title: 'CMS',
    description:
      'Built-in content management for dynamic, data-driven sites. Manage your content with ease and flexibility.',
    image: cmsFeature,
  },
  {
    id: 'collaborate',
    title: 'Collaborate',
    description:
      'Work together in real-time with your team, anywhere. Share feedback and iterate faster than ever.',
    image: collaborateFeature,
  },
];

const StickyFeaturesSection = () => {
  // 🔹 NOW NUMBER, NOT STRING
  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for mobile/tablet to disable sticky behavior if screen is small
    const mq = window.matchMedia('(max-width: 1024px)'); // Increased breakpoint for safety
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Scroll → index
  const featureIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, features.length - 1]
  );

  // 🔥 THIS MAKES IT MOVE
  useMotionValueEvent(featureIndex, 'change', (value) => {
    setActiveFeature(Math.round(value));
  });

  return (
    <section
      ref={containerRef}
      className="relative"
      style={!isMobile ? { height: `${features.length * 100}vh` } : undefined}
    >
      {!isMobile ? (
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="mx-auto max-w-7xl w-full px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* LEFT */}
            <div className="lg:w-2/5 pt-20 lg:pt-0">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-4xl font-bold italic leading-tight md:text-5xl lg:text-6xl"
              >
                Create,
                <br />
                collaborate,
                <br />
                and go live
              </motion.h2>

              <div className="space-y-1">
                {features.map((feature, index) => (
                  <motion.button
                    key={feature.id}
                    onClick={() => setActiveFeature(index)}
                    className={`w-full text-left py-4 border-l-2 pl-4 transition-all ${
                      activeFeature === index
                        ? 'border-foreground'
                        : 'border-transparent'
                    }`}
                  >
                    <h3
                      className={`text-lg font-semibold ${
                        activeFeature === index
                          ? 'text-foreground'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {feature.title}
                    </h3>

                    {activeFeature === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-sm text-muted-foreground mt-2 pr-4"
                      >
                        {feature.description}
                      </motion.p>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:w-3/5 relative h-[60vh] lg:h-[80vh] w-full">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    opacity: activeFeature === index ? 1 : 0,
                    y: activeFeature === index ? 0 : 60,
                    scale: activeFeature === index ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <div className="relative w-full h-full max-w-2xl max-h-[500px] rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-7xl w-full px-6 py-12 md:px-12">
          <h2 className="mb-8 text-3xl font-bold italic leading-tight text-center sm:text-left">
            Create, collaborate,<br />and go live
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="flex flex-col gap-4 rounded-2xl border border-border/50 p-6 bg-card shadow-sm"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-base text-muted-foreground">{feature.description}</p>
                </div>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mt-2 bg-muted">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default StickyFeaturesSection;
