
import React from 'react';
import { Button } from "@/components/ui/button";
import GlassCard from '../ui/GlassCard';
import AnimatedText from '../ui/AnimatedText';
import { ChevronRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-accent/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <AnimatedText 
              text="READY TO TRANSFORM YOUR EXPERIENCE?" 
              className="text-sm md:text-base uppercase tracking-wider text-primary mb-2"
              tag="p"
            />
            <AnimatedText 
              text="Start your journey with Elysium today" 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
              delay={300}
              tag="h2"
            />
            <AnimatedText 
              text="Join thousands of satisfied users who have already elevated their digital presence" 
              className="text-base sm:text-lg md:text-xl text-foreground/70 mt-4 px-4"
              delay={600}
              tag="p"
            />
          </div>
          
          <GlassCard className="p-6 sm:p-8 rounded-xl text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Ready to elevate your trading experience?</h3>
              <p className="text-sm sm:text-base text-foreground/70 mb-6 sm:mb-8">Join professional traders who rely on Elysium for executing complex strategies on Hyperliquid exchange.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://t.me/Elycium_bot" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Get Started <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
