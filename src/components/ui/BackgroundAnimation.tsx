
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
    const particles: Particle[] = [];
    const particleCount = 25; // CHANGED: Reduced to 25 particles
    const baseHue = 155; // Match the primary color hue
    
    // Calculate center coordinates once for reuse
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Particle class for more complex movement
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      hue: number;
      opacity: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5; // CHANGED: Made particles even smaller
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.hue = baseHue + Math.random() * 30 - 15;
        this.opacity = Math.random() * 0.7 + 0.3; // Increased opacity
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        ctx.fillStyle = `hsla(${this.hue}, 70%, 50%, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Draw connector lines between particles
    const drawConnections = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = 0.08 * (1 - distance / 150); // CHANGED: Reduced line opacity even more
            ctx.strokeStyle = `hsla(${baseHue}, 70%, 50%, ${opacity})`;
            ctx.lineWidth = 0.3; // CHANGED: Made lines even thinner
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Draw floating geometric shapes
    const drawShapes = () => {
      // Create several rotating geometric elements
      for (let i = 0; i < 5; i++) { // Increased number of shapes
        const time = frame * 0.001 + i;
        const x = centerX + Math.cos(time) * (canvas.width * 0.2);
        const y = centerY + Math.sin(time) * (canvas.height * 0.15);
        const size = 70 + Math.sin(time * 1.5) * 30; // Larger shapes
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(time * 0.3);
        
        // Different shape for each iteration
        if (i % 3 === 0) {
          // Draw a triangle
          ctx.beginPath();
          ctx.moveTo(0, -size/2);
          ctx.lineTo(size/2, size/2);
          ctx.lineTo(-size/2, size/2);
          ctx.closePath();
          ctx.fillStyle = `hsla(${baseHue + 20 * i}, 70%, 50%, 0.1)`; // Increased opacity
          ctx.fill();
        } else if (i % 3 === 1) {
          // Draw a rectangle
          ctx.fillStyle = `hsla(${baseHue - 10 * i}, 70%, 50%, 0.1)`; // Increased opacity
          ctx.fillRect(-size/2, -size/2, size, size);
        } else {
          // Draw a circle
          ctx.beginPath();
          ctx.arc(0, 0, size/2, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${baseHue + 30 * i}, 70%, 50%, 0.1)`; // Increased opacity
          ctx.fill();
        }
        
        ctx.restore();
      }
    };
    
    // Add grid lines for more structure
    const drawGrid = () => {
      const gridSize = 150;
      const gridOpacity = 0.03; // CHANGED: Reduced grid opacity even more for less visibility
      
      ctx.strokeStyle = `hsla(${baseHue}, 30%, 50%, ${gridOpacity})`;
      ctx.lineWidth = 0.5;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };
    
    // Animation function
    const draw = () => {
      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(155, 40, 4, 0.02)'; // Reduced opacity for fade
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid first (in background)
      drawGrid();
      
      // Draw spiral effect
      for (let s = 0; s < 7; s++) { // More spirals
        const spiralOffset = (s * Math.PI * 2) / 7;
        const spiralSpeed = 0.0009;
        const rotation = frame * spiralSpeed + spiralOffset;
        
        ctx.beginPath();
        
        for (let i = 0; i < 200; i++) {
          const angle = 0.1 * i + rotation;
          const radius = 50 + (i * (canvas.width * 0.2)) / 200; // Larger spirals
          
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
        const alpha = 0.12; // Increased opacity for spirals
        ctx.strokeStyle = `hsla(${hue}, 70%, 50%, ${alpha})`;
        ctx.lineWidth = 2; // Thicker lines
        ctx.stroke();
      }
      
      // Draw floating geometric shapes
      drawShapes();
      
      // Update and draw all particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connections between particles
      drawConnections();
      
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
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-60" // CHANGED: Set opacity to 60%
      style={{ 
        position: 'fixed',  // Ensure it stays fixed during scroll
        minHeight: '100vh', // Ensure full height
        minWidth: '100vw'   // Ensure full width
      }}
    />
  );
};

export default BackgroundAnimation;
