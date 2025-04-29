'use client';

import { motion } from 'framer-motion';

export default function PricingSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gray-900 text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-12">Nos Tarifs NovaCore</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {[
          { title: 'Basic', price: '49€/mois', desc: 'CRM & ERP essentiels.' },
          { title: 'Business', price: '99€/mois', desc: 'Modules IA et plus.' },
          { title: 'Enterprise', price: '199€/mois', desc: 'Solutions personnalisées.' },
        ].map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
            <p className="text-3xl font-extrabold mb-4">{plan.price}</p>
            <p className="text-gray-400 mb-6">{plan.desc}</p>
            <button className="bg-indigo-600 py-2 px-6 rounded-full font-bold hover:bg-indigo-700">
              S'abonner
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
