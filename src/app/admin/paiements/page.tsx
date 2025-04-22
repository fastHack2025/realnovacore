"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

interface Paiement {
  id: string;
  montant: number;
  moyen: string;
  statut: string;
  created_at: string;
  user_id: string;
  email?: string;
}

export default function AdminPaiementsPage() {
  const { user } = useUser();
  const router = useRouter();
  const [paiements, setPaiements] = useState<Paiement[]>([]);
  const [search, setSearch] = useState("");
  const [statutFilter, setStatutFilter] = useState("all");

  useEffect(() => {
    if (user && user.publicMetadata?.role !== "admin") router.push("/");
    else fetchPaiements();
  }, [user]);

  const fetchPaiements = async () => {
    const { data, error } = await supabase
      .from("paiements")
      .select("*, users:auth.users(email)")
      .order("created_at", { ascending: false });

    if (data) {
      const mapped = data.map((p: any) => ({
        ...p,
        email: p.users?.email || "",
      }));
      setPaiements(mapped);
    } else if (error) toast.error("Erreur chargement paiements");
  };

  const updateStatut = async (id: string, statut: string) => {
    await supabase.from("paiements").update({ statut }).eq("id", id);
    toast.success("Statut mis à jour");

    if (statut === "Validé") {
      try {
        const res = await fetch("/api/paiements/send-facture", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paiement_id: id }),
        });
        const result = await res.json();
        if (result.success) {
          toast.success("📧 Facture envoyée avec succès");
        } else {
          toast.error("❌ Échec de l’envoi de la facture");
        }
      } catch (e) {
        toast.error("Erreur lors de l'envoi de la facture");
      }
    }

    fetchPaiements();
  };

  const deletePaiement = async (id: string) => {
    await supabase.from("paiements").delete().eq("id", id);
    toast.success("Paiement supprimé");
    fetchPaiements();
  };

  const filtered = paiements.filter((p) => {
    const matchStatut = statutFilter === "all" || p.statut === statutFilter;
    const matchSearch =
      p.email?.toLowerCase().includes(search.toLowerCase()) ||
      p.moyen?.toLowerCase().includes(search.toLowerCase());
    return matchStatut && matchSearch;
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📊 Admin - Paiements</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <input
          className="border p-2 rounded w-full md:w-64"
          placeholder="🔍 Email ou moyen..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={statutFilter}
          onChange={(e) => setStatutFilter(e.target.value)}
        >
          <option value="all">Tous</option>
          <option value="Validé">Validé</option>
          <option value="En attente">En attente</option>
          <option value="Échoué">Échoué</option>
        </select>
      </div>

      <div className="grid gap-4">
        {filtered.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded shadow-sm border">
            <p>💰 <strong>{p.montant / 100} €</strong> — {p.moyen}</p>
            <p>📅 {new Date(p.created_at).toLocaleString()}</p>
            <p>👤 {p.email || "Inconnu"}</p>
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

            <div className="flex gap-2 mt-2">
              {p.statut !== "Validé" && (
                <button
                  onClick={() => updateStatut(p.id, "Validé")}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  ✅ Valider
                </button>
              )}
              {p.statut !== "Échoué" && (
                <button
                  onClick={() => updateStatut(p.id, "Échoué")}
                  className="bg-yellow-600 text-white px-3 py-1 rounded"
                >
                  ⚠️ Refuser
                </button>
              )}
              <button
                onClick={() => deletePaiement(p.id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                🗑️ Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
