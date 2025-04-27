import React from "react";

export default function LegalPage() {
  return (
    <main className="bg-gradient-to-r from-gray-50 via-white to-gray-100 min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-5xl font-extrabold text-gray-700 mb-6 animate-fadeInUp">Mentions légales & CGV</h1>
      <div className="text-gray-600 max-w-4xl space-y-6 animate-fadeInUp">
        <p><strong>Éditeur :</strong> DL Solutions SARL - Abidjan, CI</p>
        <p><strong>Responsable de publication :</strong> Samuel Davy</p>
        <p><strong>Hébergement :</strong> Vercel Inc. - San Francisco, USA</p>
        <p><strong>Conditions Générales de Vente :</strong> Toute commande implique l'acceptation sans réserve de nos CGV disponibles sur demande.</p>
        <p><strong>Contact :</strong> contact@dlsolutions.com</p>
      </div>
    </main>
  );
}
