
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import StatsSection from '@/components/sections/StatsSection';
import Testimonials from '@/components/sections/Testimonials';
import ProductDetails from '@/components/sections/ProductDetails';
import CallToAction from '@/components/sections/CallToAction';
import BackgroundAnimation from '@/components/ui/BackgroundAnimation';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scroll to section when clicking on navigation links
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href');
        if (!id) return;
        
        const element = document.querySelector(id);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleNavClick);
    
    return () => {
      document.removeEventListener('click', handleNavClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background/90 text-foreground overflow-x-hidden relative">
      <BackgroundAnimation />
      <div className="relative z-10 w-full">
        <Navbar />
        <main className="w-full">
          <Hero />
          <Features />
          <StatsSection />
          <Testimonials />
          <ProductDetails />
          <CallToAction />
        </main>
        <footer className="py-8 border-t border-border/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <span className="text-xl font-bold text-primary">Elysium</span>
              </div>
              <div className="text-sm text-foreground/60">
                © {new Date().getFullYear()} Elysium. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
