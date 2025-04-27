// src/app/services/page.tsx
'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';

const services = [
  {
    title: 'Développement Web',
    description: 'Sites vitrines, e-commerce, apps sur-mesure avec Next.js, Tailwind, Strapi.',
    icon: <FaRocket size={40} />,
  },
  {
    title: 'Solutions Innovantes',
    description: 'Intégration IA, Automatisation, Chatbots, OpenAI, Zapier, Make.',
    icon: <FaLightbulb size={40} />,
  },
  {
    title: 'Sécurité Avancée',
    description: 'Audits de sécurité, systèmes Zero Trust, VPNs privés pour entreprises.',
    icon: <FaShieldAlt size={40} />,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] min-h-screen pt-20">
      <section className="text-center section-padding">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-heading mb-6"
        >
          Nos Services
        </motion.h1>
        <p className="max-w-xl mx-auto text-gray-400 text-lg">
          Découvrez notre expertise digitale au service de votre croissance. 🚀
        </p>
      </section>

      <section className="container grid grid-cols-1 md:grid-cols-3 gap-12 section-padding">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 250 }}
            className="card-3d text-center"
          >
            <div className="text-primary mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </section>

      <motion.div
        className="text-center section-padding bg-primary text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-4">Prêt à booster votre business ?</h2>
        <p className="mb-8">Contactez notre équipe pour un projet sur-mesure.</p>
        <Link href="/contact" className="px-8 py-4 bg-white text-primary font-bold rounded-full shadow-lg hover:bg-gray-200 transition">
          Nous Contacter
        </Link>
      </motion.div>
    </main>
  );
}
