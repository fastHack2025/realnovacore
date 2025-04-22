"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { supabase } from "@/lib/supabase";

interface Facture {
  id: string;
  created_at: string;
  montant: number;
  statut: string;
}

export default function FacturesClientPage() {
  const { user } = useUser();
  const [factures, setFactures] = useState<Facture[]>([]);

  useEffect(() => {
    if (user?.id) {
      supabase
        .from("paiements")
        .select("id, created_at, montant, statut")
        .eq("user_id", user.id)
        .eq("statut", "Validé")
        .order("created_at", { ascending: false })
        .then(({ data }) => setFactures(data || []));
    }
  }, [user]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">📁 Mes Factures</h1>
      <div className="grid gap-4">
        {factures.map((f) => (
          <div key={f.id} className="border rounded p-4 shadow-sm bg-white">
            <p>📅 {new Date(f.created_at).toLocaleDateString()}</p>
            <p>💰 Montant : {f.montant / 100} €</p>
            <p>📌 Statut : {f.statut}</p>
            <a
              href={`https://your-supabase-url.storage.supabase.co/storage/v1/object/public/factures/facture-${f.id}.pdf`}
              target="_blank"
              className="text-blue-600 underline mt-2 inline-block"
            >
              📄 Télécharger
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
