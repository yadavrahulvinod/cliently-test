import { motion } from 'framer-motion';

const FeaturesSection = () => {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-4xl font-bold italic leading-tight text-foreground md:text-5xl lg:text-6xl"
        >
          Create,
          <br />
          collaborate,
          <br />
          and go live
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'AI',
              description: 'Generate site layouts and advanced components in seconds with AI.',
            },
            {
              title: 'Design',
              description: 'Powerful design tools that give you complete creative freedom.',
            },
            {
              title: 'CMS',
              description: 'Built-in content management for dynamic, data-driven sites.',
            },
            {
              title: 'Collaborate',
              description: 'Work together in real-time with your team, anywhere.',
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Learn more
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
