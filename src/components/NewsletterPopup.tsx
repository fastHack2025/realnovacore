'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 60000); // Après 60s
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
    >
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260 }}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 w-full max-w-md mx-4 text-white space-y-6 relative"
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 hover:text-red-500 transition"
        >
          ✖️
        </button>
        <h2 className="text-3xl font-bold text-center">💌 Rejoignez la Révolution NovaCore</h2>
        <p className="text-center opacity-80">
          Recevez nos actualités exclusives et avant-premières IA 🚀
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Votre email"
            className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="submit"
            className="w-full bg-primary hover:bg-indigo-600 transition font-bold py-3 rounded-full"
          >
            M'inscrire
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
