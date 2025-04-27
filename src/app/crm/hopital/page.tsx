"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function HopitalCRMPage() {
  const supabase = createClient();
  const router = useRouter();
  const [patients, setPatients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPatients() {
      const { data, error } = await supabase.from("patients").select("*").order("created_at", { ascending: false });
      if (!error) {
        setPatients(data || []);
      }
      setLoading(false);
    }
    fetchPatients();
  }, [supabase]);

  return (
    <main className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100 text-gray-900 p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold animate-fadeInUp">🏥 CRM Hôpital</h1>
        <p className="text-lg text-gray-600 animate-fadeInUp">Gérez vos patients, hospitalisations et services médicaux avec NovaCore.</p>
      </header>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader animate-bounce">Chargement...</div>
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {patients.map((patient) => (
            <div
              key={patient.id}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition transform hover:scale-105 animate-zoomIn cursor-pointer"
              onClick={() => router.push(`/crm/hopital/dashboard?id=${patient.id}`)}
            >
              <h2 className="text-xl font-semibold">{patient.nom} {patient.prenom}</h2>
              <p className="text-gray-600">Né(e) le : {new Date(patient.date_naissance).toLocaleDateString()}</p>
              <p className="text-gray-600">Service : {patient.service}</p>
            </div>
          ))}
        </section>
      )}

      <footer className="mt-16 text-center text-gray-500 text-sm animate-fadeInUp">
        &copy; {new Date().getFullYear()} NovaCore CRM - Tous droits réservés.
      </footer>
    </main>
  );
}
