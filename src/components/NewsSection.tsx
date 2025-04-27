'use client';

import { motion } from 'framer-motion';

export default function NewsSection() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-indigo-800 via-purple-900 to-black text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-transparent opacity-20"></div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center space-y-6"
      >
        <h2 className="text-4xl font-extrabold">🗞️ Breaking News</h2>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          🚀 Lancement de NovaCore prévu entre le 10 et 20 mai 2025 : préparez-vous pour la révolution IA ✨
        </p>
      </motion.div>
    </section>
  );
}
