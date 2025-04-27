"use client";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 text-center px-6">
      <h2 className="text-3xl md:text-5xl font-bold mb-10 text-gray-900">Pourquoi choisir NovaCore ?</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-gray-700">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">Innovation IA</h3>
          <p>Notre intelligence artificielle s’adapte à vos besoins pour propulser votre business.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">Flexibilité totale</h3>
          <p>Des solutions modulaires et évolutives pour toute taille d’entreprise.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">Support 5 étoiles</h3>
          <p>Notre équipe d’experts vous accompagne 24h/24 et 7j/7.</p>
        </div>
      </div>
    </section>
  );
}
