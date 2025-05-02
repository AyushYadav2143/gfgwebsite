
import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeContext";

const BackgroundAnimation = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Green theme animation
  useEffect(() => {
    if (theme === "cyberpunk") return; // Don't run this animation in cyberpunk mode
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      speed: number;
      direction: number;
      vx: number;
      vy: number;
    }[] = [];
    
    const colors = ["rgba(76, 175, 80, 0.2)", "rgba(165, 214, 167, 0.2)", "rgba(232, 245, 233, 0.2)"];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor(window.innerWidth * window.innerHeight / 20000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 0.2 + 0.1,
          direction: Math.random() * Math.PI * 2,
          vx: 0,
          vy: 0
        });
      }
    };
    
    const animateParticles = () => {
      if (theme === "cyberpunk") return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        p.vx = Math.cos(p.direction) * p.speed;
        p.vy = Math.sin(p.direction) * p.speed;
        
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      
      // Draw connections
      ctx.lineWidth = 0.3;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(76, 175, 80, ${0.2 - distance/500})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationId = requestAnimationFrame(animateParticles);
    };
    
    window.addEventListener("resize", () => {
      resizeCanvas();
      createParticles();
    });
    
    resizeCanvas();
    createParticles();
    
    let animationId = requestAnimationFrame(animateParticles);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [theme]);

  // Cyberpunk theme animation
  useEffect(() => {
    if (theme !== "cyberpunk") return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let particles: {
      x: number;
      y: number;
      size: number;
      color: string;
      speed: number;
    }[] = [];
    
    const colors = ["#8B5CF6", "#D946EF", "#F97316", "#1EAEDB", "#39FF14"];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor(window.innerWidth * window.innerHeight / 15000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 2 + 0.5
        });
      }
    };
    
    const drawGrid = () => {
      ctx.lineWidth = 0.3;
      ctx.strokeStyle = "rgba(139, 92, 246, 0.3)";
      
      const gridSize = 50;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };
    
    const animateParticles = () => {
      if (theme !== "cyberpunk") return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      drawGrid();
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        p.y -= p.speed;
        
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        
        ctx.beginPath();
        ctx.rect(p.x, p.y, p.size, p.size * 4);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        
        // Remove shadow for better performance
        ctx.shadowBlur = 0;
      }
      
      animationId = requestAnimationFrame(animateParticles);
    };
    
    window.addEventListener("resize", () => {
      resizeCanvas();
      createParticles();
    });
    
    resizeCanvas();
    createParticles();
    
    let animationId = requestAnimationFrame(animateParticles);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-10 ${theme === "cyberpunk" ? "opacity-30" : "opacity-60"}`}
    />
  );
};

export default BackgroundAnimation;
