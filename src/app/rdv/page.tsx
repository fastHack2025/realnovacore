import React from "react";

export default function RDVPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-4 md:px-20">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Prendre Rendez-vous</h1>
        <p className="text-lg text-gray-600">Choisissez votre créneau en quelques clics.</p>
      </section>
      <div className="max-w-2xl mx-auto">
        <form className="bg-gray-50 p-8 rounded-lg shadow space-y-6">
          <input type="text" placeholder="Votre nom" className="input-field" required />
          <input type="email" placeholder="Votre email" className="input-field" required />
          <input type="date" className="input-field" required />
          <textarea placeholder="Notes supplémentaires" className="input-field h-32"></textarea>
          <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition">
            Confirmer le RDV
          </button>
        </form>
      </div>
    </main>
  );
}
