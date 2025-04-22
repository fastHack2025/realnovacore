"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

interface Paiement {
  id: string;
  montant: number;
  moyen: string;
  statut: string;
  created_at: string;
  user_id: string;
}

export default function PaiementsPage() {
  const { user } = useUser();
  const router = useRouter();
  const [paiements, setPaiements] = useState<Paiement[]>([]);

  useEffect(() => {
    if (user && !user.id) router.push("/");
    if (user?.id) fetchPaiements();
  }, [user]);

  const fetchPaiements = async () => {
    const { data } = await supabase
      .from("paiements")
      .select("*")
      .eq("user_id", user?.id)
      .order("created_at", { ascending: false });
    if (data) setPaiements(data);
  };

  const lancerStripe = async () => {
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      body: JSON.stringify({ montant: 10000 }),
    });
    const { url } = await res.json();
    if (url) window.location.href = url;
  };

  const lancerCinetPay = async () => {
    const res = await fetch("/api/cinetpay/init", {
      method: "POST",
      body: JSON.stringify({ montant: 10000 }),
    });
    const { payment_url } = await res.json();
    if (payment_url) window.location.href = payment_url;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">💳 Paiements</h1>

      <div className="flex gap-4 mb-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={lancerStripe}>
          Stripe (Carte)
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={lancerCinetPay}>
          CinetPay (Afrique)
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-2">🧾 Historique</h2>
      <div className="grid gap-4">
        {paiements.map((p) => (
          <div key={p.id} className="p-4 border rounded bg-white shadow-sm">
            <p>💰 {p.montant / 100} € — {p.moyen}</p>
            <p>📅 {new Date(p.created_at).toLocaleString()}</p>
            <p>📌 Statut : <strong>{p.statut}</strong></p>
            {p.statut === "Validé" && (
              <a
                href={`/paiements/facture/${p.id}`}
                target="_blank"
                className="text-blue-600 underline"
              >
                📄 Voir facture
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
