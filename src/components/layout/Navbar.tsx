
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Close the menu when the escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Close the mobile menu when window is resized to desktop size
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

  // Directly manipulate body style to prevent scrolling when mobile menu is open
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
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center z-50 relative">
            <span className="text-2xl font-bold text-primary">Elysium</span>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 z-50 relative text-foreground hover:text-primary"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Simplified Mobile Navigation with solid background */}
      {isOpen && (
        <div 
          id="mobile-menu"
          className="fixed inset-0 z-40 bg-background flex flex-col pt-20 px-6"
          style={{ backgroundColor: '#0C1B14' }} // Solid dark background color
        >
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl font-medium text-foreground hover:text-primary"
                onClick={closeMenu}
              >
                {item.name}
              </a>
            ))}
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground mt-2" 
              onClick={closeMenu}
            >
              Get Started <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
