
import React from 'react';
import { cn } from "@/lib/utils";

interface TerminalDemoProps {
  content: React.ReactNode;
  className?: string;
}

const TerminalDemo: React.FC<TerminalDemoProps> = ({ content, className }) => {
  return (
    <div className={cn(
      "bg-black/80 backdrop-blur-lg border border-white/10 rounded-xl p-4 sm:p-6 shadow-xl overflow-hidden w-full", 
      className
    )}>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-4 text-xs text-foreground/60">Terminal</div>
      </div>
      <div className="font-mono text-xs sm:text-sm space-y-1 overflow-y-auto max-h-[300px] sm:max-h-[400px] pt-2">
        {content}
      </div>
    </div>
  );
};

export default TerminalDemo;
