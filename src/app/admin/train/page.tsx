"use client";
import { useState } from "react";

export default function IAFormTrain() {
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  const submitTraining = async () => {
    const res = await fetch("/api/train-gpt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, feedback }),
    });
    alert("✅ Feedback envoyé pour entraînement IA !");
    setMessage(""); setFeedback("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-xl font-bold text-indigo-600">🧠 Entraîner DAVY (retour d’intention)</h1>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message utilisateur…" className="w-full p-2 border rounded" rows={3} />
      <input value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Bonne intention attendue (ex: rdv)" className="w-full p-2 border rounded" />
      <button onClick={submitTraining} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">📤 Envoyer à l'IA</button>
    </div>
  );
}
