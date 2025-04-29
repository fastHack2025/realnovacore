'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
      
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://res.cloudinary.com/dko5sommz/video/upload/v1745725401/v09044g40000cuub0d7og65j6kvqvbl0_kcmmqh.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>

      {/* Overlay content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Réinventez votre Business avec NovaCore CRM IA
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
          DL Solutions SARL propulse votre entreprise grâce à l'intelligence artificielle, l'automatisation CRM, et la digitalisation sur-mesure.
        </p>
        <a
          href="#services"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-bold transition"
        >
          Découvrir nos services
        </a>
      </motion.div>

    </section>
  );
}
