
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { ChevronRight, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavItem {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = (): void => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Disable body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [mobileMenuOpen]);

  const navItems: NavItem[] = [
    { name: 'Features', href: '#features' },
    { name: 'Product', href: '#product' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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

          <div className="flex items-center space-x-4">
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? 
                <X className="h-6 w-6 text-foreground" /> : 
                <Menu className="h-6 w-6 text-foreground" />
              }
            </Button>
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu - fixed duplicate elements and removed redundant button */}
      {mobileMenuOpen && (
        <div className="mobile-menu-backdrop md:hidden">
          <div className="mobile-menu-content">
            {/* Mobile menu items - removed duplicate header */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-8 py-12">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xl font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Removed the redundant "Get Started" button */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
