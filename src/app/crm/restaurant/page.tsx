"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";

export default function RestaurantCRMPage() {
  const supabase = createClient();
  const [reservations, setReservations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReservations() {
      const { data, error } = await supabase.from("restaurant_reservations").select("*").order("date_reservation", { ascending: true });
      if (!error) {
        setReservations(data || []);
      }
      setLoading(false);
    }
    fetchReservations();
  }, [supabase]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-200 text-gray-900 p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold animate-fadeInUp">🍽️ CRM Restaurant</h1>
        <p className="text-lg text-gray-600 animate-fadeInUp">Gérez vos réservations et clients restaurant avec NovaCore.</p>
      </header>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader animate-bounce">Chargement...</div>
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reservations.map((res) => (
            <div key={res.id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition transform hover:scale-105 animate-zoomIn">
              <h2 className="text-xl font-semibold">🍽️ {res.nom_client}</h2>
              <p className="text-gray-600">Date : {new Date(res.date_reservation).toLocaleDateString()}</p>
              <p className="text-gray-600">Heure : {res.heure_reservation}</p>
              <p className="text-gray-400 text-sm">Personnes : {res.nombre_personnes}</p>
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
