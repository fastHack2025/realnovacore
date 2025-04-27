"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import { Database } from "@/types/supabase";
import Loader from "@/components/Loader";

type Client = Database["public"]["Tables"]["crm_clients"]["Row"];

export default function AdminCRMPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    const fetchClients = async () => {
      const { data, error } = await supabase.from("crm_clients").select("*");
      if (error) {
        console.error("Erreur chargement CRM Clients:", error.message);
      } else {
        setClients(data || []);
      }
      setLoading(false);
    };

    fetchClients();
  }, [supabase]);

  if (loading) return <Loader />;

  return (
    <main className="min-h-screen p-6 bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        📋 CRM - Admin Dashboard
      </h1>

      {clients.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300">Aucun client enregistré.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="py-3 px-6 text-left">Nom</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Téléphone</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-4 px-6">{client.nom || "N/A"}</td>
                  <td className="py-4 px-6">{client.email || "N/A"}</td>
                  <td className="py-4 px-6">{client.telephone || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
