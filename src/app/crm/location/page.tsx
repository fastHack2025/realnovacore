"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";

export default function LocationCRMPage() {
  const supabase = createClient();
  const [biens, setBiens] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBiens() {
      const { data, error } = await supabase.from("locations").select("*").order("created_at", { ascending: false });
      if (!error) {
        setBiens(data || []);
      }
      setLoading(false);
    }
    fetchBiens();
  }, [supabase]);

  return (
    <main className="min-h-screen bg-gradient-to-r from-yellow-50 to-orange-100 text-gray-900 p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold animate-fadeInUp">🏢 CRM Location Immobilière</h1>
        <p className="text-lg text-gray-600 animate-fadeInUp">Suivi des biens disponibles et gérés avec NovaCore CRM.</p>
      </header>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader animate-bounce">Chargement des biens...</div>
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-zoomIn">
          {biens.map((bien) => (
            <div key={bien.id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition transform hover:scale-105">
              <h2 className="text-2xl font-semibold mb-2">{bien.nom_bien}</h2>
              <p className="text-gray-600">Type : {bien.type}</p>
              <p className="text-gray-600">Prix : {bien.prix} €/mois</p>
              <p className="text-gray-400 text-sm">Localisation : {bien.localisation}</p>
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
