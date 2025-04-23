"use client";

import { useState } from "react";

export default function PaiementAdminPage() {
  const [payPal, setPayPal] = useState("paypal@dlsolutions.com");
  const [momo, setMomo] = useState("+237 6 XX XX XX XX");
  const [orange, setOrange] = useState("+237 6 YY YY YY YY");
  const [visa, setVisa] = useState("DL VISA - XXXXXXXXXXXX");

  const handleSave = (e: any) => {
    e.preventDefault();
    alert("✅ Comptes mis à jour");
    // TODO: Enregistrement via Supabase (à connecter)
  };

  return (
    <main className="min-h-screen px-6 py-16 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-3xl mx-auto bg-white/10 border border-white/20 rounded-xl p-8 backdrop-blur shadow-xl">
        <h1 className="text-3xl font-bold mb-8">💼 Configuration des comptes de paiement</h1>

        <form onSubmit={handleSave} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">🅿️ Compte PayPal :</label>
            <input
              type="email"
              className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
              value={payPal}
              onChange={(e) => setPayPal(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">📱 Numéro Mobile Money :</label>
            <input
              type="text"
              className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
              value={momo}
              onChange={(e) => setMomo(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">📲 Numéro Orange Money :</label>
            <input
              type="text"
              className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
              value={orange}
              onChange={(e) => setOrange(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">💳 Carte VISA / Identifiant :</label>
            <input
              type="text"
              className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
              value={visa}
              onChange={(e) => setVisa(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded text-white font-semibold"
          >
            Enregistrer les paramètres
          </button>
        </form>
      </div>

      <footer className="mt-20 text-center text-sm text-white opacity-80">
        <p>© Dave & Luce Solutions — <strong>Samuel OBAM made this</strong></p>
        <p>📞 +237 694 34 15 86 — +237 620 21 62 17</p>
        <p>📧 samuelobaml@dlsolutions.com</p>
      </footer>
    </main>
  );
}
