"use client";

import { useRouter } from "next/navigation";

const modules = [
  { name: "🏨 Hôtel", path: "/crm/hotel" },
  { name: "🏥 Hôpital", path: "/crm/hopital" },
  { name: "🏠 Immobilier", path: "/crm/location" },
  { name: "📱 Community Manager", path: "/crm/community" },
  { name: "💆‍♀️ Spa & Bien-Être", path: "/crm/spa" },
  { name: "🍽️ Restaurant", path: "/crm/restaurant" },
];

export default function ChooseCRMPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 flex flex-col items-center">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold animate-fadeInUp">🧩 Choisissez votre CRM</h1>
        <p className="text-lg text-gray-600 animate-fadeInUp">Sélectionnez un module pour commencer à gérer vos activités avec NovaCore.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-zoomIn">
        {modules.map((module) => (
          <button
            key={module.name}
            onClick={() => router.push(module.path)}
            className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white rounded-lg shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400"
          >
            <h2 className="text-xl font-semibold">{module.name}</h2>
          </button>
        ))}
      </section>

      <footer className="mt-16 text-center text-gray-500 text-sm animate-fadeInUp">
        &copy; {new Date().getFullYear()} NovaCore CRM - Tous droits réservés.
      </footer>
    </main>
  );
}
