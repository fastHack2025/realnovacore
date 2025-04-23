"use client";

import { BarChart3 } from "lucide-react";
import IAModeSwitcher from "@/components/IAModeSwitcher";

export default function AnalyticsCM() {
  return (
    <main className="relative min-h-screen px-6 py-20 text-white">
      <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline>
        <source src="https://res.cloudinary.com/dko5sommz/video/upload/v1745413001/13510815_3840_2160_30fps_ilwhfm.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70 z-10" />

      <div className="relative z-20 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold flex items-center gap-3 mb-6">
          <BarChart3 className="w-8 h-8 text-green-300" /> Statistiques IA & Interprétation
        </h1>

        <IAModeSwitcher>
          <div className="space-y-2">
            <p className="text-gray-200">📊 Vos stats actuelles :</p>
            <ul className="list-disc ml-5 text-sm text-gray-300">
              <li>Engagement sur les 7 derniers jours</li>
              <li>Taux de clics par post</li>
              <li>Performance des hashtags</li>
            </ul>
            <button className="mt-4 bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white">Exporter en PDF</button>
          </div>
        </IAModeSwitcher>
      </div>
    </main>
  );
}
