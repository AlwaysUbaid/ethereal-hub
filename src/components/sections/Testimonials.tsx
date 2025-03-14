
import React from 'react';
import GlassCard from '../ui/GlassCard';
import AnimatedText from '../ui/AnimatedText';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Elysium's terminal-based interface has completely transformed my trading workflow. The speed at which I can execute complex strategies is unmatched.",
      author: "Sarah J.",
      role: "Professional Trader"
    },
    {
      quote: "The TWAP execution feature alone has saved me thousands in slippage costs. I won't trade on Hyperliquid without Elysium anymore.",
      author: "Michael T.",
      role: "Crypto Fund Manager"
    },
    {
      quote: "As someone who prefers command-line interfaces, Elysium is a breath of fresh air in the bloated world of trading GUIs. Clean, fast, and powerful.",
      author: "Alex K.",
      role: "DeFi Developer"
    }
  ];
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-1/2 h-1/2 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1/2 h-1/2 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText 
            text="Testimonials" 
            className="text-sm md:text-base uppercase tracking-wider text-primary mb-2"
            tag="p"
          />
          <AnimatedText 
            text="What Our Users Say" 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            delay={300}
            tag="h2"
          />
          <AnimatedText 
            text="Don't just take our word for it — hear from traders who use Elysium every day" 
            className="text-xl text-foreground/70 mt-4"
            delay={600}
            tag="p"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <GlassCard className="h-full p-8 hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="bg-primary/10 p-3 rounded-full self-start mb-4">
                  <Quote className="h-6 w-6 text-primary" />
                </div>
                <p className="text-foreground/80 italic mb-6 flex-grow">{testimonial.quote}</p>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
