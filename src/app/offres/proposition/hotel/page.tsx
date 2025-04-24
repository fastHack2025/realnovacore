"use client";

import { useRouter } from "next/navigation";

export default function OffreHotelPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen px-6 py-20 bg-gradient-to-b from-white to-blue-50 text-gray-900">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">🏨 Offre personnalisée : CRM & IA pour Hôtel</h1>
        <p className="mb-4 text-gray-700">
          Cette solution est spécialement conçue pour les établissements hôteliers qui souhaitent offrir une expérience client moderne, fluide et personnalisée :
        </p>
        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 mb-6">
          <li>CRM pour gestion des réservations et du personnel</li>
          <li>Assistant IA pour répondre aux demandes en ligne</li>
          <li>Suivi client par chambre, préférences et historique</li>
          <li>Intégration automatisée des rappels et upsell</li>
          <li>Statistiques d’occupation et alertes IA</li>
        </ul>
        <p className="text-lg font-semibold text-blue-600 mb-4">💰 700 000 FCFA / 3 mois</p>

        <button
          onClick={() => router.push("/auth/signin")}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 shadow-md"
        >
          S'inscrire et souscrire à l'offre
        </button>
      </div>
    </main>
  );
}
