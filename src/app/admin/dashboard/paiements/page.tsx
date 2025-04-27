"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import { Database } from "@/types/supabase";
import Loader from "@/components/Loader";

type Paiement = Database["public"]["Tables"]["paiements"]["Row"];

export default function AdminPaiementsPage() {
  const [paiements, setPaiements] = useState<Paiement[]>([]);
  const [loading, setLoading] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    const fetchPaiements = async () => {
      const { data, error } = await supabase.from("paiements").select("*");
      if (error) {
        console.error("Erreur chargement Paiements:", error.message);
      } else {
        setPaiements(data || []);
      }
      setLoading(false);
    };

    fetchPaiements();
  }, [supabase]);

  if (loading) return <Loader />;

  return (
    <main className="min-h-screen p-6 bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        💳 Gestion des Paiements - Admin
      </h1>

      {paiements.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300">Aucun paiement enregistré.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full table-auto">
            <thead className="bg-primary text-white">
              <tr>
                <th className="p-4 text-left">Nom Client</th>
                <th className="p-4 text-left">Montant</th>
                <th className="p-4 text-left">Méthode</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {paiements.map((paiement) => (
                <tr key={paiement.id} className="even:bg-gray-100 dark:even:bg-gray-800">
                  <td className="p-4">{paiement.nom}</td>
                  <td className="p-4">{paiement.montant} €</td>
                  <td className="p-4">{paiement.methode}</td>
                  <td className="p-4">{paiement.date}</td>
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
