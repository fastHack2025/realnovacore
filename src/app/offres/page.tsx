"use client";

import { useState } from "react";
import Image from "next/image";

const steps = [
  "Quel est votre secteur d'activité principal ?",
  "Quel est votre besoin le plus urgent actuellement ?",
  "Combien de clients gérez-vous chaque semaine ?",
  "Préférez-vous automatiser ou personnaliser votre relation client ?",
  "Souhaitez-vous intégrer un système de paiement ?"
];

export default function OffresPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnswer = async (value: string) => {
    const updated = [...answers, value];
    setAnswers(updated);
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setLoading(true);
      const aiResponse = await fetch("/api/assistant-devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questions: steps, answers: updated })
      });
      const data = await aiResponse.json();
      setResponse(data.result);
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-white to-indigo-50 px-6 py-16 text-gray-900">
      <div className="absolute top-6 right-6 w-36 h-36 z-10 animate-bounce">
        <Image
          src="https://res.cloudinary.com/dko5sommz/image/upload/v1745432395/helpdesk_owpjxn.gif"
          alt="Agent IA"
          width={144}
          height={144}
          className="rounded-full shadow-lg"
        />
      </div>

      <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur border border-gray-200 p-8 rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold text-indigo-700 text-center mb-6">🤖 Assistant IA — Offres & Devis</h1>
        {!response && (
          <div>
            <p className="text-sm text-gray-700 mb-4">{steps[step]}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Oui", "Non", "Automatiser", "Personnaliser", "Moins de 50", "Plus de 100", "Secteur Service", "eCommerce", "Réseaux sociaux", "Réservations", "Paiement"]
                .slice(step * 3, step * 3 + 3)
                .map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg text-sm shadow"
                  >
                    {option}
                  </button>
                ))}
            </div>
          </div>
        )}

        {loading && (
          <div className="text-center py-6 animate-pulse text-gray-600">Notre IA réfléchit à la meilleure offre pour vous...</div>
        )}

        {response && (
          <div className="mt-8 bg-indigo-50 border border-indigo-300 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-indigo-700 mb-3">🎯 Voici la solution idéale pour vous :</h2>
            <p className="text-sm whitespace-pre-line text-gray-800">{response}</p>
          </div>
        )}
      </div>
    </main>
  );
}
