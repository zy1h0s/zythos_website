"use client";
import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let w = 0, h = 0;
    let isMobile = window.innerWidth < 768;

    function resize() {
      w = canvas!.width = window.innerWidth;
      h = canvas!.height = window.innerHeight;
      isMobile = window.innerWidth < 768;
      initParticles();
    }

    function initParticles() {
      particles = [];
      const divisor = isMobile ? 20000 : 8000;
      const maxCount = isMobile ? 60 : 200;
      const count = Math.min(Math.floor((w * h) / divisor), maxCount);
      for (let i = 0; i < count; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        particles.push({
          x, y, baseX: x, baseY: y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse repulsion (skip on mobile - no hover on touch)
        if (!isMobile) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) / 150;
            p.x -= dx * force * 0.02;
            p.y -= dy * force * 0.02;
          }
        }

        // Drift back to base
        p.x += (p.baseX - p.x) * 0.01 + p.vx;
        p.y += (p.baseY - p.y) * 0.01 + p.vy;

        // Wrap
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        // Draw particle
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 184, 0, ${p.opacity})`;
        ctx!.fill();

        // Connect nearby particles (only every other particle on mobile)
        if (isMobile && i % 2 !== 0) continue;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ddx = p.x - p2.x;
          const ddy = p.y - p2.y;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);
          if (d < 120) {
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(p2.x, p2.y);
            ctx!.strokeStyle = `rgba(255, 184, 0, ${0.08 * (1 - d / 120)})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouse);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[100svh] pt-16 lg:pt-0 flex items-center justify-center overflow-hidden bg-bg-primary">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,184,0,0.04)_0%,transparent_70%)]" />

      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Tagline */}
        <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-border-subtle bg-bg-secondary/50 mb-8 transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] sm:text-xs text-text-secondary tracking-wider uppercase">Staff Augmentation + Custom Software Development</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold leading-[0.9] tracking-tight">
          <span className={`block text-[clamp(2rem,8vw,7rem)] text-text-primary transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Hire Developers.
          </span>
          <span className={`block text-[clamp(2rem,8vw,7rem)] text-gradient transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Build Products.
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`mt-5 sm:mt-8 text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          The staff augmentation and software development company that scales your engineering team while building your product - under one roof.
        </p>

        {/* CTAs */}
        <div className={`mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center transition-all duration-700 delay-[900ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <a
            href="#services"
            className="group w-full sm:w-auto px-8 py-4 bg-accent text-bg-primary font-semibold rounded-full hover:bg-accent-hover transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,184,0,0.3)] flex items-center justify-center gap-2"
          >
            Scale Your Engineering Team
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a
            href="#services"
            className="group w-full sm:w-auto px-8 py-4 border border-border-medium text-text-primary font-semibold rounded-full hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Build Custom Software
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block transition-all duration-700 delay-[1200ms] ${loaded ? "opacity-100" : "opacity-0"}`}>
        <a href="#about" className="flex flex-col items-center gap-2 group" aria-label="Scroll down">
          <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted group-hover:text-accent transition-colors">Explore Our Services</span>
          <div className="w-5 h-8 border border-border-medium rounded-full flex justify-center group-hover:border-accent transition-colors">
            <div className="w-1 h-2 bg-text-muted rounded-full mt-1.5 animate-bounce group-hover:bg-accent transition-colors" />
          </div>
        </a>
      </div>
    </section>
  );
}
