import { Link } from 'react-router-dom';
import { Heart, Target, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do, and it shows in every pixel and line of code.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every decision is made with your business goals in mind.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We\'re not just vendors – we\'re your digital growth partners.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We never settle for good enough. We aim for exceptional.',
  },
];

const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '40+', label: 'Happy Clients' },
  { number: '3+', label: 'Years Experience' },
  { number: '99%', label: 'Client Satisfaction' },
];

const approach = [
  'We listen first, build second',
  'Mobile-first, always',
  'Performance is non-negotiable',
  'Design that converts',
  'Clean, maintainable code',
  'Transparent communication',
];

const About = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/918356891147?text=Hi%20Cliently!%20I%20want%20to%20learn%20more%20about%20your%20team.', '_blank');
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-background overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
              The Story Behind{' '}
              <span className="text-foreground">Cliently</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up delay-100">
              We're a team of passionate developers and designers who believe every business deserves a beautiful, functional website.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Cliently Exists
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We started Cliently with a simple observation: too many businesses were struggling with outdated, slow, or ineffective websites. They needed digital solutions that actually worked – not just looked pretty.
                </p>
                <p>
                  Our founders came from backgrounds in both design and development, giving us a unique perspective on creating websites that balance aesthetics with functionality.
                </p>
                <p>
                  Today, we've helped dozens of businesses transform their online presence, from local shops to growing startups. Every project teaches us something new, and we bring that knowledge to every client we work with.
                </p>
              </div>
            </div>

            <div className="aspect-square rounded-3xl bg-card border border-border/50 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl font-bold text-foreground mb-4">C</div>
                <p className="text-foreground/80 font-medium">Building Digital Success Stories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To empower businesses of all sizes with modern, high-performing websites that drive real results. We believe technology should be accessible, affordable, and impactful.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These values guide everything we do, from how we communicate to how we code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 bg-card rounded-2xl border border-border/50 hover:border-foreground/20 transition-all duration-300 text-center group"
              >
                <div className="w-14 h-14 bg-foreground/10 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-foreground/20 transition-colors">
                  <value.icon className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] rounded-3xl bg-card border border-border/50 flex items-center justify-center order-2 lg:order-1">
              <Target className="h-32 w-32 text-foreground/20" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Approach
              </h2>
              <p className="text-muted-foreground mb-8">
                We've refined our process over years of working with businesses just like yours. Here's what sets us apart:
              </p>
              <div className="space-y-4">
                {approach.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-foreground flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-t border-border/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground mb-8">
              Ready to start your project? We'd love to hear about your business and how we can help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={openWhatsApp}
                className="rounded-full px-8 py-6 text-base bg-foreground text-background hover:bg-foreground/90"
              >
                Chat With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-8 py-6 text-base border-foreground/20 text-foreground hover:bg-foreground/5"
                asChild
              >
                <Link to="/contact">Send a Message</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
