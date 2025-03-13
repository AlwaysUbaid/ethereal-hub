
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import AnimatedText from '../ui/AnimatedText';
import GlassCard from '../ui/GlassCard';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const orbitRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbitRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = orbitRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const moveX = (clientX - centerX) / 40;
      const moveY = (clientY - centerY) / 40;
      
      orbitRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section className="min-h-screen pt-24 pb-20 flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <AnimatedText 
                text="Welcome to" 
                className="text-xl md:text-2xl font-light text-foreground/80"
                tag="p"
              />
              <AnimatedText 
                text="Elysium" 
                className="text-5xl md:text-7xl font-bold text-foreground"
                delay={300}
                tag="h1"
              />
              <AnimatedText 
                text="The future of digital experience" 
                className="text-xl md:text-2xl text-foreground/80 mt-2"
                delay={600}
                tag="p"
              />
            </div>
            
            <AnimatedText 
              text="Elevate your digital presence with our innovative platform designed for the modern world. Seamless integration, powerful analytics, and intuitive design all in one solution."
              className="text-foreground/70 text-lg max-w-xl"
              delay={900}
              tag="p"
            />
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-foreground/20 hover:bg-foreground/5">
                Learn More
              </Button>
            </div>
            
            <div className="pt-8 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
              <GlassCard className="flex items-center justify-between p-4 max-w-md">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-foreground/80">1,000+ active users</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-foreground/80">99.9% uptime</span>
                </div>
              </GlassCard>
            </div>
          </div>
          
          <div className="perspective relative hidden lg:block">
            <div 
              ref={orbitRef}
              className="w-full aspect-square relative transition-transform duration-300 ease-out preserve-3d"
            >
              <div className="absolute inset-0 backface-hidden animate-float opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                <GlassCard className="w-80 h-80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 animate-spin-slow"></div>
                </GlassCard>
                <GlassCard className="w-56 h-56 absolute top-0 right-1/4 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary/40 rounded-xl"></div>
                </GlassCard>
                <GlassCard className="w-44 h-44 absolute bottom-1/4 left-0 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted/30 rounded-xl"></div>
                </GlassCard>
                <GlassCard className="w-36 h-36 absolute bottom-0 right-0 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="w-full h-full bg-gradient-to-br from-accent/30 to-primary/20 rounded-xl"></div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
