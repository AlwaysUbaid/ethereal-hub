
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Product', href: '#product' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-background"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center z-50 relative">
            <span className="text-2xl font-bold text-primary">Elysium</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          {/* New Hamburger Menu Button */}
          <button
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <div className="flex flex-col justify-center items-center w-8 h-8">
              <span 
                className={cn(
                  "block w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ease-out",
                  isOpen ? "transform rotate-45 translate-y-1.5" : "mb-1.5"
                )}
              />
              <span 
                className={cn(
                  "block w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ease-out",
                  isOpen ? "opacity-0 -translate-x-4" : "mb-1.5"
                )}
              />
              <span 
                className={cn(
                  "block w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ease-out",
                  isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* New Mobile Menu Animation */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-background transform transition-all duration-500 ease-in-out",
          isOpen 
            ? "translate-x-0 opacity-100" 
            : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full w-full px-6 space-y-8">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-2xl font-medium text-center text-foreground transition-all duration-500 ease-in-out",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                "hover:text-primary hover:scale-110 transition-all"
              )}
              onClick={closeMenu}
              style={{ 
                transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
              }}
            >
              {item.name}
            </a>
          ))}
          <Button 
            className={cn(
              "bg-primary hover:bg-primary/90 text-primary-foreground mt-4 w-full max-w-xs transition-all duration-500",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
            onClick={closeMenu}
            style={{ 
              transitionDelay: isOpen ? `${navItems.length * 100}ms` : '0ms'
            }}
          >
            Get Started <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
