// ✅ src/app/offres/proposition/location/page.tsx — Offre personnalisée pour agence de location

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OffreLocationPage() {
  const router = useRouter();
  const [type, setType] = useState("meublé");

  const getDetails = (selected: string) => {
    switch (selected) {
      case "meublé":
        return [
          "Gestion des appartements entièrement meublés",
          "Contrats automatisés avec signature électronique",
          "Planning de réservation avec notifications locataire",
          "Assistant IA pour les relances et questions clients"
        ];
      case "non meublé":
        return [
          "Suivi des loyers et contrats longue durée",
          "Assistant IA pour gestion des demandes",
          "Espace client pour consultation du bail",
          "Alertes automatiques pour renouvellement et paiement"
        ];
      case "véhicule":
        return [
          "Réservations en ligne de véhicules (auto/moto)",
          "Planning synchronisé + IA assistant client",
          "Suivi des entretiens, assurance et disponibilité",
          "Paiement mobile + dépôt de garantie intégré"
        ];
      default:
        return [];
    }
  };

  const benefits = getDetails(type);

  return (
    <main className="min-h-screen px-6 py-20 bg-gradient-to-b from-white to-amber-50 text-gray-900">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-amber-600 mb-6">🏠 Offre personnalisée : Agence de Location</h1>

        <label className="block text-sm text-gray-700 font-medium mb-2">Quel type de location gérez-vous ?</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <option value="meublé">Logements meublés</option>
          <option value="non meublé">Logements non meublés</option>
          <option value="véhicule">Véhicules (location auto/moto)</option>
        </select>

        <ul className="list-disc list-inside text-sm text-gray-800 space-y-2 mb-6">
          {benefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p className="text-lg font-semibold text-amber-600 mb-4">💰 700 000 FCFA / 3 mois</p>

        <button
          onClick={() => router.push("/auth/signin")}
          className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 shadow-md"
        >
          S'inscrire et souscrire à l'offre
        </button>
      </div>
    </main>
  );
}
