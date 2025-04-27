"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";

export default function SpaCRMPage() {
  const supabase = createClient();
  const [soins, setSoins] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSoins() {
      const { data, error } = await supabase.from("soins_spa").select("*").order("created_at", { ascending: false });
      if (!error) {
        setSoins(data || []);
      }
      setLoading(false);
    }
    fetchSoins();
  }, [supabase]);

  return (
    <main className="min-h-screen bg-gradient-to-bl from-green-50 to-green-100 text-gray-900 p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold animate-fadeInUp">🧖‍♀️ CRM Spa & Bien-être</h1>
        <p className="text-lg text-gray-600 animate-fadeInUp">Gérez vos services spa avec élégance et efficacité.</p>
      </header>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader animate-bounce">Chargement des soins...</div>
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-zoomIn">
          {soins.map((soin) => (
            <div key={soin.id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition transform hover:scale-105">
              <h2 className="text-2xl font-semibold mb-2">{soin.nom_soin}</h2>
              <p className="text-gray-600">Durée : {soin.duree} min</p>
              <p className="text-gray-600">Prix : {soin.prix} €</p>
              <p className="text-gray-400 text-sm">Catégorie : {soin.categorie}</p>
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
