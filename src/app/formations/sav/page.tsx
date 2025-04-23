// ✅ Fichier 3 : /src/app/formations/sav/page.tsx

"use client";

import Link from "next/link";
import Image from "next/image";

export default function SavPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-white bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">🎧 Formation : Service Après-Vente (SAV)</h1>
        <p className="text-gray-300 mb-8">
          Apprenez à fidéliser votre clientèle, gérer les réclamations avec professionnalisme et transformer chaque plainte en opportunité commerciale.
        </p>
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/20 text-left shadow-xl">
          <h2 className="text-2xl font-semibold text-white mb-4">🎯 Objectifs :</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 text-sm">
            <li>Gérer les réclamations avec méthode</li>
            <li>Transformer les insatisfactions en opportunités</li>
            <li>Créer un parcours post-achat mémorable</li>
          </ul>
          <h3 className="text-xl mt-6 font-medium text-white">📅 Durée : 2 semaines</h3>
          <h3 className="text-xl mb-4 font-medium text-white">💰 Tarif : 200 000 FCFA</h3>

          <Link
            href="/formations/sav/inscription"
            className="inline-block mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-semibold"
          >
            S’inscrire maintenant
          </Link>
        </div>
      </div>

      <footer className="mt-20 mb-6 text-center text-sm text-white opacity-80">
        <div className="flex flex-col items-center gap-2">
          <Image src="https://res.cloudinary.com/dko5sommz/image/upload/v1743895989/1_f3thi3.png" alt="DL Solutions" width={60} height={60} className="rounded-full" />
          <p>© Dave & Luce Solutions — <strong>Samuel OBAM made this</strong></p>
          <p>📞 +237 694 34 15 86 — +237 620 21 62 17</p>
          <p>📧 samuelobaml@dlsolutions.com</p>
        </div>
      </footer>
    </main>
  );
}
