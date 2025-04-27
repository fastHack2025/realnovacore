"use client";

import { useState } from "react";

export default function CRMForm() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Client ajouté :", formData);
    // 🚀 Tu peux connecter ici une API Supabase ou autre backend
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-indigo-600 text-center">Ajouter un Client</h2>
      <input
        type="text"
        placeholder="Nom complet"
        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-300"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-300"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Société"
        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-300"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
      />
      <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700">
        Ajouter
      </button>
    </form>
  );
}
