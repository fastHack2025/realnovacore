"use client";

import { useEffect, useState } from "react";
import { AppConfig, Features, ThemeColors } from "@/lib/settings";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminConfigPage() {
  const [appName, setAppName] = useState(AppConfig.name);
  const [baseURL, setBaseURL] = useState(AppConfig.baseURL);
  const [features, setFeatures] = useState(Features);
  const [theme, setTheme] = useState(ThemeColors.primary);

  const handleToggle = (key: keyof typeof Features) => {
    setFeatures((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const saveToSupabase = async () => {
    const { error } = await supabase
      .from("config")
      .upsert([{ id: 1, name: appName, base_url: baseURL, theme, features }]);

    if (error) {
      console.error("❌ Erreur Supabase :", error);
      alert("❌ Sauvegarde échouée !");
    } else {
      alert("✅ Configuration enregistrée !");
    }
  };

  return (
    <main className="p-6 md:p-10 bg-white text-gray-900 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">⚙️ Admin – Configuration</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="font-semibold">Nom de l’app :</label>
          <input
            type="text"
            className="border rounded px-3 py-2 w-full"
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
          />

          <label className="font-semibold mt-4 block">Base URL :</label>
          <input
            type="text"
            className="border rounded px-3 py-2 w-full"
            value={baseURL}
            onChange={(e) => setBaseURL(e.target.value)}
          />

          <label className="font-semibold mt-4 block">🎨 Couleur principale :</label>
          <input
            type="color"
            className="w-16 h-10 mt-1"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">🧩 Modules actifs</h2>
          {Object.entries(features).map(([key, value]) => (
            <label key={key} className="flex items-center gap-3 mb-2">
              <input
                type="checkbox"
                checked={value}
                onChange={() => handleToggle(key as keyof typeof Features)}
              />
              <span className="capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={saveToSupabase}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          💾 Sauvegarder
        </button>
      </div>
    </main>
  );
}
