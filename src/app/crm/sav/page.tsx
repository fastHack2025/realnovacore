"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";

export default function SavCRMPage() {
  const supabase = createClient();
  const [demandes, setDemandes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDemandes() {
      const { data, error } = await supabase.from("sav_demandes").select("*").order("created_at", { ascending: false });
      if (!error) {
        setDemandes(data || []);
      }
      setLoading(false);
    }
    fetchDemandes();
  }, [supabase]);

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 text-gray-900 p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold animate-fadeInUp">🔧 CRM Service Après-Vente</h1>
        <p className="text-lg text-gray-600 animate-fadeInUp">Gérez efficacement toutes vos demandes clients après-vente.</p>
      </header>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader animate-bounce">Chargement...</div>
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-zoomIn">
          {demandes.map((demande) => (
            <div key={demande.id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition transform hover:scale-105">
              <h2 className="text-xl font-semibold">🛠️ {demande.nom_client}</h2>
              <p className="text-gray-600">Problème : {demande.description}</p>
              <p className="text-gray-400 text-sm">Statut : {demande.statut}</p>
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
