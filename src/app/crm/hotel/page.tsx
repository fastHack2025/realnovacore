"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";

export default function HotelCRMPage() {
  const supabase = createClient();
  const [chambres, setChambres] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchChambres() {
      const { data, error } = await supabase.from("chambres").select("*");
      if (!error) {
        setChambres(data || []);
      }
      setLoading(false);
    }
    fetchChambres();
  }, [supabase]);

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2 animate-fadeInUp">🏨 Gestion des Chambres</h1>
        <p className="text-lg text-gray-600 animate-fadeInUp">Suivi en temps réel de vos hébergements.</p>
      </header>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader animate-bounce">Chargement...</div>
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chambres.map((chambre) => (
            <div key={chambre.id} className="p-6 rounded-lg shadow-md bg-white hover:shadow-2xl transition transform hover:scale-105 animate-zoomIn">
              <h2 className="text-xl font-semibold">{chambre.nom}</h2>
              <p className="text-gray-600">Type : {chambre.type}</p>
              <p className="text-gray-600">Statut : {chambre.statut}</p>
              <p className="text-gray-600">Capacité : {chambre.capacite} pers.</p>
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
