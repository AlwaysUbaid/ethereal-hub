
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import AnimatedText from '../ui/AnimatedText';
import GlassCard from '../ui/GlassCard';
import { TrendingUp, Clock, Users, BarChart3 } from 'lucide-react';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    volume: 0,
    trades: 0,
    users: 0,
    uptime: 0
  });
  
  const statsData = [
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      value: "$4.7B+",
      label: "Trading Volume",
      suffix: "",
      description: "Total volume processed"
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      value: "9,324",
      label: "Trades Per Minute",
      suffix: "",
      description: "Average during peak hours"
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      value: "12,500+",
      label: "Active Traders",
      suffix: "",
      description: "Professional traders worldwide"
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      value: "99.9%",
      label: "Uptime",
      suffix: "",
      description: "Reliable platform performance"
    },
  ];

  useEffect(() => {
    const animateCounters = () => {
      const interval = setInterval(() => {
        setCounters(prev => {
          const newCounters = { ...prev };
          let allDone = true;
          
          if (newCounters.volume < 100) {
            newCounters.volume += 1;
            allDone = false;
          }
          if (newCounters.trades < 100) {
            newCounters.trades += 1;
            allDone = false;
          }
          if (newCounters.users < 100) {
            newCounters.users += 1;
            allDone = false;
          }
          if (newCounters.uptime < 100) {
            newCounters.uptime += 1;
            allDone = false;
          }
          
          if (allDone) {
            clearInterval(interval);
          }
          
          return newCounters;
        });
      }, 20);
      
      return () => clearInterval(interval);
    };
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('stats-section');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="stats-section" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-1/4 left-1/3 w-1/2 h-1/2 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/3 w-1/2 h-1/2 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText 
            text="PLATFORM METRICS" 
            className="text-sm md:text-base uppercase tracking-wider text-primary mb-2"
            tag="p"
          />
          <AnimatedText 
            text="Our Performance By Numbers" 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            delay={300}
            tag="h2"
          />
          <AnimatedText 
            text="Real-time statistics showcasing Elysium's reliability and market impact" 
            className="text-xl text-foreground/70 mt-4"
            delay={600}
            tag="p"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <GlassCard className="text-center p-8 h-full">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="bg-primary/10 p-4 rounded-lg mb-4 inline-flex">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2 text-foreground">{stat.value}</div>
                  <h3 className="text-lg font-semibold mb-1 text-foreground">{stat.label}</h3>
                  <p className="text-sm text-foreground/70">{stat.description}</p>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
