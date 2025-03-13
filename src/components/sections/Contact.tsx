
import React, { useState } from 'react';
import AnimatedText from '../ui/AnimatedText';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Send, Mail } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate sending the form data
    console.log('Form submitted:', data);
    
    // Reset form after "submission"
    setTimeout(() => {
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] opacity-50"></div>
      <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px] opacity-50"></div>
      
      <div className="container max-w-5xl mx-auto px-4 md:px-0 relative z-10">
        <div className="text-center mb-12">
          <AnimatedText 
            text="GET IN TOUCH" 
            className="text-sm md:text-base uppercase tracking-wider text-primary mb-2"
            tag="p"
          />
          <AnimatedText 
            text="Contact us today" 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            delay={300}
            tag="h2"
          />
          <AnimatedText 
            text="Have questions about Elysium or need assistance? Our team is here to help." 
            className="text-xl text-foreground/70 mt-4 max-w-2xl mx-auto"
            delay={600}
            tag="p"
          />
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Email info card */}
          <div className="mb-10 flex justify-center items-center space-x-3 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            <div className="bg-primary/10 p-3 rounded-full">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <a href="mailto:support@elysium.com" className="text-lg hover:text-primary transition-colors">
              support@elysium.com
            </a>
          </div>

          {/* Contact form */}
          <div className="backdrop-blur-lg bg-black/20 border border-white/10 rounded-2xl p-8 shadow-xl opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground/80">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    {...form.register('name')}
                    className="bg-background/30 border-white/10 focus:border-primary/50"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground/80">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register('email')}
                    className="bg-background/30 border-white/10 focus:border-primary/50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-medium text-foreground/80">
                  Subject
                </Label>
                <Input
                  id="subject"
                  {...form.register('subject')}
                  className="bg-background/30 border-white/10 focus:border-primary/50"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-foreground/80">
                  Message
                </Label>
                <Textarea
                  id="message"
                  {...form.register('message')}
                  className="bg-background/30 border-white/10 focus:border-primary/50 min-h-[150px] resize-none"
                  placeholder="Your message here..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 transition-all py-6 text-base"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
