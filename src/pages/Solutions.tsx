import { Link } from 'react-router-dom';
import { Globe, Code, ShoppingCart, Building2, Lightbulb, Palette, Wrench, Rocket, Settings, BarChart, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    icon: Globe,
    title: 'Static Websites',
    description: 'Perfect for businesses that need a professional online presence without complex functionality.',
    purpose: 'Showcase your brand, services, and contact information with lightning-fast load times.',
    features: [
      'Mobile-responsive design',
      'SEO optimized structure',
      'Fast loading speeds',
      'Easy content updates',
      'Contact forms',
      'Social media integration',
    ],
    industries: ['Restaurants', 'Consultants', 'Freelancers', 'Local Services', 'Personal Brands'],
  },
  {
    icon: Code,
    title: 'Dynamic Websites',
    description: 'Interactive websites with real-time content updates and user engagement features.',
    purpose: 'Engage users with dynamic content, user accounts, and real-time data.',
    features: [
      'User authentication',
      'Content management system',
      'Real-time updates',
      'Database integration',
      'API connections',
      'Analytics dashboard',
    ],
    industries: ['Startups', 'Media', 'Education', 'SaaS', 'Healthcare'],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Websites',
    description: 'Full-featured online stores that drive sales and manage inventory seamlessly.',
    purpose: 'Sell products online with secure checkout, inventory management, and order tracking.',
    features: [
      'Product catalog',
      'Secure payment gateway',
      'Inventory management',
      'Order tracking',
      'Customer accounts',
      'Multi-currency support',
    ],
    industries: ['Retail', 'Fashion', 'Electronics', 'Food & Beverage', 'Handmade Goods'],
  },
  {
    icon: Building2,
    title: 'Enterprise Platforms',
    description: 'Scalable solutions for complex business operations and custom workflows.',
    purpose: 'Streamline operations with custom platforms built for your specific business needs.',
    features: [
      'Custom workflows',
      'Role-based access',
      'Advanced reporting',
      'Third-party integrations',
      'High scalability',
      'Dedicated support',
    ],
    industries: ['Manufacturing', 'Finance', 'Real Estate', 'Logistics', 'Government'],
  },
];

const processSteps = [
  {
    icon: Lightbulb,
    title: 'Discovery',
    description: 'We learn about your business, goals, and target audience.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Creating beautiful, intuitive designs that align with your brand.',
  },
  {
    icon: Wrench,
    title: 'Development',
    description: 'Building your website with clean, efficient, modern code.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Testing, optimizing, and deploying your website live.',
  },
  {
    icon: Settings,
    title: 'Optimization',
    description: 'Fine-tuning performance, SEO, and user experience.',
  },
  {
    icon: BarChart,
    title: 'Growth',
    description: 'Ongoing support and improvements based on analytics.',
  },
];

const Solutions = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/918356891147?text=Hi%20Cliently!%20I%27m%20interested%20in%20your%20website%20solutions.', '_blank');
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-background overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
              Website Solutions for{' '}
              <span className="text-foreground">Every Business</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up delay-100">
              Whether you're a startup or an enterprise, we have the perfect solution to help you succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-foreground/10 rounded-xl flex items-center justify-center">
                      <solution.icon className="h-7 w-7 text-foreground" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{solution.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">{solution.description}</p>
                  <p className="text-foreground/80 mb-8">{solution.purpose}</p>

                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-4">Key Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-foreground flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Industries We Serve</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.industries.map((industry) => (
                        <span
                          key={industry}
                          className="text-xs font-medium px-3 py-1 bg-card text-foreground/80 rounded-full border border-border/50"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-3xl bg-card border border-border/50 flex items-center justify-center">
                    <solution.icon className="h-32 w-32 text-foreground/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven 6-step process that ensures your project is delivered on time, on budget, and beyond expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative p-8 bg-card rounded-2xl border border-border/50 hover:border-foreground/20 transition-all duration-300 group"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-foreground rounded-full flex items-center justify-center text-background font-bold text-sm">
                  {index + 1}
                </div>
                <div className="w-12 h-12 bg-foreground/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-foreground/20 transition-colors">
                  <step.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-t border-border/50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss which solution is right for your business. No pressure, just a friendly conversation.
          </p>
          <Button
            onClick={openWhatsApp}
            className="rounded-full px-8 py-6 text-base bg-foreground text-background hover:bg-foreground/90"
          >
            Talk to Us on WhatsApp
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Solutions;
