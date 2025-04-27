"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";

export default function CommunityManagerCRMPage() {
  const supabase = createClient();
  const [campagnes, setCampagnes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCampagnes() {
      const { data, error } = await supabase.from("campagnes").select("*").order("date_creation", { ascending: false });
      if (!error) {
        setCampagnes(data || []);
      }
      setLoading(false);
    }
    fetchCampagnes();
  }, [supabase]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 text-gray-900 p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold animate-fadeInUp">📱 CRM Community Manager</h1>
        <p className="text-lg text-gray-600 animate-fadeInUp">Gérez vos campagnes de communication avec NovaCore.</p>
      </header>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader animate-bounce">Chargement des campagnes...</div>
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-zoomIn">
          {campagnes.map((campagne) => (
            <div key={campagne.id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition transform hover:scale-105">
              <h2 className="text-2xl font-semibold mb-2">{campagne.nom_campagne}</h2>
              <p className="text-gray-600">Plateforme : {campagne.plateforme}</p>
              <p className="text-gray-400 text-sm">Date : {new Date(campagne.date_creation).toLocaleDateString()}</p>
              <p className="text-gray-600 mt-2">Statut : {campagne.statut}</p>
            </div>
          ))}
        </section>
      )}

      <footer className="mt-16 text-center text-gray-500 text-sm animate-fadeInUp">
        &copy; {new Date().getFullYear()} NovaCore CRM - Tous droits réservés.
      </footer>
    </main>
  );
}
