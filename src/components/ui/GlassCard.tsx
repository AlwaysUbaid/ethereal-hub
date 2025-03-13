
import React from 'react';
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  clickEffect?: boolean;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = false,
  clickEffect = false,
  onClick
}) => {
  return (
    <div
      className={cn(
        "glass-card p-6 rounded-xl",
        hoverEffect && "transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg",
        clickEffect && "active:scale-95 transition-transform",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;
