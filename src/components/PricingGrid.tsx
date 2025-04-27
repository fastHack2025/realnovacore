"use client";

export default function Pricing() {
  return (
    <section id="tarifs" className="bg-gradient-to-br from-black to-gray-900 py-20 px-6 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-down">Nos Offres</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        
        {[
          { title: "Starter", price: "49€", features: ["1 Site Web", "Support 24/7", "SEO de base"] },
          { title: "Business", price: "99€", features: ["Site + CRM", "Support prioritaire", "SEO avancé"] },
          { title: "Elite VIP", price: "249€", features: ["Site + App mobile", "Support VIP 24/7", "SEO Premium", "Marketing Automation"] }
        ].map((pack, idx) => (
          <div
            key={idx}
            className="relative border border-white/10 rounded-2xl p-8 backdrop-blur-lg bg-white/5 hover:scale-105 transition-transform duration-500 hover:border-yellow-400 animate-fade-in-up"
          >
            <h3 className="text-2xl font-bold mb-4">{pack.title}</h3>
            <p className="text-4xl font-extrabold mb-6">{pack.price}</p>
            <ul className="space-y-3 text-gray-300">
              {pack.features.map((feature, i) => (
                <li key={i} className="hover:text-yellow-300">{feature}</li>
              ))}
            </ul>
            <button className="mt-8 bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-lg">
              Choisir
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
