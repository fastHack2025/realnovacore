'use client';

import { motion } from 'framer-motion';

const plans = [
  {
    name: "Starter",
    price: "14 000 FCFA/mois",
    features: [
      "CRM de base",
      "1 utilisateur",
      "Support email",
      "Suivi client simple",
    ],
  },
  {
    name: "Business",
    price: "29 000 FCFA/mois",
    features: [
      "CRM complet + IA",
      "5 utilisateurs",
      "Support prioritaire",
      "Modules devis, IA rédaction & réseaux sociaux",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Sur demande",
    features: [
      "CRM sur mesure",
      "Nombre illimité d’utilisateurs",
      "Formation équipes",
      "Intégration complète IA + API",
    ],
  },
];

export default function PricingNovaCore() {
  return (
    <section id="pricing-novacore" className="py-24 bg-gradient-to-b from-indigo-950 via-purple-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          🧠 Tarification NovaCore
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`rounded-3xl p-8 shadow-2xl flex flex-col justify-between ${
                plan.highlight
                  ? 'bg-gradient-to-br from-indigo-700 to-purple-700 text-white border-2 border-indigo-400'
                  : 'bg-zinc-800'
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-3xl font-bold text-indigo-300 mb-8">{plan.price}</p>
                <ul className="text-gray-300 space-y-4 mb-8 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✅ {feature}</li>
                  ))}
                </ul>
              </div>
              <button className="mt-auto bg-white text-indigo-700 font-bold py-3 rounded-full transition hover:bg-gray-100">
                S'abonner
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
