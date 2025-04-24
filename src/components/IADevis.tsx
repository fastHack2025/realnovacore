// ✅ IADevis.tsx — Assistant IA Devis personnalisé

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  "Quel est votre secteur d'activité principal ?",
  "Quel est votre objectif principal en ce moment ?",
  "Avez-vous déjà un CRM ou une méthode de suivi client ?",
  "Travaillez-vous seul ou en équipe ?",
  "Quel est votre canal de communication client principal ?",
  "Souhaitez-vous intégrer une IA dans votre gestion client ?"
];

export default function IADevis() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!input.trim()) return;
    const updated = [...answers, input.trim()];
    setAnswers(updated);
    setInput("");
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      // Génération simple d'offre ici (mock)
      const secteur = updated[0]?.toLowerCase();
      const redirect =
        secteur.includes("spa") ? "/offres/proposition/spa" :
        secteur.includes("resto") ? "/offres/proposition/restaurant" :
        secteur.includes("hotel") ? "/offres/proposition/hotel" :
        "/offres/proposition/personnalisee";
      router.push(redirect);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-20 text-center space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-700">
        🤖 Assistant IA — Offres & Devis
      </h2>

      <div className="bg-white/90 p-6 rounded-xl shadow-md">
        <p className="text-lg font-medium text-gray-800 mb-4">
          {questions[step]}
        </p>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Votre réponse..."
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          onClick={handleSubmit}
          className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          {step + 1 < questions.length ? "Suivant" : "Voir mon offre"}
        </button>
      </div>
    </div>
  );
}
