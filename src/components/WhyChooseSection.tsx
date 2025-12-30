import { useEffect, useRef, useState } from 'react';
import { Zap, Users, Shield, Headphones } from 'lucide-react';

const whyChoose = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance that loads in milliseconds.',
  },
  {
    icon: Users,
    title: 'User-Centric',
    description: 'Designed with your customers in mind, always.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Built with best practices for security and uptime.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: "We're always here when you need assistance.",
  },
];

const stats = [
  { value: 150, suffix: '+', label: 'Projects Done' },
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 98, suffix: '%', label: 'Average Client Growth' },
  { value: 100, suffix: '+', label: 'Satisfied Clients' },
];

const CountUpNumber = ({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    const duration = 2000;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, target]);
  
  return (
    <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
      {count}{suffix}
    </span>
  );
};

const WhyChooseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Cliently?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not just developers – we're your partners in digital success.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          {/* Left Side - 2x2 Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:pr-12">
            {whyChoose.map((item, index) => (
              <div
                key={item.title}
                className="p-6 bg-card rounded-2xl border border-border/50 shadow-soft animate-fade-in-up group hover:border-foreground/20 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-foreground/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-foreground/20 transition-colors duration-300">
                  <item.icon className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Divider with fade effect */}
          <div className="hidden lg:flex items-center justify-center px-4">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
          </div>
          <div className="lg:hidden flex justify-center py-4">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {/* Right Side - Stats */}
          <div className="flex-1 grid grid-cols-2 gap-8 lg:pl-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center text-center p-6 animate-fade-in-up"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <CountUpNumber 
                  target={stat.value} 
                  suffix={stat.suffix} 
                  isVisible={isVisible} 
                />
                <span className="text-muted-foreground mt-2 text-sm md:text-base">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
