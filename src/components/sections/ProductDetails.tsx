
import React from 'react';
import AnimatedText from '../ui/AnimatedText';
import GlassCard from '../ui/GlassCard';
import { Terminal, Code, ServerCrash, Command, Laptop, GitBranch } from 'lucide-react';

const ProductDetails: React.FC = () => {
  return (
    <section id="product" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-1/2 h-1/2 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1/2 h-1/2 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText 
            text="PRODUCT DETAILS" 
            className="text-sm md:text-base uppercase tracking-wider text-primary mb-2"
            tag="p"
          />
          <AnimatedText 
            text="Command Line Power for Advanced Trading" 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            delay={300}
            tag="h2"
          />
          <AnimatedText 
            text="A closer look at what makes Elysium the preferred tool for professional traders" 
            className="text-xl text-foreground/70 mt-4"
            delay={600}
            tag="p"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <GlassCard className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Terminal className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Terminal-Based Interface</h3>
                  <p className="text-foreground/70">Elysium's command-line interface allows for rapid execution of complex trading strategies with minimal latency.</p>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Script-Based Automation</h3>
                  <p className="text-foreground/70">Create, save, and run custom trading scripts to automate repeated tasks and complex trading sequences.</p>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <ServerCrash className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Low Latency Execution</h3>
                  <p className="text-foreground/70">Optimized network protocols ensure your orders reach the exchange with minimal delay, even during high volatility.</p>
                </div>
              </div>
            </GlassCard>
          </div>
          
          <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <GlassCard className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Command className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Advanced Command Set</h3>
                  <p className="text-foreground/70">Over 50 specialized commands designed specifically for professional trading on Hyperliquid exchange.</p>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cross-Platform Compatibility</h3>
                  <p className="text-foreground/70">Available for Windows, macOS, and Linux, with consistent behavior and performance across all platforms.</p>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Version Control</h3>
                  <p className="text-foreground/70">Track and manage different versions of your trading strategies with built-in versioning functionality.</p>
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
