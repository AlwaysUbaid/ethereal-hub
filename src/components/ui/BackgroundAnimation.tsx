
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
    const particleCount = 50;
    const baseHue = 155; // Match the primary color hue
    
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
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.hue = baseHue + Math.random() * 30 - 15;
        this.opacity = Math.random() * 0.5 + 0.1;
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
            const opacity = 0.1 * (1 - distance / 150);
            ctx.strokeStyle = `hsla(${baseHue}, 70%, 50%, ${opacity})`;
            ctx.lineWidth = 0.5;
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
      for (let i = 0; i < 3; i++) {
        const time = frame * 0.001 + i;
        const x = centerX + Math.cos(time) * (canvas.width * 0.2);
        const y = centerY + Math.sin(time) * (canvas.height * 0.15);
        const size = 50 + Math.sin(time * 1.5) * 20;
        
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
          ctx.fillStyle = `hsla(${baseHue + 20 * i}, 70%, 50%, 0.05)`;
          ctx.fill();
        } else if (i % 3 === 1) {
          // Draw a rectangle
          ctx.fillStyle = `hsla(${baseHue - 10 * i}, 70%, 50%, 0.05)`;
          ctx.fillRect(-size/2, -size/2, size, size);
        } else {
          // Draw a circle
          ctx.beginPath();
          ctx.arc(0, 0, size/2, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${baseHue + 30 * i}, 70%, 50%, 0.05)`;
          ctx.fill();
        }
        
        ctx.restore();
      }
    };
    
    // Animation function
    const draw = () => {
      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(155, 40, 4, 0.03)'; // Match the background color with opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Draw spiral effect
      for (let s = 0; s < 5; s++) {
        const spiralOffset = (s * Math.PI * 2) / 5;
        const spiralSpeed = 0.001;
        const rotation = frame * spiralSpeed + spiralOffset;
        
        ctx.beginPath();
        
        for (let i = 0; i < 200; i++) {
          const angle = 0.1 * i + rotation;
          const radius = 30 + (i * (canvas.width * 0.15)) / 200;
          
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
        const alpha = 0.06;
        ctx.strokeStyle = `hsla(${hue}, 70%, 50%, ${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      
      // Update and draw all particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connections between particles
      drawConnections();
      
      // Draw floating geometric shapes
      drawShapes();
      
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
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-50"
    />
  );
};

export default BackgroundAnimation;
