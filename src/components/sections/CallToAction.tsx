
import React from 'react';
import { Button } from "@/components/ui/button";
import GlassCard from '../ui/GlassCard';
import AnimatedText from '../ui/AnimatedText';
import { ArrowRight, Github, ExternalLink, Download, Command } from 'lucide-react';

const CallToAction: React.FC = () => {
  const resources = [
    {
      icon: <Command className="h-6 w-6 text-primary" />,
      title: "Command Reference",
      description: "Explore the complete list of available commands and their syntax."
    },
    {
      icon: <Github className="h-6 w-6 text-primary" />,
      title: "GitHub Repository",
      description: "Access the source code and contribute to Elysium's development."
    }
  ];
  
  return (
    <section id="get-started" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-accent/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedText 
              text="Get Started Today" 
              className="text-sm md:text-base uppercase tracking-wider text-primary mb-2"
              tag="p"
            />
            <AnimatedText 
              text="Start trading on Hyperliquid with Elysium" 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
              delay={300}
              tag="h2"
            />
            <AnimatedText 
              text="Download Elysium now and take your trading to the next level with powerful terminal-based tools" 
              className="text-xl text-foreground/70 mt-4"
              delay={600}
              tag="p"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {resources.map((resource, index) => (
              <GlassCard
                key={index}
                className="p-6 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s`, animationFillMode: 'forwards' }}
                hoverEffect={true}
              >
                <div className="flex items-start">
                  <div className="bg-foreground/5 p-3 rounded-lg mr-4">{resource.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                    <p className="text-foreground/70 text-sm">{resource.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
          
          <GlassCard className="p-8 rounded-xl text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to elevate your trading experience?</h3>
              <p className="text-foreground/70 mb-8">Join professional traders who rely on Elysium for executing complex strategies on Hyperliquid exchange.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Download Now <Download className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-foreground/20 hover:bg-foreground/5">
                  Learn More <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="mt-8 text-sm text-foreground/60">
                Available for macOS, Windows, and Linux. Requires Node.js version 16+.
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
