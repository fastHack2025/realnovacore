"use client";

import { useState } from "react";

export default function PaiementForm() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Paiement initié :", amount);
    // 🚀 Connecte ici Stripe, CinetPay, ou autre API
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-green-600 text-center">Effectuer un Paiement</h2>
      <input
        type="number"
        placeholder="Montant en €"
        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-300"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700">
        Payer
      </button>
    </form>
  );
}
