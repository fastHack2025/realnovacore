// ✅ page.tsx — version debug pour contact avec logs OpenAI & Supabase

"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactDL() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: ""
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [aiResponse, setAIResponse] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log("Tentative d'envoi du formulaire :", form);

    const { error: insertError } = await supabase.from("contacts").insert([form]);
    if (insertError) {
      console.error("Erreur Supabase INSERT :", insertError);
      setError("❌ Une erreur est survenue. Veuillez réessayer.");
      return;
    }

    setSuccess(true);
    setForm({ nom: "", email: "", sujet: "", message: "" });

    try {
      const prompt = `Un client du secteur \"${form.sujet}\" a écrit : ${form.message}`;
      console.log("Prompt envoyé à OpenAI :", prompt);

      const res = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });

      const data = await res.json();
      console.log("Réponse OpenAI :", data);
      setAIResponse(data.result || "Merci pour votre message, notre équipe reviendra vers vous bientôt.");
    } catch (err) {
      console.error("Erreur OpenAI :", err);
      setAIResponse("(Réponse IA indisponible pour le moment)");
    }
  };

  return (
    <main className="min-h-screen px-6 py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-sky-700 mb-6">📨 Contactez Dave & Luce Solutions</h1>

        {success ? (
          <>
            <div className="text-green-600 font-medium text-center mb-6">
              ✅ Message envoyé avec succès. Nous reviendrons vers vous très bientôt.
            </div>
            {aiResponse && (
              <div className="bg-sky-50 border border-sky-200 p-4 rounded-md text-sm text-gray-700">
                <strong>Réponse IA :</strong>
                <p className="mt-1 whitespace-pre-line">{aiResponse}</p>
              </div>
            )}
          </>
        ) : (
          <div className="grid gap-4">
            <input type="text" name="nom" value={form.nom} onChange={handleChange} placeholder="Votre nom" className="border p-2 rounded-md" />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Votre email" className="border p-2 rounded-md" />
            <input type="text" name="sujet" value={form.sujet} onChange={handleChange} placeholder="Sujet du message" className="border p-2 rounded-md" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Votre message..." rows={5} className="border p-2 rounded-md" />
            <button onClick={handleSubmit} className="bg-sky-600 text-white px-6 py-2 rounded-md hover:bg-sky-700">
              Envoyer
            </button>
          </div>
        )}

        {error && <div className="text-red-600 text-sm mt-4">{error}</div>}

        <div className="mt-10 text-sm text-gray-600 border-t pt-6">
          <p><strong>📍 Adresse : </strong> École de Police, Yaoundé</p>
          <p><strong>📞 Téléphone : </strong> +237 694 34 15 86</p>
          <p><strong>📧 Email : </strong> samuelobaml@dlsolutions.com</p>
          <p><strong>🌐 Site : </strong> www.dlsolutions.com</p>
        </div>
      </div>
    </main>
  );
}
