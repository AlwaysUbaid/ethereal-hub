
import React, { useEffect, useState } from 'react';
import GlassCard from '../ui/GlassCard';
import AnimatedText from '../ui/AnimatedText';
import { MessageSquare, Send, Bot, Shield, SendHorizontal, Telegram } from 'lucide-react';

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
      icon: <Telegram className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Telegram Integration",
      description: "Seamlessly connect to Hyperliquid through our advanced Telegram Bot interface for trading on the go."
    },
    {
      icon: <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Bot Functionality",
      description: "Execute both spot and perpetual futures trading with adjustable leverage directly in your Telegram chats."
    },
    {
      icon: <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Command System",
      description: "Send trading commands via chat with intuitive syntax for market, limit, and scaled orders with customizable parameters."
    },
    {
      icon: <SendHorizontal className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Automated Trading",
      description: "Schedule TWAP execution and other automated strategies directly through simple Telegram messages."
    },
    {
      icon: <Send className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Real-time Monitoring",
      description: "Receive instant notifications and position updates directly in Telegram, with customizable alert settings."
    },
    {
      icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Secure Authentication",
      description: "Trade confidently with our secure Telegram authentication system and encrypted messaging protocols."
    }
  ];
  
  return (
    <section id="features" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <AnimatedText 
            text="Key Features" 
            className="text-sm md:text-base uppercase tracking-wider text-primary mb-2"
            tag="p"
          />
          <AnimatedText 
            text="Telegram Bot Trading" 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            delay={300}
            tag="h2"
          />
          <AnimatedText 
            text="Trade on Hyperliquid through our powerful Telegram Bot with advanced features designed for professionals" 
            className="text-base sm:text-lg md:text-xl text-foreground/70 mt-4 px-4"
            delay={600}
            tag="p"
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <GlassCard className="h-full p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="bg-primary/10 p-3 sm:p-4 rounded-lg mb-4 self-start">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-foreground/70">{feature.description}</p>
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
