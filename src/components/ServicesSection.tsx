'use client';

import { motion } from 'framer-motion';

export default function ServicesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-black text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-12">Nos Services NovaCore</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {[
          { title: 'CRM Intelligent', desc: 'Gérez vos clients efficacement grâce à l’IA.' },
          { title: 'ERP Connecté', desc: 'Optimisez vos processus internes avec un ERP moderne.' },
          { title: 'Solutions IA', desc: 'Boostez votre productivité grâce à l’automatisation intelligente.' },
        ].map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
