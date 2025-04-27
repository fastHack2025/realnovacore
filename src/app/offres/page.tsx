"use client";

import Link from "next/link";

export default function OffresPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center overflow-x-hidden">
      
      {/* Hero Section Offres */}
      <section className="relative w-full h-[80vh] flex items-center justify-center bg-black overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
          src="https://res.cloudinary.com/dko5sommz/video/upload/v1744416795/page1_cfuzxw.mp4"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl">
            Découvrez nos Offres Premium
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-lg">
            Propulsez votre entreprise grâce à l'IA et nos services de haute qualité.
          </p>
        </div>
      </section>

      {/* Section Tarifs */}
      <section className="max-w-7xl w-full px-6 py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-indigo-700 mb-12 text-center">
          Choisissez votre plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Offre Starter */}
          <div className="border border-gray-200 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform bg-white">
            <h3 className="text-2xl font-bold mb-4 text-indigo-700">Starter</h3>
            <p className="text-4xl font-extrabold mb-6">99€/mois</p>
            <ul className="text-gray-600 mb-6 space-y-2 text-center">
              <li>✔️ 3 modules IA inclus</li>
              <li>✔️ Assistance email 24/7</li>
              <li>✔️ Formation incluse</li>
            </ul>
            <Link href="/rdv">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all">
                Choisir Starter
              </button>
            </Link>
          </div>

          {/* Offre Business */}
          <div className="border-4 border-indigo-600 rounded-2xl shadow-xl p-10 flex flex-col items-center bg-indigo-50 hover:scale-110 transition-transform">
            <h3 className="text-2xl font-bold mb-4 text-indigo-700">Business</h3>
            <p className="text-4xl font-extrabold mb-6">299€/mois</p>
            <ul className="text-gray-600 mb-6 space-y-2 text-center">
              <li>✔️ 10 modules IA</li>
              <li>✔️ Dashboard CRM complet</li>
              <li>✔️ Support prioritaire 24/7</li>
            </ul>
            <Link href="/rdv">
              <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold shadow-lg transition-all">
                Choisir Business
              </button>
            </Link>
          </div>

          {/* Offre Entreprise */}
          <div className="border border-gray-200 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform bg-white">
            <h3 className="text-2xl font-bold mb-4 text-indigo-700">Entreprise</h3>
            <p className="text-4xl font-extrabold mb-6">Sur devis</p>
            <ul className="text-gray-600 mb-6 space-y-2 text-center">
              <li>✔️ Modules IA illimités</li>
              <li>✔️ Déploiement personnalisé</li>
              <li>✔️ Support VIP 24/7</li>
            </ul>
            <Link href="/rdv">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all">
                Demander un devis
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* Retour Accueil */}
      <div className="mt-16 mb-10">
        <Link href="/">
          <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full shadow-lg transition-all">
            Retour à l'accueil
          </button>
        </Link>
      </div>
    </main>
  );
}
