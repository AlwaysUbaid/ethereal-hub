
import React from 'react';
import GlassCard from './GlassCard';

interface TerminalDemoProps {
  className?: string;
  content: React.ReactNode;
  title?: string;
}

const TerminalDemo: React.FC<TerminalDemoProps> = ({ 
  className, 
  content,
  title = "elysium terminal"
}) => {
  return (
    <GlassCard className={`p-1 overflow-hidden rounded-lg ${className}`}>
      {/* Terminal Header */}
      <div className="flex items-center p-2 bg-black/20 rounded-t-lg">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-xs text-foreground/60">{title}</div>
      </div>
      
      {/* Terminal Body */}
      <div className="bg-black/40 p-4 font-mono text-sm text-foreground/90 rounded-b-lg">
        {content}
      </div>
    </GlassCard>
  );
};

export default TerminalDemo;
