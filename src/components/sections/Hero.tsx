import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import AnimatedText from '../ui/AnimatedText';
import GlassCard from '../ui/GlassCard';
import { ChevronRight, ExternalLink } from 'lucide-react';
import TerminalDemo from '../ui/TerminalDemo';
import { useIsMobile } from "@/hooks/use-mobile";

const Hero: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!terminalRef.current || isMobile) return;
      const {
        clientX,
        clientY
      } = e;
      const rect = terminalRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const moveX = (clientX - centerX) / 40;
      const moveY = (clientY - centerY) / 40;
      terminalRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  const terminalContent = <>
      <div className="text-primary">{`> connect mainnet`}</div>
      <div className="text-green-400 mb-2">Successfully connected to Hyperliquid</div>
      
      <div className="text-primary">{`> balance`}</div>
      <div className="text-foreground/80 mb-1">=== Current Balances ===</div>
      <div className="grid grid-cols-2 text-foreground/80 mb-2">
        <div>USDC:</div><div>15,420.75</div>
        <div>ETH:</div><div>2.4352</div>
        <div>BTC:</div><div>0.0853</div>
      </div>
      
      <div className="text-primary">{`> positions`}</div>
      <div className="text-foreground/80 mb-1">=== Current Positions ===</div>
      <div className="text-foreground/80 mb-1 text-xs sm:text-sm">Symbol | Size | Entry Price | Mark Price | PnL</div>
      <div className="text-foreground/80 mb-1 text-xs sm:text-sm">----------------------------------------------</div>
      <div className="text-foreground/80 mb-1 text-xs sm:text-sm">ETH | 1.5 | 3425.50 | 3451.75 | +39.37</div>
      <div className="text-foreground/80 mb-4 text-xs sm:text-sm">BTC | -0.05 | 65210.25 | 65129.50 | +5.74</div>
      
      <div className="text-primary">{`> scaled_buy ETH 0.5 5 3400 3300 0`}</div>
      <div className="text-foreground/80 mb-1">Placing 5 scaled buy orders for ETH:</div>
      <div className="text-foreground/80 mb-1">Total size: 0.5</div>
      <div className="text-foreground/80 mb-1">Price range: 3400 to 3300</div>
      <div className="text-green-400 mb-2">Successfully placed 5/5 orders</div>
      
      <div className="text-foreground/80 mb-1 text-xs sm:text-sm">Order # | Size | Price</div>
      <div className="text-foreground/80 mb-1 text-xs sm:text-sm">------------------------</div>
      <div className="text-foreground/80 mb-1 text-xs sm:text-sm">1/5 | 0.10000000 | 3400.00000000</div>
      <div className="text-foreground/80 mb-1 text-xs sm:text-sm">2/5 | 0.10000000 | 3375.00000000</div>
      <div className="text-foreground/80 mb-1 text-xs sm:text-sm">3/5 | 0.10000000 | 3350.00000000</div>
      <div className="text-foreground/80 mb-1 text-xs sm:text-sm">4/5 | 0.10000000 | 3325.00000000</div>
      <div className="text-foreground/80 mb-1 text-xs sm:text-sm">5/5 | 0.10000000 | 3300.00000000</div>
      
      <div className="text-primary mt-1">{`> `}<span className="animate-pulse">_</span></div>
    </>;

  return <section className="min-h-screen pt-24 pb-20 flex items-center relative overflow-hidden" id="home">
      <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-2">
              <AnimatedText text="Welcome to" className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground/80" tag="h2" />
              <AnimatedText text="Elysium" className="text-4xl sm:text-6xl md:text-8xl font-bold text-primary" delay={300} tag="h1" />
              <AnimatedText text="Terminal-Based Trading Platform" className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90" delay={600} tag="h2" />
            </div>
            
            <AnimatedText text="Elysium provides professional traders with advanced terminal-based tools for executing complex strategies on Hyperliquid exchange." className="text-foreground/70 text-base sm:text-lg max-w-xl" delay={900} tag="p" />
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in" style={{
            animationDelay: '1.2s',
            animationFillMode: 'forwards'
          }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-foreground/20 hover:bg-foreground/5">
                Explore Features <ExternalLink className="ml-1 h-4 w-4" />
              </Button>
            </div>
            
            <div className="pt-4 md:pt-8 opacity-0 animate-fade-in" style={{
            animationDelay: '1.5s',
            animationFillMode: 'forwards'
          }}>
              <GlassCard className="flex flex-col sm:flex-row items-center justify-between p-4 max-w-md gap-3 sm:gap-0c">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-foreground/80">Hyperliquid Mainnet Available
                </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-foreground/80">Hyperliquid Testnet Available</span>
                </div>
              </GlassCard>
            </div>
          </div>
          
          <div className="perspective relative block mt-8 lg:mt-0">
            <div ref={terminalRef} className="w-full transition-transform duration-300 ease-out preserve-3d opacity-0 animate-fade-in" style={{
            animationDelay: '0.3s',
            animationFillMode: 'forwards'
          }}>
              <TerminalDemo content={terminalContent} />
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;
