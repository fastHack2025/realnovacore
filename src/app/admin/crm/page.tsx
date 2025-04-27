"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CRMAdminPage() {
  const [clients, setClients] = useState<any[]>([]);

  const fetchClients = async () => {
    const { data, error } = await supabase
      .from("crm_clients")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.error(error);
    else setClients(data || []);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Supprimer ce client ?")) {
      const { error } = await supabase.from("crm_clients").delete().eq("id", id);
      if (!error) fetchClients();
      else console.error(error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-8">📋 Clients CRM</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clients.map((client) => (
          <div key={client.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold">{client.nom} {client.prenom}</h2>
            <p className="text-gray-600">{client.email}</p>
            <p className="text-gray-600">{client.telephone}</p>
            <button
              onClick={() => handleDelete(client.id)}
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
