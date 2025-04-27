"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const services = [
  { nom: "Urgences", description: "24h/24 avec équipes mobiles." },
  { nom: "Pédiatrie", description: "Soins enfants et nouveau-nés." },
  { nom: "Chirurgie", description: "Bloc opératoire + soins post-op." },
];

export default function ServicesPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-indigo-700 mb-6">🏥 Services Hospitaliers</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>{s.nom}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{s.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
