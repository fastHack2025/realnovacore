"use client";

import { useState } from "react";

export default function RDVForm() {
  const [formData, setFormData] = useState({ name: "", date: "", time: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("RDV pris :", formData);
    // 🚀 Ici tu peux envoyer à un backend ou Google Calendar API
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-pink-600 text-center">Réserver un Rendez-vous</h2>
      <input
        type="text"
        placeholder="Votre nom"
        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-pink-300"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="date"
        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-pink-300"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
      />
      <input
        type="time"
        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-pink-300"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        required
      />
      <button type="submit" className="w-full bg-pink-600 text-white p-3 rounded-md hover:bg-pink-700">
        Réserver
      </button>
    </form>
  );
}
