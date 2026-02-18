import { motion } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "hsla(199, 100%, 55%, 0.4)";
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(199, 100%, 55%, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    };
    draw();
  }, []);

  useEffect(() => {
    animate();
  }, [animate]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="gradient-mesh absolute inset-0" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 glass-panel text-sm text-primary font-medium"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            🚀 AI-Powered Assistive Technology
          </motion.div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-foreground">SightSpeak</span>
            <br />
            <span className="gradient-text">AI Vision for the</span>
            <br />
            <span className="gradient-text">Visually Impaired</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Real-time object detection and intelligent voice descriptions 
            to help visually impaired individuals navigate their world with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#demo"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg neon-glow hover:brightness-110 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Try Live Demo
            </motion.a>
            <motion.a
              href="#about"
              className="px-8 py-4 glass-panel text-foreground font-semibold hover:bg-muted/60 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More ↓
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
