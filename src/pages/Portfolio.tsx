import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Business', 'Real Estate', 'Services', 'E-commerce'];

const projects = [
  {
    id: 1,
    name: 'TechStart India',
    category: 'Business',
    description: 'Modern corporate website for a tech startup with dynamic content management.',
    gradient: 'from-primary/30 to-accent',
  },
  {
    id: 2,
    name: 'Fashion Hub',
    category: 'E-commerce',
    description: 'Full-featured e-commerce platform with inventory management and secure checkout.',
    gradient: 'from-accent to-primary/20',
  },
  {
    id: 3,
    name: 'Patel Realty',
    category: 'Real Estate',
    description: 'Property listing website with advanced search and virtual tour integration.',
    gradient: 'from-primary/20 to-secondary',
  },
  {
    id: 4,
    name: 'CleanPro Services',
    category: 'Services',
    description: 'Service booking platform with online scheduling and payment integration.',
    gradient: 'from-secondary to-accent',
  },
  {
    id: 5,
    name: 'GreenGrow Organics',
    category: 'E-commerce',
    description: 'Organic food delivery platform with subscription management.',
    gradient: 'from-accent to-primary/30',
  },
  {
    id: 6,
    name: 'Sharma & Associates',
    category: 'Business',
    description: 'Professional law firm website with case study showcases and client portal.',
    gradient: 'from-primary/40 to-accent',
  },
  {
    id: 7,
    name: 'DreamHome Builders',
    category: 'Real Estate',
    description: 'Construction company website with project galleries and lead generation.',
    gradient: 'from-secondary to-primary/20',
  },
  {
    id: 8,
    name: 'FitLife Studio',
    category: 'Services',
    description: 'Fitness studio website with class booking and membership management.',
    gradient: 'from-primary/25 to-accent',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  const openWhatsApp = () => {
    window.open('https://wa.me/918356891147?text=Hi%20Cliently!%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20a%20similar%20project.', '_blank');
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 hero-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
              Our Work{' '}
              <span className="text-primary">Speaks For Itself</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up delay-100">
              Explore our portfolio of successful projects across various industries. Each website is crafted with care and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-soft-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Project Image */}
                <div className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-background/90 rounded-full flex items-center justify-center">
                      <ExternalLink className="h-5 w-5 text-foreground" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <span className="text-xs font-medium text-primary bg-accent px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want Something Similar?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss your project and create something amazing together. Every business deserves a website that stands out.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="default" size="xl" onClick={openWhatsApp}>
                Let's Build It
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
