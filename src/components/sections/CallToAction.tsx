
import React from 'react';
import { Button } from "@/components/ui/button";
import AnimatedText from '../ui/AnimatedText';
import GlassCard from '../ui/GlassCard';
import { ChevronRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 rounded-full bg-primary/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 rounded-full bg-accent/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center max-w-3xl">
            <AnimatedText 
              text="Ready to transform your experience?" 
              className="text-sm md:text-base uppercase tracking-wider text-primary mb-2"
              tag="p"
            />
            <AnimatedText 
              text="Start your journey with Elysium today" 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
              delay={300}
              tag="h2"
            />
            <AnimatedText 
              text="Join thousands of satisfied users who have already elevated their digital presence" 
              className="text-xl text-foreground/70 mt-4 mb-8"
              delay={600}
              tag="p"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-12">
            {[
              {
                name: "Basic",
                price: "$29",
                features: ["Core features", "Basic analytics", "1 user", "24/7 support"]
              },
              {
                name: "Pro",
                price: "$79",
                featured: true,
                features: ["All Basic features", "Advanced analytics", "5 users", "Priority support", "API access"]
              },
              {
                name: "Enterprise",
                price: "$199",
                features: ["All Pro features", "Custom solutions", "Unlimited users", "Dedicated account manager", "White labeling"]
              }
            ].map((plan, index) => (
              <GlassCard
                key={index}
                className={`flex flex-col ${plan.featured ? 'border-primary/30 bg-white/10' : ''} opacity-0 animate-fade-in`}
                style={{ animationDelay: `${0.3 + index * 0.2}s`, animationFillMode: 'forwards' }}
                hoverEffect={true}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-foreground/70 ml-1">/month</span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className="bg-primary/10 p-1 rounded-full mr-3">
                          <ChevronRight className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className={`w-full ${
                    plan.featured 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-secondary hover:bg-secondary/90 text-foreground'
                  }`}
                >
                  Get Started
                </Button>
              </GlassCard>
            ))}
          </div>
          
          <div className="mt-20 text-center" id="contact">
            <GlassCard className="max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              <AnimatedText 
                text="Have questions?" 
                className="text-xl font-semibold text-foreground mb-2"
                tag="h3"
                delay={1200}
              />
              <AnimatedText 
                text="Our team is ready to help you get started with Elysium" 
                className="text-foreground/80 mb-6"
                tag="p"
                delay={1400}
              />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-foreground/20 hover:bg-foreground/5">
                  View Documentation
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Contact Sales
                </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
