
import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl opacity-30 animate-drift-1"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl opacity-30 animate-drift-2"></div>
      <div className="absolute top-1/3 left-1/4 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl opacity-20 animate-drift-3"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10"></div>
    </div>
  );
};

export default BackgroundAnimation;
