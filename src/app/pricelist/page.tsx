'use client';

import { motion } from 'framer-motion';

export default function PriceList() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white pt-20 px-6">
      
      {/* Titre de page */}
      <section className="text-center section-padding">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold mb-6"
        >
          Plans & Tarifs
        </motion.h1>
        <p className="text-gray-300 text-lg">Choisissez l'accompagnement qui correspond à vos ambitions.</p>
      </section>

      {/* DL Solutions Bloc */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8 border-b border-primary inline-block pb-2">Solutions DL Solutions</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Plan Essentiel */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-8 rounded-3xl shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Plan Essentiel</h3>
              <p className="mb-6 text-gray-400">Idéal pour démarrer fort :</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>✅ Diagnostic Parcours Client</li>
                <li>✅ Mise en place CRM simple</li>
                <li>✅ Formation accueil & satisfaction</li>
                <li>✅ 1 Suivi stratégique / mois</li>
              </ul>
            </div>
            <div className="mt-6 text-primary font-bold text-2xl">XAF 750,000</div>
          </motion.div>

          {/* Plan Business+ */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-8 rounded-3xl shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Plan Business+</h3>
              <p className="mb-6 text-gray-400">Parfait pour PME en croissance :</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>✅ Pack Com 360° (Visuels, Flyers, QR Code)</li>
                <li>✅ Mise en place CRM + Dashboard client</li>
                <li>✅ 1 Coaching stratégique / mois</li>
              </ul>
            </div>
            <div className="mt-6 text-primary font-bold text-2xl">XAF 1,000,000</div>
          </motion.div>

          {/* Plan Transformation 360° */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-8 rounded-3xl shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Plan Transformation 360°</h3>
              <p className="mb-6 text-gray-400">Pour booster votre image et expérience client :</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>✅ Tout du Plan Business+</li>
                <li>✅ Accompagnement complet 3 mois</li>
                <li>✅ Suivi premium + Ajustements continus</li>
              </ul>
            </div>
            <div className="mt-6 text-primary font-bold text-2xl">XAF 1,500,000</div>
          </motion.div>
        </div>
      </section>

      {/* NovaCore Bloc */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-8 border-b border-secondary inline-block pb-2">Solutions NovaCore</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Plan NovaCore Base */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">NovaCore AI Starter</h3>
            <p className="mb-6 text-gray-400">Déploiement CRM AI Ready :</p>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>✅ CRM + Automatisations IA</li>
              <li>✅ Tableau de bord KPI intégré</li>
              <li>✅ Support IA (NovaCore Tools)</li>
            </ul>
            <div className="mt-6 text-secondary font-bold text-2xl">Sur Devis</div>
          </motion.div>

          {/* Plan NovaCore Full Suite */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">NovaCore Full AI Suite</h3>
            <p className="mb-6 text-gray-400">Transformation Digitale IA Totale :</p>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>✅ CRM NovaCore IA complet</li>
              <li>✅ Intégration totale IA contenus & process</li>
              <li>✅ Formation & Coaching AI</li>
            </ul>
            <div className="mt-6 text-secondary font-bold text-2xl">Sur Devis</div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
