"use client";

export default function TestimonialsDL() {
  return (
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12">Ils nous font confiance</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {["Client 1", "Client 2", "Client 3"].map((client, idx) => (
          <div key={idx} className="p-8 bg-indigo-50 rounded-3xl shadow-lg">
            <p className="text-lg italic mb-4">
              "Service exceptionnel, résultat au-delà de nos attentes."
            </p>
            <h4 className="font-bold">{client}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
