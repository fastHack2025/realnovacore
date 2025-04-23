"use client";

import { useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default function SavInscription() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [moyenPaiement, setMoyenPaiement] = useState("paypal");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { error } = await supabase.from("inscriptions").insert([
      {
        nom,
        email,
        tel,
        formation: "SAV",
        moyen_paiement: moyenPaiement,
      },
    ]);

    if (error) {
      alert("❌ Erreur d'enregistrement !");
      console.error(error);
    } else {
      alert(`✅ Inscription confirmée pour ${nom} avec ${moyenPaiement}`);
      setNom("");
      setEmail("");
      setTel("");
    }
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-16 overflow-hidden">
      {/* Fond animé bulle/fleurie */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl animate-pulse-slow translate-x-[-50%] translate-y-[-50%]" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-white/5 blur-2xl animate-bounce-slow" />
      </div>

      {/* Logo flottant en fond */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 -z-10 opacity-10">
        <Image
          src="https://res.cloudinary.com/dko5sommz/image/upload/v1743895989/1_f3thi3.png"
          alt="DL Solutions"
          width={300}
          height={300}
          className="rounded-full animate-slow-float"
        />
      </div>

      <div className="max-w-xl mx-auto bg-white/10 p-8 rounded-xl border border-white/20 shadow-xl backdrop-blur">
        <h1 className="text-2xl font-bold mb-6 text-center">📝 Inscription — Formation SAV</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nom complet"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
            className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
          />
          <input
            type="tel"
            placeholder="Téléphone"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required
            className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
          />

          <label className="block mt-6 text-sm text-gray-300">Moyen de paiement :</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <PaymentIcon src="https://res.cloudinary.com/dko5sommz/image/upload/v1745424901/paypal_kecrcr.jpg" label="PayPal" value="paypal" current={moyenPaiement} set={setMoyenPaiement} />
            <PaymentIcon src="https://res.cloudinary.com/dko5sommz/image/upload/v1745424905/0f86075d899c9069b235c23b792d70ef_tg1wku.jpg" label="Carte VISA" value="visa" current={moyenPaiement} set={setMoyenPaiement} />
            <PaymentIcon src="https://res.cloudinary.com/dko5sommz/image/upload/v1745424899/mobile_money_k7d2rg.jpg" label="Mobile Money" value="momo" current={moyenPaiement} set={setMoyenPaiement} />
            <PaymentIcon src="https://res.cloudinary.com/dko5sommz/image/upload/v1745424893/orange_money_gwziqy.jpg" label="Orange Money" value="orange" current={moyenPaiement} set={setMoyenPaiement} />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 px-4 py-3 rounded text-white font-semibold"
          >
            Valider l'inscription
          </button>
        </form>
      </div>

      <footer className="mt-20 mb-6 text-center text-sm text-white/60">
        <div className="flex flex-col items-center gap-1">
          <Image
            src="https://res.cloudinary.com/dko5sommz/image/upload/v1743895989/1_f3thi3.png"
            alt="DL Solutions"
            width={60}
            height={60}
            className="rounded-full border-2 border-white bg-white p-1"
          />
          <p className="text-xs">© Dave & Luce Solutions — Samuel OBAM made this</p>
          <p className="text-xs">📞 +237 694 34 15 86 — +237 620 21 62 17</p>
          <p className="text-xs">📧 samuelobaml@dlsolutions.com</p>
        </div>
      </footer>
    </main>
  );
}

function PaymentIcon({ src, label, value, current, set }: any) {
  return (
    <div
      onClick={() => set(value)}
      className={`cursor-pointer border rounded-lg p-2 text-center w-24 h-24 flex flex-col items-center justify-center transition-all duration-200 ${current === value ? "border-green-400 bg-white/10" : "border-white/20"}`}
    >
      <div className="relative w-14 h-10">
        <Image src={src} alt={label} fill className="object-contain" />
      </div>
      <p className="text-xs mt-2 text-white text-center">{label}</p>
    </div>
  );
}
