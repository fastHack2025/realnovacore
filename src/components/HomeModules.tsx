// ✅ Composant final "Modules puissants NovaCore"

import Link from "next/link";

const modules = [
  { label: "🧠 Assistant IA", href: "/offres" },
  { label: "📅 Prise de rendez-vous", href: "/rdv" },
  { label: "🎓 Formations Pro", href: "/formations" },
  { label: "🧾 Suivi client CRM", href: "/crm" },
  { label: "📦 Offres & Devis IA", href: "/offres/proposition/personnalisee" },
  { label: "📊 Dashboard Admin", href: "/admin/dashboard" },
  { label: "📑 Logs & Exports", href: "/admin/logs" },
];

export default function ModulesNovaCore() {
  return (
    <section className="py-16 px-6 bg-white dark:bg-black text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          🚀 Les modules puissants de <span className="text-indigo-600">NovaCore</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <Link href={mod.href} key={i}>
              <div className="p-6 border rounded-xl shadow hover:shadow-lg hover:scale-105 transition duration-200 cursor-pointer bg-white/80 dark:bg-white/10 backdrop-blur-md">
                <p className="text-lg font-medium text-center">{mod.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
