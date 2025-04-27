'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function PageLoader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2000); // Simulation de chargement
    return () => clearTimeout(timer);
  }, []);

  if (isLoaded) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex items-center justify-center z-50"
    >
      <motion.img
        src="/icons/logo-novacore.png"
        alt="Chargement NovaCore"
        className="w-24 h-24 animate-spin"
      />
    </motion.div>
  );
}
