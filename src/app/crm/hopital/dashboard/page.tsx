"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";

export default function PatientDashboard() {
  const supabase = createClient();
  const searchParams = useSearchParams();
  const patientId = searchParams.get("id");

  const [patient, setPatient] = useState<any>(null);
  const [hospitalisation, setHospitalisation] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!patientId) return;
      const { data: patientData, error: patientError } = await supabase.from("patients").select("*").eq("id", patientId).single();
      const { data: hospData, error: hospError } = await supabase.from("hospitalisations").select("*").eq("patient_id", patientId).single();
      
      if (!patientError && patientData) setPatient(patientData);
      if (!hospError && hospData) setHospitalisation(hospData);

      setLoading(false);
    }
    fetchData();
  }, [supabase, patientId]);

  if (loading) {
    return (
      <main className="min-h-screen flex justify-center items-center text-gray-700">
        <div className="loader animate-bounce">Chargement du dossier patient...</div>
      </main>
    );
  }

  if (!patient) {
    return (
      <main className="min-h-screen flex justify-center items-center text-red-500">
        <p>❌ Patient introuvable.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 text-gray-900 p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold animate-fadeInUp">📋 Dossier de {patient.nom} {patient.prenom}</h1>
        <p className="text-lg text-gray-600 animate-fadeInUp">Détails du patient & historique hospitalier.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-zoomIn">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">🧑 Informations Patient</h2>
          <p><strong>Nom :</strong> {patient.nom}</p>
          <p><strong>Prénom :</strong> {patient.prenom}</p>
          <p><strong>Date de naissance :</strong> {new Date(patient.date_naissance).toLocaleDateString()}</p>
          <p><strong>Genre :</strong> {patient.genre}</p>
          <p><strong>Groupe sanguin :</strong> {patient.groupe_sanguin}</p>
          <p><strong>Téléphone :</strong> {patient.tel}</p>
          <p><strong>Email :</strong> {patient.email}</p>
        </div>

        {hospitalisation && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">🏥 Hospitalisation</h2>
            <p><strong>Service :</strong> {hospitalisation.service_id}</p>
            <p><strong>Chambre :</strong> {hospitalisation.chambre}</p>
            <p><strong>Date d'entrée :</strong> {new Date(hospitalisation.date_entree).toLocaleDateString()}</p>
            <p><strong>Date de sortie :</strong> {hospitalisation.date_sortie ? new Date(hospitalisation.date_sortie).toLocaleDateString() : "En cours"}</p>
            <p><strong>Traitement :</strong> {hospitalisation.traitement}</p>
          </div>
        )}
      </section>

      <footer className="mt-16 text-center text-gray-500 text-sm animate-fadeInUp">
        &copy; {new Date().getFullYear()} NovaCore CRM - Tous droits réservés.
      </footer>
    </main>
  );
}
