
import React from 'react';
import { Button } from "@/components/ui/button";
import GlassCard from '../ui/GlassCard';
import AnimatedText from '../ui/AnimatedText';
import { Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      features: [
        "Core features",
        "Basic analytics",
        "1 user",
        "24/7 support"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$79",
      period: "/month",
      features: [
        "All Basic features",
        "Advanced analytics",
        "5 users",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      features: [
        "All Pro features",
        "Custom solutions",
        "Unlimited users",
        "Dedicated account manager",
        "White labeling"
      ],
      popular: false
    }
  ];
  
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 sm:mb-12">
            {pricingPlans.map((plan, index) => (
              <GlassCard
                key={index}
                className={`p-6 sm:p-8 rounded-xl relative ${plan.popular ? 'border-2 border-primary' : ''} opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                    <div className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full whitespace-nowrap">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{plan.name}</div>
                <div className="flex items-baseline mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-bold">{plan.price}</span>
                  <span className="text-foreground/60 ml-1">{plan.period}</span>
                </div>
                
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm sm:text-base text-foreground/80">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/sign-in">
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-background border border-foreground/20 hover:bg-foreground/5 text-foreground'}`}
                  >
                    Get Started
                  </Button>
                </Link>
              </GlassCard>
            ))}
          </div>
          
          <GlassCard className="p-6 sm:p-8 rounded-xl text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Ready to elevate your trading experience?</h3>
              <p className="text-sm sm:text-base text-foreground/70 mb-6 sm:mb-8">Join professional traders who rely on Elysium for executing complex strategies on Hyperliquid exchange.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/sign-in">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Get Started <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
