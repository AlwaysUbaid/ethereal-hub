
import React from 'react';
import AnimatedText from '../ui/AnimatedText';
import GlassCard from '../ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1/2 h-1/2 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedText 
              text="Get in Touch" 
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
              className="text-xl text-foreground/70 mt-4"
              delay={600}
              tag="p"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <GlassCard className="p-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Chat with us</h3>
                    <p className="text-foreground/70 mb-4">Our customer support team is available 24/7 to answer your questions.</p>
                    <Button variant="outline" className="border-foreground/20 hover:bg-foreground/5">
                      Start a conversation
                    </Button>
                  </div>
                </div>
              </GlassCard>
              
              <GlassCard className="p-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email us</h3>
                    <p className="text-foreground/70 mb-2">Send us an email and we'll get back to you shortly.</p>
                    <a href="mailto:support@elysium.com" className="text-primary hover:underline">support@elysium.com</a>
                  </div>
                </div>
              </GlassCard>
              
              <GlassCard className="p-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Call us</h3>
                    <p className="text-foreground/70 mb-2">Our phone lines are open during business hours.</p>
                    <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a>
                  </div>
                </div>
              </GlassCard>
              
              <GlassCard className="p-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Visit us</h3>
                    <p className="text-foreground/70 mb-2">Stop by our office during business hours.</p>
                    <address className="not-italic text-foreground/80">
                      123 Trading Street<br />
                      Crypto City, CC 12345<br />
                      United States
                    </address>
                  </div>
                </div>
              </GlassCard>
            </div>
            
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <GlassCard className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 bg-background/50 border border-border rounded-md focus:ring-2 focus:ring-primary/50 focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 bg-background/50 border border-border rounded-md focus:ring-2 focus:ring-primary/50 focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea
                      id="message"
                      className="w-full px-4 py-2 bg-background/50 border border-border rounded-md focus:ring-2 focus:ring-primary/50 focus:outline-none min-h-[150px]"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
