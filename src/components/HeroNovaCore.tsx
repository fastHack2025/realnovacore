'use client';

import { motion } from 'framer-motion';

export default function HeroNovaCore() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white flex items-center justify-center">

      {/* Vidéo Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
      >
        <source
          src="https://res.cloudinary.com/dko5sommz/video/upload/v1745467451/8466300-uhd_3840_2160_25fps_tcmaba.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Contenu Texte */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          NovaCore Platform
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Propulsez votre entreprise avec notre CRM, ERP, IA et solutions digitales sur mesure.
        </p>
      </motion.div>
    </section>
  );
}
