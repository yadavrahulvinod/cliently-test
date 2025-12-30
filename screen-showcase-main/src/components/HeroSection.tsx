import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 pb-8 pt-32 text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6 flex items-center gap-3 rounded-full border border-border bg-card/50 px-4 py-2"
      >
        <span className="text-lg">🏆</span>
        <div className="text-left">
          <p className="text-sm font-medium text-foreground">2025 Design Awards</p>
          <p className="text-xs text-muted-foreground">Submissions now open</p>
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
      >
        Build better
        <br />
        sites, faster
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-8 max-w-xl text-base text-muted-foreground md:text-lg"
      >
        The site builder trusted by startups to Fortune 500. Build fast and scale with an integrated CMS, SEO, Analytics, and more.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href="#"
          className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary"
        >
          Start for free
        </a>
        <a
          href="#"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Start with AI
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
