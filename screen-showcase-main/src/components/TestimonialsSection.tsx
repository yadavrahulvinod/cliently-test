import { motion } from 'framer-motion';

// Import testimonial profile images
import person1 from '@/assets/testimonials/person-1.jpg';
import person2 from '@/assets/testimonials/person-2.jpg';
import person3 from '@/assets/testimonials/person-3.jpg';
import person4 from '@/assets/testimonials/person-4.jpg';
import person5 from '@/assets/testimonials/person-5.jpg';
import person6 from '@/assets/testimonials/person-6.jpg';
import person7 from '@/assets/testimonials/person-7.jpg';
import person8 from '@/assets/testimonials/person-8.jpg';
import person9 from '@/assets/testimonials/person-9.jpg';
import person10 from '@/assets/testimonials/person-10.jpg';

interface Testimonial {
  quote: string;
  name: string;
  company: string;
  image: string;
}

const testimonialRowOne: Testimonial[] = [
  {
    quote: "Our e-commerce store is beautiful and easy to manage. Sales have never been better!",
    name: "Priya Sharma",
    company: "Fashion Hub",
    image: person1,
  },
  {
    quote: "Professional, fast, and they truly understand what businesses need. Highly recommended!",
    name: "Amit Patel",
    company: "Patel Realty",
    image: person2,
  },
  {
    quote: "The booking system they built is seamless. Our customers love how easy it is to schedule appointments.",
    name: "Sneha Reddy",
    company: "Wellness Studio",
    image: person3,
  },
  {
    quote: "Transformed our online presence. The website they built increased our leads by 300% in just 3 months.",
    name: "Rajesh Kumar",
    company: "TechStart India",
    image: person4,
  },
  {
    quote: "The attention to detail and creative solutions exceeded our expectations completely.",
    name: "Kavitha Nair",
    company: "Nair Consultants",
    image: person5,
  },
];

const testimonialRowTwo: Testimonial[] = [
  {
    quote: "Outstanding work! The tracking portal they developed streamlined our entire operation.",
    name: "Vikram Singh",
    company: "Singh Logistics",
    image: person6,
  },
  {
    quote: "They captured our vision perfectly. The website truly represents our brand identity.",
    name: "Ananya Gupta",
    company: "Creative Agency",
    image: person7,
  },
  {
    quote: "From consultation to delivery, the experience was fantastic. Our online orders doubled!",
    name: "Rahul Mehta",
    company: "Mehta Foods",
    image: person8,
  },
  {
    quote: "The professional design and smooth functionality impressed all our clients.",
    name: "Deepika Iyer",
    company: "Iyer Law Firm",
    image: person9,
  },
  {
    quote: "Best investment we've made. The ROI from our new website has been incredible.",
    name: "Suresh Menon",
    company: "Menon Exports",
    image: person10,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex-shrink-0 w-[350px] md:w-[400px] p-6 mx-3 rounded-xl bg-card/50 border border-border/30 backdrop-blur-sm">
    <p className="text-foreground/90 text-sm md:text-base mb-6 leading-relaxed">
      "{testimonial.quote}"
    </p>
    <div className="flex items-center gap-3">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
      />
      <div>
        <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
        <p className="text-muted-foreground text-xs">{testimonial.company}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  // Duplicate testimonials for infinite scroll effect
  const rowOneItems = [...testimonialRowOne, ...testimonialRowOne, ...testimonialRowOne];
  const rowTwoItems = [...testimonialRowTwo, ...testimonialRowTwo, ...testimonialRowTwo];

  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Don't just take our word for it.
          </p>
        </motion.div>
      </div>

      {/* Row 1 - Scrolling left to right */}
      <div className="relative mb-6">
        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div
          className="flex"
          animate={{
            x: [0, -50 * rowOneItems.length / 3 + '%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {rowOneItems.map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 - Scrolling right to left */}
      <div className="relative">
        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div
          className="flex"
          animate={{
            x: [-50 * rowTwoItems.length / 3 + '%', 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {rowTwoItems.map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
