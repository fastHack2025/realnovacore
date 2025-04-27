// src/app/contact/page.tsx
'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] section-padding text-white">
      <div className="container text-center">
        <motion.h1
          className="hero-heading mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contactez-Nous
        </motion.h1>

        <motion.form
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white/5 p-10 rounded-2xl shadow-2xl backdrop-blur-lg"
        >
          <input type="text" placeholder="Votre Nom" className="w-full p-3 mb-6 bg-white/10 rounded focus:outline-none" required />
          <input type="email" placeholder="Votre Email" className="w-full p-3 mb-6 bg-white/10 rounded focus:outline-none" required />
          <textarea placeholder="Votre Message" rows={5} className="w-full p-3 mb-6 bg-white/10 rounded focus:outline-none" required />
          <button type="submit" className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-indigo-700 transition">
            Envoyer
          </button>
        </motion.form>
      </div>
    </main>
  );
}
