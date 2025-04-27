"use client";

import { useEffect, useState } from "react";

interface Patient {
  id: number;
  nom: string;
  prenom: string;
  date_naissance: string;
  genre: string;
}

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await fetch("/api/patients");
        const text = await res.text();
        const json = text ? JSON.parse(text) : {};

        if (!res.ok || json.error) {
          throw new Error(json.error || "Erreur de chargement des patients");
        }

        setPatients(json.data || []);
      } catch (err) {
        console.error("Erreur patients:", err);
        setError("Impossible de charger les patients.");
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  return (
    <main className="p-6 md:p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8">👨‍⚕️ Liste des Patients</h1>

      {loading && <p className="text-gray-500">Chargement...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-indigo-100 text-left">
              <th className="p-3">Nom</th>
              <th className="p-3">Prénom</th>
              <th className="p-3">Naissance</th>
              <th className="p-3">Genre</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{p.nom}</td>
                <td className="p-3">{p.prenom}</td>
                <td className="p-3">{p.date_naissance}</td>
                <td className="p-3">{p.genre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
