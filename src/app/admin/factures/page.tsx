"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

export default function AdminFacturesPage() {
  const [factures, setFactures] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchFactures();
  }, []);

  const fetchFactures = async () => {
    const { data } = await supabase
      .from("paiements")
      .select("*, user:auth.users(email)")
      .eq("statut", "Validé")
      .order("created_at", { ascending: false });
    setFactures(data || []);
  };

  const resend = async (id: string) => {
    const res = await fetch("/api/factures/send", {
      method: "POST",
      body: JSON.stringify({ paiement_id: id }),
    });
    if (res.ok) toast.success("📧 Facture renvoyée");
    else toast.error("Erreur d’envoi");
  };

  const filtered = factures.filter((f) =>
    f.user?.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">📤 Admin - Factures</h1>
      <input
        className="border p-2 rounded mb-6 w-full md:w-96"
        placeholder="Recherche par email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid gap-4">
        {filtered.map((f) => (
          <div key={f.id} className="border rounded p-4 bg-white shadow-sm">
            <p>👤 {f.user?.email}</p>
            <p>💰 {f.montant / 100} €</p>
            <p>📅 {new Date(f.created_at).toLocaleString()}</p>
            <div className="flex gap-4 mt-2">
              <a
                href={`https://your-supabase-url.storage.supabase.co/storage/v1/object/public/factures/facture-${f.id}.pdf`}
                target="_blank"
                className="text-blue-600 underline"
              >
                📄 Télécharger
              </a>
              <button
                onClick={() => resend(f.id)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                📤 Renvoyer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
