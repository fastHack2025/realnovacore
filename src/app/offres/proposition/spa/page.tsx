"use client";

import { useRouter } from "next/navigation";

export default function OffreSpaPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen px-6 py-20 bg-gradient-to-b from-white to-indigo-50 text-gray-900">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-indigo-700 mb-4">💆‍♀️ Offre personnalisée : CRM & IA pour Spa</h1>
        <p className="mb-4 text-gray-700">
          Basée sur vos réponses, nous vous recommandons une solution dédiée à la gestion de votre activité de spa :
        </p>
        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 mb-6">
          <li>CRM intuitif pour la gestion des clients, réservations et relances</li>
          <li>Assistant IA intégré pour répondre automatiquement aux demandes</li>
          <li>Système de suivi client (soins, préférences, historique)</li>
          <li>Notifications WhatsApp et Email intégrées</li>
          <li>Formulaire personnalisé d'accueil client</li>
        </ul>
        <p className="text-lg font-semibold text-indigo-600 mb-4">💰 700 000 FCFA / 3 mois</p>

        <button
          onClick={() => router.push("/auth/signin")}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 shadow-md"
        >
          S'inscrire et souscrire à l'offre
        </button>
      </div>
    </main>
  );
}
