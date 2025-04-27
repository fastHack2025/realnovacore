'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroDL() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
      });
    }

    const connectDistance = 130;

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(
        width / 2 + offset.x * 0.05,
        height / 2 + offset.y * 0.05,
        100,
        width / 2,
        height / 2,
        width / 1
      );
      gradient.addColorStop(0, 'rgba(99,102,241,0.2)');
      gradient.addColorStop(1, 'rgba(15,23,42,1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.translate(offset.x * 0.05, offset.y * 0.05);

      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${1 - distance / connectDistance})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      ctx.restore();

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= width) p.vx = -p.vx;
        if (p.y <= 0 || p.y >= height) p.vy = -p.vy;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      setOffset({ x: e.clientX - width / 2, y: e.clientY - height / 2 });
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > window.innerHeight / 4) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset.x, offset.y]);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full h-[100vh] flex items-center justify-center text-center text-white overflow-hidden warp-effect snap-section ${scrolled ? 'scrolled' : ''}`}
    >
      {/* Super Nova Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Contenu principal */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-2xl mb-4 animate-fade-in-down">
          DAVE & LUCE SOLUTIONS
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in-up">
          L'innovation cosmique au service de votre succès
        </p>
      </div>
    </section>
  );
}
