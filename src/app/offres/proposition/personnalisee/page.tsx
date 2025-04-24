// ✅ src/app/offres/proposition/personnalisee/page.tsx — Offre personnalisée libre (autres secteurs)

"use client";

import { useRouter } from "next/navigation";

export default function OffreLibrePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen px-6 py-20 bg-gradient-to-b from-white to-violet-50 text-gray-900">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-violet-600 mb-4">🎯 Offre personnalisée : CRM & IA sur mesure</h1>
        <p className="mb-4 text-gray-700">
          Notre assistant IA a analysé vos besoins spécifiques. Voici une solution flexible et personnalisée, parfaitement adaptée à votre activité :
        </p>
        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 mb-6">
          <li>CRM intelligent et entièrement personnalisable</li>
          <li>Assistant IA qui s’adapte à votre vocabulaire métier</li>
          <li>Modules dédiés selon votre secteur (formation, commerce, tech...)</li>
          <li>Suivi automatique + rappels IA personnalisés</li>
          <li>Intégration possible d’outils tiers (Zapier, WhatsApp, Email...)</li>
        </ul>
        <p className="text-lg font-semibold text-violet-600 mb-4">💰 700 000 FCFA / 3 mois</p>

        <button
          onClick={() => router.push("/auth/signin")}
          className="bg-violet-600 text-white px-6 py-2 rounded-md hover:bg-violet-700 shadow-md"
        >
          S'inscrire et souscrire à l'offre
        </button>
      </div>
    </main>
  );
}