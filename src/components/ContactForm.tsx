"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // Ici tu pourras intégrer ton API plus tard
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h2 className="text-2xl font-bold text-primary">Nous Contacter</h2>

      <input
        type="text"
        placeholder="Votre nom complet"
        required
        className="input-field"
      />

      <input
        type="email"
        placeholder="Votre adresse email"
        required
        className="input-field"
      />

      <textarea
        placeholder="Votre message..."
        required
        className="input-field h-32"
      ></textarea>

      <button
        type="submit"
        className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition"
      >
        Envoyer
      </button>

      {submitted && (
        <div className="text-green-600 font-semibold mt-4">
          ✅ Message envoyé avec succès !
        </div>
      )}
    </form>
  );
}
