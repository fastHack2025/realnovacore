// src/components/PricingGrid.tsx
'use client';

import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: '490€',
    description: 'Idéal pour les indépendants qui veulent moderniser leur relation client et leurs outils.',
    features: [
      'Audit expérience client de base',
      'Déploiement CRM simple',
      'Calendrier éditorial light',
      'Création mini-landing page',
    ],
    isPopular: false,
  },
  {
    name: 'Business NovaCore',
    price: '1290€',
    description: 'Parfait pour PME voulant automatiser, digitaliser et améliorer leur CX + CRM NovaCore.',
    features: [
      'Audit complet expérience client',
      'Mise en place CRM avancé',
      'Portail client personnalisé',
      'Automatisation processus IA',
    ],
    isPopular: true,
  },
  {
    name: 'Corporate Excellence',
    price: 'Sur devis',
    description: 'Solutions haut de gamme sur-mesure pour groupes & grandes entreprises.',
    features: [
      'Audit CX, CRM, stratégie digitale',
      'Création plateforme IA dédiée',
      'Développement spécifique NovaCore',
      'Accompagnement VIP 6 mois',
    ],
    isPopular: false,
  },
];

export default function PricingGrid() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Nos Offres NovaCore
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className={`rounded-2xl p-8 shadow-2xl backdrop-blur-lg bg-white/10 ${plan.isPopular ? 'border-4 border-primary' : 'border border-white/20'}`}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
              <p className="text-3xl font-extrabold text-primary mb-6">{plan.price}</p>
              <p className="text-gray-400 mb-8">{plan.description}</p>
              <ul className="text-gray-300 text-left space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index}>✔️ {feature}</li>
                ))}
              </ul>
              <button className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-primary transition">
                Sélectionner
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
