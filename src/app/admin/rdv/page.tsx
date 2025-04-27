"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RDVAdminPage() {
  const [rdvs, setRdvs] = useState<any[]>([]);

  const fetchRdvs = async () => {
    const { data, error } = await supabase
      .from("rdv")
      .select("*")
      .order("date", { ascending: false });

    if (error) console.error(error);
    else setRdvs(data || []);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Supprimer ce RDV ?")) {
      const { error } = await supabase.from("rdv").delete().eq("id", id);
      if (!error) fetchRdvs();
      else console.error(error);
    }
  };

  useEffect(() => {
    fetchRdvs();
  }, []);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-8">📅 Rendez-vous</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rdvs.map((rdv) => (
          <div key={rdv.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold">{rdv.nom}</h2>
            <p className="text-gray-600">Date: {new Date(rdv.date).toLocaleString()}</p>
            <p className="text-gray-600">Téléphone: {rdv.telephone}</p>
            <button
              onClick={() => handleDelete(rdv.id)}
              className="mt-4 text-sm bg-red-500 text-white px-3 py-1 rounded"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
