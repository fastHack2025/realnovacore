"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function PaiementsAdminPage() {
  const [paiements, setPaiements] = useState<any[]>([]);

  const fetchPaiements = async () => {
    const { data, error } = await supabase
      .from("paiements")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.error(error);
    else setPaiements(data || []);
  };

  useEffect(() => {
    fetchPaiements();
  }, []);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-8">💳 Paiements Reçus</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paiements.map((paiement) => (
          <div key={paiement.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold">{paiement.nom}</h2>
            <p className="text-gray-600">Montant: {paiement.montant} €</p>
            <p className="text-gray-600">Méthode: {paiement.methode}</p>
            <p className="text-gray-600">Date: {new Date(paiement.created_at).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
