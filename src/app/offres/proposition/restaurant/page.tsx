"use client";

import { useRouter } from "next/navigation";

export default function OffreRestoPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen px-6 py-20 bg-gradient-to-b from-white to-rose-50 text-gray-900">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-rose-600 mb-4">🍽️ Offre personnalisée : CRM & IA pour Restaurant</h1>
        <p className="mb-4 text-gray-700">
          D’après vos besoins, nous avons conçu une solution spécifique pour les restaurateurs qui souhaitent gérer leurs réservations, menus et clients efficacement :
        </p>
        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 mb-6">
          <li>Prise de réservation automatisée (WhatsApp / web)</li>
          <li>Fidélisation client et suivi de fréquentation</li>
          <li>Formulaire de suggestion plats & préférences clients</li>
          <li>Assistant IA pour réponses automatiques & suivi</li>
          <li>Rapports automatisés sur les pics d’affluence</li>
        </ul>
        <p className="text-lg font-semibold text-rose-600 mb-4">💰 700 000 FCFA / 3 mois</p>

        <button
          onClick={() => router.push("/auth/signin")}
          className="bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-700 shadow-md"
        >
          S'inscrire et souscrire à l'offre
        </button>
      </div>
    </main>
  );
}
