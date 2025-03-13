
import React, { useRef, useEffect } from 'react';
import GlassCard from '../ui/GlassCard';
import AnimatedText from '../ui/AnimatedText';
import { Check } from 'lucide-react';

const ProductDetails: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      
      const scrollY = window.scrollY;
      const elementTop = imageRef.current.offsetTop;
      const elementHeight = imageRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      const scrollPosition = (scrollY - elementTop + windowHeight) / (elementHeight + windowHeight);
      const rotateValue = Math.min(Math.max(scrollPosition * 10, 0), 5);
      
      imageRef.current.style.transform = `perspective(1000px) rotateY(${rotateValue}deg)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const features = [
    "Intuitive dashboard with customizable widgets",
    "Real-time data synchronization across all devices",
    "Advanced AI-powered recommendations",
    "Comprehensive data visualization tools",
    "Automated workflow management",
    "Seamless third-party integrations"
  ];
  
  return (
    <section id="product" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedText 
              text="Discover Elysium" 
              className="text-sm md:text-base uppercase tracking-wider text-primary mb-2"
              tag="p"
            />
            <AnimatedText 
              text="The perfect solution for modern businesses" 
              className="text-3xl md:text-4xl font-bold text-foreground"
              delay={300}
              tag="h2"
            />
            <AnimatedText 
              text="Designed with precision and crafted for performance, Elysium delivers exceptional value through its comprehensive suite of features." 
              className="text-xl text-foreground/70 mt-4 mb-8"
              delay={600}
              tag="p"
            />
            
            <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-foreground/80">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className="transition-transform duration-700 ease-out opacity-0 animate-fade-in"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <GlassCard className="p-0 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-secondary via-secondary/80 to-secondary/40 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 aspect-[16/9] bg-gradient-to-br from-black/20 to-black/5 rounded-lg glass-card overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center mb-6">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 w-3/4 bg-white/10 rounded"></div>
                        <div className="h-4 w-1/2 bg-white/10 rounded"></div>
                        <div className="h-4 w-5/6 bg-white/10 rounded"></div>
                        <div className="h-20 w-full bg-white/5 rounded mt-4"></div>
                        <div className="grid grid-cols-3 gap-2 mt-4">
                          <div className="h-12 bg-white/5 rounded"></div>
                          <div className="h-12 bg-white/5 rounded"></div>
                          <div className="h-12 bg-primary/20 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-xs text-white/80">
                    Elysium Dashboard
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
