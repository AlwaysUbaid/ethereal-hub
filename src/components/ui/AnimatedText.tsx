
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  staggerChildren?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  once = true,
  delay = 0,
  tag = 'p',
  staggerChildren = false
}) => {
  const elementRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (staggerChildren) {
              const spans = Array.from(element.querySelectorAll('span'));
              spans.forEach((span, index) => {
                span.style.setProperty('--index', index.toString());
                span.classList.add('opacity-100');
              });
            } else {
              setTimeout(() => {
                element.classList.add('animate-fade-in');
                element.classList.add('opacity-100');
              }, delay);
            }
            
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            if (staggerChildren) {
              const spans = Array.from(element.querySelectorAll('span'));
              spans.forEach((span) => {
                span.classList.remove('opacity-100');
              });
            } else {
              element.classList.remove('animate-fade-in');
              element.classList.remove('opacity-100');
            }
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
    
    observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, [text, once, delay, staggerChildren]);
  
  const getTextContent = () => {
    if (staggerChildren) {
      return text.split('').map((char, index) => (
        <span key={index} className="opacity-0 transition-opacity duration-700">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    }
    
    return text;
  };
  
  const Tag = tag;
  
  return React.createElement(
    Tag,
    {
      ref: elementRef,
      className: cn(
        "opacity-0 transition-all duration-700",
        staggerChildren && "letter-animation",
        className
      )
    },
    getTextContent()
  );
};

export default AnimatedText;
