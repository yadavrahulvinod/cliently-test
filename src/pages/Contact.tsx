import { useState } from 'react';
import { Phone, Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const solutions = [
  { value: 'business-website', label: 'Business Website' },
  { value: 'e-commerce', label: 'E-commerce Store' },
  { value: 'portfolio', label: 'Portfolio Website' },
  { value: 'landing-page', label: 'Landing Page' },
  { value: 'web-application', label: 'Web Application' },
  { value: 'booking-system', label: 'Booking System' },
  { value: 'other', label: 'Other' },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    solution: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSolutionChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      solution: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const now = new Date();
    const dateTime = now.toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    // Google Sheets Web App URL - using Google Apps Script
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxdJ5dVk7mLS4Cjf056FfVke15-HmRjtoa-VTUoN2tR18hjOipETc7oQ5hz97fermiNwQ/exec';

    try {
      const selectedSolution = solutions.find(s => s.value === formData.solution)?.label || formData.solution;
      
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        businessName: formData.businessName,
        solution: selectedSolution,
        message: formData.message,
        dateTime: dateTime,
      };

      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(payload),
      });

      setIsSubmitted(true);
      toast({
        title: 'Message sent!',
        description: 'Thanks! We will reach out soon.',
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        solution: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description: 'Please try WhatsApp or email instead.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/918356891147?text=Hi%20Cliently!%20I%27m%20interested%20in%20building%20a%20website.', '_blank');
  };

  const openEmail = () => {
    window.location.href = 'mailto:cliently.live@gmail.com?subject=Website%20Inquiry';
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 hero-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
              Let's Build Your{' '}
              <span className="text-primary">Website</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up delay-100">
              Ready to transform your online presence? Reach out and let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Choose your preferred way to reach us. We typically respond within a few hours.
              </p>

              <div className="space-y-4">
                {/* WhatsApp */}
                <button
                  onClick={openWhatsApp}
                  className="w-full p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-soft-lg transition-all duration-300 flex items-center gap-4 text-left group"
                >
                  <div className="w-14 h-14 bg-[hsl(142,70%,45%)]/10 rounded-xl flex items-center justify-center group-hover:bg-[hsl(142,70%,45%)]/20 transition-colors">
                    <MessageSquare className="h-7 w-7 text-[hsl(142,70%,45%)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm">+91 83568 91147</p>
                    <p className="text-xs text-primary mt-1">Fastest response</p>
                  </div>
                </button>

                {/* Email */}
                <button
                  onClick={openEmail}
                  className="w-full p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-soft-lg transition-all duration-300 flex items-center gap-4 text-left group"
                >
                  <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground text-sm">cliently.live@gmail.com</p>
                    <p className="text-xs text-muted-foreground mt-1">For detailed inquiries</p>
                  </div>
                </button>

                {/* Phone */}
                <a
                  href="tel:+918356891147"
                  className="w-full p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-soft-lg transition-all duration-300 flex items-center gap-4 text-left group"
                >
                  <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Phone className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground text-sm">+91 83568 91147</p>
                    <p className="text-xs text-muted-foreground mt-1">Mon-Sat, 10am-7pm IST</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card rounded-3xl border border-border p-8 md:p-10">
                <h2 className="text-2xl font-bold text-foreground mb-2">Send a Message</h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Thanks for reaching out!
                    </h3>
                    <p className="text-muted-foreground">
                      We will reach out soon.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-12 rounded-xl"
                        />
                      </div>
                      <div>
                        <label htmlFor="businessName" className="text-sm font-medium text-foreground mb-2 block">
                          Business Name
                        </label>
                        <Input
                          id="businessName"
                          name="businessName"
                          placeholder="Your company"
                          value={formData.businessName}
                          onChange={handleChange}
                          className="h-12 rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="solution" className="text-sm font-medium text-foreground mb-2 block">
                        What solution are you looking for? *
                      </label>
                      <Select value={formData.solution} onValueChange={handleSolutionChange} required>
                        <SelectTrigger className="h-12 rounded-xl">
                          <SelectValue placeholder="Select a solution" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border border-border">
                          {solutions.map((solution) => (
                            <SelectItem key={solution.value} value={solution.value}>
                              {solution.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                        Requirements / Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="rounded-xl resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-xl"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prefer a Quick Chat?
            </h2>
            <p className="text-muted-foreground mb-8">
              WhatsApp is the fastest way to reach us. We're usually online and ready to help!
            </p>
            <Button variant="whatsapp" size="xl" onClick={openWhatsApp}>
              <MessageSquare className="mr-2 h-5 w-5" />
              Start WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;