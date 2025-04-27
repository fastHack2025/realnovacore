'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "🚀 Bienvenue chez DL Solutions & NovaCore | Experts en Optimisation CX, CRM, IA commerciale !",
  "💬 NovaCore IA : Votre CRM intelligent pour booster vos ventes et votre support client.",
  "⚡ DL Solutions : Formations Service Client, CRM et Communication Digitale sur mesure.",
  "📈 Transformez vos parcours clients avec nos solutions d'automatisation et IA prédictive.",
  "🧠 NovaCore Tools : Libérez le pouvoir de l'intelligence artificielle dans votre business."
];

export default function BreakingNews() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % messages.length);
      }, 10000); // ➔ Change toutes les 10s
      return () => clearInterval(interval);
    }
  }, [paused]);

  return (
    <div
      className="bg-primary dark:bg-primary-dark py-2 overflow-hidden relative cursor-pointer select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 18,
            ease: "easeInOut", // ➔ Smoother mobile
          }}
          className="whitespace-nowrap font-semibold px-8 text-[16px] md:text-[18px]"
        >
          {messages[current]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
