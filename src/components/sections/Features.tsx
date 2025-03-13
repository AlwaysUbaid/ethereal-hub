
import React, { useEffect, useState } from 'react';
import GlassCard from '../ui/GlassCard';
import AnimatedText from '../ui/AnimatedText';
import { Shield, BarChart, RefreshCw, Zap, Terminal, Layers } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const features: Feature[] = [
    {
      icon: <Terminal className="h-8 w-8 text-primary" />,
      title: "Exchange Connectivity",
      description: "Connect seamlessly to both Hyperliquid mainnet and testnet environments for all your trading needs."
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Trading Capabilities",
      description: "Execute both spot and perpetual futures trading with adjustable leverage to maximize your strategies."
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Advanced Order Types",
      description: "Place market, limit, and scaled orders with fully customizable parameters for precise execution."
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-primary" />,
      title: "TWAP Execution",
      description: "Implement Time-Weighted Average Price strategy to optimize execution of large orders over time."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Position Management",
      description: "Monitor and manage your trading positions with comprehensive tools for risk assessment."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Enhanced Security",
      description: "Trade with confidence using our password-protected interface and secure connection protocols."
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
            text="Key Features" 
            className="text-sm md:text-base uppercase tracking-wider text-primary mb-2"
            tag="p"
          />
          <AnimatedText 
            text="Advanced Trading Functionality" 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            delay={300}
            tag="h2"
          />
          <AnimatedText 
            text="Discover the powerful capabilities that make Elysium the preferred platform for professional traders" 
            className="text-xl text-foreground/70 mt-4"
            delay={600}
            tag="p"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <GlassCard className="h-full p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="bg-primary/10 p-4 rounded-lg mb-4 self-start">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.description}</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
