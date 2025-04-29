'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    title: "CRM sur mesure",
    description: "Développez des relations clients exceptionnelles grâce à nos outils personnalisés NovaCore.",
    icon: "📈",
  },
  {
    title: "IA Business Suite",
    description: "Boostez votre efficacité grâce à nos IA pour devis, service client, vente et marketing.",
    icon: "🤖",
  },
  {
    title: "Gestion Réseaux Sociaux",
    description: "Automatisez votre présence en ligne sur Facebook, Instagram, LinkedIn avec IA NovaCore.",
    icon: "📱",
  },
  {
    title: "E-learning Télévente",
    description: "Formez vos équipes à l'art de vendre par téléphone et au service client 5 étoiles ⭐⭐⭐⭐⭐.",
    icon: "🎓",
  },
  {
    title: "Communication Digitale",
    description: "Stratégies de contenus, publicités ciblées et community management sur mesure.",
    icon: "📝",
  },
  {
    title: "Développement SaaS",
    description: "Création d'apps cloud évolutives, CRM, ERP, Plateformes collaboratives B2B.",
    icon: "💻",
  },
];

export default function ServicesCarousel() {
  const [current, setCurrent] = useState(0);

  const nextService = () => {
    setCurrent((prev) => (prev + 1) % services.length);
  };

  return (
    <section id="services" className="bg-gradient-to-b from-zinc-900 to-black py-24 text-white text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12"
      >
        🌟 Nos Services Premium
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-2xl mx-auto p-8 rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl"
      >
        <div className="text-5xl mb-4">{services[current].icon}</div>
        <h3 className="text-2xl font-semibold">{services[current].title}</h3>
        <p className="text-gray-300 mt-4">{services[current].description}</p>

        <button
          onClick={nextService}
          className="mt-8 bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-full font-bold"
        >
          ➡️ Voir plus
        </button>
      </motion.div>
    </section>
  );
}
