"use client";

import { useEffect } from "react";

export default function BubblesBackground() {
  useEffect(() => {
    const canvas = document.getElementById("bubbles") as HTMLCanvasElement;
    const ctx = canvas?.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: { x: number; y: number; radius: number; dx: number; dy: number }[] = [];

    canvas.width = width;
    canvas.height = height;

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 5 + 2,
        dx: (Math.random() - 0.5) * 1,
        dy: (Math.random() - 0.5) * 1,
      });
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (let particle of particles) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(79,70,229,0.4)";
        ctx.fill();
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > width) particle.dx = -particle.dx;
        if (particle.y < 0 || particle.y > height) particle.dy = -particle.dy;
      }
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
  }, []);

  return (
    <canvas
      id="bubbles"
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
