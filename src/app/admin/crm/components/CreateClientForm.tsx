"use client";

import { useState } from "react";

export default function CreateClientForm() {
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/crm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    setName("");
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Nom du client"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
        required
      />
      <button
        type="submit"
        className="bg-primary text-white px-6 py-3 rounded-lg hover:glow transition-all"
      >
        Ajouter Client
      </button>
    </form>
  );
}
