// src/components/ServicesSection.tsx
'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaRocket size={50} />,
    title: 'Développement Web',
    description: 'Sites vitrines, e-commerce, applications sur-mesure. 🚀',
  },
  {
    icon: <FaLightbulb size={50} />,
    title: 'Solutions Innovantes',
    description: 'IA, Automatisation, Cloud Hosting et + encore. 💡',
  },
  {
    icon: <FaShieldAlt size={50} />,
    title: 'Sécurité Avancée',
    description: 'Protection 360° contre cybermenaces. 🛡️',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-primary mb-12 tracking-tight">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="rounded-2xl bg-white/5 backdrop-blur-sm p-8 text-center border border-primary hover:bg-primary hover:text-white hover:shadow-2xl hover:shadow-indigo-400 transition-all duration-500 ease-in-out cursor-pointer"
            >
              <div className="mb-6 text-primary">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
