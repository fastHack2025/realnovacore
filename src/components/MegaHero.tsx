'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function MegaHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (videoRef.current) {
        if (window.innerWidth < 768) {
          videoRef.current.pause(); // 📱 Small screens optimization
        } else {
          videoRef.current.play().catch(() => {});
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        src="/background-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg animate-fadeInUp">
          Bienvenue chez DL Solutions
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-indigo-300 animate-fadeIn">
          CX, Digitalisation & IA pour un avenir meilleur 🚀
        </p>

        {/* Call to Action */}
        <div className="mt-8 flex justify-center gap-4">
          <a href="#services" className="btn-primary hover:glow">
            Nos Services
          </a>
          <a href="#contact" className="btn-secondary hover:glow">
            Contactez-nous
          </a>
        </div>
      </motion.div>
    </section>
  );
}
