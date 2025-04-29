'use client';

import { motion } from 'framer-motion';

const plans = [
  {
    name: "Pack Basique",
    price: "25 000 FCFA",
    features: [
      "Community Management",
      "3 Publications/Semaine",
      "Rapport Mensuel",
      "1 réseau social inclus",
    ],
  },
  {
    name: "Pack Standard",
    price: "45 000 FCFA",
    features: [
      "Community Management",
      "4 Publications/Semaine",
      "Création de Visuels Pro",
      "2 réseaux sociaux inclus",
      "Campagnes Sponsorisées",
    ],
  },
  {
    name: "Pack Premium",
    price: "75 000 FCFA",
    features: [
      "Gestion Globale Réseaux",
      "Publications Illimitées",
      "Stratégie de Communication",
      "Graphisme + Vidéo",
      "3 réseaux sociaux inclus",
    ],
  },
];

export default function PricingDL() {
  return (
    <section id="pricing-dl" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          💎 Nos Packs DL Solutions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 shadow-xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-3xl font-bold text-indigo-400 mb-8">{plan.price}</p>
                <ul className="text-gray-300 space-y-4 mb-8 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✅ {feature}</li>
                  ))}
                </ul>
              </div>
              <button className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-full transition">
                Souscrire
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
