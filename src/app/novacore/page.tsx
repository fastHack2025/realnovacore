'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NovaCoreLandingPage() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      
      {/* Vidéo de fond */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
        src="https://res.cloudinary.com/dko5sommz/video/upload/v1745467451/8466300-uhd_3840_2160_25fps_tcmaba.mp4"
      />

      {/* Overlay foncé */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center space-y-6">
        
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          NovaCore Platform 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl text-lg text-gray-300"
        >
          Propulsez votre entreprise avec notre CRM, ERP, IA et solutions digitales sur mesure. Simplifiez, Automatisez, Gagnez.
        </motion.p>

        {/* Bouton S'abonner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link href="/abonnement">
            <button className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-full font-bold text-lg">
              🔥 S'abonner Maintenant
            </button>
          </Link>
        </motion.div>

      </div>

    </main>
  );
}
