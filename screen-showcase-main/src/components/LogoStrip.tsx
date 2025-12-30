import { motion } from 'framer-motion';

const logos = [
  'BIRD',
  'SPACEX',
  'ElevenLabs',
  'Dribbble',
  'miro',
  'perplexity',
  'DOORDASH',
  'mixpanel',
];

const LogoStrip = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="py-16"
    >
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 px-8">
        {logos.map((logo, index) => (
          <motion.span
            key={logo}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
            className="text-sm font-semibold tracking-wider text-muted-foreground transition-colors hover:text-foreground md:text-base"
          >
            {logo}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
};

export default LogoStrip;
