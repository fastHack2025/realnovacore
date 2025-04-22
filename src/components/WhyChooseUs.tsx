"use client";

export default function WhyChooseUs() {
  const raisons = [
    {
      titre: "Expertise multisectorielle",
      texte: "Nous adaptons nos outils CRM et IA à votre secteur (hôtel, restaurant, spa...).",
      image: "https://res.cloudinary.com/dko5sommz/image/upload/v1745292986/expertise_17379292_qlhqnp.png",
    },
    {
      titre: "Technologie IA avancée",
      texte: "Nos solutions IA boostent vos performances et automatisent les tâches clés.",
      image: "https://res.cloudinary.com/dko5sommz/image/upload/v1745209256/technologie_IA_m8jkdl.avif",
    },
    {
      titre: "Expérience client optimisée",
      texte: "Nous plaçons l’humain et l’expérience client au centre de votre stratégie.",
      image: "https://res.cloudinary.com/dko5sommz/image/upload/v1745209256/customer_experience_ao2jcg.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 md:px-20 bg-gradient-to-br from-indigo-50 to-white text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12 uppercase">POURQUOI NOUS CHOISIR ?</h2>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto">
        {raisons.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img
              src={item.image}
              alt={item.titre}
              className="mx-auto mb-6 w-24 h-24 object-contain bg-white rounded-full p-2 shadow"
            />
            <h3 className="text-xl font-semibold text-center mb-2">{item.titre}</h3>
            <p className="text-sm text-center text-gray-600">{item.texte}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
