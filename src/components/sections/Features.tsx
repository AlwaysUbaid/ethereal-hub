
import React, { useState, useEffect } from 'react';
import GlassCard from '../ui/GlassCard';
import AnimatedText from '../ui/AnimatedText';
import { Zap, Shield, BarChart, Layers, Compass, Globe } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveFeature(0);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, []);
  
  const features: Feature[] = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Lightning Fast",
      description: "Experience unparalleled performance with our optimized architecture delivering instant results."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and advanced threat protection to keep your data secure and private."
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Advanced Analytics",
      description: "Gain valuable insights with our powerful analytics tools designed for actionable intelligence."
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Seamless Integration",
      description: "Connect with your existing workflow through our extensive API and integration capabilities."
    },
    {
      icon: <Compass className="h-8 w-8 text-primary" />,
      title: "Intuitive Interface",
      description: "Navigate effortlessly with our user-centered design that prioritizes ease of use."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Accessibility",
      description: "Access your data anytime, anywhere with our globally distributed infrastructure."
    }
  ];
  
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText 
            text="Feature-rich platform" 
            className="text-sm md:text-base uppercase tracking-wider text-primary mb-2"
            tag="p"
          />
          <AnimatedText 
            text="Powerful capabilities designed for you" 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            delay={300}
            tag="h2"
          />
          <AnimatedText 
            text="Discover how Elysium transforms your digital experience with these innovative features" 
            className="text-xl text-foreground/70 mt-4"
            delay={600}
            tag="p"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <GlassCard
              key={index}
              className={`p-8 transition-all duration-500 ease-in-out opacity-0 ${
                activeFeature !== null && index <= activeFeature ? 'animate-scale-in opacity-100' : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
              hoverEffect={true}
              onClick={() => {}}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
