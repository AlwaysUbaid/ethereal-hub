
import React, { useEffect, useRef } from 'react';

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Animation variables
    let frame = 0;
    const spirals = 8;
    const baseHue = 155; // Match the primary color hue
    
    // Animation function
    const draw = () => {
      // Clear canvas with transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.4;
      
      // Draw multiple spirals for a more complex effect
      for (let s = 0; s < spirals; s++) {
        const spiralOffset = (s * Math.PI * 2) / spirals;
        const spiralSpeed = 0.002;
        const rotation = frame * spiralSpeed + spiralOffset;
        
        // Draw individual spiral
        ctx.beginPath();
        
        for (let i = 0; i < 300; i++) {
          const angle = 0.1 * i + rotation;
          const radius = 1 + (i * maxRadius) / 300;
          
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        // Set spiral style
        const hue = (baseHue + s * 10) % 360;
        const alpha = 0.05 + (s % 2) * 0.02;
        ctx.strokeStyle = `hsla(${hue}, 70%, 50%, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      
      frame++;
      requestAnimationFrame(draw);
    };
    
    // Start animation
    draw();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40"
    />
  );
};

export default BackgroundAnimation;
