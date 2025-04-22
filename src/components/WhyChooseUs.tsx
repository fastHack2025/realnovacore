"use client";

export default function WhyChooseUs() {
  const data = [
    {
      title: "Excellence en relation client",
      description: "Nos stratégies sont centrées sur la satisfaction et la fidélisation de votre clientèle.",
      image: "https://res.cloudinary.com/dko5sommz/image/upload/v1745288097/positive-customer_blue_1_h0pqsn.png",
    },
    {
      title: "Technologies de pointe",
      description: "Nous utilisons l’IA pour automatiser, analyser et booster votre performance commerciale.",
      image: "https://res.cloudinary.com/dko5sommz/image/upload/v1745288097/ai-tech-blue-icon-concept_1_krzyyc.png",
    },
    {
      title: "Expertise multisectorielle",
      description: "Expérience avérée dans les secteurs hôtellerie, bien-être, restauration, immobilier…",
      image: "https://res.cloudinary.com/dko5sommz/image/upload/v1745287934/expertise-blue-gradient-concept-icon-vector-41920225_f3fy6s.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 md:px-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Pourquoi nous choisir</h2>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl text-center transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="mx-auto mb-6 w-28 h-28 object-contain"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
