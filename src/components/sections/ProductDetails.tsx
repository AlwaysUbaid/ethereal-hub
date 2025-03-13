
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
  
  return (
    <section id="product" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div 
              ref={imageRef}
              className="transition-transform duration-700 ease-out opacity-0 animate-fade-in"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              <GlassCard className="p-0 overflow-hidden">
                <div className="bg-black/40 p-6 font-mono">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-foreground/60">Command-Line Efficiency</div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-black/30 rounded-lg">
                      <h4 className="text-primary text-lg mb-2">Intuitive Commands</h4>
                      <p className="text-foreground/70 text-sm mb-3">Simple syntax makes it easy to execute complex strategies:</p>
                      <div className="font-mono text-xs space-y-2 text-foreground/80">
                        <div>buy &lt;symbol&gt; &lt;size&gt; [slippage]</div>
                        <div>perp_scaled_sell &lt;symbol&gt; &lt;total_size&gt; &lt;num_orders&gt; &lt;start_price&gt; &lt;end_price&gt; [leverage] [skew]</div>
                        <div>twap_create &lt;symbol&gt; &lt;side&gt; &lt;quantity&gt; &lt;duration&gt; &lt;num_slices&gt; [price_limit]</div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-black/30 rounded-lg">
                      <h4 className="text-primary text-lg mb-2">Real-time Feedback</h4>
                      <p className="text-foreground/70 text-sm">Get immediate feedback on your orders, positions, and account balances. Clear, structured responses make it easy to understand what's happening with your trades.</p>
                    </div>
                    
                    <div className="p-4 bg-black/30 rounded-lg">
                      <h4 className="text-primary text-lg mb-2">Command History</h4>
                      <p className="text-foreground/70 text-sm">Quickly access and repeat previous commands. Save time and reduce errors when executing similar trades.</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <AnimatedText 
              text="Trading Functionality" 
              className="text-sm md:text-base uppercase tracking-wider text-primary mb-2"
              tag="p"
            />
            <AnimatedText 
              text="Professional-grade tools for serious traders" 
              className="text-3xl md:text-4xl font-bold text-foreground"
              delay={300}
              tag="h2"
            />
            <AnimatedText 
              text="Execute complex trading operations with simple, intuitive commands. The terminal interface is designed for speed and precision, allowing you to act quickly in fast-moving markets." 
              className="text-xl text-foreground/70 mt-4 mb-8"
              delay={600}
              tag="p"
            />
            
            <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
              <div className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-3 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="text-foreground/80">Basic market and limit orders for both spot and perpetual markets</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-3 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="text-foreground/80">Scaled order placement across price ranges with customizable distribution</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-3 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="text-foreground/80">Market-aware scaled orders that adjust to current orderbook conditions</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-3 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="text-foreground/80">TWAP execution that splits large orders into smaller pieces over time</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-3 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="text-foreground/80">Position monitoring and risk management tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
