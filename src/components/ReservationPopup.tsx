'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ReservationPopup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ backdropFilter: "blur(0px)", opacity: 0 }}
      animate={{ backdropFilter: "blur(8px)", opacity: 1 }}
      className="fixed inset-0 flex justify-center items-center bg-black/60 z-50"
    >
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 w-full max-w-md mx-4 relative"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-red-500"
        >
          ✖️
        </button>
        <h2 className="text-2xl font-bold text-white mb-4 text-center">📅 Réservez une démo NovaCore</h2>
        <p className="text-center text-gray-300 mb-8">
          🚀 Découvrez comment NovaCore propulse votre business dans l'ère de l'IA.
        </p>
        <a
          href="/contact"
          className="bg-primary text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-500 transition block text-center"
        >
          Réserver Maintenant
        </a>
      </motion.div>
    </motion.div>
  );
}
