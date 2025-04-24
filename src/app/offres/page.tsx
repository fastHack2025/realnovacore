// ✅ src/app/offres/page.tsx — Version finale complète avec bouton & redirection dynamique

"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

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

  const handleRedirect = () => {
    const lower = response.toLowerCase();
    if (lower.includes("spa")) router.push("/offres/proposition/spa");
    else if (lower.includes("restaurant")) router.push("/offres/proposition/restaurant");
    else if (lower.includes("hôtel") || lower.includes("hotel")) router.push("/offres/proposition/hotel");
    else router.push("/offres/proposition/personnalisee");
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
            <p className="text-sm text-gray-700 mb-4 font-medium">{steps[step]}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Secteur Service", "eCommerce", "Réseaux sociaux",
                "Acquisition", "Fidélisation", "Automatisation",
                "Moins de 50", "50 à 100", "Plus de 100",
                "Automatiser", "Personnaliser", "Mixtes",
                "Oui", "Non", "À tester bientôt"]
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
          <div className="text-center py-6 animate-pulse text-gray-600 text-sm">
            ⏳ Notre IA réfléchit à la meilleure offre pour vous...
          </div>
        )}

        {response && (
          <div className="mt-8 bg-indigo-50 border border-indigo-300 p-6 rounded-xl shadow space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-indigo-700 mb-3">🎯 Voici la solution idéale pour vous :</h2>
              <p className="text-sm whitespace-pre-line text-gray-800">{response}</p>
            </div>
            <button
              onClick={handleRedirect}
              className="bg-indigo-700 hover:bg-indigo-800 text-white text-sm px-6 py-2 rounded-md"
            >
              🔗 Souscrire à cette offre
            </button>
          </div>
        )}
      </div>
    <section className="mt-20 px-4 py-12 bg-white border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold text-indigo-600 mb-4">🧠 Chat IA Démo</h2>
          <div className="bg-gray-100 rounded-lg p-4 text-left text-sm text-gray-800 h-48 overflow-y-auto space-y-2" id="iaHistory">
  <p className="italic text-gray-500">💬 Bonjour, je suis l'assistant NovaCore IA. Posez-moi une question sur nos services.</p>
</div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const input = e.currentTarget.elements.namedItem('demoMessage');
              const value = input?.value || "";
              if (!value.trim()) return;

              const res = await fetch("/api/openai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt: value })
              });

              const data = await res.json();
              const historyDiv = document.getElementById('iaHistory');
if (historyDiv) {
  const userMsg = document.createElement('p');
  userMsg.textContent = `👤 ${value}`;
  userMsg.className = 'text-gray-700';
  const aiMsg = document.createElement('p');
  aiMsg.textContent = `🤖 ${data.result || 'Merci pour votre message.'}`;
  aiMsg.className = 'text-indigo-700';
  historyDiv.appendChild(userMsg);
  historyDiv.appendChild(aiMsg);
  historyDiv.scrollTop = historyDiv.scrollHeight;
}
input.value = "";
              input.value = "";
            }}
          >
            <input
              type="text"
              name="demoMessage"
              placeholder="Votre message..."
              className="mt-4 w-full border border-gray-300 px-4 py-2 rounded-md text-sm"
            />
          </form>
        </div>
        <div className="mt-6 text-center">
    <button
      onClick={() => {
        const element = document.getElementById("iaHistory");
        if (!element) return;
        const content = element.innerText;
        const win = window.open("", "_blank");
        if (win) {
          win.document.write(`<pre style='font-family: Arial; white-space: pre-wrap;'>${content}</pre>`);
          win.document.close();
          win.print();
        }
      }}
      className="bg-indigo-600 text-white px-4 py-2 text-sm rounded-md hover:bg-indigo-700"
    >
      📄 Exporter la conversation
    </button>
  </div>
  <div className="mt-6 text-center">
    <button
      onClick={() => {
        const element = document.getElementById("iaHistory");
        if (!element) return;
        const content = element.innerText;
        const win = window.open("", "_blank");
        if (win) {
          win.document.write(`<pre style='font-family: Arial; white-space: pre-wrap;'>${content}</pre>`);
          win.document.close();
          win.print();
        }
      }}
      className="bg-indigo-600 text-white px-4 py-2 text-sm rounded-md hover:bg-indigo-700"
    >
      📄 Exporter la conversation
    </button>
  </div>
</section>
    <section className="mt-20 px-4 py-12 bg-white border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold text-indigo-600 mb-4">🧠 Chat IA Démo</h2>
          <div className="bg-gray-100 rounded-lg p-4 text-left text-sm text-gray-800 h-48 overflow-y-auto space-y-2" id="iaHistory">
  <p className="italic text-gray-500">💬 Bonjour, je suis l'assistant NovaCore IA. Posez-moi une question sur nos services.</p>
</div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const input = e.currentTarget.elements.namedItem('demoMessage');
              const value = input?.value || "";
              if (!value.trim()) return;

              const res = await fetch("/api/openai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt: value })
              });

              const data = await res.json();
              const historyDiv = document.getElementById('iaHistory');
if (historyDiv) {
  const userMsg = document.createElement('p');
  userMsg.textContent = `👤 ${value}`;
  userMsg.className = 'text-gray-700';
  const aiMsg = document.createElement('p');
  aiMsg.textContent = `🤖 ${data.result || 'Merci pour votre message.'}`;
  aiMsg.className = 'text-indigo-700';
  historyDiv.appendChild(userMsg);
  historyDiv.appendChild(aiMsg);
  historyDiv.scrollTop = historyDiv.scrollHeight;
}
input.value = "";
              input.value = "";
            }}
          >
            <input
              type="text"
              name="demoMessage"
              placeholder="Votre message..."
              className="mt-4 w-full border border-gray-300 px-4 py-2 rounded-md text-sm"
            />
          </form>
        </div>
      </section>
    </main>
  );
}
