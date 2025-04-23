"use client";

import { LineChart } from "lucide-react";

export default function AdminAnalytics() {
  return (
    <main className="min-h-screen px-6 py-20 text-white bg-gradient-to-br from-gray-900 to-black">
      <h1 className="text-4xl font-bold mb-10 flex items-center gap-3">
        <LineChart className="w-8 h-8 text-green-400" /> Statistiques globales IA
      </h1>
      <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-center text-gray-300 backdrop-blur">
        📊 Module de graphiques en cours d’intégration. Données à visualiser prochainement.
      </div>
    </main>
  );
}
