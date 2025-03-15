
import React from 'react';
import { cn } from "@/lib/utils";

const GlassCard = ({
  children,
  className,
  hoverEffect = false,
  clickEffect = false,
  onClick,
  onMouseEnter,
  style
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
      onMouseEnter={onMouseEnter}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
