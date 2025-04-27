"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import { Database } from "@/types/supabase";
import Loader from "@/components/Loader";

type RDV = Database["public"]["Tables"]["rdv"]["Row"];

export default function AdminRDVPage() {
  const [rdvs, setRdvs] = useState<RDV[]>([]);
  const [loading, setLoading] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    const fetchRDVs = async () => {
      const { data, error } = await supabase.from("rdv").select("*");
      if (error) {
        console.error("Erreur chargement RDVs:", error.message);
      } else {
        setRdvs(data || []);
      }
      setLoading(false);
    };

    fetchRDVs();
  }, [supabase]);

  if (loading) return <Loader />;

  return (
    <main className="min-h-screen p-6 bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        📅 Gestion des RDV - Admin
      </h1>

      {rdvs.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300">Aucun rendez-vous pour le moment.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full table-auto">
            <thead className="bg-primary text-white">
              <tr>
                <th className="p-4 text-left">Nom</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Téléphone</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Heure</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {rdvs.map((rdv) => (
                <tr key={rdv.id} className="even:bg-gray-100 dark:even:bg-gray-800">
                  <td className="p-4">{rdv.nom}</td>
                  <td className="p-4">{rdv.email}</td>
                  <td className="p-4">{rdv.telephone}</td>
                  <td className="p-4">{rdv.date}</td>
                  <td className="p-4">{rdv.heure}</td>
                  <td className="p-4">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-all">
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
